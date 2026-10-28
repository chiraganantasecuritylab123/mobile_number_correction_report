"use client";

import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Moon,
  Star,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell, { REPORT_COLORS } from "../ReportPageShell";
import { CoverLotus } from "../CommunComponents";
import { CornerFlourish } from "../CoverPageDecorations";

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#b8860b",
  goldLight: "#d4af37",
  goldMuted: "#a96505",
  brown: REPORT_COLORS.brown,
  slate: "#4a4540",
  body: "#2a1f18",
  value: "#1c2430",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern1: "/assets/cover/pattern-1.png",
  pattern2: "/assets/cover/pattern-2.png",
  arrow: "/assets/cover/image-arrow.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
} as const;

export type YearlyForecastCoverPageProps = {
  language?: "en" | "hi";
  forecastYear?: number | string;
  clientName?: string;
  dateOfBirth?: string;
  timeOfBirth?: string;
  placeOfBirth?: string;
  lagna?: string;
  moonSign?: string;
  nakshatra?: string;
  currentMahadasha?: string;
  nextMahadasha?: string;
  mulank?: string;
  bhagyank?: string;
  nameNumber?: string;
  personalYear?: string;
};

const COPY = {
  en: {
    premium: "PREMIUM",
    yearly: "YEARLY",
    forecast: "FORECAST",
    subtitle: "Based on the Astrology and Numerology",
    labels: {
      name: "NAME",
      dob: "DATE OF BIRTH",
      tob: "TIME OF BIRTH",
      pob: "PLACE OF BIRTH",
      lagna: "LAGNA (ASCENDANT)",
      rashi: "MOON SIGN (RASHI)",
      nakshatra: "NAKSHATRA",
      currentDasha: "CURRENT MAHADASHA",
      nextDasha: "NEXT MAHADASHA",
      mulank: "MULANK (BIRTH NUMBER)",
      bhagyank: "BHAGYANK (DESTINY NUMBER)",
      nameNumber: "NAME NUMBER (CHALDEAN)",
      personalYear: (year: string | number) => `PERSONAL YEAR ${year}`,
    },
    values: {
      dob: "18 August 1994",
      tob: "05:30 AM",
      pob: "Jetpur, Gujarat, India",
      lagna: "Cancer (Kark), 17°",
      rashi: "Sagittarius (Dhanu)",
      nakshatra: "Purva Ashadha, Pada 2",
      currentDasha: "Mars, until 11 Oct 2027",
      nextDasha: "Rahu, 11 Oct 2027 to Oct 2045",
      mulank: "9 (Mars)",
      bhagyank: "4 (Rahu)",
      nameNumber: "39 → 3 (Jupiter)",
      personalYear: "1 (Sun)",
    },
  },
  hi: {
    premium: "प्रीमियम",
    yearly: "वार्षिक",
    forecast: "भविष्यफल",
    subtitle: "ज्योतिष और अंकशास्त्र के आधार पर",
    labels: {
      name: "नाम",
      dob: "जन्म तिथि",
      tob: "जन्म समय",
      pob: "जन्म स्थान",
      lagna: "लग्न (उदय)",
      rashi: "चंद्र राशि",
      nakshatra: "नक्षत्र",
      currentDasha: "वर्तमान महादशा",
      nextDasha: "अगली महादशा",
      mulank: "मूलांक (जन्म अंक)",
      bhagyank: "भाग्यांक (भाग्य अंक)",
      nameNumber: "नाम अंक (कैल्डियन)",
      personalYear: (year: string | number) => `व्यक्तिगत वर्ष ${year}`,
    },
    values: {
      dob: "18 अगस्त 1994",
      tob: "प्रातः 05:30",
      pob: "जेटपुर, गुजरात, भारत",
      lagna: "कर्क, 17°",
      rashi: "धनु",
      nakshatra: "पूर्वाषाढ़ा, पद 2",
      currentDasha: "मंगल, 11 अक्टूबर 2027 तक",
      nextDasha: "राहु, 11 अक्टूबर 2027 से अक्टूबर 2045",
      mulank: "9 (मंगल)",
      bhagyank: "4 (राहु)",
      nameNumber: "39 → 3 (गुरु)",
      personalYear: "1 (सूर्य)",
    },
  },
} as const;

type Field = {
  label: string;
  value: string;
  icon?: ReactNode;
  badge?: string;
};

function NumberBadge({ num }: { num: string }) {
  return (
    <div
      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full"
      style={{
        background: `linear-gradient(180deg, ${COLORS.goldLight} 0%, ${COLORS.gold} 55%, #9a7209 100%)`,
        boxShadow: "0 0 0 1.5px rgba(92,24,24,0.16), inset 0 1px 0 rgba(255,255,255,0.35)",
      }}
    >
      <span
        className="text-[12px] font-bold leading-none"
        style={{ color: COLORS.maroonDeep }}
      >
        {num}
      </span>
    </div>
  );
}

function IconWell({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full"
      style={{
        background: "linear-gradient(180deg, #fff8e8 0%, #f3e0b8 100%)",
        border: "1.2px solid rgba(184,134,11,0.72)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55)",
        color: COLORS.goldMuted,
      }}
    >
      {children}
    </div>
  );
}

function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width }}>
      <Image
        src={ASSETS.pattern2}
        alt=""
        width={width}
        height={Math.round(width * 0.12)}
        className="h-auto w-full object-contain"
        aria-hidden
      />
    </div>
  );
}

function YearFlank({ flip = false }: { flip?: boolean }) {
  return (
    <Image
      src={ASSETS.arrow}
      alt=""
      width={100}
      height={18}
      className="h-[15px] w-[100px] object-contain"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    />
  );
}

export default function YearlyForecastCoverPage({
  language = "en",
  forecastYear = 2027,
  clientName = "Bhargav Gujarati",
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
  lagna,
  moonSign,
  nakshatra,
  currentMahadasha,
  nextMahadasha,
  mulank,
  bhagyank,
  nameNumber,
  personalYear,
}: YearlyForecastCoverPageProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  const iconProps = { size: 13, strokeWidth: 1.9 } as const;
  const pick = (explicit: string | undefined, translated: string) =>
    explicit ?? translated;

  const fields: Field[] = [
    {
      label: t.labels.name,
      value: clientName,
      icon: (
        <IconWell>
          <User {...iconProps} />
        </IconWell>
      ),
    },
    {
      label: t.labels.dob,
      value: pick(dateOfBirth, t.values.dob),
      icon: (
        <IconWell>
          <Calendar {...iconProps} />
        </IconWell>
      ),
    },
    {
      label: t.labels.tob,
      value: pick(timeOfBirth, t.values.tob),
      icon: (
        <IconWell>
          <Clock {...iconProps} />
        </IconWell>
      ),
    },
    {
      label: t.labels.pob,
      value: pick(placeOfBirth, t.values.pob),
      icon: (
        <IconWell>
          <MapPin {...iconProps} />
        </IconWell>
      ),
    },
    {
      label: t.labels.lagna,
      value: pick(lagna, t.values.lagna),
      icon: (
        <IconWell>
          <Moon {...iconProps} />
        </IconWell>
      ),
    },
    {
      label: t.labels.rashi,
      value: pick(moonSign, t.values.rashi),
      icon: (
        <IconWell>
          <Star {...iconProps} />
        </IconWell>
      ),
    },
    {
      label: t.labels.nakshatra,
      value: pick(nakshatra, t.values.nakshatra),
      icon: (
        <IconWell>
          <Star {...iconProps} fill={COLORS.goldMuted} />
        </IconWell>
      ),
    },
    {
      label: t.labels.currentDasha,
      value: pick(currentMahadasha, t.values.currentDasha),
      icon: (
        <IconWell>
          <span className="text-[14px] font-bold leading-none">♂</span>
        </IconWell>
      ),
    },
    {
      label: t.labels.nextDasha,
      value: pick(nextMahadasha, t.values.nextDasha),
      icon: (
        <IconWell>
          <span className="text-[15px] font-bold leading-none">☊</span>
        </IconWell>
      ),
    },
    {
      label: t.labels.mulank,
      value: pick(mulank, t.values.mulank),
      badge: "9",
    },
    {
      label: t.labels.bhagyank,
      value: pick(bhagyank, t.values.bhagyank),
      badge: "4",
    },
    {
      label: t.labels.nameNumber,
      value: pick(nameNumber, t.values.nameNumber),
      badge: "3",
    },
    {
      label: t.labels.personalYear(forecastYear),
      value: pick(personalYear, t.values.personalYear),
      badge: "1",
    },
  ];

  return (
    <ReportPageShell
      pageNumber="01"
      pageLabel="yearly-forecast-cover"
      padding="22px 38px 28px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Background celestial watermarks — match reference top-left sun wheel / top-right zodiac chart */}
        <Image
          src={ASSETS.sunCompass}
          alt=""
          width={230}
          height={230}
          className="pointer-events-none absolute left-[-28px] top-[70px] z-0 opacity-[0.34]"
          aria-hidden
        />
        <Image
          src={ASSETS.horoscopeWheel}
          alt=""
          width={230}
          height={230}
          className="pointer-events-none absolute right-[-28px] top-[70px] z-0 opacity-[0.34]"
          aria-hidden
        />

        <header className="relative z-10 flex shrink-0 flex-col items-center text-center">
          <Image
            src={ASSETS.logo}
            alt="Astro Aarambh"
            width={96}
            height={96}
            className="object-contain"
            priority
          />

          <h1
            className="mt-1.5 text-[32px] font-bold leading-none tracking-[0.14em]"
            style={{ color: COLORS.maroon }}
          >
            ASTRO AARAMBH
          </h1>

          <div className="mt-2 flex items-center gap-2.5">
            <Image
              src={ASSETS.pattern1}
              alt=""
              width={78}
              height={16}
              className="h-[13px] w-[78px] object-contain"
              aria-hidden
            />
            <p
              className={`font-bold ${isHi ? "text-[15px] tracking-[0.1em]" : "text-[14px] tracking-[0.42em]"}`}
              style={{ color: COLORS.goldMuted }}
            >
              {t.premium}
            </p>
            <Image
              src={ASSETS.pattern1}
              alt=""
              width={78}
              height={16}
              className="h-[13px] w-[78px] object-contain"
              style={{ transform: "scaleX(-1)" }}
              aria-hidden
            />
          </div>

          <h2
            className={`mt-2.5 font-bold leading-[0.92] ${isHi ? "text-[40px] tracking-[0.02em]" : "text-[46px] tracking-[0.06em]"}`}
            style={{ color: COLORS.maroon }}
          >
            <span className="block">{t.yearly}</span>
            <span className="block">{t.forecast}</span>
          </h2>

          <div className="mt-1.5 flex items-center justify-center gap-3">
            <YearFlank flip />
            <p
              className="text-[48px] font-bold leading-none tracking-[0.08em]"
              style={{
                color: COLORS.goldMuted,
                textShadow: "0 1px 0 rgba(255,245,210,0.4)",
              }}
            >
              {forecastYear}
            </p>
            <YearFlank />
          </div>

          <p
            className="mt-2 text-[15px] font-medium tracking-[0.01em] font-nunito-sans"
            style={{ color: COLORS.slate }}
          >
            {t.subtitle}
          </p>

          <div className="mt-1.5">
            <OrnamentDivider width={240} />
          </div>
        </header>

        <section className="relative z-10 mt-3 flex min-h-0 flex-1 items-stretch">
          <CoverLotus
            size={54}
            className="absolute left-[-8px] top-1/2 z-20 -translate-y-1/2"
          />
          <CoverLotus
            size={54}
            className="absolute right-[-8px] top-1/2 z-20 -translate-y-1/2"
          />

          <div
            className="relative mx-auto flex h-full w-full max-w-[650px] flex-col overflow-hidden rounded-[4px] px-5 py-2.5"
            style={{
              border: "1.7px solid rgba(184,134,11,0.78)",
              boxShadow:
                "inset 0 0 0 1px rgba(212,175,55,0.32), 0 0 0 1px rgba(184,134,11,0.12)",
              background: "rgba(253, 245, 230, 0.28)",
            }}
          >
            <CornerFlourish className="pointer-events-none absolute left-[-1px] top-[-1px] h-[76px] w-[76px]" />
            <CornerFlourish className="pointer-events-none absolute right-[-1px] top-[-1px] h-[76px] w-[76px] rotate-90" />
            <CornerFlourish className="pointer-events-none absolute bottom-[-1px] left-[-1px] h-[76px] w-[76px] -rotate-90" />
            <CornerFlourish className="pointer-events-none absolute bottom-[-1px] right-[-1px] h-[76px] w-[76px] rotate-180" />

            {/* Vertical divider with diamond + circle ends */}
            <div
              className="pointer-events-none absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(184,134,11,0.65) 8%, rgba(184,134,11,0.65) 92%, transparent 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[10px] h-[7px] w-[7px] -translate-x-1/2 rotate-45"
              style={{ background: COLORS.gold }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-[10px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full"
              style={{ border: `1.4px solid ${COLORS.gold}` }}
              aria-hidden
            />

            <div className="flex min-h-0 flex-1 flex-col justify-between py-0.5 font-nunito-sans">
              {fields.map((field, index) => (
                <div
                  key={field.label}
                  className="grid grid-cols-[1fr_1px_1fr] items-center gap-x-4 py-[5px]"
                  style={{
                    borderBottom:
                      index < fields.length - 1
                        ? "1px solid rgba(184,134,11,0.26)"
                        : "none",
                  }}
                >
                  <div className="flex min-w-0 items-center gap-2">
                    {field.badge ? <NumberBadge num={field.badge} /> : field.icon}
                    <span
                      className={`truncate font-bold ${isHi ? "text-[12.5px] tracking-[0.02em]" : "text-[11.5px] tracking-[0.07em]"}`}
                      style={{ color: COLORS.goldMuted }}
                    >
                      {field.label}
                    </span>
                  </div>
                  <div />
                  <p
                    className="pl-3 text-[13px] font-semibold leading-snug"
                    style={{
                      color: COLORS.value,
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {field.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ReportPageShell>
  );
}
