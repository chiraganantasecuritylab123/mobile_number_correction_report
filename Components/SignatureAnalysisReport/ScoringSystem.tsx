import { Award, Star } from "lucide-react";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import { SubtitleHeader } from "../CommunComponents";

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
const SERIF_FONT = "Georgia, serif";

const ASSETS = {
  logo: "/assets/signatureReport/logo-main.png",
  rowBackground: "/assets/signaturePages/foooter-background.png",
  introBackground: "/assets/signaturePages/footer-backgroundSummaryPage.png",
  flower: "/assets/signatureReport/flower-Bg.png",
} as const;

const BADGE_DIAMOND_POSITIONS = [
  { className: "left-1/2 -translate-x-1/2", top: -6 },
  { className: "left-1/2 -translate-x-1/2", bottom: -6 },
  { className: "top-1/2 -translate-y-1/2", left: -6 },
  { className: "top-1/2 -translate-y-1/2", right: -6 },
] as const;

const BADGE_CIRCLE_STYLE: CSSProperties = {
  background:
    "radial-gradient(circle at 35% 35%, #4a1a0a 0%, #2a0c02 60%, #1a0800 100%)",
  border: `2px solid ${COLORS.gold}`,
  boxShadow: "0 0 0 1px rgba(197,160,89,0.3), inset 0 1px 3px rgba(255,200,100,0.15)",
};

const SCORE_BOX_STYLE: CSSProperties = {
  border: `1.5px solid ${COLORS.gold}`,
  borderRadius: 5,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 3,
  paddingBottom: 3,
  minWidth: 100,
};

const SCORE_DIVIDER_STYLE: CSSProperties = {
  width: 1,
  height: 28,
  backgroundColor: COLORS.gold,
  opacity: 0.45,
};

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
    description: "Overall evaluation of your signature's strength, balance and effectiveness.",
    score: 83,
  },
];

function createBackgroundStyle(image: string, minHeight: number): CSSProperties {
  return {
    backgroundImage: `url('${image}')`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight,
  };
}

function percentToStarRating(percent: number): number {
  if (percent >= 90) return 5;
  if (percent >= 80) return 4;
  if (percent >= 65) return 3;
  if (percent >= 50) return 2;
  return 1;
}

function PartialStarRating({
  rating,
  max = 5,
  size = 16,
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
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  );
}

function BackgroundPanel({
  backgroundImage,
  minHeight,
  className,
  children,
}: {
  backgroundImage: string;
  minHeight: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className} style={createBackgroundStyle(backgroundImage, minHeight)}>
      {children}
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
  return (
    <div
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: 44, height: 44 }}
    >
      {BADGE_DIAMOND_POSITIONS.map(({ className, ...positionStyle }, diamondIndex) => (
        <span
          key={`badge-diamond-${diamondIndex}`}
          className={`absolute text-[6px] leading-none ${className}`}
          style={{ color: COLORS.gold, ...positionStyle }}
        >
          ◆
        </span>
      ))}

      <div
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full"
        style={BADGE_CIRCLE_STYLE}
      >
        {isOverall ? (
          <Award
            size={18}
            strokeWidth={1.5}
            style={{ color: COLORS.gold }}
            aria-hidden
          />
        ) : (
          <span
            className="text-[19px] font-bold leading-none"
            style={{ color: COLORS.cream, fontFamily: SERIF_FONT }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
    </div>
  );
}

function ScoreDisplay({
  score,
  maxScore,
  starRating,
  starSize,
}: {
  score: number;
  maxScore: number;
  starRating: number;
  starSize: number;
}) {
  return (
    <div className="ml-2 flex shrink-0 items-center gap-2">
      <div className="flex items-baseline justify-center gap-5" style={SCORE_BOX_STYLE}>
        <p
          className="mt-0.5 text-[26px] font-bold leading-none"
          style={{ color: COLORS.brown }}
        >
          <span className="text-[35px]">{score}</span> /{" "}
          <span className="text-[16px]">{maxScore}</span>
        </p>

        <div className="shrink-0" style={SCORE_DIVIDER_STYLE} />

        <PartialStarRating rating={starRating} size={starSize} />
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
  const isOverall = item.isOverall ?? false;
  const starRating = percentToStarRating(item.score);

  return (
    <div
      className="relative flex items-center px-4 py-2 font-nunito-sans"
      style={createBackgroundStyle(ASSETS.rowBackground, isOverall ? 68 : 70)}
    >
      <div className="mr-3 shrink-0">
        <NumberBadge index={index} isOverall={isOverall} />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="font-bold tracking-[0.05em]"
          style={{
            color: COLORS.brown,
            fontSize: isOverall ? 11 : 15,
          }}
        >
          {item.title}
        </p>
        <p
          className="mt-0.5 leading-snug"
          style={{
            color: COLORS.black,
            fontSize: 13.5,
          }}
        >
          {item.description}
        </p>
      </div>

      <ScoreDisplay
        score={item.score}
        maxScore={maxScore}
        starRating={starRating}
        starSize={isOverall ? 17 : 15}
      />
    </div>
  );
}

function IntroSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-1 font-nunito-sans">
      <BackgroundPanel
        backgroundImage={ASSETS.introBackground}
        minHeight={80}
        className="relative flex w-full items-center justify-center px-6 py-3"
      >
        <p
          className="max-w-[88%] text-center leading-relaxed"
          style={{
            color: COLORS.black,
            fontFamily: SERIF_FONT,
            fontSize: 15,
          }}
        >
          {text}
        </p>
      </BackgroundPanel>
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
    <section className="relative z-10 mt-1 flex flex-col gap-1 font-nunito-sans">
      {scores.map((item, index) => (
        <ScoringRow key={item.title} index={index + 1} item={item} maxScore={maxScore} />
      ))}
    </section>
  );
}

function ScoringFooter({ text }: { text: string }) {
  return (
    <footer className="relative z-10 mt-1 font-nunito-sans">
      <BackgroundPanel
        backgroundImage={ASSETS.rowBackground}
        minHeight={48}
        className="relative flex w-full items-center justify-center px-8 py-2"
      >
        <Image
          src={ASSETS.flower}
          alt="Astro Aarambh"
          width={72}
          height={72}
          className="mb-0.5"
          priority
        />
        <p
          className="max-w-[88%] text-center leading-relaxed"
          style={{
            color: COLORS.black,
            opacity: 0.9,
            fontFamily: "Georgia",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {text}
        </p>
        <Image
          src={ASSETS.flower}
          alt="Astro Aarambh"
          width={72}
          height={72}
          className="mb-0.5"
          priority
        />
      </BackgroundPanel>
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
    <SignatureReportPageShell padding="14px 32px 14px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center">
        <Image
          src={ASSETS.logo}
          alt="Astro Aarambh"
          width={72}
          height={72}
          className="mb-0.5"
          priority
        />
        <h1
          className="max-w-[620px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown, fontSize: 26 }}
        >
          {title}
        </h1>
        <SubtitleHeader text={subtitle} />
      </header>

      <IntroSection text={introText} />
      <ScoringRowsSection scores={scores} maxScore={maxScore} />
      <ScoringFooter text={footerText} />
    </SignatureReportPageShell>
  );
}
