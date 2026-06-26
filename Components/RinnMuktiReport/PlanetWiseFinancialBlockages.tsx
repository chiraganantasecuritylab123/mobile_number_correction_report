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
  imageSrc?: string;
  sphere?: PlanetSphereStyle;
  positiveInfluence: string;
  negativeInfluence: string;
};

export type PlanetWiseFinancialBlockagesProps = {
  pageNumber?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  rows?: PlanetFinancialRow[];
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultRows: PlanetFinancialRow[] = [
  {
    id: "sun",
    name: "SUN",
    imageSrc: "/assets/rinn-mukti-report/sun.png",
    positiveInfluence:
      "Provides leadership, confidence, self-esteem, and ability to earn through authority, government support, and high position. Strong Sun brings recognition, respect, and financial stability.",
    negativeInfluence:
      "Weak or afflicted Sun can cause pride, ego problems, conflicts with authority, government issues, and unnecessary expenses. It may create obstacles in career growth and financial progress.",
  },
  {
    id: "moon",
    name: "MOON",
    imageSrc: "/assets/rinn-mukti-report/moon.png",
    positiveInfluence:
      "Brings intuition, emotional balance, popularity, and public support. It helps in getting regular income, liquidity, and opportunities through people and networking.",
    negativeInfluence:
      "Weak or afflicted Moon causes emotional instability, overthinking, and fluctuating income. It leads to poor financial decisions, unnecessary spending, and lack of savings.",
  },
  {
    id: "mars",
    name: "MARS",
    imageSrc: "/assets/rinn-mukti-report/mars.png",
    positiveInfluence:
      "Gives energy, courage, determination, and ability to take initiatives. It supports in competitive fields, technical work, real estate, land, and achieving financial goals.",
    negativeInfluence:
      "Afflicted Mars causes aggression, impulsive decisions, risks in investments, legal disputes, accidents, and sudden financial losses. It creates debts through haste and conflicts.",
  },
  {
    id: "mercury",
    name: "MERCURY",
    imageSrc: "/assets/rinn-mukti-report/mercury.png",
    positiveInfluence:
      "Enhances intelligence, communication, business skills, and analytical ability. It helps in trade, marketing, consultancy, finance, accounting, and smart financial planning.",
    negativeInfluence:
      "Weak Mercury causes poor communication, misunderstandings, wrong calculations, document errors, and business losses. It creates confusion and delays in financial matters.",
  },
  {
    id: "jupiter",
    name: "JUPITER",
    imageSrc: "/assets/rinn-mukti-report/jupiter.png",
    positiveInfluence:
      "Brings wisdom, luck, expansion, wealth, savings, and growth. It gives support from mentors, family, and divine blessings for financial prosperity and stability.",
    negativeInfluence:
      "Afflicted Jupiter causes wrong guidance, over-trust, impractical generosity, and financial mismanagement. It leads to money wastage and failed expectations.",
  },
  {
    id: "venus",
    name: "VENUS",
    imageSrc: "/assets/rinn-mukti-report/venus.png",
    positiveInfluence:
      "Attracts wealth, luxury, comforts, beautiful assets, vehicles, and material happiness. It supports in arts, business, fashion, property, and relationships that bring financial benefits.",
    negativeInfluence:
      "Afflicted Venus causes overspending, luxury addiction, relationship issues, attractions towards material pleasures, and financial distractions. It leads to unnecessary expenses.",
  },
  {
    id: "saturn",
    name: "SATURN",
    imageSrc: "/assets/rinn-mukti-report/saturn.png",
    positiveInfluence:
      "Gives discipline, patience, hard work, stability, long-term growth, and accumulation of wealth. It rewards through consistent efforts and a practical approach.",
    negativeInfluence:
      "Afflicted Saturn causes delays, obstacles, debts, financial burden, legal problems, and slow progress. It creates scarcity, restrictions, and responsibilities that block finances.",
  },
  {
    id: "rahu",
    name: "RAHU",
    imageSrc: "/assets/rinn-mukti-report/rahu.png",
    positiveInfluence:
      "Gives unconventional opportunities, foreign income, sudden rise, innovation, technology, and gains through unusual sources.",
    negativeInfluence:
      "Afflicted Rahu causes illusions, wrong choices, frauds, speculation losses, illegal activities, and sudden ups & downs. It creates instability and unexpected financial crises.",
  },
  {
    id: "ketu",
    name: "KETU",
    imageSrc: "/assets/rinn-mukti-report/ketu.png",
    positiveInfluence:
      "Promotes spiritual growth, detachment, wisdom, and savings through simplicity. It helps in research, analytics, and investments for long-term benefits.",
    negativeInfluence:
      "Afflicted Ketu causes uncertainty, loss of interest in money, sudden separations, hidden losses, and unexpected expenses. It creates breaks in financial stability.",
  },
];

function PageOrnamentalFrame() {
  return (
    <>
      <div className="pointer-events-none absolute inset-[14px] rounded-sm"
        aria-hidden
      />  {/* border not needed */}
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

function PlanetIcon({ row }: { row: PlanetFinancialRow }) {
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
        {row.name}
      </span>
    </div>
  );
}

function PlanetTableRow({
  row,
  index,
}: {
  row: PlanetFinancialRow;
  index: number;
}) {
  const cellBorder = `1px solid rgba(200, 154, 43, 0.4)`;
  return (
    <tr className="bg-[#FEF0D9]">
      <td
        className="w-[19%] px-2.5 py-[12px] align-middle"
        style={{ borderTop: cellBorder, borderRight: cellBorder }}
      >
        <PlanetIcon row={row} />
      </td>
      <td
        className={`${libreBaskerville.className} w-[40.5%] px-2.5 py-[7px] text-[11px] leading-[1.42] align-top`}
        style={{ color: ASTRO.cellText, borderTop: cellBorder, borderRight: cellBorder }}
      >
        {row.positiveInfluence}
      </td>
      <td
        className={`${libreBaskerville.className} w-[40.5%] px-2.5 py-[7px] text-[11px] leading-[1.42] align-top`}
        style={{ color: ASTRO.cellText, borderTop: cellBorder }}
      >
        {row.negativeInfluence}
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
    <footer className="relative z-10 mt-2  shrink-0 pt-2.5">
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
  sectionTitle = "PLANET WISE FINANCIAL BLOCKAGES",
  sectionSubtitle =
  "Detailed analysis of each planet's impact on your financial life and the blockages creating debt and money obstacles.",
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
        <ReportTopBar pageNumber={pageNumber} />

        <section className="relative z-10 mt-1 shrink-0 text-center">
          <h2
            className="font-cinzel mx-auto text-[32px] font-bold l leading-tight tracking-[0.04em]"
            style={{ color: ASTRO.navy }}
          >
            PLANET WISE <br /> FINANCIAL BLOCKAGES
          </h2>
          <p
            className={`${libreBaskerville.className} mx-auto mt-1 max-w-[330px] text-[11px] italic leading-snug`}
            style={{ color: ASTRO.navy }}
          >
            {sectionSubtitle}
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
                  PLANET
                </th>
                <th
                  className="w-[40.5%] px-2.5 py-2 text-center font-cinzel text-[12px] font-bold tracking-[0.06em] text-white"
                  style={{ borderRight: `1px solid rgba(200, 154, 43, 0.45)` }}
                >
                  <span className="inline-flex items-center justify-center">
                    <GoldHeaderDivider />
                    POSITIVE INFLUENCE
                    <GoldHeaderDivider />
                  </span>
                </th>
                <th className="w-[40.5%] px-2.5 py-2 text-center font-cinzel text-[12px] font-bold tracking-[0.06em] text-white">
                  <span className="inline-flex items-center justify-center">
                    <GoldHeaderDivider />
                    NEGATIVE INFLUENCE
                    <GoldHeaderDivider />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <PlanetTableRow key={row.id} row={row} index={index} />
              ))}
            </tbody>
          </table>
        </section>

        <ContactFooter website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}
