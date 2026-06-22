import {
  ArrowUp,
  Circle,
  Crosshair,
  LineDotRightHorizontal,
  Minus,
  MoveDownRight,
  MoveUpRight,
  Scale,
  Shield,
  Star,
  User,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { CoverLotus } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type DirectionGraphic =
  | "upwardSlope"
  | "downwardSlope"
  | "straightAlignment"
  | "baselineStability"
  | "beginningPoint"
  | "endingPoint";

export type DirectionStatusIcon =
  | "star"
  | "circle"
  | "scale"
  | "shield"
  | "crosshair"
  | "arrowUp";

export type DirectionAnalysisCard = {
  title: string;
  statusLabel: string;
  statusIcon: DirectionStatusIcon;
  description: string;
  graphic: DirectionGraphic;
};

export type DirectionAlignmentAnalysisProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  cards?: DirectionAnalysisCard[];
  overallDirectionInsight?: string;
  expertGraphologyInsight?: string;
};

const COLORS = REPORT_COLORS;

const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const STATUS_ICONS: Record<DirectionStatusIcon, LucideIcon> = {
  star: Star,
  circle: Circle,
  scale: Scale,
  shield: Shield,
  crosshair: Crosshair,
  arrowUp: ArrowUp,
};

const defaultCards: DirectionAnalysisCard[] = [
  {
    title: "UPWARD SLOPE",
    statusLabel: "Prominent",
    statusIcon: "star",
    description:
      "An upward slope reflects ambition, optimism, confidence, and a forward-looking attitude. You tend to seek growth and new opportunities.",
    graphic: "upwardSlope",
  },
  {
    title: "DOWNWARD SLOPE",
    statusLabel: "Minimal",
    statusIcon: "circle",
    description:
      "A downward slope suggests moments of introspection, caution, or fatigue. It appears only occasionally in your signature.",
    graphic: "downwardSlope",
  },
  {
    title: "STRAIGHT ALIGNMENT",
    statusLabel: "Balanced",
    statusIcon: "scale",
    description:
      "Straight alignment indicates practical thinking, self-control, and the ability to make balanced decisions.",
    graphic: "straightAlignment",
  },
  {
    title: "BASELINE STABILITY",
    statusLabel: "Stable",
    statusIcon: "shield",
    description:
      "A stable baseline shows emotional balance, inner strength, and consistency in your actions and decisions.",
    graphic: "baselineStability",
  },
  {
    title: "BEGINNING POINT POSITION",
    statusLabel: "Slightly Below Baseline",
    statusIcon: "crosshair",
    description:
      "Starting slightly below the baseline suggests a thoughtful, humble start with careful planning before taking action.",
    graphic: "beginningPoint",
  },
  {
    title: "ENDING POINT POSITION",
    statusLabel: "Above Baseline",
    statusIcon: "arrowUp",
    description:
      "Finishing above the baseline reflects ambition, achievement-oriented mindset, and a desire to succeed.",
    graphic: "endingPoint",
  },
];

function DashedBaseline() {
  return (
    <div
      className="h-px w-[100%] border-t border-dashed"
      style={{ borderColor: COLORS.brown, opacity: 0.65 }}
    />
  );
}

function CardGraphic({ graphic }: { graphic: DirectionGraphic }) {
  const iconProps = {
    size: 60,
    width: 100,
    height: 50,
    strokeWidth: 1,
    style: { color: COLORS.brown },
  };

  switch (graphic) {
    case "upwardSlope":
      return (
        <div className="flex flex-col items-center">
          <MoveUpRight {...iconProps} aria-hidden className="rotate-21" />
          <DashedBaseline />
        </div>
      );
    case "downwardSlope":
      return (
        <div className="flex flex-col items-center">
          <MoveDownRight {...iconProps} aria-hidden className="rotate-335" />
          <DashedBaseline />
        </div>
      );
    case "straightAlignment":
      return (
        <div className="flex flex-col items-center">
          <Minus {...iconProps} className="w-40" aria-hidden />
          <DashedBaseline />
        </div>
      );
    case "baselineStability":
      return (
        <div className="flex flex-col items-center">
          <Minus {...iconProps} className="w-35" aria-hidden />
          <DashedBaseline />
        </div>
      );
    case "beginningPoint":
      return (
        <div className="flex flex-col items-center">
          <LineDotRightHorizontal
            {...iconProps}
            className="w-35 scale-x-[-1]"
            aria-hidden
          />
          <DashedBaseline />
        </div>
      );
    case "endingPoint":
      return (
        <div className="flex flex-col items-center">
          <LineDotRightHorizontal {...iconProps} className="w-35" aria-hidden />
          <DashedBaseline />
        </div>
      );
    default:
      return null;
  }
}

function AnalysisCard({
  index,
  card,
}: {
  index: number;
  card: DirectionAnalysisCard;
}) {
  const StatusIcon = STATUS_ICONS[card.statusIcon];

  return (
    <div
      className="relative flex min-h-[200px] flex-col items-center text-center
      bg-[url('/assets/signatureReport/cardBackground.png')] bg-cover bg-center bg-no-repeat h-[300px] w-[230px]"
    >
      <div className="flex flex-col items-center justify-center gap-2 h-full w-full p-4">

        <span
          className="absolute left-1/2 top-[5px] flex h-7 w-6 -translate-x-1/2 items-center justify-center text-[11px] font-bold"
          style={{ color: COLORS.cream }}
        >
          {index}
        </span>

        <div className="mb-1 flex h-[45px] items-end justify-center">
          <CardGraphic graphic={card.graphic} />
        </div>

        <p
          className="p-1 text-[15px] font-bold leading-tight tracking-[0.08em]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <div
          className="mb-1.5 flex items-center gap-1 rounded-full px-2 py-0.5"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          <span
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          >
            <StatusIcon size={7} strokeWidth={2} style={{ color: COLORS.cream }} />
          </span>
          <span
            className="text-[12px] font-semibold tracking-wide"
            style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
          >
            {card.statusLabel}
          </span>
        </div>

        <p
          className="text-[12px] leading-snug px-2"
          style={{ color: COLORS.black, opacity: 0.82, fontFamily: BODY_SANS }}
        >
          {card.description}
        </p>
      </div>

    </div>
  );
}

function OverallInsightDivider() {
  return (
    <div className="mt-1 flex w-full max-w-[320px] items-center justify-center gap-2">
      <span
        className="h-px flex-1"
        style={{ backgroundColor: COLORS.gold, opacity: 0.55 }}
      />
      <span className="text-[11px] leading-none" style={{ color: COLORS.gold }}>
        ✦
      </span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: COLORS.gold, opacity: 0.55 }}
      />
    </div>
  );
}

function OverallDirectionInsightSection({ insight }: { insight: string }) {
  return (
    <section className="relative z-10 mt-1 flex justify-center">
      <div
        className="flex w-full min-h-[100px] items-center bg-no-repeat px-6 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <CoverLotus size={80} className="shrink-0" />

        <div className="flex min-w-0 flex-1 flex-col items-center px-5">
          <p
            className="text-[14px] font-bold tracking-[0.12em]"
            style={{ color: COLORS.brown }}
          >
            OVERALL DIRECTION INSIGHT
          </p>
          <OverallInsightDivider />
          <p
            className="mt-1 max-w-[520px] text-center text-[11px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88, fontFamily: BODY_SANS }}
          >
            {insight}
          </p>
        </div>

        <CoverLotus size={80} className="shrink-0" />
      </div>
    </section>
  );
}

function HeaderDivider() {
  return (
    <div className="mt-1 flex w-full items-center justify-center gap-2">
      <span className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: COLORS.gold, opacity: 0.45 }} />
      <span className="text-[10px]" style={{ color: COLORS.gold }}>
        ✦
      </span>
      <span className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: COLORS.gold, opacity: 0.45 }} />
    </div>
  );
}

function ExpertGraphologyFooterSection({ insight }: { insight: string }) {
  return (
    <footer className="relative z-10 mt-1">
      <div
        className="flex min-h-[108px] w-full items-center gap-4 bg-no-repeat px-6 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
          style={{
            border: `1.5px solid ${COLORS.goldLight}`,
            backgroundColor: "transparent",
          }}
        >
          <User size={24} strokeWidth={1.25} style={{ color: COLORS.goldLight }} />
          <Star
            size={11}
            fill={COLORS.goldLight}
            stroke={COLORS.goldLight}
            className="absolute right-2 bottom-2"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="text-[12px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.goldLight }}
          >
            EXPERT GRAPHOLOGY INSIGHT
          </p>
          <p
            className="mt-1.5 text-[10px] leading-relaxed"
            style={{ color: COLORS.cream, fontFamily: BODY_SANS, opacity: 0.95 }}
          >
            {insight}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/starBg.png"
          alt=""
          width={118}
          height={72}
          className="shrink-0 object-contain mix-blend-screen"
          aria-hidden
        />
      </div>
    </footer>
  );
}

export default function DirectionAlignmentAnalysis({
  pageNumber = "04",
  title = "DIRECTION & ALIGNMENT ANALYSIS",
  subtitle = "Understanding the Direction of Your Energy & Focus",
  cards = defaultCards,
  overallDirectionInsight = "Your signature shows a positive upward trend with stable alignment, indicating confidence, clarity of purpose, and a progressive approach towards life and goals.",
  expertGraphologyInsight = "The direction and alignment of your signature reveal how you navigate life's path. Your signature reflects determination, balance, and a naturally positive outlook towards growth and success.",
}: DirectionAlignmentAnalysisProps) {
  return (
    <SignatureReportPageShell padding="20px 40px 28px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={110}
          height={110}
          className="mb-1"
          priority
        />
        <h1
          className="max-w-[620px] text-[27px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <p
          className="mt-0.5 max-w-[520px] text-[17px] font-nunito-sans"
          style={{ color: COLORS.black, opacity: 0.85 }}
        >
          {subtitle}
        </p>
        <HeaderDivider />
      </header>

      <section className="relative z-10 mt-1 grid grid-cols-3">
        {cards.map((card, index) => (
          <AnalysisCard key={`${card.title}-${index}`} index={index + 1} card={card} />
        ))}
      </section>

      <OverallDirectionInsightSection insight={overallDirectionInsight} />

      <ExpertGraphologyFooterSection insight={expertGraphologyInsight} />
    </SignatureReportPageShell>
  );
}
