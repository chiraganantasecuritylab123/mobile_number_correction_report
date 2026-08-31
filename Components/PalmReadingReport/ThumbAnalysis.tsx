import {
  ArrowDown,
  ArrowUp,
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
} as const;

const ASSETS = {
  pattern2: "/assets/cover/pattern-2.png",
  thumbDiagram: "/assets/palm-reading-report/thumb-diagram-clear.png",
  contentFrame: "/assets/palm-reading-report/thumb-content-frame.png",
  icons: {
    thumbsUp: "/assets/palm-reading-report/icons/thumbs-up-gold.png",
    heart: "/assets/palm-reading-report/icons/heart-gold.png",
    brainGear: "/assets/palm-reading-report/icons/brain-gear-gold.png",
    brain: "/assets/palm-reading-report/icons/brain-gold.png",
    lightbulb: "/assets/palm-reading-report/icons/lightbulb-gold.png",
    shield: "/assets/palm-reading-report/icons/shield-gold.png",
    scale: "/assets/palm-reading-report/icons/scale.png",
  },
} as const;

export type ThumbIntroPoint = {
  iconSrc: string;
  text: string;
};

export type ThumbCallout = {
  titleHi: string;
  titleEn: string;
  detail: string;
};

export type WillpowerPoint = {
  text: string;
};

export type MotivationItem = {
  direction: "up" | "down";
  text: string;
  badge: string;
};

export type DecisionPoint = {
  iconSrc: string;
  text: string;
};

export type ThumbAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  introPoints?: ThumbIntroPoint[];
  callouts?: ThumbCallout[];
  willpowerTitle?: string;
  willpowerPoints?: WillpowerPoint[];
  motivationTitle?: string;
  motivationItems?: MotivationItem[];
  willpowerTip?: string;
  decisionTitle?: string;
  decisionPoints?: DecisionPoint[];
  footerQuote?: string;
};

const defaultIntroPoints: ThumbIntroPoint[] = [
  {
    iconSrc: ASSETS.icons.thumbsUp,
    text: "आपका thumb proportionate और reasonably strong दिखाई देता है। Traditional palmistry में thumb को willpower, logic और personal control से जोड़ा जाता है।",
  },
  {
    iconSrc: ASSETS.icons.brain,
    text: "आपके thumb का structure यह संकेत देता है कि आप पूरी तरह impulsive personality नहीं हैं। आप generally अपने decisions को justify करने के लिए reasoning चाहते हैं।",
  },
];

const defaultCallouts: ThumbCallout[] = [
  {
    titleHi: "मजबूत ऊपरी भाग",
    titleEn: "Strong Upper Phalange",
    detail: "इच्छाशक्ति और लक्ष्य पर टिके रहने की क्षमता",
  },
  {
    titleHi: "संतुलित मध्य भाग",
    titleEn: "Balanced Middle Phalange",
    detail: "तर्कशक्ति, विश्लेषण क्षमता और निर्णय क्षमता",
  },
  {
    titleHi: "विकसित निचला भाग",
    titleEn: "Developed Lower Phalange",
    detail: "व्यवहारिकता, ऊर्जा और व्यक्तिगत नियंत्रण",
  },
];

const defaultWillpowerPoints: WillpowerPoint[] = [
  {
    text: "लक्ष्य स्पष्ट होने पर आप उसे पूरा करने के लिए लगातार प्रयास कर सकते हैं। आपकी willpower तब सबसे मजबूत दिखाई देती है जब काम personally meaningful होता है।",
  },
  {
    text: "बाधा आने पर आप आसानी से हार नहीं मानते, लेकिन unclear direction होने पर persistence कम हो सकती है।",
  },
];

const defaultMotivationItems: MotivationItem[] = [
  {
    direction: "up",
    text: "जब आपकी किसी काम का purpose clear दिखाई देता है",
    badge: "Motivation → High",
  },
  {
    direction: "down",
    text: "जब purpose unclear हो",
    badge: "Motivation → Drops",
  },
];

const defaultDecisionPoints: DecisionPoint[] = [
  {
    iconSrc: ASSETS.icons.heart,
    text: "आप decisions लेते समय भावनाओं को पूरी तरह नज़रअंदाज़ नहीं करते, बल्कि उन्हें practical considerations के साथ संतुलित करने की कोशिश करते हैं।",
  },
  {
    iconSrc: ASSETS.icons.brainGear,
    text: "कई स्थितियों में आप logic और emotion दोनों को तौलकर आगे बढ़ते हैं, जिससे निर्णय अधिक सोचे-समझे रह सकते हैं।",
  },
  {
    iconSrc: ASSETS.icons.shield,
    text: "दबाव में भी आप अपनी मूल judgment बनाए रखने की क्षमता रखते हैं, बशर्ते लक्ष्य और प्राथमिकताएँ स्पष्ट हों।",
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

function SectionTitleBar({ title }: { title: string }) {
  return (
    <PalmReadingSectionBar
      title={title}
      icon={<CoverLotus size={22} />}
      minWidth={480}
    />
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
          <linearGradient id="quote-frame-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a84b" />
            <stop offset="50%" stopColor="#b8862f" />
            <stop offset="100%" stopColor="#d4a84b" />
          </linearGradient>
        </defs>
        <path
          d={framePath}
          fill="none"
          stroke="url(#quote-frame-gold)"
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
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
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

function ThumbDiagram({ callouts }: { callouts: ThumbCallout[] }) {
  const calloutTops = ["12%", "42%", "72%"];

  return (
    <div className="relative h-[210px] w-full overflow-hidden">
      {/* PNG gold frame — black already converted to transparent */}
      <Image
        src={ASSETS.contentFrame}
        alt=""
        fill
        sizes="360px"
        className="pointer-events-none z-20 select-none object-fill"
        aria-hidden
        priority
      />

      <div className="relative z-10 flex h-full items-center gap-0.5 px-4 py-3.5">
        <div className="relative flex w-[36%] shrink-0 items-center justify-center">
          <Image
            src={ASSETS.thumbDiagram}
            alt="Thumb analysis diagram"
            width={140}
            height={200}
            className="h-auto max-h-[175px] w-auto object-contain"
            priority
          />
        </div>

        <div className="relative min-w-0 flex-1 self-stretch">
          {callouts.map((item, index) => (
            <div
              key={item.titleEn}
              className="absolute left-0 right-0 flex items-center gap-1"
              style={{ top: calloutTops[index] ?? "12%" }}
            >
              <span
                className="h-px max-w-[36px] min-w-[14px] flex-1 border-t border-dotted"
                style={{ borderColor: "rgba(166, 110, 40, 0.85)" }}
                aria-hidden
              />
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: HEADER.gold }}
                aria-hidden
              />
              <div className="min-w-0 flex-[2.2] font-nunito-sans">
                <p
                  className="text-[10px] font-bold leading-tight"
                  style={{ color: HEADER.maroon }}
                >
                  {item.titleHi}{" "}
                  <span className="font-semibold" style={{ color: HEADER.gold }}>
                    ({item.titleEn})
                  </span>
                </p>
                <p
                  className="mt-0.5 text-[9px] leading-snug"
                  style={{ color: HEADER.body }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ThumbAnalysis({
  pageNumber = "04",
  sectionTitle = "3. THUMB ANALYSIS — WILLPOWER और DECISION MAKING",
  introPoints = defaultIntroPoints,
  callouts = defaultCallouts,
  willpowerTitle = "आपकी WILLPOWER",
  willpowerPoints = defaultWillpowerPoints,
  motivationTitle = "आपकी MOTIVATION PATTERN",
  motivationItems = defaultMotivationItems,
  willpowerTip = "लक्ष्यों को छोटे, measurable milestones में बाँटकर कार्य करना आपकी willpower को और अधिक स्थिर बना सकता है।",
  decisionTitle = "DECISION MAKING",
  decisionPoints = defaultDecisionPoints,
  footerQuote = "जब इच्छाशक्ति, तर्क और व्यवहारिकता एक साथ काम करते हैं, तब आपके निर्णय आपको सफलता की ओर ले जाते हैं।",
}: ThumbAnalysisProps) {
  return (
    <PalmReadingReportPageShell
      padding="14px 34px 22px"
      pageNumber={pageNumber}
      pageLabel="palm-thumb-analysis"
    >
      <div className="relative flex h-full min-h-0 flex-col">
        <PalmReadingPageHeader />

        <div className="mt-2.5 shrink-0">
          <SectionTitleBar title={sectionTitle} />
        </div>

        <div className="relative z-10 mt-5 grid min-h-[240px] shrink-0 grid-cols-[1.05fr_0.95fr] items-center gap-3">
          <section className="flex min-w-0 flex-col justify-center gap-3.5 overflow-hidden py-2 pr-1">
            {introPoints.map((point, index) => (
              <div key={point.text.slice(0, 24)} className="flex flex-col gap-3.5">
                {index > 0 ? <IntroPointDivider /> : null}

                <div className="flex items-start gap-3">
                  <IconCircle iconSrc={point.iconSrc} size={48} />

                  <p
                    className="min-w-0 flex-1 pt-1 text-[15px] leading-[1.55] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <div className="min-w-0 scale-[1.08]">
            <ThumbDiagram callouts={callouts} />
          </div>
        </div>

        <div className="mt-10 grid shrink-0 grid-cols-2 items-stretch gap-3.5">
          <FeatureBox title={willpowerTitle} iconSrc={ASSETS.icons.thumbsUp}>
            <div className="flex h-full flex-col gap-3">
              <ul className="flex flex-col gap-2.5">
                {willpowerPoints.map((item) => (
                  <li key={item.text.slice(0, 24)} className="flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0">
                      <GoldDiamond size={11} />
                    </span>
                    <p
                      className="text-[13px] leading-[1.5] font-nunito-sans"
                      style={{ color: HEADER.body }}
                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 px-0.5">
                  <div className="h-px flex-1" style={{ background: "rgba(184,134,11,0.45)" }} />
                  <span className="shrink-0">
                    <GoldDiamond size={8} />
                  </span>
                  <p
                    className="shrink-0 text-[11px] font-bold tracking-wide font-cinzel"
                    style={{ color: HEADER.maroon }}
                  >
                    {motivationTitle}
                  </p>
                  <span className="shrink-0">
                    <GoldDiamond size={8} />
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(184,134,11,0.45)" }} />
                </div>

                <div
                  className="mt-2 grid grid-cols-2 items-stretch gap-2.5 rounded-[10px] px-2.5 py-2.5"
                  style={{
                    border: `1.2px solid rgba(184,134,11,0.45)`,
                    backgroundColor: "transparent",
                  }}
                >
                  {motivationItems.map((item) => {
                    const Arrow = item.direction === "up" ? ArrowUp : ArrowDown;
                    return (
                      <div
                        key={item.badge}
                        className="flex h-full flex-col items-center text-center"
                      >
                        <IconCircle icon={Arrow} size={36} />
                        <p
                          className="mt-1.5 flex-1 text-[11px] leading-snug font-nunito-sans"
                          style={{ color: HEADER.body }}
                        >
                          {item.text}
                        </p>
                        <span
                          className="mt-1.5 rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wide text-white"
                          style={{
                            background: `linear-gradient(180deg, #6b1f1f 0%, ${HEADER.maroon} 100%)`,
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <IconCircle iconSrc={ASSETS.icons.lightbulb} size={36} />
                <p
                  className="pt-1 text-[12.5px] leading-[1.45] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {willpowerTip}
                </p>
              </div>
            </div>
          </FeatureBox>

          <FeatureBox title={decisionTitle} iconSrc={ASSETS.icons.scale}>
            <ul className="flex h-full flex-col justify-between gap-2.5">
              {decisionPoints.map((item) => (
                <li key={item.text.slice(0, 24)} className="flex items-start gap-3">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="mt-0.5 h-[48px] w-[48px] shrink-0 object-contain"
                    aria-hidden
                  />
                  <p
                    className="min-w-0 flex-1 pt-0.5 text-[15px] leading-[1.55] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
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
                {pageNumber}
              </p>
              <Pattern3 size={16} className="rotate-180" />
            </div>
          </div>
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
