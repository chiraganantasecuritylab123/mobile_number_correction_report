import Image from "next/image";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import { PalmReadingPageHeader, PalmReadingSectionBar } from "./PalmReadingReportPageShell";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  hand: "/assets/palm-reading-report/head-line.png",
  pattern2: "/assets/cover/pattern-2.png",
  icons: {
    brain: "/assets/palm-reading-report/head-line/icon-brain-clear.png",
    hand: "/assets/palm-reading-report/head-line/icon-hand-clear.png",
    book: "/assets/palm-reading-report/head-line/icon-book-clear.png",
    lightbulb: "/assets/palm-reading-report/head-line/icon-lightbulb-clear.png",
    brainGear: "/assets/palm-reading-report/head-line/icon-brain-gear-clear.png",
    speech: "/assets/palm-reading-report/head-line/icon-speech-clear.png",
    chart: "/assets/palm-reading-report/head-line/icon-chart-clear.png",
    star: "/assets/palm-reading-report/head-line/icon-star-clear.png",
  },
} as const;

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#A96505",
  goldLight: "#d4af37",
  cream: "#f8edd8",
  creamBox: "rgba(248, 232, 204, 0.72)",
  body: "#3c2a21",
  slate: "#4a4540",
} as const;

const OBSERVATIONS = [
  {
    text: (
      <>
        आपकी Head Line comparatively <span className="font-bold">long, clear</span> और{" "}
        <span className="font-bold">slightly downward sloping</span> है।
      </>
    ),
    iconSrc: ASSETS.icons.hand,
  },
  {
    text: (
      <>
        Traditional palmistry में long Head Line{" "}
        <span className="font-bold">analytical thinking</span> से जुड़ी होती है, जबकि downward
        slope <span className="font-bold">imagination</span> और visualization को दर्शाता है।
      </>
    ),
    iconSrc: ASSETS.icons.book,
  },
  {
    text: (
      <>
        यह इस report के लिए एक बहुत <span className="font-bold">important indicator</span> है —
        आपकी thinking style और decision-making यहीं से पढ़ी जाती है।
      </>
    ),
    iconSrc: ASSETS.icons.lightbulb,
  },
] as const;

type CycleKey = "analysis" | "more" | "doubt" | "delay";

const CYCLE: { key: CycleKey; label: string; iconSrc?: string }[] = [
  { key: "analysis", label: "ANALYSIS" },
  { key: "more", label: "MORE ANALYSIS", iconSrc: ASSETS.icons.chart },
  { key: "doubt", label: "DOUBT" },
  { key: "delay", label: "DELAY" },
];

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
        <Pattern3 size={36} />
        {/* <span
          className="text-[11px] font-bold tracking-[0.16em]"
          style={{ color: COLORS.maroon }}
        >
          {pageNumber}
        </span> */}
        <Pattern3 size={36} className="rotate-180" />
      </div>
    </article>
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

/** Cream disc + gold ring so gold icons stay sharp on parchment. */
function IconBadge({
  children,
  size = 44,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <div
      className="relative mt-0.5 flex shrink-0 items-center justify-center rounded-full"
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

function CycleSvg({ name, size = 22 }: { name: Exclude<CycleKey, "more">; size?: number }) {
  const c = COLORS.maroon;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  if (name === "analysis") {
    return (
      <svg {...common}>
        <circle cx="20" cy="20" r="10" stroke={c} strokeWidth="2.6" />
        <path d="M28 28l10 10" stroke={c} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M16 20h8M20 16v8" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "doubt") {
    return (
      <svg {...common}>
        <circle cx="24" cy="18" r="10" stroke={c} strokeWidth="2.5" />
        <path
          d="M10 42c1.8-8 7-12 14-12s12.2 4 14 12"
          stroke={c}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20.5 16.5c.6-2 2.2-3.2 4.2-3.2 2.3 0 4 1.5 4 3.5 0 2.2-1.8 3.2-3.2 4-.9.5-1.5 1.2-1.5 2.4"
          stroke={c}
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <circle cx="24" cy="27" r="1.6" fill={c} />
      </svg>
    );
  }

  // delay — clock
  return (
    <svg {...common}>
      <circle cx="24" cy="24" r="14" stroke={c} strokeWidth="2.6" />
      <path d="M24 14v11l7 4" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke={COLORS.gold}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
      title="4. HEAD LINE — THINKING, INTELLIGENCE और DECISION STYLE"
      icon={<PngIcon src={ASSETS.icons.brain} size={18} />}
      minWidth={500}
    />
  );
}

function BlockTitle({ title }: { title: string }) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-full px-4 py-2"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <span className="h-2 w-2 rotate-45" style={{ background: COLORS.goldLight }} />
      <p className="text-center text-[13px] font-bold leading-tight tracking-[0.04em] text-[#f6e6c4]">
        {title}
      </p>
      <span className="h-2 w-2 rotate-45" style={{ background: COLORS.goldLight }} />
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
      <IconBadge size={44}>{icon}</IconBadge>
      <p
        className="mt-1.5 text-[11px] font-bold leading-tight tracking-[0.04em]"
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
        className="absolute inset-x-0 flex min-h-0 flex-col px-10 font-cinzel"
        style={{ top: 18, bottom: 36 }}
      >
        <PalmReadingPageHeader />

        <SectionBar />

        <section className="mt-4 grid min-h-0 flex-[1.05] grid-cols-[1.08fr_0.92fr] items-stretch gap-3.5">
          <div className="flex h-full min-w-0 flex-col justify-center gap-5 font-nunito-sans">
            {OBSERVATIONS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <IconBadge size={44}>
                  <PngIcon src={item.iconSrc} size={24} />
                </IconBadge>
                <p className="pt-1 text-[15px] leading-[1.55]" style={{ color: COLORS.body }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex h-full min-h-0 overflow-hidden rounded-[18px]"
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
                sizes="280px"
                className="object-contain mix-blend-screen"
                style={{ transform: "scale(1.12) translateY(6px)" }}
              />
            </div>
            <div
              className="my-3 mr-3 flex w-[148px] shrink-0 flex-col justify-center rounded-[12px] px-3 py-3"
              style={{
                background: "rgba(255,248,232,0.92)",
                border: "1px solid rgba(184,134,11,0.45)",
              }}
            >
              <p
                className="text-[13px] font-bold tracking-[0.08em]"
                style={{ color: COLORS.maroon }}
              >
                HEAD LINE
              </p>
              <ul
                className="mt-2 list-disc pl-4 text-[12.5px] leading-[1.6] font-nunito-sans"
                style={{ color: COLORS.slate }}
              >
                <li>Long</li>
                <li>Clear</li>
                <li>Slightly Downward Sloping</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-4 grid min-h-0 flex-[1.2] grid-cols-2 items-stretch gap-3.5">
          <div
            className="flex h-full min-h-0 flex-col rounded-[14px] p-3.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <BlockTitle title="दो अलग TENDENCIES" />
            <p
              className="mt-3 px-1 text-[14px] leading-[1.5] font-nunito-sans"
              style={{ color: COLORS.body }}
            >
              आपकी Head Line में दो tendencies एक साथ काम करती हैं:
            </p>

            <div className="mt-3 flex flex-1 flex-col justify-evenly gap-3">
              <div className="flex items-start gap-3 px-1">
                <IconBadge size={44}>
                  <PngIcon src={ASSETS.icons.brainGear} size={26} />
                </IconBadge>
                <div className="min-w-0 pt-0.5 font-nunito-sans">
                  <p className="text-[13px] font-bold" style={{ color: COLORS.maroon }}>
                    LOGICAL MIND
                  </p>
                  <p className="mt-0.5 text-[14px] leading-[1.5]" style={{ color: COLORS.body }}>
                    आप facts, information और practical outcomes को महत्व देते हैं।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 px-1">
                <IconBadge size={44}>
                  <PngIcon src={ASSETS.icons.speech} size={24} />
                </IconBadge>
                <div className="min-w-0 pt-0.5 font-nunito-sans">
                  <p className="text-[13px] font-bold" style={{ color: COLORS.maroon }}>
                    IMAGINATIVE MIND
                  </p>
                  <p className="mt-0.5 text-[14px] leading-[1.5]" style={{ color: COLORS.body }}>
                    आप &ldquo;what if&rdquo; situations और possibilities के बारे में भी सोचते हैं।
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-3 flex items-start gap-2.5 rounded-[10px] px-2.5 py-2.5"
              style={{ background: "rgba(255,248,232,0.7)" }}
            >
              <IconBadge size={28}>
                <PngIcon src={ASSETS.icons.star} size={16} />
              </IconBadge>
              <p
                className="text-[13.5px] leading-[1.45] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                यही combination आपको problem-solving में useful advantage दे सकता है।
              </p>
            </div>
          </div>

          <div
            className="flex h-full min-h-0 flex-col rounded-[14px] p-3.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <BlockTitle title="लेकिन यही आपकी WEAKNESS भी बन सकती हैं" />

            <div className="mt-3 flex items-start gap-3 px-1">
              <IconBadge size={44}>
                <PngIcon src={ASSETS.icons.brainGear} size={26} />
              </IconBadge>
              <p
                className="pt-0.5 text-[14px] leading-[1.5] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                Emotionally important decisions में mind बहुत सारे possible outcomes create कर
                सकता है — जिससे overthinking बढ़ता है।
              </p>
            </div>

            <p
              className="mt-4 text-center text-[13px] font-bold tracking-[0.02em]"
              style={{ color: COLORS.maroon }}
            >
              इससे एक CYCLE बन सकता है
            </p>

            <div className="mt-3 flex flex-1 items-center px-0.5">
              {CYCLE.map((step, index) => (
                <div key={step.key} className="contents">
                  <CycleStep
                    icon={
                      step.iconSrc ? (
                        <PngIcon src={step.iconSrc} size={22} />
                      ) : (
                        <CycleSvg name={step.key as Exclude<CycleKey, "more">} size={22} />
                      )
                    }
                    label={step.label}
                  />
                  {index < CYCLE.length - 1 ? <ArrowSvg /> : null}
                </div>
              ))}
            </div>

            <div
              className="mt-3 flex items-center gap-2.5 rounded-[10px] px-2.5 py-2.5"
              style={{
                background: "rgba(255,248,232,0.85)",
                border: "1px solid rgba(184,134,11,0.45)",
              }}
            >
              <CoverLotus size={26} />
              <p
                className="flex-1 text-center text-[13px] leading-[1.45] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                अगर इसे manage किया जाए, तो यही analytical nature आपकी बड़ी strength बन जाती है।
              </p>
              <CoverLotus size={26} />
            </div>
          </div>
        </section>

        <footer className="mt-3 flex shrink-0 flex-col items-center">
          <OrnamentDivider width={220} />
          <div className="mt-2 flex items-center justify-center gap-2.5">
            <CoverLotus size={30} />
            <blockquote
              className="max-w-[520px] text-center text-[14.5px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;आपका mind जितना गहराई से सोचता है, उतनी ही clarity के साथ action की
              ज़रूरत होती है।&rdquo;
            </blockquote>
            <CoverLotus size={30} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
