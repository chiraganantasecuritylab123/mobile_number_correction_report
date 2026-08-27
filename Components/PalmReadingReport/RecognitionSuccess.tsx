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
  body: "#2c1810",
  orange: "#d97706",
} as const;

const ASSETS = {
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  palm: "/assets/palm-reading-report/recognition-success/palm-apollo-clear.png",
  podiumArt: "/assets/palm-reading-report/recognition-success/art-podium-clear.png",
  brandingArt: "/assets/palm-reading-report/recognition-success/art-branding-clear.png",
  mountainArt: "/assets/palm-reading-report/recognition-success/ref-mountain-clear.png",
  icons: {
    sun: "/assets/palm-reading-report/recognition-success/ref-sun-clear.png",
    trophy: "/assets/palm-reading-report/recognition-success/ref-trophy-clear.png",
    personStar: "/assets/palm-reading-report/recognition-success/ref-person-star-clear.png",
    lightbulb: "/assets/palm-reading-report/recognition-success/ref-lightbulb-clear.png",
    lightbulbGold: "/assets/palm-reading-report/recognition-success/icon-lightbulb-clear.png",
    palette: "/assets/palm-reading-report/recognition-success/ref-palette-clear.png",
    thumbs: "/assets/palm-reading-report/recognition-success/icon-thumbs-clear.png",
    star: "/assets/palm-reading-report/recognition-success/icon-star-clear.png",
    target: "/assets/palm-reading-report/recognition-success/icon-target-clear.png",
    megaphone: "/assets/palm-reading-report/recognition-success/ref-megaphone-clear.png",
    people: "/assets/palm-reading-report/recognition-success/ref-people-clear.png",
    medal: "/assets/palm-reading-report/recognition-success/ref-medal-clear.png",
    sprout: "/assets/palm-reading-report/recognition-success/ref-sprout-clear.png",
    communication: "/assets/palm-reading-report/recognition-success/icon-communication-clear.png",
    management: "/assets/palm-reading-report/recognition-success/icon-management-clear.png",
    trophyGold: "/assets/palm-reading-report/recognition-success/icon-trophy-clear.png",
    growth: "/assets/palm-reading-report/recognition-success/icon-growth-clear.png",
  },
} as const;

type IndicationKey = "recognition" | "motivation" | "creative";

const INDICATIONS: { text: string; key: IndicationKey }[] = [
  {
    text: "आपके लिए recognition और appreciation सिर्फ money से कम महत्वपूर्ण नहीं है — काम की पहचान भी मायने रखती है।",
    key: "recognition",
  },
  {
    text: "जब आपके efforts को acknowledge किया जाता है, तो आपकी motivation और energy दोनों बढ़ते हैं।",
    key: "motivation",
  },
  {
    text: "Creative work, public-facing roles या personal branding वाली दिशाएँ आपके Sun influence को support कर सकती हैं।",
    key: "creative",
  },
];

const ENERGY_ACTIONS = [
  {
    title: "FOCUS ON QUALITY",
    text: "काम की quality पर पूरा ध्यान दें।",
    iconSrc: ASSETS.icons.target,
  },
  {
    title: "BUILD VISIBILITY",
    text: "अपने काम को सही जगह दिखाएँ।",
    iconSrc: ASSETS.icons.megaphone,
  },
  {
    title: "CREATE VALUE",
    text: "दूसरों के लिए genuine value बनाएँ।",
    iconSrc: ASSETS.icons.people,
  },
  {
    title: "BE CONSISTENT",
    text: "Consistency से recognition बढ़ती है।",
    iconSrc: ASSETS.icons.star,
  },
  {
    title: "NURTURE YOUR TALENT",
    text: "अपनी talent को लगातार विकसित करें।",
    iconSrc: ASSETS.icons.growth,
  },
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

/** Cream disc + gold ring so icons stay sharp on parchment. */
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
        boxShadow: "0 0 0 1.5px rgba(169,101,5,0.55), inset 0 1px 0 rgba(255,255,255,0.65)",
      }}
    >
      {children}
    </div>
  );
}

/** Crisp bronze glyphs for the indications list (full shape, no crop). */
function IndicationSvg({ name, size = 28 }: { name: IndicationKey; size?: number }) {
  const c = HEADER.gold;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  if (name === "recognition") {
    return (
      <svg {...common}>
        <circle cx="18" cy="14" r="7" stroke={c} strokeWidth="2.4" />
        <path
          d="M7 38c1.5-8 6-12 11-12s9.5 4 11 12"
          stroke={c}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M33 12l1.6 3.4 3.7.4-2.8 2.5.8 3.6L33 20.2 29.7 22l.8-3.6-2.8-2.5 3.7-.4L33 12z"
          fill={c}
        />
      </svg>
    );
  }

  if (name === "motivation") {
    return (
      <svg {...common}>
        <path
          d="M24 6c-6.2 0-11 4.8-11 10.8 0 4.2 2.3 7.8 5.7 9.7V32h10.6v-5.5c3.4-1.9 5.7-5.5 5.7-9.7C35 10.8 30.2 6 24 6z"
          stroke={c}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M20 35h8M21 39h6" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M24 14v6M20.5 17.5h7" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // creative — palette + brush
  return (
    <svg {...common}>
      <path
        d="M24 8c-8.8 0-16 6.3-16 14.2 0 5.2 3.2 9.7 8 12.1 1.2.6 2.5-.4 2.3-1.7-.2-1.4.8-2.6 2.2-2.6H28c6.6 0 12-5.4 12-12C40 13.4 32.8 8 24 8z"
        stroke={c}
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18" r="2" fill={c} />
      <circle cx="22" cy="15" r="2" fill={c} />
      <circle cx="29" cy="16" r="2" fill={c} />
      <circle cx="32" cy="22" r="2" fill={c} />
      <path
        d="M30 30l8 10"
        stroke={c}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M36 36l4 2-2 3-3-1 1-4z" fill={c} />
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
      title="14. RECOGNITION & SUCCESS"
      iconSrc={ASSETS.icons.sun}
      minWidth={400}
    />
  );
}

function PointedBanner({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <div
        className="px-7 py-1.5 text-center"
        style={{
          background: `linear-gradient(180deg, ${HEADER.maroon} 0%, ${HEADER.maroonDeep} 100%)`,
          clipPath:
            "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
          minWidth: 420,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
      </div>
    </div>
  );
}

export default function RecognitionSuccess({
  pageNumber = "15",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="recognition-success"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-2.5 grid shrink-0 grid-cols-[1.05fr_0.95fr] items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: "rgba(248,232,204,0.55)",
            border: `1px solid rgba(169,101,5,0.45)`,
          }}
        >
          <div className="flex items-start gap-2.5">
            <PngIcon src={ASSETS.icons.trophy} size={52} alt="Success" />
            <p
              className="min-w-0 text-[13px] leading-[1.45] font-nunito-sans"
              style={{ color: HEADER.body }}
            >
              <span className="font-bold">Apollo/Sun area</span> में moderate development दिखाई
              देता है। Traditional palmistry में Sun influence को{" "}
              <span className="font-bold">recognition, creativity</span> और{" "}
              <span className="font-bold">appreciation</span> से जोड़ा जाता है।
            </p>
          </div>

          <div className="relative flex h-[168px] items-center gap-1 overflow-hidden">
            <div className="relative h-full min-w-0 flex-1">
              <Image
                src={ASSETS.palm}
                alt="Apollo Sun area"
                fill
                sizes="220px"
                className="object-contain object-center"
                unoptimized
              />
            </div>
            <div className="flex w-[108px] shrink-0 flex-col items-center">
              <PngIcon src={ASSETS.icons.sun} size={48} />
              <p
                className="mt-1 text-center text-[9px] font-bold leading-tight tracking-[0.04em]"
                style={{ color: HEADER.maroon }}
              >
                APOLLO / SUN AREA
              </p>
              <p
                className="mt-0.5 text-center text-[8.5px] leading-tight font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                Recognition, Creativity, Appreciation
              </p>
            </div>
          </div>
        </section>

        <section className="relative mt-3 min-h-0 flex-1 pt-3">
          <div className="mt-3 pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="WHAT THIS INDICATES FOR YOU" />
          </div>
          <div
            className="grid h-full min-h-0 grid-cols-[1.15fr_0.85fr] items-stretch gap-2.5 rounded-[14px] px-2.5 pb-2.5 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <div className="flex min-h-0 flex-col justify-evenly gap-2">
              {INDICATIONS.map((item, index) => (
                <div key={item.text}>
                  <div className="flex items-center gap-3">
                    <IconBadge size={50}>
                      <IndicationSvg name={item.key} size={28} />
                    </IconBadge>
                    <p
                      className="min-w-0 text-[12.5px] leading-[1.4] font-nunito-sans"
                      style={{ color: HEADER.body }}
                    >
                      {item.text}
                    </p>
                  </div>
                  {index < INDICATIONS.length - 1 ? (
                    <div
                      className="my-2 ml-[62px] border-t border-dashed"
                      style={{ borderColor: "rgba(169,101,5,0.4)" }}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="flex min-h-0 flex-col gap-2">
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
                <Image
                  src={ASSETS.podiumArt}
                  alt="Public recognition"
                  fill
                  sizes="220px"
                  className="object-contain object-center"
                  unoptimized
                />
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
                <Image
                  src={ASSETS.brandingArt}
                  alt="Personal branding"
                  fill
                  sizes="220px"
                  className="object-contain object-center"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="HOW YOU CAN MAKE THE MOST OF THIS ENERGY" />
          </div>
          <div
            className="grid grid-cols-5 gap-0 rounded-[14px] px-1.5 pb-2.5 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {ENERGY_ACTIONS.map((item, index) => (
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
                  <PngIcon src={item.iconSrc} size={40} />
                </IconBadge>
                <p
                  className="mt-1.5 text-[10.5px] font-bold leading-tight tracking-[0.03em]"
                  style={{ color: HEADER.maroon }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-1 text-[11px] leading-[1.3] font-nunito-sans"
                  style={{ color: HEADER.body }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <IntroFrame className="mt-2.5" minHeight={68}>
          <PngIcon src={ASSETS.icons.trophy} size={40} />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.maroon }}
          >
            “जब आप अपने काम से लोगों को inspire करते हैं, तब recognition और success natural रूप
            से आपके पास आते हैं।”
          </p>
          <div className="relative h-[52px] w-[88px] shrink-0">
            <Image
              src={ASSETS.mountainArt}
              alt=""
              fill
              sizes="88px"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </IntroFrame>

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="text-[12px] font-bold tracking-[0.08em]"
              style={{ color: HEADER.gold }}
            >
              RECOGNITION FOLLOWS VALUE
            </p>
            <CoverLotus size={22} />
          </div>
          <div className="mt-1.5 flex w-full items-center justify-end gap-2 pr-1">
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
