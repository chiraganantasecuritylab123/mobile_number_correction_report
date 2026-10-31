"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import {
  BarChart3,
  Briefcase,
  CalendarDays,
  Check,
  FileText,
  Hourglass,
  Users,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell from "../ReportPageShell";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const DISPLAY_FONT = `${libre.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#7E2434",
  banner: "#7A2232",
  gold: "#C6A35A",
  goldDeep: "#A67C32",
  body: "#3A4B82",
  ink: "#2C3A66",
  green: "#2F7D4F",
  red: "#C04545",
} as const;

const REMEDY_ART = "/assets/yearly-forecast-report/career-remedy-offering.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasCareerProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type FocusIcon = "calendar" | "file" | "plan" | "chart" | "hourglass" | "people";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Career and business (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "Personal Year 1 is the year to start something, not to wait. July is Personal Month 8, your month for results. September is Personal Month 1, your strongest month to launch. Your Bhagyank 4 asks you to build systems: clear processes, defined roles and a team structure that works without you watching every step.",
    tableTitle: "Career focus by time period",
    window: "Window",
    focus: "Career focus",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "January–February", focus: "Plan the year, pitch, build visibility" },
      { key: "mar", icon: "file" as const, window: "March–May", focus: "Hire, fix processes, handle competition" },
      { key: "jun", icon: "plan" as const, window: "June", focus: "Plan only; avoid signing from 11 June to 5 July" },
      { key: "jul", icon: "chart" as const, window: "July–September", focus: "Close deals, scale and launch (September is best)" },
      { key: "oct", icon: "hourglass" as const, window: "October", focus: "Let the new dasha settle; avoid hasty decisions" },
      { key: "nov", icon: "people" as const, window: "November–December", focus: "Get visible and build your network for 2028" },
    ],
    employedTitle: "If you are employed",
    employed: ["The best months to change jobs are July and September.", "Ask for a raise or promotion in July."],
    businessTitle: "If you run a business",
    business: ["Expand your team in March.", "Launch new products or brands in September.", "Add new markets after October."],
    doTitle: "Do",
    doItems: [
      "Start the project you have been delaying.",
      "Build systems before you scale.",
      "Accept the responsibility Saturn offers, because it pays back later.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Signing partnerships around the 6 February eclipse and during Mercury retrograde.",
      "Launching anything between 30 July and 5 August.",
      "Shortcuts or bending rules, which Saturn in your 10th house does not forgive.",
    ],
    remedyTitle: "Career remedy",
    remedy: [
      "Offer water to the Sun every morning.",
      "Recite Hanuman Chalisa on Tuesdays until October to honour your Mars period.",
      "Keep the east side of your workspace clean and bright.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "करियर और व्यवसाय (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "व्यक्तिगत वर्ष 1 कुछ नया शुरू करने का वर्ष है, प्रतीक्षा का नहीं। जुलाई व्यक्तिगत माह 8 है, परिणाम का महीना। सितंबर व्यक्तिगत माह 1 है, लॉन्च का सबसे मजबूत महीना। आपका भाग्यांक 4 व्यवस्था माँगता है: स्पष्ट प्रक्रियाएँ, निश्चित भूमिकाएँ और ऐसी टीम जो आपके बिना भी चले।",
    tableTitle: "समय के अनुसार करियर फोकस",
    window: "अवधि",
    focus: "करियर फोकस",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "जनवरी–फरवरी", focus: "वर्ष की योजना, पिच और दृश्यता" },
      { key: "mar", icon: "file" as const, window: "मार्च–मई", focus: "भर्ती, प्रक्रिया सुधार, प्रतिस्पर्धा संभालें" },
      { key: "jun", icon: "plan" as const, window: "जून", focus: "केवल योजना; 11 जून से 5 जुलाई तक हस्ताक्षर न करें" },
      { key: "jul", icon: "chart" as const, window: "जुलाई–सितंबर", focus: "सौदे पूरे करें, विस्तार और लॉन्च (सितंबर सर्वोत्तम)" },
      { key: "oct", icon: "hourglass" as const, window: "अक्टूबर", focus: "नई दशा को जमने दें; जल्दबाज़ी के फैसले न लें" },
      { key: "nov", icon: "people" as const, window: "नवंबर–दिसंबर", focus: "दिखें और 2028 के लिए नेटवर्क बनाएँ" },
    ],
    employedTitle: "यदि आप नौकरी करते हैं",
    employed: ["नौकरी बदलने के सर्वोत्तम महीने जुलाई और सितंबर हैं।", "जुलाई में वेतन वृद्धि या पदोन्नति माँगें।"],
    businessTitle: "यदि आप व्यवसाय चलाते हैं",
    business: ["मार्च में टीम बढ़ाएँ।", "सितंबर में नए उत्पाद या ब्रांड लॉन्च करें।", "अक्टूबर के बाद नए बाज़ार जोड़ें।"],
    doTitle: "करें",
    doItems: [
      "वह काम शुरू करें जिसे आप टाल रहे हैं।",
      "विस्तार से पहले व्यवस्था बनाएँ।",
      "शनि की ज़िम्मेदारी स्वीकार करें, क्योंकि वह बाद में फल देती है।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "6 फरवरी के ग्रहण के आसपास और बुध वक्री के दौरान साझेदारी पर हस्ताक्षर।",
      "30 जुलाई से 5 अगस्त के बीच कोई लॉन्च।",
      "शॉर्टकट या नियमों को मोड़ना, जिसे दशम भाव का शनि माफ नहीं करता।",
    ],
    remedyTitle: "करियर उपाय",
    remedy: [
      "हर सुबह सूर्य को जल चढ़ाएँ।",
      "अक्टूबर तक मंगलवार को हनुमान चालीसा पढ़ें, अपनी मंगल अवधि के सम्मान में।",
      "कार्यस्थल का पूर्व दिशा साफ और उज्ज्वल रखें।",
    ],
  },
} as const;

function FrameCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 78" className={className} fill="none" aria-hidden>
      <path d="M8 46C8 20 18 8 46 8" stroke={COLORS.gold} strokeWidth="1.45" strokeLinecap="round" />
      <path d="M14 40C16 24 26 15 42 14" stroke={COLORS.goldDeep} strokeWidth="0.85" strokeLinecap="round" />
      <path d="M22 30c7-9 16-14 26-13" stroke={COLORS.gold} strokeWidth="0.75" strokeLinecap="round" />
      <circle cx="9" cy="9" r="2.15" fill={COLORS.gold} />
      <path d="M8 50v8M50 8h8" stroke={COLORS.gold} strokeWidth="0.85" strokeLinecap="round" />
    </svg>
  );
}
function TitlePlaque({ title, isHi }: { title: string; isHi: boolean }) {
  return (
    <div
      className="relative mx-auto flex h-[56px] w-[86%] items-center justify-center rounded-[12px] px-5"
      style={{
        background: "rgba(255,249,236,0.78)",
        border: `1.6px solid ${COLORS.gold}`,
        boxShadow: `inset 0 0 0 3.5px rgba(255,249,236,0.92), inset 0 0 0 4.6px ${COLORS.gold}`,
      }}
    >
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[26px] w-[26px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[26px] w-[26px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[26px] w-[26px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[26px] w-[26px] -scale-x-100 -scale-y-100" />
      <h2
        className={`text-center font-bold leading-none ${isHi ? "text-[22px]" : "text-[28px]"}`}
        style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
      >
        {title}
      </h2>
    </div>
  );
}

function ChartMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[30px] w-[30px]" fill="none" aria-hidden>
      <path d="M5 17V11M10 17V7M15 17V10" stroke="#F6E6C4" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 17.5h15" stroke="#F6E6C4" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function FocusMark({ icon }: { icon: FocusIcon }) {
  const props = { size: 22, strokeWidth: 1.9, color: COLORS.goldDeep } as const;
  if (icon === "calendar") return <CalendarDays {...props} />;
  if (icon === "file") return <FileText {...props} />;
  if (icon === "plan") return <CalendarDays {...props} />;
  if (icon === "chart") return <BarChart3 {...props} />;
  if (icon === "hourglass") return <Hourglass {...props} />;
  return <Users {...props} />;
}

function BulletList({ items, isHi }: { items: readonly string[]; isHi: boolean }) {
  return (
    <ul className={`mt-1 space-y-0.5 ${isHi ? "text-[12px] leading-[1.35]" : "text-[12.5px] leading-[1.32]"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full" style={{ background: COLORS.goldDeep }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasCareer({
  language = "en",
  pageNumber = "17",
  forecastYear = 2027,
}: LifeAreasCareerProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-career" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-1">
        <header className="relative z-10 mt-1 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>

        <p
          className={`relative z-10 mt-1.5 shrink-0 px-6 text-center font-bold ${isHi ? "text-[14px] leading-[1.35]" : "text-[16px] leading-[1.32]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <div
          className="relative z-10 mt-1 flex h-[36px] shrink-0 items-center gap-2 overflow-hidden rounded-[3px] px-3"
          style={{
            background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
            border: `1.15px solid ${COLORS.gold}`,
            boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
          }}
        >
          <ChartMark />
          <h3
            className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
            style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
          >
            {t.banner}
          </h3>
        </div>

        <section
          className="relative z-10 mt-1 flex shrink-0 items-start gap-3 rounded-[3px] px-3 py-1.5"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <span
            className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full text-[36px] font-bold leading-none"
            style={{ border: `2px solid ${COLORS.gold}`, boxShadow: `inset 0 0 0 3px rgba(198,163,90,0.28)`, color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            1
          </span>
          <div className="min-w-0">
            <h3
              className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {t.numbersTitle}
            </h3>
            <p
              className={`mt-1 ${isHi ? "text-[12.5px] leading-[1.38]" : "text-[13.5px] leading-[1.35]"}`}
              style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
            >
              {t.numbers}
            </p>
          </div>
        </section>

        <section className="relative z-10 mt-1 shrink-0">
          <h3
            className={`px-1 font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.tableTitle}
          </h3>
          <div className="mt-1.5 overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div
              className="grid grid-cols-[210px_minmax(0,1fr)] px-3 py-1.5 font-bold"
              style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              <span className={isHi ? "text-[13px]" : "text-[14px]"}>{t.window}</span>
              <span className={isHi ? "text-[13px]" : "text-[14px]"}>{t.focus}</span>
            </div>
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid grid-cols-[210px_minmax(0,1fr)] items-center px-3 py-0"
                style={{
                  borderTop: "1px solid rgba(198,163,90,0.45)",
                  background: index % 2 === 0 ? "rgba(255,248,236,0.45)" : "transparent",
                }}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  >
                    <FocusMark icon={row.icon} />
                  </span>
                  <span
                    className={`font-bold ${isHi ? "text-[12.5px]" : "text-[13.5px]"}`}
                    style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
                  >
                    {row.window}
                  </span>
                </span>
                <span
                  className={isHi ? "text-[12.5px] leading-snug" : "text-[13.5px] leading-snug"}
                  style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
                >
                  {row.focus}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1 grid shrink-0 grid-cols-2 gap-2">
          <AdviceCard icon={<Briefcase size={26} strokeWidth={1.8} color={COLORS.goldDeep} />} title={t.employedTitle} items={t.employed} isHi={isHi} />
          <AdviceCard icon={<BarChart3 size={26} strokeWidth={1.8} color={COLORS.goldDeep} />} title={t.businessTitle} items={t.business} isHi={isHi} />
        </div>

        <div className="relative z-10 mt-1 grid shrink-0 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1 shrink-0 overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[46%]">
            <Image
              src={REMEDY_ART}
              alt=""
              fill
              sizes="360px"
              className="object-cover"
              style={{ objectPosition: "84% 58%" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.98) 0%, rgba(255,248,236,0.72) 16%, rgba(255,248,236,0) 40%)" }}
            />
          </div>
          <div className="relative z-10 py-1 pl-3 pr-[150px]">
            <div className="flex items-center gap-2 py-4">
              <span
                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]"
                style={{ border: `1.3px solid ${COLORS.gold}` }}
              >
                <Image
                  src={PRAYER_ICON}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                  style={{ objectPosition: "center 50%", transform: "scale(1.28)" }}
                />
              </span>
              <h3
                className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`}
                style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
              >
                {t.remedyTitle}
              </h3>
            </div>
            <BulletList items={t.remedy} isHi={isHi} />
          </div>
        </section>
      </div>
    </ReportPageShell>
  );
}

function AdviceCard({
  icon,
  title,
  items,
  isHi,
}: {
  icon: ReactNode;
  title: string;
  items: readonly string[];
  isHi: boolean;
}) {
  return (
    <section className="rounded-[3px] px-2.5 py-1" style={{ border: `1.15px solid ${COLORS.gold}` }}>
      <div className="flex items-center gap-2">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          style={{ border: `1.2px solid ${COLORS.gold}` }}
        >
          {icon}
        </span>
        <h3
          className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`}
          style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
        >
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} />
    </section>
  );
}

function ToneCard({
  tone,
  title,
  items,
  isHi,
}: {
  tone: "do" | "avoid";
  title: string;
  items: readonly string[];
  isHi: boolean;
}) {
  const isDo = tone === "do";
  const color = isDo ? COLORS.green : COLORS.red;
  return (
    <section
      className="rounded-[3px] px-2.5 py-1"
      style={{
        border: `1.2px solid ${color}`,
        background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: color }}
        >
          {isDo ? <Check size={24} strokeWidth={2.6} /> : <X size={24} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <ul className={`mt-1 space-y-0.5 ${isHi ? "text-[12px] leading-[1.35]" : "text-[12.5px] leading-[1.32]"}`}>
        {items.map((item) => (
          <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
            <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

