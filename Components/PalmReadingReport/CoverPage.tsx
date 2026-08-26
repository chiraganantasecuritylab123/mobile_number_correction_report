import Image from "next/image";
import { Globe, Phone, Calendar } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { CoverLotus, Pattern3 } from "../CommunComponents";

const signatureFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ASSETS = {
  cover: "/assets/cover-bg.png",
  logo: "/assets/ganesha-logo.png",
  hand: "/assets/palm-reading-report/hand.png",
  pattern2: "/assets/cover/pattern-2.png",
  nameBorder: "/assets/signaturePages/nameImageBorder.png",
} as const; 

export type PalmReadingCoverPageProps = {
  clientName?: string;
  dateOfBirth?: string;
  reportDate?: string;
};

function PalmReadingPageFrame({
  children,
  pageLabel,
  pageNumber,
}: {
  children?: ReactNode;
  pageLabel: string;
  pageNumber: string;
}) {
  return (
    <article
      data-report-page
      data-page-label={pageLabel}
      data-report-page-number={pageNumber}
      className="relative mx-auto overflow-hidden shadow-xl"
      style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
    >
      <Image
        src={ASSETS.cover}
        alt=""
        fill
        sizes={`${PAGE_WIDTH}px`}
        className="pointer-events-none select-none object-fill"
        priority={pageNumber === "01"}
        aria-hidden
      />
      <Image
        src={ASSETS.logo}
        alt="Astro Aarambh"
        width={100} 
        height={100}
        className="absolute left-1/2 z-20 -translate-x-1/2 object-contain"
        style={{ top: 42 }}
        priority
      />
      <div className="relative z-10 h-full">{children}</div>
    </article>
  );
}

function OrnamentDivider({ width = 220 }: { width?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width }}>
      <Image
        src={ASSETS.pattern2}
        alt=""
        width={width}
        height={Math.round(width * 0.12)}
        className="h-auto w-full object-contain"
        aria-hidden
      />
    </div>
  );
}

function InstagramIcon({ size = 11 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--cover-gold-light)"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="var(--cover-gold-light)" stroke="none" />
    </svg>
  );
}

function CalendarBadge({ size = 38 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: "1.5px dotted var(--cover-gold)",
      }}
    >
      <Calendar
        size={size * 0.5}
        strokeWidth={1.8}
        style={{ color: "var(--cover-gold)" }}
      />
    </div>
  );
}

function DateInfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <CalendarBadge size={64} />
      <div className="flex flex-col items-start gap-0.5 text-left font-nunito-sans">
        <span
          className="text-[15px] font-semibold tracking-[0.1em]"
          style={{ color: "var(--cover-slate)" }}
        >
          {label}
        </span>
        <span
          className="text-[16px] font-medium"
          style={{ color: "var(--cover-brown)" }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export default function PalmReadingCoverPage({
  clientName = "Aarya Gangwar",
  dateOfBirth = "22-03-2022",
  reportDate = "22-08-2026",
}: PalmReadingCoverPageProps) {
  return (
    <PalmReadingPageFrame pageLabel="palm-reading-cover" pageNumber="01">
      <div
        className="absolute inset-x-0 flex flex-col items-center px-14 pt-0 text-center font-cinzel"
        style={{ top: "13%", bottom: "6%" }}
      >
        <div className="mt-8 flex items-center gap-2 pb-4">
          <Pattern3 size={100} />
          <p
            className="text-[38px] font-bold leading-none tracking-[0.04em]"
            style={{ color: "var(--cover-maroon)" }}
          >
            ASTRO AARAMBH
          </p>
          <Pattern3 size={100} className="rotate-180" />
        </div>

        <h1
          className="mt-1 text-[32px] font-bold leading-tight tracking-wide pb-4"
          style={{ color: "var(--cover-gold)" }}
        >
          PREMIUM PALM READING REPORT
        </h1>

        <p
          className="mt-1.5 text-[13px] font-semibold tracking-[0.14em]"
          style={{ color: "var(--cover-slate)" }}
        >
          INSIGHTS FROM YOUR HANDS, GUIDANCE FOR YOUR LIFE
        </p>

        <div className="mt-4">
          <OrnamentDivider width={260} />
        </div>

        <div>
          <p
            className="text-[14px] font-semibold tracking-[0.16em]"
            style={{ color: "var(--cover-maroon)" }}
          >
            PREPARED FOR
          </p>

          <div className="relative inline-flex w-full max-w-[400px] items-center justify-center">
            <img
              src={ASSETS.nameBorder}
              alt=""
              className="h-auto w-full select-none"
              aria-hidden
            />
            <span
              className={`absolute z-10 px-4 text-center text-[28px] leading-none ${signatureFont.className}`}
              style={{ color: "var(--cover-maroon)" }}
            >
              {clientName}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-6">
          <DateInfoBlock label="DATE OF BIRTH" value={dateOfBirth} />
          <div
            className="h-[34px] w-px self-center"
            style={{ backgroundColor: "rgba(184,134,11,0.55)" }}
          />
          <DateInfoBlock label="REPORT DATE" value={reportDate} />
        </div>

        <div className="mt-4">
          <OrnamentDivider width={260} />
        </div>

        <div className="mt-3.5 flex items-center justify-center gap-3">
          <CoverLotus size={42} />
          <blockquote
            className="max-w-[360px] text-[18px] italic leading-relaxed"
            style={{ color: "var(--cover-maroon)", fontFamily: "Georgia, serif" }}
          >
            &ldquo;Your Hands Hold The Secrets Of Your Past, Present
            &amp; Future.&rdquo;
          </blockquote>
          <CoverLotus size={42} />
        </div>

        <div className="mt-4">
          <OrnamentDivider width={260} />
        </div>


        <div className="mt-3 flex items-center justify-center gap-2">
          <OrnamentDivider width={160} />
          <p
            className="text-[26px] font-bold tracking-wide"
            style={{ color: "var(--cover-maroon)" }}
          >
            Astro Aarambh
          </p>
          <OrnamentDivider width={160} />
        </div>

        <p
          className="mt-1 text-[14px] font-semibold tracking-[0.12em] font-nunito-sans"
          style={{ color: "var(--cover-slate)" }}
        >
          PALMISTRY&nbsp;&nbsp;|&nbsp;&nbsp;LIFE GUIDANCE&nbsp;&nbsp;|&nbsp;&nbsp;FUTURE INSIGHTS
        </p>

        <div className="mt-2.5 flex flex-col items-center gap-1 font-nunito-sans">
          <div
            className="flex items-center gap-2 text-[16px]"
            style={{ color: "var(--cover-gray)" }}
          >
            <Globe size={20} strokeWidth={1.8} style={{ color: "var(--cover-gold-light)" }} />
            <span>www.astroaarambh.com</span>
          </div>
          <div
            className="flex items-center gap-2 text-[16px]"
            style={{ color: "var(--cover-gray)" }}
          >
            <Phone size={20} strokeWidth={1.8} style={{ color: "var(--cover-gold-light)" }} />
            <span>7405923555</span>
          </div>
          <div
            className="flex items-center gap-2 text-[16px]"
            style={{ color: "var(--cover-gray)" }}
          >
            <InstagramIcon size={20} />
            <span>astroaarambhofficial</span>
          </div>
        </div>
        <Image
            src={ASSETS.hand}
            alt="Astro Aarambh"
            width={200}
            height={100}
            className="absolute left-3 -bottom-10 z-20  object-contain"
            priority
          />
      </div>
    </PalmReadingPageFrame>
  );
}
