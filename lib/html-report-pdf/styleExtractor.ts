import { PAGE_HEIGHT_PX, PAGE_WIDTH_PX } from "./constants";

function blobToDataUri(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function fetchAsDataUri(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) {
      return null;
    }
    return blobToDataUri(await response.blob());
  } catch {
    return null;
  }
}

/**
 * Collects inline `<style>` blocks and linked stylesheet contents from the live document.
 */
export async function extractDocumentStyles(): Promise<string> {
  const chunks: string[] = [];

  for (const styleEl of document.querySelectorAll("style")) {
    if (styleEl.textContent?.trim()) {
      chunks.push(styleEl.textContent);
    }
  }

  const links = Array.from(
    document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'),
  );

  await Promise.all(
    links.map(async (link) => {
      const href = link.href;
      if (!href) {
        return;
      }
      try {
        const response = await fetch(href, { cache: "force-cache" });
        if (response.ok) {
          chunks.push(await response.text());
        }
      } catch {
        // Ignore cross-origin or blocked stylesheets.
      }
    }),
  );

  return chunks.join("\n");
}

/**
 * Replaces font `url(...)` references in CSS with inlined data URIs so Puppeteer
 * can render fonts without external network requests.
 */
export async function inlineFontsAsDataUris(
  css: string,
  origin: string,
): Promise<string> {
  const urlPattern = /url\((["']?)([^"')]+)\1\)/g;
  const uniqueUrls = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = urlPattern.exec(css)) !== null) {
    const url = match[2];
    if (!url.startsWith("data:")) {
      uniqueUrls.add(url);
    }
  }

  let prepared = css;

  await Promise.all(
    [...uniqueUrls].map(async (rawUrl) => {
      const absolute = rawUrl.startsWith("http")
        ? rawUrl
        : new URL(rawUrl, origin).href;

      const dataUri = await fetchAsDataUri(absolute);
      if (!dataUri) {
        return;
      }

      const escaped = rawUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      prepared = prepared.replace(
        new RegExp(`url\\((["']?)${escaped}\\1\\)`, "g"),
        `url(${dataUri})`,
      );
    }),
  );

  return prepared;
}

export function buildSharedStyles(css: string, _origin: string): string {
  return `
    @page {
      size: ${PAGE_WIDTH_PX}px ${PAGE_HEIGHT_PX}px;
      margin: 0;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #fdf5e6;
    }

    .html-report-page {
      width: ${PAGE_WIDTH_PX}px;
      height: ${PAGE_HEIGHT_PX}px;
      overflow: hidden;
      page-break-after: always;
      break-after: page;
      position: relative;
      margin: 0;
      padding: 0;
      background-color: #fdf5e6;
    }

    .html-report-page:last-child {
      page-break-after: auto;
      break-after: auto;
    }

    img {
      max-width: 100%;
    }

    ${css}
  `;
}
