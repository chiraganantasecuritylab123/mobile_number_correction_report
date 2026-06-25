import type { CSSProperties, ReactNode } from "react";

export const PAGE_WIDTH = 794;
export const PAGE_HEIGHT = 1123;
export const COVER_BG_PATH = "/assets/cover-bg.png";

export const REPORT_COLORS = {
  cream: "#fdf5e6",
  brown: "#5d2e17",
  gold: "#b8860b",
  goldLight: "#d4af37",
  green: "#2d7a4f",
  red: "#a84432",
  black: "#000000",
};

type ReportPageShellProps = {
  children: ReactNode;
  width?: number;
  height?: number;
  padding?: string;
  style?: CSSProperties;
  pageNumber?: string;
  /** Stable identifier used in PDF export logs */
  pageLabel?: string;
};

export default function SignatureReportPageShell({
  children,
  width = PAGE_WIDTH,
  height = PAGE_HEIGHT,
  padding = "50px 40px 36px",
  style,
  pageNumber = "01",
  pageLabel,
}: ReportPageShellProps) {
  const resolvedLabel = pageLabel ?? `signature-page-${pageNumber}`;

  return (
    <article
      data-report-page
      data-page-label={resolvedLabel}
      data-report-page-number={pageNumber}
      id={pageNumber}
      className="relative mx-auto overflow-hidden shadow-xl bg-[url('/assets/signatureReport/signature-cover-page.png')] bg-cover bg-center bg-no-repeat font-cinzel"
      style={{
        width,
        minHeight: height,
        height,
        color: REPORT_COLORS.brown,
        ...style,
      }}
    >
      <div
        data-report-page-inner
        className="relative z-10 h-full overflow-hidden"
        style={{ padding }}
      >
        {children}
      </div>
    </article>
  );
}
