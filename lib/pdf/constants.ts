/** A4 at 96 DPI — matches ReportPageShell */
export const PAGE_WIDTH = 794;
export const PAGE_HEIGHT = 1123;

export const PDF_MARGINS = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
} as const;

export const CONTENT_WIDTH =
  PAGE_WIDTH - PDF_MARGINS.left - PDF_MARGINS.right;

export const CONTENT_HEIGHT =
  PAGE_HEIGHT - PDF_MARGINS.top - PDF_MARGINS.bottom;

export const CAPTURE_PIXEL_RATIO = 2;
export const CAPTURE_JPEG_QUALITY = 0.92;

/** Only split a page when content exceeds PAGE_HEIGHT by more than this amount. */
export const OVERFLOW_SLICE_THRESHOLD_PX = 24;

export const REPORT_PAGE_SELECTOR = "[data-report-page]";
export const REPORT_SLICE_SELECTOR = "[data-pdf-slice]";
export const REPORT_FILENAME = "mobile-number-correction-report.pdf";

export const REPORT_COLORS = {
  cream: "#fdf5e6",
  brown: "#5d2e17",
} as const;

export const PDF_DEBUG =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_PDF_DEBUG === "true";
