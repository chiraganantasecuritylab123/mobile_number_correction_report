import {
  Ban,
  BarChart3,
  Eye,
  Lightbulb,
  Sigma,
  TreeDeciduous,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell from "./BusinessNameReportPageShell";
import {
  BUSINESS_ASSETS,
  COLORS,
  BusinessReportHeader,
} from "./BusinessReportCommon";

export type LetterValue = {
  letter: string;
  value: number;
};

export type NameStat = {
  title: string;
  description: string;
  value: string;
  icon: LucideIcon;
};

export type ExistingBusinessNameBreakdownProps = {
  pageNumber?: string;
  subtitle?: string;
  subtitle2?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  businessName?: string;
  letterValues?: LetterValue[];
  totalNameNumber?: number;
  compoundNumber?: number;
  rootNumber?: number;
  hiddenNumber?: number;
  missingVibrations?: string;
  dominantVibrations?: string;
  vibrationInsight?: string;
};

const CHALDEAN_VALUES: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 8,
  G: 3,
  H: 5,
  I: 1,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 7,
  P: 8,
  Q: 1,
  R: 2,
  S: 3,
  T: 4,
  U: 6,
  V: 6,
  W: 6,
  X: 5,
  Y: 1,
  Z: 7,
};

const VALUE_REFERENCE: Record<number, string[]> = {
  1: ["A", "I", "J", "Q", "Y"],
  2: ["B", "K", "R"],
  3: ["C", "G", "L", "S"],
  4: ["D", "M", "T"],
  5: ["E", "H", "N", "X"],
  6: ["U", "V", "W"],
  7: ["O", "Z"],
  8: ["F", "P"],
  9: [],
};

const DEFAULT_BUSINESS_NAME = "ANANTAX TECHNOLOGIES PVT LTD";

const DEFAULT_LETTER_VALUES: LetterValue[] = DEFAULT_BUSINESS_NAME.replace(
  /[^A-Za-z]/g,
  "",
)
  .split("")
  .map((letter) => ({
    letter,
    value: CHALDEAN_VALUES[letter.toUpperCase()] ?? 0,
  }));

const DEFAULT_VIBRATION_INSIGHT =
  "Your business name carries a Root Number 4 vibration, indicating structure, stability, hard work, and a strong foundation Strengthening missing vibrations (2, 9) and balancing dominant energies (1, 4, 5) can enhance growth, visibility, and financial flow.";

function FrameBackground({
  src,
  width,
  height,
  padding,
  children,
  className = "",
}: {
  src: string;
  width: number | string;
  height: number | string;
  padding: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-no-repeat font-nunito-sans ${className}`}
      style={{
        width,
        height,
        backgroundImage: `url('${src}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="h-full w-full" style={{ padding }}>
        {children}
      </div>
    </div>
  );
}

function PageSectionHeader({
  pageIndex,
  title,
  description,
}: {
  pageIndex: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative z-10 flex flex-col items-center text-center font-nunito-sans">
      <div
        className="flex flex-row h-[92px] w-[570px] items-center justify-center mx-auto bg-[url('/assets/businessReport/page-4-card.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex w-full items-center justify-center gap-3">
          <div
            className="flex h-[34px] w-[34px] shrink-5 items-center justify-center rounded-full text-[26px] mb-3 mr-6 font-bold font-nunito-sans"
            style={{
              color: COLORS.cream,
            }}
          >
            04
          </div>

          <p
            className="text-center text-[16px] font-bold leading-tight tracking-[0.04em] mb-3 font-nunito-sans"
            style={{ color: COLORS.brown }}
          >
            {title}
          </p>
        </div>
      </div>

      <p
        className="mt-0.5 max-w-[520px] text-[16px] italic leading-snug font-nunito-sans"
        style={{ color: COLORS.brown }}
      >
        {description}
      </p>
    </section>
  );
}

function BusinessNameBox({ businessName }: { businessName: string }) {
  return (
    <section className="relative z-10 mt-3 flex justify-center px-2 font-nunito-sans">
      <div
        className="relative flex w-full max-w-[640px] flex-col items-center justify-center px-6 pt-6 pb-3"
        style={{
          backgroundImage:
            "url('/assets/signaturePages/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          minHeight: "82px",
        }}
      >
        {/* Top Label */}
        <span
          className="absolute top-[12px] bg-transparent px-3 text-[11px] font-semibold tracking-[0.12em] uppercase font-nunito-sans"
          style={{ color: COLORS.gold }}
        >
          BUSINESS NAME
        </span>

        {/* Business Name */}
        <p
          className="mt-3 text-center text-[18px] font-bold leading-tight tracking-[0.02em] font-nunito-sans"
          style={{ color: COLORS.brown }}
        >
          {businessName}
        </p>
      </div>
    </section>
  );
}

function LetterTable({
  rows,
  className = "",
}: {
  rows: LetterValue[];
  className?: string;
}) {
  return (
    <table className={`w-full border-collapse text-center font-nunito-sans ${className}`}>
      <thead>
        <tr>
          <th
            className="pb-1.5 text-[9px] font-bold tracking-[0.12em] uppercase font-nunito-sans"
            style={{ color: COLORS.gold }}
          >
            LETTER
          </th>
          <th
            className="pb-1.5 text-[9px] font-bold tracking-[0.12em] uppercase font-nunito-sans"
            style={{ color: COLORS.gold }}
          >
            VALUE
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={`${row.letter}-${index}`}
            className="border-t"
            style={{ borderColor: "rgba(184, 134, 11, 0.25)" }}
          >
            <td
              className="py-[3px] text-[11px] font-semibold font-nunito-sans"
              style={{ color: COLORS.brown }}
            >
              {row.letter}
            </td>
            <td
              className="py-[3px] text-[11px] font-bold font-nunito-sans"
              style={{ color: COLORS.brown }}
            >
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LetterBreakdownSection({ letterValues }: { letterValues: LetterValue[] }) {
  const midpoint = Math.ceil(letterValues.length / 2);
  const leftRows = letterValues.slice(0, midpoint);
  const rightRows = letterValues.slice(midpoint);

  return (
    <div
      className="flex h-full gap-3 rounded-sm w-full px-2 py-2 font-nunito-sans"
      style={{
        backgroundColor: "rgba(253, 245, 230, 0.72)",
        border: `1px solid rgba(184, 134, 11, 0.35)`,
      }}
    >
      <LetterTable rows={leftRows} className="flex-1 px-2 pt-2" />
      <div
        className="w-px self-stretch my-2"
        style={{ backgroundColor: "rgba(184, 134, 11, 0.3)" }}
      />
      <LetterTable rows={rightRows} className="flex-1 px-2 pt-2" />
    </div>
  );
}

function CompoundIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function StatRow({
  title,
  description,
  value,
  icon: Icon,
  customIcon,
}: NameStat & { customIcon?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-nunito-sans">
      <div
        className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
      >
        {customIcon ?? <Icon size={25} strokeWidth={1.8} aria-hidden />}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="text-[12px] font-bold leading-tight uppercase font-nunito-sans"
          style={{ color: COLORS.brown }}
        >
          {title}
        </p>
        <p
          className="text-[11px] leading-tight font-nunito-sans"
          style={{ color: COLORS.brown }}
        >
          {description}
        </p>
      </div>

      <div
        className="flex h-[40px] w-[50px] shrink-0 items-center justify-center text-center text-[18px] font-bold leading-tight font-nunito-sans"
        style={{
          border: `1px solid ${COLORS.gold}`,
          color: COLORS.brown,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function StatsPanel({
  totalNameNumber,
  compoundNumber,
  rootNumber,
  hiddenNumber,
  missingVibrations,
  dominantVibrations,
}: {
  totalNameNumber: number;
  compoundNumber: number;
  rootNumber: number;
  hiddenNumber: number;
  missingVibrations: string;
  dominantVibrations: string;
}) {
  const stats: (NameStat & { customIcon?: ReactNode })[] = [
    {
      title: "TOTAL NAME NUMBER",
      description: "Sum of all letter values",
      value: String(totalNameNumber),
      icon: Sigma,
    },
    {
      title: "COMPOUND NUMBER",
      description: "Total reduced to single digit",
      value: String(compoundNumber),
      icon: Sigma,
      customIcon: <CompoundIcon />,
    },
    {
      title: "ROOT NUMBER",
      description: "Final single digit vibration",
      value: String(rootNumber),
      icon: TreeDeciduous,
    },
    {
      title: "HIDDEN NUMBER",
      description: "Total of vowels",
      value: String(hiddenNumber),
      icon: Eye,
    },
    {
      title: "MISSING VIBRATIONS",
      description: "Numbers not present in name",
      value: missingVibrations,
      icon: Ban,
    },
    {
      title: "DOMINANT VIBRATIONS",
      description: "Most recurring numbers",
      value: dominantVibrations,
      icon: BarChart3,
    },
  ];

  return (
    <FrameBackground
      src={BUSINESS_ASSETS.thirdCard}
      width={500}
      height={400}
      padding="20px 15px"
    >
      <div className="flex h-full flex-col justify-between gap-1.5 font-nunito-sans">
        {stats.map((stat) => (
          <StatRow key={stat.title} {...stat} />
        ))}
      </div>
    </FrameBackground>
  );
}

function PanelHeader({ title }: { title: string }) {
  return (
    <div
      className="px-3 py-1.5 text-center text-[9px] font-bold tracking-[0.1em] uppercase font-nunito-sans"
      style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
    >
      {title}
    </div>
  );
}

function ValueReferenceChart() {
  return (
    <FrameBackground
      src={BUSINESS_ASSETS.forthCard}
      width={400}
      height={220}
      padding="20px 15px"
      className="flex flex-col"
    >
      <div
        className="flex h-full flex-col overflow-hidden rounded-sm font-nunito-sans"
      >
        <PanelHeader title="VALUE REFERENCE CHART" />

        <div className="flex-1">
          <div
            className="grid grid-cols-9 gap-0 border"
            style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
          >
            {Array.from({ length: 9 }, (_, index) => index + 1).map((num) => (
              <div
                key={num}
                className="border-r last:border-r-0 text-center"
                style={{ borderColor: "rgba(184, 134, 11, 0.25)" }}
              >
                <div
                  className="border-b py-0.5 text-[15px] font-bold font-nunito-sans"
                  style={{
                    borderColor: "rgba(184, 134, 11, 0.25)",
                    color: COLORS.brown,
                  }}
                >
                  {num}
                </div>
                <div
                  className="flex min-h-[34px] flex-col items-center justify-center px-0.5 py-1 text-[11px] font-semibold leading-tight font-nunito-sans"
                  style={{ color: COLORS.brown }}
                >
                  {VALUE_REFERENCE[num].map((letter) => (
                    <span key={letter}>{letter}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-start gap-1.5 px-1 font-nunito-sans">
            <Lightbulb
              size={25}
              strokeWidth={1.6}
              style={{ color: COLORS.gold }}
              className="mt-0.5 shrink-0"
              aria-hidden
            />
            <p
              className="text-[12px] leading-snug font-nunito-sans"
              style={{ color: COLORS.black }}
            >
              Each letter carries a specific vibration (1–9) that influences the
              energy of your business name.
            </p>
          </div>
        </div>
      </div>
    </FrameBackground>
  );
}

function VibrationInsightPanel({ text }: { text: string }) {
  return (
    <FrameBackground
      src={BUSINESS_ASSETS.forthCard}
      width={420}
      height={220}
      padding="12px 12px 10px"
    >
      <div
        className="flex h-full flex-col overflow-hidden rounded-sm font-nunito-sans"
      >
        <PanelHeader title="NAME VIBRATION INSIGHT" />

        <div className="flex flex-1 items-start gap-2 px-2.5 py-2 font-nunito-sans">
          <CoverLotus size={100} className="shrink-0" />
          <p
            className="text-[12px] leading-relaxed font-nunito-sans"
            style={{ color: COLORS.brown, fontFamily: "Georgia, serif" }}
          >
            {text}
          </p>
        </div>
      </div>
    </FrameBackground>
  );
}

function SimplePageFooter({ pageNumber }: { pageNumber: string }) {
  return (
    <footer className="relative z-10 mt-auto flex justify-end px-2 pt-2 font-nunito-sans">
      <div className="flex items-center gap-1.5">
        <Pattern3 size={14} />
        <span
          className="text-[10px] font-bold tracking-[0.12em] font-nunito-sans"
          style={{ color: COLORS.gold }}
        >
          PAGE {pageNumber}
        </span>
        <Pattern3 size={14} className="rotate-180" />
      </div>
    </footer>
  );
}

export default function ExistingBusinessNameBreakdown({
  pageNumber = "04",
  subtitle = "BUSINESS NAME OPTIMIZATION REPORT",
  subtitle2 = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  sectionTitle = "EXISTING BUSINESS NAME BREAKDOWN",
  sectionDescription = "Detailed numerological analysis of each letter in your business name.",
  businessName = DEFAULT_BUSINESS_NAME,
  letterValues = DEFAULT_LETTER_VALUES,
  totalNameNumber = 112,
  compoundNumber = 4,
  rootNumber = 4,
  hiddenNumber = 46,
  missingVibrations = "2, 9",
  dominantVibrations = "1, 4, 5",
  vibrationInsight = DEFAULT_VIBRATION_INSIGHT,
}: ExistingBusinessNameBreakdownProps) {
  return (
    <BusinessNameReportPageShell padding="18px 40px 16px" pageNumber={pageNumber}>
      <div className="flex h-full flex-col font-nunito-sans">
        <BusinessReportHeader subtitle={subtitle} subtitle2={subtitle2} logoSize={85} />

        <PageSectionHeader
          pageIndex={pageNumber}
          title={sectionTitle}
          description={sectionDescription}
        />

        <BusinessNameBox businessName={businessName} />

        <section className="relative z-10 mt-2 flex justify-center gap-3 font-nunito-sans">
          <LetterBreakdownSection letterValues={letterValues} />
          <StatsPanel
            totalNameNumber={totalNameNumber}
            compoundNumber={compoundNumber}
            rootNumber={rootNumber}
            hiddenNumber={hiddenNumber}
            missingVibrations={missingVibrations}
            dominantVibrations={dominantVibrations}
          />
        </section>

        <section className="relative z-10 mt-2.5 flex justify-center gap-3 font-nunito-sans">
          <ValueReferenceChart />
          <VibrationInsightPanel text={vibrationInsight} />
        </section>

        <SimplePageFooter pageNumber={pageNumber} />
      </div>
    </BusinessNameReportPageShell>
  );
}