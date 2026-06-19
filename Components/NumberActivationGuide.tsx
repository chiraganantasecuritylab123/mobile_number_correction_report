import type { ReactNode } from "react";
import Image from "next/image";
import {
  Smartphone,
  User,
  Clock,
  Calendar,
  Check,
  X,
  Star,
  Heart,
  Briefcase,
  Phone,
  Users,
  ClipboardList,
  AlertTriangle,
  ShieldCheck,
  Zap,
  AtSign,
  Camera,
  type LucideIcon,
} from "lucide-react";
import { Pattern3, CoverLotus } from "./CommunComponents";
import ReportPageShell, { REPORT_COLORS } from "./ReportPageShell";

const COLORS = REPORT_COLORS;
const CARD_BORDER = "rgba(184, 134, 11, 0.18)";
const CARD_BG = "rgba(253, 245, 230, 0.45)";
const STRIP_BORDER = "rgba(184, 134, 11, 0.35)";
const TITLE_RED = "#c83227";
const TITLE_BLUE = "#1d3557";
const LABEL_COLOR = "#213247";
const CONDUCTOR_BROWN = "#9c4a32";
const CURRENT_TOTAL_ORANGE = "#d84315";
const ADVICE_PHONE_IMAGE = "/assets/number-activations/phone.png";
const ADVICE_MEDITATION_IMAGE = "/assets/number-activations/meditation.png";
const STRIP_SUN_ICON = "/assets/number-activations/sun-rising.png";
const STRIP_MERCURY_ICON = "/assets/number-activations/double-mercury.png";
const STRIP_KETU_ICON =
  "/assets/number-activations/ketu.png";
const STRIP_MOON_ICON =
  "/assets/number-activations/moon.png";
const ACTIVATION_SUNRISE_ICON =
  "/assets/number-activations/sunrise.png";
const ACTIVATION_SUNSET_ICON =
  "/assets/number-activations/sunset.png";

export type NumberActivationGuideProps = {
  mobileNumber?: string;
  currentTotal?: string;
  currentTotalPlanet?: string;
  dateOfBirth?: string;
  lifePathNumber?: number;
  driverNumber?: number;
  driverPlanet?: string;
  conductorNumber?: number;
  conductorPlanet?: string;
  kuaNumber?: number;
  kuaPlanet?: string;
  footerSummary?: string;
  pageNumber?: string;
};

function StripTopOrnament() {
  return (
    <div className="pointer-events-none absolute -top-[7px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 px-1" style={{ backgroundColor: COLORS.cream }}>
      <div className="h-px w-5 bg-gradient-to-r from-transparent to-[#e19d45]/70" />
      <svg className="h-2 w-2 fill-[#e19d45]" viewBox="0 0 8 8" aria-hidden>
        <polygon points="4,0 8,4 4,8 0,4" />
      </svg>
      <div className="h-px w-5 bg-gradient-to-l from-transparent to-[#e19d45]/70" />
    </div>
  );
}

function ProfileStripColumn({
  title,
  titleColor = TITLE_RED,
  body,
  footer,
  withDivider = false,
}: {
  title: string;
  titleColor?: string;
  body: ReactNode;
  footer?: ReactNode;
  withDivider?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[96px] flex-col items-center px-1.5 py-2 ${withDivider ? "border-l border-dashed border-[#e19d45]/45" : ""}`}
    >
      <span
        className="text-center text-[8px] font-extrabold uppercase tracking-[0.4px] font-sans leading-tight"
        style={{ color: titleColor }}
      >
        {title}
      </span>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-0.5 py-0.5">{body}</div>
      {footer ? <div className="flex h-8 items-end justify-center pb-0.5">{footer}</div> : null}
    </div>
  );
}

function StripPlanetIcon({ src, size = 28 }: { src: string; size?: number }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}

function TimeWindowIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={16}
      height={16}
      className="h-4 w-4 shrink-0 object-contain"
      aria-hidden
    />
  );
}

function SectionDiamond() {
  return (
    <svg className="h-1.5 w-1.5 shrink-0 fill-[#e19d45]" viewBox="0 0 8 8" aria-hidden>
      <polygon points="4,0 8,4 4,8 0,4" />
    </svg>
  );
}

function ActivationCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-full flex-col rounded-[12px] border p-2.5 font-sans normal-case"
      style={{ borderColor: CARD_BORDER, backgroundColor: CARD_BG }}
    >
      {children}
    </div>
  );
}

function ActivationCardHeader({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-neutral-100/80 pb-1.5">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-white">
        {icon}
      </div>
      <h3 className="text-[8.5px] font-black uppercase leading-tight tracking-tight text-emerald-800">{title}</h3>
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-1.5 text-[8px] font-medium leading-tight text-[#213247]">
      <span className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
        <Check size={8} strokeWidth={3.5} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function AvoidItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-1.5 text-[8px] font-medium leading-tight text-[#213247]">
      <span className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
        <X size={8} strokeWidth={3.5} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function DashedRule() {
  return <div className="my-1.5 border-t border-dashed border-[#e19d45]/45" />;
}

function OrDivider() {
  return (
    <div className="my-1 flex items-center gap-1">
      <div className="h-px flex-1 border-t border-dashed border-[#e19d45]/35" />
      <span className="text-[7px] font-bold text-neutral-400">OR</span>
      <div className="h-px flex-1 border-t border-dashed border-[#e19d45]/35" />
    </div>
  );
}

function TipFooter({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "purple" }) {
  const toneClass =
    tone === "purple"
      ? "border-purple-200/70 bg-purple-50/90 text-purple-950"
      : "border-emerald-200/70 bg-emerald-50/90 text-emerald-950";
  const starClass = tone === "purple" ? "text-purple-700" : "text-emerald-700";

  return (
    <div className={`mt-auto flex items-start gap-1.5 rounded-md border px-2 py-1.5 ${toneClass}`}>
      <Star size={10} className={`mt-0.5 shrink-0 fill-current ${starClass}`} />
      <p className="text-[7.5px] font-bold leading-tight">{children}</p>
    </div>
  );
}

function PurpleActionItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[8px] font-semibold text-[#213247]">
      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-700 text-white">
        <Icon size={9} strokeWidth={2.5} />
      </div>
      <span>{label}</span>
    </div>
  );
}

function Clock24HeaderIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <Clock size={10} strokeWidth={2.5} />
      <span className="absolute -bottom-0.5 -right-1.5 text-[5px] font-black leading-none">24</span>
    </div>
  );
}

function AdviceStarDivider() {
  return (
    <div className="my-2 flex w-full max-w-md items-center gap-1.5">
      <div className="h-px flex-1 border-t border-dashed border-[#e19d45]/55" />
      <svg className="h-2 w-2 shrink-0 fill-[#e19d45]" viewBox="0 0 8 8" aria-hidden>
        <polygon points="4,0 8,4 4,8 0,4" />
      </svg>
      <div className="h-px flex-1 border-t border-dashed border-[#e19d45]/55" />
    </div>
  );
}

function MantraStar() {
  return <span className="text-[9px] text-amber-500">✦</span>;
}

function GuideSectionCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-full flex-col rounded-[12px] border p-2.5"
      style={{ borderColor: CARD_BORDER, backgroundColor: CARD_BG }}
    >
      {children}
    </div>
  );
}

function SectionCardHeader({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-neutral-100/80 pb-1.5">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-white">
        <Icon size={11} strokeWidth={2.5} />
      </div>
      <h3 className="text-[9px] font-black uppercase leading-tight tracking-tight text-emerald-800 font-sans">{title}</h3>
    </div>
  );
}

function CheckRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-1.5 text-[8.5px] font-semibold uppercase leading-tight tracking-wide text-[#213247]">
      <Check size={11} className="mt-0.5 shrink-0 text-emerald-600" strokeWidth={3} />
      <span>{children}</span>
    </div>
  );
}

function AvoidRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-1 text-[8px] font-semibold uppercase leading-tight text-[#213247]">
      <span className="mt-0.5 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border border-red-400 text-red-500">
        <X size={8} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </div>
  );
}

function ExampleRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-emerald-600/25 bg-emerald-50/55 px-2 py-1">
      <User size={11} className="shrink-0 text-emerald-700" strokeWidth={2.5} />
      <span className="text-[8.5px] font-bold uppercase tracking-wide text-[#213247] font-sans">{label}</span>
    </div>
  );
}

function WarningFooter({ children }: { children: ReactNode }) {
  return (
    <div className="mt-auto flex items-start gap-1.5 rounded-md border border-red-200/70 bg-red-50/75 px-2 py-1.5">
      <AlertTriangle size={12} className="mt-0.5 shrink-0 text-red-600" strokeWidth={2.5} />
      <p className="text-[8px] font-bold uppercase leading-tight text-red-950">{children}</p>
    </div>
  );
}

function SummaryFooter({ children }: { children: ReactNode }) {
  return (
    <div className="mt-auto flex items-center justify-center gap-1.5 rounded-md border border-emerald-200/70 bg-emerald-50/80 px-2 py-1.5 text-center">
      <Star size={11} className="shrink-0 fill-current text-emerald-700" />
      <p className="text-[8px] font-black uppercase leading-tight text-emerald-950">{children}</p>
    </div>
  );
}

export default function NumberActivationGuide({
  mobileNumber = "+44 7700 900123",
  currentTotal = "46 → 1",
  currentTotalPlanet = "Sun",
  dateOfBirth = "14-07-1990",
  lifePathNumber = 5,
  driverNumber = 5,
  driverPlanet = "Mercury",
  conductorNumber = 7,
  conductorPlanet = "Ketu",
  kuaNumber = 2,
  kuaPlanet = "Moon",
  footerSummary = "Activating your lucky numbers through conscious daily habits strengthens positive vibrations and helps you align with success, balance and growth.",
  pageNumber = "16",
}: NumberActivationGuideProps) {
  return (
    <ReportPageShell padding="15px 40px 18px" pageNumber={pageNumber}>
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 flex-col items-center text-center">
          <Image
            src="/assets/ganesha-logo.png"
            alt="Astro Aarambh"
            width={75}
            height={75}
            className="mb-1"
            priority
          />
          <div className="flex items-center gap-1.5">
            <Pattern3 size={40} />
            <p className="text-[13px] font-semibold tracking-[0.2em]" style={{ color: COLORS.brown }}>
              ASTRO AARAMBH
            </p>
            <Pattern3 size={40} className="rotate-180" />
          </div>
          <h1 className="mt-0.5 text-[26px] font-bold uppercase leading-tight font-serif" style={{ color: COLORS.brown }}>
            MOBILE NUMBER ACTIVATION GUIDE
          </h1>
          <p className="text-[12px] font-medium tracking-wide text-slate-800">
            How To Activate Your New Number For Maximum Positive Results
          </p>
        </header>

        {/* Top Profile Strip */}
        <div className="mt-3 shrink-0">
          <div
            className="relative grid w-full grid-cols-6 rounded-[14px] border px-1 py-1"
            style={{ borderColor: STRIP_BORDER, backgroundColor: CARD_BG }}
          >
            <StripTopOrnament />

            <ProfileStripColumn
              title="YOUR MOBILE NUMBER"
              body={
                <>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-400 bg-white">
                    <Smartphone size={15} strokeWidth={2.2} className="text-orange-500" />
                  </div>
                  <span className="text-[11px] font-bold font-serif tracking-tight text-neutral-900">{mobileNumber}</span>
                </>
              }
            />

            <ProfileStripColumn
              title="CURRENT TOTAL"
              withDivider
              body={
                <>
                  <span className="text-[20px] font-bold font-serif leading-none" style={{ color: CURRENT_TOTAL_ORANGE }}>
                    {currentTotal}
                  </span>
                  <span className="text-[8.5px] font-semibold font-sans" style={{ color: LABEL_COLOR }}>
                    ({currentTotalPlanet})
                  </span>
                </>
              }
              footer={<StripPlanetIcon src={STRIP_SUN_ICON} />}
            />

            <ProfileStripColumn
              title="DATE OF BIRTH"
              withDivider
              body={
                <>
                  <span className="text-[11.5px] font-black font-serif text-neutral-900">{dateOfBirth}</span>
                  <span className="text-[8px] font-semibold font-sans" style={{ color: LABEL_COLOR }}>
                    Life Path Number
                  </span>
                </>
              }
              footer={
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-700 bg-white font-serif text-[10px] font-extrabold text-emerald-700">
                  {lifePathNumber}
                </div>
              }
            />

            <ProfileStripColumn
              title="DRIVER NUMBER"
              withDivider
              body={
                <>
                  <span className="text-[20px] font-bold font-serif leading-none text-emerald-700">{driverNumber}</span>
                  <span className="text-[8px] font-medium font-sans" style={{ color: LABEL_COLOR }}>
                    ({driverPlanet})
                  </span>
                </>
              }
              footer={<StripPlanetIcon src={STRIP_MERCURY_ICON} />}
            />

            <ProfileStripColumn
              title="CONDUCTOR NUMBER"
              withDivider
              body={
                <>
                  <span className="text-[20px] font-bold font-serif leading-none" style={{ color: CONDUCTOR_BROWN }}>
                    {conductorNumber}
                  </span>
                  <span className="text-[8px] font-medium font-sans" style={{ color: LABEL_COLOR }}>
                    ({conductorPlanet})
                  </span>
                </>
              }
              footer={<StripPlanetIcon src={STRIP_KETU_ICON} />}
            />

            <ProfileStripColumn
              title="KUA NUMBER"
              titleColor={TITLE_BLUE}
              withDivider
              body={
                <>
                  <span className="text-[20px] font-bold font-serif leading-none" style={{ color: TITLE_BLUE }}>
                    {kuaNumber}
                  </span>
                  <span className="text-[8px] font-medium font-sans" style={{ color: LABEL_COLOR }}>
                    ({kuaPlanet})
                  </span>
                </>
              }
              footer={<StripPlanetIcon src={STRIP_MOON_ICON} />}
            />
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-3 flex items-center justify-center gap-2 font-sans">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#e19d45]/50" />
          <SectionDiamond />
          <h2 className="text-center text-[11px] font-black uppercase tracking-wide" style={{ color: TITLE_RED }}>
            POWERFUL ACTIVATION TIPS FOR YOUR NEW NUMBER
          </h2>
          <SectionDiamond />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#e19d45]/50" />
        </div>

        {/* 4-Column Activation Tips */}
        <div className="mt-2 grid shrink-0 grid-cols-4 items-stretch gap-2 font-sans normal-case">
          <ActivationCard>
            <ActivationCardHeader icon={<User size={11} strokeWidth={2.5} />} title="10.1 BEFORE ACTIVATION" />
            <p className="mt-1.5 text-[8px] font-semibold leading-tight text-[#213247]">
              Save these contacts first before using the new number regularly.
            </p>
            <ul className="mt-1 space-y-0.5">
              {["Mother", "Father", "Spouse / Partner", "Best Friend", "Business Partner"].map((name) => (
                <CheckItem key={name}>{name}</CheckItem>
              ))}
            </ul>
            <DashedRule />
            <span className="text-[8px] font-bold text-red-600">Avoid first contact with</span>
            <ul className="mt-0.5 space-y-0.5">
              {["Debt Collectors", "Legal Disputes", "Negative People", "Arguments"].map((item) => (
                <AvoidItem key={item}>{item}</AvoidItem>
              ))}
            </ul>
            <TipFooter>The first energy exchange creates the foundation.</TipFooter>
          </ActivationCard>

          <ActivationCard>
            <ActivationCardHeader icon={<Clock size={11} strokeWidth={2.5} />} title="10.2 BEST TIME TO ACTIVATE" />
            <span className="mt-1.5 text-[8px] font-bold text-emerald-800">Ideal Activation Window</span>
            <div className="mt-1 flex items-center gap-1.5">
              <TimeWindowIcon src={ACTIVATION_SUNRISE_ICON} />
              <span className="text-[8.5px] font-bold text-[#213247]">7:00 AM – 9:00 AM</span>
            </div>
            <OrDivider />
            <div className="flex items-center gap-1.5">
              <TimeWindowIcon src={ACTIVATION_SUNSET_ICON} />
              <span className="text-[8.5px] font-bold text-[#213247]">5:00 PM – 7:00 PM</span>
            </div>
            <DashedRule />
            <span className="text-[8px] font-bold text-emerald-800">First call should be to</span>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white">
                <Heart size={9} fill="currentColor" strokeWidth={0} />
              </span>
              <span className="text-[8px] font-bold text-[#213247]">Loved One</span>
            </div>
            <OrDivider />
            <div className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-800 text-white">
                <Briefcase size={9} strokeWidth={2.5} />
              </span>
              <span className="text-[8px] font-bold leading-tight text-[#213247]">
                Important Positive Business Contact
              </span>
            </div>
            <TipFooter>Never start with a complaint, dispute or stressful conversation.</TipFooter>
          </ActivationCard>

          <ActivationCard>
            <ActivationCardHeader icon={<Clock24HeaderIcon />} title="10.3 FIRST 24 HOURS RULE" />
            <span className="mt-1.5 text-[8px] font-bold text-emerald-800">Use the number for</span>
            <ul className="mt-1 space-y-0.5">
              {[
                "Positive conversations",
                "Business communication",
                "Family communication",
                "Opportunity related work",
                "Goal setting",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <DashedRule />
            <span className="text-[8px] font-bold text-red-600">Avoid</span>
            <ul className="mt-0.5 space-y-0.5">
              {[
                "Complaints",
                "Arguments",
                "Negative discussions",
                "Financial stress conversations",
                "Conflict situations",
              ].map((item) => (
                <AvoidItem key={item}>{item}</AvoidItem>
              ))}
            </ul>
            <TipFooter>Positive energy in the first 24 hours amplifies results.</TipFooter>
          </ActivationCard>

          <ActivationCard>
            <ActivationCardHeader icon={<Calendar size={11} strokeWidth={2.5} />} title="10.4 FIRST 7 DAYS ACTIVATION PERIOD" />
            <span className="mt-1.5 text-[8px] font-bold text-emerald-800">Use the new number for:</span>
            <div className="mt-1 space-y-1">
              <PurpleActionItem icon={Phone} label="Calls" />
              <PurpleActionItem icon={AtSign} label="WhatsApp" />
              <PurpleActionItem icon={Camera} label="Business communication" />
              <PurpleActionItem icon={Users} label="Networking" />
              <PurpleActionItem icon={ClipboardList} label="Professional activities" />
            </div>
            <TipFooter tone="purple">
              Use the number every day for the first 7 days. Consistency helps establish the vibration.
            </TipFooter>
          </ActivationCard>
        </div>

        {/* 3-Column Middle Layout Row */}
        <div className="mt-3 grid shrink-0 grid-cols-3 items-stretch gap-2">
          <GuideSectionCard>
            <SectionCardHeader icon={User} title="10.5 NAME SAVING STRATEGY" />
            <p className="mt-2 text-[9px] font-bold uppercase leading-tight text-[#213247]">
              Save your own number in your phone as:
            </p>
            <div className="mt-1.5 space-y-1">
              <CheckRow>Your Name</CheckRow>
              <CheckRow>Your Business Name</CheckRow>
            </div>
            <span className="mt-2 text-[8px] font-bold uppercase tracking-wide text-neutral-400">Examples:</span>
            <div className="mt-1 space-y-1">
              <ExampleRow label="Bhargav" />
              <ExampleRow label="Bhargav Astro Aarambh" />
            </div>
            <WarningFooter>Avoid negative labels or symbols.</WarningFooter>
          </GuideSectionCard>

          <GuideSectionCard>
            <SectionCardHeader icon={ShieldCheck} title="10.6 POSITIVE VIBRATION CHECKLIST" />
            <p className="mt-1.5 text-center text-[9px] font-bold italic text-emerald-800">
              During the first 21 days:
            </p>
            <div className="mt-1.5 space-y-1">
              {[
                "Keep phone clean and organized",
                "Keep important contacts updated",
                "Use number for productive purposes",
                "Answer calls professionally",
                "Maintain respectful communication",
                "Build positive associations with the number",
              ].map((item) => (
                <CheckRow key={item}>{item}</CheckRow>
              ))}
            </div>
            <SummaryFooter>Your habits + Positive Usage = Powerful Results</SummaryFooter>
          </GuideSectionCard>

          <GuideSectionCard>
            <SectionCardHeader icon={Zap} title="10.7 POWER ACTIVATION PRINCIPLE" />
            <div className="mt-1.5 text-center">
              <p className="text-[9px] font-extrabold uppercase text-emerald-900 font-sans">
                For Driver {driverNumber} + Conductor {conductorNumber}
              </p>
              <p className="mt-0.5 text-[8px] font-medium uppercase text-neutral-500">
                (Driver {driverNumber} = {driverPlanet}, Conductor {conductorNumber} = {conductorPlanet})
              </p>
            </div>
            <div className="mt-2 grid flex-1 grid-cols-2 gap-1 border-t border-neutral-100/80 pt-2">
              <div className="flex flex-col gap-1 border-r border-neutral-200/60 pr-1.5">
                <span className="mb-0.5 text-[8px] font-extrabold uppercase tracking-wide text-emerald-800">
                  Activate through
                </span>
                {["Learning", "Business communication", "Research", "Networking", "Spiritual discipline"].map((item) => (
                  <CheckRow key={item}>{item}</CheckRow>
                ))}
              </div>
              <div className="flex flex-col gap-1 pl-1.5">
                <span className="mb-0.5 text-[8px] font-extrabold uppercase tracking-wide text-red-600">Avoid</span>
                {[
                  "Gossip",
                  "Excessive emotional reactions",
                  "Impulsive decisions",
                  "Unnecessary arguments",
                ].map((item) => (
                  <AvoidRow key={item}>{item}</AvoidRow>
                ))}
              </div>
            </div>
          </GuideSectionCard>
        </div>

        {/* FINAL NUMEROLOGIST ADVICE */}
        <section className="mt-3.5 mt-auto shrink-0 font-sans normal-case">
          <div
            className="overflow-hidden rounded-[14px] border"
            style={{ borderColor: CARD_BORDER, backgroundColor: CARD_BG }}
          >
            <div className="grid grid-cols-[100px_1fr_100px] items-center gap-3 px-3 py-3">
              <div className="flex justify-center">
                <Image
                  src={ADVICE_PHONE_IMAGE}
                  alt="Golden phone with lotus energy"
                  width={92}
                  height={115}
                  className="h-[90px] w-auto object-contain"
                />
              </div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-[12px] font-black uppercase tracking-wider" style={{ color: TITLE_RED }}>
                  FINAL NUMEROLOGIST ADVICE
                </h3>
                <p
                  className="mt-1.5 max-w-xl text-[10.5px] font-medium leading-relaxed"
                  style={{ color: LABEL_COLOR }}
                >
                  A corrected mobile number becomes powerful not because of the digits alone, but because of the energy,
                  intention and consistency with which it is used.
                </p>

                <AdviceStarDivider />

                <p className="text-[10px] font-bold leading-relaxed" style={{ color: LABEL_COLOR }}>
                  Use your new number consciously for the first{" "}
                  <span className="font-black" style={{ color: TITLE_RED }}>
                    21 days
                  </span>{" "}
                  and allow the vibration to integrate naturally into your daily life.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src={ADVICE_MEDITATION_IMAGE}
                  alt="Meditation and spiritual alignment"
                  width={100}
                  height={100}
                  className="h-[86px] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-3 px-1">
            <CoverLotus size={34} className="shrink-0" />
            <div
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[9.5px] font-black uppercase tracking-[0.22em]"
              style={{ color: TITLE_BLUE }}
            >
              <span>Align</span>
              <MantraStar />
              <span>Activate</span>
              <MantraStar />
              <span>Attract</span>
              <MantraStar />
              <span>Achieve</span>
            </div>
            <CoverLotus size={34} className="shrink-0" />
          </div>

          <div className="relative mt-1 flex items-center justify-center py-1">
            <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-[#e19d45]/45" />
            <div className="relative z-10 px-1.5" style={{ backgroundColor: COLORS.cream }}>
              <svg className="h-2 w-2 fill-[#e19d45]" viewBox="0 0 8 8" aria-hidden>
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
            </div>
          </div>
        </section>

      </div>
    </ReportPageShell>
  );
}