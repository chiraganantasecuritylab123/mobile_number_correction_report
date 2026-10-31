"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Briefcase, Check, Globe, Landmark, Plane, Presentation, Users, X } from "lucide-react";
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

const BANNER = "/assets/yearly-forecast-report/travel-cont-banner.jpg";
const SOMNATH = "/assets/yearly-forecast-report/travel-somnath.jpg";
const DWARKA = "/assets/yearly-forecast-report/travel-dwarka.jpg";
const REMEDY = "/assets/yearly-forecast-report/travel-remedy-cont.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasTravelContProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "business" | "pilgrimage" | "family" | "foreign" | "conference";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Travel (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "Personal Year 1 favours travel that starts something: a new client, a new market, a new partnership. Your Mulank 9 connects with pilgrimage and service, so a spiritual trip in the first half of the year will feel especially meaningful.",
    tableTitle: "Best time for different types of travel in 2027",
    type: "Type of travel",
    best: "Best months",
    avoidCol: "Avoid",
    rows: [
      { key: "business", icon: "business" as const, type: "Business and client travel", best: "April, July, September", avoid: "30 July–5 August" },
      { key: "pilgrimage", icon: "pilgrimage" as const, type: "Pilgrimage", best: "February to May", avoid: "Eclipse days (6 Feb, 2 Aug)" },
      { key: "family", icon: "family" as const, type: "Family vacation", best: "May, November", avoid: "October" },
      { key: "foreign", icon: "foreign" as const, type: "Foreign travel and planning", best: "November, December", avoid: "Mercury retrograde windows" },
      { key: "conference", icon: "conference" as const, type: "Conferences and networking", best: "April, November", avoid: "—" },
    ],
    pilgrimageTitle: "Recommended pilgrimage",
    somnathTitle: "Somnath Jyotirlinga",
    somnath:
      "Somnath is connected with Chandra (the Moon), the lord of your Cancer Lagna, and it is close to your birthplace in Gujarat. A visit on a Monday in the first half of 2027 strengthens your Moon and supports the year.",
    second: "Second choice",
    dwarka: "Dwarka",
    dwarkaBody: "Dwarka is a good second choice for Jupiter’s blessings.",
    doTitle: "Do",
    doItems: [
      "Double-check tickets, documents and bookings during Mercury retrograde (10 Feb–4 Mar, 11 Jun–5 Jul, 8–29 Oct).",
      "Carry some extra time in your plans.",
      "Combine work trips with temple visits where possible.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Starting a journey on eclipse days (6 February, 2 August).",
      "Last-minute international plans in October.",
      "Overpacking your schedule in June and August, when you need rest.",
    ],
    remedyTitle: "Travel remedy",
    remedy: [
      "Recite Hanuman Chalisa before leaving on a long journey.",
      "Offer a coconut at a temple when you reach your destination.",
      "Feed a dog before travel to calm Ketu, which moves over your Lagna this year.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "यात्रा (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "व्यक्तिगत वर्ष 1 ऐसी यात्रा का साथ देता है जो कुछ नया शुरू करे: नया ग्राहक, नया बाज़ार, नई साझेदारी। आपका मूलांक 9 तीर्थ और सेवा से जुड़ा है, इसलिए वर्ष के पहले आधे में आध्यात्मिक यात्रा विशेष अर्थपूर्ण लगेगी।",
    tableTitle: "2027 में अलग-अलग यात्रा के लिए उत्तम समय",
    type: "यात्रा का प्रकार",
    best: "उत्तम महीने",
    avoidCol: "बचें",
    rows: [
      { key: "business", icon: "business" as const, type: "व्यापार और ग्राहक यात्रा", best: "अप्रैल, जुलाई, सितंबर", avoid: "30 जुलाई–5 अगस्त" },
      { key: "pilgrimage", icon: "pilgrimage" as const, type: "तीर्थयात्रा", best: "फरवरी से मई", avoid: "ग्रहण के दिन (6 फरवरी, 2 अगस्त)" },
      { key: "family", icon: "family" as const, type: "पारिवारिक छुट्टी", best: "मई, नवंबर", avoid: "अक्टूबर" },
      { key: "foreign", icon: "foreign" as const, type: "विदेश यात्रा और योजना", best: "नवंबर, दिसंबर", avoid: "बुध वक्री की अवधियाँ" },
      { key: "conference", icon: "conference" as const, type: "सम्मेलन और नेटवर्किंग", best: "अप्रैल, नवंबर", avoid: "—" },
    ],
    pilgrimageTitle: "सुझाई गई तीर्थयात्रा",
    somnathTitle: "सोमनाथ ज्योतिर्लिंग",
    somnath:
      "सोमनाथ चंद्रमा से जुड़ा है, जो आपकी कर्क लग्न के स्वामी हैं, और यह गुजरात में आपके जन्मस्थान के पास है। 2027 के पहले आधे में सोमवार का दर्शन चंद्र को बल देता है और वर्ष का साथ देता है।",
    second: "दूसरी पसंद",
    dwarka: "द्वारका",
    dwarkaBody: "बृहस्पति के आशीर्वाद के लिए द्वारका अच्छा दूसरा विकल्प है।",
    doTitle: "करें",
    doItems: [
      "बुध वक्री (10 फरवरी–4 मार्च, 11 जून–5 जुलाई, 8–29 अक्टूबर) में टिकट, दस्तावेज़ और बुकिंग दोबारा जाँचें।",
      "योजना में कुछ अतिरिक्त समय रखें।",
      "जहाँ संभव हो, काम की यात्रा के साथ मंदिर दर्शन जोड़ें।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "ग्रहण के दिन (6 फरवरी, 2 अगस्त) यात्रा शुरू करना।",
      "अक्टूबर में अंतिम क्षण की अंतरराष्ट्रीय योजना।",
      "जून और अगस्त में कार्यक्रम इतना भरना कि आराम न मिले।",
    ],
    remedyTitle: "यात्रा उपाय",
    remedy: [
      "लंबी यात्रा से पहले हनुमान चालीसा पढ़ें।",
      "गंतव्य पहुँचकर मंदिर में नारियल चढ़ाएँ।",
      "यात्रा से पहले कुत्ते को भोजन कराएँ, ताकि इस वर्ष लग्न पर केतु शांत रहें।",
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
      className="relative mx-auto flex h-[42px] w-[84%] items-center justify-center rounded-[12px] px-5"
      style={{
        background: "rgba(255,249,236,0.78)",
        border: `1.6px solid ${COLORS.gold}`,
        boxShadow: `inset 0 0 0 3px rgba(255,249,236,0.92), inset 0 0 0 4.2px ${COLORS.gold}`,
      }}
    >
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[20px] w-[20px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[20px] w-[20px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[20px] w-[20px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[20px] w-[20px] -scale-x-100 -scale-y-100" />
      <h2 className={`text-center font-bold leading-none ${isHi ? "text-[19px]" : "text-[24px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {title}
      </h2>
    </div>
  );
}

function NumberCluster() {
  const ball = (n: string) => (
    <span
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[17px] font-bold leading-none"
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
    <div className="relative h-[72px] w-[76px] shrink-0">
      <span className="absolute left-1/2 top-0 -translate-x-1/2">{ball("1")}</span>
      <span className="absolute bottom-0 left-0">{ball("9")}</span>
      <span className="absolute bottom-0 right-0">{ball("9")}</span>
    </div>
  );
}

function RowMark({ icon }: { icon: RowIcon }) {
  const props = { size: 16, strokeWidth: 1.8, color: COLORS.goldDeep } as const;
  const node: Record<RowIcon, ReactNode> = {
    business: <Briefcase {...props} />,
    pilgrimage: <Landmark {...props} />,
    family: <Users {...props} />,
    foreign: <Globe {...props} />,
    conference: <Presentation {...props} />,
  };
  return <span className="flex h-6 w-6 shrink-0 items-center justify-center">{node[icon]}</span>;
}

function OmMark() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[18px] font-bold leading-none"
      style={{
        color: COLORS.maroon,
        fontFamily: DISPLAY_FONT,
        border: `1.4px solid ${COLORS.gold}`,
        background: "radial-gradient(circle at 35% 30%, #FFF8E8 0%, #F6DCA4 70%, #E2B86A 100%)",
      }}
    >
      ॐ
    </span>
  );
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={isHi ? "space-y-0 text-[10.5px] leading-[1.22]" : "space-y-0 text-[11px] leading-[1.2]"}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasTravelCont({
  language = "en",
  pageNumber = "29",
  forecastYear = 2027,
}: LifeAreasTravelContProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-travel-cont" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-2 mt-3">
        <header className="relative z-10 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>
        <p
          className={`relative z-10 mt-1 shrink-0 px-6 text-center font-bold ${isHi ? "text-[12.5px] leading-[1.22]" : "text-[14px] leading-[1.18]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_248px] items-center overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="min-w-0">
            <div className="flex h-[28px] items-center gap-2 px-3" style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)` }}>
              <Plane size={16} strokeWidth={1.8} color="#F6E6C4" />
              <h3 className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                {t.banner}
              </h3>
            </div>
            <div className="flex items-start gap-2 px-2.5 py-1.5">
              <NumberCluster />
              <div className="min-w-0">
                <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {t.numbersTitle}
                </h3>
                <p className={`mt-1 ${isHi ? "text-[10.5px] leading-[1.22]" : "text-[11.5px] leading-[1.22]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.numbers}
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full self-center">
            <Image src={BANNER} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "center center" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
          </div>
        </section>

        <section className="relative z-10 mt-5 flex shrink-0 flex-col">
          <h3 className={`shrink-0 font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
            {t.tableTitle}
          </h3>
          <div className="mt-2 rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)_minmax(0,1.05fr)] px-2 py-1 font-bold" style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
              <span className={isHi ? "text-[11.5px]" : "text-[12.5px]"}>{t.type}</span>
              <span className={isHi ? "text-[11.5px]" : "text-[12.5px]"}>{t.best}</span>
              <span className={isHi ? "text-[11.5px]" : "text-[12.5px]"}>{t.avoidCol}</span>
            </div>
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[37px] grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)_minmax(0,1.05fr)] items-center px-2 py-0.5"
                style={{ borderTop: "1px solid rgba(198,163,90,0.45)", background: index % 2 === 0 ? "rgba(255,248,236,0.4)" : "transparent" }}
              >
                <span className="flex items-center gap-1.5 pr-1">
                  <RowMark icon={row.icon} />
                  <span className={`font-bold leading-[1.15] ${isHi ? "text-[11px]" : "text-[12px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {row.type}
                  </span>
                </span>
                <span className={`pr-1 leading-[1.15] ${isHi ? "text-[11px]" : "text-[12px]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.best}
                </span>
                <span className={`leading-[1.15] ${isHi ? "text-[11px]" : "text-[12px]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.avoid}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 mt-1 flex shrink-0 flex-col rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="flex h-[26px] shrink-0 items-center px-3" style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)` }}>
            <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
              {t.pilgrimageTitle}
            </h3>
          </div>
          <div className="grid grid-cols-[188px_minmax(0,1fr)_196px] items-center gap-2 px-2 py-1.5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px]">
              <Image src={SOMNATH} alt="" fill sizes="220px" className="object-cover" style={{ objectPosition: "68% center" }} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <OmMark />
                <h4 className={`font-bold leading-none ${isHi ? "text-[12.5px]" : "text-[14px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {t.somnathTitle}
                </h4>
              </div>
              <p className={`mt-1 ${isHi ? "text-[10.5px] leading-[1.22]" : "text-[11px] leading-[1.2]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                {t.somnath}
              </p>
            </div>
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="relative aspect-[3/4] w-[72px] shrink-0 overflow-hidden rounded-[2px]">
                <Image src={DWARKA} alt="" fill sizes="90px" className="object-cover" style={{ objectPosition: "center 40%" }} />
              </div>
              <div className="min-w-0">
                <p className={`font-bold leading-none ${isHi ? "text-[10px]" : "text-[11px]"}`} style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}>
                  {t.second}
                </p>
                <h4 className={`mt-0.5 font-bold leading-none ${isHi ? "text-[13px]" : "text-[14px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {t.dwarka}
                </h4>
                <p className={`mt-0.5 ${isHi ? "text-[10px] leading-[1.2]" : "text-[10.5px] leading-[1.18]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.dwarkaBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mt-1 grid grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_268px] items-center overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}>
          <div className="flex min-w-0 flex-col justify-center py-1 pl-2.5 pr-2">
            <div className="flex items-center gap-2">
              <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]" style={{ border: `1.3px solid ${COLORS.gold}` }}>
                <Image src={PRAYER_ICON} alt="" fill sizes="32px" className="object-cover" style={{ objectPosition: "center 50%", transform: "scale(1.28)" }} />
              </span>
              <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                {t.remedyTitle}
              </h3>
            </div>
            <BulletList items={t.remedy} isHi={isHi} />
          </div>
          <div className="relative aspect-[16/9] w-full self-center">
            <Image src={REMEDY} alt="" fill sizes="300px" className="object-cover" style={{ objectPosition: "center center" }} />
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
    <section className="flex h-full flex-col justify-center rounded-[3px] px-2.5 py-6" style={{ border: `1.2px solid ${color}`, background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)" }}>
      <div className="mb-0.5 flex items-center gap-1.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={15} strokeWidth={2.6} /> : <X size={15} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[14.5px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
