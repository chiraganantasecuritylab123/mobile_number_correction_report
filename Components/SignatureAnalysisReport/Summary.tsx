import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Pattern3, SubtitleHeader } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type SummaryRatingRow = {
  category: string;
  rating: string;
};

export type SummaryProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  ratings?: SummaryRatingRow[];
  keyHighlights?: string[];
  focusAreas?: string[];
  overallScore?: number;
  maxScore?: number;
  overallScoreLabel?: string;
  verdictLabel?: string;
  closingStatement?: string;
  thankYouText?: string;
  brandName?: string;
  servicesText?: string;
};

const COLORS = REPORT_COLORS;
const SERIF_FONT = "Georgia, serif";
const RATING_TEXT_COLOR = "#8B6A2F";

const ASSETS = {
  logo: "/assets/signatureReport/logo-main.png",
  pattern2: "/assets/cover/pattern-2.png",
  atAGlanceTable: "/assets/signaturePages/table.png",
  verdictBackground: "/assets/signaturePages/footer-backgroundSummaryPage.png",
} as const;

const TABLE_HEADER_STYLE: CSSProperties = {
  color: COLORS.brown,
  fontFamily: SERIF_FONT,
};

const TABLE_CATEGORY_STYLE: CSSProperties = {
  color: COLORS.brown,
  fontFamily: SERIF_FONT,
};

const TABLE_RATING_STYLE: CSSProperties = {
  color: RATING_TEXT_COLOR,
  fontFamily: SERIF_FONT,
};

const AT_A_GLANCE_TABLE_STYLE: CSSProperties = {
  backgroundImage: `url('${ASSETS.atAGlanceTable}')`,
  backgroundSize: "70% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "230px",
  padding: "20px 30px",
};

const VERDICT_BACKGROUND_STYLE: CSSProperties = {
  backgroundImage: `url('${ASSETS.verdictBackground}')`,
  backgroundSize: "70% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const defaultRatings: SummaryRatingRow[] = [
  { category: "Confidence", rating: "Excellent" },
  { category: "Leadership", rating: "Strong" },
  { category: "Wealth Potential", rating: "Good" },
  { category: "Communication", rating: "Strong" },
  { category: "Career Growth", rating: "Excellent" },
  { category: "Stability", rating: "Good" },
  { category: "Relationships", rating: "Balanced" },
  { category: "Personal Brand", rating: "Strong" },
];

const defaultKeyHighlights = [
  "Strong leadership potential",
  "Positive career growth indicators",
  "Good professional presence",
  "Balanced signature structure",
  "Strong personal identity",
  "Healthy confidence projection",
  "Positive recognition energy",
];

const defaultFocusAreas = [
  "Increase authority projection",
  "Improve signature visibility",
  "Strengthen wealth symbolism",
  "Enhance business appeal",
  "Refine ending stroke",
];

function TableHeaderCell({ children }: { children: ReactNode }) {
  return (
    <div className="text-center text-[15px] font-bold" style={TABLE_HEADER_STYLE}>
      {children}
    </div>
  );
}

function TableDataCell({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSProperties;
}) {
  return (
    <div className="text-center text-[15px] font-semibold" style={style}>
      {children}
    </div>
  );
}

function AtAGlanceTable({ ratings }: { ratings: SummaryRatingRow[] }) {
  return (
    <section className="relative z-10 mt-1 font-nunito-sans">
      <div className="relative w-full" style={AT_A_GLANCE_TABLE_STYLE}>
        <div className="grid grid-cols-2">
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Rating</TableHeaderCell>
        </div>

        <div className="mt-1">
          {ratings.map((row) => (
            <div key={row.category} className="grid grid-cols-2 py-[5px]">
              <TableDataCell style={TABLE_CATEGORY_STYLE}>{row.category}</TableDataCell>
              <TableDataCell style={TABLE_RATING_STYLE}>{row.rating}</TableDataCell>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width }}>
      <Image
        src={ASSETS.pattern2}
        alt=""
        width={width}
        height={Math.round(width * 0.12)}
        className="h-auto w-full object-contain"
        aria-hidden
      />
    </div>
  );
}

function FancyHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Pattern3 size={42} />
      <h3
        className="text-center text-[16px] font-bold uppercase leading-none"
        style={{
          color: COLORS.brown,
          fontFamily: SERIF_FONT,
        }}
      >
        {title}
      </h3>
      <Pattern3 size={42} className="rotate-180" />
    </div>
  );
}

function BulletListItem({
  children,
  gapClass,
}: {
  children: string;
  gapClass: string;
}) {
  return (
    <li
      className={`flex items-start ${gapClass} text-[14px] font-nunito-sans`}
      style={{ color: COLORS.black }}
    >
      <span style={{ color: COLORS.gold }}>•</span>
      <span>{children}</span>
    </li>
  );
}

function HighlightsAndFocusSection({
  keyHighlights,
  focusAreas,
}: {
  keyHighlights: string[];
  focusAreas: string[];
}) {
  return (
    <section className="relative mx-auto max-w-[700px] px-6 py-2">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 font-semibold">
        <div>
          <FancyHeading title="KEY HIGHLIGHTS" />

          <ul className="mt-2 space-y-1">
            {keyHighlights.map((item) => (
              <BulletListItem key={item} gapClass="gap-3">
                {item}
              </BulletListItem>
            ))}
          </ul>
        </div>

        <div className="relative flex w-10 justify-center">
          <div
            className="h-full w-px"
            style={{
              background: "rgba(184,134,11,0.45)",
            }}
          />

          <OrnamentDivider width={290} />
        </div>

        <div>
          <FancyHeading title="RECOMMENDED FOCUS AREAS" />

          <ul className="mt-4 space-y-1">
            {focusAreas.map((item) => (
              <BulletListItem key={item} gapClass="gap-1">
                {item}
              </BulletListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalVerdictSection({
  score,
  maxScore,
  scoreLabel,
  verdictLabel,
}: {
  score: number;
  maxScore: number;
  scoreLabel: string;
  verdictLabel: string;
}) {
  return (
    <section className="relative z-10 flex justify-center font-nunito-sans">
      <div
        className="relative flex min-h-[150px] w-full items-center justify-center"
        style={VERDICT_BACKGROUND_STYLE}
      >
        <div className="flex flex-col items-center justify-center px-2 text-center">
          <h2
            className="text-[14px] font-bold uppercase tracking-[0.08em]"
            style={{ color: COLORS.brown }}
          >
            FINAL VERDICT
          </h2>

          <p
            className="mt-1 text-[9px] font-semibold tracking-[0.1em]"
            style={{ color: COLORS.brown }}
          >
            {scoreLabel}
          </p>

          <p
            className="mt-0.5 text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            <span className="text-[55px]">{score}</span> /{" "}
            <span className="text-[25px]">{maxScore}</span>
          </p>

          <p
            className="mt-2 text-[13px] font-bold tracking-[0.08em]"
            style={{ color: COLORS.brown }}
          >
            {verdictLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

function ClosingStatement({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-1 px-2 text-center font-nunito-sans">
      <p
        className="mx-auto mt-2 max-w-[560px] text-[14px] italic leading-relaxed font-nunito-sans"
        style={{ color: COLORS.brown }}
      >
        {text}
      </p>

      <div className="flex justify-center">
        <OrnamentDivider width={290} />
      </div>
    </section>
  );
}

function BrandFooter({
  thankYouText,
  brandName,
  servicesText,
}: {
  thankYouText: string;
  brandName: string;
  servicesText: string;
}) {
  return (
    <footer className="relative z-10 mt-1 flex flex-col items-center text-center font-nunito-sans">
      <p
        className="text-[14px] font-semibold tracking-[0.12em]"
        style={{ color: COLORS.brown }}
      >
        {thankYouText}
      </p>

      <div className="flex items-center gap-2">
        <Pattern3 size={46} />
        <p className="text-[30px] font-bold tracking-[0.08em]" style={{ color: COLORS.brown }}>
          {brandName}
        </p>
        <Pattern3 size={46} className="rotate-180" />
      </div>

      <p
        className="mt-1 text-[13px] font-semibold tracking-[0.14em]"
        style={{ color: COLORS.gold }}
      >
        {servicesText}
      </p>
    </footer>
  );
}

export default function Summary({
  pageNumber = "16",
  title = "FINAL REPORT SUMMARY",
  subtitle = "Your Signature At A Glance",
  ratings = defaultRatings,
  keyHighlights = defaultKeyHighlights,
  focusAreas = defaultFocusAreas,
  overallScore = 87,
  maxScore = 100,
  overallScoreLabel = "OVERALL SIGNATURE STRENGTH",
  verdictLabel = "STRONG SIGNATURE WITH EXCELLENT GROWTH POTENTIAL",
  closingStatement = "Your signature is more than a name on paper. It is a visual representation of your identity, confidence, ambitions, and personal energy. Consistent use of an improved signature can help reinforce positive habits, stronger self-expression, and a more professional image.",
  thankYouText = "THANK YOU FOR CHOOSING",
  brandName = "ASTRO AARAMBH",
  servicesText = "NUMEROLOGY • SIGNATURE ANALYSIS • PERSONAL GROWTH",
}: SummaryProps) {
  return (
    <SignatureReportPageShell padding="16px 36px 18px" pageNumber={pageNumber}>
      <header className="mt-1 flex flex-col items-center text-center" id="16">
        <Image
          src={ASSETS.logo}
          alt="Astro Aarambh"
          width={80}
          height={80}
          className="mb-0.5"
          priority
        />

        <h1
          className="inline-flex max-w-[620px] items-center gap-2 text-[30px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <OrnamentDivider width={290} />

        <SubtitleHeader text={subtitle} />
      </header>

      <AtAGlanceTable ratings={ratings} />

      <HighlightsAndFocusSection
        keyHighlights={keyHighlights}
        focusAreas={focusAreas}
      />

      <FinalVerdictSection
        score={overallScore}
        maxScore={maxScore}
        scoreLabel={overallScoreLabel}
        verdictLabel={verdictLabel}
      />

      <ClosingStatement text={closingStatement} />

      <BrandFooter
        thankYouText={thankYouText}
        brandName={brandName}
        servicesText={servicesText}
      />
    </SignatureReportPageShell>
  );
}
