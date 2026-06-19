import AnalysisOfCoreNumbers from "@/Components/AnalysisOfCoreNumbers";
import CoverPage from "@/Components/CoverPage";
import DeeperVibrationAnalysis from "@/Components/DeeperVibrationAnalysis";
import LoshuGrid from "@/Components/LoshuGrid";
import LuckyUnluckyNeutralNumbers from "@/Components/LuckyUnluckyNeutralNumbers";
import MobileNumberTotalAnalysis from "@/Components/MobileNumberTotalAnalysis";
import Numeroscope from "@/Components/Numeroscope";
import PlaneDetails from "@/Components/PlaneDetails";
import OverAllVardict from "@/Components/OverAllVardict";
import FAQPage from "@/Components/FAQPage";
import DisclaimerAndAdvicePage from "@/Components/DisclaimerAndAdvicePage";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center gap-10 bg-[#d4cfc7] p-8">
      <CoverPage /> {/* 1 */}
      <Numeroscope /> {/* 2 */}
      <LoshuGrid /> {/* 3 */}
      <PlaneDetails /> {/* 4 */}
      <AnalysisOfCoreNumbers /> {/* 5 */}
      <LuckyUnluckyNeutralNumbers /> {/* 6 */}
      <MobileNumberTotalAnalysis /> {/* 7 */}
      <DeeperVibrationAnalysis /> {/* 8 */}
      <OverAllVardict /> {/*   13 */}
      <FAQPage /> {/* 16 */}  
      <DisclaimerAndAdvicePage /> {/* 17 */}
    </div>
  );
}
