import Image from "next/image";
import {
  BookOpen,
  Briefcase,
  RefreshCw,
  Signpost,
  Sprout,
  Star,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
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
} as const;

type LifeStage = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
};

const STAGES: LifeStage[] = [
  {
    number: "1",
    title: "EARLY 20s",
    subtitle: "Learning and Identity Formation",
    description:
      "इस चरण में आप सीखने, अपनी identity समझने और नई दिशाएँ explore करने पर focused रहते हैं।",
    bullets: [
      "नई skills विकसित करना",
      "Education और learning",
      "अपनी interests पहचानना",
    ],
    icon: <BookOpen size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />,
  },
  {
    number: "2",
    title: "MID TO LATE 20s",
    subtitle: "Career Building & Practical Decisions",
    description:
      "अब focus career, finances और serious relationships की ओर बढ़ता है।",
    bullets: [
      "Career पर स्पष्ट focus",
      "Financial planning",
      "Relationship में गंभीरता",
    ],
    icon: <Briefcase size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />,
  },
  {
    number: "3",
    title: "EARLY 30s",
    subtitle: "Direction & Major Decisions",
    description:
      "यह चरण life goals को define करने और बड़े निर्णय लेने का समय होता है।",
    bullets: [
      "Life goals स्पष्ट करना",
      "Career / business के बड़े निर्णय",
      "महत्वपूर्ण personal choices",
    ],
    icon: <Signpost size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />,
  },
  {
    number: "4",
    title: "MID 30s ONWARD",
    subtitle: "Experience, Stability & Long-term Growth",
    description:
      "अनुभव से मिली समझ के साथ आप stability और long-term success की नींव रखते हैं।",
    bullets: [
      "Experience से growth",
      "Financial stability",
      "Long-term success की foundation",
    ],
    icon: <TrendingUp size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />,
  },
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
          minWidth: 390,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <RefreshCw size={16} strokeWidth={2.2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          <span>9.</span>
          <span>MAJOR LIFE CHANGES</span>
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
        className="px-8 py-1.5 text-center"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          clipPath:
            "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
          minWidth: 420,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
          {title}
        </p>
      </div>
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
        border: "1.4px solid rgba(184,134,11,0.7)",
        background: "#fff8e8",
      }}
    >
      {children}
    </div>
  );
}

function StageRow({ stage, isLast }: { stage: LifeStage; isLast?: boolean }) {
  return (
    <div className="relative grid grid-cols-[28px_44px_1fr_210px] items-center gap-2.5 py-2.5">
      {!isLast && (
        <div
          className="absolute bottom-0 left-[13px] top-8 w-px"
          style={{ borderLeft: "1.5px dashed rgba(184,134,11,0.55)" }}
        />
      )}
      <div
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-[#f6e6c4]"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
        }}
      >
        {stage.number}
      </div>
      <IconCircle size={40}>{stage.icon}</IconCircle>
      <div className="min-w-0 pr-1">
        <p
          className="text-[13px] font-bold leading-none tracking-[0.04em]"
          style={{ color: COLORS.maroon }}
        >
          {stage.title}
        </p>
        <p
          className="mt-0.5 text-[10px] font-semibold tracking-[0.02em]"
          style={{ color: COLORS.gold }}
        >
          {stage.subtitle}
        </p>
        <p
          className="mt-1 text-[11px] leading-[1.4] font-nunito-sans"
          style={{ color: COLORS.body }}
        >
          {stage.description}
        </p>
      </div>
      <div
        className="rounded-[10px] px-2.5 py-2"
        style={{
          background: "rgba(255,248,232,0.88)",
          border: "1px solid rgba(184,134,11,0.45)",
        }}
      >
        <ul className="space-y-1">
          {stage.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-1.5 text-[10.5px] leading-[1.35] font-nunito-sans"
              style={{ color: COLORS.body }}
            >
              <Star
                size={9}
                className="mt-[3px] shrink-0"
                fill={COLORS.goldLight}
                stroke={COLORS.gold}
                strokeWidth={1.2}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MajorLifeChanges({
  pageNumber = "10",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="major-life-changes" pageNumber={pageNumber}>
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
          <IconCircle size={48}>
            <Sprout size={22} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
          <p
            className="flex-1 text-[12.5px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            आपकी हथेली का pattern एक <span className="font-bold">static life</span> नहीं, बल्कि{" "}
            <span className="font-bold">phases of change</span> को दिखाता है। हर चरण में आपकी
            thinking, decisions और life direction एक नई दिशा ले सकते हैं।
          </p>
          <div
            className="relative h-[78px] w-[108px] shrink-0 overflow-hidden rounded-[10px]"
            style={{
              border: "1px solid rgba(184,134,11,0.45)",
              background: "rgba(255,248,232,0.9)",
            }}
          >
            <Image
              src={ASSETS.sunrise}
              alt=""
              fill
              sizes="108px"
              className="object-contain p-1"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-1.5">
              <Signpost size={18} strokeWidth={1.8} style={{ color: COLORS.maroon }} />
            </div>
          </div>
        </section>

        <div className="mt-2.5 flex items-center justify-center gap-2 px-4">
          <CoverLotus size={24} />
          <p
            className="max-w-[520px] text-center text-[12px] leading-[1.45] font-nunito-sans"
            style={{ color: COLORS.maroon }}
          >
            इन changes को negative नहीं माना जाना चाहिए — आपके मामले में change अक्सर growth का
            माध्यम बनता है।
          </p>
          <CoverLotus size={24} />
        </div>

        <div className="mt-3">
          <PointedBanner title="TRADITIONAL AGE-PHASE INTERPRETATION" />
        </div>

        <section
          className="mt-2 flex-1 rounded-[14px] px-3 py-1"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.4)",
          }}
        >
          {STAGES.map((stage, index) => (
            <StageRow
              key={stage.number}
              stage={stage}
              isLast={index === STAGES.length - 1}
            />
          ))}
        </section>

        <footer className="mt-2.5 flex flex-col items-center">
          <OrnamentDivider width={200} />
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={26} />
            <blockquote
              className="max-w-[500px] text-center text-[12.5px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;Change जीवन का हिस्सा है, लेकिन सही दिशा में किया गया change आपको आपके
              highest potential तक ले जा सकता है।&rdquo;
            </blockquote>
            <CoverLotus size={26} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
