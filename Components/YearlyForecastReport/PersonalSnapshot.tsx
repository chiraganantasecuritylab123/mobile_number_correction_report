"use client";

import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Star,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell, { REPORT_COLORS } from "../ReportPageShell";
import { CornerFlourish } from "../CoverPageDecorations";

const COLORS = {
  maroon: "#5c1818",
  maroonDeep: "#4a1010",
  gold: "#b8860b",
  goldLight: "#d4af37",
  goldMuted: "#a96505",
  brown: REPORT_COLORS.brown,
  slate: "#4a4540",
  body: "#3c2a21",
  value: "#1c2430",
} as const;

const ASSETS = {
  pattern2: "/assets/cover/pattern-2.png",
  gateway: "/assets/yearly-forecast-report/OIG2-removebg-preview (2).png",
  mars: "/assets/yearly-forecast-report/OIG3.nG0DzLP-removebg-preview.png",
  rahu: "/assets/yearly-forecast-report/OIG3-removebg-preview (1).png",
} as const;

export type PersonalSnapshotProps = {
  language?: "en" | "hi";
  pageNumber?: string;
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
    title: "YOUR PERSONAL SNAPSHOT",
    introYearLabel: "Personal Year 1",
    introMars: "7-year Mars period ends",
    introRahu: "18-year Rahu period begins",
    introBoth: "Both systems point to the same message:",
    introClose: "this is a year of new beginnings.",
    detail: "Detail",
    value: "Value",
    rareTitle: "A RARE MATCH IN YOUR CHART",
    labels: {
      name: "Name",
      dob: "Date of birth",
      tob: "Time of birth",
      pob: "Place of birth",
      lagna: "Lagna (Ascendant)",
      rashi: "Moon sign (Rashi)",
      nakshatra: "Nakshatra",
      currentDasha: "Current Mahadasha",
      nextDasha: "Next Mahadasha",
      mulank: "Mulank (birth number)",
      bhagyank: "Bhagyank (destiny number)",
      nameNumber: "Name number (Chaldean)",
      personalYear: (year: string | number) => `Personal Year ${year}`,
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
    title: "आपका व्यक्तिगत स्नैपशॉट",
    introYearLabel: "व्यक्तिगत वर्ष 1",
    introMars: "7-वर्षीय मंगल दशा समाप्त",
    introRahu: "18-वर्षीय राहु दशा प्रारंभ",
    introBoth: "दोनों पद्धतियाँ एक ही संदेश देती हैं:",
    introClose: "यह नए आरंभ का वर्ष है।",
    detail: "विवरण",
    value: "मान",
    rareTitle: "आपकी कुंडली में एक दुर्लभ संयोग",
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

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon }}>
      {children}
    </span>
  );
}

function NumberBadge({ num }: { num: string }) {
  return (
    <div
      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full"
      style={{
        background: `linear-gradient(180deg, ${COLORS.maroon} 0%, ${COLORS.maroonDeep} 100%)`,
        boxShadow: "0 0 0 1.5px rgba(212,175,55,0.5)",
      }}
    >
      <span className="text-[12px] font-bold leading-none" style={{ color: "#f6e6c4" }}>
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
        color: COLORS.goldMuted,
      }}
    >
      {children}
    </div>
  );
}

function CancerGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" aria-hidden>
      <circle cx="8" cy="9" r="3.1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M11 9.2c2.4 0 4.6-1.15 5.6-2.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16" cy="15" r="3.1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M13 14.8c-2.4 0-4.6 1.15-5.6 2.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SagittariusGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="none" aria-hidden>
      <path d="M7 17L17.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11.5 6.5H17.5V12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 11.2L12.8 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function OrnamentDivider({ width = 160 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      style={{ width }}
      aria-hidden
    />
  );
}

function TitleBanner({ title }: { title: string }) {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[620px] items-center justify-center overflow-hidden rounded-[6px] px-4 py-2.5"
      style={{
        border: "1.5px solid rgba(184,134,11,0.75)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.28)",
        background: "rgba(253, 245, 230, 0.55)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[48px] w-[48px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[48px] w-[48px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[48px] w-[48px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[48px] w-[48px] rotate-180" />
      <OrnamentDivider width={78} />
      <h2
        className="mx-2.5 text-center text-[17px] font-bold tracking-[0.12em]"
        style={{ color: COLORS.maroon }}
      >
        {title}
      </h2>
      <OrnamentDivider width={78} />
    </div>
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[6px] ${className}`}
      style={{
        border: "1.6px solid rgba(184,134,11,0.72)",
        boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.28)",
        background: "rgba(253, 245, 230, 0.36)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[62px] w-[62px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[62px] w-[62px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[62px] w-[62px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[62px] w-[62px] rotate-180" />
      {children}
    </div>
  );
}

export default function PersonalSnapshot({
  language = "en",
  pageNumber = "02",
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
}: PersonalSnapshotProps) {
  const t = COPY[language];
  const isHi = language === "hi";
  const firstName = clientName.split(" ")[0] ?? clientName;
  const iconProps = { size: 13, strokeWidth: 1.9 } as const;
  const pick = (explicit: string | undefined, translated: string) => explicit ?? translated;

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
          <CancerGlyph />
        </IconWell>
      ),
    },
    {
      label: t.labels.rashi,
      value: pick(moonSign, t.values.rashi),
      icon: (
        <IconWell>
          <SagittariusGlyph />
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
    { label: t.labels.mulank, value: pick(mulank, t.values.mulank), badge: "9" },
    { label: t.labels.bhagyank, value: pick(bhagyank, t.values.bhagyank), badge: "4" },
    { label: t.labels.nameNumber, value: pick(nameNumber, t.values.nameNumber), badge: "3" },
    {
      label: t.labels.personalYear(forecastYear),
      value: pick(personalYear, t.values.personalYear),
      badge: "1",
    },
  ];

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-snapshot"
      padding="30px 40px 28px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <header className="shrink-0">
          <TitleBanner title={t.title} />
        </header>

        {/* Intro: gateway + summary */}
        <section className="mt-3 flex shrink-0 items-center gap-3 px-1">
          <Image
            src={ASSETS.gateway}
            alt=""
            width={118}
            height={78}
            className="h-[78px] w-[118px] shrink-0 object-contain"
            priority
          />
          <div
            className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[14px] leading-[1.55]" : "text-[14.5px] leading-[1.5]"}`}
            style={{ color: COLORS.body }}
          >
            {isHi ? (
              <p>
                {firstName}, {forecastYear} आपके लिए <Accent>{t.introYearLabel}</Accent> है, और
                अक्टूबर में आपकी <Accent>{t.introMars}</Accent> होती है तथा एक{" "}
                <Accent>{t.introRahu}</Accent> होती है।
              </p>
            ) : (
              <p>
                {firstName}, {forecastYear} is a <Accent>{t.introYearLabel}</Accent> for you, and
                in October your <Accent>{t.introMars}</Accent> and an{" "}
                <Accent>{t.introRahu}</Accent>.
              </p>
            )}
            <p className="mt-1.5">{t.introBoth}</p>
            <p
              className={`mt-0.5 font-bold ${isHi ? "text-[15.5px]" : "text-[16px]"}`}
              style={{ color: COLORS.maroon, fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {t.introClose}
            </p>
          </div>
        </section>

        {/* Detail / Value table */}
        <OrnateBox className="mt-3 flex min-h-0 flex-1 flex-col px-4 py-2.5">
          <div className="relative flex min-h-0 flex-1 flex-col font-nunito-sans">
            <div
              className="pointer-events-none absolute bottom-1 left-1/2 top-8 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(184,134,11,0.55) 8%, rgba(184,134,11,0.55) 92%, transparent 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[30px] h-[6px] w-[6px] -translate-x-1/2 rotate-45"
              style={{ background: COLORS.gold }}
              aria-hidden
            />

            <div
              className="grid grid-cols-2 py-1.5 text-center text-[12px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.goldMuted }}
            >
              <span>{t.detail}</span>
              <span>{t.value}</span>
            </div>

            <div className="flex min-h-0 flex-1 flex-col justify-between">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-2 items-center py-[5px]"
                  style={{ borderTop: "1px solid rgba(184,134,11,0.24)" }}
                >
                  <div className="flex min-w-0 items-center gap-2 pr-4">
                    {field.badge ? <NumberBadge num={field.badge} /> : field.icon}
                    <span
                      className="truncate text-[12.5px] font-semibold"
                      style={{ color: COLORS.body }}
                    >
                      {field.label}
                    </span>
                  </div>
                  <p
                    className="pl-5 text-[13px] font-semibold leading-snug"
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
        </OrnateBox>

        {/* Rare match */}
        <OrnateBox className="mt-3 flex shrink-0 flex-col px-4 py-2.5">
          <div className="flex items-center justify-center gap-2">
            <OrnamentDivider width={70} />
            <p
              className={`text-center font-bold tracking-[0.1em] ${isHi ? "text-[12.5px]" : "text-[13px]"}`}
              style={{ color: COLORS.maroon }}
            >
              {t.rareTitle}
            </p>
            <OrnamentDivider width={70} />
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex shrink-0 items-center gap-1.5 pl-0.5">
              <Image
                src={ASSETS.mars}
                alt="Mars"
                width={78}
                height={78}
                className="h-[78px] w-[78px] object-contain"
              />
              <ArrowRight size={20} strokeWidth={2.2} style={{ color: COLORS.goldMuted }} />
              <Image
                src={ASSETS.rahu}
                alt="Rahu"
                width={86}
                height={86}
                className="h-[86px] w-[86px] object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={`font-nunito-sans ${isHi ? "text-[13px] leading-[1.5]" : "text-[13px] leading-[1.5]"}`}
                style={{ color: COLORS.body }}
              >
                {isHi ? (
                  <>
                    आपके <Accent>मूलांक 9</Accent> पर <Accent>मंगल</Accent> का स्वामित्व है, और आप{" "}
                    <Accent>मंगल महादशा</Accent> पूरी कर रहे हैं। आपके <Accent>भाग्यांक 4</Accent> पर{" "}
                    <Accent>राहु</Accent> का स्वामित्व है, और आप <Accent>राहु महादशा</Accent> में
                    प्रवेश कर रहे हैं। {forecastYear} में आप अपने जन्म अंक की ऊर्जा से भाग्य अंक की
                    ऊर्जा में कदम रखते हैं।
                  </>
                ) : (
                  <>
                    Your <Accent>Mulank 9</Accent> is ruled by <Accent>Mars</Accent>, and you are
                    finishing a <Accent>Mars Mahadasha</Accent>. Your <Accent>Bhagyank 4</Accent>{" "}
                    is ruled by <Accent>Rahu</Accent>, and you are entering a{" "}
                    <Accent>Rahu Mahadasha</Accent>. In {forecastYear} you step from the energy of
                    your birth number into the energy of your destiny number.
                  </>
                )}
              </p>
            </div>
          </div>
        </OrnateBox>
      </div>
    </ReportPageShell>
  );
}
