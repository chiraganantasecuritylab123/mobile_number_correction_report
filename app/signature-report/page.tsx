import ReportHomeClient from "@/Components/ReportHomeClient";
import DirectionAlignmentAnalysis from "@/Components/SignatureAnalysisReport/DirectionAlignmentAnalysis";
import FinancialIndicators from "@/Components/SignatureAnalysisReport/FinancialIndicators";
import NumerologyView from "@/Components/SignatureAnalysisReport/NumerologyView";
import PersonalityIndicators from "@/Components/SignatureAnalysisReport/PersonalityIndicators";
import RelationshipIndicators from "@/Components/SignatureAnalysisReport/RelationshipIndicators";
import PressureStrokeAnalysis from "@/Components/SignatureAnalysisReport/PressureStrokeAnalysis";
import SignatureGeometryAnalysis from "@/Components/SignatureAnalysisReport/SignatureGeometryAnalysis";
import SignatureImprovement from "@/Components/SignatureAnalysisReport/SignatureImprovement";
import WritingStyleAnalysis from "@/Components/SignatureAnalysisReport/WritingStyleAnalysis";

export default function SignatureReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Signature Analysis Report"
      reportDescription="Graphology insights and signature vibration analysis"
    >
      <DirectionAlignmentAnalysis /> {/* 4 */}
      <WritingStyleAnalysis /> {/* 5 */}
      <PressureStrokeAnalysis /> {/* 6 */}
      <SignatureGeometryAnalysis /> {/* 7 */}
      <PersonalityIndicators /> {/* 9 */}
      <FinancialIndicators /> {/* 11 */}
      <RelationshipIndicators /> {/* 12 */}
      <NumerologyView /> {/* 13 */}
      <SignatureImprovement /> {/* 14 */}
    </ReportHomeClient>
  );
}
