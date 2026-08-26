import Image from "next/image";
import {
  ArrowDown,
  BarChart3,
  BookOpen,
  Brain,
  GraduationCap,
  Lightbulb,
  Mountain,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sprout,
  Star,
  Target,
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
  goldLine: "#b8860b",
} as const;

const JOURNEY = [
  {
    title: "START",
    text: "शुरुआती phase में learning, skills develop करना और explore करने का समय।",
    icon: Sprout,
  },
  {
    title: "EXPERIENCE",
    text: "Practical exposure, real-world challenges और knowledge gain होता है।",
    icon: BookOpen,
  },
  {
    title: "CHANGE",
    text: "Career direction या role में बदलाव की संभावना हो सकती है।",
    icon: RefreshCw,
  },
  {
    title: "BETTER DIRECTION",
    text: "सही दिशा चुनने के बाद growth, confidence और progress तेज़ी से बढ़ता है।",
    icon: BarChart3,
  },
  {
    title: "STABILITY",
    text: "आगे चलकर career में stability, respect और long-term success मिलने की संभावना है।",
    icon: ShieldCheck,
  },
] as const;

const INSIGHTS = [
  {
    title: "LEARNING IS KEY",
    text: "लगातार सीखना आपके लिए career growth का सबसे बड़ा secret रहेगा।",
    icon: Brain,
  },
  {
    title: "GROWTH MINDSET",
    text: "नई skills, knowledge और adaptability आपको हमेशा ahead रखेगी।",
    icon: TrendingUp,
  },
  {
    title: "DECISIONS MATTER",
    text: "सही समय पर सही decision आपकी पूरी career trajectory बदल सकता है।",
    icon: Scale,
  },
  {
    title: "FOCUS & CONSISTENCY",
    text: "एक बार clear दिशा मिल जाए, तो focus और consistency से great results मिलेंगे।",
    icon: Target,
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
          minWidth: 360,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <BarChart3 size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          11. CAREER GROWTH
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

function ColumnTitle({ title }: { title: string }) {
  return (
    <div
      className="mb-2 rounded-full px-3 py-1 text-center"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <p className="text-[10px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
    </div>
  );
}

export default function CareerGrowth({
  pageNumber = "12",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="career-growth" pageNumber={pageNumber}>
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
          <IconCircle size={44}>
            <Mountain size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
          <p
            className="flex-1 text-[12.5px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            Fate Line की <span className="font-bold">middle portion</span> में strength
            variation career journey में <span className="font-bold">changes</span> की ओर संकेत
            कर सकती है।
          </p>
          <div
            className="relative h-[72px] w-[108px] shrink-0 overflow-hidden rounded-[10px]"
            style={{
              border: "1px solid rgba(184,134,11,0.45)",
              background:
                "radial-gradient(circle at 50% 70%, rgba(212,175,55,0.28) 0%, rgba(248,237,216,0.95) 70%)",
            }}
          >
            <Image
              src={ASSETS.sunrise}
              alt=""
              fill
              sizes="108px"
              className="object-contain mix-blend-screen p-1"
            />
          </div>
        </section>

        <section className="mt-3 grid flex-1 grid-cols-[1fr_0.95fr_1fr] items-stretch gap-2.5">
          <div
            className="flex flex-col rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <ColumnTitle title="CAREER JOURNEY PATTERN" />
            <div className="flex flex-1 flex-col justify-between">
              {JOURNEY.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title}>
                    <div className="flex items-start gap-2">
                      <IconCircle size={32}>
                        <Icon size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
                      </IconCircle>
                      <div>
                        <p
                          className="text-[11px] font-bold leading-none tracking-[0.04em]"
                          style={{ color: COLORS.maroon }}
                        >
                          {index + 1}. {step.title}
                        </p>
                        <p
                          className="mt-1 text-[10px] leading-[1.32] font-nunito-sans"
                          style={{ color: COLORS.body }}
                        >
                          {step.text}
                        </p>
                      </div>
                    </div>
                    {index < JOURNEY.length - 1 && (
                      <div className="my-0.5 flex justify-center">
                        <ArrowDown size={12} style={{ color: COLORS.maroon }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[16px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Fate line"
              fill
              sizes="240px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.12) translateY(6px)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 240 360"
              aria-hidden
            >
              <path
                d="M118 78 C116 150, 116 230, 118 292"
                fill="none"
                stroke={COLORS.goldLine}
                strokeWidth="2.6"
                strokeDasharray="6 5"
                strokeLinecap="round"
              />
            </svg>
            <Star
              size={12}
              className="absolute left-4 top-8"
              fill={COLORS.goldLight}
              stroke={COLORS.gold}
            />
            <Star
              size={10}
              className="absolute right-5 top-16"
              fill={COLORS.goldLight}
              stroke={COLORS.gold}
            />
            <Star
              size={9}
              className="absolute right-6 bottom-16"
              fill={COLORS.goldLight}
              stroke={COLORS.gold}
            />
            <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
              <CoverLotus size={34} />
              <p
                className="text-[10px] font-bold tracking-[0.08em]"
                style={{ color: COLORS.maroon }}
              >
                FATE LINE
              </p>
            </div>
          </div>

          <div
            className="flex flex-col rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <ColumnTitle title="IMPORTANT INSIGHTS" />
            <div className="flex flex-1 flex-col justify-between gap-2">
              {INSIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-2">
                    <IconCircle size={32}>
                      <Icon size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
                    </IconCircle>
                    <div>
                      <p
                        className="text-[10.5px] font-bold leading-none tracking-[0.04em]"
                        style={{ color: COLORS.maroon }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-1 text-[10px] leading-[1.32] font-nunito-sans"
                        style={{ color: COLORS.body }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="mt-2.5 flex items-center gap-2.5 rounded-[12px] px-3 py-2"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.45)",
          }}
        >
          <IconCircle size={32}>
            <Star size={14} fill={COLORS.goldLight} stroke={COLORS.gold} />
          </IconCircle>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.08em]" style={{ color: COLORS.maroon }}>
              IMPORTANT CAREER ADVICE
            </p>
            <p className="text-[11.5px] leading-[1.4] font-nunito-sans" style={{ color: COLORS.body }}>
              केवल salary देखकर decision लेने के बजाय learning + future growth को भी
              evaluate करना चाहिए।
            </p>
          </div>
          <TrendingUp size={20} style={{ color: COLORS.gold }} />
        </section>

        <section
          className="mt-2 flex items-center gap-2.5 rounded-[12px] px-3 py-2"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.4)",
          }}
        >
          <IconCircle size={32}>
            <Lightbulb size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
          </IconCircle>
          <p className="flex-1 text-[11.5px] leading-[1.4] font-nunito-sans" style={{ color: COLORS.body }}>
            अगर किसी role में learning completely stop हो जाए, तो long-term satisfaction कम हो
            सकती है।
          </p>
          <div className="flex items-center gap-1.5">
            <BookOpen size={18} style={{ color: COLORS.gold }} />
            <GraduationCap size={18} style={{ color: COLORS.maroon }} />
            <BarChart3 size={18} style={{ color: COLORS.gold }} />
          </div>
        </section>

        <footer className="mt-auto flex flex-col items-center pt-2">
          <OrnamentDivider width={200} />
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={24} />
            <blockquote
              className="max-w-[500px] text-center text-[12px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;सही दिशा, सही सीख और सही निर्णय – यही सफल career का मूल मंत्र है।&rdquo;
            </blockquote>
            <CoverLotus size={24} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
