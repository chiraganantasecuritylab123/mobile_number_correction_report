import {
  Circle,
  Compass,
  Expand,
  Flower2,
  Hexagon,
  MoveHorizontal,
  MoveVertical,
  Scale,
  Shield,
  SlidersHorizontal,
  Star,
  User,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { CoverLotus } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import Image from "next/image";

export type GeometryCardType =
  | "widthHeightRatio"
  | "horizontalDominance"
  | "verticalDominance"
  | "balanceSymmetry"
  | "openFormations"
  | "closedFormations";

export type GeometryAnalysisCard = {
  title: string;
  valueLabel: string;
  description?: string;
  type: GeometryCardType;
  widthPercent?: number;
  heightPercent?: number;
  filledBlocks?: number;
  totalBlocks?: number;
  balancePercent?: number;
};

export type GeometryAttribute = {
  label: string;
  icon: LucideIcon;
};

export type SignatureGeometryAnalysisProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  geometryScore?: number;
  maxScore?: number;
  starRating?: number;
  structureLabel?: string;
  summaryText?: string;
  cards?: GeometryAnalysisCard[];
  geometricInterpretation?: string;
  expertObservation?: string;
  attributes?: GeometryAttribute[];
};

const COLORS = REPORT_COLORS;

const defaultCards: GeometryAnalysisCard[] = [
  {
    title: "WIDTH-TO-HEIGHT RATIO",
    valueLabel: "Wide Signature",
    description: "Represents broad thinking and openness.",
    type: "widthHeightRatio",
    widthPercent: 75,
    heightPercent: 25,
  },
  {
    title: "HORIZONTAL DOMINANCE",
    valueLabel: "High",
    description: "Associated with practicality and outward expression.",
    type: "horizontalDominance",
    filledBlocks: 8,
    totalBlocks: 10,
  },
  {
    title: "VERTICAL DOMINANCE",
    valueLabel: "Moderate",
    description: "Reflects ambition and personal drive.",
    type: "verticalDominance",
    filledBlocks: 5,
    totalBlocks: 10,
  },
  {
    title: "BALANCE & SYMMETRY",
    valueLabel: "Well Balanced",
    type: "balanceSymmetry",
    balancePercent: 91,
  },
  {
    title: "OPEN FORMATIONS",
    valueLabel: "Open Personality Indicators",
    description: "Shows adaptability, flexibility, and receptiveness.",
    type: "openFormations",
  },
  {
    title: "CLOSED FORMATIONS",
    valueLabel: "Moderately Closed",
    description: "Indicates privacy, discretion, and self-protection.",
    type: "closedFormations",
  },
];

const defaultAttributes: GeometryAttribute[] = [
  { label: "Balance", icon: Scale },
  { label: "Symmetry", icon: Flower2 },
  { label: "Harmony", icon: Compass },
  { label: "Confidence", icon: Shield },
  { label: "Control", icon: SlidersHorizontal },
  { label: "Stability", icon: Circle },
];

function AttributeIcon({ attribute }: { attribute: GeometryAttribute }) {
  if (attribute.label === "Stability") {
    return <CoverLotus size={16} />;
  }

  const Icon = attribute.icon;
  return <Icon size={12} strokeWidth={1.25} style={{ color: COLORS.gold }} />;
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`geometry-star-${index}`}
          size={12}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function GeometryScoreSection({
  score,
  maxScore,
  starRating,
  structureLabel,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  structureLabel: string;
}) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans">
      <div
        className="flex items-center justify-center px-8 py-5"
        style={{
          backgroundImage: "url('/assets/signatureReport/background-image.png')",
          backgroundSize: "cover",
          height: "200px",
          width: '500px',
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <p
            className="text-[11px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.gold }}
          >
            GEOMETRY SCORE
          </p>
          <p
            className="mt-0.5 text-[28px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            {score} / {maxScore}
          </p>
          <StarRating count={starRating} />
          <p
            className="mt-1 text-[12px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {structureLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function OrnamentalDivider() {
  return (
    <div className="flex w-full items-center gap-1">
      <div className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      <span className="text-[6px] leading-none" style={{ color: COLORS.gold }}>
        ◆
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

function SimpleDivider() {
  return (
    <div
      className="my-1 h-px w-full"
      style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
    />
  );
}

function CardTypeIcon({ type }: { type: GeometryCardType }) {
  const iconStyle = { color: COLORS.brown, flexShrink: 0 };
  const size = 22;

  const icons: Record<GeometryCardType, ReactNode> = {
    widthHeightRatio: <Expand size={size} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    horizontalDominance: (
      <MoveHorizontal size={size} strokeWidth={1.25} style={iconStyle} aria-hidden />
    ),
    verticalDominance: (
      <MoveVertical size={size} strokeWidth={1.25} style={iconStyle} aria-hidden />
    ),
    balanceSymmetry: <Scale size={size} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    openFormations: <Circle size={size} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    closedFormations: <Hexagon size={size} strokeWidth={1.25} style={iconStyle} aria-hidden />,
  };

  return icons[type];
}

function LabeledProgressBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="w-full">
      <div className="mb-0.5 flex items-center justify-between text-[8px] font-bold">
        <span style={{ color: COLORS.brown }}>{label}</span>
        <span style={{ color: COLORS.brown }}>{percent}%</span>
      </div>
      <div
        className="h-2.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "#f2e4d4" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, backgroundColor: COLORS.brown }}
        />
      </div>
    </div>
  );
}

function BlockIndicator({ filled, total = 10 }: { filled: number; total?: number }) {
  return (
    <div className="flex flex-wrap justify-center gap-0.5">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={`block-${index}`}
          className="h-2.5 w-2.5 rounded-[2px]"
          style={{
            backgroundColor: index < filled ? COLORS.brown : "transparent",
            border: `1.5px solid ${COLORS.brown}`,
          }}
        />
      ))}
    </div>
  );
}

function BalanceDonut({ percent }: { percent: number }) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex h-[58px] w-[58px] items-center justify-center">
      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90" aria-hidden>
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="#f2e4d4"
          strokeWidth="5"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke={COLORS.brown}
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[10px] font-bold leading-none" style={{ color: COLORS.brown }}>
          {percent}%
        </span>
        <span className="text-[7px] font-semibold" style={{ color: COLORS.brown }}>
          Balanced
        </span>
      </div>
    </div>
  );
}

function CardVisual({ card }: { card: GeometryAnalysisCard }) {
  const visuals: Record<GeometryCardType, ReactNode> = {
    widthHeightRatio: (
      <div className="flex w-full flex-col gap-1.5 px-1">
        <LabeledProgressBar label="Width" percent={card.widthPercent ?? 75} />
        <LabeledProgressBar label="Height" percent={card.heightPercent ?? 25} />
      </div>
    ),
    horizontalDominance: (
      <BlockIndicator filled={card.filledBlocks ?? 8} total={card.totalBlocks ?? 10} />
    ),
    verticalDominance: (
      <BlockIndicator filled={card.filledBlocks ?? 5} total={card.totalBlocks ?? 10} />
    ),
    balanceSymmetry: <BalanceDonut percent={card.balancePercent ?? 91} />,
    openFormations: null,
    closedFormations: null,
  };

  return visuals[card.type];
}

function AnalysisCard({
  index,
  card,
}: {
  index: number;
  card: GeometryAnalysisCard;
}) {
  const isSimpleCard =
    card.type === "openFormations" || card.type === "closedFormations";

  return (
    <div className="relative flex h-[190px] w-[240px] flex-col bg-[url('/assets/signatureReport/card-bg.png')] bg-cover bg-center bg-no-repeat">
      <span
        className="absolute left-1/2 top-[8px] z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-[35%] items-center justify-center rounded-full text-[11px] font-bold"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex h-full flex-col justify-center px-8 pb-2.5 pt-5 font-nunito-sans">
        <div className="flex items-center justify-center gap-1.5 px-4 py-1">
          <CardTypeIcon type={card.type} />
          <p
            className="text-left text-[12px] font-bold leading-tight tracking-[0.04em]"
            style={{ color: COLORS.brown }}
          >
            {card.title}
          </p>
        </div>

        <OrnamentalDivider />

        <p
          className="text-center text-[12px] font-bold leading-tight"
          style={{ color: COLORS.brown }}
        >
          {card.valueLabel}
        </p>

        {isSimpleCard ? (
          <>
            <SimpleDivider />
            {card.description ? (
              <p
                className="mt-auto px-1 text-center text-[12px] leading-snug"
                style={{ color: COLORS.black, opacity: 0.82 }}
              >
                {card.description}
              </p>
            ) : null}
          </>
        ) : (
          <>
            <div className="mt-1 flex flex-1 flex-col items-center justify-center">
              <CardVisual card={card} />
            </div>
            {card.description ? (
              <p
                className="mt-1 px-1 text-center text-[12px] leading-snug"
                style={{ color: COLORS.black, opacity: 0.82 }}
              >
                {card.description}
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

function GeometricInterpretationSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-1 flex justify-center font-nunito-sans">
      <div
        className="flex min-h-[88px] w-full items-center bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Flower2 size={34} strokeWidth={1.1} className="shrink-0" style={{ color: COLORS.gold }} />

        <div className="flex min-w-0 flex-1 flex-col items-center px-4">
          <p
            className="text-[13px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            GEOMETRIC INTERPRETATION
          </p>
          <p
            className="mt-1 max-w-[520px] text-center text-[11px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88 }}
          >
            {text}
          </p>
        </div>

        <Flower2 size={34} strokeWidth={1.1} className="shrink-0" style={{ color: COLORS.gold }} />
      </div>
    </section>
  );
}

function AttributePills({ attributes }: { attributes: GeometryAttribute[] }) {
  return (
    <section className="relative z-10 mt-2 flex flex-wrap items-center justify-center gap-2 px-1 font-nunito-sans">
      {attributes.map((attribute) => (
        <div
          key={attribute.label}
          className="flex items-center gap-1 rounded-full px-2.5 py-1"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          <AttributeIcon attribute={attribute} />
          <span className="text-[9px] font-semibold" style={{ color: COLORS.brown }}>
            {attribute.label}
          </span>
        </div>
      ))}
    </section>
  );
}

function ExpertObservationFooter({ observation }: { observation: string }) {
  return (
    <footer className="relative z-10 mt-2 font-nunito-sans">
      <div
        className="flex min-h-[108px] w-full items-center gap-3 bg-no-repeat px-5 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
          style={{ border: `1.5px solid ${COLORS.goldLight}` }}
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
            GRAPHOLOGY EXPERT OBSERVATION
          </p>
          <p
            className="mt-1 text-[10px] leading-relaxed"
            style={{ color: COLORS.cream, opacity: 0.95 }}
          >
            {observation}
          </p>
        </div>

        <Compass
          size={56}
          strokeWidth={1}
          className="shrink-0"
          style={{ color: COLORS.goldLight }}
          aria-hidden
        />
      </div>
    </footer>
  );
}

export default function SignatureGeometryAnalysis({
  pageNumber = "07",
  title = "SIGNATURE GEOMETRY ANALYSIS",
  subtitle = "Understanding The Structure Design of your Signature",
  geometryScore = 88,
  maxScore = 100,
  starRating = 5,
  structureLabel = "Balanced Structure",
  summaryText = "Your signature displays strong structural balance, proportion, and visual harmony.",
  cards = defaultCards,
  geometricInterpretation = "The signature demonstrates a healthy balance between expansion and control. Its proportions suggest confidence, practical thinking, and emotional stability.",
  expertObservation = "The geometric construction of the signature indicates a personality that values structure, consistency, and purposeful growth. The overall balance suggests sound judgment and steady decision-making.",
  attributes = defaultAttributes,
}: SignatureGeometryAnalysisProps) {
  return (
    <SignatureReportPageShell padding="20px 40px 24px" pageNumber={pageNumber}>

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
      </header>

      <div className="font-nunito-sans">
        <GeometryScoreSection
          score={geometryScore}
          maxScore={maxScore}
          starRating={starRating}
          structureLabel={structureLabel}
        />

        <p
          className="relative z-10 mt-2 text-center text-[15px]"
          style={{ color: COLORS.black, opacity: 0.9 }}
        >
          {summaryText}
        </p>

        <section className="relative z-10 mt-2 grid grid-cols-3 place-items-center">
          {cards.map((card, index) => (
            <AnalysisCard key={`${card.title}-${index}`} index={index + 1} card={card} />
          ))}
        </section>

        <GeometricInterpretationSection text={geometricInterpretation} />

        <AttributePills attributes={attributes} />

        <ExpertObservationFooter observation={expertObservation} />
      </div>
    </SignatureReportPageShell>
  );
}
