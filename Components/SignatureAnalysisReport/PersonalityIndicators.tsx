import {
  Brain,
  Compass,
  Crown,
  Feather,
  Heart,
  Palette,
  Repeat,
  Shield,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
  User,
  Users,
  UserRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import { Pattern3, SubtitleHeader } from "../CommunComponents";

export type PersonalityIndicator = {
  title: string;
  percent: number;
  icon: LucideIcon;
};

export type CharacterStrength = {
  label: string;
  starRating: number;
  icon: LucideIcon;
};

export type PersonalityTraitPill = {
  label: string;
  icon: LucideIcon;
};

export type PersonalityIndicatorsProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  personalityIndex?: number;
  maxScore?: number;
  starRating?: number;
  indexLabel?: string;
  indicators?: PersonalityIndicator[];
  characterStrengths?: CharacterStrength[];
  coreSummary?: string;
  traitPills?: PersonalityTraitPill[];
  expertObservation?: string;
};

const COLORS = REPORT_COLORS;

const defaultIndicators: PersonalityIndicator[] = [
  { title: "CONFIDENCE", percent: 92, icon: Shield },
  { title: "SELF-ESTEEM", percent: 88, icon: Heart },
  { title: "LEADERSHIP TENDENCY", percent: 90, icon: Crown },
  { title: "AMBITION LEVEL", percent: 95, icon: TrendingUp },
  { title: "EMOTIONAL EXPRESSION", percent: 78, icon: Smile },
  { title: "CREATIVITY", percent: 84, icon: Palette },
  { title: "ANALYTICAL MINDSET", percent: 89, icon: Brain },
  { title: "INDEPENDENCE", percent: 87, icon: UserRound },
  { title: "SOCIAL NATURE", percent: 75, icon: Users },
  { title: "DISCIPLINE", percent: 91, icon: Sparkles },
  { title: "PERSISTENCE", percent: 94, icon: Repeat },
  { title: "RISK-TAKING TENDENCY", percent: 82, icon: Zap },
];

const defaultCharacterStrengths: CharacterStrength[] = [
  { label: "Leadership", starRating: 5, icon: Crown },
  { label: "Confidence", starRating: 5, icon: Shield },
  { label: "Discipline", starRating: 5, icon: Sparkles },
  { label: "Persistence", starRating: 5, icon: Repeat },
  { label: "Creativity", starRating: 4, icon: Palette },
  { label: "Social Nature", starRating: 3, icon: Users },
];

const defaultTraitPills: PersonalityTraitPill[] = [
  { label: "Leadership", icon: Crown },
  { label: "Confidence", icon: Shield },
  { label: "Creativity", icon: Palette },
  { label: "Discipline", icon: Sparkles },
  { label: "Persistence", icon: Repeat },
  { label: "Independence", icon: UserRound },
  { label: "Ambition", icon: TrendingUp },
];

function StarRating({ count, size = 15 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`personality-star-${index}`}
          size={size}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function PartialStarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={`strength-star-${index}`}
          size={11}
          fill={index < rating ? COLORS.gold : "transparent"}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function PersonalityIndexSection({
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
    <section className="relative z-10 flex justify-center font-nunito-sans mt-3">
      <div
        className="relative flex h-[200px] min-w-[400px] items-center justify-center bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/signatureReport/page-8-circle.png')" }}
      >
        <Crown
          size={30}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          className="absolute top-2"
          aria-hidden
        />
        <div className="flex flex-col items-center text-center gap-1">
          <p
            className="text-[10px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.gold }}
          >
            PERSONALITY INDEX
          </p>
          <p
            className="text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            <span className="text-[40px]">{score}</span> / <span className="text-[16px]">{maxScore}</span>
          </p>
          <StarRating count={starRating} />
          <p
            className="mt-1 text-[12px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {indexLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function IndicatorCard({
  index,
  indicator,
}: {
  index: number;
  indicator: PersonalityIndicator;
}) {
  const Icon = indicator.icon;

  return (
    <div
      className="relative flex h-[74px] items-center gap-2 rounded-md px-2.5 py-2 font-nunito-sans"
      style={{
        border: `1px solid ${COLORS.gold}`,
      }}
    >
      <span
        className="absolute -left-1 -top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full text-[10px] font-bold"
        style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
      >
        {String(index).padStart(2, "0")}
      </span>

      <div
        className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{ border: `1.5px solid ${COLORS.gold}` }}
      >
        <Icon size={30} strokeWidth={2} style={{ color: COLORS.gold }} aria-hidden />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="truncte text-[11px] font-bold tracking-[0.04em]"
          style={{ color: COLORS.brown }}
        >
          {indicator.title}
        </p>
        <div className="mt-1 flex items-center gap-1.5">
          <div
            className="h-2 min-w-0 flex-1 overflow-hidden rounded-full"
            style={{ backgroundColor: "#f2e4d4" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${indicator.percent}%`,
                backgroundColor: COLORS.gold,
              }}
            />
          </div>
          <span
            className="shrink-0 text-[12px] font-bold"
            style={{ color: COLORS.brown }}
          >
            {indicator.percent}%
          </span>
        </div>
      </div>
    </div>
  );
}

function CharacterStrengthMapSection({
  strengths,
}: {
  strengths: CharacterStrength[];
}) {
  const leftColumn = strengths.slice(0, 3);
  const rightColumn = strengths.slice(3, 6);

  return (
    <section
      className="relative z-10 mt-1 px-4 py-3 font-nunito-sans"
      style={{
        border: `1.5px solid ${COLORS.gold}`,
        borderRadius: 10,
      }}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="h-px w-10" style={{ backgroundColor: COLORS.gold }} />
        <p
          className="text-[13px] font-bold tracking-[0.1em]"
          style={{ color: COLORS.brown }}
        >
          CHARACTER STRENGTH MAP
        </p>
        <span className="h-px w-10" style={{ backgroundColor: COLORS.gold }} />
      </div>

      <div className="mt-2 flex items-center justify-around gap-6">
        <div className="flex flex-col gap-2">
          {leftColumn.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ border: `1px solid ${COLORS.gold}` }}
                >
                  <Icon size={22} strokeWidth={2} style={{ color: COLORS.gold }} />
                </div>
                <span className="w-[80px] text-[13px] font-semibold" style={{ color: COLORS.brown }}>
                  {item.label}
                </span>
                <PartialStarRating rating={item.starRating} />
              </div>
            );
          })}
        </div>
        <div>
          <Image src="/assets/signatureReport/map-pattern.png" alt="Compass" width={66} height={66} />
        </div>

        <div className="flex flex-col gap-2">
          {rightColumn.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ border: `1px solid ${COLORS.gold}` }}
                >
                  <Icon size={22} strokeWidth={2} style={{ color: COLORS.gold }} />
                </div>
                <span className="w-[80px] text-[13px] font-semibold" style={{ color: COLORS.brown }}>
                  {item.label}
                </span>
                <PartialStarRating rating={item.starRating} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CorePersonalitySummarySection({
  summary,
  traitPills,
}: {
  summary: string;
  traitPills: PersonalityTraitPill[];
}) {
  return (
    <section className="relative z-10 mt-2 font-nunito-sans">
      <div
        className="flex min-h-[88px] w-full items-center bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/assets/signatureReport/page-8-image.png"
          alt=""
          width={100}
          height={100}
          className="shrink-0 object-contain"
          aria-hidden
        />

        <div className="flex min-w-0 flex-1 flex-col items-center px-4">
          <p
            className="text-[14px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            CORE PERSONALITY SUMMARY
          </p>
          <p
            className="mt-1 max-w-[520px] text-center text-[12px] leading-relaxed font-nunito-sans"
            style={{ color: COLORS.black }}
          >
            {summary}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/page-8-image.png"
          alt=""
          width={100}
          height={100}
          className="shrink-0 object-contain"
          aria-hidden
        />
      </div>

      <div className="mt-2 w-full flex flex-wrap items-center justify-between gap-1.5 px-1">
        {traitPills.map((pill) => {
          const Icon = pill.icon;
          return (
            <div
              key={pill.label}
              className="flex items-center gap-1 rounded-full px-2 py-1"
              style={{
                border: `1px solid ${COLORS.gold}`,
              }}
            >
              <Icon size={20} strokeWidth={2} style={{ color: COLORS.gold }} />
              <span className="text-[11px] font-semibold" style={{ color: COLORS.brown }}>
                {pill.label}
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
    <footer className="relative z-10 mt-1 font-nunito-sans">
      <div
        className="flex min-h-[100px] w-full items-center gap-3 bg-no-repeat px-5 py-3"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full"
          style={{ border: `1.5px solid ${COLORS.goldLight}` }}
        >
          <User size={22} strokeWidth={1.25} style={{ color: COLORS.goldLight }} />
          <Star
            size={10}
            fill={COLORS.goldLight}
            stroke={COLORS.goldLight}
            className="absolute right-1.5 bottom-1.5"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="text-[14px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.goldLight }}
          >
            GRAPHOLOGY EXPERT OBSERVATION
          </p>
          <p
            className="mt-1 text-[12px] leading-relaxed font-nunito-sans"
            style={{ color: COLORS.cream }}
          >
            {observation}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/footer-image.png"
          alt=""
          width={100}
          height={64}
          className="shrink-0 object-contain mix-blend-screen"
          aria-hidden
        />
      </div>
    </footer>
  );
}

export default function PersonalityIndicators({
  pageNumber = "9",
  title = "PERSONALITY INDICATORS",
  subtitle = "Traditional Graphology Personality Assessment",
  personalityIndex = 91,
  maxScore = 100,
  starRating = 5,
  indexLabel = "Strong Character Profile",
  indicators = defaultIndicators,
  characterStrengths = defaultCharacterStrengths,
  coreSummary = "Your signature indicates a confident, ambitious, and disciplined personality. You possess strong leadership tendencies, a practical mindset, and the determination to achieve long-term goals while maintaining emotional balance.",
  traitPills = defaultTraitPills,
  expertObservation = "Traditional graphology indicators suggest a personality driven by purpose, achievement, and self-development. The signature reflects an individual who combines confidence with practicality and possesses the resilience required to overcome challenges.",
}: PersonalityIndicatorsProps) {
  return (
    <SignatureReportPageShell padding="18px 36px 22px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center pt-6">
        <h1
          className="max-w-[620px] text-[28px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <SubtitleHeader text={subtitle} />
      </header>

      <PersonalityIndexSection
        score={personalityIndex}
        maxScore={maxScore}
        starRating={starRating}
        indexLabel={indexLabel}
      />

      <section className="relative z-10 mt-3 grid grid-cols-3 gap-2 font-nunito-sans">
        {indicators.map((indicator, index) => (
          <IndicatorCard
            key={`${indicator.title}-${index}`}
            index={index + 1}
            indicator={indicator}
          />
        ))}
      </section>

      <CharacterStrengthMapSection strengths={characterStrengths} />

      <CorePersonalitySummarySection summary={coreSummary} traitPills={traitPills} />

      <ExpertObservationFooter observation={expertObservation} />
    </SignatureReportPageShell>
  );
}
