"use client";

import { Libre_Baskerville } from "next/font/google";
import { Briefcase, Car, Handshake, Home, TrendingUp, UserRound } from "lucide-react";
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
} as const;

export type MuhuratGuideProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
};

type RowIcon = "business" | "job" | "deal" | "property" | "vehicle" | "invest" | "marriage" | "griha";

const COPY = {
  en: {
    title: "7. Your Muhurat\nGuide for 2027",
    subtitle: "September is your single best month for starting anything important. Confirm the exact date and time with a panchang before the event.",
    activity: "Activity",
    best: "Best months",
    avoid: "Avoid",
    rows: [
      { key: "business", icon: "business" as const, activity: "Start a business or brand", best: "September, July", avoid: "February, October" },
      { key: "job", icon: "job" as const, activity: "New job or role change", best: "July, September", avoid: "Mid-June to early July" },
      { key: "deal", icon: "deal" as const, activity: "Sign partnership deals", best: "April, July, November", avoid: "February, October" },
      { key: "property", icon: "property" as const, activity: "Buy property", best: "July, September, late November", avoid: "January to May" },
      { key: "vehicle", icon: "vehicle" as const, activity: "Buy a vehicle", best: "April, September", avoid: "Around 2 Aug, October" },
      { key: "invest", icon: "invest" as const, activity: "Investments (with advice)", best: "July, September, November", avoid: "February, October" },
      { key: "marriage", icon: "marriage" as const, activity: "Marriage or engagement", best: "April, November", avoid: "Eclipse weeks (Feb, Aug)" },
      { key: "griha", icon: "griha" as const, activity: "Griha pravesh", best: "September, November", avoid: "Before 3 June" },
    ],
  },
  hi: {
    title: "7. 2027 का मुहूर्त\nमार्गदर्शक",
    subtitle: "सितंबर कोई भी महत्वपूर्ण काम शुरू करने का सबसे अच्छा महीना है। कार्यक्रम से पहले पंचांग से सही तिथि और समय की पुष्टि करें।",
    activity: "गतिविधि",
    best: "उत्तम महीने",
    avoid: "बचें",
    rows: [
      { key: "business", icon: "business" as const, activity: "व्यापार या ब्रांड शुरू करें", best: "सितंबर, जुलाई", avoid: "फरवरी, अक्टूबर" },
      { key: "job", icon: "job" as const, activity: "नई नौकरी या भूमिका", best: "जुलाई, सितंबर", avoid: "मध्य जून से जुलाई की शुरुआत" },
      { key: "deal", icon: "deal" as const, activity: "साझेदारी के समझौते", best: "अप्रैल, जुलाई, नवंबर", avoid: "फरवरी, अक्टूबर" },
      { key: "property", icon: "property" as const, activity: "संपत्ति खरीद", best: "जुलाई, सितंबर, नवंबर का अंत", avoid: "जनवरी से मई" },
      { key: "vehicle", icon: "vehicle" as const, activity: "वाहन खरीद", best: "अप्रैल, सितंबर", avoid: "लगभग 2 अगस्त, अक्टूबर" },
      { key: "invest", icon: "invest" as const, activity: "निवेश (सलाह के साथ)", best: "जुलाई, सितंबर, नवंबर", avoid: "फरवरी, अक्टूबर" },
      { key: "marriage", icon: "marriage" as const, activity: "विवाह या सगाई", best: "अप्रैल, नवंबर", avoid: "ग्रहण सप्ताह (फरवरी, अगस्त)" },
      { key: "griha", icon: "griha" as const, activity: "गृह प्रवेश", best: "सितंबर, नवंबर", avoid: "3 जून से पहले" },
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

function RingsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
      <circle cx="9.2" cy="13" r="5" fill="none" stroke={COLORS.maroon} strokeWidth="1.7" />
      <circle cx="14.8" cy="13" r="5" fill="none" stroke={COLORS.maroon} strokeWidth="1.7" />
    </svg>
  );
}

function GrihaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M3.5 11.2 12 4.2l8.5 7" stroke={COLORS.maroon} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 10.6V19.5h12V10.6" stroke={COLORS.maroon} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 13.1V15.4H14.3M12 15.4H14.5V17.7M12 15.4V17.7H9.7M12 15.4H9.5V13.1" stroke={COLORS.maroon} strokeWidth="1.25" strokeLinecap="square" />
    </svg>
  );
}

function RowIcon({ icon }: { icon: RowIcon }) {
  const props = { size: 40, strokeWidth: 1.7, color: COLORS.maroon } as const;
  const node: Record<RowIcon, ReactNode> = {
    business: <Briefcase {...props} />,
    job: <UserRound {...props} />,
    deal: <Handshake {...props} />,
    property: <Home {...props} />,
    vehicle: <Car {...props} />,
    invest: <TrendingUp {...props} />,
    marriage: <RingsIcon />,
    griha: <GrihaIcon />,
  };
  return <span className="flex h-12 w-12 shrink-0 items-center justify-center">{node[icon]}</span>;
}

export default function MuhuratGuide({
  language = "en",
  pageNumber = "30",
  forecastYear = 2027,
}: MuhuratGuideProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell pageNumber={pageNumber} pageLabel="yearly-forecast-muhurat" padding="12px 16px 118px" backgroundImage="/assets/yearly-forecast-report/page-border.jpg">
      <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pt-2">
        <header className="relative z-10 shrink-0 mt-3">
          <div
            className="relative mx-auto flex h-[68px] w-[86%] items-center justify-center rounded-[12px] px-6"
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
            <h2
              className={`whitespace-pre-line text-center font-bold leading-[1.12] ${isHi ? "text-[20px]" : "text-[24px]"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {t.title}
            </h2>
          </div>
        </header>

        <p
          className={`relative z-10 mx-auto mt-2 max-w-[560px] shrink-0 text-center font-bold ${isHi ? "text-[13px] leading-[1.28]" : "text-[14.5px] leading-[1.25]"}`}
          style={{ color: COLORS.ink, fontFamily: DISPLAY_FONT }}
        >
          {t.subtitle}
        </p>

        <section className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[3px]" style={{ border: `1.4px solid ${COLORS.gold}` }}>
          <div
            className="grid h-[38px] shrink-0 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] items-center"
            style={{ background: `linear-gradient(180deg, #8C2A38 0%, ${COLORS.banner} 55%, #641520 100%)` }}
          >
            {[t.activity, t.best, t.avoid].map((label, index) => (
              <span
                key={label}
                className={`px-3 text-center font-bold ${isHi ? "text-[14px]" : "text-[16px]"} ${index > 0 ? "border-l" : ""}`}
                style={{ color: "#F8EBD0", fontFamily: DISPLAY_FONT, borderColor: "rgba(246,230,196,0.35)" }}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className="grid min-h-[52px] flex-1 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] items-stretch"
                style={{
                  borderTop: "1px solid rgba(198,163,90,0.55)",
                  background: index % 2 === 0 ? "rgba(255,248,236,0.45)" : "rgba(255,252,246,0.2)",
                }}
              >
                <span className="flex h-full items-center gap-2 px-3">
                  <RowIcon icon={row.icon} />
                  <span className={`font-bold leading-[1.15] ${isHi ? "text-[13px]" : "text-[14px]"}`} style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
                    {row.activity}
                  </span>
                </span>
                <span
                  className={`flex h-full items-center border-l px-3 leading-[1.2] ${isHi ? "text-[13px]" : "text-[14px]"}`}
                  style={{ color: COLORS.body, fontFamily: DISPLAY_FONT, borderColor: "rgba(198,163,90,0.45)" }}
                >
                  {row.best}
                </span>
                <span
                  className={`flex h-full items-center border-l px-3 leading-[1.2] ${isHi ? "text-[13px]" : "text-[14px]"}`}
                  style={{ color: COLORS.body, fontFamily: DISPLAY_FONT, borderColor: "rgba(198,163,90,0.45)" }}
                >
                  {row.avoid}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ReportPageShell>
  );
}
