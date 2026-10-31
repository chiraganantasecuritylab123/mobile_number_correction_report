"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Car, Check, FileText, Home, Search, Wrench, X } from "lucide-react";
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

const HOME = "/assets/yearly-forecast-report/property-home.jpg";
const REMEDY = "/assets/yearly-forecast-report/property-remedy-cont.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasPropertyContProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "search" | "home" | "file" | "wrench" | "car";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Property and vehicle (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "Your Bhagyank 4 is the number of land, buildings and foundations, so property is a natural part of your destiny path. Personal Year 1 is the right year to begin the search. For registry and possession dates, prefer the 1st, 9th, 10th, 18th, 19th, 27th or 28th of the month, and avoid the 8th, 17th and 26th.",
    tableTitle: "Key activities and best time in 2027",
    activity: "Activity",
    best: "Best time in 2027",
    avoidCol: "Avoid",
    rows: [
      { key: "research", icon: "search" as const, activity: "Property research", best: "January to June", avoid: "—" },
      { key: "buy", icon: "home" as const, activity: "Buying or booking property", best: "July, September, late November", avoid: "Before 3 June, around 2 August" },
      { key: "registry", icon: "file" as const, activity: "Registry and agreements", best: "July, September, November", avoid: "Mercury retrograde windows" },
      { key: "repair", icon: "wrench" as const, activity: "Renovation and repairs", best: "July to September", avoid: "January to May" },
      { key: "vehicle", icon: "car" as const, activity: "Buying a vehicle", best: "April, September", avoid: "Around 2 August, October" },
    ],
    checkTitle: "Before you buy, check",
    checkItems: [
      "Clear title documents and approvals.",
      "The main entrance facing east or north if possible.",
      "Legal verification by a lawyer.",
      "The full cost, including registration and loan charges.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Paying a token amount in a rush.",
      "Disputed or unclear-title property.",
      "Buying only because of a “limited time offer”, which Rahu makes tempting.",
    ],
    remedyTitle: "Property remedy",
    remedy: [
      "Perform Bhoomi Pujan or Vastu Shanti before you move in.",
      "On Tuesdays, donate red lentils (masoor dal) to strengthen Mars, the planet of land.",
      "Keep a Swastik symbol at the entrance of your current home.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "संपत्ति और वाहन (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "आपका भाग्यांक 4 भूमि, भवन और नींव का अंक है, इसलिए संपत्ति आपकी नियति का स्वाभाविक हिस्सा है। व्यक्तिगत वर्ष 1 खोज शुरू करने का सही वर्ष है। रजिस्ट्री और कब्जे के लिए महीने की 1, 9, 10, 18, 19, 27 या 28 तारीख चुनें, और 8, 17 व 26 से बचें।",
    tableTitle: "2027 की मुख्य गतिविधियाँ और उत्तम समय",
    activity: "गतिविधि",
    best: "2027 में उत्तम समय",
    avoidCol: "बचें",
    rows: [
      { key: "research", icon: "search" as const, activity: "संपत्ति खोज", best: "जनवरी से जून", avoid: "—" },
      { key: "buy", icon: "home" as const, activity: "खरीद या बुकिंग", best: "जुलाई, सितंबर, नवंबर का अंत", avoid: "3 जून से पहले, लगभग 2 अगस्त" },
      { key: "registry", icon: "file" as const, activity: "रजिस्ट्री और समझौते", best: "जुलाई, सितंबर, नवंबर", avoid: "बुध वक्री की अवधियाँ" },
      { key: "repair", icon: "wrench" as const, activity: "मरम्मत और सुधार", best: "जुलाई से सितंबर", avoid: "जनवरी से मई" },
      { key: "vehicle", icon: "car" as const, activity: "वाहन खरीद", best: "अप्रैल, सितंबर", avoid: "लगभग 2 अगस्त, अक्टूबर" },
    ],
    checkTitle: "खरीद से पहले जाँचें",
    checkItems: [
      "साफ मालिकाना दस्तावेज़ और मंजूरी।",
      "मुख्य प्रवेश पूर्व या उत्तर की ओर हो, यदि संभव हो।",
      "वकील से कानूनी जाँच।",
      "रजिस्ट्री और ऋण शुल्क सहित पूरी लागत।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "जल्दी में टोकन राशि देना।",
      "विवादित या अस्पष्ट मालिकाना संपत्ति।",
      "केवल “सीमित समय के ऑफर” पर खरीदना, जिसे राहु लुभावना बनाते हैं।",
    ],
    remedyTitle: "संपत्ति उपाय",
    remedy: [
      "घर में आने से पहले भूमि पूजन या वास्तु शांति करें।",
      "मंगलवार को भूमि के ग्रह मंगल के लिए मसूर दाल दान करें।",
      "वर्तमान घर के प्रवेश पर स्वस्तिक चिह्न रखें।",
    ],
  },
} as const;

function FrameCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 78" className={className} fill="none" aria-hidden>
      <path d="M8 46C8 20 18 8 46 8" stroke={COLORS.gold} strokeWidth="1.45" strokeLinecap="round" />
      <path d="M14 40C16 24 26 15 42 14" stroke={COLORS.goldDeep} strokeWidth="0.85" strokeLinecap="round" />
      <circle cx="9" cy="9" r="2.15" fill={COLORS.gold} />
    </svg>
  );
}

function TitlePlaque({ title, isHi }: { title: string; isHi: boolean }) {
  return (
    <div
      className="relative mx-auto flex h-[44px] w-[84%] items-center justify-center rounded-[12px] px-5"
      style={{
        background: "rgba(255,249,236,0.78)",
        border: `1.6px solid ${COLORS.gold}`,
        boxShadow: `inset 0 0 0 3.5px rgba(255,249,236,0.92), inset 0 0 0 4.6px ${COLORS.gold}`,
      }}
    >
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[22px] w-[22px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[22px] w-[22px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[22px] w-[22px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[22px] w-[22px] -scale-x-100 -scale-y-100" />
      <h2 className={`text-center font-bold leading-none ${isHi ? "text-[20px]" : "text-[25px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {title}
      </h2>
    </div>
  );
}

function NumberCluster() {
  const ball = (n: string) => (
    <span
      className="flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] font-bold leading-none"
      style={{
        color: "#8E2A36",
        fontFamily: DISPLAY_FONT,
        background: "radial-gradient(circle at 35% 30%, #FFF8E8 0%, #F6DCA4 58%, #E2B86A 100%)",
        border: "1.6px solid #C4922E",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
      }}
    >
      {n}
    </span>
  );
  return (
    <div className="relative h-[78px] w-[80px] shrink-0">
      <span className="absolute left-1/2 top-0 -translate-x-1/2">{ball("4")}</span>
      <span className="absolute bottom-0 left-0">{ball("1")}</span>
      <span className="absolute bottom-0 right-0">{ball("9")}</span>
    </div>
  );
}

function RowMark({ icon }: { icon: RowIcon }) {
  const props = { size: 18, strokeWidth: 1.8, color: COLORS.goldDeep } as const;
  const iconNode: Record<RowIcon, ReactNode> = {
    search: <Search {...props} />,
    home: <Home {...props} />,
    file: <FileText {...props} />,
    wrench: <Wrench {...props} />,
    car: <Car {...props} />,
  };
  return <span className="flex h-6 w-6 shrink-0 items-center justify-center">{iconNode[icon]}</span>;
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={isHi ? "space-y-0 text-[11px] leading-[1.24]" : "space-y-0 text-[11.5px] leading-[1.24]"}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasPropertyCont({
  language = "en",
  pageNumber = "27",
  forecastYear = 2027,
}: LifeAreasPropertyContProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-property-cont" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-1 mt-3">
        <header className="relative z-10 mt-1 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>
        <p
          className={`relative z-10 mt-1 shrink-0 px-8 text-center font-bold ${isHi ? "text-[13px] leading-[1.26]" : "text-[14.5px] leading-[1.22]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_230px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="min-w-0">
            <div className="flex h-[28px] items-center gap-2 px-3" style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)` }}>
              <Home size={16} strokeWidth={1.8} color="#F6E6C4" />
              <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                {t.banner}
              </h3>
            </div>
            <div className="flex items-start gap-2 px-2.5 py-1.5">
              <NumberCluster />
              <div className="min-w-0">
                <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {t.numbersTitle}
                </h3>
                <p className={`mt-1 ${isHi ? "text-[10.5px] leading-[1.26]" : "text-[11.5px] leading-[1.26]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.numbers}
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[132px]">
            <Image src={HOME} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "36% 58%" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
          </div>
        </section>

        <section className="relative z-10 mt-1.5 flex min-h-0 flex-[1.35] flex-col mt-3">
          <h3 className={`shrink-0 font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15.5px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
            {t.tableTitle}
          </h3>
          <div className="mt-1 flex min-h-0 flex-1 flex-col rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div className="grid shrink-0 grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1.05fr)] px-2.5 py-1 font-bold" style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.activity}</span>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.best}</span>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.avoidCol}</span>
            </div>
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[34px] flex-1 grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1.05fr)] items-center px-2.5"
                style={{ borderTop: "1px solid rgba(198,163,90,0.45)", background: index % 2 === 0 ? "rgba(255,248,236,0.4)" : "transparent" }}
              >
                <span className="flex items-center gap-1.5 pr-2">
                  <RowMark icon={row.icon} />
                  <span className={`font-bold ${isHi ? "text-[12px]" : "text-[13px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {row.activity}
                  </span>
                </span>
                <span className={`pr-2 ${isHi ? "text-[11.5px]" : "text-[12.5px]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.best}
                </span>
                <span className={isHi ? "text-[11.5px]" : "text-[12.5px]"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.avoid}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1.5 grid flex-1 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.checkTitle} items={t.checkItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1.5 grid flex-1 grid-cols-[minmax(0,1fr)_300px] rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="flex min-w-0 flex-col justify-center py-1.5 pl-2.5 pr-2">
            <div className="flex items-center gap-2">
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]" style={{ border: `1.3px solid ${COLORS.gold}` }}>
                <Image src={PRAYER_ICON} alt="" fill sizes="32px" className="object-cover" style={{ objectPosition: "center 50%", transform: "scale(1.28)" }} />
              </span>
              <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                {t.remedyTitle}
              </h3>
            </div>
            <BulletList items={t.remedy} isHi={isHi} />
          </div>
          <div className="relative h-full min-h-[118px] overflow-hidden">
            <Image src={REMEDY} alt="" fill sizes="320px" className="object-cover" style={{ objectPosition: "center 46%" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
          </div>
        </section>
      </div>
    </ReportPageShell>
  );
}

function ToneCard({ tone, title, items, isHi }: { tone: "do" | "avoid"; title: string; items: readonly string[]; isHi: boolean }) {
  const isDo = tone === "do";
  const color = isDo ? COLORS.green : COLORS.red;
  return (
    <section className="flex h-full flex-col justify-center rounded-[3px] px-2.5 py-1" style={{ border: `1.2px solid ${color}`, background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)" }}>
      <div className="flex items-center gap-1.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={16} strokeWidth={2.6} /> : <X size={16} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[14.5px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
