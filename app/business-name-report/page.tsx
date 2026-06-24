import BusinessReportPage from "@/Components/BusinessNameReport/BusinessReportPage";
import ExecutiveSummary from "@/Components/BusinessNameReport/ExecutiveSummary";
import PartnerDetails from "@/Components/BusinessNameReport/PartnerDetails";
import ReportHomeClient from "@/Components/ReportHomeClient";

export default function BusinessNameReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Business Name Analysis Report"
      reportDescription="Business name vibration and analysis"
    >

      <BusinessReportPage /> {/* 1 */}
      <ExecutiveSummary /> {/* 3 — Executive Summary */}
      {/* <PartnerDetails pageNumber="03" /> */}

    </ReportHomeClient>
  );
}
