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
import PersonalityAnalysis from "@/Components/SignatureAnalysisReport/PersonalityAnalysis";
import SignatureAnalysisReport from "@/Components/SignatureAnalysisReport/SignatureAnalysisReport";
import SignatureStructureAnalysis from "@/Components/SignatureAnalysisReport/SignatureStructureAnalysis";
import EndingStrokeAnalysis from "@/Components/SignatureAnalysisReport/EndingStrokeAnalysis";

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
      <PersonalityIndicators /> {/* 9 */}
      <FinancialIndicators /> {/* 11 */}
      <RelationshipIndicators /> {/* 12 */}
      <NumerologyView /> {/* 13 */}
      <SignatureImprovement /> {/* 14 */}
      <EndingStrokeAnalysis /> {/* 8 */}
    </ReportHomeClient>
  );
}
