import { CoverLotus } from "./CommunComponents";
import { LotusIcon } from "./CoverPageDecorations";

export type FooterSummaryBannerProps = {
  summary: string;
  className?: string;
};

function getFooterLines(summary: string): string[] {
  const trimmed = summary.trim();
  if (!trimmed) return [];

  if (trimmed.includes("\n")) {
    return trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
  }

  const periodIndex = trimmed.indexOf(". ");
  if (periodIndex >= 0) {
    return [trimmed.slice(0, periodIndex + 1), trimmed.slice(periodIndex + 2)];
  }

  return [trimmed];
}

export default function FooterSummaryBanner({
  summary,
  className = "",
}: FooterSummaryBannerProps) {
  const lines = getFooterLines(summary);

  return (
    <div
      className={`flex w-full max-w-xl items-center justify-between gap-4 rounded-xl px-3 py-2 ${className}`.trim()}
      style={{
        border: "1px solid rgba(212, 163, 115, 0.75)",
        boxShadow: "0 1px 3px rgba(93, 46, 23, 0.06)",
      }}
    >
      <CoverLotus size={40} />
      <p
        className="flex-1 text-center text-xs italic leading-relaxed"
        style={{
          color: "#3c2f2f",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {lines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {index > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </p>
      <CoverLotus size={40} />
    </div>
  );
}
