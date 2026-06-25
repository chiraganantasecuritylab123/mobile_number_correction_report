import ReportHomeClient from "@/Components/ReportHomeClient";
import RinnMuktiCoverPage from "@/Components/RinnMuktiReport/CoverPage";

export default function RinnMuktiReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Rinn Mukti Report"
      reportDescription="Karmic debt and financial blockage analysis report"
    >
      <RinnMuktiCoverPage pageNumber="01" /> {/* 1 */}
    </ReportHomeClient>
  );
}
