import { Globe, Phone } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Pattern3 } from "../CommunComponents";
import { REPORT_COLORS } from "./BusinessNameReportPageShell";

export const COLORS = REPORT_COLORS;

export const BUSINESS_ASSETS = {
  logo: "/assets/ganesha-logo.png",
  frameBg: "/assets/businessReport/frame-bg.png",
  homepageBg: "/assets/businessReport/homepage-bg.png",
  pattern2: "/assets/cover/pattern-2.png",
  clientIcon: "/assets/cover/client-icon.png",
  building: "/assets/signatureReport/building.png",
  calendar: "/assets/cover/calendar.png",
  lotus: "/assets/cover/lotus.png",
  scoreCircle: "/assets/businessReport/score-circle.png",
  destinyMandala: "/assets/businessReport/bg.png",
} as const;

export type BusinessReportHeaderProps = {
  brandName?: string;
  subtitle?: string;
  subtitle2?: string;
  logoSize?: number;
  className?: string;
};

export type BusinessReportFooterProps = {
  pageNumber?: string;
  brandDisplayName?: string;
  servicesText?: string;
  website?: string;
  phone?: string;
  instagram?: string;
  className?: string;
};

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS.gold}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={COLORS.gold} stroke="none" />
    </svg>
  );
}

export function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width }}>
      <Image
        src={BUSINESS_ASSETS.pattern2}
        alt=""
        width={width}
        height={Math.round(width * 0.12)}
        className="h-auto w-full object-contain"
        aria-hidden
      />
    </div>
  );
}

export function BusinessReportHeader({
  brandName = "ASTRO AARAMBH",
  subtitle = "BUSINESS NAME OPTIMIZATION REPORT",
  subtitle2 = "PERSONALIZED BUSINESS NUMEROLOGY & BRAND VIBRATION ANALYSIS",
  logoSize = 100,
  className = "",
}: BusinessReportHeaderProps) {
  return (
    <header className={`mt-2 flex flex-col items-center text-center ${className}`}>
      <Image
        src={BUSINESS_ASSETS.logo}
        alt="Astro Aarambh"
        width={logoSize}
        height={logoSize}
        className="mb-5"
        priority
      />

      <h1
        className="text-center text-[40px] font-bold leading-none"
        style={{ color: COLORS.brown }}
      >
        {brandName}
      </h1>

      <div className="mt-1 flex w-full max-w-[620px] flex-col items-center justify-center gap-1">
        <p
          className="text-center text-[23px] font-semibold leading-snug"
          style={{ color: COLORS.gold }}
        >
          {subtitle}
        </p>
        <p
          className="text-center text-[16px] leading-snug font-nunito-sans"
          style={{ color: COLORS.black, opacity: 0.85 }}
        >
          {subtitle2}
        </p>
      </div>
    </header>
  );
}

export function BusinessReportFooter({
  pageNumber = "01",
  brandDisplayName = "Astro Aarambh",
  servicesText = "BUSINESS NUMEROLOGY | BRAND NAMING | SUCCESS ALIGNMENT",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
  className = "",
}: BusinessReportFooterProps) {
  const contactItemStyle: CSSProperties = {
    color: COLORS.black,
  };

  return (
    <footer className={`relative z-10 mt-auto flex flex-col items-center text-center ${className}`}>

      <div className="mt-2 flex items-center justify-center gap-2">
        <Pattern3 size={40} />
        <p
          className="text-[35px] font-bold tracking-wide"
          style={{ color: COLORS.brown }}
        >
          {brandDisplayName}
        </p>
        <Pattern3 size={40} className="rotate-180" />
      </div>

      <p
        className="mt-1 text-[15px] font-semibold"
        style={{ color: COLORS.black, opacity: 0.85 }}
      >
        {servicesText}
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px]">
        <div className="flex items-center gap-1.5" style={contactItemStyle}>
          <Globe size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
          <span>{website}</span>
        </div>
        <div className="flex items-center gap-1.5" style={contactItemStyle}>
          <Phone size={16} strokeWidth={1.8} style={{ color: COLORS.gold }} />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-1.5" style={contactItemStyle}>
          <InstagramIcon size={16} />
          <span>{instagram}</span>
        </div>
      </div>
    </footer>
  );
}
