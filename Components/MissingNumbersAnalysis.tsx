import React from "react";
import Image from "next/image";
import { 
  Smartphone, 
  AlertTriangle, 
  Heart, 
  Coins, 
  BrainCircuit, 
  Flower2, 
  CheckCircle2,
  Info,
  Lightbulb,
  Star
} from "lucide-react";
import { Pattern3, CoverLotus } from "./CommunComponents";
import { CornerFlourish } from "./CoverPageDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import OverallCompatibilityScore from "./OverallCompatibilityScore";

const COLORS = REPORT_COLORS;

const CARD_BORDER = "rgba(184, 134, 11, 0.18)";
const CARD_BG = "rgba(253, 245, 230, 0.45)";
const CARD_INNER_BORDER = "rgba(184, 134, 11, 0.15)";
const CARD_INNER_BG = "rgba(255, 255, 255, 0.55)";
const BADGE_BORDER = "rgba(251, 146, 60, 0.35)";
const BADGE_BG = "rgba(253, 245, 230, 0.65)";
const MISSING_TARGET_IMAGE = "/assets/missing-number/target.png";
const MISSING_ENERGY_BALANCE_IMAGE =
  "/assets/missing-number/balance.png";

export type MissingNumbersAnalysisProps = {
  mobileNumber?: string;
  footerSummary?: string;
  energyGapSummary?: string;
  tip?: string;
  pageNumber?: string;
};

function GoldBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[20px] ${className}`}
      style={{
        border: `1px solid ${CARD_BORDER}`,
        backgroundColor: CARD_BG,
      }}
    >
      {children}
    </div>
  );
}

function ReportCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[16px] border p-2 ${className}`}
      style={{ borderColor: CARD_BORDER, backgroundColor: CARD_BG }}
    >
      {children}
    </div>
  );
}

function ReportCardInner({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[12px] border ${className}`}
      style={{ borderColor: CARD_INNER_BORDER, backgroundColor: CARD_INNER_BG }}
    >
      {children}
    </div>
  );
}

function SectionBadge({ title }: { title: string }) {
  return (
    <div
      className="mb-1 self-start inline-block rounded-[4px] border px-2 py-0.5"
      style={{ borderColor: BADGE_BORDER, backgroundColor: BADGE_BG }}
    >
      <h3 className="text-[9px] font-bold tracking-wide uppercase font-serif text-[#8b2500] font-nunito-sans">{title}</h3>
    </div>
  );
}

function LifeAreaRow({
  iconSrc,
  iconAlt,
  badge,
  badgeTone,
  title,
  titleClassName,
  bulletClassName,
  items,
  withTopBorder = false,
  iconClassName = "h-8 w-8",
  className = "",
}: {
  iconSrc: string;
  iconAlt: string;
  badge: string;
  badgeTone: "red" | "emerald" | "blue" | "purple";
  title: string;
  titleClassName: string;
  bulletClassName: string;
  items: string[];
  withTopBorder?: boolean;
  iconClassName?: string;
  className?: string;
}) {
  const badgeToneClasses = {
    red: "bg-red-50 border-red-200 text-red-600",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
  };

  return (
    <div className={`flex items-start gap-1.5 ${withTopBorder ? "border-t border-neutral-100/80 pt-1" : ""} ${className}`}>
      <div className={`relative shrink-0 ${iconClassName}`}>
        <img src={iconSrc} alt={iconAlt} className={`${iconClassName} object-contain`} />
        {/* <div
          className={`absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border text-[7.5px] font-bold font-serif shadow-xs ${badgeToneClasses[badgeTone]}`}
        >
          {badge}
        </div> */}
      </div>
      <div className="min-w-0 flex-1 leading-tight">
        <span className={`text-[9.5px] font-extrabold tracking-wide font-sans uppercase ${titleClassName}`}>{title}</span>
        <ul className="mt-0.5 space-y-0 text-[8.5px] font-medium text-neutral-800 list-none pl-0">
          {items.map((item) => (
            <li key={item} className="flex items-center">
              <span className={`mr-1 font-black text-[9px] ${bulletClassName}`}>•</span>
              <span className="text-[9px] font-nunito-sans">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MissingNumbersAnalysis({
  mobileNumber = "+44 7700 900123",
  footerSummary,
  energyGapSummary = footerSummary ??
    "Your mobile number is missing the vibrations of 5, 6, 7 and 8 — indicating gaps in adaptability, love & harmony, spiritual wisdom, and material stability. Awareness of these missing energies is the first step toward restoring balance and attracting positive change.",
  tip = "Even if you cannot change your mobile number immediately, consciously strengthening missing number energies through remedies, lucky dates, and daily habits can significantly improve balance and life outcomes.",
  pageNumber = "11",
}: MissingNumbersAnalysisProps) {
  return (
    <ReportPageShell padding="20px 40px 0">
      <div className="flex h-full min-h-0 flex-col">
        {/* Header Block */}
        <header className="flex shrink-0 flex-col items-center text-center">
          <Image
            src="/assets/ganesha-logo.png"
            alt="Astro Aarambh"
            width={85}
            height={85}
            className="mb-1.5"
            priority
          />
          <div className="flex items-center gap-1.5">
            <Pattern3 size={45} />
            <p className="text-[14px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
              ASTRO AARAMBH
            </p>
            <Pattern3 size={45} className="rotate-180" />
          </div>
          <h1 className="text-[30px] font-bold leading-tight uppercase font-serif mt-0.5" style={{ color: COLORS.brown }}>
            MISSING NUMBERS ANALYSIS
          </h1>
          <p
            className="text-[13px] font-medium tracking-wide text-slate-800"
            style={{ fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
          >
            Energy Gaps &amp; Life Lessons Hidden In Your Mobile Number
          </p>
          
          {/* Decorative Divider with Center Dot */}
          <div className="flex items-center justify-center gap-2 mt-2 w-full max-w-xs">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#e19d45]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#e19d45]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#e19d45]/60" />
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-2 mt-2">
          
          {/* Top Summary Block */}
          <section className="relative z-10 mt-[-4px] shrink-0">
            <GoldBox className="grid grid-cols-[1.1fr_auto_1.3fr] items-center gap-4 px-5 py-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-white shadow-sm">
                  <Smartphone size={22} strokeWidth={1.5} className="text-[#e65100]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[9.5px] font-black tracking-widest font-sans text-[#e65100]">
                    CURRENT MOBILE NUMBER
                  </p>
                  <p className="text-[25px] font-black font-serif leading-none tracking-wide text-slate-900 mt-0.5">
                    {mobileNumber}
                  </p>
                </div>
              </div>

              <div className="h-14 w-px bg-orange-400/30" />

              <div className="flex items-center gap-4 pl-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-white p-1.5 shadow-sm">
                  <Image
                    src={MISSING_TARGET_IMAGE}
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 object-contain"
                    aria-hidden
                  />
                </div>
                <p className="text-[11px] leading-relaxed font-sans text-neutral-700 text-left">
                  Missing numbers indicate the energies that are <strong className="text-slate-900">not active</strong> in your number. These gaps may create challenges or slow progress in certain areas of life. Let&apos;s identify what is missing and how it impacts you.
                </p>
              </div>
            </GoldBox>
          </section>

          {/* Main Structural Content Grid */}
          <section className="relative z-10 mt-[-4px] grid shrink-0 grid-cols-[1.25fr_1fr] items-stretch gap-2">
            {/* Column 1 Card: 1. MISSING NUMBERS IN YOUR MOBILE */}
            <ReportCard className="flex h-full flex-col">
              <SectionBadge title="1. MISSING NUMBERS IN YOUR MOBILE" />
              
              <ReportCardInner className="flex flex-1 flex-col justify-between divide-y divide-neutral-100/80 px-2 py-1">                
                <div className="grid flex-1 grid-cols-[auto_1.1fr_1.3fr] items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-500 bg-white font-serif text-[12px] font-black text-red-600 shadow-sm">5</div>
                    <span className="font-serif text-[22px] font-medium text-amber-700 leading-none">☿</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9px] font-bold text-neutral-800 font-sans">Number 5 (Mercury)</span>
                    <span className="text-[8px] font-bold tracking-wide text-red-600">Missing</span>
                  </div>
                  <div className="flex items-start gap-1 border-l border-neutral-100 pl-1.5 min-w-25">
                    <AlertTriangle size={11} className="mt-0.5 shrink-0 text-red-600" />
                    <p className="font-nunito-sans text-[9px] font-medium leading-tight text-neutral-700">Lack of adaptability, flexibility, travel luck &amp; quick decision making ability.</p>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-[auto_1.1fr_1.3fr] items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-500 bg-white font-serif text-[12px] font-black text-red-600 shadow-sm">6</div>
                    <span className="font-serif text-[22px] font-medium text-amber-700 leading-none">♀</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9px] font-bold text-neutral-800 font-sans">Number 6 (Venus)</span>
                    <span className="text-[8px] font-bold tracking-wide text-red-600">Missing</span>
                  </div>
                  <div className="flex items-start gap-1 border-l border-neutral-100 pl-1.5">
                    <AlertTriangle size={11} className="mt-0.5 shrink-0 text-red-600" />
                    <p className="font-nunito-sans text-[8.5px] font-medium leading-tight text-neutral-700">May face challenges in love, harmony, comforts, luxury &amp; maintaining balance.</p>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-[auto_1.1fr_1.3fr] items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-500 bg-white font-serif text-[12px] font-black text-red-600 shadow-sm">7</div>
                    <span className="font-serif text-[22px] font-medium text-amber-700 leading-none">☊</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9px] font-bold text-neutral-800 font-sans">Number 7 (Ketu)</span>
                    <span className="text-[8px] font-bold tracking-wide text-red-600">Missing <span className="text-[7px] font-medium">(Very Important)</span></span>
                  </div>
                  <div className="flex items-start gap-1 border-l border-neutral-100 pl-1.5">
                    <AlertTriangle size={11} className="mt-0.5 shrink-0 text-red-600" />
                    <p className="font-nunito-sans text-[8.5px] font-medium leading-tight text-neutral-700">Affects spiritual growth, intuition, inner wisdom, research ability &amp; mental depth.</p>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-[auto_1.1fr_1.3fr] items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-500 bg-white font-serif text-[12px] font-black text-red-600 shadow-sm">8</div>
                    <span className="font-serif text-[22px] font-medium text-amber-700 leading-none">♄</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9px] font-bold text-neutral-800 font-sans">Number 8 (Saturn)</span>
                    <span className="text-[8px] font-bold tracking-wide text-red-600">Missing</span>
                  </div>
                  <div className="flex items-start gap-1 border-l border-neutral-100 pl-1.5">
                    <AlertTriangle size={11} className="mt-0.5 shrink-0 text-red-600" />
                    <p className="font-nunito-sans text-[8.5px] font-medium leading-tight text-neutral-700">Can bring instability in finances, professional growth, discipline &amp; long-term success.</p>
                  </div>
                </div>
              </ReportCardInner>
            </ReportCard>

            {/* Column 2 Card: 2. LIFE AREAS AFFECTED BY MISSING NUMBERS */}
            <ReportCard className="flex h-full flex-col">
              <SectionBadge title="2. LIFE AREAS AFFECTED BY MISSING NUMBERS" />

              <ReportCardInner className="flex flex-1 flex-col justify-between gap-1 p-1.5">
                <LifeAreaRow
                  iconSrc="/assets/missing-number/team.png"    
                  iconAlt="Relationships"
                  iconClassName="h-9 w-9"
                  className="flex-1"
                  badge="6"
                  badgeTone="red"
                  title="RELATIONSHIPS"
                  titleClassName="text-red-600"
                  bulletClassName="text-red-600"
                  items={[
                    "Emotional imbalance",
                    "Communication gaps",
                    "Trust issues",
                    "Difficulty maintaining harmony",
                  ]}
                />
                <LifeAreaRow
                  iconSrc="/assets/missing-number/coins.png"
                  iconAlt="Wealth & Finance"
                  iconClassName="h-9 w-9"
                  className="flex-1"
                  badge="5"
                  badgeTone="emerald"
                  title="WEALTH & FINANCE"
                  titleClassName="text-emerald-800"
                  bulletClassName="text-emerald-700"
                  items={[
                    "Delayed financial growth",
                    "Savings inconsistency",
                    "Risk management issues",
                    "Difficulty in attracting opportunities",
                  ]}
                  withTopBorder
                />
                <LifeAreaRow
                  iconSrc="/assets/missing-number/decision.png"
                  iconAlt="Decision Making"
                  iconClassName="h-9 w-9"
                  className="flex-1"
                  badge="8"
                  badgeTone="blue"
                  title="DECISION MAKING"
                  titleClassName="text-blue-800"
                  bulletClassName="text-blue-700"
                  items={[
                    "Overthinking",
                    "Lack of clarity",
                    "Delayed actions",
                    "Difficulty in making the right choices",
                  ]}
                  withTopBorder
                />
                <LifeAreaRow
                  iconSrc="/assets/missing-number/spritual.png"
                  iconAlt="Spiritual Growth"
                  iconClassName="h-9 w-9"
                  className="flex-1"
                  badge="7"
                  badgeTone="purple"
                  title="SPIRITUAL GROWTH"
                  titleClassName="text-purple-800"
                  bulletClassName="text-purple-700"
                  items={[
                    "Weak intuition",
                    "Reduced inner guidance",
                    "Lack of self-reflection",
                    "Disconnection from higher wisdom",
                  ]}
                  withTopBorder
                />
              </ReportCardInner>
            </ReportCard>

          </section>

          {/* Section 3: 3. HOW TO BALANCE MISSING ENERGIES */}
          <section className="mt-[-4px] relative z-10 shrink-0">
            <ReportCard className="flex items-center gap-5 px-6 py-2.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-orange-500/40 bg-white p-0.5 shadow-sm">
                <Image
                  src={MISSING_ENERGY_BALANCE_IMAGE}
                  alt=""
                  width={46}
                  height={46}
                  className="h-full w-full object-contain"
                  aria-hidden
                />
              </div>

              <div className="flex flex-col text-left">
                <h3 className="text-[10px] font-extrabold tracking-wide font-nunito-sans uppercase text-red-600">
                  3. HOW TO BALANCE MISSING ENERGIES
                </h3>
                <p className="text-[10px] font-medium leading-relaxed font-nunito-sans text-neutral-700 mt-0.5 max-w-2xl">
                  Missing numbers create energetic voids that can influence different areas of life. 
                  To understand how these gaps are affecting you personally and to receive powerful remedies, practical suggestions and customized guidance,
                </p>
                <p className="text-[10.5px] font-extrabold tracking-wide text-red-600 mt-0.5 font-nunito-sans uppercase">
                  you can consult our expert numerologist.
                </p>
              </div>
            </ReportCard>
          </section>

          {/* Sections 4 & 5: ENERGY RESTORATION SCORE & IMPORTANT POINTS */}
          <section className="relative z-10 mt-[-4px] grid shrink-0 grid-cols-2 items-stretch gap-2 font-nunito-sans">
            {/* Column 4: 4. ENERGY RESTORATION SCORE */}
            <ReportCard className="flex h-full flex-col">
              <SectionBadge title="4. ENERGY RESTORATION SCORE" />
              <ReportCardInner className="flex flex-1 flex-col items-center justify-between p-2">
                <OverallCompatibilityScore value={58} size={100} style={{ marginTop: '-15px' }} />
                {/* <div className="relative flex h-[72px] w-40 items-center justify-center">
                  <svg className="h-full w-full" viewBox="0 0 100 52">
                    <defs>
                      <linearGradient id="gaugeGradient2026" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="30%" stopColor="#f97316" />
                        <stop offset="55%" stopColor="#f59e0b" />
                        <stop offset="75%" stopColor="#84cc16" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 12 48 A 38 38 0 0 1 88 48"
                      fill="none"
                      stroke="url(#gaugeGradient2026)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <g transform="translate(50, 48)">
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-32"
                        stroke="#1e293b"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        transform="rotate(14.4)"
                      />
                      <circle cx="0" cy="0" r="3" fill="#1e293b" />
                    </g>
                  </svg>

                  <div className="absolute bottom-0 flex flex-col items-center text-center">
                    <span className="text-[22px] font-black font-serif leading-none tracking-tight text-[#f97316]">58%</span>
                    <span className="mt-0.5 text-[7px] font-extrabold uppercase tracking-wider text-slate-700">
                      CURRENT BALANCE
                    </span>
                  </div>
                </div> */}

                {/* <div className="mt-0.5 flex w-full max-w-[170px] justify-between px-1 text-[7px] font-extrabold">
                  <div className="text-center text-red-600">
                    LOW
                    <br />
                    <span className="font-medium text-neutral-500">0%</span>
                  </div>
                  <div className="text-center text-amber-500">
                    MEDIUM
                    <br />
                    <span className="font-medium text-neutral-500">50%</span>
                  </div>
                  <div className="text-center text-emerald-600">
                    HIGH
                    <br />
                    <span className="font-medium text-neutral-500">100%</span>
                  </div>
                </div> */}

                <div className="mt-4 w-full rounded-[8px] border border-emerald-200/40 bg-emerald-50/60 px-2 py-1 text-center">
                  <p className="text-[7px] font-black uppercase tracking-wider text-emerald-800">
                    POTENTIAL BALANCE AFTER CORRECTION
                  </p>
                  <div className="mt-0.5 flex items-center justify-center gap-1">
                    <span className="text-[14px] font-black font-serif leading-none text-emerald-700">87%</span>
                    <span className="text-[7px] font-bold uppercase tracking-wide text-emerald-600">HIGH POTENTIAL</span>
                  </div>
                </div>
              </ReportCardInner>
            </ReportCard>

            {/* Column 5: 5. IMPORTANT POINTS TO REMEMBER */}
            <ReportCard className="flex h-full flex-col">
              <SectionBadge title="5. IMPORTANT POINTS TO REMEMBER" />

              <ReportCardInner className="flex flex-1 flex-col justify-between gap-1 p-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
                  <p className="text-[8.5px] font-medium leading-tight text-neutral-700">
                    <strong className="text-neutral-900">Missing numbers don&apos;t mean bad luck</strong> — they mean untapped energies.
                  </p>
                </div>

                <div className="flex items-start gap-2 border-t border-neutral-100/70 pt-1">
                  <Info size={14} className="shrink-0 text-amber-500" />
                  <p className="text-[8.5px] font-medium leading-tight text-neutral-700">
                    Awareness of these gaps is the <strong className="text-neutral-900">first step towards transformation</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-2 border-t border-neutral-100/70 pt-1">
                  <Lightbulb size={14} className="shrink-0 text-purple-600" />
                  <p className="text-[8.5px] font-medium leading-tight text-neutral-700">
                    With the right remedies, you can attract <strong className="text-neutral-900">balance, opportunities and positive changes</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-2 border-t border-neutral-100/70 pt-1">
                  <Star size={14} className="shrink-0 text-indigo-600" />
                  <p className="text-[8.5px] font-medium leading-tight text-neutral-700">
                    Strengthening missing numbers helps in overall <strong className="text-neutral-900">growth, peace and success</strong>.
                  </p>
                </div>
              </ReportCardInner>
            </ReportCard>
          </section>

        </div>

        {/* Footer: Energy Gap Summary, Tip & Page Number */}
        <footer className="relative z-20 mt-auto shrink-0 pt-1.5 pb-4 mb-6">
          <div className="relative px-3 pb-2 pt-2">
            <CornerFlourish className="pointer-events-none absolute bottom-0 left-0 h-7 w-7 -scale-x-100 opacity-80" />
            <CornerFlourish className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 opacity-80" />

            <div
              className="mb-1.5 rounded-[10px] border px-2.5 py-2"
              style={{ borderColor: CARD_INNER_BORDER, backgroundColor: CARD_BG }}
            >
              <h4 className="mb-1 text-center text-[9px] font-bold uppercase tracking-wide text-[#c62828] font-serif">
                YOUR ENERGY GAP SUMMARY
              </h4>
              <div className="flex items-center justify-between gap-2">
                <CoverLotus size={30} className="shrink-0" />
                <p
                  className="flex-1 text-center text-[8.5px] leading-snug text-[#213247]"
                  style={{ fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
                >
                  {energyGapSummary}
                </p>
                <CoverLotus size={30} className="shrink-0" />
              </div>
            </div>

            <div
              className="rounded-[10px] border px-2.5 py-1.5"
              style={{ borderColor: CARD_INNER_BORDER, backgroundColor: CARD_BG }}
            >
              <div className="flex items-center justify-between gap-2">
                <Pattern3 size={26} className="shrink-0" />
                <p
                  className="flex-1 text-center text-[8px] leading-snug text-[#213247]"
                  style={{ fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
                >
                  <strong className="font-bold text-[#c62828]">TIP: </strong>
                  {tip}
                </p>
                <Pattern3 size={26} className="shrink-0 rotate-180" />
              </div>
            </div>

            
          </div>
        </footer>
      </div>
    </ReportPageShell>
  );
}