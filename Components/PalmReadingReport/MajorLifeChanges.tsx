import Image from "next/image";
import { RefreshCw } from "lucide-react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import PalmReadingReportPageShell, {
  PalmReadingPageHeader,
  PalmReadingSectionBar,
  REPORT_COLORS,
} from "./PalmReadingReportPageShell";

const COLORS = REPORT_COLORS;

const HEADER = {
  maroon: "#4a0e0e",
  maroonDeep: "#3a0a0a",
  gold: "#A96505",
  goldBright: "#c9a227",
  body: "#2c1810",
} as const;

const ASSETS = {
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  crossroads: "/assets/palm-reading-report/major-life-changes/crossroads-clear.png",
  icons: {
    growth: "/assets/palm-reading-report/major-life-changes/icon-growth-clear.png",
    learning: "/assets/palm-reading-report/major-life-changes/icon-learning-clear.png",
    career: "/assets/palm-reading-report/major-life-changes/icon-career-clear.png",
    signpost: "/assets/palm-reading-report/major-life-changes/icon-signpost-clear.png",
    climb: "/assets/palm-reading-report/major-life-changes/icon-climb-clear.png",
  },
} as const;

type LifeStage = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  iconSrc: string;
};

const STAGES: LifeStage[] = [
  {
    number: "1",
    title: "EARLY 20s",
    subtitle: "Learning और Identity Formation",
    description:
      "इस चरण में आप सीखने, अपनी identity समझने और नई दिशाएँ explore करने पर focused रहते हैं।",
    bullets: [
      "नई skills विकसित करना",
      "Education और learning",
      "अपनी interests पहचानना",
    ],
    iconSrc: ASSETS.icons.learning,
  },
  {
    number: "2",
    title: "MID-TO-LATE 20s",
    subtitle: "Career और Personal Responsibility में बढ़ोतरी",
    description:
      "अब focus career, finances और serious relationships की ओर बढ़ता है।",
    bullets: [
      "Career पर स्पष्ट focus",
      "Financial planning",
      "Relationship में गंभीरता",
    ],
    iconSrc: ASSETS.icons.career,
  },
  {
    number: "3",
    title: "EARLY 30s",
    subtitle: "Direction Consolidation और Important Decisions",
    description:
      "यह चरण life goals को define करने और बड़े निर्णय लेने का समय होता है।",
    bullets: [
      "Life goals स्पष्ट करना",
      "Career / business के बड़े निर्णय",
      "महत्वपूर्ण personal choices",
    ],
    iconSrc: ASSETS.icons.signpost,
  },
  {
    number: "4",
    title: "MID 30s ONWARD",
    subtitle: "Experience का Financial और Professional Benefit",
    description:
      "अनुभव से मिली समझ के साथ आप stability और long-term success की नींव रखते हैं।",
    bullets: [
      "Experience से growth",
      "Wealth creation",
      "Long-term success की foundation",
    ],
    iconSrc: ASSETS.icons.climb,
  },
];


function GoldDiamond({ size = 8 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden className="shrink-0">
      <path
        d="M5 0.6 L9.4 5 L5 9.4 L0.6 5 Z"
        fill={HEADER.goldBright}
        stroke={HEADER.gold}
        strokeWidth="0.6"
      />
    </svg>
  );
}

function SectionBar() {
  return (
    <PalmReadingSectionBar
      title="9. MAJOR LIFE CHANGES"
      icon={
        <RefreshCw size={16} strokeWidth={2.2} style={{ color: HEADER.maroonDeep }} />
      }
      minWidth={390}
    />
  );
}

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <div
        className="px-8 py-1.5 text-center"
        style={{
          background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
          clipPath:
            "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
          minWidth: 440,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
      </div>
    </div>
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

function StageRow({ stage, isLast }: { stage: LifeStage; isLast?: boolean }) {
  return (
    <div className="relative grid min-h-0 flex-1 grid-cols-[32px_54px_1fr_230px] items-center gap-3 py-1.5">
      {!isLast && (
        <div
          className="absolute bottom-0 left-[15px] top-9 w-px"
          style={{ borderLeft: "1.5px dashed rgba(169,101,5,0.55)" }}
        />
      )}
      <div
        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold text-[#f6e6c4]"
        style={{
          background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
        }}
      >
        {stage.number}
      </div>
      <PngIcon src={stage.iconSrc} size={52} />
      <div className="min-w-0 pr-1">
        <p
          className="text-[15px] font-bold leading-none tracking-[0.04em]"
          style={{ color: HEADER.maroon }}
        >
          {stage.title}
        </p>
        <p
          className="mt-1 text-[12px] font-semibold leading-[1.3] tracking-[0.02em]"
          style={{ color: HEADER.gold }}
        >
          {stage.subtitle}
        </p>
        <p
          className="mt-1.5 text-[13px] leading-[1.4] font-nunito-sans"
          style={{ color: HEADER.body }}
        >
          {stage.description}
        </p>
      </div>
      <div
        className="rounded-[12px] px-3 py-2.5"
        style={{
          background: "rgba(255,248,232,0.88)",
          border: `1px solid rgba(169,101,5,0.45)`,
        }}
      >
        <ul className="space-y-2">
          {stage.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-[12.5px] leading-[1.35] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              <span className="mt-[4px]">
                <GoldDiamond size={9} />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type MajorLifeChangesProps = {
  pageNumber?: string;
  introText?: string;
  transitionText?: string;
  footerQuote?: string;
};

export default function MajorLifeChanges({
  pageNumber = "10",
  introText = "आपकी हथेली का pattern एक static life नहीं, बल्कि phases of change को दिखाता है। हर चरण में आपकी thinking, decisions और life direction एक नई दिशा ले सकते हैं।",
  transitionText = "इन changes को negative नहीं माना जाना चाहिए — आपके मामले में change अक्सर growth का माध्यम बनता है।",
  footerQuote = "परिवर्तन जीवन का हिस्सा है, लेकिन सही दिशा में किया गया परिवर्तन आपको आपकी highest potential तक ले जा सकता है।",
}: MajorLifeChangesProps) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="major-life-changes"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-2.5 flex shrink-0 items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: "rgba(248,232,204,0.55)",
            border: `1px solid rgba(169,101,5,0.45)`,
          }}
        >
          <PngIcon src={ASSETS.icons.growth} size={52} alt="Growth" />
          <p
            className="min-w-0 flex-1 text-[12.5px] leading-[1.5] font-nunito-sans"
            style={{ color: HEADER.body }}
          >
            {introText}
          </p>
          <div
            className="relative h-[86px] w-[128px] shrink-0 overflow-hidden rounded-[10px]"
            style={{
              border: `1px solid rgba(169,101,5,0.45)`,
              background: "rgba(255,248,232,0.65)",
            }}
          >
            <Image
              src={ASSETS.crossroads}
              alt="Major life crossroads"
              fill
              sizes="128px"
              className="object-contain object-center p-1"
              unoptimized
            />
          </div>
        </section>

        <div
          className="relative mt-2 flex w-full shrink-0 items-center"
          style={{
            minHeight: 58,
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: "transparent",
            borderTopWidth: 14,
            borderBottomWidth: 14,
            borderLeftWidth: 20,
            borderRightWidth: 20,
            borderImageSource: `url(${ASSETS.introFrame})`,
            borderImageSlice: "55 70 55 70",
            borderImageWidth: "14px 20px",
            borderImageRepeat: "stretch",
          }}
        >
          <div className="relative z-10 flex w-full items-center gap-2 px-1 py-0.5">
            <CoverLotus size={40} className="shrink-0" />
            <p
              className="min-w-0 flex-1 text-center text-[12px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              {transitionText}
            </p>
            <CoverLotus size={40} className="shrink-0" />
          </div>
        </div>

        <section className="relative mt-3 min-h-0 flex-1 pt-3">
          <div className="mt-3 pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="TRADITIONAL AGE-PHASE INTERPRETATION" />
          </div>
          <div
            className="flex h-full min-h-0 flex-col justify-evenly rounded-[14px] px-3.5 pb-2 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {STAGES.map((stage, index) => (
              <StageRow
                key={stage.number}
                stage={stage}
                isLast={index === STAGES.length - 1}
              />
            ))}
          </div>
        </section>

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="max-w-[520px] text-center text-[12px] leading-[1.4] font-nunito-sans"
              style={{ color: HEADER.maroon }}
            >
              “{footerQuote}”
            </p>
            <CoverLotus size={22} />
          </div>

          {/* <div className="mt-1.5 flex w-full items-center justify-end gap-2 pr-1">
            <Pattern3 size={28} />
            <p
              className="text-[11px] font-bold tracking-[0.14em]"
              style={{ color: COLORS.brown }}
            >
              {pageNumber}
            </p>
            <Pattern3 size={28} className="rotate-180" />
          </div> */}
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
