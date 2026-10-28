import Image from "next/image";
import { Globe, Phone, Clock, MapPin, Calendar } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { Pattern3 } from "../CommunComponents";

const signatureFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ASSETS = {
  cover: "/assets/signaturePages/coverPage1.png",
  pattern2: "/assets/cover/pattern-2.png",
  nameBorder: "/assets/signaturePages/nameImageBorder.png",
} as const;

export type SignatureAnalysisReportProps = {
  clientName?: string;
  dateOfBirth?: string;
  timeOfBirth?: string;
  placeOfBirth?: string;
  reportDate?: string;
};

function SignaturePageFrame({
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
      <div className="relative z-10 h-full">{children}</div>
    </article>
  );
}

function LotusGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 40 28"
      fill="none"
      aria-hidden
    >
      <path d="M20 26c0-9-4-14-4-18 0 4-4 9-4 18" stroke="var(--cover-gold)" strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-9 4-14 4-18 0 4 4 9 4 18" stroke="var(--cover-gold)" strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-11-7-15-12-16 2 5 4 11 12 16" stroke="var(--cover-gold)" strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-11 7-15 12-16-2 5-4 11-12 16" stroke="var(--cover-gold)" strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-7-2-11-2-13 0 2-2 6-2 13" stroke="var(--cover-gold)" strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-7 2-11 2-13 0 2 2 6 2 13" stroke="var(--cover-gold)" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function OrnamentDivider({
  width = 220,
  lotusSize = 0,
}: {
  width?: number;
  lotusSize?: number;
}) {
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
      {lotusSize > 0 && (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#f4e7c9] px-1">
          <LotusGlyph size={lotusSize} />
        </div>
      )}
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

function IconBadge({
  children,
  size = 44,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: "1.5px dashed var(--cover-gold)",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function DetailCol({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5 px-2 text-center">
      <IconBadge size={44}>{icon}</IconBadge>
      <span
        className="text-[11px] font-bold tracking-[0.13em] font-nunito-sans"
        style={{ color: "var(--cover-slate)" }}
      >
        {label}
      </span>
      <span
        className="text-[15px] font-semibold leading-snug font-nunito-sans"
        style={{ color: "var(--cover-brown)" }}
      >
        {value}
      </span>
    </div>
  );
}

function VDivider() {
  return (
    <div
      className="self-stretch"
      style={{
        width: 1,
        backgroundColor: "rgba(184,134,11,0.45)",
        margin: "4px 0",
      }}
    />
  );
}

function BirthDetailsGrid({
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
  reportDate,
}: {
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  reportDate: string;
}) {
  const iconSize = 22;
  const iconProps = {
    size: iconSize,
    strokeWidth: 1.6,
    style: { color: "var(--cover-gold)" },
  };

  return (
    <div className="mt-5 flex w-full items-stretch justify-center">
      <DetailCol
        icon={<Calendar {...iconProps} />}
        label="DATE OF BIRTH"
        value={dateOfBirth}
      />
      <VDivider />
      <DetailCol
        icon={<Clock {...iconProps} />}
        label="TIME OF BIRTH"
        value={timeOfBirth}
      />
      <VDivider />
      <DetailCol
        icon={<MapPin {...iconProps} />}
        label="PLACE OF BIRTH"
        value={placeOfBirth}
      />
      <VDivider />
      <DetailCol
        icon={<Calendar {...iconProps} />}
        label="REPORT DATE"
        value={reportDate}
      />
    </div>
  );
}

function RinnMuktiCoverPage({
  clientName = "Bhargav Gujarati",
  dateOfBirth = "18 August 1994",
  timeOfBirth = "05:30 AM",
  placeOfBirth = "Jetpur, Gujarat, India",
  reportDate = "25 June 2026",
}: SignatureAnalysisReportProps) {
  return (
    <SignaturePageFrame pageLabel="signature-cover-content" pageNumber="02">
      <div
        className="absolute inset-x-0 flex flex-col items-center px-14 pt-0 text-center font-cinzel"
        style={{ top: "26%", bottom: "6%" }}
      >
        <div className="mt-8 flex items-center gap-2">
          <Pattern3 size={100} />
          <p
            className="text-[38px] font-bold leading-none tracking-[0.04em]"
            style={{ color: "var(--cover-brown)" }}
          >
            ASTRO AARAMBH
          </p>
          <Pattern3 size={100} className="rotate-180" />
        </div>

        <h1
          className="mt-1 text-[35px] font-bold leading-tight tracking-wide"
          style={{ color: "var(--cover-gold)" }}
        >
          RINN MUKTI REPORT
        </h1>

        <p
          className="mt-1.5 text-[12px] font-semibold tracking-[0.16em]"
          style={{ color: "var(--cover-slate)" }}
        >
          KARMIC DEBT ● FINANCIAL BLOCKAGES ● DEBT RELIEF ANALYSIS
        </p>

        <div className="mt-4">
          <OrnamentDivider width={260} />
        </div>

        <div className="flex flex-col items-center">
          <p
            className="m-0 text-center text-[12px] font-semibold tracking-[0.16em] font-nunito-sans"
            style={{ color: "var(--cover-maroon)" }}
          >
            Understand the Karmic Reasons Behind Debt &amp;
            <br />
            Discover the Path to Financial Freedom
          </p>

          <p
            className="text-[14px] font-semibold tracking-[0.16em]"
            style={{ color: "var(--cover-maroon)" }}
          >
            PREPARED FOR
          </p>

          <div className="relative inline-flex max-w-[400px] items-center justify-center -mt-4">
            <img
              src={ASSETS.nameBorder}
              alt=""
              className="block h-[120px] w-full select-none"
              aria-hidden
            />
            <span
              className={`absolute inset-0 flex items-center justify-center px-4 text-center text-[28px] ${signatureFont.className}`}
              style={{ color: "var(--cover-maroon)" }}
            >
              {clientName}
            </span>
          </div>
        </div>

        <BirthDetailsGrid
          dateOfBirth={dateOfBirth}
          timeOfBirth={timeOfBirth}
          placeOfBirth={placeOfBirth}
          reportDate={reportDate}
        />

        <div className="mt-4">
          <OrnamentDivider width={260} />
        </div>

        <blockquote
          className=" max-w-[360px] text-[14.5px] italic leading-relaxed"
          style={{ color: "var(--cover-maroon)", fontFamily: "Georgia, serif" }}
        >
          &ldquo;Financial freedom begins when karmic debts are understood, balanced, and consciously transformed.
          &rdquo;
        </blockquote>

        <div className="">
          <OrnamentDivider width={260} />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          <OrnamentDivider width={160} />
          <p
            className="text-[26px] font-bold tracking-wide"
            style={{ color: "var(--cover-brown)" }}
          >
            Astro Aarambh
          </p>
          <OrnamentDivider width={160} />
        </div>

        <p
          className="mt-1 text-[14px] font-semibold tracking-[0.12em] font-nunito-sans"
          style={{ color: "var(--cover-slate)" }}
        >
          SIGNATURE ANALYSIS&nbsp;&nbsp;|&nbsp;&nbsp;KNOW YOURSELF BETTER
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
      </div>
    </SignaturePageFrame>
  );
}

export default function SignatureAnalysisReport(props: SignatureAnalysisReportProps) {
  return <RinnMuktiCoverPage {...props} />;
}