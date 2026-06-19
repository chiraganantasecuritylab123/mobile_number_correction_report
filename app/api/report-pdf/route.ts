import { NextResponse } from "next/server";
import { PDF_DEBUG } from "@/lib/pdf/constants";
import { assemblePdfFromSlices, PdfDebugLogger } from "@/lib/pdf/pdfAssembler";
import type { PdfAssemblyPayload } from "@/lib/pdf/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as PdfAssemblyPayload;
    const logger = new PdfDebugLogger();

    if (!payload.pages?.length) {
      return NextResponse.json(
        { error: "No pages provided for PDF assembly." },
        { status: 400 },
      );
    }

    for (const page of payload.pages) {
      if (!page.imageBase64 || page.width <= 0 || page.height <= 0) {
        return NextResponse.json(
          { error: `Invalid slice payload for "${page.label}".` },
          { status: 400 },
        );
      }
    }

    const pdfBuffer = await assemblePdfFromSlices(payload.pages, logger);

    const headers: Record<string, string> = {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="mobile-number-correction-report.pdf"',
      "Cache-Control": "no-store",
    };

    if (PDF_DEBUG || payload.debug) {
      headers["X-PDF-Debug-Log"] = JSON.stringify(logger.getEvents());
    }

    return new NextResponse(new Uint8Array(pdfBuffer), { headers });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown PDF assembly error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
