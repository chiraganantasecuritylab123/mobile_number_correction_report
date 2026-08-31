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
  palm: "/assets/palm-reading-report/palm-shape/palm-diagram-clear.png",
  icons: {
    observation: "/assets/palm-reading-report/palm-shape/icon-observation-clear.png",
    brain: "/assets/palm-reading-report/palm-shape/icon-brain-clear.png",
    adaptability: "/assets/palm-reading-report/life-line/icon-environment-clear.png",
    heart: "/assets/palm-reading-report/palm-shape/icon-heart-clear.png",
    independence: "/assets/palm-reading-report/palm-shape/icon-independence-clear.png",
    eye: "/assets/palm-reading-report/palm-shape/icon-eye-clear.png",
    personality: "/assets/palm-reading-report/palm-shape/icon-personality-clear.png",
    target: "/assets/palm-reading-report/palm-shape/icon-target-clear.png",
  },
} as const;

const TENDENCIES = [
  { title: "Observation", value: "Strong", iconSrc: ASSETS.icons.observation },
  { title: "Thinking", value: "Analytical", iconSrc: ASSETS.icons.brain },
  { title: "Adaptability", value: "Good", iconSrc: ASSETS.icons.adaptability },
  {
    title: "Emotional Sensitivity",
    value: "Moderate to High",
    iconSrc: ASSETS.icons.heart,
  },
  { title: "Independence", value: "Strong", iconSrc: ASSETS.icons.independence },
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
      title="2. PALM SHAPE — आपकी मूल प्रकृति"
      icon={<CoverLotus size={22} className="opacity-100" />}
      minWidth={430}
    />
  );
}

function TendencyItem({
  iconSrc,
  title,
  value,
  showDivider,
}: {
  iconSrc: string;
  title: string;
  value: string;
  showDivider?: boolean;
}) {
  return (
    <div
      className="flex flex-1 flex-col items-center px-1.5 py-2 text-center"
      style={{
        borderRight: showDivider ? "1px solid rgba(169,101,5,0.35)" : "none",
      }}
    >
      <PngIcon src={iconSrc} size={44} />
      <p
        className="mt-1.5 text-[11.5px] font-bold tracking-[0.04em]"
        style={{ color: HEADER.maroon }}
      >
        {title}
      </p>
      <p
        className="mt-0.5 text-[11.5px] font-semibold font-nunito-sans"
        style={{ color: HEADER.gold }}
      >
        {value}
      </p>
    </div>
  );
}

export default function PalmShape({ pageNumber = "03" }: { pageNumber?: string }) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="palm-shape"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-2.5 grid shrink-0 grid-cols-[1.08fr_0.92fr] items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            border: `1.4px solid rgba(169,101,5,0.55)`,
            background: "rgba(248,232,204,0.35)",
          }}
        >
          <div className="flex flex-col gap-3 font-nunito-sans">
            <p className="text-[13px] leading-[1.5]" style={{ color: HEADER.body }}>
              आपकी हथेली का आकार <span className="font-bold">आयताकार (Rectangular)</span> है
              और उँगलियाँ अपेक्षाकृत लंबी हैं। यह संरचना दर्शाती है कि आप outwardly practical
              और grounded दिखते हैं, लेकिन internally एक thoughtful observer हैं।
            </p>

            <div className="flex items-start gap-2.5">
              <PngIcon src={ASSETS.icons.eye} size={36} alt="Observation" />
              <p className="text-[13px] leading-[1.5]" style={{ color: HEADER.body }}>
                लंबी उँगलियाँ observation और internal evaluation की क्षमता बढ़ाती हैं। आप किसी
                भी स्थिति को जल्दी absorb करते हैं और निर्णय से पहले कई कोणों से सोचते हैं।
              </p>
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={ASSETS.palm}
              alt="Palm shape diagram"
              fill
              sizes="300px"
              className="object-contain object-center"
              priority
              unoptimized
            />
            <div className="absolute bottom-4 left-2 max-w-[130px] text-left">
              <p
                className="text-[11px] font-bold leading-tight"
                style={{ color: HEADER.maroon }}
              >
                आयताकार हथेली
              </p>
              <p
                className="mt-0.5 text-[10px] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                (Rectangular Palm)
              </p>
            </div>
            <div className="absolute right-2 top-4 max-w-[138px] text-right">
              <p
                className="text-[11px] font-bold leading-tight"
                style={{ color: HEADER.maroon }}
              >
                लंबी उँगलियाँ
              </p>
              <p
                className="mt-0.5 text-[10px] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                (Thoughtful &amp; Observant)
              </p>
            </div>
          </div>
        </section>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-full px-5 py-1"
              style={{
                background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
                boxShadow: "0 1px 0 rgba(212,175,55,0.35)",
              }}
            >
              <p className="whitespace-nowrap text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
                आपकी NATURAL TENDENCIES
              </p>
            </div>
          </div>
          <div
            className="flex items-stretch rounded-[14px] px-1 pb-1 pt-4"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {TENDENCIES.map((item, index) => (
              <TendencyItem
                key={item.title}
                iconSrc={item.iconSrc}
                title={item.title}
                value={item.value}
                showDivider={index < TENDENCIES.length - 1}
              />
            ))}
          </div>
        </section>

        <section
          className="mt-3 flex shrink-0 items-center gap-3 rounded-[14px] px-4 py-3"
          style={{
            background: "rgba(248,232,204,0.55)",
            border: `1px solid rgba(169,101,5,0.45)`,
          }}
        >
          <PngIcon src={ASSETS.icons.personality} size={52} alt="Personality" />
          <p
            className="min-w-0 flex-1 text-[13px] leading-[1.5] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            यह एक interesting combination है — बाहर से practical और grounded व्यक्तित्व, अंदर
            से deep processing और sensitive analysis। आप सोच-समझकर चलते हैं, इसलिए आपकी
            personality pattern thoughtful leadership की ओर झुकती है।
          </p>
        </section>

        <IntroFrame className="mt-3" minHeight={78}>
          <span
            className="inline-block h-2.5 w-2.5 shrink-0 rotate-45"
            style={{ background: HEADER.goldBright }}
          />
          <div className="min-w-0 flex-1">
            <p
              className="text-center text-[13px] font-bold tracking-[0.04em]"
              style={{ color: HEADER.maroon }}
            >
              आपके लिए महत्वपूर्ण सीख
            </p>
            <p
              className="mt-1 text-center text-[13px] leading-[1.45] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              Decision लेने में Perfect Clarity का इंतज़ार आपको धीमा कर सकता है। Observation
              आपकी ताकत है — लेकिन overthinking को सही समय पर action में बदलना आपकी अगली
              growth है।
            </p>
          </div>
          <PngIcon src={ASSETS.icons.target} size={48} alt="Focus" />
        </IntroFrame>

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="max-w-[520px] text-center text-[12.5px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.maroon }}
            >
              “Perfect Clarity का इंतज़ार करने से अच्छा है — Right Time पर सही कदम उठाना।”
            </p>
            <CoverLotus size={22} />
          </div>
{/* 
          <div className="mt-1.5 flex w-full items-center justify-end gap-2 pr-1">
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
