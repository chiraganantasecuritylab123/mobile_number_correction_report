import Image from "next/image";
import {
  ArrowRight,
  CircleAlert,
  CircleCheck,
} from "lucide-react";
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
  moneyTree: "/assets/palm-reading-report/money-wealth/money-bag-tree-clear.png",
  rupeeTree: "/assets/palm-reading-report/money-wealth/rupee-tree-clear.png",
  icons: {
    coins: "/assets/palm-reading-report/money-wealth/icon-coins-clear.png",
    moneyBag: "/assets/palm-reading-report/money-wealth/icon-money-bag-clear.png",
    strengthIdea: "/assets/palm-reading-report/money-wealth/icon-strength-idea-clear.png",
    challengeStorm: "/assets/palm-reading-report/money-wealth/icon-challenge-storm-clear.png",
    lightbulb: "/assets/palm-reading-report/icons/lightbulb-gold.png",
    career: "/assets/palm-reading-report/major-life-changes/icon-career-clear.png",
    growth: "/assets/palm-reading-report/major-life-changes/icon-growth-clear.png",
    learning: "/assets/palm-reading-report/major-life-changes/icon-learning-clear.png",
    shield: "/assets/palm-reading-report/life-line/icon-shield-clear.png",
    scale: "/assets/palm-reading-report/icons/scale.png",
    business: "/assets/palm-reading-report/career-reading/icon-business-clear.png",
  },
} as const;

const STRENGTHS = [
  "Skill-based earning आपकी सबसे बड़ी financial ताकत है।",
  "Consistency से money steadily accumulate होती है।",
  "Smart decisions long-term security बनाते हैं।",
  "Saved और built wealth आपकी foundation मज़बूत करती है।",
] as const;

const CHALLENGES = [
  "Impulse spending पर control रखना ज़रूरी है।",
  "Overthinking financial action को delay कर सकता है।",
  "Short-term temptation long-term wealth काट सकती है।",
  "Emotional decisions money leak का कारण बन सकते हैं।",
] as const;

const FORMULA = [
  {
    title: "EARN",
    text: "Skills और effort से income बढ़ाना",
    iconSrc: ASSETS.icons.business,
  },
  {
    title: "SAVE",
    text: "Regular saving की आदत बनाना",
    iconSrc: ASSETS.icons.growth,
  },
  {
    title: "INVEST",
    text: "Long-term और smart investments",
    iconSrc: ASSETS.icons.career,
  },
  {
    title: "REVIEW",
    text: "समय-समय पर financial review करना",
    iconSrc: ASSETS.icons.scale,
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
      title="12. MONEY & WEALTH"
      iconSrc={ASSETS.icons.moneyBag}
      minWidth={360}
    />
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
      <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
    </div>
  );
}

export default function MoneyWealth({
  pageNumber = "13",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="money-wealth"
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
          <div className="relative h-[64px] w-[72px] shrink-0">
            <Image
              src={ASSETS.icons.moneyBag}
              alt="Wealth"
              fill
              sizes="72px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
          <p
            className="min-w-0 flex-1 text-[13px] leading-[1.45] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            आपकी हथेली एक <span className="font-bold">steady-building pattern</span> दिखाती है।
            Financial success sudden luck से नहीं, बल्कि skill, consistency और smart decisions से
            धीरे-धीरे बनती है।
          </p>
          <div className="relative h-[64px] w-[100px] shrink-0">
            <Image
              src={ASSETS.icons.career}
              alt="Growth chart"
              fill
              sizes="100px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </section>

        <IntroFrame className="mt-2" minHeight={54}>
          <CoverLotus size={36} className="shrink-0" />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            आपके लिए wealth का strongest source:{" "}
            <span className="font-bold font-cinzel tracking-[0.03em]" style={{ color: HEADER.maroon }}>
              SKILL + CONSISTENCY + SMART DECISIONS
            </span>
          </p>
          <CoverLotus size={36} className="shrink-0" />
        </IntroFrame>
        <p
          className="mt-1 shrink-0 text-center text-[12px] leading-[1.4] font-nunito-sans"
          style={{ color: HEADER.body }}
        >
          Accumulated wealth और long-term savings आपकी financial security की नींव बन सकते हैं।
        </p>

        <section className="mt-2.5 grid min-h-0 flex-1 grid-cols-[1fr_0.95fr_1fr] items-stretch gap-2.5">
          <div
            className="flex min-h-0 flex-col rounded-[14px] px-3 py-3"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <ColumnTitle title="FINANCIAL STRENGTH" />
            <div className="mb-2 flex justify-center">
              <PngIcon src={ASSETS.icons.strengthIdea} size={46} />
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-evenly gap-1.5">
              {STRENGTHS.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CircleCheck
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: HEADER.gold }}
                  />
                  <p
                    className="text-[12px] leading-[1.35] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-0 overflow-hidden">
            <Image
              src={ASSETS.palm}
              alt="Palm wealth reading"
              fill
              sizes="240px"
              className="object-contain object-center"
              unoptimized
            />
            <div className="absolute bottom-2 left-0 right-0 flex items-end justify-center gap-1.5">
              <CoverLotus size={26} />
              <PngIcon src={ASSETS.icons.coins} size={28} />
              <CoverLotus size={26} />
            </div>
          </div>

          <div
            className="flex min-h-0 flex-col rounded-[14px] px-3 py-3"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <ColumnTitle title="FINANCIAL CHALLENGE" />
            <div className="mb-2 flex shrink-0 justify-center">
              <PngIcon src={ASSETS.icons.challengeStorm} size={46} />
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-evenly gap-1.5">
              {CHALLENGES.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CircleAlert
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: HEADER.maroon }}
                  />
                  <p
                    className="text-[12px] leading-[1.35] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-full px-5 py-1"
              style={{
                background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
              }}
            >
              <p className="whitespace-nowrap text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
                FINANCIAL SUCCESS FORMULA
              </p>
            </div>
          </div>
          <div
            className="flex items-stretch gap-1.5 rounded-[14px] px-2.5 pb-2.5 pt-4"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {FORMULA.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-center">
                <div className="flex flex-1 flex-col items-center px-1 text-center">
                  <PngIcon src={step.iconSrc} size={40} />
                  <p
                    className="mt-1.5 text-[12px] font-bold tracking-[0.06em]"
                    style={{ color: HEADER.maroon }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="mt-1 text-[11.5px] leading-[1.3] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {step.text}
                  </p>
                </div>
                {index < FORMULA.length - 1 ? (
                  <ArrowRight size={14} className="shrink-0" style={{ color: HEADER.gold }} />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <IntroFrame className="mt-2.5" minHeight={68}>
          <PngIcon src={ASSETS.icons.learning} size={36} />
          <div className="min-w-0 flex-1">
            <p
              className="text-center text-[12px] font-bold tracking-[0.08em]"
              style={{ color: HEADER.maroon }}
            >
              FINANCIAL WISDOM
            </p>
            <p
              className="mt-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              कमाई तभी संपत्ति बनती है जब बचत, निवेश और सही निर्णय साथ चलें।
            </p>
          </div>
          <div className="relative h-[52px] w-[56px] shrink-0">
            <Image
              src={ASSETS.rupeeTree}
              alt=""
              fill
              sizes="56px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </IntroFrame>

        <footer className="mt-auto flex shrink-0 items-center justify-end gap-2 pt-2 pr-1">
          <Pattern3 size={28} />
          {/* <p
            className="text-[11px] font-bold tracking-[0.14em]"
            style={{ color: COLORS.brown }}
          >
            {pageNumber}
          </p> */}
          <Pattern3 size={28} className="rotate-180" />
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
