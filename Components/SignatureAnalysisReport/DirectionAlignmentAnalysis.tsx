import {
  ArrowUp,
  Circle,
  Crosshair,
  Scale,
  Shield,
  Star,
  User,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
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

function DirectionGraphicIcon({ graphic }: { graphic: DirectionGraphic }) {
  const stroke = COLORS.brown;

  const graphics: Record<DirectionGraphic, ReactNode> = {
    upwardSlope: (
      <svg viewBox="0 0 80 36" className="h-9 w-full" aria-hidden>
        <line x1="8" y1="28" x2="72" y2="8" stroke={stroke} strokeWidth="2" />
        <polygon points="72,8 64,10 68,16" fill={stroke} />
      </svg>
    ),
    downwardSlope: (
      <svg viewBox="0 0 80 36" className="h-9 w-full" aria-hidden>
        <line x1="8" y1="8" x2="72" y2="28" stroke={stroke} strokeWidth="2" />
        <polygon points="72,28 64,26 68,20" fill={stroke} />
      </svg>
    ),
    straightAlignment: (
      <svg viewBox="0 0 80 36" className="h-9 w-full" aria-hidden>
        <line x1="8" y1="18" x2="72" y2="18" stroke={stroke} strokeWidth="2" />
      </svg>
    ),
    baselineStability: (
      <svg viewBox="0 0 80 36" className="h-9 w-full" aria-hidden>
        <line x1="8" y1="14" x2="72" y2="14" stroke={stroke} strokeWidth="2" />
        <line
          x1="8"
          y1="24"
          x2="72"
          y2="24"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.65"
        />
      </svg>
    ),
    beginningPoint: (
      <svg viewBox="0 0 80 36" className="h-9 w-full" aria-hidden>
        <line x1="8" y1="16" x2="72" y2="16" stroke={stroke} strokeWidth="2" />
        <circle cx="10" cy="22" r="4" fill={stroke} />
      </svg>
    ),
    endingPoint: (
      <svg viewBox="0 0 80 36" className="h-9 w-full" aria-hidden>
        <line x1="8" y1="20" x2="72" y2="20" stroke={stroke} strokeWidth="2" />
        <circle cx="70" cy="12" r="5" fill={stroke} />
      </svg>
    ),
  };

  return graphics[graphic];
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
      bg-[url('/assets/signatureReport/cardBackground.png')] bg-cover bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: "url('/assets/signatureReport/cardBackground.png')",
      //   height: "300px",
      //   width: "220px",
      //   backgroundSize: "100% 100%",
      //   backgroundPosition: "center",
      // }}
    >
      <span
        className="absolute left-1/2 top-[5px] flex h-7 w-6 -translate-x-1/2 items-center justify-center text-[11px] font-bold"
        style={{ color: COLORS.cream }}
      >
        {index}
      </span>

      <div className="mb-1 w-full px-1">
        <DirectionGraphicIcon graphic={card.graphic} />
      </div>

      <p
        className="text-[16px] p-1 font-bold leading-tight tracking-[0.08em]"
        style={{ color: COLORS.brown }}
      >
        {card.title}
      </p>

      <div
        className="my-1.5 h-px w-8"
        style={{ backgroundColor: COLORS.gold, opacity: 0.55 }}
      />

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
        className="text-[14px] leading-snug px-2"
        style={{ color: COLORS.black, opacity: 0.82, fontFamily: BODY_SANS }}
      >
        {card.description}
      </p>
    </div>
  );
}

function HeaderDivider() {
  return (
    <div className="mt-2 flex w-full items-center justify-center gap-2">
      <span className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: COLORS.gold, opacity: 0.45 }} />
      <span className="text-[10px]" style={{ color: COLORS.gold }}>
        ✦
      </span>
      <span className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: COLORS.gold, opacity: 0.45 }} />
    </div>
  );
}

function ConstellationGraphic() {
  return (
    <svg viewBox="0 0 60 40" className="h-10 w-14 shrink-0 opacity-70" aria-hidden>
      <circle cx="8" cy="10" r="1.5" fill={COLORS.goldLight} />
      <circle cx="22" cy="6" r="1.5" fill={COLORS.goldLight} />
      <circle cx="38" cy="14" r="1.5" fill={COLORS.goldLight} />
      <circle cx="52" cy="8" r="1.5" fill={COLORS.goldLight} />
      <circle cx="16" cy="28" r="1.5" fill={COLORS.goldLight} />
      <circle cx="44" cy="32" r="1.5" fill={COLORS.goldLight} />
      <line x1="8" y1="10" x2="22" y2="6" stroke={COLORS.goldLight} strokeWidth="0.6" />
      <line x1="22" y1="6" x2="38" y2="14" stroke={COLORS.goldLight} strokeWidth="0.6" />
      <line x1="38" y1="14" x2="52" y2="8" stroke={COLORS.goldLight} strokeWidth="0.6" />
      <line x1="8" y1="10" x2="16" y2="28" stroke={COLORS.goldLight} strokeWidth="0.6" />
      <line x1="38" y1="14" x2="44" y2="32" stroke={COLORS.goldLight} strokeWidth="0.6" />
    </svg>
  );
}

export default function DirectionAlignmentAnalysis({
  pageNumber = "03",
  title = "DIRECTION & ALIGNMENT ANALYSIS",
  subtitle = "Understanding the Direction of Your Energy & Focus",
  cards = defaultCards,
  overallDirectionInsight = "Your signature shows a positive upward trend with stable alignment, indicating confidence, clarity of purpose, and a progressive approach towards life and goals.",
  expertGraphologyInsight = "The direction and alignment of your signature reveal how you navigate life's path. Your signature reflects determination, balance, and a naturally positive outlook towards growth and success.",
}: DirectionAlignmentAnalysisProps) {
  return (
    <SignatureReportPageShell padding="20px 40px 28px">
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
          className="max-w-[620px] text-[22px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <p
          className="mt-0.5 max-w-[520px] text-[11px] italic"
          style={{ color: COLORS.brown, opacity: 0.85, fontFamily: BODY_SANS }}
        >
          {subtitle}
        </p>
        <HeaderDivider />
      </header>

      <section className="relative z-10 mt-3 grid grid-cols-3 gap-2.5">
        {cards.map((card, index) => (
          <AnalysisCard key={`${card.title}-${index}`} index={index + 1} card={card} />
        ))}
      </section>

      <section className="relative z-10 mt-3">
        <div
          className="rounded-md px-4 py-2.5"
          style={{
            border: `1px solid ${COLORS.brown}`,
            backgroundColor: COLORS.cream,
          }}
        >
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={28} />
            <p
              className="text-[11px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.brown }}
            >
              OVERALL DIRECTION INSIGHT
            </p>
            <CoverLotus size={28} />
          </div>
          <p
            className="mx-auto max-w-[640px] text-center text-[8.5px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.85, fontFamily: BODY_SANS }}
          >
            {overallDirectionInsight}
          </p>
        </div>
      </section>

      <footer className="relative z-10 mt-3">
        <div
          className="flex items-center gap-3 rounded-md px-4 py-3"
          style={{ backgroundColor: COLORS.brown }}
        >
          <div
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.gold,
              border: `2px solid ${COLORS.goldLight}`,
            }}
          >
            <User size={20} strokeWidth={1.5} style={{ color: COLORS.cream }} />
            <Star
              size={10}
              fill={COLORS.cream}
              stroke={COLORS.cream}
              className="absolute right-1.5 bottom-1.5"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p
              className="text-[10px] font-bold tracking-[0.12em]"
              style={{ color: COLORS.goldLight }}
            >
              EXPERT GRAPHOLOGY INSIGHT
            </p>
            <p
              className="mt-1 text-[8px] leading-relaxed"
              style={{ color: COLORS.cream, fontFamily: BODY_SANS, opacity: 0.95 }}
            >
              {expertGraphologyInsight}
            </p>
          </div>

          <ConstellationGraphic />
        </div>

        <div className="mt-2 flex justify-center gap-1">
          {[0, 1, 2].map((sparkle) => (
            <span
              key={sparkle}
              className="text-[10px]"
              style={{ color: COLORS.gold, opacity: 0.85 }}
            >
              ✦
            </span>
          ))}
        </div>
      </footer>
    </SignatureReportPageShell>
  );
}
