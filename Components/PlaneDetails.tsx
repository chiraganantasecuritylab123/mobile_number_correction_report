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

export type AvailableNumberRow = {
  number: number;
  subNumbers: string[];
  label: string;
  categoryIcon: LucideIcon;
  lifeImpactIcon: LucideIcon;
  lifeImpact: string;
};

export type MissingNumberRow = {
  number: number;
  subNumbers: string[];
  label: string;
  categoryIcon: LucideIcon;
  lifeImpactItems: string[];
  keyLessonIcon: LucideIcon;
  keyLesson: string;
};

export type PlaneDetailsProps = {
  availableNumbers?: AvailableNumberRow[];
  missingNumbers?: MissingNumberRow[];
  footerSummary?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const defaultAvailableNumbers: AvailableNumberRow[] = [
  {
    number: 1,
    subNumbers: ["01", "10", "19", "28"],
    label: "Leadership",
    categoryIcon: UserRound,
    lifeImpactIcon: Crown,
    lifeImpact:
      "Strong leadership qualities, independent thinking and the ability to take initiative. You naturally guide others and create your own path.",
  },
  {
    number: 4,
    subNumbers: ["14", "23"],
    label: "Wealth",
    categoryIcon: TrendingUp,
    lifeImpactIcon: TrendingUp,
    lifeImpact:
      "Potential to build wealth and material stability. Practical, organized and focused on creating lasting financial security.",
  },
  {
    number: 5,
    subNumbers: ["05", "14", "23"],
    label: "Balance",
    categoryIcon: Flower2,
    lifeImpactIcon: Flower2,
    lifeImpact:
      "Adaptable and versatile nature. You maintain balance across different areas of life and adjust smoothly to change.",
  },
  {
    number: 7,
    subNumbers: ["07", "16", "25"],
    label: "Intuition",
    categoryIcon: Lightbulb,
    lifeImpactIcon: Lightbulb,
    lifeImpact:
      "Strong intuition and inner wisdom. You possess deep insight and the ability to see beyond the surface.",
  },
  {
    number: 8,
    subNumbers: ["08", "17", "26"],
    label: "Power",
    categoryIcon: Shield,
    lifeImpactIcon: Shield,
    lifeImpact:
      "Strong willpower, courage and stamina. You have the energy and determination to achieve significant results.",
  },
  {
    number: 9,
    subNumbers: ["09", "18", "27"],
    label: "Wisdom",
    categoryIcon: BookOpen,
    lifeImpactIcon: BookOpen,
    lifeImpact:
      "Deep thinker with a broad perspective. You carry wisdom, compassion and a humanitarian outlook on life.",
  },
];

const defaultMissingNumbers: MissingNumberRow[] = [
  {
    number: 2,
    subNumbers: ["02", "11", "20", "29"],
    label: "Relationships",
    categoryIcon: Heart,
    lifeImpactItems: [
      "Emotional imbalance",
      "Difficulty in partnerships",
      "Mood fluctuations",
    ],
    keyLessonIcon: Heart,
    keyLesson: "Build healthy relationships and trust others.",
  },
  {
    number: 3,
    subNumbers: ["03", "12", "21", "30"],
    label: "Creativity",
    categoryIcon: MessageCircle,
    lifeImpactItems: [
      "Lack of self-expression",
      "Communication blocks",
      "Overthinking",
    ],
    keyLessonIcon: MessageCircle,
    keyLesson: "Express yourself freely and embrace creativity.",
  },
  {
    number: 6,
    subNumbers: ["06", "15", "24"],
    label: "Responsibility",
    categoryIcon: Users,
    lifeImpactItems: [
      "Responsibility issues",
      "Challenges in family harmony",
      "Difficulty in commitments",
    ],
    keyLessonIcon: Users,
    keyLesson: "Develop responsibility and create harmony.",
  },
];

function SectionHeader({
  variant,
  title,
}: {
  variant: "available" | "missing";
  title: string;
}) {
  const isAvailable = variant === "available";

  return (
    <div
      className="flex items-center gap-2 rounded-t-md px-3 py-1.5"
      style={{
        backgroundColor: isAvailable ? COLORS.gold : "#a84432",
      }}
    >
      <div
        className="flex h-4 w-4 items-center justify-center rounded-full"
        style={{
          backgroundColor: isAvailable ? COLORS.cream : "rgba(255,255,255,0.15)",
          color: isAvailable ? COLORS.gold : COLORS.cream,
        }}
      >
        {isAvailable ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
      </div>
      <p
        className="text-[7.5px] font-bold tracking-[0.1em]"
        style={{ color: COLORS.cream }}
      >
        {title}
      </p>
    </div>
  );
}

function NumberBadge({
  value,
  present,
}: {
  value: number;
  present: boolean;
}) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold"
      style={{
        border: present ? "2px solid #d48e31" : "2px dashed #c45c3e",
        backgroundColor: present ? "rgba(212, 142, 49, 0.15)" : "transparent",
        color: COLORS.brown,
      }}
    >
      {value}
    </div>
  );
}

function RowDivider() {
  return (
    <div
      className="mx-2 w-px self-stretch"
      style={{ backgroundColor: "rgba(184, 134, 11, 0.35)" }}
    />
  );
}

function AvailableRow({ row }: { row: AvailableNumberRow }) {
  const CategoryIcon = row.categoryIcon;
  const ImpactIcon = row.lifeImpactIcon;

  return (
    <div
      className="flex items-center px-2.5 py-2"
      style={{ borderBottom: "1px solid rgba(184, 134, 11, 0.2)" }}
    >
      <NumberBadge value={row.number} present />

      <div className="ml-2.5 min-w-[108px]">
        <p className="text-[7px] font-medium" style={{ color: COLORS.brown }}>
          {row.subNumbers.join(", ")}
        </p>
        <div className="mt-0.5 flex items-center gap-1">
          <p className="text-[6.5px] italic" style={{ color: COLORS.gold }}>
            ({row.label})
          </p>
          <CategoryIcon size={10} strokeWidth={1.75} style={{ color: COLORS.gold }} />
        </div>
      </div>

      <RowDivider />

      <div className="flex flex-1 items-start gap-2">
        <ImpactIcon
          size={22}
          strokeWidth={1.5}
          style={{ color: COLORS.gold, flexShrink: 0, marginTop: 2 }}
        />
        <div>
          <p className="text-[6.5px] font-bold" style={{ color: COLORS.brown }}>
            Life Impact:
          </p>
          <p
            className="mt-0.5 text-[6px] leading-snug"
            style={{ color: COLORS.brown, opacity: 0.88 }}
          >
            {row.lifeImpact}
          </p>
        </div>
      </div>
    </div>
  );
}

function MissingRow({ row }: { row: MissingNumberRow }) {
  const CategoryIcon = row.categoryIcon;
  const LessonIcon = row.keyLessonIcon;

  return (
    <div
      className="flex items-stretch px-2.5 py-2"
      style={{ borderBottom: "1px solid rgba(196, 92, 62, 0.2)" }}
    >
      <div className="flex items-center">
        <NumberBadge value={row.number} present={false} />

        <div className="ml-2.5 min-w-[100px]">
          <p className="text-[7px] font-medium" style={{ color: COLORS.brown }}>
            {row.subNumbers.join(", ")}
          </p>
          <div className="mt-0.5 flex items-center gap-1">
            <p className="text-[6.5px] italic" style={{ color: "#a84432" }}>
              ({row.label})
            </p>
            <CategoryIcon size={10} strokeWidth={1.75} style={{ color: "#a84432" }} />
          </div>
        </div>
      </div>

      <RowDivider />

      <div className="flex flex-1 flex-col justify-center px-1">
        <p className="text-[6.5px] font-bold" style={{ color: COLORS.brown }}>
          Life Impact:
        </p>
        <ul className="mt-0.5 flex flex-col gap-0.5">
          {row.lifeImpactItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-1 text-[5.5px] leading-snug"
              style={{ color: COLORS.brown, opacity: 0.88 }}
            >
              <span style={{ color: "#a84432" }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <RowDivider />

      <div
        className="flex w-[118px] flex-col items-center justify-center rounded px-1.5 py-1.5 text-center"
        style={{
          border: "1px solid rgba(196, 92, 62, 0.35)",
          backgroundColor: "rgba(255, 248, 245, 0.8)",
        }}
      >
        <p className="text-[6px] font-bold" style={{ color: COLORS.brown }}>
          Key Lesson:
        </p>
        <LessonIcon
          size={18}
          strokeWidth={1.5}
          style={{ color: "#a84432", margin: "3px 0" }}
        />
        <p className="text-[5.5px] leading-snug" style={{ color: COLORS.brown, opacity: 0.9 }}>
          {row.keyLesson}
        </p>
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
    <ReportPageShell padding="118px 28px 0">
      <header className="flex flex-col items-center text-center">
        <p className="text-[8px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
          ASTRO AARAMBH
        </p>
        <h1 className="mt-1 text-[20px] font-bold tracking-wide" style={{ color: COLORS.brown }}>
          PLANE DETAILS
        </h1>
        <p className="mt-1 text-[9px] italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Available &amp; Missing Numbers Analysis
        </p>
      </header>

      <section className="relative z-10 mt-3">
        <div
          className="overflow-hidden rounded-md"
          style={{
            border: "1px solid #b8860b",
            backgroundColor: "rgba(253, 245, 230, 0.82)",
          }}
        >
          <SectionHeader
            variant="available"
            title="AVAILABLE NUMBERS – YOUR STRENGTHS"
          />
          <div>
            {availableNumbers.map((row, index) => (
              <div
                key={row.number}
                style={{
                  borderBottom:
                    index < availableNumbers.length - 1
                      ? undefined
                      : "none",
                }}
              >
                <AvailableRow row={row} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-3">
        <div
          className="overflow-hidden rounded-md"
          style={{
            border: "1px solid rgba(196, 92, 62, 0.55)",
            backgroundColor: "rgba(255, 242, 238, 0.82)",
          }}
        >
          <SectionHeader
            variant="missing"
            title="MISSING NUMBERS – AREAS FOR GROWTH"
          />
          <div>
            {missingNumbers.map((row) => (
              <MissingRow key={row.number} row={row} />
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-3 flex flex-col items-center pb-1">
        <LoShuSquare className="pointer-events-none absolute -left-1 bottom-0 h-14 w-14 opacity-70" />
        <div className="flex items-center gap-2 px-8">
          <LotusIcon className="h-4 w-7 opacity-55" />
          <p
            className="max-w-[480px] text-center text-[7px] italic leading-relaxed"
            style={{ color: COLORS.brown, opacity: 0.85 }}
          >
            {footerSummary}
          </p>
          <LotusIcon className="h-4 w-7 opacity-55" />
        </div>
      </footer>

      <PageFooterBar
        className="relative -mx-7 mt-2 h-9 w-[calc(100%+56px)]"
        pageNumber={pageNumber}
      />
    </ReportPageShell>
  );
}
