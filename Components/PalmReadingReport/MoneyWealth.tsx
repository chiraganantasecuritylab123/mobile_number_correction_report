import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CircleAlert,
  CircleCheck,
  ClipboardCheck,
  Coins,
  HandCoins,
  IndianRupee,
  Lightbulb,
  PiggyBank,
  Sprout,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/hand.png",
  pattern2: "/assets/cover/pattern-2.png",
  rupeeTree: "/assets/signaturePages/rupeetree.png",
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

const STRENGTHS = [
  "Skill-based earning आपकी सबसे बड़ी financial ताकत है।",
  "Consistency से money steadily accumulate होती है।",
  "Smart decisions long-term security बनाते हैं।",
  "Saved और built wealth आपकी foundation मज़बूत करती है।",
] as const;

const CHALLENGES = [
  "Impulse spending पर control रखना ज़रूरी है।",
  "Overthinking financial action को delay कर सकता है।",
  "Short-term temptation long-term wealth काट सकती है।",
  "Emotional decisions money leak का कारण बन सकते हैं।",
] as const;

const FORMULA = [
  {
    title: "EARN",
    text: "Skills और effort से income बढ़ाना",
    icon: Wallet,
  },
  {
    title: "SAVE",
    text: "Regular saving की आदत बनाना",
    icon: PiggyBank,
  },
  {
    title: "INVEST",
    text: "Long-term और smart investments",
    icon: TrendingUp,
  },
  {
    title: "REVIEW",
    text: "समय-समय पर financial review करना",
    icon: ClipboardCheck,
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
          minWidth: 360,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Coins size={16} strokeWidth={2} style={{ color: COLORS.maroonDeep }} />
        </div>
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#f6e6c4]">
          12. MONEY &amp; WEALTH
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

function CoinChart() {
  return (
    <div
      className="relative flex h-[72px] w-[108px] shrink-0 items-end justify-center gap-1 overflow-hidden rounded-[10px] pb-2"
      style={{
        border: "1px solid rgba(184,134,11,0.45)",
        background:
          "radial-gradient(circle at 50% 80%, rgba(212,175,55,0.28) 0%, rgba(248,237,216,0.95) 72%)",
      }}
    >
      {[18, 28, 38, 48].map((h, i) => (
        <div
          key={h}
          className="flex w-[14px] flex-col items-center justify-end rounded-t-[3px]"
          style={{
            height: h,
            background: `linear-gradient(180deg, ${COLORS.goldLight} 0%, ${COLORS.gold} 100%)`,
            boxShadow: "0 1px 2px rgba(92,24,24,0.18)",
          }}
        >
          {i === 3 && (
            <IndianRupee size={9} strokeWidth={2.4} style={{ color: COLORS.maroonDeep, marginBottom: 2 }} />
          )}
        </div>
      ))}
      <TrendingUp
        size={16}
        className="absolute right-1.5 top-1.5"
        style={{ color: COLORS.maroon }}
      />
    </div>
  );
}

export default function MoneyWealth({
  pageNumber = "13",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="money-wealth" pageNumber={pageNumber}>
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
          className="mt-3 flex items-center gap-3 rounded-[14px] px-3 py-2.5"
          style={{
            background: COLORS.creamBox,
            border: "1px solid rgba(184,134,11,0.45)",
          }}
        >
          <IconCircle size={44}>
            <HandCoins size={18} strokeWidth={1.7} style={{ color: COLORS.gold }} />
          </IconCircle>
          <p
            className="flex-1 text-[12.5px] leading-[1.5] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            आपकी हथेली एक <span className="font-bold">steady-building pattern</span> दिखाती है।
            Financial success sudden luck से नहीं, बल्कि skill, consistency और smart decisions से
            धीरे-धीरे बनती है।
          </p>
          <CoinChart />
        </section>

        <section className="mt-2.5 flex items-center justify-center gap-2 px-2">
          <CoverLotus size={22} />
          <p
            className="max-w-[520px] text-center text-[12px] leading-[1.45] font-nunito-sans"
            style={{ color: COLORS.body }}
          >
            आपके लिए wealth का strongest source:{" "}
            <span className="font-bold font-cinzel tracking-[0.03em]" style={{ color: COLORS.maroon }}>
              SKILL + CONSISTENCY + SMART DECISIONS
            </span>
          </p>
          <CoverLotus size={22} />
        </section>
        <p
          className="mt-1 text-center text-[11px] leading-[1.4] font-nunito-sans"
          style={{ color: COLORS.slate }}
        >
          Accumulated wealth और long-term savings आपकी financial security की नींव बन सकते हैं।
        </p>

        <section className="mt-2.5 grid flex-1 grid-cols-[1fr_0.92fr_1fr] items-stretch gap-2.5">
          <div
            className="flex flex-col rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <ColumnTitle title="FINANCIAL STRENGTH" />
            <div className="mb-2 flex justify-center">
              <IconCircle size={36}>
                <Lightbulb size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
              </IconCircle>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-2">
              {STRENGTHS.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CircleCheck
                    size={15}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.gold }}
                  />
                  <p className="text-[10.5px] leading-[1.35] font-nunito-sans" style={{ color: COLORS.body }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[16px]"
            style={{
              border: "1.4px solid rgba(184,134,11,0.55)",
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
            }}
          >
            <Image
              src={ASSETS.hand}
              alt="Palm wealth reading"
              fill
              sizes="240px"
              className="object-contain mix-blend-screen"
              style={{ transform: "scale(1.12) translateY(4px)" }}
            />
            <div className="absolute bottom-2 left-0 right-0 flex items-end justify-center gap-1">
              <CoverLotus size={28} />
              <div className="mb-0.5 flex flex-col items-center">
                <Coins size={16} style={{ color: COLORS.gold }} />
                <IndianRupee size={11} strokeWidth={2.4} style={{ color: COLORS.maroon }} />
              </div>
              <CoverLotus size={28} />
            </div>
          </div>

          <div
            className="flex flex-col rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            <ColumnTitle title="FINANCIAL CHALLENGE" />
            <div className="mb-2 flex justify-center">
              <IconCircle size={36}>
                <Zap size={16} strokeWidth={1.8} style={{ color: COLORS.maroon }} />
              </IconCircle>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-2">
              {CHALLENGES.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CircleAlert
                    size={15}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.maroon }}
                  />
                  <p className="text-[10.5px] leading-[1.35] font-nunito-sans" style={{ color: COLORS.body }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-2.5">
          <p
            className="mb-2 text-center text-[12px] font-bold tracking-[0.08em]"
            style={{ color: COLORS.maroon }}
          >
            FINANCIAL SUCCESS FORMULA
          </p>
          <div
            className="flex items-stretch gap-1.5 rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {FORMULA.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-1 items-center">
                  <div className="flex flex-1 flex-col items-center px-1 text-center">
                    <IconCircle size={36}>
                      <Icon size={16} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                    </IconCircle>
                    <p
                      className="mt-1.5 text-[11px] font-bold tracking-[0.06em]"
                      style={{ color: COLORS.maroon }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="mt-0.5 text-[10px] leading-[1.3] font-nunito-sans"
                      style={{ color: COLORS.body }}
                    >
                      {step.text}
                    </p>
                  </div>
                  {index < FORMULA.length - 1 && (
                    <ArrowRight size={14} className="shrink-0" style={{ color: COLORS.gold }} />
                  )}
                </div>
              );
            })}
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
            <BookOpen size={15} strokeWidth={1.8} style={{ color: COLORS.gold }} />
          </IconCircle>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.08em]" style={{ color: COLORS.maroon }}>
              FINANCIAL WISDOM
            </p>
            <p className="text-[11.5px] leading-[1.4] font-nunito-sans" style={{ color: COLORS.body }}>
              कमाई तभी संपत्ति बनती है जब बचत, निवेश और सही निर्णय साथ चलें।
            </p>
          </div>
          <div className="relative h-[46px] w-[52px] shrink-0">
            <Image
              src={ASSETS.rupeeTree}
              alt=""
              fill
              sizes="52px"
              className="object-contain mix-blend-screen"
            />
            <Sprout
              size={14}
              className="absolute -right-0.5 -top-0.5"
              style={{ color: COLORS.gold }}
            />
          </div>
        </section>
      </div>
    </PalmReadingPageFrame>
  );
}
