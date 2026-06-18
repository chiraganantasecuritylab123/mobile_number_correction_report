import { Smartphone } from "lucide-react";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";
import Image from "next/image";
import { cinzel } from "@/app/fonts";
import { CoverLotus } from "./CommunComponents";

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
    { label: "DRIVER NUMBER", sublabel: "(PSYCHIC)", value: driver, symbol: "☿", position: "top" as const },
    { label: "SOUL URGE NUMBER", value: soulUrge, symbol: "♥", position: "topLeft" as const },
    { label: "PERSONALITY NUMBER", value: personality, symbol: "☺", position: "topRight" as const },
    { label: "NAME DESTINY", sublabel: "(SINGLE ROOT)", value: nameDestiny, symbol: "★", position: "bottomLeft" as const },
    { label: "MOBILE ROOT NUMBER", value: mobileRoot, symbol: "☎", position: "bottomRight" as const },
    { label: "CONDUCTOR NUMBER", sublabel: "(DESTINY)", value: conductor, symbol: "♆", position: "bottom" as const },
  ];

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
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[22px] font-bold"
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
    <div className="relative mb-3 flex items-center justify-center">
      <div
        className="relative flex w-full items-center justify-center rounded-2xl px-10 py-2"
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
          className="text-[8px] font-bold tracking-[0.1em]"
          style={{ color: COLORS.brown, ...TEXT_UPPER }}
        >
          {title}
        </p>
        <p
          className="mt-0.5 text-[7px]"
          style={{ color: COLORS.brown, opacity: 0.75, ...TEXT_CAP }}
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
        <div className="min-w-0 text-[7.5px] leading-snug" style={{ color: COLORS.brown, ...TEXT_NORMAL }}>
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
      <section className={`relative z-10 mt-4 ${cinzel.className}`}>
        <CoreBirthSectionHeader />
        <div className="grid grid-cols-4 gap-2.5">
          <CoreBirthCard className="items-center px-3 py-3 text-center">
            <p
              className="text-[8px] font-bold tracking-[0.12em]"
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
              className="text-[15px] font-bold leading-tight"
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
      <section className={`relative z-10 mt-4 ${cinzel.className}`}>
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
                className="text-[7.5px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                COMPOUND NAME TOTAL
              </p>
              <p
                className="mt-1.5 text-[28px] font-bold leading-none"
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
                className="text-[7.5px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                SINGLE ROOT / DESTINY NUMBER
              </p>
              <div
                className="mt-1.5 flex items-center justify-center gap-1.5 text-[18px] font-bold leading-none"
                style={{ color: BURGUNDY }}
              >
                <span>{compoundNameTotal}</span>
                <span style={{ color: COLORS.gold }}>→</span>
                <span>{singleRootNumber}</span>
              </div>
            </div>

            <div className="px-3">
              <p
                className="text-[7.5px] font-bold tracking-[0.1em]"
                style={{ color: COLORS.gold, ...TEXT_UPPER }}
              >
                COMPARISON &amp; INSIGHT
              </p>
              <p
                className="mt-1.5 text-[8px] leading-snug"
                style={{ color: BURGUNDY, opacity: 0.9, ...TEXT_NORMAL }}
              >
                {nameInsight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 3 & 4: Bottom row */}
      <section className={`relative z-10 mt-4 grid grid-cols-2 gap-3 ${cinzel.className}`}>
        {/* Mobile Number Vibration */}
        <div>
          <NumeroscopeSectionHeader title="3. MOBILE NUMBER VIBRATION" />
          <div className="px-3 py-6" style={{...CORE_CARD_STYLE , marginTop: "28px"}}>
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
                  className="text-[7.5px] leading-snug"
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
          <div className=" relative flex items-center justify-center " style={CORE_CARD_STYLE}>
            <Image
              src="/assets/numeroscope/numeroscope-sec-4.png"
              alt=""
              width={230}
              height={300}
              className="cover"
              aria-hidden
            />
            <p className="absolute top-8 left-[50%] -translate-x-1/2 text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              5
            </p>
            <p className="absolute top-18 left-[28%]  text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              7
            </p>
            <p className="absolute top-19 right-[26%] text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              6
            </p>
            <p className="absolute top-30 left-[50%] text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              {coreVibration}
            </p>
            <p className="absolute bottom-17 left-[27%] text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              {coreVibration}
            </p>
            <p className="absolute bottom-17 right-[26%] text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              1
            </p>
            <p className="absolute bottom-3 left-[50%] text-[10px] font-bold tracking-[0.12em]" style={{ color: BURGUNDY, ...TEXT_UPPER }}>
              {coreVibration}
            </p>
          </div>
        </div>
      </section>

      {/* Footer summary */}
      <footer className="relative z-10 mt-4 flex flex-col items-center px-4 pb-2">
        <div className="flex items-center gap-2 border border-[#D68F34] rounded-xl p-3">
          <CoverLotus size={40} />
          <p
            className="max-w-[480px] text-center text-[10px] leading-relaxed"
            style={{ color: COLORS.brown, opacity: 0.85, fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif" }}
          >
            {footerSummary}
          </p>
          <CoverLotus size={40} />
        </div>
      </footer>

      {/* <PageFooterBar className="relative -mx-[30px] mt-3 h-9 w-[calc(100%+60px)]" pageNumber={pageNumber} /> */}
    </ReportPageShell>
  );
}
