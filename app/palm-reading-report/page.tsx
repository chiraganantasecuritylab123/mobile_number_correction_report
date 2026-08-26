import ReportHomeClient from "@/Components/ReportHomeClient";
import PalmReadingCoverPage from "@/Components/PalmReadingReport/CoverPage";
import HeartLineAnalysis from "@/Components/PalmReadingReport/HeartLineAnalysis";
import LifeLineAnalysis from "@/Components/PalmReadingReport/LifeLineAnalysis";
import LoveRelationshipReading from "@/Components/PalmReadingReport/LoveRelationshipReading";
import MarriageIndications from "@/Components/PalmReadingReport/MarriageIndications";
import OverallPalmAnalysis from "@/Components/PalmReadingReport/OverallPalmAnalysis";
import ThumbAnalysis from "@/Components/PalmReadingReport/ThumbAnalysis";

export default function PalmReadingReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Palm Reading Report"
      reportDescription="Insights from your hands, guidance for your life"
    >
      <PalmReadingCoverPage />
      <OverallPalmAnalysis pageNumber="02" />
      <ThumbAnalysis pageNumber="04" />
      <HeartLineAnalysis pageNumber="06" />
      <LoveRelationshipReading pageNumber="07" />
      <MarriageIndications pageNumber="08" />
      <LifeLineAnalysis pageNumber="09" />
    </ReportHomeClient>
  );
}
