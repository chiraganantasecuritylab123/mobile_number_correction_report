import { PAGE_HEIGHT_PX, PAGE_WIDTH_PX } from "./constants";

function toAbsoluteUrl(value: string, origin: string): string {
  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  if (value.startsWith("//")) {
    return `${window.location.protocol}${value}`;
  }

  if (value.startsWith("/")) {
    return `${origin}${value}`;
  }

  return new URL(value, origin).href;
}

async function inlineImageSrc(img: HTMLImageElement, origin: string): Promise<void> {
  const src = img.currentSrc || img.getAttribute("src");
  if (!src || src.startsWith("data:")) {
    return;
  }

  const absolute = toAbsoluteUrl(src, origin);
  img.setAttribute("src", absolute);

  if (img.loading === "lazy") {
    img.loading = "eager";
  }

  if (!img.complete || img.naturalWidth === 0) {
    await new Promise<void>((resolve) => {
      img.addEventListener("load", () => resolve(), { once: true });
      img.addEventListener("error", () => resolve(), { once: true });
    });
  }
}

function absolutizeInlineStyleUrls(element: HTMLElement, origin: string): void {
  const style = element.getAttribute("style");
  if (!style?.includes("url(")) {
    return;
  }

  const updated = style.replace(
    /url\((["']?)([^"')]+)\1\)/g,
    (_full, quote: string, rawUrl: string) =>
      `url(${quote}${toAbsoluteUrl(rawUrl, origin)}${quote})`,
  );

  element.setAttribute("style", updated);
}

function absolutizeTreeUrls(root: HTMLElement, origin: string): void {
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>("*"))];

  for (const element of elements) {
    absolutizeInlineStyleUrls(element, origin);

    if (element.tagName === "IMG") {
      const img = element as HTMLImageElement;
      const src = img.getAttribute("src");
      if (src && !src.startsWith("data:")) {
        img.setAttribute("src", toAbsoluteUrl(src, origin));
      }
    }

    const srcset = element.getAttribute("srcset");
    if (srcset) {
      const absoluteSrcset = srcset
        .split(",")
        .map((entry) => {
          const trimmed = entry.trim();
          const [url, descriptor] = trimmed.split(/\s+/, 2);
          const absolute = toAbsoluteUrl(url, origin);
          return descriptor ? `${absolute} ${descriptor}` : absolute;
        })
        .join(", ");
      element.setAttribute("srcset", absoluteSrcset);
    }
  }
}

async function preloadBackgroundImages(root: HTMLElement, origin: string): Promise<void> {
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>("*"))];
  const urls = new Set<string>();

  for (const element of elements) {
    const background = window.getComputedStyle(element).backgroundImage;
    if (!background || background === "none") {
      continue;
    }

    for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      urls.add(toAbsoluteUrl(match[1], origin));
    }
  }

  await Promise.all(
    [...urls].map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        }),
    ),
  );
}

/**
 * Clones a report page element into a lightweight HTML shell.
 * CSS is supplied separately via `sharedStyles` — not duplicated per page.
 */
export async function buildPageShell(
  element: HTMLElement,
  origin: string,
): Promise<string> {
  const clone = element.cloneNode(true) as HTMLElement;

  clone.classList.remove("mx-auto", "shadow-xl");
  clone.style.margin = "0";
  clone.style.boxShadow = "none";
  clone.style.width = `${PAGE_WIDTH_PX}px`;
  clone.style.minWidth = `${PAGE_WIDTH_PX}px`;
  clone.style.maxWidth = `${PAGE_WIDTH_PX}px`;
  clone.style.height = `${PAGE_HEIGHT_PX}px`;
  clone.style.minHeight = `${PAGE_HEIGHT_PX}px`;
  clone.style.maxHeight = `${PAGE_HEIGHT_PX}px`;
  clone.style.overflow = "hidden";

  absolutizeTreeUrls(clone, origin);

  const images = Array.from(clone.querySelectorAll<HTMLImageElement>("img"));
  await Promise.all(images.map((img) => inlineImageSrc(img, origin)));
  await preloadBackgroundImages(clone, origin);

  return `<div class="html-report-page">${clone.outerHTML}</div>`;
}

export async function waitForReportAssets(): Promise<void> {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, 500);
  });
}
