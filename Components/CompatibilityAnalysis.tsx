import { MoonIcon, SunIcon } from "./NumeroscopeDecorations";
import OverallCompatibilityScore, { getCompatibilityScoreResult } from "./OverallCompatibilityScore";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";
import { cinzel, nunitoSans } from "@/app/fonts";

export type CompatibilityStatus = "good" | "medium" | "low";

export type QuickStatRow = {
  coreLabel: string;
  coreNumber: number;
  status: CompatibilityStatus;
  statusLabel: string;
  score: number;
};

export type CompatibilityBreakdownRow = {
  coreNumber: number;
  coreTitle: string;
  planet: string;
  status: CompatibilityStatus;
  statusLabel: string;
  starRating: number;
  score: number;
  keyReason: string;
};

export type LifeAreaCard = {
  title: string;
  iconImage: string;
  ratingLabel: string;
  starRating: number;
  progress: number;
  status: CompatibilityStatus;
  description: string;
};

export type CompatibilityAnalysisProps = {
  mobileNumber?: string;
  mobileRootTotal?: string;
  rulingPlanet?: string;
  overallScore?: number;
  quickStats?: QuickStatRow[];
  breakdownRows?: CompatibilityBreakdownRow[];
  lifeAreas?: LifeAreaCard[];
  verdictHeadline?: string;
  verdictHighlight?: string;
  verdictDescription?: string;
  recommendation?: string;
  pageNumber?: string;
};

const ASSETS = {
  phone: "/assets/compatibility-analysis/phone.png",
  sun: "/assets/compatibility-analysis/sone.png",
  overall: "/assets/compatibility-analysis/overall.png",
  effect1: "/assets/compatibility-analysis/effect-1.png",
  effect2: "/assets/compatibility-analysis/effect-2.png",
  effect3: "/assets/compatibility-analysis/effect-3.png",
  effect4: "/assets/compatibility-analysis/effect-4.png",
  effect5: "/assets/compatibility-analysis/effect-5.png",
} as const;

const COLORS = REPORT_COLORS;

const STATUS_COLORS: Record<CompatibilityStatus, string> = {
  good: "#2d7a4f",
  medium: "#d48e31",
  low: "#a84432",
};

const NAVY = "#213247";
const GOLD_BORDER = "#D8AC71";
const SECTION_ORANGE = "#B5700D";
const CARD_BG = "rgba(255, 255, 255, 0.72)";

const TEXT_UPPER = { textTransform: "uppercase" } as const;
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const defaultQuickStats: QuickStatRow[] = [
  { coreLabel: "WITH DRIVER", coreNumber: 5, status: "good", statusLabel: "GOOD", score: 68 },
  { coreLabel: "WITH CONDUCTOR", coreNumber: 7, status: "medium", statusLabel: "MEDIUM", score: 55 },
  { coreLabel: "WITH KUA", coreNumber: 2, status: "good", statusLabel: "GOOD", score: 70 },
];

const defaultBreakdownRows: CompatibilityBreakdownRow[] = [
  {
    coreNumber: 5,
    coreTitle: "DRIVER NUMBER",
    planet: "Mercury",
    status: "good",
    statusLabel: "GOOD",
    starRating: 4,
    score: 68,
    keyReason: "Mobile Root 1 supports freedom & new beginnings",
  },
  {
    coreNumber: 7,
    coreTitle: "CONDUCTOR NUMBER",
    planet: "Ketu",
    status: "medium",
    statusLabel: "MEDIUM",
    starRating: 2.5,
    score: 55,
    keyReason: "Conflict between spiritual 7 and leadership 1",
  },
  {
    coreNumber: 2,
    coreTitle: "KUA NUMBER",
    planet: "Moon",
    status: "good",
    statusLabel: "GOOD",
    starRating: 4,
    score: 70,
    keyReason: "Supports harmony & relationships",
  },
];

const defaultLifeAreas: LifeAreaCard[] = [
  {
    title: "CAREER & BUSINESS",
    iconImage: ASSETS.effect1,
    ratingLabel: "MEDIUM",
    starRating: 3,
    progress: 55,
    status: "medium",
    description:
      "Leadership energy supports growth but restlessness may cause frequent job changes.",
  },
  {
    title: "FINANCE & WEALTH",
    iconImage: ASSETS.effect2,
    ratingLabel: "LOW-MEDIUM",
    starRating: 2,
    progress: 40,
    status: "medium",
    description:
      "Triple zeros and 8 energy may cause delays in income and savings.",
  },
  {
    title: "HEALTH",
    iconImage: ASSETS.effect3,
    ratingLabel: "MEDIUM",
    starRating: 3,
    progress: 58,
    status: "medium",
    description:
      "Mental stress and overthinking possible due to 7 and 9 combination.",
  },
  {
    title: "RELATIONSHIPS & MARRIAGE",
    iconImage: ASSETS.effect4,
    ratingLabel: "GOOD",
    starRating: 4,
    progress: 72,
    status: "good",
    description:
      "Diplomatic Kua 2 energy helps maintain harmony in personal life.",
  },
  {
    title: "TRAVEL & MOVEMENT",
    iconImage: ASSETS.effect5,
    ratingLabel: "GOOD",
    starRating: 4,
    progress: 75,
    status: "good",
    description:
      "Driver 5 supports travel, relocation and new opportunities.",
  },
];

function StarRating({
  rating,
  color = "#d48e31",
  size = "sm",
}: {
  rating: number;
  color?: string;
  size?: "sm" | "md";
}) {
  const starSize = size === "md" ? "text-[11px]" : "text-[8px]";

  return (
    <div className="flex gap-px">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating >= i + 0.5;
        return (
          <span
            key={i}
            className={starSize}
            style={{ color: filled || half ? color : "rgba(184, 134, 11, 0.22)" }}
          >
            {half ? "◐" : "★"}
          </span>
        );
      })}
    </div>
  );
}

function ProgressBar({
  value,
  color,
  className = "",
  height = "h-1.5",
}: {
  value: number;
  color: string;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`${height} overflow-hidden rounded-full ${className}`}
      style={{ backgroundColor: "rgba(184, 134, 11, 0.12)" }}
    >
      <div
        className="h-full rounded-full"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
}

function CoreNumberBadge({
  value,
  status,
  size = "md",
}: {
  value: number;
  status: CompatibilityStatus;
  size?: "sm" | "md";
}) {
  const color = STATUS_COLORS[status];
  const dim = size === "sm" ? "h-7 w-7 text-[11px]" : "h-9 w-9 text-[14px]";

  return (
    <div
      className={`${cinzel.className} flex shrink-0 items-center justify-center rounded-full font-bold leading-none ${dim}`}
      style={{
        border: `2px solid ${color}`,
        color,
        backgroundColor: `${color}12`,
      }}
    >
      {value}
    </div>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h3
      className={`${cinzel.className} text-[12px] font-bold tracking-[0.06em]`}
      style={{ color: SECTION_ORANGE, ...TEXT_UPPER }}
    >
      {index}. {title}
    </h3>
  );
}

function QuickStatItem({ row, showConnector = false }: { row: QuickStatRow; showConnector?: boolean }) {
  const color = STATUS_COLORS[row.status];

  return (
    <div className="relative flex items-center gap-2">
      {showConnector && (
        <svg
          className="pointer-events-none absolute -left-3 top-1/2 h-px w-3 -translate-y-1/2"
          viewBox="0 0 12 2"
          aria-hidden
        >
          <line x1="0" y1="1" x2="12" y2="1" stroke="rgba(184, 134, 11, 0.45)" strokeWidth="1" />
        </svg>
      )}
      <CoreNumberBadge value={row.coreNumber} status={row.status} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1">
          <p
            className="text-[7.5px] font-bold leading-tight"
            style={{ color: COLORS.brown, ...TEXT_UPPER }}
          >
            {row.coreLabel} ({row.coreNumber})
          </p>
          <p className="text-[7.5px] font-bold" style={{ color, ...TEXT_UPPER }}>
            {row.statusLabel}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <ProgressBar value={row.score} color={color} className="flex-1" height="h-[5px]" />
          <span className="min-w-[22px] text-right text-[7.5px] font-bold" style={{ color }}>
            {row.score}%
          </span>
        </div>
      </div>
    </div>
  );
}

function BreakdownTableRow({
  row,
  isLast = false,
}: {
  row: CompatibilityBreakdownRow;
  isLast?: boolean;
}) {
  const color = STATUS_COLORS[row.status];
  const starColor = row.status === "good" ? STATUS_COLORS.good : STATUS_COLORS.medium;

  return (
    <tr
      style={{
        borderBottom: isLast ? "none" : `1px solid rgba(216, 172, 113, 0.35)`,
        backgroundColor: isLast ? CARD_BG : "rgba(255, 255, 255, 0.5)",
      }}
    >
      <td className="px-3 py-2.5 align-middle">
        <div className="flex items-center gap-2.5">
          <CoreNumberBadge value={row.coreNumber} status={row.status} />
          <div>
            <p
              className="text-[8.5px] font-bold leading-tight"
              style={{ color: COLORS.brown, ...TEXT_UPPER }}
            >
              {row.coreTitle}
            </p>
            <p className="text-[7.5px] font-semibold" style={{ color: SECTION_ORANGE }}>
              ({row.planet})
            </p>
          </div>
        </div>
      </td>
      <td className="px-3 py-2.5 align-middle">
        <p className="text-[8.5px] font-bold" style={{ color, ...TEXT_UPPER }}>
          {row.statusLabel}
        </p>
        <StarRating rating={row.starRating} color={starColor} />
      </td>
      <td className="px-3 py-2.5 align-middle">
        <p className="text-[13px] font-bold" style={{ color }}>
          {row.score}%
        </p>
      </td>
      <td className="px-3 py-2.5 align-middle">
        <p
          className="text-[8px] leading-snug"
          style={{ color: COLORS.brown, opacity: 0.92, fontFamily: BODY_SANS }}
        >
          {row.keyReason}
        </p>
      </td>
    </tr>
  );
}

function LifeAreaCardView({ area }: { area: LifeAreaCard }) {
  const color = STATUS_COLORS[area.status];
  const starColor = area.status === "good" ? STATUS_COLORS.good : STATUS_COLORS.medium;

  return (
    <div
      className="flex min-w-0 flex-1 flex-col rounded-md px-1.5 py-2"
      style={{
        border: `1px solid ${GOLD_BORDER}`,
        backgroundColor: CARD_BG,
      }}
    >
      <div className="mx-auto flex h-10 w-10 items-center justify-center">
        <Image
          src={area.iconImage}
          alt=""
          width={36}
          height={36}
          className="object-contain"
          aria-hidden
        />
      </div>
      <p
        className={`${cinzel.className} mt-1 text-center text-[6.5px] font-bold leading-tight`}
        style={{ color: COLORS.brown, ...TEXT_UPPER }}
      >
        {area.title}
      </p>
      <p
        className="mt-1 text-center text-[6px] font-bold"
        style={{ color, ...TEXT_UPPER }}
      >
        Rating: {area.ratingLabel}
      </p>
      <div className="mt-0.5 flex justify-center">
        <StarRating rating={area.starRating} color={starColor} />
      </div>
      <ProgressBar value={area.progress} color={color} className="mx-auto mt-1.5 w-[90%]" height="h-[4px]" />
      <p
        className="mt-1.5 text-center text-[5.5px] leading-snug"
        style={{ color: COLORS.brown, opacity: 0.9, fontFamily: BODY_SANS }}
      >
        {area.description}
      </p>
    </div>
  );
}

function VerdictHeadline({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  const parts = text.split(highlight);
  if (parts.length === 1) {
    return (
      <p
        className="text-[9.5px] font-bold leading-snug"
        style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
      >
        {text}
      </p>
    );
  }

  return (
    <p
      className="text-[9.5px] font-bold leading-snug"
      style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
    >
      {parts[0]}
      <span style={{ color: SECTION_ORANGE }}>{highlight}</span>
      {parts[1]}
    </p>
  );
}

export default function CompatibilityAnalysis({
  mobileNumber = "+44 7700 900123",
  mobileRootTotal = "10 → 1",
  rulingPlanet = "Sun (1)",
  overallScore = 100,
  quickStats = defaultQuickStats,
  breakdownRows = defaultBreakdownRows,
  lifeAreas = defaultLifeAreas,
  verdictHeadline,
  verdictHighlight,
  verdictDescription =
    "It supports personal growth and relationships but creates mild obstacles in financial stability and consistent career progress.",
  recommendation =
    "A corrected number with friendly totals (5, 7 or 1 with better harmony) can significantly improve results and bring more balance, success and peace.",
  pageNumber = "13",
}: CompatibilityAnalysisProps) {
  const scoreResult = getCompatibilityScoreResult(overallScore);
  const defaultVerdictHighlight =
    scoreResult.level === "high"
      ? "HIGHLY COMPATIBLE"
      : scoreResult.level === "medium"
        ? "MODERATELY COMPATIBLE"
        : "POORLY COMPATIBLE";
  const resolvedVerdictHighlight = verdictHighlight ?? defaultVerdictHighlight;
  const resolvedVerdictHeadline =
    verdictHeadline ??
    `Current mobile number is ${resolvedVerdictHighlight} with your core numbers.`;
  return (
    <ReportPageShell padding="16px 26px 0">
      <SunIcon className="pointer-events-none absolute left-2 top-14 h-16 w-16 opacity-50" />
      <MoonIcon className="pointer-events-none absolute right-2 top-14 h-16 w-16 opacity-50" />

      <header className="relative z-10 flex flex-col items-center text-center">
        <Image
          src="/assets/ganesha-logo.png"
          alt="Astro Aarambh"
          width={88}
          height={88}
          className="mb-1"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={44} />
          <p className="text-[14px] font-semibold tracking-[0.2em]" style={{ color: SECTION_ORANGE }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={44} className="rotate-180" />
        </div>
        <h1
          className={`${cinzel.className} mt-0.5 text-[32px] font-bold leading-tight tracking-wide`}
          style={{ color: NAVY }}
        >
          COMPATIBILITY <span style={{ color: SECTION_ORANGE }}>ANALYSIS</span>
        </h1>
        <p
          className="mt-0.5 text-[11.5px]"
          style={{ color: NAVY, opacity: 0.88, fontFamily: BODY_SANS }}
        >
          How Your Mobile Number Aligns with Your Core Energies
        </p>
      </header>

      {/* Top summary dashboard */}
      <section className={`relative z-10 mt-3.5 ${nunitoSans.className}`}>
        <div className="grid grid-cols-[1.05fr_0.9fr_1fr] items-stretch gap-2">
          {/* Left — current mobile number */}
          <div
            className="flex flex-col justify-center rounded-md px-3 py-2.5"
            style={{
              border: `1.5px solid ${GOLD_BORDER}`,
              backgroundColor: CARD_BG,
            }}
          >
            <p
              className="text-[8px] font-bold tracking-wide"
              style={{ color: SECTION_ORANGE, ...TEXT_UPPER }}
            >
              Current Mobile Number
            </p>
            <div className="mt-1.5 flex items-start gap-2.5">
              <Image
                src={ASSETS.phone}
                alt=""
                width={34}
                height={34}
                className="mt-0.5 shrink-0 object-contain"
                aria-hidden
              />
              <div className="min-w-0">
                <p
                  className={`${cinzel.className} text-[17px] font-bold leading-tight tracking-wide`}
                  style={{ color: COLORS.brown }}
                >
                  {mobileNumber}
                </p>
                <p
                  className="mt-1.5 text-[7.5px] font-semibold leading-snug"
                  style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
                >
                  Mobile Root / Driver Total: {mobileRootTotal}
                </p>
                <p
                  className="mt-0.5 flex items-center gap-1 text-[7.5px] font-bold"
                  style={{ color: SECTION_ORANGE }}
                >
                  Ruling Planet: {rulingPlanet}
                  <Image src={ASSETS.sun} alt="" width={12} height={12} className="object-contain" aria-hidden />
                </p>
              </div>
            </div>
          </div>

          {/* Center — overall score gauge */}
          <div
            className="flex items-center justify-center rounded-md py-1"
            style={{
              border: `1.5px solid ${GOLD_BORDER}`,
              backgroundColor: CARD_BG,
            }}
          >
            <OverallCompatibilityScore value={overallScore} size={156} />
          </div>

          {/* Right — quick stats */}
          <div
            className="relative flex flex-col justify-center gap-2.5 rounded-md px-3 py-2.5 pl-4"
            style={{
              border: `1.5px solid ${GOLD_BORDER}`,
              backgroundColor: CARD_BG,
            }}
          >
            {quickStats.map((row) => (
              <QuickStatItem key={row.coreLabel} row={row} showConnector />
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — detailed breakdown table */}
      <section className={`relative z-10 mt-3 ${nunitoSans.className}`}>
        <SectionHeading index="1" title="Detailed Compatibility Breakdown" />
        <div
          className="mt-1.5 overflow-hidden rounded-md"
          style={{ border: `1.5px solid ${GOLD_BORDER}` }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: NAVY }}>
                {["Core Number", "Compatibility", "Score", "Key Reason"].map((heading) => (
                  <th
                    key={heading}
                    className="px-3 py-2 text-left text-[7.5px] font-bold tracking-wide"
                    style={{ color: "#fdf5e6", ...TEXT_UPPER }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {breakdownRows.map((row, index) => (
                <BreakdownTableRow
                  key={row.coreTitle}
                  row={row}
                  isLast={index === breakdownRows.length - 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2 — life areas */}
      <section className={`relative z-10 mt-3 ${nunitoSans.className}`}>
        <SectionHeading index="2" title="Effects on Major Life Areas" />
        <div className="mt-1.5 flex gap-1.5">
          {lifeAreas.map((area) => (
            <LifeAreaCardView key={area.title} area={area} />
          ))}
        </div>
      </section>

      {/* Section 3 — overall verdict */}
      <section className={`relative z-10 mt-3 ${nunitoSans.className}`}>
        <SectionHeading index="3" title="Overall Verdict" />
        <div
          className="mt-1.5 flex items-center gap-3 rounded-md px-3 py-3"
          style={{
            border: `1.5px solid ${GOLD_BORDER}`,
            backgroundColor: "rgba(253, 245, 230, 0.92)",
          }}
        >
          <Image
            src={ASSETS.overall}
            alt=""
            width={78}
            height={78}
            className="shrink-0 object-contain"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <VerdictHeadline text={resolvedVerdictHeadline} highlight={resolvedVerdictHighlight} />
            <p
              className="mt-1 text-[8px] leading-snug"
              style={{ color: COLORS.brown, opacity: 0.92, fontFamily: BODY_SANS }}
            >
              {verdictDescription}
            </p>
            <div
              className="my-1.5 border-t border-dashed"
              style={{ borderColor: "rgba(184, 134, 11, 0.4)" }}
            />
            <p className="text-[7.5px] leading-snug" style={{ fontFamily: BODY_SANS }}>
              <span className="font-bold" style={{ color: STATUS_COLORS.good, ...TEXT_UPPER }}>
                Recommendation:{" "}
              </span>
              <span style={{ color: STATUS_COLORS.good }}>{recommendation}</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-3 flex items-center justify-center gap-2 pb-2">
        <span className="text-[10px]" style={{ color: SECTION_ORANGE }}>
          ★
        </span>
        <p className={`${cinzel.className} text-[18px] font-bold`} style={{ color: COLORS.brown }}>
          {pageNumber}
        </p>
        <span className="text-[10px]" style={{ color: SECTION_ORANGE }}>
          ★
        </span>
      </footer>
    </ReportPageShell>
  );
}
