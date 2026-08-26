import Image from "next/image";
import {
  AlertTriangle,
  BookOpen,
  Clock,
  Compass,
  Flag,
  HeartHandshake,
  Lightbulb,
  Mountain,
  Plane,
  Scale,
  Star,
  Target,
  TrendingUp,
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
  compass: "/assets/signatureReport/Compass.png",
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

const INSIGHTS = [
  {
    text: "आपकी हथेली Potential, Practicality और Self-effort का संतुलन दिखाती है।",
    icon: Star,
  },
  {
    text: "आप मेहनती, जिम्मेदार और goal-oriented व्यक्तित्व रखते हैं।",
    icon: Mountain,
  },
  {
    text: "समय के साथ stability, Recognition और Financial Growth संभव है।",
    icon: Lightbulb,
  },
  {
    text: "Travel, Learning और New Experiences — Comfort Zone से बाहर निकलना आपके लिए महत्वपूर्ण है।",
    icon: Plane,
  },
  {
    text: "यह report आपकी Strengths और weaknesses को समझने के लिए है — ताकि सही दिशा में कर्म हो सकें।",
    icon: HeartHandshake,
  },
] as const;

const TAKEAWAYS = [
  { title: "स्पष्ट लक्ष्य बनाएँ", icon: Target },
  { title: "नियमितता और धैर्य रखें", icon: Clock },
  { title: "सीखते रहें, खुद को विकसित करें", icon: BookOpen },
  { title: "भावनात्मक संतुलन बनाए रखें", icon: Scale },
  { title: "स्वास्थ्य और मन का ध्यान रखें", icon: User },
  { title: "दीर्घकालिक सोच, छोटे कदम", icon: TrendingUp },
] as const;

const WARNINGS = [
  "यह report traditional palmistry interpretation पर आधारित है।",
  "यह भविष्य की अचूक भविष्यवाणी नहीं है।",
  "जीवन के परिणाम आपके कर्मों, decisions और परिस्थितियों पर निर्भर करते हैं।",
  "इस reading को guidance के रूप में लें, डर या निश्चितता के रूप में नहीं।",
  "आवश्यक होने पर अपने विवेक और व्यावहारिक सोच से निर्णय लें।",
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
    <div className="relative mx-auto mt-3 flex w-full max-w-[560px] items-center justify-center">
      <Pattern3 size={78} className="absolute left-[-8px] opacity-90" />
      <div
        className="relative z-10 flex items-center gap-2.5 rounded-full px-5 py-1.5 shadow-sm"
        style={{
          background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
          minWidth: 320,
        }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #e8c76a 0%, #c9a227 100%)",
            boxShadow: "0 0 0 2px rgba(255,245,210,0.35)",
          }}
        >
          <Star size={16} strokeWidth={2} fill={COLORS.maroonDeep} style={{ color: COLORS.maroonDeep }} />
        </div>
        <div className="text-center">
          <p className="text-[13px] font-bold leading-none tracking-[0.1em] text-[#f6e6c4]">
            CONCLUSION
          </p>
          <p className="mt-0.5 text-[10px] font-semibold tracking-[0.04em] text-[#f6e6c4]/85">
            समापन संदेश
          </p>
        </div>
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
          minWidth: 280,
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

export default function Conclusion({
  pageNumber = "21",
}: {
  pageNumber?: string;
}) {
  return (
    <PalmReadingPageFrame pageLabel="conclusion" pageNumber={pageNumber}>
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

        <section className="mt-3 grid grid-cols-[1.15fr_0.85fr] items-stretch gap-2.5">
          <div
            className="flex flex-col justify-between gap-2 rounded-[14px] px-2.5 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {INSIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-2">
                  <IconCircle size={32}>
                    <Icon size={14} strokeWidth={1.7} style={{ color: COLORS.gold }} />
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

          <div className="flex flex-col">
            <div
              className="relative flex-1 overflow-hidden rounded-[16px]"
              style={{
                minHeight: 168,
                border: "1.4px solid rgba(184,134,11,0.55)",
                background:
                  "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.2) 0%, rgba(248,237,216,0.55) 72%)",
              }}
            >
              <Image
                src={ASSETS.hand}
                alt="Destiny in your hands"
                fill
                sizes="280px"
                className="object-contain mix-blend-screen"
                style={{ transform: "scale(1.08) translateY(4px)" }}
              />
              <Image
                src={ASSETS.compass}
                alt=""
                width={78}
                height={78}
                className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 object-contain mix-blend-screen opacity-90"
              />
              <Compass
                size={18}
                className="absolute right-3 top-3"
                style={{ color: COLORS.gold }}
              />
            </div>
            <blockquote
              className="mt-2 text-center text-[11px] italic leading-relaxed"
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Nirmala UI', serif" }}
            >
              &ldquo;आपकी किस्मत आपके हाथों में है, लेकिन इसे संवारना आपके कर्मों पर निर्भर है।&rdquo;
            </blockquote>
          </div>
        </section>

        <section className="mt-2.5">
          <PointedBanner title="KEY TAKEAWAY" />
          <div
            className="mt-2 grid grid-cols-6 gap-1 rounded-[14px] px-1.5 py-2"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.4)",
            }}
          >
            {TAKEAWAYS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-1 text-center"
                  style={{
                    borderRight:
                      index < TAKEAWAYS.length - 1
                        ? "1px dashed rgba(184,134,11,0.35)"
                        : "none",
                  }}
                >
                  <IconCircle size={30}>
                    <Icon size={13} strokeWidth={1.7} style={{ color: COLORS.gold }} />
                  </IconCircle>
                  <p
                    className="mt-1 text-[9px] leading-[1.3] font-nunito-sans"
                    style={{ color: COLORS.body }}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-2.5">
          <PointedBanner title="महत्वपूर्ण चेतावनी (WARNING)" />
          <div
            className="mt-2 flex items-start gap-2.5 rounded-[14px] px-3 py-2.5"
            style={{
              background: COLORS.creamBox,
              border: "1px solid rgba(184,134,11,0.45)",
            }}
          >
            <IconCircle size={40}>
              <AlertTriangle size={18} strokeWidth={1.8} style={{ color: COLORS.gold }} />
            </IconCircle>
            <div className="flex-1 space-y-1">
              {WARNINGS.map((text) => (
                <p
                  key={text}
                  className="text-[10.5px] leading-[1.35] font-nunito-sans"
                  style={{ color: COLORS.body }}
                >
                  • {text}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-center pt-1">
              <Flag size={16} style={{ color: COLORS.maroon }} />
              <AlertTriangle size={14} className="mt-1" style={{ color: COLORS.gold }} />
            </div>
          </div>
        </section>

        <p
          className="mt-2.5 text-center text-[11.5px] leading-[1.45] font-nunito-sans"
          style={{ color: COLORS.body }}
        >
          ईश्वर करें कि आपको सदैव सफलता, स्वास्थ्य, समृद्धि और मान-सम्मान प्राप्त हो और आपका जीवन
          सुखमय एवं संतुलित रहे।
        </p>

        <div className="mt-2 flex justify-center">
          <div
            className="rounded-full px-5 py-1.5"
            style={{
              background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
            }}
          >
            <p className="text-center text-[11px] font-bold tracking-[0.04em] text-[#f6e6c4]">
              आपके उज्ज्वल भविष्य की शुभकामनाओं के साथ
            </p>
          </div>
        </div>

        <footer className="mt-auto flex flex-col items-center pt-1.5">
          <div className="flex items-center justify-center gap-2">
            <CoverLotus size={22} />
            <OrnamentDivider width={140} />
            <CoverLotus size={22} />
          </div>
        </footer>
      </div>
    </PalmReadingPageFrame>
  );
}
