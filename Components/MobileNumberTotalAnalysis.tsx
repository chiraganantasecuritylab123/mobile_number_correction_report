import {
  Brain,
  Check,
  ClipboardList,
  Handshake,
  Smartphone,
  Sun,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  ConstellationWheel,
  LoShuSquare,
  LotusIcon,
  OrnamentalDivider,
} from "./CoverPageDecorations";
import { AvailabilityRing, SectionDiamondTitle } from "./LoshuGridDecorations";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type CoreNumberInteraction = {
  number: number;
  label: string;
  planet: string;
  description: string;
  icon: LucideIcon;
};

export type MobileNumberTotalAnalysisProps = {
  mobileNumber?: string;
  digits?: string[];
  compoundTotal?: number;
  intermediateTotal?: number;
  rootNumber?: number;
  rulingPlanet?: string;
  rulingPlanetSymbol?: string;
  energyName?: string;
  keywords?: string;
  positiveQualities?: string[];
  negativeQualities?: string[];
  coreInteractions?: CoreNumberInteraction[];
  compatibilityScore?: number;
  compatibilityLevel?: string;
  compatibilityDescription?: string;
  tip?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const defaultDigits = ["7", "7", "0", "0", "9", "0", "0", "1", "2", "3"];

const defaultPositiveQualities = [
  "Strong leadership & natural authority",
  "Independent & self-reliant",
  "Confident & ambitious mindset",
  "Creative & innovative",
  "Good at new beginnings",
  "Determined & goal-oriented",
  "Brings recognition & success",
];

const defaultNegativeQualities = [
  "Can be egoistic or dominating",
  "Impatient & rigid at times",
  "Overconfident or stubborn",
  "May ignore others' opinions",
  "Needs control & validation",
  "Risk of burnout from overwork",
  "Can lack emotional sensitivity",
];

const defaultCoreInteractions: CoreNumberInteraction[] = [
  {
    number: 5,
    label: "DRIVER NUMBER",
    planet: "Mercury",
    description:
      "Mobile Root 1 supports your Driver 5 by boosting communication, adaptability, and freedom to explore new opportunities.",
    icon: Handshake,
  },
  {
    number: 7,
    label: "CONDUCTOR NUMBER",
    planet: "Ketu",
    description:
      "Root 1 enhances your spiritual path of 7 by giving clarity, focus, and the will power to seek deeper truth and wisdom.",
    icon: Brain,
  },
  {
    number: 2,
    label: "KUA NUMBER",
    planet: "Moon",
    description:
      "Root 1 brings leadership energy that complements your Kua 2 by helping you take initiative while maintaining harmony in relationships.",
    icon: Users,
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

function DigitBox({ digit }: { digit: string }) {
  return (
    <div
      className="flex h-5 w-5 items-center justify-center text-[9px] font-semibold"
      style={{
        border: "1px solid rgba(184, 134, 11, 0.5)",
        color: COLORS.brown,
        backgroundColor: "rgba(255,255,255,0.4)",
      }}
    >
      {digit}
    </div>
  );
}

function CompatibilityGauge({
  percentage,
  className,
}: {
  percentage: number;
  className?: string;
}) {
  const needleAngle = -180 + (percentage / 100) * 180;

  return (
    <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden>
      <path
        d="M12 58A48 48 0 0 1 108 58"
        stroke="#a84432"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M32 58A38 38 0 0 1 88 58"
        stroke="#d48e31"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M48 58A24 24 0 0 1 72 58"
        stroke="#2d7a4f"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.85"
      />
      <g transform={`rotate(${needleAngle} 60 58)`}>
        <line x1="60" y1="58" x2="60" y2="18" stroke="#5d2e17" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="58" r="4" fill="#5d2e17" />
      </g>
      <text x="8" y="68" fill="#a84432" fontSize="5" fontFamily="serif">
        Low
      </text>
      <text x="52" y="68" fill="#d48e31" fontSize="5" fontFamily="serif">
        Medium
      </text>
      <text x="92" y="68" fill="#2d7a4f" fontSize="5" fontFamily="serif">
        High
      </text>
    </svg>
  );
}

function QualitiesColumn({
  variant,
  title,
  items,
}: {
  variant: "positive" | "negative";
  title: string;
  items: string[];
}) {
  const isPositive = variant === "positive";
  const Icon = isPositive ? Check : X;
  const accent = isPositive ? "#2d7a4f" : "#a84432";

  return (
    <div className="flex-1 px-2 py-2">
      <div className="mb-1 flex items-center gap-1">
        <Icon size={10} strokeWidth={2.5} style={{ color: accent }} />
        <p className="text-[6px] font-bold tracking-wide" style={{ color: accent }}>
          {title}
        </p>
      </div>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-1 text-[5.5px] leading-snug"
            style={{ color: COLORS.brown, opacity: 0.9 }}
          >
            <span style={{ color: accent }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CoreInteractionCard({ data }: { data: CoreNumberInteraction }) {
  const Icon = data.icon;

  return (
    <div
      className="flex flex-1 flex-col items-center rounded px-2 py-2 text-center"
      style={{ border: "1px solid rgba(184, 134, 11, 0.35)" }}
    >
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
        style={{
          border: "1.5px solid #d48e31",
          backgroundColor: "rgba(212, 142, 49, 0.1)",
          color: COLORS.brown,
        }}
      >
        {data.number}
      </div>
      <p className="mt-1 text-[6px] font-bold tracking-wide" style={{ color: COLORS.gold }}>
        {data.label}
      </p>
      <p className="text-[5.5px] opacity-75">{data.planet}</p>
      <Icon size={14} strokeWidth={1.5} style={{ color: COLORS.gold, margin: "4px 0" }} />
      <p className="text-[5px] leading-snug" style={{ color: COLORS.brown, opacity: 0.88 }}>
        {data.description}
      </p>
    </div>
  );
}

export default function MobileNumberTotalAnalysis({
  mobileNumber = "+44 7700 900123",
  digits = defaultDigits,
  compoundTotal = 46,
  intermediateTotal = 10,
  rootNumber = 1,
  rulingPlanet = "Sun (Number 1)",
  rulingPlanetSymbol = "☉",
  energyName = "Sun Energy",
  keywords = "Leadership • Power • New Beginnings",
  positiveQualities = defaultPositiveQualities,
  negativeQualities = defaultNegativeQualities,
  coreInteractions = defaultCoreInteractions,
  compatibilityScore = 65,
  compatibilityLevel = "MEDIUM COMPATIBILITY",
  compatibilityDescription = "Your mobile number vibration is moderately supportive. It brings leadership and new opportunities but needs balance in emotional sensitivity and patience to align perfectly with your core energies.",
  tip = "This number gives you the power to lead and succeed. Use it with humility, patience, and consideration for others to get the best results.",
  pageNumber = "07",
}: MobileNumberTotalAnalysisProps) {
  return (
    <ReportPageShell padding="118px 24px 0">
      <header className="flex flex-col items-center text-center">
        <p className="text-[8px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
          ASTRO AARAMBH
        </p>
        <h1 className="mt-1 text-[17px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          MOBILE NUMBER TOTAL ANALYSIS
        </h1>
        <p className="mt-1 text-[8.5px] italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Primary Vibration &amp; Root Energy
        </p>
      </header>

      {/* Current number summary */}
      <section className="relative z-10 mt-3">
        <GoldBox className="grid grid-cols-[1.1fr_1.4fr_auto] items-center gap-3 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Smartphone size={16} strokeWidth={1.5} style={{ color: COLORS.gold }} />
            <div>
              <p className="text-[6px] font-bold tracking-wider" style={{ color: COLORS.gold }}>
                CURRENT MOBILE NUMBER
              </p>
              <p className="text-[10px] font-bold" style={{ color: COLORS.brown }}>
                {mobileNumber}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 border-l pl-3" style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}>
            <ClipboardList size={14} strokeWidth={1.5} style={{ color: COLORS.gold, marginTop: 2 }} />
            <div className="grid grid-cols-3 gap-2">
              <div>
                <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>
                  COMPOUND TOTAL
                </p>
                <p className="text-sm font-bold">{compoundTotal}</p>
              </div>
              <div>
                <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>
                  SINGLE ROOT / DRIVER TOTAL
                </p>
                <p className="text-[9px] font-bold">
                  {intermediateTotal} &rarr; {rootNumber}
                </p>
              </div>
              <div>
                <p className="text-[5.5px] font-bold" style={{ color: COLORS.gold }}>
                  RULING PLANET OF TOTAL
                </p>
                <p className="text-[8px] font-semibold" style={{ color: "#d48e31" }}>
                  {rulingPlanetSymbol} {rulingPlanet}
                </p>
              </div>
            </div>
          </div>

          <Sun size={22} strokeWidth={1.5} style={{ color: "#d48e31", opacity: 0.85 }} />
        </GoldBox>
      </section>

      {/* Number breakdown */}
      <section className="relative z-10 mt-2">
        <div className="mb-1 flex items-center justify-center gap-2">
          <OrnamentalDivider className="h-[10px] w-[70px]" />
          <SectionDiamondTitle>NUMBER BREAKDOWN</SectionDiamondTitle>
          <OrnamentalDivider className="h-[10px] w-[70px] -scale-x-100" />
        </div>
        <GoldBox className="flex flex-col items-center px-3 py-2.5">
          <div className="flex flex-wrap items-center justify-center gap-1">
            {digits.map((digit, index) => (
              <span key={index} className="flex items-center gap-1">
                <DigitBox digit={digit} />
                {index < digits.length - 1 && (
                  <span className="text-[8px] font-bold opacity-50">+</span>
                )}
              </span>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[9px] font-bold opacity-60">=</span>
            <span className="text-sm font-bold">{compoundTotal}</span>
            <span className="text-[9px] font-bold opacity-60">=</span>
            <span className="text-sm font-bold">{intermediateTotal}</span>
            <span className="text-[9px] font-bold opacity-60">=</span>
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-base font-bold"
              style={{
                border: "2px solid #d48e31",
                backgroundColor: "rgba(212, 142, 49, 0.15)",
                color: COLORS.brown,
              }}
            >
              {rootNumber}
            </div>
          </div>
        </GoldBox>
      </section>

      {/* Root number analysis */}
      <section className="relative z-10 mt-2">
        <GoldBox className="flex overflow-hidden">
          <QualitiesColumn
            variant="positive"
            title={`POSITIVE QUALITIES OF ROOT ${rootNumber}`}
            items={positiveQualities}
          />
          <div
            className="flex w-[130px] shrink-0 flex-col items-center justify-center border-x px-2 py-3 text-center"
            style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
          >
            <p className="text-[5.5px] font-bold tracking-wide" style={{ color: COLORS.gold }}>
              ROOT NUMBER
            </p>
            <p className="text-[5px] opacity-70">(PRIMARY VIBRATION)</p>
            <div
              className="mt-2 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold"
              style={{
                border: "2.5px solid #d48e31",
                backgroundColor: "rgba(212, 142, 49, 0.12)",
                color: COLORS.brown,
              }}
            >
              {rootNumber}
            </div>
            <p className="mt-2 text-[7px] font-semibold" style={{ color: "#d48e31" }}>
              {energyName}
            </p>
            <p className="mt-0.5 text-[5.5px] opacity-80">{keywords}</p>
          </div>
          <QualitiesColumn
            variant="negative"
            title={`NEGATIVE QUALITIES OF ROOT ${rootNumber}`}
            items={negativeQualities}
          />
        </GoldBox>
      </section>

      {/* Core number interactions */}
      <section className="relative z-10 mt-2">
        <SectionDiamondTitle className="mb-1 justify-center">
          HOW THIS TOTAL INTERACTS WITH YOUR CORE NUMBERS
        </SectionDiamondTitle>
        <GoldBox className="flex gap-2 p-2">
          {coreInteractions.map((item) => (
            <CoreInteractionCard key={item.label} data={item} />
          ))}
        </GoldBox>
      </section>

      {/* Compatibility score */}
      <section className="relative z-10 mt-2">
        <SectionDiamondTitle className="mb-1 justify-center">
          OVERALL COMPATIBILITY SCORE
        </SectionDiamondTitle>
        <GoldBox className="flex items-center gap-3 px-3 py-2">
          <CompatibilityGauge percentage={compatibilityScore} className="h-16 w-28 shrink-0" />
          <AvailabilityRing percentage={compatibilityScore} className="h-14 w-14 shrink-0" />
          <div className="flex-1">
            <p className="text-[7px] font-bold tracking-wide" style={{ color: "#d48e31" }}>
              {compatibilityLevel}
            </p>
            <p
              className="mt-1 text-[5.5px] leading-snug"
              style={{ color: COLORS.brown, opacity: 0.88 }}
            >
              {compatibilityDescription}
            </p>
          </div>
        </GoldBox>
      </section>

      <footer className="relative z-10 mt-2 flex flex-col items-center pb-1">
        <LoShuSquare className="pointer-events-none absolute -left-1 bottom-0 h-12 w-12 opacity-70" />
        <ConstellationWheel className="pointer-events-none absolute -right-1 bottom-0 h-12 w-12 opacity-55" />
        <div
          className="flex items-center gap-2 rounded-md px-3 py-1.5"
          style={{
            border: "1px solid rgba(212, 142, 49, 0.45)",
            backgroundColor: "rgba(212, 142, 49, 0.08)",
          }}
        >
          <LotusIcon className="h-4 w-7 shrink-0 opacity-55" />
          <p className="max-w-[520px] text-center text-[6px] leading-relaxed" style={{ color: COLORS.brown }}>
            <span className="font-bold" style={{ color: COLORS.gold }}>
              TIP:{" "}
            </span>
            <span className="italic opacity-90">{tip}</span>
          </p>
          <LotusIcon className="h-4 w-7 shrink-0 opacity-55" />
        </div>
      </footer>

      <PageFooterBar
        className="relative -mx-6 mt-1.5 h-9 w-[calc(100%+48px)]"
        pageNumber={pageNumber}
      />
    </ReportPageShell>
  );
}
