import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH, REPORT_COLORS } from "../ReportPageShell";

export { PAGE_HEIGHT, PAGE_WIDTH, REPORT_COLORS };

const COVER_BG = "/assets/cover-bg.png";

type PalmReadingReportPageShellProps = {
  children: ReactNode;
  width?: number;
  height?: number;
  padding?: string;
  style?: CSSProperties;
  pageNumber?: string;
  pageLabel?: string;
};

export default function PalmReadingReportPageShell({
  children,
  width = PAGE_WIDTH,
  height = PAGE_HEIGHT,
  padding = "18px 36px 28px",
  style,
  pageNumber = "02",
  pageLabel,
}: PalmReadingReportPageShellProps) {
  const resolvedLabel = pageLabel ?? `palm-reading-page-${pageNumber}`;

  return (
    <article
      data-report-page
      data-page-label={resolvedLabel}
      data-report-page-number={pageNumber}
      className="relative mx-auto overflow-hidden shadow-xl font-cinzel"
      style={{
        width,
        minHeight: height,
        height,
        color: REPORT_COLORS.brown,
        ...style,
      }}
    >
      <Image
        src={COVER_BG}
        alt=""
        fill
        sizes={`${width}px`}
        className="pointer-events-none select-none object-fill"
        aria-hidden
      />
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
