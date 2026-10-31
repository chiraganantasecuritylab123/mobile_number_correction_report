"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Activity, Bed, CalendarDays, Check, Flower2, Moon, PersonStanding, Stethoscope, Sun, Utensils, X } from "lucide-react";
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

const MEDITATION = "/assets/yearly-forecast-report/health-meditation.jpg";
const REMEDY = "/assets/yearly-forecast-report/health-shivling.jpg";
const PRAYER_ICON = "/assets/yearly-forecast-report/prayer-hands-icon.jpg";

export type LifeAreasHealthContProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type AreaIcon = "sleep" | "digestion" | "stress" | "energy" | "checkup";
type PeriodIcon = "calendar" | "lotus" | "sun" | "run" | "moon";

const COPY = {
  en: {
    title: "6. Life Areas in Detail",
    subtitleLead: "Career and money carry the year;",
    subtitleRest: "relationships and home need conscious attention.",
    banner: "Health (cont.)",
    numbersTitle: "What your numbers say",
    numbers:
      "Personal Year 1 gives you the drive to start new habits, and habits started this year tend to last. June (Personal Month 7) and August (Personal Month 9) are months to slow down and recover. September (Personal Month 1) is the best month to start a fitness routine.",
    areasTitle: "Key health focus areas in 2027",
    areaCol: "Focus area",
    doCol: "What to do in 2027",
    areas: [
      { key: "sleep", icon: "sleep" as const, area: "Sleep", action: "Fixed sleep time; no screens for 30 minutes before bed." },
      { key: "digestion", icon: "digestion" as const, area: "Digestion", action: "Regular meal times, warm and simple food, enough water." },
      { key: "stress", icon: "stress" as const, area: "Stress", action: "10 minutes of meditation or pranayama daily." },
      { key: "energy", icon: "energy" as const, area: "Energy", action: "Morning sunlight and daily movement, even a 20-minute walk." },
      { key: "checkup", icon: "checkup" as const, area: "Check-ups", action: "One routine health check-up between February and June." },
    ],
    periodTitle: "Health focus by time period",
    window: "Window",
    focus: "Health focus",
    periods: [
      { key: "jan", icon: "calendar" as const, window: "January–June", focus: "Build habits; get your routine check-up." },
      { key: "jun", icon: "lotus" as const, window: "June–October", focus: "Manage work stress; take planned breaks." },
      { key: "jul", icon: "sun" as const, window: "30 July–5 August", focus: "Rest and recover." },
      { key: "sep", icon: "run" as const, window: "September", focus: "Start a fitness routine." },
      { key: "oct", icon: "moon" as const, window: "October–December", focus: "Control screen time and keep a fixed sleep cycle." },
    ],
    doTitle: "Do",
    doItems: ["Eat meals at fixed times.", "Drink water from a copper vessel in the morning.", "Spend time in sunlight."],
    avoidTitle: "Avoid",
    avoidItems: ["Skipping meals during busy weeks.", "Working late into the night for long stretches.", "Ignoring tiredness that lasts more than a few days."],
    remedyTitle: "Health remedy",
    remedy: [
      "Practise Surya Namaskar every morning.",
      "Chant the Mahamrityunjaya mantra 11 times daily.",
      "On Mondays, offer water mixed with a little milk to a Shivling to strengthen your Lagna lord, the Moon.",
    ],
  },
  hi: {
    title: "6. जीवन क्षेत्र विस्तार से",
    subtitleLead: "इस वर्ष करियर और धन आगे रहते हैं;",
    subtitleRest: "संबंधों और घर पर सचेत ध्यान चाहिए।",
    banner: "स्वास्थ्य (जारी)",
    numbersTitle: "आपके अंक क्या कहते हैं",
    numbers:
      "व्यक्तिगत वर्ष 1 नई आदतें शुरू करने की शक्ति देता है, और इस वर्ष की आदतें टिकती हैं। जून (व्यक्तिगत माह 7) और अगस्त (व्यक्तिगत माह 9) धीमे होकर स्वस्थ होने के महीने हैं। सितंबर (व्यक्तिगत माह 1) व्यायाम शुरू करने का सर्वोत्तम महीना है।",
    areasTitle: "2027 के मुख्य स्वास्थ्य क्षेत्र",
    areaCol: "क्षेत्र",
    doCol: "2027 में क्या करें",
    areas: [
      { key: "sleep", icon: "sleep" as const, area: "नींद", action: "सोने का समय तय रखें; सोने से 30 मिनट पहले स्क्रीन न देखें।" },
      { key: "digestion", icon: "digestion" as const, area: "पाचन", action: "भोजन का समय नियमित रखें, गुनगुना सादा भोजन और पर्याप्त पानी।" },
      { key: "stress", icon: "stress" as const, area: "तनाव", action: "रोज़ 10 मिनट ध्यान या प्राणायाम करें।" },
      { key: "energy", icon: "energy" as const, area: "ऊर्जा", action: "सुबह की धूप और रोज़ हलचल, चाहे 20 मिनट की सैर हो।" },
      { key: "checkup", icon: "checkup" as const, area: "जाँच", action: "फरवरी और जून के बीच एक नियमित स्वास्थ्य जाँच कराएँ।" },
    ],
    periodTitle: "समय के अनुसार स्वास्थ्य फोकस",
    window: "अवधि",
    focus: "स्वास्थ्य फोकस",
    periods: [
      { key: "jan", icon: "calendar" as const, window: "जनवरी–जून", focus: "आदतें बनाएँ; नियमित जाँच कराएँ।" },
      { key: "jun", icon: "lotus" as const, window: "जून–अक्टूबर", focus: "काम का तनाव सँभालें; योजनाबद्ध विराम लें।" },
      { key: "jul", icon: "sun" as const, window: "30 जुलाई–5 अगस्त", focus: "आराम करें और स्वास्थ्य लाभ लें।" },
      { key: "sep", icon: "run" as const, window: "सितंबर", focus: "व्यायाम की दिनचर्या शुरू करें।" },
      { key: "oct", icon: "moon" as const, window: "अक्टूबर–दिसंबर", focus: "स्क्रीन समय नियंत्रित रखें और नींद का चक्र तय रखें।" },
    ],
    doTitle: "करें",
    doItems: ["निश्चित समय पर भोजन करें।", "सुबह ताँबे के बर्तन का पानी पिएँ।", "धूप में समय बिताएँ।"],
    avoidTitle: "बचें",
    avoidItems: ["व्यस्त हफ्तों में भोजन छोड़ना।", "लंबे समय तक रात देर तक काम करना।", "कुछ दिनों से अधिक थकान को अनदेखा करना।"],
    remedyTitle: "स्वास्थ्य उपाय",
    remedy: [
      "प्रतिदिन सुबह सूर्य नमस्कार करें।",
      "रोज़ महामृत्युंजय मंत्र 11 बार जपें।",
      "सोमवार को लग्नेश चंद्र को बल देने के लिए शिवलिंग पर थोड़े दूध मिला जल चढ़ाएँ।",
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
      className="relative mx-auto flex h-[44px] w-[84%] items-center justify-center rounded-[12px] px-5"
      style={{
        background: "rgba(255,249,236,0.78)",
        border: `1.6px solid ${COLORS.gold}`,
        boxShadow: `inset 0 0 0 3.5px rgba(255,249,236,0.92), inset 0 0 0 4.6px ${COLORS.gold}`,
      }}
    >
      <FrameCorner className="absolute left-[-2px] top-[-2px] h-[22px] w-[22px]" />
      <FrameCorner className="absolute right-[-2px] top-[-2px] h-[22px] w-[22px] -scale-x-100" />
      <FrameCorner className="absolute bottom-[-2px] left-[-2px] h-[22px] w-[22px] -scale-y-100" />
      <FrameCorner className="absolute bottom-[-2px] right-[-2px] h-[22px] w-[22px] -scale-x-100 -scale-y-100" />
      <h2 className={`text-center font-bold leading-none ${isHi ? "text-[20px]" : "text-[25px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
        {title}
      </h2>
    </div>
  );
}

function NumberCluster() {
  const ball = (n: string) => (
    <span
      className="flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] font-bold leading-none"
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
    <div className="relative h-[78px] w-[80px] shrink-0">
      <span className="absolute left-1/2 top-0 -translate-x-1/2">{ball("1")}</span>
      <span className="absolute bottom-0 left-0">{ball("7")}</span>
      <span className="absolute bottom-0 right-0">{ball("9")}</span>
    </div>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <span className="flex h-6 w-6 shrink-0 items-center justify-center">{children}</span>;
}

function AreaMark({ icon }: { icon: AreaIcon }) {
  const props = { size: 18, strokeWidth: 1.8, color: COLORS.goldDeep } as const;
  if (icon === "sleep") return <Bed {...props} />;
  if (icon === "digestion") return <Utensils {...props} />;
  if (icon === "stress") return <Flower2 {...props} />;
  if (icon === "energy") return <PersonStanding {...props} />;
  return <Stethoscope {...props} />;
}

function PeriodMark({ icon }: { icon: PeriodIcon }) {
  const props = { size: 18, strokeWidth: 1.8, color: COLORS.goldDeep } as const;
  if (icon === "calendar") return <CalendarDays {...props} />;
  if (icon === "lotus") return <Flower2 {...props} />;
  if (icon === "sun") return <Sun {...props} />;
  if (icon === "run") return <PersonStanding {...props} />;
  return <Moon {...props} />;
}

function BulletList({ items, isHi, color = COLORS.goldDeep }: { items: readonly string[]; isHi: boolean; color?: string }) {
  return (
    <ul className={`mt-0.5 space-y-0 ${isHi ? "text-[11px] leading-[1.24]" : "text-[11.5px] leading-[1.24]"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-1.5" style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LifeAreasHealthCont({
  language = "en",
  pageNumber = "25",
  forecastYear = 2027,
}: LifeAreasHealthContProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-life-health-cont" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-1 mt-3">
        <header className="relative z-10 mt-1 shrink-0">
          <TitlePlaque title={t.title} isHi={isHi} />
        </header>

        <p
          className={`relative z-10 mt-1 shrink-0 px-8 text-center font-bold ${isHi ? "text-[13px] leading-[1.26]" : "text-[14.5px] leading-[1.22]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitleLead}
          <br />
          {t.subtitleRest}
        </p>

        <section className="relative z-10 mt-1 grid shrink-0 grid-cols-[minmax(0,1fr)_230px] overflow-hidden rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
          <div className="min-w-0">
            <div
              className="flex h-[28px] items-center gap-2 px-3"
              style={{
                background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 58%, #641520 100%)`,
                boxShadow: "inset 0 1px 0 rgba(255,220,170,0.28)",
              }}
            >
              <Activity size={18} strokeWidth={2.1} color="#F6E6C4" />
              <h3 className={`font-bold leading-none ${isHi ? "text-[14px]" : "text-[16px]"}`} style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT }}>
                {t.banner}
              </h3>
            </div>
            <div className="flex items-start gap-2 px-2.5 py-1.5">
              <NumberCluster />
              <div className="min-w-0">
                <h3 className={`font-bold leading-none ${isHi ? "text-[13px]" : "text-[15px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                  {t.numbersTitle}
                </h3>
                <p className={`mt-1 ${isHi ? "text-[10.5px] leading-[1.26]" : "text-[11.5px] leading-[1.26]"}`} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {t.numbers}
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[132px]">
            <Image src={MEDITATION} alt="" fill sizes="280px" className="object-cover" style={{ objectPosition: "center 58%" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-5" style={{ background: "linear-gradient(90deg, rgba(255,248,236,0.95), rgba(255,248,236,0))" }} />
          </div>
        </section>

        <section className="relative z-10 mt-1.5 flex min-h-0 flex-1 flex-col">
          <h3 className={`shrink-0 font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15.5px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
            {t.areasTitle}
          </h3>
          <div className="mt-1 flex min-h-0 flex-1 flex-col rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div className="grid shrink-0 grid-cols-[168px_minmax(0,1fr)] px-2.5 py-1 font-bold" style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.areaCol}</span>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.doCol}</span>
            </div>
            {t.areas.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[30px] flex-1 grid-cols-[168px_minmax(0,1fr)] items-center px-2.5"
                style={{ borderTop: "1px solid rgba(198,163,90,0.45)", background: index % 2 === 0 ? "rgba(255,248,236,0.4)" : "transparent" }}
              >
                <span className="flex items-center gap-1.5">
                  <Mark>
                    <AreaMark icon={row.icon} />
                  </Mark>
                  <span className={`font-bold ${isHi ? "text-[12px]" : "text-[13px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {row.area}
                  </span>
                </span>
                <span className={isHi ? "text-[11.5px] leading-snug" : "text-[12.5px] leading-snug"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
                  {row.action}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 mt-1.5 flex min-h-0 flex-1 flex-col">
          <h3 className={`shrink-0 font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15.5px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
            {t.periodTitle}
          </h3>
          <div className="mt-1 flex min-h-0 flex-1 flex-col rounded-[3px]" style={{ border: `1.15px solid ${COLORS.gold}` }}>
            <div className="grid shrink-0 grid-cols-[188px_minmax(0,1fr)] px-2.5 py-1 font-bold" style={{ background: "#F4D7A4", color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.window}</span>
              <span className={isHi ? "text-[12px]" : "text-[13px]"}>{t.focus}</span>
            </div>
            {t.periods.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[30px] flex-1 grid-cols-[188px_minmax(0,1fr)] items-center px-2.5"
                style={{ borderTop: "1px solid rgba(198,163,90,0.45)", background: index % 2 === 0 ? "rgba(255,248,236,0.4)" : "transparent" }}
              >
                <span className="flex items-center gap-1.5">
                  <Mark>
                    <PeriodMark icon={row.icon} />
                  </Mark>
                  <span className={`font-bold ${isHi ? "text-[12px]" : "text-[13px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {row.window}
                  </span>
                </span>
                <span className={isHi ? "text-[11.5px] leading-snug" : "text-[12.5px] leading-snug"} style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}>
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
          className="relative z-10 mt-1.5 grid shrink-0 grid-cols-[minmax(0,1fr)_220px] overflow-hidden rounded-[3px]"
          style={{ border: `1.15px solid ${COLORS.gold}`, background: "rgba(255,248,236,0.55)" }}
        >
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
          <div className="relative min-h-[112px]">
            <Image src={REMEDY} alt="" fill sizes="260px" className="object-cover" style={{ objectPosition: "center 55%" }} />
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
    <section className="rounded-[3px] px-2.5 py-1" style={{ border: `1.2px solid ${color}`, background: isDo ? "rgba(47,125,79,0.06)" : "rgba(192,69,69,0.06)" }}>
      <div className="flex items-center gap-1.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
          {isDo ? <Check size={16} strokeWidth={2.6} /> : <X size={16} strokeWidth={2.6} />}
        </span>
        <h3 className={`font-bold leading-none ${isHi ? "text-[13.5px]" : "text-[15px]"}`} style={{ color, fontFamily: DISPLAY_FONT }}>
          {title}
        </h3>
      </div>
      <BulletList items={items} isHi={isHi} color={color} />
    </section>
  );
}
