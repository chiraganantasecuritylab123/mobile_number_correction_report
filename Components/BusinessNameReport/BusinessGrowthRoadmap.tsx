import {
  Award,
  BarChart3,
  Calendar,
  Check,
  DollarSign,
  Eye,
  Megaphone,
  MessageCircle,
  PenLine,
  Rocket,
  Settings,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
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
  green: "#1b5e20",
  greenMid: "#2d7a4f",
  darkMaroon: "#3a0a0a",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  topEffect: "/assets/business-name-report/top-effect.png",
  panelBg: "/assets/signatureReport/foooter-background.png",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";

export type GrowthMetric = {
  label: string;
  percent: number;
  icon: LucideIcon;
};

export type TimelineMilestone = {
  periodLabel: string;
  tabColor: string;
  checkColor: string;
  barColor: string;
  leftTitle: string;
  leftIcon: LucideIcon;
  checklistItems: string[];
  rightTitle: string;
  metrics: GrowthMetric[];
};

export type ActionStep = {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type BusinessGrowthRoadmapProps = {
  pageNumber?: string;
  sectionTitle?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  introText?: string;
  milestones?: TimelineMilestone[];
  actionSteps?: ActionStep[];
  closingText?: string;
  closingHighlight?: string;
};

const defaultMilestones: TimelineMilestone[] = [
  {
    periodLabel: "FIRST 3 MONTHS",
    tabColor: THEME.maroon,
    checkColor: THEME.maroon,
    barColor: THEME.gold,
    leftTitle: "EXPECTED IMPROVEMENTS",
    leftIcon: Target,
    checklistItems: [
      "Stabilization of business energy",
      "Improved brand perception",
      "Increased inquiries and reach",
      "Better customer response",
      "Stronger daily cash flow",
    ],
    rightTitle: "EXPECTED IMPACT LEVEL",
    metrics: [
      { label: "Financial Flow", percent: 75, icon: DollarSign },
      { label: "Brand Visibility", percent: 70, icon: Eye },
      { label: "Customer Attraction", percent: 72, icon: Users },
      { label: "Operational Efficiency", percent: 68, icon: Settings },
      { label: "Overall Growth Energy", percent: 70, icon: TrendingUp },
    ],
  },
  {
    periodLabel: "6 MONTHS",
    tabColor: THEME.green,
    checkColor: THEME.greenMid,
    barColor: THEME.greenMid,
    leftTitle: "GROWTH INDICATORS",
    leftIcon: BarChart3,
    checklistItems: [
      "Consistent increase in revenue",
      "Stronger market positioning",
      "Higher customer retention",
      "More partnerships & collaborations",
      "Improved team productivity",
    ],
    rightTitle: "GROWTH PROJECTIONS",
    metrics: [
      { label: "Revenue Growth", percent: 82, icon: DollarSign },
      { label: "Market Presence", percent: 80, icon: Eye },
      { label: "Brand Recognition", percent: 85, icon: Star },
      { label: "Customer Loyalty", percent: 78, icon: Users },
      { label: "Profitability", percent: 83, icon: TrendingUp },
    ],
  },
  {
    periodLabel: "12 MONTHS",
    tabColor: THEME.darkMaroon,
    checkColor: THEME.maroon,
    barColor: THEME.maroon,
    leftTitle: "EXPANSION POSSIBILITIES",
    leftIcon: Rocket,
    checklistItems: [
      "Strong brand authority establishment",
      "New product/service expansion",
      "Entering new markets",
      "Investor attraction & funding",
      "Stable wealth & long-term success",
    ],
    rightTitle: "EXPANSION POTENTIAL",
    metrics: [
      { label: "Business Scale", percent: 92, icon: BarChart3 },
      { label: "Market Reach", percent: 90, icon: Eye },
      { label: "Brand Value", percent: 93, icon: Star },
      { label: "Financial Growth", percent: 94, icon: DollarSign },
      { label: "Long-Term Stability", percent: 92, icon: Trophy },
    ],
  },
];

const defaultActionSteps: ActionStep[] = [
  {
    number: 1,
    title: "UPDATE BRANDING",
    description: "Refresh brand identity to match new positive vibration",
    icon: Award,
  },
  {
    number: 2,
    title: "UPDATE LOGO",
    description: "Design a logo reflecting brand energy and future vision",
    icon: PenLine,
  },
  {
    number: 3,
    title: "UPDATE SOCIAL MEDIA",
    description: "Update all platforms with the new name",
    icon: MessageCircle,
  },
  {
    number: 4,
    title: "USE CORRECTED NAME CONSISTENTLY",
    description: "Use the name in all communications and documents",
    icon: Megaphone,
  },
  {
    number: 5,
    title: "LAUNCH ON LUCKY DATE",
    description: "Start major activities on a lucky date for maximum success",
    icon: Calendar,
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
          className="absolute right-[72px] top-1/2 max-w-[250px] -translate-y-1/2 text-center text-[11px] font-bold leading-tight tracking-[0.07em]"
          style={{ color: COLORS.brown, fontFamily: SERIF }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function ThemedProgressBar({ percent, color }: { percent: number; color: string }) {
  return (
    <div
      className="h-[7px] flex-1 overflow-hidden rounded-full"
      style={{ backgroundColor: "rgba(184, 134, 11, 0.15)" }}
    >
      <div
        className="h-full rounded-full"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
    </div>
  );
}

function PeriodTab({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="inline-flex rounded-r-[4px] px-2.5 py-1"
      style={{ backgroundColor: color }}
    >
      <span className="text-[10px] font-bold tracking-[0.08em] text-white">{label}</span>
    </div>
  );
}

function MilestoneBlock({ milestone }: { milestone: TimelineMilestone }) {
  const LeftIcon = milestone.leftIcon;

  return (
    <div
      className="overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <div className="flex items-stretch">
        <PeriodTab label={milestone.periodLabel} color={milestone.tabColor} />
      </div>

      <div className="grid grid-cols-2 gap-0 bg-cover bg-center bg-no-repeat px-2 pb-2 pt-1.5">
        <div className="border-r pr-2" style={{ borderColor: "rgba(184,134,11,0.3)" }}>
          <div className="mb-1 flex items-center gap-1.5">
            <div
              className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: milestone.tabColor }}
            >
              <LeftIcon size={12} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
            </div>
            <p
              className="text-[10px] font-bold tracking-[0.06em]"
              style={{ color: COLORS.brown, fontFamily: SERIF }}
            >
              {milestone.leftTitle}
            </p>
          </div>
          <ul className="space-y-[3px]">
            {milestone.checklistItems.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <div
                  className="mt-[1px] flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: milestone.checkColor }}
                >
                  <Check size={8} strokeWidth={3} style={{ color: "#fff" }} aria-hidden />
                </div>
                <span
                  className="text-[10px] leading-snug"
                  style={{ color: THEME.bodyText, fontFamily: SERIF }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pl-2">
          <p
            className="mb-1 text-[10px] font-bold tracking-[0.06em]"
            style={{ color: COLORS.brown, fontFamily: SERIF }}
          >
            {milestone.rightTitle}
          </p>
          <div className="space-y-[4px]">
            {milestone.metrics.map((metric) => {
              const MetricIcon = metric.icon;
              return (
                <div key={metric.label} className="flex items-center gap-1">
                  <div
                    className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: milestone.tabColor }}
                  >
                    <MetricIcon size={8} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
                  </div>
                  <span
                    className="w-[88px] shrink-0 text-[10px] font-semibold leading-tight"
                    style={{ color: COLORS.brown }}
                  >
                    {metric.label}
                  </span>
                  <ThemedProgressBar percent={metric.percent} color={milestone.barColor} />
                  <span
                    className="w-[28px] shrink-0 text-right text-[10px] font-bold"
                    style={{ color: COLORS.brown }}
                  >
                    {metric.percent}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionStepsPanel({ steps }: { steps: ActionStep[] }) {
  return (
    <div
      className="overflow-hidden rounded-[5px]"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <div className="px-2.5 py-1.5" style={{ backgroundColor: THEME.maroon }}>
        <p className="text-center text-[10px] font-bold tracking-[0.1em] text-white">
          IMPORTANT ACTION STEPS
        </p>
      </div>
      <div className="grid grid-cols-5 gap-1 bg-cover bg-center bg-no-repeat px-1.5 py-2">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center px-1 text-center">
              <div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full"
                style={{ backgroundColor: THEME.maroon }}
              >
                <Icon size={14} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
              </div>
              <p
                className="mt-1 text-[10px] font-bold leading-tight tracking-[0.04em]"
                style={{ color: THEME.maroon, fontFamily: SERIF }}
              >
                {step.number}. {step.title}
              </p>
              <p
                className="mt-0.5 text-[10px] leading-snug"
                style={{ color: THEME.bodyText, fontFamily: SERIF }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ClosingSummary({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  return (
    <div className="relative rounded-[5px] p-3 flex items-center justify-absolute gap-5"
      style={{ border: `1.5px solid ${THEME.goldBorder}` }}
    >
      <Image src='/assets/compatibility-analysis/overall.png' alt="Panel Background" width={50} height={200} className="" />
      <div>
        <p
          className=" text-[10px] leading-relaxed"
          style={{ color: THEME.maroon, fontFamily: SERIF }}
        >
          {text}{" "}
        </p>
        <span className="font-bold text-[10px] not-italic tracking-[0.04em]">{highlight}</span>
      </div>
      <Image src='/assets/signatureReport/building.png' alt="Panel Background" width={50} height={200} className="" />
    </div>
  );
}

export default function BusinessGrowthRoadmap({
  pageNumber = "13",
  sectionTitle = "BUSINESS GROWTH ROADMAP",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  introText = "This roadmap outlines the expected growth trajectory after implementing your corrected business name, showing short-term improvements, mid-term growth, and long-term expansion possibilities.",
  milestones = defaultMilestones,
  actionSteps = defaultActionSteps,
  closingText = "Implementing your corrected business name with consistency, positive intention, and faith in its vibration will activate its full potential. Trust the process and stay committed to your growth journey.",
  closingHighlight = "YOUR NEW NAME IS THE KEY TO YOUR BRIGHT FUTURE!",
}: BusinessGrowthRoadmapProps) {
  return (
    <BusinessNameReportPageShell padding="12px 32px 14px" pageNumber={pageNumber}>
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
          <h1
            className="font-cinzel text-[28px] font-bold leading-none tracking-[0.08em]"
            style={{ color: THEME.maroon }}
          >
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
          className="relative z-10 mx-auto mt-1 max-w-[500px] shrink-0 px-3 text-center text-[10px] leading-relaxed"
          style={{ color: THEME.bodyText, opacity: 0.92, fontFamily: SERIF }}
        >
          {introText}
        </p>

        <section className="relative z-10 mt-1.5 flex flex-col gap-1.5">
          {milestones.map((milestone) => (
            <MilestoneBlock key={milestone.periodLabel} milestone={milestone} />
          ))}
        </section>

        <section className="relative z-10 mt-1.5 shrink-0">
          <ActionStepsPanel steps={actionSteps} />
        </section>

        <section className="relative z-10 mt-1.5 shrink-0">
          <ClosingSummary text={closingText} highlight={closingHighlight} />
        </section>
      </div>
    </BusinessNameReportPageShell>
  );
}
