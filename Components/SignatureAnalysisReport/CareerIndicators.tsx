import {
  Brain,
  Briefcase,
  Building2,
  Crown,
  Handshake,
  Lightbulb,
  Megaphone,
  Rocket,
  Shield,
  Signpost,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Pattern3 } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type CareerIndicatorIcon =
  | "leadership"
  | "entrepreneurship"
  | "corporate"
  | "salesMarketing"
  | "creative"
  | "management"
  | "decisionMaking";

export type CareerIndicatorCard = {
  title: string;
  percent: number;
  ratingLabel: string;
  icon: CareerIndicatorIcon;
  description: string;
  decisionStyle?: {
    analytical: string;
    intuitive: string;
    balanced: string;
    styleLabel: string;
  };
};

export type CareerStrength = {
  label: string;
  icon: LucideIcon;
  starRating: number;
};

export type CareerIndicatorsProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  careerPotentialScore?: number;
  maxScore?: number;
  starRating?: number;
  potentialLabel?: string;
  summaryText?: string;
  firstRowCards?: CareerIndicatorCard[];
  secondRowCards?: CareerIndicatorCard[];
  careerInterpretation?: string;
  expertObservation?: string;
  careerStrengths?: CareerStrength[];
};

const COLORS = REPORT_COLORS;

const ICON_MAP: Record<CareerIndicatorIcon, LucideIcon> = {
  leadership: Crown,
  entrepreneurship: Rocket,
  corporate: Building2,
  salesMarketing: Megaphone,
  creative: Lightbulb,
  management: Users,
  decisionMaking: Signpost,
};

const defaultFirstRowCards: CareerIndicatorCard[] = [
  {
    title: "LEADERSHIP SUITABILITY",
    percent: 92,
    ratingLabel: "EXCELLENT",
    icon: "leadership",
    description:
      "Natural ability to lead, inspire, and guide people towards goals.",
  },
  {
    title: "ENTREPRENEURSHIP TENDENCY",
    percent: 88,
    ratingLabel: "VERY HIGH",
    icon: "entrepreneurship",
    description:
      "Strong independent thinking and capacity to build and innovate.",
  },
  {
    title: "CORPORATE SUITABILITY",
    percent: 85,
    ratingLabel: "HIGH",
    icon: "corporate",
    description:
      "Adaptable to corporate environments with strong professional alignment.",
  },
  {
    title: "SALES & MARKETING POTENTIAL",
    percent: 90,
    ratingLabel: "EXCELLENT",
    icon: "salesMarketing",
    description:
      "Excellent communication skills and influence with people.",
  },
];

const defaultSecondRowCards: CareerIndicatorCard[] = [
  {
    title: "CREATIVE PROFESSION SUITABILITY",
    percent: 84,
    ratingLabel: "HIGH",
    icon: "creative",
    description:
      "Good imagination, originality and ability to think outside the box.",
  },
  {
    title: "MANAGEMENT ABILITY",
    percent: 89,
    ratingLabel: "VERY HIGH",
    icon: "management",
    description:
      "Strong organizing skills, planning ability and team management capabilities.",
  },
  {
    title: "DECISION-MAKING STYLE",
    percent: 82,
    ratingLabel: "ANALYTICAL + INTUITIVE",
    icon: "decisionMaking",
    description:
      "You make well-thought decisions with a balance of logic and intuition.",
    decisionStyle: {
      analytical: "Primary",
      intuitive: "Secondary",
      balanced: "Adaptive",
      styleLabel: "ANALYTICAL + INTUITIVE",
    },
  },
];

const defaultCareerStrengths: CareerStrength[] = [
  { label: "Goal Oriented", icon: Target, starRating: 5 },
  { label: "Ambitious", icon: TrendingUp, starRating: 5 },
  { label: "Resilient", icon: Shield, starRating: 5 },
  { label: "Influential", icon: Users, starRating: 5 },
  { label: "Strategic", icon: Brain, starRating: 5 },
  { label: "People Skills", icon: Handshake, starRating: 4 },
];

function StarRating({ count, size = 11 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`career-star-${index}`}
          size={size}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function SemiCircularGauge({ percent }: { percent: number }) {
  const radius = 34;
  const arcLength = Math.PI * radius;
  const offset = arcLength * (1 - percent / 100);

  return (
    <div className="relative flex h-[52px] w-[76px] items-end justify-center">
      <svg viewBox="0 0 76 44" className="h-full w-full" aria-hidden>
        <path
          d={`M 4 40 A ${radius} ${radius} 0 0 1 72 40`}
          fill="none"
          stroke="#f2e4d4"
          strokeWidth="5"
        />
        <path
          d={`M 4 40 A ${radius} ${radius} 0 0 1 72 40`}
          fill="none"
          stroke={COLORS.gold}
          strokeWidth="5"
          strokeDasharray={arcLength}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="absolute bottom-3 text-[14px] font-bold leading-none"
        style={{ color: COLORS.brown }}
      >
        {percent}%
      </span>
    </div>
  );
}

function DecisionDonut({
  percent,
  legend,
}: {
  percent: number;
  legend: NonNullable<CareerIndicatorCard["decisionStyle"]>;
}) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center">
        <svg viewBox="0 0 52 52" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="26" cy="26" r={radius} fill="none" stroke="#f2e4d4" strokeWidth="5" />
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke={COLORS.gold}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span
          className="absolute text-[13px] font-bold leading-none"
          style={{ color: COLORS.brown }}
        >
          {percent}%
        </span>
      </div>
      <div className="flex flex-col gap-0.5 text-left">
        <span className="text-[8px] font-semibold" style={{ color: COLORS.brown }}>
          Analytical <span className="opacity-70">({legend.analytical})</span>
        </span>
        <span className="text-[8px] font-semibold" style={{ color: COLORS.brown }}>
          Intuitive <span className="opacity-70">({legend.intuitive})</span>
        </span>
        <span className="text-[8px] font-semibold" style={{ color: COLORS.brown }}>
          Balanced <span className="opacity-70">({legend.balanced})</span>
        </span>
      </div>
    </div>
  );
}

function CareerPotentialScoreSection({
  score,
  maxScore,
  starRating,
  potentialLabel,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  potentialLabel: string;
}) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans mt-4">
      <div
        className="relative flex h-[180px] w-[420px] items-center justify-center bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/signatureReport/page-8-circle.png')" }}
      >
        <div className="flex flex-col items-center text-center gap-1.5">
          <Briefcase size={36} strokeWidth={1.5} style={{ color: COLORS.gold }} aria-hidden />
          <p
            className="text-[10px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            CAREER POTENTIAL SCORE
          </p>
          <p className="text-[26px] font-bold leading-none" style={{ color: COLORS.brown }}>
            <span className="text-[30px]">{score}</span> /{" "}
            <span className="text-[16px]">{maxScore}</span>
          </p>
          <StarRating count={starRating} />
          <p className="text-[12px] max-w-[120px] text-center font-semibold" style={{ color: COLORS.brown }}>
            {potentialLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function CareerIndicatorCard({
  index,
  card,
  backgroundImage,
  compact = false,
}: {
  index: number;
  card: CareerIndicatorCard;
  backgroundImage: string;
  compact?: boolean;
}) {
  const Icon = ICON_MAP[card.icon];
  const isDecisionCard = card.icon === "decisionMaking";

  return (
    <div
      className={`relative flex flex-col items-center bg-cover bg-center bg-no-repeat text-center font-nunito-sans ${compact ? "h-[230px] w-[172px]" : "h-[190px] w-[240px]"
        }`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 p-4 mt-3">
        <span
          className="absolute left-1/2 top-[0px] flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold"
          style={{ color: COLORS.cream, backgroundColor: COLORS.brown }}
        >
          {String(index).padStart(2, "0")}
        </span>

        <div className={`flex items-center justify-center ${compact ? "flex-col" : "flex-row"}`}>
          <Icon
            size={35}
            strokeWidth={1.25}
            style={{ color: COLORS.gold }}
            className=""
            aria-hidden
          />

          <p
            className="px-0.5 font-bold leading-tight tracking-[0.04em] text-[10px]"
            style={{ color: COLORS.brown }}
          >
            {card.title}
          </p>
        </div>

        {isDecisionCard && card.decisionStyle ? (
          <DecisionDonut percent={card.percent} legend={card.decisionStyle} />
        ) : (
          <SemiCircularGauge percent={card.percent} />
        )}

        <p
          className="min-w-[100px] text-[10px] font-bold flex items-center justify-center rounded-full px-1 py-0.5"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          {card.ratingLabel}
        </p>

        <p
          className="px-1 leading-snug text-[10px]"
          style={{ color: COLORS.black, opacity: 0.82 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function SubtitleHeader({ text }: { text: string }) {
  return (
    <div className="mt-1 flex w-full max-w-[620px] items-center justify-center gap-3 px-2 font-nunito-sans">
      <Pattern3 size={32} />
      <p
        className="text-center text-[13px] italic leading-snug"
        style={{ color: COLORS.brown, opacity: 0.9 }}
      >
        {text}
      </p>
      <Pattern3 size={32} className="rotate-180" />
    </div>
  );
}

function CareerStrengthOverview({ strengths }: { strengths: CareerStrength[] }) {
  return (
    <section className="relative z-10 font-nunito-sans">
      <div
        className="flex flex-col min-h-[88px] w-full items-center justify-center bg-no-repeat px-4 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >

        <div className="flex items-center justify-center gap-2">
          <Pattern3 size={28} />
          <p
            className="text-[12px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            CAREER STRENGTH OVERVIEW
          </p>
          <Pattern3 size={28} className="rotate-180" />
        </div>

        <div className="flex items-stretch justify-center px-1 w-full">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div key={strength.label} className="flex flex-1 items-stretch">
                {index > 0 ? (
                  <span
                    className="my-2 w-px shrink-0"
                    style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
                  />
                ) : null}
                <div className="flex flex-1 flex-col items-center justify-center gap-1 px-1 py-2">
                  <Icon size={30} strokeWidth={1.25} style={{ color: COLORS.gold }} />
                  <span
                    className="text-[10px] font-semibold tracking-wide"
                    style={{ color: COLORS.brown }}
                  >
                    {strength.label}
                  </span>
                  <StarRating count={strength.starRating} size={8} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CareerInterpretationSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans">
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
          width={90}
          height={90}
          className="shrink-0 object-contain"
          aria-hidden
        />

        <div className="flex min-w-0 flex-1 flex-col items-center px-3">
          <div className="flex items-center gap-2">
            <Pattern3 size={24} />
            <p
              className="text-[12px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.brown }}
            >
              CAREER INTERPRETATION
            </p>
            <Pattern3 size={24} className="rotate-180" />
          </div>
          <p
            className="mt-1 max-w-[520px] text-center text-[11px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88 }}
          >
            {text}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/page-8-image.png"
          alt=""
          width={90}
          height={90}
          className="shrink-0 object-contain"
          aria-hidden
        />
      </div>
    </section>
  );
}

function ExpertObservationFooter({ observation }: { observation: string }) {
  return (
    <footer className="relative z-10 font-nunito-sans">
      <div
        className="flex min-h-[100px] w-full items-center gap-3 bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-3 px-2">
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
              className="text-[12px]"
              style={{ color: COLORS.cream, opacity: 0.95 }}
            >
              {observation}
            </p>
          </div>

          <Image
            src="/assets/signatureReport/building.png"
            alt=""
            width={120}
            height={64}
            className="shrink-0 object-contain mix-blend-screen"
            aria-hidden
          />
        </div>
      </div>
    </footer>
  );
}

export default function CareerIndicators({
  pageNumber = "10",
  title = "CAREER INDICATORS",
  subtitle = "What Your Signature Reveals About Your Professional Potential",
  careerPotentialScore = 89,
  maxScore = 100,
  starRating = 5,
  potentialLabel = "Strong Professional Potential",
  summaryText = "Your signature indicates diverse professional strengths and a strong ability to achieve success across multiple domains.",
  firstRowCards = defaultFirstRowCards,
  secondRowCards = defaultSecondRowCards,
  careerInterpretation = "Your signature shows strong leadership qualities, entrepreneurial drive and excellent communication skills. You are capable of excelling in diverse professional environments and have the potential to achieve high positions of authority and recognition.",
  expertObservation = "The career indicators suggest a dynamic personality with strong ambition, leadership potential, and the ability to influence others. Your signature reflects a professional who can create opportunities, take calculated risks, and achieve long-term success.",
  careerStrengths = defaultCareerStrengths,
}: CareerIndicatorsProps) {
  return (
    <SignatureReportPageShell padding="16px 36px 22px" pageNumber={pageNumber}>
      <div className="font-nunito-sans">
        <header className="mt-8 flex flex-col items-center text-center">
          <h1
            className="max-w-[620px] text-[26px] font-bold leading-tight tracking-[0.06em]"
            style={{ color: COLORS.brown }}
          >
            {title}
          </h1>
          <SubtitleHeader text={subtitle} />
        </header>

        <CareerPotentialScoreSection
          score={careerPotentialScore}
          maxScore={maxScore}
          starRating={starRating}
          potentialLabel={potentialLabel}
        />

        <p
          className="max-w-[500px] mx-auto flex flex-row items-center justify-center relative z-10 mt-1 text-center text-[12px] leading-3"
          style={{ color: COLORS.black, opacity: 0.88 }}
        >
          <Pattern3 size={32} />
          {summaryText}
          <Pattern3 size={32} className="rotate-180" />
        </p>

        <section className="relative z-10 mt-2 grid grid-cols-4 place-items-center gap-x-0">
          {firstRowCards.map((card, index) => (
            <CareerIndicatorCard
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
            <CareerIndicatorCard
              key={`${card.title}-${index}`}
              index={index + 5}
              card={card}
              backgroundImage="/assets/signatureReport/card-bg.png"
            />
          ))}
        </section>

        <CareerStrengthOverview strengths={careerStrengths} />

        <CareerInterpretationSection text={careerInterpretation} />

        <ExpertObservationFooter observation={expertObservation} />
      </div>
    </SignatureReportPageShell>
  );
}
