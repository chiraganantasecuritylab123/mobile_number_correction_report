import { jsPDF } from "jspdf";
import { PAGE_HEIGHT, PAGE_WIDTH, PDF_MARGINS } from "./constants";
import { PdfDebugLogger } from "./logger";
import type { CapturedPageSlice } from "./types";

/**
 * Assembles captured page images into a PDF using jsPDF in the browser.
 * Used as the client fallback because pdfkit-next ships an empty
 * pdfkit.standalone.js (0 bytes) in npm — browser PDFKit import fails.
 */
export function assemblePdfBlobInBrowser(
  slices: CapturedPageSlice[],
  logger = new PdfDebugLogger(),
): Blob {
  if (slices.length === 0) {
    throw new Error("Cannot assemble PDF: no page slices provided.");
  }

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [PAGE_WIDTH, PAGE_HEIGHT],
    compress: true,
  });

  slices.forEach((slice, index) => {
    if (index > 0) {
      logger.log({
        type: "page_break",
        reason:
          slice.sliceIndex > 0
            ? "pdf_overflow_continuation"
            : "pdf_new_report_page",
        element: slice.label,
        pageIndex: slice.pageIndex,
        sliceIndex: slice.sliceIndex,
      });
      pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT], "portrait");
    }

    logger.log({
      type: "render_start",
      element: slice.label,
      pageIndex: slice.pageIndex,
      sliceIndex: slice.sliceIndex,
    });

    const drawHeight = Math.min(slice.height, PAGE_HEIGHT);
    const drawWidth = Math.min(slice.width, PAGE_WIDTH);

    pdf.addImage(
      `data:${slice.mimeType};base64,${slice.imageBase64}`,
      slice.mimeType === "image/png" ? "PNG" : "JPEG",
      PDF_MARGINS.left,
      PDF_MARGINS.top,
      drawWidth,
      drawHeight,
    );

    logger.log({
      type: "render_complete",
      element: slice.label,
      pageIndex: slice.pageIndex,
      sliceIndex: slice.sliceIndex,
      width: drawWidth,
      height: drawHeight,
    });
  });

  return pdf.output("blob");
}

export { PdfDebugLogger };
