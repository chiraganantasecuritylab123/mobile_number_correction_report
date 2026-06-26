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
  bodyText: string;
  icon: "lock" | "piggy" | "debt";
};

export type SourceOfFinancialProblemsProps = {
  pageNumber?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  cards?: ProblemCard[];
  noteText?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultCards: ProblemCard[] = [
  {
    id: "blocked",
    number: "01",
    title: "WHY MONEY GETS BLOCKED REPEATEDLY",
    icon: "lock",
    bodyText:
      "Negative planetary influences, past karmas, wrong financial decisions and unsuitable timings create continuous blocks in the natural flow of money. Opportunities get delayed, income sources become unstable, important work faces unexpected obstacles, and efforts do not bring the desired results. As a result, money may come in but does not stay, leading to repeated financial difficulties and stress.",
  },
  {
    id: "savings",
    number: "02",
    title: "WHY SAVINGS FAIL TO ACCUMULATE",
    icon: "piggy",
    bodyText:
      "Even with income, lack of budgeting, impulsive spending, weak financial discipline and lack of clarity in goals prevent savings from growing. Money gets spent quickly on unnecessary things, emergencies or obligations. Due to this, you are unable to build a financial cushion or secure your future, and savings either remain very low or get depleted again and again.",
  },
  {
    id: "debts",
    number: "03",
    title: "WHY DEBTS BECOME DIFFICULT TO CLEAR",
    icon: "debt",
    bodyText:
      "High interest rates, repeated borrowing, unexpected expenses and insufficient income increase the burden over time. Influence of malefic planets can bring delays, penalties, legal complications or income fluctuations. All these factors make it hard to repay loans on time, and the debt cycle becomes longer and more stressful.",
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

function ReportTopBar({ pageNumber }: { pageNumber: string }) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-3">
      <PageNumberBadge pageNumber={pageNumber} />

      <header className="mt-5 flex flex-1 flex-col items-center pt-1 text-center">
        <h1
          className="font-cinzel text-[28px] font-bold leading-none tracking-[0.06em]"
          style={{ color: ASTRO.darkBrown }}
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

function OrnateIconEmblem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-[26%] shrink-0 items-center justify-center self-stretch py-4 pl-3 pr-2">
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
      <Lock size={30} strokeWidth={1.6} aria-hidden />
      <IndianRupee
        size={14}
        strokeWidth={2.2}
        className="absolute -bottom-0.5 right-[-6px]"
        aria-hidden
      />
    </div>
  );
}

function CrackedPiggyIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <PiggyBank size={30} strokeWidth={1.6} aria-hidden />
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
      <FileText size={28} strokeWidth={1.6} aria-hidden />
      <span
        className={`${libreBaskerville.className} mt-[-4px] text-[8px] font-bold tracking-[0.08em]`}
        style={{ color: ASTRO.gold }}
      >
        DEBT
      </span>
      <div
        className="absolute -bottom-1 -right-1 flex h-[16px] w-[16px] items-center justify-center rounded-full"
        style={{ backgroundColor: ASTRO.gold }}
      >
        <IndianRupee size={9} strokeWidth={2.5} style={{ color: ASTRO.iconBrown }} aria-hidden />
      </div>
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
    <div className="relative flex h-[28px] w-[28px] shrink-0 items-center justify-center">
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
        className={`${cormorant.className} relative text-[12px] font-bold leading-none text-white`}
      >
        {number}
      </span>
    </div>
  );
}

function ProblemAnalysisCard({ card }: { card: ProblemCard }) {
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
          className="flex min-w-0 flex-1 flex-col justify-center py-3 pr-3 pl-1"
          style={{ borderLeft: `1px dashed ${ASTRO.borderGold}` }}
        >
          <div className="flex items-start gap-2">
            <NumberBadge number={card.number} />
            <div className="min-w-0 flex-1">
              <p
                className="font-cinzel text-[12px] font-bold leading-tight tracking-[0.03em]"
                style={{ color: ASTRO.darkBrown }}
              >
                {card.title}
              </p>
              <div className="mt-1">
                <OrnamentDivider width={140} />
              </div>
            </div>
          </div>
          <p
            className={`${libreBaskerville.className} mt-2 text-[10.5px] leading-[1.55] pl-[36px]`}
            style={{ color: ASTRO.body }}
          >
            {card.bodyText}
          </p>
        </div>
      </div>
    </section>
  );
}

function NoteBox({ text }: { text: string }) {
  return (
    <section
      className="relative z-10 mt-2 shrink-0 rounded-[8px] px-3 py-2.5"
      style={{
        backgroundColor: ASTRO.noteBg,
        border: `1.5px solid ${ASTRO.borderGold}`,
      }}
    >
      <div className="flex items-start gap-2.5">
        <div
          className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "#E8A838" }}
        >
          <AlertCircle size={14} strokeWidth={2.2} style={{ color: ASTRO.darkBrown }} aria-hidden />
        </div>
        <p
          className={`${libreBaskerville.className} text-[10px] italic leading-relaxed`}
          style={{ color: ASTRO.body }}
        >
          <span className="font-bold not-italic" style={{ color: ASTRO.darkBrown }}>
            NOTE:{" "}
          </span>
          {text}
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
    <footer
      className="relative z-10 mt-2 shrink-0 rounded-sm px-4 py-2"
      style={{ backgroundColor: ASTRO.darkBrown }}
    >
      <div
        className={`${libreBaskerville.className} flex flex-wrap items-center justify-center gap-x-4 gap-y-1`}
        style={{ color: lightText }}
      >
        <div className="flex items-center gap-1.5">
          <Globe size={14} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[11px] font-semibold">{website}</span>
        </div>
        <span style={{ color: ASTRO.gold, opacity: 0.7 }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <Phone size={14} strokeWidth={2} style={{ color: ASTRO.gold }} />
          <span className="text-[11px] font-semibold">{phone}</span>
        </div>
        <span style={{ color: ASTRO.gold, opacity: 0.7 }} aria-hidden>
          |
        </span>
        <div className="flex items-center gap-1.5">
          <InstagramIcon size={14} color={ASTRO.gold} />
          <span className="text-[11px] font-semibold">{instagram}</span>
        </div>
      </div>
    </footer>
  );
}

export default function SourceOfFinancialProblems({
  pageNumber = "06",
  sectionTitle = "SOURCE OF FINANCIAL PROBLEMS",
  sectionSubtitle = "Understanding the root causes behind recurring financial obstacles.",
  cards = defaultCards,
  noteText = "This analysis is based on numerological and astrological principles. It is meant for guidance and self-awareness only and should not be considered as a legal, financial or professional advice.",
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
        <HeaderCommun reportName="RINN MUKTI REPORT" title={sectionTitle} description={sectionSubtitle} breackWord={[2]} />
        <div className="relative z-10 mt-3 flex min-h-0 flex-1 flex-col gap-2.5">
          {cards.map((card) => (
            <ProblemAnalysisCard key={card.id} card={card} />
          ))}
        </div>
        <NoteBox text={noteText} />
        <ContactBar website={website} phone={phone} instagram={instagram} />
      </div>
    </BusinessNameReportPageShell>
  );
}