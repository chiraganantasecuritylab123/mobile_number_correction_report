import { NextResponse } from "next/server";
import { MAX_HTML_PAYLOAD_CHARS, PAGE_HEIGHT_PX, PAGE_WIDTH_PX } from "@/lib/html-report-pdf/constants";
import {
  renderReportHtmlToPdf,
  renderReportPagesToPdf,
  safePdfFilename,
} from "@/lib/pdf/htmlPdfRenderer";

export const runtime = "nodejs";
export const maxDuration = 120;

type SignatureReportPdfBody = {
  pages?: unknown;
  html?: unknown;
  sharedStyles?: unknown;
  filename?: unknown;
  pageWidthPx?: unknown;
  pageHeightPx?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SignatureReportPdfBody;

    const filename = safePdfFilename(
      typeof body.filename === "string" ? body.filename : "signature-analysis-report.pdf",
    );

    const pagesRaw = body.pages;
    const pages =
      Array.isArray(pagesRaw) && pagesRaw.every((page) => typeof page === "string")
        ? (pagesRaw as string[]).filter((page) => page.trim())
        : [];

    const html = typeof body.html === "string" ? body.html : "";

    if (pages.length === 0 && !html.trim()) {
      return NextResponse.json({ error: "html or pages is required" }, { status: 400 });
    }

    const payloadSize = pages.length > 0 ? pages.join("").length : html.length;
    if (payloadSize > MAX_HTML_PAYLOAD_CHARS) {
      return NextResponse.json({ error: "html payload is too large" }, { status: 400 });
    }

    const pageWidthPx =
      typeof body.pageWidthPx === "number" && body.pageWidthPx > 0
        ? body.pageWidthPx
        : PAGE_WIDTH_PX;

    const pageHeightPx =
      typeof body.pageHeightPx === "number" && body.pageHeightPx > 0
        ? body.pageHeightPx
        : PAGE_HEIGHT_PX;

    const sharedStyles =
      typeof body.sharedStyles === "string" && body.sharedStyles.trim()
        ? body.sharedStyles
        : "";

    const renderOpts = { pageWidthPx, pageHeightPx, sharedStyles };

    const pdfBuffer =
      pages.length > 0
        ? await renderReportPagesToPdf(pages, renderOpts)
        : await renderReportHtmlToPdf(html, renderOpts);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": String(pdfBuffer.length),
        "Cache-Control": "no-store",
        "X-PDF-Page-Count": String(pages.length || 1),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "PDF generation failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
