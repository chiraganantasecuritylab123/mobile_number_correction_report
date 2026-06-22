import {
  Check,
  Heart,
  HeartHandshake,
  HandHeart,
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
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const CARD_GOLD = "#C5A059";
const CARD_GOLD_LIGHT = "#E8C872";
const CARD_STATUS_BG = "#FAE6C1";

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

function SemiCircularGauge({ percent, gaugeId }: { percent: number; gaugeId: string }) {
  const radius = 34;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex h-[54px] w-[92px] items-end justify-center">
      <svg viewBox="0 0 92 54" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={gaugeId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={CARD_GOLD} />
            <stop offset="100%" stopColor={CARD_GOLD_LIGHT} />
          </linearGradient>
        </defs>
        <path
          d="M 10 46 A 34 34 0 0 1 82 46"
          fill="none"
          stroke="#F0E0C8"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M 10 46 A 34 34 0 0 1 82 46"
          fill="none"
          stroke={`url(#${gaugeId})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span
        className="absolute bottom-[2px] text-[13px] font-bold leading-none"
        style={{ color: COLORS.brown }}
      >
        {percent}%
      </span>
    </div>
  );
}

function RelationshipCardIcon({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  const iconStyle = { color: CARD_GOLD, flexShrink: 0 };

  if (title.includes("TRUST")) {
    return (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <Shield size={38} strokeWidth={1.15} style={iconStyle} aria-hidden />
        <Check
          size={14}
          strokeWidth={2.5}
          className="absolute"
          style={{ color: COLORS.brown }}
          aria-hidden
        />
      </div>
    );
  }

  return <Icon size={38} strokeWidth={1.15} style={iconStyle} aria-hidden />;
}

function RelationshipIndicatorCardView({
  index,
  card,
}: {
  index: number;
  card: RelationshipIndicatorCard;
}) {
  return (
    <div className="relative flex h-[292px] w-full flex-col items-center bg-[url('/assets/signatureReport/cardBackground.png')] bg-cover bg-center bg-no-repeat text-center">
      <span
        className="absolute left-1/2 top-0 z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-[42%] items-center justify-center rounded-full text-[10px] font-bold"
        style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex h-full w-full flex-col items-center justify-between px-2.5 pb-3 pt-6">
        <RelationshipCardIcon icon={card.icon} title={card.title} />

        <p
          className="px-1 text-[9px] font-bold leading-[1.25] tracking-[0.04em]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <SemiCircularGauge percent={card.percent} gaugeId={`relationship-gauge-${index}`} />

        <div
          className="rounded-full px-3 py-0.5"
          style={{
            backgroundColor: CARD_STATUS_BG,
            border: `1px solid ${COLORS.brown}`,
          }}
        >
          <span className="text-[8px] font-bold tracking-[0.06em]" style={{ color: COLORS.brown }}>
            {card.levelLabel}
          </span>
        </div>

        <p
          className="px-1 text-[9px] leading-snug"
          style={{ color: COLORS.brown, opacity: 0.88 }}
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
    <section className="relative z-10 flex justify-center font-nunito-sans">
      <div
        className="relative flex items-center justify-center px-8 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/background-image.png')",
          backgroundSize: "cover",
          height: "168px",
          width: "460px",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-3 flex items-center gap-0.5" aria-hidden>
          <Users size={14} strokeWidth={1.5} style={{ color: COLORS.gold }} />
          <Heart size={10} fill={COLORS.gold} stroke={COLORS.gold} />
        </div>
        <div className="flex flex-col items-center text-center">
          <p
            className="text-[10px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.gold }}
          >
            RELATIONSHIP INDEX
          </p>
          <p
            className="mt-0.5 text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            {score} / {maxScore}
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
    <section className="relative z-10 mt-3 flex flex-col gap-1.5">
      <div className="grid grid-cols-3 gap-1.5">
        {topRow.map((card, index) => (
          <RelationshipIndicatorCardView key={card.title} index={index + 1} card={card} />
        ))}
      </div>
      <div className="mx-auto grid w-[calc(66.666%+0.375rem)] grid-cols-2 gap-1.5">
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
    <section
      className="relative z-10 mt-2 px-3 py-3 font-nunito-sans"
      style={{
        border: `1.5px solid ${COLORS.gold}`,
        borderRadius: 10,
        backgroundColor: "rgba(253, 245, 230, 0.55)",
      }}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="h-px w-10" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
        <p
          className="text-[11px] font-bold tracking-[0.1em]"
          style={{ color: COLORS.brown }}
        >
          RELATIONSHIP BALANCE OVERVIEW
        </p>
        <span className="h-px w-10" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      </div>

      <div className="mt-2 grid grid-cols-5 gap-1">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="flex flex-col items-center gap-1 px-1 text-center">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ border: `1px solid ${COLORS.gold}` }}
              >
                <Icon size={16} strokeWidth={1.25} style={{ color: COLORS.brown }} />
              </div>
              <p className="text-[7px] font-semibold leading-tight" style={{ color: COLORS.brown }}>
                {card.overviewLabel}
              </p>
              <PartialStarRating rating={overviewStarRating} size={9} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function RelationshipInterpretationSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-2 font-nunito-sans">
      <div
        className="flex min-h-[92px] w-full items-center bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <HandHeart size={36} strokeWidth={1.1} className="shrink-0" style={{ color: COLORS.gold }} />

        <div className="flex min-w-0 flex-1 flex-col items-center px-4">
          <p
            className="text-[12px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            RELATIONSHIP INTERPRETATION
          </p>
          <p
            className="mt-1 max-w-[520px] text-center text-[10px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88, fontFamily: BODY_SANS }}
          >
            {text}
          </p>
        </div>

        <HeartHandshake
          size={36}
          strokeWidth={1.1}
          className="shrink-0"
          style={{ color: COLORS.gold }}
        />
      </div>
    </section>
  );
}

function RelationshipTraitPills({ pills }: { pills: RelationshipTraitPill[] }) {
  return (
    <section className="relative z-10 mt-2 flex flex-wrap items-center justify-center gap-1.5 px-1 font-nunito-sans">
      {pills.map((pill) => {
        const Icon = pill.icon;
        return (
          <div
            key={pill.label}
            className="flex items-center gap-1 rounded-full px-2.5 py-0.5"
            style={{
              backgroundColor: COLORS.cream,
              border: `1px solid ${COLORS.gold}`,
            }}
          >
            <Icon size={10} strokeWidth={1.25} style={{ color: COLORS.gold }} />
            <span className="text-[8px] font-semibold" style={{ color: COLORS.brown }}>
              {pill.label}
            </span>
          </div>
        );
      })}
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
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={96}
          height={96}
          className="mb-0.5"
          priority
        />
        <h1
          className="max-w-[620px] text-[28px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <p
          className="mt-0.5 max-w-[520px] text-[14px] italic font-nunito-sans"
          style={{ color: COLORS.black, opacity: 0.85 }}
        >
          {subtitle}
        </p>
        <HeaderDivider />
      </header>

      <RelationshipIndexSection
        score={relationshipIndex}
        maxScore={maxScore}
        starRating={starRating}
        indexLabel={indexLabel}
      />

      <p
        className="relative z-10 mt-1.5 text-center text-[11px] font-nunito-sans"
        style={{ color: COLORS.black, opacity: 0.9, fontFamily: BODY_SANS }}
      >
        {introText}
      </p>

      <RelationshipCardsSection cards={cards} />

      <RelationshipBalanceOverviewSection cards={cards} />

      <RelationshipInterpretationSection text={relationshipInterpretation} />

      <RelationshipTraitPills pills={traitPills} />
    </SignatureReportPageShell>
  );
}
