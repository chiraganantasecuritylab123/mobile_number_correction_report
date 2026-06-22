import Image from "next/image";
import { Globe, Phone, Calendar } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import type { ReactNode } from "react";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../ReportPageShell";
import { Pattern3 } from "../CommunComponents";

const signatureScript = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const COLORS = {
  maroon: "#5c0f0f",
  gold: "#A96505",
  goldLight: "#b8860b",
  slate: "#2c3e50",
  gray: "#4B4943",
  brown: "#5d2e17",
} as const;

const ASSETS = {
  // Pre-built cover background (image 3 reference): frame, zodiac/pen emblem,
  // sun, astro-chart corners, quill + signature, and bottom maroon arch
  // are already baked into this artwork. Page 02 just needs to lay text on top.
  cover: "/assets/signaturePages/coverPage1.png",
  pattern2: "/assets/cover/pattern-2.png",
  nameBorder: "/assets/signaturePages/nameImageBorder.png",
} as const;

export type SignatureAnalysisReportProps = {
  clientName?: string;
  dateOfBirth?: string;
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
        className="pointer-events-none object-fill select-none"
        priority={pageNumber === "01"}
        aria-hidden
      />
      <div className="relative z-10 h-full">{children}</div>
    </article>
  );
}

// Small lotus glyph used in the divider above the quote. Self-contained
// (doesn't depend on CoverLotus's internal sizing/props) so it always
// renders visibly, matching the reference image's lotus divider.
function LotusGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 40 28" fill="none" aria-hidden>
      <path d="M20 26c0-9-4-14-4-18 0 4-4 9-4 18" stroke={COLORS.gold} strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-9 4-14 4-18 0 4 4 9 4 18" stroke={COLORS.gold} strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-11-7-15-12-16 2 5 4 11 12 16" stroke={COLORS.gold} strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-11 7-15 12-16-2 5-4 11-12 16" stroke={COLORS.gold} strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-7-2-11-2-13 0 2-2 6-2 13" stroke={COLORS.gold} strokeWidth="1.4" fill="none" />
      <path d="M20 26c0-7 2-11 2-13 0 2 2 6 2 13" stroke={COLORS.gold} strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function OrnamentDivider({ width = 220, lotusSize = 0 }: { width?: number; lotusSize?: number }) {
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
      {lotusSize > 0 ? (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#f4e7c9] px-1">
          <LotusGlyph size={lotusSize} />
        </div>
      ) : null}
    </div>
  );
}

function InstagramIcon({ size = 11, color = COLORS.goldLight }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={color} stroke="none" />
    </svg>
  );
}

// Small flanking ornament used beside the maroon "ASTRO AARAMBH" headline
// and again beside the smaller wordmark near the footer.
function FlankOrnament({ size = 18, flip = false }: { size?: number; flip?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <path
        d="M2 12c4-2 6-2 9 0M22 12c-4-2-6-2-9 0"
        stroke={COLORS.gold}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.1" fill={COLORS.gold} />
      <circle cx="3" cy="12" r="1" fill={COLORS.gold} />
      <circle cx="21" cy="12" r="1" fill={COLORS.gold} />
    </svg>
  );
}

// Circular dotted "calendar" badge that sits to the left of the
// DATE OF BIRTH / REPORT DATE labels, matching the reference image.
function CalendarBadge({ size = 38 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: `1.5px dotted ${COLORS.gold}`,
      }}
    >
      <Calendar size={size * 0.5} strokeWidth={1.8} color={COLORS.gold} />
    </div>
  );
}

function SignatureStaticCoverPage() {
  return <SignaturePageFrame pageLabel="signature-cover" pageNumber="01" />;
}

function SignatureCoverContentPage({
  clientName = "Bhargav Gujarati",
  dateOfBirth = "18-08-1994",
  reportDate = "09-06-2026",
}: Omit<SignatureAnalysisReportProps, never>) {
  return (
    <SignaturePageFrame pageLabel="signature-cover-content" pageNumber="02">
      {/*
        The background artwork already renders the circular zodiac + pen
        emblem near the top, the quill+signature bottom-left, and the
        astro-chart bottom-right. This content block is a flex column that
        is vertically CENTERED inside the safe zone between the emblem and
        the quill graphic, so the title never collides with the emblem and
        the block doesn't pile up at the top with dead space below it.
      */}
      <div
        className="absolute inset-x-0 flex flex-col items-center text-center"
        style={{
          // Percentage-based zone (not fixed px) so this stays correct
          // regardless of the real PAGE_HEIGHT value in this project.
          // Emblem + sun rays occupy roughly the top ~24% of the artwork.
          top: "26%",
          // Quill/signature graphic + bottom astro-chart start around 80%
          // down the page; keep the content clear of those and the maroon
          // arch footer. Generous bottom margin so nothing ever clips.
          bottom: "6%",
          left: 0,
          right: 0,
          padding: "0 56px",
          justifyContent: "flex-start",
          fontFamily: "var(--font-cinzel), Georgia, 'Times New Roman', serif",
        }}
      >
        {/* ---- Main headline block ---- */}
        {/* <div className="flex items-center justify-center gap-2.5">
          <OrnamentDivider width={120}  />
          <h1
            className="text-[38px] font-bold leading-none tracking-[0.04em]"
            style={{ color: COLORS.maroon }}
          >
            ASTRO AARAMBH
          </h1>
          <OrnamentDivider width={120} />
        </div>

        <h2
          className="mt-2.5 text-[24px] font-bold leading-tight tracking-wide"
          style={{ color: COLORS.gold }}
        >
          SIGNATURE ANALYSIS REPORT
        </h2>

        <p
          className="mt-1.5 text-[11px] font-semibold tracking-[0.16em]"
          style={{ color: COLORS.slate }}
        >
          THE WRITTEN YOU, REVEALS THE TRUE YOU
        </p> */}

<div className="flex items-center gap-2 mt-8">
            <Pattern3 size={100} />
            <p className="text-[38px] font-bold leading-none tracking-[0.04em]"
            style={{ color: COLORS.maroon }}>
              ASTRO AARAMBH
            </p>
            <Pattern3 size={100} className="rotate-180" />
          </div>
          <h1 className="mt-1 text-[35px] font-bold leading-tight tracking-wide" style={{ color: COLORS.gold }}>
          SIGNATURE ANALYSIS REPORT
          </h1>
        
          <p className="mt-1.5 text-[14px] font-semibold tracking-[0.16em]"
          style={{ color: COLORS.slate }}>
          THE WRITTEN YOU, REVEALS THE TRUE YOU
          </p>

        <div className="mt-4">
          <OrnamentDivider width={260} lotusSize={0} />
        </div>

       <div>
       <p
          className=" text-[14px] font-semibold tracking-[0.16em]"
          style={{ color: COLORS.maroon }}
        >
          PREPARED FOR
        </p>

        {/* ---- Name plate ---- */}
        <div className="relative  inline-flex w-full max-w-[400px] items-center justify-center">
          <img
            src={ASSETS.nameBorder}
            alt=""
            className="h-auto w-full select-none"
            aria-hidden
          />
          <span
            className={`absolute z-10 px-4 text-center text-[28px] leading-none ${signatureScript.className}`}
            style={{ color: COLORS.maroon }}
          >
            {clientName}
          </span>
        </div>
       </div>

        {/* ---- DOB / Report date with calendar badges ---- */}
        <div
          className="mt-5 flex items-center gap-6"
          style={{ fontFamily: "var(--font-nunito-sans), 'Segoe UI', sans-serif" }}
        >
          <div className="flex items-center gap-2.5">
            <CalendarBadge size={64} />
            <div className="flex flex-col items-start gap-0.5 text-left">
              <span
                className="text-[15px] font-semibold tracking-[0.1em]"
                style={{ color: COLORS.slate }}
              >
                DATE OF BIRTH
              </span>
              <span className="text-[16px] font-medium" style={{ color: COLORS.brown }}>
                {dateOfBirth}
              </span>
            </div>
          </div>

          <div className="h-[34px] w-px self-center" style={{ backgroundColor: "rgba(184, 134, 11, 0.55)" }} />

          <div className="flex items-center gap-2.5">
            <CalendarBadge size={64} />
            <div className="flex flex-col items-start gap-0.5 text-left">
              <span
                className="text-[15px] font-semibold tracking-[0.1em]"
                style={{ color: COLORS.slate }}
              >
                REPORT DATE
              </span>
              <span className="text-[16px] font-medium" style={{ color: COLORS.brown }}>
                {reportDate}
              </span>
            </div>
          </div>
        </div>

        {/* ---- Lotus divider + quote ---- */}
        <div className="mt-4">
          <OrnamentDivider width={260} lotusSize={0} />
        </div>

        <blockquote
          className="mt-3.5 max-w-[360px] text-[16px] italic leading-relaxed"
          style={{ color: COLORS.maroon }}
        >
          &ldquo;Your Signature Is The Reflection Of Your Mind, Personality
          &amp; Potential.&rdquo;
        </blockquote>

        <div className="mt-4">
          <OrnamentDivider width={260} lotusSize={0} />
        </div>

        {/* ---- Small wordmark repeat + tagline + contact ---- */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <OrnamentDivider width={100} />
          <p className="text-[26px] font-bold tracking-wide" style={{ color: COLORS.maroon }}>
            Astro Aarambh
          </p>
          <OrnamentDivider width={100} />
        </div>

        <p
          className="mt-1 text-[14px] font-semibold tracking-[0.12em]"
          style={{
            color: COLORS.slate,
            fontFamily: "var(--font-nunito-sans), 'Segoe UI', sans-serif",
          }}
        >
          SIGNATURE ANALYSIS&nbsp;&nbsp;|&nbsp;&nbsp;KNOW YOURSELF BETTER
        </p>

        <div
          className="mt-2.5 flex flex-col items-center gap-1"
          style={{ fontFamily: "var(--font-nunito-sans), 'Segoe UI', sans-serif" }}
        >
          <div className="flex items-center gap-2 text-[16px]" style={{ color: COLORS.gray }}>
            <Globe size={20} strokeWidth={1.8} style={{ color: COLORS.goldLight }} />
            <span>www.astroaarambh.com</span>
          </div>
          <div className="flex items-center gap-2 text-[16px]" style={{ color: COLORS.gray }}>
            <Phone size={20} strokeWidth={1.8} style={{ color: COLORS.goldLight }} />
            <span>7405923555</span>
          </div>
          <div className="flex items-center gap-2 text-[16px]" style={{ color: COLORS.gray }}>
            <InstagramIcon size={20} />
            <span>astroaarambhofficial</span>
          </div>
        </div>
      </div>
    </SignaturePageFrame>
  );
}

export default function SignatureAnalysisReport({
  clientName,
  dateOfBirth,
  reportDate,
}: SignatureAnalysisReportProps) {
  return (
    <>
      <SignatureCoverContentPage
        clientName={clientName}
        dateOfBirth={dateOfBirth}
        reportDate={reportDate}
      />
    </>
  );
}