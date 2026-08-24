import ReportHomeClient from "@/Components/ReportHomeClient";
import PalmReadingCoverPage from "@/Components/PalmReadingReport/CoverPage";

export default function PalmReadingReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Palm Reading Report"
      reportDescription="Insights from your hands, guidance for your life"
    >
      <PalmReadingCoverPage />
    </ReportHomeClient>
  );
}
