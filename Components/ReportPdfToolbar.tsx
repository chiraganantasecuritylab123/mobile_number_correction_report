"use client";

import { Download, Eye, Loader2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type PdfPreviewModule = typeof import("react-pdf");

export default function ReportPdfToolbar({
  reportTitle = "Mobile Number Correction Report",
  reportDescription = "Export uses pdfkit-next with automatic overflow page breaks",
  language = "en",
  onToggleLanguage,
}: {
  reportTitle?: string;
  reportDescription?: string;
  language?: "en" | "hi";
  onToggleLanguage?: () => void;
}) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [pdfPreview, setPdfPreview] = useState<PdfPreviewModule | null>(null);

  useEffect(() => {
    void import("react-pdf").then(async (module) => {
      const { pdfjs } = module;
      // Must match react-pdf's pdfjs API version (not a newer top-level pdfjs-dist).
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setPdfPreview(module);
    });
  }, []);

  const closePreview = useCallback(() => {
    setIsPreviewOpen(false);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setNumPages(0);
  }, [previewUrl]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleDownload = async () => {
    setError(null);
    setIsDownloading(true);
    try {
      const { downloadReportPdf } = await import("@/lib/pdf/reportPdf");
      await downloadReportPdf();
    } catch (downloadError) {
      const message =
        downloadError instanceof Error
          ? downloadError.message
          : "Failed to generate PDF.";
      setError(message);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = async () => {
    setError(null);
    setIsDownloading(true);
    try {
      const { previewReportPdfBlob } = await import("@/lib/pdf/reportPdf");
      const blob = await previewReportPdfBlob();
      const url = URL.createObjectURL(blob);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(url);
      setIsPreviewOpen(true);
    } catch (previewError) {
      const message =
        previewError instanceof Error
          ? previewError.message
          : "Failed to preview PDF.";
      setError(message);
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closePreview, isPreviewOpen]);

  const PdfDocument = pdfPreview?.Document;
  const PdfPage = pdfPreview?.Page;

  return (
    <>
      <div
        className="sticky top-0 z-50 w-full border-b border-[#b8860b]/30 bg-[#fdf5e6]/95 px-6 py-3 backdrop-blur-sm"
        data-pdf-ignore="true"
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#5d2e17]">{reportTitle}</p>
            <p className="text-xs text-[#5d2e17]/70">{reportDescription}</p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => void handlePreview()}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 rounded-md border border-[#b8860b]/40 bg-white px-3 py-2 text-sm font-medium text-[#5d2e17] transition hover:bg-[#fff8eb] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isDownloading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Eye size={16} />
              )}
              Preview PDF
            </button>

            <button
              type="button"
              onClick={() => void handleDownload()}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 rounded-md bg-[#5d2e17] px-3 py-2 text-sm font-medium text-[#fdf5e6] transition hover:bg-[#4a2412] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isDownloading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              Download PDF
            </button>

            <button
              type="button"
              onClick={onToggleLanguage}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 rounded-md border border-[#b8860b]/40 bg-[#fff8eb] px-3 py-2 text-sm font-semibold text-[#5d2e17] transition hover:bg-[#f6e7c8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="text-[#b8860b]">🌐</span>
              {language === "en" ? "हिंदी" : "English"}
            </button>
          </div>
        </div>

        {error ? (
          <p className="mx-auto mt-2 max-w-5xl text-xs text-red-700">{error}</p>
        ) : null}
      </div>

      {isPreviewOpen && previewUrl ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-[#fdf5e6] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#b8860b]/30 px-4 py-3">
              <h2 className="text-sm font-semibold text-[#5d2e17]">PDF Preview</h2>
              <button
                type="button"
                onClick={closePreview}
                className="rounded p-1 text-[#5d2e17] hover:bg-[#efe2cf]"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-4 py-4">
              {PdfDocument && PdfPage ? (
                <PdfDocument
                  file={previewUrl}
                  onLoadSuccess={({ numPages: loadedPages }) =>
                    setNumPages(loadedPages)
                  }
                  loading={
                    <div className="flex items-center justify-center py-16 text-sm text-[#5d2e17]">
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Loading PDF preview...
                    </div>
                  }
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <PdfPage
                      key={`preview-page-${index + 1}`}
                      pageNumber={index + 1}
                      width={760}
                      className="mb-4 shadow-md"
                    />
                  ))}
                </PdfDocument>
              ) : (
                <div className="flex items-center justify-center py-16 text-sm text-[#5d2e17]">
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Initializing PDF viewer...
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
