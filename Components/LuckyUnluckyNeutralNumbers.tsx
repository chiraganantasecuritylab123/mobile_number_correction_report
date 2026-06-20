import {
  AlertTriangle,
  Ban,
  Briefcase,
  Building2,
  Calendar,
  Car,
  Check,
  Crown,
  Gem,
  Handshake,
  Home,
  Scale,
  ShieldCheck,
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
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";
import FooterSummaryBanner from "./FooterSummaryBanner";

export type NumberProfileRow = {
  category: string;
  categoryIcon: LucideIcon;
  variant: "lucky" | "veryLucky" | "supporting" | "neutral" | "unlucky";
  numbers: string;
  numbersSubtext?: string;
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
  lucky: { accent: "#2d7a4f", bg: "rgba(253, 245, 230, 0.55)" },
  veryLucky: { accent: "#2d7a4f", bg: "rgba(253, 245, 230, 0.55)" },
  supporting: { accent: "#2d7a4f", bg: "rgba(253, 245, 230, 0.55)" },
  neutral: { accent: "#1f2937", bg: "rgba(253, 245, 230, 0.55)" },
  unlucky: { accent: "#a84432", bg: "rgba(253, 236, 234, 0.75)" },
};

const TABLE_BORDER = "1px solid rgba(184, 134, 11, 0.35)";
const TABLE_HEADER_BG = "rgba(212, 163, 115, 0.38)";
const TABLE_CELL =
  "border border-[rgba(184,134,11,0.35)] px-1.5 py-1 align-middle text-[10px] leading-snug";

const LUCKY_GREEN = "#2d7a4f";
const UNLUCKY_RED = "#a84432";
const DASHED_GREEN = "1px dashed rgba(45, 122, 79, 0.45)";
const DASHED_RED = "1px dashed rgba(168, 68, 50, 0.45)";

const defaultProfileRows: NumberProfileRow[] = [
  {
    category: "Lucky Numbers",
    categoryIcon: Sparkles,
    variant: "lucky",
    numbers: "5, 7, 2, 1, 6",
    influence: "Strong positive support",
    influenceIcon: ShieldCheck,
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
    numbers: "4, 8",
    numbersSubtext: "(especially repeated)",
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
    icon: Briefcase,
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

function ThemedBox({
  children,
  className = "",
  borderColor,
  backgroundColor = "rgba(253, 245, 230, 0.78)",
}: {
  children: React.ReactNode;
  className?: string;
  borderColor: string;
  backgroundColor?: string;
}) {
  return (
    <div
      className={`rounded-md ${className}`}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitleRow({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-1.5 flex items-center gap-1">
      <SectionBadge index={index} />
      <p className="text-[12px] font-bold tracking-wide" style={{ color: COLORS.brown }}>
        {title}
      </p>
    </div>
  );
}

function DashedDivider({ variant }: { variant: "green" | "red" }) {
  return (
    <div
      className="my-1.5 w-full"
      style={{ borderTop: variant === "green" ? DASHED_GREEN : DASHED_RED }}
    />
  );
}

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
      className="inline-flex h-4 min-w-4 items-center justify-center rounded-md px-1 text-[10px] font-bold"
      style={{
        backgroundColor: COLORS.brown,
        color: COLORS.cream,
        // border: "1px solid #d48e31",
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
  variant: "primary" | "secondary" | "unlucky";
}) {
  const valueStr = String(value);
  const isWide = valueStr.length > 1;

  if (variant === "primary") {
    return (
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[15px] font-bold"
        style={{
          border: `2px solid ${LUCKY_GREEN}`,
          color: LUCKY_GREEN,
          backgroundColor: "rgba(255, 255, 255, 0.55)",
        }}
      >
        {value}
      </div>
    );
  }

  if (variant === "secondary") {
    return (
      <div
        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[7px] font-bold text-white"
        style={{ backgroundColor: LUCKY_GREEN }}
      >
        {value}
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${isWide ? "h-8 min-w-7 px-1 text-[12px]" : "h-8 w-8 text-[12px]"
        }`}
      style={{ backgroundColor: UNLUCKY_RED }}
    >
      {value}
    </div>
  );
}

function ProfileTable({ rows }: { rows: NumberProfileRow[] }) {
  return (
    <GoldBox className="overflow-hidden rounded-md">
      <table className="w-full border-collapse" style={{ border: TABLE_BORDER }}>
        <thead>
          <tr style={{ backgroundColor: TABLE_HEADER_BG }}>
            {["CATEGORY", "NUMBERS", "RULING INFLUENCE", "DESCRIPTION"].map((heading) => (
              <th
                key={heading}
                className={`${TABLE_CELL} text-center font-bold tracking-wider`}
                style={{ color: COLORS.brown }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const CategoryIcon = row.categoryIcon;
            const InfluenceIcon = row.influenceIcon;
            const variant = VARIANT_COLORS[row.variant];

            return (
              <tr key={row.category} style={{ backgroundColor: variant.bg }}>
                <td className={`${TABLE_CELL} text-center`}>
                  <div className="flex items-center justify-start gap-1">
                    <CategoryIcon size={12} strokeWidth={2} style={{ color: variant.accent }} />
                    <span className="font-bold" style={{ color: variant.accent }}>
                      {row.category}
                    </span>
                  </div>
                </td>
                <td className={`${TABLE_CELL} text-center`}>
                  <p className="font-bold" style={{ color: variant.accent }}>
                    {row.numbers}
                  </p>
                  {row.numbersSubtext ? (
                    <p
                      className="mt-0.5 text-[8px] italic font-semibold"
                      style={{ color: variant.accent }}
                    >
                      {row.numbersSubtext}
                    </p>
                  ) : null}
                </td>
                <td className={`${TABLE_CELL} text-left`}>
                  <div className="flex items-center gap-1">
                    <InfluenceIcon
                      size={11}
                      strokeWidth={2}
                      style={{ color: variant.accent, flexShrink: 0 }}
                    />
                    <span className="font-semibold text-black">{row.influence}</span>
                  </div>
                </td>
                <td className={`${TABLE_CELL} text-left text-black`}>{row.description}</td>
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
    <div className="flex h-full flex-col">
      <SectionTitleRow index="6.2" title="DETAILED LUCKY NUMBERS ANALYSIS" />

      <ThemedBox borderColor={LUCKY_GREEN} className="flex-1 p-2 mb-2">
        <div className="flex items-center gap-1">
          <Star size={25} strokeWidth={2} style={{ color: LUCKY_GREEN }} />
          <p className="text-[11px] font-bold" style={{ color: LUCKY_GREEN }}>
            PRIMARY LUCKY NUMBERS (MOST POWERFUL)
          </p>
        </div>
        <ul className="mt-1">
          {primaryLucky.map((item, index) => (
            <li key={item.number}>
              {index > 0 ? <DashedDivider variant="green" /> : null}
              <div className="flex items-start gap-1.5 py-0.5">
                <NumberCircle value={item.number} variant="primary" />
                <p className="text-[10px] leading-snug text-black">
                  <span className="font-bold">{item.label}</span>
                  {" → "}
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ThemedBox>

      <ThemedBox borderColor={LUCKY_GREEN} className="flex-1 p-2">
        <div className="flex flex-col items-center gap-1">

          <p className="mt-1 text-[11px] font-bold" style={{ color: LUCKY_GREEN }}>
            SECONDARY LUCKY NUMBERS
          </p>

          <ul className="flex flex-col gap-1">
            {secondaryLucky.map((item) => (
              <li key={item.number} className="flex items-start gap-1.5">
                <NumberCircle value={item.number} variant="secondary" />
                <p className="text-[10px] leading-snug text-black">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

      </ThemedBox>
    </div>
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
    <div className="flex h-full flex-col">
      <SectionTitleRow index="6.3" title="UNLUCKY & CAUTION NUMBERS" />

      <ThemedBox
        borderColor={UNLUCKY_RED}
        backgroundColor="rgba(253, 236, 234, 0.75)"
        className="flex-1 p-2"
      >
        <div className="flex items-center gap-1 mb-2">
          <AlertTriangle size={20} strokeWidth={2} style={{ color: UNLUCKY_RED }} />
          <p className="text-[12px] font-bold" style={{ color: UNLUCKY_RED }}>
            UNLUCKY NUMBERS
          </p>
        </div>
        <ul className="">
          {unluckyNumbers.map((item, index) => (
            <li key={item.numbers}>
              {index > 0 ? <DashedDivider variant="red" /> : null}
              <div className="flex flex-row items-start gap-2 py-0.5">
                <NumberCircle value={item.numbers} variant="unlucky" />
                <p className="text-[10px] leading-snug text-black">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

      </ThemedBox>
      <ThemedBox
        borderColor="rgba(120, 120, 120, 0.45)"
        backgroundColor="rgba(253, 245, 230, 0.65)"
        className="mt-2 p-2"
      >
        <div className="flex items-center gap-1">
          <Scale size={20} strokeWidth={2} style={{ color: "#1f2937" }} />
          <p className="text-[12px] font-bold" style={{ color: "#1f2937" }}>
            NEUTRAL NUMBERS
          </p>
        </div>
        <p className="mt-1 text-[10px] leading-snug text-center p-1 text-black">{neutralNote}</p>
      </ThemedBox>
    </div>
  );
}

function QuickTipsColumn({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div className="flex h-full flex-col">
      <SectionTitleRow index="6.5" title="QUICK USAGE TIPS" />

      <ThemedBox borderColor={LUCKY_GREEN} className="mb-1.5 p-2">
        <div className="flex items-center gap-1">
          <Check size={11} strokeWidth={3} style={{ color: LUCKY_GREEN }} />
          <p className="text-[12px] font-bold" style={{ color: LUCKY_GREEN }}>
            DO&apos;S
          </p>
        </div>
        <ul className="mt-1 flex flex-col gap-0.5">
          {dos.map((item) => (
            <li key={item} className="flex items-start gap-1 text-[10px] leading-snug">
              <Check size={9} strokeWidth={3} style={{ color: LUCKY_GREEN, flexShrink: 0, marginTop: 1 }} />
              <span className="text-black">{item}</span>
            </li>
          ))}
        </ul>
      </ThemedBox>

      <ThemedBox borderColor={UNLUCKY_RED} backgroundColor="rgba(253, 236, 234, 0.45)" className="p-2">
        <div className="flex items-center gap-1">
          <X size={11} strokeWidth={3} style={{ color: UNLUCKY_RED }} />
          <p className="text-[12px] font-bold" style={{ color: UNLUCKY_RED }}>
            DON&apos;TS
          </p>
        </div>
        <ul className="mt-1 flex flex-col gap-0.5">
          {donts.map((item) => (
            <li key={item} className="flex items-start gap-1 text-[10px] leading-snug">
              <X size={9} strokeWidth={3} style={{ color: UNLUCKY_RED, flexShrink: 0, marginTop: 1 }} />
              <span className="text-black">{item}</span>
            </li>
          ))}
        </ul>
      </ThemedBox>
    </div>
  );
}

function DailyUseTable({ rows }: { rows: DailyUseRow[] }) {
  return (
    <GoldBox className="overflow-hidden rounded-md">
      <table className="w-full border-collapse" style={{ border: TABLE_BORDER }}>
        <thead>
          <tr style={{ backgroundColor: TABLE_HEADER_BG }}>
            {["AREA OF LIFE", "RECOMMENDED NUMBERS", "WHAT TO DO"].map((heading) => (
              <th
                key={heading}
                className={`${TABLE_CELL} text-center font-bold tracking-wider`}
                style={{ color: COLORS.brown }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const Icon = row.icon;
            const rowBg =
              index % 2 === 0 ? "rgba(255, 255, 255, 0.55)" : "rgba(253, 245, 230, 0.65)";

            return (
              <tr key={row.area} style={{ backgroundColor: rowBg }}>
                <td className={`${TABLE_CELL} text-left`}>
                  <div className="flex items-center gap-1">
                    <Icon size={11} strokeWidth={1.75} style={{ color: COLORS.gold }} />
                    <span className="font-semibold text-black">{row.area}</span>
                  </div>
                </td>
                <td className={`${TABLE_CELL} text-center font-bold`} style={{ color: LUCKY_GREEN }}>
                  {row.recommendedNumbers}
                </td>
                <td className={`${TABLE_CELL} text-left text-black`}>{row.action}</td>
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
    <ReportPageShell padding="20px 40px 52px">
      <header className="flex flex-col items-center text-center">
        <Image
          src='/assets/ganesha-logo.png'
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-2"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={50} />
          <p className="text-md font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="mt-1 text-3xl font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          <span className="font-bold" style={{ color: COLORS.green }}>LUCKY </span>,
          <span className="font-bold" style={{ color: COLORS.red }}>UNLUCKY </span> &amp;
          <span className="font-bold" style={{ color: COLORS.gold }}> NEUTRAL  NUMBERS </span>
        </h1>
        <p className="text-[14px]" style={{ color: '#213247', opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}>
          Your Personal Number Vibrations Guide
        </p>
      </header>

      <section className="relative z-10 mt-3 font-nunito-sans">
        <div className="mb-1 flex items-center gap-1.5">
          <SectionBadge index="6.1" />
          <SectionDiamondTitle>YOUR PERSONAL NUMBER PROFILE</SectionDiamondTitle>
        </div>
        <ProfileTable rows={profileRows} />
      </section>

      <section className="relative z-10 mt-2 grid grid-cols-[1.15fr_1fr_0.9fr] gap-1.5 font-nunito-sans">
        <LuckyAnalysisColumn primaryLucky={primaryLucky} secondaryLucky={secondaryLucky} />
        <UnluckyColumn unluckyNumbers={unluckyNumbers} neutralNote={neutralNote} />
        <QuickTipsColumn dos={dos} donts={donts} />
      </section>

      <section className="relative z-10 mt-2 font-nunito-sans">
        <div className="mb-1 flex items-center gap-1.5">
          <SectionBadge index="6.4" />
          <p className="text-[11px] font-bold tracking-wide" style={{ color: COLORS.brown }}>
            HOW TO USE THESE NUMBERS IN DAILY LIFE (PRACTICAL GUIDE)
          </p>
        </div>
        <DailyUseTable rows={dailyUseRows} />
      </section>


      <footer className="relative z-10 mt-2 flex justify-center px-2 pb-1">
        <FooterSummaryBanner summary={powerTip} />
      </footer>

      {/* <PageFooterBar
        className="relative -mx-6 mt-1.5 h-9 w-[calc(100%+48px)]"
        pageNumber={pageNumber}
      /> */}
    </ReportPageShell>
  );
}
