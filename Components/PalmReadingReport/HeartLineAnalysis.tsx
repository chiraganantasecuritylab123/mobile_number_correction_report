import {
  Ban,
  Heart,
  Lock,
  MessageCircle,
  Sprout,
  Star,
  Users,
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
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  heartLinePalm: "/assets/palm-reading-report/heart-line-palm-clear.png",
  contentFrame: "/assets/palm-reading-report/thumb-content-frame.png",
  lineSummaryFrame: "/assets/palm-reading-report/line-summary-frame-clear.png",
  icons: {
    heart: "/assets/palm-reading-report/icons/heart-gold.png",
    shield: "/assets/palm-reading-report/icons/shield-gold.png",
    lightbulb: "/assets/palm-reading-report/icons/lightbulb-gold.png",
    target: "/assets/palm-reading-report/icons/target.png",
  },
} as const;

export type HeartLineIntroPoint = {
  icon?: LucideIcon;
  iconSrc?: string;
  text: string;
};

export type RelationshipPoint = {
  icon?: LucideIcon;
  iconSrc?: string;
  text: string;
};

export type HeartLineAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  introPoints?: HeartLineIntroPoint[];
  calloutLabel?: string;
  lineSummary?: string;
  behaviourTitle?: string;
  behaviourPoints?: RelationshipPoint[];
  challengesTitle?: string;
  challengePoint?: RelationshipPoint;
  actionTitle?: string;
  actionTip?: string;
  footerQuote?: string;
};

const defaultIntroPoints: HeartLineIntroPoint[] = [
  {
    iconSrc: ASSETS.icons.heart,
    text: "आपकी heart line clear और moderately curved दिखाई देती है। Traditional palmistry में heart line को emotional nature, relationships और inner feelings से जोड़ा जाता है।",
  },
  {
    icon: Users,
    text: "यह combination emotional depth और relationships में loyalty का संकेत दे सकता है। आप meaningful connections को value करते हैं।",
  },
  {
    icon: Lock,
    text: "आप outwardly overly expressive personality नहीं दिखाते, लेकिन inner feelings strong और thoughtful हो सकती हैं।",
  },
];

const defaultBehaviourPoints: RelationshipPoint[] = [
  {
    iconSrc: ASSETS.icons.shield,
    text: "Close relationships में loyal और protective रहने की प्रवृत्ति",
  },
  {
    icon: Ban,
    text: "Emotional decisions में जल्दबाज़ी नहीं करते",
  },
  {
    iconSrc: ASSETS.icons.heart,
    text: "Trust और emotional honesty को important मानते हैं",
  },
  {
    icon: Sprout,
    text: "Relationships में slowly grow करना और stability prefer करना",
  },
  {
    icon: MessageCircle,
    text: "Safe feel करने पर openly communicate कर सकते हैं",
  },
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

function IconCircle({
  icon: Icon,
  iconSrc,
  size = 38,
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
      />
    );
  }

  if (!Icon) return null;

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: `1.6px solid ${HEADER.goldBright}`,
      }}
    >
      <Icon size={Math.round(size * 0.48)} strokeWidth={1.7} style={{ color: HEADER.gold }} />
    </div>
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
    <div className="relative w-full max-w-[680px]" style={{ height: 78 }}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="heart-quote-frame-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a84b" />
            <stop offset="50%" stopColor="#b8862f" />
            <stop offset="100%" stopColor="#d4a84b" />
          </linearGradient>
        </defs>
        <path
          d={framePath}
          fill="none"
          stroke="url(#heart-quote-frame-gold)"
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
      <div className="relative z-10 flex h-full w-full items-center px-9 py-2">
        {children}
      </div>
    </div>
  );
}

function FeatureBox({
  title,
  icon: Icon,
  iconSrc,
  children,
}: {
  title: string;
  icon?: LucideIcon;
  iconSrc?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex h-full min-w-0 flex-col pt-4">
      <div className="absolute left-1/2 top-0 z-10 flex w-[88%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div
          className="relative flex h-[34px] w-full items-center justify-center gap-2 rounded-full pl-11 pr-4"
          style={{
            background: `linear-gradient(180deg, #6b1f1f 0%, ${HEADER.maroon} 55%, ${HEADER.maroonDeep} 100%)`,
            boxShadow: `0 0 0 1.4px ${HEADER.goldBright}`,
          }}
        >
          <div
            className="absolute left-[3px] top-1/2 flex h-[28px] w-[28px] -translate-y-1/2 items-center justify-center rounded-full"
            style={{
              background: `linear-gradient(180deg, #7a2424 0%, ${HEADER.maroon} 100%)`,
              boxShadow: `0 0 0 1.5px ${HEADER.goldBright}`,
            }}
          >
            {iconSrc ? (
              <Image
                src={iconSrc}
                alt=""
                width={16}
                height={16}
                className="h-[16px] w-[16px] object-contain"
                aria-hidden
              />
            ) : Icon ? (
              <Icon size={14} strokeWidth={1.8} className="text-white" />
            ) : null}
          </div>
          <p
            className="truncate text-[13px] font-bold tracking-wide text-white font-cinzel"
            style={{ textShadow: "0 1px 1px rgba(0,0,0,0.35)" }}
          >
            {title}
          </p>
        </div>
      </div>

      <div
        className="flex h-full flex-col rounded-[14px] px-4 pb-3.5 pt-5"
        style={{
          border: `1.5px solid rgba(93,46,23,0.5)`,
          backgroundColor: "transparent",
          boxShadow: `inset 0 0 0 1px rgba(201,162,39,0.28)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function IntroPointDivider() {
  return (
    <div className="flex w-full items-center gap-2 px-1" aria-hidden>
      <div
        className="h-px flex-1 border-t border-dashed"
        style={{ borderColor: "rgba(166, 110, 40, 0.55)" }}
      />
      <GoldDiamond size={9} />
      <div
        className="h-px flex-1 border-t border-dashed"
        style={{ borderColor: "rgba(166, 110, 40, 0.55)" }}
      />
    </div>
  );
}

function HeartLineDiagram({
  calloutLabel,
  lineSummary,
}: {
  calloutLabel: string;
  lineSummary: string;
}) {
  return (
    <div className="relative w-full">
      <div className="relative h-[230px] w-full overflow-hidden">
        <Image
          src={ASSETS.contentFrame}
          alt=""
          fill
          sizes="360px"
          className="pointer-events-none z-20 select-none object-fill"
          aria-hidden
          priority
        />

        <div className="relative z-10 flex h-full items-center gap-1 px-4 py-3.5">
          <div className="relative flex w-[52%] shrink-0 items-center justify-center">
            <Image
              src={ASSETS.heartLinePalm}
              alt="Heart line palm diagram"
              width={180}
              height={220}
              className="h-auto max-h-[185px] w-auto object-contain"
              priority
            />
          </div>

          <div className="relative flex min-w-0 flex-1 flex-col justify-center gap-3 self-stretch py-2">
            <div className="flex items-center gap-1.5">
              <span
                className="h-px max-w-[28px] min-w-[12px] flex-1 border-t border-dotted"
                style={{ borderColor: "rgba(166, 110, 40, 0.85)" }}
                aria-hidden
              />
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: HEADER.gold }}
                aria-hidden
              />
              <p
                className="min-w-0 flex-1 text-[11px] font-bold leading-tight font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                {calloutLabel}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[168px]" style={{ height: 52 }}>
              <Image
                src={ASSETS.lineSummaryFrame}
                alt=""
                fill
                sizes="168px"
                className="pointer-events-none z-0 select-none object-fill"
                aria-hidden
              />
              <div className="relative z-10 flex h-full items-center justify-center px-5 py-2">
                <p
                  className="text-center text-[10px] font-bold leading-tight font-nunito-sans"
                  style={{ color: HEADER.maroon }}
                >
                  {lineSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelationshipRow({
  point,
  iconSize = 38,
  textClassName = "text-[14px] leading-[1.55]",
}: {
  point: RelationshipPoint;
  iconSize?: number;
  textClassName?: string;
}) {
  return (
    <div className="flex items-start gap-2.5 py-1.5">
      <IconCircle icon={point.icon} iconSrc={point.iconSrc} size={iconSize} />
      <p
        className={`min-w-0 flex-1 pt-1 font-nunito-sans ${textClassName}`}
        style={{ color: HEADER.body }}
      >
        {point.text}
      </p>
    </div>
  );
}

export default function HeartLineAnalysis({
  pageNumber = "06",
  sectionTitle = "5. HEART LINE — EMOTIONAL NATURE",
  introPoints = defaultIntroPoints,
  calloutLabel = "Heart Line (Emotional Line)",
  lineSummary = "Clear aur moderately curved line",
  behaviourTitle = "RELATIONSHIP BEHAVIOUR",
  behaviourPoints = defaultBehaviourPoints,
  challengesTitle = "RELATIONSHIP CHALLENGES",
  challengePoint = {
    iconSrc: ASSETS.icons.target,
    text: "आपके relationship challenges में से एक unspoken expectation हो सकता है। कभी-कभी आप चाहते हैं कि सामने वाला बिना बताए आपकी feelings समझ जाए।",
  },
  actionTitle = "क्या करें ?",
  actionTip = "Relationship में clear communication आपके लिए ज्यादा beneficial रहेगा।",
  footerQuote = "जब भावनाओं को समझ और व्यक्ति दोनों मिलते हैं, तब relationships अधिक meaningful और lasting बन सकती हैं।",
}: HeartLineAnalysisProps) {
  return (
    <PalmReadingReportPageShell
      padding="14px 34px 22px"
      pageNumber={pageNumber}
      pageLabel="palm-heart-line-analysis"
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

        <div className="mt-2.5 shrink-0">
          <SectionTitleBar title={sectionTitle} titleIconSrc={ASSETS.icons.heart} />
        </div>

        <div className="relative z-10 mt-4 grid min-h-[250px] shrink-0 grid-cols-[1.05fr_0.95fr] items-center gap-3">
          <section className="flex min-w-0 flex-col justify-center gap-3 overflow-hidden py-1 pr-1">
            {introPoints.map((point, index) => (
              <div key={point.text.slice(0, 24)} className="flex flex-col gap-3">
                {index > 0 ? <IntroPointDivider /> : null}
                <div className="flex items-start gap-3">
                  <IconCircle icon={point.icon} iconSrc={point.iconSrc} size={44} />
                  <p
                    className="min-w-0 flex-1 pt-1 text-[14px] leading-[1.55] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <div className="min-w-0">
            <HeartLineDiagram calloutLabel={calloutLabel} lineSummary={lineSummary} />
          </div>
        </div>

        <div className="mt-8 grid shrink-0 grid-cols-2 items-stretch gap-3.5">
          <FeatureBox title={behaviourTitle} iconSrc={ASSETS.icons.heart}>
            <div className="flex flex-col">
              <p
                className="mb-1 text-[13px] font-bold font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                आप:
              </p>
              {behaviourPoints.map((item, index) => (
                <div
                  key={item.text.slice(0, 24)}
                  style={{
                    borderBottom:
                      index < behaviourPoints.length - 1
                        ? "1px solid rgba(184,134,11,0.35)"
                        : undefined,
                  }}
                >
                  <RelationshipRow point={item} />
                </div>
              ))}
            </div>
          </FeatureBox>

          <FeatureBox title={challengesTitle} icon={Star}>
            <div className="flex h-full flex-col gap-2 py-0.5">
              <RelationshipRow
                point={challengePoint}
                iconSize={44}
                textClassName="text-[14.5px] leading-[1.55]"
              />

              <div className="flex items-center gap-2 px-0.5">
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

              <div className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <div
                    className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(180deg, #6b3a1f 0%, ${HEADER.maroon} 100%)`,
                      boxShadow: `0 0 0 3px rgba(255,250,240,0.95), 0 0 0 4.5px ${HEADER.gold}`,
                    }}
                  >
                    <Image
                      src={ASSETS.icons.lightbulb}
                      alt=""
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px] object-contain brightness-125"
                      aria-hidden
                    />
                  </div>

                  <div
                    className="-ml-4 flex min-h-[30px] items-center rounded-full py-1.5 pl-7 pr-4"
                    style={{ backgroundColor: "rgba(210, 175, 120, 0.55)" }}
                  >
                    <p
                      className="font-nunito-sans text-[13px] font-bold leading-none"
                      style={{ color: HEADER.maroon }}
                    >
                      {actionTitle}
                    </p>
                  </div>
                </div>

                <p
                  className="pl-[46px] font-nunito-sans text-[14px] leading-[1.55]"
                  style={{ color: HEADER.body }}
                >
                  {actionTip}
                </p>
              </div>
            </div>
          </FeatureBox>
        </div>

        <footer className="relative mt-3 flex shrink-0 flex-col items-center pt-1">
          <QuoteFrame>
            <div className="flex w-full items-center gap-3">
              <CoverLotus size={28} className="shrink-0" />
              <p
                className="flex-1 text-center text-[12.5px] leading-[1.45] font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                “{footerQuote}”
              </p>
              <CoverLotus size={28} className="shrink-0" />
            </div>
          </QuoteFrame>

          <div className="relative mt-1.5 flex w-full items-end justify-center">
            <div className="flex flex-col items-center">
              <CoverLotus size={32} />
              <OrnamentDivider width={120} />
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
