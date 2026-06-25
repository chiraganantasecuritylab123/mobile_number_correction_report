import Image from "next/image";
import type { ReactElement } from "react";
import BusinessNameReportPageShell from "./BusinessNameReportPageShell";
import {
  COLORS,
  BusinessReportFooter,
  BusinessReportHeader,
} from "./BusinessReportCommon";

export type BusinessNameReportPageProps = {
  pageNumber?: string;
  subtitle?: string;
  subtitle2?: string;
  currentName?: string;
  recommendedName?: string;
  oldScore?: number;
  newScore?: number;
  improvement?: number;
  whyChosenItems?: { icon: string; label: string }[];
  expectedImprovements?: {
    label: string;
    icon: string;
    percent: number;
    stars: number;
    grade: string;
    description: string;
  }[];
  overallScore?: number;
  expertRecommendation?: string[];
};

// ─── Section Banner ────────────────────────────────────────────────────────────
function SectionBanner() {
  return (
    <div className="w-full flex justify-center items-center mb-1">
      <div className="relative">
        <Image
          src="/assets/business-name-report/top-effect.png"
          alt="section banner"
          width={350}
          height={50}
        />
        <div
          className="absolute top-[50%] transform -translate-y-1/2 left-13 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[22px] font-bold text-white"
          style={{ background: "#4A0E17", fontFamily: "Cinzel, serif" }}
        >
          11
        </div>
        <h2
          className="absolute top-[50%] transform -translate-y-1/2 right-15 shrink-0 text-center text-[12px] font-bold tracking-widest"
          style={{ color: COLORS.brown, fontFamily: "Cinzel, serif" }}
        >
          DETAILED ANALYSIS OF
          <br />
          BEST CORRECTED NAME
        </h2>
      </div>
    </div>
  );
}

// ─── Business Name Comparison ──────────────────────────────────────────────────
function BusinessDetailsSection({
  currentName,
  recommendedName,
}: {
  currentName: string;
  recommendedName: string;
}) {
  return (
    <section
      className="w-full mx-auto grid items-center"
      style={{
        gridTemplateColumns: "1fr auto 1fr",
        backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "14px 22px",
        marginTop: -4,
      }}
    >
      {/* Current Name */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span
          className="font-nunito-sans"
          style={{
            background: "#8B1A2E",
            color: "#fde8c0",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "3px 14px",
            borderRadius: 4,
          }}
        >
          CURRENT NAME
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 46, height: 46, borderRadius: "50%",
              background: "#6B1020", border: "2px solid #a03040",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <rect x="4" y="11" width="18" height="13" rx="1" stroke="#fde8c0" strokeWidth="1.5" fill="none" />
              <path d="M2 13L13 3L24 13" stroke="#fde8c0" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="10" y="15" width="6" height="9" rx="0.5" stroke="#fde8c0" strokeWidth="1.3" fill="none" />
              <rect x="6" y="14" width="3" height="3" rx="0.3" stroke="#fde8c0" strokeWidth="1" fill="none" />
              <rect x="17" y="14" width="3" height="3" rx="0.3" stroke="#fde8c0" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <p
            className="font-nunito-sans"
            style={{ fontSize: 14, fontWeight: 700, color: "#7a1020", lineHeight: 1.3, textAlign: "left" }}
          >
            {currentName}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ margin: "0 14px" }}>
          <div
            style={{
              width: 46, height: 46, borderRadius: "50%",
              border: "3px solid #c9a227", background: "#fffbef",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3V17M10 17L5 12M10 17L15 12" stroke="#c9a227" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Recommended Name */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span
          className="font-nunito-sans"
          style={{
            background: "#1a5e32", color: "#d4f5d4",
            fontSize: 9, fontWeight: 700, letterSpacing: "0.12em",
            padding: "3px 14px", borderRadius: 4,
          }}
        >
          RECOMMENDED NAME
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <p
            className="font-nunito-sans"
            style={{ fontSize: 14, fontWeight: 700, color: "#1a5e32", lineHeight: 1.3, textAlign: "right" }}
          >
            {recommendedName}
          </p>
          <div
            style={{
              width: 46, height: 46, borderRadius: "50%",
              background: "#1a5e32", border: "2px solid #2a8e4a",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <rect x="3" y="14" width="4" height="9" rx="0.5" fill="#d4f5d4" />
              <rect x="9" y="10" width="4" height="13" rx="0.5" fill="#d4f5d4" />
              <rect x="15" y="6" width="4" height="17" rx="0.5" fill="#d4f5d4" />
              <path d="M5 12L10 8L16 4L22 2" stroke="#d4f5d4" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="22" cy="2" r="2" fill="#d4f5d4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Full Circle Score ─────────────────────────────────────────────────────────
function CircleScore({
  percent, color, bgColor, size = 108,
}: {
  percent: number; color: string; bgColor: string; size?: number;
}) {
  const r = (size - 14) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;
  const stars = Math.round(percent / 20);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={bgColor} strokeWidth={10} />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={10}
            strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span
            className="font-nunito-sans"
            style={{ fontSize: 28, fontWeight: 700, color, lineHeight: 1 }}
          >
            {percent}%
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} style={{ fontSize: 16, color: s <= stars ? "#c9a227" : "#ddd" }}>★</span>
        ))}
      </div>
    </div>
  );
}

// ─── Name Upgrade Score ────────────────────────────────────────────────────────
function NameUpgradeScoreSection({
  oldScore, newScore, improvement,
}: {
  oldScore: number; newScore: number; improvement: number;
}) {
  return (
    <section
      className="w-full mx-auto"
      style={{
        backgroundImage: "url('/assets/signaturePages/foooter-background.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "10px 16px 14px",
        marginTop: -6,
      }}
    >
      {/* Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, transparent, #c9a227)" }} />
        <h3
          className="font-nunito-sans"
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: COLORS.brown, whiteSpace: "nowrap" }}
        >
          NAME UPGRADE SCORE
        </h3>
        <div style={{ height: 1, flex: 1, background: "linear-gradient(to left, transparent, #c9a227)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", alignItems: "center" }}>
        {/* Old Score */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span className="font-nunito-sans" style={{ fontSize: 11, fontWeight: 700, color: COLORS.brown, letterSpacing: "0.08em" }}>
            OLD SCORE
          </span>
          <CircleScore percent={oldScore} color="#8B1A2E" bgColor="#f0d0d0" />
        </div>

        {/* Arrow */}
        <div style={{ padding: "0 16px" }}>
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
            <path d="M2 12H42M42 12L34 4M42 12L34 20" stroke="#c9a227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* New Score */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span className="font-nunito-sans" style={{ fontSize: 11, fontWeight: 700, color: COLORS.brown, letterSpacing: "0.08em" }}>
            NEW SCORE
          </span>
          <CircleScore percent={newScore} color="#1a5e32" bgColor="#c8f0d0" />
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 80, background: "rgba(201,162,39,0.35)", margin: "0 16px" }} />

        {/* Improvement */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <span className="font-nunito-sans" style={{ fontSize: 11, fontWeight: 700, color: COLORS.brown, letterSpacing: "0.08em" }}>
            IMPROVEMENT
          </span>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
              <rect x="2" y="36" width="9" height="14" rx="1" fill="#c9a227" opacity="0.55" />
              <rect x="13" y="27" width="9" height="23" rx="1" fill="#c9a227" opacity="0.7" />
              <rect x="24" y="17" width="9" height="33" rx="1" fill="#c9a227" opacity="0.85" />
              <rect x="35" y="8" width="9" height="42" rx="1" fill="#c9a227" />
              <path d="M6 34 L17 25 L28 15 L44 4" stroke="#c9a227" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M44 4 L36 6 M44 4 L42 12" stroke="#c9a227" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="font-nunito-sans"
              style={{ fontSize: 28, fontWeight: 700, color: "#c9a227", lineHeight: 1 }}
            >
              +{improvement}%
            </span>
          </div>
          <span
            className="font-nunito-sans"
            style={{ fontSize: 10, fontWeight: 700, color: "#1a5e32", letterSpacing: "0.08em", textAlign: "center", lineHeight: 1.3 }}
          >
            SIGNIFICANT IMPROVEMENT
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Why Chosen Icons ──────────────────────────────────────────────────────────
const WHY_ICONS: Record<string, ReactElement> = {
  handshake: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 16l4-4 3 3 6-7 7 5" stroke="#fde8c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 18s2 4 6 4c2 0 4-1 6-3l6-6a2 2 0 00-3-3l-3 3" stroke="#fde8c0" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="#fde8c0" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="6" stroke="#fde8c0" strokeWidth="1.3" fill="none" />
      <circle cx="14" cy="14" r="2.5" fill="#fde8c0" />
      <path d="M14 4V8M14 20V24M4 14H8M20 14H24" stroke="#fde8c0" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  money: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="#fde8c0" strokeWidth="1.5" fill="none" />
      <path d="M14 8v12M11 10.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5" stroke="#fde8c0" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  building: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="11" width="18" height="13" rx="1" stroke="#fde8c0" strokeWidth="1.4" fill="none" />
      <path d="M3 12L14 4L25 12" stroke="#fde8c0" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="11" y="16" width="6" height="8" rx="0.5" stroke="#fde8c0" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  eye: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M3 14s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#fde8c0" strokeWidth="1.4" fill="none" />
      <circle cx="14" cy="14" r="3.5" stroke="#fde8c0" strokeWidth="1.3" fill="none" />
      <circle cx="14" cy="14" r="1.2" fill="#fde8c0" />
    </svg>
  ),
  trophy: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M10 4h8v10a4 4 0 01-8 0V4z" stroke="#fde8c0" strokeWidth="1.4" fill="none" />
      <path d="M10 8H6a3 3 0 003 3M18 8h4a3 3 0 01-3 3" stroke="#fde8c0" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M14 18v4M10 22h8" stroke="#fde8c0" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

// ─── Why Chosen Section ────────────────────────────────────────────────────────
function WhyChosenSection({ items }: { items: { icon: string; label: string }[] }) {
  return (
    <section
      className="w-full mx-auto"
      style={{
        backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "10px 12px",
        marginTop: -6,
      }}
    >
      <div
        className="font-nunito-sans"
        style={{
          background: "#6B1020", color: "#fde8c0",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
          padding: "4px 18px", borderRadius: 4,
          margin: "0 auto 10px", textAlign: "center",
          width: "fit-content",
        }}
      >
        WHY THIS NAME WAS CHOSEN
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <div
              style={{
                width: 45, height: 45, borderRadius: "50%",
                background: "#6B1020",
                border: "1.5px solid rgba(201,162,39,0.5)",
                boxShadow: "0 0 0 3px rgba(201,162,39,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              {WHY_ICONS[item.icon]}
            </div>
            <span
              className="font-nunito-sans"
              style={{ fontSize: 10, fontWeight: 600, color: COLORS.brown, textAlign: "center", lineHeight: 1.35 }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Half Circle Score ─────────────────────────────────────────────────────────
function SmallCircleScore({ percent, color, bgColor }: { percent: number; color: string; bgColor: string }) {
  const size = 84;
  const strokeWidth = 10;
  const r = (size - strokeWidth) / 2;
  const circumference = Math.PI * r;
  const dash = (percent / 100) * circumference;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: size, height: size / 2 + strokeWidth / 2 + 4, overflow: "visible" }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: "absolute", top: 0, left: 0 }}>
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none" stroke={bgColor} strokeWidth={strokeWidth} strokeLinecap="round"
          />
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </svg>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <span className="font-nunito-sans" style={{ fontSize: 24, fontWeight: 700, color, lineHeight: 1 }}>
            {percent}
          </span>
          <span className="font-nunito-sans" style={{ fontSize: 13, fontWeight: 700, color, lineHeight: 1, marginBottom: 3 }}>
            %
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Improvement Icons ─────────────────────────────────────────────────────────
const IMPROVEMENT_ICONS: Record<string, ReactElement> = {
  rupee: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="#fde8c0" strokeWidth="1.2" fill="none" />
      <path d="M6.5 7h7M6.5 10h7M6.5 7c0 1.7 1.3 3 3 3s3 1.3 3 3-1.3 3-3 3M10 6v1M10 13v1" stroke="#fde8c0" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  growth: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="13" width="3.5" height="5" rx="0.5" fill="#fde8c0" opacity="0.6" />
      <rect x="7" y="10" width="3.5" height="8" rx="0.5" fill="#fde8c0" opacity="0.8" />
      <rect x="12" y="6" width="3.5" height="12" rx="0.5" fill="#fde8c0" />
      <path d="M3 11L8 8L13 4L18 2" stroke="#fde8c0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 2L15 3M18 2L17 5" stroke="#fde8c0" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5l2 5.5h5.5l-4.5 3.5 1.5 5.5L10 14l-4.5 3 1.5-5.5L2.5 8H8z" stroke="#fde8c0" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  team: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="7.5" cy="6.5" r="2.5" stroke="#fde8c0" strokeWidth="1.2" fill="none" />
      <circle cx="14" cy="6" r="2" stroke="#fde8c0" strokeWidth="1.1" fill="none" />
      <path d="M2 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#fde8c0" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M14 10c1.8.4 3.5 2 3.5 4.5" stroke="#fde8c0" strokeWidth="1.1" strokeLinecap="round" fill="none" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5l6.5 2.5v4.5c0 3.8-3 6.5-6.5 7.5-3.5-1-6.5-3.7-6.5-7.5V5z" stroke="#fde8c0" strokeWidth="1.2" fill="none" />
      <path d="M7 10.5l2 2 4-4" stroke="#fde8c0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ─── Expected Improvements ─────────────────────────────────────────────────────
function ExpectedImprovementsSection({
  items,
}: {
  items: { label: string; icon: string; percent: number; stars: number; grade: string; description: string }[];
}) {
  return (
    <section
      className="w-full mx-auto"
      style={{
        backgroundImage: "url('/assets/signatureReport/foooter-background.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "10px 12px 14px",
        marginTop: -6,
      }}
    >
      {/* Title with ornamental lines */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #c9a227)" }} />
        <span
          className="font-nunito-sans"
          style={{
            background: "#6B1020", color: "#fde8c0",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
            padding: "4px 20px", borderRadius: 4, whiteSpace: "nowrap",
          }}
        >
          EXPECTED IMPROVEMENTS
        </span>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #c9a227)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "0 10px",
              borderRight: i < items.length - 1 ? "1px solid rgba(201,162,39,0.3)" : "none",
            }}
          >
            {/* Icon + Label */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, width: "100%", minHeight: 36 }}>
              <div
                style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: "#6B1020", border: "1.5px solid rgba(201,162,39,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                {IMPROVEMENT_ICONS[item.icon]}
              </div>
              <span
                className="font-nunito-sans"
                style={{ fontSize: 9.5, fontWeight: 700, color: "#5a3410", lineHeight: 1.3, textAlign: "left", flex: 1 }}
              >
                {item.label}
              </span>
            </div>

            <SmallCircleScore percent={item.percent} color="#8B1A2E" bgColor="#e8c8b0" />

            {/* Stars */}
            <div style={{ display: "flex", gap: 1.5, marginTop: -2 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ fontSize: 12, color: s <= item.stars ? "#c9a227" : "rgba(201,162,39,0.2)", lineHeight: 1 }}>★</span>
              ))}
            </div>

            <span
              className="font-nunito-sans"
              style={{ fontSize: 9, fontWeight: 700, color: "#1a5e32", letterSpacing: "0.1em", marginTop: 2 }}
            >
              {item.grade}
            </span>

            <div style={{ width: "75%", height: 1, background: "rgba(201,162,39,0.35)", margin: "3px 0" }} />

            <p
              className="font-nunito-sans"
              style={{ fontSize: 8.5, color: "#5a3410", textAlign: "center", lineHeight: 1.5, margin: 0 }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Bottom Section ────────────────────────────────────────────────────────────
function BottomSection({
  overallScore, expertRecommendation,
}: {
  overallScore: number; expertRecommendation: string[];
}) {
  return (
    <section
      className="w-full mx-auto"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: -2 }}
    >
      {/* LEFT: Overall Success Score */}
      <div
        style={{
          backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
          backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",
          borderRadius: 8, display: "flex", flexDirection: "column",
          alignItems: "center", overflow: "hidden",
        }}
      >
        <div
          className="font-nunito-sans"
          style={{
            background: "#6B1020", color: "#fde8c0",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
            padding: "5px 18px", textAlign: "center",
            width: "100%", boxSizing: "border-box",
          }}
        >
          OVERALL SUCCESS SCORE
        </div>

        <div
          style={{
            position: "relative", width: "85%", flex: 1,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "8px 0 4px",
          }}
        >
          <img
            src="/assets/signaturePages/overallSuccessScore.png"
            alt="laurel wreath"
            style={{ width: "70%", height: "auto", objectFit: "contain", display: "block" }}
          />
          <div
            style={{
              position: "absolute", top: "45%", left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
            }}
          >
            <span
              className="font-nunito-sans"
              style={{ fontSize: 28, fontWeight: 700, color: "#7a1020", lineHeight: 1 }}
            >
              {overallScore}%
            </span>
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ fontSize: 13, color: "#c9a227", lineHeight: 1 }}>★</span>
              ))}
            </div>
            <span
              className="font-nunito-sans"
              style={{ fontSize: 9, fontWeight: 700, color: "#1a5e32", letterSpacing: "0.12em" }}
            >
              EXCELLENT
            </span>
          </div>
        </div>

      </div>

      {/* RIGHT: Expert Recommendation */}
      <div
        style={{
          backgroundImage: "url('/assets/signaturePages/squereBackgroundImage.png')",
          backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",
          borderRadius: 8, display: "flex", flexDirection: "column", overflow: "hidden",
        }}
      >
        <div
          className="font-nunito-sans"
          style={{
            background: "#6B1020", color: "#fde8c0",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
            padding: "5px 18px", textAlign: "center",
            width: "100%", boxSizing: "border-box",
          }}
        >
          EXPERT RECOMMENDATION
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, padding: "10px 14px 12px" }}>
          <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/signaturePages/trophy.png"
              alt="trophy"
              style={{ width: 80, height: 100, objectFit: "contain" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {expertRecommendation.map((para, i) => {
              const isLast = i === expertRecommendation.length - 1;
              return (
                <p
                  key={i}
                  className="font-nunito-sans"
                  style={{
                    fontSize: 9.5,
                    color: isLast ? "#c9a227" : "#5a3410",
                    lineHeight: 1.6, margin: 0,
                    fontStyle: isLast ? "italic" : "normal",
                    fontWeight: isLast ? 600 : 400,
                  }}
                >
                  {para}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function RecommendedNameAnalysis({
  pageNumber = "11",
  subtitle = "BUSINESS NAME OPTIMIZATION REPORT",
  subtitle2 = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  currentName = "ANANTAX TECHNOLOGIES\nPVT LTD",
  recommendedName = "ANANTAX INNOVATIONS\nPVT LTD",
  oldScore = 72,
  newScore = 96,
  improvement = 24,
  whyChosenItems = [
    { icon: "handshake", label: "Aligns with partner numbers" },
    { icon: "target", label: "Supports business destiny" },
    { icon: "money", label: "Strong financial frequency" },
    { icon: "building", label: "Better industry alignment" },
    { icon: "eye", label: "Stronger market visibility" },
    { icon: "trophy", label: "Higher long-term success potential" },
  ],
  expectedImprovements = [
    { label: "REVENUE POTENTIAL", icon: "rupee", percent: 95, stars: 5, grade: "EXCELLENT", description: "Significant increase in financial opportunities and money flow." },
    { label: "BUSINESS GROWTH", icon: "growth", percent: 96, stars: 5, grade: "EXCELLENT", description: "Strong expansion energy supports rapid growth and scaling." },
    { label: "BRAND RECOGNITION", icon: "star", percent: 98, stars: 5, grade: "EXCELLENT", description: "High brand recall and visibility, creates a powerful impression." },
    { label: "TEAM HARMONY", icon: "team", percent: 92, stars: 5, grade: "EXCELLENT", description: "Improved team alignment, better cooperation and positive work culture." },
    { label: "CUSTOMER TRUST", icon: "shield", percent: 94, stars: 5, grade: "EXCELLENT", description: "Builds strong customer trust, loyalty and long-term relationships." },
  ],
  overallScore = 96,
  expertRecommendation = [
    "The recommended name is numerologically powerful and carries high vibrations of prosperity, growth, stability, visibility and leadership.",
    "This name is fully aligned with your business goals, industry energy and long-term vision. It will act as a strong catalyst for success, expansion and financial abundance.",
    "Adopting this name will unlock your business's highest potential.",
  ],
}: BusinessNameReportPageProps) {
  return (
    <BusinessNameReportPageShell padding="18px 40px 20px" pageNumber={pageNumber}>
      <div className="flex h-full flex-col">
        <BusinessReportHeader subtitle={subtitle} subtitle2={subtitle2} />
        <SectionBanner />
        <BusinessDetailsSection currentName={currentName} recommendedName={recommendedName} />
        <NameUpgradeScoreSection oldScore={oldScore} newScore={newScore} improvement={improvement} />
        <WhyChosenSection items={whyChosenItems} />
        <ExpectedImprovementsSection items={expectedImprovements} />
        <BottomSection overallScore={overallScore} expertRecommendation={expertRecommendation} />
        <BusinessReportFooter pageNumber={pageNumber} />
      </div>
    </BusinessNameReportPageShell>
  );
}