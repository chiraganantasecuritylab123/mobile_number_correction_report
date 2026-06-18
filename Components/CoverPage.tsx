import Image from "next/image";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

export type CoverPageProps = {
  clientName?: string;
  dateOfBirth?: string;
  currentMobileNumber?: string;
  driverNumber?: string | number;
  conductorNumber?: string | number;
  kuaNumber?: string | number;
  mobileVibrationNumber?: string | number;
};

const COLORS = REPORT_COLORS;

const HEADER = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldLight: "#b8860b",
  tagline: "#3a3a3a",
} as const;

const clientDetails = [
  {
    icon: "user",
    title: "Client Name",
    value: "Your Name",
  },
  {
    icon: "calendar",
    title: "Date of Birth",
    value: "DD MMM YYYY",
  },
  {
    icon: "mobile",
    title: "Current Mobile Number",
    value: "+91 98765 43210",
  },
  {
    icon: "car",
    title: "Driver Number",
    value: "XX",
  },
  {
    icon: "users",
    title: "Conductor Number",
    value: "XX",
  },
  {
    icon: "sun",
    title: "KUA Number",
    value: "XX",
  },
  {
    icon: "vibrate",
    title: "Mobile Vibration Number",
    value: "XX",
  },
];

const COVER = {
  logo: "/assets/ganesha-logo.png",
  client: "/assets/cover/client-icon.png",
  calendar: "/assets/cover/calendar.png",
  phone: "/assets/cover/phone.png",
  steering: "/assets/cover/steering.png",
  family: "/assets/cover/family.png",
  kua: "/assets/cover/copyright.png",
  vibration: "/assets/cover/chakra-signal.png",
  lotus: "/assets/cover/lotus.png",
  heloscope: "/assets/cover/horoscope-wheel.png",
  scrorpoin: "/assets/cover/sun-compass.png",
  loShu: "/assets/cover/lo-shu-mandala.png",
  divider: "/assets/cover/border.png",
  clientInfoBorder: "/assets/cover/client-info-border.png",
} as const;

type CoverField = {
  iconSrc: string;
  label: string;
  value: string;
};

type InfluenceItem = {
  iconSrc: string;
  title: string;
  description: string;
};

const influenceItems: InfluenceItem[] = [
  {
    iconSrc: COVER.phone,
    title: "MOBILE NUMBER",
    description: "Your personal vibration frequency",
  },
  {
    iconSrc: COVER.steering,
    title: "DRIVER NUMBER",
    description: "Your natural personality and actions",
  },
  {
    iconSrc: COVER.family,
    title: "CONDUCTOR NUMBER",
    description: "Your life path and destiny",
  },
  {
    iconSrc: COVER.kua,
    title: "KUA NUMBER",
    description: "Your directional and energetic alignment",
  },
];

function CoverIcon({ src, size = 14 }: { src: string; size?: number }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0 object-contain"
      aria-hidden
    />
  );
}

function CoverLotus({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <Image
      src={COVER.lotus}
      alt=""
      width={size}
      height={Math.round(size * 0.58)}
      className={`object-contain opacity-80 ${className ?? ""}`}
      aria-hidden
    />
  );
}

export default function CoverPage({
  clientName = "Your Name",
  dateOfBirth = "DD MMM YYYY",
  currentMobileNumber = "+91 98765 43210",
  driverNumber = "XX",
  conductorNumber = "XX",
  kuaNumber = "XX",
  mobileVibrationNumber = "XX",
}: CoverPageProps) {
  const clientFields: CoverField[] = [
    { iconSrc: COVER.client, label: "CLIENT NAME", value: clientName },
    { iconSrc: COVER.calendar, label: "DATE OF BIRTH", value: dateOfBirth },
    { iconSrc: COVER.phone, label: "CURRENT MOBILE NUMBER", value: currentMobileNumber },
    { iconSrc: COVER.steering, label: "DRIVER NUMBER", value: String(driverNumber) },
    { iconSrc: COVER.family, label: "CONDUCTOR NUMBER", value: String(conductorNumber) },
    { iconSrc: COVER.kua, label: "KUA NUMBER", value: String(kuaNumber) },
    { iconSrc: COVER.vibration, label: "MOBILE VIBRATION NUMBER", value: String(mobileVibrationNumber) },
  ];

  return (
    <ReportPageShell padding="20px 40px 52px">
      <div className="relative z-10 flex h-full flex-col">
        <header className="relative flex flex-col items-center text-center">
          <Image
            src={COVER.logo}
            alt="Astro Aarambh"
            width={100}
            height={100}
            className="mb-5"
            priority
          />

          <h1
            className="text-[40px] font-bold leading-none tracking-[0.1em]"
            style={{ color: HEADER.maroon }}
          >
            ASTRO AARAMBH
          </h1>

          <div className="mt-2.5 flex items-center gap-2.5 relative">
          <Image src='/assets/cover/pattern-1.png' alt="Client" width={50} height={50}
              style={{
                left: '0',
              }}
            />
            <span
              className="text-[24px] font-bold font-weight-bold tracking-[0.32em] text-center"
              style={{ color: HEADER.gold }}
            >
              PREMIUM
            </span>
            <Image src='/assets/cover/pattern-1.png' alt="Client" width={50} height={50}
              style={{
                right: '30px',
              }}
            />
          </div>

          <h2
            className="mt-3 text-[40px] font-bold leading-[1.2] tracking-[0.07em]"
            style={{ color: HEADER.gold }}
          >
            <span className="block">MOBILE NUMBER</span>
            <span className="block">CORRECTION REPORT</span>
          </h2>

          <p
            className="mt-2.5 text-[20px] font-normal tracking-[0.02em]"
            style={{
              color: '#4B4943',
              fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif",
            }}
          >
            Mobile Number Vibration Analysis &amp; Correction
          </p>
          <Image src='/assets/cover/pattern-2.png' alt="Client" width={200} height={100} />
        </header>

        <div className="flex items-center justify-center relative">
          <CoverLotus size={70} className="absolute top-[50%] left-12 transform -translate-x-1/2 -translate-y-1/2" />
          <CoverLotus size={70} className="absolute top-[50%] -right-5 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="relative">
            <Image src='/assets/cover/border.png' alt="Client" width={500} height={100} />
            <div className="flex flex-col absolute top-5 left-0"
              style={{
                position: "absolute",
                top: '20px',
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif",
              }}
            >
              {clientFields.map((field, index) => (
                <div
                  key={field.label}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 py-[7px] min-w-[400px]"
                >
                  <div className="flex items-center gap-2">
                    <CoverIcon src={field.iconSrc} size={14} />
                    <span
                      className="text-[9px] font-semibold tracking-[0.12em]"
                      style={{ color: COLORS.gold }}
                    >
                      {field.label}
                    </span>
                  </div>

                  <div className="w-px self-stretch" />

                  <div className="flex min-h-[18px] items-end">
                    <span className="text-[11px] font-medium" style={{ color: COLORS.brown }}>
                      {field.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-5">
          <div className="relative mx-auto flex max-w-[500px] items-center justify-centerbg-[#FDECD3] border border-[#D8AC71] rounded-2xl bg-[#FAECDA]"
            style={{
              bottom: '-14px',
            }}
          >
            <Image src='/assets/cover/pattern-1.png' alt="Client" width={35} height={50}
              style={{
                position: 'absolute',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',

              }}
            />

            <Image src='/assets/cover/pattern-1.png' alt="Client" width={35} height={50}
              style={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',

              }}
            />
            <h3
              className="relative z-10 px-5 py-1.5 text-center text-[12px] font-bold tracking-[0.14em]"
              style={{
                color: COLORS.brown,
                position: 'relative',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                fontWeight: 'bold',
              }}
            >
              HOW MOBILE NUMBER INFLUENCES YOUR LIFE
            </h3>
          </div>

          <div className="max-w-[600px] mx-auto border border-[#D8AC71] rounded-4xl p-2">
            <div className="mx-auto mt-3 grid max-w-[520px] grid-cols-4"
              style={{
                fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif",
              }}

            >
              {influenceItems.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-2 py-3 text-center"
                  style={{
                    borderRight:
                      index < influenceItems.length - 1
                        ? "1px dotted rgba(184, 134, 11, 0.35)"
                        : "none",
                  }}
                >
                  <div className="flex items-center justify-center border border-[#B46B07] border-dashed p-2 rounded-full">
                    <CoverIcon src={item.iconSrc} size={40} />
                  </div>
                  <p
                    className="mt-1.5 text-[9px] font-bold tracking-[0.08em]"
                    style={{ color: COLORS.gold }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="mt-1 text-[9px] leading-snug"
                    style={{ color: '#0B0706', opacity: 0.8 }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <CoverLotus size={40} />
              <p className="max-w-[380px] text-center italic text-[10px]  "
                style={{ color: '#0B0706', opacity: 0.8, textTransform: 'capitalize', fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif", }}
              >
                A properly aligned mobile number attracts opportunities, stronger communication,
                financial growth, and positive life experiences.
              </p>
              <CoverLotus size={40} />
            </div>
          </div>

        </section>

        <footer className="mt-auto flex flex-col items-center pt-2">
          <Image src='/assets/cover/pattern-2.png' alt="Client" width={200} height={100} className="mb-2" />
          <div className="flex items-center justify-center">
            <CoverLotus className="mr-4" size={60} />
            <blockquote
              className="max-w-[190px] font-bold text-center text-[11px] italic leading-relaxed"
              style={{ color: '#540806', fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif", }}
            >
              &ldquo;Your Mobile Number Is More Than A Contact Number &mdash; It Is An Energy
              Signature.&rdquo;
            </blockquote>
            <CoverLotus className="ml-4" size={60} />
          </div>
        </footer>

        {/* <CoverBottomBand className="relative -mx-10 mb-[-52px] mt-3 h-[52px] w-[calc(100%+80px)]" /> */}
      </div>
    </ReportPageShell>
  );
}
