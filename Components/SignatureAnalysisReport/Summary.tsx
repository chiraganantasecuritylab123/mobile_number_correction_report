import Image from "next/image";
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

function AtAGlanceTable({ ratings }: { ratings: SummaryRatingRow[] }) {
  return (
    <section className="relative z-10 mt-1 font-nunito-sans">
      <div
        className="relative w-full"
        style={{
          backgroundImage:
            "url('/assets/signaturePages/table.png')",
          backgroundSize: "70% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "230px",
          padding: "20px 30px",
        }}
      >
        {/* Header */}
        <div className="grid grid-cols-2">
          <div
            className="text-center text-[15px] font-bold"
            style={{
              color: COLORS.brown,
              fontFamily: "Georgia, serif",
            }}
          >
            Category
          </div>

          <div
            className="text-center text-[15px] font-bold"
            style={{
              color: COLORS.brown,
              fontFamily: "Georgia, serif",
            }}
          >
            Rating
          </div>
        </div>

        {/* Rows */}
        <div className="mt-1">
          {ratings.map((row) => (
            <div
              key={row.category}
              className="grid grid-cols-2 py-[5px]"
            >
              <div
                className="text-center text-[15px] font-semibold"
                style={{
                  color: COLORS.brown,
                  fontFamily: "Georgia, serif",
                }}
              >
                {row.category}
              </div>

              <div
                className="text-center text-[15px] font-semibold"
                style={{
                  color: "#8B6A2F",
                  fontFamily: "Georgia, serif",
                }}
              >
                {row.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ASSETS = {
  // Pre-built cover background (image 3 reference): frame, zodiac/pen emblem,
  // sun, astro-chart corners, quill + signature, and bottom maroon arch
  // are already baked into this artwork. Page 02 just needs to lay text on top.
  cover: "/assets/signaturePages/coverPage1.png",
  pattern2: "/assets/cover/pattern-2.png",
  nameBorder: "/assets/signaturePages/nameImageBorder.png",
} as const;


function OrnamentDivider({ width = 220, lotusSize = 0, className }: { className?: string, width?: number; lotusSize?: number }) {
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
      {lotusSize > 0 ? (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#f4e7c9] px-1">
          {/* <LotusGlyph size={lotusSize} /> */}
        </div>
      ) : null}
    </div>
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
    <section className="relative px-6 py-2 max-w-[700px] mx-auto">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 font-semibold">
        {/* Left Column */}
        <div>
          <FancyHeading title="KEY HIGHLIGHTS" />

          <ul className="mt-2 space-y-1">
            {keyHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[14px] font-nunito-sans"
                style={{ color: COLORS.black }}
              >
                <span style={{ color: COLORS.gold }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="relative flex w-10 justify-center">
          <div
            className="h-full w-px"
            style={{
              background: "rgba(184,134,11,0.45)",
            }}
          />

          <OrnamentDivider width={290} className="rotate-90" />
        </div>

        {/* Right Column */}
        <div>
          <FancyHeading title="RECOMMENDED FOCUS AREAS" />

          <ul className="mt-4 space-y-1">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1 text-[14px] font-nunito-sans"
                style={{ color: COLORS.black }}
              > 
                <span style={{ color: COLORS.gold }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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
          fontFamily: "Georgia, serif",
        }}
      >
        {title}
      </h3>
      <Pattern3 size={42} className="rotate-180" />

    </div>
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
        style={{
          backgroundImage:
            "url('/assets/signaturePages/footer-backgroundSummaryPage.png')",
          backgroundSize: "70% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Center Content */}
        <div className="flex flex-col items-center justify-center px-2 text-center">
          <h2
            className="text-[14px] font-bold uppercase tracking-[0.08em]"
            style={{ color: COLORS.brown }}
          >
            FINAL VERDICT
          </h2>

          <p
            className="mt-1 text-[9px] font-semibold tracking-[0.1em]"
            style={{
              color: COLORS.brown,
            }}
          >
            {scoreLabel}
          </p>


          <p
            className="mt-0.5 text-[26px] font-bold leading-none"
            style={{ color: COLORS.brown }}
          >
            <span className="text-[55px]">{score}</span> / <span className="text-[25px]">{maxScore}</span>
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
        <OrnamentDivider width={290} lotusSize={0} />
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
      <header className="flex flex-col items-center text-center mt-1">

        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={80}
          height={80}
          className="mb-0.5"
          priority
        />

        <h1
          className="max-w-[620px] inline-flex items-center gap-2 text-[30px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <OrnamentDivider width={290} lotusSize={0} />

        <SubtitleHeader text={subtitle} />
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
