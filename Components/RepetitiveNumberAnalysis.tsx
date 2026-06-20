import React from "react";
import Image from "next/image";
import {
  Smartphone,
  Atom,
  CheckCircle2,
  AlertTriangle,
  Star
} from "lucide-react";
import FooterSummaryBanner from "./FooterSummaryBanner";
import { Pattern3 } from "./CommunComponents";
import { OrnamentalDivider } from "./CoverPageDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import OverallCompatibilityScore from "./OverallCompatibilityScore";

const COLORS = REPORT_COLORS;

interface BreakdownItem {
  digit: number;
  label: string;
  subLabel: string;
  labelColor: string;
  circleColor: string;
  appears: string;
  intensityLabel: string;
  intensityColor: string;
  filledBlocks: number;
  energyTitle: string;
  energySubtitle: string;
  energyIcon: "mercury" | "void" | "rahu";
  positives: string[];
  risks: string[];
}

interface RepetitiveNumberAnalysisProps {
  mobileNumber?: string;
  footerSummary?: string;
  pageNumber?: string;
}

const breakdownData: BreakdownItem[] = [
  {
    digit: 7,
    label: "DOUBLE 7",
    subLabel: "(Mercury)",
    labelColor: "#1e5235",
    circleColor: "#1e5235",
    appears: "2 Times",
    intensityLabel: "Very Strong",
    intensityColor: "#2e7d32",
    filledBlocks: 8,
    energyTitle: "Mercury",
    energySubtitle: "Communication, Intellect, Logic",
    energyIcon: "mercury",
    positives: ["Excellent communication", "Sharp intellect & analysis", "Business & networking success", "Quick learning & adaptability"],
    risks: ["Overthinking", "Restlessness", "Too much planning, less action", "Nervous energy"]
  },
  {
    digit: 0,
    label: "TRIPLE 0",
    subLabel: "(Void / Karmic)",
    labelColor: "#c62828",
    circleColor: "#c62828",
    appears: "3 Times",
    intensityLabel: "Extremely Strong",
    intensityColor: "#d32f2f",
    filledBlocks: 6,
    energyTitle: "Void Energy",
    energySubtitle: "Emptiness, Detachment, Spiritual Lessons",
    energyIcon: "void",
    positives: ["Strong intuition develops", "Spiritual awakening", "Letting go of past baggage", "Inner transformation"],
    risks: ["Delays & obstacles", "Lack of motivation", "Feeling of emptiness or loss of focus", "Loss of direction"]
  },
  {
    digit: 4,
    label: "DOUBLE 4",
    subLabel: "(Rahu)",
    labelColor: "#e65100",
    circleColor: "#d84315",
    appears: "2 Times",
    intensityLabel: "Strong",
    intensityColor: "#ef6c00",
    filledBlocks: 5,
    energyTitle: "Rahu",
    energySubtitle: "Structure, Discipline, Transformation",
    energyIcon: "rahu",
    positives: ["Hard work & discipline", "Ability to build solid foundations", "Practical & systematic thinking", "Good for real estate & technical fields"],
    risks: ["Stress & pressure", "Obstacles in progress", "Stubbornness", "Work-life imbalance"]
  },
  {
    digit: 0,
    label: "DOUBLE 0",
    subLabel: "(Void / Karmic)",
    labelColor: "#ef6c00",
    circleColor: "#ff9800",
    appears: "2 Times",
    intensityLabel: "Strong",
    intensityColor: "#fb8c00",
    filledBlocks: 5,
    energyTitle: "Void Energy",
    energySubtitle: "Emptiness, Delays, Spiritual Growth",
    energyIcon: "void",
    positives: ["Increases patience", "Spiritual inclination", "Understanding life lessons", "Helps in deep meditation"],
    risks: ["Delays in results", "Procrastination", "Energy drain", "Uncertainty"]
  }
];

function GoldBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[16px] ${className}`}
      style={{
        border: "1px solid rgba(184, 134, 11, 0.3)",
        backgroundColor: "rgba(253, 245, 230, 0.4)",
      }}
    >
      {children}
    </div>
  );
}

function SectionTitleBadge({ title, compact = false }: { title: string; compact?: boolean }) {
  return (
    <div
      className={`absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-md border border-orange-200 bg-orange-50/90 shadow-sm ${compact ? "px-1.5 py-0" : "px-3 py-1"
        }`}
    >
      <h3
        className={`font-bold uppercase tracking-wide font-serif text-[#8b2500] whitespace-nowrap ${compact ? "text-[8px]" : "text-[9px]"
          }`}
      >
        {title}
      </h3>
    </div>
  );
}

function InnerSummaryCard({
  children,
  title,
  className = "",
  compactTitle = false,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  compactTitle?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-md border bg-white/40 py-1 px-3 ${className}`}
      style={{ borderColor: "rgba(184, 134, 11, 0.18)" }}
    >
      <SectionTitleBadge title={title} compact={compactTitle} />
      {children}
    </div>
  );
}

function OverallEnergyGauge({
  score = 72,
  label = "GOOD POTENTIAL",
}: {
  score?: number;
  label?: string;
}) {
  const green = "#1e5235";

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex h-[50px] w-[104px] items-end justify-center overflow-hidden">
        <svg className="absolute top-0 left-0 h-[104px] w-[104px]" viewBox="0 0 100 100" aria-hidden>
          {/* Orange zone — left */}
          <path
            d="M 10 50 A 40 40 0 0 1 17.6 26.5"
            fill="none"
            stroke="#e07a32"
            strokeWidth="11"
            strokeLinecap="round"
          />
          {/* Neutral zone — center */}
          <path
            d="M 17.6 26.5 A 40 40 0 0 1 73.6 17.6"
            fill="none"
            stroke="#e8e2d6"
            strokeWidth="11"
            strokeLinecap="butt"
          />
          {/* Green zone — right */}
          <path
            d="M 73.6 17.6 A 40 40 0 0 1 90 50"
            fill="none"
            stroke={green}
            strokeWidth="11"
            strokeLinecap="round"
          />
        </svg>
        <div className="-mb-1 z-10 flex flex-col items-center leading-none">
          <span className="text-[5.5px] font-bold uppercase tracking-wide font-sans text-[#1a2a3a]">Overall</span>
          <span className="text-[5.5px] font-bold uppercase tracking-wide font-sans text-[#1a2a3a]">Energy Score</span>
          <span className="mt-0.5 text-[21px] font-black leading-none font-serif" style={{ color: green }}>
            {score}%
          </span>
        </div>
      </div>
      <span className="mt-0.5 text-[8px] font-extrabold uppercase tracking-wider font-sans" style={{ color: green }}>
        {label}
      </span>
    </div>
  );
}

function CautionMinusIcon({ size = '3.5' }: { size?: string }) {
  return (
    <span className={`flex h-${size} w-${size} shrink-0 items-center justify-center rounded-full bg-[#c62828]`}>
      <span className="block h-[1.5px] w-2 rounded-full bg-white" />
    </span>
  );
}

function PositiveCheckIcon() {
  return (
    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#1e5235]">
      <CheckCircle2 size={8} className="text-white" strokeWidth={3} />
    </span>
  );
}

function PatternDigit({
  digit,
  variant = "neutral",
}: {
  digit: string;
  variant?: "red" | "green" | "neutral";
}) {
  const styles = {
    red: "border border-dashed border-red-400 bg-red-50/70",
    green: "border border-dashed border-emerald-600 bg-emerald-50/70",
    neutral: "border border-[#e5d9c8] bg-white",
  };

  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] text-[14px] font-bold font-serif text-[#213247] ${styles[variant]}`}
    >
      {digit}
    </span>
  );
}

function PatternGroupLabel({
  label,
  variant,
  width,
}: {
  label: string;
  variant: "red" | "green";
  width: string;
}) {
  const border = variant === "red" ? "border-red-500" : "border-emerald-600";
  const text = variant === "red" ? "text-red-600" : "text-emerald-700";

  return (
    <div className="flex flex-col items-center" style={{ width }}>
      <div className={`h-1.5 w-full border-x border-b ${border} rounded-b-[3px]`} />
      <span className={`mt-0.5 text-[9px] font-bold uppercase tracking-wide font-nunito-sans ${text}`}>{label}</span>
    </div>
  );
}

function EnergyIconRenderer({ type }: { type: "mercury" | "void" | "rahu" }) {
  if (type === "mercury") {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#1e5235" strokeWidth={1.5}>
        <circle cx="12" cy="11" r="4" />
        <path d="M12 15v5m-3-2h6" />
        <path d="M8 4a4 4 0 0 1 8 0" />
      </svg>
    );
  }
  if (type === "void") {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#5c4033" strokeWidth={1.5} strokeDasharray="3 3">
        <circle cx="12" cy="12" r="7" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#d84315" strokeWidth={1.5}>
      <path d="M12 3L3 21h18L12 3z" />
      <circle cx="12" cy="14" r="2.5" />
    </svg>
  );
}

export default function RepetitiveNumberAnalysis({
  mobileNumber = "+44 7700 900123",
  footerSummary = "Repeated digits in your mobile number amplify specific planetary energies. Use them consciously for balance and growth.",
  pageNumber = "08",
}: RepetitiveNumberAnalysisProps) {
  return (
    <ReportPageShell padding="14px 40px 22px">
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 flex-col items-center text-center">
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
            <p className="text-[15px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
              ASTRO AARAMBH
            </p>
            <Pattern3 size={44} className="rotate-180" />
          </div>
          <h1 className="text-[32px] font-bold leading-tight" style={{ color: COLORS.brown }}>
            REPETITIVE NUMBER ANALYSIS
          </h1>
          <p
            className="text-[13px]"
            style={{ color: "#213247", opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
          >
            Amplified Energies in Your Number
          </p>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-1">
          {/* Top Summary Block */}
          <section className="relative z-10 mt-1.5 shrink-0">
            <GoldBox className="grid grid-cols-[1fr_auto_1.2fr] items-center gap-2 px-3 py-1.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ border: "1.5px solid #e19d45" }}>
                  <Smartphone size={20} strokeWidth={1.5} style={{ color: "#a03d15" }} />
                </div>
                <div>
                  <p className="text-[9.5px] font-black tracking-widest font-serif" style={{ color: "#a03d15" }}>
                    CURRENT MOBILE NUMBER
                  </p>
                  <p className="text-[21px] font-bold font-serif leading-none tracking-wide" style={{ color: COLORS.brown }}>
                    {mobileNumber}
                  </p>
                </div>
              </div>

              <div className="h-9 w-px opacity-20" style={{ backgroundColor: COLORS.brown }} />

              <div className="flex items-center gap-3 pl-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: "rgba(212, 142, 49, 0.35)" }}>
                  <Atom size={20} strokeWidth={1.5} style={{ color: "#a03d15" }} />
                </div>
                <p className="text-[10.5px] leading-snug font-nunito-sans text-left" style={{ color: "#5c4033", opacity: 0.95 }}>
                  Repetitive numbers act like <strong style={{ color: "#a03d15" }}>energy magnifiers</strong>. They can bring powerful results when balanced, but may also cause intensity when over-activated.
                </p>
              </div>
            </GoldBox>
          </section>

          {/* Visual Digit Sequence Breakdowns Block */}
          <section className="relative z-10 shrink-0">
            <div
              className="flex w-full flex-col items-center rounded-[14px] border px-4 py-2.5"
              style={{
                borderColor: "rgba(184, 134, 11, 0.28)",
                backgroundColor: "rgba(255, 255, 255, 0.55)",
              }}
            >
              {/* Header */}
              <div className="mb-2 flex w-full items-center justify-center gap-2">
                <OrnamentalDivider className="h-[11px] w-[70px]" />
                <span
                  className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] font-serif"
                  style={{ color: "#a03d15" }}
                >
                  YOUR MOBILE NUMBER
                </span>
                <OrnamentalDivider className="h-[11px] w-[70px] -scale-x-100" />
              </div>

              {/* All digits — single row */}
              <div className="flex w-full items-center justify-center gap-1.5 font-serif font-bold text-[#213247]">
                <span className="w-5 shrink-0 text-center text-[16px] font-normal text-neutral-500 select-none">+</span>

                <PatternDigit digit="4" variant="red" />
                <PatternDigit digit="4" variant="red" />

                <PatternDigit digit="7" variant="green" />
                <PatternDigit digit="7" variant="green" />

                <PatternDigit digit="0" variant="red" />
                <PatternDigit digit="0" variant="red" />
                <PatternDigit digit="0" variant="red" />

                <PatternDigit digit="9" variant="neutral" />

                <PatternDigit digit="0" variant="red" />
                <PatternDigit digit="0" variant="red" />

                <PatternDigit digit="1" variant="neutral" />
                <PatternDigit digit="2" variant="neutral" />
                <PatternDigit digit="3" variant="neutral" />
              </div>

              {/* Group labels — aligned under repeated digits */}
              <div className="mt-1 flex w-full items-start justify-center gap-1.5">
                <span className="w-5 shrink-0" aria-hidden />

                <PatternGroupLabel label="Double 4" variant="red" width="calc(2 * 2rem + 0.375rem)" />
                <PatternGroupLabel label="Double 7" variant="green" width="calc(2 * 2rem + 0.375rem)" />
                <PatternGroupLabel label="Triple 0" variant="red" width="calc(3 * 2rem + 0.75rem)" />

                <span className="w-8 shrink-0" aria-hidden />

                <PatternGroupLabel label="Double 0" variant="red" width="calc(2 * 2rem + 0.375rem)" />

                <span className="shrink-0" style={{ width: "calc(3 * 2rem + 0.75rem)" }} aria-hidden />
              </div>
            </div>
          </section>

          {/* 1. REPETITIVE NUMBER BREAKDOWN TABLE */}
          <section className="relative mt-[-4px] z-10 shrink-0">
            <div className="mb-0.5 inline-block self-start rounded-md border border-orange-200/60 bg-orange-50/60 py-1 px-3">
              <h3 className="text-[10px] font-bold uppercase tracking-wide font-serif" style={{ color: "#8b2500" }}>
                1. REPETITIVE NUMBER BREAKDOWN
              </h3>
            </div>

            <div className="w-full overflow-hidden rounded-[8px] border bg-white/50" style={{ borderColor: "rgba(184, 134, 11, 0.2)" }}>
              <div className="grid grid-cols-[1.1fr_0.6fr_1.1fr_1.2fr_2fr_2fr] border-b bg-orange-50/30 px-1.5 py-1 text-center text-[9px] font-bold uppercase tracking-wider" style={{ borderColor: "rgba(184, 134, 11, 0.15)", color: "#a03d15" }}>
                <div>Repeated Number</div>
                <div>Appears</div>
                <div>Intensity Level</div>
                <div>Energy Nature</div>
                <div>Positive Amplification</div>
                <div>Over-Amplification Risks</div>
              </div>

              {/* Table Content Rows */}
              {breakdownData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1.1fr_0.6fr_1.1fr_1.2fr_2fr_2fr] items-center px-1.5 py-1 text-center ${index < breakdownData.length - 1 ? "border-b" : ""
                    }`}
                  style={{ borderColor: "rgba(184, 134, 11, 0.1)" }}
                >
                  {/* Column 1: Circles */}
                  <div className="flex items-center gap-1.5 pl-0.5 text-left">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold font-serif"
                      style={{ border: `1.5px solid ${row.circleColor}`, color: row.circleColor }}
                    >
                      {row.digit}
                    </div>
                    <div className="flex flex-col font-serif leading-tight">
                      <span className="text-[9px] font-black tracking-wide" style={{ color: row.labelColor }}>{row.label}</span>
                      <span className="text-[9px] font-medium text-neutral-500">{row.subLabel}</span>
                    </div>
                  </div>

                  {/* Column 2: Appears Counter */}
                  <div className="text-[10px] font-bold font-serif text-neutral-800">
                    {row.appears}
                  </div>

                  {/* Column 3: Custom Segmented Intensity */}
                  <div className="flex flex-col items-center justify-center px-0.5">
                    <div className="mb-0.5 flex w-full max-w-[64px] gap-[1px]">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-1.5 flex-1 rounded-[0.5px]"
                          style={{ backgroundColor: i < row.filledBlocks ? row.intensityColor : "#e5e5e5" }}
                        />
                      ))}
                    </div>
                    <span className="text-[8px] font-bold tracking-wide text-neutral-500 font-sans">{row.intensityLabel}</span>
                  </div>

                  {/* Column 4: Energy Block */}
                  <div className="flex items-center gap-1 text-left pl-1 border-x px-1" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                    <EnergyIconRenderer type={row.energyIcon} />
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] font-bold font-serif text-neutral-800">{row.energyTitle}</span>
                      <span className="text-[9px] text-neutral-500 font-sans leading-tight">{row.energySubtitle}</span>
                    </div>
                  </div>

                  {/* Column 5: Positives */}
                  <div className="flex flex-col gap-0.5 pl-2 pr-0.5 text-left">
                    {row.positives.map((pos, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1 text-[7.5px] font-medium leading-tight text-neutral-700 font-sans">
                        <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-emerald-600" strokeWidth={3} />
                        <span className="text-[9px]">{pos}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 6: Risks */}
                  <div className="flex items-start gap-1 border-l pl-1.5 text-left" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                    <div className="flex flex-col gap-0.5">
                      {row.risks.map((risk, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-1 text-[7.5px] font-medium leading-tight text-red-900/95 font-sans">
                          <CautionMinusIcon size="3" />
                          <span className="text-[9px]">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>



          {/* 5. OVERALL IMPACT OF REPETITIVE NUMBERS */}
          <section className="relative mt-5 z-10 shrink-0 pt-0.5">
            <InnerSummaryCard title="3. OVERALL IMPACT OF REPETITIVE NUMBERS" className="p-1.5 py-5">
              <div className="grid grid-cols-[1.2fr_0.85fr_1.2fr] items-stretch gap-1.5">
                <div className="flex flex-col rounded-lg border border-emerald-200 bg-emerald-50/10 p-1.5">
                  <div className="mb-0.5 flex items-center gap-1 text-[8px] font-bold uppercase tracking-wide font-sans text-emerald-800">
                    <Star size={14} fill="#1e5235" className="text-emerald-800" />
                    <span>Positive Potential</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    {[
                      "Excellent communication & business acumen (Double 7)",
                      "Strong spiritual growth & intuition (Triple 0)",
                      "Hard work & ability to build a stable future (Double 4)",
                      "Good potential for leadership & success"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1 text-[7.5px] font-medium leading-tight text-neutral-700">
                        <PositiveCheckIcon />
                        <span className="text-[9px] font-nunito-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center Gauge */}
                <OverallCompatibilityScore value={72} size={150} style={{ marginTop: '-15px' }} />
                {/* <OverallEnergyGauge score={72} label="GOOD POTENTIAL" /> */}

                <div className="flex flex-col rounded-lg border border-red-100 bg-red-50/10 p-1.5">
                  <div className="mb-0.5 flex items-center gap-1 text-[8px] font-bold uppercase tracking-wide font-sans text-red-800">
                    <AlertTriangle size={16} fill="#c62828" className="text-white" />
                    <span>Caution Points</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    {[
                      "Delays, emotional low phases (Triple 0 & Double 0)",
                      "Stress, pressure & unexpected obstacles (Double 4)",
                      "Overthinking, restlessness (Double 7)",
                      "Need for patience, focus & inner balance"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[7.5px] font-medium leading-tight text-neutral-700">
                        <CautionMinusIcon />
                        <span className="text-[9px] font-nunito-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </InnerSummaryCard>
          </section>
          <footer className="relative z-20 shrink-0 pt-2 mt-5">
            <div className="flex justify-center px-2 pb-2">
              <FooterSummaryBanner summary={footerSummary} className="max-w-xl py-1.5" />
            </div>
          </footer>
        </div>
      </div>
    </ReportPageShell>
  );
}