import {
  Building2,
  ChartColumnIncreasing,
  Coins,
  Flower2,
  Gem,
  IndianRupee,
  Key,
  Magnet,
  Shield,
  Star,
  TrendingUp,
  Vault,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type FinancialStatusLabel = "STRONG" | "GOOD" | "EXCELLENT";

export type FinancialIndicatorCard = {
  title: string;
  percent: number;
  statusLabel: FinancialStatusLabel;
  description: string;
  icon: LucideIcon;
  overviewLabel: string;
};

export type FinancialTraitPill = {
  label: string;
  icon: LucideIcon;
};

export type FinancialIndicatorsProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  financialScore?: number;
  maxScore?: number;
  starRating?: number;
  scoreLabel?: string;
  introText?: string;
  cards?: FinancialIndicatorCard[];
  financialInterpretation?: string;
  traitPills?: FinancialTraitPill[];
};

const COLORS = REPORT_COLORS;
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const CARD_GOLD = "#C5A059";
const CARD_GOLD_LIGHT = "#E8C872";
const CARD_STATUS_BG = "#FAE6C1";

const defaultCards: FinancialIndicatorCard[] = [
  {
    title: "WEALTH ATTRACTION PATTERNS",
    percent: 88,
    statusLabel: "STRONG",
    description:
      "Indicates good ability to attract financial opportunities and wealth naturally.",
    icon: Magnet,
    overviewLabel: "Wealth Attraction",
  },
  {
    title: "MONEY RETENTION PATTERNS",
    percent: 82,
    statusLabel: "GOOD",
    description:
      "Shows a balanced ability to save, retain and manage money effectively.",
    icon: Vault,
    overviewLabel: "Money Retention",
  },
  {
    title: "FINANCIAL STABILITY INDICATORS",
    percent: 85,
    statusLabel: "STRONG",
    description:
      "Reflects financial security, consistency, and stability in money matters.",
    icon: Shield,
    overviewLabel: "Financial Stability",
  },
  {
    title: "GROWTH MINDSET INDICATORS",
    percent: 90,
    statusLabel: "EXCELLENT",
    description:
      "Shows a progressive mindset with a strong focus on improvement and abundance.",
    icon: ChartColumnIncreasing,
    overviewLabel: "Growth Mindset",
  },
  {
    title: "BUSINESS EXPANSION INDICATORS",
    percent: 86,
    statusLabel: "STRONG",
    description:
      "Indicates potential for business growth, scaling and long-term expansion.",
    icon: Building2,
    overviewLabel: "Business Expansion",
  },
];

const defaultTraitPills: FinancialTraitPill[] = [
  { label: "Wealth", icon: Gem },
  { label: "Stability", icon: Shield },
  { label: "Growth", icon: TrendingUp },
  { label: "Abundance", icon: Flower2 },
  { label: "Opportunity", icon: Key },
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

function StarRating({ count, size = 12 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`financial-star-${index}`}
          size={size}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function percentToStarRating(percent: number): number {
  return Math.min(5, Math.max(1, Math.round(percent / 20)));
}

function PartialStarRating({ rating, max = 5, size = 10 }: { rating: number; max?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={`overview-star-${index}`}
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

function FinancialCardIcon({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  const iconStyle = { color: CARD_GOLD, flexShrink: 0 };

  if (title.includes("STABILITY")) {
    return (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <Shield size={38} strokeWidth={1.15} style={iconStyle} aria-hidden />
        <IndianRupee
          size={14}
          strokeWidth={1.5}
          className="absolute"
          style={{ color: COLORS.brown }}
          aria-hidden
        />
      </div>
    );
  }

  if (title.includes("WEALTH ATTRACTION")) {
    return (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <Magnet size={38} strokeWidth={1.15} style={iconStyle} aria-hidden />
        <IndianRupee
          size={13}
          strokeWidth={1.5}
          className="absolute bottom-0 right-0"
          style={{ color: COLORS.brown }}
          aria-hidden
        />
      </div>
    );
  }

  return <Icon size={38} strokeWidth={1.15} style={iconStyle} aria-hidden />;
}

function FinancialIndicatorCardView({
  index,
  card,
}: {
  index: number;
  card: FinancialIndicatorCard;
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
        <FinancialCardIcon icon={card.icon} title={card.title} />

        <p
          className="px-1 text-[9px] font-bold leading-[1.25] tracking-[0.04em]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <SemiCircularGauge percent={card.percent} gaugeId={`financial-gauge-${index}`} />

        <div
          className="rounded-full px-3 py-0.5"
          style={{
            backgroundColor: CARD_STATUS_BG,
            border: `1px solid ${COLORS.brown}`,
          }}
        >
          <span className="text-[8px] font-bold tracking-[0.06em]" style={{ color: COLORS.brown }}>
            {card.statusLabel}
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

function FinancialPotentialScoreSection({
  score,
  maxScore,
  starRating,
  scoreLabel,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  scoreLabel: string;
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
        <IndianRupee
          size={16}
          strokeWidth={1.5}
          className="absolute top-3"
          style={{ color: COLORS.gold }}
          aria-hidden
        />
        <div className="flex flex-col items-center text-center">
          <p
            className="text-[10px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.gold }}
          >
            FINANCIAL POTENTIAL SCORE
          </p>
          <p
            className="mt-0.5 text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            {score} / {maxScore}
          </p>
          <StarRating count={starRating} />
          <p
            className="mt-1 text-[11px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {scoreLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function FinancialOverviewSection({ cards }: { cards: FinancialIndicatorCard[] }) {
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
          FINANCIAL OVERVIEW
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
              <PartialStarRating rating={percentToStarRating(card.percent)} size={9} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinancialInterpretationSection({ text }: { text: string }) {
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
        <Coins size={36} strokeWidth={1.1} className="shrink-0" style={{ color: COLORS.gold }} />

        <div className="flex min-w-0 flex-1 flex-col items-center px-4">
          <p
            className="text-[12px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            FINANCIAL INTERPRETATION
          </p>
          <p
            className="mt-1 max-w-[520px] text-center text-[10px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88, fontFamily: BODY_SANS }}
          >
            {text}
          </p>
        </div>

        <Coins size={36} strokeWidth={1.1} className="shrink-0 scale-x-[-1]" style={{ color: COLORS.gold }} />
      </div>
    </section>
  );
}

function FinancialTraitPills({ pills }: { pills: FinancialTraitPill[] }) {
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

export default function FinancialIndicators({
  pageNumber = "11",
  title = "FINANCIAL INDICATORS",
  subtitle = "Traditional Signature Analysis",
  financialScore = 87,
  maxScore = 100,
  starRating = 5,
  scoreLabel = "Strong Financial Potential",
  introText = "Your signature reveals patterns related to how you attract, manage, and grow financial resources.",
  cards = defaultCards,
  financialInterpretation = "Your signature shows strong financial potential with a natural ability to attract opportunities and grow wealth. You have a stable money mindset, good retention patterns, and the drive to build long-term financial success through smart decisions and consistent efforts.",
  traitPills = defaultTraitPills,
}: FinancialIndicatorsProps) {
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

      <FinancialPotentialScoreSection
        score={financialScore}
        maxScore={maxScore}
        starRating={starRating}
        scoreLabel={scoreLabel}
      />

      <p
        className="relative z-10 mt-1.5 text-center text-[11px] font-nunito-sans"
        style={{ color: COLORS.black, opacity: 0.9, fontFamily: BODY_SANS }}
      >
        {introText}
      </p>

      <section className="relative z-10 mt-3 grid grid-cols-5 gap-1.5">
        {cards.map((card, index) => (
          <FinancialIndicatorCardView key={card.title} index={index + 1} card={card} />
        ))}
      </section>

      <FinancialOverviewSection cards={cards} />

      <FinancialInterpretationSection text={financialInterpretation} />

      <FinancialTraitPills pills={traitPills} />
    </SignatureReportPageShell>
  );
}
