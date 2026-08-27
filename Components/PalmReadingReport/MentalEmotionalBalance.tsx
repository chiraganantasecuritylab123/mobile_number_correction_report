import Image from "next/image";
import type { ReactNode } from "react";
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
  bronze: "#8B5A2B",
  body: "#2c1810",
} as const;

const ASSETS = {
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  palm: "/assets/palm-reading-report/mental-emotional/palm-head-line-clear.png",
  mindArt: "/assets/palm-reading-report/mental-emotional/art-mind-brain-clear.png",
  meditationArt: "/assets/palm-reading-report/mental-emotional/art-meditation-clear.png",
  icons: {
    meditation: "/assets/palm-reading-report/mental-emotional/icon-meditation-clear.png",
    brain: "/assets/palm-reading-report/mental-emotional/icon-brain-clear.png",
    brainGear: "/assets/palm-reading-report/mental-emotional/icon-brain-gear-clear.png",
    thought: "/assets/palm-reading-report/mental-emotional/icon-lightbulb-clear.png",
    chart: "/assets/palm-reading-report/mental-emotional/icon-growth-clear.png",
  },
} as const;

const LEFT_POINTS = [
  {
    text: "Head Line strong होने के कारण mental activity high रहने की tendency दिखाई देती है।",
    iconSrc: ASSETS.icons.brain,
  },
  {
    text: "आपका mind खाली रहने की बजाय लगातार किसी problem, plan या future possibility के बारे में सोच सकता है।",
    iconSrc: ASSETS.icons.thought,
  },
  {
    text: "इससे productivity बढ़ सकती है लेकिन excessive thinking mental fatigue भी पैदा कर सकती है।",
    iconSrc: ASSETS.icons.chart,
  },
] as const;

type HabitKey = "clipboard" | "runner" | "screen" | "target" | "compare";

const HABITS: { title: string; text: string; key: HabitKey }[] = [
  {
    title: "STRUCTURED PLANNING",
    text: "दिनचर्या और योजनाओं को व्यवस्थित रखें।",
    key: "clipboard",
  },
  {
    title: "REGULAR PHYSICAL ACTIVITY",
    text: "नियमित व्यायाम मानसिक ऊर्जा को संतुलित रखता है।",
    key: "runner",
  },
  {
    title: "SCREEN BREAKS",
    text: "स्क्रीन से समय-समय पर ब्रेक लें।",
    key: "screen",
  },
  {
    title: "CLEAR PRIORITIES",
    text: "स्पष्ट प्राथमिकताएं रखने से मन भटकता नहीं है।",
    key: "target",
  },
  {
    title: "UNNECESSARY COMPARISON से बचना",
    text: "दूसरों से तुलना मानसिक तनाव बढ़ाती है।",
    key: "compare",
  },
];

const MENTAL_PATTERN = [
  "आप naturally deep thinker हो सकते हैं।",
  "आप future की planning और possibilities पर ज्यादा focus करते हैं।",
  "कभी-कभी overthinking से energy drain हो सकती है।",
  "Solitude में आपको clarity मिल सकती है।",
  "Creative thinking और problem solving आपकी strength हैं।",
] as const;

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

/** Soft cream disc + thin gold ring — icons stay sharp (no gold-on-gold wash). */
function IconBadge({
  children,
  size = 54,
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
        boxShadow: `0 0 0 1.5px rgba(169,101,5,0.55), inset 0 1px 0 rgba(255,255,255,0.65)`,
      }}
    >
      {children}
    </div>
  );
}

function HabitSvg({ name, size = 30 }: { name: HabitKey; size?: number }) {
  const stroke = HEADER.bronze;
  const fill = HEADER.bronze;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (name === "clipboard") {
    return (
      <svg {...common}>
        <rect x="12" y="10" width="24" height="30" rx="3" stroke={stroke} strokeWidth="2.4" />
        <rect x="17" y="6" width="14" height="7" rx="2" fill={fill} />
        <circle cx="18" cy="22" r="1.6" fill={fill} />
        <circle cx="18" cy="29" r="1.6" fill={fill} />
        <circle cx="18" cy="36" r="1.6" fill={fill} />
        <path d="M23 22h10M23 29h10M23 36h8" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "runner") {
    return (
      <svg {...common}>
        <circle cx="29" cy="10" r="3.4" fill={fill} />
        <path
          d="M18 44l5-10 6 3 5-9M23 34l-6-6 8-5 7 3"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 22l6-3M20 28l-7 2" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "screen") {
    return (
      <svg {...common}>
        <rect x="15" y="8" width="18" height="30" rx="3" stroke={stroke} strokeWidth="2.4" />
        <path d="M21 12h6" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="33" r="1.5" fill={fill} />
        <circle cx="24" cy="24" r="10" stroke={stroke} strokeWidth="2.4" />
        <path d="M17 17l14 14" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg {...common}>
        <circle cx="22" cy="26" r="14" stroke={stroke} strokeWidth="2.4" />
        <circle cx="22" cy="26" r="8" stroke={stroke} strokeWidth="2.2" />
        <circle cx="22" cy="26" r="3" fill={fill} />
        <path
          d="M30 10l6-4 1 7-7 5-4-2 4-6z"
          fill={fill}
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // compare
  return (
    <svg {...common}>
      <circle cx="16" cy="30" r="7" stroke={stroke} strokeWidth="2.3" />
      <circle cx="32" cy="30" r="7" stroke={stroke} strokeWidth="2.3" />
      <path d="M16 24v-3M32 24v-3" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="14" r="6.5" stroke={stroke} strokeWidth="2.2" />
      <path d="M21 11l6 6M27 11l-6 6" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IntroFrame({
  children,
  className = "",
  minHeight = 58,
}: {
  children: ReactNode;
  className?: string;
  minHeight?: number;
}) {
  return (
    <div
      className={`relative flex w-full shrink-0 items-center ${className}`}
      style={{
        minHeight,
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
        {children}
      </div>
    </div>
  );
}

function SectionBar() {
  return (
    <PalmReadingSectionBar
      title="17. MENTAL & EMOTIONAL BALANCE"
      iconSrc={ASSETS.icons.meditation}
      minWidth={460}
    />
  );
}

function PointedBanner({ title, minWidth = 400 }: { title: string; minWidth?: number }) {
  return (
    <div className="flex justify-center">
      <div
        className="px-7 py-1.5 text-center"
        style={{
          background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
          clipPath:
            "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
          minWidth,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
      </div>
    </div>
  );
}

export default function MentalEmotionalBalance({
  pageNumber = "18",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="mental-emotional-balance"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-2.5 grid min-h-0 flex-[1.05] grid-cols-[1.05fr_0.9fr_0.95fr] items-stretch gap-3 rounded-[14px] px-3 py-3"
          style={{
            background: "rgba(248,232,204,0.45)",
            border: `1px solid rgba(169,101,5,0.4)`,
          }}
        >
          <div className="flex min-h-0 flex-col justify-evenly gap-3 py-1">
            {LEFT_POINTS.map((item) => (
              <div key={item.text} className="flex items-start gap-2.5">
                <IconBadge size={48}>
                  <PngIcon src={item.iconSrc} size={34} />
                </IconBadge>
                <p
                  className="min-w-0 text-[13px] leading-[1.45] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="relative min-h-0 overflow-hidden">
            <Image
              src={ASSETS.palm}
              alt="Head line on palm"
              fill
              sizes="240px"
              className="object-contain object-center"
              unoptimized
            />
          </div>

          <div className="relative min-h-0 overflow-hidden">
            <Image
              src={ASSETS.mindArt}
              alt="Active mind"
              fill
              sizes="220px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </section>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="mt-3 pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="USEFUL HABITS FOR MENTAL BALANCE" minWidth={420} />
          </div>
          <div
            className="grid grid-cols-5 gap-0 rounded-[14px] px-1.5 pb-2.5 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {HABITS.map((item, index) => (
              <div
                key={item.title}
                className="relative flex flex-col items-center px-1.5 text-center"
              >
                {index > 0 ? (
                  <div
                    className="absolute bottom-2 left-0 top-2 w-px"
                    style={{ background: "rgba(169,101,5,0.28)" }}
                    aria-hidden
                  />
                ) : null}
                <IconBadge size={56}>
                  <HabitSvg name={item.key} size={32} />
                </IconBadge>
                <p
                  className="mt-1.5 text-[10px] font-bold leading-tight tracking-[0.03em]"
                  style={{ color: HEADER.maroon }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-1 text-[10.5px] leading-[1.3] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-3 min-h-0 flex-1 pt-3">
          <div className="mt-3 pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="YOUR MENTAL PATTERN" minWidth={340} />
          </div>
          <div
            className="grid h-full min-h-0 grid-cols-[1fr_1.05fr] items-stretch gap-2.5 rounded-[14px] px-2.5 pb-2.5 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden px-1">
              <Image
                src={ASSETS.meditationArt}
                alt="Mental pattern meditation"
                width={420}
                height={280}
                className="h-full max-h-[240px] w-auto max-w-full object-contain object-center"
                unoptimized
              />
            </div>

            <div className="flex min-h-0 flex-col justify-evenly gap-1.5">
              {MENTAL_PATTERN.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <div
                    className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${HEADER.goldBright} 0%, ${HEADER.gold} 100%)`,
                    }}
                  >
                    <span className="text-[10px] font-bold text-[#3a0a0a]">✓</span>
                  </div>
                  <p
                    className="min-w-0 text-[12.5px] leading-[1.4] font-nunito-sans"
                    style={{ color: HEADER.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}

              <div
                className="mt-1 flex items-center gap-2.5 rounded-[10px] px-2.5 py-2"
                style={{
                  background: "rgba(255,248,232,0.9)",
                  border: `1px solid rgba(169,101,5,0.45)`,
                }}
              >
                <IconBadge size={44}>
                  <PngIcon src={ASSETS.icons.brainGear} size={32} />
                </IconBadge>
                <p
                  className="min-w-0 text-[12.5px] leading-[1.4] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  Traditional palmistry perspective से आपकी biggest mental challenge{" "}
                  <span className="font-bold tracking-[0.04em]" style={{ color: HEADER.maroon }}>
                    OVER-ANALYSIS
                  </span>{" "}
                  है।
                </p>
              </div>
            </div>
          </div>
        </section>

        <IntroFrame className="mt-2.5" minHeight={58}>
          <CoverLotus size={24} />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.maroon }}
          >
            “शांत मन, स्पष्ट सोच और संतुलित दिनचर्या ही सच्ची मानसिक शक्ति है।”
          </p>
          <CoverLotus size={24} />
        </IntroFrame>

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-end gap-2 pr-1">
            <Pattern3 size={28} />
            <p
              className="text-[11px] font-bold tracking-[0.14em]"
              style={{ color: COLORS.brown }}
            >
              {pageNumber}
            </p>
            <Pattern3 size={28} className="rotate-180" />
          </div>
        </footer>
      </div>
    </PalmReadingReportPageShell>
  );
}
