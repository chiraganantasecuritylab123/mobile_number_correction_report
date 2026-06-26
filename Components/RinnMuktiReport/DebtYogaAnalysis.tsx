import Image from "next/image";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import {
  BarChart3,
  Check,
  CloudMoon,
  Eclipse,
  Flower2,
  Globe,
  Link2,
  Link2Off,
  Phone,
  Users,
  X,
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
  high: "#8B0000",
  moderate: "#D48E31",
  available: "#2D7A4F",
  unavailable: "#A84432",
  summaryBg: "#FFF8E7",
} as const;

const ASSETS = {
  penLogo: "/assets/signatureReport/logo-main.png",
  pattern2: "/assets/cover/pattern-2.png",
  pageBadge: "/assets/signatureReport/roundCircleImage.png",
  summaryIcon: "/assets/signatureReport/ruppesGullak.png",
} as const;

export type InfluenceLevel = "HIGH" | "MODERATE";

export type DebtYogaRow = {
  id: string;
  name: string;
  icon: LucideIcon;
  iconBg: string;
  available: boolean;
  houses: string;
  influenceLevel?: InfluenceLevel;
  influencePercent?: number;
};

export type DebtYogaAnalysisProps = {
  pageNumber?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  introText?: string;
  tableTitle?: string;
  rows?: DebtYogaRow[];
  summaryTitle?: string;
  summaryText?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultRows: DebtYogaRow[] = [
  {
    id: "rin",
    name: "RIN YOGA",
    icon: Link2,
    iconBg: "#C0392B",
    available: true,
    houses: "6th House",
    influenceLevel: "HIGH",
    influencePercent: 80,
  },
  {
    id: "daridra",
    name: "DARIDRA YOGA",
    icon: BarChart3,
    iconBg: "#7A5230",
    available: true,
    houses: "2nd, 11th Houses",
    influenceLevel: "MODERATE",
    influencePercent: 60,
  },
  {
    id: "shrapit",
    name: "SHRAPIT YOGA",
    icon: Link2Off,
    iconBg: "#6B4C9A",
    available: false,
    houses: "—",
  },
  {
    id: "guru-chandal",
    name: "GURU CHANDAL YOGA",
    icon: Users,
    iconBg: "#2D7A4F",
    available: true,
    houses: "10th House",
    influenceLevel: "MODERATE",
    influencePercent: 55,
  },
  {
    id: "kemadruma",
    name: "KEMADRUMA YOGA",
    icon: CloudMoon,
    iconBg: "#2C4A6E",
    available: false,
    houses: "—",
  },
  {
    id: "grahan",
    name: "GRAHAN YOGA",
    icon: Eclipse,
    iconBg: "#2A2A2A",
    available: true,
    houses: "8th House",
    influenceLevel: "HIGH",
    influencePercent: 75,
  },
  {
    id: "wealth-blocking",
    name: "OTHER WEALTH BLOCKING COMBINATIONS",
    icon: Flower2,
    iconBg: "#B8860B",
    available: true,
    houses: "12th House",
    influenceLevel: "MODERATE",
    influencePercent: 50,
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
      <header className="flex flex-1 flex-col items-center pt-1 text-center mt-5">
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
    </div>
  );
}

function InfluenceBar({
  level,
  percent,
}: {
  level: InfluenceLevel;
  percent: number;
}) {
  const color = level === "HIGH" ? ASTRO.high : ASTRO.moderate;
  const label = level === "HIGH" ? "High" : "Moderate";

  return (
    <div className="flex min-w-0 flex-col items-center gap-1">
      <span
        className={`${libreBaskerville.className} text-[12px] font-bold`}
        style={{ color }}
      >
        {label}
      </span>
      <div
        className="h-[6px] w-full max-w-[88px] overflow-hidden rounded-full"
        style={{ backgroundColor: "rgba(106, 90, 74, 0.15)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function AvailabilityCell({ available }: { available: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex h-[22px] w-[22px] items-center justify-center rounded-full"
        style={{
          backgroundColor: available ? "rgba(45, 122, 79, 0.12)" : "rgba(168, 68, 50, 0.12)",
        }}
      >
        {available ? (
          <Check size={14} strokeWidth={2.5} style={{ color: ASTRO.available }} aria-hidden />
        ) : (
          <X size={14} strokeWidth={2.5} style={{ color: ASTRO.unavailable }} aria-hidden />
        )}
      </div>
      <span
        className={`${libreBaskerville.className} text-[10px] font-bold tracking-[0.04em]`}
        style={{ color: available ? ASTRO.available : ASTRO.unavailable }}
      >
        {available ? "AVAILABLE" : "NOT AVAILABLE"}
      </span>
    </div>
  );
}

function DebtYogaTableRow({ row }: { row: DebtYogaRow }) {
  const Icon = row.icon;

  return (
    <tr style={{ borderTop: `1px solid rgba(200, 154, 43, 0.35)` }}>
      <td className="px-2 py-5 align-middle">
        <div className="flex items-center gap-2">
          <div
            className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: row.iconBg }}
          >
            <Icon size={22} strokeWidth={2} style={{ color: "#fff" }} aria-hidden />
          </div>
          <span
            className={`${libreBaskerville.className} text-[12px] font-bold leading-tight tracking-[0.03em]`}
            style={{ color: ASTRO.darkBrown }}
          >
            {row.name}
          </span>
        </div>
      </td>
      <td className="px-2 py-2 align-middle" style={{ borderLeft: `1px solid rgba(200, 154, 43, 0.35)` }}>
        <AvailabilityCell available={row.available} />
      </td>
      <td
        className={`${cormorant.className} px-2 py-2 text-center text-[14px] font-semibold align-middle`}
        style={{ color: ASTRO.value, borderLeft: `1px solid rgba(200, 154, 43, 0.35)` }}
      >
        {row.houses}
      </td>
      <td className="px-2 py-2 align-middle" style={{ borderLeft: `1px solid rgba(200, 154, 43, 0.35)` }}>
        {row.available && row.influenceLevel && row.influencePercent !== undefined ? (
          <InfluenceBar level={row.influenceLevel} percent={row.influencePercent} />
        ) : (
          <span
            className={`${cormorant.className} block text-center text-[14px] font-semibold`}
            style={{ color: ASTRO.body }}
          >
            —
          </span>
        )}
      </td>
    </tr>
  );
}

function SummarySection({ title, text }: { title: string; text: string }) {
  return (
    <section
      className="relative z-10 mt-3 shrink-0 rounded-md px-4 py-3"
      style={{
        backgroundColor: '#FEF0D9',
        border: `1.5px solid ${ASTRO.borderGold}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: ASTRO.navy }}
        >
          <Image
            src={ASSETS.summaryIcon}
            alt=""
            width={ 100}
            height={100}
            className="object-contain"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col">
            <p
              className="font-cinzel text-[14px] font-bold tracking-[0.08em]"
              style={{ color: ASTRO.navy }}
            >
              {title}
            </p>
            <OrnamentDivider width={120} />
          </div>
          <p
            className={`${libreBaskerville.className} mt-1 text-[12px] font-bold leading-relaxed`}
            style={{ color: ASTRO.body }}
          >
            {text}
          </p>
        </div>
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
    <footer className="relative z-10 mt-5 shrink-0 pt-2.5">
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

export default function DebtYogaAnalysis({
  pageNumber = "03",
  sectionTitle = "DEBT YOGA ANALYSIS",
  sectionSubtitle = "Analysing Financial Debt Yogas & Wealth Blockages in Your Horoscope",
  introText = "This section shows whether major debt-related yogas are present in your birth chart. If present, the house(s) involved and the estimated influence level are mentioned.",
  tableTitle = "FINANCIAL DEBT YOGAS CHECKLIST",
  rows = defaultRows,
  summaryTitle = "SUMMARY",
  summaryText = "Your chart shows a mix of financial debt yogas that influence your money flow, debt patterns, and wealth accumulation. Some yogas are actively impacting your financial stability, while others are not currently effective. Understanding these influences helps in applying the right remedies to reduce debt burden and strengthen financial growth.",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: DebtYogaAnalysisProps) {
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
            className="font-cinzel text-[26px] font-bold leading-tight tracking-[0.05em]"
            style={{ color: ASTRO.maroon }}
          >
            {sectionTitle}
          </h2>
          <p
            className={`${libreBaskerville.className} mx-auto mt-1 max-w-[520px] text-[12px] italic leading-snug`}
            style={{ color: ASTRO.navy }}
          >
            {sectionSubtitle}
          </p>
        </section>

        <section
          className="relative z-10 mt-3 overflow-hidden rounded-md"
          style={{ border: `1.5px solid ${ASTRO.borderGold}` }}
        >
          <div
            className="px-4 py-2 text-center"
            style={{ backgroundColor: ASTRO.navy }}
          >
            <p className="font-cinzel text-[12px] font-bold tracking-[0.1em] text-white">
              ✦ {tableTitle} ✦
            </p>
          </div>

          <p
            className={`${libreBaskerville.className} px-4 py-2 text-center text-[11px] leading-relaxed`}
            style={{ color: ASTRO.body, backgroundColor: "rgba(255, 248, 231, 0.65)" }}
          >
            {introText}
          </p>

          <div className="overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "rgba(248, 238, 220, 0.9)" }}>
                  {["DEBT YOGA", "AVAILABLE OR NOT?", "HOUSE(S) INVOLVED", "INFLUENCE LEVEL"].map(
                    (heading, index) => (
                      <th
                        key={heading}
                        className={`${libreBaskerville.className} px-2 py-2 text-[10px] font-bold tracking-[0.05em]`}
                        style={{
                          color: ASTRO.darkBrown,
                          borderTop: `1px solid rgba(200, 154, 43, 0.35)`,
                          borderLeft: index > 0 ? `1px solid rgba(200, 154, 43, 0.35)` : undefined,
                        }}
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <DebtYogaTableRow key={row.id} row={row} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SummarySection title={summaryTitle} text={summaryText} />
        <ContactFooter website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}
