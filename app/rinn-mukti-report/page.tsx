import ReportHomeClient from "@/Components/ReportHomeClient";
import DebtYogaAnalysis from "@/Components/RinnMuktiReport/DebtYogaAnalysis";
import HouseAnalysisForWealth from "@/Components/RinnMuktiReport/HouseAnalysisForWealth";
import PlanetWiseFinancialBlockages from "@/Components/RinnMuktiReport/PlanetWiseFinancialBlockages";
import RinnMuktiCoverPage from "@/Components/RinnMuktiReport/CoverPage";
import FinancialKarmaOverview from "@/Components/RinnMuktiReport/FinancialKarmaOverview";
import CurrentDashaandTransitImpact from "@/Components/RinnMuktiReport/CurrentDashaandTransitImpact";
import SourceOfFinancialProblems from "@/Components/RinnMuktiReport/SourceOfFinancialProblems";
import CompleteSummary from "@/Components/RinnMuktiReport/CompleteSummary";
import FinancialRecoveryTimeline from "@/Components/RinnMuktiReport/FinancialRecoveryTimeline";
import RinMuktiRemedies from "@/Components/RinnMuktiReport/RinMuktiRemedies";

export default function RinnMuktiReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Rinn Mukti Report"
      reportDescription="Karmic debt and financial blockage analysis report"
    >
      <RinnMuktiCoverPage /> {/* 1 */}
      <FinancialKarmaOverview /> {/* 2 */}
      <DebtYogaAnalysis pageNumber="03" /> {/* 3 */}
      <HouseAnalysisForWealth pageNumber="04" /> {/* 4 */}
      <PlanetWiseFinancialBlockages pageNumber="05" /> {/* 5 */}
      <SourceOfFinancialProblems pageNumber="06" /> {/* 6 */}
      <CurrentDashaandTransitImpact pageNumber="07" /> {/* 7 */}
      <CompleteSummary pageNumber="08" /> {/* 8 */}
      <FinancialRecoveryTimeline pageNumber="09" /> {/* 9 */}
      <RinMuktiRemedies pageNumber="10" /> {/* 10 */}
    </ReportHomeClient>
  );
}