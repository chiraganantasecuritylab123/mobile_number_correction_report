import type { CSSProperties } from "react";

type SvgProps = {
  className?: string;
  style?: CSSProperties;
};

export function SectionDiamondTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {/* <span style={{ color: "#b8860b", fontSize: 8 }}>◆</span> */}
      <h3
        className="text-[11px] font-bold tracking-[0.1em]"
        style={{ color: "#5D1A1A", textTransform: "uppercase" }}
      >
        {children}
      </h3>
      {/* <span style={{ color: "#b8860b", fontSize: 8 }}>◆</span> */}
    </div>
  );
}

/** Highlight cells in a Lo Shu mini-grid (row-major indices). */
export function MiniGridHighlight({
  highlighted,
  layout = "3x3",
  className,
  style,
}: SvgProps & { highlighted: number[]; layout?: "2x3" | "3x3" }) {
  const highlightedSet = new Set(highlighted);
  const rows = layout === "2x3" ? 2 : 3;
  const cols = 3;
  const cellCount = rows * cols;
  const viewBoxHeight = rows * 18;

  return (
    <svg
      viewBox={`0 0 54 ${viewBoxHeight}`}
      fill="none"
      className={className}
      style={style}
      aria-hidden
    >
      {Array.from({ length: cellCount }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = col * 18 + 1;
        const y = row * 18 + 1;
        const isOn = highlightedSet.has(index);

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={14}
            height={12}
            rx={2}
            fill={isOn ? "#D9822B" : "#FFF9F2"}
            stroke={isOn ? "#D9822B" : "#D8C4A8"}
            strokeWidth="0.8"
            opacity={isOn ? 1 : 0.9}
          />
        );
      })}
    </svg>
  );
}

export function AvailabilityRing({
  percentage,
  className,
  style,
}: SvgProps & { percentage: number }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style} aria-hidden>
      <circle cx="20" cy="20" r={radius} stroke="#F0E4D2" strokeWidth="3" />
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#D9822B"
        strokeWidth="3"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 20 20)"
      />
      <text
        x="20"
        y="22"
        textAnchor="middle"
        fill="#3c2f2f"
        fontSize="9"
        fontFamily="'Nunito Sans', sans-serif"
        fontWeight="700"
      >
        {percentage}%
      </text>
    </svg>
  );
}

export function PresentDot({ className = 'h-5 w-5', children }: { className?: string, children?: React.ReactNode }) {
  return (
    <span
      className={`inline-block rounded-full ${className ?? ""}`}
      style={{ backgroundColor: "#d48e31" }}
    >
      {children}
    </span>
  );
}

export function MissingRing({ className = 'h-5 w-5', children }: { className?: string, children?: React.ReactNode }) {
  return (
    <span
      className={`inline-block rounded-full border-2 border-dashed ${className ?? ""}`}
      style={{ borderColor: "#c45c3e" }}
    />
  );
}
