import {
  ClipboardList,
  Flame,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type DisclaimerPoint = {
  id: number;
  icon: LucideIcon;
  content: ReactNode;
};

export type AdviceCardData = {
  id: number;
  title: string;
  icon: LucideIcon;
  accent: string;
  items: string[];
};

export type ClosingStatement = {
  paragraph: string;
  blessing: string;
};

export type DisclaimerAndAdvicePageProps = {
  disclaimerPoints?: DisclaimerPoint[];
  adviceCards?: AdviceCardData[];
  closing?: ClosingStatement;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;
const GOLD_BORDER = "1px solid rgba(184, 134, 11, 0.45)";

const ADVICE_ACCENTS = {
  green: COLORS.green,
  purple: "#7b5ea7",
  blue: "#3b6ea8",
  red: COLORS.red,
  teal: "#2a8a8a",
  orange: "#d48e31",
} as const;

const defaultDisclaimerPoints: DisclaimerPoint[] = [
  {
    id: 1,
    icon: Scale,
    content: (
      <>
        Numerology is a guidance tool based on ancient wisdom and vibrational science. It is{" "}
        <span className="font-bold" style={{ color: COLORS.red }}>
          not a substitute
        </span>{" "}
        for professional medical, legal, financial, or psychological advice.
      </>
    ),
  },
  {
    id: 2,
    icon: TrendingUp,
    content: (
      <>
        Results vary from person to person based on{" "}
        <span className="font-bold" style={{ color: COLORS.red }}>
          karma
        </span>
        ,{" "}
        <span className="font-bold" style={{ color: COLORS.red }}>
          efforts
        </span>
        , and{" "}
        <span className="font-bold" style={{ color: COLORS.red }}>
          free will
        </span>
        .
      </>
    ),
  },
  {
    id: 3,
    icon: ShieldCheck,
    content: (
      <>
        Astro Aarambh and the numerologist are{" "}
        <span className="font-bold" style={{ color: COLORS.red }}>
          not responsible
        </span>{" "}
        for any decisions taken based on this report.
      </>
    ),
  },
];

const defaultAdviceCards: AdviceCardData[] = [
  {
    id: 1,
    title: "KEY TAKEAWAYS",
    icon: ClipboardList,
    accent: ADVICE_ACCENTS.green,
    items: [
      "The new number will change your daily vibration slowly and steadily.",
      "Give it at least 3–6 months to see visible results in life areas.",
      "Combine with remedies, positive actions, and core number alignment for best effect.",
      "This correction is a support tool — your mindset and karma remain the key drivers.",
    ],
  },
  {
    id: 2,
    title: "BEST PRACTICES",
    icon: Smartphone,
    accent: ADVICE_ACCENTS.purple,
    items: [
      "Use the new number as your primary / active SIM for calls and important work.",
      "Avoid switching back to the old number unnecessarily.",
      "Save the correction details and refer when choosing other numbers (business, landline, etc.).",
      "Inform close family and business partners when possible.",
    ],
  },
  {
    id: 3,
    title: "MAINTAIN POSITIVE ENERGY OF YOUR NUMBER",
    icon: UserRound,
    accent: ADVICE_ACCENTS.blue,
    items: [
      "Always greet people politely when answering calls — positive tone attracts positive energy.",
      "Avoid using the number during anger, stress, or negative emotional states.",
      "Do not give this number to people or situations you feel are draining or toxic.",
      "Charge your phone with good intentions before first use (silently wish for success & peace).",
      "Keep the number active — long periods of non-use weakens its positive influence.",
    ],
  },
  {
    id: 4,
    title: "ACTIVATION RITUAL & AUSPICIOUS TIMING",
    icon: Flame,
    accent: ADVICE_ACCENTS.red,
    items: [
      "Start using the new number only on an auspicious date/time (Personal Year/Month support or muhurta).",
      "Before first call, hold the phone, close eyes, and mentally set your intention for success & harmony.",
      "Chant your birth mantra or universal mantra (Om) 11 times while looking at the new number.",
      "On activation day, make the first call to someone positive (family member, mentor, or partner).",
      "Avoid first use during Rahu Kaal, eclipse, or highly negative planetary periods (optional but recommended).",
    ],
  },
  {
    id: 5,
    title: "ENERGY SUPPORT TIPS",
    icon: Sparkles,
    accent: ADVICE_ACCENTS.teal,
    items: [
      "Keep phone wallpaper with your lucky colours or a positive affirmation.",
      "Save important contacts under names with positive vibrations.",
      "Avoid keeping the number in a wallet/purse with torn or dirty notes.",
      "Clean your phone screen regularly — clarity in device = clarity in energy flow.",
      "Carry or keep nearby a small crystal or rudraksha that supports your core numbers.",
    ],
  },
  {
    id: 6,
    title: "REMEMBER",
    icon: Target,
    accent: ADVICE_ACCENTS.orange,
    items: [
      "Your mobile number is like a daily companion – treat it with respect and positivity.",
      "Consistency and intention matter more than perfection.",
      "Even small positive changes in daily habits amplify the number's power.",
      "Stay open, patient, and grateful — the universe responds to alignment and effort.",
    ],
  },
];

const defaultClosing: ClosingStatement = {
  paragraph:
    "You are the creator of your destiny, and numbers are powerful tools that can support your journey. Use this guidance wisely, stay positive, and keep taking inspired action towards your goals.",
  blessing: "May this correction bring greater harmony and success in your life.",
};

function GoldDiamondDivider() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-px flex-1" style={{ borderTop: "1px solid rgba(184, 134, 11, 0.4)" }} />
      <span className="text-[9px]" style={{ color: COLORS.gold }}>
        ◆
      </span>
      <div className="h-px flex-1" style={{ borderTop: "1px solid rgba(184, 134, 11, 0.4)" }} />
    </div>
  );
}

function DisclaimerHeader({ style }: { style: React.CSSProperties }) {
  return (
    <div className="relative mx-auto mb-1 flex w-full max-w-[500px] items-center justify-center" style={style}>
      <Image
        src="/assets/cover/disclimer-bg.png"
        alt=""
        width={500}
        height={135}
        className="h-auto w-[220px] object-contain"
        aria-hidden
      />
      <p className="absolute inset-0 flex items-center justify-center pl-[50px] text-[15px] font-bold tracking-[0.18em] text-white">
        DISCLAIMER
      </p>
    </div>
  );
}

function DisclaimerRow({ point }: { point: DisclaimerPoint }) {
  const Icon = point.icon;

  return (
    <div className="flex items-start gap-3 px-1 py-1">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{
          border: "1px solid rgba(184, 134, 11, 0.45)",
          backgroundColor: "rgba(253, 245, 230, 0.85)",
        }}
      >
        <Icon size={28} strokeWidth={1.8} style={{ color: COLORS.gold }} />
      </div>
      <p
        className="min-w-0 flex-1 pt-1.5 text-[13px] leading-relaxed font-nunito-sans"
        style={{ color: COLORS.black }}
      >
        {point.content}
      </p>
    </div>
  );
}

function DisclaimerSection({ points }: { points: DisclaimerPoint[] }) {
  return (
    <div
      className="relative rounded-lg px-2 py-1 pt-6 top-[30px]"
      style={{
        border: GOLD_BORDER,
        backgroundColor: "rgba(255, 251, 245, 0.40)",
      }}
    >
      <DisclaimerHeader style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 pr-[130px]">
        {points.map((point, index) => (
          <div key={point.id}>
            <DisclaimerRow point={point} />
            {index < points.length - 1 ? <GoldDiamondDivider /> : null}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 top-8 w-[150px] opacity-70">
        <Image
          src="/assets/cover/disclaimerpage.png"
          alt=""
          width={150}
          height={200}
          className="h-full w-auto max-w-full object-contain object-right-bottom"
          style={{ width: "auto", height: "100%" }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function FinalAdviceHeader() {
  return (
    <div className="relative mx-auto mb-1 flex w-full max-w-[500px] items-center justify-center">
      <Image
        src="/assets/cover/finalAdvice-bg.png"
        alt=""
        width={150}
        height={87}
        className="h-auto w-[200px] object-contain"
        aria-hidden
      />
      <p
        className="absolute inset-0 flex items-center justify-center text-[13px] font-bold tracking-[0.18em]"
        style={{ color: COLORS.brown }}
      >
        FINAL ADVICE
      </p>
    </div>
  );
}

function AdviceCard({ card }: { card: AdviceCardData }) {
  const Icon = card.icon;

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-md"
      style={{
        border: `1px solid ${card.accent}55`,
        backgroundColor: "rgba(255, 255, 255, 0.55)",
      }}
    >
      <div
        className="flex items-center gap-2 px-2 py-1"
        style={{
          borderBottom: `1px solid ${card.accent}44`,
          backgroundColor: `${card.accent}14`,
        }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{
            border: `1px solid ${card.accent}66`,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }}
        >
          <Icon size={20} strokeWidth={1.8} style={{ color: card.accent }} />
        </div>
        <p
          className="text-[11px] font-bold leading-tight tracking-wide"
          style={{ color: card.accent }}
        >
          {card.title}
        </p>
      </div>
      <ul className="flex-1 space-y-1 px-2 py-1 font-nunito-sans">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-1.5">
            <span
              className="mt-0.5 shrink-0 text-[11px] font-bold leading-none"
              style={{ color: card.accent }}
            >
              ✓
            </span>
            <span className="text-[9px] leading-snug" style={{ color: COLORS.brown }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingBanner({ closing }: { closing: ClosingStatement }) {
  return (
    <div
      className="relative mt-3 rounded-lg px-2 py-2 font-nunito-sans"
      style={{
        border: GOLD_BORDER,
        backgroundColor: "rgba(255, 251, 245, 0.5)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex w-[90px] shrink-0 justify-center">
          <Image
            src="/assets/cover/disclaimerPageFooter.png"
            alt=""
            width={90}
            height={90}
            className="h-[90px] w-[90px] object-contain"
            aria-hidden
          />
        </div>

        <div className="min-w-0 flex-1 text-center">
          <p className="text-[12px] leading-relaxed" style={{ color: COLORS.brown }}>
            {closing.paragraph}
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-[9px]" style={{ color: COLORS.gold }}>
              ◆
            </span>
            <p className="font-nunito-sans text-[12px] font-bold italic" style={{ color: COLORS.red }}>
              {closing.blessing}
            </p>
            <span className="text-[9px]" style={{ color: COLORS.gold }}>
              ◆
            </span>
          </div>
          {/* <div className="mt-1.5 flex items-center justify-center gap-1.5">
            <span className="text-[8px]" style={{ color: COLORS.gold }}>
              ◆
            </span>
            <span className="text-[8px]" style={{ color: COLORS.gold }}>
              ◆
            </span>
            <span className="text-[8px]" style={{ color: COLORS.gold }}>
              ◆
            </span>
          </div> */}
        </div>

        <div className="flex w-[90px] shrink-0 justify-center">
          <Image
            src="/assets/cover/disclaimerPageFooter1.png"
            alt=""
            width={90}
            height={90}
            className="h-[90px] w-[90px] object-contain"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

export default function DisclaimerAndAdvicePage({
  disclaimerPoints = defaultDisclaimerPoints,
  adviceCards = defaultAdviceCards,
  closing = defaultClosing,
  pageNumber = "17",
}: DisclaimerAndAdvicePageProps) {
  return (
    <ReportPageShell padding="20px 40px 52px" pageNumber={pageNumber}>
      <header className="mb-1 flex flex-col items-center text-center">
        <Image
          src="/assets/ganesha-logo.png"
          alt="Astro Aarambh"
          width={100}
          height={100}
          className="mb-2"
          priority
        />
        <div className="flex items-center gap-2">
          <Pattern3 size={50} />
          <p className="text-md font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="text-[40px] mt-[-8px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          Important Disclaimer <br />
          <span style={{ color: COLORS.red }}>&amp; Final Advice</span>
        </h1>
      </header>

      <div className="mt-[-8px]">
        <DisclaimerSection points={disclaimerPoints} />
      </div>

      <div className="mt-10">
        <FinalAdviceHeader />
        <div className="grid grid-cols-3 gap-2">
          {adviceCards.map((card) => (
            <AdviceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="mt-[-8px]">
        <ClosingBanner closing={closing} />
      </div>
    </ReportPageShell>
  );
}
