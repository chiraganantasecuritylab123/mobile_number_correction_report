"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
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
  maroonDeep: "#6E1A28",
  banner: "#7A2232",
  gold: "#C6A35A",
  goldDeep: "#A67C32",
  cream: "#FBF6EA",
  body: "#3A4B82",
  date: "#7E3040",
  ink: "#2C3A66",
} as const;

const MOUNTAIN = "/assets/yearly-forecast-report/mountain-sunrise.png";

export type LifeAreasDetailProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type TransitIcon = "sun" | "moon" | "saturn" | "rahu" | "jupiter";

type TransitRow = {
  key: string;
  icon: TransitIcon;
  date: string;
  sub?: string;
  body: string;
  emphasis?: readonly string[];
};

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    careerTitle: "Career and business",
    careerLead: "2027 is your strongest career year in the last seven years.",
    careerRest:
      "The real push comes from June to September, and a new long-term direction opens in October.",
    chartTitle: "What your birth chart says",
    chartLeft:
      "Your 10th house of career is ruled by Mars, which sits in your 12th house. This links your work with foreign clients, online work, technology and work done behind the scenes.",
    chartRight:
      "Ketu in your 10th house means you do your best work when you are deeply focused on the work itself, not when you chase titles.",
    mars:
      "You have been in Mars Mahadasha since October 2020. For Cancer Lagna, Mars is the Yogakaraka planet, so these years have built your skills and your base.",
    marsEmphasis: ["Mars Mahadasha", "Yogakaraka"],
    bringsTitle: "What 2027 brings",
    rows: [
      {
        key: "sun",
        icon: "sun",
        date: "January to\nMarch 2027",
        sub: "(Mars–Sun)",
        body: "Sun rules your 2nd house and sits there with Mercury, forming Budhaditya Yoga. Your words, reputation and client communication drive results. This is a good time for pitching and presenting.",
        emphasis: ["Budhaditya Yoga"],
      },
      {
        key: "moon",
        icon: "moon",
        date: "March to\nOctober 2027",
        sub: "(Mars–Moon)",
        body: "Moon, your Lagna lord, sits in your 6th house of competition and service. You win through consistent effort, deadlines and outworking competitors. Expect busy months.",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 June to\n20 October 2027",
        body: "Saturn moves through your 10th house. Workload and responsibility rise, and so does your authority. Results come slowly, but they last.",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "From 11 October\n2027",
        body: "Rahu Mahadasha begins and runs for 18 years. Rahu sits with Jupiter in your 4th house, which favours technology, digital platforms, scale, large networks and building something from a strong base.",
        emphasis: ["Rahu Mahadasha"],
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "From 27 November\n2027",
        body: "Jupiter moves into the 10th house from your Moon and brings recognition for your work.",
      },
    ] satisfies TransitRow[],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    careerTitle: "करियर और व्यवसाय",
    careerLead: "2027 पिछले सात वर्षों में आपका सबसे मजबूत करियर वर्ष है।",
    careerRest: "असली गति जून से सितंबर तक आती है, और अक्टूबर में एक नई दीर्घकालिक दिशा खुलती है।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    chartLeft:
      "आपका दशम भाव मंगल का है, जो द्वादश भाव में बैठा है। यह आपके काम को विदेशी ग्राहकों, ऑनलाइन कार्य, तकनीक और पर्दे के पीछे किए काम से जोड़ता है।",
    chartRight:
      "दशम भाव में केतु का अर्थ है कि आप तब सबसे अच्छा काम करते हैं जब ध्यान काम पर हो, पद की दौड़ पर नहीं।",
    mars:
      "आप अक्टूबर 2020 से मंगल महादशा में हैं। कर्क लग्न के लिए मंगल योगकारक ग्रह है, इसलिए इन वर्षों ने आपका कौशल और आधार बनाया है।",
    marsEmphasis: ["मंगल महादशा", "योगकारक"],
    bringsTitle: "2027 क्या लाता है",
    rows: [
      {
        key: "sun",
        icon: "sun",
        date: "जनवरी से\nमार्च 2027",
        sub: "(मंगल–सूर्य)",
        body: "सूर्य आपके द्वितीय भाव के स्वामी हैं और बुध के साथ वहीं बैठकर बुधादित्य योग बनाते हैं। आपके शब्द, प्रतिष्ठा और ग्राहक संवाद परिणाम लाते हैं। यह पिचिंग और प्रस्तुति का अच्छा समय है।",
        emphasis: ["बुधादित्य योग"],
      },
      {
        key: "moon",
        icon: "moon",
        date: "मार्च से\nअक्टूबर 2027",
        sub: "(मंगल–चंद्र)",
        body: "लग्नेश चंद्र आपके षष्ठ भाव में हैं — प्रतिस्पर्धा और सेवा। लगातार प्रयास, समय-सीमा और प्रतिद्वंद्वियों से आगे निकलकर आप जीतते हैं। महीने व्यस्त रहेंगे।",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 जून से\n20 अक्टूबर 2027",
        body: "शनि आपके दशम भाव से गुजरते हैं। कार्यभार और ज़िम्मेदारी बढ़ती है, और अधिकार भी। परिणाम धीमे आते हैं, पर टिकते हैं।",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "11 अक्टूबर\n2027 से",
        body: "राहु महादशा शुरू होती है और 18 वर्ष चलती है। राहु गुरु के साथ आपके चतुर्थ भाव में हैं, जो तकनीक, डिजिटल मंच, विस्तार, बड़े नेटवर्क और मज़बूत आधार से निर्माण में सहायक है।",
        emphasis: ["राहु महादशा"],
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "27 नवंबर\n2027 से",
        body: "गुरु आपके चंद्र से दशम भाव में प्रवेश करते हैं और आपके काम को पहचान दिलाते हैं।",
      },
    ] satisfies TransitRow[],
  },
} as const;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function RichText({ text, emphasis = [] }: { text: string; emphasis?: readonly string[] }) {
  if (emphasis.length === 0) return <>{text}</>;
  const pattern = new RegExp(`(${emphasis.map(escapeRegExp).join("|")})`, "g");
  return (
    <>
      {text.split(pattern).map((part, index) =>
        emphasis.includes(part) ? (
          <span key={index} className="font-bold">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

function FrameCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 78" className={className} fill="none" aria-hidden>
      <path d="M8 46C8 20 18 8 46 8" stroke={COLORS.gold} strokeWidth="1.45" strokeLinecap="round" />
      <path d="M14 40C16 24 26 15 42 14" stroke={COLORS.goldDeep} strokeWidth="0.85" strokeLinecap="round" />
      <path d="M22 30c7-9 16-14 26-13" stroke={COLORS.gold} strokeWidth="0.75" strokeLinecap="round" />
      <path
        d="M18 16c4.2 1.2 6.4 4.2 5.2 7.2c-1 2.4-4.2 2.6-5.4.4"
        stroke={COLORS.goldDeep}
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path d="M30 12c2.2 5 1.6 8.2-.6 10.4" stroke={COLORS.gold} strokeWidth="0.95" strokeLinecap="round" />
      <path d="M16 28c5.2 1 8.2-.2 10.2-3.4" stroke={COLORS.goldDeep} strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="9" cy="9" r="2.15" fill={COLORS.gold} />
      <path d="M8 50v8M50 8h8" stroke={COLORS.gold} strokeWidth="0.85" strokeLinecap="round" />
      <path d="M36 8c2 4 1.2 6.5-1 8M8 36c4 2 6.5 1.2 8-1" stroke={COLORS.gold} strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  );
}

function TitlePlaque({ title, isHi }: { title: string; isHi: boolean }) {
  return (
    <div className="relative min-w-0 flex-1">
      <div
        className="relative flex h-[68px] items-center justify-center rounded-[12px] px-5"
        style={{
          background: "rgba(255,249,236,0.78)",
          border: `1.6px solid ${COLORS.gold}`,
          boxShadow: `inset 0 0 0 3.5px rgba(255,249,236,0.92), inset 0 0 0 4.6px ${COLORS.gold}`,
        }}
      >
        <FrameCorner className="absolute left-[-2px] top-[-2px] h-[28px] w-[28px]" />
        <FrameCorner className="absolute right-[-2px] top-[-2px] h-[28px] w-[28px] -scale-x-100" />
        <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[28px] w-[28px] -scale-y-100" />
        <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[28px] w-[28px] -scale-x-100 -scale-y-100" />
        <h2
          className={`text-center font-bold leading-none ${isHi ? "text-[22px]" : "text-[28px]"}`}
          style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function ChartMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <path d="M5 17V11" stroke="#F6E6C4" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 17V7" stroke="#F6E6C4" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 17V10" stroke="#F6E6C4" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 17.5h15" stroke="#F6E6C4" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CalendarMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <rect x="4" y="5.5" width="16" height="14" rx="1.6" stroke="#F6E6C4" strokeWidth="1.4" />
      <path d="M4 9.5h16" stroke="#F6E6C4" strokeWidth="1.3" />
      <path d="M8 3.8v3.4M16 3.8v3.4" stroke="#F6E6C4" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SectionBanner({
  icon,
  title,
  isHi,
}: {
  icon: ReactNode;
  title: string;
  isHi: boolean;
}) {
  return (
    <div
      className="relative flex h-[38px] items-center overflow-hidden px-3"
      style={{
        background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
        boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
      }}
    >
      <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">{icon}</span>
      <h3
        className={`relative z-10 ml-2 font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
        style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
      >
        {title}
      </h3>
    </div>
  );
}

function KundliMark() {
  return (
    <svg viewBox="0 0 46 46" className="h-9 w-9 shrink-0" fill="none" aria-hidden>
      <rect x="5" y="5" width="36" height="36" stroke="#B8893A" strokeWidth="1.35" fill="rgba(248,231,196,0.35)" />
      <path d="M5 5L41 41M41 5L5 41M23 5v36M5 23h36" stroke="#A56B32" strokeWidth="0.9" />
      <path d="M23 5L41 23L23 41L5 23Z" stroke="#8E2A36" strokeWidth="1.25" />
    </svg>
  );
}

function SunGlyph() {
  const uid = useId().replace(/:/g, "");
  const id = `row-sun-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className="h-[54px] w-[54px]" aria-hidden>
      <defs>
        <radialGradient id={id} cx="36%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#FFF3C8" />
          <stop offset="55%" stopColor="#F0C15A" />
          <stop offset="100%" stopColor="#D4922E" />
        </radialGradient>
      </defs>
      {Array.from({ length: 12 }, (_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        return (
          <line
            key={index}
            x1={20 + Math.cos(angle) * 10}
            y1={20 + Math.sin(angle) * 10}
            x2={20 + Math.cos(angle) * 17}
            y2={20 + Math.sin(angle) * 17}
            stroke="#E2B04A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="20" cy="20" r="8.2" fill={`url(#${id})`} />
    </svg>
  );
}

function MoonGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-[54px] w-[54px]" aria-hidden>
      <path
        d="M24 8c-8 2-13 10-11 18 2 8 10 12 18 10-7 5-18 4-24-4C1 22 4 10 14 6c4-2 7-1 10 2Z"
        fill="#E8C56E"
      />
      <circle cx="18" cy="16" r="1.1" fill="#8A6230" />
      <circle cx="23" cy="15" r="1.1" fill="#8A6230" />
      <path d="M18.5 21q3.2 2.2 6.4-.4" stroke="#8A6230" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function SaturnGlyph() {
  const uid = useId().replace(/:/g, "");
  const body = `row-sat-${uid}`;
  return (
    <svg viewBox="0 0 46 36" className="h-[48px] w-[66px]" aria-hidden>
      <defs>
        <radialGradient id={body} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="50%" stopColor="#C9A15A" />
          <stop offset="100%" stopColor="#7E6248" />
        </radialGradient>
      </defs>
      <ellipse cx="23" cy="18" rx="18" ry="5.2" transform="rotate(-22 23 18)" fill="none" stroke="#E2C48A" strokeWidth="2.2" />
      <circle cx="23" cy="18" r="8.2" fill={`url(#${body})`} />
      <ellipse cx="23" cy="16" rx="6" ry="1.5" fill="#A88448" opacity="0.35" />
      <ellipse cx="23" cy="18" rx="18" ry="5.2" transform="rotate(-22 23 18)" fill="none" stroke="#C9A46A" strokeWidth="1.5" strokeDasharray="28 40" />
    </svg>
  );
}

function RahuGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-[54px] w-[54px]" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="15" fill="#3C2E28" />
      <circle cx="14" cy="23" r="4.1" stroke="#E6C98A" strokeWidth="1.5" />
      <circle cx="26" cy="23" r="4.1" stroke="#E6C98A" strokeWidth="1.5" />
      <path d="M14 19.2C14 11 26 11 26 19.2" stroke="#E6C98A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function JupiterGlyph() {
  const uid = useId().replace(/:/g, "");
  const id = `row-jup-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className="h-[54px] w-[54px]" aria-hidden>
      <defs>
        <radialGradient id={id} cx="34%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#F8D7A4" />
          <stop offset="40%" stopColor="#E0A05A" />
          <stop offset="100%" stopColor="#A85A28" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="14" fill={`url(#${id})`} />
      <ellipse cx="20" cy="15" rx="12" ry="1.7" fill="#F3D7A8" opacity="0.55" />
      <ellipse cx="20" cy="20" rx="13" ry="1.5" fill="#C47A3A" opacity="0.45" />
      <ellipse cx="20" cy="25" rx="11" ry="1.6" fill="#8E4E24" opacity="0.4" />
      <circle cx="26" cy="23" r="2.1" fill="#C45A3A" opacity="0.7" />
    </svg>
  );
}

function MarsPlanet() {
  const uid = useId().replace(/:/g, "");
  const id = `life-mars-${uid}`;
  return (
    <svg viewBox="0 0 52 52" className="h-[64px] w-[64px] shrink-0" aria-hidden>
      <defs>
        <radialGradient id={id} cx="34%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#F6B08A" />
          <stop offset="46%" stopColor="#D15A3C" />
          <stop offset="100%" stopColor="#7A2A1C" />
        </radialGradient>
      </defs>
      <circle cx="26" cy="26" r="18" fill={`url(#${id})`} />
      <ellipse cx="18" cy="18" rx="7" ry="4.2" fill="#fff" opacity="0.16" />
      <ellipse cx="32" cy="30" rx="6" ry="3.2" fill="#5A1C14" opacity="0.38" />
      <ellipse cx="20" cy="33" rx="4" ry="2" fill="#5A1C14" opacity="0.28" />
    </svg>
  );
}

function TransitMark({ icon }: { icon: TransitIcon }) {
  if (icon === "sun") return <SunGlyph />;
  if (icon === "moon") return <MoonGlyph />;
  if (icon === "saturn") return <SaturnGlyph />;
  if (icon === "rahu") return <RahuGlyph />;
  return <JupiterGlyph />;
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

export default function LifeAreasDetail({
  language = "en",
  pageNumber = "16",
  forecastYear = 2027,
}: LifeAreasDetailProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-life-areas"
      padding="12px 16px 8px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-5">
        <PageFrame />

        <header className="relative z-10 mx-auto mt-1.5 w-[86%] shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>

        <p
          className={`relative z-10 mt-1.5 shrink-0 px-8 text-center font-bold ${isHi ? "text-[14.5px] leading-[1.4]" : "text-[16.5px] leading-[1.35]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section className="relative z-10 mt-2 shrink-0">
          <div className="relative overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <SectionBanner icon={<ChartMark />} title={t.careerTitle} isHi={isHi} />
            <div className="relative z-10 px-3.5 py-2.5">
              <p
                className={isHi ? "text-[13.5px] leading-[1.4]" : "text-[14.5px] leading-[1.38]"}
                style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
              >
                {t.careerLead}
              </p>
              <p
                className={`mt-1 ${isHi ? "text-[13.5px] leading-[1.4]" : "text-[14.5px] leading-[1.38]"}`}
                style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
              >
                {t.careerRest}
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 mt-2 shrink-0 px-1">
          <div className="flex items-center gap-2">
            <KundliMark />
            <h3
              className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {t.chartTitle}
            </h3>
          </div>
          <div className="mt-1.5 grid grid-cols-2 px-1">
            <p
              className={`pr-4 ${isHi ? "text-[13px] leading-[1.4]" : "text-[14px] leading-[1.38]"}`}
              style={{
                color: COLORS.body,
                fontFamily: DISPLAY_FONT,
                borderRight: `1.25px solid ${COLORS.gold}`,
              }}
            >
              {t.chartLeft}
            </p>
            <p
              className={`pl-4 ${isHi ? "text-[13px] leading-[1.4]" : "text-[14px] leading-[1.38]"}`}
              style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
            >
              {t.chartRight}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-3.5 px-1">
            <MarsPlanet />
            <p
              className={isHi ? "text-[13px] leading-[1.4]" : "text-[14px] leading-[1.38]"}
              style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
            >
              <RichText text={t.mars} emphasis={t.marsEmphasis} />
            </p>
          </div>
        </section>

        <section
          className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <SectionBanner icon={<CalendarMark />} title={t.bringsTitle} isHi={isHi} />
          <div className="flex min-h-0 flex-1 flex-col px-1.5 py-0.5">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="flex min-h-0 flex-1 items-center gap-2 px-1"
                style={{
                  borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.42)",
                }}
              >
                <span className="flex w-[68px] shrink-0 justify-center">
                  <TransitMark icon={row.icon} />
                </span>
                <p
                  className={`w-[132px] shrink-0 whitespace-pre-line font-bold leading-[1.2] ${isHi ? "text-[12.5px]" : "text-[13.5px]"}`}
                  style={{ color: COLORS.date, fontFamily: DISPLAY_FONT }}
                >
                  {row.date}
                  {row.sub ? (
                    <>
                      {"\n"}
                      <span className={isHi ? "text-[11.5px]" : "text-[12.5px]"}>{row.sub}</span>
                    </>
                  ) : null}
                </p>
                <p
                  className={`min-w-0 flex-1 ${isHi ? "text-[12.5px] leading-[1.35]" : "text-[13.5px] leading-[1.32]"}`}
                  style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
                >
                  <RichText text={row.body} emphasis={"emphasis" in row ? row.emphasis : undefined} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 -mx-1 mt-auto shrink-0 pt-1">
          <Image
            src={MOUNTAIN}
            alt=""
            width={1200}
            height={280}
            className="h-[102px] w-full object-cover object-bottom"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </ReportPageShell>
  );
}
