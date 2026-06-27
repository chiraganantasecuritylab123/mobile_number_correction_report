"use client";

import Image from "next/image";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import {
  AlertCircle,
  FileText,
  Globe,
  IndianRupee,
  Lock,
  Phone,
  PiggyBank,
  X,
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
  parchment: "#FDF8E9",
  maroon: "#6E1F1F",
  darkBrown: "#4A2C2A",
  iconBrown: "#3E1F14",
  gold: "#C5A059",
  borderGold: "#C89A2B",
  body: "#6A5A4A",
  cardBg: "#FDF9F0",
  noteBg: "#FFF8E7",
} as const;

const ASSETS = {
  penLogo: "/assets/signatureReport/logo-main.png",
  pageBadge: "/assets/signatureReport/roundCircleImage.png",
} as const;

export type ProblemCard = {
  id: string;
  number: string;
  title: string;
  titleHi: string;
  bodyText: string;
  bodyTextHi: string;
  icon: "lock" | "piggy" | "debt";
};

export type SourceOfFinancialProblemsProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  sectionTitle?: string;
  sectionTitleHi?: string;
  sectionSubtitle?: string;
  sectionSubtitleHi?: string;
  cards?: ProblemCard[];
  noteText?: string;
  noteTextHi?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultCards: ProblemCard[] = [
  {
    id: "blocked",
    number: "01",
    title: "WHY MONEY GETS BLOCKED REPEATEDLY",
    titleHi: "पैसा बार-बार क्यों रुक जाता है?",
    icon: "lock",
    bodyText:
      "Negative planetary influences, past karmas, wrong financial decisions and unsuitable timings create continuous blocks in the natural flow of money. Opportunities get delayed, income sources become unstable, important work faces unexpected obstacles, and efforts do not bring the desired results. As a result, money may come in but does not stay, leading to repeated financial difficulties and stress.",
    bodyTextHi:
      "नकारात्मक ग्रह प्रभाव, पूर्व जन्म के कर्म, गलत वित्तीय निर्णय और अनुचित समय मिलकर धन के प्रवाह में लगातार रुकावटें उत्पन्न करते हैं। अवसर समय पर नहीं मिलते, आय के स्रोत अस्थिर हो जाते हैं, महत्वपूर्ण कार्यों में अचानक बाधाएँ आती हैं और आपके प्रयासों का अपेक्षित परिणाम नहीं मिलता। परिणामस्वरूप, धन आता तो है लेकिन टिकता नहीं, जिससे बार-बार आर्थिक समस्याएँ और मानसिक तनाव उत्पन्न होता है।",
  },
  {
    id: "savings",
    number: "02",
    title: "WHY SAVINGS FAIL TO ACCUMULATE",
    titleHi: "बचत क्यों नहीं हो पाती?",
    icon: "piggy",
    bodyText:
      "Even with income, lack of budgeting, impulsive spending, weak financial discipline and lack of clarity in goals prevent savings from growing. Money gets spent quickly on unnecessary things, emergencies or obligations. Due to this, you are unable to build a financial cushion or secure your future, and savings either remain very low or get depleted again and again.",
    bodyTextHi:
      "आय होने के बावजूद बजट का अभाव, अनियंत्रित खर्च, वित्तीय अनुशासन की कमी और लक्ष्यों में स्पष्टता न होना बचत को बढ़ने नहीं देते। पैसा अनावश्यक चीजों पर जल्दी खर्च हो जाता है, आपतकालीन स्थितियाँ या जिम्मेदारियाँ लगातार आती रहती हैं। इसके कारण, आप भविष्य के लिए वित्तीय सुरक्षा या फंड बनाने में असमर्थ रहते हैं और बचत बहुत कम होती है या बार-बार समाप्त हो जाती है।",
  },
  {
    id: "debts",
    number: "03",
    title: "WHY DEBTS BECOME DIFFICULT TO CLEAR",
    titleHi: "कर्ज चुकाना कठिन क्यों हो जाता है?",
    icon: "debt",
    bodyText:
      "High interest rates, repeated borrowing, unexpected expenses and insufficient income increase the burden over time. Influence of malefic planets can bring delays, penalties, legal complications or income fluctuations. All these factors make it hard to repay loans on time, and the debt cycle becomes longer and more stressful.",
    bodyTextHi:
      "उच्च ब्याज दरें, बार-बार कर्ज लेना, अचानक खर्च, आय की कमी और गलत वित्तीय प्रबंधन कर्ज के बोझ को लगातार बढ़ाते हैं। दुष्प्रभावी ग्रहों का प्रभाव देरी, जुर्माना, कानूनी जटिलताएँ या आय में उतार-चढ़ाव लाकर स्थिति को और गंभीर बना देता है। इन सभी कारणों से, कर्ज समय पर चुकाना कठिन हो जाता है और कर्ज का चक्र लंबा और तनावपूर्ण होता जाता है।",
  },
];

function PageOrnamentalFrame() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-[14px] rounded-sm"
        style={{ border: `2px solid ${ASTRO.borderGold}` }}
        aria-hidden
      />
      <CornerFlourish className="pointer-events-none absolute left-[10px] top-[10px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[10px] top-[10px] h-[52px] w-[52px] -scale-x-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] left-[10px] h-[52px] w-[52px] -scale-y-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] right-[10px] h-[52px] w-[52px] scale-[-1]" />
    </>
  );
}

function InstagramIcon({ size = 14, color = ASTRO.gold }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={color} stroke="none" />
    </svg>
  );
}

function OrnateIconEmblem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-[32%] shrink-0 items-center justify-center self-stretch py-4 pl-4 pr-3">
      <div className="relative flex h-[76px] w-[76px] items-center justify-center">
        <svg viewBox="0 0 76 76" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="38" cy="38" r="35" fill={ASTRO.iconBrown} />
          <circle
            cx="38"
            cy="38"
            r="30"
            fill="none"
            stroke={ASTRO.gold}
            strokeWidth="1.4"
          />
          {[
            [38, 5],
            [38, 71],
            [5, 38],
            [71, 38],
          ].map(([x, y], i) => (
            <rect
              key={`emblem-diamond-${i}`}
              x={x - 2.5}
              y={y - 2.5}
              width="5"
              height="5"
              fill={ASTRO.gold}
              transform={`rotate(45 ${x} ${y})`}
            />
          ))}
        </svg>
        <div className="relative z-10 flex items-center justify-center" style={{ color: ASTRO.gold }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function LockRupeeIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <Lock size={38} strokeWidth={1.6} aria-hidden />
    </div>
  );
}

function CrackedPiggyIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <PiggyBank size={38} strokeWidth={1.6} aria-hidden />
      <svg
        viewBox="0 0 40 40"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <line x1="8" y1="28" x2="28" y2="10" stroke={ASTRO.gold} strokeWidth="1.5" opacity="0.9" />
      </svg>
      <X size={12} strokeWidth={2.5} className="absolute -right-1 top-0" aria-hidden />
    </div>
  );
}

function DebtDocumentIcon() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <FileText size={36} strokeWidth={1.6} aria-hidden />
      <span
        className={`${libreBaskerville.className} mt-[-4px] text-[8px] font-bold tracking-[0.08em]`}
        style={{ color: ASTRO.gold }}
      >
        DEBT
      </span>
    </div>
  );
}

function ProblemCardIcon({ type }: { type: ProblemCard["icon"] }) {
  if (type === "lock") return <LockRupeeIcon />;
  if (type === "piggy") return <CrackedPiggyIcon />;
  return <DebtDocumentIcon />;
}

function NumberBadge({ number }: { number: string }) {
  return (
    <div className="relative flex h-[36px] w-[36px] shrink-0 items-center justify-center">
      <svg viewBox="0 0 28 28" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="14" cy="14" r="13" fill={ASTRO.iconBrown} />
        <circle
          cx="14"
          cy="14"
          r="11"
          fill="none"
          stroke={ASTRO.gold}
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
      </svg>
      <span
        className={`${cormorant.className} relative mb-1 text-[22px] font-bold leading-none text-white`}
      >
        {number}
      </span>
    </div>
  );
}

function ProblemAnalysisCard({ card, language = "en" }: { card: ProblemCard; language?: string }) {
  return (
    <section
      className="relative z-10 overflow-hidden rounded-[10px]"
      style={{
        backgroundColor: ASTRO.cardBg,
        border: `1.5px solid ${ASTRO.borderGold}`,
      }}
    >
      <div className="flex items-stretch">
        <OrnateIconEmblem>
          <ProblemCardIcon type={card.icon} />
        </OrnateIconEmblem>

        <div
          className="flex min-w-0 flex-1 flex-col justify-center py-4 pr-4 pl-2"
          style={{ borderLeft: `1px dashed ${ASTRO.borderGold}` }}
        >
          <div className="flex items-start gap-2">
            <NumberBadge number={card.number} />
            <div className="min-w-0 flex-1">
              <p
                className="font-cinzel text-[16px] font-bold leading-tight tracking-[0.03em]"
                style={{ color: ASTRO.darkBrown }}
              >
                {language === "en" ? card.title : card.titleHi}
              </p>
              <div className="mt-1.5">
                <OrnamentDivider width={240} />
              </div>
            </div>
          </div>
          <p
            className={`${libreBaskerville.className} mt-3 text-[12px] leading-[1.6] pl-[36px]`}
            style={{ color: ASTRO.body }}
          >
            {language === "en" ? card.bodyText : card.bodyTextHi}
          </p>
        </div>
      </div>
    </section>
  );
}

function NoteBox({ text, textHi, language = "en" }: { text: string; textHi: string; language?: string }) {
  const displayText = language === "en" ? text : textHi;
  
  return (
    <section
      className="relative z-10 shrink-0 rounded-[8px] px-4 py-3"
      style={{
        backgroundColor: ASTRO.noteBg,
        border: `1.5px solid ${ASTRO.borderGold}`,
      }}
    >
      <div className="flex items-start gap-2.5">
        <div
          className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "#E8A838" }}
        >
          <AlertCircle size={20} strokeWidth={2.2} style={{ color: ASTRO.darkBrown }} aria-hidden />
        </div>
        <p
          className={`${libreBaskerville.className} text-[12px] italic leading-relaxed`}
          style={{ color: ASTRO.body }}
        >
          <span className="font-bold not-italic" style={{ color: ASTRO.darkBrown }}>
            {language === "en" ? "NOTE: " : "नोट: "}
          </span>
          {displayText}
        </p>
      </div>
    </section>
  );
}

function ContactBar({
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: {
  website?: string;
  phone?: string;
  instagram?: string;
}) {
  const lightText = "#F5EDE0";
  
  return (
    <footer className="relative z-10 mt-4 shrink-0 rounded-sm px-4 py-3" style={{ backgroundColor: ASTRO.darkBrown }}>
      <div
        className={`${libreBaskerville.className} flex flex-wrap items-center justify-center gap-x-4 gap-y-1`}
        style={{ color: lightText }}
      >
        <div className="flex items-center gap-1.5">
          <Globe size={16} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[12px] font-semibold">{website}</span>
        </div>
        <span style={{ color: ASTRO.gold, opacity: 0.7 }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <Phone size={16} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[12px] font-semibold">{phone}</span>
        </div>
        <span style={{ color: ASTRO.gold, opacity: 0.7 }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <InstagramIcon size={16} color={ASTRO.gold} />
          <span className="text-[12px] font-semibold">{instagram}</span>
        </div>
      </div>
    </footer>
  );
}

export default function SourceOfFinancialProblems({
  pageNumber = "06",
  language = "en",
  sectionTitle = "SOURCE OF FINANCIAL PROBLEMS",
  sectionTitleHi = "आर्थिक समस्याओं के मूल कारण",
  sectionSubtitle = "Understanding the root causes behind recurring financial obstacles.",
  sectionSubtitleHi = "आपकी वित्तीय परेशानियों के पीछे छिपे गहरे कारणों को समझना, वित्तीय मुक्ति और स्थिरता की दिशा में पहला कदम है।",
  cards = defaultCards,
  noteText = "This analysis is based on numerological and astrological principles. It is meant for guidance and self-awareness only and should not be considered as a legal, financial or professional advice.",
  noteTextHi = "यह विशेषज्ञ अंक ज्योतिष और वैदिक ज्योतिष के सिद्धांतों पर आधारित है। यह केवल मार्गदर्शन और आत्म-जागरूकता के उद्देश्य से है, इसे किसी कानूनी, वित्तीय या व्यावसायिक सलाह के रूप में न लें।",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: SourceOfFinancialProblemsProps) {
  return (
    <BusinessNameReportPageShell
      padding="20px 28px 14px"
      pageNumber={pageNumber}
      style={{
        backgroundColor: ASTRO.parchment,
        boxShadow: "0 2px 12px rgba(184,134,11,0.08)",
      }}
    >
      <PageOrnamentalFrame />
      <div className="relative flex h-full min-h-0 flex-col">
        <HeaderCommun 
          reportName={language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"} 
          title={language === "en" ? sectionTitle : sectionTitleHi} 
          description={language === "en" ? sectionSubtitle : sectionSubtitleHi} 
          breackWord={[2]} 
        />
        <div className="relative z-10 mt-4 flex min-h-0 flex-col gap-3.5">
          {cards.map((card) => (
            <ProblemAnalysisCard key={card.id} card={card} language={language} />
          ))}
        </div>
        <div className="mt-3">
          <NoteBox text={noteText} textHi={noteTextHi} language={language} />
        </div>
        <ContactBar website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}