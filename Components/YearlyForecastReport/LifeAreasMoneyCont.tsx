"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Ban, BarChart3, CalendarDays, Check, Coins, FileText, PiggyBank, X } from "lucide-react";
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

const MOUNTAIN = "/assets/yearly-forecast-report/mountain-sunrise.png";
const COINS_ART = "/assets/yearly-forecast-report/money-coins.png";
const LAKSHMI = "/assets/yearly-forecast-report/money-remedy-lakshmi.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasMoneyContProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type FocusIcon = "calendar" | "ban" | "chart" | "coins" | "piggy" | "file";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Money and finance (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "Personal Year 1 is ideal for starting a new income stream. July is Personal Month 8, the number of money and results. Your Bhagyank 4 favours steady, structured saving over gambling-style investments.",
    tableTitle: "Money focus by time period",
    window: "Window",
    focus: "Money focus",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "January–March", focus: "Collect dues; review subscriptions and expenses" },
      { key: "feb", icon: "ban" as const, window: "February and October", focus: "No lending, no large financial commitments" },
      { key: "apr", icon: "chart" as const, window: "April", focus: "Test a new income source on a small scale" },
      { key: "jul", icon: "coins" as const, window: "July", focus: "Strongest money month; make planned investments with proper advice" },
      { key: "save", icon: "piggy" as const, window: "July–November", focus: "Build savings and an emergency fund" },
      { key: "dec", icon: "file" as const, window: "December", focus: "Make your 2028 budget" },
    ],
    doTitle: "Do",
    doItems: [
      "Keep written records of every loan and deal.",
      "Set up a fixed monthly saving before October.",
      "Put new income into assets, not lifestyle.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "“Double your money” schemes, lottery or betting.",
      "Standing guarantee for someone else's loan.",
      "Big purchases during Mercury retrograde (10 Feb – 4 Mar, 11 Jun – 5 Jul, 8 – 29 Oct).",
    ],
    remedyTitle: "Money remedy",
    remedy: [
      "Light a ghee diya before Goddess Lakshmi on Fridays.",
      "Donate chana dal or turmeric on Thursdays from July onwards to strengthen Jupiter's transit through your 2nd house.",
      "Keep your wallet neat, with no torn notes or old bills.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "धन और वित्त (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "व्यक्तिगत वर्ष 1 नई आय धारा शुरू करने के लिए उपयुक्त है। जुलाई व्यक्तिगत माह 8 है, धन और परिणाम का अंक। आपका भाग्यांक 4 जुए जैसी योजनाओं के बजाय स्थिर, व्यवस्थित बचत को अनुकूल मानता है।",
    tableTitle: "समय के अनुसार धन फोकस",
    window: "अवधि",
    focus: "धन फोकस",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "जनवरी–मार्च", focus: "बकाया वसूलें; सदस्यता और खर्चों की समीक्षा करें" },
      { key: "feb", icon: "ban" as const, window: "फरवरी और अक्टूबर", focus: "न उधार दें, न बड़े वित्तीय वचन दें" },
      { key: "apr", icon: "chart" as const, window: "अप्रैल", focus: "नई आय का स्रोत छोटे पैमाने पर परखें" },
      { key: "jul", icon: "coins" as const, window: "जुलाई", focus: "सबसे मजबूत धन माह; सही सलाह के साथ नियोजित निवेश करें" },
      { key: "save", icon: "piggy" as const, window: "जुलाई–नवंबर", focus: "बचत और आपात निधि बनाएँ" },
      { key: "dec", icon: "file" as const, window: "दिसंबर", focus: "2028 का बजट बनाएँ" },
    ],
    doTitle: "करें",
    doItems: [
      "हर ऋण और सौदे का लिखित रिकॉर्ड रखें।",
      "अक्टूबर से पहले एक निश्चित मासिक बचत तय करें।",
      "नई आय संपत्ति में लगाएँ, जीवनशैली में नहीं।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "“पैसा दुगुना” योजनाएँ, लॉटरी या सट्टा।",
      "किसी और के ऋण की ज़मानत देना।",
      "बुध वक्री के दौरान बड़ी खरीद (10 फरवरी–4 मार्च, 11 जून–5 जुलाई, 8–29 अक्टूबर)।",
    ],
    remedyTitle: "धन उपाय",
    remedy: [
      "शुक्रवार को देवी लक्ष्मी के सामने घी का दीया जलाएँ।",
      "जुलाई से गुरुवार को चना दाल या हल्दी दान करें, ताकि द्वितीय भाव से गुजरते गुरु की गति मजबूत हो।",
      "बटुआ साफ रखें; फटे नोट या पुराने बिल न रखें।",
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

function PageFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div className="absolute inset-[1px]" style={{ border: `1.25px solid ${COLORS.gold}` }} />
      <div className="absolute inset-[5px]" style={{ border: "0.7px solid rgba(198,163,90,0.55)" }} />
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[54px] w-[54px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[54px] w-[54px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[54px] w-[54px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[54px] w-[54px] -scale-x-100 -scale-y-100" />
    </div>
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

function FocusMark({ icon }: { icon: FocusIcon }) {
  if (icon === "ban") return <Ban size={26} strokeWidth={2.2} color={COLORS.red} />;
  const props = { size: 26, strokeWidth: 1.8, color: COLORS.goldDeep } as const;
  if (icon === "calendar") return <CalendarDays {...props} />;
  if (icon === "chart") return <BarChart3 {...props} />;
  if (icon === "coins") return <Coins {...props} />;
  if (icon === "piggy") return <PiggyBank {...props} />;
  return <FileText {...props} />;
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

export default function LifeAreasMoneyCont({
  language = "en",
  pageNumber = "19",
  forecastYear = 2027,
}: LifeAreasMoneyContProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-money-cont" padding="12px 16px 8px">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-5">
        <PageFrame />

        <header className="relative z-10 mt-2 shrink-0">
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

        <section
          className="relative z-10 mt-1 shrink-0 overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <div className="pointer-events-none absolute inset-y-1 right-1 top-10 z-20 w-[44%]">
            <Image src={COINS_ART} alt="" fill sizes="280px" className="object-contain object-center" />
          </div>
          <div
            className="relative z-10 flex h-[36px] items-center gap-2 px-3 pr-[36%]"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <Coins size={22} strokeWidth={1.8} color="#F6E6C4" />
            <h3
              className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
              style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
            >
              {t.banner}
            </h3>
          </div>
          <div className="relative z-10 flex items-start gap-3 px-3 py-2 pr-[34%]">
            <span
              className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full text-[36px] font-bold leading-none"
              style={{
                border: `2px solid ${COLORS.gold}`,
                boxShadow: "inset 0 0 0 3px rgba(198,163,90,0.28)",
                color: COLORS.maroon,
                fontFamily: DISPLAY_FONT,
              }}
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
          </div>
        </section>

        <section className="relative z-10 flex flex-1 flex-col mt-4">
          <h3
            className={`shrink-0 px-1 font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.tableTitle}
          </h3>
          <div className="mt-1.5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div
              className="grid shrink-0 grid-cols-[220px_minmax(0,1fr)] px-3 py-1.5 font-bold"
              style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              <span className={isHi ? "text-[13px]" : "text-[14px]"}>{t.window}</span>
              <span className={isHi ? "text-[13px]" : "text-[14px]"}>{t.focus}</span>
            </div>
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[46px] flex-1 grid-cols-[220px_minmax(0,1fr)] items-center px-3"
                style={{
                  borderTop: "1px solid rgba(198,163,90,0.45)",
                  background: index % 2 === 0 ? "rgba(255,248,236,0.45)" : "transparent",
                }}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
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

        <div className="relative z-10 grid shrink-0 grid-cols-2 gap-2 mt-4">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-4 shrink-0 overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[36%]">
            <Image
              src={LAKSHMI}
              alt=""
              fill
              sizes="280px"
              className="object-cover"
              style={{ objectPosition: "right center" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,248,236,1) 0%, rgba(255,248,236,0.88) 24%, rgba(255,248,236,0) 58%)",
              }}
            />
          </div>
          <div className="relative z-10 pl-3 py-4 pr-[200px]">
            <div className="flex items-center gap-2">
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

        <div className="relative z-10 -mx-1 mt-2 shrink-0">
          <Image
            src={MOUNTAIN}
            alt=""
            width={1024}
            height={245}
            className="h-auto w-full"
            style={{ width: "100%", height: "auto", mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </ReportPageShell>
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
      className="rounded-[3px] px-2.5 py-1.5"
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
