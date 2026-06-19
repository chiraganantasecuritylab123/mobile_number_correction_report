import {
  BookOpen,
  Check,
  Crown,
  Flower2,
  Heart,
  Lightbulb,
  MessageCircle,
  Shield,
  TrendingUp,
  UserRound,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { LoShuSquare, LotusIcon } from "./CoverPageDecorations";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import FooterSummaryBanner from "./FooterSummaryBanner";
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";
export type AvailableNumberRow = {
  number: number;
  subNumbers: string[];
  label: string;
  categoryIcon: string;
  lifeImpactIcon: string;
  lifeImpact: string;
};

export type MissingNumberRow = {
  number: number;
  subNumbers: string[];
  label: string;
  categoryIcon: string;
  lifeImpactItems: string[];
  keyLessonIcon: string;
  keyLesson: string;
};

export type PlaneDetailsProps = {
  availableNumbers?: AvailableNumberRow[];
  missingNumbers?: MissingNumberRow[];
  footerSummary?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const AVAILABLE_SECTION = {
  border: "#D8AC71",
  background: "#FDF8EE",
  headerBg: "rgba(250, 236, 218, 0.9)",
  accent: "#C5A059",
  burgundy: "#5D1A1A",
  rowDivider: "#D4B483",
  text: "#3C2A21",
} as const;

const MISSING_SECTION = {
  border: "#C9785E",
  background: "#FFF5F2",
  headerBg: "#FAE6C1",
  accent: "#A84432",
  burgundy: "#5D1A1A",
  rowDivider: "#E8B4A8",
  text: "#3C2A21",
  dashed: "#C45C3E",
} as const;

const TEXT_UPPER = { textTransform: "uppercase" } as const;

const defaultAvailableNumbers: AvailableNumberRow[] = [
  {
    number: 1,
    subNumbers: ["01", "10", "19", "28"],
    label: "Leadership",
    categoryIcon: '/assets/plane-details/life-impact-1.png',
    lifeImpactIcon: '/assets/plane-details/life-impact-2.png',
    lifeImpact:
      "Strong leadership qualities, independent thinking and the ability to take initiative. You naturally guide others and create your own path.",
  },
  {
    number: 4,
    subNumbers: ["14", "23"],
    label: "Wealth",
    categoryIcon: '/assets/plane-details/life-impact-3.png',
    lifeImpactIcon: '/assets/plane-details/life-impact-4.png',
    lifeImpact:
      "Potential to build wealth and material stability. Practical, organized and focused on creating lasting financial security.",
  },
  {
    number: 5,
    subNumbers: ["05", "14", "23"],
    label: "Balance",
    categoryIcon: '/assets/plane-details/life-impact-5.png',
    lifeImpactIcon: '/assets/plane-details/life-impact-6.png',
    lifeImpact:
      "Adaptable and versatile nature. You maintain balance across different areas of life and adjust smoothly to change.",
  },
  {
    number: 7,
    subNumbers: ["07", "16", "25"],
    label: "Intuition",
    categoryIcon: '/assets/plane-details/life-impact-7.png',
    lifeImpactIcon: '/assets/plane-details/life-impact-8.png',
    lifeImpact:
      "Strong intuition and inner wisdom. You possess deep insight and the ability to see beyond the surface.",
  },
  {
    number: 8,
    subNumbers: ["08", "17", "26"],
    label: "Power",
    categoryIcon: '/assets/plane-details/life-impact-9.png',
    lifeImpactIcon: '/assets/plane-details/life-impact-10.png',
    lifeImpact:
      "Strong willpower, courage and stamina. You have the energy and determination to achieve significant results.",
  },
  {
    number: 9,
    subNumbers: ["09", "18", "27"],
    label: "Wisdom",
    categoryIcon: '/assets/plane-details/life-impact-11.png',
    lifeImpactIcon: '/assets/plane-details/life-impact-12.png',
    lifeImpact:
      "Deep thinker with a broad perspective. You carry wisdom, compassion and a humanitarian outlook on life.",
  },
];

const defaultMissingNumbers: MissingNumberRow[] = [
  {
    number: 2,
    subNumbers: ["02", "11", "20", "29"],
    label: "Relationships",
    categoryIcon: '/assets/plane-details/key-lesson-1.png',
    lifeImpactItems: [
      "Emotional imbalance",
      "Difficulty in partnerships",
      "Mood fluctuations",
    ],
    keyLessonIcon: '/assets/plane-details/key-lesson-1.png',
    keyLesson: "Build healthy relationships and trust others.",
  },
  {
    number: 3,
    subNumbers: ["03", "12", "21", "30"],
    label: "Creativity",
    categoryIcon: '/assets/plane-details/key-lesson-2.png',
    lifeImpactItems: [
      "Lack of self-expression",
      "Communication blocks",
      "Overthinking",
    ],
    keyLessonIcon: '/assets/plane-details/key-lesson-4.png',
    keyLesson: "Express yourself freely and embrace creativity.",
  },
  {
    number: 6,
    subNumbers: ["06", "15", "24"],
    label: "Responsibility",
    categoryIcon: '/assets/plane-details/key-lesson-3.png',
    lifeImpactItems: [
      "Responsibility issues",
      "Challenges in family harmony",
      "Difficulty in commitments",
    ],
    keyLessonIcon: '/assets/plane-details/key-lesson-3.png',
    keyLesson: "Develop responsibility and create harmony.",
  },
];

function AvailableSectionHeader({ title }: { title: string }) {
  return (
    <div
      className={`font-cinzel relative flex items-center justify-center gap-2 rounded-full px-5 py-1.5`}
      style={{
        border: `1.5px solid ${AVAILABLE_SECTION.accent}`,
        backgroundColor: '#FAE6C1',
        minWidth: 380,
      }}
    >
      <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
        <Shield size={18} fill={'#AD6B0A'} stroke={'#AD6B0A'} />
        <Check
          size={8}
          strokeWidth={3}
          className="absolute"
          style={{ color: "#fff" }}
        />
      </div>
      <p
        className="text-[10px] font-bold tracking-[0.1em]"
        style={{ color: AVAILABLE_SECTION.burgundy, ...TEXT_UPPER }}
      >
        {title}
      </p>
    </div>
  );
}

function MissingSectionHeader({ title }: { title: string }) {
  return (
    <div
      className={`font-cinzel relative flex items-center justify-center gap-2 rounded-full px-5 py-1.5`}
      style={{
        border: `1.5px solid ${MISSING_SECTION.accent}`,
        backgroundColor: '#FBE0D1',
        minWidth: 380,
      }}
    >
      <span
        className="text-[7px] leading-none"
        style={{ color: MISSING_SECTION.accent }}
        aria-hidden
      >
        ✦
      </span>
      <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
        <Shield size={18} fill={MISSING_SECTION.accent} stroke={MISSING_SECTION.accent} />
        <div
          className="absolute flex h-3 w-3 items-center justify-center rounded-full"
          style={{ backgroundColor: MISSING_SECTION.accent }}
        >
          <X size={7} strokeWidth={3} style={{ color: "#fff" }} />
        </div>
      </div>
      <p
        className="text-[10px] font-bold tracking-[0.1em]"
        style={{ color: MISSING_SECTION.burgundy, ...TEXT_UPPER }}
      >
        {title}
      </p>
      <span
        className="text-[7px] leading-none"
        style={{ color: MISSING_SECTION.accent }}
        aria-hidden
      >
        ✦
      </span>
    </div>
  );
}

function AvailableNumberBadge({ value }: { value: number }) {
  return (
    <div
      className={`font-cinzel flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[20px] font-bold leading-none`}
      style={{
        border: `2px solid ${AVAILABLE_SECTION.accent}`,
        color: AVAILABLE_SECTION.text,
        background:
          "linear-gradient(180deg, rgba(255, 248, 235, 0.95) 0%, rgba(245, 225, 190, 0.55) 100%)",
      }}
    >
      {value}
    </div>
  );
}

function AvailableRowDivider() {
  return (
    <div className="relative mx-2.5 flex w-3 shrink-0 self-stretch items-center justify-center">
      <div
        className="h-full w-px border-l border-dashed"
        style={{ borderColor: AVAILABLE_SECTION.rowDivider }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[5px] leading-none"
        style={{ color: AVAILABLE_SECTION.accent }}
      >
        ◆
      </span>
    </div>
  );
}

function AvailableRow({
  row,
  isLast = false,
}: {
  row: AvailableNumberRow;
  isLast?: boolean;
}) {
  return (
    <div
      className={`font-nunito-sans flex items-center px-3 py-2.5`}
      style={{
        borderBottom: isLast ? "none" : `1px solid ${AVAILABLE_SECTION.rowDivider}`,
      }}
    >
      <AvailableNumberBadge value={row.number} />

      <div className="ml-3 flex min-w-[118px] items-center justify-between gap-2">
        <div>
          <p
            className="text-[12px] font-semibold leading-tight"
            style={{ color: AVAILABLE_SECTION.text }}
          >
            {row.subNumbers.join(", ")}
          </p>
          <p
            className={`font-cinzel mt-0.5 text-[9px] font-bold leading-tight`}
            style={{ color: AVAILABLE_SECTION.text }}
          >
            ({row.label})
          </p>
        </div>
        <Image
          src={row.categoryIcon}
          alt={row.label}
          width={36}
          height={36}
          className="shrink-0 object-contain"
        />
      </div>

      <AvailableRowDivider />

      <div className="flex min-w-0 flex-1 items-center gap-2.5">
        <Image
          src={row.lifeImpactIcon}
          alt={`${row.label} life impact`}
          width={36}
          height={36}
          className="shrink-0 object-contain"
        />
        <div className="min-w-0">
          <p
            className={`text-[10px] font-bold leading-tight`}
            style={{ color: AVAILABLE_SECTION.burgundy }}
          >
            Life Impact:
          </p>
          <p
            className="mt-0.5 text-[9px] leading-snug"
            style={{ color: AVAILABLE_SECTION.text, opacity: 0.9 }}
          >
            {row.lifeImpact}
          </p>
        </div>
      </div>
    </div>
  );
}

function MissingNumberBadge({ value }: { value: number }) {
  return (
    <div
      className={`font-cinzel flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[20px] font-bold leading-none`}
      style={{
        border: `2px dashed ${MISSING_SECTION.dashed}`,
        color: MISSING_SECTION.burgundy,
        backgroundColor: "transparent",
      }}
    >
      {value}
    </div>
  );
}

function MissingRowDivider() {
  return (
    <div className="relative mx-2 flex w-3 shrink-0 self-stretch items-center justify-center">
      <div
        className="h-full w-px border-l border-dashed"
        style={{ borderColor: MISSING_SECTION.rowDivider }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[5px] leading-none"
        style={{ color: MISSING_SECTION.accent }}
      >
        ◆
      </span>
    </div>
  );
}

function MissingRow({
  row,
  isLast = false,
}: {
  row: MissingNumberRow;
  isLast?: boolean;
}) {
  const CategoryIcon = row.categoryIcon;
  const LessonIcon = row.keyLessonIcon;

  return (
    <div
      className={`font-nunito-sans flex items-center px-3 py-2.5`}
      style={{
        borderBottom: isLast ? "none" : `1px solid ${MISSING_SECTION.rowDivider}`,
      }}
    >
      <div className="flex min-w-[148px] items-center">
        <MissingNumberBadge value={row.number} />

        <div className="ml-3 flex min-w-0 flex-1 items-center justify-between gap-2">
          <div>
            <p
              className="text-[12px] font-semibold leading-tight"
              style={{ color: MISSING_SECTION.text }}
            >
              {row.subNumbers.join(", ")}
            </p>
            <p
              className={`font-cinzel mt-0.5 text-[9px] font-bold leading-tight`}
              style={{ color: MISSING_SECTION.text }}
            >
              ({row.label})
            </p>
          </div>
          <Image src={row.categoryIcon} alt={row.label} width={42} height={42} className="shrink-0" />
        </div>
      </div>

      <MissingRowDivider />

      <div className="flex min-w-0 flex-1 flex-col justify-center px-1">
        <p
          className={`text-[10px] font-bold leading-tight`}
          style={{ color: MISSING_SECTION.burgundy }}
        >
          Life Impact:
        </p>
        <ul className="mt-0.5 flex flex-col gap-0.5">
          {row.lifeImpactItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-1.5 text-[9px] leading-snug"
              style={{ color: MISSING_SECTION.text, opacity: 0.9 }}
            >
              <span
                className="mt-[3px] inline-block h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: MISSING_SECTION.accent }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <MissingRowDivider />

      <div className="flex w-[148px] shrink-0 items-center gap-2">
        <Image src={row.keyLessonIcon} alt={row.label} width={52} height={52} className="shrink-0" />
        <div className="min-w-0">
          <p
            className={`text-[10px] font-bold leading-tight`}
            style={{ color: MISSING_SECTION.burgundy }}
          >
            Key Lesson:
          </p>
          <p
            className="mt-0.5 text-[9px] leading-snug"
            style={{ color: MISSING_SECTION.text, opacity: 0.9 }}
          >
            {row.keyLesson}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PlaneDetails({
  availableNumbers = defaultAvailableNumbers,
  missingNumbers = defaultMissingNumbers,
  footerSummary = "Understanding your available strengths and missing numbers helps you focus on growth, balance your energies and achieve a more fulfilling life.",
  pageNumber = "04",
}: PlaneDetailsProps) {
  return (
    <ReportPageShell padding="20px 28px 0">
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/ganesha-logo.png"
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-2"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={50} />
          <p className="text-[16px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="text-[40px] font-bold" style={{ color: COLORS.brown, lineHeight: "1.2" }}>
          PLANE <span style={{ color: '#B5700D' }}>DETAILS</span>
        </h1>
        <p className="text-[14px]" style={{ color: '#213247', opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}>
          Available &amp; Missing Numbers Analysis
        </p>
      </header>

      <section className={`relative z-10 mt-7 font-nunito-sans`}>
        <div
          className="relative rounded-lg pt-5 max-w-[600px] mx-auto"
          style={{
            border: `1.5px solid ${AVAILABLE_SECTION.border}`,
            backgroundColor: 'transparent',
          }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <AvailableSectionHeader title="AVAILABLE NUMBERS – YOUR STRENGTHS" />
          </div>
          <div>
            {availableNumbers.map((row, index) => (
              <AvailableRow
                key={row.number}
                row={row}
                isLast={index === availableNumbers.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`relative z-10 mt-10 mb-5 font-nunito-sans`}>
        <div
          className="relative mx-auto max-w-[600px] rounded-lg pt-5"
          style={{
            border: `1.5px solid ${MISSING_SECTION.border}`,
            backgroundColor: '#FDF2E6',
          }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <MissingSectionHeader title="MISSING NUMBERS – AREAS FOR GROWTH" />
          </div>
          <div>
            {missingNumbers.map((row, index) => (
              <MissingRow
                key={row.number}
                row={row}
                isLast={index === missingNumbers.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-2 flex justify-center px-2 pb-1">
        <FooterSummaryBanner summary={footerSummary} />
      </footer>
    </ReportPageShell>
  );
}
