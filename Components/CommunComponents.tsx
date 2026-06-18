import Image from "next/image";

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