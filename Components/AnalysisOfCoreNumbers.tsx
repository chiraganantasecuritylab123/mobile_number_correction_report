import {
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  ConstellationWheel,
  LoShuSquare,
  LotusIcon,
} from "./CoverPageDecorations";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type CoreNumberAnalysis = {
  sectionIndex: string;
  title: string;
  number: number;
  planetName: string;
  planetSymbol: string;
  element: string;
  positiveTraits: string[];
  challenges: string[];
  keyAdvice: string;
  powerStatement: string;
};

export type AnalysisOfCoreNumbersProps = {
  coreNumbers?: CoreNumberAnalysis[];
  footerSummary?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;

const defaultCoreNumbers: CoreNumberAnalysis[] = [
  {
    sectionIndex: "5.1",
    title: "GOOD & BAD ABOUT DRIVER NUMBER (PSYCHIC NUMBER)",
    number: 5,
    planetName: "Mercury",
    planetSymbol: "☿",
    element: "Earth Element",
    positiveTraits: [
      "Highly adaptable, flexible, and quick learner",
      "Excellent communication skills and persuasive ability",
      "Loves freedom, travel, and new experiences",
      "Curious mind with strong analytical thinking",
      "Multi-talented and versatile in career",
      "Witty, charming, and socially magnetic",
      "Progressive thinker who embraces change",
    ],
    challenges: [
      "Can be restless and impatient",
      "Tendency to scatter energy in too many directions",
      "Risk of over-indulgence or addictive habits",
      "Difficulty in maintaining long-term focus",
      "Emotional fluctuations and mood swings",
      "Sometimes makes impulsive decisions",
      "May avoid deep commitment",
    ],
    keyAdvice: "Channel your dynamic energy into structured goals to maximize success.",
    powerStatement:
      "I use my flexibility and intelligence to explore opportunities and create positive change in my life.",
  },
  {
    sectionIndex: "5.2",
    title: "GOOD & BAD ABOUT CONDUCTOR NUMBER (DESTINY NUMBER)",
    number: 7,
    planetName: "Ketu",
    planetSymbol: "☊",
    element: "Water Element",
    positiveTraits: [
      "Deep thinker with strong intuition and spiritual inclination",
      "Excellent research and analytical abilities",
      "Natural seeker of truth and wisdom",
      "Independent and self-reliant",
      "Strong inner guidance and philosophical mind",
      "Good at solving complex problems",
      "Perfectionist with high standards",
    ],
    challenges: [
      "Can be overly reserved or aloof",
      "Tendency towards isolation and loneliness",
      "Overthinking and analysis paralysis",
      "Difficulty trusting others easily",
      "Emotional detachment in relationships",
      "Perfectionism leading to dissatisfaction",
      "Prone to anxiety and skepticism",
    ],
    keyAdvice: "Balance your inner spiritual journey with meaningful social connections.",
    powerStatement:
      "I trust my inner wisdom and seek truth, bringing clarity and insight to every step I take.",
  },
  {
    sectionIndex: "5.3",
    title: "GOOD & BAD ABOUT KUA NUMBER",
    number: 2,
    planetName: "Moon",
    planetSymbol: "☽",
    element: "Earth Element",
    positiveTraits: [
      "Natural diplomat and peacemaker",
      "Highly cooperative and team-oriented",
      "Sensitive, empathetic, and caring nature",
      "Excellent listener and supportive partner",
      "Strong intuition and emotional intelligence",
      "Creates harmony in relationships and environment",
      "Patient and gentle approach",
    ],
    challenges: [
      "Over-sensitivity and emotional vulnerability",
      "Tendency to be overly dependent on others",
      'Difficulty saying "No" and setting boundaries',
      "Can get easily hurt or affected by criticism",
      "Indecisiveness in important matters",
      "Risk of being taken advantage of",
      "Mood swings influenced by surroundings",
    ],
    keyAdvice: "Develop healthy boundaries while using your nurturing energy wisely.",
    powerStatement:
      "I create harmony, nurture relationships, and bring peace wherever I go.",
  },
];

function PlanetGraphic({
  symbol,
  name,
  element,
}: {
  symbol: string;
  name: string;
  element: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
        style={{
          border: "1.5px solid rgba(184, 134, 11, 0.55)",
          backgroundColor: "rgba(253, 245, 230, 0.6)",
          color: COLORS.gold,
        }}
      >
        {symbol}
      </div>
      <p className="mt-1 text-[6px] font-bold" style={{ color: COLORS.brown }}>
        {name}
      </p>
      <p className="text-[5.5px] opacity-75">{element}</p>
    </div>
  );
}

function TraitSection({
  variant,
  title,
  items,
}: {
  variant: "positive" | "challenge";
  title: string;
  items: string[];
}) {
  const isPositive = variant === "positive";
  const Icon = isPositive ? Sun : AlertTriangle;

  return (
    <div className="mt-2">
      <div
        className="rounded px-1.5 py-0.5 text-center"
        style={{
          backgroundColor: isPositive ? COLORS.gold : "#a84432",
        }}
      >
        <p
          className="text-[5.5px] font-bold tracking-wide"
          style={{ color: COLORS.cream }}
        >
          {title}
        </p>
      </div>
      <ul className="mt-1 flex flex-col gap-0.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-1 text-[5px] leading-snug"
            style={{ color: COLORS.brown, opacity: 0.9 }}
          >
            <Icon
              size={8}
              strokeWidth={2}
              style={{
                color: isPositive ? COLORS.gold : "#a84432",
                flexShrink: 0,
                marginTop: 1,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CoreNumberColumn({ data }: { data: CoreNumberAnalysis }) {
  return (
    <div className="relative flex flex-col pt-3">
      <div
        className="absolute left-1/2 top-0 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full text-[6px] font-bold"
        style={{
          backgroundColor: COLORS.brown,
          color: COLORS.cream,
          border: "1.5px solid #d48e31",
        }}
      >
        {data.sectionIndex}
      </div>

      <div
        className="flex flex-1 flex-col rounded-md px-2 pb-2 pt-4"
        style={{
          border: "1px solid #b8860b",
          backgroundColor: "rgba(253, 245, 230, 0.78)",
        }}
      >
        <p
          className="text-center text-[5.5px] font-bold leading-tight tracking-wide"
          style={{ color: COLORS.gold }}
        >
          {data.title}
        </p>

        <div className="mt-2 flex items-center justify-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-xl font-bold"
            style={{
              border: "2px solid #d48e31",
              color: COLORS.brown,
              backgroundColor: "rgba(212, 142, 49, 0.1)",
            }}
          >
            {data.number}
          </div>
          <PlanetGraphic
            symbol={data.planetSymbol}
            name={data.planetName}
            element={data.element}
          />
        </div>

        <TraitSection
          variant="positive"
          title="POSITIVE TRAITS (STRENGTHS)"
          items={data.positiveTraits}
        />

        <TraitSection
          variant="challenge"
          title="CHALLENGES (AREAS TO WATCH)"
          items={data.challenges}
        />

        <div
          className="mt-2 flex items-start gap-1 rounded px-1.5 py-1"
          style={{
            border: "1px solid rgba(184, 134, 11, 0.35)",
            backgroundColor: "rgba(255, 255, 255, 0.35)",
          }}
        >
          <Lightbulb
            size={10}
            strokeWidth={1.75}
            style={{ color: COLORS.gold, flexShrink: 0, marginTop: 1 }}
          />
          <div>
            <p className="text-[5.5px] font-bold" style={{ color: COLORS.brown }}>
              KEY ADVICE
            </p>
            <p className="text-[5px] leading-snug" style={{ color: COLORS.brown, opacity: 0.9 }}>
              {data.keyAdvice}
            </p>
          </div>
        </div>

        <div
          className="mt-2 flex items-start gap-1 rounded px-1.5 py-1"
          style={{
            border: "1px solid rgba(184, 134, 11, 0.25)",
            backgroundColor: "rgba(212, 142, 49, 0.06)",
          }}
        >
          <Sparkles
            size={10}
            strokeWidth={1.75}
            style={{ color: COLORS.gold, flexShrink: 0, marginTop: 1 }}
          />
          <div>
            <p className="text-[5.5px] font-bold" style={{ color: COLORS.brown }}>
              POWER STATEMENT
            </p>
            <p
              className="text-[5px] italic leading-snug"
              style={{ color: COLORS.brown, opacity: 0.9 }}
            >
              &ldquo;{data.powerStatement}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnalysisOfCoreNumbers({
  coreNumbers = defaultCoreNumbers,
  footerSummary = "Your core numbers reveal your true potential. Embrace your strengths, work on your challenges, and align with your highest purpose.",
  pageNumber = "05",
}: AnalysisOfCoreNumbersProps) {
  return (
    <ReportPageShell padding="118px 24px 0">
      <header className="flex flex-col items-center text-center">
        <p className="text-[8px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
          ASTRO AARAMBH
        </p>
        <h1 className="mt-1 text-[18px] font-bold tracking-wide" style={{ color: COLORS.brown }}>
          ANALYSIS OF CORE NUMBERS
        </h1>
        <p className="mt-1 text-[9px] italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Understanding Your Innate Energies
        </p>
      </header>

      <section className="relative z-10 mt-3 grid grid-cols-3 gap-2">
        {coreNumbers.map((data) => (
          <CoreNumberColumn key={data.sectionIndex} data={data} />
        ))}
      </section>

      <footer className="relative z-10 mt-3 flex flex-col items-center pb-1">
        <LoShuSquare className="pointer-events-none absolute -left-1 bottom-0 h-14 w-14 opacity-70" />
        <ConstellationWheel className="pointer-events-none absolute -right-1 bottom-0 h-14 w-14 opacity-55" />
        <div className="flex items-center gap-2 px-10">
          <LotusIcon className="h-4 w-7 opacity-55" />
          <p
            className="max-w-[460px] text-center text-[7px] italic leading-relaxed"
            style={{ color: COLORS.brown, opacity: 0.85 }}
          >
            {footerSummary}
          </p>
          <LotusIcon className="h-4 w-7 opacity-55" />
        </div>
      </footer>

      <PageFooterBar
        className="relative -mx-6 mt-2 h-9 w-[calc(100%+48px)]"
        pageNumber={pageNumber}
      />
    </ReportPageShell>
  );
}
