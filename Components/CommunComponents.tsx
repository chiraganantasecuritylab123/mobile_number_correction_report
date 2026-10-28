import Image from "next/image";
import { REPORT_COLORS } from "./ReportPageShell";


const COLORS = REPORT_COLORS;

export function CoverLotus({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/assets/cover/lotus.png"
      alt=""
      width={size}
      height={Math.round(size * 0.58)}
      className={`object-contain opacity-80 ${className ?? ""}`}
      aria-hidden
    />
  );
}

export function Pattern3({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/assets/numeroscope/pattern-3.png"
      alt=""
      width={size}
      height={Math.round(size * 0.58)}
      className={`object-contain opacity-80 ${className ?? ""}`}
      aria-hidden
    />
  );
}


export function SubtitleHeader({ text }: { text: string }) {
  return (
    <div className="mt-1 flex w-full max-w-[620px] items-center justify-center gap-3 px-2 font-nunito-sans">
      <Pattern3 size={32} />
      <p
        className="text-center text-[14px] font-semibold leading-snug"
        style={{ color: COLORS.brown, opacity: 0.9 }}
      >
        {text}
      </p>
      <Pattern3 size={32} className="rotate-180" />
    </div>
  );
}