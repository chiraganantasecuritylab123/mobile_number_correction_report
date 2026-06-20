export type PdfLogEvent =
  | {
      type: "page_break";
      reason: string;
      element: string;
      pageIndex: number;
      sliceIndex?: number;
    }
  | {
      type: "render_start";
      element: string;
      pageIndex: number;
      sliceIndex: number;
    }
  | {
      type: "render_complete";
      element: string;
      pageIndex: number;
      sliceIndex: number;
      width: number;
      height: number;
    }
  | {
      type: "overflow_detected";
      element: string;
      scrollHeight: number;
      pageHeight: number;
      slices: number;
    }
  | {
      type: "bounds_warning";
      element: string;
      message: string;
      width: number;
      height: number;
    }
  | { type: "image_loaded"; src: string }
  | { type: "warning"; message: string };

export type CapturedPageSlice = {
  label: string;
  pageIndex: number;
  sliceIndex: number;
  totalSlices: number;
  width: number;
  height: number;
  imageBase64: string;
  mimeType: "image/jpeg" | "image/png";
};

export type PdfAssemblyPayload = {
  pages: CapturedPageSlice[];
  debug?: boolean;
};

export type ContentBounds = {
  width: number;
  height: number;
  exceedsWidth: boolean;
  exceedsHeight: boolean;
};
