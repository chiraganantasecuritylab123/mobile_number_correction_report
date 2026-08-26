import {
  Handshake,
  IndianRupee,
  MessagesSquare,
  Target,
  User,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import PalmReadingReportPageShell, {
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
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  lovePalmCouple: "/assets/palm-reading-report/love-relationship/love-palm-couple-clear.png",
  summaryFrame: "/assets/palm-reading-report/love-relationship/summary-frame-clear.png",
  panelFrame: "/assets/palm-reading-report/love-relationship/panel-frame-clear.png",
  adviceFrame: "/assets/palm-reading-report/love-relationship/advice-frame-clear.png",
  icons: {
    heart: "/assets/palm-reading-report/icons/heart-gold.png",
    hand: "/assets/palm-reading-report/icons/hand.png",
    target: "/assets/palm-reading-report/icons/target.png",
    group: "/assets/palm-reading-report/love-relationship/icon-group-clear.png",
    lock: "/assets/palm-reading-report/love-relationship/icon-lock-clear.png",
    brokenHeart: "/assets/palm-reading-report/love-relationship/icon-broken-heart-clear.png",
    speechBubble: "/assets/palm-reading-report/love-relationship/icon-speech-bubble-clear.png",
    thinkingMan: "/assets/palm-reading-report/love-relationship/icon-thinking-man-clear.png",
  },
} as const;

export type LovePoint = {
  icon?: LucideIcon;
  iconSrc?: string;
  text: string;
};

export type LoveRelationshipReadingProps = {
  pageNumber?: string;
  sectionTitle?: string;
  summaryText?: string;
  idealTitle?: string;
  idealPoints?: LovePoint[];
  patternTitle?: string;
  patternParagraphs?: string[];
  challengeLabel?: string;
  challengeText?: string;
  adviceLead?: string;
  adviceHighlight?: string;
  adviceTail?: string;
  adviceQuote?: string;
  guidanceTitle?: string;
  guidanceText?: string;
};

const defaultIdealPoints: LovePoint[] = [
  { icon: Handshake, text: "एक-दूसरे को Respect करें" },
  { icon: User, text: "एक-दूसरे को Personal Space दें" },
  {
    icon: IndianRupee,
    text: "Financial और Emotional Responsibilities समझें",
  },
  { icon: MessagesSquare, text: "Communication खुला रखें" },
  { icon: Target, text: "Long-term Goals Discuss करें" },
];

const defaultPatternParagraphs = [
  "शुरुआती phase में attraction important हो सकता है, लेकिन long-term relationship के लिए आपका mind compatibility को ज्यादा importance देने लगता है।",
  "इसलिए उम्र और experience के साथ relationship choices ज्यादा mature होने की tendency हो सकती है।",
];

function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width }}>
      <Image
        src={ASSETS.pattern2}
        alt=""
        width={width}
        height={Math.round(width * 0.12)}
        className="h-auto w-full object-contain"
        aria-hidden
      />
    </div>
  );
}

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
  titleIconSrc,
}: {
  title: string;
  titleIconSrc?: string;
}) {
  return (
    <div className="flex w-full max-w-full items-center gap-2">
      <Pattern3 size={36} />
      <div
        className="relative flex h-[42px] min-w-0 flex-1 items-center rounded-full pl-[48px] pr-5"
        style={{
          background: `linear-gradient(180deg, #6b1f1f 0%, ${HEADER.maroon} 50%, ${HEADER.maroonDeep} 100%)`,
          boxShadow: `inset 0 0 0 1.5px ${HEADER.goldBright}`,
        }}
      >
        <div
          className="absolute left-[4px] top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(180deg, #7a2424 0%, ${HEADER.maroon} 100%)`,
            boxShadow: `0 0 0 2px ${HEADER.goldBright}`,
          }}
        >
          <CoverLotus size={22} className="opacity-100 brightness-125" />
        </div>
        <p
          className="flex items-center gap-1.5 truncate text-[13px] font-bold tracking-wide text-white font-nunito-sans"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
        >
          {titleIconSrc ? (
            <Image
              src={titleIconSrc}
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] shrink-0 object-contain"
              aria-hidden
            />
          ) : null}
          {title}
        </p>
      </div>
      <Pattern3 size={36} className="rotate-180" />
    </div>
  );
}

function ContentPanel({ children }: { children: ReactNode }) {
  // Frame asset is 646×943 — lock that ratio so notches render at true size.
  const FRAME_H = 360;
  const FRAME_W = Math.round((FRAME_H * 646) / 943);

  return (
    <div
      className="relative mx-auto flex shrink-0 flex-col"
      style={{
        width: FRAME_W,
        height: FRAME_H,
        maxWidth: "100%",
      }}
    >
      <Image
        src={ASSETS.panelFrame}
        alt=""
        fill
        sizes={`${FRAME_W}px`}
        className="pointer-events-none z-0 select-none object-fill"
        aria-hidden
      />
      <div className="relative z-10 flex h-full min-w-0 flex-col overflow-hidden px-3.5 py-3.5">
        {children}
      </div>
    </div>
  );
}

/**
 * Uses the provided gold notched-frame PNG via CSS border-image (9-slice)
 * so corners keep their shape and only the straight edges stretch.
 */
function SummaryBannerFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative mt-2.5 flex w-full shrink-0 items-center"
      style={{
        minHeight: 70,
        boxSizing: "border-box",
        borderStyle: "solid",
        borderColor: "transparent",
        borderTopWidth: 18,
        borderBottomWidth: 18,
        borderLeftWidth: 24,
        borderRightWidth: 24,
        borderImageSource: `url(${ASSETS.summaryFrame})`,
        borderImageSlice: "70 90 70 90",
        borderImageWidth: "18px 24px",
        borderImageRepeat: "stretch",
        background:
          "linear-gradient(180deg, rgba(255,252,245,0.55) 0%, rgba(255,248,235,0.35) 100%)",
      }}
    >
      <div className="relative z-10 flex w-full items-center gap-2.5 px-1 py-1.5">
        {children}
      </div>
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
    <div className="relative w-full" style={{ height: 72 }}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="love-quote-frame-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a84b" />
            <stop offset="50%" stopColor="#b8862f" />
            <stop offset="100%" stopColor="#d4a84b" />
          </linearGradient>
        </defs>
        <path
          d={framePath}
          fill="none"
          stroke="url(#love-quote-frame-gold)"
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

function IdealPointRow({ point }: { point: LovePoint }) {
  const Icon = point.icon;
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      {point.iconSrc ? (
        <Image
          src={point.iconSrc}
          alt=""
          width={32}
          height={32}
          className="h-[32px] w-[32px] shrink-0 object-contain"
          aria-hidden
        />
      ) : Icon ? (
        <div
          className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(180deg, #7a3a22 0%, ${HEADER.iconCircle} 100%)`,
            boxShadow: `0 0 0 1.2px ${HEADER.goldBright}`,
          }}
          aria-hidden
        >
          <Icon size={15} strokeWidth={2} color="#f6e7c8" />
        </div>
      ) : null}
      <p
        className="min-w-0 flex-1 text-[13.5px] leading-[1.4] font-nunito-sans"
        style={{ color: HEADER.body }}
      >
        {point.text}
      </p>
    </div>
  );
}

export default function LoveRelationshipReading({
  pageNumber = "07",
  sectionTitle = "6. LOVE & RELATIONSHIP READING",
  summaryText = "आपकी palm के overall pattern के अनुसार relationship में superficial connection से ज्यादा meaningful attachment की preference दिखाई देती है।",
  idealTitle = "आपके लिए IDEAL RELATIONSHIP ऐसा हो सकता है जहाँ दोनों partners:",
  idealPoints = defaultIdealPoints,
  patternTitle = "आपके RELATIONSHIP का संभावित PATTERN",
  patternParagraphs = defaultPatternParagraphs,
  challengeLabel = "संभावित CHALLENGE",
  challengeText = "आप कभी-कभी छोटी बातों को internally process करके बड़ा बना सकते हैं।",
  adviceLead = "इसलिए relationship में:",
  adviceHighlight = "ASSUME करने के बजाय पूछना",
  adviceTail = "आपके लिए बहुत useful principle रहेगा।",
  adviceQuote,
  guidanceTitle = "ध्यान रखें",
  guidanceText = "True love time, trust और emotional maturity के साथ grow करता है — rush करने की जरूरत नहीं है।",
}: LoveRelationshipReadingProps) {
  const highlightText = adviceHighlight || adviceQuote || "ASSUME करने के बजाय पूछना";
  return (
    <PalmReadingReportPageShell
      padding="14px 34px 22px"
      pageNumber={pageNumber}
      pageLabel="palm-love-relationship"
    >
      <div className="relative flex h-full min-h-0 flex-col">
        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image
            src={ASSETS.logo}
            alt="Astro Aarambh"
            width={64}
            height={64}
            className="mb-1"
            priority
          />
          <h1
            className="text-[24px] font-bold leading-none tracking-[0.08em]"
            style={{ color: HEADER.maroon }}
          >
            ASTRO AARAMBH
          </h1>
          <p
            className="mt-1 text-[12px] font-bold tracking-[0.06em]"
            style={{ color: HEADER.gold }}
          >
            PREMIUM PALM READING REPORT
          </p>
          <div className="mt-1">
            <OrnamentDivider width={220} />
          </div>
        </header>

        <div className="mt-2 shrink-0">
          <SectionTitleBar title={sectionTitle} titleIconSrc={ASSETS.icons.heart} />
        </div>

        <SummaryBannerFrame>
          <Image
            src={ASSETS.icons.group}
            alt=""
            width={38}
            height={38}
            className="h-[38px] w-[38px] shrink-0 object-contain"
            aria-hidden
          />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.45] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            {summaryText}
          </p>
          <GoldDiamond size={12} />
        </SummaryBannerFrame>

        <div className="relative z-10 mt-2 grid shrink-0 grid-cols-[1fr_1.1fr_1fr] items-center justify-items-center gap-2">
          <ContentPanel>
            <p
              className="mb-1 px-0.5 text-[12.5px] font-bold leading-[1.35] font-nunito-sans"
              style={{ color: HEADER.maroon }}
            >
              {idealTitle}
            </p>
            <div className="flex flex-1 flex-col justify-evenly">
              {idealPoints.map((item, index) => (
                <div
                  key={item.text.slice(0, 24)}
                  style={{
                    borderBottom:
                      index < idealPoints.length - 1
                        ? "1px dashed rgba(184,134,11,0.4)"
                        : undefined,
                  }}
                >
                  <IdealPointRow point={item} />
                </div>
              ))}
            </div>
          </ContentPanel>

          <div className="flex items-center justify-center px-0.5">
            <Image
              src={ASSETS.lovePalmCouple}
              alt="Love and relationship palm illustration"
              width={220}
              height={320}
              className="h-auto max-h-[340px] w-full object-contain"
              priority
            />
          </div>

          <ContentPanel>
            <div className="mb-2 flex items-start gap-2">
              <Image
                src={ASSETS.icons.group}
                alt=""
                width={36}
                height={36}
                className="mt-0.5 h-[36px] w-[36px] shrink-0 object-contain"
                aria-hidden
              />
              <p
                className="min-w-0 flex-1 pt-0.5 text-[12.5px] font-bold leading-[1.35] font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                {patternTitle}
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              <p
                className="text-[14.5px] leading-[1.55] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                {patternParagraphs[0]}
              </p>
              <div className="flex items-center gap-1.5 px-0.5">
                <div
                  className="h-px flex-1 border-t border-dashed"
                  style={{ borderColor: "rgba(184,134,11,0.55)" }}
                />
                <GoldDiamond size={9} />
                <div
                  className="h-px flex-1 border-t border-dashed"
                  style={{ borderColor: "rgba(184,134,11,0.55)" }}
                />
              </div>
              <p
                className="text-[14.5px] leading-[1.55] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                {patternParagraphs[1]}
              </p>
            </div>
          </ContentPanel>
        </div>

        <div
          className="relative mt-2.5 flex shrink-0 flex-col gap-2 rounded-[12px] px-3 py-2.5"
          style={{
            border: `1.5px solid rgba(93,46,23,0.55)`,
            boxShadow: `inset 0 0 0 1px rgba(201,162,39,0.3)`,
            backgroundColor: "rgba(255,250,240,0.28)",
          }}
        >
          {/* Challenge row */}
          <div className="flex items-center gap-2.5 px-0.5">
            <Image
              src={ASSETS.icons.brokenHeart}
              alt=""
              width={42}
              height={42}
              className="h-[42px] w-[42px] shrink-0 object-contain"
              aria-hidden
            />
            <p className="min-w-0 flex-1 text-[12.5px] leading-[1.45] font-nunito-sans">
              <span className="font-bold tracking-wide font-cinzel" style={{ color: HEADER.maroon }}>
                {challengeLabel}
              </span>
              <span style={{ color: HEADER.body }}>  {challengeText}</span>
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-2">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(120,70,30,0.45)" }}
            />
            <GoldDiamond size={8} />
            <div
              className="h-px flex-1"
              style={{ background: "rgba(120,70,30,0.45)" }}
            />
          </div>

          {/* Advice row */}
          <div className="flex items-center justify-center gap-1.5 px-0.5">
            <Image
              src={ASSETS.icons.thinkingMan}
              alt=""
              width={72}
              height={72}
              className="h-[72px] w-[72px] shrink-0 object-contain"
              aria-hidden
            />

            <div
              className="relative min-w-0 flex-[1.35] text-center"
              style={{
                aspectRatio: "1024 / 230",
                maxHeight: 92,
                width: "100%",
              }}
            >
              <Image
                src={ASSETS.adviceFrame}
                alt=""
                fill
                sizes="480px"
                className="pointer-events-none z-0 select-none object-fill"
                aria-hidden
              />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-1.5">
                <p
                  className="text-[12px] leading-[1.3] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {adviceLead}
                </p>
                <p
                  className="mt-0.5 text-[15px] font-bold leading-[1.25] font-cinzel"
                  style={{ color: HEADER.maroon }}
                >
                  “ {highlightText} ”
                </p>
                <p
                  className="mt-0.5 text-[12px] leading-[1.3] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {adviceTail}
                </p>
              </div>
            </div>

            <Image
              src={ASSETS.icons.speechBubble}
              alt=""
              width={68}
              height={68}
              className="h-[68px] w-[68px] shrink-0 object-contain"
              aria-hidden
            />
          </div>
        </div>

        <footer className="relative mt-2 flex shrink-0 flex-col items-center pt-1">
          <QuoteFrame>
            <div className="flex w-full items-center gap-2.5">
              <CoverLotus size={24} className="shrink-0" />
              <div className="min-w-0 flex-1 text-center">
                <p
                  className="text-[11px] font-bold font-nunito-sans"
                  style={{ color: HEADER.maroon }}
                >
                  {guidanceTitle}
                </p>
                <p
                  className="mt-0.5 text-[11px] leading-[1.45] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {guidanceText}
                </p>
              </div>
              <CoverLotus size={24} className="shrink-0" />
            </div>
          </QuoteFrame>

          <div className="relative mt-1 flex w-full items-end justify-center">
            <div className="flex flex-col items-center">
              <CoverLotus size={28} />
              <OrnamentDivider width={100} />
            </div>
            <div className="absolute bottom-0 right-0 flex items-center gap-1.5 font-cinzel">
              <Pattern3 size={16} />
              <p
                className="text-[12px] font-bold tracking-[0.14em]"
                style={{ color: COLORS.brown }}
              >
                PAGE {pageNumber}
              </p>
              <Pattern3 size={16} className="rotate-180" />
            </div>
          </div>
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
