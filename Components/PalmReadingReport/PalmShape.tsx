import Image from "next/image";
import {
  Brain,
  Eye,
  Hand,
  Heart,
  RefreshCw,
  ScanSearch,
  Target,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/hand.png",
  pattern2: "/assets/cover/pattern-2.png",
  lotus: "/assets/cover/lotus.png",
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
      <div
        className="absolute bottom-[16px] right-[36px] z-20 flex items-center gap-1.5 font-cinzel"
      >
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
          minWidth: 430,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <CoverLotus size={22} className="opacity-100" />
        </div>
        <p
          className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.04em] text-[#f6e6c4]"
        >
          <span>2.</span>
          <Hand size={15} strokeWidth={2.1} />
          <span>PALM SHAPE — आपकी मूल प्रकृति</span>
        </p>
      </div>
      <Pattern3 size={78} className="absolute right-[-8px] rotate-180 opacity-90" />
    </div>
  );
}

function TendencyItem({
  icon,
  title,
  value,
  showDivider,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  showDivider?: boolean;
}) {
  return (
    <div
      className="flex flex-1 flex-col items-center px-1.5 py-2 text-center"
      style={{
        borderRight: showDivider ? "1px solid rgba(184,134,11,0.35)" : "none",
      }}
    >
      <div
        className="mb-1.5 flex h-11 w-11 items-center justify-center rounded-full"
        style={{
          border: "1.4px solid rgba(184,134,11,0.7)",
          background: "rgba(255,248,230,0.7)",
        }}
      >
        {icon}
      </div>
      <p
        className="text-[11px] font-bold tracking-[0.04em]"
        style={{ color: COLORS.maroon }}
      >
        {title}
      </p>
      <p
        className="mt-0.5 text-[11px] font-semibold font-nunito-sans"
        style={{ color: COLORS.gold }}
      >
        {value}
      </p>
    </div>
  );
}

export default function PalmShape({ pageNumber = "03" }: { pageNumber?: string }) {
  const iconProps = {
    size: 20,
    strokeWidth: 1.7,
    style: { color: COLORS.maroon },
  };

  return (
    <PalmReadingPageFrame pageLabel="palm-shape" pageNumber={pageNumber}>
      <div
        className="absolute inset-x-0 flex flex-col px-12 font-cinzel"
        style={{ top: 118, bottom: 42 }}
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

        <section className="mt-4 grid grid-cols-[1.08fr_0.92fr] items-center gap-4">
          <div className="flex flex-col gap-3 font-nunito-sans">
            <p
              className="text-[13px] leading-[1.55]"
              style={{ color: COLORS.body }}
            >
              आपकी हथेली का आकार <span className="font-bold">आयताकार (Rectangular)</span> है
              और उँगलियाँ अपेक्षाकृत लंबी हैं। यह संरचना दर्शाती है कि आप outwardly practical
              और grounded दिखते हैं, लेकिन internally एक thoughtful observer हैं।
            </p>

            <div className="flex items-start gap-2.5">
              <div
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                style={{
                  border: "1.3px solid rgba(184,134,11,0.65)",
                  background: COLORS.cream,
                }}
              >
                <Eye size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </div>
              <p
                className="text-[13px] leading-[1.55]"
                style={{ color: COLORS.body }}
              >
                लंबी उँगलियाँ observation और internal evaluation की क्षमता बढ़ाती हैं। आप किसी
                भी स्थिति को जल्दी absorb करते हैं और निर्णय से पहले कई कोणों से सोचते हैं।
              </p>
            </div>
          </div>

          <div
            className="relative h-[250px] overflow-hidden rounded-[18px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background: "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.22) 0%, rgba(248,237,216,0.55) 70%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Palm shape"
              fill
              sizes="320px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.08) translateY(6px)" }}
            />

            <div className="absolute bottom-7 left-3 max-w-[128px] text-left">
              <p
                className="text-[11px] font-bold leading-tight"
                style={{ color: COLORS.maroon }}
              >
                आयताकार हथेली
              </p>
              <p
                className="mt-0.5 text-[10px] font-nunito-sans"
                style={{ color: COLORS.slate }}
              >
                (Rectangular Palm)
              </p>
            </div>

            <div className="absolute right-3 top-6 max-w-[138px] text-right">
              <p
                className="text-[11px] font-bold leading-tight"
                style={{ color: COLORS.maroon }}
              >
                लंबी उँगलियाँ
              </p>
              <p
                className="mt-0.5 text-[10px] font-nunito-sans"
                style={{ color: COLORS.slate }}
              >
                (Thoughtful &amp; Observant)
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="flex justify-center">
            <div
              className="rounded-full px-5 py-1"
              style={{
                background: COLORS.maroon,
                boxShadow: "0 1px 0 rgba(212,175,55,0.35)",
              }}
            >
              <p className="text-[11px] font-bold tracking-[0.08em] text-[#f6e6c4]">
                आपकी NATURAL TENDENCIES
              </p>
            </div>
          </div>

          <div
            className="mt-2.5 flex items-stretch rounded-[14px] px-1 py-1"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <TendencyItem
              icon={<ScanSearch {...iconProps} />}
              title="Observation"
              value="Strong"
              showDivider
            />
            <TendencyItem
              icon={<Brain {...iconProps} />}
              title="Thinking"
              value="Analytical"
              showDivider
            />
            <TendencyItem
              icon={<RefreshCw {...iconProps} />}
              title="Adaptability"
              value="Good"
              showDivider
            />
            <TendencyItem
              icon={<Heart {...iconProps} />}
              title="Emotional Sensitivity"
              value="Moderate to High"
              showDivider
            />
            <TendencyItem
              icon={<User {...iconProps} />}
              title="Independence"
              value="Strong"
            />
          </div>
        </section>

        <section
          className="mt-3.5 flex items-center gap-3 rounded-[14px] px-4 py-3"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.45)",
          }}
        >
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            style={{
              border: "1.4px solid rgba(184,134,11,0.7)",
              background: "#fff8e8",
            }}
          >
            <Brain size={22} strokeWidth={1.6} style={{ color: COLORS.maroon }} />
          </div>
          <p
            className="text-[13px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            यह एक interesting combination है — बाहर से practical और grounded व्यक्तित्व, अंदर
            से deep processing और sensitive analysis। आप सोच-समझकर चलते हैं, इसलिए आपकी
            personality pattern thoughtful leadership की ओर झुकती है।
          </p>
        </section>

        <section className="mt-3.5 flex items-start gap-3 px-1">
          <div className="flex-1">
            <div className="mb-1.5 flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rotate-45"
                style={{ background: COLORS.goldLight }}
              />
              <h2
                className="text-[14px] font-bold tracking-[0.04em]"
                style={{ color: COLORS.maroon }}
              >
                आपके लिए महत्वपूर्ण सीख
              </h2>
            </div>
            <p
              className="text-[13px] leading-[1.55] font-nunito-sans"
              style={{ color: COLORS.body }}
            >
              Decision लेने में Perfect Clarity का इंतज़ार आपको धीमा कर सकता है। Observation
              आपकी ताकत है — लेकिन overthinking को सही समय पर action में बदलना आपकी अगली
              growth है।
            </p>
          </div>
          <div
            className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
            style={{
              border: "1.4px dashed rgba(184,134,11,0.75)",
              background: "#fff8e8",
            }}
          >
            <Target size={26} strokeWidth={1.6} style={{ color: COLORS.gold }} />
          </div>
        </section>

        <footer className="mt-auto flex flex-col items-center pb-1">
          <OrnamentDivider width={220} />
          <blockquote
            className="mt-2 max-w-[520px] text-center text-[14px] italic leading-relaxed"
            style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
          >
            &ldquo;Perfect Clarity का इंतज़ार करने से अच्छा है – Right Time पर सही कदम
            उठाना।&rdquo;
          </blockquote>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
