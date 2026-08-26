import Image from "next/image";
import {
  Hand,
  Heart,
  Moon,
  Scale,
  Search,
  Signpost,
  Star,
  Target,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/hand.png",
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
  orange: "#d97706",
} as const;

const SIGNS = [
  {
    num: "06",
    title: "VARIABLE FATE LINE",
    text: "Career में changes या self-directed decisions का संकेत.",
    icon: Signpost,
  },
  {
    num: "07",
    title: "DEVELOPED VENUS MOUNT",
    text: "Warmth, attachment और social/emotional energy का संकेत.",
    icon: Heart,
  },
  {
    num: "08",
    title: "MODERATE MOON MOUNT",
    text: "Imagination, travel और new experiences का संकेत.",
    icon: Moon,
  },
  {
    num: "09",
    title: "BALANCED THUMB",
    text: "Willpower और reasoning का balance का संकेत.",
    icon: Scale,
  },
  {
    num: "10",
    title: "OVERALL CLEAR PALM",
    text: "Life में structure और direction develop करने की tendency का संकेत.",
    icon: Hand,
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
    <div className="relative mx-auto mt-3 flex w-full max-w-[660px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 480,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Search size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.04em] text-[#f6e6c4]">
          18. आपकी हथेली के 10 विशेष संकेत
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

function NumberBadge({ num }: { num: string }) {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <span className="text-[11px] font-bold tracking-[0.04em] text-[#f6e6c4]">{num}</span>
    </div>
  );
}

export default function TenSpecialSignsPart2({
  pageNumber = "20",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="ten-special-signs-part-2" pageNumber={pageNumber}>
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

        <p
          className="mt-3 text-center text-[12.5px] leading-[1.5] font-nunito-sans"
          style={{ color: COLORS.body }}
        >
          आपकी हथेली पर ये संकेत particularly{" "}
          <span className="font-bold">strong और clear</span> दिखाई देते हैं — ये आपके personality
          और life direction को समझने में मदद करते हैं।
        </p>

        <section className="mt-3 grid flex-1 grid-cols-[0.85fr_1.15fr] items-stretch gap-3">
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
              alt="Special palm signs 06 to 10"
              fill
              sizes="280px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.1) translateY(4px)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 280 420"
              aria-hidden
            >
              {/* Fate line */}
              <path
                d="M142 90 L138 300"
                fill="none"
                stroke={COLORS.gold}
                strokeWidth="2.2"
                strokeDasharray="5 4"
                strokeLinecap="round"
              />
              {/* Venus mount highlight */}
              <ellipse
                cx="92"
                cy="250"
                rx="28"
                ry="36"
                fill="rgba(217,119,6,0.22)"
                stroke={COLORS.orange}
                strokeWidth="1.3"
              />
              {/* Moon mount highlight */}
              <ellipse
                cx="188"
                cy="268"
                rx="26"
                ry="34"
                fill="rgba(217,119,6,0.2)"
                stroke={COLORS.orange}
                strokeWidth="1.3"
              />
              {/* Thumb / Venus area accent */}
              <ellipse
                cx="78"
                cy="170"
                rx="16"
                ry="22"
                fill="rgba(217,119,6,0.16)"
                stroke={COLORS.gold}
                strokeWidth="1.2"
                strokeDasharray="3 2"
              />
              {/* Wrist / clear palm zone */}
              <ellipse
                cx="140"
                cy="330"
                rx="42"
                ry="16"
                fill="rgba(184,134,11,0.12)"
                stroke={COLORS.gold}
                strokeWidth="1.2"
                strokeDasharray="3 2"
              />

              {/* Callout leaders */}
              <path d="M138 160 L72 120" stroke={COLORS.gold} strokeWidth="1.2" strokeDasharray="3 2" />
              <path d="M92 230 L48 200" stroke={COLORS.gold} strokeWidth="1.2" strokeDasharray="3 2" />
              <path d="M188 268 L236 250" stroke={COLORS.gold} strokeWidth="1.2" strokeDasharray="3 2" />
              <path d="M78 170 L42 150" stroke={COLORS.gold} strokeWidth="1.2" strokeDasharray="3 2" />
              <path d="M140 330 L140 370" stroke={COLORS.gold} strokeWidth="1.2" strokeDasharray="3 2" />
            </svg>

            {[
              { num: "06", style: { top: 108, left: 18 } },
              { num: "07", style: { top: 188, left: 10 } },
              { num: "08", style: { top: 236, right: 14 } },
              { num: "09", style: { top: 138, left: 8 } },
              { num: "10", style: { bottom: 36, left: "50%", transform: "translateX(-50%)" } },
            ].map((badge) => (
              <div
                key={badge.num}
                className="absolute flex h-6 w-6 items-center justify-center rounded-full"
                style={{
                  ...badge.style,
                  background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
                  boxShadow: "0 0 0 1.5px rgba(212,175,55,0.55)",
                }}
              >
                <span className="text-[9px] font-bold text-[#f6e6c4]">{badge.num}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-2">
            {SIGNS.map((sign) => {
              const Icon = sign.icon;
              return (
                <div
                  key={sign.num}
                  className="flex items-center gap-2.5 rounded-[12px] px-2.5 py-2"
                  style={{
                    background: COLORS.creamBox,
                    border: "1px solid rgba(184,134,11,0.45)",
                  }}
                >
                  <NumberBadge num={sign.num} />
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-[11px] font-bold tracking-[0.05em]"
                      style={{ color: COLORS.maroon }}
                    >
                      {sign.title}
                    </p>
                    <p
                      className="mt-0.5 text-[10.5px] leading-[1.35] font-nunito-sans"
                      style={{ color: COLORS.body }}
                    >
                      {sign.text}
                    </p>
                  </div>
                  <IconCircle size={32}>
                    <Icon size={14} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="mt-3 flex items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.5)",
          }}
        >
          <IconCircle size={40}>
            <Trophy size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
          <p
            className="flex-1 text-[12px] leading-[1.45] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            ये संकेत आपके{" "}
            <span className="font-bold">thought, emotion, health</span> और life changes को
            reflect करते हैं। आगे के pages में इनका detailed explanation दिया गया है।
          </p>
          <IconCircle size={40}>
            <Target size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
        </section>

        <footer className="mt-auto flex flex-col items-center pt-2">
          <OrnamentDivider width={180} />
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="text-[11px] font-bold tracking-[0.08em]"
              style={{ color: COLORS.gold }}
            >
              SIGNS 06 — 10
            </p>
            <CoverLotus size={22} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
