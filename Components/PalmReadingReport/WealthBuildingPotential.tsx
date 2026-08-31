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
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  palm: "/assets/palm-reading-report/career-reading/career-palm-clear.png",
  climbArt: "/assets/palm-reading-report/career-reading/climb-success-clear.png",
  careerPath: "/assets/palm-reading-report/career-reading/career-path-clear.png",
  icons: {
    moneyBag: "/assets/palm-reading-report/money-wealth/icon-money-bag-clear.png",
    career: "/assets/palm-reading-report/major-life-changes/icon-career-clear.png",
    climb: "/assets/palm-reading-report/major-life-changes/icon-climb-clear.png",
    growth: "/assets/palm-reading-report/major-life-changes/icon-growth-clear.png",
    learning: "/assets/palm-reading-report/major-life-changes/icon-learning-clear.png",
    eye: "/assets/palm-reading-report/palm-shape/icon-eye-clear.png",
    thumb: "/assets/palm-reading-report/wealth-building/icon-thumb-clear.png",
    sun: "/assets/palm-reading-report/wealth-building/icon-sun-clear.png",
    heart: "/assets/palm-reading-report/wealth-building/icon-heart-clear.png",
    shield: "/assets/palm-reading-report/wealth-building/icon-shield-clear.png",
    target: "/assets/palm-reading-report/wealth-building/icon-target-clear.png",
    scale: "/assets/palm-reading-report/wealth-building/icon-scale-clear.png",
    star: "/assets/palm-reading-report/wealth-building/icon-star-clear.png",
  },
} as const;

const INDICATORS = [
  {
    title: "Strong Thumb",
    text: "Willpower, self-discipline और decisions की strength financial growth को support करती है।",
    iconSrc: ASSETS.icons.thumb,
    side: "left" as const,
  },
  {
    title: "Sun / Apollo Influence",
    text: "Recognition, reputation और creativity financial stability और success को बढ़ाता है।",
    iconSrc: ASSETS.icons.sun,
    side: "left" as const,
  },
  {
    title: "Venus Mount",
    text: "Energy, passion और resources को attract करने की क्षमता wealth accumulation में मदद करती है।",
    iconSrc: ASSETS.icons.heart,
    side: "right" as const,
  },
  {
    title: "Fate Line Support",
    text: "Self-effort, consistency और clear direction long-term financial growth का मज़बूत foundation बनाती है।",
    iconSrc: ASSETS.icons.shield,
    side: "right" as const,
  },
] as const;

const STRATEGY = [
  {
    title: "Define Goals",
    text: "Clear financial goals set करें और लिखें।",
    iconSrc: ASSETS.icons.target,
  },
  {
    title: "Save Consistently",
    text: "Income का कुछ हिस्सा हर महीने save करें।",
    iconSrc: ASSETS.icons.growth,
  },
  {
    title: "Invest Wisely",
    text: "Long-term investments को प्राथमिकता दें।",
    iconSrc: ASSETS.icons.career,
  },
  {
    title: "Continuous Learning",
    text: "Skills और knowledge में लगातार improvement करें।",
    iconSrc: ASSETS.icons.learning,
  },
  {
    title: "Review Regularly",
    text: "Time-to-time review करें और strategy adjust करें।",
    iconSrc: ASSETS.icons.eye,
  },
] as const;


function PngIcon({
  src,
  size = 40,
  alt = "",
}: {
  src: string;
  size?: number;
  alt?: string;
}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-contain object-center"
        unoptimized
      />
    </div>
  );
}

function IntroFrame({
  children,
  className = "",
  minHeight = 58,
}: {
  children: ReactNode;
  className?: string;
  minHeight?: number;
}) {
  return (
    <div
      className={`relative flex w-full shrink-0 items-center ${className}`}
      style={{
        minHeight,
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
        {children}
      </div>
    </div>
  );
}

function SectionBar() {
  return (
    <PalmReadingSectionBar
      title="13. WEALTH-BUILDING POTENTIAL"
      iconSrc={ASSETS.icons.star}
      minWidth={420}
    />
  );
}

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <PngIcon src={ASSETS.icons.star} size={14} />
      <p
        className="text-[11.5px] font-bold tracking-[0.1em]"
        style={{ color: HEADER.gold }}
      >
        {title}
      </p>
      <PngIcon src={ASSETS.icons.star} size={14} />
    </div>
  );
}

function IndicatorCard({
  title,
  text,
  iconSrc,
  align = "left",
}: {
  title: string;
  text: string;
  iconSrc: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-start gap-2 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <PngIcon src={iconSrc} size={36} />
      <div className="min-w-0">
        <p
          className="text-[12px] font-bold leading-none tracking-[0.04em]"
          style={{ color: HEADER.maroon }}
        >
          {title}
        </p>
        <p
          className="mt-1 text-[11.5px] leading-[1.35] font-nunito-sans"
          style={{ color: HEADER.body }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function WealthBuildingPotential({
  pageNumber = "14",
  footerQuote = "धैर्य, योजना और निरंतर प्रयास — यही सच्ची समृद्धि का मार्ग है।",
}: {
  pageNumber?: string;
  footerQuote?: string;
}) {
  const leftIndicators = INDICATORS.filter((item) => item.side === "left");
  const rightIndicators = INDICATORS.filter((item) => item.side === "right");

  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="wealth-building-potential"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-2.5 flex shrink-0 items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: "rgba(248,232,204,0.55)",
            border: `1px solid rgba(169,101,5,0.45)`,
          }}
        >
          <PngIcon src={ASSETS.icons.moneyBag} size={52} alt="Wealth" />
          <div className="min-w-0 flex-1 space-y-1 font-nunito-sans">
            <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
              Palmistry में financial success सिर्फ money markings से नहीं पढ़ा जाता — यह{" "}
              <span className="font-bold">thumb, Venus mount, Fate line</span> और{" "}
              <span className="font-bold">Sun / Apollo influence</span> का combined reading है।
            </p>
            <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
              आपकी हथेली <span className="font-bold">self-effort based financial growth</span> की
              ओर संकेत करती है।
            </p>
          </div>
          <PngIcon src={ASSETS.icons.career} size={64} alt="Growth" />
        </section>

        <section className="mt-2.5 min-h-0 flex-1">
          <SectionLabel title="KEY PALM INDICATORS FOR WEALTH" />
          <div className="grid h-[calc(100%-28px)] grid-cols-[1fr_0.95fr_1fr] items-stretch gap-2">
            <div className="flex flex-col justify-evenly gap-3 py-1">
              {leftIndicators.map((item) => (
                <IndicatorCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  iconSrc={item.iconSrc}
                  align="left"
                />
              ))}
            </div>

            <div className="relative min-h-0 overflow-hidden">
              <Image
                src={ASSETS.palm}
                alt="Wealth palm indicators"
                fill
                sizes="240px"
                className="object-contain object-center"
                unoptimized
              />
            </div>

            <div className="flex flex-col justify-evenly gap-3 py-1">
              {rightIndicators.map((item) => (
                <IndicatorCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  iconSrc={item.iconSrc}
                  align="right"
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="mt-2.5 shrink-0 rounded-[14px] px-3 py-2.5"
          style={{
            background: "rgba(248,232,204,0.55)",
            border: `1px solid rgba(169,101,5,0.45)`,
          }}
        >
          <SectionLabel title="SELF-EFFORT BASED GROWTH" />
          <div className="flex items-center gap-3">
            <PngIcon src={ASSETS.icons.climb} size={44} />
            <p
              className="min-w-0 flex-1 text-[13px] leading-[1.45] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              Financial position में सुधार आपके{" "}
              <span className="font-bold">अपने decisions, hard work</span> और{" "}
              <span className="font-bold">planning</span> से जुड़ा है — sudden luck से नहीं।
            </p>
            <div className="relative h-[58px] w-[100px] shrink-0">
              <Image
                src={ASSETS.climbArt}
                alt=""
                fill
                sizes="100px"
                className="object-contain object-center"
                unoptimized
              />
            </div>
          </div>
        </section>

        <IntroFrame className="mt-2.5" minHeight={64}>
          <PngIcon src={ASSETS.icons.star} size={40} />
          <p
            className="min-w-0 flex-1 text-center text-[13px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.maroon }}
          >
            “Short-term excitement से ज़्यादा long-term compounding पर ध्यान।”
          </p>
          <PngIcon src={ASSETS.icons.scale} size={40} />
        </IntroFrame>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-full px-5 py-1"
              style={{
                background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
              }}
            >
              <p className="whitespace-nowrap text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
                WEALTH-BUILDING STRATEGY
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-5 gap-1.5 rounded-[14px] px-2 pb-2.5 pt-4"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {STRATEGY.map((item) => (
              <div key={item.title} className="flex flex-col items-center px-1 text-center">
                <PngIcon src={item.iconSrc} size={40} />
                <p
                  className="mt-1.5 text-[11px] font-bold leading-tight tracking-[0.03em]"
                  style={{ color: HEADER.maroon }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-1 text-[11px] leading-[1.3] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="max-w-[520px] text-center text-[12px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.maroon }}
            >
              “{footerQuote}”
            </p>
            <CoverLotus size={22} />
          </div>
          
          {/* <div className="mt-1.5 flex w-full items-center justify-end gap-2 pr-1">
            <Pattern3 size={28} />
            <p
              className="text-[11px] font-bold tracking-[0.14em]"
              style={{ color: COLORS.brown }}
            >
              {pageNumber}
            </p>
            <Pattern3 size={28} className="rotate-180" />
          </div> */}
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
