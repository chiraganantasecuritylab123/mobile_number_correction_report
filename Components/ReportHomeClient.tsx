"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

const ReportPdfToolbar = dynamic(() => import("@/Components/ReportPdfToolbar"), {
  ssr: false,
  loading: () => (
    <div className="sticky top-0 z-50 w-full border-b border-[#b8860b]/30 bg-[#fdf5e6]/95 px-6 py-3 text-sm text-[#5d2e17]">
      Loading report tools...
    </div>
  ),
});

export default function ReportHomeClient({
  children,
  reportTitle = "Mobile Number Correction Report",
  reportDescription = "Export uses pdfkit-next with automatic overflow page breaks",
}: {
  children: ReactNode;
  reportTitle?: string;
  reportDescription?: string;
}) {
  return (
    <>
      <ReportPdfToolbar
        reportTitle={reportTitle}
        reportDescription={reportDescription}
      />
      <div className="flex min-h-full flex-col items-center gap-10 bg-[#d4cfc7] p-8 pt-6">
        {children}
      </div>
    </>
  );
}
