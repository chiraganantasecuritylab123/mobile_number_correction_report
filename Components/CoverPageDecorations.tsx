type SvgProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function CornerFlourish({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M6 6H34M6 6V34M6 6C16 10 24 18 30 28M6 6C10 16 18 24 28 30"
        stroke="#B8860B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M12 6C18 8 24 14 28 22M8 12C14 16 20 22 24 28"
        stroke="#B8860B"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M18 6C22 10 26 14 28 20M6 18C10 22 14 26 20 28"
        stroke="#8B6914"
        strokeWidth="0.7"
        opacity="0.5"
      />
      <circle cx="6" cy="6" r="2.5" fill="#B8860B" />
      <path
        d="M22 4C26 8 30 12 32 18M4 22C8 26 12 30 18 32"
        stroke="#B8860B"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  );
}

export function OrnamentalDivider({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 140 14" fill="none" className={className} style={style} aria-hidden>
      <line x1="0" y1="7" x2="48" y2="7" stroke="#B8860B" strokeWidth="0.9" />
      <path
        d="M52 7C54 4 57 2 62 2C67 2 70 4 72 7C70 10 67 12 62 12C57 12 54 10 52 7Z"
        fill="#B8860B"
        opacity="0.85"
      />
      <circle cx="62" cy="7" r="1.8" fill="#D4AF37" />
      <line x1="76" y1="7" x2="140" y2="7" stroke="#B8860B" strokeWidth="0.9" />
    </svg>
  );
}

export function LotusIcon({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 48 28" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M24 24C24 24 14 16 14 9C14 5 18 3 24 7C30 3 34 5 34 9C34 16 24 24 24 24Z"
        fill="#B8860B"
        opacity="0.85"
      />
      <path
        d="M24 24C24 24 10 14 12 7C13 4 18 5 24 10C30 5 35 4 36 7C38 14 24 24 24 24Z"
        stroke="#B8860B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.55"
      />
      <path d="M24 24V26M19 25H29" stroke="#B8860B" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function BottomFlourish({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 220 48" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M24 36C70 14 90 10 110 10C130 10 150 14 196 36"
        stroke="#5D2E17"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M48 32C78 18 94 15 110 15C126 15 142 18 172 32"
        stroke="#B8860B"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M110 10L110 3M98 12L95 5M122 12L125 5"
        stroke="#B8860B"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="110" cy="10" r="3.5" fill="#B8860B" />
      <path
        d="M82 26C92 22 100 20 110 20C120 20 128 22 138 26"
        stroke="#5D2E17"
        strokeWidth="0.8"
        opacity="0.45"
      />
    </svg>
  );
}

export function LoShuSquare({ className, style }: SvgProps) {
  const numbers = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ];

  return (
    <svg viewBox="0 0 110 110" fill="none" className={className} style={style} aria-hidden>
      <circle cx="55" cy="55" r="50" stroke="#B8860B" strokeWidth="1.4" opacity="0.7" />
      <circle cx="55" cy="55" r="46" stroke="#B8860B" strokeWidth="0.5" opacity="0.4" />
      {numbers.map((row, rowIndex) =>
        row.map((num, colIndex) => (
          <text
            key={`${rowIndex}-${colIndex}`}
            x={24 + colIndex * 31}
            y={36 + rowIndex * 24}
            textAnchor="middle"
            fill="#B8860B"
            fontSize="12"
            fontFamily="serif"
            fontWeight="600"
            opacity="0.75"
          >
            {num}
          </text>
        )),
      )}
      <line x1="30" y1="44" x2="80" y2="44" stroke="#B8860B" strokeWidth="0.5" opacity="0.3" />
      <line x1="30" y1="68" x2="80" y2="68" stroke="#B8860B" strokeWidth="0.5" opacity="0.3" />
      <line x1="42" y1="32" x2="42" y2="80" stroke="#B8860B" strokeWidth="0.5" opacity="0.3" />
      <line x1="68" y1="32" x2="68" y2="80" stroke="#B8860B" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function MoonPhases({ className, style }: SvgProps) {
  const phases = [
    { cx: 12, opacity: 1, filled: false },
    { cx: 32, opacity: 0.35, filled: true },
    { cx: 52, opacity: 0.55, filled: true },
    { cx: 72, opacity: 1, filled: true },
    { cx: 92, opacity: 0.55, filled: true },
    { cx: 112, opacity: 0.35, filled: true },
    { cx: 132, opacity: 1, filled: false },
  ];

  return (
    <svg viewBox="0 0 145 36" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M8 24C38 10 107 10 137 24"
        stroke="#B8860B"
        strokeWidth="0.8"
        opacity="0.45"
      />
      {phases.map((phase, i) => (
        <circle
          key={i}
          cx={phase.cx}
          cy={22 - Math.abs(i - 3) * 2.5}
          r="6"
          stroke="#B8860B"
          strokeWidth="1"
          fill={phase.filled ? "#B8860B" : "none"}
          opacity={phase.opacity}
        />
      ))}
    </svg>
  );
}

export function AstrologyWheel({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 130 130" fill="none" className={className} style={style} aria-hidden>
      <circle cx="65" cy="65" r="55" stroke="#B8860B" strokeWidth="1" opacity="0.55" />
      <circle cx="65" cy="65" r="40" stroke="#B8860B" strokeWidth="0.8" opacity="0.4" />
      <circle cx="65" cy="65" r="24" stroke="#B8860B" strokeWidth="0.6" opacity="0.3" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 65 + 38 * Math.cos(angle);
        const y1 = 65 + 38 * Math.sin(angle);
        const x2 = 65 + 54 * Math.cos(angle);
        const y2 = 65 + 54 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#B8860B"
            strokeWidth="0.8"
            opacity="0.45"
          />
        );
      })}
      <circle cx="65" cy="65" r="7" fill="#B8860B" opacity="0.4" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={65 + 46 * Math.cos(angle)}
            cy={65 + 46 * Math.sin(angle)}
            r="2"
            fill="#B8860B"
            opacity="0.35"
          />
        );
      })}
    </svg>
  );
}

export function ConstellationWheel({ className, style }: SvgProps) {
  const stars: [number, number][] = [
    [32, 28],
    [54, 16],
    [76, 32],
    [98, 22],
    [92, 54],
    [70, 70],
    [44, 60],
    [28, 76],
    [60, 86],
    [88, 82],
  ];

  return (
    <svg viewBox="0 0 130 130" fill="none" className={className} style={style} aria-hidden>
      <circle cx="65" cy="65" r="58" stroke="#B8860B" strokeWidth="1" opacity="0.45" />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.5 : 1.5} fill="#B8860B" opacity="0.5" />
      ))}
      <path
        d="M32 28L54 16L76 32L98 22M76 32L70 70L44 60M70 70L60 86"
        stroke="#B8860B"
        strokeWidth="0.6"
        opacity="0.3"
      />
    </svg>
  );
}

export function SectionFrame({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 520 36" fill="none" className={className} style={style} aria-hidden>
      <rect x="4" y="4" width="512" height="28" rx="14" stroke="#B8860B" strokeWidth="1" fill="none" />
      <path d="M16 18H200M320 18H504" stroke="#B8860B" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}

export function SteeringWheelIcon({
  className,
  style,
  size = 24,
  strokeWidth = 1.75,
}: SvgProps & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden
    >
      <circle cx="12" cy="12" r="8.5" stroke="#B8860B" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" fill="#B8860B" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={12 + 2.5 * Math.cos(rad)}
            y1={12 + 2.5 * Math.sin(rad)}
            x2={12 + 8.5 * Math.cos(rad)}
            y2={12 + 8.5 * Math.sin(rad)}
            stroke="#B8860B"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function BoxCornerAccent({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M1 6V1H6M1 1L6 6"
        stroke="#B8860B"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function CoverBottomBand({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 794 52" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M0 26C133 10 266 10 397 26C528 42 661 42 794 26V52H0V26Z"
        fill="#5D2E17"
      />
      <path
        d="M397 8L397 2M385 10L382 4M409 10L412 4"
        stroke="#B8860B"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="397" cy="8" r="4" fill="#B8860B" />
      <path
        d="M360 20C370 16 384 14 397 14C410 14 424 16 434 20"
        stroke="#B8860B"
        strokeWidth="0.9"
        opacity="0.55"
      />
      <path
        d="M372 24C380 22 388 21 397 21C406 21 414 22 422 24"
        stroke="#D4AF37"
        strokeWidth="0.7"
        opacity="0.45"
      />
    </svg>
  );
}
