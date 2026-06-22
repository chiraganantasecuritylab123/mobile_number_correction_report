import {
  BicepsFlexed,
  ChartNoAxesCombined,
  Feather,
  Flame,
  PenTool,
  Scale,
  Signature,
  Star,
  Target,
  Trophy,
  User,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type PressureStrokeIcon =
  | "lightPressure"
  | "mediumPressure"
  | "heavyPressure"
  | "strokeUniformity"
  | "boldness"
  | "energy";

export type PressureStrokeCard = {
  title: string;
  valueLabel: string;
  icon: PressureStrokeIcon;
  description: string;
};

export type PressureStrokeTrait = {
  label: string;
  icon: LucideIcon;
};

export type PressureStrokeAnalysisProps = {
  pageNumber?: string;
  subtitle?: string;
  title?: string;
  intro?: string;
  cards?: PressureStrokeCard[];
  pressureStrokeSummary?: string;
  expertGraphologyInsight?: string;
  traits?: PressureStrokeTrait[];
};

const COLORS = REPORT_COLORS;

const defaultCards: PressureStrokeCard[] = [
  {
    title: "LIGHT PRESSURE",
    valueLabel: "Moderate",
    icon: "lightPressure",
    description:
      "Indicates sensitivity, adaptability, and a thoughtful nature. You tend to avoid unnecessary confrontations and prefer harmony.",
  },
  {
    title: "MEDIUM PRESSURE",
    valueLabel: "Well Balanced",
    icon: "mediumPressure",
    description:
      "Shows emotional balance, practical thinking, and steady energy. You handle responsibilities well and maintain a calm approach to life.",
  },
  {
    title: "HEAVY PRESSURE",
    valueLabel: "Strong",
    icon: "heavyPressure",
    description:
      "Reflects high energy, determination, and strong willpower. You are persistent, focused, and not easily influenced by others.",
  },
  {
    title: "STROKE UNIFORMITY",
    valueLabel: "Good Uniformity",
    icon: "strokeUniformity",
    description:
      "Your strokes are mostly consistent, indicating stability, self-control, and the ability to stay focused on your goals.",
  },
  {
    title: "BOLDNESS OF SIGNATURE",
    valueLabel: "Bold",
    icon: "boldness",
    description:
      "A bold signature shows confidence, self-assurance, and a strong presence. You are comfortable expressing yourself and taking initiative.",
  },
  {
    title: "ENERGY LEVEL INDICATION",
    valueLabel: "High Energy",
    icon: "energy",
    description:
      "High energy levels reflect enthusiasm, drive, and a proactive nature. You have the stamina to pursue your ambitions with focus.",
  },
];

const defaultTraits: PressureStrokeTrait[] = [
  { label: "STRENGTH", icon: BicepsFlexed },
  { label: "FOCUS", icon: Target },
  { label: "BALANCE", icon: Scale },
  { label: "RESILIENCE", icon: ChartNoAxesCombined },
  { label: "ENERGY", icon: Flame },
  { label: "SUCCESS", icon: Trophy },
];

function CardTitleDivider() {
  return (
    <div className="my-1.5 flex w-[72px] items-center justify-center">
      <div className="flex flex-1 items-center">
        <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.7 }} />
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ border: `1px solid ${COLORS.gold}` }}
        />
      </div>
      <div className="mx-1 flex gap-[2px]">
        <span className="h-3 w-px" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
        <span className="h-3 w-px" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      </div>
      <div className="flex flex-1 items-center">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: COLORS.gold }}
        />
        <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.7 }} />
      </div>
    </div>
  );
}

function PenStrokeLine({ thickness }: { thickness: number }) {
  return (
    <svg viewBox="0 0 48 8" className="h-2 w-full" aria-hidden>
      <line
        x1="4"
        y1="4"
        x2="44"
        y2="4"
        stroke={COLORS.brown}
        strokeWidth={thickness}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardIconGraphic({ icon }: { icon: PressureStrokeIcon }) {
  const iconStyle = { color: COLORS.brown };

  const graphics: Record<PressureStrokeIcon, ReactNode> = {
    lightPressure: (
      <div className="flex flex-col items-center" aria-hidden>
        <Feather size={50} strokeWidth={1.25} style={iconStyle} />
        <PenStrokeLine thickness={1} />
      </div>
    ),
    mediumPressure: (
      <div className="flex flex-col items-center" aria-hidden>
        <PenTool size={50} strokeWidth={1.25} style={iconStyle} />
        <PenStrokeLine thickness={2} />
      </div>
    ),
    heavyPressure: (
      <div className="flex flex-col items-center" aria-hidden>
        <PenTool size={50} strokeWidth={1.5} style={iconStyle} />
        <PenStrokeLine thickness={3.5} />
      </div>
    ),
    strokeUniformity: (
      <Waves size={50} strokeWidth={1.25} style={iconStyle} aria-hidden />
    ),
    boldness: (
      <Signature size={50} strokeWidth={1.25} style={iconStyle} aria-hidden />
    ),
    energy: (
        <Zap size={50} strokeWidth={1.25} style={iconStyle} fill={COLORS.gold} />
    ),
  };

  if (icon === "energy") {
    return graphics.energy;
  }

  return (
    <div
      // className="flex h-[55px] w-[55px] items-center justify-center rounded-full"
      // style={{ border: `1.5px dashed ${COLORS.gold}` }}
    >
      {graphics[icon]}
    </div>
  );
}

function AnalysisCard({
  index,
  card,
}: {
  index: number;
  card: PressureStrokeCard;
}) {
  return (
    <div className="relative flex h-[270px] w-[200px] min-h-[270px] flex-col items-center bg-[url('/assets/signatureReport/cardBackground.png')] bg-cover bg-center bg-no-repeat text-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 font-nunito-sans">
        <span
          className="absolute left-1/2 top-[5px] flex h-7 w-6 -translate-x-1/2 items-center justify-center text-[11px] font-bold"
          style={{ color: COLORS.cream }}
        >
          {String(index).padStart(2, "0")}
        </span>

        <CardIconGraphic icon={card.icon} />

        <p
          className="px-0.5 text-[13px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <div
          className="min-w-[120px] rounded-full px-1 py-0.5"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          <span
            className=" flex items-center justify-center text-[11px] font-semibold tracking-wide"
            style={{ color: COLORS.brown }}
          >
            {card.valueLabel}
          </span>
        </div>

        <p
          className="px-2 text-[11px] leading-snug"
          style={{ color: COLORS.black, opacity: 0.82 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function PressureStrokeSummarySection({ summary }: { summary: string }) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans">
      <div
        className="flex min-h-[90px] w-full items-center bg-no-repeat px-6 py-4"
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
            PRESSURE & STROKE SUMMARY
          </p>
          {/* <OverallInsightDivider /> */}
          <p
            className="mt-1 max-w-[520px] text-center text-[12px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88 }}
          >
            {summary}
          </p>
        </div>

        <CoverLotus size={80} className="shrink-0" />
      </div>
    </section>
  );
}

function IntroHeader({ text }: { text: string }) {
  return (
    <div className="mt-1 flex w-full max-w-[620px] items-center justify-center gap-3 px-2 font-nunito-sans">
      <Pattern3 size={36} />
      <p
        className="text-center text-[15px] leading-snug"
        style={{ color: COLORS.brown, opacity: 0.9 }}
      >
        {text}
      </p>
      <Pattern3 size={36} className="rotate-180" />
    </div>
  );
}

function ExpertGraphologyFooterSection({ insight }: { insight: string }) {
  return (
    <footer className="relative z-10 font-nunito-sans">
      <div
        className="flex min-h-[108px] w-full items-center gap-2 bg-no-repeat px-6 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full"
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
            className="text-[14px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.goldLight }}
          >
            EXPERT GRAPHOLOGY INSIGHT
          </p>
          <p
            className="mt-1 text-[12px] leading-relaxed"
            style={{ color: COLORS.cream, opacity: 0.95 }}
          >
            {insight}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/footer-image.png"
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

function TraitsFooter({ traits }: { traits: PressureStrokeTrait[] }) {
  return (
    <section className="relative z-10 mt-2 flex items-stretch justify-center px-2">
      {traits.map((trait, index) => {
        const Icon = trait.icon;
        return (
          <div key={trait.label} className="flex flex-1 items-stretch">
            {index > 0 ? (
              <span
                className="my-2 w-px shrink-0"
                style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
              />
            ) : null}
            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-1 py-2">
              <Icon size={35} fill= {COLORS.gold} strokeWidth={1.25} style={{ color: COLORS.brown }} />
              <span
                className="text-[9px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.brown }}
              >
                {trait.label}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default function PressureStrokeAnalysis({
  pageNumber = "06",
  title = "PRESSURE & STROKE ANALYSIS",
  subtitle = "Understanding The Strength Behind Your Signature",
  intro = "The pressure and strokes in your signature reveal your energy, determination, and inner drive.",
  cards = defaultCards,
  pressureStrokeSummary = "Your signature reflects strong inner energy, balanced emotions, and consistent determination. You have the drive and resilience to achieve your goals with persistence and confidence.",
  expertGraphologyInsight = "The pressure and strokes of your signature indicate a powerful inner drive, emotional stability, and the ability to handle challenges effectively. You possess the strength and focus needed to create lasting success.",
  traits = defaultTraits,
}: PressureStrokeAnalysisProps) {
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
          className="max-w-[620px] text-[30px] font-bold leading-tight tracking-[0.06em]"
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
        <IntroHeader text={intro} />
      </header>

      <section className="relative z-10 mt-1 grid grid-cols-3">
        {cards.map((card, index) => (
          <AnalysisCard key={`${card.title}-${index}`} index={index + 1} card={card} />
        ))}
      </section>

      <PressureStrokeSummarySection summary={pressureStrokeSummary} />

      <ExpertGraphologyFooterSection insight={expertGraphologyInsight} />

      <TraitsFooter traits={traits} />
    </SignatureReportPageShell>
  );
}
