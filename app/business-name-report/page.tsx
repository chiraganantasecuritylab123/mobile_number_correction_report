import BusinessReportPage from "@/Components/BusinessNameReport/BusinessReportPage";
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
      <ExecutiveSummary /> {/* 3 — Executive Summary */}
      {/* <PartnerDetails pageNumber="03" /> */}

      <PartnerVsBusinessAlignment /> {/* 5 */}
      <FinancialFrequencyAnalysis /> {/* 8 */}

    </ReportHomeClient>
  );
}
