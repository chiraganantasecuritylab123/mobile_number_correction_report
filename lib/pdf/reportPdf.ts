"use client";

import { assemblePdfBlobInBrowser } from "./browserPdfAssembler";
import { REPORT_FILENAME } from "./constants";
import { captureAllReportPages, PdfDebugLogger } from "./pageCapture";
import type { CapturedPageSlice } from "./types";

export { REPORT_PAGE_SELECTOR } from "./constants";
export { PdfDebugLogger } from "./logger";

async function assemblePdfOnServer(
  pages: CapturedPageSlice[],
  logger: PdfDebugLogger,
): Promise<Blob> {
  const response = await fetch("/api/report-pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pages, debug: true }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || "PDF assembly failed on the server.");
  }

  const serverLogs = response.headers.get("x-pdf-debug-log");
  if (serverLogs) {
    try {
      const events = JSON.parse(serverLogs) as unknown[];
      events.forEach((event) => logger.log(event as never));
    } catch {
      logger.log({
        type: "warning",
        message: "Could not parse server PDF debug log header.",
      });
    }
  }

  return response.blob();
}

export async function generateReportPdfBlob(
  logger = new PdfDebugLogger(),
): Promise<Blob> {
  const slices = await captureAllReportPages(logger);

  try {
    return await assemblePdfOnServer(slices, logger);
  } catch (serverError) {
    logger.log({
      type: "warning",
      message:
        serverError instanceof Error
          ? `Server pdfkit-next assembly unavailable (${serverError.message}); using browser jsPDF fallback.`
          : "Server pdfkit-next assembly unavailable; using browser jsPDF fallback.",
    });
    return assemblePdfBlobInBrowser(slices, logger);
  }
}

export async function downloadReportPdf(
  filename = REPORT_FILENAME,
  logger = new PdfDebugLogger(),
): Promise<void> {
  const blob = await generateReportPdfBlob(logger);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

export async function previewReportPdfBlob(
  logger = new PdfDebugLogger(),
): Promise<Blob> {
  return generateReportPdfBlob(logger);
}
