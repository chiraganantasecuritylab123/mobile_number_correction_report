"use client";

import type { ReactNode, ReactElement } from "react";
import dynamic from "next/dynamic";
import { useState, Children, cloneElement, isValidElement } from "react";

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
  reportTitle = "Rinn Mukti Report",
  reportDescription = "Karmic debt and financial blockage analysis report",
}: {
  children: ReactNode;
  reportTitle?: string;
  reportDescription?: string;
}) {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  // Properly clone children and pass language prop
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<{ language: "en" | "hi" }>, { language });
    }
    return child;
  });

  return (
    <>
      <ReportPdfToolbar
        reportTitle={reportTitle}
        reportDescription={reportDescription}
        language={language}
        onToggleLanguage={() => setLanguage((current) => (current === "en" ? "hi" : "en"))}
      />
      <div className="flex min-h-full flex-col items-center gap-10 bg-[#d4cfc7] p-8 pt-6">
        {childrenWithProps}
      </div>
    </>
  );
}
