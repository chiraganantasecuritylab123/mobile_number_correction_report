import {
  Brain,
  Briefcase,
  Flower2,
  Hand,
  Heart,
  PersonStanding,
  Scale,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { LotusIcon } from "./CoverPageDecorations";
import {
  AvailabilityRing,
  MiniGridHighlight,
  MissingRing,
  PresentDot,
  SectionDiamondTitle,
} from "./LoshuGridDecorations";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { CoverLotus, Pattern3 } from "./CommunComponents";
import FooterSummaryBanner from "./FooterSummaryBanner";

export type LoshuGridCell = {
  number: number;
  present: boolean;
  subNumbers: string[];
  label: string;
};

export type PlaneRow = {
  name: string;
  subtitle: string;
  icon: LucideIcon;
  highlightedCells: number[];
  gridLayout?: "2x3" | "3x3";
  numbers: string;
  presentCount: number;
  totalCount: number;
  percentage: number;
  represents: string;
};

export type LoshuGridProps = {
  whatIsText?: string;
  howToReadItems?: { icon: React.ReactNode; text: string }[];
  gridCells?: LoshuGridCell[][];
  planes?: PlaneRow[];
  footerSummary?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const defaultGridCells: LoshuGridCell[][] = [
  [
    { number: 4, present: true, subNumbers: ["14", "23"], label: "Wealth" },
    { number: 9, present: true, subNumbers: ["18", "27"], label: "Wisdom" },
    { number: 2, present: false, subNumbers: ["02", "11", "20", "29"], label: "Relationships" },
  ],
  [
    { number: 3, present: false, subNumbers: ["03", "12", "21", "30"], label: "Creativity" },
    { number: 5, present: true, subNumbers: ["05", "14", "23"], label: "Balance" },
    { number: 7, present: true, subNumbers: ["07", "16", "25"], label: "Intuition" },
  ],
  [
    { number: 8, present: true, subNumbers: ["08", "17", "26"], label: "Power" },
    { number: 1, present: true, subNumbers: ["01", "10", "19", "28"], label: "Leadership" },
    { number: 6, present: false, subNumbers: ["06", "15", "24"], label: "Responsibility" },
  ],
];

const defaultPlanes: PlaneRow[] = [
  {
    name: "Mental Plane",
    subtitle: "Intellect & Thinking",
    icon: Brain,
    gridLayout: "2x3",
    highlightedCells: [0, 1, 2],
    numbers: "4, 9, 2",
    presentCount: 2,
    totalCount: 3,
    percentage: 67,
    represents: "How you think, analyse and process information.",
  },
  {
    name: "Emotional Plane",
    subtitle: "Feelings & Sensitivity",
    icon: Heart,
    gridLayout: "2x3",
    highlightedCells: [4],
    numbers: "3, 5, 7",
    presentCount: 1,
    totalCount: 3,
    percentage: 33,
    represents: "How you feel, empathise and connect emotionally.",
  },
  {
    name: "Practical Plane",
    subtitle: "Action & Material World",
    icon: Briefcase,
    gridLayout: "2x3",
    highlightedCells: [3, 4, 5],
    numbers: "8, 1, 6",
    presentCount: 2,
    totalCount: 3,
    percentage: 67,
    represents: "How you execute plans and handle daily responsibilities.",
  },
  {
    name: "Thought Plane",
    subtitle: "Ideas & Vision",
    icon: Target,
    gridLayout: "3x3",
    highlightedCells: [0, 3, 6],
    numbers: "4, 3, 8",
    presentCount: 2,
    totalCount: 3,
    percentage: 67,
    represents: "Your capacity for planning and long-term vision.",
  },
  {
    name: "Will Plane",
    subtitle: "Determination & Drive",
    icon: Hand,
    gridLayout: "3x3",
    highlightedCells: [1, 4, 7],
    numbers: "9, 5, 1",
    presentCount: 3,
    totalCount: 3,
    percentage: 100,
    represents: "Your inner strength, focus and persistence.",
  },
  {
    name: "Action Plane",
    subtitle: "Execution & Movement",
    icon: PersonStanding,
    gridLayout: "3x3",
    highlightedCells: [2, 5, 8],
    numbers: "2, 7, 6",
    presentCount: 3,
    totalCount: 3,
    percentage: 100,
    represents: "Your ability to take decisive action and move forward.",
  },
  {
    name: "Silver Success Plane",
    subtitle: "Material Achievement",
    icon: Flower2,
    gridLayout: "3x3",
    highlightedCells: [0, 4, 8],
    numbers: "4, 5, 6",
    presentCount: 2,
    totalCount: 3,
    percentage: 67,
    represents: "Potential for steady, grounded material success.",
  },
  {
    name: "Golden Success Plane",
    subtitle: "Spiritual Growth",
    icon: Trophy,
    gridLayout: "3x3",
    highlightedCells: [2, 4, 6],
    numbers: "2, 5, 8",
    presentCount: 2,
    totalCount: 3,
    percentage: 67,
    represents: "Potential for higher wisdom and spiritual fulfilment.",
  },
];

const defaultHowToRead = [
  { icon: <PresentDot />, text: "Repeated numbers = Stronger energy" },
  { icon: <MissingRing />, text: "Missing numbers = Areas for growth" },
  { icon: <Scale size={30} style={{ color: COLORS.gold }} />, text: "Balanced grid = Harmony" },
  { icon: <Brain size={30} style={{ color: COLORS.gold }} />, text: "Numbers show tendencies, not destiny" },
];

function GoldBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md ${className}`}
      style={{
        border: "1px solid #b8860b",
        backgroundColor: "rgba(253, 245, 230, 0.72)",
      }}
    >
      {children}
    </div>
  );
}

const LO_SHU_GRID_WIDTH = 382;
const LO_SHU_GRID_HEIGHT = 280;
const LO_SHU_GRID_INSET = {
  top: 20,
  right: 14,
  bottom: 20,
  left: 14,
} as const;

function GridCellView({ cell }: { cell: LoshuGridCell }) {
  return (
    <div className="flex max-w-full flex-col items-center justify-center  text-center">
      <div
        className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[18px] font-bold leading-none"
        style={{
          border: cell.present ? "1.5px solid #d48e31" : "1.5px dashed #c45c3e",
          color: COLORS.brown,
          backgroundColor: cell.present ? "rgba(212, 142, 49, 0.12)" : "transparent",
        }}
      >
        {cell.number}
      </div>
      <p
        className="max-w-[108px] text-center text-[8.5px] leading-[1.15]"
        style={{ color: COLORS.brown, opacity: 0.8 }}
      >
        {cell.subNumbers.join(", ")}
      </p>
      <p
        className="text-center text-[9px] italic leading-none"
        style={{ color: COLORS.gold }}
      >
        ({cell.label})
      </p>
    </div>
  );
}

const PLANE_ACCENT = "#D9822B";
const PLANE_TEXT = "#3c2f2f";
const PLANE_HEADER_TEXT = "#4a4a4a";
const PLANE_ROW_CREAM = "#FFF9F2";
const PLANE_ROW_BEIGE = "#F9F1E7";
const PLANE_TABLE_STYLE = {
  border: "1px solid #EAD0AC",
  borderRadius: "10px",
  overflow: "hidden",
} as const;

const TEXT_UPPER = { textTransform: "uppercase" } as const;

function planeGridClass(layout: "2x3" | "3x3" = "3x3") {
  return layout === "2x3" ? "h-8 w-12" : "h-12 w-12";
}

function PlaneIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon size={14} strokeWidth={1.75} style={{ color: PLANE_ACCENT, flexShrink: 0 }} />;
}

export default function LoshuGrid({
  whatIsText = "The Lo Shu Grid is a 3×3 magic square used in Chinese numerology. Each cell represents a life aspect. Numbers from your date of birth are mapped into the grid to reveal strengths, gaps and energetic balance.",
  howToReadItems = defaultHowToRead,
  gridCells = defaultGridCells,
  planes = defaultPlanes,
  footerSummary = "A balanced grid across all 8 planes leads to a harmonious life. Use this insight to strengthen weaker areas and amplify your natural strengths.",
  pageNumber = "03",
}: LoshuGridProps) {
  return (
    <ReportPageShell padding="20px 28px 0">

      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/ganesha-logo.png"
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-2"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={50} />
          <p className="text-[16px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="text-[40px] font-bold" style={{ color: COLORS.brown, lineHeight: "1.2" }}>
          PLANE DETAILS
        </h1>
        <p className="text-[14px]" style={{ color: '#213247', opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}>
          Lo Shu Grid Analysis & Planes of Expression
        </p>
      </header>
      {/* Section 1: Lo Shu Grid */}
      <section className="mt-4 font-nunito-sans">
        <SectionDiamondTitle>1. LO SHU GRID (DATE OF BIRTH ONLY)</SectionDiamondTitle>
        <div className="mt-2 grid grid-cols-[1.1fr_1fr] gap-2">
          <div className="relative">
            <div
              className="relative"
              style={{ width: LO_SHU_GRID_WIDTH, height: LO_SHU_GRID_HEIGHT }}
            >
              <Image
                src="/assets/loshu-grid/loshugrid-fram.png"
                alt="Lo Shu Grid Frame"
                fill
                className="object-fill"
                sizes={`${LO_SHU_GRID_WIDTH}px`}
              />
              <div
                className="absolute grid grid-cols-3 grid-rows-3"
                style={{
                  top: LO_SHU_GRID_INSET.top,
                  right: LO_SHU_GRID_INSET.right,
                  bottom: LO_SHU_GRID_INSET.bottom,
                  left: LO_SHU_GRID_INSET.left,
                  gridTemplateRows: "repeat(3, minmax(0, 1fr))",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                }}
              >
                {gridCells.flat().map((cell) => (
                  <div
                    key={cell.number}
                    className="flex min-h-0 min-w-0 items-center justify-center"
                  >
                    <GridCellView cell={cell} />
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex items-center gap-4 ">
              <div className="mt-1 flex items-center gap-4 px-5 border-2 rounded-md p-1 border-[#F4E0C0] w-max-content mx-auto">
                <div className="flex items-center gap-1.5">
                  <PresentDot className="w-3 h-3" />
                  <span className="text-[8px]" style={{ color: COLORS.brown }}>
                    Present Numbers
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MissingRing className="w-3 h-3" />
                  <span className="text-[8px]" style={{ color: COLORS.brown }}>
                    Missing Numbers
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <GoldBox className="p-2.5">
              <div className="flex items-center gap-2">
                <CoverLotus size={30} />
                <p
                  className="text-[12px] font-bold tracking-wider"
                  style={{ color: '#5d2e17' }}
                >
                  WHAT IS THE LO SHU GRID?
                </p>
              </div>
              <p className="text-[10px] leading-snug" style={{ color: COLORS.brown, opacity: 0.9 }}>
                {whatIsText}
              </p>
            </GoldBox>
            <GoldBox className="p-2.5">
              <div className="flex items-center gap-2">
                <CoverLotus size={30} />
                <p
                  className="text-[12px] font-bold tracking-wider"
                  style={{ color: '#5d2e17' }}
                >
                  HOW TO READ YOUR GRID
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 ml-1">
                {howToReadItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 mb-1">
                    <span className="w-5 h-5 flex items-center justify-center shrink-0">{item.icon}</span>
                    <span className="text-[10px] leading-snug" style={{ color: COLORS.brown }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </GoldBox>
          </div>
        </div>
      </section>

      {/* Section 2: Planes of Expression */}
      <section className="mt-4 font-nunito-sans">
        <SectionDiamondTitle>2. PLANES OF EXPRESSION (WILL PLANES)</SectionDiamondTitle>

        <div className="mt-2" style={PLANE_TABLE_STYLE}>
          <table className="w-full text-left border-collapse [&_th]:border [&_td]:border [&_th]:border-[#EAD0AC] [&_td]:border-[#EAD0AC]">
            <colgroup>
              <col style={{ width: "22%" }} />
              <col style={{ width: "11%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "31%" }} />
            </colgroup>
            <thead>
              <tr style={{ borderBottom: "1px solid #E8D4B8" }}>
                {[
                  { label: "PLANE", align: "left" as const },
                  { label: "LOCATION IN GRID", align: "center" as const },
                  { label: "NUMBERS", align: "center" as const },
                  { label: "HOW MANY PRESENT", align: "center" as const },
                  { label: "AVAILABILITY (%)", align: "center" as const },
                  { label: "REPRESENTS", align: "left" as const },
                ].map((heading) => (
                  <th
                    key={heading.label}
                    className="px-2 py-2 text-[9px] font-bold tracking-[0.08em]"
                    style={{
                      color: PLANE_HEADER_TEXT,
                      textAlign: heading.align,
                      ...TEXT_UPPER,
                    }}
                  >
                    {heading.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planes.map((plane, index) => (
                <tr
                  key={plane.name}
                  style={{
                    borderBottom:
                      index < planes.length - 1 ? "1px solid #EFE2CF" : "none",
                  }}
                >
                  <td className="px-2 py-1 align-top">
                    <div className="flex items-start gap-1.5">
                      <PlaneIcon icon={plane.icon} />
                      <div>
                        <p
                          className="text-[9px] font-bold leading-tight"
                          style={{ color: PLANE_ACCENT }}
                        >
                          {index + 1}. {plane.name}
                        </p>
                        <p
                          className="mt-0.5 text-[9px] leading-snug"
                          style={{ color: PLANE_TEXT, opacity: 0.75 }}
                        >
                          ({plane.subtitle})
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 align-middle text-center">
                    <div className="flex justify-center">
                      <MiniGridHighlight
                        highlighted={plane.highlightedCells}
                        layout={plane.gridLayout ?? "3x3"}
                        className={planeGridClass(plane.gridLayout ?? "3x3")}
                      />
                    </div>
                  </td>
                  <td className="px-2 py-1 align-middle text-center text-[9px] font-semibold"
                    style={{ color: PLANE_TEXT }}
                  >
                    {plane.numbers}
                  </td>
                  <td className="px-2 py-1 align-middle text-center text-[9px] font-medium"
                    style={{ color: PLANE_TEXT }}
                  >
                    {plane.presentCount} of {plane.totalCount}
                  </td>
                  <td className="px-2 py-1 align-middle">
                    <div className="flex justify-center">
                      <AvailabilityRing percentage={plane.percentage} className="h-9 w-9" />
                    </div>
                  </td>
                  <td className="px-2 py-1 align-top text-[9px] leading-snug"
                    style={{ color: PLANE_TEXT, opacity: 0.9 }}
                  >
                    {plane.represents}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <footer className="relative z-10 mt-2 flex justify-center px-2 pb-1">
        <FooterSummaryBanner summary={footerSummary} />
      </footer>
    </ReportPageShell>
  );
}
