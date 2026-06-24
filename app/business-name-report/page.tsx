import BrandingMarketingAnalysis from "@/Components/BusinessNameReport/BrandingMarketingAnalysis";
import RecommendedCorrectedNames from "@/Components/BusinessNameReport/RecommendedCorrectedNames";
import BusinessReportPage from "@/Components/BusinessNameReport/BusinessReportPage";
import BusinessNameDefectAnalysis from "@/Components/BusinessNameReport/BusinessNameDefectAnalysis";
import ExecutiveSummary from "@/Components/BusinessNameReport/ExecutiveSummary";
import IndustryCompatibility from "@/Components/BusinessNameReport/IndustryCompatibility";
import PartnerDetails from "@/Components/BusinessNameReport/PartnerDetails";
import PartnerNumerologyDetails from "@/Components/BusinessNameReport/PartnerNumerologyDetails";
import ReportHomeClient from "@/Components/ReportHomeClient";

export default function BusinessNameReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Business Name Analysis Report"
      reportDescription="Business name vibration and analysis"
    >
      <BusinessReportPage /> {/* 1 */}
      <PartnerNumerologyDetails /> {/* 2 */}
      <ExecutiveSummary /> {/* 3 — Executive Summary */}
      <BusinessNameDefectAnalysis /> {/* 6 — Business Name Defect Analysis */}
      <IndustryCompatibility /> {/* 7 — Industry Compatibility */}
      <BrandingMarketingAnalysis /> {/* 9 — Branding and Marketing Analysis */}
      <RecommendedCorrectedNames /> {/* 10 — Recommended Corrected Names */}
      {/* <PartnerDetails pageNumber="03" /> */}
    </ReportHomeClient>
  );
}
