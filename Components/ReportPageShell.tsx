import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { cinzel } from "@/app/fonts";

/** A4 at 96 DPI — 210mm × 297mm */
export const PAGE_WIDTH = 794;
export const PAGE_HEIGHT = 1123;
export const COVER_BG_PATH = "/assets/cover-bg.png";

export const REPORT_COLORS = {
  cream: "#fdf5e6",
  brown: "#5d2e17",
  gold: "#b8860b",
  goldLight: "#d4af37",
};

type ReportPageShellProps = {
  children: ReactNode;
  width?: number;
  height?: number;
  padding?: string;
  style?: CSSProperties;
};

export default function ReportPageShell({
  children,
  width = PAGE_WIDTH,
  height = PAGE_HEIGHT,
  padding = "50px 40px 36px",
  style,
}: ReportPageShellProps) {
  return (
    <article
      className={`relative mx-auto overflow-hidden shadow-xl bg-[url('/assets/cover-bg.png')] bg-cover bg-center bg-no-repeat ${cinzel.className}`}
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
      </div>
    </article>
  );
}
