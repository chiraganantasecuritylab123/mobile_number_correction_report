"use client";

import Image from "next/image";
import { Globe, Phone } from "lucide-react";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";
import HeaderCommun from "./HeaderCommun";
import type { ReactNode } from "react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ASTRO = {
  parchment: "#F8EEDC",
  maroon:    "#3a0a0a",
  gold:      "#B8860B",
  goldLight: "#c8960c",
  brown:     "#5a3a00",
  body:      "#2a1a00",
  cream:     "#fdf6e8",
  border:    "#C89A2B",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────────

export type SummarySection = {
  number: number;
  title: string;
  titleHi: string;
  body: string;
  bodyHi: string;
};

export type CompleteSummaryProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  introText?: string;
  introTextHi?: string;
  sections?: SummarySection[];
  disclaimerText?: string;
  disclaimerTextHi?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

// ─── Corner Ornaments ──────────────────────────────────────────────────────────

function PageOrnamentalFrame() {
  return (
    <>
      <CornerFlourish className="pointer-events-none absolute left-[10px] top-[10px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[10px] top-[10px] h-[52px] w-[52px] -scale-x-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] left-[10px] h-[52px] w-[52px] -scale-y-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] right-[10px] h-[52px] w-[52px] scale-[-1]" />
    </>
  );
}

// ─── Gold Arrow Prefix ─────────────────────────────────────────────────────────

function GoldArrow() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M1 7 L7 2 L7 5 L13 5 L13 2 L18 7 L13 12 L13 9 L7 9 L7 12 Z"
        fill={ASTRO.gold} opacity="0.85"/>
    </svg>
  );
}

// ─── Section Row ───────────────────────────────────────────────────────────────

function SectionRow({ section, language = "en", isLast = false }: {
  section: SummarySection; language?: string; isLast?: boolean;
}) {
  const title = language === "en" ? section.title : section.titleHi;
  const body  = language === "en" ? section.body  : section.bodyHi;

  return (
    <div>
      <div style={{ padding: "8px 0 6px" }}>
        {/* Title row: gold arrow + number + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <GoldArrow />
          <h2 style={{
            fontWeight: 700,
            fontSize: 14,
            color: ASTRO.maroon,
            letterSpacing: "0.04em",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            {section.number}. {title}
          </h2>
        </div>
        {/* Body text */}
        <p style={{
          fontSize: 12,
          color: ASTRO.body,
          lineHeight: 1.65,
          margin: "0 0 0 24px",
          textAlign: "justify",
        }}>
          {body}
        </p>
      </div>
      {/* Dashed separator (not after last) */}
      {!isLast && (
        <div style={{ borderTop: "1.2px dashed rgba(184,134,11,0.45)", margin: "0 0 2px" }} />
      )}
    </div>
  );
}

// ─── Instagram Icon ────────────────────────────────────────────────────────────

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={ASTRO.gold} strokeWidth="1.8" aria-hidden>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}

// ─── Default Data ──────────────────────────────────────────────────────────────

const defaultSections: SummarySection[] = [
  {
    number: 1,
    title: "OVERALL FINANCIAL SITUATION",
    titleHi: "समग्र वित्तीय स्थिति",
    body: "Your financial condition is a result of the combined impact of past karmic debts, planetary positions, unfavorable dasha periods and your current choices and circumstances. These factors have created repeated financial pressure, unstable income, unexpected expenses and difficulties in saving or clearing debts. However, this is a temporary phase and with the right awareness, remedies and disciplined actions, you can break these patterns and move towards long-term financial stability and abundance.",
    bodyHi: "आपकी वर्तमान वित्तीय स्थिति पिछले कर्म ऋणों, ग्रहों की स्थिति, प्रतिकूल दशा काल, और आपके वर्तमान निर्णयों तथा परिस्थितियों के संयुक्त प्रभाव का परिणाम है। इन कारणों से आय में देरी, अनावश्यक खर्च, बचत की कमी, ऋण का बढ़ना और आर्थिक अस्थिरता जैसी स्थितियाँ उत्पन्न हो रही हैं। यह स्थिति स्थायी नहीं है। सही जागरूकता, उपाय और अनुशासित कार्यप्रणाली से आप इन बाधाओं को दूर कर सकते हैं और दीर्घकालिक आर्थिक स्थिरता तथा समृद्धि प्राप्त कर सकते हैं।",
  },
  {
    number: 2,
    title: "MAIN REASONS BEHIND FINANCIAL PROBLEMS",
    titleHi: "वित्तीय समस्याओं के मुख्य कारण",
    body: "The primary causes of your financial struggles are weak planetary positions, malefic influences of Saturn and Mars, afflicted 2nd, 6th, 8th and 12th houses, and the impact of past financial karmas. These have led to income delays, job or business obstacles, high expenses, lack of savings, debt accumulation and mental stress related to money. Family responsibilities and external factors are also contributing to the pressure.",
    bodyHi: "आपकी कुंडली में शनि और मंगल के अशुभ प्रभाव, दूरस्थान भावों (2, 6, 8, 12) पर इनका प्रभाव, और पूर्वजों के कर्मों का भार आपकी आर्थिक प्रगति में अवरोध उत्पन्न कर रहा है। द्वितीय भाव (धन) और एकादश भाव (लाभ) पर प्रतिकूल दृष्टि और पाप ग्रहों का प्रभाव आय में रुकावट, धन संचय में कठिनाई और बार-बार होने वाले खर्चों का कारण बन रहा है।",
  },
  {
    number: 3,
    title: "CURRENT PLANETARY & TIME IMPACT",
    titleHi: "वर्तमान ग्रहीय एवं समय प्रभाव",
    body: "You are currently going through Saturn Mahadasha and Mars Antardasha which is creating heavy financial responsibilities, delays and pressure. Saturn's transit in the 2nd house is affecting your savings and cash flow, while its aspect on the 6th and 11th houses is increasing debts and struggles. Mars Antardasha is adding impulsive expenses, disputes and financial instability. This period will continue till 05 Feb 2026. Relief will gradually increase after this phase, especially when the next Antardasha begins.",
    bodyHi: "आप वर्तमान में शनि महादशा और मंगल अंतर्दशा से गुजर रहे हैं, जो जीवन में वित्तीय दबाव, देरी, संघर्ष और दायित्वों को बढ़ाने वाली अवधि है। शनि का गोचर द्वितीय भाव में होने से आपकी बचत और नकदी प्रवाह प्रभावित हो रहा है, जबकि मंगल की अंतर्दशा ऋण, विवाद और खर्चों को बढ़ा रही है। यह अवधि 05 फरवरी 2026 तक चलेगी। इसके बाद स्थिति में क्रमशः सुधार होगा।",
  },
  {
    number: 4,
    title: "FINANCIAL PATTERNS OBSERVED",
    titleHi: "देखे गए वित्तीय पैटर्न",
    body: "Irregular income, unnecessary expenses, lack of long-term planning, repeated debts and difficulty in maintaining savings are the main patterns observed. At times, sudden expenses and financial losses occur without any clear reason. Emotional decisions and lack of financial discipline also play a major role in keeping you stuck in the same financial cycle.",
    bodyHi: "अनियमित आय, बिना योजना के खर्च, बचत की कमी, बार-बार ऋण लेना और किस्तों में विलंब आपके वित्तीय पैटर्न को दर्शाते हैं। कभी-कभी बिना कारण आर्थिक हानि होना, गलत निवेश, और भावनाओं में आकर निर्णय लेना भी नुकसान का कारण बनता है। अनुशासन की कमी और वित्तीय योजना न बनाना आपको उसी स्थिति में रोके हुए हैं।",
  },
  {
    number: 5,
    title: "POSITIVE FACTORS & STRENGTHS",
    titleHi: "सकारात्मक कारक एवं शक्तियाँ",
    body: "Despite challenges, you have several positive factors in your chart. There are supportive planets that can give good income, wealth and stability when properly activated. Your hard work, determination and spiritual inclination are strong assets. With the right remedies, guidance and disciplined financial planning, you have the full potential to achieve financial growth, clear debts and build long-term wealth.",
    bodyHi: "आपकी कुंडली में कुछ अत्यंत शुभ योग और शक्तिशाली ग्रह स्थितियाँ भी मौजूद हैं जो आपको आर्थिक उन्नति, मान-सम्मान और स्थिरता प्रदान कर सकती हैं। आपकी मेहनत करने की क्षमता, ईमानदारी, निर्णय लेने की शक्ति और आध्यात्मिक रक्षा आपकी सबसे बड़ी ताकतें हैं। गुरु और शुक्र के शुभ प्रभाव आपको सही दिशा में मार्गदर्शन और अवसर प्रदान करेंगे।",
  },
  {
    number: 6,
    title: "PATH TO FINANCIAL FREEDOM",
    titleHi: "वित्तीय स्वतंत्रता का मार्ग",
    body: "To overcome financial problems, it is important to balance planetary energies, clear karmic debts, follow effective remedies and maintain strict financial discipline. Avoid unnecessary risks, control expenses, save regularly and invest wisely. Stay consistent in spirituality and positive actions. By doing so, you can remove financial blocks, attract abundance and enjoy a peaceful and prosperous life.",
    bodyHi: "ग्रहों के दोषों को शांत करने हेतु उचित उपाय, ऋण मुक्ति के विशेष अनुशासन, कर्म भार को हल्का करने के उपाय, वित्तीय अनुशासन, नियमित बचत, सही निवेश और सकारात्मक जीवन दृष्टिकोण अपनाना अत्यंत आवश्यक है। आध्यात्मिक साधना, दान-पुण्य और संयमित जीवनशैली से आप धीरे-धीरे सभी आर्थिक बाधाओं से मुक्त होकर धन, सुख, शांति और समृद्धि की ओर अग्रसर हो सकते हैं।",
  },
];

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function CompleteSummary({
  pageNumber = "08",
  language = "en",
  introText = "This section brings together all key findings of your financial analysis. It explains the reasons behind your current financial challenges, the planetary and karmic influences at play, the positive factors, and the practical path to financial freedom and prosperity.",
  introTextHi = "यह अनुभाग आपके वित्तीय विश्लेषण के सभी महत्वपूर्ण निष्कर्षों को एक साथ प्रस्तुत करता है। इसमें आपकी वर्तमान वित्तीय चुनौतियों के कारण, ग्रहों और कर्मों का प्रभाव, सकारात्मक संकेत और वित्तीय स्वतंत्रता की दिशा में आगे बढ़ने का मार्ग विस्तार से दिया गया है।",
  sections = defaultSections,
  disclaimerText = "This complete summary is prepared based on Vedic Astrology principles, planetary positions, dasha periods and karmic indicators. Follow the suggested remedies, guidance and practical steps sincerely to break free from financial burdens and create a life of abundance, peace and prosperity.",
  disclaimerTextHi = "यह पूर्ण सारांश वैदिक ज्योतिष के सिद्धांतों, ग्रह स्थितियों, दशा-काल और कर्म संकेतों के आधार पर तैयार किया गया है। सुझाए गए उपायों और मार्गदर्शन का अनुसरण करके आप वित्तीय बोझ से मुक्त हो सकते हैं और समृद्धि, शांति और सुख की ओर अग्रसर हो सकते हैं।",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: CompleteSummaryProps) {
  const intro  = language === "en" ? introText  : introTextHi;
  const discl  = language === "en" ? disclaimerText : disclaimerTextHi;

  return (
    <BusinessNameReportPageShell
      padding="14px 36px 12px"
      pageNumber={pageNumber}
      style={{ backgroundColor: ASTRO.parchment }}
    >
      <PageOrnamentalFrame />

      <div className="font-nunito-sans" style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>

        <HeaderCommun
          reportName={language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"}
          title={language === "en" ? "COMPLETE SUMMARY" : "पूर्ण सारांश"}
          description={intro}
          breackWord={[2]}
        />

        <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 4px" }}>
          <OrnamentDivider width={340} />
        </div>

        {/* ── SECTIONS ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {sections.map((section, i) => (
            <SectionRow
              key={section.number}
              section={section}
              language={language}
              isLast={i === sections.length - 1}
            />
          ))}
        </div>

        {/* ── DISCLAIMER BOX ── */}
        <div style={{
          border: `1.5px solid ${ASTRO.border}`,
          borderRadius: 6,
          padding: "10px 16px",
          backgroundColor: "rgba(253,246,232,0.7)",
          margin: "8px 0 20px",
        }}>
          <p style={{
            fontStyle: "italic", fontSize: 12,
            color: ASTRO.body, lineHeight: 1.65, margin: 0, textAlign: "justify",
          }}>
            {discl}
          </p>
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 20,
          color: ASTRO.body, fontSize: 13,
          paddingBottom: 2,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Globe size={15} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
            <span>{website}</span>
          </div>
          <div style={{ width: 1, height: 13, backgroundColor: ASTRO.border }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Phone size={15} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
            <span>{phone}</span>
          </div>
          <div style={{ width: 1, height: 13, backgroundColor: ASTRO.border }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <InstagramIcon size={15} />
            <span>{instagram}</span>
          </div>
        </div>

      </div>
    </BusinessNameReportPageShell>
  );
}