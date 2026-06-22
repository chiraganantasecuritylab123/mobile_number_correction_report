import {
  Brain,
  Compass,
  Crosshair,
  Flower2,
  Heart,
  Shield,
  SlidersHorizontal,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { CoverLotus } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export type PersonalityCardType =
  | "confidenceLevel"
  | "selfEsteem"
  | "emotionalExpression"
  | "ambitionGoals"
  | "socialPersonality"
  | "decisionMaking";

export type PersonalityAnalysisCard = {
  title: string;
  valueLabel: string;
  description?: string;
  type: PersonalityCardType;
  icon: ReactNode;
};

export type PersonalityStrength = {
  label: string;
  icon: typeof Shield;
};

export type SignaturePersonalityAnalysisProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  profileScore?: number;
  maxScore?: number;
  starRating?: number;
  personalityLabel?: string;
  summaryQuote?: string;
  cards?: PersonalityAnalysisCard[];
  coreSummaryText?: string;
  strengths?: PersonalityStrength[];
  expertObservation?: string;
};

// ─── Shared colors ────────────────────────────────────────────────────────────

const COLORS = REPORT_COLORS;

// ─── Default data ─────────────────────────────────────────────────────────────

const defaultCards: PersonalityAnalysisCard[] = [
  {
    title: "CONFIDENCE LEVEL",
    valueLabel: "High Confidence",
    description: "Shows self-belief, leadership qualities, and the ability to take initiative when required.",
    type: "confidenceLevel",
    icon: <Shield size={28} strokeWidth={1.25} style={{ color: COLORS.brown }} />,
  },
  {
    title: "SELF-ESTEEM",
    valueLabel: "Healthy Self-Worth",
    description: "You value your abilities and generally trust your decisions.",
    type: "selfEsteem",
    icon: <Star size={28} strokeWidth={1.25} style={{ color: COLORS.gold }} />,
  },
  {
    title: "EMOTIONAL EXPRESSION",
    valueLabel: "Balanced Expression",
    description: "Able to express emotions while maintaining practical thinking.",
    type: "emotionalExpression",
    icon: <Heart size={28} strokeWidth={1.25} style={{ color: COLORS.brown }} />,
  },
  {
    title: "AMBITION & GOALS",
    valueLabel: "Highly Ambitious",
    description: "Strong focus on progress, success, and achieving long-term objectives.",
    type: "ambitionGoals",
    icon: <Target size={28} strokeWidth={1.25} style={{ color: COLORS.brown }} />,
  },
  {
    title: "SOCIAL PERSONALITY",
    valueLabel: "Selective but Genuine",
    description: "Prefers meaningful relationships over large social circles.",
    type: "socialPersonality",
    icon: <Users size={28} strokeWidth={1.25} style={{ color: COLORS.gold }} />,
  },
  {
    title: "DECISION MAKING",
    valueLabel: "Logical & Calculated",
    description: "Tends to evaluate situations carefully before making important decisions.",
    type: "decisionMaking",
    icon: <Brain size={28} strokeWidth={1.25} style={{ color: COLORS.brown }} />,
  },
];

const defaultStrengths: PersonalityStrength[] = [
  { label: "Leadership", icon: Shield },
  { label: "Discipline", icon: SlidersHorizontal },
  { label: "Confidence", icon: User },
  { label: "Focus", icon: Crosshair },
  { label: "Determination", icon: TrendingUp },
];

// ─── Sub-components (same patterns as GeometryAnalysis) ───────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`personality-star-${index}`}
          size={12}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ProfileScoreSection({
  score,
  maxScore,
  starRating,
  personalityLabel,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  personalityLabel: string;
}) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans">
      <div
        className="flex items-center justify-center px-8 py-5"
        style={{
          backgroundImage: "url('/assets/signaturePages/backgroundImageCircle.png')",
          backgroundSize: "cover",
          height: "195px",
          width: "400px",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <p
            className="text-[11px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.gold }}
          >
            PERSONALITY PROFILE
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
            {personalityLabel}
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

function PersonalityCard({
  index,
  card,
}: {
  index: number;
  card: PersonalityAnalysisCard;
}) {
  return (
    <div className="relative flex h-[179px] w-[229px] flex-col bg-[url('/assets/signatureReport/card-bg.png')] bg-cover bg-center bg-no-repeat">
      <span className="absolute left-1/2 top-[6px] z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-[35%] items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{ backgroundColor: COLORS.brown }}
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex h-full flex-col justify-center px-8 pb-2.5  font-nunito-sans">
        <div className="flex items-center justify-center gap-2  py-1">
          {card.icon}
          <p
            className="text-left text-[14px] font-bold mb-3leading-tight tracking-[0.04em] font-weight-bold"
            style={{ color: COLORS.brown }}
          >
            {card.title}
          </p>
        </div>

        {/* <OrnamentalDivider /> */}

        <p
          className="text-center text-[12px] font-bold leading-tight uppercase"
          style={{ color: COLORS.gold }}
        >
          {card.valueLabel}
        </p>

        <SimpleDivider />

        {card.description ? (
          <p
            className=" px-1 text-center text-[12px] leading-snug"
            style={{ color: COLORS.black, opacity: 0.82 }}
          >
            {card.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function CorePersonalitySummary({ text }: { text: string }) {
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
            CORE PERSONALITY SUMMARY
          </p>
          {/* <OverallInsightDivider /> */}
          <p
            className="mt-1 max-w-[520px] text-center text-[12px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88 }}
          >
            {text}
          </p>
        </div>

        <CoverLotus size={80} className="shrink-0" />
      </div>
    </section>
  );
}

function StrengthPills({ strengths }: { strengths: PersonalityStrength[] }) {
  return (

    <section className="relative z-10 mt-2 flex flex-col items-center gap-2 px-1 font-nunito-sans">
  <p
    className="text-[14px] font-bold tracking-[0.12em]"
    style={{ color: COLORS.brown }}
  >
    PERSONALITY STRENGTHS
  </p>

  <div className="flex flex-wrap items-center justify-center gap-2">
    {strengths.map((strength) => {
      const Icon = strength.icon;
      return (
        <div
          key={strength.label}
          className="flex items-center gap-1 rounded-full px-2.5 py-1"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          <Icon
            size={12}
            strokeWidth={1.25}
            style={{ color: COLORS.gold }}
          />
          <span
            className="text-[9px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {strength.label}
          </span>
        </div>
      );
    })}
  </div>
</section>
  );
}

function ExpertObservationFooter({ observation }: { observation: string }) {
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
            GRAPHOLOGY EXPERT OBSERVATION
          </p>
          <p
            className="mt-1.5 text-[10px] leading-relaxed"
            style={{ color: COLORS.cream,  opacity: 0.95 }}
          >
            {observation}
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

// ─── Main export ──────────────────────────────────────────────────────────────

export default function PersonalityAnalysis({
  pageNumber = "05",
  title = "PERSONALITY ANALYSIS",
  subtitle = "What Your Signature Reveals About Your Inner Personality",
  profileScore = 8.7,
  maxScore = 10,
  starRating = 5,
  personalityLabel = "Strong Personality",
  summaryQuote = "Your signature reflects a confident, ambitious, and self-driven personality with a strong desire for growth and achievement.",
  cards = defaultCards,
  coreSummaryText = "Your signature suggests a balanced personality that combines confidence, determination, and practicality. You naturally prefer steady progress over shortcuts and are driven by meaningful achievements.",
  strengths = defaultStrengths,
  expertObservation = "The signature indicates an individual who values personal growth, responsibility, and long-term success. There is a strong tendency toward self-improvement, coupled with a practical approach to life decisions.",
}: SignaturePersonalityAnalysisProps) {
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
        <ProfileScoreSection
          score={profileScore}
          maxScore={maxScore}
          starRating={starRating}
          personalityLabel={personalityLabel}
        />

        <p
          className="relative z-10 mt-2 text-center text-[12px] italic"
          style={{ color: COLORS.black, opacity: 0.9 }}
        >
          {summaryQuote}
        </p>

        <section className="relative z-10 mt-2 grid grid-cols-3 place-items-center">
          {cards.map((card, index) => (
            <PersonalityCard key={`${card.title}-${index}`} index={index + 1} card={card} />
          ))}
        </section>

        <CorePersonalitySummary text={coreSummaryText} />

        <StrengthPills strengths={strengths} />

        <ExpertObservationFooter observation={expertObservation} />
      </div>
    </SignatureReportPageShell>
  );
}