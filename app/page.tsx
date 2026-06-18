import AnalysisOfCoreNumbers from "@/Components/AnalysisOfCoreNumbers";
import CoverPage from "@/Components/CoverPage";
import DeeperVibrationAnalysis from "@/Components/DeeperVibrationAnalysis";
import LoshuGrid from "@/Components/LoshuGrid";
import LuckyUnluckyNeutralNumbers from "@/Components/LuckyUnluckyNeutralNumbers";
import MobileNumberTotalAnalysis from "@/Components/MobileNumberTotalAnalysis";
import Numeroscope from "@/Components/Numeroscope";
import PlaneDetails from "@/Components/PlaneDetails";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center gap-10 bg-[#d4cfc7] p-8">
      <CoverPage />
      <Numeroscope />
      <LoshuGrid />
      <PlaneDetails />
      <AnalysisOfCoreNumbers />
      <LuckyUnluckyNeutralNumbers />
      <MobileNumberTotalAnalysis />
      <DeeperVibrationAnalysis />
    </div>
  );
}
