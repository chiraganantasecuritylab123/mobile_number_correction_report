"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Check, Heart, X } from "lucide-react";
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
  date: "#7E3040",
  ink: "#2C3A66",
  green: "#2F7D4F",
  red: "#C04545",
} as const;

const COUPLE = "/assets/yearly-forecast-report/love-couple.jpg";
const REMEDY_ART = "/assets/yearly-forecast-report/love-remedy.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasLoveProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type LoveIcon = "infinity" | "jupiter" | "eclipse" | "saturn" | "rahu";

type LoveRow = {
  key: string;
  icon: LoveIcon;
  date: string;
  sub?: string;
  body: string;
};

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Love and marriage",
    intro:
      "Partnerships are the most intense area of your year, because Rahu moves through your 7th house of marriage for all of 2027. With patience and honest talk, this intensity can deepen your bond rather than strain it.",
    chartTitle: "What your birth chart says",
    saturn:
      "The lord of your 7th house, Saturn, sits in your 8th house. Your relationships grow slowly and become deep over time, and they reward loyalty and maturity more than excitement.",
    venus:
      "Venus, the planet of love, sits in Virgo in your 3rd house. You show love through practical care and helping your partner, but you can be critical without meaning to be, so choose your words gently.",
    moon: "Your Moon in Sagittarius needs honesty and some personal freedom in a relationship.",
    bringsTitle: "What 2027 brings",
    rows: [
      {
        key: "rahu-year",
        icon: "infinity",
        date: "All year",
        sub: "(Rahu in 7th house)",
        body: "Rahu in your 7th house brings strong attraction and high expectations. It can also bring misunderstandings and outside opinions into your relationship, so keep the circle of advice small.",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "25 January to\n26 June 2027",
        sub: "(Jupiter's aspect)",
        body: "Jupiter, exalted in your 1st house, looks directly at your 7th house. This is the most protective period for relationships. It is a good time to resolve old issues, and for singles to receive serious proposals.",
      },
      {
        key: "eclipse",
        icon: "eclipse",
        date: "Week of\n6 February 2027",
        sub: "(Solar eclipse)",
        body: "A solar eclipse falls in your 7th house sign. Avoid major relationship decisions and arguments over small things.",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 June to\n20 October 2027",
        sub: "(Saturn in 10th house)",
        body: "Saturn in your 10th house also looks at your 7th house. Work pressure can enter your personal life, so protect couple time.",
      },
      {
        key: "mahadasha",
        icon: "rahu",
        date: "From 11 October 2027",
        sub: "(Rahu Mahadasha)",
        body: "Rahu Mahadasha makes you more ambitious and busy. Make sure your partner feels part of your plans.",
      },
    ] satisfies LoveRow[],
    doTitle: "Do",
    doItems: [
      "Communicate honestly and patiently.",
      "Give quality time to your partner.",
      "Keep the circle of advice small.",
      "Respect each other's personal space.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Arguments over small things.",
      "Letting work stress affect your relationship.",
      "Quick decisions during the 6 February eclipse.",
      "Getting influenced by outside opinions.",
    ],
    remedyTitle: "Love remedy",
    remedy: [
      "On Fridays, offer a white flower to Goddess Lakshmi and pray for harmony.",
      "Spend some quality time together every week without phones.",
      "Keep a rose quartz or a pair of rose quartz crystals in your bedroom.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "प्रेम और विवाह",
    intro:
      "इस वर्ष साझेदारी सबसे तीव्र क्षेत्र है, क्योंकि राहु पूरे 2027 आपके विवाह के सप्तम भाव से गुजरते हैं। धैर्य और ईमानदार बातचीत से यह तीव्रता बंधन को तनाव के बजाय गहरा कर सकती है।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    saturn:
      "आपके सप्तम भाव के स्वामी शनि अष्टम भाव में बैठे हैं। आपके संबंध धीरे बढ़ते हैं और समय के साथ गहरे होते हैं, और वे उत्तेजना से अधिक निष्ठा और परिपक्वता का फल देते हैं।",
    venus:
      "प्रेम के ग्रह शुक्र आपके तृतीय भाव में कन्या राशि में बैठे हैं। आप व्यावहारिक देखभाल और साथी की मदद से प्रेम दिखाते हैं, पर अनजाने में आलोचनात्मक हो सकते हैं, इसलिए शब्द कोमल चुनें।",
    moon: "धनु राशि का आपका चंद्र संबंध में ईमानदारी और कुछ व्यक्तिगत स्वतंत्रता चाहता है।",
    bringsTitle: "2027 क्या लाता है",
    rows: [
      {
        key: "rahu-year",
        icon: "infinity",
        date: "पूरा वर्ष",
        sub: "(सप्तम में राहु)",
        body: "सप्तम भाव का राहु गहरा आकर्षण और ऊँची अपेक्षाएँ लाता है। यह गलतफहमी और बाहरी राय भी ला सकता है, इसलिए सलाह का घेरा छोटा रखें।",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "25 जनवरी से\n26 जून 2027",
        sub: "(गुरु की दृष्टि)",
        body: "गुरु आपके प्रथम भाव में उच्च के हैं और सीधे सप्तम भाव को देखते हैं। यह संबंधों की सबसे सुरक्षात्मक अवधि है। पुराने मुद्दे सुलझाने का अच्छा समय है, और अविवाहितों को गंभीर प्रस्ताव मिल सकते हैं।",
      },
      {
        key: "eclipse",
        icon: "eclipse",
        date: "6 फरवरी 2027\nका सप्ताह",
        sub: "(सूर्य ग्रहण)",
        body: "आपकी सप्तम राशि में सूर्य ग्रहण पड़ता है। बड़े संबंध-निर्णय और छोटी बातों पर विवाद से बचें।",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 जून से\n20 अक्टूबर 2027",
        sub: "(दशम में शनि)",
        body: "दशम भाव का शनि सप्तम भाव को भी देखता है। काम का दबाव निजी जीवन में आ सकता है, इसलिए साथ का समय सुरक्षित रखें।",
      },
      {
        key: "mahadasha",
        icon: "rahu",
        date: "11 अक्टूबर 2027 से",
        sub: "(राहु महादशा)",
        body: "राहु महादशा आपको अधिक महत्वाकांक्षी और व्यस्त बनाती है। सुनिश्चित करें कि आपका साथी आपकी योजनाओं का हिस्सा महसूस करे।",
      },
    ] satisfies LoveRow[],
    doTitle: "करें",
    doItems: [
      "ईमानदारी और धैर्य से बात करें।",
      "साथी को अच्छा समय दें।",
      "सलाह का घेरा छोटा रखें।",
      "एक-दूसरे का निजी स्थान मानें।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "छोटी बातों पर विवाद।",
      "काम का तनाव संबंध को प्रभावित करने देना।",
      "6 फरवरी के ग्रहण के दौरान जल्दी निर्णय।",
      "बाहरी रायों से प्रभावित होना।",
    ],
    remedyTitle: "प्रेम उपाय",
    remedy: [
      "शुक्रवार को देवी लक्ष्मी को एक सफेद फूल चढ़ाएँ और सामंजस्य की प्रार्थना करें।",
      "हर सप्ताह बिना फ़ोन के साथ कुछ अच्छा समय बिताएँ।",
      "शयनकक्ष में एक गुलाब क्वार्ट्ज़ या गुलाब क्वार्ट्ज़ की जोड़ी रखें।",
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

function KundliMark() {
  return (
    <svg viewBox="0 0 46 46" className="h-10 w-10 shrink-0" fill="none" aria-hidden>
      <rect x="5" y="5" width="36" height="36" stroke="#B8893A" strokeWidth="1.35" fill="rgba(248,231,196,0.35)" />
      <path d="M5 5L41 41M41 5L5 41M23 5v36M5 23h36" stroke="#A56B32" strokeWidth="0.9" />
      <path d="M23 5L41 23L23 41L5 23Z" stroke="#8E2A36" strokeWidth="1.25" />
    </svg>
  );
}

function VenusMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5.2" stroke={COLORS.goldDeep} strokeWidth="1.7" />
      <path d="M12 14.2V21M9.2 18.2h5.6" stroke={COLORS.goldDeep} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MoonMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M15 4.5c-5 1.2-8 6-6.6 11 1.2 4.4 5.6 7 10.2 5.8-4.2 2.6-10 .8-12.2-3.6C4 13.2 6 7.2 11.4 5c1.4-.6 2.6-.7 3.6-.5Z" fill="#E8C56E" />
    </svg>
  );
}

function InfinityMark() {
  return (
    <svg viewBox="0 0 40 24" className="h-11 w-14" fill="none" aria-hidden>
      <path
        d="M10 12c0-3.2 2.2-5.4 4.6-5.4 2.8 0 3.8 2.2 5.4 5.4s2.6 5.4 5.4 5.4c2.4 0 4.6-2.2 4.6-5.4S28 6.6 25.4 6.6c-2.8 0-3.8 2.2-5.4 5.4S17.4 17.4 14.6 17.4C12.2 17.4 10 15.2 10 12Z"
        stroke="#C4922E"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function JupiterGlyph() {
  const uid = useId().replace(/:/g, "");
  const id = `love-jup-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12" aria-hidden>
      <defs>
        <radialGradient id={id} cx="34%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#F8D7A4" />
          <stop offset="40%" stopColor="#E0A05A" />
          <stop offset="100%" stopColor="#A85A28" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="13" fill={`url(#${id})`} />
      <ellipse cx="20" cy="15" rx="11" ry="1.5" fill="#F3D7A8" opacity="0.55" />
      <ellipse cx="20" cy="20" rx="12" ry="1.4" fill="#C47A3A" opacity="0.45" />
      <ellipse cx="20" cy="25" rx="10" ry="1.4" fill="#8E4E24" opacity="0.4" />
    </svg>
  );
}

function EclipseGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12" aria-hidden>
      <circle cx="20" cy="20" r="12" fill="#2A2418" />
      <path d="M22 9.2a12 12 0 0 0 0 21.6 9.2 9.2 0 0 1 0-21.6Z" fill="#E8C56E" />
    </svg>
  );
}

function SaturnGlyph() {
  const uid = useId().replace(/:/g, "");
  const body = `love-sat-${uid}`;
  return (
    <svg viewBox="0 0 46 36" className="h-11 w-14" aria-hidden>
      <defs>
        <radialGradient id={body} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="50%" stopColor="#C9A15A" />
          <stop offset="100%" stopColor="#7E6248" />
        </radialGradient>
      </defs>
      <ellipse cx="23" cy="18" rx="17" ry="5" transform="rotate(-22 23 18)" fill="none" stroke="#E2C48A" strokeWidth="2" />
      <circle cx="23" cy="18" r="7.6" fill={`url(#${body})`} />
    </svg>
  );
}

function RahuGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12" fill="none" aria-hidden>
      <path
        d="M11 24.5c0-6.2 4.2-10.2 9-10.2 3.4 0 5.6 1.6 6.6 3.4 1.2-2.6 3.6-4.2 6.4-3.2 2.2.8 3.4 3 2.8 5.2-.6 2.4-2.6 4-5.2 4.2"
        stroke="#C6A35A"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M29 15.5c0 6.2-4.2 10.2-9 10.2-3.4 0-5.6-1.6-6.6-3.4-1.2 2.6-3.6 4.2-6.4 3.2-2.2-.8-3.4-3-2.8-5.2.6-2.4 2.6-4 5.2-4.2"
        stroke="#A67C32"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2.1" fill="#C6A35A" />
    </svg>
  );
}

function LoveMark({ icon }: { icon: LoveIcon }) {
  if (icon === "infinity") return <InfinityMark />;
  if (icon === "jupiter") return <JupiterGlyph />;
  if (icon === "eclipse") return <EclipseGlyph />;
  if (icon === "saturn") return <SaturnGlyph />;
  return <RahuGlyph />;
}

function NoteIcon({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.2px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.75)" }}
    >
      {children}
    </span>
  );
}

export default function LifeAreasLove({
  language = "en",
  pageNumber = "20",
  forecastYear = 2027,
}: LifeAreasLoveProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;
  const bodyType = isHi ? "text-[12px] leading-[1.32]" : "text-[12.5px] leading-[1.3]";
  const chartType = isHi ? "text-[11px] leading-[1.22]" : "text-[11.5px] leading-[1.22]";

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-love" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-2">

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
          className="relative z-10 mt-1.5 shrink-0 overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <div
            className="relative z-10 flex h-[34px] items-center gap-2 px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <Heart size={18} strokeWidth={1.8} color="#F6E6C4" fill="#F6E6C4" />
            <h3
              className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
              style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
            >
              {t.banner}
            </h3>
          </div>
          <div className="relative h-[100px] ">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[22%]">
              <Image src={COUPLE} alt="" width={200} height={420} sizes="360px" className="object-cover" style={{ objectPosition: "64% 56%" }} />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgba(255,248,236,1) 0%, rgba(255,248,236,0.55) 28%, rgba(255,248,236,0) 62%)",
                }}
              />
            </div>
            <p className={`relative z-10 max-w-[58%] px-3 py-2.5 ${bodyType}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
              {t.intro}
            </p>
          </div>
        </section>

        <section className="relative z-10 mt-1 shrink-0">
          <h3
            className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.chartTitle}
          </h3>
          <div className="mt-0.5 grid grid-cols-3 items-start">
            <div className="flex items-start gap-1.5 pr-2" style={{ borderRight: `1.15px solid ${COLORS.gold}` }}>
              <KundliMark />
              <p className={chartType} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                {t.saturn}
              </p>
            </div>
            <div className="flex items-start gap-1.5 px-2" style={{ borderRight: `1.15px solid ${COLORS.gold}` }}>
              <NoteIcon>
                <VenusMark />
              </NoteIcon>
              <p className={chartType} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                {t.venus}
              </p>
            </div>
            <div className="flex items-start gap-1.5 pl-2">
              <NoteIcon>
                <MoonMark />
              </NoteIcon>
              <p className={chartType} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                {t.moon}
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative z-10 mt-1 flex flex-1 flex-col rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <div
            className="flex h-[32px] shrink-0 items-center px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <h3
              className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[18px]"}`}
              style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
            >
              {t.bringsTitle}
            </h3>
          </div>
          <div className="relative flex min-h-0 flex-1 flex-col px-1 py-1">
            <div className="pointer-events-none absolute bottom-3 left-[34px] top-3 w-px" style={{ background: COLORS.gold }} />
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="relative z-10 flex min-h-0 flex-1 items-center gap-2 px-1 py-1.5"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.35)" }}
              >
                <span className="flex w-14 shrink-0 justify-center bg-[rgba(253,245,230,0.92)]">
                  <LoveMark icon={row.icon} />
                </span>
                <p
                  className={`w-[128px] shrink-0 whitespace-pre-line rounded-[4px] px-1 py-0.5 text-center font-bold leading-[1.12] ${isHi ? "text-[11px]" : "text-[11.5px]"}`}
                  style={{
                    color: COLORS.date,
                    fontFamily: DISPLAY_FONT,
                    border: `1px solid ${COLORS.gold}`,
                    background: "rgba(255,248,236,0.72)",
                  }}
                >
                  {row.date}
                  {row.sub ? (
                    <>
                      {"\n"}
                      <span className={isHi ? "text-[10px]" : "text-[10.5px]"}>{row.sub}</span>
                    </>
                  ) : null}
                </p>
                <p className={`min-w-0 flex-1 ${bodyType}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1 grid shrink-0 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1 shrink-0 overflow-hidden rounded-[3px] h-[120px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[24%]">
            <Image src={REMEDY_ART} alt="" width={200} height={420} sizes="280px" className="object-cover" style={{ objectPosition: "right center" }} />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,248,236,1) 0%, rgba(255,248,236,0.82) 26%, rgba(255,248,236,0) 58%)",
              }}
            />
          </div>
          <div className="relative z-10 py-1 pl-3 pr-[190px]">
            <div className="flex items-center gap-2">
              <span
                className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]"
                style={{ border: `1.3px solid ${COLORS.gold}` }}
              >
                <Image
                  src={PRAYER_ICON}
                  alt=""
                  fill
                  sizes="40px"
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
            <ul className={`mt-1 space-y-0.5 ${bodyType}`}>
              {t.remedy.map((item) => (
                <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ background: COLORS.goldDeep }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
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
  const text = isHi ? "text-[11.5px] leading-[1.22]" : "text-[12px] leading-[1.2]";
  return (
    <section
      className="rounded-[3px] px-2 py-0.5"
      style={{
        border: `1.2px solid ${color}`,
        background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={18} strokeWidth={2.6} /> : <X size={18} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[15px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <ul className={`mt-0.5 space-y-0 ${text}`}>
        {items.map((item) => (
          <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
            <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
