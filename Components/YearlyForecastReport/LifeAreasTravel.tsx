"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { CalendarDays, Check, Flag, Globe, Landmark, Plane, Users, X } from "lucide-react";
import { useId, type ReactNode } from "react";
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

const BANNER = "/assets/yearly-forecast-report/travel-banner.jpg";
const CHART = "/assets/yearly-forecast-report/travel-chart.jpg";
const REMEDY = "/assets/yearly-forecast-report/travel-remedy.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasTravelProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "temple" | "saturn" | "calendar" | "flag" | "globe" | "people";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Travel",
    introLead: "2027 favours purposeful travel.",
    introRest: "Short work trips and pilgrimages fill the first half, and longer, foreign-linked travel opens after October.",
    chartTitle: "What your birth chart says",
    chart:
      "Mars, the lord of your 10th house of career, sits in your 12th house of foreign lands. Your career is naturally linked to foreign clients, other cities and online work across borders. Jupiter, your 9th lord of long journeys and dharma, sits in your 4th house with Rahu, so your travel often serves to improve your home and status. Venus in your 3rd house makes short trips pleasant and productive. Rahu itself is the planet of foreign connections, which becomes important from October.",
    bringsTitle: "What 2027 brings",
    rows: [
      { key: "jupiter", icon: "temple" as const, when: "25 January to\n26 June", body: "Jupiter in your 1st house looks at your 9th house. This is a blessed time for pilgrimage and spiritual travel." },
      { key: "saturn", icon: "saturn" as const, when: "Until 3 June,\nand again 20 October to December", body: "Saturn moves through your 9th house. Long-distance travel needs careful planning, and journeys taken with a serious purpose go best." },
      { key: "april", icon: "calendar" as const, when: "April", body: "Personal Month 5, the number of movement. It is your best month for new places, work travel and meeting new contacts." },
      { key: "sep", icon: "flag" as const, when: "September", body: "Personal Month 1. Good for travel connected to a new launch or new business." },
      { key: "rahu", icon: "globe" as const, when: "From 11 October", body: "Rahu Mahadasha opens foreign connections: clients, partners or work abroad. Begin visa and passport planning from late 2027." },
      { key: "short", icon: "people" as const, when: "From 27 November", body: "Jupiter moves into your 3rd house and favours short trips, conferences and networking events." },
    ],
    doTitle: "Do",
    doItems: [
      "Plan trips with a clear purpose (work, learning or faith).",
      "Keep your documents (passport, visa, ID) ready.",
      "Stay flexible with dates and plans.",
      "Use travel time to build new contacts and opportunities.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Impulsive or last-minute travel plans.",
      "Ignoring visa, passport or document deadlines.",
      "Travel during Mercury retrograde for important bookings or agreements.",
      "Overexertion or too much travel without rest.",
    ],
    remedyTitle: "Travel remedy",
    remedy: [
      "Visit a temple or sacred place before every major trip.",
      "Chant the Gayatri Mantra 11 times daily while travelling.",
      "Keep a small travel kit with a photo of your deity, roli, rice and a little camphor.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "यात्रा",
    introLead: "2027 उद्देश्यपूर्ण यात्रा का साथ देता है।",
    introRest: "पहला आधा भाग छोटे काम और तीर्थयात्रा से भरा रहता है, और अक्टूबर के बाद लंबी, विदेश से जुड़ी यात्रा खुलती है।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    chart:
      "करियर के दशम भाव के स्वामी मंगल विदेश के द्वादश भाव में हैं। आपका काम विदेशी ग्राहकों, दूसरे शहरों और सीमा पार ऑनलाइन काम से जुड़ा है। लंबी यात्रा के नवम स्वामी गुरु राहु के साथ चतुर्थ भाव में हैं, इसलिए यात्रा अक्सर घर और प्रतिष्ठा सुधारती है। तृतीय भाव का शुक्र छोटी यात्रा को सुखद बनाता है। राहु विदेश संबंध का ग्रह है, जो अक्टूबर से महत्वपूर्ण होता है।",
    bringsTitle: "2027 क्या लाता है",
    rows: [
      { key: "jupiter", icon: "temple" as const, when: "25 जनवरी से\n26 जून", body: "प्रथम भाव का गुरु नवम भाव को देखता है। तीर्थ और आध्यात्मिक यात्रा का शुभ समय है।" },
      { key: "saturn", icon: "saturn" as const, when: "3 जून तक,\nऔर फिर 20 अक्टूबर से दिसंबर", body: "शनि नवम भाव से गुजरते हैं। लंबी यात्रा में योजना ज़रूरी है, और गंभीर उद्देश्य की यात्रा सबसे अच्छी रहती है।" },
      { key: "april", icon: "calendar" as const, when: "अप्रैल", body: "व्यक्तिगत माह 5, गति का अंक। नई जगह, काम की यात्रा और नए संपर्क का सर्वोत्तम महीना है।" },
      { key: "sep", icon: "flag" as const, when: "सितंबर", body: "व्यक्तिगत माह 1। नई शुरुआत या नए व्यापार से जुड़ी यात्रा के लिए अच्छा है।" },
      { key: "rahu", icon: "globe" as const, when: "11 अक्टूबर से", body: "राहु महादशा विदेशी संबंध खोलती है: ग्राहक, साझेदार या विदेश में काम। 2027 के अंत से वीज़ा और पासपोर्ट की योजना शुरू करें।" },
      { key: "short", icon: "people" as const, when: "27 नवंबर से", body: "गुरु तृतीय भाव में आते हैं और छोटी यात्रा, सम्मेलन और नेटवर्किंग का साथ देते हैं।" },
    ],
    doTitle: "करें",
    doItems: [
      "यात्रा का स्पष्ट उद्देश्य रखें: काम, सीख या आस्था।",
      "पासपोर्ट, वीज़ा और पहचान पत्र तैयार रखें।",
      "तिथियों और योजना में लचीलापन रखें।",
      "यात्रा के समय नए संपर्क और अवसर बनाएँ।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "अचानक या अंतिम क्षण की यात्रा योजना।",
      "वीज़ा, पासपोर्ट या दस्तावेज़ की समय-सीमा छोड़ना।",
      "महत्वपूर्ण बुकिंग के लिए बुध वक्री में यात्रा।",
      "बिना आराम के अधिक यात्रा या थकान।",
    ],
    remedyTitle: "यात्रा उपाय",
    remedy: [
      "हर बड़ी यात्रा से पहले मंदिर या पवित्र स्थान जाएँ।",
      "यात्रा के दौरान रोज़ गायत्री मंत्र 11 बार जपें।",
      "देवता की तस्वीर, रोली, चावल और थोड़ा कपूर यात्रा के साथ रखें।",
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

function SaturnMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 36 28" className="h-7 w-9" aria-hidden>
      <defs>
        <radialGradient id={`tr-sat-${uid}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="100%" stopColor="#8A6A40" />
        </radialGradient>
      </defs>
      <ellipse cx="18" cy="14" rx="14" ry="4.4" transform="rotate(-22 18 14)" fill="none" stroke="#C4922E" strokeWidth="2" />
      <circle cx="18" cy="14" r="6" fill={`url(#tr-sat-${uid})`} />
    </svg>
  );
}

function CompassRose() {
  return (
    <svg viewBox="0 0 64 64" className="h-[52px] w-[52px] shrink-0" aria-hidden>
      <circle cx="32" cy="32" r="30" fill="#F8F1E0" stroke={COLORS.goldDeep} strokeWidth="1.4" />
      <circle cx="32" cy="32" r="23" fill="none" stroke={COLORS.gold} strokeWidth="0.8" />
      <circle cx="32" cy="32" r="4" fill={COLORS.goldDeep} />
      <path d="M32 8 L36 32 L32 56 L28 32 Z" fill={COLORS.maroon} />
      <path d="M8 32 L32 28 L56 32 L32 36 Z" fill={COLORS.goldDeep} />
      <path d="M32 8 L34.2 32 L32 18 Z" fill="#F4E2B0" />
    </svg>
  );
}

function RowMark({ icon }: { icon: RowIcon }) {
  const props = { size: 18, strokeWidth: 1.8, color: COLORS.goldDeep } as const;
  const node: Record<RowIcon, ReactNode> = {
    temple: <Landmark {...props} />,
    saturn: <SaturnMark />,
    calendar: <CalendarDays {...props} />,
    flag: <Flag {...props} />,
    globe: <Globe {...props} />,
    people: <Users {...props} />,
  };
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ border: `1.2px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.9)" }}>
      {node[icon]}
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

export default function LifeAreasTravel({
  language = "en",
  pageNumber = "28",
  forecastYear = 2027,
}: LifeAreasTravelProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-travel" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
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

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_252px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="flex min-w-0 flex-col">
            <div className="flex h-[28px] shrink-0 items-center gap-2 px-3" style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)` }}>
              <Plane size={16} strokeWidth={1.8} color="#F6E6C4" />
              <h3 className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                {t.banner}
              </h3>
            </div>
            <p className={`px-3 py-1.5 ${isHi ? "text-[11px] leading-[1.26]" : "text-[12px] leading-[1.26]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
              <span className="font-bold" style={{ color: COLORS.maroon }}>
                {t.introLead}
              </span>{" "}
              {t.introRest}
            </p>
          </div>
          <div className="relative aspect-[16/9] w-full self-center">
            <Image src={BANNER} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "center center" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
          </div>
        </section>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_236px] items-center overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="flex min-w-0 items-start gap-1.5 px-2 py-1.5">
            <CompassRose />
            <div className="min-w-0">
              <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                {t.chartTitle}
              </h3>
              <p className={`mt-1 ${isHi ? "text-[10.5px] leading-[1.22]" : "text-[11px] leading-[1.22]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                {t.chart}
              </p>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full self-center">
            <Image src={CHART} alt="" fill sizes="250px" className="object-cover" style={{ objectPosition: "center center" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-4" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
          </div>
        </section>

        <section className="relative z-10 mt-1 flex shrink-0 flex-col rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="flex h-[26px] shrink-0 items-center px-3" style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)` }}>
            <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
              {t.bringsTitle}
            </h3>
          </div>
          <div className="flex flex-col">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[42px] grid-cols-[214px_minmax(0,1fr)] items-center px-2 py-1"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.4)" }}
              >
                <span className="flex items-center gap-1.5 pr-2">
                  <RowMark icon={row.icon} />
                  <span className={`whitespace-pre-line font-bold leading-[1.12] ${isHi ? "text-[11px]" : "text-[12px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {row.when}
                  </span>
                </span>
                <span className={isHi ? "text-[11px] leading-[1.2]" : "text-[12px] leading-[1.2]"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.body}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1 grid flex-1 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_270px] items-center overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}>
          <div className="flex min-w-0 flex-col justify-center py-1.5 pl-2.5 pr-2">
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
            <Image src={REMEDY} alt="" fill sizes="320px" className="object-cover" style={{ objectPosition: "center center" }} />
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
