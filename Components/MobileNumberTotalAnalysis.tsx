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
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { CoverLotus } from "./CommunComponents";
import OverallCompatibilityScore from "./OverallCompatibilityScore";

function Pattern3({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Image src="/assets/numeroscope/pattern-3.png" alt="" width={size} height={Math.round(size * 0.58)} className={`object-contain opacity-80 ${className ?? ""}`} aria-hidden />
  );
}

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


function NumeroscopeSectionHeader({ title }: { title: string }) {
  return (
    <div className="relative mb-3 flex items-center justify-center">
      <div
        className="relative flex w-full items-center justify-center rounded-2xl px-10 py-2"
        style={{
          border: "1px solid #D8AC71",
          backgroundColor: "rgba(250, 236, 218, 0.65)",
        }}
      >
        <Image
          src="/assets/cover/pattern-1.png"
          alt=""
          width={30}
          height={42}
          className="absolute left-4 top-1/2 -translate-y-1/2 object-contain"
          aria-hidden
        />
        <Image
          src="/assets/cover/pattern-1.png"
          alt=""
          width={30}
          height={42}
          className="absolute right-4 top-1/2 -translate-y-1/2 object-contain"
          aria-hidden
        />
        <h3
          className="text-center text-[11px] font-bold tracking-[0.14em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

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
      className="flex h-8 w-8 items-center justify-center rounded-md text-[16px] font-bold font-serif"
      style={{
        border: "1.5px solid rgba(184, 134, 11, 0.55)",
        color: COLORS.brown,
        backgroundColor: "rgba(253, 245, 230, 0.9)",
      }}
    >
      {digit}
    </div>
  );
}

function getDigitGapTickX(digitCount: number, afterDigitIndex: number) {
  const plusShare = 0.2;
  const digitShare = 1 - plusShare;
  const digitUnit = digitShare / digitCount;
  const plusUnit = digitCount > 1 ? plusShare / (digitCount - 1) : 0;
  const normalized =
    (afterDigitIndex + 1) * digitUnit + afterDigitIndex * plusUnit + plusUnit / 2;
  return 2 + normalized * 96;
}

function DigitRowBracket({ digitCount }: { digitCount: number }) {
  const stroke = "rgba(92, 64, 51, 0.45)";
  const baselineY = 10;
  const leftX = 2;
  const rightX = 98;
  const centerX = 50;
  const splitTickX = getDigitGapTickX(digitCount, Math.min(7, digitCount - 2));

  return (
    <div className="relative mx-auto mt-1 h-6 w-full">
      <svg className="h-full w-full" viewBox="0 0 100 22" fill="none" preserveAspectRatio="none" aria-hidden>
        {/* Main horizontal line */}
        <line x1={leftX} y1={baselineY} x2={rightX} y2={baselineY} stroke={stroke} strokeWidth="1" />

        {/* Left bracket tick */}
        <line x1={leftX} y1={baselineY} x2={leftX} y2={2} stroke={stroke} strokeWidth="1" strokeLinecap="round" />

        {/* Right bracket tick */}
        <line x1={rightX} y1={baselineY} x2={rightX} y2={2} stroke={stroke} strokeWidth="1" strokeLinecap="round" />

        {/* Split tick between 8th and 9th digits */}
        {digitCount >= 9 && (
          <line
            x1={splitTickX}
            y1={baselineY}
            x2={splitTickX}
            y2={5}
            stroke={stroke}
            strokeWidth="1"
            strokeLinecap="round"
          />
        )}

        {/* Center downward arrow */}
        <line x1={centerX} y1={baselineY} x2={centerX} y2={19} stroke={stroke} strokeWidth="1" />
        <path
          d={`M ${centerX - 2},16 L ${centerX},20 L ${centerX + 2},16`}
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
  const r = 32;
  const c = 100.5;
  const lowLen = c * 0.40;  // 40.2
  const medLen = c * 0.30;  // 30.15
  const highLen = c * 0.30; // 30.15

  return (
    <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden>
      {/* Red Segment (0% - 40%) */}
      <path
        d="M 28 56 A 32 32 0 0 1 92 56"
        stroke="#a84432"
        strokeWidth="12"
        strokeDasharray={`${lowLen} ${c}`}
        strokeLinecap="round"
      />
      {/* Orange Segment (41% - 70%) */}
      <path
        d="M 28 56 A 32 32 0 0 1 92 56"
        stroke="#e19d45"
        strokeWidth="12"
        strokeDasharray={`${medLen + 2} ${c}`}
        strokeDashoffset={-lowLen + 1}
      />
      {/* Green Segment (71% - 100%) */}
      <path
        d="M 28 56 A 32 32 0 0 1 92 56"
        stroke="#2d7a4f"
        strokeWidth="12"
        strokeDasharray={`${highLen} ${c}`}
        strokeDashoffset={-(lowLen + medLen)}
        strokeLinecap="round"
      />

      {/* Needle */}
      <g transform={`rotate(${needleAngle} 60 56)`}>
        <path
          d="M 58 56 L 59.5 20 L 60.5 20 L 62 56 Z"
          fill="#2d1f18"
        />
        <circle cx="60" cy="56" r="4.5" fill="#2d1f18" />
        <circle cx="60" cy="56" r="1.8" fill="#ffffff" />
      </g>

      {/* Labels */}
      {/* Low Label (Left) */}
      <text x="14" y="32" fill="#a84432" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        Low
      </text>
      <text x="14" y="38" fill="#a84432" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        0% - 40%
      </text>

      {/* Medium Label (Top Center) */}
      <text x="60" y="10" fill="#e19d45" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        Medium
      </text>
      <text x="60" y="16" fill="#e19d45" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        41% - 70%
      </text>

      {/* High Label (Right) */}
      <text x="106" y="32" fill="#2d7a4f" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        High
      </text>
      <text x="106" y="38" fill="#2d7a4f" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        71% - 100%
      </text>
    </svg>
  );
}

function CompatibilityProgressRing({
  percentage,
  size = 56,
}: {
  percentage: number;
  size?: number;
}) {
  const radius = 20;
  const strokeWidth = 4.5;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 50 50" className="-rotate-90">
        {/* Background track */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#e3d7c5"
          strokeWidth={strokeWidth}
          fill="transparent"
          opacity="0.6"
        />
        {/* Progress track */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#e19d45"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage text in the middle */}
      <span
        className="absolute text-[15px] font-bold font-serif"
        style={{ color: "#5d2e17" }}
      >
        {percentage}%
      </span>
    </div>
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
    <div className="flex-1">
      <div
        className="mb-2 flex items-center gap-1.5 rounded-lg px-2 py-1.5"
        style={{
          border: "1px solid rgba(184, 134, 11, 0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.35)",
        }}
      >
        <div
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: accent }}
        >
          <Icon size={9} strokeWidth={3} color="#ffffff" />
        </div>
        <p className="text-[9px] font-bold tracking-wide uppercase font-serif leading-tight" style={{ color: accent }}>
          {title}
        </p>
      </div>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-1.5 text-[8.5px] leading-snug"
            style={{ color: COLORS.darkBlue }}
          >
            <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
            <span style={{ color: COLORS.darkBlue }} className="text-[11px] font-nunito-sans">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MeditationIcon({ className, style, size = 22 }: { className?: string; style?: React.CSSProperties; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 7.5v6" />
      <path d="M8 12c1.5-1.5 3-2 4-2s2.5.5 4 2" />
      <path d="M5 18c2.5-1.5 5-2 7-2s4.5.5 7 2" />
      <path d="M9 16c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
    </svg>
  );
}

function ScrollOrnament({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 50 14" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M4 10C8 10 12 3 17 6C20 8 23 8 26 6C31 3 35 10 39 10C41 10 43 8 44 6C45 4 43 2 40 4C37 6 38 10 42 11"
        stroke="#B8860B"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="25" cy="6" r="1.5" fill="#D4AF37" />
    </svg>
  );
}

function CoreInteractionCard({ data }: { data: CoreNumberInteraction }) {
  let DisplayIcon = data.icon;
  if (data.label.toUpperCase().includes("CONDUCTOR") || data.planet.toUpperCase().includes("KETU")) {
    DisplayIcon = MeditationIcon as any;
  }

  return (
    <div className="flex flex-1 flex-col justify-between py-0.5">
      <div className="flex items-center gap-2">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[20px] font-bold font-serif"
          style={{
            border: "1.2px solid #b8860b",
            color: "#5d2e17",
            backgroundColor: "rgba(255, 255, 255, 0.35)",
          }}
        >
          {data.number}
        </div>
        <div className="flex flex-col text-left">
          <p className="text-[10px] font-extrabold tracking-wider font-serif uppercase" style={{ color: "#5d2e17" }}>
            {data.label}
          </p>
          <p className="mt-0.5 text-[10px] font-semibold tracking-wide font-sans" style={{ color: "#d48e31" }}>
            {data.planet}
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <p className="flex-1 text-[10px] leading-snug text-left font-sans" style={{ color: COLORS.darkBlue, opacity: 0.95 }}>
          {data.description}
        </p>
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            border: "1.2px solid #b8860b",
            backgroundColor: "rgba(255, 255, 255, 0.35)",
          }}
        >
          <DisplayIcon size={18} strokeWidth={1.5} style={{ color: "#b8860b" }} />
        </div>
      </div>
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
    <ReportPageShell padding="20px 40px 0">
      <div className="flex min-h-full flex-col">
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
          <h1 className="text-[36px] font-bold" style={{ color: COLORS.brown, lineHeight: "1.2" }}>
            MOBILE NUMBER TOTAL ANALYSIS
          </h1>
          <p className="text-[14px]" style={{ color: '#213247', opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}>
            Primary Vibration &amp; Root Energy
          </p>
        </header>

        {/* Current number summary */}
        <section className="relative z-10 mt-3">
          <GoldBox className="grid grid-cols-[1.1fr_auto_1fr] items-center gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ border: "1px solid rgba(184, 134, 11, 0.6)" }}
              >
                <Smartphone size={28} strokeWidth={1.5} style={{ color: COLORS.gold }} />
              </div>
              <div>
                <p className="mb-0.5 text-[11px] font-extrabold tracking-wider" style={{ color: COLORS.brown }}>
                  CURRENT MOBILE NUMBER
                </p>
                <p className="text-[24px] font-bold font-serif leading-none tracking-wide" style={{ color: COLORS.black }}>
                  {mobileNumber}
                </p>
              </div>
            </div>

            <div className="h-14 w-px" style={{ backgroundColor: "rgba(184, 134, 11, 0.3)" }} />

            <div className="flex items-center justify-between gap-2 pl-1">
              <ClipboardList size={28} strokeWidth={1.2} className="shrink-0" style={{ color: COLORS.gold }} />
              <div className="flex flex-1 flex-col gap-1.5">
                <div>
                  <p className="text-[8px] font-bold tracking-wide text-neutral-500">COMPOUND TOTAL</p>
                  <p className="text-[16px] font-bold font-serif leading-none" style={{ color: COLORS.brown }}>
                    {compoundTotal}
                  </p>
                </div>
                <div>
                  <p className="text-[8px] font-bold tracking-wide text-neutral-500">SINGLE ROOT / DRIVER TOTAL</p>
                  <p className="text-[16px] font-bold font-serif leading-none" style={{ color: COLORS.brown }}>
                    {intermediateTotal} &rarr; {rootNumber}
                  </p>
                </div>
                <div>
                  <p className="text-[8px] font-bold tracking-wide text-neutral-500">RULING PLANET OF TOTAL</p>
                  <p className="text-[11px] font-bold" style={{ color: "#d48e31" }}>
                    {rulingPlanet}
                  </p>
                </div>
              </div>
              <Sun size={32} strokeWidth={1.2} className="ml-auto shrink-0" style={{ color: "#d48e31" }} />
            </div>
          </GoldBox>
        </section>

        {/* Number breakdown */}
        <section className="relative z-10 mt-2">
          {/* Header Section */}
          <div className="mb-2 flex items-center justify-center gap-2">
            <OrnamentalDivider className="h-[12px] w-[80px]" />
            <h3 className="text-[13px] font-bold tracking-wide" style={{ color: "#5d2e17" }}>
              NUMBER BREAKDOWN
            </h3>
            <OrnamentalDivider className="h-[12px] w-[80px] -scale-x-100" />
          </div>

          {/* Unified Main Card Container */}
          <GoldBox className="flex w-full flex-col items-center px-4 pt-3 pb-3">

            {/* 1. DIGITS ROW — full width, evenly spaced */}
            <div
              className="grid w-full items-center"
              style={{
                gridTemplateColumns: digits
                  .map((_, i) => (i < digits.length - 1 ? "1fr auto" : "1fr"))
                  .join(" "),
              }}
            >
              {digits.map((digit, index) => (
                <span key={index} className="contents">
                  <span className="flex justify-center">
                    <DigitBox digit={digit} />
                  </span>
                  {index < digits.length - 1 && (
                    <span
                      className="select-none px-0.5 text-[16px] font-bold"
                      style={{ color: COLORS.darkBlue }}
                    >
                      +
                    </span>
                  )}
                </span>
              ))}
            </div>

            {/* 2. BRACKET CONNECTOR UNDER DIGITS */}
            <DigitRowBracket digitCount={digits.length} />

            {/* 3. CALCULATION RESULTS ROW */}
            <div className="mx-auto grid w-full grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center">
              <div className="flex w-full items-center justify-end gap-2">
                <span className="select-none text-[22px] font-bold font-serif text-neutral-800/75">=</span>
                <span className="text-[36px] font-bold font-serif leading-none" style={{ color: COLORS.brown }}>
                  {compoundTotal}
                </span>
              </div>

              <span className="select-none px-0.5 text-[22px] font-bold font-serif text-neutral-800/75">=</span>

              <span className="text-[36px] font-bold font-serif leading-none" style={{ color: "#d48e31" }}>
                {intermediateTotal}
              </span>

              <span className="select-none px-0.5 text-[22px] font-bold font-serif text-neutral-800/75">=</span>

              <div className="flex w-full items-center justify-start">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[28px] font-bold font-serif"
                  style={{
                    border: "2.5px solid #e19d45",
                    backgroundColor: "rgba(253, 245, 230, 0.6)",
                    color: COLORS.brown,
                  }}
                >
                  {rootNumber}
                </div>
              </div>
            </div>

            {/* 4. THREE-COLUMN ROOT BREAKDOWN */}
            <div className="mt-2 grid w-full grid-cols-[1.35fr_1fr_1.35fr] items-start gap-3">

              {/* Left: Positive Qualities */}
              <div
                className="flex flex-col justify-start rounded-[20px] border px-3 py-2.5"
                style={{
                  borderColor: "rgba(184, 134, 11, 0.35)",
                  backgroundColor: "rgba(253, 245, 230, 0.55)",
                }}
              >
                <QualitiesColumn
                  variant="positive"
                  title={`POSITIVE QUALITIES OF ROOT ${rootNumber}`}
                  items={positiveQualities}
                />
              </div>

              {/* Center: Root Number Hero */}
              <div className="flex flex-col items-center justify-start px-0.5 text-center">
                <p className="text-[10px] font-black tracking-widest font-serif leading-tight" style={{ color: "#a03d15" }}>
                  ROOT NUMBER
                </p>
                <p className="text-[10px] font-bold tracking-wider text-amber-900/75">
                  (PRIMARY VIBRATION)
                </p>

                <div
                  className="mt-1.5 flex h-[76px] w-[76px] items-center justify-center rounded-full text-[46px] font-bold font-serif"
                  style={{
                    border: "3px solid #e19d45",
                    backgroundColor: "rgba(253, 245, 230, 0.5)",
                    color: COLORS.brown,
                  }}
                >
                  {rootNumber}
                </div>

                <p className="mt-1 text-[15px] font-extrabold font-serif tracking-wide leading-tight font-nunito-sans" style={{ color: "#d48e31" }}>
                  {energyName}
                </p>
                <p className="mt-0.5 max-w-[160px] text-[10px] font-bold font-nunito-sans leading-snug tracking-wide text-neutral-700">
                  {keywords}
                </p>
              </div>

              {/* Right: Negative Qualities */}
              <div
                className="flex flex-col justify-start rounded-[20px] border px-3 py-2.5"
                style={{
                  borderColor: "rgba(184, 134, 11, 0.35)",
                  backgroundColor: "rgba(253, 245, 230, 0.55)",
                }}
              >
                <QualitiesColumn
                  variant="negative"
                  title={`NEGATIVE QUALITIES OF ROOT ${rootNumber}`}
                  items={negativeQualities}
                />
              </div>

            </div>
          </GoldBox>
        </section>

        {/* Core number interactions */}
        <section className="relative z-10 mt-2">
          <div className="mb-2 flex items-center justify-center gap-2">
            <ScrollOrnament className="h-[12px] w-[50px]" />
            <h3 className="text-center text-[12px] font-bold tracking-widest uppercase font-serif" style={{ color: "#5d2e17" }}>
              HOW THIS TOTAL INTERACTS WITH YOUR{" "}CORE NUMBERS
            </h3>
            <ScrollOrnament className="h-[12px] w-[50px] -scale-x-100" />
          </div>
          <GoldBox className="flex items-stretch gap-0 p-3">
            {coreInteractions.map((item, index) => (
              <div key={item.label} className="flex flex-1 items-stretch">
                <CoreInteractionCard data={item} />
                {index < coreInteractions.length - 1 && (
                  <div
                    className="mx-2 w-px shrink-0 self-stretch opacity-20"
                    style={{ backgroundColor: "#5c4033" }}
                  />
                )}
              </div>
            ))}
          </GoldBox>
        </section>

        {/* Compatibility score */}
        <section className="relative z-10 mt-2">
          <div className="mb-2 flex items-center justify-center gap-2">
            <ScrollOrnament className="h-[12px] w-[50px]" />
            <h3 className="text-center text-[12px] font-bold tracking-widest uppercase font-serif" style={{ color: "#5d2e17" }}>
              OVERALL COMPATIBILITY SCORE
            </h3>
            <ScrollOrnament className="h-[12px] w-[50px] -scale-x-100" />
          </div>
          <GoldBox className="grid grid-cols-2 gap-0 p-3">
            <OverallCompatibilityScore value={50} size={80} style={{ marginTop: '-10px' }} />
            {/* <div
              className="flex items-center justify-center border-r pr-3"
              style={{ borderColor: "rgba(92, 64, 51, 0.2)" }}
            >
              <CompatibilityGauge percentage={compatibilityScore} className="h-16 w-full max-w-[130px]" />
            </div> */}
            <div className="flex items-center justify-center gap-3 pl-3">
              <CompatibilityProgressRing percentage={compatibilityScore} size={52} />
              <div className="flex flex-1 flex-col text-left">
                <p className="text-[11px] font-extrabold tracking-wider font-serif uppercase" style={{ color: "#d48e31" }}>
                  {compatibilityLevel}
                </p>
                <p className="mt-0.5 text-[10px] leading-snug font-sans" style={{ color: COLORS.darkBlue, opacity: 0.95 }}>
                  {compatibilityDescription}
                </p>
              </div>
            </div>
          </GoldBox>
        </section>

        {/* <footer className="relative z-10 mt-2 flex flex-col items-center pb-1">
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
      </footer> */}


        {/* Footer summary */}

        {/* Footer summary */}
        <footer className="relative z-10 mt-4 flex flex-col items-center px-4 pb-2">
          <div className="flex items-center gap-2 border border-[#D68F34] rounded-xl p-3">
            <CoverLotus size={40} />
            <p
              className="max-w-[480px] text-center text-[10px] leading-relaxed"
              style={{ color: COLORS.brown, opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
            >
              {tip}
            </p>
            <CoverLotus size={40} />
          </div>
        </footer>


        {/* <PageFooterBar
        className="relative -mx-[40px] mt-2 h-9 w-[calc(100%+80px)] shrink-0"
        pageNumber={pageNumber}
      /> */}
      </div>
    </ReportPageShell>
  );
}
