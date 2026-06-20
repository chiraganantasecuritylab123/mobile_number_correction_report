import {
  Circle,
  Feather,
  Link2,
  PenLine,
  Slash,
  Sparkles,
  Star,
  Triangle,
  User,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { CoverLotus } from "../CommunComponents";
import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";

export type WritingStyleIcon =
  | "pen"
  | "link"
  | "shapes"
  | "sparkles"
  | "penStroke"
  | "person";

export type WritingStyleCard = {
  title: string;
  valueLabel: string;
  icon: WritingStyleIcon;
  description: string;
};

export type WritingStyleAnalysisProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  cards?: WritingStyleCard[];
  overallWritingStyleInsight?: string;
  expertGraphologyInsight?: string;
};

const COLORS = REPORT_COLORS;

const BODY_SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";

const defaultCards: WritingStyleCard[] = [
  {
    title: "CURSIVE vs PRINT STYLE",
    valueLabel: "Cursive Style",
    icon: "pen",
    description:
      "Cursive writing suggests fluid thinking, adaptability, and a natural ability to connect ideas.",
  },
  {
    title: "CONNECTED vs DISCONNECTED LETTERS",
    valueLabel: "Mostly Connected",
    icon: "link",
    description:
      "Connected letters indicate logical thinking, continuity in thought processes, and strong focus.",
  },
  {
    title: "ROUNDED vs ANGULAR STROKES",
    valueLabel: "Balanced (Rounded + Angular)",
    icon: "shapes",
    description:
      "A balance of rounded and angular strokes reflects both creativity and determination in decision-making.",
  },
  {
    title: "DECORATIVE ELEMENTS",
    valueLabel: "Moderate",
    icon: "sparkles",
    description:
      "Moderate use of embellishments shows a desire for recognition, creativity, and an expressive personality.",
  },
  {
    title: "ABBREVIATIONS USED",
    valueLabel: "Minimal",
    icon: "penStroke",
    description:
      "Minimal abbreviations suggest clarity in communication and a preference for being direct and authentic.",
  },
  {
    title: "INITIALS vs FULL NAME",
    valueLabel: "Full Name",
    icon: "person",
    description:
      "Using the full name indicates openness, confidence, and a willingness to take full responsibility.",
  },
];

function CardTitleDivider() {
  return (
    <div className="my-1.5 flex w-[72px] items-center justify-center">
      <div className="flex flex-1 items-center">
        <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.7 }} />
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ border: `1px solid ${COLORS.gold}` }}
        />
      </div>
      <div className="mx-1 flex gap-[2px]">
        <span className="h-3 w-px" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
        <span className="h-3 w-px" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      </div>
      <div className="flex flex-1 items-center">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: COLORS.gold }}
        />
        <span className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.7 }} />
      </div>
    </div>
  );
}

function CardIconGraphic({ icon }: { icon: WritingStyleIcon }) {
  const iconStyle = { color: COLORS.brown };

  const graphics: Record<WritingStyleIcon, ReactNode> = {
    pen: <PenLine size={28} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    link: <Link2 size={28} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    shapes: (
      <div className="flex items-center gap-0" aria-hidden>
        <Circle size={19} strokeWidth={1.25} style={iconStyle} />
        <Slash size={19} strokeWidth={1.25} style={iconStyle} className="rotate-145 ml-[-5px]"/>
        <Triangle size={19} strokeWidth={1.25} style={iconStyle} className="ml-[-5px]"/>
      </div>
    ),
    sparkles: <Sparkles size={28} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    penStroke: <PenLine size={28} strokeWidth={1.25} style={iconStyle} aria-hidden />,
    person: <UserRound size={28} strokeWidth={1.25} style={iconStyle} aria-hidden />,
  };

  return (
    <div
      className="flex h-[55px] w-[55px] items-center justify-center rounded-full"
      style={{
        border: `1.5px dashed ${COLORS.gold}`,
      }}
    >
      {graphics[icon]}
    </div>
  );
}

function AnalysisCard({
  index,
  card,
}: {
  index: number;
  card: WritingStyleCard;
}) {
  return (
    <div
      className="relative flex h-[300px] w-[230px] min-h-[200px] flex-col items-center bg-[url('/assets/signatureReport/cardBackground.png')] bg-cover bg-center bg-no-repeat text-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-4">
        <span
          className="absolute left-1/2 top-[5px] flex h-7 w-6 -translate-x-1/2 items-center justify-center text-[11px] font-bold"
          style={{ color: COLORS.cream }}
        >
          {String(index).padStart(2, "0")}
        </span>

        <CardIconGraphic icon={card.icon} />

        <p
          className="px-0.5 text-[13px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {card.title}
        </p>

        <div
          className="rounded-full px-1 py-0.5 min-w-[120px]"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.gold}`,
          }}
        >
          <span
            className="text-[11px] font-semibold tracking-wide"
            style={{ color: COLORS.brown, fontFamily: BODY_SANS }}
          >
            {card.valueLabel}
          </span>
        </div>

        {/* <CardTitleDivider /> */}

        <p
          className="px-2 text-[12px] leading-snug"
          style={{ color: COLORS.black, opacity: 0.82, fontFamily: BODY_SANS }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

function OverallInsightDivider() {
  return (
    <div className="mt-1 flex w-full max-w-[320px] items-center justify-center gap-2">
      <span
        className="h-px flex-1"
        style={{ backgroundColor: COLORS.gold, opacity: 0.55 }}
      />
      <span className="text-[11px] leading-none" style={{ color: COLORS.gold }}>
        ✦
      </span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: COLORS.gold, opacity: 0.55 }}
      />
    </div>
  );
}

function OverallWritingStyleInsightSection({ insight }: { insight: string }) {
  return (
    <section className="relative z-10 mt-1 flex justify-center">
      <div
        className="flex min-h-[100px] w-full items-center bg-no-repeat px-6 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <CoverLotus size={80} className="shrink-0" />

        <div className="flex min-w-0 flex-1 flex-col items-center px-5">
          <p
            className="text-[14px] font-bold tracking-[0.12em]"
            style={{ color: COLORS.brown }}
          >
            OVERALL WRITING STYLE INSIGHT
          </p>
          <OverallInsightDivider />
          <p
            className="mt-1 max-w-[520px] text-center text-[11px] leading-relaxed"
            style={{ color: COLORS.black, opacity: 0.88, fontFamily: BODY_SANS }}
          >
            {insight}
          </p>
        </div>

        <CoverLotus size={80} className="shrink-0" />
      </div>
    </section>
  );
}

function HeaderDivider() {
  return (
    <div className="mt-1 flex w-full items-center justify-center gap-2">
      <span className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: COLORS.gold, opacity: 0.45 }} />
      <span className="text-[10px]" style={{ color: COLORS.gold }}>
        ✦
      </span>
      <span className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: COLORS.gold, opacity: 0.45 }} />
    </div>
  );
}

function ExpertGraphologyFooterSection({ insight }: { insight: string }) {
  return (
    <footer className="relative z-10 mt-1">
      <div
        className="flex min-h-[108px] w-full items-center gap-4 bg-no-repeat px-6 py-4"
        style={{
          backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
          style={{
            border: `1.5px solid ${COLORS.goldLight}`,
            backgroundColor: "transparent",
          }}
        >
          <User size={24} strokeWidth={1.25} style={{ color: COLORS.goldLight }} />
          <Star
            size={11}
            fill={COLORS.goldLight}
            stroke={COLORS.goldLight}
            className="absolute right-2 bottom-2"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="text-[12px] font-bold tracking-[0.1em]"
            style={{ color: COLORS.goldLight }}
          >
            EXPERT GRAPHOLOGY INSIGHT
          </p>
          <p
            className="mt-1.5 text-[10px] leading-relaxed"
            style={{ color: COLORS.cream, fontFamily: BODY_SANS, opacity: 0.95 }}
          >
            {insight}
          </p>
        </div>

        <Image
          src="/assets/signatureReport/footer-image.png"
          alt=""
          width={118}
          height={72}
          className="shrink-0 object-contain mix-blend-screen"
          aria-hidden
        />
      </div>
    </footer>
  );
}

export default function WritingStyleAnalysis({
  pageNumber = "04",
  title = "WRITING STYLE ANALYSIS",
  subtitle = "Exploring The Unique Style of Your Signature Expression",
  cards = defaultCards,
  overallWritingStyleInsight = "Your writing style reflects a harmonious blend of logic, creativity, and self-expression, showing a confident and well-balanced personality.",
  expertGraphologyInsight = "The style of your signature reveals how you naturally express thoughts, emotions, and intentions. It reflects your individuality, adaptability, and approach towards relationships and opportunities.",
}: WritingStyleAnalysisProps) {
  return (
    <SignatureReportPageShell padding="20px 40px 28px" pageNumber={pageNumber}>
      <header className="flex flex-col items-center text-center">
        <Image
          src="/assets/signatureReport/logo-main.png"
          alt="Astro Aarambh"
          width={110}
          height={110}
          className="mb-1"
          priority
        />
        <h1
          className="max-w-[620px] text-[32px] font-bold leading-tight tracking-[0.06em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h1>
        <p
          className="mt-0.5 max-w-[520px] text-[17px]"
          style={{ color: COLORS.black, opacity: 0.85, fontFamily: BODY_SANS }}
        >
          {subtitle}
        </p>
        <HeaderDivider />
      </header>

      <section className="relative z-10 mt-1 grid grid-cols-3">
        {cards.map((card, index) => (
          <AnalysisCard key={`${card.title}-${index}`} index={index + 1} card={card} />
        ))}
      </section>

      <OverallWritingStyleInsightSection insight={overallWritingStyleInsight} />

      <ExpertGraphologyFooterSection insight={expertGraphologyInsight} />
    </SignatureReportPageShell>
  );
}
