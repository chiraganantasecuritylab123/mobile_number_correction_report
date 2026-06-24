import Image from "next/image";
import type { ReactNode } from "react";
import { Building2, Calendar, IndianRupee, Rocket, Shield, TrendingUp, User, type LucideIcon } from "lucide-react";
import { CoverLotus } from "../CommunComponents";
import BusinessNameReportPageShell from "./BusinessNameReportPageShell";
import {
  BUSINESS_ASSETS,
  COLORS,
  BusinessReportFooter,
  BusinessReportHeader,
  OrnamentDivider,
} from "./BusinessReportCommon";

export type FinancialFactorItem = {
  label: string;
  description: string;
  score: number;
  analysis: string;
  iconSrc?: string;
};

export type BusinessNameReportPageProps = {
  pageNumber?: string;
  subtitle?: string;
  subtitle2?: string;
  companyName?: string;
  totalFinancialScoreLabel?: string;
  financialAlignmentScore?: number;
  financialFactors?: FinancialFactorItem[];
  summaryText?: string;
  keyStrengths?: string[];
  footerMetrics?: {
    wealthVibration: string;
    moneyAttraction: string;
    financialStability: string;
    growthPotential: string;
  };
};

function CompanyNameFrame() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* <OrnamentDivider width={250} /> */}
      <div className="relative">
        <Image
          src="/assets/business-name-report/top-effect.png"
          alt="Client"
          width={400}
          height={50}
        />

        <div className="absolute top-1/2 left-16 -translate-y-1/2 flex h-[32px] w-[32px] items-center justify-center rounded-full text-[22px] font-bold text-white bg-[#4A0E17]">
          08
        </div>

        <h2
          className="absolute top-1/2 right-12 -translate-y-1/2 text-center text-[11px] font-bold tracking-[0.08em]"
          style={{ color: COLORS.brown }}
        >
          FINANCIAL FREQUENCY ANALYSIS
        </h2>
      </div>
      <p className="text-center text-[13px] max-w-[480px] italic font-nunito-sans" style={{ color: COLORS.brown }}>
        This section reveals how your business name vibration attracts money, supports cash flow and builds long-term wealth.
      </p>
    </div>
  );
}

function ScoreHeaderSection({
  companyName,
  totalFinancialScoreLabel,
  financialAlignmentScore,
}: {
  companyName: string;
  totalFinancialScoreLabel: string;
  financialAlignmentScore: number;
}) {
  return (
    <section
      className="w-[697px] h-[140px] mx-auto grid grid-cols-3 items-center text-center font-cinzel bg-cover bg-no-repeat relative px-6 py-4"
      style={{ backgroundImage: `url('/assets/signaturePages/foooter-background.png')`, backgroundSize: "100% 100%" }}
    >
      {/* Current Business Name */}
      <div className="flex flex-col items-center justify-center border-r border-[#b8860b]/30 h-[90px] px-4">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-full bg-[#4A0E17] flex items-center justify-center text-white text-[12px] shadow-sm">
            🏢
          </div>
          <span className="text-[10px] font-bold tracking-wider" style={{ color: COLORS.brown }}>
            CURRENT BUSINESS NAME
          </span>
        </div>
        <span className="text-[14px] font-bold tracking-wide leading-tight max-w-[180px]" style={{ color: COLORS.red }}>
          {companyName}
        </span>
      </div>

      {/* Total Financial Score */}
      <div className="flex flex-col items-center justify-center border-r border-[#b8860b]/30 h-[90px] px-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-[#4A0E17] flex items-center justify-center text-white text-[12px] shadow-sm">
            📈
          </div>
          <span className="text-[10px] font-bold tracking-wider" style={{ color: COLORS.brown }}>
            TOTAL FINANCIAL SCORE
          </span>
        </div>
        <div className="flex gap-0.5 my-1">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-amber-500 text-[18px]">★</span>
          ))}
          <span className="text-amber-500 text-[18px] opacity-40">★</span>
        </div>
        <span className="text-[13px] font-bold tracking-widest text-emerald-700">
          {totalFinancialScoreLabel}
        </span>
      </div>

      {/* Financial Frequency Score Gauge */}
      <div className="flex flex-col items-center justify-center px-4 relative">
        <span className="text-[10px] font-bold tracking-wider mb-2" style={{ color: COLORS.brown }}>
          FINANCIAL FREQUENCY SCORE
        </span>

        <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-[7px] border-amber-600/10 border-t-amber-600 border-r-amber-600 border-b-amber-600/60 rotate-[45deg]">
          <div className="text-center -rotate-[45deg]">
            <span className="text-[22px] font-bold block leading-none" style={{ color: COLORS.brown }}>
              {financialAlignmentScore}%
            </span>
            <span className="text-[7.5px] font-bold tracking-tighter text-emerald-700 block mt-1 leading-tight uppercase font-sans">
              High Financial<br />Alignment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper functions to render stylized vector icons mapping exactly to image_bfd93d.jpg */
function getFactorIcon(label: string) {
  const baseOuter = "w-8 h-8 rounded-full bg-[#4A0E17] flex items-center justify-center shrink-0 border border-[#b8860b]/40 shadow-md text-amber-200";
  if (label.includes("WEALTH")) return <div className={`${baseOuter} font-serif font-bold text-[15px]`}>₹</div>;
  if (label.includes("CASH FLOW")) return <div className={`${baseOuter} text-[13px]`}>💵</div>;
  if (label.includes("SALES")) return <div className={`${baseOuter} text-[13px]`}>🛒</div>;
  if (label.includes("INVESTMENT")) return <div className={`${baseOuter} text-[13px]`}>💰</div>;
  if (label.includes("EXPANSION")) return <div className={`${baseOuter} text-[13px] font-bold`}>⤢</div>;
  return <div className={`${baseOuter} text-[13px]`}>🛡️</div>;
}

function getAnalysisIcon(label: string) {
  const baseCircle = "w-7 h-7 rounded-full border border-emerald-700/60 bg-emerald-50/20 flex items-center justify-center shrink-0 text-[11px] text-emerald-800 font-bold shadow-inner";
  if (label.includes("WEALTH")) return <div className={baseCircle}>📈</div>;
  if (label.includes("CASH FLOW")) return <div className={baseCircle}>⇅</div>;
  if (label.includes("SALES")) return <div className={baseCircle}>📊</div>;
  if (label.includes("INVESTMENT")) return <div className={baseCircle}>👥</div>;
  if (label.includes("EXPANSION")) return <div className={baseCircle}>🚀</div>;
  return <div className={baseCircle}>✓</div>;
}

function FinancialVibrationBreakdown({ factors }: { factors: FinancialFactorItem[] }) {
  return (
    <section className=" w-full border border-[#b8860b]/40 rounded-sm overflow-hidden bg-transparent">
      {/* Table Header Section Accent */}
      <div className="bg-[#4A0E17] text-white text-center text-[12px] font-bold tracking-widest font-cinzel shadow-sm relative">
        FINANCIAL VIBRATION BREAKDOWN
      </div>

      {/* Table Columns Heading Sub-bar */}
      <div className="grid grid-cols-12 border-b border-[#b8860b]/30 bg-[#f5efe2]/40 py-1.5 text-[10px] font-bold font-cinzel text-center text-[#4A0E17] tracking-widest">
        <div className="col-span-4 border-r border-[#b8860b]/25">FINANCIAL FACTOR</div>
        <div className="col-span-4 border-r border-[#b8860b]/25">SCORE</div>
        <div className="col-span-4">ANALYSIS</div>
      </div>

      {/* Table Rows - Fully transparent container backdrop to inherit core page colors */}
      <div className="divide-y divide-[#b8860b]/25 bg-transparent">
        {factors.map((factor, index) => (
          <div key={index} className="grid grid-cols-12 items-center py-1 px-1 hover:bg-black/[0.01] transition-colors">

            {/* 1. Financial Factor Component column */}
            <div className="col-span-4 flex items-center gap-3 pr-2 border-r border-[#b8860b]/25 h-full">
              {getFactorIcon(factor.label)}
              <div className="flex flex-col justify-center">
                <h4 className="text-[11px] font-bold leading-tight font-cinzel tracking-wide" style={{ color: COLORS.brown }}>
                  {factor.label}
                </h4>
                <p className="text-[9.5px] text-gray-600 leading-snug mt-0.5 max-w-[170px] font-nunito-sans">
                  {factor.description}
                </p>
              </div>
            </div>

            {/* 2. Side-by-Side Horizontal Progress Track & Percentage Metric Value */}
            <div className="col-span-4 px-4 border-r border-[#b8860b]/25 flex items-center gap-4 h-full">
              <div className="flex-1 flex flex-col justify-center">
                <div className="w-full bg-[#ebdcb9]/30 h-2.5 rounded-full overflow-hidden border border-gray-300/20 p-[1px]">
                  <div
                    className="bg-emerald-700 h-full rounded-full transition-all duration-500"
                    style={{ width: `${factor.score}%` }}
                  />
                </div>
                <div className="flex justify-between text-[7px] text-gray-500 mt-1 font-sans tracking-tight px-0.5">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Exact Green Numeric text matching your reference layout */}
              <div className="text-[19px] font-bold text-emerald-800 font-cinzel tracking-tight min-w-[42px] text-right">
                {factor.score}%
              </div>
            </div>

            {/* 3. Analysis Column Segment */}
            <div className="col-span-4 pl-4 flex items-start gap-3 h-full justify-start py-1">
              {getAnalysisIcon(factor.label)}
              <p className="text-[10px] leading-relaxed text-gray-700 font-sans tracking-normal max-w-[210px] font-nunito-sans">
                {factor.analysis}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

function SummaryAndStrengths({
  summaryText,
  strengths,
}: {
  summaryText: string;
  strengths: string[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {/* Financial Vibration Summary */}
      <div
        className="relative h-[180px]"
        style={{
          backgroundImage:
            "url('/assets/signaturePages/financialMoney.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 bottom-0 right-0 flex flex-col justify-center"
          style={{
            width: "62%",
            paddingRight: "20px",
            paddingLeft: "10px",
          }}
        >
          <h4
            className="text-center font-bold text-[10px] font-cinzel "
            style={{ color: COLORS.brown }}
          >
            FINANCIAL VIBRATION SUMMARY
          </h4>

          <p
            className="text-[10px] leading-relaxed text-center font-nunito-sans"
            style={{ color: "#4b3a2a" }}
          >
            {summaryText}
          </p>
        </div>
      </div>

      {/* Key Financial Strengths */}
      <div
        className="relative h-[180px] px-5 py-4"
        style={{
          backgroundImage:
            "url('/assets/signaturePages/squereBackgroundImage.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h4
          className="text-center font-bold text-[12px] font-cinzel "
          style={{ color: COLORS.brown }}
        >
          KEY FINANCIAL STRENGTHS
        </h4>

        <ul className=" px-2">
          {strengths.map((strength, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-[10px]"
              style={{ color: "#4b3a2a" }}
            >
              <span className="text-green-700 font-bold shrink-0 text-[12px]">
                ✔
              </span>

              <span className="leading-snug">{strength}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MatrixFooterSection({
  metrics
}: {
  metrics: NonNullable<BusinessNameReportPageProps["footerMetrics"]>
}) {
  return (
    // <section className="grid grid-cols-4 border border-[#b8860b]/30 rounded-sm divide-x divide-[#b8860b]/30 bg-[#fdfbf7]/50 text-center overflow-hidden font-cinzel">
    <div
  className="relative h-[70px] rounded-md overflow-hidden"
  style={{
    backgroundImage:
      "url('/assets/signaturePages/foooter-background.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="grid grid-cols-4 h-full">
    
    <div className="flex items-center px-4 border-r border-[#d6b16c]">
      <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center mr-3">
        <IndianRupee size={18} className="text-white" />
      </div>

      <div>
        <p className="text-[8px] uppercase">WEALTH VIBRATION</p>
        <p className="text-[14px] font-bold text-green-800">
          {metrics.wealthVibration}
        </p>
      </div>
    </div>

    <div className="flex items-center px-4 border-r border-[#d6b16c]">
      <div className="w-10 h-10 rounded-full bg-[#c88b18] flex items-center justify-center mr-3">
        <TrendingUp size={18} className="text-white" />
      </div>

      <div>
        <p className="text-[8px] uppercase">MONEY ATTRACTION</p>
        <p className="text-[14px] font-bold text-[#8c5b00]">
          {metrics.moneyAttraction}
        </p>
      </div>
    </div>

    <div className="flex items-center px-4 border-r border-[#d6b16c]">
      <div className="w-10 h-10 rounded-full bg-[#5a0f0f] flex items-center justify-center mr-3">
        <Shield size={18} className="text-white" />
      </div>

      <div>
        <p className="text-[8px] uppercase">FINANCIAL STABILITY</p>
        <p className="text-[14px] font-bold text-[#5a0f0f]">
          {metrics.financialStability}
        </p>
      </div>
    </div>

    <div className="flex items-center px-4">
      <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center mr-3">
        <Rocket size={18} className="text-white" />
      </div>

      <div>
        <p className="text-[8px] uppercase">GROWTH POTENTIAL</p>
        <p className="text-[14px] font-bold text-purple-700">
          {metrics.growthPotential}
        </p>
      </div>
    </div>

  </div>
</div>
    // </section>
  );
}

export default function FinancialFrequencyAnalysis({
  pageNumber = "08",
  subtitle = "BUSINESS NAME OPTIMIZATION REPORT",
  subtitle2 = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  companyName = "ANANTAX TECHNOLOGIES PVT LTD",
  totalFinancialScoreLabel = "EXCELLENT",
  financialAlignmentScore = 86,
  financialFactors = [
    {
      label: "WEALTH NUMBER",
      description: "Overall wealth attraction and prosperity vibration.",
      score: 90,
      analysis: "Excellent wealth vibration. Strong ability to accumulate and sustain wealth."
    },
    {
      label: "CASH FLOW ENERGY",
      description: "Ability to maintain smooth and consistent cash flow.",
      score: 82,
      analysis: "Good cash flow energy. Minor fluctuations may occur occasionally."
    },
    {
      label: "SALES ATTRACTION",
      description: "Power to attract customers and increase sales.",
      score: 88,
      analysis: "Strong sales attraction. Supports customer trust and repeat business."
    },
    {
      label: "INVESTMENT ATTRACTION",
      description: "Ability to attract investors and financial support.",
      score: 84,
      analysis: "Good investor attraction. Builds confidence and financial backing."
    },
    {
      label: "EXPANSION POTENTIAL",
      description: "Vibration supporting growth, expansion and new ventures.",
      score: 87,
      analysis: "Strong expansion energy. Favors new opportunities and business growth."
    },
    {
      label: "LONG-TERM STABILITY",
      description: "Financial stability and ability to sustain long-term success.",
      score: 84,
      analysis: "Good long-term stability. Supports lasting financial security and peace."
    }
  ],
  summaryText = "Your business name carries strong financial vibrations that support wealth creation, consistent cash flow, and business growth. The energy is highly favorable for attracting customers, investments, and expansion opportunities. Maintain focus, clarity and financial discipline to maximize these positive vibrations.",
  keyStrengths = [
    "High wealth attraction and prosperity vibration.",
    "Good cash flow with strong financial circulation.",
    "Excellent sales and customer attraction energy.",
    "Strong potential to attract investors and partners.",
    "High expansion potential and growth support.",
    "Good long-term financial stability and security."
  ],
  footerMetrics = {
    wealthVibration: "HIGH",
    moneyAttraction: "STRONG",
    financialStability: "GOOD",
    growthPotential: "VERY HIGH"
  }
}: BusinessNameReportPageProps) {
  return (
    <BusinessNameReportPageShell padding="18px 40px 20px" pageNumber={pageNumber}>
      <div className="flex h-full flex-col justify-between">
        <div>
          {/* Header */}
          <BusinessReportHeader subtitle={subtitle} subtitle2={subtitle2} className=""/>

          {/* Heading Framework */}
          <CompanyNameFrame />

          {/* Score Assessment Deck */}
          <ScoreHeaderSection
            companyName={companyName}
            totalFinancialScoreLabel={totalFinancialScoreLabel}
            financialAlignmentScore={financialAlignmentScore}
          />

          {/* Core breakdown rows table */}
          <FinancialVibrationBreakdown factors={financialFactors} />

          {/* Summary Block Elements */}
          <SummaryAndStrengths summaryText={summaryText} strengths={keyStrengths} />

          {/* Segment matrix grid footer */}
          <MatrixFooterSection metrics={footerMetrics} />
        </div>

        {/* Outer Shell Global Page Footer */}
        <BusinessReportFooter pageNumber={pageNumber} />
      </div>
    </BusinessNameReportPageShell>
  );
}