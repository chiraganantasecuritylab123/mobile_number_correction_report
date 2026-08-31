import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH, REPORT_COLORS } from "../ReportPageShell";
import { Pattern3 } from "../CommunComponents";

export { PAGE_HEIGHT, PAGE_WIDTH, REPORT_COLORS };

const COVER_BG = "/assets/cover-bg.png";
const LOGO = "/assets/ganesha-logo.png";
const PATTERN2 = "/assets/cover/pattern-2.png";

const SECTION_BAR = {
  maroon: "#4a0e0e",
  maroonDeep: "#3a0a0a",
} as const;

const PAGE_HEADER = {
  maroon: "#4a0e0e",
  gold: "#A96505",
} as const;

/** Shared brand header — logo + ASTRO AARAMBH + subtitle + ornament (Wealth design). */
export function PalmReadingPageHeader() {
  return (
    <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
      <Image
        src={LOGO}
        alt="Astro Aarambh"
        width={58}
        height={58}
        className="mb-0.5"
        priority
      />
      <h1
        className="text-[22px] font-bold leading-none tracking-[0.08em]"
        style={{ color: PAGE_HEADER.maroon }}
      >
        ASTRO AARAMBH
      </h1>
      <p
        className="mt-0.5 text-[11px] font-bold tracking-[0.06em]"
        style={{ color: PAGE_HEADER.gold }}
      >
        PREMIUM PALM READING REPORT
      </p>
      <div className="mt-0.5">
        <div className="relative flex items-center justify-center" style={{ width: 200 }}>
          <Image
            src={PATTERN2}
            alt=""
            width={200}
            height={24}
            className="h-auto w-full object-contain"
            aria-hidden
          />
        </div>
      </div>
    </header>
  );
}

/** Shared page title bar — same size/style across all palm reading report pages. */
export function PalmReadingSectionBar({
  title,
  subtitle,
  iconSrc,
  icon,
  minWidth = 420,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  iconSrc?: string;
  icon?: ReactNode;
  minWidth?: number;
}) {
  return (
    <div className="relative mx-auto mt-2 flex w-full max-w-[640px] items-center justify-center">
      <Pattern3 size={72} className="absolute left-[-6px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${SECTION_BAR.maroon} 0%, ${SECTION_BAR.maroonDeep} 100%)`,
          minWidth,
        }}
      >
        <div
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          {iconSrc ? (
            <div className="relative h-[22px] w-[22px]">
              <Image
                src={iconSrc}
                alt=""
                fill
                sizes="22px"
                className="object-contain"
                unoptimized
              />
            </div>
          ) : (
            icon
          )}
        </div>
        {subtitle ? (
          <div className="min-w-0">
            <p className="text-[13px] font-bold leading-none tracking-[0.06em] text-[#f6e6c4]">
              {title}
            </p>
            <p className="mt-0.5 text-[11px] font-semibold tracking-[0.04em] text-[#f6e6c4]/85">
              {subtitle}
            </p>
          </div>
        ) : (
          <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">{title}</p>
        )}
      </div>
      <Pattern3 size={72} className="absolute right-[-6px] rotate-180 opacity-90" />
    </div>
  );
}

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
