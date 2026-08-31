import {
  Briefcase,
  Building2,
  CalendarDays,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { CoverLotus, Pattern3 } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";
import { cinzel } from "@/app/fonts";
import { BusinessReportFooter } from "./BusinessReportCommon";

const COLORS = REPORT_COLORS;

const HEADER = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldLight: "#b8860b",
  tagline: "#3a3a3a",
} as const;

type Partner = {
  name: string;
  designation: string;
  ownership: string;
  role: string;
  driverNumber: string;
  conductorNumber: string;
  kuaNumber: string;
  destinyNumber: string;
  mobileNumber: string;
  personalVibration: string;
  financialContribution: string;
  partnerEnergyScore: string;
};

type PartnershipSummary = {
  totalPartners: string;
  harmonyScore: number;
  growthPotential: string;
  stability: string;
};

const SECTION_ORANGE = "#B5700D";

const ASSETS = {
  pattern2: "/assets/cover/pattern-2.png",
  footerBg: "/assets/signatureReport/foooter-background.png",
} as const;

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

export default function PartnerNumerologyDetails() {
  const partners: Partner[] = [
    {
      name: "BHARGAV GUJARATI",
      designation: "Managing Director",
      ownership: "60%",
      role: "Primary Decision Maker",
      driverNumber: "9",
      conductorNumber: "3",
      kuaNumber: "6",
      destinyNumber: "5",
      mobileNumber: "XXXXXXXXX55 (9)",
      personalVibration: "Strong",
      financialContribution: "60%",
      partnerEnergyScore: "86 / 100",
    },
    {
      name: "JAY RAUT",
      designation: "Director",
      ownership: "30%",
      role: "Operations Head",
      driverNumber: "7",
      conductorNumber: "2",
      kuaNumber: "4",
      destinyNumber: "8",
      mobileNumber: "XXXXXXXXX31 (7)",
      personalVibration: "Good",
      financialContribution: "30%",
      partnerEnergyScore: "72 / 100",
    },
    {
      name: "— — — — — — — — —",
      designation: "—",
      ownership: "—",
      role: "—",
      driverNumber: "—",
      conductorNumber: "—",
      kuaNumber: "—",
      destinyNumber: "—",
      mobileNumber: "—",
      personalVibration: "—",
      financialContribution: "—",
      partnerEnergyScore: "— / 100",
    },
  ];

  const partnershipSummary: PartnershipSummary = {
    totalPartners: "2/3",
    harmonyScore: 79,
    growthPotential: "High",
    stability: "Good",
  };

  const GoldIconCircle = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center rounded-full flex-shrink-0"
      style={{
        width: "24px",
        height: "24px",
        border: "1.5px solid #c9a84c",
        background: "linear-gradient(145deg, #f4e5b0, #d4a843)",
      }}
    >
      {children}
    </div>
  );

  return (
    <BusinessNameReportPageShell padding="16px 36px 22px" pageNumber="02">
      <div>
        {/* ── Header ── */}
        <header className=" flex flex-col items-center text-center">
          <Image
            src="/assets/ganesha-logo.png"
            alt="Astro Aarambh"
            width={80}
            height={80}
            priority
          />
          <h1
            className="text-center text-[40px] font-bold leading-none uppercase tracking-wide"
            style={{ color: COLORS.brown }}
          >
            ASTRO AARAMBH
          </h1>
          <h1
            className={`${cinzel.className}  text-[26px] font-bold leading-tight tracking-wide uppercase`}
            style={{ color: SECTION_ORANGE }}
          >
            BUSINESS NAME OPTIMIZATION REPORT
          </h1>
          <h3
            className="text-[18px] font-medium  tracking-[0.03em] uppercase"
            style={{ color: REPORT_COLORS.black }}
          >
            PERSONALIZED BUSINESS NUMEROLOGY &amp; BRAND VIBRATION ANALYSIS
          </h3>
          <OrnamentDivider width={260} />
        </header>

        <div className="text-center">
          <div className="flex items-center justify-between">
            <Pattern3 size={100} />
            <h2
              className="text-[20px] font-bold tracking-[0.05em] uppercase"
              style={{ color: REPORT_COLORS.red }}
            >
              02. PARTNER NUMEROLOGY &amp; DETAILS
            </h2>
            <div className="rotate-180">
              <Pattern3 size={100} />
            </div>
          </div>
          <p
            className="text-[14px] italic font-nunito-sans"
            style={{ color: REPORT_COLORS.black }}
          >
            Complete partner profile with numerology mapping.
          </p>
        </div>

        <div
          className=" relative flex items-center justify-between px-8"
          style={{
            backgroundImage: `url('${ASSETS.footerBg}')`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "85px",
          }}
        >
          <div className="flex items-center gap-3 flex-1">
            <Building2 size={24} color="var(--cover-gold)" strokeWidth={1.5} />
            <div>
              <div
                className="font-cinzel uppercase"
                style={{ color: "var(--cover-brown)", fontWeight: "800", fontSize: "12px", letterSpacing: "0.08em" }}
              >
                BUSINESS NAME
              </div>
              <div
                className="font-nunito-sans font-bold"
                style={{ color: REPORT_COLORS.red, fontStyle: "italic", fontSize: "11.5px", marginTop: "1px", letterSpacing: "0.06em" }}
              >
                AnantaX Technologies Pvt Ltd
              </div>
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "var(--cover-gold)", height: "42px", opacity: 0.5 }} />

          <div className="flex items-center gap-3 flex-1 justify-center">
            <User size={24} color="var(--cover-gold)" strokeWidth={1.5} />
            <div>
              <div
                className="font-cinzel uppercase"
                style={{ color: "var(--cover-brown)", fontWeight: "800", fontSize: "12px", letterSpacing: "0.08em" }}
              >
                BUSINESS OWNER
              </div>
              <div
                className="font-nunito-sans font-bold"
                style={{ color: REPORT_COLORS.red, fontStyle: "italic", fontSize: "11.5px", marginTop: "1px", letterSpacing: "0.08em" }}
              >
                Bhargav Gujarati
              </div>
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "var(--cover-gold)", height: "42px", opacity: 0.5 }} />

          <div className="flex items-center gap-1 flex-1 justify-center">
            <Briefcase size={24} color="var(--cover-gold)" strokeWidth={1.5} />
            <div>
              <div
                className="font-cinzel uppercase"
                style={{ color: "var(--cover-brown)", fontWeight: "800", fontSize: "10.5px", letterSpacing: "0.08em" }}
              >
                BUSINESS CATEGORY
              </div>
              <div
                className="font-nunito-sans font-bold"
                style={{ color: "var(--cover-brown)", fontStyle: "italic", fontSize: "11.5px", marginTop: "1px", letterSpacing: "0.06em" }}
              >
                Information Technology
              </div>
            </div>
          </div>
          <div style={{ width: "1px", backgroundColor: "var(--cover-gold)", height: "42px", opacity: 0.5 }} />

          <div className="flex items-center gap-3 flex-1 justify-end">
            <CalendarDays size={24} color="var(--cover-gold)" strokeWidth={1.5} />
            <div>
              <div
                className="font-cinzel uppercase"
                style={{ color: "var(--cover-brown)", fontWeight: "800", fontSize: "12px", letterSpacing: "0.08em" }}
              >
                REPORT DATE
              </div>
              <div
                className="font-nunito-sans font-bold"
                style={{ color: "var(--cover-brown)", fontStyle: "italic", fontSize: "10.5px", marginTop: "1px", letterSpacing: "0.06em" }}
              >
                09-06-2026
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div
            className="font-cinzel"
            style={{
              background: "var(--cover-cream)",
              border: "2px solid var(--cover-gold)",
              borderRadius: "8px",
              padding: "2px 14px",
              display: "inline-block",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "var(--cover-brown)",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
              className="uppercase"
            >
              PARTNER WISE NUMEROLOGY OVERVIEW
            </span>
          </div>
        </div>

        <div className="flex flex-col ">
          {partners.map((partner, index) => {
            const isEmpty = partner.name.includes("—");

            return (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url('${ASSETS.footerBg}')`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="px-6 py-3">

                  <div className="flex items-stretch gap-2">

                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "46px" }}>
                      <div
                        className="flex items-center justify-center rounded-full"
                        style={{
                          width: "42px",
                          height: "42px",
                          background: "linear-gradient(145deg, #f4e5b0 0%, #c9900a 50%, #f4e5b0 100%)",
                          border: "2px solid #a07010",
                          boxShadow: "0 2px 8px rgba(160,112,16,0.4)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "900",
                            color: "#ffffff",
                            lineHeight: 1,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div
                      className="flex flex-col justify-center"
                      style={{ minWidth: "155px", flex: "1.2" }}
                    >
                      <h4
                        style={{
                          fontSize: "13px",
                          fontWeight: "900",
                          color: HEADER.maroon,
                          letterSpacing: "0.04em",
                          marginTop: "4px",
                        }}
                        className="uppercase"
                      >
                        {partner.name}
                      </h4>
                      <div style={{ fontSize: "9.5px", color: REPORT_COLORS.black, lineHeight: "1.65" }}>
                        <div className="font-nunito-sans">
                          <span style={{ fontWeight: "700" }} >Designation</span>
                          <span style={{ margin: "0 4px" }} >:</span>
                          {partner.designation}
                        </div>
                        <div className="font-nunito-sans">
                          <span style={{ fontWeight: "700" }}>Ownership %</span>
                          <span style={{ margin: "0 4px" }}>:</span>
                          {partner.ownership}
                        </div>
                        <div className="font-nunito-sans">
                          <span style={{ fontWeight: "700" }}>Role in Business:</span>
                          <span style={{ marginLeft: "3px", fontStyle: "italic", color: REPORT_COLORS.red }} >
                            {partner.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {[
                      { label: "DRIVER\nNUMBER", value: partner.driverNumber },
                      { label: "CONDUCTOR\nNUMBER", value: partner.conductorNumber },
                      { label: "KUA\nNUMBER", value: partner.kuaNumber },
                      { label: "DESTINY\nNUMBER", value: partner.destinyNumber },
                      { label: "MOBILE\nNUMBER", value: partner.mobileNumber, small: true },
                    ].map((col, ci) => (
                      <div
                        key={ci}
                        className="flex flex-col items-center justify-center text-center"
                        style={{
                          flex: col.small ? "1.5" : "1",
                          borderLeft: "1px solid rgba(201,168,76,0.3)",
                          padding: "0 5px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            color: HEADER.tagline,
                            letterSpacing: "0.03em",
                            lineHeight: "1.3",
                            whiteSpace: "pre-line",
                            marginBottom: "3px",
                          }}
                          className="uppercase"
                        >
                          {col.label}
                        </div>
                        <div
                          style={{
                            fontSize: col.small ? (isEmpty ? "14px" : "13px") : "22px",
                            fontWeight: "900",
                            color: REPORT_COLORS.red,
                            lineHeight: 1,
                          }}

                          className="font-nunito-sans"
                        >
                          {col.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex items-center  pt-1.5"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.45)" }}
                  >
                    <div className="flex items-center gap-1.5 flex-1">
                      <GoldIconCircle>
                        <User size={12} color="#4a2c00" strokeWidth={2} />
                      </GoldIconCircle>
                      <span style={{ fontSize: "11px", fontWeight: "700", color: HEADER.tagline, letterSpacing: "0.04em" }} className="uppercase">
                        PERSONAL VIBRATION
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "800",
                          color: REPORT_COLORS.red
                        }}

                        className="font-nunito-sans mb-1 uppercase"
                      >
                        {partner.personalVibration}
                      </span>
                    </div>

                    <div style={{ width: "1px", height: "24px", backgroundColor: "#c9a84c", opacity: 0.5, flexShrink: 0, margin: "0 8px" }} />

                    <div className="flex items-center gap-1.5 flex-1 justify-center">
                      <GoldIconCircle>
                        <span style={{ fontSize: "11px", fontWeight: "900", color: "#4a2c00", lineHeight: 1 }}>₹</span>
                      </GoldIconCircle>
                      <span style={{ fontSize: "9.5px", fontWeight: "700", color: HEADER.tagline, letterSpacing: "0.04em" }} className="uppercase">
                        FINANCIAL CONTRIBUTION
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: "800", color: REPORT_COLORS.red }} className="uppercase">
                        {partner.financialContribution}
                      </span>
                    </div>

                    <div style={{ width: "1px", height: "24px", backgroundColor: "#c9a84c", opacity: 0.5, flexShrink: 0, margin: "0 8px" }} />

                    <div className="flex items-center gap-1.5 flex-1 justify-end">
                      <GoldIconCircle>
                        <Star size={12} fill="#4a2c00" stroke="#4a2c00" />
                      </GoldIconCircle>
                      <span style={{ fontSize: "9.5px", fontWeight: "700", color: HEADER.tagline, letterSpacing: "0.04em" }} className="uppercase">
                        PARTNER ENERGY SCORE
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "800",
                          color: REPORT_COLORS.red,
                        }}
                        className="uppercase"
                      >
                        {partner.partnerEnergyScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex justify-center">
            <div
              className="font-cinzel"
              style={{
                background: "var(--cover-cream)",
                border: "2px solid var(--cover-gold)",
                borderRadius: "8px",
                padding: "2px 14px",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "var(--cover-brown)",
                  letterSpacing: "0.05em",
                }}
                className="uppercase"
              >
                PARTNERSHIP NUMEROLOGY SUMMARY
              </span>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg font-nunito-sans"
            style={{
              backgroundImage: `url('${ASSETS.footerBg}')`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "70px",
            }}
          >
            <div className="grid grid-cols-4 h-full">

              <div className="flex items-center justify-center gap-3 px-4 py-3 ">
                <Users size={40} color="#b97805" strokeWidth={1.6} />

                <div className="text-center">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: REPORT_COLORS.black,

                    }}
                    className="uppercase"
                  >
                    TOTAL PARTNERS
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: REPORT_COLORS.red,

                    }}
                  >
                    {partnershipSummary.totalPartners}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 px-4 py-2 ">
                <Target size={40} color="#b97805" strokeWidth={1.6} />

                <div className="text-center">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: REPORT_COLORS.black,
                    }}
                    className="uppercase"
                  >
                    PARTNERSHIP
                    <br />
                    HARMONY SCORE
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: REPORT_COLORS.red,
                    }}
                    className="uppercase"
                  >
                    {partnershipSummary.harmonyScore}
                    <span style={{ fontSize: "18px" }}> / 100</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 px-4 py-3 ">
                <TrendingUp size={40} color="#b97805" strokeWidth={1.6} />

                <div className="text-center">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: REPORT_COLORS.black,
                    }}
                    className="uppercase"
                  >
                    BUSINESS GROWTH
                    <br />
                    POTENTIAL
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: REPORT_COLORS.red,
                    }}
                    className="uppercase"
                  >
                    {partnershipSummary.growthPotential}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 px-4 py-3">
                <Shield size={40} color="#b97805" strokeWidth={1.6} />

                <div className="text-center">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: REPORT_COLORS.black,
                    }}
                    className="uppercase"
                  >
                    PARTNERSHIP
                    <br />
                    STABILITY
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: REPORT_COLORS.red,
                    }}
                    className="uppercase"
                  >
                    {partnershipSummary.stability}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center  flex flex-col items-center justify-center">
          <section className="relative z-10 flex items-center justify-center gap-2 px-4 text-center">
            <CoverLotus size={70} />
            <p
              className="max-w-[320px] text-[16px] italic leading-relaxed font-nunito-sans"
              style={{ color: COLORS.brown }}
            >
              &ldquo;Strong partnerships with aligned numbers create unstoppable business success.&rdquo;
            </p>
            <CoverLotus size={70} />
          </section>

          <BusinessReportFooter />

        </div>
      </div>
    </BusinessNameReportPageShell>
  );
}