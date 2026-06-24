import {
  AlertTriangle,
  BarChart3,
  Briefcase,
  Building2,
  Check,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Shield,
  Star,
  Store,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

const COLORS = REPORT_COLORS;

const THEME = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldBorder: "#b8860b",
  bodyText: "#2a2a2a",
  cardBg: "rgba(253, 245, 230, 0.55)",
  green: "#1b5e20",
  greenLight: "#f0f7f0",
  riskBg: "#fff5f5",
  excellent: "#2d7a4f",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  panelBg: "/assets/signatureReport/foooter-background.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  topEffect: "/assets/business-name-report/top-effect.png",
  numerologyCircle: "/assets/business-name-report/numerology.png",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";

export type IndustryMatrixRow = {
  label: string;
  percent: number;
  icon: LucideIcon;
};

export type AlignmentMetric = {
  title: string;
  percent: number;
  description: string;
  icon: LucideIcon;
};

export type IndustryRisk = {
  title: string;
  description: string;
};

export type FooterStat = {
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
  iconColor: string;
};

export type IndustryCompatibilityProps = {
  pageNumber?: string;
  sectionTitle?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  introText?: string;
  currentIndustry?: string;
  businessName?: string;
  compatibilityScore?: number;
  alignmentLabel?: string;
  industryMatrix?: IndustryMatrixRow[];
  alignmentMetrics?: AlignmentMetric[];
  bestMatchTitle?: string;
  bestMatchPercent?: number;
  bestMatchPoints?: string[];
  industryRisks?: IndustryRisk[];
  numerologyNumber?: string | number;
  numerologyText?: string;
  footerStats?: FooterStat[];
};

const defaultIndustryMatrix: IndustryMatrixRow[] = [
  { label: "Technology & Software", percent: 95, icon: Factory },
  { label: "Education & Training", percent: 82, icon: GraduationCap },
  { label: "Trading & Commerce", percent: 75, icon: Store },
  { label: "Healthcare & Wellness", percent: 68, icon: HeartPulse },
  { label: "Real Estate & Construction", percent: 60, icon: Home },
];

const defaultAlignmentMetrics: AlignmentMetric[] = [
  {
    title: "Leadership Alignment",
    percent: 90,
    description: "Strong authority and decision-making energy",
    icon: Trophy,
  },
  {
    title: "Revenue Alignment",
    percent: 88,
    description: "Good financial flow and profit generation",
    icon: BarChart3,
  },
  {
    title: "Market Recognition",
    percent: 93,
    description: "High visibility and brand recall potential",
    icon: Star,
  },
  {
    title: "Expansion Potential",
    percent: 91,
    description: "Strong growth and scaling opportunities",
    icon: Building2,
  },
];

const defaultBestMatchPoints = [
  "Strong innovation vibration",
  "Technology sector resonance",
  "Digital growth energy",
  "Leadership in tech domain",
  "Global scalability potential",
];

const defaultIndustryRisks: IndustryRisk[] = [
  {
    title: "COMPETITION RISK",
    description: "High competition in technology sector requires differentiation",
  },
  {
    title: "INNOVATION PRESSURE",
    description: "Constant need for innovation and updates",
  },
  {
    title: "LEADERSHIP DEPENDENCY",
    description: "Business growth tied to key leadership decisions",
  },
];

const defaultFooterStats: FooterStat[] = [
  {
    label: "INDUSTRY COMPATIBILITY SCORE",
    value: "92%",
    subtext: "Excellent Alignment",
    icon: Trophy,
    iconColor: THEME.excellent,
  },
  {
    label: "RECOMMENDED INDUSTRY",
    value: "Technology & Software Development",
    icon: Factory,
    iconColor: THEME.gold,
  },
  {
    label: "RISK LEVEL",
    value: "LOW",
    subtext: "Minimal Industry Risks",
    icon: Shield,
    iconColor: "#3d6b8e",
  },
  {
    label: "GROWTH POTENTIAL",
    value: "VERY HIGH",
    subtext: "Strong Long-Term Prospects",
    icon: BarChart3,
    iconColor: "#6b4c9a",
  },
];

function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      aria-hidden
    />
  );
}

function PageTitleBar({ pageNumber, title }: { pageNumber: string; title: string }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative">
        <Image
          src={ASSETS.topEffect}
          alt=""
          width={420}
          height={52}
          className="h-auto w-[420px]"
          aria-hidden
        />
        <div
          className="absolute left-[65px] top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full text-[22px] font-bold text-white"
        >
          {pageNumber}
        </div>
        <h2
          className="absolute right-[36px] top-1/2 max-w-[250px] -translate-y-1/2 text-center text-[11px] font-bold leading-tight tracking-[0.07em]"
          style={{ color: COLORS.brown, fontFamily: SERIF }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function PanelHeader({ title, bg = THEME.maroon }: { title: string; bg?: string }) {
  return (
    <div className="px-2.5 py-1.5" style={{ backgroundColor: bg }}>
      <p className="text-center text-[10px] font-bold tracking-[0.08em] text-white">{title}</p>
    </div>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div
      className="h-[6px] flex-1 overflow-hidden rounded-full"
      style={{ backgroundColor: "rgba(184, 134, 11, 0.18)" }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${percent}%`,
          background: `linear-gradient(90deg, ${COLORS.goldLight}, ${COLORS.brown})`,
        }}
      />
    </div>
  );
}

function CompatibilityGauge({ percent, label }: { percent: number; label: string }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[108px] w-[108px] items-center justify-center">
        <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="48" cy="48" r={radius} fill="none" stroke="#F0E0C8" strokeWidth="7" />
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke={COLORS.gold}
            strokeWidth="7"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[22px] font-bold leading-none" style={{ color: COLORS.brown }}>
            {percent}%
          </span>
          <Star size={10} fill={COLORS.gold} stroke={COLORS.gold} className="mt-0.5" aria-hidden />
        </div>
      </div>
      <p
        className="mt-0.5 text-[10px] font-bold tracking-[0.06em]"
        style={{ color: THEME.excellent }}
      >
        {label}
      </p>
    </div>
  );
}

function InfoColumn({
  icon: Icon,
  label,
  children,
  showDivider,
}: {
  icon?: LucideIcon;
  label: string;
  children: React.ReactNode;
  showDivider?: boolean;
}) {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-2 py-2.5 text-center">
      {showDivider ? (
        <div
          className="absolute left-0 top-[10%] h-[80%] w-px"
          style={{ backgroundColor: THEME.goldBorder, opacity: 0.45 }}
        />
      ) : null}
      {Icon ? (
        <div
          className="mb-1 flex h-[34px] w-[34px] items-center justify-center rounded-full"
          style={{ backgroundColor: THEME.maroon }}
        >
          <Icon size={18} strokeWidth={1.75} style={{ color: "#fff" }} />
        </div>
      ) : null}
      <p className="text-[10px] font-bold tracking-[0.08em]" style={{ color: THEME.gold }}>
        {label}
      </p>
      <div className="mt-1 w-full px-1">{children}</div>
    </div>
  );
}

function IndustryMatrixPanel({ rows }: { rows: IndustryMatrixRow[] }) {
  return (
    <div
      className="flex flex-col rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <PanelHeader title="INDUSTRY COMPATIBILITY MATRIX" />
      <div className="flex flex-1 flex-col justify-between bg-no-repeat px-2 py-1.5">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="grid grid-cols-[16px_1fr_34px] items-center gap-x-1.5 py-[5px]">
              <div
                className="flex h-[16px] w-[16px] items-center justify-center rounded-full"
                style={{ backgroundColor: THEME.maroon }}
              >
                <Icon size={10} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
              </div>
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="w-[72px] shrink-0 text-[10px] font-semibold" style={{ color: COLORS.brown }}>
                  {row.label}
                </span>
                <ProgressBar percent={row.percent} />
              </div>
              <span className="text-right text-[10px] font-bold" style={{ color: COLORS.brown }}>
                {row.percent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AlignmentBreakdownPanel({ metrics }: { metrics: AlignmentMetric[] }) {
  return (
    <div
      className="flex h-full min-h-0 flex-col overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <PanelHeader title="INDUSTRY ALIGNMENT BREAKDOWN" />
      <div className="grid flex-1 grid-cols-2 gap-px bg-no-repeat p-1">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.title}
              className="flex flex-col items-center px-1.5 py-1.5 text-center"
              style={{ borderRight: "1px solid rgba(184,134,11,0.15)", borderBottom: "1px solid rgba(184,134,11,0.15)" }}
            >
              <div
                className="mb-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full"
                style={{ backgroundColor: THEME.maroon }}
              >
                <Icon size={10} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
              </div>
              <p className="text-[10px] font-bold leading-tight" style={{ color: COLORS.brown }}>
                {metric.title}
              </p>
              <p className="text-[14px] font-bold leading-none" style={{ color: COLORS.brown }}>
                {metric.percent}%
              </p>
              <p className="mt-0.5 text-[10px] leading-snug" style={{ color: THEME.bodyText, opacity: 0.88 }}>
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BestMatchPanel({
  title,
  percent,
  points,
}: {
  title: string;
  percent: number;
  points: string[];
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <PanelHeader title="BEST INDUSTRY ALIGNMENT" bg={THEME.green} />
      <div className="flex flex-1 flex-col items-center bg-no-repeat px-2 py-2">
        <div className="flex items-center gap-2">
          <Image src='/assets/compatibility-analysis/overall.png' alt="Trophy" width={55} height={36} />
          {/* <Trophy size={36} strokeWidth={2} style={{ color: COLORS.gold }} aria-hidden /> */}
          <div>
            <p className="mt-1 text-[10px] font-bold tracking-[0.05em]" style={{ color: THEME.green, fontFamily: SERIF }}>
              BEST MATCH: {title}
            </p>
            <div>
              <p className="text-[16px] font-bold" style={{ color: THEME.green }}>
                {percent} <span className="text-[9px] font-bold" style={{ color: THEME.green }}>% ALIGNMENT</span>
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-1.5 w-full space-y-0.5 pl-1">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-1">
              <Check size={10} strokeWidth={3} style={{ color: THEME.excellent, marginTop: 1 }} aria-hidden />
              <span className="text-[10px] leading-snug" style={{ color: THEME.bodyText }}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IndustryRisksPanel({ risks }: { risks: IndustryRisk[] }) {
  return (
    <div
      className="flex h-full min-h-0 flex-col overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <PanelHeader title="INDUSTRY RISKS" />
      <div className="flex flex-1 flex-col justify-center gap-1.5 bg-no-repeat px-2 py-2">
        {risks.map((risk) => (
          <div key={risk.title} className="flex items-start gap-1.5 py-1">
            <div
              className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "#c0392b" }}
            >
              <AlertTriangle size={10} strokeWidth={2.5} style={{ color: "#fff" }} aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold leading-tight" style={{ color: THEME.maroon }}>
                {risk.title}
              </p>
              <p className="text-[10px] leading-snug" style={{ color: THEME.bodyText, opacity: 0.9 }}>
                {risk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NumerologyPanel({ number, text }: { number: string | number; text: string }) {
  return (
    <div
      className="rounded-[5px] bg-no-repeat px-2.5 py-1"
      style={{
        border: `1.5px solid ${THEME.goldBorder}`,
      }}
    >
      <div className="mb-1 flex items-center justify-center">
      </div>
      <div className="flex items-center gap-2.5">
        <div
          className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${ASSETS.numerologyCircle}')` }}
        >
          <span className="text-[18px] font-bold leading-none" style={{ color: COLORS.brown }}>
            {number}
          </span>
        </div>
        <div>
          <p className="flex-1 text-[10px] italic leading-relaxed" style={{ color: THEME.bodyText, fontFamily: SERIF }}>
            <p className="text-[10px] font-bold tracking-widest" style={{ color: COLORS.brown }}>
              NUMEROLOGY INTERPRETATION
            </p>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function FooterStatsBar({ stats }: { stats: FooterStat[] }) {
  return (
    <div
      className="grid grid-cols-4 gap-px overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="flex items-center gap-1.5 bg-no-repeat px-2 py-1.5" style={{ borderRight: index < stats.length - 1 ? `2px dotted rgba(184,134,11,0.3)` : "none" }}>
            <div
              className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: stat.iconColor }}
            >
              <Icon size={11} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold leading-tight" style={{ color: THEME.gold }}>
                {stat.label}
              </p>
              <p className="text-[10px] font-bold leading-tight" style={{ color: COLORS.brown }}>
                {stat.value}
              </p>
              {stat.subtext ? (
                <p className="text-[10px] leading-tight" style={{ color: THEME.bodyText, opacity: 0.85 }}>
                  {stat.subtext}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function IndustryCompatibility({
  pageNumber = "07",
  sectionTitle = "INDUSTRY COMPATIBILITY ANALYSIS",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  introText = "This section analyzes how well your business name aligns with different industries and identifies the most compatible sectors for success.",
  currentIndustry = "TECHNOLOGY & SOFTWARE DEVELOPMENT",
  businessName = "ANANTAX TECHNOLOGIES PVT LTD",
  compatibilityScore = 92,
  alignmentLabel = "EXCELLENT ALIGNMENT",
  industryMatrix = defaultIndustryMatrix,
  alignmentMetrics = defaultAlignmentMetrics,
  bestMatchTitle = "TECHNOLOGY & SOFTWARE",
  bestMatchPercent = 95,
  bestMatchPoints = defaultBestMatchPoints,
  industryRisks = defaultIndustryRisks,
  numerologyNumber = 7,
  numerologyText = "Your business name carries strong technology and innovation vibrations. The numerological energy resonates powerfully with the technology sector, supporting digital growth, leadership, and global scalability.",
  footerStats = defaultFooterStats,
}: IndustryCompatibilityProps) {
  return (
    <BusinessNameReportPageShell padding="12px 32px 18px" pageNumber={pageNumber}>
      <div className="relative flex h-full min-h-0 flex-col font-nunito-sans">
        <Image
          src={ASSETS.sunCompass}
          alt=""
          width={96}
          height={96}
          className="pointer-events-none absolute left-[-2px] top-[58px] opacity-35"
          aria-hidden
        />
        <Image
          src={ASSETS.horoscopeWheel}
          alt=""
          width={96}
          height={96}
          className="pointer-events-none absolute right-[-2px] top-[58px] opacity-35"
          aria-hidden
        />

        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image src={ASSETS.logo} alt="Astro Aarambh" width={74} height={74} className="mb-0.5" priority />
          <h1 className="font-cinzel text-[28px] font-bold leading-none tracking-[0.08em]" style={{ color: THEME.maroon }}>
            ASTRO AARAMBH
          </h1>
          <p className="mt-1 font-cinzel text-[13px] font-bold tracking-[0.06em]" style={{ color: THEME.gold }}>
            {reportTitle}
          </p>
          <p
            className="mt-0.5 max-w-[560px] text-[10px] font-semibold tracking-[0.12em]"
            style={{ color: THEME.bodyText, opacity: 0.88 }}
          >
            {reportSubtitle}
          </p>
          <div className="mt-1">
            <OrnamentDivider width={150} />
          </div>
        </header>

        <PageTitleBar pageNumber={pageNumber} title={sectionTitle} />

        <p
          className="relative z-10 mt-1.5 max-w-[460px] mx-auto shrink-0 px-3 text-center text-[10px] leading-relaxed"
          style={{ color: THEME.bodyText, opacity: 0.92, fontFamily: SERIF }}
        >
          {introText}
        </p>

        <section
          className="relative z-10 mt-1.5 shrink-0 overflow-hidden rounded-[5px]"
          style={{
            border: `1.5px solid ${THEME.goldBorder}`,
          }}
        >
          <div className="grid grid-cols-3">
            <InfoColumn icon={Factory} label="CURRENT INDUSTRY">
              <p className="text-[10px] font-bold leading-snug" style={{ color: COLORS.brown, fontFamily: SERIF }}>
                {currentIndustry}
              </p>
            </InfoColumn>
            <InfoColumn icon={Briefcase} label="CURRENT BUSINESS NAME" showDivider>
              <p className="text-[10px] font-bold leading-snug" style={{ color: COLORS.brown, fontFamily: SERIF }}>
                {businessName}
              </p>
            </InfoColumn>
            <InfoColumn label="COMPATIBILITY SCORE" showDivider>
              <CompatibilityGauge percent={compatibilityScore} label={alignmentLabel} />
            </InfoColumn>
          </div>
        </section>

        <section className="relative z-10 mt-1.5 grid flex-[1.1] grid-cols-2 gap-1.5">
          <IndustryMatrixPanel rows={industryMatrix} />
          <AlignmentBreakdownPanel metrics={alignmentMetrics} />
        </section>

        <section className="relative z-10 mt-1.5 grid flex-1 grid-cols-2 gap-1.5">
          <BestMatchPanel title={bestMatchTitle} percent={bestMatchPercent} points={bestMatchPoints} />
          <IndustryRisksPanel risks={industryRisks} />
        </section>

        <section className="relative z-10 mt-1.5 shrink-0">
          <NumerologyPanel number={numerologyNumber} text={numerologyText} />
        </section>

        <section className="relative z-10 mt-1.5 shrink-0">
          <FooterStatsBar stats={footerStats} />
        </section>

        <footer className="relative z-10 mt-1.5 shrink-0 pb-0.5">
          <div className="flex justify-center">
            <OrnamentDivider width={190} />
          </div>
        </footer>
      </div>
    </BusinessNameReportPageShell>
  );
}
