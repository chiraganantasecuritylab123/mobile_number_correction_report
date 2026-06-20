import { Heart, Smartphone, Star, User } from "lucide-react";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { CoverLotus } from "./CommunComponents";
import FooterSummaryBanner from "./FooterSummaryBanner";

export type NumeroscopeProps = {
  birthDate?: string;
  birthDay?: string;
  driverNumber?: number;
  driverPlanet?: string;
  driverQualities?: string;
  conductorNumber?: number;
  conductorPlanet?: string;
  conductorQualities?: string;
  kuaNumber?: number;
  kuaElement?: string;
  kuaQualities?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  firstNameValues?: number[];
  lastNameValues?: number[];
  compoundNameTotal?: number;
  singleRootNumber?: number;
  nameInsight?: string;
  mobileNumber?: string;
  mobileDigits?: string[];
  mobileCompoundTotal?: number;
  mobileRootNumber?: number;
  mobileSummary?: string;
  soulUrgeNumber?: number;
  personalityNumber?: number;
  coreVibration?: number;
  footerSummary?: string;
  pageNumber?: string;
};

const COLORS = REPORT_COLORS;
const BURGUNDY = "#5D1A1A";
const CORE_CARD_STYLE = {
  border: "1.5px solid #D8AC71",
  borderRadius: "14px",
  backgroundColor: "rgba(253, 245, 230, 0.82)",
  boxShadow:
    "inset 0 0 0 2px rgba(253, 245, 230, 0.95), inset 0 0 0 3px rgba(216, 172, 113, 0.45)",
} as const;

const TEXT_UPPER = { textTransform: "uppercase" } as const;
const TEXT_CAP = { textTransform: "capitalize" } as const;
const TEXT_NORMAL = { textTransform: "none" } as const;

function toUpperText(value: string) {
  return value.toUpperCase();
}

function toCapitalizeText(value: string) {
  return value.replace(/(^|[\s(,])\w/g, (match) => match.toUpperCase());
}

function toTitleWords(value: string) {
  return value
    .split(",")
    .map((part) => part.trim())
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(", ");
}

function toSentenceCase(value: string) {
  const trimmed = value.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

const defaultFirstNameValues = [1, 3, 5, 6, 1, 5, 4, 5, 9];
const defaultLastNameValues = [4, 1, 3, 7, 8, 1, 5];

const chartNodes = (
  driver: number,
  conductor: number,
  soulUrge: number,
  personality: number,
  nameDestiny: number,
  mobileRoot: number,
) => [
    { label: "DRIVER NUMBER", sublabel: "(PSYCHIC)", value: driver, position: "top" as const, icon: "mercury" as const },
    { label: "SOUL URGE NUMBER", value: soulUrge, position: "topLeft" as const, icon: "heart" as const },
    { label: "PERSONALITY NUMBER", value: personality, position: "topRight" as const, icon: "user" as const },
    { label: "NAME DESTINY", sublabel: "(SINGLE ROOT)", value: nameDestiny, position: "bottomLeft" as const, icon: "star" as const },
    { label: "MOBILE ROOT NUMBER", value: mobileRoot, position: "bottomRight" as const, icon: "phone" as const },
    { label: "CONDUCTOR NUMBER", sublabel: "(DESTINY)", value: conductor, position: "bottom" as const, icon: "neptune" as const },
  ];

type ChartPosition = "top" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "bottom";

const CHART_CARD_POSITIONS: Record<ChartPosition, React.CSSProperties> = {
  top: { top: "4%", left: "50%", transform: "translateX(-50%)" },
  topLeft: { top: "21%", left: "2%" },
  topRight: { top: "21%", right: "2%" },
  bottomLeft: { bottom: "21%", left: "2%" },
  bottomRight: { bottom: "21%", right: "2%" },
  bottom: { bottom: "4%", left: "50%", transform: "translateX(-50%)" },
};

const CHART_LINE_ENDPOINTS: Record<ChartPosition, { x: number; y: number }> = {
  top: { x: 150, y: 38 },
  topLeft: { x: 52, y: 78 },
  topRight: { x: 248, y: 78 },
  bottomLeft: { x: 52, y: 192 },
  bottomRight: { x: 248, y: 192 },
  bottom: { x: 150, y: 232 },
};

const CHART_CENTER = { x: 150, y: 132 };

function ChartNodeIcon({ type }: { type: "mercury" | "heart" | "user" | "star" | "phone" | "neptune" }) {
  const color = BURGUNDY;
  const size = 14;

  switch (type) {
    case "mercury":
      return (
        <Image
          src="/assets/cover/mercury.png"
          alt=""
          width={size}
          height={size}
          className="shrink-0 object-contain"
          aria-hidden
        />
      );
    case "heart":
      return <Heart size={size} strokeWidth={1.6} style={{ color }} fill="none" />;
    case "user":
      return <User size={size} strokeWidth={1.6} style={{ color }} />;
    case "star":
      return <Star size={size} strokeWidth={1.6} style={{ color }} fill="none" />;
    case "phone":
      return <Smartphone size={size} strokeWidth={1.6} style={{ color }} />;
    case "neptune":
      return (
        <span className="text-[14px] leading-none" style={{ color }} aria-hidden>
          ♆
        </span>
      );
  }
}

function ChartSatelliteCard({
  label,
  sublabel,
  value,
  icon,
  position,
}: {
  label: string;
  sublabel?: string;
  value: number;
  icon: "mercury" | "heart" | "user" | "star" | "phone" | "neptune";
  position: ChartPosition;
}) {
  return (
    <div
      className="absolute z-10 flex w-[80px] flex-col rounded-xl px-1.5 py-1"
      style={{
        ...CHART_CARD_POSITIONS[position],
        border: "1px solid #D8AC71",
        backgroundColor: "#FDF3E2",
      }}
    >
      <div className="flex items-start gap-1">
        <ChartNodeIcon type={icon} />
        <div className="min-w-0 flex-1 leading-tight">
          <p
            className="text-[7px] font-bold tracking-[0.04em]"
            style={{ color: '#1E1B17', ...TEXT_UPPER }}
          >
            {label}
          </p>
          {sublabel && (
            <p
              className="text-[4px] font-semibold"
              style={{ color: BURGUNDY, opacity: 0.9, ...TEXT_UPPER }}
            >
              {sublabel}
            </p>
          )}
        </div>
      </div>
      <p
        className="mt-0.5 text-center text-[18px] font-bold leading-none"
        style={{ color: BURGUNDY }}
      >
        {value}
      </p>
    </div>
  );
}

function CoreVibrationHub({ value }: { value: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center"
    >
      <svg viewBox="0 0 76 76" fill="none" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx={38} cy={38} r={35} stroke="#D8AC71" strokeWidth="1" />
        <circle cx={38} cy={38} r={30} stroke="#D8AC71" strokeWidth="0.6" opacity="0.5" />
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i * 18 * Math.PI) / 180;
          const x1 = 38 + 28 * Math.cos(angle);
          const y1 = 38 + 28 * Math.sin(angle);
          const x2 = 38 + 34 * Math.cos(angle);
          const y2 = 38 + 34 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#D8AC71"
              strokeWidth="0.7"
              opacity="0.45"
            />
          );
        })}
      </svg>
      <p
        className="relative z-10 text-[5.5px] font-bold tracking-[0.08em]"
        style={{ color: BURGUNDY, ...TEXT_UPPER }}
      >
        CORE VIBRATION
      </p>
      <p
        className="relative z-10 text-[26px] font-bold leading-none"
        style={{ color: BURGUNDY }}
      >
        {value}
      </p>
    </div>
  );
}

function VisualNumerologyChartPanel({
  coreVibration,
  driverNumber,
  conductorNumber,
  soulUrgeNumber,
  personalityNumber,
  singleRootNumber,
  mobileRootNumber,
}: {
  coreVibration: number;
  driverNumber: number;
  conductorNumber: number;
  soulUrgeNumber: number;
  personalityNumber: number;
  singleRootNumber: number;
  mobileRootNumber: number;
}) {
  const nodes = chartNodes(
    driverNumber,
    conductorNumber,
    soulUrgeNumber,
    personalityNumber,
    singleRootNumber,
    mobileRootNumber,
  );

  return (
    <div className="relative mx-auto h-[270px] w-full max-w-[300px]">
      <svg
        viewBox="0 0 300 270"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        {nodes.map((node) => {
          const end = CHART_LINE_ENDPOINTS[node.position];
          return (
            <g key={node.label}>
              <line
                x1={CHART_CENTER.x}
                y1={CHART_CENTER.y}
                x2={end.x}
                y2={end.y}
                stroke="#D8AC71"
                strokeWidth="0.9"
                strokeDasharray="4 3"
                opacity="0.7"
              />
              <circle cx={end.x} cy={end.y} r="2" fill="#D8AC71" opacity="0.85" />
            </g>
          );
        })}
      </svg>

      <CoreVibrationHub value={coreVibration} />

      {nodes.map((node) => (
        <ChartSatelliteCard
          key={node.label}
          label={node.label}
          sublabel={node.sublabel}
          value={node.value}
          icon={node.icon}
          position={node.position}
        />
      ))}
    </div>
  );
}

function CoreBirthCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`} style={CORE_CARD_STYLE}>
      {children}
    </div>
  );
}

function CoreNumberBadge({ value }: { value: number }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[22px] font-bold"
      style={{
        backgroundColor: "#A67C52",
        color: "#ffffff",
      }}
    >
      {value}
    </div>
  );
}

function NumeroscopeSectionHeader({ title }: { title: string }) {
  return (
    <div className="relative mb-1 flex items-center justify-center">
      <div className="relative flex w-full items-center  rounded-2xl">
        <h3
          className="text-center text-[9px] font-bold tracking-[0.14em]"
          style={{ color: BURGUNDY, ...TEXT_UPPER }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function CoreBirthSectionHeader() {
  return <NumeroscopeSectionHeader title="1. CORE BIRTH NUMBERS" />;
}

function CoreNumberCard({
  title,
  subtitle,
  value,
  symbol,
  primaryLabel,
  primaryValue,
  qualityValue,
}: {
  title: string;
  subtitle: string;
  value: number;
  symbol: string;
  primaryLabel: string;
  primaryValue: string;
  qualityValue: string;
}) {
  return (
    <CoreBirthCard className="px-2.5 py-2.5">
      <div className="text-center">
        <p
          className="text-[10px] font-bold tracking-[0.1em]"
          style={{ color: COLORS.brown, ...TEXT_UPPER }}
        >
          {title}
        </p>
        <p
          className="mt-0.5 text-[9px]"
          style={{ color: COLORS.brown, fontWeight: 700 }}
        >
          {subtitle}
        </p>
      </div>

      <div
        className="my-2 h-px w-full"
        style={{ backgroundColor: "rgba(184, 134, 11, 0.28)" }}
      />

      <div className="flex flex-1 items-center gap-2">
        <CoreNumberBadge value={value} />
        <span
          className="shrink-0 text-[26px] leading-none"
          style={{ color: "#A67C52" }}
          aria-hidden
        >
          {symbol}
        </span>
        <div className="min-w-0 text-[9px] leading-snug" style={{ color: COLORS.brown, ...TEXT_NORMAL }}>
          <p>
            <span className="font-bold" style={TEXT_CAP}>{primaryLabel}</span>{" "}
            <span style={TEXT_CAP}>{toCapitalizeText(primaryValue)}</span>
          </p>
          <p className="mt-1">
            <span className="font-bold" style={TEXT_CAP}>Quality:</span>{" "}
            <span style={TEXT_CAP}>{toTitleWords(qualityValue)}</span>
          </p>
        </div>
      </div>
    </CoreBirthCard>
  );
}

function NameLetterGrid({
  label,
  letters,
  values,
}: {
  label: string;
  letters: string[];
  values: number[];
}) {
  return (
    <div className="flex-1">
      <p
        className="mb-2 text-center text-[9px] font-bold tracking-[0.12em]"
        style={{ color: BURGUNDY, ...TEXT_UPPER }}
      >
        {toUpperText(label)}
      </p>
      <div className="flex flex-wrap justify-center gap-1">
        {letters.map((letter, index) => (
          <div key={`${label}-${index}`} className="flex flex-col items-center">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-sm text-[10px] font-semibold"
              style={{
                border: "1px solid #D8AC71",
                backgroundColor: "rgba(253, 245, 230, 0.9)",
                color: BURGUNDY,
                ...TEXT_UPPER,
              }}
            >
              {toUpperText(letter)}
            </div>
            <div
              className="mt-0.5 flex h-5 w-6 items-center justify-center rounded-sm text-[9px] font-bold"
              style={{
                border: "1px solid rgba(184, 134, 11, 0.45)",
                backgroundColor: "rgba(184, 134, 11, 0.1)",
                color: BURGUNDY,
              }}
            >
              {values[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pattern3({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/assets/numeroscope/pattern-3.png"
      alt=""
      width={size}
      height={Math.round(size * 0.58)}
      className={`object-contain opacity-80 ${className ?? ""}`}
      aria-hidden
    />
  );
}

export default function Numeroscope({
  birthDate = "14 OCT 1988",
  birthDay = "Thursday",
  driverNumber = 5,
  driverPlanet = "Mercury",
  driverQualities = "Explorer, Communicator, Freedom",
  conductorNumber = 7,
  conductorPlanet = "Neptune",
  conductorQualities = "Mystic, Analyst, Spiritual Seeker",
  kuaNumber = 2,
  kuaElement = "Earth",
  kuaQualities = "Nurturer, Diplomat, Peacemaker",
  fullName = "ALEXANDER VAUGHAN",
  firstName = "ALEXANDER",
  lastName = "VAUGHAN",
  firstNameValues = defaultFirstNameValues,
  lastNameValues = defaultLastNameValues,
  compoundNameTotal = 77,
  singleRootNumber = 7,
  nameInsight = "Name Destiny (7) enhances Conductor (7) — Strong Spiritual Alignment. Driver (5) brings balance through adaptability and communication.",
  mobileNumber = "9876 5432 10",
  mobileDigits = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
  mobileCompoundTotal = 46,
  mobileRootNumber = 1,
  mobileSummary = "Vibration 1 brings leadership, initiative and new beginnings. It supports independence and the drive to create your own path.",
  soulUrgeNumber = 7,
  personalityNumber = 6,
  coreVibration = 7,
  footerSummary = "These core vibrations form the foundation of your numerology blueprint. They reveal your natural strengths, purpose, and the path to your highest potential.",
  pageNumber = "02",
}: NumeroscopeProps) {
  const firstLetters = firstName.split("");
  const lastLetters = lastName.split("");

  return (
    <ReportPageShell padding="20px 40px 52px" pageNumber='02'>
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
          <p className="text-[16px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
            ASTRO AARAMBH
          </p>
          <Pattern3 size={50} className="rotate-180" />
        </div>
        <h1 className="text-[40px] font-bold" style={{ color: COLORS.brown, lineHeight: "1.2" }}>
          NUMEROSCOPE
        </h1>
        <p className="text-[14px]" style={{ color: '#213247', opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}>
          Your Complete Numerology Profile &amp; Vibrational Blueprint
        </p>
      </header>

      {/* Section 1: Core Birth Numbers */}
      <section className="relative z-10 mt-4 font-cinzel">
        <CoreBirthSectionHeader />
        <div className="grid grid-cols-4 gap-2.5">
          <CoreBirthCard className="items-center px-3 py-3 text-center">
            <p
              className="text-[10px] font-bold tracking-[0.12em]"
              style={{ color: COLORS.brown, ...TEXT_UPPER }}
            >
              BIRTH DATE
            </p>
            <Image
              src="/assets/cover/calendar.png"
              alt=""
              width={30}
              height={30}
              className="my-2 object-contain"
              style={{ width: 30, height: "auto" }}
              aria-hidden
            />
            <p
              className="text-[18px] font-bold leading-tight"
              style={{ color: COLORS.brown, ...TEXT_UPPER }}
            >
              {toUpperText(birthDate)}
            </p>
            <p
              className="mt-1 text-[10px]"
              style={{ color: COLORS.brown, opacity: 0.8, ...TEXT_CAP }}
            >
              {toSentenceCase(birthDay)}
            </p>
          </CoreBirthCard>

          <CoreNumberCard
            title="DRIVER NUMBER"
            subtitle="(Psychic Number)"
            value={driverNumber}
            symbol="☿"
            primaryLabel="Planet:"
            primaryValue={driverPlanet}
            qualityValue={driverQualities}
          />

          <CoreNumberCard
            title="CONDUCTOR NUMBER"
            subtitle="(Destiny Number)"
            value={conductorNumber}
            symbol="♆"
            primaryLabel="Planet:"
            primaryValue={conductorPlanet}
            qualityValue={conductorQualities}
          />

          <CoreNumberCard
            title="KUA NUMBER"
            subtitle="(For Reference)"
            value={kuaNumber}
            symbol="☽"
            primaryLabel="Element:"
            primaryValue={kuaElement}
            qualityValue={kuaQualities}
          />
        </div>
      </section>

      {/* Section 2: Full Name Vibration Analysis */}
      <section className="relative z-10 mt-4 font-cinzel">
        <NumeroscopeSectionHeader title="2. FULL NAME VIBRATION ANALYSIS (PYTHAGOREAN SYSTEM)" />
        <div className="px-4 py-4" style={CORE_CARD_STYLE}>
          <p
            className="mb-3 text-center text-[10px] font-bold tracking-[0.12em]"
            style={{ color: BURGUNDY, ...TEXT_UPPER }}
          >
            FULL NAME: {toUpperText(fullName)}
          </p>

          <div className="flex gap-6">
            <NameLetterGrid label={firstName} letters={firstLetters} values={firstNameValues} />
            <NameLetterGrid label={lastName} letters={lastLetters} values={lastNameValues} />
          </div>

          <div
            className="mt-4 grid grid-cols-3 border-t pt-3"
            style={{ borderColor: "rgba(184, 134, 11, 0.35)" }}
          >
            <div
              className="px-3 text-center"
              style={{ borderRight: "1px solid rgba(184, 134, 11, 0.28)" }}
            >
              <p
                className="text-[9px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                COMPOUND NAME TOTAL
              </p>
              <p
                className="mt-1.5 text-[32px] font-bold leading-none"
                style={{ color: BURGUNDY }}
              >
                {compoundNameTotal}
              </p>
            </div>

            <div
              className="px-3 text-center"
              style={{ borderRight: "1px solid rgba(184, 134, 11, 0.28)" }}
            >
              <p
                className="text-[9px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                SINGLE ROOT / DESTINY NUMBER
              </p>
              <div
                className="mt-1.5 flex items-center justify-center gap-1.5 text-[28px] font-bold leading-none"
                style={{ color: BURGUNDY }}
              >
                <span>{compoundNameTotal}</span>
                <span style={{ color: COLORS.gold }}>→</span>
                <span>{singleRootNumber}</span>
              </div>
            </div>

            <div className="px-3">
              <p
                className="text-[9px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                COMPARISON &amp; INSIGHT
              </p>
              <p
                className="mt-1.5 text-[9px] leading-snug font-nunito-sans"
                style={{ color: BURGUNDY, opacity: 0.9, ...TEXT_NORMAL }}
              >
                {nameInsight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 3 & 4: Bottom row */}
      <section className="relative z-10 mt-4 grid grid-cols-2 gap-3 font-cinzel">
        {/* Mobile Number Vibration */}
        <div>
          <NumeroscopeSectionHeader title="3. MOBILE NUMBER VIBRATION" />
          <div className="px-3 py-6" style={{ ...CORE_CARD_STYLE, marginTop: "28px" }}>
            <p
              className="text-[8px] font-bold tracking-wider"
              style={{ color: COLORS.gold, ...TEXT_UPPER }}
            >
              MOBILE NUMBER: {toUpperText(mobileNumber)}
            </p>

            <div
              className="mt-2 rounded px-2 py-2"
              style={{ border: "1px solid rgba(184, 134, 11, 0.35)" }}
            >
              <p
                className="mb-1.5 text-[7px] font-bold tracking-wider"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                DIGIT BREAKDOWN
              </p>
              <div className="flex flex-wrap gap-1">
                {mobileDigits.map((digit, index) => (
                  <div
                    key={index}
                    className="flex h-5 w-5 items-center justify-center text-[9px] font-semibold"
                    style={{
                      border: "1px solid rgba(184, 134, 11, 0.45)",
                      color: BURGUNDY,
                      ...TEXT_NORMAL,
                    }}
                  >
                    {digit}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-2 grid grid-cols-2 overflow-hidden rounded"
              style={{ border: "1px solid rgba(184, 134, 11, 0.35)" }}
            >
              <div
                className="px-2 py-1.5 text-center"
                style={{ borderRight: "1px solid rgba(184, 134, 11, 0.28)" }}
              >
                <p
                  className="text-[7px] font-bold"
                  style={{ color: COLORS.gold, ...TEXT_UPPER }}
                >
                  COMPOUND TOTAL
                </p>
                <p className="text-sm font-bold" style={{ color: BURGUNDY, ...TEXT_NORMAL }}>
                  {mobileCompoundTotal}
                </p>
              </div>
              <div className="px-2 py-1.5 text-center">
                <p
                  className="text-[7px] font-bold"
                  style={{ color: COLORS.gold, ...TEXT_UPPER }}
                >
                  SINGLE ROOT NUMBER
                </p>
                <p className="text-[9px] font-bold" style={{ color: BURGUNDY, ...TEXT_NORMAL }}>
                  {mobileCompoundTotal} → 10 → {mobileRootNumber}
                </p>
              </div>
            </div>

            <div
              className="mt-2 rounded p-2"
              style={{ border: "1px solid rgba(184, 134, 11, 0.3)" }}
            >
              <p
                className="mb-1 text-[7px] font-bold tracking-wider"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                CURRENT MOBILE VIBRATION SUMMARY
              </p>
              <div className="flex gap-2">
                <Smartphone size={14} style={{ color: COLORS.gold, flexShrink: 0 }} />
                <p
                  className="text-[9px] leading-snug font-nunito-sans"
                  style={{ color: BURGUNDY, opacity: 0.9, ...TEXT_NORMAL }}
                >
                  {mobileSummary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Numerology Chart */}
        <div>
          <NumeroscopeSectionHeader title="4. VISUAL NUMEROLOGY CHART (PYTHAGOREAN SYSTEM)" />
          <div
            className="relative flex min-h-[290px] items-center justify-center px-2 py-4"
            style={CORE_CARD_STYLE}
          >
            <VisualNumerologyChartPanel
              coreVibration={coreVibration}
              driverNumber={driverNumber}
              conductorNumber={conductorNumber}
              soulUrgeNumber={soulUrgeNumber}
              personalityNumber={personalityNumber}
              singleRootNumber={singleRootNumber}
              mobileRootNumber={mobileRootNumber}
            />
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-2 flex justify-center px-2 pb-1">
        <FooterSummaryBanner summary={footerSummary} />
      </footer>
    </ReportPageShell>
  );
}
