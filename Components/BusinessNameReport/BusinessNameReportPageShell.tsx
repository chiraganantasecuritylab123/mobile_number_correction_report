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
};

export default function BusinessNameReportPageShell({
  children,
  width = PAGE_WIDTH,
  height = PAGE_HEIGHT,
  padding = "50px 40px 36px",
  style,
  pageNumber,
}: ReportPageShellProps) {
  return (
    <article
      id={pageNumber ?? ""}
      className="relative mx-auto overflow-hidden shadow-xl bg-[url('/assets/cover-bg.png')] bg-cover bg-center bg-no-repeat font-cinzel"
      style={{
        width,
        height,
        color: REPORT_COLORS.brown,
        ...style,
      }}
    >
      <div className="relative z-10 h-full overflow-hidden" id={pageNumber} style={{ padding }}>
        {children}
      </div>
    </article>
  );
}
