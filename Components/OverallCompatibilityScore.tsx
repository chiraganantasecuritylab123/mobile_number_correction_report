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

const NAVY = "#213247";
const GOLD = "#B08D57";
const ORANGE = "#E8872A";
const RED = "#C44536";
const YELLOW = "#E8B923";
const GREEN = "#3D8B4E";
const RING_BORDER = "#D8AC71";

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

/** Maps 0–100 to level, stars, alignment, colors, and radial needle rotation. */
export function getCompatibilityScoreResult(value: number): CompatibilityScoreResult {
  const clamped = clampValue(value);
  // Needle defaults pointing up; rotate clockwise: 0% → left (-90°), 100% → right (+90°)
  const needleAngle = -90 + (clamped / 100) * 180;

  if (clamped <= 40) {
    return {
      value: clamped,
      level: "low",
      levelLabel: "LOW",
      alignment: "POOR ALIGNMENT",
      starRating: getStarRating(clamped),
      levelColor: RED,
      starColor: RED,
      percentageColor: GOLD,
      needleAngle,
    };
  }

  if (clamped <= 70) {
    return {
      value: clamped,
      level: "medium",
      levelLabel: "MEDIUM",
      alignment: "MODERATE ALIGNMENT",
      starRating: getStarRating(clamped),
      levelColor: ORANGE,
      starColor: ORANGE,
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
    starColor: GREEN,
    percentageColor: GOLD,
    needleAngle,
  };
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  const sweep = endAngle < startAngle ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
}

function GaugeArc({
  cx,
  cy,
  r,
  strokeWidth,
}: {
  cx: number;
  cy: number;
  r: number;
  strokeWidth: number;
}) {
  const gap = 2.5;
  const segments = [
    { start: 180 - gap, end: 135 + gap, color: RED },
    { start: 135 - gap, end: 90 + gap, color: ORANGE },
    { start: 90 - gap, end: 45 + gap, color: YELLOW },
    { start: 45 - gap, end: 0 + gap, color: GREEN },
  ];

  return (
    <>
      {segments.map((seg, i) => (
        <path
          key={i}
          d={describeArc(cx, cy, r, seg.start, seg.end)}
          stroke={seg.color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
      ))}
      {[135, 90, 45].map((angleDeg) => {
        const inner = polarToCartesian(cx, cy, r - strokeWidth / 2 - 0.5, angleDeg);
        const outer = polarToCartesian(cx, cy, r + strokeWidth / 2 + 0.5, angleDeg);
        return (
          <line
            key={angleDeg}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        );
      })}
    </>
  );
}

function TopDiamond() {
  return (
    <g aria-hidden>
      <line x1="88" y1="12" x2="112" y2="12" stroke={RING_BORDER} strokeWidth="0.9" />
      <path d="M 100 9.5 L 101.8 12 L 100 14.5 L 98.2 12 Z" fill={ORANGE} />
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
    <div className="flex items-center justify-center" style={{ gap: size * 0.08 }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating >= i + 0.5;
        return (
          <span
            key={i}
            style={{
              fontSize: size,
              color: filled || half ? color : color,
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
};

export default function OverallCompatibilityScore({
  value,
  className = "",
  title = "OVERALL COMPATIBILITY SCORE",
  size = 168,
}: OverallCompatibilityScoreProps) {
  const result = getCompatibilityScoreResult(value);
  const titleArcId = useId().replace(/:/g, "");

  const pivotX = 100;
  const pivotY = 106;
  const arcR = 54;
  const strokeWidth = 12;
  const needleLen = arcR - 6;
  const titleArcY = 80;

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Overall compatibility score ${result.value} percent, ${result.levelLabel}, ${result.alignment}`}
    >
      <svg viewBox="0 0 200 200" fill="none" className="h-full w-full" aria-hidden>
        {/* Outer ring — white fill, light orange border */}
        <circle cx={100} cy={100} r={94} stroke={RING_BORDER} strokeWidth="1.5" fill="#ffffff" />

        <TopDiamond />

        {/* Curved title */}
        <defs>
          <path id={titleArcId} d={`M 36 ${titleArcY} A 64 64 0 0 1 164 ${titleArcY}`} fill="none" />
        </defs>
        <text
          fill={NAVY}
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.5"
          fontFamily="var(--font-geist-sans), 'Segoe UI', sans-serif"
        >
          <textPath href={`#${titleArcId}`} startOffset="50%" textAnchor="middle" dy="-3">
            {title}
          </textPath>
        </text>

        {/* Semicircular 4-segment gauge */}
        <GaugeArc cx={pivotX} cy={pivotY} r={arcR} strokeWidth={strokeWidth} />

        {/* Radial needle from center hub — 0% left (red), 100% right (green) */}
        <g transform={`rotate(${result.needleAngle} ${pivotX} ${pivotY})`}>
          <path
            d={`M ${pivotX - 1.5} ${pivotY} L ${pivotX - 0.5} ${pivotY - needleLen + 4} L ${pivotX + 0.5} ${pivotY - needleLen + 4} L ${pivotX + 1.5} ${pivotY} Z`}
            fill={NAVY}
          />
          <circle cx={pivotX} cy={pivotY} r="5" fill={NAVY} />
          <circle cx={pivotX} cy={pivotY} r="1.8" fill="#ffffff" />
        </g>
      </svg>

      {/* 62 + small % */}
      <div
        className="pointer-events-none absolute left-0 right-0 flex items-start justify-center"
        style={{ top: size * 0.38 }}
      >
        <span
          className={`${cinzel.className} font-bold leading-none`}
          style={{ color: result.percentageColor, fontSize: size * 0.2 }}
        >
          {result.value}
        </span>
        <span
          className={`${cinzel.className} font-bold leading-none`}
          style={{
            color: result.percentageColor,
            fontSize: size * 0.085,
            marginLeft: 2,
            marginTop: size * 0.016,
          }}
        >
          %
        </span>
      </div>

      {/* MEDIUM / HIGH / LOW */}
      <p
        className="pointer-events-none absolute left-0 right-0 text-center font-bold tracking-[0.12em]"
        style={{
          top: size * 0.545,
          color: result.levelColor,
          fontSize: size * 0.052,
          fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif",
        }}
      >
        {result.levelLabel}
      </p>

      {/* Star rating */}
      <div
        className="pointer-events-none absolute left-0 right-0 flex justify-center"
        style={{ top: size * 0.615 }}
      >
        <ScoreStars rating={result.starRating} color={result.starColor} size={size * 0.052} />
      </div>

      {/* MODERATE ALIGNMENT */}
      <p
        className="pointer-events-none absolute left-0 right-0 text-center font-bold tracking-[0.06em]"
        style={{
          bottom: size * 0.11,
          color: NAVY,
          fontSize: size * 0.034,
          fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif",
        }}
      >
        {result.alignment}
      </p>
    </div>
  );
}
