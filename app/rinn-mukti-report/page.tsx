import ReportHomeClient from "@/Components/ReportHomeClient";
import DebtYogaAnalysis from "@/Components/RinnMuktiReport/DebtYogaAnalysis";
import HouseAnalysisForWealth from "@/Components/RinnMuktiReport/HouseAnalysisForWealth";
import PlanetWiseFinancialBlockages from "@/Components/RinnMuktiReport/PlanetWiseFinancialBlockages";
import RinnMuktiCoverPage from "@/Components/RinnMuktiReport/CoverPage";
import FinancialKarmaOverview from "@/Components/RinnMuktiReport/FinancialKarmaOverview";

export default function RinnMuktiReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Rinn Mukti Report"
      reportDescription="Karmic debt and financial blockage analysis report"
    >
      <RinnMuktiCoverPage /> {/* 1 */}
       <FinancialKarmaOverview  /> {/* 2 */}
      <DebtYogaAnalysis pageNumber="03" /> {/* 3 */}
      <HouseAnalysisForWealth pageNumber="04" /> {/* 4 */}
      <PlanetWiseFinancialBlockages pageNumber="05" /> {/* 5 */}
    </ReportHomeClient>
  );
}