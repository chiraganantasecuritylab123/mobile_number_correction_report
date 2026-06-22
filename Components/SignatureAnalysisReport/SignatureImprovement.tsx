import Image from "next/image";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import { Pattern3 } from "../CommunComponents";

export type ImprovementItem = {
  title: string;
  points: string[];
};

export type SignatureImprovementProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  overallRecommendation?: string;
  improvements?: ImprovementItem[];
  benefits?: string[];
  expertRecommendation?: string;
};

const COLORS = REPORT_COLORS;
const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif, Georgia, serif";
const CARD_GOLD = "#C5A059";

const ROW_BG = {
  backgroundImage: "url('/assets/signaturePages/foooter-background.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
} as const;

const defaultImprovements: ImprovementItem[] = [
  {
    title: "INCREASE AUTHORITY",
    points: [
      "Make the first letter slightly larger and more prominent.",
      "Maintain a confident upward movement at the beginning.",
      "Avoid weak or broken opening strokes.",
    ],
  },
  {
    title: "IMPROVE CONFIDENCE PROJECTION",
    points: [
      "Ensure the signature moves slightly upward rather than downward.",
      "Keep the writing flow continuous and decisive.",
      "Reduce hesitation marks and unnecessary pauses.",
    ],
  },
  {
    title: "IMPROVE WEALTH SYMBOLISM",
    points: [
      "Extend the ending stroke gently forward.",
      "Avoid cutting the signature abruptly.",
      "Maintain smooth and progressive line movement.",
    ],
  },
  {
    title: "STRENGTHEN LEADERSHIP ENERGY",
    points: [
      "Increase overall signature visibility.",
      "Use stronger stroke pressure where comfortable.",
      "Maintain a clear and recognizable identity pattern.",
    ],
  },
  {
    title: "IMPROVE BUSINESS APPEAL",
    points: [
      "Keep the signature balanced and professional.",
      "Avoid excessive decorations or complexity.",
      "Focus on clarity and consistency.",
    ],
  },
  {
    title: "IMPROVE PUBLIC IMAGE",
    points: [
      "Create a distinctive but readable style.",
      "Ensure the signature looks confident on documents.",
      "Maintain uniformity across all signatures.",
    ],
  },
  {
    title: "IMPROVE PERSONAL BRANDING",
    points: [
      "Develop a signature that is unique and memorable.",
      "Preserve individuality while maintaining professionalism.",
      "Align the signature style with your career goals.",
    ],
  },
];

const defaultBenefits = [
  "Stronger Authority Presence",
  "Better Public Recognition",
  "Enhanced Leadership Energy",
  "Improved Wealth Attraction Symbolism",
  "Greater Professional Credibility",
  "Better Personal Branding",
  "Increased Confidence Projection",
  "Stronger Business Impression",
];

function OrnateLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2 py-0.5">
      <Pattern3 size={42} />
      <span
        className="font-bold tracking-[0.1em]"
        style={{
          color: light ? CARD_GOLD : COLORS.black,
          fontSize: 13,
          fontFamily: "Georgia",
        }}
      >

        {text}
      </span>
      <Pattern3 size={42} className="rotate-180" />
    </div>
  );
}

function NumberBadge({ index }: { index: number }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: 46, height: 46 }}
    >
      <span
        className="absolute left-1/2 -translate-x-1/2 text-[6px] leading-none"
        style={{ color: CARD_GOLD, top: -5 }}
      >◆</span>
      <span
        className="absolute left-1/2 -translate-x-1/2 text-[6px] leading-none"
        style={{ color: CARD_GOLD, bottom: -5 }}
      >◆</span>
      <span
        className="absolute top-1/2 -translate-y-1/2 text-[6px] leading-none"
        style={{ color: CARD_GOLD, left: -5 }}
      >◆</span>
      <span
        className="absolute top-1/2 -translate-y-1/2 text-[6px] leading-none"
        style={{ color: CARD_GOLD, right: -5 }}
      >◆</span>
      <div
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #4a1a0a 0%, #2a0c02 60%, #1a0800 100%)",
          border: `2px solid ${CARD_GOLD}`,
          boxShadow: `0 0 0 1px rgba(197,160,89,0.3), inset 0 1px 3px rgba(255,200,100,0.15)`,
        }}
      >
        <span
          style={{
            color: CARD_GOLD,
            fontFamily: "Georgia, serif",
            fontSize: 12,
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function ImprovementRow({ index, item }: { index: number; item: ImprovementItem }) {
  return (
    <div
      className="relative flex items-stretch"
      style={{
        ...ROW_BG,
        minHeight: 64,
        paddingLeft: 14,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      <div className="mr-3 flex shrink-0  items-center">
        <NumberBadge index={index} />
      </div>

      <div
        className="flex shrink-0 items-center justify-start pr-3"
        style={{
          width: 110,
          borderRight: `1px solid ${CARD_GOLD}`,
          marginRight: 12,
        }}
      >
        <p
          className="font-bold leading-tight tracking-[0.04em]"
          style={{
            color: COLORS.brown,
            fontFamily: "Georgia, serif",
            fontSize: 11,
          }}
        >
          {item.title}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-0.5">
        {item.points.map((point, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span
              style={{
                color: "000000",
                fontSize: 8,
                lineHeight: "16px",
                flexShrink: 0,
              }}
            >●</span>
            <p
              style={{
                color: COLORS.brown,
                fontFamily: "Georgia",
                fontSize: 12,
                lineHeight: 1.4,
              }} className="tracking-[0.1em]"
            >
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverallRecommendation({ text }: { text: string }) {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/assets/signaturePages/foooter-background.png')",
        backgroundSize: "90% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: 90,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 12,
      }}
    >
      <OrnateLabel text="OVERALL RECOMMENDATION" />
      <p
        className="mt-1.5 max-w-[90%] text-center leading-relaxed"
        style={{
          color: COLORS.brown,
          fontFamily: "Georgia",
          fontSize: 13,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function ExpectedBenefits({ benefits }: { benefits: string[] }) {
  const half = Math.ceil(benefits.length / 2);
  const left = benefits.slice(0, half);
  const right = benefits.slice(half);

  return (
    <div
      className="relative flex w-full flex-col"
      style={{
        ...ROW_BG,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 12,
      }}
    >
      <OrnateLabel text="EXPECTED BENEFITS" />
      <p
        className="mt-1 text-center"
        style={{
          color: COLORS.brown,
          fontSize: 12,
          fontFamily: "Georgia",
        }}
      >
        After implementing these improvements:
      </p>

      <div className="mt-2 flex gap-4">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-1">
          {left.map((b, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span
                style={{
                  color: CARD_GOLD,
                  fontSize: 9,
                  lineHeight: "15px",
                  flexShrink: 0,
                }}
              >●</span>
              <p
                style={{
                  color: COLORS.brown,
                  fontFamily: "Georgia",
                  fontSize: 12,
                  lineHeight: 1.4,
                }}
              >
                {b}
              </p>
            </div>
          ))}
        </div>

        {/* Center divider */}
        <div
          style={{
            width: 1,
            backgroundColor: CARD_GOLD,
            opacity: 0.4,
            alignSelf: "stretch",
          }}
        />

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-1">
          {right.map((b, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span
                style={{
                  color: CARD_GOLD,
                  fontSize: 9,
                  lineHeight: "15px",
                  flexShrink: 0,
                }}
              >●</span>
              <p
                style={{
                  color: COLORS.brown,
                  fontFamily: "Georgia",
                  fontSize: 12,
                  lineHeight: 1.4,
                }}
              >
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpertRecommendation({ text }: { text: string }) {
  return (
    <div
      className="relative flex w-full items-center gap-4"
      style={{
        backgroundImage: "url('/assets/signaturePages/redBackgroundImage.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: 90,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
      }}
    >
      {/* Pen icon circle */}


      {/* Text */}
      <div className="flex-1">
        <OrnateLabel text="EXPERT RECOMMENDATION" light />
        <p
          className="mt-1 leading-relaxed"
          style={{
            color: "#F5E6C8",
            fontFamily: BODY_SANS,
            fontSize: 12,
          }}
        >
          {text}
        </p>
      </div>

      {/* Decorative floral */}

    </div>
  );
}

export default function SignatureImprovement({
  pageNumber = "14",
  title = "SIGNATURE\nIMPROVEMENT SUGGESTIONS",
  subtitle = "Recommended Enhancements to Strengthen Your Signature Energy",
  overallRecommendation = "Your current signature possesses positive qualities; however, a few refinements can significantly improve authority, financial attraction, leadership presence, and public recognition.",
  improvements = defaultImprovements,
  benefits = defaultBenefits,
  expertRecommendation = "Small structural changes in a signature can create a stronger visual impression and reinforce qualities such as confidence, authority, leadership, and professional success. Consistency in using the improved signature is equally important for long-term results.",
}: SignatureImprovementProps) {
  return (
    <SignatureReportPageShell padding="14px 32px 12px" pageNumber={pageNumber}>
      {/* ── Header ── */}
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={48}
          height={48}
          className="mb-0.5"
          priority
        />
        <h1
          className="max-w-[620px] whitespace-pre-line font-bold leading-tight tracking-[0.06em]"
          style={{
            color: COLORS.brown,
            fontSize: 26,
            fontFamily: "Georgia, serif",
          }}
        >
          {title}
        </h1>

        <div className="mt-1 flex items-center gap-2">
          <Pattern3 size={42} />
          <p
            className="text-[16px] italic font-nunito-sans"
            style={{ color: COLORS.black, opacity: 0.85 }}
          >
            {subtitle}
          </p>
          <Pattern3 size={42} className="rotate-180" />
        </div>

      </header>

      {/* ── Overall Recommendation ── */}
      <section className="relative z-10 mt-2">
        <OverallRecommendation text={overallRecommendation} />
      </section>

      {/* ── Suggested Improvements label ── */}
      <div className="mt-2 flex items-center justify-center gap-2">
        {/* <span
          className="h-px flex-1"
          style={{ backgroundColor: CARD_GOLD, opacity: 0.4 }}
        /> */}
        <OrnateLabel text="SUGGESTED IMPROVEMENTS" />
        {/* <span
          className="h-px flex-1"
          style={{ backgroundColor: CARD_GOLD, opacity: 0.4 }}
        /> */}
      </div>

      {/* ── Improvement Rows ── */}
      <section className="relative z-10 mt-1 flex flex-col gap-1">
        {improvements.map((item, index) => (
          <ImprovementRow key={item.title} index={index + 1} item={item} />
        ))}
      </section>

      {/* ── Expected Benefits ── */}
      <section className="relative z-10 mt-2">
        <ExpectedBenefits benefits={benefits} />
      </section>

      {/* ── Expert Recommendation ── */}
      <section className="relative z-10 mt-2">
        <ExpertRecommendation text={expertRecommendation} />
      </section>
    </SignatureReportPageShell>
  );
}