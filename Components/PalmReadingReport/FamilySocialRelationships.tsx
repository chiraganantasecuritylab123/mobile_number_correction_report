import Image from "next/image";
import {
  Handshake,
  Heart,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  Scale,
  Shield,
  ShieldCheck,
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
} as const;

const LEFT_POINTS = [
  {
    text: "आप family responsibilities को seriously लेने की tendency रखते हैं।",
    icon: Shield,
  },
  {
    text: "आप अपने close circle को छोटा रखना पसंद कर सकते हैं।",
    icon: Users,
  },
  {
    text: "आप हर व्यक्ति से deeply connect करने के बजाय कुछ selected लोगों के साथ strong relationships maintain करने की tendency रखते हैं।",
    icon: Handshake,
  },
] as const;

const RELATIONSHIP_PATTERN = [
  {
    title: "FAMILY FOCUS",
    text: "आप परिवार को महत्व देते हैं और उनके लिए बेहतर करने की कोशिश करते हैं।",
    icon: Users,
  },
  {
    title: "PROTECTIVE NATURE",
    text: "आप अपने loved ones की protection और security को लेकर conscious रह सकते हैं।",
    icon: ShieldCheck,
  },
  {
    title: "PRACTICAL APPROACH",
    text: "Emotions से ज्यादा आप situations को practical और logical तरीके से handle करते हैं।",
    icon: Scale,
  },
  {
    title: "LOYAL & DEPENDABLE",
    text: "आप trust, loyalty और commitment को बहुत महत्व देते हैं और निभाते हैं।",
    icon: HeartHandshake,
  },
  {
    title: "SELECTIVE BONDING",
    text: "आप quality connections को prefer करते हैं, quantity को नहीं।",
    icon: MessageCircle,
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
    <div className="relative mx-auto mt-3 flex w-full max-w-[660px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 460,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Users size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          16. FAMILY &amp; SOCIAL RELATIONSHIPS
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
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
      <Pattern3 size={56} className="absolute left-[-4px] opacity-90" />
      <div
        className="relative z-10 rounded-full px-5 py-1.5"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 320,
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

export default function FamilySocialRelationships({
  pageNumber = "17",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="family-social-relationships" pageNumber={pageNumber}>
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

        <section className="mt-3 grid grid-cols-[1fr_0.95fr_1fr] items-stretch gap-2.5">
          <div className="flex flex-col justify-between gap-3 py-1">
            {LEFT_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-2">
                  <IconCircle size={34}>
                    <Icon size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="text-[11px] leading-[1.4] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="relative overflow-hidden rounded-[16px]"
            style={{
              minHeight: 240,
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Family and relationships palm"
              fill
              sizes="240px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.1) translateY(4px)" }}
            />
          </div>

          <div className="flex flex-col justify-between gap-3 py-1">
            <div className="flex items-start gap-2">
              <IconCircle size={34}>
                <Lightbulb size={15} strokeWidth={1.7} style={{ color: COLORS.gold }} />
              </IconCircle>
              <p
                className="text-[11px] leading-[1.4] font-nunito-sans"
                style={{ color: COLORS.body }}
              >
                जब family में कोई problem आती है, तो आप practical solution देने की कोशिश कर सकते
                हैं, भले ही emotional expression कम हो।
              </p>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded-[14px] px-2 py-3"
              style={{
                background: COLORS.creamBox,
                border: "1px solid rgba(184,134,11,0.4)",
              }}
            >
              <div className="flex items-center gap-2">
                <CoverLotus size={22} />
                <Users size={28} strokeWidth={1.5} style={{ color: COLORS.maroon }} />
                <CoverLotus size={22} />
              </div>
              <p
                className="mt-1.5 text-center text-[10px] font-bold tracking-[0.06em]"
                style={{ color: COLORS.maroon }}
              >
                FAMILY BOND
              </p>
              <div className="mt-1 flex items-center gap-1">
                <Heart size={12} style={{ color: COLORS.gold }} />
                <Heart size={14} fill={COLORS.goldLight} stroke={COLORS.gold} />
                <Heart size={12} style={{ color: COLORS.gold }} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <PointedBanner title="IMPORTANT LESSON FOR YOU" />
          <div
            className="mt-2.5 flex items-center gap-3 rounded-[14px] px-3 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.45)",
            }}
          >
            <IconCircle size={40}>
              <MessagesSquare size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
            <div className="flex-1 text-center font-nunito-sans">
              <p className="text-[12px] leading-[1.45]" style={{ color: COLORS.body }}>
                हर समस्या को solve करना आपकी responsibility नहीं है।
              </p>
              <div className="my-1 flex items-center justify-center gap-2">
                <Star size={9} fill={COLORS.goldLight} stroke={COLORS.gold} />
                <div
                  className="h-px w-16"
                  style={{ background: "rgba(184,134,11,0.45)" }}
                />
                <Star size={9} fill={COLORS.goldLight} stroke={COLORS.gold} />
              </div>
              <p className="text-[12px] leading-[1.45]" style={{ color: COLORS.body }}>
                कभी-कभी केवल <span className="font-bold">emotional support</span> देना भी पर्याप्त
                होता है।
              </p>
            </div>
            <IconCircle size={40}>
              <HeartHandshake size={17} strokeWidth={1.7} style={{ color: COLORS.gold }} />
            </IconCircle>
          </div>
        </section>

        <section className="mt-3">
          <PointedBanner title="YOUR RELATIONSHIP PATTERN" />
          <div
            className="mt-2.5 grid grid-cols-5 gap-1.5 rounded-[14px] px-2 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {RELATIONSHIP_PATTERN.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-1 text-center"
                  style={{
                    borderRight:
                      index < RELATIONSHIP_PATTERN.length - 1
                        ? "1px dashed rgba(184,134,11,0.35)"
                        : "none",
                  }}
                >
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

        <footer className="mt-auto flex flex-col items-center pt-2">
          <OrnamentDivider width={200} />
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <IconCircle size={30}>
              <HeartHandshake size={14} strokeWidth={1.8} style={{ color: COLORS.gold }} />
            </IconCircle>
            <blockquote
              className="max-w-[480px] text-center text-[12px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;रिश्ते हमेशा समस्याओं से नहीं, समझ और सहयोग से मजबूत होते हैं।&rdquo;
            </blockquote>
            <CoverLotus size={24} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
