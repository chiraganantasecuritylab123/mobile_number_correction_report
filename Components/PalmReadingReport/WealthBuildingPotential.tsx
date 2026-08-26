import Image from "next/image";
import {
  BookOpen,
  Building2,
  Diamond,
  Eye,
  Flag,
  Gem,
  HandCoins,
  Heart,
  IndianRupee,
  Mountain,
  PiggyBank,
  Scale,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/hand.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunrise: "/assets/number-activations/sunrise.png",
} as const;

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#b8860b",
  goldLight: "#d4af37",
  cream: "#f8edd8",
  creamBox: "rgba(248, 232, 204, 0.72)",
  body: "#3c2a21",
  slate: "#4a4540",
} as const;

const INDICATORS = [
  {
    title: "Strong Thumb",
    text: "Willpower, self-discipline और decisions की strength financial growth को support करती है।",
    icon: ThumbsUp,
    side: "left" as const,
  },
  {
    title: "Sun / Apollo Influence",
    text: "Recognition, reputation और creativity financial stability और success को बढ़ाता है।",
    icon: Mountain,
    side: "left" as const,
  },
  {
    title: "Venus Mount",
    text: "Energy, passion और resources को attract करने की क्षमता wealth accumulation में मदद करती है।",
    icon: Heart,
    side: "right" as const,
  },
  {
    title: "Fate Line Support",
    text: "Self-effort, consistency और clear direction long-term financial growth का मज़बूत foundation बनाती है।",
    icon: Building2,
    side: "right" as const,
  },
] as const;

const STRATEGY = [
  {
    title: "Define Goals",
    text: "Clear financial goals set करें और लिखें।",
    icon: Target,
  },
  {
    title: "Save Consistently",
    text: "Income का कुछ हिस्सा हर महीने save करें।",
    icon: PiggyBank,
  },
  {
    title: "Invest Wisely",
    text: "Long-term investments को प्राथमिकता दें।",
    icon: TrendingUp,
  },
  {
    title: "Continuous Learning",
    text: "Skills और knowledge में लगातार improvement करें।",
    icon: BookOpen,
  },
  {
    title: "Review Regularly",
    text: "Time-to-time review करें और strategy adjust करें।",
    icon: Eye,
  },
] as const;

function PalmReadingPageFrame({
  children,
  pageLabel,
  pageNumber,
}: {
  children?: ReactNode;
  pageLabel: string;
  pageNumber: string;
}) {
  return (
    <article
      data-report-page
      data-page-label={pageLabel}
      data-report-page-number={pageNumber}
      className="relative mx-auto overflow-hidden shadow-xl"
      style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
    >
      <Image
        src={ASSETS.cover}
        alt=""
        fill
        sizes={`${PAGE_WIDTH}px`}
        className="pointer-events-none select-none object-fill"
        aria-hidden
      />
      <Image
        src={ASSETS.logo}
        alt="Astro Aarambh"
        width={88}
        height={88}
        className="absolute left-1/2 z-20 -translate-x-1/2 object-contain"
        style={{ top: 28 }}
      />
      <div className="relative z-10 h-full">{children}</div>
      <div className="absolute bottom-[16px] right-[36px] z-20 flex items-center gap-1.5 font-cinzel">
        <Pattern3 size={36} />
        <span
          className="text-[11px] font-bold tracking-[0.16em]"
          style={{ color: COLORS.maroon }}
        >
          PAGE {pageNumber}
        </span>
        <Pattern3 size={36} className="rotate-180" />
      </div>
    </article>
  );
}

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

function SectionBar() {
  return (
    <div className="relative mx-auto mt-3 flex w-full max-w-[640px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 420,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Gem size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          13. WEALTH-BUILDING POTENTIAL
        </p>
      </div>
      <Pattern3 size={78} className="absolute right-[-8px] rotate-180 opacity-90" />
    </div>
  );
}

function IconCircle({ children, size = 34 }: { children: ReactNode; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: "1.3px solid rgba(184,134,11,0.7)",
        background: "#fff8e8",
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <Star size={11} fill={COLORS.goldLight} stroke={COLORS.gold} />
      <p
        className="text-[11px] font-bold tracking-[0.1em]"
        style={{ color: COLORS.gold }}
      >
        {title}
      </p>
      <Star size={11} fill={COLORS.goldLight} stroke={COLORS.gold} />
    </div>
  );
}

function CoinChart() {
  return (
    <div
      className="relative flex h-[68px] w-[100px] shrink-0 items-end justify-center gap-1 overflow-hidden rounded-[10px] pb-2"
      style={{
        border: "1px solid rgba(184,134,11,0.45)",
        background:
          "radial-gradient(circle at 50% 80%, rgba(212,175,55,0.28) 0%, rgba(248,237,216,0.95) 72%)",
      }}
    >
      {[16, 26, 36, 46].map((h, i) => (
        <div
          key={h}
          className="flex w-[13px] flex-col items-center justify-end rounded-t-[3px]"
          style={{
            height: h,
            background: `linear-gradient(180deg, ${COLORS.goldLight} 0%, ${COLORS.gold} 100%)`,
            boxShadow: "0 1px 2px rgba(92,24,24,0.18)",
          }}
        >
          {i === 3 && (
            <IndianRupee
              size={8}
              strokeWidth={2.4}
              style={{ color: COLORS.maroonDeep, marginBottom: 2 }}
            />
          )}
        </div>
      ))}
      <TrendingUp
        size={15}
        className="absolute right-1.5 top-1.5"
        style={{ color: COLORS.maroon }}
      />
    </div>
  );
}

function IndicatorCard({
  title,
  text,
  icon: Icon,
  align = "left",
}: {
  title: string;
  text: string;
  icon: typeof Heart;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-start gap-2 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <IconCircle size={32}>
        <Icon size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
      </IconCircle>
      <div>
        <p
          className="text-[11px] font-bold leading-none tracking-[0.04em]"
          style={{ color: COLORS.maroon }}
        >
          {title}
        </p>
        <p
          className="mt-1 text-[10px] leading-[1.35] font-nunito-sans"
          style={{ color: COLORS.body }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function WealthBuildingPotential({
  pageNumber = "14",
}: {
  pageNumber?: string;
}) {
  const leftIndicators = INDICATORS.filter((item) => item.side === "left");
  const rightIndicators = INDICATORS.filter((item) => item.side === "right");

  return (
    <PalmReadingPageFrame pageLabel="wealth-building-potential" pageNumber={pageNumber}>
      <div
        className="absolute inset-x-0 flex flex-col px-11 font-cinzel"
        style={{ top: 114, bottom: 38 }}
      >
        <header className="flex flex-col items-center text-center">
          <p
            className="text-[26px] font-bold leading-none tracking-[0.06em]"
            style={{ color: COLORS.maroon }}
          >
            ASTRO AARAMBH
          </p>
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <OrnamentDivider width={72} />
            <h1
              className="text-[13px] font-bold tracking-[0.12em]"
              style={{ color: COLORS.gold }}
            >
              PREMIUM PALM READING REPORT
            </h1>
            <OrnamentDivider width={72} />
          </div>
        </header>

        <SectionBar />

        <section
          className="mt-3 flex items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.45)",
          }}
        >
          <IconCircle size={42}>
            <HandCoins size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
          <div className="flex-1 space-y-1 font-nunito-sans">
            <p className="text-[12px] leading-[1.45]" style={{ color: COLORS.body }}>
              Palmistry में financial success सिर्फ money markings से नहीं पढ़ा जाता — यह{" "}
              <span className="font-bold">thumb, Venus mount, Fate line</span> और{" "}
              <span className="font-bold">Sun / Apollo influence</span> का combined reading है।
            </p>
            <p className="text-[12px] leading-[1.45]" style={{ color: COLORS.body }}>
              आपकी हथेली <span className="font-bold">self-effort based financial growth</span> की
              ओर संकेत करती है।
            </p>
          </div>
          <CoinChart />
        </section>

        <section className="mt-2.5">
          <SectionLabel title="KEY PALM INDICATORS FOR WEALTH" />
          <div className="grid grid-cols-[1fr_0.95fr_1fr] items-stretch gap-2">
            <div className="flex flex-col justify-between gap-3 py-1">
              {leftIndicators.map((item) => (
                <IndicatorCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                  align="left"
                />
              ))}
            </div>

            <div
              className="relative overflow-hidden rounded-[16px]"
              style={{
                minHeight: 220,
                border: "1.4px solid rgba(184,134,11,0.55)",
                background:
                  "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
              }}
            >
              <Image
                src={ASSETS.hand}
                alt="Wealth palm indicators"
                fill
                sizes="240px"
                className="object-contain mix-blend-screen"
                style={{ transform: "scale(1.1) translateY(4px)" }}
              />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 240 280"
                aria-hidden
              >
                <path
                  d="M70 70 L110 120"
                  fill="none"
                  stroke={COLORS.gold}
                  strokeWidth="1.4"
                  strokeDasharray="4 3"
                />
                <path
                  d="M70 190 L115 165"
                  fill="none"
                  stroke={COLORS.gold}
                  strokeWidth="1.4"
                  strokeDasharray="4 3"
                />
                <path
                  d="M170 70 L140 125"
                  fill="none"
                  stroke={COLORS.gold}
                  strokeWidth="1.4"
                  strokeDasharray="4 3"
                />
                <path
                  d="M175 195 L130 160"
                  fill="none"
                  stroke={COLORS.gold}
                  strokeWidth="1.4"
                  strokeDasharray="4 3"
                />
              </svg>
            </div>

            <div className="flex flex-col justify-between gap-3 py-1">
              {rightIndicators.map((item) => (
                <IndicatorCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                  align="right"
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="mt-2.5 rounded-[14px] px-3 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.45)",
          }}
        >
          <SectionLabel title="SELF-EFFORT BASED GROWTH" />
          <div className="flex items-center gap-3">
            <IconCircle size={40}>
              <Flag size={16} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
            <p
              className="flex-1 text-[12px] leading-[1.45] font-nunito-sans"
              style={{ color: COLORS.body }}
            >
              Financial position में सुधार आपके{" "}
              <span className="font-bold">अपने decisions, hard work</span> और{" "}
              <span className="font-bold">planning</span> से जुड़ा है — sudden luck से नहीं।
            </p>
            <div
              className="relative h-[58px] w-[88px] shrink-0 overflow-hidden rounded-[10px]"
              style={{
                border: "1px solid rgba(184,134,11,0.45)",
                background:
                  "radial-gradient(circle at 50% 70%, rgba(212,175,55,0.28) 0%, rgba(248,237,216,0.95) 72%)",
              }}
            >
              <Image
                src={ASSETS.sunrise}
                alt=""
                fill
                sizes="88px"
                className="object-contain mix-blend-screen p-1"
              />
              <Mountain
                size={14}
                className="absolute bottom-1.5 left-2"
                style={{ color: COLORS.maroon }}
              />
              <Flag
                size={12}
                className="absolute bottom-1.5 right-2"
                style={{ color: COLORS.gold }}
              />
            </div>
          </div>
        </section>

        <section className="mt-2.5">
          <SectionLabel title="WEALTH PRINCIPLE FOR YOU" />
          <div
            className="flex items-center gap-3 rounded-[14px] px-3 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.45)",
            }}
          >
            <IconCircle size={42}>
              <Diamond size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
            <blockquote
              className="flex-1 text-center text-[13px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;Short-term excitement से ज़्यादा long-term compounding पर ध्यान।&rdquo;
            </blockquote>
            <IconCircle size={42}>
              <Scale size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
          </div>
        </section>

        <section className="mt-2.5">
          <SectionLabel title="WEALTH-BUILDING STRATEGY" />
          <div
            className="grid grid-cols-5 gap-1.5 rounded-[14px] px-2 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {STRATEGY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center px-1 text-center">
                  <IconCircle size={34}>
                    <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="mt-1.5 text-[10px] font-bold leading-tight tracking-[0.03em]"
                    style={{ color: COLORS.maroon }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="mt-0.5 text-[9.5px] leading-[1.3] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-auto flex flex-col items-center pt-2">
          <OrnamentDivider width={200} />
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={24} />
            <blockquote
              className="max-w-[520px] text-center text-[12px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;धैर्य, योजना और निरंतर प्रयास — यही सच्ची समृद्धि का मार्ग है।&rdquo;
            </blockquote>
            <CoverLotus size={24} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
