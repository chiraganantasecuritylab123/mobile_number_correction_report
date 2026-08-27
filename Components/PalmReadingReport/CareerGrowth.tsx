import Image from "next/image";
import { ArrowDown } from "lucide-react";
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
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  palm: "/assets/palm-reading-report/career-reading/career-palm-clear.png",
  careerPath: "/assets/palm-reading-report/career-reading/career-path-clear.png",
  climbSuccess: "/assets/palm-reading-report/career-reading/climb-success-clear.png",
  crossroads: "/assets/palm-reading-report/major-life-changes/crossroads-clear.png",
  icons: {
    growth: "/assets/palm-reading-report/major-life-changes/icon-growth-clear.png",
    learning: "/assets/palm-reading-report/major-life-changes/icon-learning-clear.png",
    change: "/assets/palm-reading-report/life-line/icon-environment-clear.png",
    career: "/assets/palm-reading-report/major-life-changes/icon-career-clear.png",
    shield: "/assets/palm-reading-report/life-line/icon-shield-clear.png",
    brainGear: "/assets/palm-reading-report/icons/brain-gear-gold.png",
    climb: "/assets/palm-reading-report/major-life-changes/icon-climb-clear.png",
    scale: "/assets/palm-reading-report/icons/scale.png",
    target: "/assets/palm-reading-report/palm-shape/icon-target-clear.png",
    star: "/assets/palm-reading-report/career-reading/icon-star-clear.png",
    lightbulb: "/assets/palm-reading-report/icons/lightbulb-gold.png",
    business: "/assets/palm-reading-report/career-reading/icon-business-clear.png",
  },
} as const;

const JOURNEY = [
  {
    title: "START",
    text: "शुरुआती phase में learning, skills develop करना और explore करने का समय।",
    iconSrc: ASSETS.icons.growth,
  },
  {
    title: "EXPERIENCE",
    text: "Practical exposure, real-world challenges और knowledge gain होता है।",
    iconSrc: ASSETS.icons.learning,
  },
  {
    title: "CHANGE",
    text: "Career direction या role में बदलाव की संभावना हो सकती है।",
    iconSrc: ASSETS.icons.change,
  },
  {
    title: "BETTER DIRECTION",
    text: "सही दिशा चुनने के बाद growth, confidence और progress तेज़ी से बढ़ता है।",
    iconSrc: ASSETS.icons.career,
  },
  {
    title: "STABILITY",
    text: "आगे चलकर career में stability, respect और long-term success मिलने की संभावना है।",
    iconSrc: ASSETS.icons.shield,
  },
] as const;

const INSIGHTS = [
  {
    title: "LEARNING IS KEY",
    text: "लगातार सीखना आपके लिए career growth का सबसे बड़ा secret रहेगा।",
    iconSrc: ASSETS.icons.brainGear,
  },
  {
    title: "GROWTH MINDSET",
    text: "नई skills, knowledge और adaptability आपको हमेशा ahead रखेगी।",
    iconSrc: ASSETS.icons.climb,
  },
  {
    title: "DECISIONS MATTER",
    text: "सही समय पर सही decision आपकी पूरी career trajectory बदल सकता है।",
    iconSrc: ASSETS.icons.scale,
  },
  {
    title: "FOCUS & CONSISTENCY",
    text: "एक बार clear दिशा मिल जाए, तो focus और consistency से great results मिलेंगे।",
    iconSrc: ASSETS.icons.target,
  },
] as const;

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
    <div className="relative mx-auto mt-2 flex w-full max-w-[640px] items-center justify-center">
      <Pattern3 size={72} className="absolute left-[-6px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
          minWidth: 360,
        }}
      >
        <div
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <div className="relative h-[22px] w-[22px]">
            <Image
              src={ASSETS.icons.career}
              alt=""
              fill
              sizes="22px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          11. CAREER GROWTH
        </p>
      </div>
      <Pattern3 size={72} className="absolute right-[-6px] rotate-180 opacity-90" />
    </div>
  );
}

function ColumnTitle({ title }: { title: string }) {
  return (
    <div
      className="mb-2.5 shrink-0 rounded-full px-3 py-1.5 text-center"
      style={{
        background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
      }}
    >
      <p className="text-[11.5px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
    </div>
  );
}

export default function CareerGrowth({
  pageNumber = "12",
  footerQuote = "सही दिशा, सही सीख और सही निर्णय – यही सफल career का मूल मंत्र है।",
}: {
  pageNumber?: string;
  footerQuote?: string;
}) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="career-growth"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
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

        <SectionBar />

        <section
          className="mt-2.5 flex shrink-0 items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: "rgba(248,232,204,0.55)",
            border: `1px solid rgba(169,101,5,0.45)`,
          }}
        >
          <PngIcon src={ASSETS.icons.climb} size={48} alt="Career climb" />
          <p
            className="min-w-0 flex-1 text-[13px] leading-[1.45] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            Fate Line की <span className="font-bold">middle portion</span> में strength
            variation career journey में <span className="font-bold">changes</span> की ओर संकेत
            कर सकती है।
          </p>
          <div className="relative h-[72px] w-[120px] shrink-0">
            <Image
              src={ASSETS.careerPath}
              alt=""
              fill
              sizes="120px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </section>

        <section className="mt-2.5 grid min-h-0 flex-1 grid-cols-[1fr_0.95fr_1fr] items-stretch gap-2.5">
          <div
            className="flex min-h-0 flex-col rounded-[14px] px-3 py-3"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <ColumnTitle title="CAREER JOURNEY PATTERN" />
            <div className="flex min-h-0 flex-1 flex-col justify-evenly">
              {JOURNEY.map((step, index) => (
                <div key={step.title} className="min-h-0">
                  <div className="flex items-start gap-2.5">
                    <PngIcon src={step.iconSrc} size={40} />
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[13px] font-bold leading-[1.15] tracking-[0.04em]"
                        style={{ color: HEADER.maroon }}
                      >
                        {index + 1}. {step.title}
                      </p>
                      <p
                        className="mt-1 text-[12.5px] leading-[1.35] font-nunito-sans"
                        style={{ color: HEADER.body }}
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                  {index < JOURNEY.length - 1 ? (
                    <div className="my-1 flex justify-center">
                      <ArrowDown size={14} style={{ color: HEADER.maroon }} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-0 overflow-hidden">
            <Image
              src={ASSETS.palm}
              alt="Fate line on palm"
              fill
              sizes="240px"
              className="object-contain object-center"
              unoptimized
            />
            <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
              <CoverLotus size={30} />
              <p
                className="text-[11px] font-bold tracking-[0.08em]"
                style={{ color: HEADER.maroon }}
              >
                FATE LINE
              </p>
            </div>
          </div>

          <div
            className="flex min-h-0 flex-col rounded-[14px] px-3 py-3"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <ColumnTitle title="IMPORTANT INSIGHTS" />
            <div className="flex min-h-0 flex-1 flex-col justify-evenly gap-1">
              {INSIGHTS.map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <PngIcon src={item.iconSrc} size={40} />
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-[12.5px] font-bold leading-[1.15] tracking-[0.04em]"
                      style={{ color: HEADER.maroon }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 text-[12.5px] leading-[1.35] font-nunito-sans"
                      style={{ color: HEADER.body }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IntroFrame className="mt-2.5" minHeight={68}>
          <PngIcon src={ASSETS.icons.star} size={34} />
          <div className="min-w-0 flex-1">
            <p
              className="text-center text-[12px] font-bold tracking-[0.08em]"
              style={{ color: HEADER.maroon }}
            >
              IMPORTANT CAREER ADVICE
            </p>
            <p
              className="mt-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              केवल salary देखकर decision लेने के बजाय learning + future growth को भी evaluate
              करना चाहिए।
            </p>
          </div>
          <div className="relative h-[56px] w-[96px] shrink-0">
            <Image
              src={ASSETS.crossroads}
              alt=""
              fill
              sizes="96px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </IntroFrame>

        <IntroFrame className="mt-2" minHeight={58}>
          <PngIcon src={ASSETS.icons.lightbulb} size={34} />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            अगर किसी role में learning completely stop हो जाए, तो long-term satisfaction कम हो
            सकती है।
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            <PngIcon src={ASSETS.icons.learning} size={30} />
            <PngIcon src={ASSETS.icons.business} size={30} />
          </div>
        </IntroFrame>

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

          <div className="mt-1.5 flex w-full items-center justify-end gap-2 pr-1">
            <Pattern3 size={28} />
            <p
              className="text-[11px] font-bold tracking-[0.14em]"
              style={{ color: COLORS.brown }}
            >
              PAGE {pageNumber}
            </p>
            <Pattern3 size={28} className="rotate-180" />
          </div>
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
