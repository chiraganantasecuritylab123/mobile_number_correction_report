import PDFDocument from "pdfkit-next";
import { PAGE_HEIGHT, PAGE_WIDTH } from "./constants";
import { PdfDebugLogger } from "./logger";
import { renderSliceOnDocument } from "./sliceRenderer";
import type { CapturedPageSlice } from "./types";

type PdfDocumentInstance = InstanceType<typeof PDFDocument>;

export async function assemblePdfFromSlices(
  slices: CapturedPageSlice[],
  logger = new PdfDebugLogger(),
): Promise<Buffer> {
  if (slices.length === 0) {
    throw new Error("Cannot assemble PDF: no page slices provided.");
  }

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: [PAGE_WIDTH, PAGE_HEIGHT],
      margin: 0,
      autoFirstPage: false,
      compress: true,
      info: {
        Title: "Mobile Number Correction Report",
        Author: "Astro Aarambh",
      },
    });

    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    slices.forEach((slice, index) => {
      const imageBytes = Buffer.from(slice.imageBase64, "base64");
      if (imageBytes.length < 512) {
        logger.log({
          type: "warning",
          message: `Slice "${slice.label}" has a suspiciously small image buffer (${imageBytes.length} bytes).`,
        });
      }
      renderSliceOnDocument(doc as never, slice, imageBytes, logger, index);
    });

    doc.end();
  });
}

export function drawWrappedText(
  doc: PdfDocumentInstance,
  text: string,
  x: number,
  y: number,
  options: {
    width: number;
    lineGap?: number;
    align?: "left" | "center" | "right" | "justify";
  },
): number {
  doc.text(text, x, y, {
    width: options.width,
    lineGap: options.lineGap ?? 2,
    align: options.align ?? "left",
  });
  return doc.y;
}

export function registerReportFonts(
  doc: PdfDocumentInstance,
  fontPaths: { regular?: string; bold?: string; body?: string },
): void {
  if (fontPaths.regular) {
    doc.registerFont("ReportRegular", fontPaths.regular);
  }
  if (fontPaths.bold) {
    doc.registerFont("ReportBold", fontPaths.bold);
  }
  if (fontPaths.body) {
    doc.registerFont("ReportBody", fontPaths.body);
  }
}

export { PdfDebugLogger };
