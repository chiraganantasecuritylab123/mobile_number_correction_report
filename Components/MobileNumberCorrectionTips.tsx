import {
  Ban,
  Calendar,
  Check,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Pattern3 } from "./CommunComponents";
import { MoonIcon, SunIcon } from "./NumeroscopeDecorations";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type RuleLine =
  | string
  | {
      text: string;
      color?: string;
      bold?: boolean;
      size?: "normal" | "large";
    }
  | {
      parts: Array<{ text: string; color?: string; bold?: boolean }>;
      size?: "normal" | "large";
    };

export type GeneralRule = {
  icon?: LucideIcon;
  iconSrc?: string;
  iconLabel?: string;
  iconVariant: "positive" | "neutral" | "caution";
  lines: [RuleLine, RuleLine, RuleLine, RuleLine];
};

export type ColoredNumber = {
  value: number;
  color: string;
  borderColor?: string;
};

export type PositionSuggestion = {
  label: string;
  labelLines?: readonly [string, string];
  detail: string;
  dotColor: string;
};

export type MobileNumberCorrectionTipsProps = {
  mobileNumber?: string;
  compoundTotal?: number;
  rootNumber?: number;
  rulingPlanet?: string;
  dateOfBirth?: string;
  lifePathNumber?: number;
  driverNumber?: number;
  driverPlanet?: string;
  conductorNumber?: number;
  conductorPlanet?: string;
  kuaNumber?: number;
  kuaPlanet?: string;
  generalRules?: GeneralRule[];
  bestSuitedTotals?: ColoredNumber[];
  bestSuitedDescriptionLines?: readonly [string, string];
  idealDigits?: ColoredNumber[];
  idealDigitsDescriptionLines?: readonly [string, string];
  positionSuggestions?: PositionSuggestion[];
  activationDates?: number[];
  activationNote?: string;
  bestDaysLines?: readonly [string, string];
  goalText?: string;
  rememberTextLines?: readonly [string, string];
};

const COLORS = REPORT_COLORS;
const BURGUNDY = "#5D1A1A";
const SANS = "var(--font-geist-sans), 'Segoe UI', sans-serif";
const BODY_TEXT = "#24324A";
const RECOMMENDATION_TITLE_COLOR = "#9a5c12";
const RECOMMENDATION_BODY_COLOR = "#5c4d3c";
const POSITION_LABEL_COLOR = "#1e3a5f";
const NUMBER_HIGHLIGHT = "#a03d15";
const POSITION_ROW_BORDER = "rgba(216, 172, 113, 0.4)";
const ACTIVATION_TEXT_COLOR = "#8b5e34";
const ACTIVATION_FOOTER_BG = "#fdf2d5";
const ACTIVATION_BORDER = "#c08e4c";
const ACTIVATION_CALENDAR_OFFSET = "26px";

const KEY_INSIGHT_STAR = "/assets/conjunction/key-insight-star.png";

const PROFILE_ROW_ICONS = {
  currentTotal: "/assets/conjunction/sun-rising.png",
  driver: "/assets/conjunction/double-mercury.png",
  conductor: "/assets/conjunction/conductor-ketu-img.png",
  kua: "/assets/conjunction/kua-moon.png",
} as const;

const RULE_GREEN = "#2d7a4f";
const RULE_ORANGE = "#b35c00";
const RULE_RED = "#a84432";

const defaultGeneralRules: GeneralRule[] = [
  {
    icon: Check,
    iconVariant: "positive",
    lines: [
      "Prefer totals",
      { text: "1, 3, 5 or 6", color: RULE_GREEN, bold: true, size: "large" },
      "These bring",
      "growth, success and stability.",
    ],
  },
  {
    iconSrc: "/assets/conjunction/practical-lessons-scale.png",
    iconVariant: "neutral",
    lines: [
      "Keep digits",
      { text: "balanced", color: "#8b4513", bold: true, size: "large" },
      "Avoid too much",
      "of any one digit.",
    ],
  },
  {
    icon: TrendingUp,
    iconVariant: "positive",
    lines: [
      "Include growth digits",
      { text: "1, 3, 5, 6", color: COLORS.brown, bold: true, size: "large" },
      "at key positions.",
      "\u00A0",
    ],
  },
  {
    icon: Ban,
    iconLabel: "4/8",
    iconVariant: "caution",
    lines: [
      {
        parts: [
          { text: "Avoid excess " },
          { text: "4 and 8", color: RULE_RED, bold: true },
        ],
      },
      "as they create",
      "delays and",
      "obstacles.",
    ],
  },
  {
    icon: Ban,
    iconLabel: "000",
    iconVariant: "caution",
    lines: ["Avoid triple zeros", "\u00A0", "They drain energy", "and cause stagnation."],
  },
  {
    iconSrc: "/assets/conjunction/supportive-star.png",
    iconVariant: "neutral",
    lines: [
      "Use supportive combinations",
      "\u00A0",
      "Like 15, 51, 23, 32,",
      "41, 14, 50 for better flow.",
    ],
  },
  {
    icon: ShieldCheck,
    iconVariant: "positive",
    lines: [
      "Choose a number that",
      "feels light and positive",
      "\u00A0",
      "Your intuition is also important.",
    ],
  },
];

const defaultBestSuitedTotals: ColoredNumber[] = [
  { value: 5, color: "#2d7a4f", borderColor: "#2d7a4f" },
  { value: 1, color: "#d48e31", borderColor: "#d48e31" },
  { value: 6, color: "#3b6ea5", borderColor: "#3b6ea5" },
  { value: 3, color: "#1e3a5f", borderColor: "#1e3a5f" },
];

const defaultIdealDigits: ColoredNumber[] = [
  { value: 1, color: "#d48e31", borderColor: "#d48e31" },
  { value: 3, color: "#3b6ea5", borderColor: "#3b6ea5" },
  { value: 5, color: "#2d7a4f", borderColor: "#2d7a4f" },
  { value: 6, color: "#1f5c3a", borderColor: "#1f5c3a" },
];

const defaultPositionSuggestions: PositionSuggestion[] = [
  { label: "1st Digit", detail: "Should be 1, 3 or 5 for a strong start.", dotColor: "#2d7d46" },
  { label: "Middle Digits", detail: "Use 1, 3, 5, 6 to maintain growth flow.", dotColor: "#d98c32" },
  {
    label: "4th or 7th Position",
    labelLines: ["4th or 7th", "Position"],
    detail: "Best to have 5 (Mercury) or 1 (Sun).",
    dotColor: "#3b699c",
  },
  { label: "Last Digit", detail: "Prefer 1, 5 or 6 for a positive closure.", dotColor: "#2d7d46" },
];

const defaultActivationDates = [1, 3, 5, 6, 10, 12, 14, 15, 19, 21, 23, 24, 28, 30];

function formatDisplayMobileNumber(value: string): string {
  const compact = value.replace(/\s/g, "");
  if (compact.startsWith("+44") && compact.length >= 13) {
    const national = compact.slice(3);
    return `+44 ${national.slice(0, 4)} ${national.slice(4)}`;
  }
  if (compact.startsWith("+") && compact.length > 4) {
    return compact.replace(/(\+\d{2})(\d{4})(\d+)/, "$1 $2 $3");
  }
  return value.trim();
}

function highlightNumbers(text: string, numberColor = NUMBER_HIGHLIGHT) {
  return text.split(/(\d+)/g).map((part, index) =>
    /^\d+$/.test(part) ? (
      <span key={`num-${index}`} style={{ color: numberColor, fontWeight: 700 }}>
        {part}
      </span>
    ) : (
      <span key={`txt-${index}`}>{part}</span>
    ),
  );
}

function formatActivationExamples(dates: number[]) {
  const splitIndex = dates.indexOf(21) + 1;
  if (splitIndex <= 0 || splitIndex >= dates.length) {
    return highlightNumbers(`Examples: ${dates.join(", ")}`, ACTIVATION_TEXT_COLOR);
  }

  const firstLine = `Examples: ${dates.slice(0, splitIndex).join(", ")},`;
  const secondLine = dates.slice(splitIndex).join(", ");

  return (
    <>
      {highlightNumbers(firstLine, ACTIVATION_TEXT_COLOR)}
      <br />
      {highlightNumbers(secondLine, ACTIVATION_TEXT_COLOR)}
    </>
  );
}

function RecommendationBoxHeader({
  index,
  title,
  align = "center",
}: {
  index: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <p
      className={`mb-1.5 text-[9px] font-extrabold leading-tight ${
        align === "center" ? "text-center" : "text-left"
      }`}
      style={{ color: RECOMMENDATION_TITLE_COLOR, fontFamily: SANS }}
    >
      {index}. {title}
    </p>
  );
}

function GoldBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md ${className}`}
      style={{
        border: "1px solid #b8860b",
        backgroundColor: "rgba(253, 245, 230, 0.78)",
      }}
    >
      {children}
    </div>
  );
}

function NumeroscopeSectionHeader({
  title,
  compact = false,
}: {
  title: string;
  compact?: boolean;
}) {
  return (
    <div className={`relative flex w-full items-center justify-center ${compact ? "mb-1" : "mb-3"}`}>
      <div
        className={`relative flex w-full items-center justify-center rounded-2xl px-10 ${
          compact ? "py-1.5" : "py-2"
        }`}
        style={{
          border: "1px solid #D8AC71",
          backgroundColor: "rgba(250, 236, 218, 0.65)",
        }}
      >
        <Image
          src="/assets/cover/pattern-1.png"
          alt=""
          width={30}
          height={42}
          className="absolute left-4 top-1/2 -translate-y-1/2 object-contain"
          aria-hidden
        />
        <Image
          src="/assets/cover/pattern-1.png"
          alt=""
          width={30}
          height={42}
          className="absolute right-4 top-1/2 -translate-y-1/2 object-contain"
          aria-hidden
        />
        <h3
          className="text-center text-[11px] font-bold tracking-[0.14em]"
          style={{ color: BURGUNDY, textTransform: "uppercase" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function ProfileRowIcon({ src, size = 30 }: { src: string; size?: number }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0 object-contain"
      aria-hidden
    />
  );
}

const PROFILE_HEADER_COLOR = "#a03d15";
const PROFILE_KUA_HEADER = "#1e3a5f";

function ProfileColumn({
  label,
  labelColor = PROFILE_HEADER_COLOR,
  className = "",
  line2,
  line3,
  line4,
}: {
  label: React.ReactNode;
  labelColor?: string;
  className?: string;
  line2: React.ReactNode;
  line3?: React.ReactNode;
  line4?: React.ReactNode;
}) {
  return (
    <div className={`flex min-w-0 flex-1 flex-col items-center justify-between px-1.5 py-2 text-center ${className}`}>
      <div className="flex min-h-[22px] w-full items-center justify-center px-0.5">
        <p
          className="text-center text-[10px] font-bold leading-tight tracking-[0.04em]"
          style={{ color: labelColor, fontFamily: SANS }}
        >
          {label}
        </p>
      </div>
      <div className="flex h-[40px] w-full items-center justify-center px-0.5">{line2}</div>
      <div className="flex h-[22px] w-full items-center justify-center">{line3 ?? "\u00A0"}</div>
      <div className="flex h-[32px] w-full items-center justify-center">{line4 ?? "\u00A0"}</div>
    </div>
  );
}

function MobileIconCircle({ size = "md" }: { size?: "md" | "lg" }) {
  const isLarge = size === "lg";
  return (
    <div
      className={`flex items-center justify-center rounded-full ${
        isLarge ? "h-[28px] w-[28px]" : "h-[22px] w-[22px]"
      }`}
      style={{ border: "1.5px solid #d48e31", backgroundColor: "rgba(255, 255, 255, 0.45)" }}
    >
      <Smartphone
        size={isLarge ? 16 : 12}
        strokeWidth={1.5}
        style={{ color: "#d48e31" }}
      />
    </div>
  );
}

function MobileProfileColumn({ displayNumber }: { displayNumber: string }) {
  return (
    <div className="flex min-w-0 flex-[1.15] flex-col items-center justify-between px-1.5 py-2 text-center">
      <div className="flex min-h-[22px] w-full items-center justify-center px-0.5">
        <p
          className="text-center text-[10px] font-bold leading-tight tracking-[0.04em]"
          style={{ color: PROFILE_HEADER_COLOR, fontFamily: SANS }}
        >
          YOUR MOBILE
          <br />
          NUMBER
        </p>
      </div>
      <div className="flex h-[40px] w-full items-center justify-center px-0.5">
        <MobileIconCircle size="lg" />
      </div>
      <div className="flex min-h-[54px] w-full flex-1 items-center justify-center px-0.5">
        <p
          className="whitespace-nowrap text-[13px] font-bold font-serif leading-none"
          style={{ color: COLORS.brown }}
        >
          {displayNumber}
        </p>
      </div>
    </div>
  );
}

function ProfileDivider() {
  return <div className="w-px self-stretch shrink-0" style={{ backgroundColor: "rgba(184, 134, 11, 0.55)" }} />;
}

function ColoredNumberCircle({ value, color, borderColor, size = 30 }: ColoredNumber & { size?: number }) {
  const fontSize = size <= 24 ? "text-[12px]" : size <= 38 ? "text-[17px]" : "text-[18px]";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold font-serif ${fontSize}`}
      style={{
        width: size,
        height: size,
        color,
        border: `2px solid ${borderColor ?? color}`,
        backgroundColor: "rgba(255, 255, 255, 0.55)",
      }}
    >
      {value}
    </div>
  );
}

function RuleLineText({ line, isHighlightRow = false }: { line: RuleLine; isHighlightRow?: boolean }) {
  const baseSize = isHighlightRow ? "text-[12px]" : "text-[10.5px]";
  const largeSize = "text-[13px]";

  if (typeof line === "string") {
    if (line === "\u00A0") {
      return <p className="h-0 overflow-hidden" aria-hidden>{line}</p>;
    }
    return (
      <p
        className={`${baseSize} font-normal leading-snug`}
        style={{ color: BODY_TEXT, fontFamily: SANS }}
      >
        {line}
      </p>
    );
  }

  if ("parts" in line) {
    const sizeClass = line.size === "large" ? largeSize : baseSize;
    return (
      <p
        className={`${sizeClass} font-normal leading-snug`}
        style={{ color: BODY_TEXT, fontFamily: SANS }}
      >
        {line.parts.map((part, index) => (
          <span
            key={`${part.text}-${index}`}
            style={{
              color: part.color ?? BODY_TEXT,
              fontWeight: part.bold ? 700 : 400,
            }}
          >
            {part.text}
          </span>
        ))}
      </p>
    );
  }

  const sizeClass = line.size === "large" ? largeSize : baseSize;
  return (
    <p
      className={`${sizeClass} leading-snug`}
      style={{
        color: line.color ?? BODY_TEXT,
        fontWeight: line.bold ? 700 : 400,
        fontFamily: SANS,
      }}
    >
      {line.text}
    </p>
  );
}

function RuleIconBadge({ rule }: { rule: GeneralRule }) {
  if (rule.iconSrc) {
    return (
      <Image
        src={rule.iconSrc}
        alt=""
        width={28}
        height={28}
        className="shrink-0 object-contain"
        aria-hidden
      />
    );
  }

  const Icon = rule.icon;
  const bg =
    rule.iconVariant === "positive"
      ? RULE_GREEN
      : rule.iconVariant === "caution"
        ? RULE_RED
        : RULE_ORANGE;

  return (
    <div
      className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: bg }}
    >
      {rule.iconLabel ? (
        <span className="text-[9px] font-extrabold text-white">{rule.iconLabel}</span>
      ) : Icon === Star ? (
        <Star size={17} strokeWidth={0} fill="#ffffff" className="text-white" />
      ) : (
        Icon ? <Icon size={17} strokeWidth={2.5} className="text-white" /> : null
      )}
    </div>
  );
}

function RuleCard({ rule }: { rule: GeneralRule }) {
  return (
    <div
      className="flex min-h-[136px] min-w-0 flex-1 flex-col items-center rounded-lg px-2 pb-3 pt-2.5 text-center"
      style={{
        border: "1px solid rgba(216, 172, 113, 0.55)",
        backgroundColor: "rgba(255, 255, 255, 0.55)",
      }}
    >
      <div className="flex h-[38px] w-full shrink-0 items-center justify-center">
        <RuleIconBadge rule={rule} />
      </div>
      <div className="mt-1 flex w-full flex-1 flex-col items-center justify-center gap-[5px] px-0.5">
        <div className="flex min-h-[14px] w-full items-center justify-center">
          <RuleLineText line={rule.lines[0]} />
        </div>
        <div className="flex min-h-[15px] w-full items-center justify-center">
          <RuleLineText line={rule.lines[1]} isHighlightRow />
        </div>
        <div className="flex min-h-[14px] w-full items-center justify-center">
          <RuleLineText line={rule.lines[2]} />
        </div>
        <div className="flex min-h-[14px] w-full items-center justify-center">
          <RuleLineText line={rule.lines[3]} />
        </div>
      </div>
    </div>
  );
}

function RecommendationBox({
  index,
  title,
  subtitle,
  numbers,
  descriptionLines,
}: {
  index: string;
  title: string;
  subtitle?: string;
  numbers?: ColoredNumber[];
  descriptionLines: readonly [string, string];
}) {
  return (
    <GoldBox className="flex min-h-[128px] flex-col px-2.5 py-2">
      <div className="flex min-h-[22px] w-full items-center justify-center px-1">
        <p
          className="text-center text-[9px] font-extrabold leading-tight tracking-[0.02em]"
          style={{ color: RECOMMENDATION_TITLE_COLOR, fontFamily: SANS }}
        >
          {index}. {title}
        </p>
      </div>

      <div className="flex min-h-[13px] w-full items-center justify-center">
        {subtitle ? (
          <p
            className="text-center text-[8.5px] font-bold italic leading-none"
            style={{ color: RECOMMENDATION_BODY_COLOR, fontFamily: SANS }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>

      {numbers ? (
        <div className="flex min-h-[44px] flex-1 items-center justify-center gap-2">
          {numbers.map((num) => (
            <ColoredNumberCircle key={`${title}-${num.value}`} {...num} size={36} />
          ))}
        </div>
      ) : null}

      <div className="mt-auto w-full space-y-[2px] pt-1 text-center">
        {descriptionLines.map((line, lineIndex) => (
          <p
            key={`${title}-desc-${lineIndex}`}
            className="min-h-[12px] text-[8.5px] font-bold leading-snug"
            style={{ color: RECOMMENDATION_BODY_COLOR, fontFamily: SANS }}
          >
            {line}
          </p>
        ))}
      </div>
    </GoldBox>
  );
}

function PositionSuggestionLabel({ item }: { item: PositionSuggestion }) {
  if (item.labelLines) {
    return (
      <span
        className="block text-[8.5px] font-bold leading-[1.2]"
        style={{ color: POSITION_LABEL_COLOR, fontFamily: SANS }}
      >
        {item.labelLines[0]}
        <br />
        {item.labelLines[1]}
      </span>
    );
  }

  return (
    <span
      className="block text-[8.5px] font-bold leading-[1.2]"
      style={{ color: POSITION_LABEL_COLOR, fontFamily: SANS }}
    >
      {item.label}
    </span>
  );
}

function PositionSuggestionBox({
  index,
  title,
  suggestions,
}: {
  index: string;
  title: string;
  suggestions: PositionSuggestion[];
}) {
  return (
    <GoldBox className="flex min-h-[128px] flex-col px-2.5 py-2">
      <RecommendationBoxHeader index={index} title={title} align="left" />
      <ul className="mt-0.5 flex flex-1 flex-col">
        {suggestions.map((item, itemIndex) => (
          <li
            key={item.label}
            className={`grid grid-cols-[8px_64px_1fr] items-start gap-x-1.5 py-[5px] ${
              itemIndex < suggestions.length - 1 ? "border-b" : ""
            }`}
            style={{ borderColor: POSITION_ROW_BORDER }}
          >
            <span
              className="mt-[3px] h-[8px] w-[8px] shrink-0 rounded-full"
              style={{ backgroundColor: item.dotColor }}
            />
            <PositionSuggestionLabel item={item} />
            <p
              className="text-[8.5px] font-normal leading-[1.35]"
              style={{ color: RECOMMENDATION_BODY_COLOR, fontFamily: SANS }}
            >
              {highlightNumbers(item.detail)}
            </p>
          </li>
        ))}
      </ul>
    </GoldBox>
  );
}

function ActivationDatesBox({
  index,
  title,
  note,
  dates,
  bestDaysLines,
}: {
  index: string;
  title: string;
  note: string;
  dates: number[];
  bestDaysLines: readonly [string, string];
}) {
  return (
    <div
      className="flex min-h-[136px] flex-col rounded-md px-3 py-2"
      style={{
        border: `1px solid ${ACTIVATION_BORDER}`,
        backgroundColor: "rgba(255, 249, 235, 0.92)",
      }}
    >
      <p
        className="mb-1.5 text-left text-[9px] font-extrabold leading-tight"
        style={{ color: ACTIVATION_TEXT_COLOR, fontFamily: SANS }}
      >
        {index}. {title}
      </p>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-start gap-2">
          <Calendar
            size={18}
            strokeWidth={1.5}
            className="mt-[1px] w-[18px] shrink-0"
            style={{ color: ACTIVATION_TEXT_COLOR }}
          />
          <p
            className="min-w-0 flex-1 text-[8.5px] font-normal leading-[1.4]"
            style={{ color: ACTIVATION_TEXT_COLOR, fontFamily: SANS }}
          >
            {highlightNumbers(note, ACTIVATION_TEXT_COLOR)}
          </p>
        </div>

        <p
          className="mt-1 text-[8.5px] font-normal leading-[1.4]"
          style={{
            color: ACTIVATION_TEXT_COLOR,
            fontFamily: SANS,
            paddingLeft: ACTIVATION_CALENDAR_OFFSET,
          }}
        >
          {formatActivationExamples(dates)}
        </p>

        <div
          className="mt-2 flex items-start gap-1.5 rounded-lg px-2 py-1.5"
          style={{
            border: `1px solid ${ACTIVATION_BORDER}`,
            backgroundColor: ACTIVATION_FOOTER_BG,
          }}
        >
          <Star
            size={10}
            fill={ACTIVATION_TEXT_COLOR}
            stroke={ACTIVATION_TEXT_COLOR}
            className="mt-[2px] shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p
              className="text-[8.5px] font-bold leading-[1.35]"
              style={{ color: ACTIVATION_TEXT_COLOR, fontFamily: SANS }}
            >
              {bestDaysLines[0]}
            </p>
            <p
              className="text-[8.5px] font-bold leading-[1.35]"
              style={{ color: ACTIVATION_TEXT_COLOR, fontFamily: SANS }}
            >
              {bestDaysLines[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoalRememberFooter({ lines }: { lines: readonly [string, string] }) {
  return (
    <div className="mt-2.5 flex w-full justify-center px-2">
      <div className="flex max-w-full items-center gap-2">
        <Image
          src={KEY_INSIGHT_STAR}
          alt=""
          width={16}
          height={16}
          className="shrink-0 object-contain"
          aria-hidden
        />
        <div className="min-w-0 text-center">
          <p
            className="text-[10px] font-bold leading-snug"
            style={{ color: BODY_TEXT, fontFamily: SANS }}
          >
            {lines[0]}
          </p>
          <p
            className="text-[10px] font-bold leading-snug"
            style={{ color: BODY_TEXT, fontFamily: SANS }}
          >
            {lines[1]}
          </p>
        </div>
        <Image
          src={KEY_INSIGHT_STAR}
          alt=""
          width={16}
          height={16}
          className="shrink-0 object-contain"
          aria-hidden
        />
      </div>
    </div>
  );
}

function MobileNumberGoalSection({
  goalText,
  rememberTextLines,
}: {
  goalText: string;
  rememberTextLines: readonly [string, string];
}) {
  return (
    <section className="relative z-10 mt-auto w-full shrink-0 pt-1">
      <NumeroscopeSectionHeader title="YOUR MOBILE NUMBER GOAL" compact />
      <GoldBox className="flex w-full items-center gap-3 px-4 py-3">
        <Target size={22} strokeWidth={2} className="shrink-0" style={{ color: "#d35400" }} />
        <p
          className="flex-1 text-center text-[11px] font-bold leading-snug"
          style={{ color: BODY_TEXT, fontFamily: SANS }}
        >
          {goalText}
        </p>
        <TrendingUp size={22} strokeWidth={2} className="shrink-0" style={{ color: "#d35400" }} />
      </GoldBox>
      <GoalRememberFooter lines={rememberTextLines} />
    </section>
  );
}

export default function MobileNumberCorrectionTips({
  mobileNumber = "+44 7700 900123",
  compoundTotal = 46,
  rootNumber = 1,
  rulingPlanet = "Sun",
  dateOfBirth = "14-07-1990",
  lifePathNumber = 5,
  driverNumber = 5,
  driverPlanet = "Mercury",
  conductorNumber = 7,
  conductorPlanet = "Ketu",
  kuaNumber = 2,
  kuaPlanet = "Moon",
  generalRules = defaultGeneralRules,
  bestSuitedTotals = defaultBestSuitedTotals,
  bestSuitedDescriptionLines = [
    "These totals align well with your",
    "Life Path (5), Driver (5) and Kua (2).",
  ],
  idealDigits = defaultIdealDigits,
  idealDigitsDescriptionLines = [
    "These will support your communication, opportunities,",
    "personal growth and financial stability.",
  ],
  positionSuggestions = defaultPositionSuggestions,
  activationDates = defaultActivationDates,
  activationNote = "Activate your new number on dates that reduce to 1, 3, 5 or 6.",
  bestDaysLines = [
    "Best Days: Wednesday (Mercury), Sunday (Sun)",
    "or Friday (Venus)",
  ],
  goalText = "A number that supports your communication, brings the right opportunities, improves relationships and ensures long-term financial growth.",
  rememberTextLines = [
    "Remember: A correctly chosen mobile number acts as a daily support system",
    "and helps you move closer to your goals with ease and clarity.",
  ],
}: MobileNumberCorrectionTipsProps) {
  const displayNumber = formatDisplayMobileNumber(mobileNumber);

  return (
    <ReportPageShell padding="12px 34px 14px">
      <div className="flex h-full flex-col overflow-hidden">
        <SunIcon className="pointer-events-none absolute left-2 top-2 z-20 h-11 w-11 opacity-80" />
        <MoonIcon className="pointer-events-none absolute right-2 top-2 z-20 h-11 w-11 opacity-80" />

        <header className="relative z-10 flex flex-col items-center text-center">
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
            <p className="text-[16px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
              ASTRO AARAMBH
            </p>
            <Pattern3 size={50} className="rotate-180" />
          </div>
          <h1 className="mt-1 text-[35px] font-bold leading-tight tracking-wide" style={{ color: "#1a2b48" }}>
            MOBILE NUMBER
          </h1>
          <h1 className="text-[35px] font-bold leading-tight tracking-wide" style={{ color: "#d35400" }}>
            CORRECTION TIPS
          </h1>
          <p className="mt-1 text-sm italic" style={{ color: COLORS.brown, opacity: 0.85 }}>
            Personalised Guidance Based on Your Core Numbers
          </p>
        </header>

        <section className="relative z-10 mt-1 shrink-0">
          <GoldBox className="flex items-stretch px-2 py-2">
            <MobileProfileColumn displayNumber={displayNumber} />
            <ProfileDivider />
            <ProfileColumn
              label="CURRENT TOTAL"
              line2={
                <p className="text-[22px] font-bold font-serif leading-none" style={{ color: "#d48e31" }}>
                  {compoundTotal} &rarr; {rootNumber}
                </p>
              }
              line3={
                <p className="text-[11px] font-medium" style={{ color: COLORS.brown, fontFamily: SANS }}>
                  ({rulingPlanet})
                </p>
              }
              line4={<ProfileRowIcon src={PROFILE_ROW_ICONS.currentTotal} size={30} />}
            />
            <ProfileDivider />
            <ProfileColumn
              label="DATE OF BIRTH"
              line2={
                <p className="text-[17px] font-bold font-serif leading-none" style={{ color: COLORS.brown }}>
                  {dateOfBirth}
                </p>
              }
              line3={
                <p className="text-[11px] font-medium" style={{ color: BODY_TEXT, fontFamily: SANS }}>
                  Life Path Number
                </p>
              }
              line4={
                <ColoredNumberCircle
                  value={lifePathNumber}
                  color="#2d7a4f"
                  borderColor="#2d7a4f"
                  size={28}
                />
              }
            />
            <ProfileDivider />
            <ProfileColumn
              label="DRIVER NUMBER"
              line2={
                <p className="text-[26px] font-bold font-serif leading-none" style={{ color: "#2d7a4f" }}>
                  {driverNumber}
                </p>
              }
              line3={
                <p className="text-[11px] font-medium" style={{ color: COLORS.brown, fontFamily: SANS }}>
                  ({driverPlanet})
                </p>
              }
              line4={<ProfileRowIcon src={PROFILE_ROW_ICONS.driver} size={30} />}
            />
            <ProfileDivider />
            <ProfileColumn
              label="CONDUCTOR NUMBER"
              line2={
                <p className="text-[26px] font-bold font-serif leading-none" style={{ color: "#d48e31" }}>
                  {conductorNumber}
                </p>
              }
              line3={
                <p className="text-[11px] font-medium" style={{ color: COLORS.brown, fontFamily: SANS }}>
                  ({conductorPlanet})
                </p>
              }
              line4={<ProfileRowIcon src={PROFILE_ROW_ICONS.conductor} size={30} />}
            />
            <ProfileDivider />
            <ProfileColumn
              label="KUA NUMBER"
              labelColor={PROFILE_KUA_HEADER}
              line2={
                <p className="text-[26px] font-bold font-serif leading-none" style={{ color: PROFILE_KUA_HEADER }}>
                  {kuaNumber}
                </p>
              }
              line3={
                <p className="text-[11px] font-medium" style={{ color: COLORS.brown, fontFamily: SANS }}>
                  ({kuaPlanet})
                </p>
              }
              line4={<ProfileRowIcon src={PROFILE_ROW_ICONS.kua} size={30} />}
            />
          </GoldBox>
        </section>

        <section className="relative z-10 mt-1 shrink-0">
          <NumeroscopeSectionHeader title="GENERAL MOBILE NUMBER RULES" compact />
          <GoldBox className="px-2 py-2">
            <div className="flex items-stretch gap-[5px]">
              {generalRules.map((rule, index) => (
                <RuleCard key={`rule-${index}`} rule={rule} />
              ))}
            </div>
          </GoldBox>
        </section>

        <section className="relative z-10 mt-1 min-h-0 shrink-0">
          <NumeroscopeSectionHeader title="YOUR PERSONALISED RECOMMENDATIONS" compact />
          <div className="grid grid-cols-2 gap-1.5">
            <RecommendationBox
              index="1"
              title="BEST SUITED TOTALS FOR YOU"
              numbers={bestSuitedTotals}
              descriptionLines={bestSuitedDescriptionLines}
            />
            <RecommendationBox
              index="2"
              title="IDEAL DIGIT COMBINATION FOR YOU"
              subtitle="Focus on using more of these digits"
              numbers={idealDigits}
              descriptionLines={idealDigitsDescriptionLines}
            />
            <PositionSuggestionBox
              index="3"
              title="POSITION WISE SUGGESTION FOR YOU"
              suggestions={positionSuggestions}
            />
            <ActivationDatesBox
              index="4"
              title="DATES MORE SUPPORTIVE FOR ACTIVATION"
              note={activationNote}
              dates={activationDates}
              bestDaysLines={bestDaysLines}
            />
          </div>
        </section>

        <MobileNumberGoalSection goalText={goalText} rememberTextLines={rememberTextLines} />
      </div>
    </ReportPageShell>
  );
}
