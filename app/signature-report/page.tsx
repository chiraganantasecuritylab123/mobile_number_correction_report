import ReportHomeClient from "@/Components/ReportHomeClient";
import DirectionAlignmentAnalysis from "@/Components/SignatureAnalysisReport/DirectionAlignmentAnalysis";
import FinancialIndicators from "@/Components/SignatureAnalysisReport/FinancialIndicators";
import NumerologyView from "@/Components/SignatureAnalysisReport/NumerologyView";
import PersonalityIndicators from "@/Components/SignatureAnalysisReport/PersonalityIndicators";
import RelationshipIndicators from "@/Components/SignatureAnalysisReport/RelationshipIndicators";
import PressureStrokeAnalysis from "@/Components/SignatureAnalysisReport/PressureStrokeAnalysis";
import SignatureGeometryAnalysis from "@/Components/SignatureAnalysisReport/SignatureGeometryAnalysis";
import ScoringSystem from "@/Components/SignatureAnalysisReport/ScoringSystem";
import SignatureImprovement from "@/Components/SignatureAnalysisReport/SignatureImprovement";
import Summary from "@/Components/SignatureAnalysisReport/Summary";
import WritingStyleAnalysis from "@/Components/SignatureAnalysisReport/WritingStyleAnalysis";
import PersonalityAnalysis from "@/Components/SignatureAnalysisReport/PersonalityAnalysis";
import SignatureAnalysisReport from "@/Components/SignatureAnalysisReport/SignatureAnalysisReport";
import SignatureStructureAnalysis from "@/Components/SignatureAnalysisReport/SignatureStructureAnalysis";
import EndingStrokeAnalysis from "@/Components/SignatureAnalysisReport/EndingStrokeAnalysis";
import CareerIndicators from "@/Components/SignatureAnalysisReport/CareerIndicators";

export default function SignatureReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Signature Analysis Report"
      reportDescription="Graphology insights and signature vibration analysis"
    >

      <SignatureAnalysisReport  /> {/* 1 */}
      <PersonalityAnalysis pageNumber='02' /> {/* 2 */}
      <SignatureStructureAnalysis pageNumber='03' /> {/* 3 */}
      <DirectionAlignmentAnalysis pageNumber='04' /> {/* 4 */}
      <WritingStyleAnalysis pageNumber='05' /> {/* 5 */}
      <PressureStrokeAnalysis pageNumber='06' /> {/* 6 */}
      <SignatureGeometryAnalysis pageNumber='07' /> {/* 7 */}
      <EndingStrokeAnalysis pageNumber='08' /> {/* 8 */}
      <PersonalityIndicators pageNumber='09' /> {/* 9 */}
      <CareerIndicators pageNumber='10' /> {/* 10 */}
      <FinancialIndicators pageNumber='11' /> {/* 11 */}
      <RelationshipIndicators pageNumber='12' /> {/* 12 */}
      <NumerologyView pageNumber='13' /> {/* 13 */}
      <SignatureImprovement pageNumber='14' /> {/* 14 */}
      <ScoringSystem pageNumber='15' /> {/* 15 */}
      <Summary pageNumber='16' /> {/* 16 */}
    </ReportHomeClient>
  );
}
