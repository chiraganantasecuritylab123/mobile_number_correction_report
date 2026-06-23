import {
  Check,
  Heart,
  Home,
  Link2,
  MessagesSquare,
  Shield,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import { Pattern3, SubtitleHeader } from "../CommunComponents";

export type RelationshipLevelLabel = "HIGH" | "VERY HIGH";

export type RelationshipIndicatorCard = {
  title: string;
  percent: number;
  levelLabel: RelationshipLevelLabel;
  description: string;
  icon: LucideIcon;
  overviewLabel: string;
};

export type RelationshipTraitPill = {
  label: string;
  icon: LucideIcon;
};

export type RelationshipIndicatorsProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  relationshipIndex?: number;
  maxScore?: number;
  starRating?: number;
  indexLabel?: string;
  introText?: string;
  cards?: RelationshipIndicatorCard[];
  relationshipInterpretation?: string;
  traitPills?: RelationshipTraitPill[];
};

const COLORS = REPORT_COLORS;

const COMPACT_CARD_BG = "/assets/signatureReport/cardBG-2.png";
const LARGE_CARD_BG = "/assets/signatureReport/cardBG-1.png";

const defaultCards: RelationshipIndicatorCard[] = [
  {
    title: "TRUST LEVEL",
    percent: 88,
    levelLabel: "HIGH",
    description:
      "You tend to trust people easily but remain careful until you feel fully secure.",
    icon: ShieldCheck,
    overviewLabel: "Trust",
  },
  {
    title: "EMOTIONAL OPENNESS",
    percent: 82,
    levelLabel: "HIGH",
    description:
      "You express your emotions honestly and are open about your feelings with those you trust.",
    icon: Heart,
    overviewLabel: "Emotional Openness",
  },
  {
    title: "COMMITMENT TENDENCY",
    percent: 90,
    levelLabel: "VERY HIGH",
    description:
      "You are loyal, dependable and value deep, long-term commitments.",
    icon: Link2,
    overviewLabel: "Commitment",
  },
  {
    title: "FAMILY ORIENTATION",
    percent: 87,
    levelLabel: "HIGH",
    description:
      "Family plays an important role in your life. You are caring, supportive and value strong family bonds.",
    icon: Home,
    overviewLabel: "Family",
  },
  {
    title: "COMMUNICATION STYLE",
    percent: 85,
    levelLabel: "HIGH",
    description:
      "You communicate clearly, listen well and prefer honest and meaningful conversations.",
    icon: MessagesSquare,
    overviewLabel: "Communication",
  },
];

const defaultTraitPills: RelationshipTraitPill[] = [
  { label: "Trust", icon: ShieldCheck },
  { label: "Emotional Openness", icon: Heart },
  { label: "Commitment", icon: Link2 },
  { label: "Family", icon: Home },
  { label: "Communication", icon: MessagesSquare },
];

function HeaderDivider() {
  return (
    <div className="mt-1 flex w-full max-w-[420px] items-center justify-center gap-2">
      <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      <span className="text-[8px] leading-none" style={{ color: COLORS.gold }}>
        ◆
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

function PartialStarRating({
  rating,
  max = 5,
  size = 12,
}: {
  rating: number;
  max?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={`relationship-star-${index}`}
          size={size}
          fill={index < rating ? COLORS.gold : "transparent"}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function SemiCircularGauge({
  percent,
  gaugeId,
  compact = false,
}: {
  percent: number;
  gaugeId: string;
  compact?: boolean;
}) {
  const radius = compact ? 30 : 34;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div
      className={`relative flex items-end justify-center ${compact ? "h-[48px] w-[80px]" : "h-[54px] w-[92px]"
        }`}
    >
      <svg
        viewBox={compact ? "0 0 80 48" : "0 0 92 54"}
        className="h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={gaugeId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.gold} />
            <stop offset="100%" stopColor={COLORS.goldLight} />
          </linearGradient>
        </defs>
        <path
          d={compact ? "M 8 40 A 30 30 0 0 1 72 40" : "M 10 46 A 34 34 0 0 1 82 46"}
          fill="none"
          stroke="#F0E0C8"
          strokeWidth={compact ? 6 : 7}
          strokeLinecap="round"
        />
        <path
          d={compact ? "M 8 40 A 30 30 0 0 1 72 40" : "M 10 46 A 34 34 0 0 1 82 46"}
          fill="none"
          stroke={`url(#${gaugeId})`}
          strokeWidth={compact ? 6 : 7}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span
        className={`absolute font-bold leading-none bottom-[5px] text-[20px]`}
        style={{ color: COLORS.brown }}
      >
        {percent}%
      </span>
    </div>
  );
}

function RelationshipCardIcon({
  icon: Icon,
  title,
  compact = false,
}: {
  icon: LucideIcon;
  title: string;
  compact?: boolean;
}) {
  const iconSize = compact ? 40 : 40;
  const iconStyle = { color: COLORS.gold, flexShrink: 0 };

  if (title.includes("TRUST")) {
    return (
      <div
        className={`relative flex items-center justify-center ${compact ? "h-10 w-10" : "h-12 w-12"}`}
      >
        <Shield size={iconSize} strokeWidth={1.15} style={iconStyle} aria-hidden />
        <Check
          size={compact ? 20 : 20}
          strokeWidth={2.5}
          className="absolute"
          style={{ color: COLORS.gold }}
          aria-hidden
        />
      </div>
    );
  }

  return <Icon size={iconSize} strokeWidth={1.15} style={iconStyle} aria-hidden />;
}

function RelationshipIndicatorCardView({
  index,
  card,
  compact = false,
}: {
  index: number;
  card: RelationshipIndicatorCard;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex shrink-0 flex-col items-center justify-between bg-cover bg-center bg-no-repeat text-center ${compact ? "h-[245px] w-[240px]" : "h-[215px] w-[360px]"
        }`}
      style={{
        backgroundImage: `url('${compact ? COMPACT_CARD_BG : LARGE_CARD_BG}')`,
      }}
    >
      <span
        className={`absolute left-1/2 z-10 flex -translate-x-1/2 -translate-y-[42%] items-center justify-center rounded-full font-bold ${compact ? "h-8 w-8 text-[11px] top-[15px]" : "h-9 w-9 text-[11px] top-4"
          }`}
        style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
      >
        {String(index).padStart(2, "0")}
      </span>

      <div
        className={`flex h-full w-full flex-col items-center justify-between px-1 py-4`}
      >
        <div className={`flex items-center justify-center mt-5  ${compact ? "flex-col" : "flex-row"}`}>

          <RelationshipCardIcon icon={card.icon} title={card.title} compact={compact} />

          <p
            className={`px-1 font-bold tracking-[0.04em] text-[13px]`}
            style={{ color: COLORS.brown }}
          >
            {card.title}
          </p>
        </div>

        <SemiCircularGauge
          percent={card.percent}
          gaugeId={`relationship-gauge-${index}`}
          compact={compact}
        />

        <div
          className={`min-w-[90px] h-5 flex items-center justify-center rounded-full ${compact ? "px-0 py-0.5" : "px-0 py-0.5"}`}
          style={{
            border: `1px solid ${COLORS.brown}`,
          }}
        >
          <span
            className={`font-bold tracking-[0.06em] text-[11px]`}
            style={{ color: COLORS.brown }}
          >
            {card.levelLabel}
          </span>
        </div>

        <p
          className={`px-5 font-nunito-sans leading-snug text-[12px]`}
          style={{ color: COLORS.black }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function RelationshipIndexSection({
  score,
  maxScore,
  starRating,
  indexLabel,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  indexLabel: string;
}) {
  return (
    <section className="relative z-10 mt-2 flex justify-center font-nunito-sans">
      <div
        className="relative h-[210px] w-full flex items-center justify-center px-8 py-4 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/signatureReport/page-8-circle.png')",
        }}
      >
        <div className="absolute top-3 flex items-center gap-0.5" aria-hidden>
          <Users size={30} strokeWidth={1.5} style={{ color: COLORS.gold }} />
          <Heart size={25} fill={COLORS.gold} stroke={COLORS.gold} />
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <p
            className="text-[12px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.brown }}
          >
            RELATIONSHIP INDEX
          </p>
          <p
            className="mt-0.5 text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            <span className="text-[40px]">{score}</span> / <span className="text-[16px]">{maxScore}</span>
          </p>
          <PartialStarRating rating={starRating} size={12} />
          <p
            className="mt-1 text-[11px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {indexLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function RelationshipCardsSection({ cards }: { cards: RelationshipIndicatorCard[] }) {
  const topRow = cards.slice(0, 3);
  const bottomRow = cards.slice(3, 5);

  return (
    <section className="relative z-10 mt-2 flex flex-col items-center gap-1.5">
      <div className="flex justify-between gap-1.5">
        {topRow.map((card, index) => (
          <RelationshipIndicatorCardView
            key={card.title}
            index={index + 1}
            card={card}
            compact
          />
        ))}
      </div>
      <div className="flex justify-between gap-1.5">
        {bottomRow.map((card, index) => (
          <RelationshipIndicatorCardView key={card.title} index={index + 4} card={card} />
        ))}
      </div>
    </section>
  );
}

function RelationshipBalanceOverviewSection({
  cards,
  overviewStarRating = 4,
}: {
  cards: RelationshipIndicatorCard[];
  overviewStarRating?: number;
}) {
  return (
    <section className="relative z-10 font-nunito-sans">
      <div
        className="flex flex-col w-full items-center bg-no-repeat py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >

        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-10" style={{ backgroundColor: COLORS.gold }} />
          <p
            className="text-[13px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            RELATIONSHIP BALANCE OVERVIEW
          </p>
          <span className="h-px w-10" style={{ backgroundColor: COLORS.gold }} />
        </div>

        <div className="flex items-stretch justify-center px-1 w-full">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="flex flex-1 items-stretch">
                {index > 0 ? (
                  <span
                    className="my-2 w-px shrink-0"
                    style={{ backgroundColor: COLORS.gold }}
                  />
                ) : null}
                <div className="flex flex-1 flex-col items-center justify-center gap-1 px-1 py-1 ">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                  >
                    <Icon size={45} strokeWidth={1.25} style={{ color: COLORS.gold }} />
                  </div>
                  <p className="text-[11px] font-semibold leading-tight" style={{ color: COLORS.brown }}>
                    {card.overviewLabel}
                  </p>
                  <PartialStarRating rating={overviewStarRating} size={11} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelationshipInterpretationSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 font-nunito-sans">
      <div
        className="flex min-h-[92px] w-full items-center bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >

        <Image src="/assets/signatureReport/heart.png" alt="Heart" width={70} height={64} aria-hidden />

        <div className="flex min-w-0 flex-1 flex-col items-center px-4">
          <p
            className="text-[13px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            RELATIONSHIP INTERPRETATION
          </p>
          <p
            className="mt-1 max-w-[520px] text-center text-[12px] leading-relaxed font-nunito-sans"
            style={{ color: COLORS.black }}
          >
            {text}
          </p>
        </div>

        <Image src="/assets/signatureReport/heart-heand.png" alt="Heart Hand" width={70} height={64} aria-hidden />

      </div>
    </section>
  );
}

function RelationshipTraitPills({ pills }: { pills: RelationshipTraitPill[] }) {
  return (
    <section className="relative z-10 mt-2 px-1 font-nunito-sans">
      <div
        className="flex w-full items-stretch overflow-hidden rounded-full"
        style={{
          border: `1px solid ${COLORS.gold}`,
        }}
      >
        {pills.map((pill, index) => {
          const Icon = pill.icon;
          const isLast = index === pills.length - 1;

          return (
            <div
              key={pill.label}
              className="flex flex-1 items-center justify-center gap-1 px-1.5 py-2"
              style={
                isLast
                  ? undefined
                  : { borderRight: `1px dashed ${COLORS.gold}` }
              }
            >
              <Icon
                size={25}
                strokeWidth={1.25}
                className="shrink-0"
                style={{ color: COLORS.gold }}
              />
              <span
                className="text-center text-[11px] font-semibold leading-tight"
                style={{ color: COLORS.brown }}
              >
                {pill.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function RelationshipIndicators({
  pageNumber = "12",
  title = "RELATIONSHIP INDICATORS",
  subtitle = "What Your Signature Reveals About Your Relationships",
  relationshipIndex = 86,
  maxScore = 100,
  starRating = 4,
  indexLabel = "Strong Relationship Potential",
  introText = "Your signature reveals the way you connect, care, and build meaningful relationships with others.",
  cards = defaultCards,
  relationshipInterpretation = "Your signature shows a warm and loyal heart with strong values in relationships. You are trustworthy, emotionally expressive and deeply committed to the people you care about. You value stability, honesty and meaningful connections.",
  traitPills = defaultTraitPills,
}: RelationshipIndicatorsProps) {
  return (
    <SignatureReportPageShell padding="18px 36px 22px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center mt-5">
        <h1
          className="max-w-[620px] text-[28px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <SubtitleHeader text={subtitle} />
      </header>

      <RelationshipIndexSection
        score={relationshipIndex}
        maxScore={maxScore}
        starRating={starRating}
        indexLabel={indexLabel}
      />

      <p
        className="max-w-[500px] mx-auto flex flex-row items-center justify-center relative z-10 mt-1 text-center text-[12px] leading-3 font-nunito-sans"
        style={{ color: COLORS.black }}
      >
        <Pattern3 size={32} />
        {introText}
        <Pattern3 size={32} className="rotate-180" />
      </p>

      <RelationshipCardsSection cards={cards} />

      <RelationshipBalanceOverviewSection cards={cards} />

      <RelationshipInterpretationSection text={relationshipInterpretation} />

      <RelationshipTraitPills pills={traitPills} />
    </SignatureReportPageShell>
  );
}
