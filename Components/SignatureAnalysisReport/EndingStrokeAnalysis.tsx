import {
  Lightbulb,
  Mountain,
  Scale,
  Shield,
  Star,
  Target,
  User,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Pattern3 } from "../CommunComponents";
import {
  CurvedArrow,
  DashIcon,
  DiagonalArrow,
  DownwardArrow,
  OvalIcon,
  RightArrow,
  UpwardArrow,
} from "./ArrowIcons";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type EndingStrokeIcon =
  | "upwardEnding"
  | "downwardEnding"
  | "straightEnding"
  | "longEnding"
  | "shortEnding"
  | "openEnding"
  | "closedEnding";

export type EndingStrokeCard = {
  title: string;
  valueLabel: string;
  icon: EndingStrokeIcon;
  description: string;
};

export type EndingStrokeTrait = {
  label: string;
  icon: LucideIcon;
};

export type EndingStrokeAnalysisProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  endingStrokeScore?: number;
  maxScore?: number;
  starRating?: number;
  closureLabel?: string;
  intro?: string;
  firstRowCards?: EndingStrokeCard[];
  secondRowCards?: EndingStrokeCard[];
  endingStrokeSummary?: string;
  expertObservation?: string;
  traits?: EndingStrokeTrait[];
};

const COLORS = REPORT_COLORS;

const defaultFirstRowCards: EndingStrokeCard[] = [
  {
    title: "UPWARD ENDING",
    valueLabel: "Upward Ending",
    icon: "upwardEnding",
    description:
      "Shows optimism, ambition, growth mindset, and a positive outlook toward the future.",
  },
  {
    title: "DOWNWARD ENDING",
    valueLabel: "Downward Ending",
    icon: "downwardEnding",
    description:
      "Indicates caution, realism, and a tendency to be thoughtful and detail-oriented.",
  },
  {
    title: "STRAIGHT ENDING",
    valueLabel: "Straight Ending",
    icon: "straightEnding",
    description:
      "Reflects balance, stability, and a practical approach to life and responsibilities.",
  },
  {
    title: "LONG ENDING STROKE",
    valueLabel: "Long Ending Stroke",
    icon: "longEnding",
    description:
      "Represents persistence, determination, and the ability to go beyond expectations.",
  },
];

const defaultSecondRowCards: EndingStrokeCard[] = [
  {
    title: "SHORT ENDING STROKE",
    valueLabel: "Short Ending Stroke",
    icon: "shortEnding",
    description:
      "Indicates efficiency, decisiveness, and a preference for completing tasks in a timely manner.",
  },
  {
    title: "OPEN ENDING",
    valueLabel: "Open Ending",
    icon: "openEnding",
    description:
      "Shows openness, acceptance of new ideas, and comfort in expressing thoughts freely.",
  },
  {
    title: "CLOSED ENDING",
    valueLabel: "Closed Ending",
    icon: "closedEnding",
    description:
      "Indicates discretion, self-control, and a protective approach toward personal matters.",
  },
];

const defaultTraits: EndingStrokeTrait[] = [
  { label: "Focus", icon: Target },
  { label: "Determination", icon: Mountain },
  { label: "Control", icon: Shield },
  { label: "Balance", icon: Scale },
  { label: "Adaptability", icon: Lightbulb },
  { label: "Responsibility", icon: User },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`ending-star-${index}`}
          size={11}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function EndingStrokeScoreSection({
  score,
  maxScore,
  starRating,
  closureLabel,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  closureLabel: string;
}) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans mt-5">
      <div
        className="relative flex h-[180px] w-[420px] items-center justify-center bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/signatureReport/page-8-circle.png')" }}
      >
        <div className="flex flex-col items-center text-center gap-2">
          <p
            className="text-[11px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            ENDING STROKE SCORE
          </p>
          <p
            className="text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            <span className="text-[30px] font-bold leading-none">{score}</span> / <span className="text-[16px] font-bold leading-none">{maxScore}</span>
          </p>
          <StarRating count={starRating} />
          <p
            className="text-[11px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {closureLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function StrokeGraphic({
  icon,
  compact = false,
}: {
  icon: EndingStrokeIcon;
  compact?: boolean;
}) {
  const iconClass = compact ? "h-9 w-15" : "h-11 w-17";

  const graphics = {
    upwardEnding: <UpwardArrow className={iconClass} />,
    downwardEnding: <DownwardArrow className={iconClass} />,
    straightEnding: <RightArrow className={iconClass} />,
    longEnding: <DiagonalArrow className={iconClass} />,
    shortEnding: <DashIcon className={compact ? "h-3 w-10" : "h-4 w-12"} />,
    openEnding: <CurvedArrow className={iconClass} />,
    closedEnding: <OvalIcon className={compact ? "h-5 w-12" : "h-6 w-14"} />,
  };

  return (
    <div style={{ color: COLORS.brown }} aria-hidden>
      {graphics[icon]}
    </div>
  );
}

function AnalysisCard({
  index,
  card,
  backgroundImage,
  compact = false,
}: {
  index: number;
  card: EndingStrokeCard;
  backgroundImage: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center bg-cover bg-center bg-no-repeat text-center font-nunito-sans ${compact ? "h-[230px] w-[172px]" : "h-[190px] w-[240px]"
        }`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-5">
        <span
          className="absolute left-1/2 top-[0px] flex h-8 w-8 -translate-x-1/2 items-center justify-center text-[11px] font-bold rounded-full"
          style={{ color: COLORS.cream, backgroundColor: COLORS.brown }}
        >
          {String(index).padStart(2, "0")}
        </span>

        <p
          className="mt-6 px-0.5 font-bold leading-tight tracking-[0.05em] text-[11px]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <div className="mb-0.5 flex h-[40px] items-center justify-center">
          <StrokeGraphic icon={card.icon} compact={compact} />
        </div>

        <div
          className="min-w-[100px] flex items-center justify-center rounded-full px-2 py-0.5"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          <span className="text-[12px] font-semibold" style={{ color: COLORS.brown }}>
            {card.valueLabel}
          </span>
        </div>

        <p
          className="px-1.5 leading-snug text-[12px]"
          style={{ color: COLORS.black, opacity: 0.82 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function IntroHeader({ text }: { text: string }) {
  return (
    <div className="mt-1 flex w-full items-center justify-center gap-3 px-2 font-nunito-sans">
      <Pattern3 size={60} />
      <p
        className="max-w-[620px] text-center text-[13px] italic leading-snug"
        style={{ color: COLORS.brown, opacity: 0.9 }}
      >
        {text}
      </p>
      <Pattern3 size={60} className="rotate-180" />
    </div>
  );
}

function EndingStrokeSummarySection({ summary }: { summary: string }) {
  return (
    <section className="relative z-10 mt-1 flex justify-center font-nunito-sans">
      <div
        className="flex min-h-[88px] w-full items-center bg-no-repeat px-4 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/assets/signatureReport/page-8-image.png"
          alt=""
          width={110}
          height={110}
          className="shrink-0 object-contain"
          aria-hidden
        />

        <div className="flex min-w-0 flex-1 flex-col items-center px-3">
          <div className="flex items-center gap-2">
            <Pattern3 size={28} />
            <p
              className="text-[13px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.brown }}
            >
              ENDING STROKE SUMMARY
            </p>
            <Pattern3 size={28} className="rotate-180" />
          </div>
          <p
            className="mt-1 max-w-[520px] text-center text-[12px]"
            style={{ color: COLORS.black, opacity: 0.88 }}
          >
            {summary}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/page-8-image.png"
          alt=""
          width={110}
          height={110}
          className="shrink-0 object-contain"
          aria-hidden
        />
      </div>
    </section>
  );
}

function TraitsFooter({ traits }: { traits: EndingStrokeTrait[] }) {
  return (
    <section className="relative z-10 mt-1 flex items-stretch justify-center px-1 font-nunito-sans">
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
            <div className="relative flex flex-1 flex-col items-center justify-center gap-1 px-1 py-2">
              <Icon size={32} strokeWidth={1.25} style={{ color: COLORS.gold }} />
              {trait.label === "Responsibility" ? (
                <Star
                  size={9}
                  fill={COLORS.gold}
                  stroke={COLORS.gold}
                  className="absolute top-6 right-[calc(50%-18px)]"
                  aria-hidden
                />
              ) : null}
              <span
                className="text-[12px] font-semibold tracking-wide"
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

function ExpertObservationFooter({ observation }: { observation: string }) {
  return (
    <footer className="relative z-10 mt-1 font-nunito-sans">
      <div
        className="flex min-h-[100px] w-full items-center gap-3 bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-3 px-4">

          <div
            className="relative flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full"
            style={{ border: `1.5px solid ${COLORS.goldLight}` }}
          >
            <User size={35} strokeWidth={1.25} style={{ color: COLORS.goldLight }} />
            <Star
              size={20}
              fill={COLORS.goldLight}
              stroke={COLORS.goldLight}
              className="absolute right-2 bottom-2"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p
              className="text-[13px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.goldLight }}
            >
              GRAPHOLOGY EXPERT OBSERVATION
            </p>
            <p
              className="mt-1 text-[12px]"
              style={{ color: COLORS.cream, opacity: 0.95 }}
            >
              {observation}
            </p>
          </div>

          <Image
            src="/assets/signatureReport/footer-image.png"
            alt=""
            width={130}
            height={64}
            className="shrink-0 object-contain mix-blend-screen"
            aria-hidden
          />
        </div>

      </div>
    </footer>
  );
}

export default function EndingStrokeAnalysis({
  pageNumber = "08",
  title = "ENDING STROKE ANALYSIS",
  subtitle = "What Your Signature's Ending Reveals About You",
  endingStrokeScore = 89,
  maxScore = 100,
  starRating = 5,
  closureLabel = "Positive Closure",
  intro = "The ending stroke of your signature reveals how you conclude, release, and present yourself to the world.",
  firstRowCards = defaultFirstRowCards,
  secondRowCards = defaultSecondRowCards,
  endingStrokeSummary = "Your ending strokes suggest a personality that combines optimism with practicality. You have the determination to pursue goals while maintaining balance, control, and a clear sense of responsibility.",
  expertObservation = "The ending stroke is the signature's final impression. It reflects how you complete cycles, make closures, and leave an impact in your personal and professional life.",
  traits = defaultTraits,
}: EndingStrokeAnalysisProps) {
  return (
    <SignatureReportPageShell padding="16px 36px 22px" pageNumber={pageNumber}>
      <div className="font-nunito-sans">
        <header className="flex flex-col items-center text-center mt-10">
          <h1
            className="max-w-[620px] text-[26px] font-bold leading-tight tracking-[0.06em]"
            style={{ color: COLORS.brown }}
          >
            {title}
          </h1>
          <p
            className="mt-0.5 max-w-[520px] text-[14px]"
            style={{ color: COLORS.black, opacity: 0.85 }}
          >
            {subtitle}
          </p>
        </header>

        <EndingStrokeScoreSection
          score={endingStrokeScore}
          maxScore={maxScore}
          starRating={starRating}
          closureLabel={closureLabel}
        />

        <IntroHeader text={intro} />

        <section className="relative z-10 mt-1 grid grid-cols-4 place-items-center gap-x-0">
          {firstRowCards.map((card, index) => (
            <AnalysisCard
              key={`${card.title}-${index}`}
              index={index + 1}
              card={card}
              backgroundImage="/assets/signatureReport/cardBackground.png"
              compact
            />
          ))}
        </section>

        <section className="relative z-10 mt-1 flex justify-center gap-0">
          {secondRowCards.map((card, index) => (
            <AnalysisCard
              key={`${card.title}-${index}`}
              index={index + 5}
              card={card}
              backgroundImage="/assets/signatureReport/card-bg.png"
            />
          ))}
        </section>

        <EndingStrokeSummarySection summary={endingStrokeSummary} />

        <TraitsFooter traits={traits} />

        <ExpertObservationFooter observation={expertObservation} />
      </div>
    </SignatureReportPageShell>
  );
}
