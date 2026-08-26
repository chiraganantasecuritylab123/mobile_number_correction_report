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
  red: "#c41e3a",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  palm: "/assets/palm-reading-report/career-reading/career-palm-clear.png",
  careerPath: "/assets/palm-reading-report/career-reading/career-path-clear.png",
  climbSuccess: "/assets/palm-reading-report/career-reading/climb-success-clear.png",
  lightbulb: "/assets/palm-reading-report/icons/lightbulb-gold.png",
  icons: {
    management: "/assets/palm-reading-report/career-reading/icon-management-clear.png",
    business: "/assets/palm-reading-report/career-reading/icon-business-clear.png",
    consulting: "/assets/palm-reading-report/career-reading/icon-consulting-clear.png",
    strategy: "/assets/palm-reading-report/career-reading/icon-strategy-clear.png",
    technology: "/assets/palm-reading-report/career-reading/icon-technology-clear.png",
    rocket: "/assets/palm-reading-report/career-reading/icon-rocket-clear.png",
    communication: "/assets/palm-reading-report/career-reading/icon-communication-clear.png",
    star: "/assets/palm-reading-report/career-reading/icon-star-clear.png",
  },
} as const;

type WorkStyle = {
  title: string;
  text: string;
  iconSrc: string;
};

const WORK_STYLES: WorkStyle[] = [
  {
    title: "MANAGEMENT",
    text: "टीम को दिशा देना और decisions लेना",
    iconSrc: ASSETS.icons.management,
  },
  {
    title: "TECHNOLOGY",
    text: "Analytical thinking और systems के साथ काम",
    iconSrc: ASSETS.icons.technology,
  },
  {
    title: "BUSINESS",
    text: "Practical outcomes और growth पर focus",
    iconSrc: ASSETS.icons.business,
  },
  {
    title: "CONSULTING",
    text: "समस्या समझकर समाधान देना",
    iconSrc: ASSETS.icons.consulting,
  },
  {
    title: "CREATIVE PROBLEM SOLVING",
    text: "नए तरीके से सोचकर solutions निकालना",
    iconSrc: ASSETS.lightbulb,
  },
  {
    title: "ENTREPRENEURSHIP",
    text: "अपनी vision को independently आगे बढ़ाना",
    iconSrc: ASSETS.icons.rocket,
  },
  {
    title: "STRATEGY",
    text: "Long-term planning और direction",
    iconSrc: ASSETS.icons.strategy,
  },
  {
    title: "COMMUNICATION BASED ROLES",
    text: "Ideas को clearly express करना",
    iconSrc: ASSETS.icons.communication,
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
              src={ASSETS.icons.business}
              alt=""
              fill
              sizes="22px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          10. CAREER READING
        </p>
      </div>
      <Pattern3 size={72} className="absolute right-[-6px] rotate-180 opacity-90" />
    </div>
  );
}

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="-mb-6 flex justify-center">
      <div
        className="px-7 py-1.5 text-center"
        style={{
          background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
          clipPath:
            "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
          minWidth: 480,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.07em] text-[#f6e6c4]">{title}</p>
      </div>
    </div>
  );
}

function WorkStyleCard({ item }: { item: WorkStyle }) {
  return (
    <div className="flex h-full min-h-0 flex-col items-center justify-center px-2 py-2.5 text-center">
      <PngIcon src={item.iconSrc} size={48} />
      <p
        className="mt-2 text-[12.5px] font-bold leading-[1.2] tracking-[0.04em]"
        style={{ color: HEADER.maroon }}
      >
        {item.title}
      </p>
      <p
        className="mt-1.5 text-[13px] leading-[1.35] font-nunito-sans"
        style={{ color: HEADER.body }}
      >
        {item.text}
      </p>
    </div>
  );
}

export type CareerReadingProps = {
  pageNumber?: string;
  footerQuote?: string;
};

export default function CareerReading({
  pageNumber = "11",
  footerQuote = "सही दिशा में किया गया काम, आपकी क्षमता को पहचान देता है और आपको आपकी मंज़िल तक पहुँचाता है।",
}: CareerReadingProps) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="career-reading"
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
          className="mt-2.5 grid shrink-0 grid-cols-[1.08fr_0.92fr] items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            border: `1.4px solid rgba(169,101,5,0.55)`,
            background: "rgba(248,232,204,0.35)",
          }}
        >
          <div className="flex items-start gap-2.5">
            <PngIcon src={ASSETS.icons.business} size={48} alt="Career" />
            <div className="min-w-0 space-y-1.5 font-nunito-sans">
              <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
                Career reading में <span className="font-bold">Head Line</span> और{" "}
                <span className="font-bold">Fate Line</span> का combination सबसे interesting
                हिस्सा है।
              </p>
              <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
                आपकी हथेली बताती है कि आप repetitive work से ज़्यादा{" "}
                <span className="font-bold">thinking, responsibility</span> और decision-making
                वाले roles में बेहतर perform करते हैं।
              </p>
              <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
                आप ऐसे environments में grow करते हैं जहाँ सीखने, बढ़ने और अपनी abilities का
                उपयोग करने का मौका लगातार मिलता रहे।
              </p>
            </div>
          </div>

          <div className="relative h-[200px] overflow-hidden">
            <Image
              src={ASSETS.palm}
              alt="Head line and fate line on palm"
              fill
              sizes="300px"
              className="object-contain object-center"
              priority
              unoptimized
            />
            <div
              className="absolute left-2 top-3 max-w-[124px] rounded-[8px] px-1.5 py-1"
              style={{
                background: "rgba(255,248,232,0.92)",
                border: `1px solid rgba(169,101,5,0.4)`,
              }}
            >
              <p className="text-[9px] font-bold leading-tight" style={{ color: HEADER.red }}>
                Head Line
              </p>
              <p
                className="text-[8.5px] leading-tight font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                Thinking, Intelligence &amp; Decision Style
              </p>
            </div>
            <div
              className="absolute bottom-3 left-2 max-w-[124px] rounded-[8px] px-1.5 py-1"
              style={{
                background: "rgba(255,248,232,0.92)",
                border: `1px solid rgba(169,101,5,0.4)`,
              }}
            >
              <p className="text-[9px] font-bold leading-tight" style={{ color: HEADER.gold }}>
                Fate Line
              </p>
              <p
                className="text-[8.5px] leading-tight font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                Career Path, Direction &amp; Growth
              </p>
            </div>
          </div>
        </section>

        <IntroFrame className="mt-2" minHeight={64}>
          <PngIcon src={ASSETS.icons.star} size={36} />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            ये <span className="font-bold">work-style tendencies</span> हैं — traditional
            interpretation के आधार पर। Fixed profession predictions नहीं।
          </p>
          <div className="relative h-[56px] w-[120px] shrink-0">
            <Image
              src={ASSETS.careerPath}
              alt=""
              fill
              sizes="120px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </IntroFrame>

        <div className="mt-2.5 shrink-0">
          <PointedBanner title="SUITABLE WORK ENVIRONMENT / WORK STYLE TENDENCIES" />
        </div>

        <section
          className="mt-2 grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-2 rounded-[14px] px-3 py-2.5"
          style={{
            background: "rgba(248,232,204,0.45)",
            border: `1px solid rgba(169,101,5,0.4)`,
          }}
        >
          {WORK_STYLES.map((item) => (
            <WorkStyleCard key={item.title} item={item} />
          ))}
        </section>

        <IntroFrame className="mt-2.5" minHeight={78}>
          <PngIcon src={ASSETS.icons.business} size={40} />
          <div className="min-w-0 flex-1">
            <p
              className="text-center text-[12px] font-bold tracking-[0.08em]"
              style={{ color: HEADER.maroon }}
            >
              IMPORTANT ADVICE
            </p>
            <p
              className="mt-1 text-center text-[13px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              ऐसे कार्य चुनें जहाँ सीखने, बढ़ने, निर्णय लेने और अपनी क्षमताओं का उपयोग करने
              का अवसर लगातार मिलता रहे।
            </p>
          </div>
          <div className="relative h-[64px] w-[110px] shrink-0">
            <Image
              src={ASSETS.climbSuccess}
              alt="Career growth path"
              fill
              sizes="110px"
              className="object-contain object-center"
              unoptimized
            />
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
