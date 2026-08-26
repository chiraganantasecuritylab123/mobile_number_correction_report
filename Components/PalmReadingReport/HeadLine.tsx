import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Clock,
  Hand,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  ScanSearch,
  Sparkles,
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
    <div className="relative mx-auto mt-3 flex w-full max-w-[680px] items-center justify-center">
      <Pattern3 size={72} className="absolute left-[-6px] opacity-90" />
      <div
        className="relative z-10 flex max-w-[560px] items-center gap-2 rounded-full px-3 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
        }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <CoverLotus size={18} className="opacity-100" />
        </div>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
          style={{ background: COLORS.goldLight, color: COLORS.maroonDeep }}
        >
          4
        </span>
        <p className="flex items-center gap-1 text-[11px] font-bold leading-tight tracking-[0.03em] text-[#f6e6c4]">
          <Brain size={14} strokeWidth={2.2} />
          <span>HEAD LINE — THINKING, INTELLIGENCE और DECISION STYLE</span>
        </p>
      </div>
      <Pattern3 size={72} className="absolute right-[-6px] rotate-180 opacity-90" />
    </div>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
      style={{
        border: "1.3px solid rgba(184,134,11,0.7)",
        background: COLORS.cream,
      }}
    >
      {children}
    </div>
  );
}

function BlockTitle({ title }: { title: string }) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-full px-3 py-1.5"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rotate-45"
        style={{ background: COLORS.goldLight }}
      />
      <p className="text-center text-[11px] font-bold leading-tight tracking-[0.04em] text-[#f6e6c4]">
        {title}
      </p>
      <span
        className="h-1.5 w-1.5 rotate-45"
        style={{ background: COLORS.goldLight }}
      />
    </div>
  );
}

function CycleStep({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center text-center">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full"
        style={{
          border: "1.3px solid rgba(184,134,11,0.7)",
          background: "#fff8e8",
        }}
      >
        {icon}
      </div>
      <p
        className="mt-1 text-[8.5px] font-bold leading-tight tracking-[0.04em]"
        style={{ color: COLORS.maroon }}
      >
        {label}
      </p>
    </div>
  );
}

export default function HeadLine({ pageNumber = "05" }: { pageNumber?: string }) {
  return (
    <PalmReadingPageFrame pageLabel="head-line" pageNumber={pageNumber}>
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
          <div className="flex flex-col gap-2.5 font-nunito-sans">
            <div className="flex items-start gap-2.5">
              <IconCircle>
                <Hand size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p className="text-[12.5px] leading-[1.5]" style={{ color: COLORS.body }}>
                आपकी Head Line comparatively <span className="font-bold">long, clear</span> और{" "}
                <span className="font-bold">slightly downward sloping</span> है।
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <IconCircle>
                <BookOpen size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p className="text-[12.5px] leading-[1.5]" style={{ color: COLORS.body }}>
                Traditional palmistry में long Head Line{" "}
                <span className="font-bold">analytical thinking</span> से जुड़ी होती है, जबकि
                downward slope <span className="font-bold">imagination</span> और visualization
                को दर्शाता है।
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <IconCircle>
                <Lightbulb size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p className="text-[12.5px] leading-[1.5]" style={{ color: COLORS.body }}>
                यह इस report के लिए एक बहुत <span className="font-bold">important indicator</span>{" "}
                है — आपकी thinking style और decision-making यहीं से पढ़ी जाती है।
              </p>
            </div>
          </div>

          <div
            className="flex h-[200px] overflow-hidden rounded-[18px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 42% 45%, rgba(212,175,55,0.22) 0%, rgba(248,237,216,0.55) 70%)",
            }}
          >
            <div className="relative h-full min-w-0 flex-[1.15]">
              <Image
                src={ASSETS.hand}
                alt="Head line on palm"
                fill
                sizes="220px"
                className="object-contain mix-blend-screen"
                style={{ transform: "scale(1.08) translateY(4px)" }}
              />
            </div>
            <div
              className="m-2.5 flex w-[138px] shrink-0 flex-col justify-center rounded-[10px] px-2.5 py-2"
              style={{
                background: "rgba(255,248,232,0.92)",
                border: "1px solid rgba(184,134,11,0.45)",
              }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.08em]"
                style={{ color: COLORS.maroon }}
              >
                HEAD LINE
              </p>
              <ul
                className="mt-1 list-disc pl-3.5 text-[10px] leading-[1.55] font-nunito-sans"
                style={{ color: COLORS.slate }}
              >
                <li>Long</li>
                <li>Clear</li>
                <li>Slightly Downward Sloping</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-3 grid flex-1 grid-cols-2 gap-3">
          <div
            className="flex h-full flex-col rounded-[14px] p-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <BlockTitle title="दो अलग TENDENCIES" />
            <p
              className="mt-2 px-1 text-[12px] leading-[1.45] font-nunito-sans"
              style={{ color: COLORS.body }}
            >
              आपकी Head Line में दो tendencies एक साथ काम करती हैं:
            </p>

            <div className="mt-2 flex items-start gap-2 px-1">
              <IconCircle>
                <Brain size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <div className="font-nunito-sans">
                <p className="text-[11px] font-bold" style={{ color: COLORS.maroon }}>
                  LOGICAL MIND
                </p>
                <p className="text-[12px] leading-[1.4]" style={{ color: COLORS.body }}>
                  आप facts, information और practical outcomes को महत्व देते हैं।
                </p>
              </div>
            </div>

            <div className="mt-2 flex items-start gap-2 px-1">
              <IconCircle>
                <MessageCircle size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <div className="font-nunito-sans">
                <p className="text-[11px] font-bold" style={{ color: COLORS.maroon }}>
                  IMAGINATIVE MIND
                </p>
                <p className="text-[12px] leading-[1.4]" style={{ color: COLORS.body }}>
                  आप &ldquo;what if&rdquo; situations और possibilities के बारे में भी सोचते हैं।
                </p>
              </div>
            </div>

            <div className="mt-auto flex items-start gap-2 px-1 pt-2">
              <Sparkles size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              <p
                className="text-[11.5px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                यही combination आपको problem-solving में useful advantage दे सकता है।
              </p>
            </div>
          </div>

          <div
            className="flex h-full flex-col rounded-[14px] p-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <BlockTitle title="लेकिन यही आपकी WEAKNESS भी बन सकती हैं" />

            <div className="mt-2 flex items-start gap-2 px-1">
              <IconCircle>
                <Brain size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p
                className="text-[12px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                Emotionally important decisions में mind बहुत सारे possible outcomes create कर
                सकता है — जिससे overthinking बढ़ता है।
              </p>
            </div>

            <p
              className="mt-2 text-center text-[11px] font-bold"
              style={{ color: COLORS.maroon }}
            >
              इससे एक CYCLE बन सकता है
            </p>

            <div className="mt-1.5 flex items-center px-0.5">
              <CycleStep
                icon={<ScanSearch size={16} strokeWidth={1.7} style={{ color: COLORS.maroon }} />}
                label="ANALYSIS"
              />
              <ArrowRight size={12} style={{ color: COLORS.gold, flexShrink: 0 }} />
              <CycleStep
                icon={<BarChart3 size={16} strokeWidth={1.7} style={{ color: COLORS.maroon }} />}
                label="MORE ANALYSIS"
              />
              <ArrowRight size={12} style={{ color: COLORS.gold, flexShrink: 0 }} />
              <CycleStep
                icon={<HelpCircle size={16} strokeWidth={1.7} style={{ color: COLORS.maroon }} />}
                label="DOUBT"
              />
              <ArrowRight size={12} style={{ color: COLORS.gold, flexShrink: 0 }} />
              <CycleStep
                icon={<Clock size={16} strokeWidth={1.7} style={{ color: COLORS.maroon }} />}
                label="DELAY"
              />
            </div>

            <div
              className="mt-auto flex items-center gap-2 rounded-[10px] px-2 py-1.5"
              style={{
                background: "rgba(255,248,232,0.85)",
                border: "1px solid rgba(184,134,11,0.45)",
              }}
            >
              <CoverLotus size={22} />
              <p
                className="flex-1 text-center text-[11px] leading-[1.35] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                अगर इसे manage किया जाए, तो यही analytical nature आपकी बड़ी strength बन जाती है।
              </p>
              <CoverLotus size={22} />
            </div>
          </div>
        </section>

        <footer className="mt-3 flex flex-col items-center pb-0">
          <OrnamentDivider width={220} />
          <div className="mt-2 flex items-center justify-center gap-2.5">
            <CoverLotus size={28} />
            <blockquote
              className="max-w-[480px] text-center text-[13px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;आपका mind जितना गहराई से सोचता है, उतनी ही clarity के साथ action की
              ज़रूरत होती है।&rdquo;
            </blockquote>
            <CoverLotus size={28} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
