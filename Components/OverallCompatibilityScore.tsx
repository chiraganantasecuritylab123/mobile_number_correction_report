import { cinzel } from "@/app/fonts";
import { useId } from "react";

export type CompatibilityLevel = "low" | "medium" | "high";

export type CompatibilityScoreResult = {
  value: number;
  level: CompatibilityLevel;
  levelLabel: string;
  alignment: string;
  starRating: number;
  levelColor: string;
  starColor: string;
  percentageColor: string;
  needleAngle: number;
};

const NAVY = "#1d3557";
const GOLD = "#B08D57";
const ORANGE = "#E8872A";
const RED = "#C44536";
const GREEN = "#3D8B4E";
const RING_BORDER = "rgba(184, 134, 11, 0.23)";

function clampValue(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getStarRating(value: number): number {
  if (value <= 20) return 1;
  if (value <= 40) return 2;
  if (value <= 55) return 2.5;
  if (value <= 65) return 3;
  if (value <= 80) return 4;
  if (value <= 95) return 4.5;
  return 5;
}

/** Maps 0–100 to level, stars, alignment, colors, and needle rotation. */
export function getCompatibilityScoreResult(value: number): CompatibilityScoreResult {
  const clamped = clampValue(value);
  const needleAngle = -90 + (clamped / 100) * 180;

  if (clamped <= 45) {
    return {
      value: clamped,
      level: "low",
      levelLabel: "LOW",
      alignment: "POOR ALIGNMENT",
      starRating: getStarRating(clamped),
      levelColor: RED,
      starColor: "#E8B923",
      percentageColor: GOLD,
      needleAngle,
    };
  }

  if (clamped <= 75) {
    return {
      value: clamped,
      level: "medium",
      levelLabel: "MEDIUM",
      alignment: "MODERATE ALIGNMENT",
      starRating: getStarRating(clamped),
      levelColor: ORANGE,
      starColor: "#E8B923",
      percentageColor: GOLD,
      needleAngle,
    };
  }

  return {
    value: clamped,
    level: "high",
    levelLabel: "HIGH",
    alignment: "EXCELLENT ALIGNMENT",
    starRating: getStarRating(clamped),
    levelColor: GREEN,
    starColor: "#E8B923",
    percentageColor: GOLD,
    needleAngle,
  };
}

function TopDiamond() {
  return (
    <g aria-hidden transform="translate(100, 15)">
      <path d="M 0,-3.5 L 3.5,0 L 0,3.5 L -3.5,0 Z" fill="#b8860b" opacity="0.85" />
    </g>
  );
}

function ScoreStars({
  rating,
  color,
  size = 10,
}: {
  rating: number;
  color: string;
  size?: number;
}) {
  return (
    <div className="flex items-center justify-center" style={{ gap: size * 0.12 }}>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = rating >= index + 1;
        const half = !filled && rating >= index + 0.5;

        return (
          <span
            key={index}
            style={{
              fontSize: size,
              color,
              opacity: filled || half ? 1 : 0.22,
              lineHeight: 1,
            }}
          >
            {half ? "◐" : filled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

export type OverallCompatibilityScoreProps = {
  value: number;
  className?: string;
  title?: string;
  size?: number;
  style?: React.CSSProperties;
};

export default function OverallCompatibilityScore({
  value,
  className = "",
  title = "OVERALL COMPATIBILITY SCORE",
  size = 260,
  style,
}: OverallCompatibilityScoreProps) {
  const result = getCompatibilityScoreResult(value);
  const gradientId = useId().replace(/:/g, "");
  const titleArcId = useId().replace(/:/g, "");

  // Gauge geometry
  const cx = 150, cy = 170, arcR = 115;
  const needleLength = 90;
  // needle: -90 at 0%, +90 at 100%
  const needleAngle = -90 + (result.value / 100) * 180;

  const scale = size / 300;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: size, height: size * (260 / 300) , ...style }}
      role="img"
      aria-label={`Overall compatibility score ${result.value} percent, ${result.levelLabel}, ${result.alignment}`}
    >
      <svg
        viewBox="0 0 300 260"
        fill="none"
        className="h-full w-full"
        // style={{marginTop:'-30px'}}
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#dc2626" />
            <stop offset="28%"  stopColor="#f97316" />
            <stop offset="52%"  stopColor="#f59e0b" />
            <stop offset="75%"  stopColor="#84cc16" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          {/* <path
            id={titleArcId}
            d={`M 10,150 A 130,130 0 0,1 260,170`}
            fill="none"
          /> */}
        </defs>

        {/* Outer ring */}
        <circle cx={cx} cy={cy} r="130" stroke="#f97316" strokeWidth="1.5" opacity="0.5" fill="white" />

        {/* Thick gradient arc */}
        <path
          d={`M 35,170 A ${arcR},${arcR} 0 0,1 265,170`}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="22"
          strokeLinecap="round"
        />

        {/* Top diamond */}
        <path d="M 150,38 L 154,42 L 150,46 L 146,42 Z" fill="#f97316" opacity="0.9" />

        {/* Curved title */}
        <text fontSize="13" fontWeight="700" letterSpacing="2" fill="#1d3557"
              fontFamily="'Segoe UI',Arial,sans-serif">
          <textPath href={`#${titleArcId}`} startOffset="50%" textAnchor="middle">
            {title}
          </textPath>
        </text>

        {/* Needle */}
        <g transform={`translate(${cx},${cy})`}>
          <g transform={`rotate(${needleAngle})`}>
            <line x1="0" y1="0" x2="0" y2={-needleLength}
                  stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="0" r="6" fill="#1e293b" />
          </g>
        </g>

        {/* Score number */}
        <text x="150" y="230" textAnchor="middle" fontSize="50" fontWeight="900"
              fill="#B08D57" fontFamily="Georgia,serif" letterSpacing="-2">
          {result.value}
        </text>
        <text x="190" y="230" textAnchor="start" fontSize="25" fontWeight="900"
              fill="#B08D57" fontFamily="Georgia,serif">%</text>

        {/* Level label */}
        <text x="150" y="260" textAnchor="middle" fontSize="20" fontWeight="900"
              fill={result.levelColor} fontFamily="'Segoe UI',Arial,sans-serif" letterSpacing="2">
          {result.levelLabel}
        </text>

        {/* Stars */}
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = result.starRating >= i + 1;
          return (
            <text key={i} x={78 + i * 26} y="280" fontSize="22"
                  fill="#E8B923" opacity={filled ? 1 : 0.28}
                  fontFamily="Arial">★</text>
          );
        })}

        {/* Alignment label */}
        <text x="150" y="300" textAnchor="middle" fontSize="12" fontWeight="800"
              fill="#1d3557" fontFamily="'Segoe UI',Arial,sans-serif" letterSpacing="2">
          {result.alignment}
        </text>
      </svg>
    </div>
  );
}
