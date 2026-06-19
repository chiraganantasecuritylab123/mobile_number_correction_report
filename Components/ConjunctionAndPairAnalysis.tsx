import {
  AlertTriangle,
  Check,
  CircleDot,
  MessageCircle,
  Minus,
  Moon,
  Scale,
  Search,
  Smartphone,
  Sun,
  TrendingUp,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { cinzel } from "@/app/fonts";
import { Pattern3 } from "./CommunComponents";
import { SectionDiamondTitle } from "./LoshuGridDecorations";
import { MoonIcon, SunIcon } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type PairAnalysis = {
  pair: string;
  title: string;
  icon: LucideIcon;
  iconSrc?: string;
  status: "lucky" | "neutral" | "caution";
  impactLabel: string;
  meaning: string;
  lifeAreas: string[];
};

export type ConjunctionSummary = {
  positivePairs: string[];
  positiveDescription: string;
  mixedPairs: string[];
  mixedDescription: string;
  challengingPairs: string[];
  challengingDescription: string;
};

export type ConjunctionAndPairAnalysisProps = {
  mobileNumber?: string;
  digits?: string[];
  pairAnalyses?: PairAnalysis[];
  summary?: ConjunctionSummary;
  keyInsight?: string;
  tip?: string;
};

const COLORS = REPORT_COLORS;
const STATUS_COLORS = { lucky: "#2d7a4f", neutral: "#d48e31", caution: "#a84432" };
const BODY_TEXT = "#24324A";
const SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const BADGE_STYLES = {
  lucky: { bg: "rgba(234, 247, 238, 0.55)", text: "#2d7a4f", border: "#B4E4C4" },
  neutral: { bg: "rgba(255, 244, 230, 0.55)", text: "#d48e31", border: "#FFE0B2" },
  caution: { bg: "rgba(252, 236, 235, 0.55)", text: "#a84432", border: "#F5C2C1" },
};

const CARD_THEMES = {
  lucky: { border: "#9FD4B0", bg: "rgba(234, 247, 238, 0.4)" },
  neutral: { border: "#FFCC80", bg: "rgba(255, 244, 230, 0.4)" },
  caution: { border: "#EFB4B2", bg: "rgba(252, 236, 235, 0.4)" },
};

const SUMMARY_STATUS_COLORS = {
  lucky: "#136A26",
  neutral: "#C45500",
  caution: "#CC0000",
};

const SUMMARY_CARD_BG = {
  lucky: "#EAF7EE",
  neutral: "#FFF4E6",
  caution: "#FCECEB",
};

function pairsFontSize(joined: string): string {
  if (joined.length > 24) return "text-[9px]";
  if (joined.length > 17) return "text-[10px]";
  return "text-[12px]";
}

function SummaryCard({
  status,
  title,
  pairs,
  description,
}: {
  status: "lucky" | "neutral" | "caution";
  title: string;
  pairs: string[];
  description: string;
}) {
  const color = SUMMARY_STATUS_COLORS[status];
  const bg = SUMMARY_CARD_BG[status];
  const Icon = status === "lucky" ? Check : status === "caution" ? X : Minus;
  const pairsText = pairs.join(", ");

  return (
    <div
      className="flex min-w-0 flex-1 items-start gap-1.5 rounded-xl p-2"
      style={{
        border: `1px solid ${color}33`,
        backgroundColor: bg,
      }}
    >
      <div
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: color }}
      >
        <Icon size={11} strokeWidth={3} className="text-white" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center text-center">
        <h3
          className="text-[8.5px] font-extrabold uppercase tracking-wider"
          style={{ color, fontFamily: SANS }}
        >
          {title}
        </h3>

        <p
          className={`mt-1 font-black tracking-wide leading-none ${pairsFontSize(pairsText)}`}
          style={{ color, fontFamily: SANS }}
        >
          {pairsText}
        </p>

        <p
          className="mt-1 text-[8px] font-normal normal-case leading-snug"
          style={{ color: "#2D3748", fontFamily: SANS }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

const CIRCLE_SIZE = 24;
const COLUMN_VERTICAL_GAP = 3;
const CONNECTOR_HEIGHT = 15;
const PAIR_BOX_HEIGHT = 16;

function formatDisplayMobileNumber(value: string): string {
  const compact = value.replace(/\s/g, "");
  if (compact.startsWith("+44") && compact.length >= 13) {
    const national = compact.slice(3);
    return `+44 ${national.slice(0, 4)} ${national.slice(4)}`;
  }
  if (compact.startsWith("+") && compact.length > 4) {
    return compact.replace(/(\+\d{2})(\d{4})(\d+)/, "$1 $2 $3");
  }
  return value.trim();
}

const defaultMappingDigits = ["+", "4", "4", "7", "7", "0", "0", "9", "0", "1", "2", "3"];

const CONJUNCTION_ICONS = {
  adjacencyAtom: "/assets/conjunction/atom-icon.png",
  practicalLessonsScale: "/assets/conjunction/practical-lessons-scale.png",
  doubleMercury: "/assets/conjunction/double-mercury.png",
  zeroEnergy: "/assets/conjunction/zero-energy.png",
  energyShift: "/assets/conjunction/energy-shift.png",
  sunRising: "/assets/conjunction/sun-rising.png",
  keyInsightStar: "/assets/conjunction/key-insight-star.png",
} as const;

function ReportIcon({
  src,
  size,
  className = "",
}: {
  src: string;
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      aria-hidden
    />
  );
}

const ADJACENCY_TEXT =
  "Adjacency creates powerful vibrational bonds between numbers. These pairs influence events, opportunities and challenges in your life.";

const defaultPairAnalyses: PairAnalysis[] = [
  { pair: "44", title: "Strong Repetition", icon: AlertTriangle, status: "caution", impactLabel: "Negative", meaning: "Creates obstacles, resistance and stress.", lifeAreas: ["Career Growth", "Mental Peace", "Stability"] },
  { pair: "47", title: "Practical Lessons", icon: Scale, iconSrc: CONJUNCTION_ICONS.practicalLessonsScale, status: "neutral", impactLabel: "Mixed", meaning: "Hard work with delays, but brings wisdom.", lifeAreas: ["Career", "Finances", "Learning"] },
  { pair: "77", title: "Double Mercury", icon: MessageCircle, iconSrc: CONJUNCTION_ICONS.doubleMercury, status: "lucky", impactLabel: "Very Positive", meaning: "Excellent for intelligence, communication & success.", lifeAreas: ["Communication", "Business", "Networking"] },
  { pair: "70", title: "Spiritual Search", icon: Search, status: "neutral", impactLabel: "Mixed", meaning: "Inner search, shifting mindset, detachment.", lifeAreas: ["Spiritual Growth", "Research", "Decision Making"] },
  { pair: "00", title: "Zero Energy", icon: CircleDot, iconSrc: CONJUNCTION_ICONS.zeroEnergy, status: "caution", impactLabel: "Negative", meaning: "Energy drain, delays & stagnation.", lifeAreas: ["Progress", "Motivation", "Health"] },
  { pair: "09", title: "Energy Shift", icon: Zap, iconSrc: CONJUNCTION_ICONS.energyShift, status: "neutral", impactLabel: "Mixed", meaning: "Endings lead to new beginnings.", lifeAreas: ["Transformations", "Finances", "Emotions"] },
  { pair: "90", title: "Release & Move", icon: Zap, iconSrc: CONJUNCTION_ICONS.energyShift, status: "neutral", impactLabel: "Mixed", meaning: "Let go of the old to welcome the new.", lifeAreas: ["Change", "Travel", "Emotional Letting Go"] },
  { pair: "00", title: "Zero Energy", icon: CircleDot, iconSrc: CONJUNCTION_ICONS.zeroEnergy, status: "caution", impactLabel: "Negative", meaning: "Repeated zero increases delays & blockages.", lifeAreas: ["Career", "Finances", "Relationships"] },
  { pair: "01", title: "Sun Rising", icon: Sun, iconSrc: CONJUNCTION_ICONS.sunRising, status: "lucky", impactLabel: "Positive", meaning: "New start, leadership & confidence boost.", lifeAreas: ["Leadership", "Opportunities", "Recognition"] },
  { pair: "12", title: "Growth Potential", icon: TrendingUp, status: "lucky", impactLabel: "Positive", meaning: "Step-by-step progress with planning.", lifeAreas: ["Career", "Finances", "Personal Growth"] },
  { pair: "23", title: "Emotional Balance", icon: Moon, status: "neutral", impactLabel: "Mixed", meaning: "Creativity with emotions, need balance.", lifeAreas: ["Relationships", "Creativity", "Partnerships"] },
];

const defaultSummary: ConjunctionSummary = {
  positivePairs: ["77", "01", "12"],
  positiveDescription: "Bring success, communication, new beginnings & steady growth.",
  mixedPairs: ["47", "70", "09", "90", "23"],
  mixedDescription: "Bring lessons, changes and moderate results based on your actions.",
  challengingPairs: ["44", "00", "00"],
  challengingDescription: "Create delays, blockages and require patience, discipline & remedies.",
};

function parseMobileDigits(mobileNumber: string): string[] {
  const chars = mobileNumber.replace(/\s/g, "").split("");
  return chars[0] === "+" ? chars : ["+", ...chars];
}

function getImpactColor(impactLabel: string, accent: string): string {
  const value = impactLabel.toLowerCase();
  if (value.includes("negative") || value.includes("positive")) return accent;
  return BODY_TEXT;
}

function SectionBadge({ index }: { index: string }) {
  return (
    <span
      className="inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[7px] font-bold"
      style={{ backgroundColor: COLORS.brown, color: COLORS.cream, border: "1px solid #d48e31" }}
    >
      {index}
    </span>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-0.5 flex items-center gap-1">
      <SectionBadge index={index} />
      <SectionDiamondTitle>{title}</SectionDiamondTitle>
    </div>
  );
}

function KeyInsightFooter({
  keyInsight,
  tip,
}: {
  keyInsight: string;
  tip: string;
}) {
  return (
    <>
      <SectionHeader index="4" title="KEY INSIGHT" />
      <GoldBox className="px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <ReportIcon src={CONJUNCTION_ICONS.keyInsightStar} size={12} />
          <p
            className="min-w-0 flex-1 text-center text-[8.5px] font-normal leading-[1.6]"
            style={{ color: "#4A3F35", fontFamily: SANS }}
          >
            {keyInsight}
          </p>
          <ReportIcon src={CONJUNCTION_ICONS.keyInsightStar} size={10} />
        </div>
      </GoldBox>
      <GoldBox className="mt-1 px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <ReportIcon src={CONJUNCTION_ICONS.keyInsightStar} size={10} />
          <p
            className="min-w-0 flex-1 text-center text-[7.5px] font-normal normal-case leading-snug"
            style={{ color: COLORS.brown, fontFamily: SANS }}
          >
            <span className="font-bold" style={{ color: COLORS.gold }}>
              TIP:{" "}
            </span>
            {tip}
          </p>
          <ReportIcon src={CONJUNCTION_ICONS.keyInsightStar} size={10} />
        </div>
      </GoldBox>
    </>
  );
}

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
      className={`box-border max-w-full overflow-hidden rounded-md ${className}`}
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

function MappingDigitCircle({ digit }: { digit: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
      style={{
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        color: "#111111",
        fontFamily: SANS,
        border: "1px dashed #B8A898",
        backgroundColor: "rgba(255, 255, 255, 0.55)",
      }}
    >
      {digit}
    </div>
  );
}

function PairConnector({ color }: { color: string }) {
  return (
    <svg
      width={8}
      height={CONNECTOR_HEIGHT}
      viewBox={`0 0 8 ${CONNECTOR_HEIGHT}`}
      aria-hidden
      className="my-0.5 shrink-0"
    >
      <polygon points="4,1 2,3.5 6,3.5" fill={color} />
      <line
        x1="4"
        y1="4.5"
        x2="4"
        y2={CONNECTOR_HEIGHT - 4.5}
        stroke={color}
        strokeWidth="1"
        strokeDasharray="1.5 2.5"
        strokeLinecap="round"
      />
      <polygon points={`4,${CONNECTOR_HEIGHT - 1} 2,${CONNECTOR_HEIGHT - 3.5} 6,${CONNECTOR_HEIGHT - 3.5}`} fill={color} />
    </svg>
  );
}

function MappingPairBox({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded px-1 text-[10px] font-bold leading-none ${cinzel.className}`}
      style={{
        minWidth: 22,
        height: PAIR_BOX_HEIGHT,
        backgroundColor: bg,
        color,
        border: `1px solid ${color}`,
        letterSpacing: "-0.04em",
      }}
    >
      {label}
    </div>
  );
}

function PairCardTitleIcon({ data, accent }: { data: PairAnalysis; accent: string }) {
  if (data.iconSrc) {
    return <ReportIcon src={data.iconSrc} size={13} />;
  }

  const Icon = data.icon;
  return <Icon size={10} strokeWidth={2} style={{ color: accent, flexShrink: 0 }} />;
}

function PairAnalysisCard({ data }: { data: PairAnalysis }) {
  const accent = STATUS_COLORS[data.status];
  const theme = CARD_THEMES[data.status];
  const impactColor = getImpactColor(data.impactLabel, accent);

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl shadow-sm"
      style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.bg, fontFamily: SANS }}
    >
      <div className="px-2 pb-1.5 pt-2 text-center">
        <p className={`text-[19px] font-bold leading-none tracking-tight ${cinzel.className}`} style={{ color: accent }}>
          {data.pair}
        </p>
        <div className="mt-1 flex items-center justify-center gap-1">
          <PairCardTitleIcon data={data} accent={accent} />
          <span className="text-[8.5px] font-semibold leading-tight" style={{ color: BODY_TEXT }}>
            {data.title}
          </span>
        </div>
      </div>
      <div className="mx-2 border-t" style={{ borderColor: theme.border }} />
      <div className="px-2 py-1.5 text-center">
        <p className="text-[7px] font-bold uppercase tracking-[0.08em]" style={{ color: accent }}>IMPACT</p>
        <p className="mt-0.5 text-[9px] font-bold leading-tight" style={{ color: impactColor }}>{data.impactLabel}</p>
      </div>
      <div className="mx-2 border-t" style={{ borderColor: theme.border }} />
      <div className="px-2 py-1.5 text-center">
        <p className="text-[7px] font-bold uppercase tracking-[0.08em]" style={{ color: accent }}>MEANING</p>
        <p
          className="mt-0.5 text-[7.5px] font-normal normal-case leading-snug"
          style={{ color: BODY_TEXT, fontFamily: SANS }}
        >
          {data.meaning}
        </p>
      </div>
      <div className="mx-2 border-t" style={{ borderColor: theme.border }} />
      <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-1.5 text-center">
        <p className="text-[7px] font-bold uppercase tracking-[0.08em]" style={{ color: accent }}>LIFE AREAS AFFECTED</p>
        <ul className="mt-1 inline-block text-left">
          {data.lifeAreas.map((area) => (
            <li key={area} className="flex items-start gap-1 text-[7.5px] leading-snug" style={{ color: BODY_TEXT }}>
              <span className="mt-[1px] shrink-0" style={{ color: COLORS.black }}>•</span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ConjunctionAndPairAnalysis({
  mobileNumber = "+44 7700 900123",
  digits: digitsProp = defaultMappingDigits,
  pairAnalyses = defaultPairAnalyses,
  summary = defaultSummary,
  keyInsight =
    "Your number shows very strong communication and leadership energy (77, 01, 12) but also carries repetition of 44 and double 00 which create delays and stress. Balancing patience, focus and positive action will unlock the full power of this number.",
  tip = "Understanding these pairs helps you make better decisions, reduce delays and align your actions with the right time and energy.",
}: ConjunctionAndPairAnalysisProps) {
  const displayNumber = formatDisplayMobileNumber(mobileNumber);
  const allChars = digitsProp ?? parseMobileDigits(mobileNumber);
  const numericDigits = allChars.filter((d) => d !== "+");
  const mappingPairs = pairAnalyses.slice(0, 11);
  const mappingDigits = numericDigits.slice(0, mappingPairs.length);
  const topRow = mappingPairs.slice(0, 6);
  const bottomRow = mappingPairs.slice(6);

  return (
    <ReportPageShell padding="20px 40px 28px">
      <div className="flex h-full w-full max-w-full flex-col">
      <SunIcon className="pointer-events-none absolute left-3 top-3 z-20 h-11 w-11 opacity-75" />
      <MoonIcon className="pointer-events-none absolute right-3 top-3 z-20 h-11 w-11 opacity-75" />

      <header className="relative z-10 flex flex-col items-center text-center">
        <Image
          src="/assets/ganesha-logo.png"
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-2"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={100} />
          <p className="text-md font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={100} className="rotate-180" />
        </div>
        <h1 className="mt-1 text-[35px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          CONJUNCTION{" "}
          <span style={{ color: "#d48e31" }}>&amp; PAIR</span>{" "}
          ANALYSIS
        </h1>
        <p className="mt-1 text-sm italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Power of Adjacent Digits
        </p>
      </header>

      <section className="relative z-10 mt-2">
        <GoldBox className="grid grid-cols-[1.1fr_auto_1fr] items-center gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{ border: "1px solid rgba(184, 134, 11, 0.6)" }}
            >
              <Smartphone size={22} strokeWidth={1.5} style={{ color: COLORS.gold }} />
            </div>
            <div>
              <p className="mb-0.5 text-[10px] font-extrabold tracking-wider" style={{ color: COLORS.gold }}>
                CURRENT MOBILE NUMBER
              </p>
              <p className="text-[22px] font-bold leading-none tracking-wide font-serif" style={{ color: COLORS.brown }}>
                {displayNumber}
              </p>
            </div>
          </div>

          <div className="h-14 w-px shrink-0" style={{ backgroundColor: "rgba(184, 134, 11, 0.3)" }} />

          <div className="flex min-w-0 items-center gap-2.5 pl-1">
            <ReportIcon src={CONJUNCTION_ICONS.adjacencyAtom} size={32} />
            <p
              className="min-w-0 flex-1 text-center text-[9px] font-normal normal-case leading-[1.65]"
              style={{ color: "#5C4D3C", fontFamily: SANS }}
            >
              {ADJACENCY_TEXT}
            </p>
          </div>
        </GoldBox>
      </section>

      <section className="relative z-10 mt-1 min-w-0">
        <SectionHeader index="1" title="ADJACENT PAIR MAPPING" />
        <GoldBox className="select-none px-3 py-1.5">
          <div className="flex min-w-0 items-start">
            <span
              className="mr-3 mt-1.5 shrink-0 text-[15px] font-bold leading-none"
              style={{ color: "#111111", fontFamily: SANS }}
            >
              +
            </span>
            <div className="flex min-w-0 flex-1 items-start justify-between gap-0.5">
              {mappingPairs.map((pairData, index) => {
                const badge = BADGE_STYLES[pairData.status];
                return (
                  <div
                    key={`mapping-col-${index}`}
                    className="flex min-w-0 flex-1 flex-col items-center"
                    style={{ gap: COLUMN_VERTICAL_GAP }}
                  >
                    <MappingDigitCircle digit={mappingDigits[index] ?? ""} />
                    <PairConnector color={badge.text} />
                    <MappingPairBox label={pairData.pair} color={badge.text} bg={badge.bg} />
                  </div>
                );
              })}
            </div>
          </div>
        </GoldBox>
      </section>

      <section className="relative z-10 mt-1 min-w-0">
        <SectionHeader index="2" title="DETAILED PAIR ANALYSIS" />
        <div className="grid grid-cols-6 gap-1">
          {topRow.map((pair, index) => (
            <PairAnalysisCard key={`${pair.pair}-${index}`} data={pair} />
          ))}
        </div>
        <div className="mt-0.5 grid grid-cols-6 gap-1">
          <div className="col-span-6 flex justify-center gap-1">
            {bottomRow.map((pair, index) => (
              <div key={`${pair.pair}-${index + 6}`} className="min-w-0 flex-[0_0_calc((100%-25px)/6)]">
                <PairAnalysisCard data={pair} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-1 min-w-0">
        <SectionHeader index="3" title="OVERALL CONJUNCTION SUMMARY" />
        <GoldBox className="p-2">
          <div className="flex min-w-0 items-stretch gap-2">
            <SummaryCard status="lucky" title="STRONG POSITIVE PAIRS" pairs={summary.positivePairs} description={summary.positiveDescription} />
            <SummaryCard status="neutral" title="MIXED / NEUTRAL PAIRS" pairs={summary.mixedPairs} description={summary.mixedDescription} />
            <SummaryCard status="caution" title="CHALLENGING PAIRS" pairs={summary.challengingPairs} description={summary.challengingDescription} />
          </div>
        </GoldBox>
      </section>

      <section className="relative z-10 mt-1 min-w-0">
        <KeyInsightFooter keyInsight={keyInsight} tip={tip} />
      </section>
      </div>
    </ReportPageShell>
  );
}
