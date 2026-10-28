"use client";

import Image from "next/image";
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
  saturn: "/assets/yearly-forecast-report/OIG1-removebg-preview (2).png",
  solar: "/assets/yearly-forecast-report/make_proepr_image_png_image_generate_please-removebg-preview.png",
  lunar: "/assets/yearly-forecast-report/make_proepr_image_png_image_generate_please__1_-removebg-preview.png",
  mercury: "/assets/yearly-forecast-report/OIG2-removebg-preview (1).png",
  mountain: "/assets/yearly-forecast-report/Golden Engraved Mountain Sunrise Panorama.png",
} as const;

export type SadeSatiEclipsesProps = {
  language?: "en" | "hi";
  pageNumber?: string;
};

const COPY = {
  en: {
    sadeTitle: "Sade Sati and Dhaiya Status",
    sadeLead: "You are not in Sade Sati. You are in",
    sadeAccent: "Shani Dhaiya",
    sadeRest:
      "(Saturn in the 4th from your Moon) until 3 June 2027. There is a break from 3 June to 20 October, then a short final phase until Saturn leaves Pisces for good in 2028.",
    eclipseTitle: "Eclipses and Retrogrades",
    items: [
      {
        key: "solar-annular",
        icon: "solar" as const,
        parts: [
          { text: "6 Feb 2027", accent: true },
          { text: ", annular solar eclipse in ", accent: false },
          { text: "Capricorn", accent: true },
          {
            text: " (your 7th house). Avoid signing partnership agreements that week.",
            accent: false,
          },
        ],
      },
      {
        key: "solar-total",
        icon: "solar" as const,
        parts: [
          { text: "2 Aug 2027", accent: true },
          { text: ", total solar eclipse in ", accent: false },
          { text: "Cancer", accent: true },
          {
            text: ", very close to your Lagna degree. This is the most personal eclipse of the year. Avoid big launches between 30 July and 5 August.",
            accent: false,
          },
        ],
      },
      {
        key: "lunar",
        icon: "lunar" as const,
        parts: [
          { text: "The three lunar eclipses in 2027 (", accent: false },
          { text: "20 Feb, 18 Jul, 17 Aug", accent: true },
          { text: ") are penumbral and minor.", accent: false },
        ],
      },
      {
        key: "mercury",
        icon: "mercury" as const,
        parts: [
          { text: "Mercury retrograde: ", accent: true },
          { text: "10 Feb – 4 Mar, 11 Jun – 5 Jul, 8 Oct – 29 Oct", accent: true },
          {
            text: ". Double-check contracts, payments and important messages in these windows.",
            accent: false,
          },
        ],
      },
    ],
    footnote:
      "Calculated with Swiss Ephemeris, Lahiri ayanamsa. Dates can differ by a day between panchang sources.",
  },
  hi: {
    sadeTitle: "साढ़े साती और ढैय्या स्थिति",
    sadeLead: "आप साढ़े साती में नहीं हैं। आप",
    sadeAccent: "शनि ढैय्या",
    sadeRest:
      "में हैं (चंद्र से चतुर्थ भाव में शनि) 3 जून 2027 तक। 3 जून से 20 अक्टूबर तक विराम है, फिर एक छोटा अंतिम चरण जब तक शनि 2028 में मीन राशि को स्थायी रूप से नहीं छोड़ देते।",
    eclipseTitle: "ग्रहण और वक्री गति",
    items: [
      {
        key: "solar-annular",
        icon: "solar" as const,
        parts: [
          { text: "6 फरवरी 2027", accent: true },
          { text: ", मकर में वलयाकार सूर्य ग्रहण", accent: false },
          { text: " (आपका सप्तम भाव)", accent: true },
          { text: "। उस सप्ताह साझेदारी समझौतों पर हस्ताक्षर न करें।", accent: false },
        ],
      },
      {
        key: "solar-total",
        icon: "solar" as const,
        parts: [
          { text: "2 अगस्त 2027", accent: true },
          { text: ", कर्क में पूर्ण सूर्य ग्रहण", accent: false },
          { text: ", आपके लग्न अंश के बहुत निकट", accent: true },
          {
            text: "। यह वर्ष का सबसे व्यक्तिगत ग्रहण है। 30 जुलाई से 5 अगस्त के बीच बड़े शुभारंभ से बचें।",
            accent: false,
          },
        ],
      },
      {
        key: "lunar",
        icon: "lunar" as const,
        parts: [
          { text: "2027 के तीन चंद्र ग्रहण (", accent: false },
          { text: "20 फरवरी, 18 जुलाई, 17 अगस्त", accent: true },
          { text: ") उपछाया ग्रहण हैं और हल्के हैं।", accent: false },
        ],
      },
      {
        key: "mercury",
        icon: "mercury" as const,
        parts: [
          { text: "बुध वक्री: ", accent: true },
          { text: "10 फरवरी – 4 मार्च, 11 जून – 5 जुलाई, 8 अक्टूबर – 29 अक्टूबर", accent: true },
          {
            text: "। इन अवधियों में अनुबंध, भुगतान और महत्वपूर्ण संदेश दोबारा जाँचें।",
            accent: false,
          },
        ],
      },
    ],
    footnote:
      "स्विस एफेमेरिस, लाहिरी अयनांश से गणना। पंचांग स्रोतों में तिथि एक दिन आगे-पीछे हो सकती है।",
  },
} as const;

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon }}>
      {children}
    </span>
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

function SectionTitle({ title, isHi }: { title: string; isHi: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <OrnamentDivider width={72} />
      <h2
        className={`whitespace-nowrap text-center font-bold leading-none tracking-[0.02em] ${isHi ? "text-[24px]" : "text-[28px]"}`}
        style={{ color: COLORS.maroon }}
      >
        {title}
      </h2>
      <OrnamentDivider width={72} />
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden>
      <path
        d="M8 1L9.2 6.2L14.5 8L9.2 9.8L8 15L6.8 9.8L1.5 8L6.8 6.2Z"
        fill={COLORS.gold}
      />
    </svg>
  );
}

function RowDivider() {
  return (
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center py-0.5">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(184,134,11,0.55) 18%, rgba(184,134,11,0.55) 82%, transparent 100%)",
        }}
      />
      <svg
        viewBox="0 0 16 16"
        className="absolute h-3.5 w-3.5"
        style={{ color: COLORS.gold }}
        aria-hidden
      >
        <path
          d="M8 1L9.2 6.2L14.5 8L9.2 9.8L8 15L6.8 9.8L1.5 8L6.8 6.2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/** Dashed gold orbital ring matching the reference round icons */
function RoundFrame({
  size,
  children,
  className = "",
}: {
  size: number;
  children: ReactNode;
  className?: string;
}) {
  const inset = 5;
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="pointer-events-none absolute inset-0"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 1.25}
          fill="none"
          stroke={COLORS.gold}
          strokeWidth="1.35"
          strokeDasharray="3.2 2.8"
          opacity="0.85"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - inset}
          fill="none"
          stroke={COLORS.goldLight}
          strokeWidth="0.7"
          strokeDasharray="2 3.5"
          opacity="0.45"
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full"
        style={{ padding: inset + 2 }}
      >
        {children}
      </div>
    </div>
  );
}

function EventIcon({ name }: { name: "solar" | "lunar" | "mercury" }) {
  const frame = 108;
  if (name === "lunar") {
    return (
      <RoundFrame size={frame}>
        <Image
          src={ASSETS.lunar}
          alt=""
          width={96}
          height={96}
          className="h-full w-full object-contain"
        />
      </RoundFrame>
    );
  }
  if (name === "mercury") {
    return (
      <RoundFrame size={frame}>
        <Image
          src={ASSETS.mercury}
          alt=""
          width={100}
          height={88}
          className="h-[88%] w-[94%] object-contain"
        />
      </RoundFrame>
    );
  }
  return (
    <RoundFrame size={frame}>
      <Image
        src={ASSETS.solar}
        alt=""
        width={96}
        height={96}
        className="h-full w-full object-contain"
      />
    </RoundFrame>
  );
}

export default function SadeSatiEclipses({
  language = "en",
  pageNumber = "06",
}: SadeSatiEclipsesProps) {
  const t = COPY[language];
  const isHi = language === "hi";

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-sadesati"
      padding="22px 34px 12px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Sade Sati section */}
        <OrnateBox className="flex shrink-0 flex-col px-5 pb-4 pt-3.5">
          <SectionTitle title={t.sadeTitle} isHi={isHi} />
          <div className="mt-3.5 flex items-center gap-5">
            <RoundFrame size={168}>
              <Image
                src={ASSETS.saturn}
                alt="Saturn"
                width={160}
                height={160}
                className="h-full w-full object-contain"
                priority
              />
            </RoundFrame>
            <p
              className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[15.5px] leading-[1.55]" : "text-[16.5px] leading-[1.55]"}`}
              style={{ color: COLORS.value }}
            >
              {t.sadeLead} <Accent>{t.sadeAccent}</Accent> {t.sadeRest}
            </p>
          </div>
        </OrnateBox>

        {/* Eclipses and Retrogrades */}
        <OrnateBox className="mt-3 flex min-h-0 flex-1 flex-col px-5 py-3.5">
          <SectionTitle title={t.eclipseTitle} isHi={isHi} />

          <div className="mt-2.5 flex min-h-0 flex-1 flex-col justify-evenly">
            {t.items.map((item, index) => (
              <div key={item.key}>
                {index > 0 ? <RowDivider /> : null}
                <div className="flex items-center gap-3.5 py-1.5">
                  <EventIcon name={item.icon} />
                  <Spark />
                  <p
                    className={`min-w-0 flex-1 font-nunito-sans ${isHi ? "text-[14.5px] leading-[1.5]" : "text-[15.5px] leading-[1.5]"}`}
                    style={{ color: COLORS.value }}
                  >
                    {item.parts.map((part, partIndex) =>
                      part.accent ? (
                        <Accent key={`${item.key}-${partIndex}`}>{part.text}</Accent>
                      ) : (
                        <span key={`${item.key}-${partIndex}`}>{part.text}</span>
                      ),
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </OrnateBox>

        <p
          className={`mt-2 shrink-0 px-2 text-center italic font-nunito-sans ${isHi ? "text-[12.5px] leading-snug" : "text-[13px] leading-snug"}`}
          style={{ color: COLORS.slate }}
        >
          {t.footnote}
        </p>

        <div className="mt-auto -mx-[34px] -mb-[12px] w-[calc(100%+68px)] shrink-0 overflow-hidden">
          <Image
            src={ASSETS.mountain}
            alt=""
            width={794}
            height={140}
            className="h-[112px] w-full object-cover object-center"
            priority
          />
        </div>
      </div>
    </ReportPageShell>
  );
}
