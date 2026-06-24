import BrandingMarketingAnalysis from "@/Components/BusinessNameReport/BrandingMarketingAnalysis";
import RecommendedCorrectedNames from "@/Components/BusinessNameReport/RecommendedCorrectedNames";
import BusinessReportPage from "@/Components/BusinessNameReport/BusinessReportPage";
import BusinessNameDefectAnalysis from "@/Components/BusinessNameReport/BusinessNameDefectAnalysis";
import IndustryCompatibility from "@/Components/BusinessNameReport/IndustryCompatibility";
import PartnerNumerologyDetails from "@/Components/BusinessNameReport/PartnerNumerologyDetails";
import ExecutiveSummary from "@/Components/BusinessNameReport/ExecutiveSummary";
import PartnerDetails from "@/Components/BusinessNameReport/PartnerDetails";
import PartnerVsBusinessAlignment from "@/Components/BusinessNameReport/PartnerVsBusinessAlignment";
import ReportHomeClient from "@/Components/ReportHomeClient";
import FinancialFrequencyAnalysis from "@/Components/BusinessNameReport/FinancialFrequencyAnalysis";

export default function BusinessNameReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Business Name Analysis Report"
      reportDescription="Business name vibration and analysis"
    >
      <BusinessReportPage /> {/* 1 */}
      <PartnerNumerologyDetails /> {/* 2 */}
      <ExecutiveSummary /> {/* 3 */}
      {/* <PartnerDetails pageNumber="03" /> */}
      <PartnerVsBusinessAlignment /> {/* 5 */}
      <BusinessNameDefectAnalysis /> {/* 6 */}
      <IndustryCompatibility /> {/* 7 */}
      <FinancialFrequencyAnalysis /> {/* 8 */}
      <BrandingMarketingAnalysis /> {/* 9 */}
      <RecommendedCorrectedNames /> {/* 10 */}
    </ReportHomeClient>
  );
}
