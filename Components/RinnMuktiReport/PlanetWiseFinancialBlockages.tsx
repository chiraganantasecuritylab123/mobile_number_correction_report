"use client";

import Image from "next/image";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import { Globe, Phone } from "lucide-react";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";

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
  maroon: "#6E1F1F",
  navy: "#0A1D37",
  gold: "#B8860B",
  borderGold: "#C89A2B",
  body: "#6A5A4A",
  tableCream: "#FFFDF5",
  tableWhite: "#FFFFFF",
  cellText: "#1A2E4A",
} as const;

const ASSETS = {
  penLogo: "/assets/signatureReport/logo-main.png",
  pageBadge: "/assets/signatureReport/roundCircleImage.png",
} as const;

export type PlanetSphereStyle = {
  gradientFrom: string;
  gradientTo: string;
  highlight?: string;
  ring?: boolean;
  ringColor?: string;
  tail?: boolean;
};

export type PlanetFinancialRow = {
  id: string;
  name: string;
  nameHi: string;
  imageSrc?: string;
  sphere?: PlanetSphereStyle;
  positiveInfluence: string;
  positiveInfluenceHi: string;
  negativeInfluence: string;
  negativeInfluenceHi: string;
};

export type PlanetWiseFinancialBlockagesProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  sectionTitle?: string;
  sectionTitleHi?: string;
  sectionSubtitle?: string;
  sectionSubtitleHi?: string;
  rows?: PlanetFinancialRow[];
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultRows: PlanetFinancialRow[] = [
  {
    id: "sun",
    name: "SUN",
    nameHi: "सूर्य",
    imageSrc: "/assets/rinn-mukti-report/sun.png",
    positiveInfluence:
      "Provides leadership, confidence, self-esteem, and ability to earn through authority, government support, and high position. Strong Sun brings recognition, respect, and financial stability.",
    positiveInfluenceHi:
      "नेतृत्व क्षमता, आत्मविश्वास, आत्मसम्मान और अधिकारिता प्रदान करता है। सरकारी सहायता, प्रतिष्ठा और उच्च पद से आर्थिक लाभ दिलाता है। मजबूत सूर्य पहचान, सम्मान और आर्थिक स्थिरता प्रदान करता है।",
    negativeInfluence:
      "Weak or afflicted Sun can cause pride, ego problems, conflicts with authority, government issues, and unnecessary expenses. It may create obstacles in career growth and financial progress.",
    negativeInfluenceHi:
      "कमजोर या पीड़ित सूर्य अहंकार, अधिकार से टकराव, सरकारी कार्यों में बाधा, अनावश्यक खर्च और आर्थिक प्रगति में रुकावट देता है। करियर में रुकावट और वित्तीय नुकसान भी हो सकते हैं।",
  },
  {
    id: "moon",
    name: "MOON",
    nameHi: "चंद्रमा",
    imageSrc: "/assets/rinn-mukti-report/moon.png",
    positiveInfluence:
      "Brings intuition, emotional balance, popularity, and public support. It helps in getting regular income, liquidity, and opportunities through people and networking.",
    positiveInfluenceHi:
      "मन की शांति, भावनात्मक संतुलन, लोकप्रियता और जन समर्थन देता है। व्यापार में तरलता, नियमित आय और लोगों के माध्यम से अवसर प्रदान करता है। मजबूत चंद्रमा बचत करने और धन बनाए रखने में सहायक होता है।",
    negativeInfluence:
      "Weak or afflicted Moon causes emotional instability, overthinking, and fluctuating income. It leads to poor financial decisions, unnecessary spending, and lack of savings.",
    negativeInfluenceHi:
      "कमजोर या पीड़ित चंद्रमा भावनात्मक अस्थिरता, अत्यधिक सोच-विचार, अस्थिर आय और बचत में कमी लाता है। गलत निर्णय और अनावश्यक खर्च आर्थिक समस्याएं उत्पन्न करते हैं।",
  },
  {
    id: "mars",
    name: "MARS",
    nameHi: "मंगल",
    imageSrc: "/assets/rinn-mukti-report/mars.png",
    positiveInfluence:
      "Gives energy, courage, determination, and ability to take initiatives. It supports in competitive fields, technical work, real estate, land, and achieving financial goals.",
    positiveInfluenceHi:
      "ऊर्जा, साहस, निर्णय क्षमता और कार्य करने की शक्ति देता है। प्रतियोगिता में सफलता, भूमि, संपत्ति, तकनीकी कार्य और प्रयासों से आर्थिक लाभ देता है। मजबूत मंगल ऋण चुकाने और वित्तीय लक्ष्य प्राप्त करने में मदद करता है।",
    negativeInfluence:
      "Afflicted Mars causes aggression, impulsive decisions, risks in investments, legal disputes, accidents, and sudden financial losses. It creates debts through haste and conflicts.",
    negativeInfluenceHi:
      "पीड़ित मंगल क्रोध, आवेश, जोखिम भरे निवेश, कानूनी विवाद, दुर्घटनाएं और अचानक खर्च करता है। जल्दबाजी में लिए निर्णयों से आर्थिक हानि और ऋण बढ़ने की स्थिति बनती है।",
  },
  {
    id: "mercury",
    name: "MERCURY",
    nameHi: "बुध",
    imageSrc: "/assets/rinn-mukti-report/mercury.png",
    positiveInfluence:
      "Enhances intelligence, communication, business skills, and analytical ability. It helps in trade, marketing, consultancy, finance, accounting, and smart financial planning.",
    positiveInfluenceHi:
      "बुद्धि, वाणी, संचार, व्यापार कौशल, विश्लेषण क्षमता और गणना शक्ति देता है। व्यापार, मार्केटिंग, लेखा, सलाहकारी, दस्तावेज और समझदारी से आर्थिक लाभ दिलाता है। मजबूत बुध वित्तीय योजना और लाभकारी निर्णयों में सहायक होता है।",
    negativeInfluence:
      "Weak Mercury causes poor communication, misunderstandings, wrong calculations, document errors, and business losses. It creates confusion and delays in financial matters.",
    negativeInfluenceHi:
      "कमजोर बुध गलत गणना, गलत निर्णय, गलत दस्तावेज, संचार में समस्या और व्यापार में नुकसान करता है। धोखाधड़ी, देरी और वित्तीय मामलों में धोखा की स्थिति उत्पन्न करता है।",
  },
  {
    id: "jupiter",
    name: "JUPITER",
    nameHi: "गुरु",
    imageSrc: "/assets/rinn-mukti-report/jupiter.png",
    positiveInfluence:
      "Brings wisdom, luck, expansion, wealth, savings, and growth. It gives support from mentors, family, and divine blessings for financial prosperity and stability.",
    positiveInfluenceHi:
      "ज्ञान, भाग्य, विस्तार, धन, बचत और समृद्धि देता है। मार्गदर्शन, परिवार और आशीर्वाद के माध्यम से आर्थिक उन्नति करता है। मजबूत गुरु शुभ अवसर प्रदान करता है और धन वृद्धि में सहायक होता है।",
    negativeInfluence:
      "Afflicted Jupiter causes wrong guidance, over-trust, impractical generosity, and financial mismanagement. It leads to money wastage and failed expectations.",
    negativeInfluenceHi:
      "पीड़ित गुरु गलत मार्गदर्शन, अति उदारता, अनुचित निर्णय और वित्तीय कुप्रबंधन देता है। धन का अपव्यय, उचित अवसरों का लाभ न मिलना और अपेक्षाओं के अनुसार परिणाम न मिलना संभव है।",
  },
  {
    id: "venus",
    name: "VENUS",
    nameHi: "शुक्र",
    imageSrc: "/assets/rinn-mukti-report/venus.png",
    positiveInfluence:
      "Attracts wealth, luxury, comforts, beautiful assets, vehicles, and material happiness. It supports in arts, business, fashion, property, and relationships that bring financial benefits.",
    positiveInfluenceHi:
      "धन, विलासिता, सुख-सुविधा, सुंदरता, वाहन, संपत्ति और सुखद संबंध देता है। कला, फैशन, आभूषण, होटल, मनोरंजन और व्यापार से आर्थिक लाभ दिलाता है। मजबूत शुक्र भौतिक सुख और धन संचय में सहायक होता है।",
    negativeInfluence:
      "Afflicted Venus causes overspending, luxury addiction, relationship issues, attractions towards material pleasures, and financial distractions. It leads to unnecessary expenses.",
    negativeInfluenceHi:
      "पीड़ित शुक्र विलासिता में अत्यधिक खर्च, भोग-विलास, संबंधों में समस्याएं और आकर्षणों पर अधिक खर्च करता है। अनावश्यक खर्च और आर्थिक असंतुलन की स्थिति उत्पन्न करता है।",
  },
  {
    id: "saturn",
    name: "SATURN",
    nameHi: "शनि",
    imageSrc: "/assets/rinn-mukti-report/saturn.png",
    positiveInfluence:
      "Gives discipline, patience, hard work, stability, long-term growth, and accumulation of wealth. It rewards through consistent efforts and a practical approach.",
    positiveInfluenceHi:
      "अनुशासन, धैर्य, मेहनत, स्थिरता, दीर्घकालिक लाभ और संपत्ति प्रदान करता है। निरंतर प्रयास से धन संचय, दीर्घकालिक स्थिरता और ऋण मुक्ति में सहायक होता है। मजबूत शनि दीर्घकालिक सुरक्षा देता है।",
    negativeInfluence:
      "Afflicted Saturn causes delays, obstacles, debts, financial burden, legal problems, and slow progress. It creates scarcity, restrictions, and responsibilities that block finances.",
    negativeInfluenceHi:
      "पीड़ित शनि देरी, रुकावटें, ऋण, वित्तीय बोझ, कानूनी समस्याएं और धीमी प्रगति देता है। धन आने में देरी या रुकावटें और आर्थिक दबाव बढ़ा सकता है।",
  },
  {
    id: "rahu",
    name: "RAHU",
    nameHi: "राहु",
    imageSrc: "/assets/rinn-mukti-report/rahu.png",
    positiveInfluence:
      "Gives unconventional opportunities, foreign income, sudden rise, innovation, technology, and gains through unusual sources.",
    positiveInfluenceHi:
      "असामान्य अवसर, विदेशी संपर्क, तकनीक, राजनीति, अचानक लाभ और बड़े पैमाने पर उन्नति देता है। सही दिशा में उपयोग करने पर राहु बड़े धन लाभ के योग बनाता है।",
    negativeInfluence:
      "Afflicted Rahu causes illusions, wrong choices, frauds, speculation losses, illegal activities, and sudden ups & downs. It creates instability and unexpected financial crises.",
    negativeInfluenceHi:
      "पीड़ित राहु भ्रम, गलत निर्णय, धोखाधड़ी, अवैध गतिविधि, जोखिम भरे निवेश और अचानक नुकसान करता है। अस्थिरता और अप्रत्याशित वित्तीय संकट उत्पन्न करता है।",
  },
  {
    id: "ketu",
    name: "KETU",
    nameHi: "केतु",
    imageSrc: "/assets/rinn-mukti-report/ketu.png",
    positiveInfluence:
      "Promotes spiritual growth, detachment, wisdom, and savings through simplicity. It helps in research, analytics, and investments for long-term benefits.",
    positiveInfluenceHi:
      "आध्यात्मिक विकास, वैराग्य, बुद्धिमत्ता, शोध, विश्लेषण और छिपे हुए स्रोतों से लाभ देता है। सादगी और सही दिशा में ध्यान केंद्रित करने से दीर्घकालिक आर्थिक लाभ मिलते हैं।",
    negativeInfluence:
      "Afflicted Ketu causes uncertainty, loss of interest in money, sudden separations, hidden losses, and unexpected expenses. It creates breaks in financial stability.",
    negativeInfluenceHi:
      "पीड़ित केतु अनिश्चितता, अलगाव, रुचि की कमी, अचानक हानि, छिपे हुए नुकसान और अप्रत्याशित खर्च कराता है। वित्तीय स्थिरता में रुकावटें उत्पन्न करता है।",
  },
];

function PageOrnamentalFrame() {
  return (
    <>
      <div className="pointer-events-none absolute inset-[14px] rounded-sm" aria-hidden />
      <CornerFlourish className="pointer-events-none absolute left-[10px] top-[10px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[10px] top-[10px] h-[52px] w-[52px] -scale-x-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] left-[10px] h-[52px] w-[52px] -scale-y-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] right-[10px] h-[52px] w-[52px] scale-[-1]" />
    </>
  );
}

function PageNumberBadge({ pageNumber }: { pageNumber: string }) {
  return (
    <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center">
      <Image
        src={ASSETS.pageBadge}
        alt=""
        width={52}
        height={52}
        className="absolute inset-0 h-full w-full object-contain"
        aria-hidden
      />
      <span
        className={`${cormorant.className} relative text-[20px] font-bold leading-none`}
        style={{ color: ASTRO.maroon }}
      >
        {pageNumber}
      </span>
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

function ReportTopBar({ pageNumber, language = "en" }: { pageNumber: string; language?: string }) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-3">
      <header className="mt-5 flex flex-1 flex-col items-center pt-1 text-center">
        <h1
          className="font-cinzel text-[28px] font-bold leading-none tracking-[0.06em]"
          style={{ color: ASTRO.maroon }}
        >
          ASTRO AARAMBH
        </h1>
        <div className="mt-1.5 flex w-full max-w-[360px] items-center justify-center gap-2">
          <OrnamentDivider width={72} />
          <p
            className={`${cormorant.className} text-[16px] font-bold tracking-[0.05em]`}
            style={{ color: ASTRO.gold }}
          >
            {language === "en" ? "RINN MUKTI REPORT" : "ऋण मुक्ति रिपोर्ट"}
          </p>
          <OrnamentDivider width={72} />
        </div>
      </header>
    </div>
  );
}

function GoldHeaderDivider() {
  return (
    <span className="px-1 text-[10px] font-bold" style={{ color: ASTRO.gold }} aria-hidden>
      ✦
    </span>
  );
}

function PlanetSphere({ style, id }: { style: PlanetSphereStyle; id: string }) {
  const gradId = `planet-grad-${id}`;

  return (
    <svg viewBox="0 0 44 44" className="h-[38px] w-[38px] drop-shadow-sm" aria-hidden>
      <defs>
        <radialGradient id={gradId} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor={style.highlight ?? style.gradientFrom} />
          <stop offset="55%" stopColor={style.gradientFrom} />
          <stop offset="100%" stopColor={style.gradientTo} />
        </radialGradient>
      </defs>
      <circle cx="22" cy="22" r="18" fill={`url(#${gradId})`} />
      {style.ring ? (
        <ellipse
          cx="22"
          cy="24"
          rx="24"
          ry="7"
          fill="none"
          stroke={style.ringColor ?? "#A8B8CC"}
          strokeWidth="2.2"
          opacity="0.85"
        />
      ) : null}
      {style.tail ? (
        <ellipse cx="34" cy="30" rx="8" ry="3" fill={style.gradientTo} opacity="0.55" />
      ) : null}
    </svg>
  );
}

function PlanetIcon({ row, language = "en" }: { row: PlanetFinancialRow; language?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
        {row.imageSrc ? (
          <Image
            src={row.imageSrc}
            alt=""
            width={60}
            height={60}
            className="h-[60px] w-[60px] rounded-full object-cover drop-shadow-sm"
            aria-hidden
          />
        ) : row.sphere ? (
          <PlanetSphere style={row.sphere} id={row.id} />
        ) : null}
      </div>
      <span
        className="font-cinzel text-[12px] font-bold tracking-[0.04em]"
        style={{ color: ASTRO.navy }}
      >
        {language === "en" ? row.name : row.nameHi}
      </span>
    </div>
  );
}

function PlanetTableRow({
  row,
  index,
  language = "en",
}: {
  row: PlanetFinancialRow;
  index: number;
  language?: string;
}) {
  const cellBorder = `1px solid rgba(200, 154, 43, 0.4)`;
  return (
    <tr className="bg-[#FEF0D9]">
      <td
        className="w-[19%] px-2.5 py-[12px] align-middle"
        style={{ borderTop: cellBorder, borderRight: cellBorder }}
      >
        <PlanetIcon row={row} language={language} />
      </td>
      <td
        className={`${libreBaskerville.className} w-[40.5%] px-2.5 py-[7px] text-[11px] leading-[1.42] align-top`}
        style={{ color: ASTRO.cellText, borderTop: cellBorder, borderRight: cellBorder }}
      >
        {language === "en" ? row.positiveInfluence : row.positiveInfluenceHi}
      </td>
      <td
        className={`${libreBaskerville.className} w-[40.5%] px-2.5 py-[7px] text-[11px] leading-[1.42] align-top`}
        style={{ color: ASTRO.cellText, borderTop: cellBorder }}
      >
        {language === "en" ? row.negativeInfluence : row.negativeInfluenceHi}
      </td>
    </tr>
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
    <footer className="relative z-10 mt-2 shrink-0 pt-2.5">
      <div
        className={`${libreBaskerville.className} flex flex-wrap items-center justify-center gap-x-4 gap-y-1`}
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

export default function PlanetWiseFinancialBlockages({
  pageNumber = "05",
  language = "en",
  sectionTitle = "PLANET WISE FINANCIAL BLOCKAGES",
  sectionTitleHi = "ग्रह अनुसार आर्थिक अवरोध",
  sectionSubtitle = "Detailed analysis of each planet's impact on your financial life and the blockages creating debt and money obstacles.",
  sectionSubtitleHi = "प्रत्येक ग्रह का आपके आर्थिक जीवन पर प्रभाव और ऋण तथा धन संबंधी अवरोधों का विस्तृत विश्लेषण।",
  rows = defaultRows,
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: PlanetWiseFinancialBlockagesProps) {
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
        <ReportTopBar pageNumber={pageNumber} language={language} />

        <section className="relative z-10 mt-1 shrink-0 text-center">
          <h2
            className="font-cinzel mx-auto text-[32px] font-bold leading-tight tracking-[0.04em]"
            style={{ color: ASTRO.navy }}
          >
            {language === "en" ? sectionTitle : sectionTitleHi}
          </h2>
          <p
            className={`${libreBaskerville.className} mx-auto mt-1 max-w-[330px] text-[11px] italic leading-snug`}
            style={{ color: ASTRO.navy }}
          >
            {language === "en" ? sectionSubtitle : sectionSubtitleHi}
          </p>
        </section>

        <section
          className="relative z-10 mt-2 overflow-hidden rounded-md"
          style={{ border: `1.5px solid ${ASTRO.borderGold}` }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: ASTRO.navy }}>
                <th
                  className="w-[19%] px-2.5 py-2 text-left font-cinzel text-[12px] font-bold tracking-[0.06em] text-white"
                  style={{ borderRight: `1px solid rgba(200, 154, 43, 0.45)` }}
                >
                  {language === "en" ? "PLANET" : "ग्रह"}
                </th>
                <th
                  className="w-[40.5%] px-2.5 py-2 text-center font-cinzel text-[12px] font-bold tracking-[0.06em] text-white"
                  style={{ borderRight: `1px solid rgba(200, 154, 43, 0.45)` }}
                >
                  <span className="inline-flex items-center justify-center">
                    <GoldHeaderDivider />
                    {language === "en" ? "POSITIVE INFLUENCE" : "सकारात्मक प्रभाव"}
                    <GoldHeaderDivider />
                  </span>
                </th>
                <th className="w-[40.5%] px-2.5 py-2 text-center font-cinzel text-[12px] font-bold tracking-[0.06em] text-white">
                  <span className="inline-flex items-center justify-center">
                    <GoldHeaderDivider />
                    {language === "en" ? "NEGATIVE INFLUENCE" : "नकारात्मक प्रभाव"}
                    <GoldHeaderDivider />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <PlanetTableRow key={row.id} row={row} index={index} language={language} />
              ))}
            </tbody>
          </table>
        </section>

        <ContactFooter website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}
