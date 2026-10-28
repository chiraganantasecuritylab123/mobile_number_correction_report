"use client";

import Image from "next/image";
import { Globe, Phone } from "lucide-react";
import { CornerFlourish } from "../CoverPageDecorations";
import { OrnamentDivider } from "../BusinessNameReport/BusinessReportCommon";
import BusinessNameReportPageShell from "../BusinessNameReport/BusinessNameReportPageShell";
import type { ReactNode } from "react";

const ASTRO = {
  parchment: "#F8EEDC",
  maroon:    "#3a0a0a",
  gold:      "#B8860B",
  goldLight: "#c8960c",
  body:      "#2a1a00",
  border:    "#C89A2B",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────────

export type RemedyItem = {
  icon: ReactNode;
  title: string;
  titleHi?: string;
  bullets: string[];
  bulletsHi?: string[];
};

export type RinMuktiRemediesProps = {
  pageNumber?: string;
  language?: "en" | "hi";
  purposeText?: string;
  purposeTextHi?: string;
  remedies?: RemedyItem[];
  disclaimerText?: string;
  disclaimerTextHi?: string;
  website?: string;
  phone?: string;
  instagram?: string;
};

// ─── Page Frame ────────────────────────────────────────────────────────────────

function PageOrnamentalFrame() {
  return (
    <>
      <CornerFlourish className="pointer-events-none absolute left-[10px] top-[10px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[10px] top-[10px] h-[52px] w-[52px] -scale-x-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] left-[10px] h-[52px] w-[52px] -scale-y-100" />
      <CornerFlourish className="pointer-events-none absolute bottom-[10px] right-[10px] h-[52px] w-[52px] scale-[-1]" />
    </>
  );
}

// ─── Dark Banner ─────────────────────────────────────────────────────────────

function DarkBanner({ children }: { children: ReactNode }) {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
      <svg width="18" height="14" viewBox="0 0 18 14"><polygon points="0,7 9,0 18,7 9,14" fill={ASTRO.gold} opacity="0.8"/></svg>
      <div style={{ backgroundColor:ASTRO.maroon, border:`1.5px solid ${ASTRO.gold}`, borderRadius:4, padding:"5px 28px" }}>
        <p className="font-cinzel" style={{ fontWeight:700, fontSize:13, color:"#fff", letterSpacing:"0.12em", margin:0 }}>{children}</p>
      </div>
      <svg width="18" height="14" viewBox="0 0 18 14"><polygon points="0,7 9,0 18,7 9,14" fill={ASTRO.gold} opacity="0.8"/></svg>
    </div>
  );
}

// ─── Dark Icon Circle ─────────────────────────────────────────────────────────

function DarkCircle({ size=58, children }: { size?: number; children: ReactNode }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%",
      backgroundColor:ASTRO.maroon,
      border:`2.5px solid ${ASTRO.gold}`,
      display:"flex", alignItems:"center", justifyContent:"center",
      flexShrink:0,
      boxShadow:`0 0 0 2px ${ASTRO.maroon}, 0 0 0 4px rgba(184,134,11,0.25)`,
    }}>
      {children}
    </div>
  );
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function SaturnIcon({ size=32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="8" fill={ASTRO.gold} opacity="0.9"/>
      <ellipse cx="16" cy="18" rx="15" ry="4.5" fill="none" stroke={ASTRO.gold} strokeWidth="1.8"/>
      <ellipse cx="16" cy="16" rx="8" ry="8" fill={ASTRO.maroon}/>
      <circle cx="16" cy="16" r="7.5" fill="none" stroke={ASTRO.gold} strokeWidth="1.5"/>
      <path d="M8 14 Q16 10 24 14" stroke={ASTRO.gold} strokeWidth="1.5" fill="none"/>
      <circle cx="13" cy="14" r="1.2" fill={ASTRO.gold} opacity="0.7"/>
      <circle cx="19" cy="18" r="1.2" fill={ASTRO.gold} opacity="0.7"/>
    </svg>
  );
}

function CharityIcon({ size=32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 12 C16 12 12 8 9 10 C6 12 7 16 10 18 L16 23 L22 18 C25 16 26 12 23 10 C20 8 16 12 16 12Z" fill={ASTRO.gold} opacity="0.9"/>
      <path d="M5 22 C5 19 8 17 11 17 L21 17 C24 17 27 19 27 22 L27 26 C27 27 26 28 25 28 L7 28 C6 28 5 27 5 26 Z" fill="none" stroke={ASTRO.gold} strokeWidth="1.8"/>
      <path d="M9 17 L9 22" stroke={ASTRO.gold} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M23 17 L23 22" stroke={ASTRO.gold} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function OmIcon({ size=32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <text x="16" y="23" textAnchor="middle" fill={ASTRO.gold} fontSize="22" fontWeight="700" className="font-serif">ॐ</text>
    </svg>
  );
}

function TempleIcon({ size=32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <line x1="16" y1="2" x2="16" y2="8" stroke={ASTRO.gold} strokeWidth="1.5"/>
      <polygon points="16,2 22,5 16,8" fill={ASTRO.gold}/>
      <polygon points="16,8 10,14 22,14" fill={ASTRO.gold} opacity="0.85"/>
      <polygon points="8,14 6,18 26,18 24,14" fill={ASTRO.gold} opacity="0.7"/>
      <rect x="9"  y="18" width="4" height="12" fill={ASTRO.gold} opacity="0.8" rx="1"/>
      <rect x="14" y="18" width="4" height="12" fill={ASTRO.gold} opacity="0.9" rx="1"/>
      <rect x="19" y="18" width="4" height="12" fill={ASTRO.gold} opacity="0.8" rx="1"/>
      <rect x="5" y="29" width="22" height="2" fill={ASTRO.gold}/>
    </svg>
  );
}

function FastingIcon({ size=32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M6 14 Q6 24 16 24 Q26 24 26 14 Z" fill="none" stroke={ASTRO.gold} strokeWidth="1.8"/>
      <line x1="4" y1="14" x2="28" y2="14" stroke={ASTRO.gold} strokeWidth="1.5"/>
      <line x1="10" y1="5" x2="17" y2="20" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="17" y1="5" x2="10" y2="20" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="13.5" cy="12.5" r="7" fill="none" stroke={ASTRO.gold} strokeWidth="1.6"/>
      <line x1="8" y1="7" x2="19" y2="18" stroke={ASTRO.gold} strokeWidth="1.6"/>
    </svg>
  );
}

function MeditationIcon({ size=32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      {[-30,-15,0,15,30].map((deg, i) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        return <line key={i}
          x1={16 + 8*Math.cos(rad)} y1={7 + 8*Math.sin(rad)}
          x2={16 + 13*Math.cos(rad)} y2={7 + 13*Math.sin(rad)}
          stroke={ASTRO.gold} strokeWidth="1.3" strokeLinecap="round"/>;
      })}
      <circle cx="16" cy="9" r="3.5" fill={ASTRO.gold}/>
      <path d="M10 22 Q16 15 22 22" fill={ASTRO.gold} opacity="0.85"/>
      <path d="M10 22 Q7 25 5 24" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M22 22 Q25 25 27 24" stroke={ASTRO.gold} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M11 19 Q9 21 7 21" stroke={ASTRO.gold} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M21 19 Q23 21 25 21" stroke={ASTRO.gold} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function LotusIcon({ size=56 }: { size?: number }) {
  return (
    <svg width={size} height={size*0.72} viewBox="0 0 56 40" fill="none">
      <path d="M28 37 C28 27 16 20 4 17 C14 22 21 28 28 37" stroke={ASTRO.gold} strokeWidth="1.3" fill="none"/>
      <path d="M28 37 C28 27 40 20 52 17 C42 22 35 28 28 37" stroke={ASTRO.gold} strokeWidth="1.3" fill="none"/>
      <path d="M28 37 C28 24 19 16 13 9 C18 18 22 26 28 37" stroke={ASTRO.gold} strokeWidth="1.3" fill="none"/>
      <path d="M28 37 C28 24 37 16 43 9 C38 18 34 26 28 37" stroke={ASTRO.gold} strokeWidth="1.3" fill="none"/>
      <path d="M28 37 C28 24 25 16 25 6 C26 15 27 24 28 37" stroke={ASTRO.gold} strokeWidth="1.3" fill="none"/>
      <path d="M28 37 C28 24 31 16 31 6 C30 15 29 24 28 37" stroke={ASTRO.gold} strokeWidth="1.3" fill="none"/>
      <line x1="5" y1="37" x2="51" y2="37" stroke={ASTRO.gold} strokeWidth="1.1"/>
    </svg>
  );
}

function InstagramIcon({ size=15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={ASTRO.gold} strokeWidth="1.8" aria-hidden>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill={ASTRO.gold} stroke="none" />
    </svg>
  );
}

// ─── Buddha Icon ──────────────────────────────────────────────────────────────

function BuddhaIcon({ size = 56 }: { size?: number }) {
  return (
    <Image
      src="/assets/rinn-mukti-report/buddha.png"
      alt="Buddha"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}

// ─── Pen Circle ───────────────────────────────────────────────────────────────

function PenCircle({ size=54 }: { size?: number }) {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={c} cy={c} r={c - 2} fill="none" stroke={ASTRO.gold} strokeWidth="1.6"/>
      <circle cx={c} cy={c} r={c - 7} fill="none" stroke={ASTRO.gold} strokeWidth="0.7" opacity="0.5"/>
      <path d={`M${c-3} ${c+10} L${c} ${c-12} L${c+3} ${c+10} Z`} fill={ASTRO.maroon} stroke={ASTRO.gold} strokeWidth="0.8"/>
      <path d={`M${c-3} ${c+10} L${c} ${c+16} L${c+3} ${c+10} Z`} fill={ASTRO.gold}/>
      <path d={`M${c} ${c-12} L${c+3} ${c+10}`} stroke={ASTRO.goldLight} strokeWidth="0.8" opacity="0.7"/>
    </svg>
  );
}

// ─── Page Ribbon Badge ────────────────────────────────────────────────────────

function PageRibbonBadge({ pageNumber, pageLabel="PAGE" }: { pageNumber: string; pageLabel?: string }) {
  return (
    <div style={{ position: "relative", width: 66, flexShrink: 0 }}>
      <svg width="66" height="82" viewBox="0 0 66 82" fill="none">
        <rect x="0" y="0" width="66" height="70" fill={ASTRO.maroon}/>
        <rect x="0" y="0" width="66" height="70" fill="none" stroke={ASTRO.gold} strokeWidth="1.5"/>
        <line x1="5" y1="5" x2="61" y2="5" stroke={ASTRO.gold} strokeWidth="0.7" opacity="0.5"/>
        <line x1="5" y1="47" x2="61" y2="47" stroke={ASTRO.gold} strokeWidth="1"/>
        <polygon points="33,44 37,47 33,50 29,47" fill={ASTRO.gold}/>
        <polygon points="0,70 33,82 66,70" fill={ASTRO.maroon}/>
        <polyline points="0,70 33,82 66,70" fill="none" stroke={ASTRO.gold} strokeWidth="1.5"/>
      </svg>
      <div style={{ position:"absolute", top:7, left:0, right:0, display:"flex", flexDirection:"column", alignItems:"center", gap:1 }}>
        <span className="font-cinzel" style={{ fontWeight:700, fontSize:24, color:"#fff", lineHeight:1 }}>{pageNumber}</span>
        <span className="font-cinzel" style={{ fontWeight:700, fontSize:9, color:ASTRO.gold, letterSpacing:"0.12em" }}>{pageLabel}</span>
      </div>
    </div>
  );
}

// ─── Compass Star ─────────────────────────────────────────────────────────────

function CompassStar({ size = 34 }: { size?: number }) {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {[0,90,180,270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={deg}
          x1={c + c*0.94*Math.cos(rad)} y1={c + c*0.94*Math.sin(rad)}
          x2={c - c*0.94*Math.cos(rad)} y2={c - c*0.94*Math.sin(rad)}
          stroke={ASTRO.gold} strokeWidth="1.8"/>;
      })}
      {[45,135,225,315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={deg}
          x1={c + c*0.65*Math.cos(rad)} y1={c + c*0.65*Math.sin(rad)}
          x2={c - c*0.65*Math.cos(rad)} y2={c - c*0.65*Math.sin(rad)}
          stroke={ASTRO.gold} strokeWidth="1.1" opacity="0.7"/>;
      })}
      <circle cx={c} cy={c} r={c*0.2} fill={ASTRO.gold}/>
      <circle cx={c} cy={c} r={c*0.42} fill="none" stroke={ASTRO.gold} strokeWidth="0.8" opacity="0.5"/>
    </svg>
  );
}

// ─── Remedy Row ───────────────────────────────────────────────────────────────

function RemedyRow({ remedy, language="en", isLast=false }: {
  remedy: RemedyItem; language?: string; isLast?: boolean;
}) {
  const title   = language === "hi" ? (remedy.titleHi ?? remedy.title)     : remedy.title;
  const bullets = language === "hi" ? (remedy.bulletsHi ?? remedy.bullets) : remedy.bullets;

  return (
    <div style={{
      display:"flex", alignItems:"stretch", gap:0,
      border:`1.5px solid ${ASTRO.border}`, borderRadius:8,
      backgroundColor:"rgba(253,246,232,0.7)",
      overflow:"hidden",
      marginBottom: isLast ? 0 : 6,
    }}>
      <div style={{
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        padding:"10px 10px", gap:6, width:108, flexShrink:0,
        borderRight:`1.5px dashed rgba(184,134,11,0.5)`,
      }}>
        <DarkCircle size={54}>{remedy.icon}</DarkCircle>
        <p className="font-cinzel" style={{
          fontWeight:700, fontSize:9,
          color:ASTRO.maroon, letterSpacing:"0.06em",
          textAlign:"center", lineHeight:1.3, margin:0,
        }}>
          {title}
        </p>
      </div>

      <div style={{ flex:1, padding:"10px 14px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <ul style={{ margin:0, paddingLeft:16 }}>
          {bullets.map((b, i) => (
            <li key={i} className="font-serif" style={{
              fontSize:12.5, color:ASTRO.body,
              lineHeight:1.6, marginBottom: i < bullets.length-1 ? 3 : 0,
            }}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Default Data ─────────────────────────────────────────────────────────────

const defaultRemedies: RemedyItem[] = [
  {
    icon: <SaturnIcon />,
    title: "PLANETARY\nREMEDIES",
    titleHi: "ग्रह संबंधी\nउपाय",
    bullets: [
      "Strengthen weak planets and pacify troublesome planets.",
      "Wear recommended gemstones (if suitable) and use energilsed yantras.",
      "Offer specific items and perform rituals for planetary balance.",
    ],
    bulletsHi: [
      "कमजोर ग्रहों को मजबूत करें और पीड़ित ग्रहों को शांत करें।",
      "अपनी कुंडली के अनुसार रत्न धारण करें (यदि उपयुक्त हो) और ऊर्जावान यंत्रों का उपयोग करें।",
      "ग्रहों के संतुलन के लिए विशेष वस्तुओं का दान करें और निषिद्ध अनुष्ठान/उपाय करें।",
    ],
  },
  {
    icon: <CharityIcon />,
    title: "CHARITY\nRECOMMENDATIONS",
    titleHi: "दान एवं\nपरोपकार",
    bullets: [
      "Donate items related to weak or afflicted planets.",
      "Help the poor, needy, elderly and animals regularly.",
      "Charity removes debt karma and attracts divine blessings.",
    ],
    bulletsHi: [
      "कमजोर या पीड़ित ग्रहों से संबंधित वस्तुओं का दान करें।",
      "गरीब, जरूरतमंद, वृद्ध, रोगी और पशु-पक्षियों की नियमित सहायता करें।",
      "दान से ऋण कर्म कम होता है और दिव्य कृपा प्राप्त होती है।",
    ],
  },
  {
    icon: <OmIcon />,
    title: "MANTRAS",
    titleHi: "मंत्र जाप",
    bullets: [
      "Chant powerful mantras of specific planets daily.",
      "Recommended japa count: 108, 27 or 11 malas as per guidance.",
      "Consistent chanting purifies karma and opens financial doors.",
    ],
    bulletsHi: [
      "प्रतिदिन पीड़ित ग्रहों के शक्तिशाली मंत्रों का जाप करें।",
      "अनुशंसित जाप संख्या: 108, 27 या 11 माला (गुरु के मार्गदर्शन अनुसार)।",
      "नियमित मंत्र जाप से ऋण कर्म शुद्ध होते हैं और आर्थिक मार्ग खुलते हैं।",
    ],
  },
  {
    icon: <TempleIcon />,
    title: "TEMPLE\nVISITS",
    titleHi: "मंदिर दर्शन\nएवं पूजा",
    bullets: [
      "Visit temples of specific planets and deities.",
      "Offer prayers, light lamps and perform abhishekam.",
      "Suggested temples help in removing obstacles and debt burdens.",
    ],
    bulletsHi: [
      "संबंदित ग्रहों और देवताओं के प्रसिद्ध मंदिरों में दर्शन करें।",
      "दीपक, धुप, नैवेध अर्पित करें और विधिवत पूजा-अर्चना करें।",
      "नियमित मंदिर दर्शन से बाधाएं दूर होती हैं और ऋण भार कम होता है।",
    ],
  },
  {
    icon: <FastingIcon />,
    title: "FASTING\nSUGGESTIONS",
    titleHi: "उपवास\nसुझाव",
    bullets: [
      "Observe fasts on specific days of the week related to your planets.",
      "Recommended fasts: Ekadashi, Pradosh, Sankashi Chaturthi, Purnima, Amavasya, etc.",
      "Fasting builds discipline and reduces negative karma.",
    ],
    bulletsHi: [
      "अपने ग्रहों के अनुसार सप्ताह के विशेष दिनों का उपवास रखें।",
      "अनुशंसित उपवास: एकादशी, प्रदोष, संकष्टी चतुर्थी, पूर्णिमा, अमावस्या आदि।",
      "उपवास से मन और शरीर शुद्ध होते हैं और नकारात्मक कर्मों का क्षय होता है।",
    ],
  },
  {
    icon: <MeditationIcon />,
    title: "SPIRITUAL\nPRACTICES",
    titleHi: "आध्यात्मिक\nप्रथाएँ",
    bullets: [
      "Daily meditation, pranayama and grounding exercises.",
      "Maintain gratitude journal and positive affirmations.",
      "Read spiritual texts and listen to divine music.",
      "These practices elevate your vibration and attract abundance.",
    ],
    bulletsHi: [
      "प्रतिदिन ध्यान, प्राणायाम और सूर्य नमस्कार करें।",
      "कृतज्ञता डायरी लिखें और सकारात्मक विचारों का अभ्यास करें।",
      "धार्मिक ग्रंथों का पाठ करें और ईश्वर का नाम स्मरण करें।",
      "ये अभ्यास आपकी ऊर्जा को ऊँचा उठाकर धन और समृद्धि को आकर्षित करते हैं।",
    ],
  },
];

// ─── Main Export ────────────────────────────────────────────────
export default function RinMuktiRemedies({
  pageNumber = "10",
  language = "en",
  purposeText = "These remedies are carefully selected based on your birth chart, planetary positions, dasha periods and debt karma indicators. Following them with faith and discipline helps reduce debt burden, remove financial blockages and strengthen the flow of wealth, prosperity and peace.",
  purposeTextHi = "ये उपाय आपकी जन्म कुंडली, ग्रह स्थिति, दशा अवधि और ऋण कर्म संकेतकों के आधार पर विशेष रूप से चुने गए हैं। इन उपायों को श्रद्धा, नियमितता और अनुशासन के साथ करने से ऋण भार कम होता है, आर्थिक अवरोध दूर होते हैं और धन, समृद्धि एवं शांति का प्रवाह बढ़ता है।",
  remedies = defaultRemedies,
  disclaimerText = "Perform these remedies with faith, consistency and purity. Combine spiritual practices with smart financial planning and responsible actions. This will help you break free from debt karma, attract wealth, stability and create a prosperous and peaceful life.",
  disclaimerTextHi = "इन उपायों को श्रद्धा, नियमितता और शुद्ध भाव से करें। आध्यात्मिक साधना, सही वित्तीय योजना और जिम्मेदार कार्यों के साथ जब आप इन उपायों को अपनाते हैं, तो ऋण कर्म से मुक्ति मिलती है, आर्थिक स्थिरता आती है, धन का प्रवाह बढ़ता है और जीवन में शांति, सुख एवं समृद्धि स्थापित होती है।",
  website = "www.astroaarambh.com",
  phone = "7405923555",
  instagram = "astroaarambhofficial",
}: RinMuktiRemediesProps) {
  const isHi = language === "hi";

  const t = {
    title:        isHi ? "ऋण मुक्ति के उपाय"       : "RIN MUKTI REMEDIES",
    personalized: isHi ? "व्यक्तिगत एवं विशेष उपाय" : "PERSONALIZED REMEDIES",
  };

  return (
    <BusinessNameReportPageShell
      padding="14px 32px 10px"
      pageNumber={pageNumber}
      style={{ backgroundColor: ASTRO.parchment }}
    >
      <PageOrnamentalFrame />

      <div style={{ position:"relative", display:"flex", flexDirection:"column", height:"100%", gap:0 }}>

        {/* ── HEADER WITH PAGE BADGE ── */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:4 }}>
          
          <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", paddingTop:4 }}>
            <p className="font-cinzel" style={{ fontWeight:700, fontSize:22, color:ASTRO.maroon, letterSpacing:"0.08em", lineHeight:1, margin:"4px 0 0" }}>
              ASTRO AARAMBH
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:2 }}>
              <p className="font-cinzel" style={{ fontWeight:600, fontSize:14, color:ASTRO.body, letterSpacing:"0.1em", margin:0 }}>
                RINN MUKTI REPORT
              </p>
            </div>
          </div>
          
    
        </div>

        {/* ── ORNAMENT DIVIDER ── */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:6 }}>
          <OrnamentDivider width={280} />
        </div>

        {/* ── TITLE ── */}
        <div style={{ textAlign:"center", marginBottom:6 }}>
          <h1 className="font-cinzel" style={{
            fontWeight:700,
            fontSize: isHi ? 28 : 34,
            color:ASTRO.maroon, letterSpacing:"0.04em", lineHeight:1.1, margin:0,
          }}>
            {t.title}
          </h1>
        </div>

        {/* ── PURPOSE BANNER ── */}
        <div style={{ marginBottom:6 }}>
          <DarkBanner>PURPOSE</DarkBanner>
          
          {/* PURPOSE BOX with Buddha icon and description */}
          <div style={{
            border:`1.5px solid ${ASTRO.border}`, borderRadius:8, marginTop:4,
            padding:"12px 14px",
            backgroundColor:"rgba(253,246,232,0.7)",
            display:"flex", gap:14, alignItems:"flex-start",
          }}>
            <div style={{ flexShrink:0, marginTop:2 }}>
              <BuddhaIcon size={60} />
            </div>
            <p className="font-serif" style={{ fontSize:12.5, color:ASTRO.body, lineHeight:1.65, flex:1, margin:0 }}>
              {isHi ? purposeTextHi : purposeText}
            </p>
          </div>
        </div>

        {/* ── PERSONALIZED REMEDIES banner ── */}
        <div style={{ marginBottom:8, marginTop:6 }}>
          <DarkBanner>{t.personalized}</DarkBanner>
        </div>

        {/* ── REMEDY ROWS ── */}
        <div style={{    display:"flex", flexDirection:"column" }}>
          {remedies.map((remedy, i) => (
            <RemedyRow
              key={i}
              remedy={remedy}
              language={language}
              isLast={i === remedies.length - 1}
            />
          ))}
        </div>

        {/* ── DISCLAIMER BOX ── */}
        <div style={{
          border:`1.5px solid ${ASTRO.border}`, borderRadius:8,
          padding:"10px 14px",
          backgroundColor:"rgba(253,246,232,0.7)",
          display:"flex", gap:12, alignItems:"center",
           marginTop: 5 
        }}>
          <div style={{ flexShrink:0 }}>
            <LotusIcon size={52} />
          </div>
          <p className="font-serif" style={{ fontStyle:"italic", fontSize:11, color:ASTRO.body, lineHeight:1.65, flex:1, margin:0 }}>
            {isHi ? disclaimerTextHi : disclaimerText}
          </p>
        </div>

        {/* ── FOOTER ── */}
        <div className="font-serif" style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:18,
          color:ASTRO.body, fontSize:13, marginTop:10,
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:5 }}>
            <Globe size={14} strokeWidth={1.8} style={{ color:ASTRO.gold }} />
            <span>{website}</span>
          </div>
          <div style={{ width:1, height:12, backgroundColor:ASTRO.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:5 }}>
            <Phone size={14} strokeWidth={1.8} style={{ color:ASTRO.gold }} />
            <span>{phone}</span>
          </div>
          <div style={{ width:1, height:12, backgroundColor:ASTRO.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:5 }}>
            <InstagramIcon size={14} />
            <span>{instagram}</span>
          </div>
        </div>

      </div>
    </BusinessNameReportPageShell>
  );
}