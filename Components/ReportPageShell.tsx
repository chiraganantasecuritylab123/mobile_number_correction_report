import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/** A4 at 96 DPI — 210mm × 297mm */
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
};

export default function ReportPageShell({
  children,
  width = PAGE_WIDTH,
  height = PAGE_HEIGHT,
  padding = "50px 40px 36px",
  style,
  pageNumber = "01",
}: ReportPageShellProps) {
  return (
    <article
      className="relative mx-auto overflow-hidden shadow-xl bg-[url('/assets/cover-bg.png')] bg-cover bg-center bg-no-repeat font-cinzel"
      style={{
        width,
        height,
        color: REPORT_COLORS.brown,
        ...style,
      }}
    >
      {/* <Image
        src={COVER_BG_PATH}
        alt=""
        fill
        sizes={`${width}px`}
        className="pointer-events-none object-fill select-none"
        priority
      /> */}
      <div className="relative z-10 h-full overflow-hidden" style={{ padding }}>
        {children}

        {/* <div className="absolute bottom-0 left-0 w-full">
          <Image src="/assets/bottom-pattern.png" alt="Page Footer Bar" className="absolute bottom-0 left-0 w-full" width={1500} height={20} />
          <p className="text-[20px] leading-relaxed"
            style={{
              color: REPORT_COLORS.brown,
              opacity: 0.85,
              fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif",
              fontWeight: "bold",
              position: "absolute",
              bottom: "14px",
              left: "calc(50% - 4px)",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}>
            {pageNumber}
          </p>
        </div> */}
      </div>
    </article>
  );
}
