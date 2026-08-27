import Image from "next/image";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { Pattern3 } from "../CommunComponents";
import { PalmReadingPageHeader, PalmReadingSectionBar } from "./PalmReadingReportPageShell";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  hand: "/assets/palm-reading-report/conclusion-hand.png",
  icons: {
    star: "/assets/palm-reading-report/conclusion/icon-star-clear.png",
    mountain: "/assets/palm-reading-report/conclusion/icon-mountain-clear.png",
    lightbulb: "/assets/palm-reading-report/conclusion/icon-lightbulb-clear.png",
    travel: "/assets/palm-reading-report/conclusion/icon-travel-clear.png",
    handsHeart: "/assets/palm-reading-report/conclusion/icon-hands-heart-clear.png",
    target: "/assets/palm-reading-report/conclusion/icon-target-clear.png",
    scale: "/assets/palm-reading-report/conclusion/icon-scale-clear.png",
    meditation: "/assets/palm-reading-report/conclusion/icon-meditation-clear.png",
    chart: "/assets/palm-reading-report/conclusion/ref-chart-clear.png",
    hand: "/assets/palm-reading-report/conclusion/icon-hand-clear.png",
  },
} as const;

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#A96505",
  bronze: "#8B5A2B",
  cream: "#f8edd8",
  creamBox: "rgba(248, 232, 204, 0.72)",
  body: "#3c2a21",
} as const;

const INSIGHTS = [
  {
    text: "आपकी हथेली Potential, Practicality और Self-effort का संतुलन दिखाती है।",
    iconSrc: ASSETS.icons.star,
    iconSize: 24,
  },
  {
    text: "आप मेहनती, जिम्मेदार और goal-oriented व्यक्तित्व रखते हैं।",
    iconSrc: ASSETS.icons.mountain,
    iconSize: 28,
  },
  {
    text: "समय के साथ stability, Recognition और Financial Growth संभव है।",
    iconSrc: ASSETS.icons.lightbulb,
    iconSize: 24,
  },
  {
    text: "Travel, Learning और New Experiences — Comfort Zone से बाहर निकलना आपके लिए महत्वपूर्ण है।",
    iconSrc: ASSETS.icons.travel,
    iconSize: 24,
  },
  {
    text: "यह report आपकी Strengths और weaknesses को समझने के लिए है — ताकि सही दिशा में कर्म हो सकें।",
    iconSrc: ASSETS.icons.handsHeart,
    iconSize: 28,
  },
] as const;

type TakeawayKey = "target" | "clock" | "book" | "scale" | "meditation" | "chart";

const TAKEAWAYS: { title: string; key: TakeawayKey; iconSrc?: string }[] = [
  { title: "स्पष्ट लक्ष्य बनाएँ", key: "target", iconSrc: ASSETS.icons.target },
  { title: "नियमितता और धैर्य रखें", key: "clock" },
  { title: "सीखते रहें, खुद को विकसित करें", key: "book" },
  { title: "भावनात्मक संतुलन बनाए रखें", key: "scale", iconSrc: ASSETS.icons.scale },
  { title: "स्वास्थ्य और मन का ध्यान रखें", key: "meditation", iconSrc: ASSETS.icons.meditation },
  { title: "दीर्घकालिक सोच, छोटे कदम", key: "chart", iconSrc: ASSETS.icons.chart },
];

const WARNINGS = [
  "यह report traditional palmistry interpretation पर आधारित है।",
  "यह भविष्य की अचूक भविष्यवाणी नहीं है।",
  "जीवन के परिणाम आपके कर्मों, decisions और परिस्थितियों पर निर्भर करते हैं।",
  "इस reading को guidance के रूप में लें, डर या निश्चितता के रूप में नहीं।",
  "आवश्यक होने पर अपने विवेक और व्यावहारिक सोच से निर्णय लें।",
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
        <Pattern3 size={36} />
        <span
          className="text-[11px] font-bold tracking-[0.16em]"
          style={{ color: COLORS.maroon }}
        >
          {pageNumber}
        </span>
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
  size = 42,
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

function TakeawaySvg({ name, size = 22 }: { name: "clock" | "book"; size?: number }) {
  const c = COLORS.gold;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="14" stroke={c} strokeWidth="2.6" />
        <path d="M24 16v9l6 4" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M38 24a14 14 0 0 1-14 14"
          stroke={c}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="3.5 3.2"
        />
        <path d="M36 34l3 4M39 31l4 2" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M10 12h12c2.5 0 4.5 1.5 4.5 4v22c0-2-2-3.5-4.5-3.5H10V12z"
        stroke={c}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M38 12H26c-2.5 0-4.5 1.5-4.5 4v22c0-2 2-3.5 4.5-3.5H38V12z"
        stroke={c}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M24 16v18.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WarningMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M24 6L44 40H4L24 6z"
        fill={COLORS.maroon}
        stroke={COLORS.gold}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M24 18v12" stroke="#f6e6c4" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="24" cy="35" r="2.2" fill="#f6e6c4" />
    </svg>
  );
}

function SectionBar() {
  return (
    <PalmReadingSectionBar
      title="CONCLUSION"
      subtitle="समापन संदेश"
      icon={<PngIcon src={ASSETS.icons.star} size={18} />}
    />
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
          minWidth: 360,
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

export default function Conclusion({
  pageNumber = "21",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="conclusion" pageNumber={pageNumber}>
      <div
        className="absolute inset-x-0 flex min-h-0 flex-col px-10 font-cinzel"
        style={{ top: 18, bottom: 34 }}
      >
        <PalmReadingPageHeader />

        <SectionBar />

        <section className="mt-2.5 grid min-h-0 flex-[1.25] grid-cols-[1.15fr_0.85fr] items-stretch gap-3">
          <div
            className="flex h-full min-h-0 flex-col justify-between gap-2.5 rounded-[14px] px-3 py-3"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {INSIGHTS.map((item) => (
              <div key={item.text} className="flex items-start gap-2.5">
                <IconBadge size={42}>
                  <PngIcon src={item.iconSrc} size={item.iconSize} />
                </IconBadge>
                <p
                  className="pt-0.5 text-[13.5px] leading-[1.5] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex h-full min-h-0 flex-col">
            <div className="relative min-h-0 flex-1 overflow-hidden">
              <Image
                src={ASSETS.hand}
                alt="Destiny in your hands"
                fill
                sizes="280px"
                className="object-contain object-center mix-blend-screen"
              />
            </div>
            <blockquote
              className="relative mt-1 shrink-0 px-6 text-center text-[13px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              <span
                className="absolute left-0 top-[-6px] text-[42px] leading-none"
                style={{ color: COLORS.maroonDeep }}
                aria-hidden
              >
                &ldquo;
              </span>
              आपकी किस्मत आपके हाथों में है, लेकिन इसे संवारना आपके कर्मों पर निर्भर है।
              <span
                className="absolute bottom-[-18px] right-0 text-[42px] leading-none"
                style={{ color: COLORS.maroonDeep }}
                aria-hidden
              >
                &rdquo;
              </span>
            </blockquote>
          </div>
        </section>

        <section className="mt-2.5 shrink-0">
          <PointedBanner title="KEY TAKEAWAY" />
          <div
            className="mt-2 grid grid-cols-6 gap-1 rounded-[14px] px-2 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {TAKEAWAYS.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center px-1 text-center"
                style={{
                  borderRight:
                    index < TAKEAWAYS.length - 1
                      ? "1px dashed rgba(184,134,11,0.35)"
                      : "none",
                }}
              >
                <IconBadge size={40}>
                  {item.iconSrc ? (
                    <PngIcon
                      src={item.iconSrc}
                      size={item.key === "meditation" || item.key === "chart" ? 24 : 22}
                    />
                  ) : (
                    <TakeawaySvg name={item.key as "clock" | "book"} size={22} />
                  )}
                </IconBadge>
                <p
                  className="mt-1.5 text-[12px] leading-[1.35] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-2.5 min-h-0 flex-1">
          <PointedBanner title="महत्वपूर्ण चेतावनी (WARNING)" />
          <div
            className="mt-2 flex h-full min-h-0 items-center gap-3 rounded-[14px] px-3.5 py-3"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.45)",
            }}
          >
            <IconBadge size={48}>
              <WarningMark size={30} />
            </IconBadge>
            <div className="flex-1 space-y-1.5">
              {WARNINGS.map((text) => (
                <p
                  key={text}
                  className="text-[13px] leading-[1.45] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  • {text}
                </p>
              ))}
            </div>
            <IconBadge size={46}>
              <PngIcon src={ASSETS.icons.hand} size={28} />
            </IconBadge>
          </div>
        </section>

        <div className="mt-10 flex flex-col items-center gap-2.5 shrink-0 justify-center">
          <p
            className="mt-2.5 shrink-0 text-center text-[14px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            ईश्वर करें कि आपको सदैव सफलता, स्वास्थ्य, समृद्धि और मान-सम्मान प्राप्त हो और आपका जीवन
            सुखमय एवं संतुलित रहे।
          </p>
          <div
            className="rounded-full px-5 py-2"
            style={{
              background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
            }}
          >
            <p className="text-center text-[13px] font-bold tracking-[0.04em] text-[#f6e6c4]">
              आपके उज्ज्वल भविष्य की शुभकामनाओं के साथ
            </p>
          </div>
        </div>
      </div>
    </PalmReadingPageFrame>
  );
}
