import {
  Check,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import PalmReadingReportPageShell, {
  PalmReadingPageHeader,
  PalmReadingSectionBar,
  REPORT_COLORS,
} from "./PalmReadingReportPageShell";

const COLORS = REPORT_COLORS;

const HEADER = {
  maroon: "#4a0e0e",
  maroonDeep: "#3a0a0a",
  gold: "#A96505",
  goldBright: "#c9a227",
  body: "#2c1810",
  iconCircle: "#5c2a16",
} as const;

const ASSETS = {
  palmDiagram: "/assets/palm-reading-report/life-line/life-line-palm-clear.png",
  palmInset: "/assets/palm-reading-report/life-line/life-branch-inset-clear.png",
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  indicatesFrame: "/assets/palm-reading-report/marriage/pattern-frame-v3-clear.png",
  icons: {
    runner: "/assets/palm-reading-report/life-line/icon-runner-clear.png",
    persistence: "/assets/palm-reading-report/life-line/icon-persistence-clear.png",
    shield: "/assets/palm-reading-report/life-line/icon-shield-clear.png",
    recovery: "/assets/palm-reading-report/life-line/icon-recovery-clear.png",
    sun: "/assets/palm-reading-report/life-line/icon-sun-clear.png",
    globe: "/assets/palm-reading-report/life-line/icon-globe-clear.png",
    travel: "/assets/palm-reading-report/life-line/icon-travel-clear.png",
    relocation: "/assets/palm-reading-report/life-line/icon-relocation-clear.png",
    environment: "/assets/palm-reading-report/life-line/icon-environment-clear.png",
    lifestyle: "/assets/palm-reading-report/life-line/icon-lifestyle-clear.png",
    transition: "/assets/palm-reading-report/life-line/icon-transition-clear.png",
  },
} as const;

export type LifeLinePoint = {
  text: string;
  icon?: LucideIcon;
  iconSrc?: string;
};

export type LifeLineIndicateItem = {
  title: string;
  text: string;
  icon?: LucideIcon;
  iconSrc?: string;
};

export type LifeLineAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  introText?: string;
  overviewTitle?: string;
  overviewPoints?: LifeLinePoint[];
  branchingTitle?: string;
  branchingItems?: LifeLinePoint[];
  branchingIntro?: string;
  branchingNote?: string;
  observationText?: string;
  indicatesTitle?: string;
  indicateItems?: LifeLineIndicateItem[];
  footerQuote?: string;
};

const defaultOverviewPoints: LifeLinePoint[] = [
  {
    icon: Check,
    text: "Life Line clear और reasonably deep है।",
  },
  {
    icon: Check,
    text: "यह Venus Mount को अच्छी तरह surround करती है।",
  },
  {
    icon: Check,
    text: "Traditional palmistry में इसे अच्छी vitality, persistence और challenges handle करने की क्षमता से जोड़ा जाता है।",
  },
];

const defaultBranchingItems: LifeLinePoint[] = [
  { iconSrc: ASSETS.icons.travel, text: "Travel" },
  { iconSrc: ASSETS.icons.relocation, text: "Relocation" },
  { iconSrc: ASSETS.icons.environment, text: "Environment Change" },
  { iconSrc: ASSETS.icons.lifestyle, text: "नई Lifestyle" },
  { iconSrc: ASSETS.icons.transition, text: "Major Personal Transition" },
];

const defaultIndicateItems: LifeLineIndicateItem[] = [
  {
    iconSrc: ASSETS.icons.runner,
    title: "Good Vitality",
    text: "ऊर्जा और जीवन शक्ति अच्छी रह सकती है।",
  },
  {
    iconSrc: ASSETS.icons.persistence,
    title: "Persistence",
    text: "चुनौतियों में टिके रहने की क्षमता।",
  },
  {
    iconSrc: ASSETS.icons.shield,
    title: "Adaptability",
    text: "बदलाव के साथ समायोजन की शक्ति।",
  },
  {
    iconSrc: ASSETS.icons.recovery,
    title: "Recovery Power",
    text: "थकान के बाद फिर उठने की क्षमता।",
  },
  {
    iconSrc: ASSETS.icons.sun,
    title: "Long-term Stability",
    text: "दीर्घकालिक स्थिरता का संकेत।",
  },
];


function GoldDiamond({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 0.5L7.1 4.4L11.2 4.6L8 7.2L9 11.2L6 9L3 11.2L4 7.2L0.8 4.6L4.9 4.4L6 0.5Z"
        fill={HEADER.goldBright}
      />
    </svg>
  );
}

function SectionTitleBar({
  title,
  titleIcon,
}: {
  title: string;
  titleIcon?: LucideIcon;
}) {
  const Icon = titleIcon;
  return (
    <PalmReadingSectionBar
      title={title}
      icon={
        Icon ? (
          <Icon size={16} strokeWidth={2.2} style={{ color: HEADER.maroonDeep }} />
        ) : (
          <CoverLotus size={22} />
        )
      }
      minWidth={480}
    />
  );
}

function IconBadge({
  icon: Icon,
  iconSrc,
  size = 26,
}: {
  icon?: LucideIcon;
  iconSrc?: string;
  size?: number;
}) {
  if (iconSrc) {
    return (
      <Image
        src={iconSrc}
        alt=""
        width={size}
        height={size}
        className="shrink-0 object-contain"
        style={{ width: size, height: size }}
        aria-hidden
        unoptimized
      />
    );
  }

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(180deg, #7a3a22 0%, ${HEADER.iconCircle} 100%)`,
        boxShadow: `0 0 0 1.3px ${HEADER.goldBright}`,
      }}
    >
      {Icon ? (
        <Icon
          size={Math.round(size * 0.52)}
          strokeWidth={2}
          color="#f6e7c8"
        />
      ) : null}
    </div>
  );
}

function QuoteFrame({ children }: { children: ReactNode }) {
  const VB_W = 1000;
  const VB_H = 160;
  const r = 38;
  const strokeWidth = 2.6;
  const inset = strokeWidth / 2;
  const framePath = `
    M ${inset + r} ${inset}
    H ${VB_W - inset - r}
    A ${r} ${r} 0 0 1 ${VB_W - inset} ${inset + r}
    V ${VB_H - inset - r}
    A ${r} ${r} 0 0 1 ${VB_W - inset - r} ${VB_H - inset}
    H ${inset + r}
    A ${r} ${r} 0 0 1 ${inset} ${VB_H - inset - r}
    V ${inset + r}
    A ${r} ${r} 0 0 1 ${inset + r} ${inset}
    Z
  `;
  const innerInset = inset + 6;
  const innerR = Math.max(r - 5, 18);
  const innerPath = `
    M ${innerInset + innerR} ${innerInset}
    H ${VB_W - innerInset - innerR}
    A ${innerR} ${innerR} 0 0 1 ${VB_W - innerInset} ${innerInset + innerR}
    V ${VB_H - innerInset - innerR}
    A ${innerR} ${innerR} 0 0 1 ${VB_W - innerInset - innerR} ${VB_H - innerInset}
    H ${innerInset + innerR}
    A ${innerR} ${innerR} 0 0 1 ${innerInset} ${VB_H - innerInset - innerR}
    V ${innerInset + innerR}
    A ${innerR} ${innerR} 0 0 1 ${innerInset + innerR} ${innerInset}
    Z
  `;

  return (
    <div className="relative w-full max-w-[680px]" style={{ height: 72 }}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="life-quote-frame-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a84b" />
            <stop offset="50%" stopColor="#b8862f" />
            <stop offset="100%" stopColor="#d4a84b" />
          </linearGradient>
        </defs>
        <path
          d={framePath}
          fill="none"
          stroke="url(#life-quote-frame-gold)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={innerPath}
          fill="none"
          stroke="rgba(166, 110, 40, 0.75)"
          strokeWidth={1.2}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative z-10 flex h-full w-full items-center px-8 py-2">
        {children}
      </div>
    </div>
  );
}

function FramedCard({
  children,
  className = "",
  minHeight = 0,
  contentClassName = "px-4 py-3.5",
}: {
  children: ReactNode;
  className?: string;
  minHeight?: number;
  contentClassName?: string;
}) {
  return (
    <div
      className={`relative flex h-full min-h-0 min-w-0 flex-col rounded-[14px] ${className}`}
      style={{
        minHeight,
        border: `1.5px solid rgba(93,46,23,0.55)`,
        boxShadow: `inset 0 0 0 1.2px rgba(201,162,39,0.32)`,
      }}
    >
      <div className={`relative z-10 flex h-full min-h-0 flex-col ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}

function OverviewPalmFrame({
  title,
  points,
  observationText,
}: {
  title: string;
  points: LifeLinePoint[];
  observationText: string;
}) {
  return (
    <FramedCard className="min-w-0 flex-[1.75]" contentClassName="px-4 pb-3.5 pt-3">
      <div className="mb-2.5 flex w-full shrink-0 items-center justify-center gap-2">
        <GoldDiamond size={10} />
        <p
          className="min-w-0 text-center text-[15px] font-bold tracking-[0.06em] font-cinzel"
          style={{ color: HEADER.maroon }}
        >
          {title}
        </p>
        <GoldDiamond size={10} />
      </div>

      {/* Relative canvas so palm → inset connectors span the whole frame */}
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="grid min-h-0 flex-1 grid-cols-[1.12fr_0.98fr] items-stretch gap-3">
          <div className="flex min-h-0 flex-col justify-center gap-0 py-1">
            {points.map((point, index) => (
              <div key={point.text} className="shrink-0">
                {index > 0 ? (
                  <div
                    className="my-2.5 border-t border-dashed"
                    style={{ borderColor: "rgba(169, 101, 5, 0.5)" }}
                    aria-hidden
                  />
                ) : null}
                <div className="flex items-start gap-2.5">
                  <IconBadge icon={point.icon} iconSrc={point.iconSrc} size={28} />
                  <p
                    className="min-w-0 flex-1 pt-0.5 text-[14.5px] leading-[1.4] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative min-h-0 min-w-0">
            <Image
              src={ASSETS.palmDiagram}
              alt="Life line on palm"
              fill
              sizes="240px"
              className="object-contain object-center"
              priority
              unoptimized
            />
            <span className="absolute right-[14%] top-[6%]">
              <GoldDiamond size={8} />
            </span>
            <span className="absolute right-[4%] top-[18%]">
              <GoldDiamond size={7} />
            </span>
            <span className="absolute left-[8%] top-[14%]">
              <GoldDiamond size={6} />
            </span>
          </div>
        </div>

        <div className="relative z-[2] mt-2 grid h-[96px] shrink-0 grid-cols-[96px_1fr] items-center gap-3">
          <div className="relative h-[96px] w-[96px] shrink-0">
            <Image
              src={ASSETS.palmInset}
              alt="Life line outward branching zoom"
              fill
              sizes="96px"
              className="object-contain object-center"
              unoptimized
            />
          </div>

          <div
            className="relative flex h-full min-w-0 items-center justify-center rounded-[12px] px-3.5 py-2.5"
            style={{
              border: `1.4px solid ${HEADER.goldBright}`,
              boxShadow: `inset 0 0 0 1px rgba(201,162,39,0.28)`,
            }}
          >
            <div className="flex w-full flex-col items-center justify-center gap-1 text-center">
              <CoverLotus size={22} className="shrink-0" />
              <p
                className="text-[12px] font-bold tracking-[0.05em] font-cinzel"
                style={{ color: HEADER.maroon }}
              >
                IMPORTANT OBSERVATION
              </p>
              <p
                className="text-[13.5px] font-semibold leading-[1.35] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                {observationText}
              </p>
            </div>
          </div>
        </div>

        {/* Dashed zoom connectors: palm hotspot → inset circle */}
        <svg
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line
            x1="68"
            y1="52"
            x2="12"
            y2="78"
            stroke={HEADER.gold}
            strokeWidth="0.45"
            strokeDasharray="1.2 0.9"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.95}
          />
          <line
            x1="74"
            y1="56"
            x2="22"
            y2="78"
            stroke={HEADER.gold}
            strokeWidth="0.45"
            strokeDasharray="1.2 0.9"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.95}
          />
        </svg>
      </div>
    </FramedCard>
  );
}

function BranchingFrame({
  title,
  intro,
  items,
  note,
}: {
  title: string;
  intro: string;
  items: LifeLinePoint[];
  note: string;
}) {
  return (
    <FramedCard className="min-w-0 flex-1" contentClassName="px-4 py-3.5">
      <div className="mb-2 flex shrink-0 items-center justify-center gap-1.5">
        <GoldDiamond size={9} />
        <p
          className="min-w-0 text-center text-[14px] font-bold leading-[1.2] tracking-[0.03em] font-cinzel"
          style={{ color: HEADER.maroon }}
        >
          {title}
        </p>
        <GoldDiamond size={9} />
      </div>

      <p
        className="mb-2.5 shrink-0 text-center text-[13px] leading-[1.35] font-nunito-sans"
        style={{ color: HEADER.body }}
      >
        {intro}
      </p>

      <div className="flex min-h-0 flex-1 flex-col justify-evenly gap-0 py-0.5">
        {items.map((item, index) => (
          <div key={item.text} className="shrink-0">
            {index > 0 ? (
              <div
                className="mb-2 border-t border-dashed"
                style={{ borderColor: "rgba(169, 101, 5, 0.45)" }}
                aria-hidden
              />
            ) : null}
            <div className="flex items-center gap-3">
              <IconBadge icon={item.icon} iconSrc={item.iconSrc} size={32} />
              <p
                className="min-w-0 flex-1 text-[15px] font-semibold leading-[1.3] font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-2.5 flex h-[96px] shrink-0 items-center gap-2.5 rounded-[12px] px-3.5 py-2.5"
        style={{
          border: `1.4px solid ${HEADER.goldBright}`,
          boxShadow: `inset 0 0 0 1px rgba(201,162,39,0.28)`,
        }}
      >
        <Image
          src={ASSETS.icons.globe}
          alt=""
          width={28}
          height={28}
          className="h-[28px] w-[28px] shrink-0 object-contain"
          aria-hidden
          unoptimized
        />
        <p
          className="min-w-0 flex-1 text-[13px] leading-[1.4] font-nunito-sans"
          style={{ color: HEADER.body }}
        >
          {note}
        </p>
      </div>
    </FramedCard>
  );
}

function IndicatesSection({
  title,
  items,
}: {
  title: string;
  items: LifeLineIndicateItem[];
}) {
  return (
    <div className="relative mt-2 w-full shrink-0" style={{ minHeight: 148 }}>
      <Image
        src={ASSETS.indicatesFrame}
        alt=""
        fill
        sizes="720px"
        className="pointer-events-none z-0 select-none object-fill"
        aria-hidden
        unoptimized
      />

      <div
        className="absolute left-1/2 z-20 flex -translate-x-1/2 items-center justify-center px-3"
        style={{ top: "13.5%", height: "8.5%", width: "42%", maxWidth: 340 }}
      >
        <p
          className="w-full truncate text-center text-[10.5px] font-bold leading-none tracking-wide text-white font-nunito-sans"
          style={{ textShadow: "0 1px 1px rgba(0,0,0,0.35)" }}
        >
          {title}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-5 gap-1 px-3.5 pb-3 pt-10">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="relative flex min-w-0 flex-col items-center px-1 text-center"
          >
            {index > 0 ? (
              <div
                className="absolute bottom-2 left-0 top-2 w-px border-l border-dashed"
                style={{ borderColor: "rgba(160,110,40,0.45)" }}
                aria-hidden
              />
            ) : null}
            <IconBadge icon={item.icon} iconSrc={item.iconSrc} size={34} />
            <p
              className="mt-1.5 text-[9.5px] font-bold leading-[1.15] tracking-wide font-cinzel"
              style={{ color: HEADER.maroon }}
            >
              {item.title}
            </p>
            <p
              className="mt-1 text-[9px] leading-[1.35] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LifeLineAnalysis({
  pageNumber = "09",
  sectionTitle = "8. LIFE LINE — VITALITY & MAJOR LIFE CHANGES",
  introText = "आपकी Life Line clear, reasonably deep और Venus Mount को अच्छी तरह surround करती दिखाई देती है।",
  overviewTitle = "LIFE LINE OVERVIEW",
  overviewPoints = defaultOverviewPoints,
  branchingTitle = "OUTWARD BRANCHING SIGNIFIES",
  branchingItems = defaultBranchingItems,
  branchingIntro = "ऐसी branching को traditional palmistry में अक्सर निम्न से जोड़ा जाता है:",
  branchingNote = "ये branches सिर्फ foreign travel नहीं, बल्कि शहर बदलना, career के लिए स्थान परिवर्तन या जीवन प्राथमिकताओं में बदलाव भी दर्शा सकते हैं।",
  observationText = "Life Line के middle section में हल्की outward branching दिखाई देती है।",
  indicatesTitle = "LIFE LINE INDICATES",
  indicateItems = defaultIndicateItems,
  footerQuote = "चुनौतियाँ आपकी यात्रा को रोक नहीं सकतीं, क्योंकि आपकी ऊर्जा और हिम्मत आपको आगे बढ़ाती है।",
}: LifeLineAnalysisProps) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="palm-life-line-analysis"
    >
      <div className="relative flex h-full min-h-0 flex-col">
        <PalmReadingPageHeader />

        <div className="mt-1.5 shrink-0">
          <SectionTitleBar title={sectionTitle} titleIcon={Leaf} />
        </div>

        <div
          className="relative mt-2 flex w-full shrink-0 items-center"
          style={{
            minHeight: 58,
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: "transparent",
            borderTopWidth: 14,
            borderBottomWidth: 14,
            borderLeftWidth: 20,
            borderRightWidth: 20,
            borderImageSource: `url(${ASSETS.introFrame})`,
            borderImageSlice: "55 70 55 70",
            borderImageWidth: "14px 20px",
            borderImageRepeat: "stretch",
          }}
        >
          <div className="relative z-10 flex w-full items-center gap-2 px-1 py-0.5">
            <CoverLotus size={40} className="shrink-0" />
            <p
              className="min-w-0 flex-1 text-center text-[12px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              {introText}
            </p>
            <CoverLotus size={40} className="shrink-0" />
          </div>
        </div>

        <div className="mt-2 flex min-h-0 flex-1 items-stretch gap-2.5">
          <OverviewPalmFrame
            title={overviewTitle}
            points={overviewPoints}
            observationText={observationText}
          />
          <BranchingFrame
            title={branchingTitle}
            intro={branchingIntro}
            items={branchingItems}
            note={branchingNote}
          />
        </div>

        <IndicatesSection title={indicatesTitle} items={indicateItems} />

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-center gap-2">
            <CoverLotus size={22} />
            <QuoteFrame>
              <p
                className="w-full text-center text-[12px] leading-[1.35] font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                “{footerQuote}”
              </p>
            </QuoteFrame>
            <CoverLotus size={22} />
          </div>

          <div className="mt-1.5 flex w-full items-center justify-end gap-2 pr-1">
            <Pattern3 size={28} />
            <p
              className="text-[11px] font-bold tracking-[0.14em]"
              style={{ color: COLORS.brown }}
            >
              {pageNumber}
            </p>
            <Pattern3 size={28} className="rotate-180" />
          </div>
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
