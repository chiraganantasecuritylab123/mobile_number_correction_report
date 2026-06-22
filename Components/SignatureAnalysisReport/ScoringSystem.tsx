import { Award, Star } from "lucide-react";
import Image from "next/image";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type ScoringItem = {
  title: string;
  description: string;
  score: number;
  isOverall?: boolean;
};

export type ScoringSystemProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  introText?: string;
  maxScore?: number;
  scores?: ScoringItem[];
  footerText?: string;
};

const COLORS = REPORT_COLORS;
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";
const CARD_GOLD = "#C5A059";
const CARD_STATUS_BG = "#FAE6C1";

const SECTION_BOX_STYLE = {
  border: `1.5px solid ${COLORS.gold}`,
  borderRadius: 10,
  backgroundColor: "rgba(253, 245, 230, 0.55)",
} as const;

const defaultScores: ScoringItem[] = [
  {
    title: "CONFIDENCE SCORE",
    description: "Reflects self-belief, self-expression and personal conviction.",
    score: 82,
  },
  {
    title: "LEADERSHIP SCORE",
    description: "Indicates leadership qualities, influence, authority and decision-making ability.",
    score: 86,
  },
  {
    title: "WEALTH POTENTIAL SCORE",
    description: "Shows financial potential, abundance mindset and wealth attraction energy.",
    score: 78,
  },
  {
    title: "COMMUNICATION SCORE",
    description: "Measures communication skills, clarity and expression effectiveness.",
    score: 85,
  },
  {
    title: "CAREER GROWTH SCORE",
    description: "Represents growth opportunities, progress mindset and professional rise.",
    score: 83,
  },
  {
    title: "STABILITY SCORE",
    description: "Reflects emotional stability, consistency, and ability to handle challenges.",
    score: 81,
  },
  {
    title: "RELATIONSHIP BALANCE SCORE",
    description: "Indicates harmony in relationships, emotional balance and understanding.",
    score: 76,
  },
  {
    title: "PERSONAL BRAND SCORE",
    description: "Shows uniqueness, public image, and personal presence.",
    score: 84,
  },
  {
    title: "SUCCESS ENERGY SCORE",
    description: "Measures overall success vibration, opportunities and positive energy flow.",
    score: 87,
  },
  {
    title: "OVERALL SIGNATURE STRENGTH SCORE",
    description:
      "Overall evaluation of your signature's strength, balance and effectiveness.",
    score: 83,
    isOverall: true,
  },
];

function HeaderDivider() {
  return (
    <div className="mt-1 flex w-full max-w-[460px] items-center justify-center gap-2">
      <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      <span className="text-[8px] leading-none" style={{ color: COLORS.gold }}>
        ◆
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

function percentToStarRating(percent: number): number {
  return Math.min(5, Math.max(1, Math.round(percent / 20)));
}

function PartialStarRating({
  rating,
  max = 5,
  size = 9,
}: {
  rating: number;
  max?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={`score-star-${index}`}
          size={size}
          fill={index < rating ? COLORS.gold : "transparent"}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function NumberBadge({
  index,
  isOverall = false,
}: {
  index: number;
  isOverall?: boolean;
}) {
  const badgeSize = isOverall ? "h-11 w-11" : "h-9 w-9";
  const textSize = isOverall ? "text-[10px]" : "text-[9px]";

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      {isOverall ? (
        <Award
          size={52}
          strokeWidth={1}
          className="absolute"
          style={{ color: CARD_GOLD, opacity: 0.85 }}
          aria-hidden
        />
      ) : (
        <>
          <span
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[4px] leading-none"
            style={{ color: COLORS.gold }}
          >
            ◆
          </span>
          <span
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[4px] leading-none"
            style={{ color: COLORS.gold }}
          >
            ◆
          </span>
          <span
            className="absolute top-1/2 -left-1.5 -translate-y-1/2 text-[4px] leading-none"
            style={{ color: COLORS.gold }}
          >
            ◆
          </span>
          <span
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 text-[4px] leading-none"
            style={{ color: COLORS.gold }}
          >
            ◆
          </span>
        </>
      )}

      <div
        className={`relative z-10 flex ${badgeSize} items-center justify-center rounded-full`}
        style={{
          border: `1.5px solid ${COLORS.gold}`,
          backgroundColor: CARD_STATUS_BG,
        }}
      >
        <span className={`${textSize} font-bold leading-none`} style={{ color: COLORS.brown }}>
          {String(index).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function ScoringRow({
  index,
  item,
  maxScore,
}: {
  index: number;
  item: ScoringItem;
  maxScore: number;
}) {
  const starRating = percentToStarRating(item.score);
  const isOverall = item.isOverall ?? false;

  return (
    <div
      className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 font-nunito-sans"
      style={{
        border: isOverall ? `2px solid ${COLORS.gold}` : `1px solid ${COLORS.gold}`,
        backgroundColor: isOverall
          ? "rgba(253, 245, 230, 0.88)"
          : "rgba(253, 245, 230, 0.68)",
        boxShadow: isOverall ? `inset 0 0 0 1px ${COLORS.goldLight}` : "inset 0 1px 3px rgba(93, 46, 23, 0.06)",
        minHeight: isOverall ? 58 : 50,
      }}
    >
      <NumberBadge index={index} isOverall={isOverall} />

      <div className="min-w-0 flex-1">
        <p
          className={`font-bold tracking-[0.04em] ${isOverall ? "text-[9.5px]" : "text-[8.5px]"}`}
          style={{ color: COLORS.brown }}
        >
          {item.title}
        </p>
        <p
          className="mt-0.5 text-[7.5px] leading-snug"
          style={{ color: COLORS.brown, opacity: 0.86, fontFamily: BODY_SANS }}
        >
          {item.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 pr-0.5">
        <div className="text-right leading-none">
          <span
            className={`font-bold ${isOverall ? "text-[18px]" : "text-[16px]"}`}
            style={{ color: COLORS.brown }}
          >
            {item.score}
          </span>
          <span className="text-[9px] font-semibold" style={{ color: COLORS.brown, opacity: 0.75 }}>
            {" "}
            / {maxScore}
          </span>
        </div>

        <div
          className="h-7 w-px shrink-0"
          style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
        />

        <PartialStarRating rating={starRating} size={isOverall ? 10 : 9} />
      </div>
    </div>
  );
}

function IntroSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-2 px-4 py-2.5 font-nunito-sans" style={SECTION_BOX_STYLE}>
      <p
        className="text-center text-[9px] leading-relaxed"
        style={{ color: COLORS.brown, opacity: 0.9, fontFamily: BODY_SANS }}
      >
        {text}
      </p>
    </section>
  );
}

function ScoringRowsSection({
  scores,
  maxScore,
}: {
  scores: ScoringItem[];
  maxScore: number;
}) {
  return (
    <section className="relative z-10 mt-2 flex flex-col gap-1 font-nunito-sans">
      {scores.map((item, index) => (
        <ScoringRow key={item.title} index={index + 1} item={item} maxScore={maxScore} />
      ))}
    </section>
  );
}

function ScoringFooter({ text }: { text: string }) {
  return (
    <footer className="relative z-10 mt-2 font-nunito-sans">
      <div className="relative px-4 py-2.5" style={SECTION_BOX_STYLE}>
        <Star
          size={8}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          className="absolute left-2 top-2"
          aria-hidden
        />
        <Star
          size={8}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          className="absolute right-2 top-2"
          aria-hidden
        />
        <Star
          size={8}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          className="absolute bottom-2 left-2"
          aria-hidden
        />
        <Star
          size={8}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          className="absolute bottom-2 right-2"
          aria-hidden
        />

        <p
          className="px-3 text-center text-[8.5px] leading-relaxed"
          style={{ color: COLORS.brown, opacity: 0.9, fontFamily: BODY_SANS }}
        >
          {text}
        </p>
      </div>
    </footer>
  );
}

export default function ScoringSystem({
  pageNumber = "15",
  title = "SCORING SYSTEM",
  subtitle = "Comprehensive Evaluation of Your Signature Energy",
  introText = "Each score ranges from 0 to 100 based on psychological, professional, financial, and spiritual parameters that reflect how your signature expresses energy in different areas of life.",
  maxScore = 100,
  scores = defaultScores,
  footerText = "Higher scores reflect stronger alignment and positive potential. Consistent use of your signature with awareness will maximize these energies.",
}: ScoringSystemProps) {
  return (
    <SignatureReportPageShell padding="16px 36px 18px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={84}
          height={84}
          className="mb-0.5"
          priority
        />
        <h1
          className="max-w-[620px] text-[26px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <p
          className="mt-0.5 max-w-[520px] text-[12px] italic font-nunito-sans"
          style={{ color: COLORS.black, opacity: 0.85 }}
        >
          {subtitle}
        </p>
        <HeaderDivider />
      </header>

      <IntroSection text={introText} />

      <ScoringRowsSection scores={scores} maxScore={maxScore} />

      <ScoringFooter text={footerText} />
    </SignatureReportPageShell>
  );
}
