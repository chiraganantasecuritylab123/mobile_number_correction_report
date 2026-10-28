"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Calculator, Rocket, Users } from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell, { REPORT_COLORS } from "../ReportPageShell";
import { CornerFlourish } from "../CoverPageDecorations";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const DISPLAY_FONT = `${libre.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#b8860b",
  goldLight: "#d4af37",
  brown: REPORT_COLORS.brown,
  slate: "#4a4540",
  body: "#3c2a21",
  value: "#1c2430",
} as const;

const ASSETS = {
  pattern2: "/assets/cover/pattern-2.png",
  yearOne: "/assets/yearly-forecast-report/OIG4-removebg-preview.png",
  globe: "/assets/yearly-forecast-report/OIG3.VuEKIqKZp3h4x4R-removebg-preview.png",
} as const;

export type NumerologyOfYearProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

const COPY = {
  en: {
    title: (year: string | number) => `4. Numerology of Your ${year}`,
    yearLead: "Your",
    yearAccent: "Personal Year is 1",
    yearRest: ", the start of a fresh 9-year cycle. What you begin in",
    yearClose: "shapes your life until 2035.",
    calcLabel: "How it is calculated:",
    calcBody:
      "birth day 18 (1+8 = 9) + birth month 8 + year 2027 (2+0+2+7 = 11 → 2) = 19 → 1+9 = 10 → 1",
    meansTitleBefore: "What Personal Year ",
    meansTitleAfter: " means for you",
    items: [
      {
        key: "start",
        icon: "rocket" as const,
        title: "Start, don't wait.",
        body: "New projects, brands and roles started this year have staying power.",
        italic: "",
      },
      {
        key: "lead",
        icon: "people" as const,
        title: "Lead from the front.",
        body: "People will follow your direction more easily than in past years.",
        italic: "",
      },
      {
        key: "mulank",
        icon: "9" as const,
        title: "Your Mulank 9 + Personal Year 1:",
        body: "9 is the number of completion and 1 is the number of beginning. Old work you finished in 2026 now becomes the base for something new.",
        italic: "",
      },
      {
        key: "bhagyank",
        icon: "4" as const,
        title: "Your Bhagyank 4:",
        body: "4 asks for systems and structure. Build processes, not just ideas.",
        italic: "",
      },
      {
        key: "name",
        icon: "3" as const,
        title: "Your Name number 3:",
        body: "3 (Jupiter) is friendly to both 9 and 1, so your name supports this year's energy.",
        italic: "A full first-name and spelling check is part of the Name Correction report.",
      },
    ],
    worldTitle: (year: string | number) => `The world's number in ${year}`,
    worldLead: "2027 is a",
    worldAccent: "Universal Year 11/2",
    worldRest:
      ", a master number year. Globally it favours partnerships, intuition and collaboration. For you, it means your bold Personal Year 1 works best when paired with the right partner or team.",
  },
  hi: {
    title: (year: string | number) => `4. आपके ${year} का अंकशास्त्र`,
    yearLead: "आपका",
    yearAccent: "व्यक्तिगत वर्ष 1 है",
    yearRest: ", एक नए 9-वर्षीय चक्र का आरंभ।",
    yearClose: "में जो आप शुरू करते हैं, वह आपके जीवन को 2035 तक आकार देता है।",
    calcLabel: "गणना कैसे हुई:",
    calcBody:
      "जन्म दिन 18 (1+8 = 9) + जन्म महीना 8 + वर्ष 2027 (2+0+2+7 = 11 → 2) = 19 → 1+9 = 10 → 1",
    meansTitleBefore: "व्यक्तिगत वर्ष ",
    meansTitleAfter: " आपके लिए क्या मतलब रखता है",
    items: [
      {
        key: "start",
        icon: "rocket" as const,
        title: "प्रतीक्षा न करें, शुरू करें।",
        body: "इस वर्ष शुरू किए गए नए प्रोजेक्ट, ब्रांड और भूमिकाओं में टिकने की शक्ति होती है।",
        italic: "",
      },
      {
        key: "lead",
        icon: "people" as const,
        title: "आगे बढ़कर नेतृत्व करें।",
        body: "लोग पिछले वर्षों की तुलना में आपकी दिशा अधिक आसानी से अपनाएँगे।",
        italic: "",
      },
      {
        key: "mulank",
        icon: "9" as const,
        title: "आपका मूलांक 9 + व्यक्तिगत वर्ष 1:",
        body: "9 पूर्णता का अंक है और 1 आरंभ का अंक है। 2026 में जो पुराना काम आपने पूरा किया, वह अब नए कार्य की नींव बनता है।",
        italic: "",
      },
      {
        key: "bhagyank",
        icon: "4" as const,
        title: "आपका भाग्यांक 4:",
        body: "4 व्यवस्था और संरचना माँगता है। केवल विचार नहीं, प्रक्रियाएँ बनाएँ।",
        italic: "",
      },
      {
        key: "name",
        icon: "3" as const,
        title: "आपका नाम अंक 3:",
        body: "3 (गुरु) 9 और 1 दोनों के अनुकूल है, इसलिए आपका नाम इस वर्ष की ऊर्जा का समर्थन करता है।",
        italic: "पूरा प्रथम नाम और वर्तनी जाँच नाम सुधार रिपोर्ट का हिस्सा है।",
      },
    ],
    worldTitle: (year: string | number) => `${year} में विश्व का अंक`,
    worldLead: "2027 एक",
    worldAccent: "सार्वभौमिक वर्ष 11/2",
    worldRest:
      " है, एक मास्टर अंक वर्ष। विश्व स्तर पर यह साझेदारी, अंतर्ज्ञान और सहयोग का पक्षधर है। आपके लिए इसका अर्थ है कि आपका साहसिक व्यक्तिगत वर्ष 1 सही साथी या टीम के साथ सबसे अच्छा काम करता है।",
  },
} as const;

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon }}>
      {children}
    </span>
  );
}

function OrnamentDivider({ width = 160 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      style={{ width }}
      aria-hidden
    />
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[6px] ${className}`}
      style={{
        border: "1.6px solid rgba(184,134,11,0.72)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.28)",
        background: "rgba(253, 245, 230, 0.36)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[56px] w-[56px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[56px] w-[56px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[56px] w-[56px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[56px] w-[56px] rotate-180" />
      {children}
    </div>
  );
}

function SectionTitle({ children, isHi }: { children: ReactNode; isHi: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <OrnamentDivider width={48} />
      <h3
        className={`whitespace-nowrap text-center font-bold leading-none ${isHi ? "text-[22px]" : "text-[30px]"}`}
        style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
      >
        {children}
      </h3>
      <OrnamentDivider width={48} />
    </div>
  );
}

function RowDivider() {
  return (
    <div
      className="mx-auto h-px w-full max-w-[620px]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(184,134,11,0.4) 18%, rgba(184,134,11,0.4) 82%, transparent 100%)",
      }}
    />
  );
}

function NumberBadge({ num }: { num: string }) {
  return (
    <div
      className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full"
      style={{
        border: `2px solid ${COLORS.gold}`,
        background:
          "radial-gradient(circle at 35% 30%, rgba(255,248,230,0.95) 0%, rgba(232,199,106,0.35) 55%, rgba(184,134,11,0.18) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.35), 0 1px 2px rgba(92,24,24,0.08)",
      }}
    >
      <span
        className="text-[18px] font-bold leading-none tracking-tight"
        style={{ color: COLORS.maroon }}
      >
        {num}
      </span>
    </div>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full"
      style={{
        border: `2px solid ${COLORS.gold}`,
        background:
          "radial-gradient(circle at 35% 30%, rgba(255,248,230,0.95) 0%, rgba(232,199,106,0.28) 55%, rgba(184,134,11,0.14) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)",
      }}
    >
      {children}
    </div>
  );
}

function ItemIcon({ name }: { name: "rocket" | "people" | "9" | "4" | "3" }) {
  const props = { size: 20, strokeWidth: 1.85, color: COLORS.gold } as const;
  if (name === "rocket") {
    return (
      <IconBadge>
        <Rocket {...props} />
      </IconBadge>
    );
  }
  if (name === "people") {
    return (
      <IconBadge>
        <Users {...props} />
      </IconBadge>
    );
  }
  return <NumberBadge num={name} />;
}

export default function NumerologyOfYear({
  language = "en",
  pageNumber = "07",
  forecastYear = 2027,
}: NumerologyOfYearProps) {
  const t = COPY[language];
  const isHi = language === "hi";

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-numerology"
      padding="26px 36px 22px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Page title */}
        <header className="relative shrink-0">
          <div className="mb-1.5 flex justify-center">
            <OrnamentDivider width={130} />
          </div>
          <OrnateBox className="px-6 py-3.5">
            <h2
              className={`text-center font-bold leading-[1.15] ${isHi ? "text-[26px]" : "text-[34px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {isHi ? (
                t.title(forecastYear)
              ) : (
                <>
                  4. Numerology
                  <br />
                  of Your {forecastYear}
                </>
              )}
            </h2>
          </OrnateBox>
        </header>

        {/* Personal Year intro */}
        <OrnateBox className="mt-3 flex shrink-0 items-center gap-4 px-4 py-3.5">
          <Image
            src={ASSETS.yearOne}
            alt="Personal Year 1"
            width={168}
            height={140}
            className="h-[128px] w-[152px] shrink-0 object-contain"
            priority
          />
          <p
            className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[15px] leading-[1.5]" : "text-[16px] leading-[1.5]"}`}
            style={{ color: COLORS.value }}
          >
            {t.yearLead} <Accent>{t.yearAccent}</Accent>
            {t.yearRest} {forecastYear} {t.yearClose}
          </p>
        </OrnateBox>

        {/* Calculation */}
        <div
          className="mt-2.5 flex shrink-0 items-start gap-3 rounded-[6px] px-4 py-3"
          style={{
            border: "1.4px solid rgba(184,134,11,0.65)",
            background: "rgba(232, 210, 160, 0.28)",
            boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.2)",
          }}
        >
          <Calculator
            size={24}
            strokeWidth={1.85}
            color={COLORS.gold}
            className="mt-0.5 shrink-0"
          />
          <p
            className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[13.5px] leading-[1.45]" : "text-[14px] leading-[1.45]"}`}
          >
            <Accent>{t.calcLabel}</Accent>{" "}
            <span style={{ color: COLORS.value }}>{t.calcBody}</span>
          </p>
        </div>

        {/* What Personal Year means */}
        <OrnateBox className="mt-2.5 flex min-h-0 flex-1 flex-col px-4 py-3.5">
          <SectionTitle isHi={isHi}>
            {t.meansTitleBefore}1{t.meansTitleAfter}
          </SectionTitle>

          <div className="mt-2 flex min-h-0 flex-1 flex-col justify-evenly">
            {t.items.map((item, index) => (
              <div key={item.key}>
                {index > 0 ? <RowDivider /> : null}
                <div className="flex items-center gap-3.5 py-2">
                  <ItemIcon name={item.icon} />
                  <p
                    className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[13.5px] leading-[1.45]" : "text-[14px] leading-[1.45]"}`}
                    style={{ color: COLORS.value }}
                  >
                    <Accent>{item.title}</Accent> {item.body}
                    {item.italic ? (
                      <>
                        {" "}
                        <span className="italic">{item.italic}</span>
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </OrnateBox>

        {/* Universal Year / world number */}
        <div className="relative mt-6 shrink-0">
          <div className="absolute left-1/2 top-0 z-20 w-[78%] -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-[5px] px-4 py-1.5 text-center"
              style={{
                background: "linear-gradient(180deg, #fff8ea 0%, #f3e2b8 100%)",
                border: "1.4px solid rgba(184,134,11,0.75)",
                boxShadow: "0 1px 2px rgba(92,24,24,0.06)",
              }}
            >
              <p
                className={`font-bold leading-none ${isHi ? "text-[18px]" : "text-[22px]"}`}
                style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
              >
                {t.worldTitle(forecastYear)}
              </p>
            </div>
          </div>
          <OrnateBox className="flex items-center gap-4 pt-2 mb-8">
            <Image
              src={ASSETS.globe}
              alt=""
              width={168}
              height={168}
              className="h-[132px] w-[132px] shrink-0 object-contain"
            />
            <p
              className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[13.5px] leading-[1.45]" : "text-[14px] leading-[1.45]"}`}
              style={{ color: COLORS.value }}
            >
              {t.worldLead} <Accent>{t.worldAccent}</Accent>
              {t.worldRest}
            </p>
          </OrnateBox>
        </div>
      </div>
    </ReportPageShell>
  );
}
