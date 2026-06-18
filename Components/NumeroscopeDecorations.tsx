type SvgProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function SunIcon({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} style={style} aria-hidden>
      <circle cx="40" cy="40" r="18" stroke="#B8860B" strokeWidth="1.2" opacity="0.7" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 40 + 22 * Math.cos(angle);
        const y1 = 40 + 22 * Math.sin(angle);
        const x2 = 40 + 30 * Math.cos(angle);
        const y2 = 40 + 30 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#B8860B"
            strokeWidth="1"
            opacity="0.55"
          />
        );
      })}
      <circle cx="34" cy="36" r="2" fill="#B8860B" opacity="0.5" />
      <circle cx="46" cy="36" r="2" fill="#B8860B" opacity="0.5" />
      <path
        d="M34 46C36 48 40 49 44 48"
        stroke="#B8860B"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function MoonIcon({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M48 18C38 18 30 28 30 40C30 52 38 62 48 62C42 58 38 50 38 40C38 30 42 22 48 18Z"
        stroke="#B8860B"
        strokeWidth="1.2"
        fill="none"
        opacity="0.65"
      />
      <circle cx="58" cy="24" r="1.5" fill="#B8860B" opacity="0.45" />
      <circle cx="62" cy="34" r="1" fill="#B8860B" opacity="0.35" />
      <circle cx="55" cy="50" r="1.2" fill="#B8860B" opacity="0.4" />
    </svg>
  );
}

type ChartNode = {
  label: string;
  sublabel?: string;
  value: string | number;
  symbol?: string;
  position: "top" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "bottom";
};

type VisualChartProps = SvgProps & {
  coreValue: string | number;
  nodes: ChartNode[];
};

const chartPositions: Record<ChartNode["position"], { x: number; y: number }> = {
  top: { x: 150, y: 28 },
  topLeft: { x: 42, y: 72 },
  topRight: { x: 258, y: 72 },
  bottomLeft: { x: 42, y: 198 },
  bottomRight: { x: 258, y: 198 },
  bottom: { x: 150, y: 238 },
};

const CHART_BURGUNDY = "#5D1A1A";
const CHART_FONT = "Cinzel, 'Times New Roman', serif";

function chartUpperText(value: string) {
  return value.toUpperCase();
}

export function VisualNumerologyChart({
  className,
  style,
  coreValue,
  nodes,
}: VisualChartProps) {
  const center = { x: 150, y: 130 };

  return (
    <svg viewBox="0 0 300 270" fill="none" className={className} style={style} aria-hidden>
      {nodes.map((node) => {
        const pos = chartPositions[node.position];
        return (
          <line
            key={node.label}
            x1={center.x}
            y1={center.y}
            x2={pos.x}
            y2={pos.y}
            stroke="#B8860B"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            opacity="0.45"
          />
        );
      })}

      <circle cx={center.x} cy={center.y} r="38" stroke="#B8860B" strokeWidth="1.2" />
      <circle cx={center.x} cy={center.y} r="32" stroke="#B8860B" strokeWidth="0.6" opacity="0.4" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x1 = center.x + 28 * Math.cos(angle);
        const y1 = center.y + 28 * Math.sin(angle);
        const x2 = center.x + 34 * Math.cos(angle);
        const y2 = center.y + 34 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#B8860B"
            strokeWidth="0.6"
            opacity="0.35"
          />
        );
      })}
      <text
        x={center.x}
        y={center.y - 6}
        textAnchor="middle"
        fill={CHART_BURGUNDY}
        fontSize="7"
        fontFamily={CHART_FONT}
        fontWeight="600"
      >
        {chartUpperText("CORE VIBRATION")}
      </text>
      <text
        x={center.x}
        y={center.y + 12}
        textAnchor="middle"
        fill={CHART_BURGUNDY}
        fontSize="16"
        fontFamily={CHART_FONT}
        fontWeight="700"
      >
        {coreValue}
      </text>

      {nodes.map((node) => {
        const pos = chartPositions[node.position];
        return (
          <g key={node.label}>
            <circle cx={pos.x} cy={pos.y} r="26" stroke="#B8860B" strokeWidth="1" fill="#fdf5e6" />
            <text
              x={pos.x}
              y={pos.y - 10}
              textAnchor="middle"
              fill={CHART_BURGUNDY}
              fontSize="5"
              fontFamily={CHART_FONT}
              fontWeight="600"
            >
              {chartUpperText(node.label)}
            </text>
            {node.sublabel && (
              <text
                x={pos.x}
                y={pos.y - 3}
                textAnchor="middle"
                fill={CHART_BURGUNDY}
                fontSize="4.5"
                fontFamily={CHART_FONT}
                fontWeight="600"
                opacity="0.85"
              >
                {chartUpperText(node.sublabel)}
              </text>
            )}
            <text
              x={pos.x}
              y={pos.y + 10}
              textAnchor="middle"
              fill={CHART_BURGUNDY}
              fontSize="13"
              fontFamily={CHART_FONT}
              fontWeight="700"
            >
              {node.value}
            </text>
            {node.symbol && (
              <text
                x={pos.x}
                y={pos.y + 20}
                textAnchor="middle"
                fill="#B8860B"
                fontSize="8"
              >
                {node.symbol}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function PageFooterBar({
  className,
  style,
  pageNumber = "02",
}: SvgProps & { pageNumber?: string }) {
  return (
    <svg viewBox="0 0 794 36" fill="none" className={className} style={style} aria-hidden>
      <path
        d="M0 18C133 4 266 4 397 18C528 32 661 32 794 18V36H0V18Z"
        fill="#5D2E17"
      />
      <circle cx="397" cy="18" r="14" stroke="#B8860B" strokeWidth="1.2" fill="#fdf5e6" />
      <text
        x="397"
        y="22"
        textAnchor="middle"
        fill="#5D2E17"
        fontSize="11"
        fontFamily="serif"
        fontWeight="700"
      >
        {pageNumber}
      </text>
    </svg>
  );
}
