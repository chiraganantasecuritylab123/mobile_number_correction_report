import { Award, Check, Hash, LayoutGrid, Lightbulb, Star, Trophy, Users } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

const COLORS = REPORT_COLORS;

const THEME = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldBorder: "#b8860b",
  bodyText: "#2a2a2a",
  excellent: "#2d7a4f",
  compound: "#d48e31",
  overall: "#6b4c9a",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  topEffect: "/assets/business-name-report/top-effect.png",
  growthChart: "/assets/signatureReport/building.png",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";

export type NumberMetric = {
  value: number;
  root: number;
};

export type PercentMetric = {
  percent: number;
  label: string;
  starRating?: number;
};

export type CorrectedNameOption = {
  optionLabel: string;
  correctedName: string;
  themeColor: string;
  nameNumber: NumberMetric;
  compoundNumber: NumberMetric;
  industryCompatibility: PercentMetric;
  overallScore: PercentMetric;
  summary: string;
};

export type RecommendedCorrectedNamesProps = {
  pageNumber?: string;
  sectionTitle?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  introText?: string;
  nameOptions?: CorrectedNameOption[];
  recommendationTitle?: string;
  recommendationText?: string;
  topRecommendation?: string;
};

const defaultNameOptions: CorrectedNameOption[] = [
  {
    optionLabel: "OPTION 01",
    correctedName: "ANANTAX SOLUTIONS PVT LTD",
    themeColor: "#4a0e0e",
    nameNumber: { value: 32, root: 5 },
    compoundNumber: { value: 41, root: 5 },
    industryCompatibility: { percent: 95, label: "Excellent" },
    overallScore: { percent: 95, label: "Excellent", starRating: 5 },
    summary: "High success vibration, excellent financial flow, strong brand power and long-term stability.",
  },
  {
    optionLabel: "OPTION 02",
    correctedName: "ANANTAX INNOVATIONS PVT LTD",
    themeColor: "#1a365d",
    nameNumber: { value: 28, root: 1 },
    compoundNumber: { value: 37, root: 1 },
    industryCompatibility: { percent: 93, label: "Excellent" },
    overallScore: { percent: 93, label: "Excellent", starRating: 5 },
    summary: "Powerful leadership energy, high innovation, strong market visibility and growth potential.",
  },
  {
    optionLabel: "OPTION 03",
    correctedName: "ANANTAX GLOBAL SOLUTIONS PVT LTD",
    themeColor: "#064e3b",
    nameNumber: { value: 24, root: 6 },
    compoundNumber: { value: 42, root: 6 },
    industryCompatibility: { percent: 92, label: "Excellent" },
    overallScore: { percent: 92, label: "Excellent", starRating: 5 },
    summary: "Strong global expansion energy, financial stability, customer trust and long-term prosperity.",
  },
];

function OrnamentDivider({ width = 200 }: { width?: number }) {
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
        <div className="absolute left-[65px] top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full text-[22px] font-bold text-white">
          {pageNumber}
        </div>
        <h2
          className="absolute right-[48px] top-1/2 max-w-[250px] -translate-y-1/2 text-center text-[11px] font-bold leading-tight tracking-[0.07em]"
          style={{ color: COLORS.brown, fontFamily: SERIF }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function StarRating({ count, color = THEME.overall, size = 7 }: { count: number; color?: string; size?: number }) {
  return (
    <div className="flex items-center justify-center gap-px">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`score-star-${index}`}
          size={size}
          fill={count >= index + 1 ? color : "none"}
          stroke={color}
          strokeWidth={1.75}
          aria-hidden
        />
      ))}
    </div>
  );
}

function OptionRibbon({ optionNumber, color }: { optionNumber: string; color: string }) {
  return (
    <div
      className="absolute left-1 top-0 z-10 flex w-[56px] flex-col items-center gap-0.5 pt-1.5 pb-3"
      style={{
        backgroundColor: color,
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), 50% 100%, 0 calc(100% - 12px))",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.12)",
      }}
    >
      <span className="text-[9px] font-bold tracking-[0.14em] text-white/95">OPTION</span>
      <span className="text-[32px] font-bold leading-none text-white" style={{ fontFamily: SERIF, color: COLORS.goldLight }}>
        {optionNumber}
      </span>
      <Award size={32} strokeWidth={1.5} className="mt-1" style={{ color: COLORS.goldLight }} aria-hidden />
    </div>
  );
}

function GoldFlourishDivider() {
  return (
    <div className="my-1 flex items-center gap-1.5 px-2">
      <div className="h-px flex-1" style={{ backgroundColor: THEME.goldBorder, opacity: 0.55 }} />
      <Pattern3 size={16} />
      <div className="h-px flex-1" style={{ backgroundColor: THEME.goldBorder, opacity: 0.55 }} />
    </div>
  );
}

function StatIconBadge({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <div
      className="flex h-[32px] w-[32px] items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
    >
      <Icon size={20} strokeWidth={2.25} style={{ color: "#fff" }} aria-hidden />
    </div>
  );
}

function StatColumn({
  label,
  icon,
  iconColor,
  valueColor,
  children,
  showDivider,
}: {
  label: string;
  icon: LucideIcon;
  iconColor: string;
  valueColor: string;
  children: ReactNode;
  showDivider?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col items-center px-1 py-1 text-center"
      style={{
        borderRight: showDivider ? "1px solid rgba(184,134,11,0.28)" : "none",
      }}
    >
      <StatIconBadge icon={icon} color={iconColor} />
      <p className="mt-1 text-[10px] font-bold leading-tight tracking-[0.05em]" style={{ color: COLORS.brown }}>
        {label}
      </p>
      <div className="mt-0.5" style={{ color: valueColor }}>
        {children}
      </div>
    </div>
  );
}

function NameOptionCard({ option }: { option: CorrectedNameOption }) {
  const optionNumber = option.optionLabel.split(" ")[1] ?? "01";

  return (
    <div
      className="relative overflow-hidden rounded-[6px] px-3 pb-2 pt-1"
      style={{
        border: `1.5px solid ${THEME.goldBorder}`,
        backgroundColor: "#FDECD2",
        boxShadow: "0 2px 8px rgba(93, 46, 23, 0.08)",
      }}
    >
      <OptionRibbon optionNumber={optionNumber} color={option.themeColor} />

      <div className="pl-[52px] pr-1">
        <div className="flex items-center text-center gap-3 py-2">
          <div
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full"
            style={{ border: `1.5px solid ${option.themeColor}`, backgroundColor: option.themeColor }}
          >
            <Star size={30} fill={COLORS.goldLight} stroke={COLORS.goldLight} aria-hidden />
          </div>
          <div className="flex items-start flex-col gap-1.5">
            <p className="text-[11px] font-bold tracking-[0.1em]" style={{ color: option.themeColor, fontFamily: SERIF }}>
              CORRECTED NAME
            </p>
            <p
              className="text-[16px] font-bold leading-tight"
              style={{ color: option.themeColor, fontFamily: SERIF }}
            >
              {option.correctedName}
            </p>
          </div>
        </div>

        {/* <GoldFlourishDivider /> */}

        <div
          className="overflow-hidden rounded-[4px] px-0.5 py-1"
          style={{ border: `1px solid rgba(184, 134, 11, 0.35)` }}
        >
          <div className="grid grid-cols-4">
            <StatColumn
              label="NAME NUMBER"
              icon={Hash}
              iconColor={option.themeColor}
              valueColor={option.themeColor}
              showDivider
            >
              <p className="text-[22px] font-bold leading-none" style={{ fontFamily: SERIF }}>
                {option.nameNumber.value}
              </p>
              <p className="text-[10px] mt-1 font-semibold leading-none opacity-85">({option.nameNumber.root})</p>
            </StatColumn>

            <StatColumn
              label="COMPOUND NUMBER"
              icon={LayoutGrid}
              iconColor={THEME.compound}
              valueColor={THEME.compound}
              showDivider
            >
              <p className="text-[22px] font-bold leading-none" style={{ fontFamily: SERIF }}>
                {option.compoundNumber.value}
              </p>
              <p className="text-[10px] mt-1 font-semibold leading-none opacity-85">({option.compoundNumber.root})</p>
            </StatColumn>

            <StatColumn
              label="INDUSTRY COMPATIBILITY"
              icon={Users}
              iconColor={THEME.excellent}
              valueColor={THEME.excellent}
              showDivider
            >
              <p className="text-[22px] font-bold leading-none" style={{ fontFamily: SERIF }}>
                {option.industryCompatibility.percent}%
              </p>
              <p className="text-[10px] mt-1 font-bold capitalize leading-none">{option.industryCompatibility.label}</p>
            </StatColumn>

            <StatColumn
              label="OVERALL SCORE"
              icon={Trophy}
              iconColor={THEME.overall}
              valueColor={THEME.overall}
            >
              <p className="text-[22px] font-bold leading-none" style={{ fontFamily: SERIF }}>
                {option.overallScore.percent}%
              </p>
              {option.overallScore.starRating ? (
                <div className="mt-0.5">
                  <StarRating count={option.overallScore.starRating} color={THEME.overall} size={10} />
                </div>
              ) : null}
              <p className="mt-1 text-[9px] font-bold tracking-[0.06em]">
                {option.overallScore.label.toUpperCase()}
              </p>
            </StatColumn>
          </div>
        </div>

        <div
          className="mt-1.5 flex items-center gap-1.5 rounded-[4px] px-2 py-1"
          style={{ backgroundColor: "rgba(245, 235, 220, 0.75)" }}
        >
          <div
            className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: THEME.excellent }}
          >
            <Check size={10} strokeWidth={3} style={{ color: "#fff" }} aria-hidden />
          </div>
          <p className="text-[10px] leading-snug" style={{ color: THEME.bodyText, fontFamily: SERIF }}>
            {option.summary}
          </p>
        </div>
      </div>
    </div>
  );
}

function RecommendationBox({
  title,
  text,
  topRecommendation,
}: {
  title: string;
  text: string;
  topRecommendation: string;
}) {
  return (
    <div
      className="grid overflow-hidden rounded-[5px]"
      style={{
        border: `1.5px solid ${THEME.goldBorder}`,
        gridTemplateColumns: "1fr 72px",
      }}
    >
      <div className="flex items-center gap-2 px-2.5 py-4">
        <div
          className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: THEME.gold }}
        >
          <Lightbulb size={18} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.06em]" style={{ color: THEME.gold, fontFamily: SERIF }}>
            {title}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug" style={{ color: THEME.bodyText, fontFamily: SERIF }}>
            <span className="font-bold" style={{ color: COLORS.brown }}>
              {topRecommendation}
            </span>{" "}
            {text}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center px-1">
        <Image
          src={ASSETS.growthChart}
          alt=""
          width={65}
          height={34}
          className="object-contain opacity-90"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function RecommendedCorrectedNames({
  pageNumber = "10",
  sectionTitle = "RECOMMENDED CORRECTED NAMES",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  introText = "Based on numerological analysis, the following corrected business names are recommended for maximum success and growth.",
  nameOptions = defaultNameOptions,
  recommendationTitle = "RECOMMENDATION",
  topRecommendation = "Option 1 is our highest recommendation.",
  recommendationText = "However, choose the name that resonates most with your vision and business goals.",
}: RecommendedCorrectedNamesProps) {
  return (
    <BusinessNameReportPageShell padding="12px 32px 16px" pageNumber={pageNumber}>
      <div className="relative flex h-full min-h-0 flex-col font-nunito-sans">
        <Image
          src={ASSETS.sunCompass}
          alt=""
          width={94}
          height={94}
          className="pointer-events-none absolute left-[-2px] top-[56px] opacity-35"
          aria-hidden
        />
        <Image
          src={ASSETS.horoscopeWheel}
          alt=""
          width={94}
          height={94}
          className="pointer-events-none absolute right-[-2px] top-[56px] opacity-35"
          aria-hidden
        />

        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image src={ASSETS.logo} alt="Astro Aarambh" width={72} height={72} className="mb-0.5" priority />
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
            <OrnamentDivider width={200} />
          </div>
        </header>

        <PageTitleBar pageNumber={pageNumber} title={sectionTitle} />

        <p
          className="relative z-10 mx-auto mt-1.5 max-w-[460px] shrink-0 px-3 text-center text-[11px] leading-relaxed"
          style={{ color: THEME.bodyText, opacity: 0.92, fontFamily: SERIF }}
        >
          {introText}
        </p>

        <section className="relative z-10 mt-2 flex  flex-col justify-center gap-2">
          {nameOptions.map((option) => (
            <NameOptionCard key={option.optionLabel} option={option} />
          ))}
        </section>

        <section className="relative z-10 mt-2 shrink-0">
          <RecommendationBox
            title={recommendationTitle}
            text={recommendationText}
            topRecommendation={topRecommendation}
          />
        </section>

        <footer className="relative z-10 mt-1.5 shrink-0 pb-0.5">
          <div className="flex justify-center">
            <OrnamentDivider width={180} />
          </div>
          <div className="mt-1 flex items-center justify-end gap-1.5">
            <Pattern3 size={16} />
            <p className="text-[9px] font-bold tracking-[0.12em]" style={{ color: COLORS.brown, opacity: 0.75 }}>
              PAGE {pageNumber}
            </p>
            <Pattern3 size={16} className="rotate-180" />
          </div>
        </footer>
      </div>
    </BusinessNameReportPageShell>
  );
}
