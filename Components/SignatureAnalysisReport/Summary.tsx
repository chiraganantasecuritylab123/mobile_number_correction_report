import Image from "next/image";
import { Pattern3 } from "../CommunComponents";
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
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const SECTION_BOX_STYLE = {
  border: `1.5px solid ${COLORS.gold}`,
  borderRadius: 10,
  backgroundColor: "rgba(253, 245, 230, 0.55)",
} as const;

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

function HeaderDivider() {
  return (
    <div className="mt-1 flex w-full max-w-[460px] items-center justify-center gap-2">
      <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      <span className="text-[8px] leading-none" style={{ color: COLORS.gold }}>
        ◆
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="h-px w-8" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      <p className="text-[10px] font-bold tracking-[0.08em]" style={{ color: COLORS.brown }}>
        {title}
      </p>
      <span className="h-px w-8" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-1.5 text-[8px] leading-snug"
          style={{ color: COLORS.brown, opacity: 0.9, fontFamily: BODY_SANS }}
        >
          <span
            className="mt-[4px] inline-block h-1 w-1 shrink-0 rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function AtAGlanceTable({ ratings }: { ratings: SummaryRatingRow[] }) {
  return (
    <section className="relative z-10 mt-2 overflow-hidden rounded-lg font-nunito-sans" style={SECTION_BOX_STYLE}>
      <div
        className="grid grid-cols-2 border-b px-3 py-1.5"
        style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
      >
        <p className="text-[9px] font-bold tracking-[0.04em]" style={{ color: COLORS.brown }}>
          Category
        </p>
        <p className="text-right text-[9px] font-bold tracking-[0.04em]" style={{ color: COLORS.brown }}>
          Rating
        </p>
      </div>

      {ratings.map((row, index) => (
        <div
          key={row.category}
          className="grid grid-cols-2 px-3 py-1"
          style={{
            borderBottom:
              index < ratings.length - 1 ? "1px solid rgba(184, 134, 11, 0.22)" : undefined,
          }}
        >
          <p className="text-[8.5px]" style={{ color: COLORS.brown, fontFamily: BODY_SANS }}>
            {row.category}
          </p>
          <p
            className="text-right text-[8.5px] font-semibold"
            style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
          >
            {row.rating}
          </p>
        </div>
      ))}
    </section>
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
    <section
      className="relative z-10 mt-2 px-3 py-2.5 font-nunito-sans"
      style={SECTION_BOX_STYLE}
    >
      <div className="flex items-stretch gap-3">
        <div className="min-w-0 flex-1">
          <SectionHeading title="KEY HIGHLIGHTS" />
          <div className="mt-2">
            <BulletList items={keyHighlights} />
          </div>
        </div>

        <div className="relative flex w-3 shrink-0 items-center justify-center self-stretch">
          <div
            className="h-full w-px border-l border-dashed"
            style={{ borderColor: "rgba(184, 134, 11, 0.45)" }}
          />
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[5px] leading-none"
            style={{ color: COLORS.gold }}
          >
            ◆
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <SectionHeading title="RECOMMENDED FOCUS AREAS" />
          <div className="mt-2">
            <BulletList items={focusAreas} />
          </div>
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
    <section
      className="relative z-10 mt-2 px-4 py-3 text-center font-nunito-sans"
      style={{
        border: `2px solid ${COLORS.gold}`,
        borderRadius: 10,
        backgroundColor: "rgba(253, 245, 230, 0.72)",
        boxShadow: `inset 0 0 0 1px ${COLORS.goldLight}`,
      }}
    >
      <p className="text-[11px] font-bold tracking-[0.08em]" style={{ color: COLORS.brown }}>
        FINAL VERDICT
      </p>
      <p
        className="mt-1 text-[8px] font-semibold tracking-[0.1em]"
        style={{ color: COLORS.brown, opacity: 0.85 }}
      >
        {scoreLabel}
      </p>
      <p className="mt-1 text-[28px] font-bold leading-none" style={{ color: COLORS.brown }}>
        {score}
        <span className="text-[14px] font-semibold" style={{ opacity: 0.75 }}>
          {" "}
          / {maxScore}
        </span>
      </p>
      <p
        className="mt-2 text-[9px] font-bold tracking-[0.06em]"
        style={{ color: COLORS.brown }}
      >
        {verdictLabel}
      </p>
    </section>
  );
}

function ClosingStatement({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-2 px-2 text-center font-nunito-sans">
      <HeaderDivider />
      <p
        className="mx-auto mt-2 max-w-[560px] text-[8.5px] italic leading-relaxed"
        style={{ color: COLORS.brown, opacity: 0.88, fontFamily: BODY_SANS }}
      >
        {text}
      </p>
      <HeaderDivider />
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
    <footer className="relative z-10 mt-2 flex flex-col items-center text-center font-nunito-sans">
      <p
        className="text-[8px] font-semibold tracking-[0.12em]"
        style={{ color: COLORS.brown, opacity: 0.8 }}
      >
        {thankYouText}
      </p>

      <div className="mt-1 flex items-center gap-2">
        <Pattern3 size={36} />
        <p className="text-[18px] font-bold tracking-[0.08em]" style={{ color: COLORS.brown }}>
          {brandName}
        </p>
        <Pattern3 size={36} className="rotate-180" />
      </div>

      <p
        className="mt-1.5 text-[7.5px] font-semibold tracking-[0.14em]"
        style={{ color: COLORS.brown, opacity: 0.75 }}
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
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={80}
          height={80}
          className="mb-0.5"
          priority
        />
        <h1
          className="max-w-[620px] text-[26px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <HeaderDivider />
        <div className="mt-1 flex items-center gap-2">
          <span className="h-px w-6" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
          <p
            className="text-[12px] italic font-nunito-sans"
            style={{ color: COLORS.black, opacity: 0.85 }}
          >
            {subtitle}
          </p>
          <span className="h-px w-6" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
        </div>
      </header>

      <AtAGlanceTable ratings={ratings} />

      <HighlightsAndFocusSection keyHighlights={keyHighlights} focusAreas={focusAreas} />

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
