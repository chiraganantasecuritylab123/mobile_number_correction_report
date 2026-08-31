import {
  Briefcase,
  Check,
  Circle,
  ClipboardList,
  Coins,
  Moon,
  Smartphone,
  Sun,
  TrendingUp,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionDiamondTitle } from "./LoshuGridDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";
import FooterSummaryBanner from "./FooterSummaryBanner";

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
  icon: string;
  color: string;
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

const FLOW_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

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
  { digit: 9, planet: "Mars", description: "Action, energy, courage, drive, determination", variant: "lucky" },
  { digit: 1, planet: "Sun", description: "Leadership, confidence, authority, success", variant: "lucky" },
  { digit: 2, planet: "Moon", description: "Emotions, relationships, sensitivity, balance", variant: "lucky" },
  { digit: 3, planet: "Jupiter", description: "Growth, wisdom, expansion, abundance", variant: "neutral" },
];

const MAJOR_DIGIT_COLORS: Record<number, string> = {
  7: "#1e5631",
  9: "#2d7a4f",
  1: "#3d9a5f",
  2: "#6bbf7a",
  3: "#9ca3af",
};

const defaultFlowAnalysis: FlowAnalysisItem[] = [
  { text: "Strong start with double 7 (spiritual wisdom & intuition)", status: "positive" },
  { text: "Middle 9 brings high energy but also pressure & impatience", status: "neutral" },
  { text: "Ending with 1-2-3 gives leadership, emotion & growth balance", status: "positive" },
  { text: "Zeros (0) in between create gaps & scatter energy", status: "negative" },
];

const defaultLifeAreas: LifeAreaEffect[] = [
  {
    title: "Career",
    icon: '/assets/cover/persnol-life.png',
    color: COLORS.green,
    rating: 3.5,
    points: [
      "Leadership potential with analytical abilities",
      "Good for research, spirituality-based careers",
      "Scattered focus may delay long-term goals",
    ],
  },
  {
    title: "Finance",
    icon: "/assets/cover/persnol-life.png",
    color: COLORS.gold,
    rating: 2.5,
    points: [
      "Money comes in cycles, not steady flow",
      "Earning ability present but savings need discipline",
      "Avoid impulsive financial decisions",
    ],
  },
  {
    title: "Personal Life",
    color: COLORS.red,
    icon: '/assets/cover/persnol-life.png',
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
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-md ${className}`}
      style={{
        border: "1px solid #b8860b",
        backgroundColor: "rgba(253, 245, 230, 0.78)",
        ...style,
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
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const dim =
    size === "xl"
      ? "h-14 w-14 text-[22px]"
      : size === "lg"
        ? "h-10 w-10 text-base"
        : size === "md"
          ? "h-7 w-7 text-[10px]"
          : "h-6 w-6 text-[10px]";
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

function SeriesPartCard({ part, index }: { part: SeriesPart; index: number }) {
  const color = STATUS_COLORS[part.rootVariant];
  const labelBg =
    part.rootVariant === "lucky"
      ? "rgba(45, 122, 79, 0.1)"
      : part.rootVariant === "caution"
        ? "rgba(168, 68, 50, 0.1)"
        : "rgba(212, 142, 49, 0.12)";

  return (
    <div className="flex min-w-0 flex flex-col items-center">
      <span
        className="rounded-md px-2 py-0.5 text-[9px] font-bold tracking-wide"
        style={{ border: `1px solid ${color}`, color, backgroundColor: labelBg }}
      >
        Series Part {index + 1}
      </span>
      <p className="mt-1.5 text-[26px] font-bold leading-none" style={{ color }}>
        {part.partLabel}
      </p>
      <p className="mt-1.5 text-[10px] font-semibold" style={{ color }}>
        {part.calculation}
      </p>
      <div className="mt-1 flex items-center gap-1">
        <span className="text-[9px] font-bold text-black">Series Root:</span>
        <RootCircle value={part.seriesRoot} variant={part.rootVariant} size="sm" />
      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: "lucky" | "neutral" | "caution" }) {
  if (status === "lucky") return <Check size={7} strokeWidth={3} style={{ color: STATUS_COLORS.lucky }} />;
  if (status === "caution") return <X size={7} strokeWidth={3} style={{ color: STATUS_COLORS.caution }} />;
  return <Circle size={6} strokeWidth={2} style={{ color: STATUS_COLORS.neutral }} />;
}

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating >= i + 0.5;
        return (
          <span
            key={i}
            className="text-[14px]"
            style={{ color: color }}
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

function MajorDigitCircle({ digit }: { digit: number }) {
  return (
    <div
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
      style={{ backgroundColor: MAJOR_DIGIT_COLORS[digit] ?? STATUS_COLORS.lucky }}
    >
      {digit}
    </div>
  );
}

function FlowSequenceDigit({ digit, isLast }: { digit: number; isLast: boolean }) {
  const color = isLast ? "#9ca3af" : (MAJOR_DIGIT_COLORS[digit] ?? STATUS_COLORS.lucky);

  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
      style={{
        border: `1.5px solid ${color}`,
        color,
        backgroundColor: "rgba(255, 255, 255, 0.55)",
      }}
    >
      {digit}
    </div>
  );
}

function FlowAnalysisBulletIcon({ status }: { status: FlowAnalysisItem["status"] }) {
  const color =
    status === "positive"
      ? STATUS_COLORS.lucky
      : status === "negative"
        ? STATUS_COLORS.caution
        : STATUS_COLORS.neutral;

  return (
    <span
      className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
    >
      {status === "negative" ? (
        <X size={8} strokeWidth={3} color="#fff" />
      ) : (
        <Check size={8} strokeWidth={3} color="#fff" />
      )}
    </span>
  );
}

function DigitConceptIcon({ label }: { label: string }) {
  const iconSize = 18;
  const accent = "#d48e31";

  switch (label) {
    case "Ketu":
      return (
        <Image
          src="/assets/cover/ketu.png"
          alt=""
          width={iconSize}
          height={iconSize}
          className="object-contain"
          aria-hidden
        />
      );
    case "Void":
      return <VibrationWaveform className="h-3.5 w-9" />;
    case "Mars":
      return <Zap size={iconSize} strokeWidth={2} style={{ color: accent }} fill={accent} />;
    case "Sun":
      return <Sun size={iconSize} strokeWidth={2} style={{ color: accent }} />;
    case "Moon":
      return (
        <Image
          src="/assets/cover/moon.png"
          alt=""
          width={iconSize}
          height={iconSize}
          className="object-contain"
          aria-hidden
        />
      );
    case "Jupiter":
      return <TrendingUp size={iconSize} strokeWidth={2.5} style={{ color: accent }} />;
    default:
      return <Moon size={iconSize} strokeWidth={2} style={{ color: COLORS.brown }} />;
  }
}

function DigitFlowItem({ item }: { item: DigitVibration }) {
  const color = STATUS_COLORS[item.status];

  return (
    <div
      className="flex w-[50px] shrink-0 flex-col items-center normal-case"
      style={{ fontFamily: FLOW_SANS }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-bold"
        style={{
          border: `1.5px solid ${color}`,
          color,
          backgroundColor: "rgba(255, 255, 255, 0.65)",
        }}
      >
        {item.digit}
      </div>
      <p className="mt-1.5 text-[10px] font-semibold leading-tight text-black">{item.label}</p>
      <p className="text-[9px] leading-tight text-black/75">({item.keyword})</p>
      <div className="mt-1 flex h-5 items-center justify-center">
        <DigitConceptIcon label={item.label} />
      </div>
    </div>
  );
}

function DigitFlowLegend() {
  const items: { status: "lucky" | "neutral" | "caution"; label: string }[] = [
    { status: "lucky", label: "Lucky / Supportive" },
    { status: "neutral", label: "Neutral" },
    { status: "caution", label: "Caution / Challenging" },
  ];

  return (
    <div
      className="w-[60%] mx-auto mt-1 flex items-center justify-center gap-5 rounded-lg px-4 py-1 normal-case"
      style={{ border: "1px solid #b8860b", fontFamily: FLOW_SANS }}
    >
      {items.map(({ status, label }) => (
        <span key={status} className="flex items-center gap-1.5">
          <span
            className="flex h-4 w-4 items-center justify-center rounded-full"
            style={{ backgroundColor: STATUS_COLORS[status] }}
          >
            {status === "lucky" ? (
              <Check size={10} strokeWidth={3} color="#fff" />
            ) : status === "caution" ? (
              <X size={10} strokeWidth={3} color="#fff" />
            ) : (
              <Circle size={8} strokeWidth={2.5} color="#fff" fill="#fff" />
            )}
          </span>
          <span className="text-[10px] font-medium text-black">{label}</span>
        </span>
      ))}
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
  "This number carries leadership, intuition, and emotional intelligence but has interruptions that cause inconsistency and scattered focus.",
  lifeAreas = defaultLifeAreas,
  summary =
  "This mobile number has a powerful spiritual start with double Ketu (7), leadership from Sun (1), and wisdom from Jupiter (3) — but interruptions from zeros and Mars (9) create scattered energy. Focus, patience, and discipline will unlock its full potential.",
  pageNumber = "08",
}: DeeperVibrationAnalysisProps) {
  return (
    <ReportPageShell
      padding="14px 36px 36px"
      pageNumber={pageNumber}
      pageLabel="deeper-vibration-analysis"
    >

      <header className="flex flex-col items-center text-center">
        <Image
          src='/assets/ganesha-logo.png'
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-1 h-auto w-[88px]"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={50} />
          <p className="text-md font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="mt-0.5 text-[28px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          DEEPER{" "}
          <span style={{ color: "#d48e31" }}>VIBRATIONAL</span>{" "}
          ANALYSIS
        </h1>
        <p className="text-[14px]" style={{ color: '#213247', opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}>
          Series Energy &amp; Hidden Frequency
        </p>
      </header>


      {/* Top info bar */}
      <section className="relative z-10 mt-3 font-nunito-sans">
        <GoldBox className="grid grid-cols-2 items-center gap-2 px-2 py-1">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center justify-center p-3 rounded-full border-[2px]" style={{ borderColor: COLORS.goldLight }}>
              <Smartphone size={40} style={{ color: COLORS.gold }} />
            </div>
            <div>
              <p className="text-[12px] font-bold tracking-wider" style={{ color: COLORS.red }}>
                CURRENT MOBILE NUMBER
              </p>
              <p className="text-[25px] font-bold text-black">{mobileNumber}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">

            <div className="flex items-center gap-1.5 border-l pl-2" style={{ borderColor: "rgba(184,134,11,0.35)" }}>
              <ClipboardList size={60} strokeWidth={1} style={{ color: COLORS.red, marginTop: 1 }} />
              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[9px] font-bold" style={{ color: COLORS.black }}>COMPOUND TOTAL</p>
                  <p className="text-md font-bold" style={{ color: COLORS.red }}>{compoundTotal}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold" style={{ color: COLORS.black }}>SINGLE ROOT / DRIVER TOTAL</p>
                  <p className="text-md font-bold" style={{ color: COLORS.red }}>{intermediateTotal} → {rootNumber}</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-[9px] font-bold" style={{ color: COLORS.black }}>ROOT NUMBER</p>
                  <RootCircle value={rootNumber} variant="caution" size="md" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Sun size={50} strokeWidth={1} style={{ color: COLORS.red }} />
              <div>
                <p className="text-[9px] font-bold" style={{ color: COLORS.black }}>RULING PLANET</p>
                <p className="text-[9px] font-semibold" style={{ color: COLORS.red }}>
                  {rulingPlanetSymbol} {rulingPlanet}
                </p>
              </div>
            </div>
          </div>

        </GoldBox>
      </section>

      {/* Section 1: Series Pattern */}
      <section className="relative z-10 mt-1.5 font-nunito-sans">
        <div className="mb-0.5 flex items-center gap-1">
          <SectionDiamondTitle>1. SERIES PATTERN &amp; SERIES ROOT</SectionDiamondTitle>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-2">

          <GoldBox className="flex w-[75%] items-center justify-center gap-15 py-2">
            {seriesParts.map((part, index) => (
              <div key={part.partLabel} className="flex flex justify-center items-center">
                {index > 0 ? (
                  <span className="mx-1 shrink-0 text-[28px] font-bold leading-none text-black">-</span>
                ) : null}
                <SeriesPartCard part={part} index={index} />
              </div>
            ))}
          </GoldBox>
          <GoldBox className="flex items-center justify-center w-[25%] gap-2 p-2">
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-[10px] font-bold tracking-wide" style={{ color: COLORS.red }}>
                OVERALL SERIES ROOT
              </p>
              <div className="my-1">
                <RootCircle value={overallSeriesRoot.sum} variant="neutral" size="lg" />
              </div>
              <p className="text-[10px] font-semibold text-black">{overallSeriesRoot.calculation}</p>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-[9px] font-bold text-black">Final Root:</span>
                <RootCircle value={overallSeriesRoot.finalRoot} variant="neutral" size="sm" />
              </div>
            </div>

          </GoldBox>
        </div>

      </section>

      {/* Section 2: Digit flow */}
      <section className="relative z-10 mt-1.5 font-nunito-sans">
        <div className="mb-0.5 flex items-center gap-1">
          <SectionDiamondTitle>2. DIGIT-BY-DIGIT VIBRATION FLOW</SectionDiamondTitle>
        </div>
        <div className="flex items-start justify-center px-1 py-1">
          {digitVibrations.map((item, index) => (
            <div key={index} className="flex items-start">
              <DigitFlowItem item={item} />
              {index < digitVibrations.length - 1 ? (
                <span className="mx-0.5 mt-2.5 shrink-0 text-[13px] font-normal text-black">→</span>
              ) : null}
            </div>
          ))}
        </div>
        <DigitFlowLegend />
      </section>

      {/* Sections 3, 4, 5 */}
      <section className="relative z-10 mt-1.5 grid grid-cols-3 gap-1.5 font-nunito-sans">
        <GoldBox className="p-2" >
          <SectionDiamondTitle>3. RULING PLANETS OF MAJOR DIGITS</SectionDiamondTitle>
          <ul className="mt-2 flex flex-col gap-2">
            {majorDigits.map((d) => (
              <li key={d.digit} className="flex items-start gap-2">
                <MajorDigitCircle digit={d.digit} />
                <p className="text-[10px] leading-snug text-black">
                  <span className="font-bold">{d.planet}</span> {d.description}
                </p>
              </li>
            ))}
          </ul>
        </GoldBox>

        <GoldBox className="p-2" >
          <SectionDiamondTitle>4. HOW THE SERIES FLOWS</SectionDiamondTitle>
          <div className="mt-2 flex items-center justify-center gap-1">
            {flowSequence.map((n, i) => (
              <span key={i} className="flex items-center gap-1">
                <FlowSequenceDigit digit={n} isLast={i === flowSequence.length - 1} />
                {i < flowSequence.length - 1 ? (
                  <span className="text-[10px] font-medium text-black/45">-</span>
                ) : null}
              </span>
            ))}
          </div>
          <p
            className="mt-1 text-center text-[9px] font-bold tracking-wide"
            style={{ color: STATUS_COLORS.lucky }}
          >
            {flowStatus}
          </p>
          <ul className="mt-1 flex flex-col gap-1.5">
            {flowAnalysis.map((item) => (
              <li key={item.text} className="flex items-start gap-1.5 text-[10px] text-black">
                <FlowAnalysisBulletIcon status={item.status} />
                {item.text}
              </li>
            ))}
          </ul>
        </GoldBox>

        <GoldBox className="flex flex-col p-2" >
          <SectionDiamondTitle>5. OVERALL VIBRATIONAL FREQUENCY</SectionDiamondTitle>
          <p
            className="mt-2 text-center text-[10px] font-bold tracking-wide"
            style={{ color: STATUS_COLORS.lucky }}
          >
            {frequencyHeadline}
          </p>
          <p className="mt-2 text-center text-[10px] leading-snug text-black">
            {frequencyDescription}
          </p>
          <p
            className="mt-3 text-center text-[9px] font-bold tracking-wide"
            style={{ color: STATUS_COLORS.lucky }}
          >
            VIBRATION LEVEL
          </p>
          {/* <GradientVibrationWaveform className="mt-2 h-8 w-full" /> */}
          <Image
            src="/assets/cover/page-8-image-5.png"
            alt="Vibration Waveform"
            width={200}
            height={70}
            className="mx-auto mt-1 h-[58px] w-auto max-w-full object-contain"
            style={{ width: "auto", height: "58px" }}
          />
        </GoldBox>
      </section>

      {/* Section 6: Life areas */}
      <section className="relative z-10 mt-1.5 font-nunito-sans">
        <div className="mb-0.5 flex items-center gap-1">
          <SectionDiamondTitle>6. LONG-TERM EFFECT ON LIFE AREAS</SectionDiamondTitle>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {lifeAreas.map((area) => {
            const Icon = area.icon;
            return (
              <GoldBox key={area.title} className="p-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Image src={area.icon} alt={area.title} width={30} height={30} />
                    <p className="text-[12px] font-bold" style={{ color: area.color }}>
                      {area.title}
                    </p>
                  </div>
                  <StarRating rating={area.rating} color={area.color} />
                </div>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-1 text-[10px] leading-snug list-"
                      style={{ color: COLORS.black, opacity: 0.88 }}
                    >
                      {/* <TrendingUp size={7} style={{ color: COLORS.gold, flexShrink: 0, marginTop: 1 }} /> */}
                      <span
                        className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full lin"
                        style={{ backgroundColor: area.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </GoldBox>
            );
          })}
        </div>
      </section>

      <footer className="relative z-10 mt-1.5 flex justify-center px-2 pb-0 font-nunito-sans">
        <FooterSummaryBanner summary={summary} className="max-w-[680px] py-1.5" />
      </footer>

    </ReportPageShell>
  );
}
