"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Activity, Check, X } from "lucide-react";
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

const MEDITATION = "/assets/yearly-forecast-report/health-meditation.jpg";
const REMEDY = "/assets/yearly-forecast-report/health-remedy.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasHealthProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "ketu" | "jupiter" | "saturn" | "eclipse" | "rahu";
type ChartIcon = "kundli" | "moon" | "mars" | "saturn";

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
    banner: "Health",
    intro:
      "In 2027 your health depends more on routine than on luck. Protect your sleep, digestion and stress levels, and the year stays steady.",
    chartTitle: "What your birth chart says",
    notes: [
      {
        key: "lagna",
        icon: "kundli" as const,
        text: "For Cancer Lagna, your emotions and your body are closely linked: when your mind is calm, your body follows.",
      },
      {
        key: "moon",
        icon: "moon" as const,
        text: "Moon, your Lagna lord, sits in your 6th house, which makes you sensitive to irregular meals, low water intake and stress.",
      },
      {
        key: "mars",
        icon: "mars" as const,
        text: "Mars in your 12th house shows that overwork and late nights drain your energy faster than you notice.",
      },
      {
        key: "saturn",
        icon: "saturn" as const,
        text: "Saturn in your 8th house gives you strong long-term stamina when you live with discipline.",
      },
    ],
    bringsTitle: "What 2027 brings",
    rows: [
      {
        key: "ketu",
        icon: "ketu",
        date: "All year",
        sub: "(Ketu over Lagna)",
        body: "You may feel low on energy or detached without a clear reason, and you may ignore your body's signals. Meditation, prayer and quiet time help most.",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "25 January to\n26 June 2027",
        sub: "(Jupiter in 1st house)",
        body: "Jupiter, exalted in your 1st house, protects your health. This is the best time of the year to start new health habits and get a routine check-up.",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 June to\n20 October 2027",
        sub: "(Saturn in 10th house)",
        body: "Saturn in your 10th house raises work pressure. Stress is your main health risk in these months, so plan real breaks.",
      },
      {
        key: "eclipse",
        icon: "eclipse",
        date: "Around\n2 August 2027",
        sub: "(Solar eclipse)",
        body: "The total solar eclipse falls close to your Lagna degree. Rest well that week and avoid heavy physical strain.",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "From 11 October 2027",
        sub: "(Rahu Mahadasha)",
        body: "Rahu Mahadasha begins, and with it a busier, more restless mind. Watch screen time and late nights.",
      },
    ] satisfies BringRow[],
    doTitle: "Do",
    doItems: [
      "Follow a regular sleep and meal routine.",
      "Drink enough water and eat simple, home-cooked food.",
      "Include walking, yoga or light exercise in your day.",
      "Take an annual health check-up.",
      "Spend time in meditation or prayer.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Late nights and excessive screen time.",
      "Skipping meals or eating at irregular times.",
      "Overworking without breaks.",
      "Junk food and too much caffeine.",
      "Ignoring small health issues or your body's signals.",
    ],
    remedyTitle: "Health remedy",
    remedy: [
      "Offer water to the rising Sun every morning.",
      "Practise simple pranayama or meditation daily.",
      "Donate green moong on Wednesdays for good health.",
      "Keep a Tulsi plant at home and spend a few minutes near it each day.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "स्वास्थ्य",
    intro:
      "2027 में स्वास्थ्य भाग्य से अधिक दिनचर्या पर निर्भर है। नींद, पाचन और तनाव संभालें, तो वर्ष स्थिर रहता है।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    notes: [
      {
        key: "lagna",
        icon: "kundli" as const,
        text: "कर्क लग्न में मन और शरीर जुड़े हैं: मन शांत रहे तो शरीर भी साथ देता है।",
      },
      {
        key: "moon",
        icon: "moon" as const,
        text: "लग्नेश चंद्र षष्ठ भाव में हैं, इसलिए अनियमित भोजन, कम पानी और तनाव जल्दी असर करते हैं।",
      },
      {
        key: "mars",
        icon: "mars" as const,
        text: "द्वादश भाव का मंगल दिखाता है कि अधिक काम और देर रात ऊर्जा चुपचाप घटा देते हैं।",
      },
      {
        key: "saturn",
        icon: "saturn" as const,
        text: "अष्टम भाव का शनि अनुशासन के साथ लंबे समय तक मज़बूत सहनशक्ति देता है।",
      },
    ],
    bringsTitle: "2027 क्या लाता है",
    rows: [
      {
        key: "ketu",
        icon: "ketu",
        date: "पूरा वर्ष",
        sub: "(लग्न पर केतु)",
        body: "बिना स्पष्ट कारण ऊर्जा कम या अलग-थलग लग सकती है, और शरीर के संकेत छूट सकते हैं। ध्यान, प्रार्थना और शांत समय सबसे अधिक मदद करते हैं।",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "25 जनवरी से\n26 जून 2027",
        sub: "(प्रथम भाव में गुरु)",
        body: "उच्च गुरु प्रथम भाव में स्वास्थ्य की रक्षा करते हैं। नई आदतें और नियमित जाँच का यह वर्ष का सर्वोत्तम समय है।",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 जून से\n20 अक्टूबर 2027",
        sub: "(दशम भाव में शनि)",
        body: "दशम भाव का शनि काम का दबाव बढ़ाता है। इन महीनों में तनाव मुख्य जोखिम है, इसलिए असली विराम रखें।",
      },
      {
        key: "eclipse",
        icon: "eclipse",
        date: "लगभग\n2 अगस्त 2027",
        sub: "(सूर्य ग्रहण)",
        body: "पूर्ण सूर्य ग्रहण लग्न अंश के निकट पड़ता है। उस सप्ताह आराम करें और भारी शारीरिक श्रम से बचें।",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "11 अक्टूबर 2027 से",
        sub: "(राहु महादशा)",
        body: "राहु महादशा शुरू होती है और मन अधिक व्यस्त व बेचैन रहता है। स्क्रीन समय और देर रात पर ध्यान रखें।",
      },
    ] satisfies BringRow[],
    doTitle: "करें",
    doItems: [
      "नियमित नींद और भोजन की दिनचर्या रखें।",
      "पर्याप्त पानी पिएँ और सादा घरेलू भोजन लें।",
      "दिन में टहलना, योग या हल्का व्यायाम रखें।",
      "साल में एक बार स्वास्थ्य जाँच कराएँ।",
      "ध्यान या प्रार्थना का समय निकालें।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "देर रात और अधिक स्क्रीन समय।",
      "भोजन छोड़ना या अनियमित समय पर खाना।",
      "बिना विराम के अधिक काम।",
      "जंक फूड और अधिक कैफीन।",
      "छोटी तकलीफ या शरीर के संकेत अनदेखा करना।",
    ],
    remedyTitle: "स्वास्थ्य उपाय",
    remedy: [
      "प्रतिदिन उगते सूर्य को जल चढ़ाएँ।",
      "रोज़ सरल प्राणायाम या ध्यान करें।",
      "अच्छे स्वास्थ्य के लिए बुधवार को हरी मूंग दान करें।",
      "घर में तुलसी रखें और रोज़ कुछ मिनट उसके पास बिताएँ।",
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
      className="relative mx-auto flex h-[46px] w-[86%] items-center justify-center rounded-[12px] px-5"
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
        className={`text-center font-bold leading-none ${isHi ? "text-[20px]" : "text-[26px]"}`}
        style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
      >
        {title}
      </h2>
    </div>
  );
}

function KundliMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden>
      <rect x="4" y="4" width="32" height="32" stroke="#B8893A" strokeWidth="1.3" fill="rgba(248,231,196,0.35)" />
      <path d="M4 4L36 36M36 4L4 36M20 4v32M4 20h32" stroke="#A56B32" strokeWidth="0.85" />
      <path d="M20 4L36 20L20 36L4 20Z" stroke="#8E2A36" strokeWidth="1.15" />
    </svg>
  );
}

function MoonMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path d="M15 4.5c-5 1.2-8 6-6.6 11 1.2 4.4 5.6 7 10.2 5.8-4.2 2.6-10 .8-12.2-3.6C4 13.2 6 7.2 11.4 5c1.4-.6 2.6-.7 3.6-.5Z" fill="#E8C56E" />
    </svg>
  );
}

function MarsMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
      <circle cx="9.5" cy="14.5" r="5" stroke={COLORS.goldDeep} strokeWidth="1.6" />
      <path d="M13.2 10.8 19 5M19 5h-5.2M19 5v5.2" stroke={COLORS.goldDeep} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SaturnBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
      <circle cx="12" cy="13" r="4.2" stroke={COLORS.goldDeep} strokeWidth="1.5" />
      <ellipse cx="12" cy="13" rx="8" ry="2.6" transform="rotate(-28 12 13)" stroke={COLORS.goldDeep} strokeWidth="1.35" />
      <path d="M16.2 6.2h2.4M17.4 5v2.6" stroke={COLORS.goldDeep} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function ChartMark({ icon }: { icon: ChartIcon }) {
  const inner = icon === "kundli" ? <KundliMark /> : icon === "moon" ? <MoonMark /> : icon === "mars" ? <MarsMark /> : <SaturnBadge />;
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.2px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.8)" }}
    >
      {inner}
    </span>
  );
}

function KetuMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-12 w-12" fill="none" aria-hidden>
      <g transform="translate(16 16) scale(1.45) translate(-16 -16)">
        <path d="M9 18c0-4.2 2.8-7 6.2-7 2.2 0 3.8 1 4.6 2.2.8-1.6 2.4-2.8 4.4-2.2 1.5.5 2.2 2 1.9 3.4-.4 1.6-1.8 2.6-3.4 2.8" stroke="#C6A35A" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M23 14c0 4.2-2.8 7-6.2 7-2.2 0-3.8-1-4.6-2.2-.8 1.6-2.4 2.8-4.4 2.2-1.5-.5-2.2-2-1.9-3.4.4-1.6 1.8-2.6 3.4-2.8" stroke="#A67C32" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="1.6" fill="#C6A35A" />
      </g>
    </svg>
  );
}

function JupiterMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 32 32" className="h-12 w-12" aria-hidden>
      <defs>
        <radialGradient id={`health-jup-${uid}`} cx="34%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#F8D7A4" />
          <stop offset="100%" stopColor="#A85A28" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="11" fill={`url(#health-jup-${uid})`} />
      <ellipse cx="16" cy="12" rx="9" ry="1.2" fill="#F3D7A8" opacity="0.55" />
      <ellipse cx="16" cy="16" rx="10" ry="1.15" fill="#C47A3A" opacity="0.5" />
      <ellipse cx="16" cy="20" rx="8" ry="1.1" fill="#8E4E24" opacity="0.45" />
    </svg>
  );
}

function SaturnMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 40 32" className="h-12 w-16" aria-hidden>
      <defs>
        <radialGradient id={`health-sat-${uid}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="100%" stopColor="#8A6A40" />
        </radialGradient>
      </defs>
      <ellipse cx="20" cy="16" rx="16" ry="5" transform="rotate(-22 20 16)" fill="none" stroke="#C4922E" strokeWidth="2.2" />
      <circle cx="20" cy="16" r="7.2" fill={`url(#health-sat-${uid})`} />
    </svg>
  );
}

function EclipseMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-12 w-12" aria-hidden>
      <circle cx="16" cy="16" r="10" fill="none" stroke="#E2C48A" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="7.2" fill="#2A2418" />
      <path d="M17.2 10.2a7.2 7.2 0 0 0 0 11.6 5.4 5.4 0 0 1 0-11.6Z" fill="#E8C56E" />
    </svg>
  );
}

function RahuMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-12 w-12" fill="none" aria-hidden>
      <g transform="translate(16 16) scale(1.35) translate(-16 -16)">
        <path d="M8 19c0-5 3.4-8 7.2-8 2.6 0 4.4 1.2 5.2 2.6 1-2 2.8-3.3 5-2.5 1.7.6 2.6 2.3 2.2 4-.5 1.8-2 3.1-4 3.3" stroke="#C6A35A" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 13c0 5-3.4 8-7.2 8-2.6 0-4.4-1.2-5.2-2.6-1 2-2.8 3.3-5 2.5-1.7-.6-2.6-2.3-2.2-4 .5-1.8 2-3.1 4-3.3" stroke="#A67C32" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="1.8" fill="#C6A35A" />
      </g>
    </svg>
  );
}

function RowMark({ icon }: { icon: RowIcon }) {
  if (icon === "ketu") return <KetuMark />;
  if (icon === "jupiter") return <JupiterMark />;
  if (icon === "saturn") return <SaturnMark />;
  if (icon === "eclipse") return <EclipseMark />;
  return <RahuMark />;
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={`mt-0.5 space-y-0 ${isHi ? "text-[10.5px] leading-[1.22]" : "text-[11px] leading-[1.2]"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasHealth({
  language = "en",
  pageNumber = "24",
  forecastYear = 2027,
}: LifeAreasHealthProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-health" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-1 mt-3">
        <header className="relative z-10 mt-1 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>

        <p
          className={`relative z-10 mt-1 shrink-0 px-8 text-center font-bold ${isHi ? "text-[13px] leading-[1.28]" : "text-[15px] leading-[1.24]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section
          className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_248px] overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <div className="min-w-0">
            <div
              className="flex h-[30px] items-center gap-2 px-3"
              style={{
                background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
                boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
              }}
            >
              <Activity size={22} strokeWidth={2.2} color="#F6E6C4" />
              <h3 className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[18px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                {t.banner}
              </h3>
            </div>
            <p className={`px-3 py-1.5 ${isHi ? "text-[11.5px] leading-[1.28]" : "text-[12.5px] leading-[1.28]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
              {t.intro}
            </p>
          </div>
          <div className="relative min-h-[92px]">
            <Image src={MEDITATION} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "center 58%" }} />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-6"
              style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.92) 0%, rgba(255,248,236,0) 100%)" }}
            />
          </div>
        </section>

        <section className="relative z-10 mt-1 shrink-0">
          <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15.5px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
            {t.chartTitle}
          </h3>
          <div className="mt-1 grid grid-cols-4">
            {t.notes.map((note, index) => (
              <div key={note.key} className="flex items-start gap-1.5 px-1.5" style={{ borderLeft: index === 0 ? "none" : `1px solid ${COLORS.gold}` }}>
                <ChartMark icon={note.icon} />
                <p className={isHi ? "text-[10px] leading-[1.22]" : "text-[10.5px] leading-[1.2]"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 mt-1.5 flex shrink-0 flex-col rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div
            className="flex h-[28px] shrink-0 items-center px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15.5px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
              {t.bringsTitle}
            </h3>
          </div>
          <div className="flex flex-col">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="flex min-h-[70px] items-center gap-1.5 px-1 py-1"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.4)" }}
              >
                <span className="flex w-14 shrink-0 justify-center">
                  <RowMark icon={row.icon} />
                </span>
                <p
                  className={`w-[124px] shrink-0 whitespace-pre-line rounded-[4px] px-1 py-0 text-center font-bold leading-[1.1] ${isHi ? "text-[10px]" : "text-[10.5px]"} py-2`}
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
                <p className={`min-w-0 flex-1 ${isHi ? "text-[10.5px] leading-[1.2]" : "text-[11.5px] leading-[1.2]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-1.5 grid flex-1 grid-cols-2 gap-2">
          <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
          <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
        </div>

        <section
          className="relative z-10 mt-1.5 grid flex-1 grid-cols-[minmax(0,1fr)_220px] overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
          <div className="flex min-w-0 flex-col justify-center py-1.5 pl-3 pr-2">
            <div className="flex items-center gap-2">
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#F8F1E3]" style={{ border: `1.3px solid ${COLORS.gold}` }}>
                <Image src={PRAYER_ICON} alt="" fill sizes="32px" className="object-cover" style={{ objectPosition: "center 50%", transform: "scale(1.28)" }} />
              </span>
              <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15.5px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                {t.remedyTitle}
              </h3>
            </div>
            <BulletList items={t.remedy} isHi={isHi} />
          </div>
          <div className="relative min-h-[108px] h-full">
            <Image src={REMEDY} alt="" fill sizes="260px" className="object-cover" style={{ objectPosition: "center 42%" }} />
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
    <section className="flex h-full flex-col justify-center rounded-[3px] px-2.5 py-1.5" style={{ border: `1.2px solid ${color}`, background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)" }}>
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={18} strokeWidth={2.6} /> : <X size={18} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
