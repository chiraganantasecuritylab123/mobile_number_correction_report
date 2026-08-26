import Image from "next/image";
import {
  BarChart3,
  Briefcase,
  Code,
  Cog,
  Compass,
  Flag,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  Mountain,
  Rocket,
  Star,
  Target,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/head-line.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunrise: "/assets/number-activations/sun-rising.png",
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

const WORK_STYLES = [
  {
    title: "MANAGEMENT",
    text: "टीम को दिशा देना और decisions लेना",
    icon: Users,
  },
  {
    title: "TECHNOLOGY",
    text: "Analytical thinking और systems के साथ काम",
    icon: Code,
  },
  {
    title: "BUSINESS",
    text: "Practical outcomes और growth पर focus",
    icon: Briefcase,
  },
  {
    title: "CONSULTING",
    text: "समस्या समझकर समाधान देना",
    icon: MessagesSquare,
  },
  {
    title: "CREATIVE PROBLEM SOLVING",
    text: "नए तरीके से सोचकर solutions निकालना",
    icon: Lightbulb,
  },
  {
    title: "ENTREPRENEURSHIP",
    text: "अपनी vision को independently आगे बढ़ाना",
    icon: Rocket,
  },
  {
    title: "STRATEGY",
    text: "Long-term planning और direction",
    icon: Compass,
  },
  {
    title: "COMMUNICATION BASED ROLES",
    text: "Ideas को clearly express करना",
    icon: MessageCircle,
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
          <Briefcase size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          10. CAREER READING
        </p>
      </div>
      <Pattern3 size={78} className="absolute right-[-8px] rotate-180 opacity-90" />
    </div>
  );
}

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <div
        className="px-7 py-1.5 text-center"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          clipPath:
            "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
          minWidth: 470,
        }}
      >
        <p className="text-[10.5px] font-bold tracking-[0.07em] text-[#f6e6c4]">
          {title}
        </p>
      </div>
    </div>
  );
}

function IconCircle({ children, size = 36 }: { children: ReactNode; size?: number }) {
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

export default function CareerReading({
  pageNumber = "11",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="career-reading" pageNumber={pageNumber}>
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

        <section className="mt-3 grid grid-cols-[1.08fr_0.92fr] items-center gap-3">
          <div className="flex items-start gap-2.5">
            <div
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]"
              style={{
                border: "1.3px solid rgba(184,134,11,0.65)",
                background: COLORS.cream,
              }}
            >
              <Briefcase size={18} strokeWidth={1.8} style={{ color: COLORS.gold }} />
            </div>
            <div className="space-y-1.5 font-nunito-sans">
              <p className="text-[12.5px] leading-[1.5]" style={{ color: COLORS.body }}>
                Career reading में <span className="font-bold">Head Line</span> और{" "}
                <span className="font-bold">Fate Line</span> का combination सबसे interesting
                हिस्सा है।
              </p>
              <p className="text-[12.5px] leading-[1.5]" style={{ color: COLORS.body }}>
                आपकी हथेली बताती है कि आप repetitive work से ज़्यादा{" "}
                <span className="font-bold">thinking, responsibility</span> और decision-making
                वाले roles में बेहतर perform करते हैं।
              </p>
              <p className="text-[12.5px] leading-[1.5]" style={{ color: COLORS.body }}>
                आप ऐसे environments में grow करते हैं जहाँ सीखने, बढ़ने और अपनी abilities का
                उपयोग करने का मौका लगातार मिलता रहे।
              </p>
            </div>
          </div>

          <div
            className="relative h-[188px] overflow-hidden rounded-[16px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 48% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Head line and fate line"
              fill
              sizes="300px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.06) translateY(8px)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 320 188"
              aria-hidden
            >
              <path
                d="M88 92 C148 102, 198 114, 248 128"
                fill="none"
                stroke={COLORS.red}
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M162 48 L162 168"
                fill="none"
                stroke={COLORS.gold}
                strokeWidth="2"
                strokeDasharray="5 4"
                strokeLinecap="round"
              />
            </svg>
            <Cog
              size={14}
              className="absolute left-3 top-3"
              style={{ color: COLORS.gold }}
            />
            <BarChart3
              size={14}
              className="absolute right-3 top-3"
              style={{ color: COLORS.gold }}
            />
            <Target
              size={14}
              className="absolute bottom-3 right-3"
              style={{ color: COLORS.gold }}
            />
            <div
              className="absolute left-2 top-8 max-w-[118px] rounded-[8px] px-1.5 py-1"
              style={{
                background: "rgba(255,248,232,0.92)",
                border: "1px solid rgba(184,134,11,0.4)",
              }}
            >
              <p className="text-[8.5px] font-bold leading-tight" style={{ color: COLORS.red }}>
                Head Line
              </p>
              <p className="text-[8px] leading-tight font-nunito-sans" style={{ color: COLORS.slate }}>
                Thinking, Intelligence &amp; Decision Style
              </p>
            </div>
            <div
              className="absolute bottom-8 left-2 max-w-[118px] rounded-[8px] px-1.5 py-1"
              style={{
                background: "rgba(255,248,232,0.92)",
                border: "1px solid rgba(184,134,11,0.4)",
              }}
            >
              <p className="text-[8.5px] font-bold leading-tight" style={{ color: COLORS.gold }}>
                Fate Line
              </p>
              <p className="text-[8px] leading-tight font-nunito-sans" style={{ color: COLORS.slate }}>
                Career Path, Direction &amp; Growth
              </p>
            </div>
          </div>
        </section>

        <section
          className="mt-2.5 flex items-center gap-2.5 rounded-[12px] px-3 py-2"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.4)",
          }}
        >
          <IconCircle size={32}>
            <Star size={14} fill={COLORS.goldLight} stroke={COLORS.gold} />
          </IconCircle>
          <p className="flex-1 text-[11.5px] leading-[1.4] font-nunito-sans" style={{ color: COLORS.body }}>
            ये <span className="font-bold">work-style tendencies</span> हैं — traditional
            interpretation के आधार पर। Fixed profession predictions नहीं।
          </p>
          <Mountain size={22} strokeWidth={1.6} style={{ color: COLORS.gold }} />
        </section>

        <div className="mt-2.5">
          <PointedBanner title="SUITABLE WORK ENVIRONMENT / WORK STYLE TENDENCIES" />
        </div>

        <section
          className="mt-2 grid grid-cols-4 gap-1.5 rounded-[14px] p-2"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.4)",
          }}
        >
          {WORK_STYLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center px-1.5 py-2 text-center"
              >
                <IconCircle size={34}>
                  <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                </IconCircle>
                <p
                  className="mt-1.5 text-[9px] font-bold leading-tight tracking-[0.04em]"
                  style={{ color: COLORS.maroon }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-0.5 text-[10px] leading-[1.3] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-2.5 flex items-center gap-3">
          <div
            className="flex flex-1 items-start gap-2.5 rounded-[12px] px-3 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.5)",
            }}
          >
            <IconCircle size={36}>
              <Target size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
            </IconCircle>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.08em]"
                style={{ color: COLORS.maroon }}
              >
                IMPORTANT ADVICE
              </p>
              <p
                className="mt-0.5 text-[11.5px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                ऐसे कार्य चुनें जहाँ सीखने, बढ़ने, निर्णय लेने और अपनी क्षमताओं का उपयोग करने
                का अवसर लगातार मिलता रहे।
              </p>
            </div>
          </div>
          <div
            className="relative h-[72px] w-[96px] shrink-0 overflow-hidden rounded-[10px]"
            style={{
              border: "1px solid rgba(184,134,11,0.45)",
              background: "rgba(255,248,232,0.9)",
            }}
          >
            <Image
              src={ASSETS.sunrise}
              alt=""
              fill
              sizes="96px"
              className="object-contain p-1 opacity-80"
            />
            <div className="absolute inset-0 flex items-end justify-center gap-1 pb-1.5">
              <Mountain size={16} style={{ color: COLORS.maroon }} />
              <Flag size={14} style={{ color: COLORS.gold }} />
            </div>
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
              &ldquo;सही दिशा में किया गया काम, आपकी क्षमता को पहचान देता है और आपको आपकी
              मंज़िल तक पहुँचाता है।&rdquo;
            </blockquote>
            <CoverLotus size={24} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
