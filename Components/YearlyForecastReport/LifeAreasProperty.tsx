"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Check, Home, X } from "lucide-react";
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

const HOME = "/assets/yearly-forecast-report/property-home.jpg";
const REMEDY = "/assets/yearly-forecast-report/property-remedy.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasPropertyProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "saturn" | "home" | "jupiter" | "rahu" | "mercury" | "eclipse";
type ChartIcon = "kundli" | "saturn" | "venus" | "mars";

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
    banner: "Property and vehicle",
    intro:
      "2027 is a year to research and prepare for property. The best buying windows are July, September and late November, and a stronger property phase follows in the Rahu years ahead.",
    chartTitle: "What your birth chart says",
    notes: [
      {
        key: "fourth",
        icon: "kundli" as const,
        text: "Your 4th house rules property, land and vehicles, and it holds Jupiter and Rahu together. This is a strong placement for owning property, often more than one over your lifetime.",
      },
      {
        key: "saturn",
        icon: "saturn" as const,
        text: "It points to a modern, large property, possibly in a new city. Jupiter brings support and blessings, while Rahu gives ambition for a bigger and better home.",
      },
      {
        key: "venus",
        icon: "venus" as const,
        text: "The lord of your 4th house, Venus, sits in Virgo in your 3rd house, so paperwork and fine print need extra care in every deal.",
      },
      {
        key: "mars",
        icon: "mars" as const,
        text: "Mars, the significator of land, rules your 5th and 10th houses, so your property will mainly come from your career and business earnings.",
      },
    ],
    bringsTitle: "What 2027 brings",
    rows: [
      {
        key: "dhaiya",
        icon: "saturn",
        date: "Until 3 June 2027",
        sub: "(Shani Dhaiya)",
        body: "Shani Dhaiya affects home matters. Avoid buying, because delays and paperwork problems are likely. Use this time for research.",
      },
      {
        key: "repairs",
        icon: "home",
        date: "3 June to\n20 October 2027",
        body: "Saturn looks at your 4th house. Renovation and repairs go well if done carefully and slowly. Expect registration and approvals to take time.",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "26 June to\n27 November 2027",
        body: "Jupiter in your 2nd house increases your savings, which helps with a down payment or a home loan.",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "From 11 October 2027",
        sub: "(Rahu Mahadasha)",
        body: "Rahu Mahadasha activates your 4th house. A new home, plot or vehicle becomes a strong possibility in the coming years.",
      },
      {
        key: "mercury",
        icon: "mercury",
        date: "Mercury retrograde",
        sub: "(10 Feb–4 Mar, 11 Jun–5 Jul,\n8–29 Oct 2027)",
        body: "Don't sign agreements or register property in these windows.",
      },
      {
        key: "eclipse",
        icon: "eclipse",
        date: "Around 2 August 2027",
        sub: "(Solar eclipse)",
        body: "Avoid registry, booking or token payments in the eclipse week.",
      },
    ] satisfies BringRow[],
    doTitle: "Do",
    doItems: [
      "Use the first half of the year for research and planning.",
      "Get legal and financial advice before buying.",
      "Keep all documents and payments in writing.",
      "Check the property's vastu and location carefully.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Buying property before June.",
      "Signing agreements during Mercury retrograde.",
      "Rushed decisions or verbal deals.",
      "Ignoring paperwork, hidden costs or legal checks.",
    ],
    remedyTitle: "Property remedy",
    remedy: [
      "Worship Lord Vishnu on Thursdays for stability and support.",
      "Offer yellow flowers and chana dal.",
      "Keep a small piece of raw pyrite or a Shri Yantra at home or workplace to attract prosperity and property opportunities.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "संपत्ति और वाहन",
    intro:
      "2027 संपत्ति की खोज और तैयारी का वर्ष है। खरीद के उत्तम समय जुलाई, सितंबर और नवंबर का अंत हैं। राहु वर्षों में संपत्ति का मज़बूत चरण आगे आता है।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    notes: [
      {
        key: "fourth",
        icon: "kundli" as const,
        text: "चतुर्थ भाव संपत्ति, भूमि और वाहन का है, और इसमें गुरु व राहु एक साथ हैं। यह संपत्ति का मज़बूत योग है, अक्सर जीवन में एक से अधिक।",
      },
      {
        key: "saturn",
        icon: "saturn" as const,
        text: "यह आधुनिक, बड़ी संपत्ति दिखाता है, संभवतः नए शहर में। गुरु सहारा देते हैं और राहु बड़े घर की महत्वाकांक्षा देते हैं।",
      },
      {
        key: "venus",
        icon: "venus" as const,
        text: "चतुर्थ भाव के स्वामी शुक्र कन्या में तृतीय भाव में हैं, इसलिए हर सौदे में कागज़ात पर अतिरिक्त ध्यान दें।",
      },
      {
        key: "mars",
        icon: "mars" as const,
        text: "भूमि के कारक मंगल पंचम और दशम भाव के स्वामी हैं, इसलिए संपत्ति मुख्यतः करियर और व्यापार की कमाई से आएगी।",
      },
    ],
    bringsTitle: "2027 क्या लाता है",
    rows: [
      {
        key: "dhaiya",
        icon: "saturn",
        date: "3 जून 2027 तक",
        sub: "(शनि ढैय्या)",
        body: "शनि ढैय्या घर के मामलों को प्रभावित करती है। खरीद से बचें; देरी और कागज़ी अड़चन संभव है। यह समय खोज के लिए रखें।",
      },
      {
        key: "repairs",
        icon: "home",
        date: "3 जून से\n20 अक्टूबर 2027",
        body: "शनि चतुर्थ भाव को देखते हैं। मरम्मत धीरे और सावधानी से अच्छी रहती है। रजिस्ट्री और मंजूरी में समय लगेगा।",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "26 जून से\n27 नवंबर 2027",
        body: "द्वितीय भाव का गुरु बचत बढ़ाता है, जो डाउन पेमेंट या गृह ऋण में मदद करता है।",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "11 अक्टूबर 2027 से",
        sub: "(राहु महादशा)",
        body: "राहु महादशा चतुर्थ भाव को सक्रिय करती है। आने वाले वर्षों में नया घर, प्लॉट या वाहन की प्रबल संभावना है।",
      },
      {
        key: "mercury",
        icon: "mercury",
        date: "बुध वक्री",
        sub: "(10 फर–4 मार्च, 11 जून–5 जुल,\n8–29 अक्टू 2027)",
        body: "इन अवधियों में समझौते पर हस्ताक्षर या संपत्ति की रजिस्ट्री न करें।",
      },
      {
        key: "eclipse",
        icon: "eclipse",
        date: "लगभग 2 अगस्त 2027",
        sub: "(सूर्य ग्रहण)",
        body: "ग्रहण सप्ताह में रजिस्ट्री, बुकिंग या टोकन भुगतान से बचें।",
      },
    ] satisfies BringRow[],
    doTitle: "करें",
    doItems: [
      "वर्ष का पहला भाग खोज और योजना में लगाएँ।",
      "खरीद से पहले कानूनी और वित्तीय सलाह लें।",
      "सभी दस्तावेज़ और भुगतान लिखित रखें।",
      "संपत्ति का वास्तु और स्थान ध्यान से देखें।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "जून से पहले संपत्ति खरीदना।",
      "बुध वक्री में समझौतों पर हस्ताक्षर।",
      "जल्दबाज़ी के निर्णय या मौखिक सौदे।",
      "कागज़ात, छिपी लागत या कानूनी जाँच को छोड़ना।",
    ],
    remedyTitle: "संपत्ति उपाय",
    remedy: [
      "स्थिरता के लिए गुरुवार को भगवान विष्णु की पूजा करें।",
      "पीले फूल और चना दाल चढ़ाएँ।",
      "समृद्धि के लिए घर या कार्यस्थल पर कच्चा पाइराइट या श्री यंत्र रखें।",
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
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[22px] w-[22px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[22px] w-[22px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[22px] w-[22px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[22px] w-[22px] -scale-x-100 -scale-y-100" />
      <h2 className={`text-center font-bold leading-none ${isHi ? "text-[19px]" : "text-[24px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {title}
      </h2>
    </div>
  );
}

function KundliMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" aria-hidden>
      <rect x="4" y="4" width="32" height="32" stroke="#B8893A" strokeWidth="1.3" />
      <path d="M4 4L36 36M36 4L4 36M20 4v32M4 20h32" stroke="#A56B32" strokeWidth="0.85" />
      <path d="M20 4L36 20L20 36L4 20Z" stroke="#8E2A36" strokeWidth="1.15" />
    </svg>
  );
}

function SaturnBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <circle cx="12" cy="13" r="4.2" stroke={COLORS.goldDeep} strokeWidth="1.5" />
      <ellipse cx="12" cy="13" rx="8" ry="2.6" transform="rotate(-28 12 13)" stroke={COLORS.goldDeep} strokeWidth="1.35" />
    </svg>
  );
}

function VenusMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" stroke={COLORS.goldDeep} strokeWidth="1.6" />
      <path d="M12 14v7M9.2 18h5.6" stroke={COLORS.goldDeep} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MarsMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <circle cx="9.5" cy="14.5" r="5" stroke={COLORS.goldDeep} strokeWidth="1.6" />
      <path d="M13.2 10.8 19 5M19 5h-5.2M19 5v5.2" stroke={COLORS.goldDeep} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChartMark({ icon }: { icon: ChartIcon }) {
  const inner = icon === "kundli" ? <KundliMark /> : icon === "saturn" ? <SaturnBadge /> : icon === "venus" ? <VenusMark /> : <MarsMark />;
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ border: `1.2px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.8)" }}>
      {inner}
    </span>
  );
}

function SaturnMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 40 32" className="h-9 w-12" aria-hidden>
      <defs>
        <radialGradient id={`prop-sat-${uid}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="100%" stopColor="#8A6A40" />
        </radialGradient>
      </defs>
      <ellipse cx="20" cy="16" rx="16" ry="5" transform="rotate(-22 20 16)" fill="none" stroke="#C4922E" strokeWidth="2.2" />
      <circle cx="20" cy="16" r="7" fill={`url(#prop-sat-${uid})`} />
    </svg>
  );
}

function JupiterMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
      <defs>
        <radialGradient id={`prop-jup-${uid}`} cx="34%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#F8D7A4" />
          <stop offset="100%" stopColor="#A85A28" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="11" fill={`url(#prop-jup-${uid})`} />
      <ellipse cx="16" cy="12" rx="9" ry="1.2" fill="#F3D7A8" opacity="0.55" />
      <ellipse cx="16" cy="16" rx="10" ry="1.1" fill="#C47A3A" opacity="0.5" />
      <ellipse cx="16" cy="20" rx="8" ry="1" fill="#8E4E24" opacity="0.45" />
    </svg>
  );
}

function RahuMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" fill="none" aria-hidden>
      <g transform="translate(16 16) scale(1.25) translate(-16 -16)">
        <path d="M8 19c0-5 3.4-8 7.2-8 2.6 0 4.4 1.2 5.2 2.6 1-2 2.8-3.3 5-2.5 1.7.6 2.6 2.3 2.2 4-.5 1.8-2 3.1-4 3.3" stroke="#C6A35A" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M24 13c0 5-3.4 8-7.2 8-2.6 0-4.4-1.2-5.2-2.6-1 2-2.8 3.3-5 2.5-1.7-.6-2.6-2.3-2.2-4 .5-1.8 2-3.1 4-3.3" stroke="#A67C32" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="16" cy="16" r="1.7" fill="#C6A35A" />
      </g>
    </svg>
  );
}

function MercuryMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
      <defs>
        <radialGradient id={`prop-mer-${uid}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F6E7C4" />
          <stop offset="100%" stopColor="#C4A06A" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="14" r="7" fill={`url(#prop-mer-${uid})`} />
      <path d="M11 8.5c1.6-2.4 8.4-2.4 10 0" stroke="#C4922E" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function EclipseMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
      <circle cx="16" cy="16" r="10" fill="none" stroke="#E2C48A" strokeWidth="1.3" />
      <circle cx="16" cy="16" r="7" fill="#2A2418" />
      <path d="M17.2 10.4a7 7 0 0 0 0 11.2 5.2 5.2 0 0 1 0-11.2Z" fill="#E8C56E" />
    </svg>
  );
}

function RowMark({ icon }: { icon: RowIcon }) {
  if (icon === "saturn") return <SaturnMark />;
  if (icon === "home") return <Home size={26} strokeWidth={1.7} color={COLORS.goldDeep} />;
  if (icon === "jupiter") return <JupiterMark />;
  if (icon === "rahu") return <RahuMark />;
  if (icon === "mercury") return <MercuryMark />;
  return <EclipseMark />;
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

export default function LifeAreasProperty({
  language = "en",
  pageNumber = "26",
  forecastYear = 2027,
}: LifeAreasPropertyProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-property" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-1 mt-3">
        <header className="relative z-10 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>
        <p
          className={`relative z-10 mt-1 shrink-0 px-6 text-center font-bold ${isHi ? "text-[12.5px] leading-[1.24]" : "text-[14px] leading-[1.2]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_236px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="min-w-0">
            <div
              className="flex h-[28px] items-center gap-2 px-3"
              style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)` }}
            >
              <Home size={16} strokeWidth={1.8} color="#F6E6C4" />
              <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                {t.banner}
              </h3>
            </div>
            <p className={`px-3 py-1.5 ${isHi ? "text-[11px] leading-[1.26]" : "text-[12px] leading-[1.26]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
              {t.intro}
            </p>
          </div>
          <div className="relative min-h-[96px]">
            <Image src={HOME} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "36% 58%" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.94), rgba(255,248,236,0))" }} />
          </div>
        </section>

        <section className="relative z-10 mt-1 shrink-0">
          <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
            {t.chartTitle}
          </h3>
          <div className="mt-1 grid grid-cols-4">
            {t.notes.map((note, index) => (
              <div key={note.key} className="flex items-start gap-1 px-1" style={{ borderLeft: index === 0 ? "none" : `1px solid ${COLORS.gold}` }}>
                <ChartMark icon={note.icon} />
                <p className={isHi ? "text-[10px] leading-[1.2]" : "text-[10.5px] leading-[1.18]"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {note.text}
                </p>
              </div>
            ))}
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
                className="flex min-h-[60px] items-center gap-1.5 px-1 py-0.5"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.4)" }}
              >
                <span className="flex w-12 shrink-0 justify-center">
                  <RowMark icon={row.icon} />
                </span>
                <p
                  className={`w-[132px] shrink-0 whitespace-pre-line rounded-[4px] px-1 py-0.5 text-center font-bold leading-[1.08] ${isHi ? "text-[9.5px]" : "text-[10px]"} py-2`}
                  style={{ color: COLORS.date, fontFamily: DISPLAY_FONT, border: `1px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.72)" }}
                >
                  {row.date}
                  {row.sub ? (
                    <>
                      {"\n"}
                      {row.sub}
                    </>
                  ) : null}
                </p>
                <p className={`min-w-0 flex-1 ${isHi ? "text-[10.5px] leading-[1.18]" : "text-[11.5px] leading-[1.18]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1 grid flex-1 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1 grid flex-1 grid-cols-[minmax(0,1fr)_210px] overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="flex min-w-0 flex-col justify-center py-1 pl-2.5 pr-2">
            <div className="flex items-center gap-2">
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]" style={{ border: `1.3px solid ${COLORS.gold}` }}>
                <Image src={PRAYER_ICON} alt="" fill sizes="32px" className="object-cover" style={{ objectPosition: "center 50%", transform: "scale(1.28)" }} />
              </span>
              <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                {t.remedyTitle}
              </h3>
            </div>
            <BulletList items={t.remedy} isHi={isHi} />
          </div>
          <div className="relative h-full min-h-[96px]">
            <Image src={REMEDY} alt="" fill sizes="250px" className="object-cover" style={{ objectPosition: "68% 52%" }} />
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
