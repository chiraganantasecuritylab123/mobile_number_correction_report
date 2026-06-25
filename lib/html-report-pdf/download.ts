"use client";

import {
  MAX_HTML_PAYLOAD_CHARS,
  PAGE_HEIGHT_PX,
  PAGE_WIDTH_PX,
  REPORT_PAGE_SELECTOR,
  REPORT_PDF_TIMEOUT_MS,
} from "./constants";
import { buildPageShell, waitForReportAssets } from "./pageShell";
import {
  buildSharedStyles,
  extractDocumentStyles,
  inlineFontsAsDataUris,
} from "./styleExtractor";

export type DownloadReportPdfFromHtmlOptions = {
  apiPath: string;
  filename: string;
  pageSelector?: string;
  pageWidthPx?: number;
  pageHeightPx?: number;
};

function triggerBlobDownload(data: ArrayBuffer, filename: string): void {
  const blob = new Blob([data], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function parseApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Failed to generate PDF.";
}

export async function downloadReportPdfFromHtml({
  apiPath,
  filename,
  pageSelector = REPORT_PAGE_SELECTOR,
  pageWidthPx = PAGE_WIDTH_PX,
  pageHeightPx = PAGE_HEIGHT_PX,
}: DownloadReportPdfFromHtmlOptions): Promise<void> {
  const origin = window.location.origin;

  const pageElements = Array.from(
    document.querySelectorAll<HTMLElement>(pageSelector),
  );

  if (pageElements.length === 0) {
    throw new Error(
      "No report pages found. Make sure the report preview is fully visible before downloading.",
    );
  }

  await waitForReportAssets();

  const rawCss = await extractDocumentStyles();
  const preparedCss = await inlineFontsAsDataUris(rawCss, origin);
  const sharedStyles = buildSharedStyles(preparedCss, origin);

  const pages = await Promise.all(
    pageElements.map((element) => buildPageShell(element, origin)),
  );

  const payloadSize = pages.join("").length + sharedStyles.length;
  if (payloadSize > MAX_HTML_PAYLOAD_CHARS) {
    throw new Error("Report HTML payload is too large to export.");
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REPORT_PDF_TIMEOUT_MS);

  try {
    const response = await fetch(apiPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pages,
        sharedStyles,
        filename,
        pageWidthPx,
        pageHeightPx,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `PDF export failed (${response.status}).`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/pdf")) {
      throw new Error("Server did not return a PDF file.");
    }

    const data = await response.arrayBuffer();
    triggerBlobDownload(data, filename);
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("PDF export timed out. Please try again.");
    }
    throw new Error(parseApiError(error));
  } finally {
    window.clearTimeout(timeout);
  }
}

export async function previewReportPdfFromHtml(
  options: DownloadReportPdfFromHtmlOptions,
): Promise<Blob> {
  const origin = window.location.origin;
  const pageSelector = options.pageSelector ?? REPORT_PAGE_SELECTOR;

  const pageElements = Array.from(
    document.querySelectorAll<HTMLElement>(pageSelector),
  );

  if (pageElements.length === 0) {
    throw new Error("No report pages found.");
  }

  await waitForReportAssets();

  const rawCss = await extractDocumentStyles();
  const preparedCss = await inlineFontsAsDataUris(rawCss, origin);
  const sharedStyles = buildSharedStyles(preparedCss, origin);
  const pages = await Promise.all(
    pageElements.map((element) => buildPageShell(element, origin)),
  );

  const response = await fetch(options.apiPath, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pages,
      sharedStyles,
      filename: options.filename,
      pageWidthPx: options.pageWidthPx ?? PAGE_WIDTH_PX,
      pageHeightPx: options.pageHeightPx ?? PAGE_HEIGHT_PX,
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.blob();
}
