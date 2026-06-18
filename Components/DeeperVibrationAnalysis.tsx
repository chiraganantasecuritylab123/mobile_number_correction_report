import {
  Briefcase,
  Check,
  Circle,
  ClipboardList,
  Coins,
  Smartphone,
  Sun,
  TrendingUp,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { SectionDiamondTitle } from "./LoshuGridDecorations";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type SeriesPart = {
  partLabel: string;
  calculation: string;
  seriesRoot: number;
  rootVariant: "lucky" | "neutral" | "caution";
};

export type OverallSeriesRoot = {
  sum: number;
  calculation: string;
  finalRoot: number;
};

export type DigitVibration = {
  digit: string;
  label: string;
  keyword: string;
  status: "lucky" | "neutral" | "caution";
};

export type MajorDigitPlanet = {
  digit: number;
  planet: string;
  description: string;
  variant: "lucky" | "neutral" | "caution";
};

export type FlowAnalysisItem = {
  text: string;
  status: "positive" | "neutral" | "negative";
};

export type LifeAreaEffect = {
  title: string;
  icon: LucideIcon;
  rating: number;
  points: string[];
};

export type DeeperVibrationAnalysisProps = {
  mobileNumber?: string;
  compoundTotal?: number;
  intermediateTotal?: number;
  rootNumber?: number;
  rulingPlanet?: string;
  rulingPlanetSymbol?: string;
  seriesParts?: SeriesPart[];
  overallSeriesRoot?: OverallSeriesRoot;
  digitVibrations?: DigitVibration[];
  majorDigits?: MajorDigitPlanet[];
  flowStatus?: string;
  flowSequence?: number[];
  flowAnalysis?: FlowAnalysisItem[];
  frequencyHeadline?: string;
  frequencyDescription?: string;
  lifeAreas?: LifeAreaEffect[];
  summary?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const STATUS_COLORS = {
  lucky: "#2d7a4f",
  neutral: "#d48e31",
  caution: "#a84432",
};

const defaultSeriesParts: SeriesPart[] = [
  {
    partLabel: "7700",
    calculation: "7 + 7 + 0 + 0 = 14 → 5",
    seriesRoot: 5,
    rootVariant: "lucky",
  },
  {
    partLabel: "9001",
    calculation: "9 + 0 + 0 + 1 = 10 → 1",
    seriesRoot: 1,
    rootVariant: "neutral",
  },
  {
    partLabel: "23",
    calculation: "2 + 3 = 5",
    seriesRoot: 5,
    rootVariant: "lucky",
  },
];

const defaultOverallSeriesRoot: OverallSeriesRoot = {
  sum: 11,
  calculation: "1 + 1 = 2",
  finalRoot: 2,
};

const defaultDigitVibrations: DigitVibration[] = [
  { digit: "7", label: "Ketu", keyword: "Spirituality", status: "lucky" },
  { digit: "7", label: "Ketu", keyword: "Spirituality", status: "lucky" },
  { digit: "0", label: "Void", keyword: "Amplifier", status: "neutral" },
  { digit: "0", label: "Void", keyword: "Amplifier", status: "neutral" },
  { digit: "9", label: "Mars", keyword: "Energy", status: "caution" },
  { digit: "0", label: "Void", keyword: "Amplifier", status: "neutral" },
  { digit: "0", label: "Void", keyword: "Amplifier", status: "neutral" },
  { digit: "1", label: "Sun", keyword: "Leadership", status: "lucky" },
  { digit: "2", label: "Moon", keyword: "Emotion", status: "lucky" },
  { digit: "3", label: "Jupiter", keyword: "Growth", status: "lucky" },
];

const defaultMajorDigits: MajorDigitPlanet[] = [
  { digit: 7, planet: "Ketu", description: "Spiritual growth, intuition, depth, research", variant: "lucky" },
  { digit: 9, planet: "Mars", description: "Action, energy, courage, drive, determination", variant: "caution" },
  { digit: 1, planet: "Sun", description: "Leadership, confidence, authority, success", variant: "lucky" },
  { digit: 2, planet: "Moon", description: "Emotions, relationships, sensitivity, balance", variant: "lucky" },
  { digit: 3, planet: "Jupiter", description: "Growth, wisdom, expansion, abundance", variant: "lucky" },
];

const defaultFlowAnalysis: FlowAnalysisItem[] = [
  { text: "Strong spiritual opening with double 7 (Ketu energy)", status: "positive" },
  { text: "Mars (9) adds drive but creates intensity in the flow", status: "neutral" },
  { text: "Sun (1) brings leadership after the energy gap", status: "positive" },
  { text: "Moon (2) & Jupiter (3) end with emotional wisdom", status: "positive" },
  { text: "Zeros (0) in between create gaps & scatter energy", status: "negative" },
  { text: "Overall sequence lacks consistent momentum", status: "negative" },
];

const defaultLifeAreas: LifeAreaEffect[] = [
  {
    title: "Career",
    icon: Briefcase,
    rating: 3.5,
    points: [
      "Leadership potential with analytical abilities",
      "Good for research, spirituality-based careers",
      "Scattered focus may delay long-term goals",
    ],
  },
  {
    title: "Finance",
    icon: Coins,
    rating: 2.5,
    points: [
      "Money comes in cycles, not steady flow",
      "Earning ability present but savings need discipline",
      "Avoid impulsive financial decisions",
    ],
  },
  {
    title: "Personal Life",
    icon: Users,
    rating: 3,
    points: [
      "Sensitive and intuitive in relationships",
      "Emotional ups and downs from Moon energy",
      "Needs patience and open communication",
    ],
  },
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
        backgroundColor: "rgba(253, 245, 230, 0.78)",
      }}
    >
      {children}
    </div>
  );
}

function SectionBadge({ index }: { index: string }) {
  return (
    <span
      className="inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[6px] font-bold"
      style={{
        backgroundColor: COLORS.brown,
        color: COLORS.cream,
        border: "1px solid #d48e31",
      }}
    >
      {index}
    </span>
  );
}

function RootCircle({
  value,
  variant,
  size = "md",
}: {
  value: number | string;
  variant: "lucky" | "neutral" | "caution";
  size?: "sm" | "md" | "lg";
}) {
  const dim = size === "lg" ? "h-10 w-10 text-base" : size === "md" ? "h-7 w-7 text-[10px]" : "h-5 w-5 text-[8px]";
  const color = STATUS_COLORS[variant];

  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold ${dim}`}
      style={{
        border: `1.5px solid ${color}`,
        backgroundColor: `${color}18`,
        color,
      }}
    >
      {value}
    </div>
  );
}

function StatusIcon({ status }: { status: "lucky" | "neutral" | "caution" }) {
  if (status === "lucky") return <Check size={7} strokeWidth={3} style={{ color: STATUS_COLORS.lucky }} />;
  if (status === "caution") return <X size={7} strokeWidth={3} style={{ color: STATUS_COLORS.caution }} />;
  return <Circle size={6} strokeWidth={2} style={{ color: STATUS_COLORS.neutral }} />;
}

function FlowStatusIcon({ status }: { status: FlowAnalysisItem["status"] }) {
  if (status === "positive") return <Check size={7} strokeWidth={3} style={{ color: STATUS_COLORS.lucky }} />;
  if (status === "negative") return <X size={7} strokeWidth={3} style={{ color: STATUS_COLORS.caution }} />;
  return <Circle size={6} strokeWidth={2} style={{ color: STATUS_COLORS.neutral }} />;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating >= i + 0.5;
        return (
          <span
            key={i}
            className="text-[8px]"
            style={{ color: filled || half ? "#d48e31" : "rgba(184, 134, 11, 0.25)" }}
          >
            {half ? "◐" : "★"}
          </span>
        );
      })}
    </div>
  );
}

function VibrationWaveform({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 28" fill="none" className={className} aria-hidden>
      <polyline
        points="0,14 12,6 24,20 36,8 48,18 60,4 72,22 84,10 96,16 108,6 120,14"
        stroke="#a84432"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      <polyline
        points="0,18 12,12 24,22 36,14 48,20 60,10 72,24 84,16 96,20 108,12 120,18"
        stroke="#d48e31"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <polyline
        points="0,22 12,18 24,24 36,20 48,22 60,16 72,26 84,22 96,24 108,20 120,22"
        stroke="#2d7a4f"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function DigitFlowItem({ item }: { item: DigitVibration }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          className="flex h-5 w-5 items-center justify-center text-[9px] font-bold"
          style={{
            border: `1px solid ${STATUS_COLORS[item.status]}55`,
            color: COLORS.brown,
            backgroundColor: "rgba(255,255,255,0.45)",
          }}
        >
          {item.digit}
        </div>
        <span className="absolute -right-1 -top-1">
          <StatusIcon status={item.status} />
        </span>
      </div>
      <p className="mt-0.5 text-[4.5px] font-semibold" style={{ color: COLORS.gold }}>
        {item.label}
      </p>
      <p className="text-[4px] opacity-70">({item.keyword})</p>
    </div>
  );
}

export default function DeeperVibrationAnalysis({
  mobileNumber = "+44 7700 900123",
  compoundTotal = 46,
  intermediateTotal = 10,
  rootNumber = 1,
  rulingPlanet = "SUN (NUMBER 1)",
  rulingPlanetSymbol = "☉",
  seriesParts = defaultSeriesParts,
  overallSeriesRoot = defaultOverallSeriesRoot,
  digitVibrations = defaultDigitVibrations,
  majorDigits = defaultMajorDigits,
  flowStatus = "PARTIALLY SMOOTH FLOW",
  flowSequence = [7, 7, 9, 1, 2, 3],
  flowAnalysis = defaultFlowAnalysis,
  frequencyHeadline = "LEADERSHIP WITH SCATTERED ENERGY",
  frequencyDescription =
    "This number carries strong leadership and intuition but is interrupted by voids and intensity spikes, creating an inconsistent vibrational pattern that needs conscious balancing.",
  lifeAreas = defaultLifeAreas,
  summary =
    "This mobile number has a powerful spiritual start with double Ketu (7), leadership from Sun (1), and wisdom from Jupiter (3) — but interruptions from zeros and Mars (9) create scattered energy. Focus, patience, and discipline will unlock its full potential.",
  pageNumber = "08",
}: DeeperVibrationAnalysisProps) {
  return (
    <ReportPageShell padding="118px 22px 0">
      <header className="flex flex-col items-center text-center">
        <p className="text-[8px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
          ASTRO AARAMBH
        </p>
        <h1 className="mt-1 text-[16px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          DEEPER{" "}
          <span style={{ color: "#d48e31" }}>VIBRATIONAL</span>{" "}
          ANALYSIS
        </h1>
        <p className="mt-1 text-[8px] italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Series Energy &amp; Hidden Frequency
        </p>
      </header>

      {/* Top info bar */}
      <section className="relative z-10 mt-2">
        <GoldBox className="grid grid-cols-[1fr_1.5fr_auto] items-center gap-2 px-2.5 py-2">
          <div className="flex items-center gap-1.5">
            <Smartphone size={14} style={{ color: COLORS.gold }} />
            <div>
              <p className="text-[5.5px] font-bold tracking-wider" style={{ color: COLORS.gold }}>
                CURRENT MOBILE NUMBER
              </p>
              <p className="text-[9px] font-bold">{mobileNumber}</p>
            </div>
          </div>
          <div className="flex items-start gap-1.5 border-l pl-2" style={{ borderColor: "rgba(184,134,11,0.35)" }}>
            <ClipboardList size={12} style={{ color: COLORS.gold, marginTop: 1 }} />
            <div className="flex gap-3">
              <div>
                <p className="text-[5px] font-bold" style={{ color: COLORS.gold }}>COMPOUND TOTAL</p>
                <p className="text-xs font-bold">{compoundTotal}</p>
              </div>
              <div>
                <p className="text-[5px] font-bold" style={{ color: COLORS.gold }}>SINGLE ROOT / DRIVER TOTAL</p>
                <p className="text-[8px] font-bold">{intermediateTotal} → {rootNumber}</p>
              </div>
              <div>
                <p className="text-[5px] font-bold" style={{ color: COLORS.gold }}>ROOT NUMBER</p>
                <RootCircle value={rootNumber} variant="neutral" size="sm" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Sun size={16} style={{ color: "#d48e31" }} />
            <div>
              <p className="text-[5px] font-bold" style={{ color: COLORS.gold }}>RULING PLANET</p>
              <p className="text-[6.5px] font-semibold" style={{ color: "#d48e31" }}>
                {rulingPlanetSymbol} {rulingPlanet}
              </p>
            </div>
          </div>
        </GoldBox>
      </section>

      {/* Section 1: Series Pattern */}
      <section className="relative z-10 mt-2">
        <div className="mb-1 flex items-center gap-1">
          <SectionBadge index="1" />
          <SectionDiamondTitle>SERIES PATTERN &amp; SERIES ROOT</SectionDiamondTitle>
        </div>
        <GoldBox className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2 p-2">
          {seriesParts.map((part) => (
            <div
              key={part.partLabel}
              className="rounded px-2 py-1.5 text-center"
              style={{ border: "1px solid rgba(184, 134, 11, 0.3)" }}
            >
              <p className="text-[6px] font-bold" style={{ color: COLORS.gold }}>
                Part ({part.partLabel})
              </p>
              <p className="mt-0.5 text-[5.5px]">{part.calculation}</p>
              <div className="mt-1 flex items-center justify-center gap-1">
                <span className="text-[5px] font-bold">Series Root:</span>
                <RootCircle value={part.seriesRoot} variant={part.rootVariant} size="sm" />
              </div>
            </div>
          ))}
          <div
            className="flex flex-col items-center justify-center rounded px-3 py-1.5"
            style={{ border: "1px solid rgba(184, 134, 11, 0.45)", backgroundColor: "rgba(212,142,49,0.06)" }}
          >
            <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>OVERALL SERIES ROOT</p>
            <RootCircle value={overallSeriesRoot.sum} variant="neutral" size="lg" />
            <p className="mt-0.5 text-[5px]">{overallSeriesRoot.calculation}</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-[5px] font-bold">Final Root:</span>
              <RootCircle value={overallSeriesRoot.finalRoot} variant="neutral" size="sm" />
            </div>
          </div>
        </GoldBox>
      </section>

      {/* Section 2: Digit flow */}
      <section className="relative z-10 mt-2">
        <div className="mb-1 flex items-center gap-1">
          <SectionBadge index="2" />
          <SectionDiamondTitle>DIGIT-BY-DIGIT VIBRATION FLOW</SectionDiamondTitle>
        </div>
        <GoldBox className="px-2 py-2">
          <div className="flex flex-wrap items-center justify-center gap-0.5">
            {digitVibrations.map((item, index) => (
              <span key={index} className="flex items-center">
                <DigitFlowItem item={item} />
                {index < digitVibrations.length - 1 && (
                  <span className="mx-0.5 text-[7px] opacity-40">→</span>
                )}
              </span>
            ))}
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-3">
            {(["lucky", "neutral", "caution"] as const).map((s) => (
              <span key={s} className="flex items-center gap-0.5 text-[4.5px]">
                <StatusIcon status={s} />
                {s === "lucky" ? "Lucky / Supportive" : s === "neutral" ? "Neutral" : "Caution / Challenging"}
              </span>
            ))}
          </div>
        </GoldBox>
      </section>

      {/* Sections 3, 4, 5 */}
      <section className="relative z-10 mt-2 grid grid-cols-3 gap-1.5">
        <GoldBox className="p-2">
          <div className="mb-1 flex items-center gap-1">
            <SectionBadge index="3" />
            <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>
              RULING PLANETS OF MAJOR DIGITS
            </p>
          </div>
          <ul className="flex flex-col gap-1">
            {majorDigits.map((d) => (
              <li key={d.digit} className="flex items-start gap-1.5">
                <RootCircle value={d.digit} variant={d.variant} size="sm" />
                <p className="text-[5px] leading-snug" style={{ color: COLORS.brown }}>
                  <span className="font-bold">{d.planet}:</span> {d.description}
                </p>
              </li>
            ))}
          </ul>
        </GoldBox>

        <GoldBox className="p-2">
          <div className="mb-1 flex items-center gap-1">
            <SectionBadge index="4" />
            <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>
              HOW THE SERIES FLOWS
            </p>
          </div>
          <p className="text-[6px] font-bold" style={{ color: STATUS_COLORS.lucky }}>
            {flowStatus}
          </p>
          <div className="my-1 flex items-center justify-center gap-1">
            {flowSequence.map((n, i) => (
              <span key={i} className="flex items-center gap-1">
                <RootCircle value={n} variant="lucky" size="sm" />
                {i < flowSequence.length - 1 && <span className="text-[6px] opacity-40">-</span>}
              </span>
            ))}
          </div>
          <ul className="flex flex-col gap-0.5">
            {flowAnalysis.map((item) => (
              <li key={item.text} className="flex items-start gap-1 text-[4.5px] leading-snug">
                <FlowStatusIcon status={item.status} />
                {item.text}
              </li>
            ))}
          </ul>
        </GoldBox>

        <GoldBox className="p-2">
          <div className="mb-1 flex items-center gap-1">
            <SectionBadge index="5" />
            <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>
              OVERALL VIBRATIONAL FREQUENCY
            </p>
          </div>
          <p className="text-[6px] font-bold" style={{ color: STATUS_COLORS.lucky }}>
            {frequencyHeadline}
          </p>
          <p className="mt-1 text-[5px] leading-snug" style={{ color: COLORS.brown, opacity: 0.88 }}>
            {frequencyDescription}
          </p>
          <p className="mt-1.5 text-[5px] font-bold" style={{ color: COLORS.gold }}>
            VIBRATION LEVEL
          </p>
          <VibrationWaveform className="mt-0.5 h-6 w-full" />
        </GoldBox>
      </section>

      {/* Section 6: Life areas */}
      <section className="relative z-10 mt-2">
        <div className="mb-1 flex items-center gap-1">
          <SectionBadge index="6" />
          <SectionDiamondTitle>LONG-TERM EFFECT ON LIFE AREAS</SectionDiamondTitle>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {lifeAreas.map((area) => {
            const Icon = area.icon;
            return (
              <GoldBox key={area.title} className="p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Icon size={12} style={{ color: COLORS.gold }} />
                    <p className="text-[6px] font-bold" style={{ color: COLORS.brown }}>
                      {area.title}
                    </p>
                  </div>
                  <StarRating rating={area.rating} />
                </div>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-1 text-[4.5px] leading-snug"
                      style={{ color: COLORS.brown, opacity: 0.88 }}
                    >
                      <TrendingUp size={7} style={{ color: COLORS.gold, flexShrink: 0, marginTop: 1 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </GoldBox>
            );
          })}
        </div>
      </section>

      <footer className="relative z-10 mt-2 flex flex-col items-center pb-1">
        <div
          className="flex items-center gap-2 rounded-md px-3 py-1.5"
          style={{
            border: "1px solid rgba(184, 134, 11, 0.45)",
            backgroundColor: "rgba(212, 142, 49, 0.08)",
          }}
        >
          <span className="text-[10px]" style={{ color: "#d48e31" }}>★</span>
          <p className="max-w-[540px] text-center text-[5.5px] leading-relaxed" style={{ color: COLORS.brown }}>
            <span className="font-bold" style={{ color: COLORS.gold }}>SUMMARY: </span>
            {summary}
          </p>
          <span className="text-[10px]" style={{ color: "#d48e31" }}>★</span>
        </div>
      </footer>

      <PageFooterBar
        className="relative -mx-[22px] mt-1.5 h-9 w-[calc(100%+44px)]"
        pageNumber={pageNumber}
      />
    </ReportPageShell>
  );
}
