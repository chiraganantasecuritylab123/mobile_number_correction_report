import ReportHomeClient from "@/Components/ReportHomeClient";
import DirectionAlignmentAnalysis from "@/Components/SignatureAnalysisReport/DirectionAlignmentAnalysis";
import PressureStrokeAnalysis from "@/Components/SignatureAnalysisReport/PressureStrokeAnalysis";
import SignatureGeometryAnalysis from "@/Components/SignatureAnalysisReport/SignatureGeometryAnalysis";
import WritingStyleAnalysis from "@/Components/SignatureAnalysisReport/WritingStyleAnalysis";
import PersonalityAnalysis from "@/Components/SignatureAnalysisReport/PersonalityAnalysis";
import SignatureAnalysisReport from "@/Components/SignatureAnalysisReport/SignatureAnalysisReport";
import SignatureStructureAnalysis from "@/Components/SignatureAnalysisReport/SignatureStructureAnalysis";

export default function SignatureReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Signature Analysis Report"
      reportDescription="Graphology insights and signature vibration analysis"
    >

      <SignatureAnalysisReport /> {/* 1 */}
      <PersonalityAnalysis /> {/* 2 */}
      <SignatureStructureAnalysis />
      <DirectionAlignmentAnalysis /> {/* 4 */}
      <WritingStyleAnalysis /> {/* 5 */}
      <PressureStrokeAnalysis /> {/* 6 */}
      <SignatureGeometryAnalysis /> {/* 7 */}
    </ReportHomeClient>
  );
}
