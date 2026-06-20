import {
  Briefcase,
  Calendar,
  ChevronDown,
  CreditCard,
  Flower2,
  HelpCircle,
  Search,
  Smartphone,
  Target,
  ThumbsDown,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { PageFooterBar } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
  icon: LucideIcon;
  iconColor: string;
};

export type MythTruthItem = {
  id: number;
  myth: string;
  truth: string;
};

export type RememberSection = {
  quote: string;
  callToAction: string;
  tagline: string;
};

export type FAQPageProps = {
  faqItems?: FAQItem[];
  myths?: MythTruthItem[];
  remember?: RememberSection;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;
// const ORANGE = "#d48e31";
// const MYTH_RED = "#8b1a1a";
// const TRUTH_GREEN = "#2d7a4f";
// const COLORS.brown = "#1e2a44";

const defaultFaqItems: FAQItem[] = [
  {
    id: 1,
    question: "When is the best time to change my mobile number?",
    answer:
      "During your Personal Year, Personal Month, or on an auspicious muhurta date aligned with your core numbers.",
    icon: Calendar,
    iconColor: "#b8860b",
  },
  {
    id: 2,
    question: "Can I use the corrected number immediately?",
    answer:
      "Yes, once you activate the new number on an auspicious date and time, you can start using it immediately.",
    icon: Smartphone,
    iconColor: COLORS.green,
  },
  {
    id: 3,
    question: "Do I need to change my SIM or just the number?",
    answer: "You need a new number. SIM change is not necessary unless you want to port your existing number.",
    icon: CreditCard,
    iconColor: "#7b5ea7",
  },
  {
    id: 4,
    question: "What if I can't find the exact suggested number?",
    answer:
      "Choose the closest possible total that matches your core numbers (5, 7, 2, 6). Intention and activation are also important.",
    icon: Search,
    iconColor: COLORS.gold,
  },
  {
    id: 5,
    question: "Is it necessary to change the number? Can remedies work?",
    answer:
      "Remedies can reduce negative effects and bring balance, but changing to a compatible number gives much faster & stronger results.",
    icon: Flower2,
    iconColor: "#1e5631",
  },
  {
    id: 6,
    question: "Will changing number affect my existing contacts / business?",
    answer:
      "No, your contacts and business will remain safe. Inform important people gradually. Energy improves without loss.",
    icon: Users,
    iconColor: "#3b6ea8",
  },
  {
    id: 7,
    question: "How accurate is numerology?",
    answer:
      "Numerology is a powerful science of vibrations with high accuracy when calculations and birth details are correctly analyzed.",
    icon: Target,
    iconColor: COLORS.gold,
  },
  {
    id: 8,
    question: "Can I use this report for my business number too?",
    answer:
      "Yes, the same principles apply to business numbers. A compatible number can boost growth, clients, and financial flow.",
    icon: Briefcase,
    iconColor: "#7b5ea7",
  },
];

const defaultMyths: MythTruthItem[] = [
  {
    id: 1,
    myth: "Any number ending with 5 or 6 is lucky.",
    truth:
      "A number is lucky only if the total and vibration are compatible with your core numbers. Wrong combinations can still create problems.",
  },
  {
    id: 2,
    myth: "Mobile number is more powerful than birth numbers.",
    truth:
      "Birth numbers (Driver, Conductor, Kua) are your core energy. Mobile number influences your daily experiences, but it does not change your destiny.",
  },
  {
    id: 3,
    myth: "You must change number every year.",
    truth:
      "Not at all. Change only when your number is causing consistent blocks or not supporting your growth. A right number can give results for many years.",
  },
];

const defaultRemember: RememberSection = {
  quote:
    "Your mobile number is a tool that connects you with energies. When aligned with your core numbers, it becomes a source of success, happiness, and harmony in every area of life.",
  callToAction: "ALIGN. ACTIVATE. ATTRACT.",
  tagline: "Positive Numbers – Positive Life",
};

function SectionHeader({
  label,
  variant,
}: {
  label: string;
  variant: "faq" | "myth";
}) {
  const isFaq = variant === "faq";
  return (
    <div
      className="mb-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
      style={{ backgroundColor: isFaq ? COLORS.gold : COLORS.red }}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.22)" }}
      >
        {isFaq ? (
          <HelpCircle size={14} color="#fff" strokeWidth={2} />
        ) : (
          <X size={14} color="#fff" strokeWidth={2.5} />
        )}
      </span>
      <span className="text-[12px] font-bold tracking-wide text-white">{label}</span>
    </div>
  );
}

function FaqRow({ item }: { item: FAQItem }) {
  const Icon = item.icon;

  return (
    <div
      className="flex items-start gap-2 border-b px-3 py-2.5 last:border-b-0"
      style={{ borderColor: "rgba(184, 134, 11, 0.22)" }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{ border: "1px solid rgba(184, 134, 11, 0.35)" }}
      >
        <Icon size={25} strokeWidth={1.8} style={{ color: item.iconColor }} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-1.5">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: COLORS.gold }}
          >
            {item.id}
          </span>
          <p className="text-[11px] font-bold leading-snug" style={{ color: COLORS.brown }}>
            {item.question}
          </p>
        </div>
        <p className="pl-6 text-[10px] leading-snug" style={{ color: COLORS.brown, opacity: 0.92 }}>
          {item.answer}
        </p>
      </div>
      <ChevronDown size={14} className="mt-1 shrink-0" style={{ color: COLORS.gold }} />
    </div>
  );
}

function MythTruthBlock({ item, showDivider }: { item: MythTruthItem; showDivider: boolean }) {
  return (
    <div>
      <div className="flex items-start gap-2 px-3 py-2.5">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: COLORS.gold }}
        >
          <ThumbsDown size={22} color="#fff" strokeWidth={2} fill="#fff" />
        </div>
        <div className="min-w-0 flex-1">
          <span
            className="inline-block rounded px-2 py-0.5 text-[12px] font-bold tracking-wide text-white"
            style={{ backgroundColor: COLORS.red }}
          >
            MYTH {item.id}
          </span>
          <p className="mt-1 text-[11px] font-bold leading-snug" style={{ color: COLORS.brown }}>
            {item.myth}
          </p>
          <div
            className="mt-2 rounded-md px-2 py-1.5"
            style={{ border: "1px dashed rgba(184, 134, 11, 0.45)", backgroundColor: "rgba(255,255,255,0.45)" }}
          >
            <span
              className="inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide text-white"
              style={{ backgroundColor: COLORS.green }}
            >
              TRUTH
            </span>
            <p className="mt-2 text-[10px] leading-snug" style={{ color: COLORS.brown, opacity: 0.92 }}>
              {item.truth}
            </p>
          </div>
        </div>
      </div>
      {showDivider ? (
        <div className="flex items-center gap-2 px-3 py-1">
          <div className="h-px flex-1 border-t border-dashed" style={{ borderColor: "rgba(184, 134, 11, 0.45)" }} />
          <span className="text-[10px]" style={{ color: COLORS.gold }}>
            ✦
          </span>
          <div className="h-px flex-1 border-t border-dashed" style={{ borderColor: "rgba(184, 134, 11, 0.45)" }} />
        </div>
      ) : null}
    </div>
  );
}

function RememberBanner({ remember }: { remember: RememberSection }) {
  return (
    <div
      className="relative mt-3 rounded-lg px-1 py-1 font-nunito-sans bg-[#FFFBF5]/40"
      style={{
        border: "1px solid rgba(184, 134, 11, 0.45)",
      }}
    >
      <div className="flex flex-col items-center gap-3 flex-row items-center gap-4">
        <div className="flex shrink-0 justify-center w-[110px]">
          <Image
            src="/assets/cover/faqpagefooterimage1.png"
            alt=""
            width={100}
            height={100}
            className="h-[110px] w-[110px] object-contain"
            aria-hidden
          />
        </div>

        <div className="flex-1 text-center">
          <div className="mb-1 flex items-center justify-center gap-2">
            <Pattern3 size={40} />
            <p className="font-cinzel text-[18px] font-bold tracking-[0.15em]" style={{ color: COLORS.red }}>
              REMEMBER
            </p>
            <Pattern3 size={40} className="rotate-180" />
          </div>
          <p
            className="mx-auto max-w-[480px] text-[10px] leading-relaxed"
            style={{ color: COLORS.black }}
          >
            &ldquo;{remember.quote}&rdquo;
          </p>
          <p className="mt-1 text-[11px] font-bold tracking-[0.12em]" style={{ color: COLORS.red }}>
            {remember.callToAction}
          </p>
          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="text-[10px]" style={{ color: COLORS.gold }}>
              ✦
            </span>
            <p className="text-[10px] font-semibold" style={{ color: COLORS.black }}>
              {remember.tagline}
            </p>
            <span className="text-[10px]" style={{ color: COLORS.gold }}>
              ✦
            </span>
          </div>
        </div>

        <div className="flex shrink-0 justify-center w-[110px]">
          <Image
            src="/assets/cover/FaqPageFooter.png"
            alt=""
            width={100}
            height={100}
            className="h-[110px] w-[110px] object-contain"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function ContentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-lg p-4"
      style={{
        border: "1px solid rgba(184, 134, 11, 0.45)",
      }}
    >
      {children}
    </div>
  );
}

function PanelBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-lg"
      style={{ border: "1px solid rgba(184, 134, 11, 0.35)" }}
    >
      {children}
    </div>
  );
}

export default function FAQPage({
  faqItems = defaultFaqItems,
  myths = defaultMyths,
  remember = defaultRemember,
  pageNumber = "16",
}: FAQPageProps) {
  return (
    <ReportPageShell padding="20px 40px 52px">
      <header className="flex flex-col items-center text-center">
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
        <h1 className="text-[40px] font-bold leading-tight tracking-wide" style={{ color: COLORS.brown }}>
          FAQS <span style={{ color: COLORS.red }}>&amp; Common Myths</span>
        </h1>
        <p
          className="text-[13px]"
          style={{ color: "#213247", opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
        >
          Clearing Doubts About Mobile Number Numerology
        </p>
      </header>

      <ContentFrame>
        <div className="grid gap-4 font-nunito-sans grid-cols-[1.55fr_1fr]">
          <div>
            <SectionHeader label="FREQUENTLY ASKED QUESTIONS" variant="faq" />
            <PanelBox>
              {faqItems.map((item) => (
                <FaqRow key={item.id} item={item} />
              ))}
            </PanelBox>
          </div>

          <div>
            <SectionHeader label="COMMON MYTHS" variant="myth" />
            <PanelBox>
              {myths.map((item, index) => (
                <MythTruthBlock key={item.id} item={item} showDivider={index < myths.length - 1} />
              ))}
            </PanelBox>
          </div>
        </div>

        <RememberBanner remember={remember} />
      </ContentFrame>
    </ReportPageShell>
  );
}
