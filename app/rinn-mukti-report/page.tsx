import ReportHomeClient from "@/Components/ReportHomeClient";
import DebtYogaAnalysis from "@/Components/RinnMuktiReport/DebtYogaAnalysis";
import HouseAnalysisForWealth from "@/Components/RinnMuktiReport/HouseAnalysisForWealth";
import PlanetWiseFinancialBlockages from "@/Components/RinnMuktiReport/PlanetWiseFinancialBlockages";
import RinnMuktiCoverPage from "@/Components/RinnMuktiReport/CoverPage";
import SourceOfFinancialProblems from "@/Components/RinnMuktiReport/SourceOfFinancialProblems";

export default function RinnMuktiReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Rinn Mukti Report"
      reportDescription="Karmic debt and financial blockage analysis report"
    >
      <RinnMuktiCoverPage pageNumber="01" /> {/* 1 */}
      <DebtYogaAnalysis pageNumber="03" /> {/* 3 */}
      <HouseAnalysisForWealth pageNumber="04" /> {/* 4 */}
      <PlanetWiseFinancialBlockages pageNumber="05" /> {/* 5 */}
      <SourceOfFinancialProblems pageNumber="06" /> {/* 6 */}
    </ReportHomeClient>
  );
}