import ReportHomeClient from "@/Components/ReportHomeClient";
import DirectionAlignmentAnalysis from "@/Components/SignatureAnalysisReport/DirectionAlignmentAnalysis";
import WritingStyleAnalysis from "@/Components/SignatureAnalysisReport/WritingStyleAnalysis";

export default function SignatureReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Signature Analysis Report"
      reportDescription="Graphology insights and signature vibration analysis"
    >
      <DirectionAlignmentAnalysis /> {/* 3 */}
      <WritingStyleAnalysis /> {/* 4 */}
    </ReportHomeClient>
  );
}
