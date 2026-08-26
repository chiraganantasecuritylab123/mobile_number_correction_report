import {
  Gem,
  Handshake,
  HeartHandshake,
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
  palmDiagram: "/assets/palm-reading-report/heart-line-palm-clear.png",
  marriagePalm: "/assets/palm-reading-report/marriage/marriage-lines-palm-clear.png",
  handsHeart: "/assets/palm-reading-report/marriage/hands-heart-clear-v2.png",
  coupleGraphic: "/assets/palm-reading-report/love-relationship/love-palm-couple-clear.png",
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  panelFrame: "/assets/palm-reading-report/marriage/panel-frame-v2-clear.png",
  patternFrame: "/assets/palm-reading-report/marriage/pattern-frame-v3-clear.png",
  icons: {
    group: "/assets/palm-reading-report/love-relationship/icon-group-clear.png",
    heart: "/assets/palm-reading-report/icons/heart-gold.png",
    hand: "/assets/palm-reading-report/icons/hand.png",
    shield: "/assets/palm-reading-report/icons/shield-gold.png",
    target: "/assets/palm-reading-report/icons/target.png",
    speechBubble: "/assets/palm-reading-report/love-relationship/icon-speech-bubble-clear.png",
    scale: "/assets/palm-reading-report/icons/scale.png",
  },
} as const;

export type MarriageGridItem = {
  title: string;
  text: string;
  icon?: LucideIcon;
  iconSrc?: string;
};

export type MarriageIndicationsProps = {
  pageNumber?: string;
  sectionTitle?: string;
  introText?: string;
  marriageLinesTitle?: string;
  marriageLinesDesc?: string;
  marriageLinesFooter?: string;
  marriageLinesText?: string;
  requirementTitle?: string;
  requirementHighlight?: string;
  requirementText?: string;
  patternSectionTitle?: string;
  patternItems?: MarriageGridItem[];
  factorsSectionTitle?: string;
  factorItems?: MarriageGridItem[];
  footerQuote?: string;
};

const defaultPatternItems: MarriageGridItem[] = [
  {
    icon: User,
    title: "Responsibilities Increase",
    text: "विवाह के बाद जिम्मेदारियाँ बढ़ती हैं और परिवार पर फोकस मजबूत होता है।",
  },
  {
    iconSrc: ASSETS.icons.shield,
    title: "Protective Nature Stronger",
    text: "अपने partner और परिवार की रक्षा करने की भावना और मजबूत हो सकती है।",
  },
  {
    icon: Handshake,
    title: "Supportive Partner Nature",
    text: "आप supportive partner बनने की कोशिश करते हैं और साथ निभाने को महत्व देते हैं।",
  },
  {
    iconSrc: ASSETS.icons.target,
    title: "Long-term Stability Focus",
    text: "Long-term stability और secure future पर आपका ध्यान बढ़ सकता है।",
  },
];

const defaultFactorItems: MarriageGridItem[] = [
  {
    iconSrc: ASSETS.icons.speechBubble,
    title: "Open Communication",
    text: "खुली और ईमानदार बातचीत रिश्ते को मजबूत बनाती है।",
  },
  {
    iconSrc: ASSETS.icons.heart,
    title: "Emotional Connection",
    text: "Emotional bonding और समझ विवाह को गहराई देती है।",
  },
  {
    icon: HeartHandshake,
    title: "Mutual Respect",
    text: "आपस में सम्मान रखना happy married life की नींव है।",
  },
  {
    iconSrc: ASSETS.icons.scale,
    title: "Balance in Life",
    text: "काम, परिवार और व्यक्तिगत जीवन का संतुलन जरूरी रहता है।",
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

function SectionTitleBar({
  title,
  titleIcon,
}: {
  title: string;
  titleIcon?: LucideIcon;
}) {
  const Icon = titleIcon;
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
          {Icon ? (
            <Icon size={16} strokeWidth={2} color="#f6e7c8" />
          ) : (
            <CoverLotus size={22} className="opacity-100 brightness-125" />
          )}
        </div>
        <p
          className="flex items-center gap-1.5 truncate text-[13px] font-bold tracking-wide text-white font-nunito-sans"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
        >
          {title}
        </p>
      </div>
      <Pattern3 size={36} className="rotate-180" />
    </div>
  );
}

function SubSectionBar({ title }: { title: string }) {
  return (
    <div
      className="flex h-[32px] w-full items-center justify-center rounded-full px-4"
      style={{
        background: `linear-gradient(180deg, #6b1f1f 0%, ${HEADER.maroon} 55%, ${HEADER.maroonDeep} 100%)`,
        boxShadow: `0 0 0 1.3px ${HEADER.goldBright}`,
      }}
    >
      <p
        className="truncate text-center text-[11.5px] font-bold tracking-wide text-white font-nunito-sans"
        style={{ textShadow: "0 1px 1px rgba(0,0,0,0.35)" }}
      >
        {title}
      </p>
    </div>
  );
}

function PanelBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative flex min-h-[290px] min-w-0 flex-col ${className}`}>
      <Image
        src={ASSETS.panelFrame}
        alt=""
        fill
        sizes="340px"
        className="pointer-events-none z-0 select-none object-fill"
        aria-hidden
      />
      <div className="relative z-10 flex h-full min-w-0 flex-col px-3.5 py-3">
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
    <div className="relative w-full max-w-[700px]" style={{ height: 70 }}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="marriage-quote-frame-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a84b" />
            <stop offset="50%" stopColor="#b8862f" />
            <stop offset="100%" stopColor="#d4a84b" />
          </linearGradient>
        </defs>
        <path
          d={framePath}
          fill="none"
          stroke="url(#marriage-quote-frame-gold)"
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

function GridIcon({ item, size = 40 }: { item: MarriageGridItem; size?: number }) {
  const Icon = item.icon;
  if (item.iconSrc) {
    return (
      <Image
        src={item.iconSrc}
        alt=""
        width={size}
        height={size}
        className="object-contain"
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
        background: `linear-gradient(180deg, #7a3a22 0%, ${HEADER.iconCircle} 100%)`,
        boxShadow: `0 0 0 1.4px ${HEADER.goldBright}`,
      }}
      aria-hidden
    >
      <Icon size={Math.round(size * 0.45)} strokeWidth={2} color="#f6e7c8" />
    </div>
  );
}

function FourColGrid({ items }: { items: MarriageGridItem[] }) {
  return (
    <div className="grid grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="flex flex-col items-center px-1.5 text-center"
          style={{
            borderRight:
              index < items.length - 1
                ? "1px dashed rgba(184,134,11,0.45)"
                : undefined,
          }}
        >
          <GridIcon item={item} size={40} />
          <p
            className="mt-1.5 text-[10.5px] font-bold leading-[1.25] font-cinzel"
            style={{ color: HEADER.maroon }}
          >
            {item.title}
          </p>
          <p
            className="mt-1 text-[9.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function FramedPatternSection({
  title,
  items,
}: {
  title: string;
  items: MarriageGridItem[];
}) {
  return (
    <div className="relative mt-2.5 w-full shrink-0" style={{ minHeight: 162 }}>
      <Image
        src={ASSETS.patternFrame}
        alt=""
        fill
        sizes="720px"
        className="pointer-events-none z-0 select-none object-fill"
        aria-hidden
        unoptimized
      />

      {/* Title centered inside maroon notched tab (~13.5%–22% from top) */}
      <div
        className="absolute left-1/2 z-20 flex -translate-x-1/2 items-center justify-center px-3"
        style={{
          top: "14.5%",
          height: "8.5%",
          width: "42%",
          maxWidth: 360,
        }}
      >
        <p
          className="w-full truncate text-center text-[10.5px] font-bold leading-none tracking-wide text-white font-nunito-sans"
          style={{ textShadow: "0 1px 1px rgba(0,0,0,0.35)" }}
        >
          {title}
        </p>
      </div>

      <div className="relative z-10 px-3.5 pb-3 pt-10">
        <FourColGrid items={items} />
      </div>
    </div>
  );
}

export default function MarriageIndications({
  pageNumber = "08",
  sectionTitle = "7. MARRIAGE INDICATIONS",
  introText = "Palmistry में marriage lines traditional interpretation के अनुसार stability, emotional compatibility और long-term bonding के important factors बताते हैं।",
  marriageLinesTitle = "Marriage Lines (Union Lines)",
  marriageLinesDesc = "हृदय रेखा के ऊपर, Mercury Mount के नीचे स्थित क्षेत्र में देखी जाती हैं।",
  marriageLinesFooter = "आप relationship में commitment लेने के बाद उसे seriously लेने की tendency रखते हैं।",
  marriageLinesText,
  requirementTitle = "आपकी STRONGEST REQUIREMENT",
  requirementHighlight = "EMOTIONAL UNDERSTANDING + RESPECT",
  requirementText = "केवल financial stability या social compatibility आपके लिए पर्याप्त नहीं होगी। आपको ऐसा partner ज्यादा suitable लग सकता है जिसके साथ आप freely communicate कर सकें।",
  patternSectionTitle = "MARRIAGE के बाद आपका संभावित PATTERN",
  patternItems = defaultPatternItems,
  factorsSectionTitle = "HAPPY MARRIED LIFE के KEY FACTORS",
  factorItems = defaultFactorItems,
  footerQuote = "सफल विवाह का आधार प्रेम नहीं, समझ, सम्मान और साथ निभाने की भावना है।",
}: MarriageIndicationsProps) {
  const linesDesc =
    marriageLinesDesc ||
    marriageLinesText ||
    "हृदय रेखा के ऊपर, Mercury Mount के नीचे स्थित क्षेत्र में देखी जाती हैं।";
  const linesFooter =
    marriageLinesFooter ||
    "आप relationship में commitment लेने के बाद उसे seriously लेने की tendency रखते हैं।";

  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="palm-marriage-indications"
    >
      <div className="relative flex h-full min-h-0 flex-col">
        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image
            src={ASSETS.logo}
            alt="Astro Aarambh"
            width={58}
            height={58}
            className="mb-0.5"
            priority
          />
          <h1
            className="text-[22px] font-bold leading-none tracking-[0.08em]"
            style={{ color: HEADER.maroon }}
          >
            ASTRO AARAMBH
          </h1>
          <p
            className="mt-0.5 text-[11px] font-bold tracking-[0.06em]"
            style={{ color: HEADER.gold }}
          >
            PREMIUM PALM READING REPORT
          </p>
          <div className="mt-0.5">
            <OrnamentDivider width={200} />
          </div>
        </header>

        <div className="mt-1.5 shrink-0">
          <SectionTitleBar title={sectionTitle} titleIcon={Gem} />
        </div>

        {/* Intro */}
        <div
          className="relative mt-2 flex w-full shrink-0 items-center"
          style={{
            minHeight: 68,
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: "transparent",
            borderTopWidth: 16,
            borderBottomWidth: 16,
            borderLeftWidth: 22,
            borderRightWidth: 22,
            borderImageSource: `url(${ASSETS.introFrame})`,
            borderImageSlice: "55 70 55 70",
            borderImageWidth: "16px 22px",
            borderImageRepeat: "stretch",
          }}
        >
          <div className="relative z-10 flex w-full items-center gap-2.5 px-1 py-1">
            <Image
              src={ASSETS.icons.group}
              alt=""
              width={40}
              height={40}
              className="h-[40px] w-[40px] shrink-0 object-contain"
              aria-hidden
            />
            <p
              className="min-w-0 flex-1 text-center text-[12px] leading-[1.45] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              {introText}
            </p>
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden">
              <Image
                src={ASSETS.coupleGraphic}
                alt=""
                fill
                sizes="48px"
                className="object-contain object-bottom"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {/* Two columns: Marriage Lines + Strongest Requirement */}
        <div className="mt-2 grid shrink-0 grid-cols-2 gap-2.5">
          <PanelBox>
            {/* Top: title/desc left + palm graphic right (matches design) */}
            <div className="relative flex min-h-0 flex-1 items-center gap-1.5">
              <div className="flex w-[40%] min-w-0 flex-col items-center justify-center self-stretch px-0.5 text-center">
                <CoverLotus size={40} className="mb-2 shrink-0" />
                <p
                  className="text-[13px] font-bold leading-[1.15] tracking-wide font-cinzel"
                  style={{ color: HEADER.maroon }}
                >
                  Marriage Lines
                </p>
                <p
                  className="mt-0.5 text-[11px] font-bold leading-[1.15] font-nunito-sans"
                  style={{ color: HEADER.maroon }}
                >
                  (Union Lines)
                </p>
                <p
                  className="mt-2.5 text-[10.5px] leading-[1.45] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {linesDesc}
                </p>
              </div>

              <div className="relative h-[150px] min-w-0 flex-1">
                <Image
                  src={ASSETS.marriagePalm}
                  alt="Marriage lines on palm"
                  fill
                  sizes="200px"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            <div className="my-1.5 flex items-center px-0.5">
              <div className="h-px w-full" style={{ background: "rgba(160,110,40,0.45)" }} />
            </div>

            <p
              className="mb-1.5 text-center text-[11px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              {linesFooter}
            </p>
          </PanelBox>

          <PanelBox>
            <div className="mt-1.5 mb-2.5">
              <SubSectionBar title={requirementTitle} />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center px-1 pb-1.5 text-center">
              <div className="relative mb-2 h-[64px] w-[110px]">
                <Image
                  src={ASSETS.handsHeart}
                  alt=""
                  fill
                  sizes="110px"
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <p
                className="text-[12.5px] font-bold leading-[1.25] tracking-wide font-cinzel"
                style={{ color: HEADER.maroon }}
              >
                EMOTIONAL UNDERSTANDING
              </p>
              <p
                className="mt-0.5 text-[12.5px] font-bold leading-[1.25] tracking-wide font-cinzel"
                style={{ color: HEADER.maroon }}
              >
                + RESPECT
              </p>
              <div className="my-2.5 flex w-full items-center gap-1.5 px-3">
                <GoldDiamond size={7} />
                <div className="h-px flex-1" style={{ background: "rgba(184,134,11,0.5)" }} />
                <GoldDiamond size={8} />
                <div className="h-px flex-1" style={{ background: "rgba(184,134,11,0.5)" }} />
                <GoldDiamond size={7} />
              </div>
              <p
                className="text-[11px] leading-[1.45] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                {requirementText}
              </p>
            </div>
          </PanelBox>
        </div>

        {/* Post-marriage pattern */}
        <FramedPatternSection title={patternSectionTitle} items={patternItems} />

        {/* Key factors */}
        <FramedPatternSection title={factorsSectionTitle} items={factorItems} />

        <footer className="relative mt-auto flex shrink-0 flex-col items-center pt-2">
          <QuoteFrame>
            <div className="flex w-full items-center gap-2.5">
              <CoverLotus size={24} className="shrink-0" />
              <p
                className="flex-1 text-center text-[12px] leading-[1.4] font-nunito-sans"
                style={{ color: HEADER.maroon }}
              >
                “{footerQuote}”
              </p>
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
