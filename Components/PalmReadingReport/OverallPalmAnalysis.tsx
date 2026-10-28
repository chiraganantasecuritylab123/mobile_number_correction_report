import {
  Hand,
  Heart,
  Moon,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import PalmReadingReportPageShell, {
  PalmReadingPageHeader,
  REPORT_COLORS,
  PalmReadingSectionBar,
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
  palm: "/assets/palm-reading-report/palm-lines.png",
  icons: {
    hand: "/assets/palm-reading-report/icons/hand.png",
    heart: "/assets/palm-reading-report/icons/heart.png",
    brain: "/assets/palm-reading-report/icons/brain.png",
    scale: "/assets/palm-reading-report/icons/scale.png",
    target: "/assets/palm-reading-report/icons/target.png",
  },
} as const;

export type PalmAnalysisPoint = {
  iconSrc?: string;
  icon?: LucideIcon;
  text: string;
};

export type PalmCharacteristic = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type OverallPalmAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  analysisPoints?: PalmAnalysisPoint[];
  characteristics?: PalmCharacteristic[];
  indications?: string[];
};

const defaultAnalysisPoints: PalmAnalysisPoint[] = [
  {
    iconSrc: ASSETS.icons.hand,
    text: "आपकी हथेली का overall structure एक rectangular palm with relatively long fingers की ओर संकेत करता है। Thumb proportionate है और उसका lower portion comparatively developed दिखाई देता है।",
  },
  {
    iconSrc: ASSETS.icons.heart,
    text: "हथेली में Venus Mount अच्छी तरह developed है, जबकि Moon area भी moderately prominent दिखाई देता है।",
  },
  {
    iconSrc: ASSETS.icons.brain,
    text: "Traditional palmistry के अनुसार इस प्रकार का combination व्यक्ति के भीतर practical thinking, imagination, emotional depth और personal independence का मिश्रण दर्शा सकता है।",
  },
  {
    iconSrc: ASSETS.icons.scale,
    text: "आप सामान्यतः किसी भी situation को केवल एक angle से देखने के बजाय उसके कई संभावित परिणामों के बारे में सोचने की प्रवृत्ति रख सकते हैं।",
  },
  {
    iconSrc: ASSETS.icons.target,
    text: "यही कारण है कि कई situations में आप दूसरों की तुलना में decision लेने में थोड़ा अधिक समय ले सकते हैं। हालांकि decision लेने के बाद उसे execute करने की determination अच्छी रह सकती है।",
  },
  {
    icon: TrendingUp,
    text: "आपकी हथेली का सबसे महत्वपूर्ण overall pattern यह है कि इसमें mental activity और self-directed growth के संकेत दिखाई देते हैं। यानी आपकी progress केवल परिस्थितियों पर depend करने के बजाय आपके decisions, skills और consistency से काफी प्रभावित हो सकती है।",
  },
  {
    icon: Star,
    text: "कुल मिलाकर, आपकी हथेली Practical Thinking, Emotional Depth और Self-Directed Growth के संकेत देती है, जहाँ सफलता experience और consistency पर आधारित रहती है।",
  },
];

const defaultCharacteristics: PalmCharacteristic[] = [
  { icon: Hand, label: "Palm Shape", value: "Rectangular" },
  { icon: Sparkles, label: "Fingers", value: "Relatively Long" },
  { icon: Hand, label: "Thumb", value: "Proportionate" },
  { icon: Heart, label: "Venus Mount", value: "Well Developed" },
  { icon: Moon, label: "Moon Area", value: "Moderately Prominent" },
];

const defaultIndications = [
  "Practical Thinking",
  "Imaginative & Creative",
  "Emotional Depth",
  "Independent Nature",
  "Self-Directed Growth",
  "Experience Based Success",
];


function GoldDiamond({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 0.5L7.1 4.4L11.2 4.6L8 7.2L9 11.2L6 9L3 11.2L4 7.2L0.8 4.6L4.9 4.4L6 0.5Z"
        fill={HEADER.goldBright}
      />
    </svg>
  );
}

/** Ribbon header + cream body — matches reference summary cards */
function SummaryBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative w-full shrink-0 rounded-[10px] pt-3.5"
      style={{
        border: `1.5px solid rgba(93,46,23,0.55)`,
        backgroundColor: "rgba(253,245,230,0.72)",
        boxShadow: `inset 0 0 0 1px rgba(201,162,39,0.35)`,
      }}
    >
      <div className="absolute left-1/2 top-0 z-10 flex w-[92%] -translate-x-1/2 -translate-y-1/2 items-center gap-1">
        <Pattern3 size={22} />
        <div
          className="relative flex h-[28px] min-w-0 flex-1 items-center justify-center px-4"
          style={{
            background: `linear-gradient(180deg, #6b1f1f 0%, ${HEADER.maroon} 55%, ${HEADER.maroonDeep} 100%)`,
            clipPath:
              "polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)",
            boxShadow: `0 0 0 1px ${HEADER.goldBright}`,
          }}
        >
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <GoldDiamond size={8} />
          </span>
          <p
            className="truncate px-3 text-center text-[12px] font-bold tracking-wide text-white font-cinzel"
            style={{ textShadow: "0 1px 1px rgba(0,0,0,0.35)" }}
          >
            {title}
          </p>
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            <GoldDiamond size={8} />
          </span>
        </div>
        <Pattern3 size={22} className="rotate-180" />
      </div>
      <div className="px-3 pb-2.5 pt-2">{children}</div>
    </div>
  );
}

function AnalysisPointRow({ point }: { point: PalmAnalysisPoint }) {
  const FallbackIcon = point.icon;
  return (
    <div className="flex shrink-0 items-start gap-3">
      {point.iconSrc ? (
        <Image
          src={point.iconSrc}
          alt=""
          width={42}
          height={42}
          className="mt-0.5 h-[42px] w-[42px] shrink-0 object-contain"
          aria-hidden
        />
      ) : FallbackIcon ? (
        <div
          className="mt-0.5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full"
          style={{ border: `1.6px solid ${HEADER.goldBright}` }}
        >
          <FallbackIcon size={20} strokeWidth={1.6} style={{ color: HEADER.gold }} />
        </div>
      ) : null}
      <p
        className="min-w-0 flex-1 pt-0.5 text-[14px] leading-[1.55] font-nunito-sans"
        style={{ color: HEADER.body }}
      >
        {point.text}
      </p>
    </div>
  );
}

function CharacteristicRow({ item }: { item: PalmCharacteristic }) {
  const Icon = item.icon;
  return (
    <div className="flex items-start gap-2">
      <Icon
        size={15}
        strokeWidth={1.7}
        className="mt-0.5 shrink-0"
        style={{ color: HEADER.gold }}
      />
      <div className="min-w-0 font-nunito-sans">
        <p className="text-[11px] font-bold leading-tight" style={{ color: HEADER.maroon }}>
          {item.label}
        </p>
        <p
          className="text-[11px] leading-tight"
          style={{ color: HEADER.body, opacity: 0.9 }}
        >
          {item.value}
        </p>
      </div>
    </div>
  );
}

function VerticalDivider() {
  return (
    <div
      className="relative flex w-[14px] shrink-0 flex-col items-center self-stretch py-3"
      aria-hidden
    >
      <div
        className="h-full w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(184,134,11,0.65) 5%, rgba(184,134,11,0.65) 95%, transparent 100%)",
        }}
      />
      {[18, 50, 82].map((top) => (
        <div
          key={top}
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: `${top}%`,
            backgroundColor: "rgba(253,245,230,0.95)",
            padding: 2,
          }}
        >
          <GoldDiamond size={10} />
        </div>
      ))}
    </div>
  );
}

export default function OverallPalmAnalysis({
  pageNumber = "02",
  sectionTitle = "1. आपकी हथेली का समग्र विश्लेषण",
  analysisPoints = defaultAnalysisPoints,
  characteristics = defaultCharacteristics,
  indications = defaultIndications,
}: OverallPalmAnalysisProps) {
  const leftChars = characteristics.slice(0, 3);
  const rightChars = characteristics.slice(3);

  return (
    <PalmReadingReportPageShell
      padding="14px 34px 22px"
      pageNumber={pageNumber}
      pageLabel="palm-overall-analysis"
    >
      <div className="relative flex h-full min-h-0 flex-col">
        <PalmReadingPageHeader />

        <div className="mt-3 shrink-0">
          <PalmReadingSectionBar
            title={sectionTitle}
            icon={<CoverLotus size={22} />}
            minWidth={460}
          />
        </div>

        <div className="relative z-10 mt-3 grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_14px_minmax(0,1fr)] items-stretch gap-x-3">
          <section className="flex min-h-0 min-w-0 flex-col justify-start gap-2.5 overflow-hidden py-0.5">
            {analysisPoints.map((point, index) => (
              <AnalysisPointRow key={`palm-point-${index}`} point={point} />
            ))}
          </section>

          <VerticalDivider />

          <aside className="flex min-h-0 min-w-0 flex-col gap-6.5 pt-1">
            <div className="flex shrink-0 justify-center pb-2">
              <Image
                src={ASSETS.palm}
                alt="Palm lines diagram"
                width={270}
                height={340}
                className="h-auto w-full max-w-[252px] object-contain object-top"
                priority
              />
            </div>

            <SummaryBox title="हथेली की विशेषताएँ">
              <div className="grid grid-cols-2 items-stretch">
                <div className="flex min-w-0 flex-col justify-center gap-2.5 pr-3">
                  {leftChars.map((item) => (
                    <CharacteristicRow key={item.label} item={item} />
                  ))}
                </div>
                <div
                  className="flex min-w-0 flex-col justify-center gap-2.5 pl-3"
                  style={{
                    borderLeft: `1.4px solid ${HEADER.goldBright}`,
                  }}
                >
                  {rightChars.map((item) => (
                    <CharacteristicRow key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </SummaryBox>

            <SummaryBox title="समग्र संकेत">
              <ul className="flex flex-col gap-2">
                {indications.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-nunito-sans">
                    <GoldDiamond size={9} />
                    <span
                      className="text-[12px] font-semibold leading-snug"
                      style={{ color: HEADER.body }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </SummaryBox>
          </aside>
        </div>

        <footer className="relative mt-2 flex shrink-0 items-end justify-center pt-2">
          <CoverLotus size={36} />
          <div className="absolute bottom-0 right-0 flex items-center gap-1.5 font-cinzel">
            <Pattern3 size={16} />
            <p
              className="text-[12px] font-bold tracking-[0.14em]"
              style={{ color: COLORS.brown }}
            >
              {pageNumber}
            </p>
            <Pattern3 size={16} className="rotate-180" />
          </div>
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
