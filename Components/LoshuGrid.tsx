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
    highlightedCells: [3, 4, 5],
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
    highlightedCells: [6, 7, 8],
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
  { icon: <Scale size={10} style={{ color: COLORS.gold }} />, text: "Balanced grid = Harmony" },
  { icon: <Brain size={10} style={{ color: COLORS.gold }} />, text: "Numbers show tendencies, not destiny" },
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

function GridCellView({ cell }: { cell: LoshuGridCell }) {
  return (
    <div
      className="flex flex-col items-center justify-start px-1 py-2 text-center"
      style={{ border: "1px solid rgba(184, 134, 11, 0.45)" }}
    >
      <div
        className="mb-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold"
        style={{
          border: cell.present ? "1.5px solid #d48e31" : "1.5px dashed #c45c3e",
          color: COLORS.brown,
          backgroundColor: cell.present ? "rgba(212, 142, 49, 0.12)" : "transparent",
        }}
      >
        {cell.number}
      </div>
      <p className="text-[6px] leading-tight" style={{ color: COLORS.brown, opacity: 0.8 }}>
        {cell.subNumbers.join(", ")}
      </p>
      <p className="mt-0.5 text-[6px] italic" style={{ color: COLORS.gold }}>
        ({cell.label})
      </p>
    </div>
  );
}

function PlaneIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon size={12} strokeWidth={1.75} style={{ color: COLORS.gold, flexShrink: 0 }} />;
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
    <ReportPageShell padding="118px 28px 0">
      <header className="flex flex-col items-center text-center">
        <p className="text-[8px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
          ASTRO AARAMBH
        </p>
        <h1 className="mt-1 text-[20px] font-bold tracking-wide" style={{ color: COLORS.brown }}>
          LO SHU GRID
        </h1>
        <p className="mt-1 text-[9px] italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Lo Shu Grid Analysis &amp; Planes of Expression
        </p>
      </header>

      {/* Section 1: Lo Shu Grid */}
      <section className="mt-4">
        <SectionDiamondTitle>1. LO SHU GRID (DATE OF BIRTH ONLY)</SectionDiamondTitle>

        <div className="mt-2 grid grid-cols-[1.1fr_1fr] gap-2">
          <div>
            <div className="grid grid-cols-3">
              {gridCells.flat().map((cell) => (
                <GridCellView key={cell.number} cell={cell} />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <PresentDot />
                <span className="text-[7px]" style={{ color: COLORS.brown }}>
                  Present Numbers
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MissingRing />
                <span className="text-[7px]" style={{ color: COLORS.brown }}>
                  Missing Numbers
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <GoldBox className="p-2.5">
              <p
                className="mb-1 text-[7.5px] font-bold tracking-wider"
                style={{ color: COLORS.gold }}
              >
                WHAT IS THE LO SHU GRID?
              </p>
              <p className="text-[6.5px] leading-snug" style={{ color: COLORS.brown, opacity: 0.9 }}>
                {whatIsText}
              </p>
            </GoldBox>
            <GoldBox className="p-2.5">
              <p
                className="mb-1.5 text-[7.5px] font-bold tracking-wider"
                style={{ color: COLORS.gold }}
              >
                HOW TO READ YOUR GRID
              </p>
              <ul className="flex flex-col gap-1.5">
                {howToReadItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <span className="text-[6.5px] leading-snug" style={{ color: COLORS.brown }}>
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
      <section className="mt-4">
        <SectionDiamondTitle>2. PLANES OF EXPRESSION (WILL PLANES)</SectionDiamondTitle>

        <GoldBox className="mt-2 overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(184, 134, 11, 0.4)" }}>
                {[
                  "PLANE",
                  "LOCATION IN GRID",
                  "NUMBERS",
                  "HOW MANY PRESENT",
                  "AVAILABILITY (%)",
                  "REPRESENTS",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-1.5 py-1.5 text-[6px] font-bold tracking-wider"
                    style={{ color: COLORS.gold }}
                  >
                    {heading}
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
                      index < planes.length - 1
                        ? "1px solid rgba(184, 134, 11, 0.2)"
                        : "none",
                  }}
                >
                  <td className="px-1.5 py-1.5 align-top">
                    <div className="flex items-start gap-1">
                      <PlaneIcon icon={plane.icon} />
                      <div>
                        <p className="text-[6.5px] font-bold" style={{ color: COLORS.brown }}>
                          {index + 1}. {plane.name}
                        </p>
                        <p className="text-[5.5px] opacity-70">({plane.subtitle})</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-1.5 py-1.5 align-middle">
                    <MiniGridHighlight
                      highlighted={plane.highlightedCells}
                      className="h-9 w-9"
                    />
                  </td>
                  <td
                    className="px-1.5 py-1.5 align-middle text-[6.5px] font-medium"
                    style={{ color: COLORS.brown }}
                  >
                    {plane.numbers}
                  </td>
                  <td
                    className="px-1.5 py-1.5 align-middle text-[6.5px]"
                    style={{ color: COLORS.brown }}
                  >
                    {plane.presentCount} of {plane.totalCount}
                  </td>
                  <td className="px-1.5 py-1.5 align-middle">
                    <AvailabilityRing percentage={plane.percentage} className="h-8 w-8" />
                  </td>
                  <td
                    className="px-1.5 py-1.5 align-top text-[5.5px] leading-snug"
                    style={{ color: COLORS.brown, opacity: 0.85 }}
                  >
                    {plane.represents}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GoldBox>
      </section>

      <footer className="mt-3 flex flex-col items-center px-2 pb-1">
        <div className="flex items-center gap-2">
          <LotusIcon className="h-4 w-7 opacity-55" />
          <p
            className="max-w-[480px] text-center text-[7px] italic leading-relaxed"
            style={{ color: COLORS.brown, opacity: 0.85 }}
          >
            {footerSummary}
          </p>
          <LotusIcon className="h-4 w-7 opacity-55" />
        </div>
      </footer>

      <PageFooterBar className="relative -mx-7 mt-2 h-9 w-[calc(100%+56px)]" pageNumber={pageNumber} />
    </ReportPageShell>
  );
}
