import BusinessReportPage from "@/Components/BusinessNameReport/BusinessReportPage";
import ExistingBusinessNameBreakdown from "@/Components/BusinessNameReport/ExistingBusinessNameBreakdown";
import ReportHomeClient from "@/Components/ReportHomeClient";

export default function BusinessNameReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Business Name Analysis Report"
      reportDescription="Business name vibration and analysis"
    >

      <BusinessReportPage  /> {/* 1 */}
      <ExistingBusinessNameBreakdown /> {/* 4 */}

    </ReportHomeClient>
  );
}
