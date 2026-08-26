import ReportHomeClient from "@/Components/ReportHomeClient";
import PalmReadingCoverPage from "@/Components/PalmReadingReport/CoverPage";
import PalmShape from "@/Components/PalmReadingReport/PalmShape";
import HeadLine from "@/Components/PalmReadingReport/HeadLine";
import MajorLifeChanges from "@/Components/PalmReadingReport/MajorLifeChanges";
import CareerReading from "@/Components/PalmReadingReport/CareerReading";
import CareerGrowth from "@/Components/PalmReadingReport/CareerGrowth";
import MoneyWealth from "@/Components/PalmReadingReport/MoneyWealth";
import WealthBuildingPotential from "@/Components/PalmReadingReport/WealthBuildingPotential";
import RecognitionSuccess from "@/Components/PalmReadingReport/RecognitionSuccess";
import TravelForeignConnection from "@/Components/PalmReadingReport/TravelForeignConnection";
import FamilySocialRelationships from "@/Components/PalmReadingReport/FamilySocialRelationships";
import MentalEmotionalBalance from "@/Components/PalmReadingReport/MentalEmotionalBalance";
import TenSpecialSigns from "@/Components/PalmReadingReport/TenSpecialSigns";
import TenSpecialSignsPart2 from "@/Components/PalmReadingReport/TenSpecialSignsPart2";
import Conclusion from "@/Components/PalmReadingReport/Conclusion";
import FinalConclusion from "@/Components/PalmReadingReport/FinalConclusion";
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
      <PalmReadingCoverPage /> {/* 1 */}
      <OverallPalmAnalysis pageNumber="02" />
      <PalmShape pageNumber="03" /> {/* 3 */}
      <ThumbAnalysis pageNumber="04" />
      <HeadLine pageNumber="05" /> {/* 5 */}
      <HeartLineAnalysis pageNumber="06" />
      <LoveRelationshipReading pageNumber="07" />
      <MarriageIndications pageNumber="08" />
      <LifeLineAnalysis pageNumber="09" />
      <MajorLifeChanges pageNumber="10" /> {/* 10 */}
      <CareerReading pageNumber="11" /> {/* 11 */}
      <CareerGrowth pageNumber="12" /> {/* 12 */}
      <MoneyWealth pageNumber="13" /> {/* 13 */}
      <WealthBuildingPotential pageNumber="14" /> {/* 14 */}
      <RecognitionSuccess pageNumber="15" /> {/* 15 */}
      <TravelForeignConnection pageNumber="16" /> {/* 16 */}
      <FamilySocialRelationships pageNumber="17" /> {/* 17 */}
      <MentalEmotionalBalance pageNumber="18" /> {/* 18 */}
      <TenSpecialSigns pageNumber="19" /> {/* 19 */}
      <TenSpecialSignsPart2 pageNumber="20" /> {/* 20 */}
      <Conclusion pageNumber="21" /> {/* 21 */}
      <FinalConclusion pageNumber="22" /> {/* 22 */}
    </ReportHomeClient>
  );
}
