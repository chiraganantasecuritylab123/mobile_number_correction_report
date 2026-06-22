import {
    BookOpen,
    Circle,
    Compass,
    Eye,
    Flower2,
    LayoutGrid,
    Puzzle,
    Ruler,
    Scale,
    Shield,
    Star,
    Target,
    Trophy,
    TrendingUp,
    User,
    type LucideIcon,
  } from "lucide-react";
  import type { ReactNode } from "react";
  import { CoverLotus } from "../CommunComponents";
  import SignatureReportPageShell, { REPORT_COLORS } from "./SignatureReportPageShell";
  import Image from "next/image";
  
  export type StructureCardType =
    | "signatureSize"
    | "signatureLength"
    | "nameBalance"
    | "legibilityLevel"
    | "complexityIndex"
    | "strokeConsistency";
  
  export type StructureAnalysisCard = {
    title: string;
    valueLabel: string;
    description?: string;
    type: StructureCardType;
    // nameBalance
    firstNamePercent?: number;
    surnamePercent?: number;
    // legibilityLevel / strokeConsistency donut
    donutPercent?: number;
    donutLabel?: string;
    // complexityIndex blocks
    filledBlocks?: number;
    totalBlocks?: number;
    complexityScore?: string; // e.g. "4 / 5"
  };
  
  export type StructureAttribute = {
    label: string;
    icon: LucideIcon;
  };
  
  export type SignatureStructureAnalysisProps = {
    pageNumber?: string;
    title?: string;
    subtitle?: string;
    structureScore?: number;
    maxScore?: number;
    structureLabel?: string;
    summaryText?: string;
    cards?: StructureAnalysisCard[];
    completenessTitle?: string;
    completenessRating?: number;
    completenessMaxRating?: number;
    completenessScore?: string;
    completenessText?: string;
    expertObservation?: string;
    attributes?: StructureAttribute[];
  };
  
  const COLORS = REPORT_COLORS;
  
  // ─── defaults ────────────────────────────────────────────────────────────────
  
  const defaultCards: StructureAnalysisCard[] = [
    {
      title: "SIGNATURE SIZE",
      valueLabel: "Large",
      description:
        "Large signatures often indicate self-belief, visibility, leadership tendencies, and a desire to make a meaningful impact.",
      type: "signatureSize",
    },
    {
      title: "SIGNATURE LENGTH",
      valueLabel: "Medium to Long",
      description:
        "A longer signature generally reflects detailed thinking, planning ability, and a tendency to consider future consequences before action.",
      type: "signatureLength",
    },
    {
      title: "FIRST NAME vs SURNAME BALANCE",
      valueLabel: "",
      description:
        "Shows stronger focus on personal identity, individuality, and self-created achievements.",
      type: "nameBalance",
      firstNamePercent: 65,
      surnamePercent: 35,
    },
    {
      title: "LEGIBILITY LEVEL",
      valueLabel: "Highly Readable",
      description:
        "Indicates transparency, straightforward communication, and an authentic personality.",
      type: "legibilityLevel",
      donutPercent: 82,
      donutLabel: "82%",
    },
    {
      title: "COMPLEXITY INDEX",
      valueLabel: "Advanced",
      description:
        "Suggests a multi-layered personality, strategic thinking, and intellectual depth.",
      type: "complexityIndex",
      filledBlocks: 4,
      totalBlocks: 5,
      complexityScore: "4 / 5",
    },
    {
      title: "STROKE CONSISTENCY",
      valueLabel: "Excellent",
      description:
        "Demonstrates emotional stability, discipline, and consistency in decision-making.",
      type: "strokeConsistency",
      donutPercent: 91,
      donutLabel: "91%",
    },
  ];

  
  
  const defaultAttributes: StructureAttribute[] = [
    { label: "Confidence", icon: Shield },
    { label: "Identity", icon: User },
    { label: "Discipline", icon: Target },
    { label: "Authority", icon: Trophy },
    { label: "Focus", icon: Eye },
    { label: "Recognition", icon: Star },
    { label: "Growth", icon: TrendingUp },
  ];
  
  // ─── small shared pieces ──────────────────────────────────────────────────────
  
  function OrnamentalDivider() {
    return (
      <div className="flex w-full items-center gap-1">
        <div className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
        <span className="text-[6px] leading-none" style={{ color: COLORS.gold }}>
          ◆
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: COLORS.gold, opacity: 0.55 }} />
      </div>
    );
  }
  
  function SimpleDivider() {
    return (
      <div
        className="my-1 h-px w-full"
        style={{ backgroundColor: COLORS.gold, opacity: 0.45 }}
      />
    );
  }
  
  function StarRating({ count, max = 7 }: { count: number; max?: number }) {
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={`str-${i}`}
            size={14}
            fill={i < count ? COLORS.gold : "transparent"}
            stroke={COLORS.gold}
            aria-hidden
          />
        ))}
      </div>
    );
  }
  



  function ScoreRing({
    score,
    maxScore,
    starRating,
    personalityLabel,
  }: {
    score: number;
    maxScore: number;
    starRating: number;
    personalityLabel: string;
  }) {
    return (
      <section className="relative z-10 flex justify-center font-nunito-sans">
        <div
          className="flex items-center justify-center px-8 py-5 ml-8"
          style={{
            backgroundImage: "url('/assets/signatureReport/roundCircleImage.png')",
            backgroundSize: "cover",
            height: "190px",
            width: "395px",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center text-center mr-7">
          <p className="text-[9px] font-bold tracking-[0.12em]" style={{ color: COLORS.gold }}>
                SIGNATURE
              </p>
              <p className="text-[9px] font-bold tracking-[0.12em]" style={{ color: COLORS.gold }}>
                STRUCTURE SCORE
              </p>
            <p
              className="mt-0.5 text-[28px] font-bold leading-none"
              style={{ color: COLORS.brown }}
            >
              {score} / {maxScore}
            </p>

            <OrnamentDivider width={120} lotusSize={0} />
            {/* <p
              className="mt-1 text-[12px] font-semibold"
              style={{ color: COLORS.brown }}
            >
              {personalityLabel}
            </p> */}

<p className="text-[9px] font-bold tracking-[0.12em]" style={{ color: COLORS.gold }}>
                STRONG & INFLUENTIAL
              </p>
          </div>
        </div>
      </section>
    );
  }
  
  // ─── card-type icons ──────────────────────────────────────────────────────────
  
  function CardTypeIcon({ type }: { type: StructureCardType }) {
    const s = { color: COLORS.brown, flexShrink: 0 };
    const sz = 22;
    const map: Record<StructureCardType, ReactNode> = {
      signatureSize: <LayoutGrid size={sz} strokeWidth={1.25} style={s} aria-hidden />,
      signatureLength: <Ruler size={sz} strokeWidth={1.25} style={s} aria-hidden />,
      nameBalance: <Scale size={sz} strokeWidth={1.25} style={s} aria-hidden />,
      legibilityLevel: <Eye size={sz} strokeWidth={1.25} style={s} aria-hidden />,
      complexityIndex: <Puzzle size={sz} strokeWidth={1.25} style={s} aria-hidden />,
      strokeConsistency: <BookOpen size={sz} strokeWidth={1.25} style={s} aria-hidden />,
    };
    return <>{map[type]}</>;
  }
  
  // ─── card visuals ─────────────────────────────────────────────────────────────
  
  function LabeledProgressBar({ label, percent }: { label: string; percent: number }) {
    return (
      <div className="w-full">
        <div className="mb-0.5 flex items-center justify-between text-[8px] font-bold">
          <span style={{ color: COLORS.brown }}>{label}</span>
          <span style={{ color: COLORS.brown }}>{percent}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "#f2e4d4" }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${percent}%`, backgroundColor: COLORS.brown }}
          />
        </div>
      </div>
    );
  }
  
  function SmallDonut({ percent, label }: { percent: number; label: string }) {
    const r = 24;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - percent / 100);
    return (
      <div className="relative flex h-[58px] w-[58px] items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="32" cy="32" r={r} fill="none" stroke="#f2e4d4" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke={COLORS.brown}
            strokeWidth="5"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span
          className="absolute text-[11px] font-bold leading-none"
          style={{ color: COLORS.brown }}
        >
          {label}
        </span>
      </div>
    );
  }
  
  function DotBlocks({ filled, total = 5 }: { filled: number; total?: number }) {
    return (
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className="h-3.5 w-3.5 rounded-full"
            style={{
              backgroundColor: i < filled ? COLORS.brown : "#e8d8c5",
            }}
          />
        ))}
      </div>
    );
  }
  
  function CardVisual({ card }: { card: StructureAnalysisCard }) {
    if (card.type === "nameBalance") {
      return (
        <div className="flex w-full flex-col gap-1.5 px-1">
          <LabeledProgressBar label="First Name" percent={card.firstNamePercent ?? 65} />
          <LabeledProgressBar label="Surname" percent={card.surnamePercent ?? 35} />
        </div>
      );
    }
    if (card.type === "legibilityLevel" || card.type === "strokeConsistency") {
      return <SmallDonut percent={card.donutPercent ?? 82} label={card.donutLabel ?? ""} />;
    }
    if (card.type === "complexityIndex") {
      return (
        <div className="flex flex-col items-center gap-1">
          <DotBlocks filled={card.filledBlocks ?? 4} total={card.totalBlocks ?? 5} />
          <p className="text-[13px] font-bold" style={{ color: COLORS.brown }}>
            {card.complexityScore ?? "4 / 5"}
          </p>
        </div>
      );
    }
    return null;
  }
  
  // ─── single analysis card ─────────────────────────────────────────────────────
  
  function AnalysisCard({ index, card }: { index: number; card: StructureAnalysisCard }) {
    const hasVisual =
      card.type === "nameBalance" ||
      card.type === "legibilityLevel" ||
      card.type === "strokeConsistency" ||
      card.type === "complexityIndex";
  
    return (
      <div className="relative flex h-[205px] w-[245px] flex-col bg-[url('/assets/signatureReport/card-bg.png')] bg-cover bg-center bg-no-repeat">
        {/* number badge */}
        {/* <span className="absolute left-1/2 top-[8px] z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-[35%] items-center justify-center rounded-full text-[11px] font-bold">
          {String(index).padStart(2, "0")}
        </span> */}

        <span className="absolute left-1/2 top-[12px] z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-[35%] items-center justify-center rounded-full text-[11px] font-bold text-white"
      style={{ backgroundColor: COLORS.brown }}
      >
        {String(index).padStart(2, "0")}
      </span>
  
        <div className="flex h-full flex-col justify-start px-8 pb-2.5 pt-5 font-nunito-sans">
          {/* icon + title */}
          <div className="flex items-center justify-center gap-1 px-2 py-1 mt-2">
            <CardTypeIcon type={card.type} />
            <p
              className="text-left text-[11px] font-bold leading-tight tracking-[0.04em]"
              style={{ color: COLORS.brown }}
            >
              {card.title}
            </p>
          </div>
  
          <OrnamentDivider width={180} lotusSize={0} />
  
          {card.valueLabel ? (
            <p className="text-center text-[14px] font-bold leading-tight" style={{ color: COLORS.brown }}>
              {card.valueLabel}
            </p>
          ) : null}
  
          {hasVisual ? (
            <div className=" flex flex-1 flex-col items-center justify-center">
              <CardVisual card={card} />
            </div>
          ) : (
            // <SimpleDivider />
            null
          )}
  
          {card.description ? (
            <p
              className=" px-1 text-center text-[10px] leading-snug mb-1.5"
              style={{ color: COLORS.black }}
            >
              {card.description}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
  
  // ─── completeness section ─────────────────────────────────────────────────────
  



  function CompletenessSection({
    title,
    rating,
    maxRating,
    score,
    text,
  }: {
    title: string;
    rating: number;
    maxRating: number;
    score: string;
    text: string;
  }) {
    return (
      <section className="relative z-10 flex justify-center font-nunito-sans">
        <div
          className="relative flex min-h-[120px] w-full items-center justify-between "
          style={{
            backgroundImage:
              "url('/assets/signatureReport/foooter-background.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left Lotus */}
          <div className="flex items-center justify-center">
            <CoverLotus
              size={65}
              className="opacity-90"
            />
          </div>
  
          {/* Center Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
            {/* Title */}
            <h2
              className="text-[12px] font-bold uppercase tracking-[0.08em]"
              style={{ color: COLORS.brown }}
            >
              {title}
            </h2>
  
            {/* Rating Row */}
            <div className="mt-2 flex items-center justify-center gap-4">
              <span
                className="text-[12px] font-semibold "
                style={{ color: COLORS.brown }}
              >
                OVERALL RATING
              </span>
  
              <StarRating count={rating} max={maxRating} />
  
              <span
                className="text-[12px] font-light"
                style={{ color: COLORS.brown }}
              >
                |
              </span>
  
              <span
                className="text-[12px] font-bold"
                style={{ color: COLORS.brown }}
              >
                {score}
              </span>
            </div>
  
            {/* Description */}
            <p
              className=" max-w-[700px] text-center text-[12px] leading-relaxed"
              style={{
                color: COLORS.black,
              }}
            >
              {text}
            </p>
          </div>
  
          {/* Right Lotus */}
          <div className="flex items-center justify-center">
            <CoverLotus
              size={65}
              className="opacity-90"
            />
          </div>
        </div>
      </section>
    );
  }
  
  // ─── expert observation footer ────────────────────────────────────────────────
  
  function ExpertObservationFooter({ observation }: { observation: string }) {
    return (
      <footer className="relative z-10  font-nunito-sans">
        <div
          className="flex min-h-[108px] w-full items-center gap-3 bg-no-repeat px-5 py-4"
          style={{
            backgroundImage: "url('/assets/signatureReport/redBackgroundImage.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <div
            className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
            style={{ border: `1.5px solid ${COLORS.goldLight}` }}
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
              EXPERT GRAPHOLOGY OBSERVATION
            </p>
            <p
              className="mt-1 text-[10px] leading-relaxed"
              style={{ color: COLORS.cream, opacity: 0.95 }}
            >
              {observation}
            </p>
          </div>
  
          {/* <Compass
            size={56}
            strokeWidth={1}
            className="shrink-0"
            style={{ color: COLORS.goldLight }}
            aria-hidden
          /> */}
        </div>
      </footer>
    );
  }
  
  // ─── attribute pills ──────────────────────────────────────────────────────────
  
  function AttributeIcon({ attribute }: { attribute: StructureAttribute }) {
    const Icon = attribute.icon;
    return <Icon size={12} strokeWidth={1.25} style={{ color: COLORS.gold }} />;
  }
  
  function AttributePills({ attributes }: { attributes: StructureAttribute[] }) {
    return (
      <section className="relative z-10 mt-2 flex flex-wrap items-center justify-center gap-2 px-1 font-nunito-sans">
        {attributes.map((a) => (
          <div
            key={a.label}
            className="flex items-center gap-1 rounded-full px-2.5 py-1"
            style={{ backgroundColor: COLORS.cream, border: `1px solid ${COLORS.gold}` }}
          >
            <AttributeIcon attribute={a} />
            <span className="text-[9px] font-semibold" style={{ color: COLORS.brown }}>
              {a.label}
            </span>
          </div>
        ))}
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

  function OrnamentDivider({ width = 220, lotusSize = 0 }: { width?: number; lotusSize?: number }) {
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
  
  // ─── main export ──────────────────────────────────────────────────────────────
  
  export default function SignatureStructureAnalysis({
    pageNumber = "03",
    title = "SIGNATURE STRUCTURE ANALYSIS",
    subtitle = "Decoding the Architectural Framework of Your Signature",
    structureScore = 86,
    maxScore = 100,
    structureLabel = "STRONG & INFLUENTIAL",
    summaryText = "Your signature demonstrates a balanced blend of confidence, ambition, and personal identity.",
    cards = defaultCards,
    completenessTitle = "SIGNATURE COMPLETENESS",
    completenessRating = 6,
    completenessMaxRating = 7,
    completenessScore = "9 / 10",
    completenessText = "Your signature contains most of the structural elements associated with confidence, professional growth, and personal authority.",
    expertObservation = "The overall structure of the signature reflects how the individual presents themselves to the world. The balance of size, proportion, clarity, and consistency suggests a personality that values growth, recognition, and purposeful action.",
    attributes = defaultAttributes,
  }: SignatureStructureAnalysisProps) {
    return (
      <SignatureReportPageShell padding="20px 40px 24px" pageNumber={pageNumber}>
  
        {/* header */}
        <header className="flex flex-col items-center text-center">
          <Image
            src="/assets/signatureReport/logo-main.png"
            alt="Astro Aarambh"
            width={110}
            height={110}
            // className="mb-1"
            priority
          />
          <h1
            className="max-w-[620px] text-[25px] font-bold leading-tight tracking-[0.06em]"
            style={{ color: COLORS.brown }}
          >
            {title}
          </h1>
          <p
            className=" max-w-[520px] text-[12px] font-nunito-sans"
            style={{ color: COLORS.black, opacity: 0.85 }}
          >
            {subtitle}
          </p>


          <div className="mt-0 ">
          <OrnamentDivider width={220} lotusSize={0} />
        </div>
        </header>
  
        <div className="font-nunito-sans">
          {/* score ring */}
          <ScoreRing score={structureScore} maxScore={maxScore} label={structureLabel} />
  
          {/* summary */}
          <p
            className="relative z-10  text-center text-[12px] italic"
            style={{ color: COLORS.black}}
          >
            {summaryText}

            
          </p>
{/* 
          <div className=" flex flex-col items-center text-center">
          <OrnamentDivider width={220} lotusSize={0} />
        </div> */}
          

  
          {/* 6-card grid */}
          <section className="relative z-10  grid grid-cols-3 place-items-center">
            {cards.map((card, i) => (
              <AnalysisCard key={`${card.title}-${i}`} index={i + 1} card={card} />
            ))}
          </section>
  
          {/* completeness */}
          <CompletenessSection
            title={completenessTitle}
            rating={completenessRating}
            maxRating={completenessMaxRating}
            score={completenessScore}
            text={completenessText}
          />
  
          {/* expert observation */}
          <ExpertObservationFooter observation={expertObservation} />
  
          {/* attribute pills */}
          <AttributePills attributes={attributes} />
        </div>
      </SignatureReportPageShell>
    );
  }