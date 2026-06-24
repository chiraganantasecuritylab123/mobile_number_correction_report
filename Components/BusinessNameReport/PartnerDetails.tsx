import { Globe, Phone, Star } from "lucide-react";
import Image from "next/image";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

const COLORS = REPORT_COLORS;

const HEADER = {
  maroon: "#4a0e0e",
  gold: "#A96505",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  panelBg: "/assets/signatureReport/foooter-background.png",
  numerologyCircle: "/assets/business-name-report/numerology.png",
  synchronyDiagram: "/assets/business-name-report/synchrony.png",
} as const;

export type PartnerNumerologyData = {
  driverNumber: string | number;
  conductorNumber: string | number;
  kuaNumber: string | number;
  destinyNumber: string | number;
  personalYearNumber: string | number;
  nameVibrationNumber: string | number;
  birthVibrationNumber: string | number;
};

export type PartnerCompatibilityData = {
  businessCompatibility: string;
  roleCompatibility: string;
  energyContribution: string;
  overallHarmony: string;
};

export type PartnerProfile = {
  id: string;
  partnerLabel: string;
  name: string;
  designation: string;
  numerology: PartnerNumerologyData;
  compatibility: PartnerCompatibilityData;
  score: number;
  maxScore?: number;
  stars: number;
};

export type PartnersSynchronyData = {
  overallSynchrony: string;
  energyBalance: string;
  teamVibrationLevel: string;
  growthAlignment: string;
  longTermSuccessPotential: string;
};

export type PartnerDetailsProps = {
  pageNumber?: string;
  reportTitle?: string;
  reportSubtitle?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  partners?: PartnerProfile[];
  synchrony?: PartnersSynchronyData;
  insightText?: string;
  recommendationText?: string;
  brandName?: string;
  servicesText?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

const defaultPartners: PartnerProfile[] = [
  {
    id: "01",
    partnerLabel: "PARTNER 1",
    name: "Bhargav Gujarati",
    designation: "Managing Director",
    numerology: {
      driverNumber: 5,
      conductorNumber: 3,
      kuaNumber: 2,
      destinyNumber: 8,
      personalYearNumber: 7,
      nameVibrationNumber: 6,
      birthVibrationNumber: 4,
    },
    compatibility: {
      businessCompatibility: "88%",
      roleCompatibility: "92%",
      energyContribution: "HIGH",
      overallHarmony: "FAVORABLE",
    },
    score: 82,
    stars: 4,
  },
  {
    id: "02",
    partnerLabel: "PARTNER 2",
    name: "Priya Shah",
    designation: "Operations Head",
    numerology: {
      driverNumber: 1,
      conductorNumber: 9,
      kuaNumber: 6,
      destinyNumber: 3,
      personalYearNumber: 5,
      nameVibrationNumber: 2,
      birthVibrationNumber: 7,
    },
    compatibility: {
      businessCompatibility: "76%",
      roleCompatibility: "84%",
      energyContribution: "MODERATE",
      overallHarmony: "BALANCED",
    },
    score: 74,
    stars: 4,
  },
  {
    id: "03",
    partnerLabel: "PARTNER 3",
    name: "Rahul Mehta",
    designation: "Finance Director",
    numerology: {
      driverNumber: 8,
      conductorNumber: 4,
      kuaNumber: 1,
      destinyNumber: 6,
      personalYearNumber: 3,
      nameVibrationNumber: 9,
      birthVibrationNumber: 5,
    },
    compatibility: {
      businessCompatibility: "81%",
      roleCompatibility: "79%",
      energyContribution: "HIGH",
      overallHarmony: "GOOD",
    },
    score: 78,
    stars: 4,
  },
];

const defaultSynchrony: PartnersSynchronyData = {
  overallSynchrony: "78%",
  energyBalance: "GOOD",
  teamVibrationLevel: "STRONG",
  growthAlignment: "HIGH",
  longTermSuccessPotential: "FAVORABLE",
};

function InstagramIcon({ size = 10 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS.gold}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={COLORS.gold} stroke="none" />
    </svg>
  );
}

function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      aria-hidden
    />
  );
}

function StarRating({ count, max = 5, size = 9 }: { count: number; max?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={`partner-star-${index}`}
          size={size}
          fill={index < count ? COLORS.gold : "none"}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2">
        <Pattern3 size={24} />
        <h2
          className="text-[11px] font-bold tracking-[0.1em]"
          style={{ color: COLORS.brown }}
        >
          {title}
        </h2>
        <Pattern3 size={24} className="rotate-180" />
      </div>
      {description ? (
        <p
          className="mt-0.5 max-w-[560px] text-[9px] leading-snug"
          style={{ color: COLORS.black, opacity: 0.85 }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function DataTable({
  title,
  rows,
  valueClassName,
}: {
  title: string;
  rows: { label: string; value: string | number }[];
  valueClassName?: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <p
        className="mb-1 text-center text-[7.5px] font-bold tracking-[0.08em]"
        style={{ color: COLORS.gold }}
      >
        {title}
      </p>
      <div
        className="flex flex-1 flex-col overflow-hidden rounded-sm"
        style={{ border: `1px solid ${COLORS.gold}`, opacity: 0.95 }}
      >
        {rows.map((row, index) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-center gap-x-2 px-1.5 py-[3px]"
            style={{
              borderBottom:
                index < rows.length - 1 ? `1px solid rgba(184, 134, 11, 0.25)` : "none",
            }}
          >
            <span
              className="text-[7px] font-semibold leading-tight"
              style={{ color: COLORS.brown, opacity: 0.85 }}
            >
              {row.label}
            </span>
            <span
              className={`text-[7.5px] font-bold ${valueClassName ?? ""}`}
              style={{ color: COLORS.brown }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: PartnerProfile }) {
  const maxScore = partner.maxScore ?? 100;
  const numerologyRows = [
    { label: "Driver Number", value: partner.numerology.driverNumber },
    { label: "Conductor Number", value: partner.numerology.conductorNumber },
    { label: "Kua Number", value: partner.numerology.kuaNumber },
    { label: "Destiny Number", value: partner.numerology.destinyNumber },
    { label: "Personal Year Number", value: partner.numerology.personalYearNumber },
    { label: "Name Vibration Number", value: partner.numerology.nameVibrationNumber },
    { label: "Birth Vibration Number", value: partner.numerology.birthVibrationNumber },
  ];

  const compatibilityRows = [
    { label: "Business Compatibility", value: partner.compatibility.businessCompatibility },
    { label: "Role Compatibility", value: partner.compatibility.roleCompatibility },
    { label: "Energy Contribution", value: partner.compatibility.energyContribution },
    { label: "Overall Harmony", value: partner.compatibility.overallHarmony },
  ];

  return (
    <div
      className="relative grid grid-cols-[118px_1fr_1fr_92px] items-stretch gap-2 bg-no-repeat px-2.5 py-2"
      style={{
        backgroundImage: `url('${ASSETS.panelBg}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <span
          className="mb-1 rounded-sm px-2 py-0.5 text-[7px] font-bold tracking-[0.08em]"
          style={{ backgroundColor: COLORS.brown, color: COLORS.cream }}
        >
          {partner.partnerLabel}
        </span>

        <div
          className="relative flex h-[52px] w-[52px] items-center justify-center bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${ASSETS.numerologyCircle}')` }}
        >
          <span className="text-[18px] font-bold leading-none" style={{ color: COLORS.brown }}>
            {partner.id}
          </span>
        </div>

        <p
          className="mt-1 text-[9px] font-bold leading-tight"
          style={{ color: HEADER.maroon }}
        >
          {partner.name}
        </p>
        <p
          className="text-[7.5px] italic leading-tight"
          style={{ color: COLORS.gold }}
        >
          {partner.designation}
        </p>
      </div>

      <DataTable title="NAME NUMEROLOGY" rows={numerologyRows} />

      <DataTable
        title="COMPATIBILITY WITH BUSINESS"
        rows={compatibilityRows}
        valueClassName="text-right"
      />

      <div className="flex flex-col items-center justify-center">
        <p
          className="mb-1 text-center text-[7px] font-bold tracking-[0.08em]"
          style={{ color: COLORS.gold }}
        >
          PARTNER SCORE
        </p>
        <div
          className="relative flex h-[58px] w-[58px] items-center justify-center bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${ASSETS.numerologyCircle}')` }}
        >
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold leading-none" style={{ color: COLORS.brown }}>
              {partner.score}
            </span>
            <span className="text-[7px] font-semibold" style={{ color: COLORS.brown, opacity: 0.7 }}>
              / {maxScore}
            </span>
          </div>
        </div>
        <StarRating count={partner.stars} size={8} />
      </div>
    </div>
  );
}

function SynchronyDiagram() {
  return (
    <Image
      src={ASSETS.synchronyDiagram}
      alt=""
      width={72}
      height={72}
      className="h-[72px] w-[72px] shrink-0 object-contain"
      aria-hidden
    />
  );
}

function PanelBox({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[108px] flex-col bg-no-repeat px-2.5 py-2 ${className}`}
      style={{
        backgroundImage: `url('${ASSETS.panelBg}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <p
        className="mb-1 text-center text-[8px] font-bold tracking-[0.08em]"
        style={{ color: COLORS.brown }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function ReportFooter({
  brandName,
  servicesText,
  website,
  phone,
  instagram,
  pageNumber,
}: {
  brandName: string;
  servicesText: string;
  website: string;
  phone: string;
  instagram: string;
  pageNumber: string;
}) {
  return (
    <footer className="relative z-10 mt-auto font-nunito-sans">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2">
          <Pattern3 size={28} />
          <p className="text-[18px] font-bold tracking-[0.06em]" style={{ color: COLORS.brown }}>
            {brandName}
          </p>
          <Pattern3 size={28} className="rotate-180" />
        </div>

        <p
          className="mt-0.5 text-[8px] font-semibold tracking-[0.12em]"
          style={{ color: COLORS.gold }}
        >
          {servicesText}
        </p>

        <div className="mt-1.5 flex items-center justify-center gap-4 text-[8px]" style={{ color: COLORS.brown }}>
          <span className="inline-flex items-center gap-1">
            <Globe size={10} strokeWidth={1.5} style={{ color: COLORS.gold }} />
            {website}
          </span>
          <span className="inline-flex items-center gap-1">
            <Phone size={10} strokeWidth={1.5} style={{ color: COLORS.gold }} />
            {phone}
          </span>
          <span className="inline-flex items-center gap-1">
            <InstagramIcon size={10} />
            {instagram}
          </span>
        </div>
      </div>

      <p
        className="absolute bottom-0 right-0 text-[9px] font-bold tracking-[0.12em]"
        style={{ color: COLORS.brown, opacity: 0.75 }}
      >
        PAGE {pageNumber}
      </p>
    </footer>
  );
}

export default function PartnerDetails({
  pageNumber = "04",
  reportTitle = "BUSINESS NAME OPTIMIZATION REPORT",
  reportSubtitle = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  sectionTitle = "04. PARTNERS NUMEROLOGY PROFILE",
  sectionDescription = "Detailed numerological profile of all partners associated with the business.",
  partners = defaultPartners,
  synchrony = defaultSynchrony,
  insightText = "The partner combination shows strong leadership alignment with complementary energy patterns. Partner 1 brings entrepreneurial drive, Partner 2 adds operational stability, and Partner 3 contributes financial discipline. Together they create a balanced foundation for sustainable business growth.",
  recommendationText = "Maintain clear role definitions among partners to maximize individual strengths. Regular numerological alignment reviews are recommended during major business decisions or expansion phases.",
  brandName = "Astro Aarambh",
  servicesText = "BUSINESS NUMEROLOGY | BRAND NAMING | SUCCESS ALIGNMENT",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: PartnerDetailsProps) {
  const synchronyRows = [
    { label: "Overall Partners Synchrony", value: synchrony.overallSynchrony },
    { label: "Energy Balance", value: synchrony.energyBalance },
    { label: "Team Vibration Level", value: synchrony.teamVibrationLevel },
    { label: "Growth Alignment", value: synchrony.growthAlignment },
    { label: "Long Term Success Potential", value: synchrony.longTermSuccessPotential },
  ];

  return (
    <BusinessNameReportPageShell padding="14px 32px 18px" pageNumber={pageNumber}>
      <div className="flex h-full flex-col font-nunito-sans">
        <header className="flex flex-col items-center text-center">
          <Image
            src={ASSETS.logo}
            alt="Astro Aarambh"
            width={72}
            height={72}
            className="mb-1"
            priority
          />

          <h1
            className="text-[28px] font-bold leading-none tracking-[0.08em]"
            style={{ color: HEADER.maroon }}
          >
            ASTRO AARAMBH
          </h1>

          <p
            className="mt-1 text-[13px] font-bold tracking-[0.06em]"
            style={{ color: HEADER.gold }}
          >
            {reportTitle}
          </p>

          <p
            className="mt-0.5 max-w-[560px] text-[8px] font-semibold tracking-[0.1em]"
            style={{ color: COLORS.black, opacity: 0.85 }}
          >
            {reportSubtitle}
          </p>

          <div className="mt-1.5">
            <OrnamentDivider width={260} />
          </div>
        </header>

        <section className="mt-2">
          <SectionHeader title={sectionTitle} description={sectionDescription} />

          <div className="mt-2 flex flex-col gap-2">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </section>
         
        <section className="mt-2 grid grid-cols-2 gap-2">
          <PanelBox title="04. PARTNERS SYNCHRONY OVERVIEW">
            <div className="flex flex-1 items-center gap-2">
              <SynchronyDiagram />
              <div className="min-w-0 flex-1">
                {synchronyRows.map((row, index) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_auto] gap-x-2 py-[2px]"
                    style={{
                      borderBottom:
                        index < synchronyRows.length - 1
                          ? `1px dotted rgba(184, 134, 11, 0.35)`
                          : "none",
                    }}
                  >
                    <span className="text-[7px] font-semibold" style={{ color: COLORS.brown, opacity: 0.85 }}>
                      {row.label}
                    </span>
                    <span className="text-[7.5px] font-bold" style={{ color: COLORS.green }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PanelBox>

          <PanelBox title="05. NUMEROLOGICAL INSIGHT">
            <div className="flex flex-1 items-center gap-2">
              <CoverLotus size={42} className="shrink-0 opacity-90" />
              <p
                className="text-[7.5px] leading-relaxed"
                style={{ color: COLORS.black, opacity: 0.9 }}
              >
                {insightText}
              </p>
            </div>
          </PanelBox>
        </section>

        <section className="mt-2">
          <SectionHeader title="06. RECOMMENDATION" />
          <div
            className="mt-1 flex min-h-[52px] items-center gap-2 bg-no-repeat px-3 py-2"
            style={{
              backgroundImage: `url('${ASSETS.panelBg}')`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
            <CoverLotus size={34} className="shrink-0 opacity-90" />
            <p
              className="flex-1 text-center text-[8px] leading-relaxed"
              style={{ color: COLORS.black, opacity: 0.9 }}
            >
              {recommendationText}
            </p>
            <CoverLotus size={34} className="shrink-0 opacity-90" />
          </div>
        </section>

        <ReportFooter
          brandName={brandName}
          servicesText={servicesText}
          website={website}
          phone={phone}
          instagram={instagram}
          pageNumber={pageNumber}
        />
      </div>
    </BusinessNameReportPageShell>
  );
}
