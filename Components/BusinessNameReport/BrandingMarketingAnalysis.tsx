import {
  BarChart3,
  Building2,
  Check,
  Eye,
  Lightbulb,
  Megaphone,
  MessageCircle,
  Rocket,
  Sparkles,
  Star,
  Tag,
  Target,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useId } from "react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

const COLORS = REPORT_COLORS;

const THEME = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldBorder: "#b8860b",
  bodyText: "#2a2a2a",
  navy: "#213247",
  excellent: "#2d7a4f",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  topEffect: "/assets/business-name-report/top-effect.png",
  synchronyDiagram: "/assets/business-name-report/synchrony.png",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";

export type VibrationScoreCard = {
  title: string;
  percent: number;
  ratingLabel: string;
  starRating: number;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  gaugeColor: string;
};

export type BrandingFooterStat = {
  label: string;
  value: string;
  subtext: string;
  icon: LucideIcon;
  iconColor: string;
};

export type BrandingMarketingAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  introText?: string;
  businessName?: string;
  brandVibrationTheme?: string;
  brandVibrationSubtheme?: string;
  overallBrandingScore?: number;
  brandingPotentialLabel?: string;
  vibrationScores?: VibrationScoreCard[];
  brandingInsights?: string[];
  brandStrengths?: string[];
  legacyQuote?: string;
  footerStats?: BrandingFooterStat[];
};

const defaultVibrationScores: VibrationScoreCard[] = [
  {
    title: "BRAND RECALL SCORE",
    percent: 92,
    ratingLabel: "EXCELLENT",
    starRating: 5,
    description: "High memorability and easy brand recognition",
    icon: Sparkles,
    iconColor: THEME.maroon,
    gaugeColor: THEME.maroon,
  },
  {
    title: "MARKET VISIBILITY SCORE",
    percent: 88,
    ratingLabel: "VERY GOOD",
    starRating: 4,
    description: "Strong presence and visibility in the market",
    icon: Eye,
    iconColor: "#d48e31",
    gaugeColor: "#d48e31",
  },
  {
    title: "CUSTOMER ATTRACTION SCORE",
    percent: 90,
    ratingLabel: "EXCELLENT",
    starRating: 5,
    description: "Strong ability to attract and retain customers",
    icon: Users,
    iconColor: "#1b5e20",
    gaugeColor: "#1b5e20",
  },
  {
    title: "SOCIAL MEDIA ENERGY SCORE",
    percent: 85,
    ratingLabel: "VERY GOOD",
    starRating: 4,
    description: "Good resonance for social media marketing",
    icon: ThumbsUp,
    iconColor: "#3d6b8e",
    gaugeColor: "#3d6b8e",
  },
  {
    title: "ADVERTISEMENT SUCCESS SCORE",
    percent: 86,
    ratingLabel: "VERY GOOD",
    starRating: 4,
    description: "Effective advertising and promotional energy",
    icon: Megaphone,
    iconColor: "#6b4c9a",
    gaugeColor: "#6b4c9a",
  },
  {
    title: "WORD-OF-MOUTH POTENTIAL SCORE",
    percent: 87,
    ratingLabel: "VERY GOOD",
    starRating: 4,
    description: "Strong potential for organic referrals",
    icon: MessageCircle,
    iconColor: "#2a7a7a",
    gaugeColor: "#2a7a7a",
  },
];

const defaultBrandingInsights = [
  "Strong brand identity vibration in the business name",
  "Positive marketing energy alignment with target audience",
  "Good customer connection and trust-building potential",
  "Effective communication and messaging vibration",
];

const defaultBrandStrengths = [
  "High recall & memorability",
  "Strong customer attraction",
  "Good social media resonance",
  "Effective advertising potential",
  "Positive word-of-mouth energy",
  "Trusted brand vibration",
];

const defaultFooterStats: BrandingFooterStat[] = [
  {
    label: "BRAND POWER",
    value: "HIGH",
    subtext: "Powerful & Positive Vibration",
    icon: Star,
    iconColor: "#d48e31",
  },
  {
    label: "MARKET POSITION",
    value: "STRONG",
    subtext: "High Visibility & Recognition",
    icon: Eye,
    iconColor: "#3d6b8e",
  },
  {
    label: "CUSTOMER CONNECT",
    value: "EXCELLENT",
    subtext: "Strong Attraction & Trust Building",
    icon: Users,
    iconColor: THEME.excellent,
  },
  {
    label: "GROWTH POTENTIAL",
    value: "VERY HIGH",
    subtext: "Great Scope for Expansion",
    icon: Rocket,
    iconColor: "#6b4c9a",
  },
];

function OrnamentDivider({ width = 210 }: { width?: number }) {
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
          className="absolute right-[50px] top-1/2 max-w-[250px] -translate-y-1/2 text-center text-[11px] font-bold leading-tight tracking-[0.07em]"
          style={{ color: COLORS.brown, fontFamily: SERIF }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function StarRating({ count, size = 9 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = count >= index + 1;
        const half = !filled && count >= index + 0.5;
        return (
          <Star
            key={`brand-star-${index}`}
            size={size}
            fill={filled || half ? COLORS.gold : "none"}
            stroke={COLORS.gold}
            strokeWidth={half ? 1.5 : 2}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

function SemiCircularGauge({
  percent,
  gaugeId,
  color = COLORS.gold,
  size = "md",
}: {
  percent: number;
  gaugeId: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}) {
  const radius = size === "lg" ? 40 : size === "sm" ? 26 : 30;
  const width = size === "lg" ? 108 : size === "sm" ? 72 : 84;
  const height = size === "lg" ? 64 : size === "sm" ? 42 : 48;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  const fontSize = size === "lg" ? "text-[24px]" : size === "sm" ? "text-[14px]" : "text-[17px]";

  return (
    <div className="relative flex items-end justify-center" style={{ width, height }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" aria-hidden>
        <path
          d={`M 8 ${height - 6} A ${radius} ${radius} 0 0 1 ${width - 8} ${height - 6}`}
          fill="none"
          stroke="#F0E0C8"
          strokeWidth={size === "lg" ? 8 : 6}
          strokeLinecap="round"
        />
        <path
          d={`M 8 ${height - 6} A ${radius} ${radius} 0 0 1 ${width - 8} ${height - 6}`}
          fill="none"
          stroke={color}
          strokeWidth={size === "lg" ? 8 : 6}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span
        className={`absolute bottom-[2px] font-bold leading-none ${fontSize}`}
        style={{ color: COLORS.brown }}
      >
        {percent}%
      </span>
    </div>
  );
}

function BrandingScoreGauge({ percent, label }: { percent: number; label: string }) {
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
      <p className="mt-0.5 text-[10px] font-bold tracking-[0.06em]" style={{ color: THEME.gold }}>
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

function VibrationScoreCardView({ card, index }: { card: VibrationScoreCard; index: number }) {
  const gaugeId = useId();
  const Icon = card.icon;

  return (
    <div
      className="flex h-full min-h-0 flex-col items-center p-3 text-center"
      style={{
        borderRight: index % 3 !== 2 ? `1px solid rgba(184,134,11,0.25)` : "none",
        borderBottom: index < 3 ? `1px solid rgba(184,134,11,0.25)` : "none",
      }}
    >
      <div className="flex w-full items-start gap-1">
        <div
          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: card.iconColor }}
        >
          <Icon size={16} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
        </div>
        <p
          className="text-left text-[10px] font-bold leading-tight tracking-[0.04em]"
          style={{ color: THEME.maroon, fontFamily: SERIF }}
        >
          {index + 1}. {card.title}
        </p>
      </div>

      <SemiCircularGauge percent={card.percent} gaugeId={gaugeId} color={card.gaugeColor} size="sm" />

      <StarRating count={card.starRating} size={8} />

      <p
        className="mt-0.5 rounded-full px-2 py-px text-[10px] font-bold"
        style={{
          color: COLORS.brown,
          border: `1px solid ${THEME.goldBorder}`,
          backgroundColor: "rgba(253,245,230,0.7)",
        }}
      >
        {card.ratingLabel}
      </p>

      <p className="mt-1 text-[10px] leading-snug" style={{ color: THEME.bodyText, opacity: 0.9 }}>
        {card.description}
      </p>
    </div>
  );
}

function InsightList({
  title,
  items,
  icon: Icon,
  checkColor,
}: {
  title: string;
  items: string[];
  icon: LucideIcon;
  checkColor: string;
}) {
  return (
    <div
      className="flex flex-col rounded-[5px] px-2 py-4"
      style={{
        border: `1.5px solid ${THEME.goldBorder}`,
      }}
    >
      <div className="mb-1 flex items-center gap-1.5">
        <Icon size={16} strokeWidth={2} style={{ color: THEME.maroon }} aria-hidden />
        <p className="text-[10px] font-bold tracking-[0.05em]" style={{ color: THEME.maroon, fontFamily: SERIF }}>
          {title}
        </p>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-1">
            <div
              className="mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: checkColor }}
            >
              <Check size={8} strokeWidth={3} style={{ color: "#fff" }} aria-hidden />
            </div>
            <span className="text-[10px] leading-snug" style={{ color: THEME.bodyText }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandingSummaryFooter({ stats }: { stats: BrandingFooterStat[] }) {
  return (
    <div
      className="grid overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}`, gridTemplateColumns: "88px 1fr" }}
    >
      <div
        className="flex items-center justify-center px-1 py-2"
        style={{ backgroundColor: THEME.maroon }}
      >
        <p className="text-center text-[10px] font-bold leading-tight tracking-[0.06em] text-white">
          BRANDING
          <br />
          SUMMARY
        </p>
      </div>
      <div className="grid grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-1.5 px-1.5 py-1.5"
              style={{
                borderLeft: index > 0 ? `1px solid rgba(184,134,11,0.3)` : "none",
              }}
            >
              <div
                className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: stat.iconColor }}
              >
                <Icon size={10} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold leading-tight" style={{ color: THEME.gold }}>
                  {stat.label}
                </p>
                <p className="text-[10px] font-bold leading-tight" style={{ color: COLORS.brown }}>
                  {stat.value}
                </p>
                <p className="text-[10px] leading-tight" style={{ color: THEME.bodyText, opacity: 0.85 }}>
                  {stat.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function BrandingMarketingAnalysis({
  pageNumber = "09",
  sectionTitle = "BRANDING & MARKETING ANALYSIS",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  introText = "This section analyzes how your business name vibration supports brand building, marketing success and customer connection.",
  businessName = "ANANTAX TECHNOLOGIES PVT LTD",
  brandVibrationTheme = "INNOVATION • TRUST • GROWTH",
  brandVibrationSubtheme = "TECHNOLOGY • LEADERSHIP",
  overallBrandingScore = 89,
  brandingPotentialLabel = "EXCELLENT BRANDING POTENTIAL",
  vibrationScores = defaultVibrationScores,
  brandingInsights = defaultBrandingInsights,
  brandStrengths = defaultBrandStrengths,
  legacyQuote = "A strong name creates a strong brand. A strong brand creates a lasting legacy.",
  footerStats = defaultFooterStats,
}: BrandingMarketingAnalysisProps) {
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
            <InfoColumn icon={Building2} label="CURRENT BUSINESS NAME">
              <p className="text-[10px] font-bold leading-snug" style={{ color: COLORS.brown, fontFamily: SERIF }}>
                {businessName}
              </p>
            </InfoColumn>
            <InfoColumn icon={Tag} label="BRAND VIBRATION THEME" showDivider>
              <p className="text-[10px] font-bold leading-snug" style={{ color: COLORS.brown, fontFamily: SERIF }}>
                {brandVibrationTheme}
              </p>
              <p className="mt-0.5 text-[10px] font-bold leading-snug" style={{ color: COLORS.brown, fontFamily: SERIF }}>
                {brandVibrationSubtheme}
              </p>
            </InfoColumn>
            <InfoColumn label="OVERALL BRANDING SCORE" showDivider>
              <BrandingScoreGauge percent={overallBrandingScore} label={brandingPotentialLabel} />
            </InfoColumn>
          </div>
        </section>

        <section
          className="relative z-10 mt-3 flex flex-col overflow-hidden rounded-[5px]"
          style={{ border: `1.5px solid ${THEME.goldBorder}` }}
        >
          <div className="px-2.5 py-1" style={{ backgroundColor: THEME.maroon }}>
            <p className="text-center text-[10px] font-bold tracking-[0.08em] text-white">
              BRANDING & MARKETING VIBRATION SCORES
            </p>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2">
            {vibrationScores.map((card, index) => (
              <VibrationScoreCardView key={card.title} card={card} index={index} />
            ))}
          </div>
        </section>

        <section className="relative z-10 mt-3 grid shrink-0 grid-cols-[1fr_110px_1fr] gap-1.5">
          <InsightList
            title="BRANDING INSIGHTS"
            items={brandingInsights}
            icon={Lightbulb}
            checkColor={THEME.maroon}
          />
          <div
            className="flex flex-col items-center rounded-[5px] px-1.5 py-2 text-center"
            style={{
              border: `1.5px solid ${THEME.goldBorder}`,
            }}
          >
            <Image
              src={ASSETS.synchronyDiagram}
              alt=""
              width={52}
              height={52}
              className="mb-1 object-contain opacity-90"
              aria-hidden
            />
            <BarChart3 size={18} strokeWidth={1.5} style={{ color: COLORS.gold }} className="mb-1" aria-hidden />
            <p className="text-[10px] italic leading-snug" style={{ color: THEME.bodyText, fontFamily: SERIF }}>
              {legacyQuote}
            </p>
          </div>
          <InsightList
            title="KEY BRAND STRENGTHS"
            items={brandStrengths}
            icon={Target}
            checkColor={THEME.excellent}
          />
        </section>

        <section className="relative z-10 mt-3 shrink-0">
          <BrandingSummaryFooter stats={footerStats} />
        </section>

        <footer className="relative z-10 mt-1 shrink-0 pb-0.5">
          <div className="flex justify-center">
            <OrnamentDivider width={180} />
          </div>
        </footer>
      </div>
    </BusinessNameReportPageShell>
  );
}
