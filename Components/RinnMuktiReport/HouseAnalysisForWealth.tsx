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
  darkBrown: "#5C2D1A",
  body: "#6A5A4A",
  value: "#3D2A20",
  cardBg: "#FDF9F0",
  cardBorder: "#D9C5B2",
  textDark: "#2A2018",
} as const;

const ASSETS = {
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
  title: string;
  subtitle: string;
  themeColor: string;
  icon: LucideIcon;
  fields: HouseAnalysisFields;
  detailedImpactParagraphs: string[];
};

export type HouseAnalysisForWealthProps = {
  pageNumber?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  sections?: HouseAnalysisSection[];
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultSections: HouseAnalysisSection[] = [
  {
    id: "2nd",
    houseNumber: "2nd",
    title: "2nd HOUSE ANALYSIS",
    subtitle: "Family Wealth & Savings",
    themeColor: "#1B4332",
    icon: Coins,
    fields: {
      houseStatus: "Strong",
      lord: "Jupiter",
      lordPlacement: "6th House",
      aspectsReceived: "Jupiter (Trine), Venus (Sextile)",
      keyObservations: "Good potential for savings and family wealth.",
    },
    detailedImpactParagraphs: [
      "The 2nd house represents accumulated wealth, savings, family assets, speech and values. A strong 2nd house indicates the ability to build and preserve wealth through family support and disciplined financial habits.",
      "With Jupiter, the lord of this house, well placed in the 6th house and receiving trine from Jupiter and sextile from Venus, it shows a positive combination for steady wealth growth.",
      "You have the capacity to save money consistently and create long-term financial security through wisdom, ethical values and support from family members.",
    ],
  },
  {
    id: "6th",
    houseNumber: "6th",
    title: "6th HOUSE ANALYSIS",
    subtitle: "Debts, Loans & Financial Enemies",
    themeColor: "#6E1F1F",
    icon: FileText,
    fields: {
      houseStatus: "Moderate",
      lord: "Mars",
      lordPlacement: "8th House",
      aspectsReceived: "Saturn (Square)",
      keyObservations: "Debts exist but can be managed with effort.",
    },
    detailedImpactParagraphs: [
      "The 6th house governs debts, loans, financial enemies and day-to-day financial obligations. A moderate 6th house suggests existing liabilities that require conscious management rather than complete absence of debt.",
      "With Mars as the lord placed in the 8th house and receiving a square aspect from Saturn, your chart indicates pressure in repaying loans and handling unexpected financial burdens.",
      "Through disciplined budgeting, timely repayments and structured remedies, these debt patterns can be gradually reduced and brought under stable control.",
    ],
  },
  {
    id: "8th",
    houseNumber: "8th",
    title: "8th HOUSE ANALYSIS",
    subtitle: "Sudden Losses & Financial Crises",
    themeColor: "#003366",
    icon: TrendingDown,
    fields: {
      houseStatus: "Moderate",
      lord: "Saturn",
      lordPlacement: "10th House",
      aspectsReceived: "Rahu (Conjunction)",
      keyObservations: "Risk of sudden expenses or financial ups and downs.",
    },
    detailedImpactParagraphs: [
      "The 8th house represents sudden changes, inheritances, shared resources and unforeseen financial events. A moderate 8th house points to periodic ups and downs rather than permanent loss of wealth.",
      "Saturn as the lord placed in the 10th house with Rahu's conjunction creates the possibility of sudden expenses, hidden costs or unexpected financial fluctuations in career-related matters.",
      "Avoiding speculative risks, maintaining emergency reserves and acting with caution during uncertain periods will help protect long-term financial stability.",
    ],
  },
  {
    id: "11th",
    houseNumber: "11th",
    title: "11th HOUSE ANALYSIS",
    subtitle: "Income & Gains",
    themeColor: "#9E6B08",
    icon: TrendingUp,
    fields: {
      houseStatus: "Strong",
      lord: "Mercury",
      lordPlacement: "2nd House",
      aspectsReceived: "Jupiter (Trine)",
      keyObservations: "Excellent potential for income and gains.",
    },
    detailedImpactParagraphs: [
      "The 11th house governs income, profits, gains and fulfilment of financial desires. A strong 11th house is one of the most favourable indicators for earning capacity and wealth expansion.",
      "Mercury as the lord placed in the 2nd house and receiving a trine from Jupiter forms a highly supportive combination for income growth through skill, communication and wise financial decisions.",
      "This alignment suggests excellent potential to earn from multiple sources, attract profitable opportunities and steadily increase overall financial gains over time.",
    ],
  },
];

const TABLE_ROWS: {
  key: keyof HouseAnalysisFields;
  label: string;
  icon: LucideIcon;
}[] = [
  { key: "houseStatus", label: "HOUSE STATUS", icon: Sun },
  { key: "lord", label: "LORD", icon: Orbit },
  { key: "lordPlacement", label: "LORD PLACEMENT", icon: Home },
  { key: "aspectsReceived", label: "ASPECTS RECEIVED", icon: Star },
  { key: "keyObservations", label: "KEY OBSERVATIONS", icon: Scale },
];

function PageOrnamentalFrame() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-[14px] rounded-sm"
        aria-hidden
      />
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

function ReportTopBar({ pageNumber }: { pageNumber: string }) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-3">
      <PageNumberBadge pageNumber={pageNumber} />

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
            RINN MUKTI REPORT
          </p>
          <OrnamentDivider width={72} />
        </div>
      </header>

      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center">
        <Image
          src={ASSETS.penLogo}
          alt=""
          width={48}
          height={48}
          className="object-contain"
          aria-hidden
        />
      </div>
    </div>
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
  themeColor,
}: {
  houseNumber: string;
  themeColor: string;
}) {
  return (
    <span
      className={`${cormorant.className} inline-flex h-[22px] min-w-[30px] shrink-0 items-center justify-center rounded-[4px] px-1.5 text-[22px] font-bold leading-none text-white`}
      style={{ backgroundColor: themeColor }}
    >
      {houseNumber}
    </span>
  );
}

function HouseCardHeader({
  houseNumber,
  title,
  subtitle,
  themeColor,
}: {
  houseNumber: string;
  title: string;
  subtitle: string;
  themeColor: string;
}) {
  return (
    <div className="mb-1.5 px-2 pt-2">
      <div className="flex items-center gap-2">
        <HouseNumberBadge houseNumber={houseNumber} themeColor={themeColor} />
        <p
          className="font-cinzel text-[12px] font-bold leading-tight tracking-[0.03em]"
          style={{ color: themeColor }}
        >
          {title}
        </p>
      </div>
      <p
        className={`${libreBaskerville.className} mt-0.5 pl-[38px] text-[10px] italic leading-snug`}
        style={{ color: themeColor }}
      >
        ({subtitle})
      </p>
    </div>
  );
}

function HouseDataTable({
  fields,
  themeColor,
}: {
  fields: HouseAnalysisFields;
  themeColor: string;
}) {
  return (
    <div className="px-2 pb-2">
      <table className="w-full border-collapse">
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const RowIcon = row.icon;
            const value = fields[row.key];

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
                      {row.label}
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
                  {value}
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
  themeColor,
}: {
  paragraphs: string[];
  themeColor: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col px-3 py-2">
      <p
        className="font-cinzel text-[11px] font-bold leading-tight tracking-[0.03em]"
        style={{ color: themeColor }}
      >
        DETAILED IMPACT ON FINANCES
      </p>
      <div className="mt-1.5 space-y-1.5">
        {paragraphs.map((paragraph, index) => (
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

function HouseAnalysisCard({ section }: { section: HouseAnalysisSection }) {
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
        {/* Far left — ornate circular emblem */}
        <HouseEmblem
          icon={section.icon}
          themeColor={section.themeColor}
          showRupee={showRupee}
        />

        {/* Middle — badge, title, data table (~42%) */}
        <div
          className="flex w-[42%] shrink-0 flex-col"
          style={{ borderRight: `1px solid ${ASTRO.cardBorder}` }}
        >
          <HouseCardHeader
            houseNumber={section.houseNumber}
            title={section.title}
            subtitle={section.subtitle}
            themeColor={section.themeColor}
          />
          <HouseDataTable fields={section.fields} themeColor={section.themeColor} />
        </div>

        {/* Right — detailed impact paragraphs (~58%) */}
        <DetailedImpactSection
          paragraphs={section.detailedImpactParagraphs}
          themeColor={section.themeColor}
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
  sectionTitle = "HOUSE ANALYSIS FOR WEALTH",
  sectionSubtitle = "Detailed analysis of key houses affecting your financial stability, prosperity and debt patterns in your birth chart.",
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
        backgroundColor: ASTRO.parchment,
        boxShadow: "0 2px 12px rgba(184,134,11,0.08)",
      }}
    >
      <PageOrnamentalFrame />

      <div className="relative flex h-full min-h-0 flex-col">
        <ReportTopBar pageNumber={pageNumber} />

        <section className="relative z-10 mt-2 shrink-0 text-center">
          <h2
            className="font-cinzel text-[24px] font-bold leading-tight tracking-[0.05em]"
            style={{ color: ASTRO.maroon }}
          >
            {sectionTitle}
          </h2>
          <p
            className={`${libreBaskerville.className} mx-auto mt-1 max-w-[560px] text-[11px] italic leading-snug`}
            style={{ color: ASTRO.navy }}
          >
            {sectionSubtitle}
          </p>
        </section>

        <div className="relative z-10 mt-2 flex flex-col gap-2">
          {sections.map((section) => (
            <HouseAnalysisCard key={section.id} section={section} />
          ))}
        </div>

        <ContactFooter website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}
