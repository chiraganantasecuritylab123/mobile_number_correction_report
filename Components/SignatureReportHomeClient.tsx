"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

const SignatureReportPdfToolbar = dynamic(
  () => import("@/Components/SignatureReportPdfToolbar"),
  {
    ssr: false,
    loading: () => (
      <div className="sticky top-0 z-50 w-full border-b border-[#b8860b]/30 bg-[#fdf5e6]/95 px-6 py-3 text-sm text-[#5d2e17]">
        Loading PDF tools...
      </div>
    ),
  },
);

export default function SignatureReportHomeClient({
  children,
  reportTitle = "Signature Analysis Report",
  reportDescription = "HTML-to-PDF export with selectable text and preserved layout",
  clientName,
}: {
  children: ReactNode;
  reportTitle?: string;
  reportDescription?: string;
  clientName?: string;
}) {
  return (
    <>
      <SignatureReportPdfToolbar
        reportTitle={reportTitle}
        reportDescription={reportDescription}
        clientName={clientName}
      />
      <div className="flex min-h-full flex-col items-center gap-10 bg-[#d4cfc7] p-8 pt-6">
        {children}
      </div>
    </>
  );
}
