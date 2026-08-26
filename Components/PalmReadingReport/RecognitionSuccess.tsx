import Image from "next/image";
import {
  Award,
  BarChart3,
  Flag,
  Lightbulb,
  Megaphone,
  Mountain,
  Palette,
  Sprout,
  Star,
  Sun,
  Target,
  Trophy,
  Users,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/hand.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunrise: "/assets/number-activations/sunrise.png",
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

const INDICATIONS = [
  {
    text: "आपके लिए recognition और appreciation सिर्फ money से कम महत्वपूर्ण नहीं है — काम की पहचान भी मायने रखती है।",
    icon: UserRound,
  },
  {
    text: "जब आपके efforts को acknowledge किया जाता है, तो आपकी motivation और energy दोनों बढ़ते हैं।",
    icon: Lightbulb,
  },
  {
    text: "Creative work, public-facing roles या personal branding वाली दिशाएँ आपके Sun influence को support कर सकती हैं।",
    icon: Palette,
  },
] as const;

const ENERGY_ACTIONS = [
  {
    title: "FOCUS ON QUALITY",
    text: "काम की quality पर पूरा ध्यान दें।",
    icon: Target,
  },
  {
    title: "BUILD VISIBILITY",
    text: "अपने काम को सही जगह दिखाएँ।",
    icon: Megaphone,
  },
  {
    title: "CREATE VALUE",
    text: "दूसरों के लिए genuine value बनाएँ।",
    icon: Users,
  },
  {
    title: "BE CONSISTENT",
    text: "Consistency से recognition बढ़ती है।",
    icon: Award,
  },
  {
    title: "NURTURE YOUR TALENT",
    text: "अपनी talent को लगातार विकसित करें।",
    icon: Sprout,
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
    <div className="relative mx-auto mt-3 flex w-full max-w-[640px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 400,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Sun size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          14. RECOGNITION &amp; SUCCESS
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
    <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center">
      <Pattern3 size={56} className="absolute left-[-4px] opacity-90" />
      <div
        className="relative z-10 rounded-full px-5 py-1.5"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 360,
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

export default function RecognitionSuccess({
  pageNumber = "15",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="recognition-success" pageNumber={pageNumber}>
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
          className="mt-3 grid grid-cols-[1.05fr_0.95fr] items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.45)",
          }}
        >
          <div className="flex items-start gap-2.5">
            <IconCircle size={44}>
              <Trophy size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
            <p
              className="text-[12.5px] leading-[1.5] font-nunito-sans"
              style={{ color: COLORS.body }}
            >
              <span className="font-bold">Apollo/Sun area</span> में moderate development दिखाई
              देता है। Traditional palmistry में Sun influence को{" "}
              <span className="font-bold">recognition, creativity</span> और{" "}
              <span className="font-bold">appreciation</span> से जोड़ा जाता है।
            </p>
          </div>

          <div
            className="relative h-[168px] overflow-hidden rounded-[14px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Apollo Sun area"
              fill
              sizes="280px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.08) translateY(6px)" }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 280 168"
              aria-hidden
            >
              <ellipse
                cx="168"
                cy="48"
                rx="18"
                ry="14"
                fill="rgba(217,119,6,0.35)"
                stroke={COLORS.orange}
                strokeWidth="1.6"
              />
              <path
                d="M186 48 C210 42, 230 38, 248 36"
                fill="none"
                stroke={COLORS.gold}
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            </svg>
            <div className="absolute right-2 top-2 flex flex-col items-center">
              <IconCircle size={28}>
                <Sun size={13} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p
                className="mt-1 max-w-[88px] text-center text-[8.5px] font-bold leading-tight tracking-[0.04em]"
                style={{ color: COLORS.maroon }}
              >
                APOLLO / SUN AREA
              </p>
              <p
                className="mt-0.5 max-w-[88px] text-center text-[8px] leading-tight font-nunito-sans"
                style={{ color: COLORS.slate }}
              >
                Recognition, Creativity, Appreciation
              </p>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <PointedBanner title="WHAT THIS INDICATES FOR YOU" />
          <div
            className="mt-2.5 grid grid-cols-[1.15fr_0.85fr] items-stretch gap-2.5 rounded-[14px] p-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <div className="flex flex-col justify-between gap-2">
              {INDICATIONS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.text}>
                    <div className="flex items-start gap-2.5">
                      <IconCircle size={34}>
                        <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                      </IconCircle>
                      <p
                        className="text-[11.5px] leading-[1.4] font-nunito-sans"
                        style={{ color: COLORS.body }}
                      >
                        {item.text}
                      </p>
                    </div>
                    {index < INDICATIONS.length - 1 && (
                      <div
                        className="my-2 border-t border-dashed"
                        style={{ borderColor: "rgba(184,134,11,0.4)" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2">
              <div
                className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-[12px] px-2 py-2"
                style={{
                  border: "1px solid rgba(184,134,11,0.4)",
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.22) 0%, rgba(255,248,232,0.9) 75%)",
                }}
              >
                <Trophy size={22} style={{ color: COLORS.gold }} />
                <Users size={16} className="mt-1" style={{ color: COLORS.maroon }} />
                <p
                  className="mt-1 text-center text-[9px] font-bold tracking-[0.06em]"
                  style={{ color: COLORS.maroon }}
                >
                  PUBLIC RECOGNITION
                </p>
              </div>
              <div
                className="relative flex flex-1 items-center justify-around overflow-hidden rounded-[12px] px-2 py-2"
                style={{
                  border: "1px solid rgba(184,134,11,0.4)",
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.22) 0%, rgba(255,248,232,0.9) 75%)",
                }}
              >
                <div className="flex flex-col items-center">
                  <Palette size={18} style={{ color: COLORS.gold }} />
                  <Star size={12} className="mt-1" style={{ color: COLORS.maroon }} />
                </div>
                <div className="flex flex-col items-center">
                  <BarChart3 size={18} style={{ color: COLORS.gold }} />
                  <TrendingStar />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <PointedBanner title="HOW YOU CAN MAKE THE MOST OF THIS ENERGY" />
          <div
            className="mt-2.5 grid grid-cols-5 gap-1.5 rounded-[14px] px-2 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {ENERGY_ACTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center px-1 text-center">
                  <IconCircle size={34}>
                    <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="mt-1.5 text-[9.5px] font-bold leading-tight tracking-[0.03em]"
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

        <section
          className="mt-2.5 flex items-center gap-2.5 rounded-[12px] px-3 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.5)",
          }}
        >
          <IconCircle size={36}>
            <Trophy size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
          </IconCircle>
          <blockquote
            className="flex-1 text-center text-[12px] italic leading-relaxed"
            style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
          >
            &ldquo;जब आप अपने काम से लोगों को inspire करते हैं, तब recognition और success
            natural रूप से आपके पास आते हैं।&rdquo;
          </blockquote>
          <div
            className="relative h-[52px] w-[72px] shrink-0 overflow-hidden rounded-[10px]"
            style={{
              border: "1px solid rgba(184,134,11,0.45)",
              background:
                "radial-gradient(circle at 50% 70%, rgba(212,175,55,0.28) 0%, rgba(248,237,216,0.95) 72%)",
            }}
          >
            <Image
              src={ASSETS.sunrise}
              alt=""
              fill
              sizes="72px"
              className="object-contain mix-blend-screen p-1"
            />
            <Mountain
              size={13}
              className="absolute bottom-1.5 left-1.5"
              style={{ color: COLORS.maroon }}
            />
            <Flag
              size={11}
              className="absolute bottom-1.5 right-1.5"
              style={{ color: COLORS.gold }}
            />
          </div>
        </section>

        <footer className="mt-auto flex flex-col items-center pt-1.5">
          <OrnamentDivider width={180} />
          <div className="mt-1 flex items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="text-[11px] font-bold tracking-[0.08em]"
              style={{ color: COLORS.gold }}
            >
              RECOGNITION FOLLOWS VALUE
            </p>
            <CoverLotus size={22} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}

function TrendingStar() {
  return (
    <div className="mt-1 flex items-center gap-0.5">
      <Star size={10} fill={COLORS.goldLight} stroke={COLORS.gold} />
    </div>
  );
}
