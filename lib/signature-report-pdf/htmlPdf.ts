import { PAGE_HEIGHT_PX, PAGE_WIDTH_PX } from "../html-report-pdf/constants";
import {
  downloadReportPdfFromHtml,
  previewReportPdfFromHtml,
} from "../html-report-pdf/download";

const API_PATH = "/api/signature-report-pdf";

export function buildSignatureReportFilename(clientName?: string): string {
  const slug = (clientName || "report")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `signature-analysis-${slug || "report"}.pdf`;
}

export async function downloadSignatureReportPdfFromHtml(
  clientName?: string,
): Promise<void> {
  await downloadReportPdfFromHtml({
    apiPath: API_PATH,
    filename: buildSignatureReportFilename(clientName),
    pageWidthPx: PAGE_WIDTH_PX,
    pageHeightPx: PAGE_HEIGHT_PX,
  });
}

export async function previewSignatureReportPdfFromHtml(
  clientName?: string,
): Promise<Blob> {
  return previewReportPdfFromHtml({
    apiPath: API_PATH,
    filename: buildSignatureReportFilename(clientName),
    pageWidthPx: PAGE_WIDTH_PX,
    pageHeightPx: PAGE_HEIGHT_PX,
  });
}
