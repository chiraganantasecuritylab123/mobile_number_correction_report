"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { CalendarDays, Check, Heart, User, Users, X } from "lucide-react";
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

const MOUNTAIN = "/assets/yearly-forecast-report/mountain-sunrise.png";
const COUPLE = "/assets/yearly-forecast-report/love-couple.jpg";
const SHIVA = "/assets/yearly-forecast-report/love-shiva-parvati.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasLoveContProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type FocusIcon = "calendar" | "heart" | "couple" | "couple-heart";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Love and marriage (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "Personal Year 1 makes you independent and focused on your goals. Balance it with the 2027 Universal Year 11/2, which rewards partnership. January and October (Personal Month 2) are emotionally sensitive months. May (Personal Month 6) is the best month for family and relationship harmony. November (Personal Month 3) is warm and social.",
    marriedTitle: "If you are married",
    married: [
      "Plan a short trip or special time together in April or May.",
      "In February and October, listen first and react later.",
      "Share your career plans openly, so your partner doesn't learn about them last.",
    ],
    singleTitle: "If you are single",
    single: [
      "You may meet someone through work, travel or your professional network, especially in April and November.",
      "Take your time; Rahu can make someone seem perfect at first.",
      "Let family meet the person before you commit.",
    ],
    tableTitle: "Relationship focus by time period",
    window: "Window",
    focus: "Relationship focus",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "January–February", focus: "Patience; avoid decisions in the eclipse week." },
      { key: "apr", icon: "heart" as const, window: "April–May", focus: "Best time for bonding, proposals and engagement talks." },
      { key: "jun", icon: "couple" as const, window: "June–October", focus: "Protect couple time from work pressure." },
      { key: "nov", icon: "couple-heart" as const, window: "November", focus: "Warm, social month; good for engagement or marriage." },
    ],
    doTitle: "Do",
    doItems: ["Keep promises, even small ones.", "Say thank you often.", "Settle disagreements on the same day."],
    avoidTitle: "Avoid",
    avoidItems: [
      "Involving too many outsiders in private matters.",
      "Harsh or sarcastic words.",
      "Big relationship decisions during eclipses or Mercury retrograde.",
    ],
    remedyTitle: "Relationship remedy",
    remedy: [
      "Worship Lord Shiva and Goddess Parvati together on Mondays.",
      "Offer white sweets on Fridays.",
      'Chant "Om Raam Rahave Namah" 108 times on Saturdays to calm Rahu in your 7th house.',
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "प्रेम और विवाह (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "व्यक्तिगत वर्ष 1 आपको स्वतंत्र और अपने लक्ष्यों पर केंद्रित रखता है। इसे 2027 के सार्वभौमिक वर्ष 11/2 से संतुलित करें, जो साझेदारी को फल देता है। जनवरी और अक्टूबर (व्यक्तिगत माह 2) भावनात्मक रूप से संवेदनशील महीने हैं। मई (व्यक्तिगत माह 6) परिवार और संबंधों के सामंजस्य का सबसे अच्छा महीना है। नवंबर (व्यक्तिगत माह 3) गर्म और सामाजिक है।",
    marriedTitle: "यदि आप विवाहित हैं",
    married: [
      "अप्रैल या मई में साथ एक छोटी यात्रा या विशेष समय की योजना बनाएँ।",
      "फरवरी और अक्टूबर में पहले सुनें, बाद में प्रतिक्रिया दें।",
      "अपनी करियर योजनाएँ खुलकर साझा करें, ताकि साथी उन्हें सबसे अंत में न जाने।",
    ],
    singleTitle: "यदि आप अविवाहित हैं",
    single: [
      "काम, यात्रा या पेशेवर नेटवर्क से किसी से मुलाकात हो सकती है, खासकर अप्रैल और नवंबर में।",
      "समय लें; राहु किसी को शुरुआत में परिपूर्ण दिखा सकता है।",
      "वचनबद्ध होने से पहले परिवार को उस व्यक्ति से मिलवाएँ।",
    ],
    tableTitle: "समय के अनुसार संबंध फोकस",
    window: "अवधि",
    focus: "संबंध फोकस",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "जनवरी–फरवरी", focus: "धैर्य रखें; ग्रहण सप्ताह में निर्णय न लें।" },
      { key: "apr", icon: "heart" as const, window: "अप्रैल–मई", focus: "जुड़ाव, प्रस्ताव और सगाई की बातों का सबसे अच्छा समय।" },
      { key: "jun", icon: "couple" as const, window: "जून–अक्टूबर", focus: "काम के दबाव से साथ का समय बचाकर रखें।" },
      { key: "nov", icon: "couple-heart" as const, window: "नवंबर", focus: "गर्म, सामाजिक महीना; सगाई या विवाह के लिए अच्छा।" },
    ],
    doTitle: "करें",
    doItems: ["छोटे वादे भी निभाएँ।", "अक्सर धन्यवाद कहें।", "असहमति उसी दिन सुलझाएँ।"],
    avoidTitle: "बचें",
    avoidItems: [
      "निजी बातों में बहुत से बाहरी लोगों को शामिल करना।",
      "कठोर या व्यंग्य भरे शब्द।",
      "ग्रहण या बुध वक्री के दौरान बड़े संबंध-निर्णय।",
    ],
    remedyTitle: "संबंध उपाय",
    remedy: [
      "सोमवार को भगवान शिव और देवी पार्वती की साथ पूजा करें।",
      "शुक्रवार को सफेद मिठाई चढ़ाएँ।",
      "शनिवार को “ॐ राम राहवे नमः” 108 बार जपें, ताकि सप्तम भाव का राहु शांत हो।",
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
      className="relative mx-auto flex h-[50px] w-[86%] items-center justify-center rounded-[12px] px-5"
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

function NumberDiamond() {
  const ball = (n: string) => (
    <span
      className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-[22px] font-bold leading-none"
      style={{
        color: "#8E2A36",
        fontFamily: DISPLAY_FONT,
        background: "radial-gradient(circle at 35% 30%, #FFF8E8 0%, #F6DCA4 58%, #E2B86A 100%)",
        border: "1.6px solid #C4922E",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85), 0 1px 2px rgba(120,70,20,0.22)",
      }}
    >
      {n}
    </span>
  );
  return (
    <div className="relative h-[104px] w-[92px] shrink-0">
      <span className="absolute left-1/2 top-0 -translate-x-1/2">{ball("1")}</span>
      <span className="absolute left-0 top-[32px]">{ball("2")}</span>
      <span className="absolute right-0 top-[32px]">{ball("6")}</span>
      <span className="absolute left-1/2 top-[64px] -translate-x-1/2">{ball("3")}</span>
    </div>
  );
}

function RingsMark() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.3px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.85)" }}
    >
      <svg viewBox="0 0 28 28" className="h-6 w-6" fill="none" aria-hidden>
        <circle cx="11" cy="14" r="6.2" stroke="#C4922E" strokeWidth="1.7" />
        <circle cx="17" cy="14" r="6.2" stroke="#A56B32" strokeWidth="1.7" />
      </svg>
    </span>
  );
}

function SingleMark() {
  return (
    <span
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.3px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.85)" }}
    >
      <User size={18} strokeWidth={1.8} color={COLORS.goldDeep} />
      <Heart size={10} className="absolute right-0.5 top-0.5" fill="#C45A6A" color="#C45A6A" strokeWidth={1.5} />
    </span>
  );
}

function FocusMark({ icon }: { icon: FocusIcon }) {
  if (icon === "calendar") return <CalendarDays size={22} strokeWidth={1.7} color={COLORS.goldDeep} />;
  if (icon === "heart") return <Heart size={20} strokeWidth={1.7} color="#C45A6A" fill="#C45A6A" />;
  if (icon === "couple-heart") {
    return (
      <span className="relative inline-flex">
        <Users size={22} strokeWidth={1.7} color={COLORS.goldDeep} />
        <Heart size={9} className="absolute -right-1 -top-1" fill="#C45A6A" color="#C45A6A" />
      </span>
    );
  }
  return <Users size={22} strokeWidth={1.7} color={COLORS.goldDeep} />;
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={`mt-1 space-y-0.5 ${isHi ? "text-[11.5px] leading-[1.28]" : "text-[12px] leading-[1.28]"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasLoveCont({
  language = "en",
  pageNumber = "21",
  forecastYear = 2027,
}: LifeAreasLoveContProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-love-cont" padding="12px 16px 8px">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-2">
        <PageFrame />

        <header className="relative z-10 mt-2 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>

        <p
          className={`relative z-10 mt-1.5 shrink-0 px-8 text-center font-bold ${isHi ? "text-[13.5px] leading-[1.32]" : "text-[15.5px] leading-[1.28]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section className="relative z-10 mt-1.5 shrink-0 overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[34%]">
            <Image src={COUPLE} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "62% 42%" }} />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,248,236,1) 0%, rgba(255,248,236,0.35) 22%, rgba(255,248,236,0) 48%)",
              }}
            />
          </div>
          <div
            className="relative z-10 flex h-[34px] w-[68%] items-center gap-2 px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <Heart size={18} strokeWidth={1.8} color="#F6E6C4" fill="#F6E6C4" />
            <h3
              className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[18px]"}`}
              style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
            >
              {t.banner}
            </h3>
          </div>
          <div className="relative z-10 flex items-start gap-2.5 px-3 py-2 pr-[34%]">
            <NumberDiamond />
            <div className="min-w-0 pt-0.5">
              <h3
                className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`}
                style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
              >
                {t.numbersTitle}
              </h3>
              <p
                className={`mt-1 ${isHi ? "text-[11.5px] leading-[1.32]" : "text-[12.5px] leading-[1.3]"}`}
                style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
              >
                {t.numbers}
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative z-10 mt-1.5 grid shrink-0 grid-cols-2 rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.45)" }}
        >
          <StatusColumn title={t.marriedTitle} items={t.married} icon={<RingsMark />} isHi={isHi} divider />
          <StatusColumn title={t.singleTitle} items={t.single} icon={<SingleMark />} isHi={isHi} />
        </section>

        <section className="relative z-10 mt-1.5 flex min-h-0 flex-1 flex-col">
          <h3
            className={`shrink-0 px-1 font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.tableTitle}
          </h3>
          <div className="mt-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div
              className="grid shrink-0 grid-cols-[210px_minmax(0,1fr)] px-3 py-1 font-bold"
              style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              <span className={isHi ? "text-[12.5px]" : "text-[13.5px]"}>{t.window}</span>
              <span className={isHi ? "text-[12.5px]" : "text-[13.5px]"}>{t.focus}</span>
            </div>
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[36px] flex-1 grid-cols-[210px_minmax(0,1fr)] items-center px-3"
                style={{
                  borderTop: "1px solid rgba(198,163,90,0.45)",
                  background: index % 2 === 0 ? "rgba(255,248,236,0.45)" : "transparent",
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                    <FocusMark icon={row.icon} />
                  </span>
                  <span
                    className={`font-bold ${isHi ? "text-[12px]" : "text-[13px]"}`}
                    style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
                  >
                    {row.window}
                  </span>
                </span>
                <span className={isHi ? "text-[12px] leading-snug" : "text-[13px] leading-snug"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.focus}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1.5 grid shrink-0 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1.5 shrink-0 overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[34%]">
            <Image src={SHIVA} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "78% center" }} />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,248,236,1) 0%, rgba(255,248,236,0.55) 28%, rgba(255,248,236,0) 58%)",
              }}
            />
          </div>
          <div className="relative z-10 py-1.5 pl-3 pr-[36%]">
            <div className="flex items-center gap-2">
              <span
                className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]"
                style={{ border: `1.3px solid ${COLORS.gold}` }}
              >
                <Image src={PRAYER_ICON} alt="" fill sizes="36px" className="object-cover" style={{ objectPosition: "center 50%", transform: "scale(1.28)" }} />
              </span>
              <h3
                className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`}
                style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
              >
                {t.remedyTitle}
              </h3>
            </div>
            <BulletList items={t.remedy} isHi={isHi} />
          </div>
        </section>

        <div className="relative z-10 -mx-1 mt-1 shrink-0">
          <Image
            src={MOUNTAIN}
            alt=""
            width={1024}
            height={245}
            className="h-[72px] w-full object-cover object-center"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </ReportPageShell>
  );
}

function StatusColumn({
  title,
  items,
  icon,
  isHi,
  divider = false,
}: {
  title: string;
  items: readonly string[];
  icon: ReactNode;
  isHi: boolean;
  divider?: boolean;
}) {
  return (
    <div className="px-2.5 py-1.5" style={{ borderRight: divider ? `1.15px solid ${COLORS.gold}` : undefined }}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} />
    </div>
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
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={18} strokeWidth={2.6} /> : <X size={18} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
