import Image from "next/image";
import type { ReactNode } from "react";
import { Building2, Calendar, User, type LucideIcon } from "lucide-react";
import { CoverLotus } from "../CommunComponents";
import BusinessNameReportPageShell from "./BusinessNameReportPageShell";
import {
  BUSINESS_ASSETS,
  COLORS,
  BusinessReportFooter,
  BusinessReportHeader,
  OrnamentDivider,
} from "./BusinessReportCommon";

// const scriptFont = Great_Vibes({
//   subsets: ["cyrillic"],
//   weight: "400",
//   // display: "swap",
// });

export type BusinessNameReportPageProps = {
  pageNumber?: string;
  subtitle?: string;
  subtitle2?: string;
  companyName?: string;
  businessOwner?: string;
  businessCategory?: string;
  reportDate?: string;
  quote?: string;
  brandScore?: number;
  maxScore?: number;
  destinyNumber?: number;
  successFrequencyLabel?: string;
};

function CompanyNameFrame({ companyName }: { companyName: string }) {
  return (
    <section className="relative z-10 mt-3 flex flex-col items-center text-center">
      <p
        className="text-[15px] font-semibold"
        style={{ color: COLORS.brown }}
      >
        PREPARED FOR
      </p>

      <div
        className="flex h-[110px] w-[570px] items-center justify-center mx-auto bg-[url('/assets/businessReport/frame-bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <p
          className="absolute px-2 text-center text-[23px] font-bold leading-tight tracking-[0.04em]"
          style={{ color: COLORS.brown }}
        >
          {companyName}
        </p>

      </div>
    </section>
  );
}

function DetailIconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div
      className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.5px dashed ${COLORS.gold}` }}
    >
      <Icon size={35} strokeWidth={1.25} style={{ color: COLORS.gold }} aria-hidden />
    </div>
  );
}

function DetailField({
  icon,
  label,
  value,
  valueClassName = "",
  italicValue = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  valueClassName?: string;
  italicValue?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <DetailIconBadge icon={icon} />
      <div className="flex flex-col items-start text-left">
        <span
          className="text-[14px] font-bold tracking-[0.1em]"
          style={{ color: COLORS.brown }}
        >
          {label}
        </span>
        <span
          className={`text-[17px] leading-tight font-bold ${italicValue ? "italic" : ""} ${valueClassName}`}
          style={{ color: COLORS.red }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="relative mx-1 flex min-h-[120px] w-px self-stretch items-center justify-center">
      <div
        className="absolute inset-y-0 w-px"
        style={{ backgroundColor: "rgba(184,134,11,0.45)" }}
      />
      <span
        className="relative z-10 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: COLORS.gold }}
      />
    </div>
  );
}

function BusinessDetailsSection({
  businessOwner,
  businessCategory,
  reportDate,
}: {
  businessOwner: string;
  businessCategory: string;
  reportDate: string;
}) {
  return (
    <section className="relative z-10 mt-5 px-4 font-cinzel">
      <div className="flex items-center gap-5 max-w-[600px] mx-auto">
        <div className="flex items-center justify-between">
          <DetailField
            icon={User}
            label="BUSINESS OWNER"
            value={businessOwner}
            // valueClassName={scriptFont.className}
            italicValue
          />
        </div>

        <VerticalDivider />

        <div className="flex flex-1 flex-col justify-center pl-2">
          <DetailField
            icon={Building2}
            label="BUSINESS CATEGORY"
            value={businessCategory}
            // valueClassName={scriptFont.className}
            italicValue
          />
          <div
            className="my-3 h-px w-full"
            style={{ backgroundColor: "rgba(184,134,11,0.45)" }}
          />
          <DetailField icon={Calendar} label="REPORT DATE" value={reportDate} />
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ quote }: { quote: string }) {
  return (
    <section className="relative z-10 mt-3 flex items-center justify-center gap-2 px-4 text-center">
      <CoverLotus size={100} />
      <p
        className="max-w-[420px] text-[16px] italic leading-relaxed"
        style={{ color: COLORS.brown, fontFamily: "Georgia, serif" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <CoverLotus size={100} />
    </section>
  );
}

function ScoreColumn({
  label,
  children,
  showDivider = true,
}: {
  label: string;
  children: ReactNode;
  showDivider?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col items-center px-1 text-center ${showDivider ? "border-r border-[#b8860b]/45" : ""
        }`}
    >
      <p
        className="text-[13px] font-bold"
        style={{ color: COLORS.brown }}
      >
        {label}
      </p>
      <div className="mt-1 flex min-h-[88px] items-center justify-center">{children}</div>
    </div>
  );
}

function BrandScoreCardSection({
  brandScore,
  maxScore,
  destinyNumber,
  successFrequencyLabel,
}: {
  brandScore: number;
  maxScore: number;
  destinyNumber: number;
  successFrequencyLabel: string;
}) {
  return (
    <section className="relative z-10 mt-4 px-2">
      <div
        className="relative rounded-sm px-3 pb-4 pt-5 h-[248px] w-[697px] mx-auto bg-[url('/assets/businessReport/homepage-card-bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <p
          className="px-3 text-center text-[18px] font-bold"
        >
          BUSINESS BRAND SCORE CARD
        </p>

        <div className="flex items-stretch mt-2">
          <ScoreColumn label="CURRENT BRAND SCORE">
            <div
              className="relative flex h-[150px] w-[150px] items-center justify-center bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${BUSINESS_ASSETS.scoreCircle}')` }}
            >
              <p className="font-bold leading-none" style={{ color: COLORS.brown }}>
                <span className="text-[35px]">{brandScore}</span><br />
                <span className="text-[16px]"> / {maxScore}</span>
              </p>
            </div>
          </ScoreColumn>

          <ScoreColumn label="BUSINESS DESTINY NUMBER">
            <div
              className="relative flex h-[140px] w-[180px] items-center justify-center bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${BUSINESS_ASSETS.destinyMandala}')` }}
            >
              <span
                className="text-[40px] font-bold leading-none"
                style={{ color: COLORS.brown }}
              >
                {destinyNumber}
              </span>
            </div>
          </ScoreColumn>

          <ScoreColumn label="SUCCESS FREQUENCY" showDivider={false}>
            <div className="flex flex-col items-center gap-1">
              <Image
                src={BUSINESS_ASSETS.building}
                alt=""
                width={120}
                height={120}
                className="object-contain"
                aria-hidden
              />
              <p
                className="text-[15px] font-bold"
                style={{ color: COLORS.brown }}
              >
                {successFrequencyLabel}
              </p>
            </div>
          </ScoreColumn>
        </div>
      </div>
    </section>
  );
}

export default function BusinessReportPage({
  pageNumber = "01",
  subtitle = "BUSINESS NAME OPTIMIZATION REPORT",
  subtitle2 = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  companyName = "ANANTAX TECHNOLOGIES PVT LTD",
  businessOwner = "Bhargav Gujarati",
  businessCategory = "Information Technology",
  reportDate = "09-06-2026",
  quote = "Your Brand Name Shapes Your Business Destiny. Align It With Prosperity.",
  brandScore = 82,
  maxScore = 100,
  destinyNumber = 5,
  successFrequencyLabel = "HIGH GROWTH POTENTIAL",
}: BusinessNameReportPageProps) {
  return (
    <BusinessNameReportPageShell padding="18px 40px 20px" pageNumber={pageNumber}>
      <div className="flex h-full flex-col">
        <BusinessReportHeader subtitle={subtitle} subtitle2={subtitle2} />

        <CompanyNameFrame companyName={companyName} />

        <BusinessDetailsSection
          businessOwner={businessOwner}
          businessCategory={businessCategory}
          reportDate={reportDate}
        />

        <QuoteSection quote={quote} />

        <BrandScoreCardSection
          brandScore={brandScore}
          maxScore={maxScore}
          destinyNumber={destinyNumber}
          successFrequencyLabel={successFrequencyLabel}
        />

        <BusinessReportFooter pageNumber={pageNumber} />
      </div>
    </BusinessNameReportPageShell>
  );
}
