"use client";

import { useId, type ReactNode } from "react";
import { Libre_Baskerville } from "next/font/google";
import ReportPageShell from "../ReportPageShell";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const DISPLAY_FONT = `${libre.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#5B0C14",
  gold: "#C4A04A",
  goldDeep: "#A67C32",
  goldLine: "#C9A35A",
  headerBg: "#F6DCA8",
  tableBg: "#FFF6E4",
  body: "#343436",
  rule: "rgba(176, 132, 52, 0.55)",
} as const;

export type MajorTransitsProps = {
  language?: "en" | "hi";
  pageNumber?: string;
};

const COPY = {
  en: {
    title: "Major Transits",
    planet: "Planet",
    signDates: "Sign and dates",
    fromLagna: "From Lagna (Cancer)",
    fromMoon: "From Moon (Sagittarius)",
    rows: [
      {
        key: "sat-1",
        planet: "saturn",
        name: "Saturn",
        sign: "Pisces,\nuntil 3 Jun",
        lagna: "9th house: luck,\nmentors, long-term\nplans",
        moon: "4th house: Shani Dhaiya\n(home, peace of mind)",
      },
      {
        key: "sat-2",
        planet: "saturn",
        name: "Saturn",
        sign: "Aries,\n3 Jun – 20 Oct",
        lagna: "10th house: heavy\nworkload, but real\ncareer growth",
        moon: "5th house: Dhaiya\npressure eases",
      },
      {
        key: "sat-3",
        planet: "saturn",
        name: "Saturn",
        sign: "Pisces again,\n20 Oct – 31 Dec",
        lagna: "9th house",
        moon: "Last phase of Dhaiya;\nfinal exit expected\nin 2028",
      },
      {
        key: "jup-1",
        planet: "jupiter",
        name: "Jupiter",
        sign: "Cancer,\n25 Jan – 26 Jun",
        lagna: "1st house: confidence,\nhealth awareness,\nguidance",
        moon: "8th house: research,\nhidden gains, slower\nresults",
      },
      {
        key: "jup-2",
        planet: "jupiter",
        name: "Jupiter",
        sign: "Leo,\n26 Jun – 27 Nov",
        lagna: "2nd house: income,\nsavings, family support",
        moon: "9th house: luck and\nblessings, the best Jupiter\nphase of the year",
      },
      {
        key: "jup-3",
        planet: "jupiter",
        name: "Jupiter",
        sign: "Virgo,\nfrom 27 Nov",
        lagna: "3rd house: courage,\ncommunication,\nshort travel",
        moon: "10th house: career\nrecognition",
      },
      {
        key: "rahu",
        planet: "rahu",
        name: "Rahu",
        sign: "Capricorn,\nall year",
        lagna: "7th house: business\npartnerships and deals",
        moon: "2nd house: money and\nspeech; think before you\ncommit",
      },
      {
        key: "ketu",
        planet: "ketu",
        name: "Ketu",
        sign: "Cancer,\nall year",
        lagna: "1st house: inner\nreflection, spiritual pull",
        moon: "8th house: interest in\noccult and research",
      },
    ],
  },
  hi: {
    title: "प्रमुख गोचर",
    planet: "ग्रह",
    signDates: "राशि और तिथियाँ",
    fromLagna: "लग्न से (कर्क)",
    fromMoon: "चंद्र से (धनु)",
    rows: [
      {
        key: "sat-1",
        planet: "saturn",
        name: "शनि",
        sign: "मीन, 3 जून तक",
        lagna: "नवम भाव: भाग्य, गुरुजन, दीर्घकालिक योजनाएँ",
        moon: "चतुर्थ भाव: शनि ढैय्या (घर, मानसिक शांति)",
      },
      {
        key: "sat-2",
        planet: "saturn",
        name: "शनि",
        sign: "मेष, 3 जून – 20 अक्टूबर",
        lagna: "दशम भाव: भारी कार्यभार, पर वास्तविक करियर वृद्धि",
        moon: "पंचम भाव: ढैय्या का दबाव कम",
      },
      {
        key: "sat-3",
        planet: "saturn",
        name: "शनि",
        sign: "फिर मीन, 20 अक्टूबर – 31 दिसंबर",
        lagna: "नवम भाव",
        moon: "ढैय्या का अंतिम चरण; पूर्ण निर्गम 2028 में अपेक्षित",
      },
      {
        key: "jup-1",
        planet: "jupiter",
        name: "गुरु",
        sign: "कर्क, 25 जनवरी – 26 जून",
        lagna: "प्रथम भाव: आत्मविश्वास, स्वास्थ्य सजगता, मार्गदर्शन",
        moon: "अष्टम भाव: शोध, गुप्त लाभ, धीमे परिणाम",
      },
      {
        key: "jup-2",
        planet: "jupiter",
        name: "गुरु",
        sign: "सिंह, 26 जून – 27 नवंबर",
        lagna: "द्वितीय भाव: आय, बचत, पारिवारिक सहयोग",
        moon: "नवम भाव: भाग्य और आशीर्वाद, वर्ष का सर्वश्रेष्ठ गुरु चरण",
      },
      {
        key: "jup-3",
        planet: "jupiter",
        name: "गुरु",
        sign: "कन्या, 27 नवंबर से",
        lagna: "तृतीय भाव: साहस, संचार, लघु यात्रा",
        moon: "दशम भाव: करियर में मान्यता",
      },
      {
        key: "rahu",
        planet: "rahu",
        name: "राहु",
        sign: "मकर, पूरे वर्ष",
        lagna: "सप्तम भाव: व्यावसायिक साझेदारी और सौदे",
        moon: "द्वितीय भाव: धन और वाणी; वचन से पहले सोचें",
      },
      {
        key: "ketu",
        planet: "ketu",
        name: "केतु",
        sign: "कर्क, पूरे वर्ष",
        lagna: "प्रथम भाव: आत्मचिंतन, आध्यात्मिक खिंचाव",
        moon: "अष्टम भाव: गूढ़ विद्या और शोध में रुचि",
      },
    ],
  },
} as const;

function DiamondRule() {
  return (
    <svg viewBox="0 0 228 20" className="h-[16px] w-[196px]" fill="none" aria-hidden>
      <line x1="4" y1="10" x2="88" y2="10" stroke={COLORS.gold} strokeWidth="1.15" />
      <circle cx="94" cy="10" r="1.35" fill={COLORS.goldDeep} />
      <path d="M114 1.5L120.5 10L114 18.5L107.5 10Z" fill={COLORS.goldDeep} />
      <path d="M114 4.4L117.6 10L114 15.6L110.4 10Z" fill="#F8E7C2" />
      <path d="M114 7.2L115.6 10L114 12.8L112.4 10Z" fill={COLORS.goldDeep} />
      <circle cx="134" cy="10" r="1.35" fill={COLORS.goldDeep} />
      <line x1="140" y1="10" x2="224" y2="10" stroke={COLORS.gold} strokeWidth="1.15" />
    </svg>
  );
}

function SideSpark() {
  return (
    <svg viewBox="0 0 58 16" className="h-[13px] w-[48px] shrink-0" fill="none" aria-hidden>
      <line x1="1" y1="8" x2="16" y2="8" stroke={COLORS.goldDeep} strokeWidth="1.15" />
      <path d="M29 1L32.2 8L29 15L25.8 8Z" fill={COLORS.goldDeep} />
      <path d="M29 3.6L30.8 8L29 12.4L27.2 8Z" fill="#F6E6C0" />
      <line x1="42" y1="8" x2="57" y2="8" stroke={COLORS.goldDeep} strokeWidth="1.15" />
    </svg>
  );
}

function PlaqueCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" aria-hidden>
      <path
        d="M4 16C4 8 9 4 18 4"
        stroke={COLORS.gold}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M8 14C9 9 13 7 17 8"
        stroke={COLORS.goldDeep}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M7 7c2.2 1.2 3.2 2.8 2.6 4.2c-.5 1.2-1.8 1.4-2.4.5"
        stroke={COLORS.goldDeep}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TitlePlaque({ title, isHi }: { title: string; isHi: boolean }) {
  return (
    <div className="relative mx-auto mt-1 h-[84px] w-[86%] max-w-[620px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 68" fill="none" preserveAspectRatio="none" aria-hidden>
        <path
          d="M36 5H524C540 5 548 12 544 34C548 56 540 63 524 63H36C20 63 12 56 16 34C12 12 20 5 36 5Z"
          stroke={COLORS.gold}
          strokeWidth="1.7"
        />
        <path
          d="M40 10H520C532 10 538 16 535 34C538 52 532 58 520 58H40C28 58 22 52 25 34C22 16 28 10 40 10Z"
          stroke={COLORS.gold}
          strokeWidth="1"
        />
      </svg>
      <PlaqueCorner className="absolute left-[2px] top-[1px] h-[22px] w-[22px]" />
      <PlaqueCorner className="absolute right-[2px] top-[1px] h-[22px] w-[22px] -scale-x-100" />
      <PlaqueCorner className="absolute bottom-[1px] left-[2px] h-[22px] w-[22px] -scale-y-100" />
      <PlaqueCorner className="absolute bottom-[1px] right-[2px] h-[22px] w-[22px] -scale-x-100 -scale-y-100" />
      <div className="relative z-10 flex h-full items-center justify-center gap-3 px-10 py-3">
        <SideSpark />
        <h2
          className={`text-center font-bold leading-none ${isHi ? "text-[30px]" : "text-[36px]"}`}
          style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
        >
          {title}
        </h2>
        <SideSpark />
      </div>
    </div>
  );
}

function TableCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 78" className={className} fill="none" aria-hidden>
      <path d="M6 48V20C6 12 12 6 22 6H50" stroke={COLORS.gold} strokeWidth="1.55" strokeLinecap="round" />
      <path d="M11 42V22C11 16 16 12 24 12H44" stroke={COLORS.goldDeep} strokeWidth="0.85" strokeLinecap="round" />
      <path
        d="M20 30c5.5-.6 9.2 2.6 8.4 7.2c-.7 3.8-4.4 5.6-7.4 3.8c-2.6-1.5-2.8-4.6-.2-5.6c1.8-.7 3.2.6 2.8 2"
        stroke={COLORS.goldDeep}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path d="M16 18c5 2 7.5 6.5 6 11" stroke={COLORS.gold} strokeWidth="1.05" strokeLinecap="round" />
      <path d="M28 13c1.5 5.5.4 9-2.6 12" stroke={COLORS.gold} strokeWidth="1" strokeLinecap="round" />
      <path d="M14 32c4 .6 6.5-.2 8.5-2.8" stroke={COLORS.goldDeep} strokeWidth="0.95" strokeLinecap="round" />
      <path d="M34 18c4 1 6 4 5 7.5" stroke={COLORS.gold} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M18 40c3.2-2 6.5-2.2 9-1" stroke={COLORS.gold} strokeWidth="0.85" strokeLinecap="round" />
      <circle cx="14.5" cy="15.5" r="1.35" fill={COLORS.goldDeep} />
      <path d="M46 8h8M52 8v6" stroke={COLORS.gold} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M8 46v8M8 52h6" stroke={COLORS.gold} strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

function SaturnPlanet() {
  const uid = useId().replace(/:/g, "");
  const body = `sat-body-${uid}`;
  const ring = `sat-ring-${uid}`;
  const shade = `sat-shade-${uid}`;
  return (
    <svg viewBox="0 0 64 42" className="h-[38px] w-[58px]" aria-hidden>
      <defs>
        <linearGradient id={body} x1="18%" y1="8%" x2="82%" y2="92%">
          <stop offset="0%" stopColor="#F8E6B0" />
          <stop offset="32%" stopColor="#E2B85C" />
          <stop offset="68%" stopColor="#C48A38" />
          <stop offset="100%" stopColor="#7A4E22" />
        </linearGradient>
        <linearGradient id={ring} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0D48A" />
          <stop offset="45%" stopColor="#B88934" />
          <stop offset="100%" stopColor="#E6C56A" />
        </linearGradient>
        <radialGradient id={shade} cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FFF6D8" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#FFF6D8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="rotate(-28 32 21)">
        <path
          d="M8 21A24 7.2 0 0 1 56 21"
          fill="none"
          stroke={`url(#${ring})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <circle cx="32" cy="21" r="12.4" fill={`url(#${body})`} />
      <ellipse cx="32" cy="16.5" rx="10.2" ry="2.1" fill="#A87430" opacity="0.38" />
      <ellipse cx="32" cy="21.2" rx="11.4" ry="1.5" fill="#F4D898" opacity="0.4" />
      <ellipse cx="32" cy="25.4" rx="9.2" ry="1.7" fill="#8A5A28" opacity="0.28" />
      <circle cx="32" cy="21" r="12.4" fill={`url(#${shade})`} />
      <g transform="rotate(-28 32 21)">
        <path
          d="M8 21A24 7.2 0 0 0 56 21"
          fill="none"
          stroke={`url(#${ring})`}
          strokeWidth="2.7"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

const GLYPH = "#A56C28";

function JupiterGlyph() {
  return (
    <svg viewBox="0 0 40 46" className="h-[40px] w-[34px]" fill="none" aria-hidden>
      <path
        d="M23.5 4.5C13 4.2 8.5 11 11.2 16.6C13 19.8 17.2 19.8 20 16.8"
        stroke={GLYPH}
        strokeWidth="3.7"
        strokeLinecap="round"
      />
      <path d="M20.6 7V41" stroke={GLYPH} strokeWidth="3.7" strokeLinecap="round" />
      <path d="M6 23.5H35" stroke={GLYPH} strokeWidth="3.7" strokeLinecap="round" />
    </svg>
  );
}

function NodeGlyph({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 46"
      className={`h-[38px] w-[40px] ${flip ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <g stroke={GLYPH} strokeWidth="3.3" fill="none" strokeLinecap="round">
        <circle cx="13" cy="31" r="5.4" />
        <circle cx="35" cy="31" r="5.4" />
        <path d="M13 26.2C13 11 35 11 35 26.2" />
      </g>
    </svg>
  );
}

function PlanetMark({ planet }: { planet: string }) {
  if (planet === "jupiter") return <JupiterGlyph />;
  if (planet === "rahu") return <NodeGlyph />;
  if (planet === "ketu") return <NodeGlyph flip />;
  return <SaturnPlanet />;
}

function CellText({ children, isHi }: { children: ReactNode; isHi: boolean }) {
  return (
    <p
      className={`whitespace-pre-line pl-3 font-normal ${isHi ? "text-[14.5px] leading-[1.45]" : "text-[15.5px] leading-[1.4]"}`}
      style={{ color: COLORS.body, fontFamily: DISPLAY_FONT, borderLeft: `1px solid ${COLORS.rule}` }}
    >
      {children}
    </p>
  );
}

export default function MajorTransits({ language = "en", pageNumber = "05" }: MajorTransitsProps) {
  const t = COPY[language];
  const isHi = language === "hi";

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel="yearly-forecast-transits"
      padding="22px 32px 16px"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <header className="relative flex shrink-0 flex-col items-center pt-1">
          <DiamondRule />
          <TitlePlaque title={t.title} isHi={isHi} />
          <div className="mt-1.5">
            <DiamondRule />
          </div>
        </header>

        <div
          className="relative mt-2 flex min-h-0 flex-1 flex-col"
          style={{
            background: COLORS.tableBg,
            border: `1.6px solid ${COLORS.gold}`,
            boxShadow: "inset 0 0 0 1px rgba(196,160,74,0.28)",
          }}
        >
          <TableCorner className="pointer-events-none absolute left-[-1px] top-[-1px] z-20 h-[46px] w-[46px]" />
          <TableCorner className="pointer-events-none absolute right-[-1px] top-[-1px] z-20 h-[46px] w-[46px] -scale-x-100" />
          <TableCorner className="pointer-events-none absolute bottom-[-1px] left-[-1px] z-20 h-[46px] w-[46px] -scale-y-100" />
          <TableCorner className="pointer-events-none absolute bottom-[-1px] right-[-1px] z-20 h-[46px] w-[46px] -scale-x-100 -scale-y-100" />

          <div
            className="grid shrink-0 items-center px-2 py-[11px]"
            style={{
              background: COLORS.headerBg,
              borderBottom: `1px solid ${COLORS.rule}`,
              fontFamily: DISPLAY_FONT,
              gridTemplateColumns: "108px 148px minmax(0,1fr) minmax(0,1.12fr)",
            }}
          >
            {[t.planet, t.signDates, t.fromLagna, t.fromMoon].map((label, index) => (
              <span
                key={label}
                className={`font-bold leading-tight pl-3 ${isHi ? "text-[15px]" : "text-[16.5px]"}`}
                style={{
                  color: COLORS.maroon,
                  borderLeft: index === 0 ? "none" : `1px solid ${COLORS.rule}`,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            {t.rows.map((row, index) => (
              <div
                key={row.key}
                className={`grid min-h-0 flex-1 items-center px-2 ${index === t.rows.length - 1 ? "pb-3" : ""}`}
                style={{
                  borderTop: index === 0 ? "none" : `1px solid ${COLORS.rule}`,
                  gridTemplateColumns: "108px 148px minmax(0,1fr) minmax(0,1.12fr)",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-0.5 py-1">
                  <PlanetMark planet={row.planet} />
                  <span
                    className={`font-bold leading-none ${isHi ? "text-[16px]" : "text-[17px]"}`}
                    style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
                  >
                    {row.name}
                  </span>
                </div>
                <CellText isHi={isHi}>{row.sign}</CellText>
                <CellText isHi={isHi}>{row.lagna}</CellText>
                <CellText isHi={isHi}>{row.moon}</CellText>
              </div>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 justify-center pt-2">
          <DiamondRule />
        </div>
      </div>
    </ReportPageShell>
  );
}
