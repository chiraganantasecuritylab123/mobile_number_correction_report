"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { BarChart3, Users } from "lucide-react";
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
} as const;

const MOUNTAIN = "/assets/yearly-forecast-report/mountain-sunrise.png";
const POT = "/assets/yearly-forecast-report/wealth-pot.png";

export type LifeAreasMoneyProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type MoneyIcon = "sun" | "jupiter" | "coins" | "rahu" | "saturn" | "arrow";

type MoneyRow = {
  key: string;
  icon: MoneyIcon;
  date: string;
  sub?: string;
  body: string;
};

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Money and Finance",
    intro:
      "Your main income phase runs from 26 June to 27 November, when Jupiter moves through your 2nd house of wealth. The first half is for collecting and organising; the second half is for growing.",
    chartTitle: "What your birth chart says",
    chart:
      "The lord of your 2nd house (wealth) is the Sun, and it sits in its own sign Leo in your 2nd house, with Mercury. This gives you a strong natural ability to earn through business, knowledge and the way you speak.",
    gains:
      "Your 11th lord of gains, Venus, sits in your 3rd house, so your gains come through your own effort, marketing, communication and short business trips.",
    moonNote:
      "Moon in the 6th house shows income from service and solving other people's problems.",
    bringsTitle: "What 2027 brings",
    rows: [
      {
        key: "sun",
        icon: "sun",
        date: "January to\nMarch 2027",
        sub: "(Sun Antardasha)",
        body: "Your 2nd lord is active. This is a good time to collect pending payments and strengthen income linked to your reputation.",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "25 January to\n26 June 2027",
        body: "Jupiter, exalted in your 1st house, gives you sound judgement. Use this period to learn and plan your investments, not to make big bets.",
      },
      {
        key: "coins",
        icon: "coins",
        date: "26 June to\n27 November 2027",
        body: "Jupiter moves through your 2nd house, and also the 9th house from your Moon. Savings grow, family support improves and income rises. This is the best money period of your year.",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "All year",
        body: "Rahu moves through the 2nd house from your Moon. It creates a desire for fast money and makes risky offers look attractive. Check every deal twice.",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "Until 3 June 2027",
        sub: "(Shani Dhaiya)",
        body: "Shani Dhaiya can bring expenses linked to home and family.",
      },
      {
        key: "arrow",
        icon: "arrow",
        date: "From 11 October 2027",
        sub: "(Rahu Mahadasha)",
        body: "Rahu Mahadasha opens new and unusual income sources, and also new kinds of expenses. Build a reserve before October.",
      },
    ] satisfies MoneyRow[],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "धन और वित्त",
    intro:
      "आपकी मुख्य आय की अवधि 26 जून से 27 नवंबर तक है, जब गुरु आपके धन वाले द्वितीय भाव से गुजरते हैं। पहला आधा भाग संग्रह और व्यवस्था के लिए है; दूसरा आधा भाग वृद्धि के लिए।",
    chartTitle: "आपकी जन्म कुंडली क्या कहती है",
    chart:
      "आपके द्वितीय भाव (धन) के स्वामी सूर्य हैं, और वे अपनी ही राशि सिंह में द्वितीय भाव में बुध के साथ बैठे हैं। इससे व्यवसाय, ज्ञान और बोलने के ढंग से कमाने की स्वाभाविक क्षमता मिलती है।",
    gains:
      "लाभ के एकादशेश शुक्र आपके तृतीय भाव में हैं, इसलिए लाभ आपके अपने प्रयास, विपणन, संवाद और छोटी व्यावसायिक यात्राओं से आता है।",
    moonNote: "षष्ठ भाव का चंद्र सेवा से और दूसरों की समस्याएँ सुलझाकर आय दिखाता है।",
    bringsTitle: "2027 क्या लाता है",
    rows: [
      {
        key: "sun",
        icon: "sun",
        date: "जनवरी से\nमार्च 2027",
        sub: "(सूर्य अंतर्दशा)",
        body: "आपका द्वितीयेश सक्रिय है। यह बकाया भुगतान वसूलने और प्रतिष्ठा से जुड़ी आय मजबूत करने का अच्छा समय है।",
      },
      {
        key: "jupiter",
        icon: "jupiter",
        date: "25 जनवरी से\n26 जून 2027",
        body: "गुरु आपके प्रथम भाव में उच्च के हैं और सुदृढ़ विवेक देते हैं। इस अवधि में सीखें और निवेश की योजना बनाएँ, बड़े दाँव न लगाएँ।",
      },
      {
        key: "coins",
        icon: "coins",
        date: "26 जून से\n27 नवंबर 2027",
        body: "गुरु आपके द्वितीय भाव से, और चंद्र से नवम भाव से भी, गुजरते हैं। बचत बढ़ती है, परिवार का सहारा सुधरता है और आय बढ़ती है। यह वर्ष की सबसे अच्छी धन अवधि है।",
      },
      {
        key: "rahu",
        icon: "rahu",
        date: "पूरा वर्ष",
        body: "राहु आपके चंद्र से द्वितीय भाव में चलते हैं। इससे जल्दी धन की चाह बढ़ती है और जोखिम भरे प्रस्ताव आकर्षक लगते हैं। हर सौदे को दो बार जाँचें।",
      },
      {
        key: "saturn",
        icon: "saturn",
        date: "3 जून 2027 तक",
        sub: "(शनि ढैय्या)",
        body: "शनि ढैय्या घर और परिवार से जुड़े खर्च ला सकता है।",
      },
      {
        key: "arrow",
        icon: "arrow",
        date: "11 अक्टूबर 2027 से",
        sub: "(राहु महादशा)",
        body: "राहु महादशा नई और असामान्य आय के स्रोत खोलती है, और नए तरह के खर्च भी। अक्टूबर से पहले एक रिज़र्व बना लें।",
      },
    ] satisfies MoneyRow[],
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

function CoinMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <ellipse cx="12" cy="16.5" rx="7" ry="2.6" fill="#E2B04A" />
      <ellipse cx="12" cy="13.4" rx="7" ry="2.6" fill="#C4922E" />
      <ellipse cx="12" cy="10.2" rx="7" ry="2.6" fill="#F6D78A" />
      <ellipse cx="12" cy="10.2" rx="4.2" ry="1.3" fill="#A67C32" opacity="0.35" />
    </svg>
  );
}

function KundliMark() {
  return (
    <svg viewBox="0 0 46 46" className="h-11 w-11 shrink-0" fill="none" aria-hidden>
      <rect x="5" y="5" width="36" height="36" stroke="#B8893A" strokeWidth="1.35" fill="rgba(248,231,196,0.35)" />
      <path d="M5 5L41 41M41 5L5 41M23 5v36M5 23h36" stroke="#A56B32" strokeWidth="0.9" />
      <path d="M23 5L41 23L23 41L5 23Z" stroke="#8E2A36" strokeWidth="1.25" />
    </svg>
  );
}

function SunGlyph() {
  const uid = useId().replace(/:/g, "");
  const id = `money-sun-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
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

function JupiterGlyph() {
  const uid = useId().replace(/:/g, "");
  const id = `money-jup-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
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
    </svg>
  );
}

function SaturnGlyph() {
  const uid = useId().replace(/:/g, "");
  const body = `money-sat-${uid}`;
  return (
    <svg viewBox="0 0 46 36" className="h-9 w-12" aria-hidden>
      <defs>
        <radialGradient id={body} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F4E2B0" />
          <stop offset="50%" stopColor="#C9A15A" />
          <stop offset="100%" stopColor="#7E6248" />
        </radialGradient>
      </defs>
      <ellipse cx="23" cy="18" rx="18" ry="5.2" transform="rotate(-22 23 18)" fill="none" stroke="#E2C48A" strokeWidth="2.2" />
      <circle cx="23" cy="18" r="8.2" fill={`url(#${body})`} />
    </svg>
  );
}

function RahuGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="14" fill="#3C2E28" />
      <circle cx="14" cy="23" r="3.8" stroke="#E6C98A" strokeWidth="1.5" />
      <circle cx="26" cy="23" r="3.8" stroke="#E6C98A" strokeWidth="1.5" />
      <path d="M14 19.4C14 12 26 12 26 19.4" stroke="#E6C98A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M10 26c7-1 12-6 14-13" stroke="#C4922E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 12h10v10" stroke="#C4922E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoneyMark({ icon }: { icon: MoneyIcon }) {
  if (icon === "sun") return <SunGlyph />;
  if (icon === "jupiter") return <JupiterGlyph />;
  if (icon === "coins") return <CoinMark className="h-10 w-10" />;
  if (icon === "rahu") return <RahuGlyph />;
  if (icon === "saturn") return <SaturnGlyph />;
  return <ArrowGlyph />;
}

function NoteIcon({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.2px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.7)" }}
    >
      {children}
    </span>
  );
}

export default function LifeAreasMoney({
  language = "en",
  pageNumber = "18",
  forecastYear = 2027,
}: LifeAreasMoneyProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;
  const bodyType = isHi ? "text-[12.5px] leading-[1.35]" : "text-[13.5px] leading-[1.32]";

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-money" padding="12px 16px 8px">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-1">
        <PageFrame />

        <header className="relative z-10 mt-4 shrink-0">
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
          <div
            className="relative z-10 flex h-[36px] items-center gap-2 px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <CoinMark />
            <h3
              className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
              style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
            >
              {t.banner}
            </h3>
          </div>
          <div className="relative min-h-[96px]">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[44%]">
              <Image src={POT} alt="" fill sizes="340px" className="object-contain object-right" />
            </div>
            <p
              className={`relative z-10 max-w-[58%] px-3 py-2 ${bodyType}`}
              style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
            >
              {t.intro}
            </p>
          </div>
        </section>

        <section className="relative z-10 mt-1.5 shrink-0 px-0.5">
          <h3
            className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
            style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
          >
            {t.chartTitle}
          </h3>
          <div className="mt-1.5 grid grid-cols-[1.15fr_0.95fr] items-start">
            <div className="flex items-start gap-2 pr-3" style={{ borderRight: `1.25px solid ${COLORS.gold}` }}>
              <KundliMark />
              <p className={bodyType} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                {t.chart}
              </p>
            </div>
            <div className="flex flex-col gap-2 pl-3">
              <div className="flex items-start gap-2">
                <NoteIcon>
                  <BarChart3 size={18} strokeWidth={1.8} color={COLORS.goldDeep} />
                </NoteIcon>
                <p className={bodyType} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.gains}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <NoteIcon>
                  <Users size={18} strokeWidth={1.8} color={COLORS.goldDeep} />
                </NoteIcon>
                <p className={bodyType} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.moonNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative z-10 mt-1.5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}` }}
        >
          <div
            className="flex h-[34px] shrink-0 items-center px-3"
            style={{
              background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
              boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
            }}
          >
            <h3
              className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[20px]"}`}
              style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}
            >
              {t.bringsTitle}
            </h3>
          </div>
          <div className="relative flex min-h-0 flex-1 flex-col px-1.5 py-0.5">
            <div className="pointer-events-none absolute bottom-3 left-[28px] top-3 w-px" style={{ background: COLORS.gold }} />
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="relative z-10 flex min-h-0 flex-1 items-center gap-2 px-1"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(198,163,90,0.35)" }}
              >
                <span className="flex w-10 shrink-0 justify-center bg-[rgba(253,245,230,0.92)]">
                  <MoneyMark icon={row.icon} />
                </span>
                <p
                  className={`w-[132px] shrink-0 whitespace-pre-line rounded-[4px] px-1.5 py-1 text-center font-bold leading-[1.15] ${isHi ? "text-[11.5px]" : "text-[12.5px]"}`}
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
                      <span className={`font-bold ${isHi ? "text-[10.5px]" : "text-[11px]"}`}>{row.sub}</span>
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

        <div className="relative z-10 -mx-1 mt-auto shrink-0">
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
