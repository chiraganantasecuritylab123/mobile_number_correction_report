import Image from "next/image";
import {
  Brain,
  Heart,
  Lightbulb,
  MapPin,
  Plane,
  Search,
  Shield,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/particularly-hand.png",
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

const SIGNS = [
  {
    num: "01",
    title: "LONG HEAD LINE",
    text: "Deep thinking और analytical ability का traditional indicator.",
    icon: Brain,
  },
  {
    num: "02",
    title: "SLIGHT DOWNWARD HEAD LINE",
    text: "Imagination और creative visualization की ओर संकेत करता है.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "CLEAR HEART LINE",
    text: "Emotional clarity और sincere affection का indicator.",
    icon: Heart,
  },
  {
    num: "04",
    title: "STRONG LIFE LINE",
    text: "Vitality, health awareness और life energy का traditional sign.",
    icon: Shield,
  },
  {
    num: "05",
    title: "LIFE LINE BRANCH",
    text: "Travel, relocation या environment change की संभावना दिखाता है.",
    icon: Plane,
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
    <div className="relative mx-auto mt-2.5 flex w-full max-w-[680px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-2 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 500,
        }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Search size={20} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[14px] font-bold tracking-[0.04em] text-[#f6e6c4]">
          18. आपकी हथेली के 10 विशेष संकेत
        </p>
      </div>
      <Pattern3 size={78} className="absolute right-[-8px] rotate-180 opacity-90" />
    </div>
  );
}

function IconCircle({ children, size = 42 }: { children: ReactNode; size?: number }) {
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

function NumberBadge({ num }: { num: string }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <span className="text-[13px] font-bold tracking-[0.04em] text-[#f6e6c4]">{num}</span>
    </div>
  );
}

export default function TenSpecialSigns({
  pageNumber = "19",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="ten-special-signs" pageNumber={pageNumber}>
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

        <p
          className="mt-2.5 shrink-0 text-center text-[14.5px] leading-[1.5] font-nunito-sans"
          style={{ color: COLORS.body }}
        >
          आपकी हथेली पर ये संकेत particularly{" "}
          <span className="font-bold">strong और clear</span> दिखाई देते हैं — ये आपके personality
          और life direction को समझने में मदद करते हैं।
        </p>

        <section className="mt-2.5 grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] items-stretch gap-3">
          <div className="flex h-full min-h-0 flex-col justify-between gap-2">
            {SIGNS.map((sign) => {
              const Icon = sign.icon;
              return (
                <div
                  key={sign.num}
                  className="flex min-h-0 flex-1 items-center gap-3 rounded-[12px] px-3 py-2.5"
                  style={{
                    background: COLORS.creamBox,
                    border: "1px solid rgba(184,134,11,0.45)",
                  }}
                >
                  <NumberBadge num={sign.num} />
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-[13.5px] font-bold tracking-[0.05em]"
                      style={{ color: COLORS.maroon }}
                    >
                      {sign.title}
                    </p>
                    <p
                      className="mt-0.5 text-[13px] leading-[1.45] font-nunito-sans"
                      style={{ color: COLORS.body }}
                    >
                      {sign.text}
                    </p>
                  </div>
                  <IconCircle size={42}>
                    {sign.num === "05" ? (
                      <div className="flex items-center gap-0.5">
                        <Plane size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
                        <MapPin size={14} strokeWidth={1.8} style={{ color: COLORS.maroon }} />
                      </div>
                    ) : (
                      <Icon size={20} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                    )}
                  </IconCircle>
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
            <div className="absolute inset-x-0 -bottom-2 aspect-[260/390]">
              <Image
                src={ASSETS.hand}
                alt="Ten special palm signs"
                fill
                sizes="260px"
                className="object-contain object-bottom mix-blend-screen"
              />
            </div>
          </div>
        </section>

        <section
          className="mt-2.5 flex shrink-0 items-center gap-3 rounded-[14px] px-3.5 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.5)",
          }}
        >
          <IconCircle size={46}>
            <Trophy size={22} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
          <p
            className="flex-1 text-[14px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            ये संकेत आपके{" "}
            <span className="font-bold">thought, emotion, health</span> और life changes को
            reflect करते हैं। आगे के pages में इनका detailed explanation दिया गया है।
          </p>
          <div className="relative flex h-[52px] w-[60px] shrink-0 items-center justify-center">
            <Search size={24} style={{ color: COLORS.gold }} />
            <Star
              size={14}
              className="absolute right-0 top-0"
              fill={COLORS.goldLight}
              stroke={COLORS.gold}
            />
            <Sparkles
              size={14}
              className="absolute bottom-0 left-0"
              style={{ color: COLORS.maroon }}
            />
          </div>
        </section>

        <footer className="mt-2 flex shrink-0 flex-col items-center">
          <OrnamentDivider width={180} />
          <div className="mt-1 flex items-center justify-center gap-2">
            <CoverLotus size={26} />
            <p
              className="text-[13.5px] font-bold tracking-[0.08em]"
              style={{ color: COLORS.gold }}
            >
              SIGNS 01 — 05
            </p>
            <CoverLotus size={26} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
