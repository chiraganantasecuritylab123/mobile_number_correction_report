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
  hand: "/assets/palm-reading-report/emotional-hand.png",
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
    <div className="relative mx-auto mt-2.5 flex w-full max-w-[680px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-2 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 460,
        }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Brain size={20} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[14px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          17. MENTAL &amp; EMOTIONAL BALANCE
        </p>
      </div>
      <Pattern3 size={78} className="absolute right-[-8px] rotate-180 opacity-90" />
    </div>
  );
}

function IconCircle({ children, size = 40 }: { children: ReactNode; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: "1.5px solid rgba(184,134,11,0.7)",
        background: "#fff8e8",
      }}
    >
      {children}
    </div>
  );
}

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center">
      <Pattern3 size={60} className="absolute left-[-4px] opacity-90" />
      <div
        className="relative z-10 rounded-full px-6 py-1.5"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 400,
        }}
      >
        <p className="text-center text-[13px] font-bold tracking-[0.08em] text-[#f6e6c4]">
          {title}
        </p>
      </div>
      <Pattern3 size={60} className="absolute right-[-4px] rotate-180 opacity-90" />
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
        className="absolute inset-x-0 flex min-h-0 flex-col px-10 font-cinzel"
        style={{ top: 110, bottom: 34 }}
      >
        <header className="flex shrink-0 flex-col items-center text-center">
          <p
            className="text-[26px] font-bold leading-none tracking-[0.06em]"
            style={{ color: COLORS.maroon }}
          >
            ASTRO AARAMBH
          </p>
          <div className="mt-1 flex items-center justify-center gap-2">
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

        <section className="mt-2.5 grid min-h-0 flex-[1.1] grid-cols-[1fr_0.95fr_0.85fr] items-stretch gap-3">
          <div className="flex h-full flex-col justify-center gap-4 py-1">
            {LEFT_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-2.5">
                  <IconCircle size={42}>
                    <Icon size={20} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="pt-0.5 text-[13.5px] leading-[1.5] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="relative h-full min-h-0 overflow-hidden rounded-[16px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Head line mental pattern"
              fill
              sizes="260px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.12) translateY(4px)" }}
            />
          </div>

          <div
            className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[14px] px-2.5 py-3"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <div
              className="relative flex h-[84px] w-[84px] items-center justify-center rounded-full"
              style={{
                border: "1.5px solid rgba(184,134,11,0.55)",
                background:
                  "radial-gradient(circle at 40% 35%, rgba(212,175,55,0.35) 0%, rgba(255,248,232,0.95) 70%)",
              }}
            >
              <Brain size={40} strokeWidth={1.5} style={{ color: COLORS.maroon }} />
            </div>
            <Cloud size={22} className="mt-2.5" style={{ color: COLORS.gold }} />
            <p
              className="mt-2 text-center text-[13px] font-bold tracking-[0.06em]"
              style={{ color: COLORS.maroon }}
            >
              ACTIVE MIND
            </p>
            <p
              className="mt-1 text-center text-[12px] leading-snug font-nunito-sans"
              style={{ color: COLORS.slate }}
            >
              Thinking · Planning · Analysis
            </p>
          </div>
        </section>

        <section className="mt-2 shrink-0">
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
                  className="flex flex-col items-center px-1.5 text-center"
                  style={{
                    borderRight:
                      index < HABITS.length - 1
                        ? "1px dashed rgba(184,134,11,0.35)"
                        : "none",
                  }}
                >
                  <IconCircle size={40}>
                    <Icon size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="mt-1.5 text-[11.5px] font-bold leading-tight tracking-[0.03em]"
                    style={{ color: COLORS.maroon }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="mt-1 text-[11.5px] leading-[1.4] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-2 flex min-h-0 flex-[1.2] flex-col">
          <PointedBanner title="YOUR MENTAL PATTERN" />
          <div
            className="mt-2 grid min-h-0 flex-1 grid-cols-[0.85fr_1.15fr] items-stretch gap-2.5 rounded-[14px] p-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <div
              className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[12px] px-2 py-3"
              style={{
                border: "1px solid rgba(184,134,11,0.4)",
                background:
                  "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.22) 0%, rgba(255,248,232,0.9) 75%)",
              }}
            >
              <div className="absolute left-3 top-4">
                <IconCircle size={32}>
                  <Lightbulb size={15} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute right-3 top-6">
                <IconCircle size={32}>
                  <Cog size={15} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute bottom-10 left-4">
                <IconCircle size={32}>
                  <TrendingUp size={15} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute bottom-10 right-4">
                <IconCircle size={32}>
                  <Clock size={15} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <IconCircle size={32}>
                  <HelpCircle size={15} style={{ color: COLORS.gold }} />
                </IconCircle>
              </div>
              <Brain size={48} strokeWidth={1.4} style={{ color: COLORS.maroon }} />
              <p
                className="mt-2 text-center text-[13px] font-bold tracking-[0.06em]"
                style={{ color: COLORS.maroon }}
              >
                INNER MIND MAP
              </p>
            </div>

            <div className="flex h-full min-h-0 flex-col justify-center gap-2">
              {MENTAL_PATTERN.map((text) => (
                <div key={text} className="flex items-start gap-2.5">
                  <CircleCheck
                    size={18}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.gold }}
                  />
                  <p
                    className="text-[13.5px] leading-[1.45] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}
              <div
                className="mt-1 flex items-center gap-2.5 rounded-[10px] px-2.5 py-2.5"
                style={{
                  background: "rgba(255,248,232,0.95)",
                  border: "1px solid rgba(184,134,11,0.5)",
                }}
              >
                <IconCircle size={38}>
                  <Brain size={18} strokeWidth={1.8} style={{ color: COLORS.maroon }} />
                </IconCircle>
                <p
                  className="text-[13.5px] leading-[1.45] font-nunito-sans"
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

        <footer className="mt-2 flex shrink-0 flex-col items-center">
          <div className="mt-1 flex items-center justify-center gap-2">
            <CoverLotus size={26} />
            <blockquote
              className="max-w-[520px] text-center text-[14px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;शांत मन, स्पष्ट सोच और संतुलित दिनचर्या ही सच्ची मानसिक शक्ति है।&rdquo;
            </blockquote>
            <CoverLotus size={26} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
