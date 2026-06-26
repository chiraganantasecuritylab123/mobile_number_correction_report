"use client";

import Image from "next/image";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import {
  Coins,
  FileText,
  Globe,
  Home,
  IndianRupee,
  Orbit,
  Phone,
  Scale,
  Star,
  Sun,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";
import HeaderCommun from "./HeaderCommun";

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
  maroon: "#6E1F1F",
  navy: "#0A1D37",
  gold: "#B8860B",
  borderGold: "#C89A2B",
  darkBrown: "#5C2D1A",
  body: "#6A5A4A",
  value: "#3D2A20",
  cardBg: "#FDF9F0",
  cardBorder: "#D9C5B2",
  textDark: "#2A2018",
} as const;

const ASSETS = {
  backgroundImage: "/assets/cover-bg.png",
  penLogo: "/assets/signatureReport/logo-main.png",
  pageBadge: "/assets/signatureReport/roundCircleImage.png",
} as const;

export type HouseStatus = "Strong" | "Moderate" | "Weak";

export type HouseAnalysisFields = {
  houseStatus: HouseStatus;
  lord: string;
  lordPlacement: string;
  aspectsReceived: string;
  keyObservations: string;
};

export type HouseAnalysisSection = {
  id: string;
  houseNumber: string;
  houseNumberHi: string;
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  themeColor: string;
  icon: LucideIcon;
  fields: {
    houseStatus: string;
    houseStatusHi: string;
    lord: string;
    lordHi: string;
    lordPlacement: string;
    lordPlacementHi: string;
    aspectsReceived: string;
    aspectsReceivedHi: string;
    keyObservations: string;
    keyObservationsHi: string;
  };
  detailedImpactParagraphs: string[];
  detailedImpactParagraphsHi: string[];
};

export type HouseAnalysisForWealthProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  sectionTitle?: string;
  sectionTitleHi?: string;
  sectionSubtitle?: string;
  sectionSubtitleHi?: string;
  sections?: HouseAnalysisSection[];
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultSections: HouseAnalysisSection[] = [
  {
    id: "2nd",
    houseNumber: "2nd",
    houseNumberHi: "2रा",
    title: "2nd HOUSE ANALYSIS",
    titleHi: "द्वितीय भाव विश्लेषण",
    subtitle: "Family Wealth & Savings",
    subtitleHi: "पारिवारिक धन एवं बचत",
    themeColor: "#1B4332",
    icon: Coins,
    fields: {
      houseStatus: "Strong",
      houseStatusHi: "प्रबल",
      lord: "Jupiter",
      lordHi: "गुरु",
      lordPlacement: "6th House",
      lordPlacementHi: "6ठा भाव",
      aspectsReceived: "Jupiter (Trine), Venus (Sextile)",
      aspectsReceivedHi: "गुरु (त्रिकोण), शुक्र (षट्कोण)",
      keyObservations: "Good potential for savings and family wealth.",
      keyObservationsHi: "बचत और पारिवारिक धन के लिए अच्छी संभावनाएँ।",
    },
    detailedImpactParagraphs: [
      "The 2nd house represents accumulated wealth, savings, family assets, speech and values. A strong 2nd house indicates the ability to build and preserve wealth through family support and disciplined financial habits.",
      "With Jupiter, the lord of this house, well placed in the 6th house and receiving trine from Jupiter and sextile from Venus, it shows a positive combination for steady wealth growth.",
      "You have the capacity to save money consistently and create long-term financial security through wisdom, ethical values and support from family members.",
    ],
    detailedImpactParagraphsHi: [
      "दूसरा भाव संचित धन, बचत, पारिवारिक संपत्ति, वाणी और मूल्यों का प्रतिनिधित्व करता है। प्रबल दूसरा भाव पारिवारिक समर्थन और अनुशासित वित्तीय आदतों के माध्यम से धन निर्माण और संरक्षण की क्षमता को दर्शाता है।",
      "गुरु, इस भाव के स्वामी के रूप में, 6ठे भाव में स्थित हैं और गुरु से त्रिकोण तथा शुक्र से षट्कोण प्राप्त कर रहे हैं, जो स्थिर धन वृद्धि के लिए सकारात्मक संयोजन दर्शाता है।",
      "आपमें लगातार बचत करने और ज्ञान, नैतिक मूल्यों और परिवार के सदस्यों के समर्थन के माध्यम से दीर्घकालिक वित्तीय सुरक्षा बनाने की क्षमता है।",
    ],
  },
  {
    id: "6th",
    houseNumber: "6th",
    houseNumberHi: "6ठा",
    title: "6th HOUSE ANALYSIS",
    titleHi: "षष्ठ भाव विश्लेषण",
    subtitle: "Debts, Loans & Financial Enemies",
    subtitleHi: "ऋण, कर्ज़ एवं वित्तीय शत्रु",
    themeColor: "#6E1F1F",
    icon: FileText,
    fields: {
      houseStatus: "Moderate",
      houseStatusHi: "मध्यम",
      lord: "Mars",
      lordHi: "मंगल",
      lordPlacement: "8th House",
      lordPlacementHi: "8वाँ भाव",
      aspectsReceived: "Saturn (Square)",
      aspectsReceivedHi: "शनि (वर्ग)",
      keyObservations: "Debts exist but can be managed with effort.",
      keyObservationsHi: "ऋण मौजूद हैं लेकिन प्रयास से प्रबंधित किए जा सकते हैं।",
    },
    detailedImpactParagraphs: [
      "The 6th house governs debts, loans, financial enemies and day-to-day financial obligations. A moderate 6th house suggests existing liabilities that require conscious management rather than complete absence of debt.",
      "With Mars as the lord placed in the 8th house and receiving a square aspect from Saturn, your chart indicates pressure in repaying loans and handling unexpected financial burdens.",
      "Through disciplined budgeting, timely repayments and structured remedies, these debt patterns can be gradually reduced and brought under stable control.",
    ],
    detailedImpactParagraphsHi: [
      "छठा भाव ऋण, कर्ज़, वित्तीय शत्रु और दैनिक वित्तीय दायित्वों को नियंत्रित करता है। मध्यम छठा भाव मौजूदा देनदारियों को दर्शाता है जिनके लिए ऋण की पूर्ण अनुपस्थिति के बजाय सचेत प्रबंधन की आवश्यकता होती है।",
      "मंगल इस भाव के स्वामी के रूप में 8वें भाव में स्थित है और शनि से वर्ग दृष्टि प्राप्त कर रहा है, जो ऋण चुकाने और अप्रत्याशित वित्तीय बोझ को संभालने में दबाव दर्शाता है।",
      "अनुशासित बजट, समय पर चुकौती और संरचित उपायों के माध्यम से, इन ऋण पैटर्न को धीरे-धीरे कम किया जा सकता है और स्थिर नियंत्रण में लाया जा सकता है।",
    ],
  },
  {
    id: "8th",
    houseNumber: "8th",
    houseNumberHi: "8वाँ",
    title: "8th HOUSE ANALYSIS",
    titleHi: "अष्टम भाव विश्लेषण",
    subtitle: "Sudden Losses & Financial Crises",
    subtitleHi: "अचानक हानि एवं वित्तीय संकट",
    themeColor: "#003366",
    icon: TrendingDown,
    fields: {
      houseStatus: "Moderate",
      houseStatusHi: "मध्यम",
      lord: "Saturn",
      lordHi: "शनि",
      lordPlacement: "10th House",
      lordPlacementHi: "10वाँ भाव",
      aspectsReceived: "Rahu (Conjunction)",
      aspectsReceivedHi: "राहु (युति)",
      keyObservations: "Risk of sudden expenses or financial ups and downs.",
      keyObservationsHi: "अचानक खर्च या वित्तीय उतार-चढ़ाव का जोखिम।",
    },
    detailedImpactParagraphs: [
      "The 8th house represents sudden changes, inheritances, shared resources and unforeseen financial events. A moderate 8th house points to periodic ups and downs rather than permanent loss of wealth.",
      "Saturn as the lord placed in the 10th house with Rahu's conjunction creates the possibility of sudden expenses, hidden costs or unexpected financial fluctuations in career-related matters.",
      "Avoiding speculative risks, maintaining emergency reserves and acting with caution during uncertain periods will help protect long-term financial stability.",
    ],
    detailedImpactParagraphsHi: [
      "आठवाँ भाव अचानक परिवर्तन, विरासत, साझा संसाधनों और अप्रत्याशित वित्तीय घटनाओं का प्रतिनिधित्व करता है। मध्यम आठवाँ भाव स्थायी धन हानि के बजाय आवधिक उतार-चढ़ाव की ओर संकेत करता है।",
      "शनि इस भाव के स्वामी के रूप में 10वें भाव में राहु की युति के साथ स्थित है, जो अचानक खर्च, छिपी हुई लागत या करियर संबंधी मामलों में अप्रत्याशित वित्तीय उतार-चढ़ाव की संभावना पैदा करता है।",
      "अटकलबाजी के जोखिमों से बचना, आपातकालीन भंडार बनाए रखना और अनिश्चित अवधि के दौरान सावधानी से कार्य करना दीर्घकालिक वित्तीय स्थिरता की रक्षा करने में मदद करेगा।",
    ],
  },
  {
    id: "11th",
    houseNumber: "11th",
    houseNumberHi: "11वाँ",
    title: "11th HOUSE ANALYSIS",
    titleHi: "एकादश भाव विश्लेषण",
    subtitle: "Income & Gains",
    subtitleHi: "आय एवं लाभ",
    themeColor: "#9E6B08",
    icon: TrendingUp,
    fields: {
      houseStatus: "Strong",
      houseStatusHi: "प्रबल",
      lord: "Mercury",
      lordHi: "बुध",
      lordPlacement: "2nd House",
      lordPlacementHi: "2रा भाव",
      aspectsReceived: "Jupiter (Trine)",
      aspectsReceivedHi: "गुरु (त्रिकोण)",
      keyObservations: "Excellent potential for income and gains.",
      keyObservationsHi: "आय और लाभ के लिए उत्कृष्ट संभावनाएँ।",
    },
    detailedImpactParagraphs: [
      "The 11th house governs income, profits, gains and fulfilment of financial desires. A strong 11th house is one of the most favourable indicators for earning capacity and wealth expansion.",
      "Mercury as the lord placed in the 2nd house and receiving a trine from Jupiter forms a highly supportive combination for income growth through skill, communication and wise financial decisions.",
      "This alignment suggests excellent potential to earn from multiple sources, attract profitable opportunities and steadily increase overall financial gains over time.",
    ],
    detailedImpactParagraphsHi: [
      "ग्यारहवाँ भाव आय, लाभ, कमाई और वित्तीय इच्छाओं की पूर्ति को नियंत्रित करता है। प्रबल ग्यारहवाँ भाव कमाई की क्षमता और धन विस्तार के लिए सबसे अनुकूल संकेतकों में से एक है।",
      "बुध इस भाव के स्वामी के रूप में 2रे भाव में स्थित है और गुरु से त्रिकोण प्राप्त कर रहा है, जो कौशल, संचार और बुद्धिमान वित्तीय निर्णयों के माध्यम से आय वृद्धि के लिए अत्यधिक सहायक संयोजन बनाता है।",
      "यह संरेखण कई स्रोतों से कमाई, लाभदायक अवसरों को आकर्षित करने और समय के साथ समग्र वित्तीय लाभ को लगातार बढ़ाने की उत्कृष्ट क्षमता का सुझाव देता है।",
    ],
  },
];

const TABLE_ROWS: {
  key: keyof HouseAnalysisFields;
  label: string;
  labelHi: string;
  icon: LucideIcon;
}[] = [
  { key: "houseStatus", label: "HOUSE STATUS", labelHi: "भाव स्थिति", icon: Sun },
  { key: "lord", label: "LORD", labelHi: "स्वामी", icon: Orbit },
  { key: "lordPlacement", label: "LORD PLACEMENT", labelHi: "स्वामी स्थिति", icon: Home },
  { key: "aspectsReceived", label: "ASPECTS RECEIVED", labelHi: "प्राप्त दृष्टियाँ", icon: Star },
  { key: "keyObservations", label: "KEY OBSERVATIONS", labelHi: "मुख्य अवलोकन", icon: Scale },
];

function PageBackground() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Image
        src={ASSETS.backgroundImage}
        alt="Report Background"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={ASTRO.gold}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}


function HouseEmblem({
  icon: Icon,
  themeColor,
  showRupee,
}: {
  icon: LucideIcon;
  themeColor: string;
  showRupee?: boolean;
}) {
  return (
    <div className="flex w-[78px] shrink-0 items-center justify-center self-start py-3 pl-2 pr-1">
      <div className="relative flex h-[68px] w-[68px] items-center justify-center">
        <svg
          viewBox="0 0 68 68"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <circle cx="34" cy="34" r="32" fill={themeColor} />
          <circle
            cx="34"
            cy="34"
            r="26"
            fill="none"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
          />
          {[
            [34, 6],
            [34, 62],
            [6, 34],
            [62, 34],
          ].map(([x, y], i) => (
            <rect
              key={`emblem-dot-${i}`}
              x={x - 2}
              y={y - 2}
              width="4"
              height="4"
              fill="rgba(255,255,255,0.85)"
              transform={`rotate(45 ${x} ${y})`}
            />
          ))}
        </svg>
        <Icon
          size={26}
          strokeWidth={1.6}
          className="relative z-10"
          style={{ color: "#fff" }}
          aria-hidden
        />
        {showRupee ? (
          <IndianRupee
            size={10}
            strokeWidth={2}
            className="absolute bottom-3 right-3 z-10"
            style={{ color: "#fff" }}
            aria-hidden
          />
        ) : null}
      </div>
    </div>
  );
}

function HouseNumberBadge({
  houseNumber,
  houseNumberHi,
  themeColor,
  language = "en",
}: {
  houseNumber: string;
  houseNumberHi: string;
  themeColor: string;
  language?: string;
}) {
  return (
    <span
      className={`${cormorant.className} inline-flex h-[26px] min-w-[30px] shrink-0 items-center justify-center rounded-[4px] px-1.5 text-[18px] font-bold leading-none text-white`}
      style={{ backgroundColor: themeColor }}
    >
      {language === "en" ? houseNumber : houseNumberHi}
    </span>
  );
}

function HouseCardHeader({
  houseNumber,
  houseNumberHi,
  title,
  titleHi,
  subtitle,
  subtitleHi,
  themeColor,
  language = "en",
}: {
  houseNumber: string;
  houseNumberHi: string;
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  themeColor: string;
  language?: string;
}) {
  return (
    <div className="mb-1.5 px-2 pt-2">
      <div className="flex items-center gap-2">
        <HouseNumberBadge
          houseNumber={houseNumber}
          houseNumberHi={houseNumberHi}
          themeColor={themeColor}
          language={language}
        />
        <p
          className="font-cinzel text-[12px] font-bold leading-tight tracking-[0.03em]"
          style={{ color: themeColor }}
        >
          {language === "en" ? title : titleHi}
        </p>
      </div>
      <p
        className={`${libreBaskerville.className} mt-0.5 pl-[38px] text-[10px] italic leading-snug`}
        style={{ color: themeColor }}
      >
        ({language === "en" ? subtitle : subtitleHi})
      </p>
    </div>
  );
}

function HouseDataTable({
  fields,
  themeColor,
  language = "en",
}: {
  fields: HouseAnalysisSection["fields"];
  themeColor: string;
  language?: string;
}) {
  return (
    <div className="px-2">
      <table className="w-full border-collapse">
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const RowIcon = row.icon;
            const fieldKey = row.key;
            const value = fields[fieldKey];
            
            // Get the appropriate value based on language
            const displayValue = language === "en" 
              ? value 
              : value + "Hi" in fields 
                ? (fields as any)[fieldKey + "Hi"] 
                : value;

            return (
              <tr
                key={row.key}
                style={{
                  borderTop: `1px solid ${ASTRO.cardBorder}`,
                }}
              >
                <td className="w-[58%] py-[4px] pr-2 align-middle">
                  <div className="flex items-center gap-1.5">
                    <RowIcon
                      size={11}
                      strokeWidth={2}
                      style={{ color: ASTRO.gold }}
                      aria-hidden
                    />
                    <span
                      className={`${libreBaskerville.className} text-[10px] font-bold tracking-[0.02em]`}
                      style={{ color: themeColor }}
                    >
                      {language === "en" ? row.label : row.labelHi}
                    </span>
                  </div>
                </td>
                <td
                  className={`${cormorant.className} py-[4px] pl-2 text-[11px] font-nunito-sans align-middle`}
                  style={{
                    color: 'black',
                    borderLeft: `1px solid ${ASTRO.cardBorder}`,
                  }}
                >
                  {language === "en" ? value : (fields as any)[fieldKey + "Hi"] || value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function DetailedImpactSection({
  paragraphs,
  paragraphsHi,
  themeColor,
  language = "en",
}: {
  paragraphs: string[];
  paragraphsHi: string[];
  themeColor: string;
  language?: string;
}) {
  const displayParagraphs = language === "en" ? paragraphs : paragraphsHi;

  return (
    <div className="flex min-w-0 flex-1 flex-col px-3 py-2">
      <p
        className="font-cinzel text-[11px] font-bold leading-tight tracking-[0.03em]"
        style={{ color: themeColor }}
      >
        {language === "en" ? "DETAILED IMPACT ON FINANCES" : "वित्त पर विस्तृत प्रभाव"}
      </p>
      <div className="mt-1.5 space-y-1.5">
        {displayParagraphs.map((paragraph, index) => (
          <p
            key={`impact-${index}`}
            className={`${libreBaskerville.className} text-[10px] leading-[1.5]`}
            style={{ color: ASTRO.textDark }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function HouseAnalysisCard({ section, language = "en" }: { section: HouseAnalysisSection; language?: string }) {
  const showRupee = section.id === "6th" || section.id === "8th" || section.id === "11th";

  return (
    <section
      className="relative z-10 overflow-hidden rounded-[10px]"
      style={{
        backgroundColor: '#FEF0D9',
        border: `1px solid ${ASTRO.cardBorder}`,
      }}
    >
      <div className="flex items-stretch">
        <HouseEmblem
          icon={section.icon}
          themeColor={section.themeColor}
          // showRupee={showRupee}
        />

        <div
          className="flex w-[42%] shrink-0 flex-col"
          style={{ borderRight: `1px solid ${ASTRO.cardBorder}` }}
        >
          <HouseCardHeader
            houseNumber={section.houseNumber}
            houseNumberHi={section.houseNumberHi}
            title={section.title}
            titleHi={section.titleHi}
            subtitle={section.subtitle}
            subtitleHi={section.subtitleHi}
            themeColor={section.themeColor}
            language={language}
          />
          <HouseDataTable
            fields={section.fields}
            themeColor={section.themeColor}
            language={language}
          />
        </div>

        <DetailedImpactSection
          paragraphs={section.detailedImpactParagraphs}
          paragraphsHi={section.detailedImpactParagraphsHi}
          themeColor={section.themeColor}
          language={language}
        />
      </div>
    </section>
  );
}

function ContactFooter({
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: {
  website?: string;
  phone?: string;
  instagram?: string;
}) {
  return (
    <footer className="relative z-10 shrink-0 pt-2.5">
      <div
        className={`${libreBaskerville.className} flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px]`}
        style={{ color: ASTRO.body }}
      >
        <div className="flex items-center gap-1.5">
          <Globe size={15} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[12px] font-bold">{website}</span>
        </div>
        <span style={{ color: ASTRO.borderGold }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <Phone size={15} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[12px] font-bold">{phone}</span>
        </div>
        <span style={{ color: ASTRO.borderGold }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <InstagramIcon size={15} />
          <span className="text-[12px] font-bold">{instagram}</span>
        </div>
      </div>
    </footer>
  );
}

export default function HouseAnalysisForWealth({
  pageNumber = "04",
  language = "en",
  sectionTitle = "HOUSE ANALYSIS FOR WEALTH",
  sectionTitleHi = "धन के लिए भाव विश्लेषण",
  sectionSubtitle = "Detailed analysis of key houses affecting your financial stability, prosperity and debt patterns in your birth chart.",
  sectionSubtitleHi = "आपकी जन्म कुंडली में वित्तीय स्थिरता, समृद्धि और ऋण पैटर्न को प्रभावित करने वाले प्रमुख भावों का विस्तृत विश्लेषण।",
  sections = defaultSections,
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: HouseAnalysisForWealthProps) {
  return (
    <BusinessNameReportPageShell
      padding="20px 28px 16px"
      pageNumber={pageNumber}
      style={{
        boxShadow: "0 2px 12px rgba(184,134,11,0.08)",
        position: "relative",
      }}
    >
      {/* Background Cover Layer */}
      <PageBackground />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <HeaderCommun
          reportName={language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"}
          title={language === "en" ? sectionTitle : sectionTitleHi}
          description={language === "en" ? sectionSubtitle : sectionSubtitleHi}
        />

        <div className="relative z-10 flex flex-col gap-4">
          {sections.map((section) => (
            <HouseAnalysisCard key={section.id} section={section} language={language} />
          ))}
        </div>

        <ContactFooter website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}