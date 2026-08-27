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
} as const;

const ASSETS = {
  introFrame: "/assets/palm-reading-report/marriage/intro-frame-clear.png",
  palm: "/assets/palm-reading-report/family-social/palm-clear.png",
  familyArt: "/assets/palm-reading-report/family-social/art-family-clear.png",
  icons: {
    familyBadge: "/assets/palm-reading-report/family-social/icon-group-clear.png",
    shield: "/assets/palm-reading-report/family-social/icon-shield-clear.png",
    group: "/assets/palm-reading-report/family-social/icon-group-clear.png",
    handshake: "/assets/palm-reading-report/family-social/ref-handshake-clear.png",
    lightbulb: "/assets/palm-reading-report/family-social/icon-thinking-clear.png",
    listening: "/assets/palm-reading-report/family-social/icon-listening-clear.png",
    heartHand: "/assets/palm-reading-report/family-social/icon-heart-hand-clear.png",
    scale: "/assets/palm-reading-report/family-social/icon-scale-clear.png",
    heart: "/assets/palm-reading-report/family-social/icon-heart-clear.png",
    speech: "/assets/palm-reading-report/family-social/icon-speech-clear.png",
    quoteHands: "/assets/palm-reading-report/family-social/ref-quote-hands-clear.png",
  },
} as const;

const LEFT_POINTS = [
  {
    text: "आप family responsibilities को seriously लेने की tendency रखते हैं।",
    iconSrc: ASSETS.icons.shield,
  },
  {
    text: "आप अपने close circle को छोटा रखना पसंद कर सकते हैं।",
    iconSrc: ASSETS.icons.group,
  },
  {
    text: "आप हर व्यक्ति से deeply connect करने के बजाय कुछ selected लोगों के साथ strong relationships maintain करने की tendency रखते हैं।",
    iconSrc: ASSETS.icons.handshake,
  },
] as const;

const RELATIONSHIP_PATTERN = [
  {
    title: "FAMILY FOCUS",
    text: "आप परिवार को महत्व देते हैं और उनके लिए बेहतर करने की कोशिश करते हैं।",
    iconSrc: ASSETS.icons.group,
  },
  {
    title: "PROTECTIVE NATURE",
    text: "आप अपने loved ones की protection और security को लेकर conscious रह सकते हैं।",
    iconSrc: ASSETS.icons.shield,
  },
  {
    title: "PRACTICAL APPROACH",
    text: "Emotions से ज्यादा आप situations को practical और logical तरीके से handle करते हैं।",
    iconSrc: ASSETS.icons.scale,
  },
  {
    title: "LOYAL & DEPENDABLE",
    text: "आप trust, loyalty और commitment को बहुत महत्व देते हैं और निभाते हैं।",
    iconSrc: ASSETS.icons.heartHand,
  },
  {
    title: "SELECTIVE BONDING",
    text: "आप quality connections को prefer करते हैं, quantity को नहीं।",
    iconSrc: ASSETS.icons.speech,
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
      title="16. FAMILY & SOCIAL RELATIONSHIPS"
      iconSrc={ASSETS.icons.familyBadge}
      minWidth={440}
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
          minWidth: 360,
        }}
      >
        <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">{title}</p>
      </div>
    </div>
  );
}

export default function FamilySocialRelationships({
  pageNumber = "17",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingReportPageShell
      padding="12px 32px 18px"
      pageNumber={pageNumber}
      pageLabel="family-social-relationships"
    >
      <div className="relative flex h-full min-h-0 flex-col font-cinzel">
        <PalmReadingPageHeader />

        <SectionBar />

        <section
          className="mt-2.5 grid min-h-0 flex-[1.05] grid-cols-[1.05fr_0.9fr_1.05fr] items-stretch gap-3 rounded-[14px] px-3 py-3"
          style={{
            background: "rgba(248,232,204,0.45)",
            border: `1px solid rgba(169,101,5,0.4)`,
          }}
        >
          <div className="flex min-h-0 flex-col justify-evenly gap-3 py-1">
            {LEFT_POINTS.map((item) => (
              <div key={item.text} className="flex items-start gap-2.5">
                <PngIcon src={item.iconSrc} size={44} />
                <p
                  className="min-w-0 text-[13.5px] leading-[1.45] font-nunito-sans"
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
              alt="Family relationships palm"
              fill
              sizes="240px"
              className="object-contain object-center"
              unoptimized
            />
          </div>

          <div className="flex min-h-0 flex-col justify-between gap-3 py-1">
            <div className="flex items-start gap-2.5">
              <PngIcon src={ASSETS.icons.lightbulb} size={44} />
              <p
                className="min-w-0 text-[13.5px] leading-[1.45] font-nunito-sans"
                style={{ color: HEADER.body }}
              >
                जब family में कोई problem आती है, तो आप practical solution देने की कोशिश कर सकते
                हैं, भले ही emotional expression कम हो।
              </p>
            </div>

            <div className="relative mx-auto h-[132px] w-full max-w-[200px]">
              <Image
                src={ASSETS.familyArt}
                alt="Family bond"
                fill
                sizes="200px"
                className="object-contain object-center"
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="mt-3 pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="IMPORTANT LESSON FOR YOU" />
          </div>
          <div
            className="flex items-center gap-3 rounded-[14px] px-3 pb-2.5 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            <PngIcon src={ASSETS.icons.listening} size={52} />
            <div className="min-w-0 flex-1 text-center font-nunito-sans">
              <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
                हर समस्या को solve करना आपकी responsibility नहीं है।
              </p>
              <div className="my-1.5 flex items-center justify-center gap-2">
                <div
                  className="h-px w-14"
                  style={{ background: "rgba(169,101,5,0.45)" }}
                />
                <CoverLotus size={16} />
                <div
                  className="h-px w-14"
                  style={{ background: "rgba(169,101,5,0.45)" }}
                />
              </div>
              <p className="text-[13px] leading-[1.45]" style={{ color: HEADER.body }}>
                कभी-कभी केवल <span className="font-bold">emotional support</span> देना भी पर्याप्त
                होता है।
              </p>
            </div>
            <PngIcon src={ASSETS.icons.heartHand} size={52} />
          </div>
        </section>

        <section className="relative mt-3 shrink-0 pt-3">
          <div className="mt-3 pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <PointedBanner title="YOUR RELATIONSHIP PATTERN" />
          </div>
          <div
            className="grid grid-cols-5 gap-0 rounded-[14px] px-1.5 pb-2.5 pt-5"
            style={{
              background: "rgba(248,232,204,0.45)",
              border: `1px solid rgba(169,101,5,0.4)`,
            }}
          >
            {RELATIONSHIP_PATTERN.map((item, index) => (
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
                <div
                  className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(180deg, #f3e2b8 0%, #e4c77a 100%)",
                    boxShadow: "0 0 0 1.5px rgba(169,101,5,0.35)",
                  }}
                >
                  <PngIcon src={item.iconSrc} size={36} />
                </div>
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

        <IntroFrame className="mt-2.5" minHeight={64}>
          <PngIcon src={ASSETS.icons.quoteHands} size={40} />
          <p
            className="min-w-0 flex-1 text-center text-[12.5px] leading-[1.4] font-nunito-sans"
            style={{ color: HEADER.maroon }}
          >
            “रिश्ते हमेशा समस्याओं से नहीं, समझ और सहयोग से मजबूत होते हैं।”
          </p>
          <CoverLotus size={28} />
        </IntroFrame>

        <footer className="mt-auto flex shrink-0 flex-col items-center pt-2">
          <div className="flex w-full items-center justify-center gap-2">
            <CoverLotus size={22} />
            <p
              className="text-[12px] font-bold tracking-[0.08em]"
              style={{ color: HEADER.gold }}
            >
              UNDERSTANDING BUILDS BONDS
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
