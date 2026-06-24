import {
  AlertTriangle,
  Clock,
  IndianRupee,
  Infinity,
  Scale,
  Shield,
  Swords,
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
  cardBg: "rgba(253, 245, 230, 0.55)",
  numberBoxBg: "rgba(253, 245, 230, 0.85)",
  highImpact: "#a84432",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  panelBg: "/assets/signatureReport/foooter-background.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  topEffect: "/assets/business-name-report/top-effect.png",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";

export type ImpactLevel = "HIGH" | "MODERATE";

export type DefectCard = {
  id: string;
  title: string;
  description: string;
  numbers: string;
  impactText: string;
  impactLevel: ImpactLevel;
  icon: LucideIcon;
  iconColor: string;
  impactColor: string;
};

export type BusinessNameDefectAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  introText?: string;
  defectCards?: DefectCard[];
  summaryTitle?: string;
  summaryText?: string;
};

const defaultDefectCards: DefectCard[] = [
  {
    id: "missing",
    title: "MISSING NUMBERS",
    description: "Numbers absent in your business name vibration",
    numbers: "2, 7",
    impactText: "Affecting emotional bonding & intuitive decision making",
    impactLevel: "HIGH",
    icon: AlertTriangle,
    iconColor: "#c0392b",
    impactColor: THEME.highImpact,
  },
  {
    id: "anti",
    title: "ANTI NUMBERS",
    description: "Numbers opposing your business energy",
    numbers: "4, 8",
    impactText: "Creating instability & resistance in business operations",
    impactLevel: "HIGH",
    icon: AlertTriangle,
    iconColor: "#d48e31",
    impactColor: THEME.highImpact,
  },
  {
    id: "enemy",
    title: "ENEMY NUMBERS",
    description: "Numbers creating conflict in business energy",
    numbers: "9",
    impactText: "Causing power struggles & conflict situations",
    impactLevel: "HIGH",
    icon: Swords,
    iconColor: "#6b2d2d",
    impactColor: THEME.highImpact,
  },
  {
    id: "karmic",
    title: "KARMIC ISSUES",
    description: "Karmic numbers affecting business destiny",
    numbers: "16, 19",
    impactText: "Past life energy influencing current business path",
    impactLevel: "MODERATE",
    icon: Infinity,
    iconColor: "#6b4c9a",
    impactColor: "#6b4c9a",
  },
  {
    id: "financial",
    title: "FINANCIAL BLOCKS",
    description: "Numbers blocking financial prosperity",
    numbers: "5, 14",
    impactText: "Blocks in cash flow & unexpected expenses",
    impactLevel: "HIGH",
    icon: IndianRupee,
    iconColor: "#b8860b",
    impactColor: THEME.highImpact,
  },
  {
    id: "legal",
    title: "LEGAL CHALLENGES VIBRATION",
    description: "Numbers attracting legal complications",
    numbers: "8",
    impactText: "Potential for disputes & compliance issues",
    impactLevel: "MODERATE",
    icon: Scale,
    iconColor: "#3d6b8e",
    impactColor: "#3d6b8e",
  },
  {
    id: "delay",
    title: "DELAY ENERGY",
    description: "Numbers causing delays in business progress",
    numbers: "4, 13",
    impactText: "Slows down progress & project completion",
    impactLevel: "HIGH",
    icon: Clock,
    iconColor: "#2a7a7a",
    impactColor: THEME.highImpact,
  },
  {
    id: "customer",
    title: "CUSTOMER LOSS ENERGY",
    description: "Numbers affecting customer relationships",
    numbers: "7, 16",
    impactText: "Difficulty in customer retention & loyalty",
    impactLevel: "MODERATE",
    icon: Users,
    iconColor: "#7a5230",
    impactColor: "#7a5230",
  },
  {
    id: "reputation",
    title: "REPUTATION RISK",
    description: "Numbers impacting brand reputation",
    numbers: "3, 8",
    impactText: "May impact brand image & public perception",
    impactLevel: "MODERATE",
    icon: Shield,
    iconColor: "#2d7a4f",
    impactColor: "#2d7a4f",
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
        <div className="absolute left-[62px] top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center text-[22px] font-bold text-white">
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

function DefectCardBox({ card }: { card: DefectCard }) {
  const Icon = card.icon;

  return (
    <div
      className="flex h-full min-h-0 flex-col rounded-[6px] px-2.5 py-2.5"
      style={{
        // backgroundImage: `url('${ASSETS.panelBg}')`,
        backgroundSize: "100% 100%",
        backgroundColor: THEME.cardBg,
        border: `1.5px solid ${THEME.goldBorder}`,
        boxShadow: "inset 0 0 0 1px rgba(253, 245, 230, 0.5)",
      }}
    >
      <div className="flex items-start gap-2">
        <div
          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: card.iconColor }}
        >
          <Icon size={16} strokeWidth={2.25} style={{ color: "#fff" }} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p
            className="text-[10px] font-bold leading-tight tracking-[0.05em]"
            style={{ color: THEME.maroon, fontFamily: SERIF }}
          >
            {card.title}
          </p>
          <p
            className="mt-0.5 text-[10px] leading-snug"
            style={{ color: THEME.bodyText, opacity: 0.9 }}
          >
            {card.description}
          </p>
        </div>
      </div>

      <div
        className="mx-auto my-2 w-[88%] rounded-[4px] px-2 py-1 text-center"
        style={{
          border: `1.5px solid ${THEME.goldBorder}`,
          backgroundColor: THEME.numberBoxBg,
        }}
      >
        <span
          className="text-[13px] font-bold leading-none"
          style={{ color: COLORS.brown, fontFamily: SERIF }}
        >
          {card.numbers}
        </span>
      </div>

      <p
        className="flex-1 px-1 text-center text-[10px] leading-snug"
        style={{ color: THEME.bodyText, opacity: 0.92 }}
      >
        {card.impactText}
      </p>

      <div
        className="mt-auto border-t pt-1.5 text-center"
        style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
      >
        <p
          className="text-[10px] font-bold tracking-[0.04em]"
          style={{ color: card.impactColor }}
        >
          Impact: {card.impactLevel}
        </p>
      </div>
    </div>
  );
}

function SummaryBox({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="flex items-start gap-2.5 rounded-[6px] p-5"
      style={{
        backgroundImage: `url('${ASSETS.panelBg}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <div
        className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "#c0392b" }}
      >
        <AlertTriangle size={14} strokeWidth={2.5} style={{ color: "#fff" }} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="text-[11px] font-bold tracking-[0.06em]"
          style={{ color: THEME.maroon, fontFamily: SERIF }}
        >
          {title}
        </p>
        <p
          className="mt-1 text-[10px] italic leading-relaxed"
          style={{ color: THEME.bodyText, opacity: 0.92, fontFamily: SERIF }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function BusinessNameDefectAnalysis({
  pageNumber = "06",
  sectionTitle = "BUSINESS NAME DEFECT ANALYSIS",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  introText = "This section identifies vibrational defects and hidden challenges in your current business name that may be blocking growth and success.",
  defectCards = defaultDefectCards,
  summaryTitle = "SUMMARY",
  summaryText = "These vibrational defects may be silently affecting your business growth, stability and success. Addressing them through name correction and vibration balancing can unlock higher potential and smoother progress.",
}: BusinessNameDefectAnalysisProps) {
  return (
    <BusinessNameReportPageShell padding="14px 34px 20px" pageNumber={pageNumber}>
      <div className="relative flex h-full min-h-0 flex-col font-nunito-sans">
        <Image
          src={ASSETS.sunCompass}
          alt=""
          width={100}
          height={100}
          className="pointer-events-none absolute left-[-4px] top-[64px] opacity-35"
          aria-hidden
        />
        <Image
          src={ASSETS.horoscopeWheel}
          alt=""
          width={100}
          height={100}
          className="pointer-events-none absolute right-[-4px] top-[64px] opacity-35"
          aria-hidden
        />

        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image
            src={ASSETS.logo}
            alt="Astro Aarambh"
            width={80}
            height={80}
            className="mb-0.5"
            priority
          />

          <h1
            className="font-cinzel text-[30px] font-bold leading-none tracking-[0.08em]"
            style={{ color: THEME.maroon }}
          >
            ASTRO AARAMBH
          </h1>

          <p
            className="mt-1.5 font-cinzel text-[14px] font-bold tracking-[0.06em]"
            style={{ color: THEME.gold }}
          >
            {reportTitle}
          </p>

          <p
            className="mt-1 max-w-[580px] text-[10px] font-semibold tracking-[0.12em]"
            style={{ color: THEME.bodyText, opacity: 0.88 }}
          >
            {reportSubtitle}
          </p>

          <div className="mt-1.5">
            <OrnamentDivider width={220} />
          </div>
        </header>

        <PageTitleBar pageNumber={pageNumber} title={sectionTitle} />

        <p
          className="relative max-w-[400px] mx-auto z-10 mt-2 shrink-0 px-4 text-center text-[10px] leading-relaxed"
          style={{ color: THEME.bodyText, opacity: 0.92, fontFamily: SERIF }}
        >
          {introText}
        </p>

        <section className="relative z-10 mt-2 grid min-h-0 flex-1 grid-cols-3 gap-2">
          {defectCards.map((card) => (
            <DefectCardBox key={card.id} card={card} />
          ))}
        </section>

        <section className="relative z-10 mt-2 shrink-0">
          <SummaryBox title={summaryTitle} text={summaryText} />
        </section>

        <footer className="relative z-10 mt-2 shrink-0 pb-1">
          <div className="flex justify-center">
            <OrnamentDivider width={200} />
          </div>
        </footer>
      </div>
    </BusinessNameReportPageShell>
  );
}
