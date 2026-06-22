import {
  AudioWaveform,
  Calendar,
  Coins,
  Puzzle,
  Sparkles,
  Star,
  UserCircle,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type NumerologyCard = {
  title: string;
  valueLabel: string;
  value: string;
  percent: number;
  statusBadge: string;
  description: string;
  overviewLabel: string;
  overviewIcon: LucideIcon;
  variant?: "standard" | "vibration";
};

export type NumerologyViewProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  fullName?: string;
  birthDate?: string;
  birthDay?: string;
  alignmentScore?: number;
  maxScore?: number;
  starRating?: number;
  scoreLabel?: string;
  cards?: NumerologyCard[];
  overviewStarRating?: number;
  interpretation?: string;
};

const COLORS = REPORT_COLORS;
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const CARD_GOLD = "#C5A059";
const CARD_GOLD_LIGHT = "#E8C872";
const CARD_STATUS_BG = "#FAE6C1";

const defaultCards: NumerologyCard[] = [
  {
    title: "SIGNATURE COMPATIBILITY WITH MULANK",
    valueLabel: "MULANK",
    value: "6",
    percent: 92,
    statusBadge: "EXCELLENT ALIGNMENT",
    description:
      "Your signature strongly supports your Mulank energy, enhancing harmony, balance and natural expression.",
    overviewLabel: "Mulank",
    overviewIcon: UserCircle,
  },
  {
    title: "SIGNATURE COMPATIBILITY WITH BHAGYANK",
    valueLabel: "BHAGYANK",
    value: "3",
    percent: 88,
    statusBadge: "STRONG ALIGNMENT",
    description:
      "Your signature aligns well with your Bhagyank, supporting creativity, expression and life-path growth.",
    overviewLabel: "Bhagyank",
    overviewIcon: Star,
  },
  {
    title: "NAME NUMBER ALIGNMENT",
    valueLabel: "NAME NUMBER",
    value: "5",
    percent: 90,
    statusBadge: "HIGHLY COMPATIBLE",
    description:
      "Your signature reflects your name vibration clearly, supporting adaptability, communication and freedom.",
    overviewLabel: "Name Number",
    overviewIcon: Sparkles,
  },
  {
    title: "MISSING NUMBER COMPENSATION",
    valueLabel: "MISSING NUMBERS",
    value: "2, 7",
    percent: 85,
    statusBadge: "GOOD COMPENSATION",
    description:
      "Your signature helps balance missing numbers by strengthening intuition, sensitivity and inner wisdom.",
    overviewLabel: "Missing Numbers",
    overviewIcon: Puzzle,
  },
  {
    title: "WEALTH NUMBER ENHANCEMENT",
    valueLabel: "WEALTH NUMBER",
    value: "6",
    percent: 91,
    statusBadge: "ACTIVATED",
    description:
      "Your signature activates wealth energy, supporting financial growth, stability and material success.",
    overviewLabel: "Wealth Number",
    overviewIcon: Coins,
  },
  {
    title: "SIGNATURE VIBRATION SCORE",
    valueLabel: "SCORE",
    value: "87/100",
    percent: 87,
    statusBadge: "HIGH VIBRATIONAL ENERGY",
    description:
      "Your signature carries strong positive vibration, attracting success, confidence and favourable opportunities.",
    overviewLabel: "Signature Vibration",
    overviewIcon: AudioWaveform,
    variant: "vibration",
  },
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
          key={`numerology-star-${index}`}
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
  const radius = 28;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex h-[48px] w-[72px] items-end justify-center">
      <svg viewBox="0 0 72 48" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={gaugeId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={CARD_GOLD} />
            <stop offset="100%" stopColor={CARD_GOLD_LIGHT} />
          </linearGradient>
        </defs>
        <path
          d="M 8 40 A 28 28 0 0 1 64 40"
          fill="none"
          stroke="#F0E0C8"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 8 40 A 28 28 0 0 1 64 40"
          fill="none"
          stroke={`url(#${gaugeId})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span
        className="absolute bottom-[8px] text-[15px] font-bold leading-none"
        style={{ color: COLORS.brown }}
      >
        {percent}%
      </span>
    </div>
  );
}

function CircularGauge({ percent, label }: { percent: number; label: string }) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex h-[80px] w-[80px] items-center justify-center">
      <svg viewBox="0 0 58 58" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="29" cy="29" r={radius} fill="none" stroke="#F0E0C8" strokeWidth="5" />
        <circle
          cx="29"
          cy="29"
          r={radius}
          fill="none"
          stroke={CARD_GOLD}
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[15px] font-bold leading-none" style={{ color: COLORS.brown }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function ClientInfoSection({
  fullName,
  birthDate,
  birthDay,
}: {
  fullName: string;
  birthDate: string;
  birthDay: string;
}) {
  return (
    <section
      className="relative z-10 mx-auto font-nunito-sans"
    >

      <div className="relative flex items-center justify-center px-8 py-2 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "60% 100%",
          height: "100px",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex items-center gap-2 border-r px-3 py-2.5"
          style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
        >
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            style={{ border: `1px solid ${COLORS.gold}`, backgroundColor: COLORS.brown }}
          >
            <UserRound size={35} strokeWidth={1.25} style={{ color: COLORS.cream }} />
          </div>
          <div>
            <p
              className="text-[13px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.gold }}
            >
              FULL NAME
            </p>
            <p
              className="text-[15px] italic leading-tight"
              style={{ color: COLORS.brown, fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {fullName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-2.5">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            style={{ border: `1px solid ${COLORS.gold}`, backgroundColor: COLORS.brown }}
          >
            <Calendar size={35} strokeWidth={1.25} style={{ color: COLORS.cream }} />
          </div>
          <div>
            <p
              className="text-[13px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.gold }}
            >
              DATE OF BIRTH
            </p>
            <p className="text-[15px] font-semibold leading-tight" style={{ color: COLORS.brown }}>
              {birthDate}
            </p>
            <p className="text-[12px] leading-tight" style={{ color: COLORS.brown, opacity: 0.8 }}>
              {birthDay}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

function AlignmentScoreSection({
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
        className="relative h-[190px] w-full flex items-center justify-center px-8 py-4 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/signatureReport/page-8-circle.png')",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/signatureReport/123Icone.png" alt="Numerology Score" width={45} height={45} className="shrink-0" />
          <p
            className="text-[12px] max-w-[180px] text-center font-bold tracking-[0.14em]"
            style={{ color: COLORS.gold }}
          >
            NUMEROLOGY ALIGNMENT SCORE
          </p>
          <p
            className="mt-0.5 text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            {score} / {maxScore}
          </p>
          <PartialStarRating rating={starRating} size={15} />
          <p
            className="mt-1 text-[11px] max-w-[150px] font-semibold"
            style={{ color: COLORS.brown }}
          >
            {scoreLabel}
          </p>
        </div>
      </div>
    </section >
  );
}

function NumerologyCardView({
  index,
  card,
}: {
  index: number;
  card: NumerologyCard;
}) {
  const isVibration = card.variant === "vibration";

  return (
    <div className="relative flex h-[240px] w-[240px] flex-col items-center bg-[url('/assets/signatureReport/cardBG-2.png')] bg-cover bg-center bg-no-repeat text-center">
      <span
        className="absolute left-1/2 top-[13px] z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-[42%] items-center justify-center rounded-full text-[10px] font-bold"
        style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex h-full w-full flex-col items-center justify-between px-3 py-4 mt-5">
        <p
          className="min-h-[26px] px-1 text-[13px] font-bold leading-[1.2] tracking-[0.03em]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <div className="flex w-full items-center justify-center gap-2 px-1">
          {!isVibration ? (
            <div
              className="flex w-17 h-15 flex-col items-center rounded-md px-1.5 py-1"
              style={{
                border: `1px solid ${COLORS.gold}`,
              }}
            >
              <span
                className="text-[6px] font-bold tracking-[0.08em]"
                style={{ color: COLORS.gold }}
              >
                {card.valueLabel}
              </span>
              <span
                className="text-[30px] font-bold leading-none"
                style={{ color: COLORS.brown }}
              >
                {card.value}
              </span>
            </div>
          ) : null}

          {isVibration ? (
            <CircularGauge percent={card.percent} label={card.value} />
          ) : (
            <SemiCircularGauge
              percent={card.percent}
              gaugeId={`numerology-gauge-${index}`}
            />
          )}
        </div>

        <div
          className="rounded-full min-w-[110px] px-5 h-5 flex items-center justify-center"
          style={{ backgroundColor: COLORS.gold }}
        >
          <span
            className="text-[10px] font-bold tracking-[0.05em]"
            style={{ color: COLORS.cream }}
          >
            {card.statusBadge}
          </span>
        </div>

        <p
          className="px-1 text-[11px] font-nunito-sans leading-snug"
          style={{ color: COLORS.brown, opacity: 0.88 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function NumerologicalOverviewSection({
  cards,
  overviewStarRating,
}: {
  cards: NumerologyCard[];
  overviewStarRating: number;
}) {
  return (
    <section className="relative z-10 font-nunito-sans">
      <div
        className="flex flex-col w-full items-center bg-no-repeat px-5 py-2"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >

        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-10" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
          <p
            className="text-[11px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            NUMEROLOGICAL ALIGNMENT OVERVIEW
          </p>
          <span className="h-px w-10" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
        </div>

        <div className="flex items-stretch justify-center px-1 w-full">
          {cards.map((card, index) => {
            const Icon = card.overviewIcon;
            return (
              <div key={card.title} className="flex flex-1 items-stretch">
                {index > 0 ? (
                  <span
                    className="my-2 w-px shrink-0"
                    style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
                  />
                ) : null}

                <div className="flex flex-1 flex-col items-center justify-center gap-1 px-1 py-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                  >
                    <Icon size={45} strokeWidth={1.25} style={{ color: COLORS.brown }} />
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

function NumerologyInterpretationSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 font-nunito-sans">
      <div className="flex min-h-[92px] w-full items-center bg-no-repeat px-5 py-3">
        <Image src="/assets/signatureReport/lotusCircle.png" alt="Interpretation" width={100} height={100} className="shrink-0" />

        <div className="flex min-w-0 flex-1 flex-col items-center px-1">
          <p
            className="text-[12px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            NUMEROLOGY INTERPRETATION
          </p>
          <p
            className="mt-1 max-w-[550px] text-center text-[11px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88, fontFamily: BODY_SANS }}
          >
            {text}
          </p>
        </div>

        <Image src="/assets/signatureReport/lotusCircle.png" alt="Interpretation" width={100} height={100} className="shrink-0" />
      </div>
    </section>
  );
}

export default function NumerologyView({
  pageNumber = "13",
  title = "NUMEROLOGY INTEGRATION",
  subtitle = "Signature & Numbers – A Powerful Alignment",
  fullName = "Rahul Sharma",
  birthDate = "15 August 1992",
  birthDay = "Tuesday",
  alignmentScore = 89,
  maxScore = 100,
  starRating = 4,
  scoreLabel = "Strong Numerological Alignment",
  cards = defaultCards,
  overviewStarRating = 4,
  interpretation = "Your signature is largely aligned with your core numerology numbers. The structure supports confidence, financial growth and balanced expression. The numbers indicate strong potential for success, stability and meaningful progress in both personal and professional life.",
}: NumerologyViewProps) {
  return (
    <SignatureReportPageShell padding="18px 36px 22px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center mt-5">
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
      </header>

      <ClientInfoSection fullName={fullName} birthDate={birthDate} birthDay={birthDay} />

      <AlignmentScoreSection
        score={alignmentScore}
        maxScore={maxScore}
        starRating={starRating}
        scoreLabel={scoreLabel}
      />

      <section className="relative z-10 mt-1 grid grid-cols-3 gap-1.5">
        {cards.map((card, index) => (
          <NumerologyCardView key={card.title} index={index + 1} card={card} />
        ))}
      </section>

      <NumerologicalOverviewSection cards={cards} overviewStarRating={overviewStarRating} />

      <NumerologyInterpretationSection text={interpretation} />
    </SignatureReportPageShell>
  );
}
