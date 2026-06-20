import { PAGE_HEIGHT, PAGE_WIDTH, PDF_MARGINS } from "./constants";
import { PdfDebugLogger } from "./logger";
import type { CapturedPageSlice } from "./types";

export type PdfSliceDocument = {
  addPage: (options: { size: number[]; margin: number }) => void;
  image: (
    src: unknown,
    x: number,
    y: number,
    options: { width: number; height: number },
  ) => void;
};

export function renderSliceOnDocument(
  doc: PdfSliceDocument,
  slice: CapturedPageSlice,
  imageBytes: Uint8Array | Buffer,
  logger: PdfDebugLogger,
  index: number,
): void {
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
  }

  logger.log({
    type: "render_start",
    element: slice.label,
    pageIndex: slice.pageIndex,
    sliceIndex: slice.sliceIndex,
  });

  doc.addPage({
    size: [PAGE_WIDTH, PAGE_HEIGHT],
    margin: 0,
  });

  const drawHeight = Math.min(slice.height, PAGE_HEIGHT);
  const drawWidth = Math.min(slice.width, PAGE_WIDTH);

  if (drawWidth > PAGE_WIDTH || drawHeight > PAGE_HEIGHT) {
    logger.log({
      type: "bounds_warning",
      element: slice.label,
      message: "Slice exceeds PDF page bounds — clamping dimensions",
      width: drawWidth,
      height: drawHeight,
    });
  }

  doc.image(imageBytes, PDF_MARGINS.left, PDF_MARGINS.top, {
    width: drawWidth,
    height: drawHeight,
  });

  logger.log({
    type: "render_complete",
    element: slice.label,
    pageIndex: slice.pageIndex,
    sliceIndex: slice.sliceIndex,
    width: drawWidth,
    height: drawHeight,
  });
}
