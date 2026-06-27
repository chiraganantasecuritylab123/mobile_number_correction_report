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

const RED = "#C44536";
const ORANGE = "#E8872A";
const GREEN = "#3D8B4E";

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
      percentageColor: "#B08D57",
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
      percentageColor: "#B08D57",
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
    percentageColor: "#B08D57",
    needleAngle,
  };
}

export type FinancialKarmaScoreProps = {
  value: number;
  language?: "en" | "hi";
  title?: string;
  className?: string;
  size?: number;
};

export default function FinancialKarmaScore({
  value,
  language = "en",
  title,
  className = "",
  size = 260,
}: FinancialKarmaScoreProps) {
  const result = getCompatibilityScoreResult(value);
  const gradientId = useId().replace(/:/g, "");
  const svgHeight = 320;
  const width = 300;
  const height = svgHeight;

  const displayTitle = title ?? (language === "en" ? "FINANCIAL KARMA SCORE" : "वित्तीय कर्म स्कोर");
  const alignmentText = result.alignment;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: size, height: (size * height) / width }}
      role="img"
      aria-label={`Financial karma score ${result.value} percent, ${result.levelLabel}, ${alignmentText}`}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="28%" stopColor="#f97316" />
            <stop offset="52%" stopColor="#f59e0b" />
            <stop offset="75%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        <circle cx="150" cy="170" r="130" stroke="#f97316" strokeWidth="1.5" opacity="0.45" fill="#ffffff" />

        <path
          d="M 35 170 A 115 115 0 0 1 265 170"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="22"
          strokeLinecap="round"
        />

        <path d="M 150,38 L 154,42 L 150,46 L 146,42 Z" fill="#f97316" opacity="0.9" />

        <text
          x="150"
          y="15"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#3b2a12"
          className={cinzel.className}
          letterSpacing="1"
        >
          {displayTitle}
        </text>

        <g transform="translate(150,170)">
          <g transform={`rotate(${result.needleAngle})`}>
            <line x1="0" y1="0" x2="0" y2="-90" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="0" r="6" fill="#1e293b" />
          </g>
        </g>

        <text x="150" y="225" textAnchor="middle" fontSize="52" fontWeight="900" fill="#B08D57" fontFamily="Georgia,serif" letterSpacing="-2">
          {result.value}
        </text>
        <text x="196" y="225" textAnchor="start" fontSize="24" fontWeight="900" fill="#B08D57" fontFamily="Georgia,serif">
          %
        </text>

        <text x="150" y="260" textAnchor="middle" fontSize="18" fontWeight="900" fill={result.levelColor} fontFamily="Arial, sans-serif" letterSpacing="1.5">
          {result.levelLabel}
        </text>

        <defs>
          {Array.from({ length: 5 }).map((_, i) => (
            <clipPath key={`half-star-${i}`} id={`half-star-${gradientId}-${i}`} clipPathUnits="userSpaceOnUse">
              <rect x={88 + i * 24 - 10} y="278" width="10" height="22" />
            </clipPath>
          ))}
        </defs>

        {Array.from({ length: 5 }).map((_, i) => {
          const fullStars = Math.floor(result.starRating);
          const hasHalfStar = result.starRating % 1 >= 0.5;
          const x = 88 + i * 24;

          if (i < fullStars) {
            return (
              <text key={i} x={x} y="280" fontSize="20" fill="#E8B923" fontFamily="Arial">
                ★
              </text>
            );
          }

          if (hasHalfStar && i === fullStars) {
            return (
              <g key={i}>
                <text x={x} y="280" fontSize="20" fill="#d8c8a0" fontFamily="Arial">
                  ★
                </text>
                <text
                  x={x}
                  y="280"
                  fontSize="20"
                  fill="#E8B923"
                  fontFamily="Arial"
                  clipPath={`url(#half-star-${gradientId}-${i})`}
                >
                  ★
                </text>
              </g>
            );
          }

          return (
            <text key={i} x={x} y="280" fontSize="20" fill="#d8c8a0" fontFamily="Arial">
              ★
            </text>
          );
        })}

        <text x="150" y="316" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1d3557" fontFamily="Arial, sans-serif" letterSpacing="1.5">
          {alignmentText}
        </text>
      </svg>
    </div>
  );
}
