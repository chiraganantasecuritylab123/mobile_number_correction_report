import {
  Handshake,
  Coins,
  Trophy,
  TrendingUp,
  AlertTriangle,
  Scale,
  ThumbsUp,
  Award,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

const COLORS = REPORT_COLORS;

const THEME = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldBorder: "#b8860b",
  bodyText: "#2a2a2a",
  green: "#1b5e20",
  lightBg: "#fdfbf7",
} as const;

const ASSETS = {
  logo: "/assets/ganesha-logo.png",
  pattern2: "/assets/cover/pattern-2.png",
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  topEffect: "/assets/business-name-report/top-effect.png",
} as const;

const SERIF = "Georgia, 'Times New Roman', serif";

export type SubMetricProps = {
  title: string;
  score: number;
  label: string;
  color: string;
  icon: React.ReactNode;
};

function OrnamentDivider({ width = 200 }: { width?: number }) {
  return (
    <Image
      src={ASSETS.pattern2}
      alt=""
      width={width}
      height={Math.round(width * 0.12)}
      className="h-auto object-contain"
      aria-hidden
    />
  );
}

function CircularGauge({ score, color, size = 110, strokeWidth = 10 }: { score: number; color: string; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center font-nunito-sans" style={{ width: size, height: size }}>
      <svg className="absolute -rotate-90" width={size} height={size}>
        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-gray-100"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="text-center z-10 flex flex-col items-center justify-center font-nunito-sans">
        <span className="text-[34px] font-bold leading-none tracking-tight" style={{ color: THEME.maroon }}>{score}</span>
        <span className="text-[11px] font-bold opacity-60 mt-0.5 uppercase font-nunito-sans" style={{ color: THEME.bodyText }}>/100</span>
      </div>
    </div>
  );
}

function SmallGauge({ title, score, label, color, icon }: SubMetricProps) {
  const size = 74;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center p-2 rounded-md mt-2 font-nunito-sans" >
      <p className="text-[12px] font-bold tracking-wider mb-1 uppercase h-[24px] flex items-center justify-center font-nunito-sans" style={{ color: THEME.maroon }}>
        {title}
      </p>
      
      {/* Mini Icon Header */}
      <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mb-1.5 text-white" style={{ backgroundColor: color }}>
        {icon}
      </div>

      <div className="relative flex items-center justify-center mb-1 font-nunito-sans" style={{ width: size, height: size }}>
        <svg className="absolute -rotate-90" width={size} height={size}>
          <circle cx={size / 2} cy={size / 2} r={radius} className="stroke-gray-100" strokeWidth={strokeWidth} fill="transparent" />
          <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
        </svg>
        <div className="text-center z-10 flex flex-col items-center justify-center font-nunito-sans">
          <span className="text-[26px] font-bold leading-none" style={{ color: THEME.maroon }}>{score}</span>
          <span className="text-[13px] font-bold opacity-60 uppercase font-nunito-sans" style={{ color: THEME.bodyText }}>/100</span>
        </div>
      </div>

      {/* 5 Stars Rating */}
      <div className="flex gap-[2px] my-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[16px]" style={{ color: THEME.gold }}>★</span>
        ))}
      </div>
      <p className="text-[14px] font-bold uppercase tracking-wider font-nunito-sans" style={{ color: color }}>{label}</p>
    </div>
  );
}

export default function Conclusion({ pageNumber = "14" }) {
  return (
    <BusinessNameReportPageShell padding="16px 32px 16px" pageNumber={pageNumber}>
      <div className="relative flex h-full min-h-0 flex-col font-nunito-sans ">
        
        {/* Background Decorative Circles */}
        <Image src={ASSETS.sunCompass} alt="" width={110} height={110} className="pointer-events-none absolute left-[-10px] top-[10px] opacity-25" aria-hidden />
        <Image src={ASSETS.horoscopeWheel} alt="" width={110} height={110} className="pointer-events-none absolute right-[-10px] top-[10px] opacity-25" aria-hidden />

        {/* Master Branding Header */}
        <header className="relative z-10 flex shrink-0 flex-col items-center text-center font-nunito-sans">
          <Image src={ASSETS.logo} alt="Astro Aarambh" width={64} height={64} className="mb-0.5" priority />
          <h1 className="text-[28px] font-bold leading-none tracking-[0.08em] uppercase font-nunito-sans" style={{ color: THEME.maroon, fontFamily: SERIF }}>
            ASTRO AARAMBH
          </h1>
          <p className="mt-0.5 text-[16px] font-bold tracking-[0.06em] uppercase font-nunito-sans" style={{ color: THEME.gold }}>
            BUSINESS NAME OPTIMIZATION REPORT
          </p>
          <p className="mt-0.5 max-w-[560px] text-[12px] font-semibold tracking-[0.1em] uppercase font-nunito-sans" style={{ color: THEME.bodyText, opacity: 0.85 }}>
            PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS
          </p>
        
        </header>

        {/* Section Header Strip */}
        <div className="flex w-full items-center justify-center my-2 font-nunito-sans">
          <div className="relative flex items-center justify-center">
            <Image src={ASSETS.topEffect} alt="" width={380} height={46} className="h-auto w-[380px]" aria-hidden />
            <div className="absolute left-[60px] top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full text-[18px] font-bold text-white font-nunito-sans">
              {pageNumber}
            </div>
            <h2 className="absolute right-[56px] top-1/2 max-w-[240px] -translate-y-1/2 text-center text-[11px] font-bold leading-tight tracking-[0.08em] uppercase font-nunito-sans" style={{ color: COLORS.brown, fontFamily: SERIF }}>
              FINAL CONCLUSION & RESULTS
            </h2>
          </div>
        </div>

        {/* Outer Visual Container */}
        <div className="flex-1 flex flex-col gap-3 font-nunito-sans" >
          
          {/* TOP SEGMENT: Overall score & Recommended name banner */}
          <div className="grid grid-cols-12 gap-3 p-6 rounded-md font-nunito-sans"  style={{ backgroundImage: `url('/assets/signaturePages/foooter-background.png')`, backgroundSize: "100% 100%" }}>
            <div className="col-span-5 flex flex-col items-center border-r pr-2 justify-center font-nunito-sans" style={{ borderColor: "rgba(184,134,11,0.25)" }}>
              <p className="text-[14px] font-bold uppercase tracking-wider mb-2 text-center font-nunito-sans" style={{ color: THEME.maroon }}>
                OVERALL BUSINESS ENERGY SCORE
              </p>
              <CircularGauge score={96} color="#800000" />
              <div className="flex gap-[3px] mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[16px]" style={{ color: THEME.gold }}>★</span>
                ))}
              </div>
              <p className="text-[14px] font-bold uppercase tracking-widest mt-0.5 text-emerald-800 font-nunito-sans">EXCELLENT</p>
            </div>

            <div className="col-span-7 flex flex-col items-center pl-2 font-nunito-sans">
              <span className="text-[14px] font-bold text-white px-4 py-0.5 rounded uppercase tracking-wider mb-2 font-nunito-sans" style={{ backgroundColor: THEME.maroon }}>
                RECOMMENDED NAME
              </span>
              <h3 className="text-[24px] font-bold leading-tight tracking-wide uppercase text-center font-nunito-sans" style={{ color: THEME.maroon, fontFamily: SERIF }}>
                ANANTAX INNOVATIONS PVT LTD
              </h3>
              <div className="w-[80px] h-[1px] my-2" style={{ backgroundColor: THEME.goldBorder }} />
              
              <div className="flex items-start gap-2 max-w-[280px] font-nunito-sans">
                <div className="p-2 bg-amber-900 rounded text-amber-400 mt-1 shrink-0">
                  <TrendingUp size={24} />
                </div>
                <p className="text-[14px] leading-relaxed text-left font-nunito-sans" style={{ color: THEME.bodyText, fontFamily: SERIF }}>
                  This name carries powerful vibrations of prosperity, growth, leadership, visibility and long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* MID SEGMENT: Sub-Metric Category Gauges */}
          <div className="grid grid-cols-4 gap-2 p-6 font-nunito-sans"  style={{ backgroundImage: `url('/assets/signaturePages/foooter-background.png')`, backgroundSize: "100% 100%" }}>
            <SmallGauge title="Partner Compatibility Score" score={94} label="EXCELLENT" color="#800000" icon={<Handshake size={22} />} />
            <SmallGauge title="Wealth Potential Score" score={95} label="EXCELLENT" color="#b8860b" icon={<Coins size={22} />} />
            <SmallGauge title="Brand Success Score" score={93} label="EXCELLENT" color="#800000" icon={<Trophy size={22} />} />
            <SmallGauge title="Business Growth Score" score={94} label="EXCELLENT" color="#1b5e20" icon={<TrendingUp size={22} />} />
          </div>

          {/* VERDICT SEGMENT: Final Verdict Scale */}
          <div className="flex flex-col items-center font-nunito-sans" style={{ backgroundImage: `url('/assets/signaturePages/foooter-background.png')`, backgroundSize: "100% 100%" }} >
            <span className="text-[14px] font-bold text-white px-4 py-0.5 rounded uppercase tracking-wider mb-2 font-nunito-sans" style={{ backgroundColor: THEME.maroon }}>
              FINAL VERDICT
            </span>
            <div className="grid grid-cols-4 gap-2 w-full font-nunito-sans">
              {/* Box 1: Excellent (Active) */}
              <div className="p-2.5 rounded-md flex flex-col items-center text-center font-nunito-sans" >
                <div className="flex items-center gap-1 mb-1 text-amber-700 font-nunito-sans" >
                  <Award size={30} />
                  <span className="text-[14px] font-bold uppercase tracking-wider font-nunito-sans">EXCELLENT</span>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-700 font-nunito-sans" style={{ fontFamily: SERIF }}>
                  Highly favorable for maximum business success and financial growth.
                </p>
              </div>

              {/* Box 2: Good */}
              <div className="p-2.5 rounded-md flex flex-col items-center text-center font-nunito-sans">
                <div className="flex items-center gap-1 mb-1 text-amber-600 font-nunito-sans">
                  <ThumbsUp size={30} />
                  <span className="text-[14px] font-semibold uppercase tracking-wider font-nunito-sans">GOOD</span>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-500 font-nunito-sans" style={{ fontFamily: SERIF }}>
                  Favorable with minor adjustments for better results.
                </p>
              </div>

              {/* Box 3: Average */}
              <div className="p-2.5 rounded-md flex flex-col items-center text-center font-nunito-sans">
                <div className="flex items-center gap-1 mb-1 text-blue-800 font-nunito-sans">
                  <Scale size={30} />
                  <span className="text-[14px] font-semibold uppercase tracking-wider font-nunito-sans">AVERAGE</span>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-500 font-nunito-sans" style={{ fontFamily: SERIF }}>
                  Moderate results expected. Some corrections recommended.
                </p>
              </div>

              {/* Box 4: Needs Correction */}
              <div className="p-2.5 rounded-md flex flex-col items-center text-center font-nunito-sans">
                <div className="flex items-center gap-1 mb-1 text-red-700 font-nunito-sans">
                  <AlertTriangle size={30} />
                  <span className="text-[14px] font-semibold uppercase tracking-wider font-nunito-sans">NEEDS CORRECTION</span>
                </div>
                <p className="text-[12px] leading-relaxed text-gray-500 font-nunito-sans" style={{ fontFamily: SERIF }}>
                  Significant changes required for better vibrations and outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM SEGMENT: Disclaimer & Guide notes */}
          <div className="grid grid-cols-12 gap-3 p-2.5 rounded-md font-nunito-sans" style={{ backgroundImage: `url('/assets/signaturePages/foooter-background.png')`, backgroundSize: "100% 100%" }}>
            <div className="col-span-8 flex gap-2 items-start border-r pr-2 font-nunito-sans" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={28} />
              <div className="font-nunito-sans">
                <p className="text-[16px] font-bold text-amber-900 tracking-wider uppercase mb-0.5 font-nunito-sans">CAUTION / DISCLAIMER</p>
                <p className="text-[11px] leading-relaxed text-gray-600 font-nunito-sans" style={{ fontFamily: SERIF }}>
                  This report is based on numerology and vibration analysis for guidance purposes only. It is not a legal advice, financial advice, or a guarantee of any kind. Business outcomes depend on your planning, actions, market conditions and other factors. Use this report as a positive guidance tool for decision making.
                </p>
              </div>
            </div>
            <div className="col-span-4 flex gap-2 items-center justify-center pl-1 font-nunito-sans">
              <CheckCircle className="text-amber-700 shrink-0" size={28} />
              <p className="text-[12px] font-medium leading-relaxed text-stone-700 font-nunito-sans" style={{ fontFamily: SERIF }}>
                Use this report as a positive guidance tool for decision making.
              </p>
            </div>
          </div>

        </div>
      </div>
    </BusinessNameReportPageShell>
  );
}