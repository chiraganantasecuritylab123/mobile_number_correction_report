import Image from "next/image";
import {
  Briefcase,
  CircleCheck,
  Compass,
  Flag,
  GitBranch,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  MapPin,
  Moon,
  Mountain,
  Plane,
  Star,
  Users,
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
  red: "#c41e3a",
} as const;

const TRAVEL_REASONS = [
  {
    title: "CAREER",
    text: "नए अवसर, promotion या job-related travel और relocation",
    icon: Briefcase,
  },
  {
    title: "EDUCATION",
    text: "Higher studies, specialization या skill enhancement",
    icon: GraduationCap,
  },
  {
    title: "BUSINESS",
    text: "Business expansion, partnership या new markets explore करना",
    icon: Handshake,
  },
  {
    title: "RELATIONSHIP",
    text: "Life partner, family settlement या personal bond से जुड़ी journeys",
    icon: Heart,
  },
  {
    title: "PERSONAL GROWTH",
    text: "Self-discovery, exposure, spiritual journeys या life experiences",
    icon: Flag,
  },
] as const;

const TRAVEL_PATTERN = [
  "Travel सिर्फ recreation तक सीमित नहीं रहेगा।",
  "बार-बार short trips और कुछ लंबी journeys दोनों संभव हैं।",
  "Travel आपके perspective, knowledge और opportunities को expand करेगा।",
  "Water (Moon) influence के कारण दूर की यात्राओं से सीख और inspiration मिल सकती हैं।",
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
          minWidth: 440,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Plane size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          15. TRAVEL &amp; FOREIGN CONNECTION
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
      className="mb-2 rounded-full px-3 py-1 text-center"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
      }}
    >
      <p className="text-[10px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
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

        <section className="mt-3 grid grid-cols-[1fr_0.95fr_0.9fr] items-center gap-2.5">
          <div
            className="flex flex-col gap-2.5 rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <div className="flex items-start gap-2">
              <IconCircle size={32}>
                <Globe2 size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p
                className="text-[11px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                <span className="font-bold">Moon area</span> की moderate prominence और{" "}
                <span className="font-bold">Life Line branching</span> के combination को traditional
                palmistry में travel/change से जोड़ा जाता है।
              </p>
            </div>
            <div
              className="border-t border-dashed"
              style={{ borderColor: "rgba(184,134,11,0.4)" }}
            />
            <div className="flex items-start gap-2">
              <IconCircle size={32}>
                <GitBranch size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p
                className="text-[11px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                Life Line के middle section में हल्की outward branching दिखाई देती है, जो travel,
                relocation, environment change या नई lifestyle से जुड़ी हो सकती है।
              </p>
            </div>
          </div>

          <div
            className="relative h-[210px] overflow-hidden rounded-[16px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Moon area and life line"
              fill
              sizes="240px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.1) translateY(4px)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 240 210"
              aria-hidden
            >
              <ellipse
                cx="168"
                cy="148"
                rx="28"
                ry="34"
                fill="rgba(217,119,6,0.28)"
                stroke={COLORS.orange}
                strokeWidth="1.5"
              />
              <path
                d="M98 78 C112 108, 128 132, 152 148"
                fill="none"
                stroke={COLORS.red}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M196 130 C210 118, 220 108, 228 98"
                fill="none"
                stroke={COLORS.gold}
                strokeWidth="1.4"
                strokeDasharray="4 3"
              />
            </svg>
          </div>

          <div
            className="flex flex-col items-center rounded-[14px] px-2.5 py-3 text-center"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <IconCircle size={40}>
              <Moon size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
            <p
              className="mt-2 text-[12px] font-bold tracking-[0.08em]"
              style={{ color: COLORS.maroon }}
            >
              MOON AREA
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {MOON_KEYWORDS.map((word) => (
                <p
                  key={word}
                  className="text-[11px] leading-tight font-nunito-sans"
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
            {TRAVEL_REASONS.map((item, index) => {
              const Icon = item.icon;
              return (
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
                  <IconCircle size={34}>
                    <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
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
              );
            })}
          </div>
        </section>

        <section className="mt-2.5 grid flex-1 grid-cols-2 items-stretch gap-2.5">
          <div
            className="flex flex-col rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <ColumnTitle title="TRAVEL PATTERN" />
            <div className="flex flex-1 flex-col justify-between gap-1.5">
              {TRAVEL_PATTERN.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CircleCheck
                    size={14}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.gold }}
                  />
                  <p
                    className="text-[10.5px] leading-[1.35] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-center gap-2">
              <Plane size={16} style={{ color: COLORS.gold }} />
              <Globe2 size={16} style={{ color: COLORS.maroon }} />
              <MapPin size={14} style={{ color: COLORS.orange }} />
            </div>
          </div>

          <div
            className="flex flex-col rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <ColumnTitle title="FOREIGN CONNECTION INDICATION" />
            <div className="flex items-start gap-2">
              <IconCircle size={32}>
                <Globe2 size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p
                className="text-[11px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                Work, business, studies या relationships के माध्यम से{" "}
                <span className="font-bold">foreign connection</span> की संभावना दिखती है — जिससे
                नए experiences और opportunities खुल सकते हैं।
              </p>
            </div>
            <div
              className="mt-2 flex items-start gap-2 rounded-[10px] px-2.5 py-2"
              style={{
                background: "rgba(255,248,232,0.9)",
                border: "1px solid rgba(184,134,11,0.45)",
              }}
            >
              <Star
                size={13}
                className="mt-0.5 shrink-0"
                fill={COLORS.goldLight}
                stroke={COLORS.gold}
              />
              <p
                className="text-[10.5px] leading-[1.35] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                लेकिन palm के आधार पर permanent foreign settlement की certainty claim करना उचित
                नहीं होगा।
              </p>
            </div>
            <div className="mt-auto flex items-center justify-center gap-2 pt-2">
              <Users size={15} style={{ color: COLORS.maroon }} />
              <Plane size={15} style={{ color: COLORS.gold }} />
              <Mountain size={15} style={{ color: COLORS.maroon }} />
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
          <IconCircle size={34}>
            <Compass size={15} strokeWidth={1.8} style={{ color: COLORS.gold }} />
          </IconCircle>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.08em]" style={{ color: COLORS.maroon }}>
              KEY TAKEAWAY
            </p>
            <p className="text-[11.5px] leading-[1.4] font-nunito-sans" style={{ color: COLORS.body }}>
              Travel और change आपकी जीवन की growth journey का महत्वपूर्ण हिस्सा हो सकते हैं। हर
              journey आपको नए अनुभव, सीख और opportunities से समृद्ध करेगी।
            </p>
          </div>
        </section>

        <footer className="mt-auto flex flex-col items-center pt-1.5">
          <OrnamentDivider width={180} />
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
