import {
  AlertTriangle,
  BarChart3,
  Building2,
  Check,
  Eye,
  Hash,
  HeartHandshake,
  IndianRupee,
  Star,
  Sun,
  Trophy,
  Waves,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

const COLORS = REPORT_COLORS;

const HEADER = {
  maroon: "#4a0e0e",
  gold: "#A96505",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  panelBg: "/assets/signatureReport/foooter-background.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
} as const;

const FINDING_COLORS = {
  working: "#2d7a4f",
  blocking: "#a84432",
  risks: "#d48e31",
  opportunity: "#6b4c9a",
} as const;

export type FactorScore = {
  label: string;
  percent: number;
  icon: LucideIcon;
  isOverall?: boolean;
};

export type KeyFindingCard = {
  title: string;
  items: string[];
  type: keyof typeof FINDING_COLORS;
};

export type ExecutiveSummaryProps = {
  pageNumber?: string;
  sectionTitle?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  businessName?: string;
  businessNumber?: string | number;
  vibration?: string;
  factorScores?: FactorScore[];
  overallScore?: number;
  starRating?: number;
  ratingLabel?: string;
  keyFindings?: KeyFindingCard[];
};

const defaultFactorScores: FactorScore[] = [
  { label: "Brand Energy", percent: 72, icon: Sun },
  { label: "Financial Attraction", percent: 65, icon: IndianRupee },
  { label: "Market Visibility", percent: 80, icon: Eye },
  { label: "Customer Trust", percent: 70, icon: HeartHandshake },
  { label: "Growth Potential", percent: 75, icon: BarChart3 },
  { label: "Overall Score", percent: 72, icon: Trophy, isOverall: true },
];

const defaultKeyFindings: KeyFindingCard[] = [
  {
    title: "WHAT IS WORKING",
    type: "working",
    items: [
      "Strong market visibility energy",
      "Good growth potential alignment",
      "Attracts new opportunities",
    ],
  },
  {
    title: "WHAT IS BLOCKING GROWTH",
    type: "blocking",
    items: [
      "Inconsistent financial flow",
      "Lack of brand energy depth",
      "Weak money alignment",
    ],
  },
  {
    title: "HIDDEN RISKS",
    type: "risks",
    items: [
      "Energy leakage in operations",
      "Decision delays",
      "Over-dependence on key resources",
    ],
  },
  {
    title: "BIGGEST OPPORTUNITY",
    type: "opportunity",
    items: [
      "Strengthen financial energy",
      "Improve brand trust",
      "Expand market visibility",
    ],
  },
];

function OrnamentDivider({ width = 280 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      aria-hidden
    />
  );
}

function StarRating({ count, max = 5, size = 12 }: { count: number; max?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, index) => {
        const filled = count >= index + 1;
        const half = !filled && count >= index + 0.5;
        return (
          <Star
            key={`exec-star-${index}`}
            size={size}
            fill={filled || half ? COLORS.gold : "none"}
            stroke={COLORS.gold}
            strokeWidth={half ? 1.5 : 2}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

function PageTitleBar({ pageNumber, title }: { pageNumber: string; title: string }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative">
        <Image src='/assets/business-name-report/top-effect.png' alt="Client" width={400} height={50} />
        <div className="absolute top-[50%] transform -translate-y-1/2 left-16 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[22px] font-bold text-white">
          {pageNumber}
        </div>
        <h2 className="absolute top-[50%] transform -translate-y-1/2 right-12 shrink-0 text-center text-[10px] font-bold tracking-[0.08em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function InfoColumn({
  icon: Icon,
  label,
  children,
  showDivider,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  showDivider?: boolean;
}) {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-3 py-5 text-center">
      {showDivider ? (
        <div
          className="absolute left-0 top-[12%] h-[76%] w-px"
          style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
        />
      ) : null}
      <div
        className="mb-1.5 flex h-[50px] w-[50px] items-center justify-center rounded-full"
        style={{ border: `1.5px solid ${COLORS.gold}`, backgroundColor: "rgba(253, 245, 230, 0.7)" }}
      >
        <Icon size={20} strokeWidth={2} style={{ color: COLORS.gold }} />
      </div>
      <p
        className="text-[12px] font-bold tracking-[0.1em]"
        style={{ color: COLORS.gold }}
      >
        {label}
      </p>
      <div className="mt-1.5 w-full">{children}</div>
    </div>
  );
}

function FactorProgressBar({ percent, isOverall }: { percent: number; isOverall?: boolean }) {
  return (
    <div
      className="h-[7px] flex-1 overflow-hidden rounded-full"
      style={{ backgroundColor: "rgba(184, 134, 11, 0.18)" }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${percent}%`,
          background: isOverall
            ? `linear-gradient(90deg, ${HEADER.maroon}, ${COLORS.brown})`
            : `linear-gradient(90deg, ${COLORS.goldLight}, ${COLORS.brown})`,
        }}
      />
    </div>
  );
}

function OverallScoreGauge({ percent }: { percent: number }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex h-[148px] w-[148px] items-center justify-center">
      <svg viewBox="0 0 112 112" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="56" cy="56" r={radius} fill="none" stroke="#F0E0C8" strokeWidth="8" />
        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke={COLORS.gold}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-[10px] font-bold tracking-widest"
          style={{ color: COLORS.gold }}
        >
          OVERALL SCORE
        </span>
        <span className="text-[30px] font-bold leading-none" style={{ color: COLORS.brown }}>
          {percent}%
        </span>
        <Pattern3 size={18} className="mt-1 opacity-70" />
      </div>
    </div>
  );
}

function FindingIcon({ type }: { type: keyof typeof FINDING_COLORS }) {
  const color = FINDING_COLORS[type];
  const iconProps = { size: 12, strokeWidth: 2.5, style: { color: "#fff" } as const };

  return (
    <div
      className="mb-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
    >
      {type === "working" && <Check {...iconProps} />}
      {type === "blocking" && <X {...iconProps} />}
      {type === "risks" && <AlertTriangle {...iconProps} />}
      {type === "opportunity" && <Star {...iconProps} fill="#fff" />}
    </div>
  );
}

function KeyFindingBox({ card }: { card: KeyFindingCard }) {
  const accent = FINDING_COLORS[card.type];

  return (
    <div
      className="flex h-full min-h-0 flex-col bg-no-repeat px-2.5 py-2"
      style={{
        backgroundSize: "100% 100%",
        border: `1.5px solid ${accent}`,
        borderRadius: "8px",
      }}
    >
      <div className="flex items-center text-center gap-2">
        <FindingIcon type={card.type} />
        <p
          className="text-[12px] font-bold tracking-[0.06em] leading-none text-start"
          style={{ color: accent }}
        >
          {card.title}
        </p>
      </div>
      <ul className="mt-2 flex-1 space-y-1 pl-2.5">
        {card.items.map((item) => (
          <li
            key={item}
            className="list-disc text-[12px] leading-relaxed marker:text-[6px]"
            style={{ color: COLORS.black, opacity: 0.88 }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExecutiveSummary({
  pageNumber = "03",
  sectionTitle = "EXECUTIVE BUSINESS ENERGY SUMMARY",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  businessName = "ANANTAX TECHNOLOGIES PVT LTD",
  businessNumber = 13,
  vibration = "MODERATE – HIGH",
  factorScores = defaultFactorScores,
  overallScore = 72,
  starRating = 4.5,
  ratingLabel = "GOOD",
  keyFindings = defaultKeyFindings,
}: ExecutiveSummaryProps) {
  const regularFactors = factorScores.filter((f) => !f.isOverall);
  const overallFactor = factorScores.find((f) => f.isOverall);

  return (
    <BusinessNameReportPageShell padding="16px 34px 22px" pageNumber={pageNumber}>
      <div className="relative flex h-full min-h-0 flex-col font-nunito-sans">
        <Image
          src={ASSETS.sunCompass}
          alt=""
          width={100}
          height={100}
          className="pointer-events-none absolute left-[-4px] top-[68px] opacity-35"
          aria-hidden
        />
        <Image
          src={ASSETS.horoscopeWheel}
          alt=""
          width={100}
          height={100}
          className="pointer-events-none absolute right-[-4px] top-[68px] opacity-35"
          aria-hidden
        />

        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image
            src={ASSETS.logo}
            alt="Astro Aarambh"
            width={82}
            height={82}
            className="mb-1"
            priority
          />

          <h1
            className="text-[30px] font-bold leading-none tracking-[0.08em]"
            style={{ color: HEADER.maroon }}
          >
            ASTRO AARAMBH
          </h1>

          <p
            className="mt-1.5 text-[14px] font-bold tracking-[0.06em]"
            style={{ color: HEADER.gold }}
          >
            {reportTitle}
          </p>

          <p
            className="mt-1 max-w-[580px] text-[8.5px] font-semibold tracking-widest"
            style={{ color: COLORS.black, opacity: 0.85 }}
          >
            {reportSubtitle}
          </p>

          <div className="mt-2">
            <OrnamentDivider width={220} />
          </div>
        </header>

        <PageTitleBar pageNumber={pageNumber} title={sectionTitle} />

        <section
          className="relative z-10 mt-3 shrink-0 overflow-hidden"
          style={{
            backgroundImage: `url('${ASSETS.panelBg}')`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="grid grid-cols-3">
            <InfoColumn icon={Building2} label="CURRENT BUSINESS NAME">
              <p
                className="text-[10px] font-bold leading-snug tracking-[0.04em]"
                style={{ color: COLORS.brown, fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {businessName}
              </p>
            </InfoColumn>

            <InfoColumn icon={Hash} label="CURRENT BUSINESS NUMBER" showDivider>
              <div
                className="mx-auto inline-block rounded-sm px-4 py-1"
                style={{ border: `1.5px solid ${COLORS.gold}` }}
              >
                <span className="text-[16px] font-bold" style={{ color: COLORS.brown }}>
                  {businessNumber}
                </span>
              </div>
            </InfoColumn>

            <InfoColumn icon={Waves} label="CURRENT VIBRATION" showDivider>
              <div
                className="mx-auto inline-block rounded-sm px-3 py-1"
                style={{ border: `1.5px solid ${COLORS.gold}` }}
              >
                <span className="text-[12px] font-bold tracking-[0.04em]" style={{ color: COLORS.brown }}>
                  {vibration}
                </span>
              </div>
            </InfoColumn>
          </div>
        </section>

        <section className="relative z-10 mt-3 grid flex-[1.15] grid-cols-[1fr_230px] gap-3">
          <div className="flex flex-col rounded-sm"
            style={{ border: `1px solid rgba(184, 134, 11, 0.4)` }}
          >
            <div
              className="grid shrink-0 grid-cols-[1fr_58px] px-3 py-2"
              style={{ backgroundColor: HEADER.maroon }}
            >
              <span className="text-[12px] font-bold tracking-[0.1em] text-white">FACTOR</span>
              <span className="text-right text-[12px] font-bold tracking-[0.1em] text-white">SCORE</span>
            </div>

            <div className="flex flex-1 flex-col">
              {regularFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div
                    key={factor.label}
                    className="grid grid-cols-[18px_1fr_58px] items-center gap-x-2 px-3 py-[15px]"
                    style={{ borderBottom: `1px solid rgba(184, 134, 11, 0.22)` }}
                  >
                    <Icon size={22} strokeWidth={1.75} style={{ color: COLORS.gold }} aria-hidden />
                    <div className="flex min-w-0 items-center gap-2">
                      <span
                        className="w-[100px] shrink-0 text-[12px] font-semibold"
                        style={{ color: COLORS.brown }}
                      >
                        {factor.label}
                      </span>
                      <FactorProgressBar percent={factor.percent} />
                    </div>
                    <span
                      className="text-right text-[16px] font-bold"
                      style={{ color: COLORS.brown }}
                    >
                      {factor.percent}%
                    </span>
                  </div>
                );
              })}

              {overallFactor ? (
                <div
                  className="grid grid-cols-[18px_1fr_58px] items-center gap-x-2 px-3 py-[18px]"
                  style={{ backgroundColor: "rgba(93, 46, 23, 0.07)" }}
                >
                  <Trophy size={18} strokeWidth={2} style={{ color: COLORS.brown }} aria-hidden />
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="w-[100px] shrink-0 text-[14px] font-bold"
                      style={{ color: COLORS.brown }}
                    >
                      {overallFactor.label}
                    </span>
                    <FactorProgressBar percent={overallFactor.percent} isOverall />
                  </div>
                  <span
                    className="text-right text-[16px] font-bold"
                    style={{ color: COLORS.brown }}
                  >
                    {overallFactor.percent}%
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div
            className="flex h-full flex-col items-center justify-center bg-no-repeat px-2 py-3"
            style={{
              // backgroundImage: `url('${ASSETS.panelBg}')`,
              backgroundSize: "100% 100%",
              border: `1px solid rgba(184, 134, 11, 0.4)`,
              borderRadius: "6px",
            }}
          >
            <OverallScoreGauge percent={overallScore} />
            <StarRating count={starRating} size={16} />
            <div className="mt-5 flex w-full items-center justify-center gap-1.5 px-1">
              <Pattern3 size={22} />
              <span
                className="text-[18px] font-bold tracking-widest"
                style={{ color: COLORS.brown }}
              >
                {ratingLabel}
              </span>
              <Pattern3 size={22} className="rotate-180" />
            </div>
          </div>
        </section>

        <section className="relative z-10 mt-3 flex min-h-0 flex-1 flex-col">
          <div className="mb-2 flex shrink-0 items-center justify-center gap-2.5">
            <div className="h-px w-20" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
            <Pattern3 size={22} />
            <h3
              className="text-[14px] font-bold tracking-widest"
              style={{ color: COLORS.brown }}
            >
              KEY FINDINGS
            </h3>
            <Pattern3 size={22} className="rotate-180" />
            <div className="h-px w-20" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-4 gap-2">
            {keyFindings.map((card) => (
              <KeyFindingBox key={card.title} card={card} />
            ))}
          </div>
        </section>

        <footer className="relative z-10 mt-3 shrink-0 pt-1">
          <div className="flex justify-center">
            <OrnamentDivider width={220} />
          </div>
        </footer>
      </div>
    </BusinessNameReportPageShell>
  );
}
