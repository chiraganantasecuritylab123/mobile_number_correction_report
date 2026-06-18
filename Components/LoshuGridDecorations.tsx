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
        style={{ color: "#5d2e17" }}
      >
        {children}
      </h3>
      {/* <span style={{ color: "#b8860b", fontSize: 8 }}>◆</span> */}
    </div>
  );
}

/** Highlight cells in a 3×3 Lo Shu mini-grid (indices 0–8, row-major). */
export function MiniGridHighlight({
  highlighted,
  className,
  style,
}: SvgProps & { highlighted: number[] }) {
  const highlightedSet = new Set(highlighted);

  return (
    <svg viewBox="0 0 54 54" fill="none" className={className} style={style} aria-hidden>
      {Array.from({ length: 9 }).map((_, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const x = col * 18 + 1;
        const y = row * 18 + 1;
        const isOn = highlightedSet.has(index);

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={16}
            height={16}
            rx={2}
            fill={isOn ? "#d48e31" : "rgba(253, 245, 230, 0.9)"}
            stroke="#b8860b"
            strokeWidth="0.6"
            opacity={isOn ? 0.85 : 0.5}
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
      <circle cx="20" cy="20" r={radius} stroke="rgba(184, 134, 11, 0.2)" strokeWidth="3" />
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#d48e31"
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
        fill="#5d2e17"
        fontSize="7"
        fontFamily="serif"
        fontWeight="700"
      >
        {percentage}%
      </text>
    </svg>
  );
}

export function PresentDot({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${className ?? ""}`}
      style={{ backgroundColor: "#d48e31" }}
    />
  );
}

export function MissingRing({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full border border-dashed ${className ?? ""}`}
      style={{ borderColor: "#c45c3e" }}
    />
  );
}
