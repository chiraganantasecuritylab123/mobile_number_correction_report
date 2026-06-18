import {
  AlertTriangle,
  Ban,
  Building2,
  Calendar,
  Car,
  Check,
  Crown,
  Gem,
  Handshake,
  Home,
  Scale,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { LoShuSquare, LotusIcon } from "./CoverPageDecorations";
import { SectionDiamondTitle } from "./LoshuGridDecorations";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type NumberProfileRow = {
  category: string;
  categoryIcon: LucideIcon;
  variant: "lucky" | "veryLucky" | "supporting" | "neutral" | "unlucky";
  numbers: string;
  influence: string;
  influenceIcon: LucideIcon;
  description: string;
};

export type PrimaryLuckyNumber = {
  number: number;
  label: string;
  description: string;
};

export type SecondaryLuckyNumber = {
  number: number;
  description: string;
};

export type UnluckyNumberItem = {
  numbers: string;
  description: string;
};

export type DailyUseRow = {
  area: string;
  icon: LucideIcon;
  recommendedNumbers: string;
  action: string;
};

export type LuckyUnluckyNeutralNumbersProps = {
  profileRows?: NumberProfileRow[];
  primaryLucky?: PrimaryLuckyNumber[];
  secondaryLucky?: SecondaryLuckyNumber[];
  unluckyNumbers?: UnluckyNumberItem[];
  neutralNote?: string;
  dailyUseRows?: DailyUseRow[];
  dos?: string[];
  donts?: string[];
  powerTip?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const VARIANT_COLORS = {
  lucky: { accent: "#2d7a4f", bg: "rgba(45, 122, 79, 0.08)" },
  veryLucky: { accent: "#2d7a4f", bg: "rgba(45, 122, 79, 0.12)" },
  supporting: { accent: "#2d7a4f", bg: "rgba(45, 122, 79, 0.06)" },
  neutral: { accent: "#7a7a7a", bg: "rgba(120, 120, 120, 0.08)" },
  unlucky: { accent: "#a84432", bg: "rgba(168, 68, 50, 0.08)" },
};

const defaultProfileRows: NumberProfileRow[] = [
  {
    category: "Lucky Numbers",
    categoryIcon: Sparkles,
    variant: "lucky",
    numbers: "5, 7, 2, 1, 6",
    influence: "Strong positive support",
    influenceIcon: Shield,
    description: "Numbers that attract good fortune, growth, opportunities and harmony.",
  },
  {
    category: "Very Lucky",
    categoryIcon: Star,
    variant: "veryLucky",
    numbers: "5, 7",
    influence: "Primary numbers (Driver + Conductor)",
    influenceIcon: Crown,
    description: "Your most powerful core numbers with the strongest positive vibration.",
  },
  {
    category: "Supporting Lucky",
    categoryIcon: Handshake,
    variant: "supporting",
    numbers: "1, 6, 9",
    influence: "Friendly to your core energies",
    influenceIcon: Users,
    description: "Support your growth, stability, relationships and overall success.",
  },
  {
    category: "Neutral Numbers",
    categoryIcon: Scale,
    variant: "neutral",
    numbers: "3, 4, 8",
    influence: "Neither help nor harm",
    influenceIcon: Scale,
    description: "Neutral numbers – neither strongly positive nor negative. Use carefully.",
  },
  {
    category: "Unlucky Numbers",
    categoryIcon: AlertTriangle,
    variant: "unlucky",
    numbers: "4, 8 (especially repeated)",
    influence: "Create obstacles & delays",
    influenceIcon: Ban,
    description: "Can create challenges, delays, blockages and unnecessary struggles.",
  },
];

const defaultPrimaryLucky: PrimaryLuckyNumber[] = [
  { number: 5, label: "Your Driver Number", description: "Freedom, progress, travel, communication" },
  { number: 7, label: "Your Conductor Number", description: "Spirituality, wisdom, research, intuition" },
  { number: 2, label: "Your Kua Number", description: "Harmony, relationships, emotional balance" },
];

const defaultSecondaryLucky: SecondaryLuckyNumber[] = [
  { number: 1, description: "Leadership, new beginnings, independence" },
  { number: 6, description: "Responsibility, family, luxury, healing" },
  { number: 9, description: "Compassion, completion, universal wisdom" },
];

const defaultUnluckyNumbers: UnluckyNumberItem[] = [
  { numbers: "4", description: "Strongest caution number (especially double 44 or 4 series)" },
  { numbers: "8", description: "Can bring delays, struggles, and karmic lessons" },
  { numbers: "4&8", description: "Repeated 4 & 8 together are highly challenging for you" },
];

const defaultDailyUseRows: DailyUseRow[] = [
  {
    area: "Mobile Number",
    icon: Smartphone,
    recommendedNumbers: "Total ending in 5, 7, 1, 6",
    action: "Choose new number with these root totals.",
  },
  {
    area: "Bank Account / UPI",
    icon: Building2,
    recommendedNumbers: "Last 4 digits 5, 7, 15, 25, 52",
    action: "Keep ending digits in lucky series.",
  },
  {
    area: "Vehicle Number",
    icon: Car,
    recommendedNumbers: "5, 7, 15, 25, 52, 61, 16",
    action: "Prefer these endings.",
  },
  {
    area: "House / Flat Number",
    icon: Home,
    recommendedNumbers: "5, 7, 2, 6, 11, 16, 25, 52",
    action: "Ideal for residence.",
  },
  {
    area: "Office / Shop Number",
    icon: Building2,
    recommendedNumbers: "1, 5, 7, 9",
    action: "Good for business growth.",
  },
  {
    area: "Important Dates",
    icon: Calendar,
    recommendedNumbers: "5th, 7th, 14th, 16th, 23rd, 25th",
    action: "Schedule meetings, launches, signing on these dates.",
  },
  {
    area: "Jewellery / Items",
    icon: Gem,
    recommendedNumbers: "5, 7 or 2 grams of gold/silver",
    action: "Wear in multiples of lucky numbers.",
  },
];

const defaultDos = [
  "Use lucky numbers wherever possible (especially 5 & 7)",
  "Save important contacts with lucky number combinations",
  "Make major transactions/financial moves on lucky dates",
  "Prefer vehicles/houses with friendly numbers",
];

const defaultDonts = [
  "Avoid numbers heavily dominated by 4 & 8",
  "Avoid addresses ending with 4 or 8 if possible",
  "Don't repeat unlucky numbers in important documents",
];

function GoldBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md ${className}`}
      style={{
        border: "1px solid #b8860b",
        backgroundColor: "rgba(253, 245, 230, 0.78)",
      }}
    >
      {children}
    </div>
  );
}

function SectionBadge({ index }: { index: string }) {
  return (
    <span
      className="inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[6px] font-bold"
      style={{
        backgroundColor: COLORS.brown,
        color: COLORS.cream,
        border: "1px solid #d48e31",
      }}
    >
      {index}
    </span>
  );
}

function NumberCircle({
  value,
  variant,
}: {
  value: string | number;
  variant: "lucky" | "unlucky" | "neutral";
}) {
  const styles = {
    lucky: { border: "1.5px solid #2d7a4f", backgroundColor: "rgba(45, 122, 79, 0.12)", color: "#2d7a4f" },
    unlucky: { border: "1.5px solid #a84432", backgroundColor: "rgba(168, 68, 50, 0.1)", color: "#a84432" },
    neutral: { border: "1.5px solid #888", backgroundColor: "rgba(120, 120, 120, 0.08)", color: "#666" },
  }[variant];

  return (
    <div
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
      style={styles}
    >
      {value}
    </div>
  );
}

function ProfileTable({ rows }: { rows: NumberProfileRow[] }) {
  return (
    <GoldBox className="overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(184, 134, 11, 0.4)" }}>
            {["Category", "Numbers", "Ruling Influence", "Description"].map((heading) => (
              <th
                key={heading}
                className="px-1.5 py-1 text-[6px] font-bold tracking-wider"
                style={{ color: COLORS.gold }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const CategoryIcon = row.categoryIcon;
            const InfluenceIcon = row.influenceIcon;
            const variant = VARIANT_COLORS[row.variant];

            return (
              <tr
                key={row.category}
                style={{
                  borderBottom:
                    index < rows.length - 1 ? "1px solid rgba(184, 134, 11, 0.18)" : "none",
                  backgroundColor: variant.bg,
                }}
              >
                <td className="px-1.5 py-1 align-top">
                  <div className="flex items-center gap-1">
                    <CategoryIcon size={10} strokeWidth={2} style={{ color: variant.accent }} />
                    <span className="text-[6px] font-bold" style={{ color: COLORS.brown }}>
                      {row.category}
                    </span>
                  </div>
                </td>
                <td
                  className="px-1.5 py-1 align-middle text-[6px] font-semibold"
                  style={{ color: variant.accent }}
                >
                  {row.numbers}
                </td>
                <td className="px-1.5 py-1 align-top">
                  <div className="flex items-start gap-1">
                    <InfluenceIcon
                      size={9}
                      strokeWidth={2}
                      style={{ color: variant.accent, flexShrink: 0, marginTop: 1 }}
                    />
                    <span className="text-[5.5px] leading-snug" style={{ color: COLORS.brown }}>
                      {row.influence}
                    </span>
                  </div>
                </td>
                <td
                  className="px-1.5 py-1 align-top text-[5.5px] leading-snug"
                  style={{ color: COLORS.brown, opacity: 0.88 }}
                >
                  {row.description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </GoldBox>
  );
}

function LuckyAnalysisColumn({
  primaryLucky,
  secondaryLucky,
}: {
  primaryLucky: PrimaryLuckyNumber[];
  secondaryLucky: SecondaryLuckyNumber[];
}) {
  return (
    <GoldBox className="h-full p-2">
      <div className="mb-1.5 flex items-center gap-1">
        <SectionBadge index="6.2" />
        <p className="text-[6px] font-bold tracking-wide" style={{ color: COLORS.gold }}>
          DETAILED LUCKY NUMBERS ANALYSIS
        </p>
      </div>

      <p className="text-[5.5px] font-bold" style={{ color: "#2d7a4f" }}>
        PRIMARY LUCKY NUMBERS (MOST POWERFUL)
      </p>
      <ul className="mt-1 flex flex-col gap-1">
        {primaryLucky.map((item) => (
          <li key={item.number} className="flex items-start gap-1.5">
            <NumberCircle value={item.number} variant="lucky" />
            <p className="text-[5px] leading-snug" style={{ color: COLORS.brown }}>
              <span className="font-semibold">{item.label}</span>
              {" → "}
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-[5.5px] font-bold" style={{ color: "#2d7a4f" }}>
        SECONDARY LUCKY NUMBERS
      </p>
      <ul className="mt-1 flex flex-col gap-1">
        {secondaryLucky.map((item) => (
          <li key={item.number} className="flex items-start gap-1.5">
            <NumberCircle value={item.number} variant="lucky" />
            <p className="text-[5px] leading-snug" style={{ color: COLORS.brown }}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </GoldBox>
  );
}

function UnluckyColumn({
  unluckyNumbers,
  neutralNote,
}: {
  unluckyNumbers: UnluckyNumberItem[];
  neutralNote: string;
}) {
  return (
    <GoldBox className="h-full p-2">
      <div className="mb-1.5 flex items-center gap-1">
        <SectionBadge index="6.3" />
        <p className="text-[6px] font-bold tracking-wide" style={{ color: COLORS.gold }}>
          UNLUCKY &amp; CAUTION NUMBERS
        </p>
      </div>

      <div className="flex items-center gap-1">
        <AlertTriangle size={10} strokeWidth={2} style={{ color: "#a84432" }} />
        <p className="text-[5.5px] font-bold" style={{ color: "#a84432" }}>
          UNLUCKY NUMBERS
        </p>
      </div>
      <ul className="mt-1 flex flex-col gap-1">
        {unluckyNumbers.map((item) => (
          <li key={item.numbers} className="flex items-start gap-1.5">
            <NumberCircle value={item.numbers} variant="unlucky" />
            <p className="text-[5px] leading-snug" style={{ color: COLORS.brown }}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center gap-1">
        <Scale size={10} strokeWidth={2} style={{ color: "#888" }} />
        <p className="text-[5.5px] font-bold" style={{ color: "#666" }}>
          NEUTRAL NUMBERS
        </p>
      </div>
      <p className="mt-1 text-[5px] leading-snug" style={{ color: COLORS.brown, opacity: 0.88 }}>
        {neutralNote}
      </p>
    </GoldBox>
  );
}

function QuickTipsColumn({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <GoldBox className="h-full p-2">
      <div className="mb-1.5 flex items-center gap-1">
        <SectionBadge index="6.5" />
        <p className="text-[6px] font-bold tracking-wide" style={{ color: COLORS.gold }}>
          QUICK USAGE TIPS
        </p>
      </div>

      <p className="text-[5.5px] font-bold" style={{ color: "#2d7a4f" }}>
        DO&apos;S
      </p>
      <ul className="mt-0.5 flex flex-col gap-0.5">
        {dos.map((item) => (
          <li key={item} className="flex items-start gap-1 text-[5px] leading-snug">
            <Check size={8} strokeWidth={3} style={{ color: "#2d7a4f", flexShrink: 0, marginTop: 1 }} />
            <span style={{ color: COLORS.brown }}>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-[5.5px] font-bold" style={{ color: "#a84432" }}>
        DON&apos;TS
      </p>
      <ul className="mt-0.5 flex flex-col gap-0.5">
        {donts.map((item) => (
          <li key={item} className="flex items-start gap-1 text-[5px] leading-snug">
            <X size={8} strokeWidth={3} style={{ color: "#a84432", flexShrink: 0, marginTop: 1 }} />
            <span style={{ color: COLORS.brown }}>{item}</span>
          </li>
        ))}
      </ul>
    </GoldBox>
  );
}

function DailyUseTable({ rows }: { rows: DailyUseRow[] }) {
  return (
    <GoldBox className="overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(184, 134, 11, 0.4)" }}>
            {["Area of Life", "Recommended Numbers", "What to Do"].map((heading) => (
              <th
                key={heading}
                className="px-1.5 py-1 text-[6px] font-bold tracking-wider"
                style={{ color: COLORS.gold }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const Icon = row.icon;
            return (
              <tr
                key={row.area}
                style={{
                  borderBottom:
                    index < rows.length - 1 ? "1px solid rgba(184, 134, 11, 0.18)" : "none",
                }}
              >
                <td className="px-1.5 py-1 align-middle">
                  <div className="flex items-center gap-1">
                    <Icon size={10} strokeWidth={1.75} style={{ color: COLORS.gold }} />
                    <span className="text-[5.5px] font-semibold" style={{ color: COLORS.brown }}>
                      {row.area}
                    </span>
                  </div>
                </td>
                <td
                  className="px-1.5 py-1 align-middle text-[5.5px] font-medium"
                  style={{ color: "#2d7a4f" }}
                >
                  {row.recommendedNumbers}
                </td>
                <td
                  className="px-1.5 py-1 align-middle text-[5.5px] leading-snug"
                  style={{ color: COLORS.brown, opacity: 0.88 }}
                >
                  {row.action}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </GoldBox>
  );
}

export default function LuckyUnluckyNeutralNumbers({
  profileRows = defaultProfileRows,
  primaryLucky = defaultPrimaryLucky,
  secondaryLucky = defaultSecondaryLucky,
  unluckyNumbers = defaultUnluckyNumbers,
  neutralNote = "3, 4, 8 can be used carefully in small quantity. They do not give major results but also do not harm if balanced.",
  dailyUseRows = defaultDailyUseRows,
  dos = defaultDos,
  donts = defaultDonts,
  powerTip = "Even if you cannot change your mobile number immediately, using lucky numbers in other areas (bank, vehicle, dates) creates strong supportive energy.",
  pageNumber = "06",
}: LuckyUnluckyNeutralNumbersProps) {
  return (
    <ReportPageShell padding="118px 24px 0">
      <header className="flex flex-col items-center text-center">
        <p className="text-[8px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
          ASTRO AARAMBH
        </p>
        <h1 className="mt-1 text-[16px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          LUCKY, UNLUCKY &amp; NEUTRAL NUMBERS
        </h1>
        <p className="mt-1 text-[8.5px] italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Your Personal Number Vibrations Guide
        </p>
      </header>

      <section className="relative z-10 mt-2">
        <div className="mb-1 flex items-center gap-1.5">
          <SectionBadge index="6.1" />
          <SectionDiamondTitle>YOUR PERSONAL NUMBER PROFILE</SectionDiamondTitle>
        </div>
        <ProfileTable rows={profileRows} />
      </section>

      <section className="relative z-10 mt-2 grid grid-cols-3 gap-1.5">
        <LuckyAnalysisColumn primaryLucky={primaryLucky} secondaryLucky={secondaryLucky} />
        <UnluckyColumn unluckyNumbers={unluckyNumbers} neutralNote={neutralNote} />
        <QuickTipsColumn dos={dos} donts={donts} />
      </section>

      <section className="relative z-10 mt-2">
        <div className="mb-1 flex items-center gap-1.5">
          <SectionBadge index="6.4" />
          <SectionDiamondTitle>HOW TO USE THESE NUMBERS IN DAILY LIFE (PRACTICAL GUIDE)</SectionDiamondTitle>
        </div>
        <DailyUseTable rows={dailyUseRows} />
      </section>

      <footer className="relative z-10 mt-2 flex flex-col items-center pb-1">
        <LoShuSquare className="pointer-events-none absolute -left-1 bottom-0 h-12 w-12 opacity-70" />
        <div
          className="flex items-center gap-2 rounded-md px-3 py-1.5"
          style={{
            border: "1px solid rgba(184, 134, 11, 0.45)",
            backgroundColor: "rgba(212, 142, 49, 0.08)",
          }}
        >
          <LotusIcon className="h-4 w-7 shrink-0 opacity-55" />
          <div className="text-center">
            <p className="text-[6px] font-bold tracking-wide" style={{ color: COLORS.gold }}>
              POWER TIP
            </p>
            <p
              className="max-w-[520px] text-[6px] italic leading-relaxed"
              style={{ color: COLORS.brown, opacity: 0.88 }}
            >
              {powerTip}
            </p>
          </div>
          <LotusIcon className="h-4 w-7 shrink-0 opacity-55" />
        </div>
      </footer>

      <PageFooterBar
        className="relative -mx-6 mt-1.5 h-9 w-[calc(100%+48px)]"
        pageNumber={pageNumber}
      />
    </ReportPageShell>
  );
}
