import {
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import FooterSummaryBanner from "./FooterSummaryBanner";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";

export type CoreNumberAnalysis = {
  sectionIndex: string;
  title: string;
  number: number;
  planetName: string;
  planetSymbol: string;
  planetImage: string;
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

const CARD_THEMES = {
  gold: {
    border: "rgba(184, 134, 11, 0.5)",
    headerBg: "rgba(253, 245, 230, 0.95)",
    headerText: "#b8860b",
    contentBg: "rgba(255, 255, 255, 0.5)",
    bullet: "#b8860b",
  },
  red: {
    border: "rgba(168, 68, 50, 0.45)",
    headerBg: "rgba(253, 236, 234, 0.95)",
    headerText: "#a84432",
    contentBg: "rgba(255, 250, 249, 0.65)",
    bullet: "#a84432",
  },
} as const;

type CardTheme = keyof typeof CARD_THEMES;

function InfoCard({
  theme,
  icon: Icon,
  title,
  children,
}: {
  theme: CardTheme;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  const palette = CARD_THEMES[theme];

  return (
    <div
      className="mt-2 overflow-hidden rounded-md"
      style={{ border: `1px solid ${palette.border}` }}
    >
      <div
        className="flex items-center gap-1 px-1.5 py-1"
        style={{
          backgroundColor: palette.headerBg,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <Icon
          size={9}
          strokeWidth={2}
          style={{ color: palette.headerText, flexShrink: 0 }}
        />
        <p
          className="text-[7.5px] font-bold tracking-wide"
          style={{ color: palette.headerText }}
        >
          {title}
        </p>
      </div>
      <div
        className="px-1.5 py-1 font-bold text-black"
        style={{ backgroundColor: palette.contentBg }}
      >
        {children}
      </div>
    </div>
  );
}


const TITLE_PREFIX = "GOOD & BAD ABOUT";

function CoreNumberTitle({ title }: { title: string }) {
  const normalizedTitle = title.trim();
  const hasPrefix = normalizedTitle.toUpperCase().startsWith(TITLE_PREFIX);
  const suffix = hasPrefix
    ? normalizedTitle.slice(TITLE_PREFIX.length).trimStart()
    : normalizedTitle;

  return (
    <p className="text-center text-xs font-bold leading-tight tracking-wide">
      {hasPrefix ? (
        <>
          <span className="text-black">{TITLE_PREFIX}</span> <br />
          {suffix ? (
            <>
              {" "}
              <span className="text-[#a84432]">{suffix}</span>
            </>
          ) : null}
        </>
      ) : (
        <span className="text-black">{normalizedTitle}</span>
      )}
    </p>
  );
}

function Pattern3({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/assets/cover/image-arrow.png"
      alt=""
      width={size}
      height={Math.round(size * 0.58)}
      className={`object-contain opacity-80 ${className ?? ""}`}
      aria-hidden
    />
  );
}

const defaultCoreNumbers: CoreNumberAnalysis[] = [
  {
    sectionIndex: "5.1",
    title: "GOOD & BAD ABOUT DRIVER NUMBER (PSYCHIC NUMBER)",
    number: 5,
    planetName: "Mercury",
    planetSymbol: "☿",
    planetImage: "/assets/cover/mercury.png",
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
    planetImage: "/assets/cover/ketu.png",
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
    planetImage: "/assets/cover/moon.png",
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
  planetImage
}: {
  symbol: string;
  name: string;
  element: string;
  planetImage: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src={planetImage} alt={name} width={60} height={60} className="object-contain" />
        <p className="text-[10px] font-bold" style={{ color: COLORS.brown }}>
          {name}
        </p>
        <p className="text-[8px] font-bold">{element}</p>
      </div>
      <div className="flex flex-col items-center text-[30px]">
        {symbol}
      </div>
    </>
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
  const theme = isPositive ? "gold" : "red";
  const Icon = isPositive ? Sun : AlertTriangle;
  const bulletColor = CARD_THEMES[theme].bullet;

  return (
    <InfoCard theme={theme} icon={Icon} title={title}>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-1 text-[9px] font-bold leading-snug text-black"
          >
            <span
              className="mt-[3px] h-[3px] w-[3px] shrink-0 rounded-full"
              style={{ backgroundColor: bulletColor }}
            />
            {item}
          </li>
        ))}
      </ul>
    </InfoCard>
  );
}

function CoreNumberColumn({ data }: { data: CoreNumberAnalysis }) {
  return (
    <div className="relative flex flex-col pt-3">
      <div
        className="absolute left-1/2 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full text-[10px] font-bold"
        style={{
          backgroundColor: COLORS.brown,
          color: COLORS.cream,
          border: "1.5px solid #d48e31",
        }}
      >
        {data.sectionIndex}
      </div>

      <div
        className="flex flex-1 flex-col rounded-md px-2 pb-2 pt-8"
        style={{
          border: "1px solid #b8860b",
          backgroundColor: "rgba(253, 245, 230, 0.78)",
        }}
      >
        <CoreNumberTitle title={data.title} />

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
            planetImage={data.planetImage}
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

        <InfoCard theme="gold" icon={Lightbulb} title="KEY ADVICE">
          <p className="text-center text-[9px] font-bold leading-snug text-black">
            {data.keyAdvice}
          </p>
        </InfoCard>

        <InfoCard theme="gold" icon={Sparkles} title="POWER STATEMENT">
          <p className="text-center text-[9px] font-bold italic leading-snug text-[#a84432]">
            &ldquo;{data.powerStatement}&rdquo;
          </p>
        </InfoCard>
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
          <Pattern3 size={100} />
          <p className="text-md font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={100} className="rotate-180" />
        </div>
        <h1 className="text-4xl font-bold tracking-wide" style={{ color: COLORS.brown }}>
          ANALYSIS OF <span className="" style={{ color: COLORS.gold }}>CORE NUMBERS</span>
        </h1>
        <p className="mt-1 text-sm italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
          Understanding Your Innate Energies
        </p>
        {/* <div className="flex justify-center">  */}
          {/* <Image src="/assets/cover/page-5-arrow.png" alt="" width={150} height={150} className="object-contain" /> */}
        {/* </div> */}
      </header>

      <section className="relative z-10 mt-3 grid grid-cols-3 gap-2">
        {coreNumbers.map((data) => (
          <CoreNumberColumn key={data.sectionIndex} data={data} />
        ))}
      </section>

      <footer className="relative z-10 mt-2 flex justify-center px-2 pb-1">
        <FooterSummaryBanner summary={footerSummary} />
      </footer>

      {/* <PageFooterBar
        className="relative -mx-6 mt-2 h-9 w-[calc(100%+48px)]"
        pageNumber={pageNumber}
      /> */}
    </ReportPageShell>
  );
}
