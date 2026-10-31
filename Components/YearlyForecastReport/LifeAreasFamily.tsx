"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Check, Cog, Home, Users, X } from "lucide-react";
import { useId } from "react";
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

const FAMILY = "/assets/yearly-forecast-report/family-home.jpg";
const REMEDY = "/assets/yearly-forecast-report/home-remedy.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasFamilyProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "saturn" | "jupiter" | "home" | "gears" | "rahu";
type ChartIcon = "kundli" | "family" | "venus" | "sun";

type BringRow = {
  key: string;
  icon: RowIcon;
  date: string;
  sub?: string;
  body: string;
};

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Family and home",
    intro:
      "Home life starts the year heavy and ends it hopeful. Shani Dhaiya weighs on your peace of mind until 3 June. From October, Rahu Mahadasha makes home and property a major theme of your life.",
    chartTitle: "What your birth chart says",
    notes: [
      {
        key: "fourth",
        icon: "kundli" as const,
        text: "Your 4th house of home, mother and inner peace holds Jupiter and Rahu together. This shows big dreams for your home: a large, modern and comfortable space, and possibly a home in a new city one day.",
      },
      {
        key: "jupiter",
        icon: "family" as const,
        text: "Jupiter brings blessings through your mother, while Rahu can bring restlessness and high expectations at home.",
      },
      {
        key: "venus",
        icon: "venus" as const,
        text: "The lord of your 4th house, Venus, sits in your 3rd house, so siblings and close relatives play a supportive role.",
      },
      {
        key: "sun",
        icon: "sun" as const,
        text: "Your Sun in its own sign in the 2nd house shows strong family values and your father's influence on how you handle money.",
      },
    ],
    bringsTitle: "What 2027 brings",
    rows: [
      {
        key: "saturn",
        icon: "saturn",
        date: "Until 3 June 2027",
        sub: "(Shani Dhaiya)",
        body: "Saturn in the 4th house from your Moon brings responsibility at home, elders' needs, delays in home projects and some inner restlessness. Be patient.",
      },
      {
        key: "jupiter-1",
        icon: "jupiter",
        date: "25 January to\n26 June 2027",
        body: "Jupiter in your 1st house makes you the person your family turns to for advice. Use this role with calm and fairness.",
      },
      {
        key: "jupiter-2",
        icon: "home",
        date: "26 June to\n27 November 2027",
        body: "Jupiter in your 2nd house brings family harmony, gatherings and support. It is an excellent time for family functions and celebrations.",
      },
      {
        key: "repairs",
        icon: "gears",
        date: "3 June to\n20 October 2027",
        body: "Saturn looks at your 4th house, which calls for home repairs and duties linked to property. Do them properly; don't take shortcuts.",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "From 11 October 2027",
        sub: "(Rahu Mahadasha)",
        body: "Rahu Mahadasha activates your 4th house. You may feel an urge to shift, upgrade or redesign your home. Plan it well and avoid rushed decisions.",
      },
    ] satisfies BringRow[],
    doTitle: "Do",
    doItems: [
      "Take care of your parents and elders.",
      "Complete pending home repairs.",
      "Keep your home clean and organised.",
      "Plan property decisions with proper research.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Rushed property purchases.",
      "Arguments with family members.",
      "Ignoring the needs of parents or elders.",
      "Taking on loans without proper planning.",
    ],
    remedyTitle: "Home remedy",
    remedy: [
      "Light a ghee diya at home on Mondays for peace and harmony.",
      "Keep a Tulsi plant at home.",
      "Offer rice or white sweets at a nearby temple on Thursdays.",
      "Keep your home entrance clean, well-lit and free from clutter.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "परिवार और घर",
    intro:
      "घर का जीवन वर्ष की शुरुआत में भारी रहता है और अंत में आशावान। शनि ढैय्या 3 जून तक मन की शांति पर भार डालती है। अक्टूबर से राहु महादशा घर और संपत्ति को जीवन का बड़ा विषय बनाती है।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    notes: [
      {
        key: "fourth",
        icon: "kundli" as const,
        text: "घर, माता और आंतरिक शांति के चतुर्थ भाव में गुरु और राहु एक साथ हैं। यह घर के बड़े सपने दिखाता है: बड़ा, आधुनिक और आरामदायक स्थान, और एक दिन नए शहर में घर।",
      },
      {
        key: "jupiter",
        icon: "family" as const,
        text: "गुरु माता के माध्यम से आशीर्वाद लाते हैं, जबकि राहु घर में बेचैनी और ऊँची अपेक्षाएँ ला सकते हैं।",
      },
      {
        key: "venus",
        icon: "venus" as const,
        text: "चतुर्थ भाव के स्वामी शुक्र तृतीय भाव में बैठे हैं, इसलिए भाई-बहन और निकट संबंधी सहायक भूमिका निभाते हैं।",
      },
      {
        key: "sun",
        icon: "sun" as const,
        text: "अपनी राशि में द्वितीय भाव का सूर्य मजबूत पारिवारिक मूल्य और धन संभालने पर पिता का प्रभाव दिखाता है।",
      },
    ],
    bringsTitle: "2027 क्या लाता है",
    rows: [
      {
        key: "saturn",
        icon: "saturn",
        date: "3 जून 2027 तक",
        sub: "(शनि ढैय्या)",
        body: "चंद्र से चतुर्थ भाव का शनि घर पर ज़िम्मेदारी, बड़ों की ज़रूरतें, घर के काम में देरी और कुछ आंतरिक बेचैनी लाता है। धैर्य रखें।",
      },
      {
        key: "jupiter-1",
        icon: "jupiter",
        date: "25 जनवरी से\n26 जून 2027",
        body: "प्रथम भाव का गुरु आपको वह व्यक्ति बनाता है जिससे परिवार सलाह लेता है। यह भूमिका शांत और निष्पक्ष भाव से निभाएँ।",
      },
      {
        key: "jupiter-2",
        icon: "home",
        date: "26 जून से\n27 नवंबर 2027",
        body: "द्वितीय भाव का गुरु परिवार में सामंजस्य, मिलन और सहारा लाता है। पारिवारिक कार्यक्रमों का उत्तम समय है।",
      },
      {
        key: "repairs",
        icon: "gears",
        date: "3 जून से\n20 अक्टूबर 2027",
        body: "शनि आपके चतुर्थ भाव को देखते हैं, जिससे घर की मरम्मत और संपत्ति के कर्तव्य सामने आते हैं। इन्हें ठीक से करें।",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "11 अक्टूबर 2027 से",
        sub: "(राहु महादशा)",
        body: "राहु महादशा चतुर्थ भाव को सक्रिय करती है। घर बदलने या नया रूप देने की इच्छा हो सकती है। योजना बनाएँ और जल्दबाज़ी से बचें।",
      },
    ] satisfies BringRow[],
    doTitle: "करें",
    doItems: [
      "माता-पिता और बड़ों की देखभाल करें।",
      "घर की रुकी मरम्मत पूरी करें।",
      "घर साफ और व्यवस्थित रखें।",
      "संपत्ति के निर्णय उचित खोज के साथ लें।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "जल्दबाज़ी में संपत्ति खरीदना।",
      "परिवारजनों से विवाद।",
      "माता-पिता या बड़ों की ज़रूरतों को अनदेखा करना।",
      "उचित योजना के बिना ऋण लेना।",
    ],
    remedyTitle: "घर का उपाय",
    remedy: [
      "शांति के लिए सोमवार को घर में घी का दीया जलाएँ।",
      "घर में तुलसी का पौधा रखें।",
      "गुरुवार को पास के मंदिर में चावल या सफेद मिठाई चढ़ाएँ।",
      "घर का प्रवेश साफ, रोशन और अव्यवस्था से मुक्त रखें।",
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
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden>
      <rect x="4" y="4" width="32" height="32" stroke="#B8893A" strokeWidth="1.3" fill="rgba(248,231,196,0.35)" />
      <path d="M4 4L36 36M36 4L4 36M20 4v32M4 20h32" stroke="#A56B32" strokeWidth="0.85" />
      <path d="M20 4L36 20L20 36L4 20Z" stroke="#8E2A36" strokeWidth="1.15" />
    </svg>
  );
}

function VenusMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" stroke={COLORS.goldDeep} strokeWidth="1.6" />
      <path d="M12 14v7M9.2 18h5.6" stroke={COLORS.goldDeep} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SunMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
      <circle cx="14" cy="14" r="5" fill={`url(#fam-sun-${uid})`} />
      <defs>
        <radialGradient id={`fam-sun-${uid}`} cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFE7A8" />
          <stop offset="100%" stopColor="#E0A04A" />
        </radialGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={14 + Math.cos(a) * 8}
            y1={14 + Math.sin(a) * 8}
            x2={14 + Math.cos(a) * 12}
            y2={14 + Math.sin(a) * 12}
            stroke="#E2B04A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function SaturnMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden>
      <defs>
        <radialGradient id={`fam-sat-${uid}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="100%" stopColor="#8A6A40" />
        </radialGradient>
      </defs>
      <ellipse cx="20" cy="16" rx="16" ry="5" transform="rotate(-22 20 16)" fill="none" stroke="#C4922E" strokeWidth="2.2" />
      <circle cx="20" cy="16" r="7.2" fill={`url(#fam-sat-${uid})`} />
    </svg>
  );
}

function JupiterMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <defs>
        <radialGradient id={`fam-jup-${uid}`} cx="34%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#F8D7A4" />
          <stop offset="100%" stopColor="#A85A28" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="11" fill={`url(#fam-jup-${uid})`} />
      <ellipse cx="16" cy="12" rx="9" ry="1.2" fill="#F3D7A8" opacity="0.55" />
      <ellipse cx="16" cy="16" rx="10" ry="1.15" fill="#C47A3A" opacity="0.5" />
      <ellipse cx="16" cy="20" rx="8" ry="1.1" fill="#8E4E24" opacity="0.45" />
    </svg>
  );
}

function RahuMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
      <path d="M8 19c0-5 3.4-8 7.2-8 2.6 0 4.4 1.2 5.2 2.6 1-2 2.8-3.3 5-2.5 1.7.6 2.6 2.3 2.2 4-.5 1.8-2 3.1-4 3.3" stroke="#C6A35A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 13c0 5-3.4 8-7.2 8-2.6 0-4.4-1.2-5.2-2.6-1 2-2.8 3.3-5 2.5-1.7-.6-2.6-2.3-2.2-4 .5-1.8 2-3.1 4-3.3" stroke="#A67C32" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1.7" fill="#C6A35A" />
    </svg>
  );
}

function ChartMark({ icon }: { icon: ChartIcon }) {
  const inner =
    icon === "kundli" ? (
      <KundliMark />
    ) : icon === "family" ? (
      <Users size={18} strokeWidth={1.7} color={COLORS.goldDeep} />
    ) : icon === "venus" ? (
      <VenusMark />
    ) : (
      <SunMark />
    );
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.2px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.8)" }}
    >
      {inner}
    </span>
  );
}

function RowMark({ icon }: { icon: RowIcon }) {
  if (icon === "saturn") return <SaturnMark />;
  if (icon === "jupiter") return <JupiterMark />;
  if (icon === "home") return <Home size={22} strokeWidth={1.7} color={COLORS.goldDeep} />;
  if (icon === "gears") return <Cog size={22} strokeWidth={1.7} color={COLORS.goldDeep} />;
  return <RahuMark />;
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={`mt-0.5 space-y-0 ${isHi ? "text-[11px] leading-[1.25]" : "text-[11.5px] leading-[1.24]"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasFamily({
  language = "en",
  pageNumber = "22",
  forecastYear = 2027,
}: LifeAreasFamilyProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-family" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-2">
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

        <section
          className="relative z-10 mt-1.5 grid shrink-0 grid-cols-[minmax(0,1fr)_268px] overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <div className="min-w-0">
            <div
              className="flex h-[32px] items-center gap-2 px-3"
              style={{
                background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
                boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
              }}
            >
              <Home size={16} strokeWidth={1.8} color="#F6E6C4" />
              <h3
                className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[18px]"}`}
                style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
              >
                {t.banner}
              </h3>
            </div>
            <p
              className={`px-3 py-2 ${isHi ? "text-[12px] leading-[1.32]" : "text-[13px] leading-[1.32]"}`}
              style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
            >
              {t.intro}
            </p>
          </div>
          <div className="relative min-h-[168px]">
            <Image src={FAMILY} alt="" fill sizes="320px" className="object-cover" style={{ objectPosition: "58% 62%" }} />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-6"
              style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95) 0%, rgba(255,248,236,0) 100%)" }}
            />
          </div>
        </section>

        <section className="relative z-10 mt-1.5 shrink-0">
          <h3
            className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.chartTitle}
          </h3>
          <div className="mt-1 grid grid-cols-4">
            {t.notes.map((note, index) => (
              <div
                key={note.key}
                className="flex items-start gap-1.5 px-1.5"
                style={{ borderLeft: index === 0 ? "none" : `1px solid ${COLORS.gold}` }}
              >
                <ChartMark icon={note.icon} />
                <p className={isHi ? "text-[10.5px] leading-[1.25]" : "text-[11px] leading-[1.24]"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 mt-1.5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div
            className="flex h-[30px] shrink-0 items-center px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
              {t.bringsTitle}
            </h3>
          </div>
          <div className="flex min-h-0 flex-1 flex-col px-1 py-0.5">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="flex min-h-0 flex-1 items-center gap-2 px-1"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.4)" }}
              >
                <span className="flex w-11 shrink-0 justify-center">
                  <RowMark icon={row.icon} />
                </span>
                <p
                  className={`w-[118px] shrink-0 whitespace-pre-line rounded-[4px] px-1.5 py-0.5 text-center font-bold leading-[1.12] ${isHi ? "text-[10.5px]" : "text-[11px]"}`}
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
                      <span className="font-bold">{row.sub}</span>
                    </>
                  ) : null}
                </p>
                <p className={`min-w-0 flex-1 ${isHi ? "text-[11px] leading-[1.24]" : "text-[12px] leading-[1.24]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1.5 grid shrink-0 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1.5 grid shrink-0 grid-cols-[minmax(0,1fr)_248px] overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="min-w-0 py-1.5 pl-3 pr-2">
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
          <div className="relative min-h-[146px]">
            <Image src={REMEDY} alt="" fill sizes="300px" className="object-cover" style={{ objectPosition: "center 46%" }} />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-5"
              style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95) 0%, rgba(255,248,236,0) 100%)" }}
            />
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
  return (
    <section
      className="rounded-[3px] px-2.5 py-1"
      style={{ border: `1.2px solid ${color}`, background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)" }}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={16} strokeWidth={2.6} /> : <X size={16} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[15px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
