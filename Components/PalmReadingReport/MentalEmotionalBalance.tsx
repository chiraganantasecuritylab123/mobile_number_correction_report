import Image from "next/image";
import {
  Brain,
  CircleCheck,
  ClipboardList,
  Clock,
  Cloud,
  Cog,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  PersonStanding,
  Smartphone,
  Target,
  TrendingUp,
  UserX,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/head-line.png",
  pattern2: "/assets/cover/pattern-2.png",
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
  red: "#c41e3a",
} as const;

const LEFT_POINTS = [
  {
    text: "Head Line strong होने के कारण mental activity high रहने की tendency दिखाई देती है।",
    icon: Brain,
  },
  {
    text: "आपका mind खाली रहने की बजाय लगातार किसी problem, plan या future possibility के बारे में सोच सकता है।",
    icon: MessageCircle,
  },
  {
    text: "इससे productivity बढ़ सकती है लेकिन excessive thinking mental fatigue भी पैदा कर सकती है।",
    icon: TrendingUp,
  },
] as const;

const HABITS = [
  {
    title: "STRUCTURED PLANNING",
    text: "दिन को structured तरीके से plan करें।",
    icon: ClipboardList,
  },
  {
    title: "REGULAR PHYSICAL ACTIVITY",
    text: "Regular physical activity से mind हल्का रहे।",
    icon: PersonStanding,
  },
  {
    title: "SCREEN BREAKS",
    text: "Screen breaks लेकर mental rest दें।",
    icon: Smartphone,
  },
  {
    title: "CLEAR PRIORITIES",
    text: "Clear priorities से confusion कम होगा।",
    icon: Target,
  },
  {
    title: "UNNECESSARY COMPARISON",
    text: "Unnecessary comparison से बचें।",
    icon: UserX,
  },
] as const;

const MENTAL_PATTERN = [
  "आप deep thinker हैं — बातों को surface से आगे समझते हैं।",
  "Future planning पर आपका focus naturally मजबूत रहता है।",
  "Overthinking कभी-कभी decisions को delay कर सकता है।",
  "Solitude में आपको clarity मिल सकती है।",
  "Creative thinking आपकी बड़ी mental strength है।",
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
    <div className="relative mx-auto mt-3 flex w-full max-w-[660px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 440,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Brain size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          17. MENTAL &amp; EMOTIONAL BALANCE
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

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[580px] items-center justify-center">
      <Pattern3 size={56} className="absolute left-[-4px] opacity-90" />
      <div
        className="relative z-10 rounded-full px-5 py-1.5"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 360,
        }}
      >
        <p className="text-center text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
          {title}
        </p>
      </div>
      <Pattern3 size={56} className="absolute right-[-4px] rotate-180 opacity-90" />
    </div>
  );
}

export default function MentalEmotionalBalance({
  pageNumber = "18",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="mental-emotional-balance" pageNumber={pageNumber}>
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

        <section className="mt-3 grid grid-cols-[1fr_0.95fr_0.85fr] items-stretch gap-2.5">
          <div className="flex flex-col justify-between gap-3 py-1">
            {LEFT_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-2">
                  <IconCircle size={34}>
                    <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="text-[11px] leading-[1.4] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
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
              alt="Head line mental pattern"
              fill
              sizes="240px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.1) translateY(4px)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 240 220"
              aria-hidden
            >
              <path
                d="M72 108 C118 118, 158 128, 198 142"
                fill="none"
                stroke={COLORS.red}
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-[14px] px-2 py-3"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full"
              style={{
                border: "1.4px solid rgba(184,134,11,0.55)",
                background:
                  "radial-gradient(circle at 40% 35%, rgba(212,175,55,0.35) 0%, rgba(255,248,232,0.95) 70%)",
              }}
            >
              <Brain size={32} strokeWidth={1.5} style={{ color: COLORS.maroon }} />
            </div>
            <Cloud size={18} className="mt-2" style={{ color: COLORS.gold }} />
            <p
              className="mt-1.5 text-center text-[10px] font-bold tracking-[0.06em]"
              style={{ color: COLORS.maroon }}
            >
              ACTIVE MIND
            </p>
            <p
              className="mt-0.5 text-center text-[9.5px] leading-tight font-nunito-sans"
              style={{ color: COLORS.slate }}
            >
              Thinking · Planning · Analysis
            </p>
          </div>
        </section>

        <section className="mt-2.5">
          <PointedBanner title="USEFUL HABITS FOR MENTAL BALANCE" />
          <div
            className="mt-2 grid grid-cols-5 gap-1.5 rounded-[14px] px-2 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {HABITS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-1 text-center"
                  style={{
                    borderRight:
                      index < HABITS.length - 1
                        ? "1px dashed rgba(184,134,11,0.35)"
                        : "none",
                  }}
                >
                  <IconCircle size={34}>
                    <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="mt-1.5 text-[9px] font-bold leading-tight tracking-[0.03em]"
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

        <section className="mt-2.5">
          <PointedBanner title="YOUR MENTAL PATTERN" />
          <div
            className="mt-2 grid grid-cols-[0.85fr_1.15fr] items-stretch gap-2.5 rounded-[14px] p-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <div
              className="relative flex flex-col items-center justify-center overflow-hidden rounded-[12px] px-2 py-3"
              style={{
                border: "1px solid rgba(184,134,11,0.4)",
                background:
                  "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.22) 0%, rgba(255,248,232,0.9) 75%)",
              }}
            >
              <div className="absolute left-3 top-4">
                <IconCircle size={24}>
                  <Lightbulb size={11} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute right-3 top-6">
                <IconCircle size={24}>
                  <Cog size={11} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute bottom-10 left-4">
                <IconCircle size={24}>
                  <TrendingUp size={11} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute bottom-10 right-4">
                <IconCircle size={24}>
                  <Clock size={11} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <IconCircle size={24}>
                  <HelpCircle size={11} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <Brain size={36} strokeWidth={1.4} style={{ color: COLORS.maroon }} />
              <p
                className="mt-2 text-center text-[10px] font-bold tracking-[0.06em]"
                style={{ color: COLORS.maroon }}
              >
                INNER MIND MAP
              </p>
            </div>

            <div className="flex flex-col justify-between gap-1.5">
              {MENTAL_PATTERN.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CircleCheck
                    size={14}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.gold }}
                  />
                  <p
                    className="text-[11px] leading-[1.35] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}
              <div
                className="mt-1 flex items-center gap-2 rounded-[10px] px-2.5 py-2"
                style={{
                  background: "rgba(255,248,232,0.95)",
                  border: "1px solid rgba(184,134,11,0.5)",
                }}
              >
                <IconCircle size={30}>
                  <Brain size={13} strokeWidth={1.8} style={{ color: COLORS.maroon }} />
                </IconCircle>
                <p
                  className="text-[11px] leading-[1.35] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  Traditional palmistry perspective से आपकी biggest mental challenge{" "}
                  <span className="font-bold font-cinzel tracking-[0.04em]" style={{ color: COLORS.maroon }}>
                    OVER-ANALYSIS
                  </span>{" "}
                  है।
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-auto flex flex-col items-center pt-1.5">
          <OrnamentDivider width={180} />
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={22} />
            <blockquote
              className="max-w-[500px] text-center text-[12px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;शांत मन, स्पष्ट सोच और संतुलित दिनचर्या ही सच्ची मानसिक शक्ति है।&rdquo;
            </blockquote>
            <CoverLotus size={22} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
