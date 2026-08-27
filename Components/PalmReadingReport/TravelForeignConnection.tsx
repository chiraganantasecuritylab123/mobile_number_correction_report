import Image from "next/image";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import { PalmReadingPageHeader, PalmReadingSectionBar } from "./PalmReadingReportPageShell";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  travelHand: "/assets/palm-reading-report/travel-hand.png",
  travelMap: "/assets/palm-reading-report/image-1.png",
  traveler: "/assets/palm-reading-report/image-2.png",
  icons: {
    travel: "/assets/palm-reading-report/travel-foreign/icon-travel-clear.png",
    globe: "/assets/palm-reading-report/travel-foreign/icon-globe-clear.png",
    moon: "/assets/palm-reading-report/travel-foreign/icon-moon-clear.png",
    career: "/assets/palm-reading-report/travel-foreign/icon-career-clear.png",
    learning: "/assets/palm-reading-report/travel-foreign/icon-learning-clear.png",
    handshake: "/assets/palm-reading-report/travel-foreign/icon-handshake-clear.png",
    heart: "/assets/palm-reading-report/travel-foreign/icon-heart-clear.png",
    climb: "/assets/palm-reading-report/travel-foreign/icon-climb-clear.png",
    star: "/assets/palm-reading-report/travel-foreign/icon-star-clear.png",
    mountain: "/assets/palm-reading-report/travel-foreign/icon-mountain-clear.png",
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
} as const;

const TRAVEL_REASONS = [
  {
    title: "CAREER",
    text: "नए अवसर, promotion या job-related travel और relocation",
    iconSrc: ASSETS.icons.career,
  },
  {
    title: "EDUCATION",
    text: "Higher studies, specialization या skill enhancement",
    iconSrc: ASSETS.icons.learning,
  },
  {
    title: "BUSINESS",
    text: "Business expansion, partnership या new markets explore करना",
    iconSrc: ASSETS.icons.handshake,
  },
  {
    title: "RELATIONSHIP",
    text: "Life partner, family settlement या personal bond से जुड़ी journeys",
    iconSrc: ASSETS.icons.heart,
  },
  {
    title: "PERSONAL GROWTH",
    text: "Self-discovery, exposure, spiritual journeys या life experiences",
    iconSrc: ASSETS.icons.climb,
  },
] as const;

const TRAVEL_PATTERN = [
  "Travel सिर्फ recreation तक सीमित नहीं रहेगा।",
  "बार-बार short trips और कुछ लंबी journeys दोनों संभव हैं।",
  "Travel आपके perspective, mindset और opportunities को expand करेगा।",
  "Water (Moon) influence के कारण दूर की यात्राओं से सीख और inspiration मिल सकती हैं।",
] as const;

const FOREIGN_POINTS = [
  "Foreign connection की possibility को completely reject नहीं किया जा सकता।",
  "आपके work, business, studies या relationships के माध्यम से foreign people/places से जुड़ाव बन सकता है।",
  "यह जुड़ाव opportunities, growth और exposure लाने वाला हो सकता है।",
] as const;

const MOON_KEYWORDS = [
  "Imagination",
  "Intuition",
  "Travel",
  "Change",
  "Foreign Connection",
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

/** Three outward arrows — Life Line branching / change paths. */
function BranchArrowsSvg({ size = 22 }: { size?: number }) {
  const c = COLORS.gold;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 40V22M24 22L12 10M24 22l12-12"
        stroke={c}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 16V10h6M30 10h6v6" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 14V8" stroke={c} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M21 11l3-3 3 3" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CompassSvg({ size = 18 }: { size?: number }) {
  const c = COLORS.gold;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" stroke={c} strokeWidth="2.4" />
      <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 14l4 10-4 10-4-10 4-10z" fill={c} opacity="0.9" />
      <circle cx="24" cy="24" r="2.5" fill="#fff8e8" stroke={c} strokeWidth="1.5" />
    </svg>
  );
}

function GoldCheck() {
  return (
    <div
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
      style={{
        background: "linear-gradient(180deg, #e0c265 0%, #A96505 100%)",
        boxShadow: "0 0 0 1px rgba(184,134,11,0.35)",
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke="#fff8e8"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SectionBar() {
  return (
    <PalmReadingSectionBar
      title="15. TRAVEL & FOREIGN CONNECTION"
      icon={<PngIcon src={ASSETS.icons.travel} size={18} />}
      minWidth={460}
    />
  );
}

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center">
      <Pattern3 size={56} className="absolute left-[-4px] opacity-90" />
      <div
        className="relative z-10 rounded-full px-5 py-1.5"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 400,
        }}
      >
        <p className="text-center text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
          {title}
        </p>
      </div>
      <Pattern3 size={56} className="absolute right-[-4px] rotate-180 opacity-90" />
    </div>
  );
}

function ColumnTitle({ title }: { title: string }) {
  return (
    <div
      className="mb-2 rounded-full px-3 py-1.5 text-center"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <p className="text-[12px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
    </div>
  );
}

export default function TravelForeignConnection({
  pageNumber = "16",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="travel-foreign-connection" pageNumber={pageNumber}>
      <div
        className="absolute inset-x-0 flex flex-col px-11 font-cinzel"
        style={{ top: 18, bottom: 38 }}
      >
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-3 grid min-h-[250px] grid-cols-[1.08fr_1fr_0.82fr] items-center gap-3 rounded-[16px] px-3.5 py-3"
          style={{
            background: COLORS.creamBox,
            border: "1.5px solid rgba(92,24,24,0.42)",
            boxShadow: "inset 0 0 0 1px rgba(184,134,11,0.22)",
          }}
        >
          <div className="flex h-full flex-col justify-center gap-3.5 pr-1">
            <div className="flex items-start gap-2.5">
              <IconBadge size={44}>
                <PngIcon src={ASSETS.icons.globe} size={26} />
              </IconBadge>
              <p
                className="pt-0.5 text-[13px] leading-[1.5] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                <span className="font-bold">Moon area</span> की moderate prominence और{" "}
                <span className="font-bold">Life Line branching</span> के combination को traditional
                palmistry में travel/change से जोड़ा जाता है।
              </p>
            </div>
            <div
              className="border-t border-dashed"
              style={{ borderColor: "rgba(166,97,40,0.55)" }}
            />
            <div className="flex items-start gap-2.5">
              <IconBadge size={44}>
                <BranchArrowsSvg size={24} />
              </IconBadge>
              <p
                className="pt-0.5 text-[13px] leading-[1.5] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                Life Line के middle section में हल्की outward branching दिखाई देती है, जो travel,
                relocation, environment change या नई lifestyle से जुड़ी हो सकती है।
              </p>
            </div>
          </div>

          <div className="relative h-[220px] min-w-0">
            <Image
              src={ASSETS.travelHand}
              alt="Travel hand — Moon area and Life Line"
              fill
              sizes="260px"
              className="object-contain object-center mix-blend-screen"
              priority
            />
          </div>

          <div className="flex h-full flex-col items-center justify-center text-center">
            <IconBadge size={56}>
              <PngIcon src={ASSETS.icons.moon} size={34} />
            </IconBadge>
            <p
              className="mt-2 text-[14px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.maroon }}
            >
              MOON AREA
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {MOON_KEYWORDS.map((word) => (
                <p
                  key={word}
                  className="text-[12.5px] leading-snug font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-2.5">
          <PointedBanner title="POSSIBLE REASONS FOR TRAVEL / CHANGE" />
          <div
            className="mt-2 grid grid-cols-5 gap-1.5 rounded-[14px] px-2 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {TRAVEL_REASONS.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center px-1 text-center"
                style={{
                  borderRight:
                    index < TRAVEL_REASONS.length - 1
                      ? "1px dashed rgba(184,134,11,0.35)"
                      : "none",
                }}
              >
                <IconBadge size={36}>
                  <PngIcon src={item.iconSrc} size={22} />
                </IconBadge>
                <p
                  className="mt-1.5 text-[10px] font-bold leading-tight tracking-[0.04em]"
                  style={{ color: COLORS.maroon }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-0.5 text-[9.5px] leading-[1.3] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-2.5 grid flex-1 grid-cols-2 items-stretch gap-2.5">
          <div
            className="flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] px-3 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1.4px solid rgba(184,134,11,0.5)",
            }}
          >
            <ColumnTitle title="TRAVEL PATTERN" />
            <div className="flex flex-1 flex-col justify-center gap-2">
              {TRAVEL_PATTERN.map((text) => (
                <div key={text} className="flex items-start gap-2.5">
                  <GoldCheck />
                  <p
                    className="text-[13px] leading-[1.45] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative mt-1 h-[78px] w-full shrink-0">
              <Image
                src={ASSETS.travelMap}
                alt=""
                fill
                sizes="340px"
                className="object-contain object-bottom mix-blend-screen"
                aria-hidden
              />
            </div>
          </div>

          <div
            className="flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] px-3 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1.4px solid rgba(184,134,11,0.5)",
            }}
          >
            <ColumnTitle title="FOREIGN CONNECTION INDICATION" />
            <div className="flex min-h-0 flex-1 items-stretch gap-2">
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start gap-2.5">
                  <IconBadge size={38}>
                    <PngIcon src={ASSETS.icons.globe} size={22} />
                  </IconBadge>
                  <div className="min-w-0 space-y-1.5 font-nunito-sans">
                    {FOREIGN_POINTS.map((text) => (
                      <p
                        key={text}
                        className="text-[13px] leading-[1.45]"
                        style={{ color: COLORS.body }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  className="mt-auto flex items-start gap-2 rounded-[10px] px-2.5 py-2"
                  style={{
                    background: "rgba(232, 196, 122, 0.28)",
                    border: "1px solid rgba(184,134,11,0.4)",
                  }}
                >
                  <IconBadge size={28}>
                    <PngIcon src={ASSETS.icons.star} size={16} />
                  </IconBadge>
                  <p
                    className="text-[12.5px] leading-[1.4] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    लेकिन palm के आधार पर permanent foreign settlement की certainty claim करना उचित
                    नहीं होगा।
                  </p>
                </div>
              </div>
              <div className="relative w-[92px] shrink-0 self-end" style={{ height: "118px" }}>
                <Image
                  src={ASSETS.traveler}
                  alt=""
                  fill
                  sizes="92px"
                  className="object-contain object-bottom mix-blend-screen"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-2.5 flex items-center gap-2.5 rounded-[12px] px-3 py-2"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.5)",
          }}
        >
          <IconBadge size={34}>
            <CompassSvg size={18} />
          </IconBadge>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.08em]" style={{ color: COLORS.maroon }}>
              KEY TAKEAWAY
            </p>
            <p className="text-[11.5px] leading-[1.4] font-nunito-sans" style={{ color: COLORS.body }}>
              Travel और change आपकी जीवन की growth journey का महत्वपूर्ण हिस्सा हो सकते हैं। हर
              journey आपको नए अनुभव, सीख और opportunities से समृद्ध करेगी।
            </p>
          </div>
          <PngIcon src={ASSETS.icons.mountain} size={42} alt="" />
        </section>

        <footer className="mt-auto flex flex-col items-center pt-1.5">
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <CoverLotus size={22} />
            <blockquote
              className="max-w-[500px] text-center text-[12px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;यात्राएँ केवल स्थान नहीं बदलतीं, वे हमें भीतर से भी बदल देती हैं।&rdquo;
            </blockquote>
            <CoverLotus size={22} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
