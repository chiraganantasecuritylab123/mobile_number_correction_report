import Image from "next/image";
import { Search } from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { Pattern3 } from "../CommunComponents";
import { PalmReadingPageHeader, PalmReadingSectionBar } from "./PalmReadingReportPageShell";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  hand: "/assets/palm-reading-report/particularly-hand.png",
  pattern2: "/assets/cover/pattern-2.png",
  icons: {
    brain: "/assets/palm-reading-report/ten-special-signs/icon-brain-clear.png",
    lightbulb: "/assets/palm-reading-report/ten-special-signs/icon-lightbulb-clear.png",
    heart: "/assets/palm-reading-report/ten-special-signs/icon-heart-clear.png",
    shield: "/assets/palm-reading-report/ten-special-signs/icon-shield-clear.png",
    travel: "/assets/palm-reading-report/ten-special-signs/icon-travel-clear.png",
    trophy: "/assets/palm-reading-report/ten-special-signs/icon-trophy-clear.png",
    star: "/assets/palm-reading-report/ten-special-signs/icon-star-clear.png",
  },
} as const;

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#b8860b",
  goldLight: "#d4af37",
  cream: "#f8edd8",
  creamBox: "rgba(248, 232, 204, 0.72)",
  body: "#3c2a21",
} as const;

const SIGNS = [
  {
    num: "01",
    title: "LONG HEAD LINE",
    text: "Deep thinking और analytical ability का traditional indicator.",
    iconSrc: ASSETS.icons.brain,
  },
  {
    num: "02",
    title: "SLIGHT DOWNWARD HEAD LINE",
    text: "Imagination और intuitive thinking से जुड़ा संकेत.",
    iconSrc: ASSETS.icons.lightbulb,
  },
  {
    num: "03",
    title: "CLEAR HEART LINE",
    text: "Emotional stability और relationship seriousness का संकेत.",
    iconSrc: ASSETS.icons.heart,
  },
  {
    num: "04",
    title: "STRONG LIFE LINE",
    text: "Persistence और vitality का traditional indication.",
    iconSrc: ASSETS.icons.shield,
  },
  {
    num: "05",
    title: "LIFE LINE BRANCH",
    text: "Travel/change या environment shift की possibility.",
    iconSrc: ASSETS.icons.travel,
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
      <div className="relative z-10 h-full">{children}</div>
      <div className="absolute bottom-[16px] right-[36px] z-20 flex items-center gap-1.5 font-cinzel">
        {/* <Pattern3 size={36} />
        <span
          className="text-[11px] font-bold tracking-[0.16em]"
          style={{ color: COLORS.maroon }}
        >
          {pageNumber}
        </span>
        <Pattern3 size={36} className="rotate-180" /> */}
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
    <PalmReadingSectionBar
      title="18. आपकी हथेली के 10 विशेष संकेत"
      iconSrc={ASSETS.icons.star}
      minWidth={500}
    />
  );
}

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

function IconBadge({
  children,
  size = 48,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(180deg, #fff9ef 0%, #f3e4c4 100%)",
        boxShadow:
          "0 0 0 1.5px rgba(169,101,5,0.55), inset 0 1px 0 rgba(255,255,255,0.65)",
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
        style={{ top: 18, bottom: 34 }}
      >
        <PalmReadingPageHeader />

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
            {SIGNS.map((sign) => (
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
                <IconBadge size={48}>
                  <PngIcon src={sign.iconSrc} size={34} />
                </IconBadge>
              </div>
            ))}
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
          <IconBadge size={50}>
            <PngIcon src={ASSETS.icons.trophy} size={36} />
          </IconBadge>
          <p
            className="flex-1 text-[14px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            ये संकेत आपके{" "}
            <span className="font-bold">thought, emotion, health</span> और life changes को
            reflect करते हैं। आगे के pages में इनका detailed explanation दिया गया है।
          </p>
          <div className="relative flex h-[52px] w-[72px] shrink-0 items-center justify-center gap-1">
            <Search size={22} strokeWidth={2} style={{ color: COLORS.gold }} />
            <PngIcon src={ASSETS.icons.star} size={28} />
          </div>
        </section>

        <footer className="mt-2 flex shrink-0 flex-col items-center">
          <OrnamentDivider width={180} />
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
