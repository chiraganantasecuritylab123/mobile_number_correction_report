import type { Browser } from "puppeteer";

export type RenderReportPagesOptions = {
  pageWidthPx?: number;
  pageHeightPx?: number;
  sharedStyles?: string;
};

const DEFAULT_WIDTH = 794;
const DEFAULT_HEIGHT = 1123;

let browserPromise: Promise<Browser> | null = null;

async function getBrowser(): Promise<Browser> {
  if (!browserPromise) {
    const puppeteer = await import("puppeteer");
    browserPromise = puppeteer.default.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--font-render-hinting=none",
      ],
    });
  }

  return browserPromise;
}

function buildHtmlDocument(pages: string[], sharedStyles: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>${sharedStyles}</style>
  </head>
  <body>
    ${pages.join("\n")}
  </body>
</html>`;
}

export async function renderReportPagesToPdf(
  pages: string[],
  options: RenderReportPagesOptions = {},
): Promise<Buffer> {
  if (pages.length === 0) {
    throw new Error("No pages provided for PDF rendering.");
  }

  const pageWidthPx = options.pageWidthPx ?? DEFAULT_WIDTH;
  const pageHeightPx = options.pageHeightPx ?? DEFAULT_HEIGHT;
  const sharedStyles = options.sharedStyles ?? "";

  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    await page.setViewport({
      width: pageWidthPx,
      height: pageHeightPx,
      deviceScaleFactor: 1,
    });

    const html = buildHtmlDocument(pages, sharedStyles);

    await page.setContent(html, {
      waitUntil: "load",
      timeout: 90_000,
    });

    await page.evaluate(async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
    });

    const pdf = await page.pdf({
      width: `${pageWidthPx}px`,
      height: `${pageHeightPx}px`,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    return Buffer.from(pdf);
  } finally {
    await page.close();
  }
}

export async function renderReportHtmlToPdf(
  html: string,
  options: RenderReportPagesOptions = {},
): Promise<Buffer> {
  return renderReportPagesToPdf(
    [`<div class="html-report-page">${html}</div>`],
    options,
  );
}

export function safePdfFilename(filename: string, fallback = "report.pdf"): string {
  const trimmed = filename.trim();
  if (!trimmed) {
    return fallback;
  }

  const sanitized = trimmed.replace(/[^a-zA-Z0-9._-]+/g, "_");
  return sanitized.toLowerCase().endsWith(".pdf") ? sanitized : `${sanitized}.pdf`;
}
