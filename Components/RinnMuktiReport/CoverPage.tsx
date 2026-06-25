import Image from "next/image";
import { Cormorant_Garamond, Great_Vibes, Libre_Baskerville } from "next/font/google";
import { Calendar, Clock, Globe, MapPin, Phone, type LucideIcon } from "lucide-react";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import { CornerFlourish } from "../CoverPageDecorations";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";

const signatureFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ASTRO = {
  parchment: "#F8EEDC",
  maroon: "#6E1F1F",
  gold: "#B8860B",
  borderGold: "#C89A2B",
  darkBrown: "#5C2D1A",
  body: "#6A5A4A",
  value: "#3D2A20",
} as const;

const ASSETS = {
  sunCompass: "/assets/cover/sun-compass.png",
  horoscopeWheel: "/assets/cover/horoscope-wheel.png",
  sunFace: "/assets/cover/sunLightImage.png",
  nameBorder: "/assets/signaturePages/nameImageBorder.png",
  penBg: "/assets/signatureReport/pen-bg.png",
  bottomPattern: "/assets/bottom-pattern.png",
  orbitDiagram: "/assets/cover/image.png",
} as const;

export type RinnMuktiCoverPageProps = {
  pageNumber?: string;
  clientName?: string;
  dateOfBirth?: string;
  timeOfBirth?: string;
  placeOfBirth?: string;
  reportDate?: string;
  quote?: string;
  servicesText?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

function PageOrnamentalFrame() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-[14px] rounded-sm"
        style={{ border: `2px solid ${ASTRO.borderGold}` }}
        aria-hidden
      />
      <CornerFlourish className="pointer-events-none absolute left-[10px] top-[10px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[10px] top-[10px] h-[52px] w-[52px] -scale-x-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] left-[10px] h-[52px] w-[52px] -scale-y-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] right-[10px] h-[52px] w-[52px] scale-[-1]" />
    </>
  );
}

function CelestialHeaderRow() {
  return (
    <div className="relative flex items-end justify-center gap-8 px-2">
      <Image
        src={ASSETS.sunCompass}
        alt=""
        width={78}
        height={78}
        className="object-contain opacity-55"
        aria-hidden
      />
      <Image
        src={ASSETS.horoscopeWheel}
        alt=""
        width={128}
        height={128}
        className="-mt-1 object-contain"
        priority
        aria-hidden
      />
      <Image
        src={ASSETS.sunFace}
        alt=""
        width={78}
        height={78}
        className="object-contain opacity-60"
        aria-hidden
      />
    </div>
  );
}

function TitleSection() {
  return (
    <header className="mt-1 flex flex-col items-center text-center">
      <h1
        className="font-cinzel text-[46px] font-bold leading-none tracking-[0.06em]"
        style={{ color: ASTRO.maroon }}
      >
        ASTRO AARAMBH
      </h1>

      <div className="mt-2 flex w-full max-w-[640px] items-center justify-center gap-3">
        <OrnamentDivider width={110} />
        <p
          className={`${cormorant.className} text-center text-[34px] font-bold leading-tight tracking-[0.04em]`}
          style={{ color: ASTRO.gold }}
        >
          RINN MUKTI REPORT
        </p>
        <OrnamentDivider width={110} />
      </div>

      <p
        className={`${libreBaskerville.className} mt-2 text-[12px] font-semibold tracking-[0.18em]`}
        style={{ color: ASTRO.darkBrown }}
      >
        KARMIC DEBT &bull; FINANCIAL BLOCKAGES &bull; DEBT RELIEF ANALYSIS
      </p>

      <p
        className={`${libreBaskerville.className} mt-2 max-w-[540px] text-[14px] italic leading-relaxed`}
        style={{ color: ASTRO.body }}
      >
        Understand the Karmic Reasons Behind Debt &amp; Discover the Path to Financial Freedom
      </p>
    </header>
  );
}

function PreparedForSection({ clientName }: { clientName: string }) {
  return (
    <section className="relative z-10 mt-3 flex flex-col items-center text-center">
      <OrnamentDivider width={260} />
      <p
        className={`${libreBaskerville.className} mt-2 text-[12px] font-semibold tracking-[0.14em]`}
        style={{ color: ASTRO.gold }}
      >
        PREPARED FOR
      </p>

      <div className="relative mt-1 flex w-full max-w-[540px] items-center justify-center">
        <Image
          src={ASSETS.nameBorder}
          alt=""
          width={540}
          height={96}
          className="h-auto w-full object-contain"
          aria-hidden
        />
        <p
          className={`absolute inset-x-0 px-6 text-center text-[46px] leading-none ${signatureFont.className}`}
          style={{ color: ASTRO.maroon }}
        >
          {clientName}
        </p>
      </div>
    </section>
  );
}

function DetailIconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div
      className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full"
      style={{ border: `1.5px dotted ${ASTRO.gold}` }}
    >
      <Icon size={18} strokeWidth={1.5} style={{ color: ASTRO.gold }} aria-hidden />
    </div>
  );
}

function DetailColumn({
  icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-1 text-center">
      <DetailIconBadge icon={icon} />
      <span
        className={`${libreBaskerville.className} text-[12px] font-bold tracking-[0.12em]`}
        style={{ color: ASTRO.darkBrown }}
      >
        {label}
      </span>
      <span
        className={`${cormorant.className} text-[18px] font-semibold leading-snug`}
        style={{ color: ASTRO.value }}
      >
        {value}
      </span>
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="flex min-h-[92px] items-center justify-center self-stretch">
      <div className="h-full w-px" style={{ backgroundColor: "rgba(184,134,11,0.5)" }} />
    </div>
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
  return (
    <section className="relative z-10 mt-3 px-2">
      <div className="mx-auto flex max-w-[700px] items-start justify-center">
        <div className="grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-2">
          <DetailColumn icon={Calendar} label="DATE OF BIRTH" value={dateOfBirth} />
          <VerticalDivider />
          <DetailColumn icon={Clock} label="TIME OF BIRTH" value={timeOfBirth} />
          <VerticalDivider />
          <DetailColumn icon={MapPin} label="PLACE OF BIRTH" value={placeOfBirth} />
          <VerticalDivider />
          <DetailColumn icon={Calendar} label="REPORT DATE" value={reportDate} />
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ quote }: { quote: string }) {
  return (
    <section className="relative z-10 mt-4 flex flex-col items-center px-6 text-center">
      <OrnamentDivider width={220} />
      <CoverLotus size={32} className="mt-2" />
      <blockquote
        className={`${libreBaskerville.className} mt-2 max-w-[500px] text-[15px] italic leading-relaxed`}
        style={{ color: ASTRO.maroon }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-2">
        <OrnamentDivider width={220} />
      </div>
    </section>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={ASTRO.gold}
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}

function ReportFooter({
  brandDisplayName = "Astro Aarambh",
  servicesText = "SIGNATURE ANALYSIS | KNOW YOURSELF BETTER",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: {
  brandDisplayName?: string;
  servicesText?: string;
  website?: string;
  phone?: string;
  instagram?: string;
}) {
  return (
    <footer className="relative z-10 flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-2">
        <Pattern3 size={36} />
        <p
          className={`${cormorant.className} text-[26px] font-bold tracking-wide`}
          style={{ color: ASTRO.maroon }}
        >
          {brandDisplayName}
        </p>
        <Pattern3 size={36} className="rotate-180" />
      </div>

      <p
        className={`${libreBaskerville.className} mt-1 text-[11px] font-semibold tracking-[0.1em]`}
        style={{ color: ASTRO.darkBrown }}
      >
        {servicesText}
      </p>

      <div
        className={`${libreBaskerville.className} mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[10px]`}
        style={{ color: ASTRO.body }}
      >
        <div className="flex items-center gap-1.5">
          <Globe size={14} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
          <span>{website}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone size={14} strokeWidth={1.8} style={{ color: ASTRO.gold }} />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <InstagramIcon size={14} />
          <span>{instagram}</span>
        </div>
      </div>
    </footer>
  );
}

function BottomDecorations() {
  return (
    <>
      <Image
        src={ASSETS.penBg}
        alt=""
        width={170}
        height={110}
        className="pointer-events-none absolute bottom-14 left-1 object-contain opacity-85"
        aria-hidden
      />
      <Image
        src={ASSETS.orbitDiagram}
        alt=""
        width={96}
        height={96}
        className="pointer-events-none absolute bottom-16 right-3 object-contain opacity-30"
        aria-hidden
      />
      <Image
        src={ASSETS.bottomPattern}
        alt=""
        width={794}
        height={48}
        className="pointer-events-none absolute bottom-0 left-0 w-full object-cover"
        aria-hidden
      />
    </>
  );
}

export default function RinnMuktiCoverPage({
  pageNumber = "01",
  clientName = "Bhargav Gujarati",
  dateOfBirth = "18 August 1994",
  timeOfBirth = "05:30 AM",
  placeOfBirth = "Jetpur, Gujarat, India",
  reportDate = "25 June 2026",
  quote = "Financial freedom begins when karmic debts are understood, balanced, and consciously transformed.",
  servicesText = "SIGNATURE ANALYSIS | KNOW YOURSELF BETTER",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: RinnMuktiCoverPageProps) {
  return (
    <BusinessNameReportPageShell
      padding="24px 34px 18px"
      pageNumber={pageNumber}
      style={{
        backgroundColor: ASTRO.parchment,
        boxShadow: "0 2px 12px rgba(184,134,11,0.08)",
      }}
    >
      <PageOrnamentalFrame />

      <div className="relative flex h-full min-h-0 flex-col">
        <CelestialHeaderRow />
        <TitleSection />
        <PreparedForSection clientName={clientName} />
        <BirthDetailsGrid
          dateOfBirth={dateOfBirth}
          timeOfBirth={timeOfBirth}
          placeOfBirth={placeOfBirth}
          reportDate={reportDate}
        />
        <QuoteSection quote={quote} />

        <div className="relative mt-auto pt-3">
          <BottomDecorations />
          <ReportFooter
            servicesText={servicesText}
            website={website}
            phone={phone}
            instagram={instagram}
          />
        </div>
      </div>
    </BusinessNameReportPageShell>
  );
}
