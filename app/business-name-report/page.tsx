import BusinessReportPage from "@/Components/BusinessNameReport/BusinessReportPage";
import ReportHomeClient from "@/Components/ReportHomeClient";

export default function BusinessNameReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Business Name Analysis Report"
      reportDescription="Business name vibration and analysis"
    >

      <BusinessReportPage  /> {/* 1 */}

    </ReportHomeClient>
  );
}
