import {
  AlertTriangle,
  Briefcase,
  Check,
  Crown,
  Heart,
  IndianRupee,
  Plane,
  ShieldCheck,
  Smartphone,
  Smile,
  Sun,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { CoverLotus, Pattern3 } from "./CommunComponents";

export type MobileDetails = {
  mobileNumber: string;
  compoundTotal: number;
  rootDriverNumber: number;
  rulingPlanet: string;
  rulingPlanetSymbol?: string;
};

export type VerdictData = {
  statusText: string;
  overallScore: number;
  maxScore?: number;
  starRating: number;
  summaryDescription: string;
};

export type ImpactLevel = "GOOD" | "MEDIUM" | "LOW";

export type LifeAreaImpact = {
  area: string;
  icon: LucideIcon;
  impactLevel: ImpactLevel;
  supports: string;
  obstacles: string;
  ratingScore: number;
  maxRating?: number;
};

export type OverAllVerdictProps = {
  mobileDetails?: MobileDetails;
  verdict?: VerdictData;
  positiveEffects?: string[];
  negativeEffects?: string[];
  lifeAreaImpacts?: LifeAreaImpact[];
  keyTakeaway?: string;
  recommendation?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;
const LUCKY_GREEN = "#2d7a4f";
const UNLUCKY_RED = "#a84432";
const GOLD = "#d48e31";

const IMPACT_LEVEL_STYLES: Record<
  ImpactLevel,
  { bg: string; color: string; border: string }
> = {
  GOOD: { bg: "rgba(45, 122, 79, 0.12)", color: LUCKY_GREEN, border: LUCKY_GREEN },
  MEDIUM: { bg: "rgba(212, 142, 49, 0.12)", color: GOLD, border: GOLD },
  LOW: { bg: "rgba(168, 68, 50, 0.12)", color: UNLUCKY_RED, border: UNLUCKY_RED },
};

const TABLE_BORDER = "1px solid rgba(184, 134, 11, 0.35)";
const TABLE_HEADER_BG = "rgba(212, 163, 115, 0.38)";

const defaultMobileDetails: MobileDetails = {
  mobileNumber: "+44 7700 900123",
  compoundTotal: 46,
  rootDriverNumber: 1,
  rulingPlanet: "Sun (1)",
  rulingPlanetSymbol: "☉",
};

const defaultVerdict: VerdictData = {
  statusText: "MODERATELY SUPPORTIVE",
  overallScore: 6.2,
  maxScore: 10,
  starRating: 3.5,
  summaryDescription:
    "Your current mobile number carries mixed vibrations. It supports intellectual growth, networking, and adaptability but creates noticeable blocks in financial flow, emotional stability, and long-term focus.",
};

const defaultPositiveEffects = [
  "Strong communication & networking energy (Double 7 + Driver 5 synergy)",
  "Supports quick decision-making and new opportunities",
  "Good for travel, short trips, and digital marketing / business",
  "Enhances analytical and research abilities",
  "Helps in building new contacts and social connections",
];

const defaultNegativeEffects = [
  "Financial delays due to triple zeros and weak wealth vibrations",
  "Scattered energy — difficulty maintaining long-term focus",
  "Overthinking and mental stress (amplified by repeated 7s)",
  "Emotional detachment in personal relationships",
  "Slow progress in stability-related matters (home, savings, career growth)",
  "Occasional unexpected obstacles and miscommunications",
];

const defaultLifeAreaImpacts: LifeAreaImpact[] = [
  {
    area: "Career & Growth",
    icon: Briefcase,
    impactLevel: "MEDIUM",
    supports: "Networking, Communication, New Ideas",
    obstacles: "Stability, Long-term Progress",
    ratingScore: 6.5,
  },
  {
    area: "Finance & Wealth",
    icon: IndianRupee,
    impactLevel: "LOW",
    supports: "Quick gains, Speculation",
    obstacles: "Steady Accumulation, Savings",
    ratingScore: 4.5,
  },
  {
    area: "Health & Well-being",
    icon: Heart,
    impactLevel: "MEDIUM",
    supports: "Mental Sharpness",
    obstacles: "Anxiety, Sleep Issues, Nervous System",
    ratingScore: 6,
  },
  {
    area: "Relationships",
    icon: Users,
    impactLevel: "GOOD",
    supports: "Social Connections, Diplomacy",
    obstacles: "Emotional Depth, Long-term Bonding",
    ratingScore: 7.5,
  },
  {
    area: "Personal Happiness",
    icon: Smile,
    impactLevel: "MEDIUM",
    supports: "Freedom & Variety",
    obstacles: "Inner Peace, Emotional Balance",
    ratingScore: 6,
  },
  {
    area: "Travel & Movement",
    icon: Plane,
    impactLevel: "GOOD",
    supports: "Frequent Travel, Change",
    obstacles: "—",
    ratingScore: 8,
  },
];

const defaultKeyTakeaway =
  "Your current mobile number is not entirely negative, but it is not fully aligned with your core numbers (Driver 5 + Conductor 7 + Kua 2). It gives you speed and intellect but lacks the stability and prosperity vibration needed for long-term success and peace.";

const defaultRecommendation =
  "A small correction in your mobile number can bring significant positive shifts in the next 12–24 months.";

function GoldBox({
  children,
  className = "",
  style,
  borderColor = "#b8860b",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  borderColor?: string;
}) {
  return (
    <div
      className={`rounded-lg ${className}`}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: "rgba(253, 245, 230, 0.78)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function StarRating({
  rating,
  color = GOLD,
  size = "md",
}: {
  rating: number;
  color?: string;
  size?: "sm" | "md";
}) {
  const starSize = size === "sm" ? "text-[10px]" : "text-[14px]";

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating >= i + 0.5;
        return (
          <span key={i} className={starSize} style={{ color: filled || half ? color : "rgba(184, 134, 11, 0.25)" }}>
            {half ? "◐" : "★"}
          </span>
        );
      })}
    </div>
  );
}

function ImpactLevelBadge({ level }: { level: ImpactLevel }) {
  const styles = IMPACT_LEVEL_STYLES[level];
  return (
    <span
      className="inline-block rounded-full px-2 py-0.5 text-[8px] font-bold tracking-wide"
      style={{
        color: styles.color,
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
      }}
    >
      {level}
    </span>
  );
}

function VerdictBadge({
  verdict,
}: {
  verdict: VerdictData;
}) {
  const maxScore = verdict.maxScore ?? 10;

  return (
    <div className="relative mx-auto flex h-[210px] w-[210px] shrink-0 items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle cx="60" cy="60" r="56" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.35" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#b8860b" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="46" fill="rgba(255, 251, 240, 0.95)" stroke="#d4af37" strokeWidth="0.5" />
      </svg>
      <div className="relative z-10 flex flex-col items-center px-3 text-center">
        <Crown size={40} strokeWidth={1.5} style={{ color: GOLD }} />
        <p className="text-[10px] font-bold tracking-wider" style={{ color: COLORS.black }}>
          FINAL VERDICT
        </p>
        <p className="text-[15px] font-bold leading-tight" style={{ color: COLORS.red }}>
          {verdict.statusText}
        </p>
        <p className="mt-1 text-[8px] font-bold tracking-wide text-black/60">OVERALL SCORE</p>
        <p className="text-[22px] font-bold leading-none" style={{ color: LUCKY_GREEN }}>
          {verdict.overallScore}
          <span className="text-[11px] font-semibold text-black"> / {maxScore}</span>
        </p>
        <div className="mt-1">
          <StarRating rating={verdict.starRating} color={GOLD} size="md" />
        </div>
      </div>
    </div>
  );
}

function MobileNumberCard({ details }: { details: MobileDetails }) {
  return (
    <GoldBox className="relative flex h-full flex-col px-4 py-2">
      <p className="text-[9px] font-bold tracking-wider text-center" style={{ color: COLORS.red }}>
        CURRENT MOBILE NUMBER
      </p>
      <div className="mt-1 flex flex-col items-center text-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ border: "1.5px solid rgba(184, 134, 11, 0.55)" }}
        >
          <Smartphone size={24} strokeWidth={1.5} style={{ color: GOLD }} />
        </div>
        <p className="mt-2 text-[20px] font-bold leading-tight tracking-wide sm:text-[22px]" style={{ color: COLORS.black }}>
          {details.mobileNumber}
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-1.5 text-[10px]">
        <p className="text-black/70">
          <span className="font-semibold">Compound Total:</span>{" "}
          <span className="font-bold text-black">{details.compoundTotal}</span>
        </p>
        <p className="text-black/70">
          <span className="font-semibold">Root / Driver Number:</span>{" "}
          <span className="font-bold text-black">{details.rootDriverNumber}</span>
        </p>
        <p className="text-black/70">
          <span className="font-semibold">Ruling Planet:</span>{" "}
          <span className="font-bold" style={{ color: COLORS.red }}>
            {details.rulingPlanetSymbol ? `${details.rulingPlanetSymbol} ` : ""}
            {details.rulingPlanet}
          </span>
        </p>
      </div>
      <Sun
        size={28}
        strokeWidth={1.5}
        className="absolute bottom-4 right-3"
        style={{ color: GOLD }}
      />
    </GoldBox>
  );
}

function EffectListCard({
  variant,
  sectionIndex,
  title,
  subtitle,
  items,
}: {
  variant: "positive" | "negative";
  sectionIndex: string;
  title: string;
  subtitle: string;
  items: string[];
}) {
  const isPositive = variant === "positive";
  const accent = isPositive ? LUCKY_GREEN : UNLUCKY_RED;
  const SubIcon = isPositive ? Check : AlertTriangle;
  const BulletIcon = isPositive ? Check : X;

  return (
    <GoldBox
      className="h-full min-h-[200px] p-2"
      borderColor={isPositive ? "rgba(45, 122, 79, 0.45)" : "rgba(168, 68, 50, 0.45)"}
      style={{ backgroundColor: isPositive ? "rgba(245, 252, 247, 0.65)" : "rgba(253, 236, 234, 0.55)" }}
    >
      <p className="text-[11px] font-bold tracking-wide" style={{ color: accent }}>
        {sectionIndex} {title}
      </p>
      <div className="mt-1 flex items-center justify-center gap-1.5">
        <span
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: accent }}
        >
          <SubIcon size={12} strokeWidth={3} color="#fff" />
        </span>
        <p className="text-[10px] font-bold tracking-wide" style={{ color: accent }}>
          {subtitle}
        </p>
      </div>
      <ul className="mt-2 flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-1.5 text-[9px] leading-snug text-black">
            <span
              className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: accent }}
            >
              <BulletIcon size={8} strokeWidth={3} color="#fff" />
            </span>
            <span className="text-[9px] leading-snug text-black">{item}</span>
          </li>
        ))}
      </ul>
    </GoldBox>
  );
}

function LifeAreaImpactTable({ rows }: { rows: LifeAreaImpact[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] border-collapse">
        <thead>
          <tr style={{ backgroundColor: TABLE_HEADER_BG }}>
            {["LIFE AREA", "IMPACT LEVEL", "SUPPORTS", "CREATES OBSTACLES IN", "OVERALL RATING"].map(
              (header) => (
                <th
                  key={header}
                  className="border px-2 py-1 text-left text-[10px] font-bold tracking-wide"
                  style={{ borderColor: "rgba(184, 134, 11, 0.35)", color: COLORS.brown }}
                >
                  {header}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const Icon = row.icon;
            const maxRating = row.maxRating ?? 10;
            return (
              <tr key={row.area} className="bg-white/30">
                <td
                  className="border px-2 py-1 align-middle text-[11px] font-semibold w-[140px]"
                  style={{ borderColor: "rgba(184, 134, 11, 0.35)", color: COLORS.brown }}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon size={13} strokeWidth={2} style={{ color: GOLD }} />
                    {row.area}
                  </span>
                </td>
                <td
                  className="border px-2 py-1 align-middle"
                  style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
                >
                  <ImpactLevelBadge level={row.impactLevel} />
                </td>
                <td
                  className="border px-2 py-1.5 align-middle text-[11px] leading-3 text-black"
                  style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
                >
                  {row.supports}
                </td>
                <td
                  className="border px-2 py-1.5 align-middle text-[11px] leading-3 text-black"
                  style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
                >
                  {row.obstacles}
                </td>
                <td
                  className="border px-2 py-1 align-middle"
                  style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
                >
                  <div className="flex flex-row items-center justify-center gap-0.5">
                    <StarRating rating={row.ratingScore / 2} color={GOLD} size="md" />
                    <span className="text-[10px] font-bold" style={{ color: COLORS.brown }}>
                      {row.ratingScore}/{maxRating}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TakeawayBanner({
  keyTakeaway,
  recommendation,
}: {
  keyTakeaway: string;
  recommendation: string;
}) {
  return (
    <GoldBox
      className="flex flex-col gap-4 px-2 py-1 flex-row items-center"
      style={{ backgroundColor: "rgba(255, 251, 240, 0.9)" }}
    >
      <div className="flex shrink-0 justify-center">
        <Image src="/assets/cover/sunLightImage.png" alt="Scale" width={90} height={90} className="object-contain h-[90px] w-[90px]" />
      </div>
      <div className="flex-1 text-left">
        <p className="text-[11px] font-bold tracking-wide" style={{ color: UNLUCKY_RED }}>
          KEY TAKEAWAY
        </p>
        <p className="text-[11px] leading-4 text-black">{keyTakeaway}</p>
        <p className="text-[10px] text-center font-bold tracking-wide" style={{ color: LUCKY_GREEN }}>
          RECOMMENDATION
        </p>
        <p className="text-[10px] max-w-[400px] mx-auto text-center font-bold leading-relaxed text-black">{recommendation}</p>
      </div>
      <div className="flex shrink-0 justify-center sm:w-[70px]">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full"
          style={{ border: "1.5px solid rgba(184, 134, 11, 0.45)", backgroundColor: "rgba(212, 142, 49, 0.08)" }}
        >
          <ShieldCheck size={56} strokeWidth={1.5} style={{ color: GOLD }} />
        </div>
      </div>
    </GoldBox>
  );
}

export default function OverAllVardict({
  mobileDetails = defaultMobileDetails,
  verdict = defaultVerdict,
  positiveEffects = defaultPositiveEffects,
  negativeEffects = defaultNegativeEffects,
  lifeAreaImpacts = defaultLifeAreaImpacts,
  keyTakeaway = defaultKeyTakeaway,
  recommendation = defaultRecommendation,
  pageNumber = "14",
}: OverAllVerdictProps) {
  return (
    <ReportPageShell padding="20px 40px 52px">
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/ganesha-logo.png"
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-2"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={50} />
          <p className="text-md font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="text-[40px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          OVERALL <span style={{ color: COLORS.red }}>VERDICT</span>
        </h1>
        <p
          className="text-[13px]"
          style={{ color: "#213247", opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
        >
          Summary of Your Current Mobile Number&apos;s Influence
        </p>
      </header>

      {/* Top: mobile card + verdict + summary */}
      <section className="relative z-10 mt-1 grid grid-cols-[1fr_auto_1fr] items-center gap-4 font-nunito-sans">
        <MobileNumberCard details={mobileDetails} />
        <VerdictBadge verdict={verdict} />
        <div className="flex flex-col items-start justify-center">
          <GoldBox className="h-full min-h-[200px] p-3">
            <p className="text-[13px] flex items-start justify-start leading-6 text-black max-w-[200px] mx-auto">
              {verdict.summaryDescription}
            </p>
          </GoldBox>
        </div>
      </section>

      {/* Positive vs negative effects */}
      <section className="relative z-10 mt-2 font-nunito-sans">
        <div className="flex flex-row items-center justify-between gap-3">
          <EffectListCard
            variant="positive"
            sectionIndex="8.1"
            title="POSITIVE EFFECTS OF CURRENT NUMBER"
            subtitle="WHAT WORKS WELL"
            items={positiveEffects}
          />
          <div
            className="flex items-center justify-center rounded-full"
          >
            <Image src="/assets/cover/overallvardict.png" alt="Scale" width={150} height={150} className="h-[200px] w-[200px]" />
          </div>
          <EffectListCard
            variant="negative"
            sectionIndex="8.2"
            title="NEGATIVE / BLOCKING EFFECTS"
            subtitle="AREAS OF CONCERN"
            items={negativeEffects}
          />
        </div>
      </section>

      {/* Life area impact table */}
      <section className="relative z-10 mt-1 font-nunito-sans">
        <p className="mb-1 text-[10px] font-bold tracking-wide" style={{ color: COLORS.brown }}>
          8.3 LIFE AREA IMPACT SUMMARY
        </p>
        <GoldBox className="overflow-hidden p-0" style={{ backgroundColor: "#fffbf0" }}>
          <LifeAreaImpactTable rows={lifeAreaImpacts} />
        </GoldBox>
      </section>

      {/* Key takeaway */}
      <section className="relative z-10 mt-2 font-nunito-sans">
        <TakeawayBanner keyTakeaway={keyTakeaway} recommendation={recommendation} />
      </section>

      {/* <footer className="relative z-10 mt-4 text-center">
        <p className="text-[11px] font-bold tracking-[0.25em]" style={{ color: UNLUCKY_RED }}>
          ASTRO AARAMBH
        </p>
      </footer> */}

      {/* <PageFooterBar
        className="relative -mx-[22px] mt-2 h-9 w-[calc(100%+44px)]"
        pageNumber={pageNumber}
      /> */}
    </ReportPageShell>
  );
}
