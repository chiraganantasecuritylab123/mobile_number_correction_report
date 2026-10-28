import ReportHomeClient from "@/Components/ReportHomeClient";
import YearlyForecastCoverPage from "@/Components/YearlyForecastReport/CoverPage";
import PersonalSnapshot from "@/Components/YearlyForecastReport/PersonalSnapshot";
import YearAtAGlance from "@/Components/YearlyForecastReport/YearAtAGlance";
import PlanetaryPicture from "@/Components/YearlyForecastReport/PlanetaryPicture";
import MajorTransits from "@/Components/YearlyForecastReport/MajorTransits";
import SadeSatiEclipses from "@/Components/YearlyForecastReport/SadeSatiEclipses";
import NumerologyOfYear from "@/Components/YearlyForecastReport/NumerologyOfYear";
import NumerologyYearMeans from "@/Components/YearlyForecastReport/NumerologyYearMeans";
import LuckyElements from "@/Components/YearlyForecastReport/LuckyElements";
import MonthByMonthForecast from "@/Components/YearlyForecastReport/MonthByMonthForecast";

export default function YearlyForecastReportPage() {
  return (
    <ReportHomeClient
      reportTitle="Yearly Forecast"
      reportDescription="Based on the Astrology and Numerology"
      reportTitleHi="वार्षिक भविष्यफल"
      reportDescriptionHi="ज्योतिष और अंकशास्त्र के आधार पर"
    >
      <YearlyForecastCoverPage />
      <PersonalSnapshot pageNumber="02" />
      <YearAtAGlance pageNumber="03" />
      <PlanetaryPicture pageNumber="04" />
      <MajorTransits pageNumber="05" />
      <SadeSatiEclipses pageNumber="06" />
      <NumerologyOfYear pageNumber="07" />
      <NumerologyYearMeans pageNumber="08" />
      <LuckyElements pageNumber="09" />
      <MonthByMonthForecast pageNumber="10" pair="jan-feb" />
      <MonthByMonthForecast pageNumber="11" pair="mar-apr" />
      <MonthByMonthForecast pageNumber="12" pair="may-jun" />
      <MonthByMonthForecast pageNumber="13" pair="jul-aug" />
      <MonthByMonthForecast pageNumber="14" pair="sep-oct" />
      <MonthByMonthForecast pageNumber="15" pair="nov-dec" />
    </ReportHomeClient>
  );
}
