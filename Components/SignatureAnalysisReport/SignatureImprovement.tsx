import { PenLine } from "lucide-react";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type ImprovementSuggestion = {
  title: string;
  items: string[];
};

export type SignatureImprovementProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  overallRecommendation?: string;
  improvements?: ImprovementSuggestion[];
  benefitsIntro?: string;
  benefitsLeft?: string[];
  benefitsRight?: string[];
  expertRecommendation?: string;
};

const COLORS = REPORT_COLORS;
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const SECTION_BOX_STYLE = {
  border: `1.5px solid ${COLORS.gold}`,
  borderRadius: 10,
  backgroundColor: "rgba(253, 245, 230, 0.55)",
} as const;

const defaultImprovements: ImprovementSuggestion[] = [
  {
    title: "INCREASE AUTHORITY",
    items: [
      "Make the first letter slightly larger and more prominent.",
      "Maintain a confident upward movement at the beginning.",
      "Avoid weak or broken opening strokes.",
    ],
  },
  {
    title: "IMPROVE CONFIDENCE PROJECTION",
    items: [
      "Ensure the signature moves slightly upward rather than downward.",
      "Keep the writing flow continuous and decisive.",
      "Reduce hesitation marks and unnecessary pauses.",
    ],
  },
  {
    title: "IMPROVE WEALTH SYMBOLISM",
    items: [
      "Extend the ending stroke gently forward.",
      "Avoid cutting the signature abruptly.",
      "Maintain smooth and progressive line movement.",
    ],
  },
  {
    title: "STRENGTHEN LEADERSHIP ENERGY",
    items: [
      "Increase overall signature visibility.",
      "Use stronger stroke pressure where comfortable.",
      "Maintain a clear and recognizable identity pattern.",
    ],
  },
  {
    title: "IMPROVE BUSINESS APPEAL",
    items: [
      "Keep the signature balanced and professional.",
      "Avoid excessive decorations or complexity.",
      "Focus on clarity and consistency.",
    ],
  },
  {
    title: "IMPROVE PUBLIC IMAGE",
    items: [
      "Create a distinctive but readable style.",
      "Ensure the signature looks confident on documents.",
      "Maintain uniformity across all signatures.",
    ],
  },
  {
    title: "IMPROVE PERSONAL BRANDING",
    items: [
      "Develop a signature that is unique and memorable.",
      "Preserve individuality while maintaining professionalism.",
      "Align the signature style with your career goals.",
    ],
  },
];

const defaultBenefitsLeft = [
  "Stronger Authority Presence",
  "Better Public Recognition",
  "Enhanced Leadership Energy",
  "Improved Wealth Attraction Symbolism",
];

const defaultBenefitsRight = [
  "Greater Professional Credibility",
  "Better Personal Branding",
  "Increased Confidence Projection",
  "Stronger Business Impression",
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
      <span className="h-px w-10" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      <p
        className="text-[11px] font-bold tracking-[0.1em]"
        style={{ color: COLORS.brown }}
      >
        {title}
      </p>
      <span className="h-px w-10" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

function OverallRecommendationSection({ text }: { text: string }) {
  return (
    <section className="relative z-10 mt-2 px-4 py-3 font-nunito-sans" style={SECTION_BOX_STYLE}>
      <SectionHeading title="OVERALL RECOMMENDATION" />
      <p
        className="mt-2 text-center text-[10px] leading-relaxed"
        style={{ color: COLORS.brown, opacity: 0.9, fontFamily: BODY_SANS }}
      >
        {text}
      </p>
    </section>
  );
}

function ImprovementCard({
  index,
  suggestion,
}: {
  index: number;
  suggestion: ImprovementSuggestion;
}) {
  return (
    <div
      className="flex items-start gap-2.5 rounded-lg px-2.5 py-2 font-nunito-sans"
      style={{
        border: `1px solid ${COLORS.gold}`,
        backgroundColor: "rgba(253, 245, 230, 0.72)",
      }}
    >
      <div
        className="relative flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full"
        style={{
          border: `1.5px solid ${COLORS.gold}`,
          backgroundColor: "#FAE6C1",
        }}
      >
        <span
          className="text-[9px] font-bold leading-none"
          style={{ color: COLORS.brown }}
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="text-[9px] font-bold tracking-[0.04em]"
          style={{ color: COLORS.brown }}
        >
          {suggestion.title}
        </p>
        <ul className="mt-1 flex flex-col gap-0.5">
          {suggestion.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-1.5 text-[8px] leading-snug"
              style={{ color: COLORS.brown, opacity: 0.88, fontFamily: BODY_SANS }}
            >
              <span
                className="mt-[4px] inline-block h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: COLORS.gold }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SuggestedImprovementsSection({
  improvements,
}: {
  improvements: ImprovementSuggestion[];
}) {
  return (
    <section className="relative z-10 mt-2 font-nunito-sans">
      <SectionHeading title="SUGGESTED IMPROVEMENTS" />
      <div className="mt-2 flex flex-col gap-1.5">
        {improvements.map((suggestion, index) => (
          <ImprovementCard key={suggestion.title} index={index + 1} suggestion={suggestion} />
        ))}
      </div>
    </section>
  );
}

function ExpectedBenefitsSection({
  intro,
  leftItems,
  rightItems,
}: {
  intro: string;
  leftItems: string[];
  rightItems: string[];
}) {
  return (
    <section className="relative z-10 mt-2 px-3 py-3 font-nunito-sans" style={SECTION_BOX_STYLE}>
      <SectionHeading title="EXPECTED BENEFITS" />
      <p
        className="mt-2 text-center text-[9px] font-semibold"
        style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
      >
        {intro}
      </p>

      <div className="relative mt-2 flex items-stretch gap-3">
        <ul className="flex flex-1 flex-col gap-1 pl-1">
          {leftItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-1.5 text-[8.5px] leading-snug"
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

        <ul className="flex flex-1 flex-col gap-1 pl-1">
          {rightItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-1.5 text-[8.5px] leading-snug"
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
      </div>
    </section>
  );
}

function ExpertRecommendationFooter({ text }: { text: string }) {
  return (
    <footer className="relative z-10 mt-2 font-nunito-sans">
      <div
        className="flex min-h-[96px] w-full items-center gap-3 rounded-lg px-4 py-3"
        style={{
          backgroundColor: "#3E1F14",
          border: `1.5px solid ${COLORS.gold}`,
        }}
      >
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{ border: `1.5px solid ${COLORS.goldLight}` }}
        >
          <PenLine size={22} strokeWidth={1.25} style={{ color: COLORS.goldLight }} />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="text-[11px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.goldLight }}
          >
            EXPERT RECOMMENDATION
          </p>
          <p
            className="mt-1 text-[9px] leading-relaxed"
            style={{ color: COLORS.cream, opacity: 0.95, fontFamily: BODY_SANS }}
          >
            {text}
          </p>
        </div>

        <PenLine
          size={48}
          strokeWidth={0.9}
          className="shrink-0 opacity-35"
          style={{ color: COLORS.goldLight }}
          aria-hidden
        />
      </div>
    </footer>
  );
}

export default function SignatureImprovement({
  pageNumber = "14",
  title = "SIGNATURE IMPROVEMENT SUGGESTIONS",
  subtitle = "Recommended Enhancements to Strengthen Your Signature Energy",
  overallRecommendation = "Your current signature possesses positive qualities; however, a few refinements can significantly improve authority, financial attraction, leadership presence, and public recognition.",
  improvements = defaultImprovements,
  benefitsIntro = "After implementing these improvements:",
  benefitsLeft = defaultBenefitsLeft,
  benefitsRight = defaultBenefitsRight,
  expertRecommendation = "Small structural changes in a signature can create a stronger visual impression and reinforce qualities such as confidence, authority, leadership, and professional success. Consistency in using the improved signature is equally important for long-term results.",
}: SignatureImprovementProps) {
  return (
    <SignatureReportPageShell padding="18px 36px 22px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center">
        <PenLine size={32} strokeWidth={1.25} className="mb-1.5" style={{ color: COLORS.gold }} />
        <h1
          className="max-w-[620px] text-[26px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <p
          className="mt-0.5 max-w-[520px] text-[13px] italic font-nunito-sans"
          style={{ color: COLORS.black, opacity: 0.85 }}
        >
          {subtitle}
        </p>
        <HeaderDivider />
      </header>

      <OverallRecommendationSection text={overallRecommendation} />

      <SuggestedImprovementsSection improvements={improvements} />

      <ExpectedBenefitsSection
        intro={benefitsIntro}
        leftItems={benefitsLeft}
        rightItems={benefitsRight}
      />

      <ExpertRecommendationFooter text={expertRecommendation} />
    </SignatureReportPageShell>
  );
}
