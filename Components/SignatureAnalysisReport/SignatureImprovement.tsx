import Image from "next/image";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
import { Pattern3, SubtitleHeader } from "../CommunComponents";

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

function OrnateLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-0.5">
      <Pattern3 size={42} />
      <span
        className="font-bold tracking-[0.1em]"
        style={{
          color: COLORS.brown,
          fontSize: 14,
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
        style={{ color: COLORS.gold, top: -5 }}
      >◆</span>
      <span
        className="absolute left-1/2 -translate-x-1/2 text-[6px] leading-none"
        style={{ color: COLORS.gold, bottom: -5 }}
      >◆</span>
      <span
        className="absolute top-1/2 -translate-y-1/2 text-[6px] leading-none"
        style={{ color: COLORS.gold, left: -5 }}
      >◆</span>
      <span
        className="absolute top-1/2 -translate-y-1/2 text-[6px] leading-none"
        style={{ color: COLORS.gold, right: -5 }}
      >◆</span>
      <div
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #4a1a0a 0%, #2a0c02 60%, #1a0800 100%)",
          border: `2px solid ${COLORS.gold}`,
          boxShadow: `0 0 0 1px rgba(197,160,89,0.3), inset 0 1px 3px rgba(255,200,100,0.15)`,
        }}
      >
        <span
          style={{
            color: COLORS.cream,
            fontSize: 19,
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
          borderRight: `1px solid ${COLORS.gold}`,
          marginRight: 12,
        }}
      >
        <p
          className="font-bold leading-tight"
          style={{
            color: COLORS.brown,
            fontSize: 13,
          }}
        >
          {item.title}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-0.5">
        {item.points.map((point, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-[10px] leading-none"
              style={{ color: COLORS.brown }}
            >●</span>
            <p
              className="text-[12px] font-nunito-sans"
              style={{ color: COLORS.black }}
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
        className="mt-1.5 max-w-[90%] text-center leading-relaxed font-nunito-sans"
        style={{
          color: COLORS.black,
          fontSize: 14,
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
        className="mt-1 text-center font-nunito-sans"
        style={{
          color: COLORS.black,
          fontSize: 13,
        }}
      >
        After implementing these improvements:
      </p>

      <div className="mt-2 flex gap-3">
        <div className="flex flex-1 flex-col gap-1">
          {left.map((b, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span
                style={{
                  color: COLORS.black,
                  fontSize: 10,
                  lineHeight: "15px",
                  flexShrink: 0,
                }}
              >●</span>
              <p
                className="font-nunito-sans text-[13px] tracking-[0.1em]"
                style={{ color: COLORS.black }}
              >
                {b}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            width: 1,
            backgroundColor: COLORS.black,
            opacity: 0.4,
            alignSelf: "stretch",
          }}
        />

        <div className="flex flex-1 flex-col gap-1">
          {right.map((b, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span
                style={{
                  color: COLORS.black,
                  fontSize: 10,
                  lineHeight: "15px",
                  flexShrink: 0,
                }}
              >●</span>
              <p
                className="font-nunito-sans text-[13px] tracking-[0.1em]"
                style={{ color: COLORS.black }}
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

function ExpertObservationFooter({ observation }: { observation: string }) {
  return (
    <footer className="relative z-10 font-nunito-sans">
      <div
        className="flex min-h-[100px] w-full items-center gap-3 bg-no-repeat px-5 py-2"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-3 px-1">

          <Image src="/assets/signatureReport/pen-bg.png" alt="Design Background" width={65} height={65} className="object-contain" />

          <div className="min-w-0 flex-1">
            <p
              className="text-[13px] font-bold tracking-[0.1em]"
              style={{ color: COLORS.goldLight }}
            >
              EXPERT RECOMMENDATION
            </p>
            <p
              className="text-[12px]"
              style={{ color: COLORS.cream, opacity: 0.95 }}
            >
              {observation}
            </p>
          </div>

          <Image
            src="/assets/signatureReport/design-bg.png"
            alt=""
            width={120}
            height={64}
            className="shrink-0 object-contain mix-blend-screen"
            aria-hidden
          />
        </div>
      </div>
    </footer>
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
          }}
        >
          {title}
        </h1>

        <SubtitleHeader text={subtitle} />

      </header>

      <section className="relative z-10 mt-1">
        <OverallRecommendation text={overallRecommendation} />
      </section>

      <div className="mt-1 flex items-center justify-center gap-2">
        <OrnateLabel text="SUGGESTED IMPROVEMENTS" />
      </div>

      <section className="relative z-10 mt-1 flex flex-col gap-1">
        {improvements.map((item, index) => (
          <ImprovementRow key={item.title} index={index + 1} item={item} />
        ))}
      </section>

      <section className="relative z-10">
        <ExpectedBenefits benefits={benefits} />
      </section>

      <section className="relative z-10">
        <ExpertObservationFooter observation={expertRecommendation} />
      </section>
    </SignatureReportPageShell>
  );
}