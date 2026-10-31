"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { CalendarDays, Check, Home, PartyPopper, Users, X } from "lucide-react";
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

const FRAME = "/assets/yearly-forecast-report/page-border.png";
const FAMILY = "/assets/yearly-forecast-report/family-home-cont.jpg";
const MOTHER = "/assets/yearly-forecast-report/mother-portrait.jpg";
const HANDS = "/assets/yearly-forecast-report/mother-hands.jpg";
const REMEDY = "/assets/yearly-forecast-report/home-remedy.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasFamilyContProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type FocusIcon = "calendar" | "people" | "party" | "home";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Family and home (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "May is Personal Month 6, the number of family and home, and your best month for family bonding. Your Mulank 9 makes you a caretaker who sometimes carries everyone's burden quietly. In 2027, share responsibility instead of holding it all yourself.",
    tableTitle: "Family focus by time period",
    window: "Window",
    focus: "Family focus",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "January–June", focus: "Patience at home; support elders" },
      { key: "may", icon: "people" as const, window: "May", focus: "Family time, short family trip" },
      { key: "jul", icon: "party" as const, window: "July–November", focus: "Celebrations, functions, family gatherings" },
      { key: "oct", icon: "home" as const, window: "October–December", focus: "Plan home changes for the coming Rahu years" },
    ],
    motherTitle: "Your mother",
    mother:
      "Moon, the significator of mother, sits in your 6th house, and Saturn affects your Moon sign's 4th house until June. Spend regular time with her and help with her routine and comfort.",
    doTitle: "Do",
    doItems: [
      "Eat at least one meal a week together as a family.",
      "Keep the home clean, bright and clutter-free.",
      "Involve your family in big decisions.",
    ],
    avoidTitle: "Avoid",
    avoidItems: [
      "Bringing work stress home.",
      "Major renovations before June.",
      "Property disputes with relatives; settle them calmly and on paper.",
    ],
    remedyTitle: "Family remedy",
    remedy: [
      "Light a lamp near the Tulsi plant every evening.",
      "Touch your mother's feet before important work.",
      "Donate mustard oil on Saturdays until June to ease Shani Dhaiya.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "परिवार और घर (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "मई व्यक्तिगत माह 6 है, परिवार और घर का अंक, और परिवार से जुड़ने का सबसे अच्छा महीना। आपका मूलांक 9 आपको देखभाल करने वाला बनाता है, जो कभी-कभी सबका बोझ चुपचाप उठाते हैं। 2027 में ज़िम्मेदारी बाँटें, सब कुछ अकेले न सँभालें।",
    tableTitle: "समय के अनुसार परिवार फोकस",
    window: "अवधि",
    focus: "परिवार फोकस",
    rows: [
      { key: "jan", icon: "calendar" as const, window: "जनवरी–जून", focus: "घर पर धैर्य रखें; बड़ों का सहारा बनें" },
      { key: "may", icon: "people" as const, window: "मई", focus: "परिवार का समय, छोटी पारिवारिक यात्रा" },
      { key: "jul", icon: "party" as const, window: "जुलाई–नवंबर", focus: "उत्सव, कार्यक्रम, पारिवारिक मिलन" },
      { key: "oct", icon: "home" as const, window: "अक्टूबर–दिसंबर", focus: "आने वाले राहु वर्षों के लिए घर के बदलाव की योजना" },
    ],
    motherTitle: "आपकी माता",
    mother:
      "माता के कारक चंद्र आपके षष्ठ भाव में हैं, और शनि जून तक आपकी चंद्र राशि के चतुर्थ भाव को प्रभावित करते हैं। उनके साथ नियमित समय बिताएँ और उनकी दिनचर्या व सुविधा में मदद करें।",
    doTitle: "करें",
    doItems: [
      "सप्ताह में कम से कम एक बार परिवार के साथ भोजन करें।",
      "घर साफ, उजला और अव्यवस्था से मुक्त रखें।",
      "बड़े निर्णयों में परिवार को शामिल करें।",
    ],
    avoidTitle: "बचें",
    avoidItems: [
      "काम का तनाव घर लाना।",
      "जून से पहले बड़ी मरम्मत।",
      "रिश्तेदारों से संपत्ति विवाद; शांत रहकर कागज़ पर सुलझाएँ।",
    ],
    remedyTitle: "परिवार उपाय",
    remedy: [
      "हर शाम तुलसी के पास दीया जलाएँ।",
      "महत्वपूर्ण काम से पहले माता के चरण स्पर्श करें।",
      "शनि ढैय्या को सहज करने के लिए जून तक शनिवार को सरसों का तेल दान करें।",
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
      className="relative mx-auto flex h-[46px] w-[78%] items-center justify-center rounded-[12px] px-5"
      style={{
        background: "rgba(255,249,236,0.82)",
        border: `1.6px solid ${COLORS.gold}`,
        boxShadow: `inset 0 0 0 3.5px rgba(255,249,236,0.92), inset 0 0 0 4.6px ${COLORS.gold}`,
      }}
    >
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[22px] w-[22px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[22px] w-[22px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[22px] w-[22px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[22px] w-[22px] -scale-x-100 -scale-y-100" />
      <h2 className={`text-center font-bold leading-none ${isHi ? "text-[20px]" : "text-[26px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {title}
      </h2>
    </div>
  );
}

function NumberCluster() {
  const ball = (n: string) => (
    <span
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-[20px] font-bold leading-none"
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
    <div className="relative h-[84px] w-[86px] shrink-0">
      <span className="absolute left-1/2 top-0 -translate-x-1/2">{ball("6")}</span>
      <span className="absolute bottom-0 left-0">{ball("9")}</span>
      <span className="absolute bottom-0 right-0">{ball("1")}</span>
    </div>
  );
}

function FocusMark({ icon }: { icon: FocusIcon }) {
  const props = { size: 20, strokeWidth: 1.7, color: COLORS.goldDeep } as const;
  if (icon === "calendar") return <CalendarDays {...props} />;
  if (icon === "people") return <Users {...props} />;
  if (icon === "party") return <PartyPopper {...props} />;
  return <Home {...props} />;
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={`mt-0.5 space-y-0 ${isHi ? "text-[11px] leading-[1.26]" : "text-[11.5px] leading-[1.26]"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasFamilyCont({
  language = "en",
  pageNumber = "23",
  forecastYear = 2027,
}: LifeAreasFamilyContProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-family-cont" padding="0">
      <div className="relative h-full">
        <Image src={FRAME} alt="" fill sizes="794px" className="pointer-events-none z-0 object-fill" />

        <div className="relative z-10 flex h-full min-h-0 flex-col px-[28px] pb-[158px] pt-[28px]">
          <header className="shrink-0">
            <TitlePlaque title={t.title} isHi={isHi} />
          </header>

          <p
            className={`mt-1 shrink-0 px-6 text-center font-bold ${isHi ? "text-[13px] leading-[1.3]" : "text-[15px] leading-[1.26]"}`}
            style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
          >
            {t.subtitleLead}
            <br />
            {t.subtitleRest}
          </p>

          <section className="mt-1.5 grid shrink-0 grid-cols-[minmax(0,1fr)_250px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div className="min-w-0">
              <div
                className="flex h-[32px] items-center gap-2 px-3"
                style={{
                  background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
                  boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
                }}
              >
                <Home size={16} strokeWidth={1.8} color="#F6E6C4" />
                <h3 className={`font-bold leading-none ${isHi ? "text-[15px]" : "text-[17px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                  {t.banner}
                </h3>
              </div>
              <div className="flex items-start gap-2 px-2.5 py-2">
                <NumberCluster />
                <div className="min-w-0">
                  <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {t.numbersTitle}
                  </h3>
                  <p className={`mt-1 ${isHi ? "text-[11px] leading-[1.28]" : "text-[12px] leading-[1.28]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                    {t.numbers}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[148px]">
              <Image src={FAMILY} alt="" fill sizes="300px" className="object-cover" style={{ objectPosition: "center 55%" }} />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
            </div>
          </section>

          <section className="mt-1.5 flex min-h-0 flex-1 flex-col">
            <h3 className={`shrink-0 font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
              {t.tableTitle}
            </h3>
            <div className="mt-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
              <div className="grid shrink-0 grid-cols-[200px_minmax(0,1fr)] px-3 py-1 font-bold" style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.window}</span>
                <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.focus}</span>
              </div>
              {t.rows.map((row, index) => (
                <div
                  key={row.key}
                  className="grid min-h-[32px] flex-1 grid-cols-[200px_minmax(0,1fr)] items-center px-3"
                  style={{ borderTop: "1px solid rgba(198,163,90,0.45)", background: index % 2 === 0 ? "rgba(255,248,236,0.45)" : "transparent" }}
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <FocusMark icon={row.icon} />
                    </span>
                    <span className={`font-bold ${isHi ? "text-[12px]" : "text-[13px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
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

          <section className="mt-1.5 grid shrink-0 grid-cols-[minmax(0,1fr)_210px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.5)" }}>
            <div className="flex items-start gap-2 px-2.5 py-1.5">
              <span className="relative mt-0.5 h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full" style={{ border: `1.6px solid ${COLORS.gold}` }}>
                <Image src={MOTHER} alt="" fill sizes="80px" className="object-cover" style={{ objectPosition: "center 42%" }} />
              </span>
              <div className="min-w-0">
                <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {t.motherTitle}
                </h3>
                <p className={`mt-1 ${isHi ? "text-[11px] leading-[1.28]" : "text-[12px] leading-[1.28]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.mother}
                </p>
              </div>
            </div>
            <div className="relative min-h-[96px]">
              <Image src={HANDS} alt="" fill sizes="260px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
            </div>
          </section>

          <div className="mt-1.5 grid shrink-0 grid-cols-2 gap-2">
            <ToneCard tone="do" title={t.doTitle} items={t.doItems} isHi={isHi} />
            <ToneCard tone="avoid" title={t.avoidTitle} items={t.avoidItems} isHi={isHi} />
          </div>

          <section className="mt-1.5 grid shrink-0 grid-cols-[minmax(0,1fr)_230px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}>
            <div className="min-w-0 py-1.5 pl-2.5 pr-2">
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
            <div className="relative min-h-[108px]">
              <Image src={REMEDY} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "center 45%" }} />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
            </div>
          </section>
        </div>
      </div>
    </ReportPageShell>
  );
}

function ToneCard({ tone, title, items, isHi }: { tone: "do" | "avoid"; title: string; items: readonly string[]; isHi: boolean }) {
  const isDo = tone === "do";
  const color = isDo ? COLORS.green : COLORS.red;
  return (
    <section className="rounded-[3px] px-2 py-1" style={{ border: `1.2px solid ${color}`, background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)" }}>
      <div className="flex items-center gap-1.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={15} strokeWidth={2.6} /> : <X size={15} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
