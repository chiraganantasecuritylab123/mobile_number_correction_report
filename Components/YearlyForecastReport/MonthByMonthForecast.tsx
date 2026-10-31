"use client";

import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { Briefcase, CalendarDays, Heart } from "lucide-react";
import type { ReactNode } from "react";
import ReportPageShell from "../ReportPageShell";
import { CornerFlourish } from "../CoverPageDecorations";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const DISPLAY_FONT = `${libre.style.fontFamily}, "Nirmala UI", Georgia, "Times New Roman", serif`;

const COLORS = {
  maroon: "#5B0C14",
  gold: "#C4A04A",
  goldDeep: "#A67C32",
  body: "#343436",
  rule: "rgba(176, 132, 52, 0.4)",
} as const;

const MONTH_ART = {
  jan: "/assets/yearly-forecast-report/Golden_Moonlit_Mountain_Lake_Emblem-removebg-preview.png",
  feb: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener-removebg-preview.png",
  mar: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener__1_-removebg-preview.png",
  apr: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener__2_-removebg-preview.png",
  may: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener__3_-removebg-preview.png",
  jun: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener__4_-removebg-preview.png",
  jul: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener__6_-removebg-preview.png",
  aug: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please_gener__5_-removebg-preview.png",
  sep: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please__2_-removebg-preview.png",
  oct: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please__3_-removebg-preview.png",
  nov: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please-removebg-preview.png",
  dec: "/assets/yearly-forecast-report/make_proepr_round_shap_image_png_image_generate_please__1_-removebg-preview.png",
} as const;

export type MonthPair = "jan-feb" | "mar-apr" | "may-jun" | "jul-aug" | "sep-oct" | "nov-dec";

export type MonthByMonthForecastProps = {
  language?: "en" | "hi";
  pageNumber?: string;
  forecastYear?: number | string;
  pair?: MonthPair;
};

type MonthRow = {
  key: string;
  icon: "career" | "money" | "love" | "health" | "dates" | "remedy";
  label: string;
  body: string;
  extraLabel?: string;
  extraBody?: string;
};

const SHARED = {
  en: {
    titleTop: "5. Month-by-Month",
    titleBottom: "Forecast",
  },
  hi: {
    titleTop: "5. माह-दर-माह",
    titleBottom: "भविष्यफल",
  },
} as const;

const PAIRS = {
  en: {
    "jan-feb": {
      introLead: "July and September are your strongest months; February and October ask for the most care.",
      introRest: " Each month combines your Personal Month number with the planets active at that time.",
      months: [
      {
        key: "jan",
        art: "jan" as const,
        headingBefore: "January 2027 — Quiet Planning (Personal Month ",
        headingNum: "2",
        headingAfter: ")",
        caption: "JANUARY",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Finalise your 2027 plan. Jupiter moves back into Cancer on 25 Jan, so hold big launches until later.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Sun period favours collections. Follow up on pending payments.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Listen more than you speak. Partners are sensitive this month.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Fix your sleep routine; it sets the tone for the year.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 10, 19, 28",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Offer water to the Sun at sunrise every Sunday.",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "feb",
        art: "feb" as const,
        headingBefore: "February 2027 — Speak Now, Sign Later (Personal Month ",
        headingNum: "3",
        headingAfter: ")",
        caption: "FEBRUARY",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Excellent for content, marketing and visibility. Avoid signing partnership deals in the eclipse week (around 6 Feb) and during Mercury retrograde (from 10 Feb).",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Review expenses. Avoid lending money this month.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Small misunderstandings are likely. Clarify before you react.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Stress shows up quickly. Take short breaks during work.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 9",
            extraLabel: "Careful:",
            extraBody: "6, 8, 10–28 for contracts",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Worship Lord Ganesha on Wednesdays.",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "mar-apr": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "mar",
        art: "mar" as const,
        headingBefore: "March 2027 — Build the System (Personal Month ",
        headingNum: "4",
        headingAfter: ")",
        caption: "MARCH",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Moon Antardasha begins on 12 Mar. Good for hiring, processes and fixing what is broken. Competition rises, and you win through effort.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Steady. Make a clear budget for the rest of the year.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Emotional month. Spend time with your mother and family.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Drink enough water and keep meal timings regular.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "10, 18, 19, 27, 28",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Offer water or milk to Shivling on Mondays.",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "apr",
        art: "apr" as const,
        headingBefore: "April 2027 — Open New Doors (Personal Month ",
        headingNum: "5",
        headingAfter: ")",
        caption: "APRIL",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Jupiter turns direct on 13 Apr. New contacts, work travel and new markets look promising.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Good time to test a new income source, on a small scale first.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Social and outgoing month. Good for networking.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Don't overload your travel schedule.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 10, 19, 27",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Donate to a student or school on a Thursday.",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "may-jun": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "may",
        art: "may" as const,
        headingBefore: "May 2027 — Home and Responsibility (Personal Month ",
        headingNum: "6",
        headingAfter: ")",
        caption: "MAY",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Focus on team care and client service rather than expansion.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Family and home expenses rise. Wait until after 3 June for big property decisions.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Best month of the first half for family harmony.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Light daily exercise keeps energy stable.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 9, 10, 18, 28",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Light a sesame-oil lamp under a peepal tree on Saturdays.",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "jun",
        art: "jun" as const,
        headingBefore: "June 2027 — Shift in Gears (Personal Month ",
        headingNum: "7",
        headingAfter: ")",
        caption: "JUNE",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Saturn enters your 10th house on 3 Jun. Workload rises, and so does your authority. Plan in June, then execute in July.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Jupiter enters your 2nd house on 26 Jun. Your income phase of the year begins.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "You may need personal space. Explain it to your family so it isn't misread.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Meditation and rest help more than extra effort this month.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 9, 10",
            extraLabel: "Careful:",
            extraBody: "11 Jun – 5 Jul for contracts (Mercury retrograde)",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "From 26 Jun, chant “Om Gurave Namah” 108 times on Thursdays.",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "jul-aug": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "jul",
        art: "jul" as const,
        headingBefore: "July 2027 — Results and Rewards (Personal Month ",
        headingNum: "8",
        headingAfter: ")",
        caption: "JULY",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "One of your best months. Close deals, ask for the promotion, scale what works.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Strong. A good month for planned investments, made after research and with proper advice.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Supportive month. People around you back your plans.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Good, but don't overwork just because things are going well.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "9, 10, 18, 19, 27",
            extraLabel: "Careful:",
            extraBody: "30–31 (eclipse window begins)",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Donate wheat and jaggery on a Sunday.",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "aug",
        art: "aug" as const,
        headingBefore: "August 2027 — Close, Clear, Celebrate (Personal Month ",
        headingNum: "9",
        headingAfter: ")",
        caption: "AUGUST",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "The total solar eclipse on 2 Aug falls close to your Lagna. Don't launch anything new between 30 Jul and 5 Aug. From 10 Aug, finish pending work.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Settle old dues and close loose ends.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Let go of old grudges. Your birthday (18 Aug) is a good day to reconnect with people.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Rest well in the first week of the month.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "10, 18, 19, 27, 28",
            extraLabel: "Careful:",
            extraBody: "1–5, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "On eclipse day, chant “Om Namah Shivaya” and donate food after the eclipse ends.",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "sep-oct": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "sep",
        art: "sep" as const,
        headingBefore: "September 2027 — Your Real New Year (Personal Month ",
        headingNum: "1",
        headingAfter: ")",
        caption: "SEPTEMBER",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Best month of 2027 to launch a new brand, product or role. Personal Month 1 inside Personal Year 1 doubles the start energy.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Good flow. Jupiter in your 2nd house continues to support income.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "You feel confident. Make sure your partner also feels heard.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "High energy. Start a fitness habit now and it will last.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 9, 10, 18, 19, 27, 28",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Do Surya Namaskar every morning.",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "oct",
        art: "oct" as const,
        headingBefore: "October 2027 — The Handover (Personal Month ",
        headingNum: "2",
        headingAfter: ")",
        caption: "OCTOBER",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Rahu Mahadasha begins on 11 Oct, during Mercury retrograde (8–29 Oct). Avoid hasty decisions. Let the new period settle before major moves.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Be careful with offers that look too good to be true. Rahu can make risky deals look attractive.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Sensitive month. Communicate clearly and patiently.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Watch sleep and screen time.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 9",
            extraLabel: "Careful:",
            extraBody: "8–29 Oct for contracts; 11 Oct for puja, not for launches",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "From 11 Oct, chant “Om Raam Rahave Namah” 108 times on Saturdays.",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "nov-dec": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "nov",
        art: "nov" as const,
        headingBefore: "November 2027 — Visible Growth (Personal Month ",
        headingNum: "3",
        headingAfter: ")",
        caption: "NOVEMBER",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Recognition, media and networking. Jupiter enters Virgo (10th from your Moon) on 27 Nov and supports your public image.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Good month, with a strong festive-season flow.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Warm and social.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Good. Keep festive eating in balance.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 9, 10, 18, 19, 27, 28",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Donate yellow items (chana dal, turmeric) on Thursdays.",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "dec",
        art: "dec" as const,
        headingBefore: "December 2027 — Foundation for 2028 (Personal Month ",
        headingNum: "4",
        headingAfter: ")",
        caption: "DECEMBER",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "Career:",
            body: "Build systems and teams that can carry Rahu-era growth.",
          },
          {
            key: "money",
            icon: "money",
            label: "Money:",
            body: "Plan the 2028 budget and long-term savings.",
          },
          {
            key: "love",
            icon: "love",
            label: "Relationships:",
            body: "Year-end family time strengthens bonds.",
          },
          {
            key: "health",
            icon: "health",
            label: "Health:",
            body: "Keep a winter routine and stay active.",
          },
          {
            key: "dates",
            icon: "dates",
            label: "Best dates:",
            body: "1, 10, 19, 28",
            extraLabel: "Careful:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "Remedy:",
            body: "Donate black sesame or a blanket to someone in need on a Saturday.",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
  },
  hi: {
    "jan-feb": {
      introLead: "जुलाई और सितंबर आपके सबसे मजबूत महीने हैं; फरवरी और अक्टूबर सबसे अधिक सावधानी माँगते हैं।",
      introRest: " प्रत्येक महीना आपके व्यक्तिगत माह अंक को उस समय सक्रिय ग्रहों के साथ जोड़ता है।",
      months: [
      {
        key: "jan",
        art: "jan" as const,
        headingBefore: "जनवरी 2027 — शांत योजना (व्यक्तिगत महीना ",
        headingNum: "2",
        headingAfter: ")",
        caption: "जनवरी",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "अपनी 2027 की योजना अंतिम रूप दें। गुरु 25 जनवरी को कर्क में वापस आते हैं, इसलिए बड़े शुभारंभ बाद के लिए रखें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "सूर्य काल वसूली के अनुकूल है। लंबित भुगतानों का अनुसरण करें।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "बोलने से अधिक सुनें। इस महीने साथी संवेदनशील होते हैं।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "नींद की दिनचर्या सुधारें; यह पूरे वर्ष का स्वर तय करती है।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 10, 19, 28",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "प्रत्येक रविवार सूर्योदय पर सूर्य को जल अर्पित करें।",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "feb",
        art: "feb" as const,
        headingBefore: "फरवरी 2027 — अभी बोलें, बाद में हस्ताक्षर करें (व्यक्तिगत महीना ",
        headingNum: "3",
        headingAfter: ")",
        caption: "फरवरी",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "सामग्री, विपणन और दृश्यता के लिए उत्कृष्ट। ग्रहण सप्ताह (लगभग 6 फरवरी) और बुध वक्री (10 फरवरी से) में साझेदारी सौदों पर हस्ताक्षर न करें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "खर्चों की समीक्षा करें। इस महीने धन उधार देने से बचें।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "छोटी गलतफहमियाँ संभव हैं। प्रतिक्रिया से पहले स्पष्ट करें।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "तनाव जल्दी दिखता है। काम के दौरान छोटे विराम लें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 9",
            extraLabel: "सावधानी:",
            extraBody: "अनुबंधों के लिए 6, 8, 10–28",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "बुधवार को भगवान गणेश की पूजा करें।",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "mar-apr": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "mar",
        art: "mar" as const,
        headingBefore: "मार्च 2027 — व्यवस्था बनाएँ (व्यक्तिगत महीना ",
        headingNum: "4",
        headingAfter: ")",
        caption: "मार्च",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "चंद्र अंतर्दशा 12 मार्च को प्रारंभ होती है। भर्ती, प्रक्रियाएँ और जो टूटा है उसे सुधारने के लिए अच्छा। प्रतिस्पर्धा बढ़ती है, और आप परिश्रम से जीतते हैं।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "स्थिर। शेष वर्ष के लिए स्पष्ट बजट बनाएँ।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "भावनात्मक महीना। माता और परिवार के साथ समय बिताएँ।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "पर्याप्त जल पिएँ और भोजन का समय नियमित रखें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "10, 18, 19, 27, 28",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "सोमवार को शिवलिंग पर जल या दूध चढ़ाएँ।",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "apr",
        art: "apr" as const,
        headingBefore: "अप्रैल 2027 — नए द्वार खोलें (व्यक्तिगत महीना ",
        headingNum: "5",
        headingAfter: ")",
        caption: "अप्रैल",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "गुरु 13 अप्रैल को मार्गी होते हैं। नए संपर्क, कार्य यात्रा और नए बाज़ार आशाजनक लगते हैं।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "नए आय स्रोत को छोटे पैमाने पर आज़माने का अच्छा समय।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "सामाजिक और बहिर्मुखी महीना। नेटवर्किंग के लिए अच्छा।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "यात्रा कार्यक्रम को अधिक न भरें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 10, 19, 27",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "गुरुवार को किसी विद्यार्थी या विद्यालय को दान दें।",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "may-jun": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "may",
        art: "may" as const,
        headingBefore: "मई 2027 — घर और जिम्मेदारी (व्यक्तिगत महीना ",
        headingNum: "6",
        headingAfter: ")",
        caption: "मई",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "विस्तार की बजाय टीम की देखभाल और ग्राहक सेवा पर ध्यान दें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "परिवार और घर के खर्च बढ़ते हैं। बड़ी संपत्ति संबंधी निर्णय 3 जून के बाद करें।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "पहले अर्ध का पारिवारिक सामंजस्य के लिए सबसे अच्छा महीना।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "हल्का दैनिक व्यायाम ऊर्जा स्थिर रखता है।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 9, 10, 18, 28",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "शनिवार को पीपल वृक्ष के नीचे तिल के तेल का दीपक जलाएँ।",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "jun",
        art: "jun" as const,
        headingBefore: "जून 2027 — गति का बदलाव (व्यक्तिगत महीना ",
        headingNum: "7",
        headingAfter: ")",
        caption: "जून",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "शनि 3 जून को आपके दशम भाव में प्रवेश करते हैं। कार्यभार बढ़ता है, और आपका अधिकार भी। जून में योजना बनाएँ, जुलाई में क्रियान्वित करें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "गुरु 26 जून को आपके द्वितीय भाव में प्रवेश करते हैं। वर्ष का आय चरण प्रारंभ होता है।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "आपको व्यक्तिगत स्थान चाहिए हो सकता है। परिवार को समझाएँ ताकि यह गलत न समझा जाए।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "इस महीने अतिरिक्त प्रयास से अधिक ध्यान और विश्राम सहायक हैं।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 9, 10",
            extraLabel: "सावधानी:",
            extraBody: "अनुबंधों के लिए 11 जून – 5 जुलाई (बुध वक्री)",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "26 जून से गुरुवार को 108 बार “ॐ गुरवे नमः” का जाप करें।",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "jul-aug": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "jul",
        art: "jul" as const,
        headingBefore: "जुलाई 2027 — परिणाम और पुरस्कार (व्यक्तिगत महीना ",
        headingNum: "8",
        headingAfter: ")",
        caption: "जुलाई",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "आपके सर्वोत्तम महीनों में से एक। सौदे पूरे करें, पदोन्नति माँगें, जो काम करता है उसे बढ़ाएँ।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "मजबूत। शोध और उचित सलाह के बाद नियोजित निवेश के लिए अच्छा महीना।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "सहयोगी महीना। आपके आसपास के लोग आपकी योजनाओं का समर्थन करते हैं।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "अच्छा, पर केवल इसलिए अधिक काम न करें कि सब ठीक चल रहा है।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "9, 10, 18, 19, 27",
            extraLabel: "सावधानी:",
            extraBody: "30–31 (ग्रहण अवधि प्रारंभ)",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "रविवार को गेहूँ और गुड़ दान करें।",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "aug",
        art: "aug" as const,
        headingBefore: "अगस्त 2027 — समेटें, स्पष्ट करें, उत्सव मनाएँ (व्यक्तिगत महीना ",
        headingNum: "9",
        headingAfter: ")",
        caption: "अगस्त",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "2 अगस्त का पूर्ण सूर्य ग्रहण आपके लग्न के निकट पड़ता है। 30 जुलाई से 5 अगस्त के बीच कुछ नया न शुरू करें। 10 अगस्त से लंबित कार्य पूरे करें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "पुराने बकाया चुकाएँ और अधूरे काम समेटें।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "पुरानी शिकायतें छोड़ें। आपका जन्मदिन (18 अगस्त) लोगों से फिर जुड़ने का अच्छा दिन है।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "महीने के पहले सप्ताह में अच्छा विश्राम करें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "10, 18, 19, 27, 28",
            extraLabel: "सावधानी:",
            extraBody: "1–5, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "ग्रहण के दिन “ॐ नमः शिवाय” का जाप करें और ग्रहण समाप्त होने के बाद भोजन दान करें।",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "sep-oct": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "sep",
        art: "sep" as const,
        headingBefore: "सितंबर 2027 — आपका वास्तविक नववर्ष (व्यक्तिगत महीना ",
        headingNum: "1",
        headingAfter: ")",
        caption: "सितंबर",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "नई ब्रांड, उत्पाद या भूमिका शुरू करने के लिए 2027 का सर्वश्रेष्ठ महीना। व्यक्तिगत वर्ष 1 के अंदर व्यक्तिगत महीना 1 प्रारंभ ऊर्जा को दोगुना करता है।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "अच्छा प्रवाह। आपके द्वितीय भाव में गुरु आय का समर्थन जारी रखते हैं।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "आप आत्मविश्वासी महसूस करते हैं। सुनिश्चित करें कि साथी भी सुना हुआ महसूस करे।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "उच्च ऊर्जा। अभी फिटनेस की आदत शुरू करें, यह टिकेगी।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 9, 10, 18, 19, 27, 28",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "प्रतिदिन प्रातः सूर्य नमस्कार करें।",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "oct",
        art: "oct" as const,
        headingBefore: "अक्टूबर 2027 — हस्तांतरण (व्यक्तिगत महीना ",
        headingNum: "2",
        headingAfter: ")",
        caption: "अक्टूबर",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "राहु महादशा 11 अक्टूबर को शुरू होती है, बुध वक्री (8–29 अक्टूबर) के दौरान। जल्दबाज़ी वाले निर्णय न लें। बड़े कदमों से पहले नई अवधि को स्थिर होने दें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "बहुत अच्छे दिखने वाले प्रस्तावों से सावधान रहें। राहु जोखिम भरे सौदों को आकर्षक बना सकते हैं।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "संवेदनशील महीना। स्पष्ट और धैर्य से बात करें।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "नींद और स्क्रीन समय पर ध्यान दें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 9",
            extraLabel: "सावधानी:",
            extraBody: "अनुबंधों के लिए 8–29 अक्टूबर; 11 अक्टूबर पूजा के लिए, शुभारंभ के लिए नहीं",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "11 अक्टूबर से शनिवार को 108 बार “ॐ राम राहवे नमः” का जाप करें।",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
    "nov-dec": {
      introLead: "",
      introRest: "",
      months: [
      {
        key: "nov",
        art: "nov" as const,
        headingBefore: "नवंबर 2027 — दिखाई देने वाली वृद्धि (व्यक्तिगत महीना ",
        headingNum: "3",
        headingAfter: ")",
        caption: "नवंबर",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "पहचान, मीडिया और नेटवर्किंग। गुरु 27 नवंबर को कन्या (आपके चंद्र से दशम) में प्रवेश करते हैं और आपकी सार्वजनिक छवि का समर्थन करते हैं।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "अच्छा महीना, त्योहारी मौसम का मजबूत प्रवाह।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "गर्मजोशी भरे और सामाजिक।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "अच्छा। त्योहारी भोजन संतुलित रखें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 9, 10, 18, 19, 27, 28",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "गुरुवार को पीली वस्तुएँ (चना दाल, हल्दी) दान करें।",
          },
        ] satisfies MonthRow[],
      },
      {
        key: "dec",
        art: "dec" as const,
        headingBefore: "दिसंबर 2027 — 2028 की नींव (व्यक्तिगत महीना ",
        headingNum: "4",
        headingAfter: ")",
        caption: "दिसंबर",
        year: "2027",
        rows: [
          {
            key: "career",
            icon: "career",
            label: "करियर:",
            body: "ऐसी प्रणालियाँ और टीमें बनाएँ जो राहु-काल की वृद्धि संभाल सकें।",
          },
          {
            key: "money",
            icon: "money",
            label: "धन:",
            body: "2028 का बजट और दीर्घकालिक बचत की योजना बनाएँ।",
          },
          {
            key: "love",
            icon: "love",
            label: "संबंध:",
            body: "वर्षांत का पारिवारिक समय बंधनों को मजबूत करता है।",
          },
          {
            key: "health",
            icon: "health",
            label: "स्वास्थ्य:",
            body: "शीतकालीन दिनचर्या रखें और सक्रिय रहें।",
          },
          {
            key: "dates",
            icon: "dates",
            label: "शुभ तिथियाँ:",
            body: "1, 10, 19, 28",
            extraLabel: "सावधानी:",
            extraBody: "8, 17, 26",
          },
          {
            key: "remedy",
            icon: "remedy",
            label: "उपाय:",
            body: "शनिवार को काला तिल या किसी जरूरतमंद को कंबल दान करें।",
          },
        ] satisfies MonthRow[],
      },
    ],
    },
  },
} as const;

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold" style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
      {children}
    </span>
  );
}

function DiamondRule({ className = "h-[15px] w-[168px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 228 20" className={className} fill="none" aria-hidden>
      <line x1="4" y1="10" x2="88" y2="10" stroke={COLORS.gold} strokeWidth="1.15" />
      <circle cx="94" cy="10" r="1.35" fill={COLORS.goldDeep} />
      <path d="M114 1.5L120.5 10L114 18.5L107.5 10Z" fill={COLORS.goldDeep} />
      <path d="M114 4.4L117.6 10L114 15.6L110.4 10Z" fill="#F8E7C2" />
      <circle cx="134" cy="10" r="1.35" fill={COLORS.goldDeep} />
      <line x1="140" y1="10" x2="224" y2="10" stroke={COLORS.gold} strokeWidth="1.15" />
    </svg>
  );
}

function SideSpark() {
  return (
    <svg viewBox="0 0 58 16" className="h-[12px] w-[40px] shrink-0" fill="none" aria-hidden>
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
      <path d="M4 16C4 8 9 4 18 4" stroke={COLORS.gold} strokeWidth="1.35" strokeLinecap="round" />
      <path d="M8 14C9 9 13 7 17 8" stroke={COLORS.goldDeep} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function OrnateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[6px] ${className}`}
      style={{
        border: `1.5px solid ${COLORS.gold}`,
        boxShadow: "inset 0 0 0 1px rgba(196,160,74,0.28)",
        background: "rgba(255, 248, 232, 0.46)",
      }}
    >
      <CornerFlourish className="pointer-events-none absolute left-[-2px] top-[-2px] h-[52px] w-[52px]" />
      <CornerFlourish className="pointer-events-none absolute right-[-2px] top-[-2px] h-[52px] w-[52px] rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] left-[-2px] h-[52px] w-[52px] -rotate-90" />
      <CornerFlourish className="pointer-events-none absolute bottom-[-2px] right-[-2px] h-[52px] w-[52px] rotate-180" />
      {children}
    </div>
  );
}

function CoinsMark() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <ellipse cx="12" cy="8" rx="7" ry="3.2" {...stroke} strokeWidth="1.7" />
      <path d="M5 8V12C5 13.8 8.1 15.2 12 15.2C15.9 15.2 19 13.8 19 12V8" {...stroke} strokeWidth="1.7" />
      <path d="M5 12V16C5 17.8 8.1 19.2 12 19.2C15.9 19.2 19 17.8 19 16V12" {...stroke} strokeWidth="1.7" />
    </svg>
  );
}

function LotusMark() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <path d="M12 21C12 21 9.5 14 12 6C14.5 14 12 21 12 21Z" {...stroke} strokeWidth="1.6" />
      <path d="M12 21C12 21 6 16 5 10C9 13 12 18 12 21Z" {...stroke} strokeWidth="1.55" />
      <path d="M12 21C12 21 18 16 19 10C15 13 12 18 12 21Z" {...stroke} strokeWidth="1.55" />
      <path d="M12 21C12 21 3.5 18 3 13C8 15.5 12 19 12 21Z" {...stroke} strokeWidth="1.45" />
      <path d="M12 21C12 21 20.5 18 21 13C16 15.5 12 19 12 21Z" {...stroke} strokeWidth="1.45" />
    </svg>
  );
}

function PrayerHands() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <path d="M11 21V11.5C11 8.8 11.6 6.4 12 4.6" {...stroke} strokeWidth="1.55" />
      <path d="M13 21V11.5C13 8.8 12.4 6.4 12 4.6" {...stroke} strokeWidth="1.55" />
      <path d="M9.2 20.5C7.4 18.8 6.6 15.6 7.4 12.6C8 10.4 9.4 8.4 11 7" {...stroke} strokeWidth="1.6" />
      <path d="M14.8 20.5C16.6 18.8 17.4 15.6 16.6 12.6C16 10.4 14.6 8.4 13 7" {...stroke} strokeWidth="1.6" />
      <path d="M8.2 14C7 13 6.4 11.4 6.8 10" {...stroke} strokeWidth="1.35" />
      <path d="M15.8 14C17 13 17.6 11.4 17.2 10" {...stroke} strokeWidth="1.35" />
    </svg>
  );
}

function RowIcon({ name }: { name: MonthRow["icon"] }) {
  const props = { size: 18, strokeWidth: 1.9, color: COLORS.goldDeep } as const;
  if (name === "career") return <Briefcase {...props} />;
  if (name === "money") return <CoinsMark />;
  if (name === "love") return <Heart {...props} />;
  if (name === "health") return <LotusMark />;
  if (name === "dates") return <CalendarDays {...props} />;
  return <PrayerHands />;
}

function IconBadge({ name }: { name: MonthRow["icon"] }) {
  return (
    <div
      className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full"
      style={{
        border: `1.6px solid ${COLORS.goldDeep}`,
        background: "rgba(246,220,168,0.55)",
      }}
    >
      <RowIcon name={name} />
    </div>
  );
}

function Spark({ cx, cy, r = 1.2 }: { cx: number; cy: number; r?: number }) {
  const s = r * 2.2;
  return (
    <path
      d={`M${cx} ${cy - s}L${cx + r * 0.35} ${cy - r * 0.35}L${cx + s} ${cy}L${cx + r * 0.35} ${cy + r * 0.35}L${cx} ${cy + s}L${cx - r * 0.35} ${cy + r * 0.35}L${cx - s} ${cy}L${cx - r * 0.35} ${cy - r * 0.35}Z`}
      fill={COLORS.gold}
    />
  );
}

function JanuaryArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <Spark cx={38} cy={36} r={1.1} />
      <Spark cx={122} cy={32} r={0.9} />
      <Spark cx={48} cy={58} r={0.75} />
      <Spark cx={112} cy={50} r={0.8} />
      <Spark cx={28} cy={72} r={0.7} />
      <circle cx="86" cy="46" r="11" fill="rgba(232,199,106,0.45)" stroke={COLORS.gold} strokeWidth="1.4" />
      <circle cx="90" cy="43" r="7.5" fill="rgba(255,248,230,0.5)" stroke="none" />
      <path d="M18 118L52 78L72 102" {...stroke} strokeWidth="1.7" />
      <path d="M58 118L88 62L142 118" {...stroke} strokeWidth="1.8" />
      <path d="M52 78L60 94L72 102" {...stroke} strokeWidth="1.05" opacity="0.6" />
      <path d="M88 62L100 88L118 104" {...stroke} strokeWidth="1.05" opacity="0.6" />
      <path d="M34 118L34 102L28 108L34 102L40 110" {...stroke} strokeWidth="1.3" />
      <path d="M46 118L46 96L40 104L46 96L52 106" {...stroke} strokeWidth="1.3" />
      <path d="M128 118L128 100L122 108L128 100L134 109" {...stroke} strokeWidth="1.25" />
      <path d="M18 118C40 112 70 122 90 116C110 110 132 118 142 118" {...stroke} strokeWidth="1.4" />
      <path d="M22 124C48 128 80 120 110 126C128 129 140 124 146 122" {...stroke} strokeWidth="1.15" opacity="0.7" />
    </svg>
  );
}

function FebruaryArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="92" cy="48" r="12" fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="1.5" />
      <path d="M92 30V34" {...stroke} strokeWidth="1.3" />
      <path d="M92 62V66" {...stroke} strokeWidth="1.3" />
      <path d="M74 48H78" {...stroke} strokeWidth="1.3" />
      <path d="M106 48H110" {...stroke} strokeWidth="1.3" />
      <path d="M79 35L82 39" {...stroke} strokeWidth="1.2" />
      <path d="M102 35L99 39" {...stroke} strokeWidth="1.2" />
      <path d="M79 61L82 57" {...stroke} strokeWidth="1.2" />
      <path d="M102 61L99 57" {...stroke} strokeWidth="1.2" />
      <path d="M18 118L54 82L74 104" {...stroke} strokeWidth="1.7" />
      <path d="M62 118L96 68L144 118" {...stroke} strokeWidth="1.8" />
      <path d="M18 118C46 112 78 122 104 114C126 108 138 116 144 118" {...stroke} strokeWidth="1.4" />
      <path d="M22 22C28 48 36 68 30 92" {...stroke} strokeWidth="1.55" />
      <path d="M22 42C30 46 38 40 42 34" {...stroke} strokeWidth="1.3" />
      <path d="M26 62C34 66 42 58 46 52" {...stroke} strokeWidth="1.3" />
      <path d="M28 78C36 80 42 74 44 68" {...stroke} strokeWidth="1.2" />
      <circle cx="42" cy="32" r="4.2" fill="rgba(232,199,106,0.45)" stroke={COLORS.gold} strokeWidth="1.15" />
      <circle cx="48" cy="50" r="3.6" fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="1.1" />
      <circle cx="36" cy="56" r="3.2" fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="1.05" />
      <circle cx="46" cy="68" r="3.4" fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="1.1" />
      <circle cx="32" cy="44" r="2.6" fill="rgba(232,199,106,0.35)" stroke={COLORS.gold} strokeWidth="1" />
      <Spark cx={54} cy={40} r={0.8} />
      <Spark cx={24} cy={70} r={0.7} />
    </svg>
  );
}

function Blossom({ cx, cy, r = 4 }: { cx: number; cy: number; r?: number }) {
  const petal = r * 0.72;
  return (
    <g>
      <circle cx={cx} cy={cy - petal} r={r * 0.42} fill="rgba(232,199,106,0.45)" stroke={COLORS.gold} strokeWidth="0.9" />
      <circle cx={cx + petal * 0.86} cy={cy - petal * 0.28} r={r * 0.42} fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="0.9" />
      <circle cx={cx + petal * 0.54} cy={cy + petal * 0.72} r={r * 0.42} fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="0.9" />
      <circle cx={cx - petal * 0.54} cy={cy + petal * 0.72} r={r * 0.42} fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="0.9" />
      <circle cx={cx - petal * 0.86} cy={cy - petal * 0.28} r={r * 0.42} fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="0.9" />
      <circle cx={cx} cy={cy} r={r * 0.22} fill={COLORS.gold} stroke="none" />
    </g>
  );
}

function Pine({ x, baseY, h }: { x: number; baseY: number; h: number }) {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const top = baseY - h;
  return (
    <g>
      <path d={`M${x} ${baseY}V${baseY - h * 0.22}`} {...stroke} strokeWidth="1.3" />
      <path
        d={`M${x} ${top}L${x - h * 0.28} ${top + h * 0.42}H${x + h * 0.28}Z`}
        {...stroke}
        strokeWidth="1.25"
      />
      <path
        d={`M${x} ${top + h * 0.22}L${x - h * 0.34} ${top + h * 0.62}H${x + h * 0.34}Z`}
        {...stroke}
        strokeWidth="1.2"
      />
    </g>
  );
}

function MarchArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <Spark cx={34} cy={32} r={1.05} />
      <Spark cx={126} cy={28} r={0.9} />
      <Spark cx={52} cy={48} r={0.7} />
      <Spark cx={118} cy={52} r={0.75} />
      <circle cx="92" cy="42" r="12" fill="rgba(232,199,106,0.38)" stroke={COLORS.gold} strokeWidth="1.5" />
      <circle cx="97" cy="38" r="8" fill="rgba(255,248,230,0.55)" stroke="none" />
      <path d="M18 118L48 86L66 104" {...stroke} strokeWidth="1.65" />
      <path d="M54 118L88 58L144 118" {...stroke} strokeWidth="1.85" />
      <path d="M88 58L96 78L112 92" {...stroke} strokeWidth="1.05" opacity="0.6" />
      <Pine x={34} baseY={118} h={34} />
      <Pine x={46} baseY={118} h={26} />
      <Pine x={124} baseY={118} h={30} />
      <path d="M16 28C24 54 30 76 24 102" {...stroke} strokeWidth="1.55" />
      <path d="M20 46C28 50 36 42 40 36" {...stroke} strokeWidth="1.2" />
      <path d="M22 64C30 68 38 60 42 54" {...stroke} strokeWidth="1.2" />
      <path d="M24 80C32 82 38 76 40 70" {...stroke} strokeWidth="1.15" />
      <Blossom cx={40} cy={34} r={4.2} />
      <Blossom cx={44} cy={52} r={3.6} />
      <Blossom cx={32} cy={60} r={3.2} />
      <Blossom cx={42} cy={72} r={3.4} />
      <path d="M18 118C44 110 74 124 104 114C124 108 136 116 144 118" {...stroke} strokeWidth="1.45" />
      <path d="M24 124C52 130 86 118 118 126" {...stroke} strokeWidth="1.1" opacity="0.65" />
    </svg>
  );
}

function AprilArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="100" cy="44" r="11" fill="rgba(232,199,106,0.42)" stroke={COLORS.gold} strokeWidth="1.5" />
      <path d="M100 27V31" {...stroke} strokeWidth="1.25" />
      <path d="M100 57V61" {...stroke} strokeWidth="1.25" />
      <path d="M83 44H87" {...stroke} strokeWidth="1.25" />
      <path d="M113 44H117" {...stroke} strokeWidth="1.25" />
      <path d="M88 32L91 36" {...stroke} strokeWidth="1.15" />
      <path d="M112 32L109 36" {...stroke} strokeWidth="1.15" />
      <path d="M88 56L91 52" {...stroke} strokeWidth="1.15" />
      <path d="M112 56L109 52" {...stroke} strokeWidth="1.15" />
      <path d="M18 118L50 90L72 108" {...stroke} strokeWidth="1.55" />
      <path d="M62 118L98 72L144 118" {...stroke} strokeWidth="1.7" />
      <path d="M80 118C88 102 94 90 90 76C86 64 94 56 100 50" {...stroke} strokeWidth="1.5" />
      <path d="M26 118V104M38 118V100M50 118V106" {...stroke} strokeWidth="1.4" />
      <path d="M26 106H50M26 112H50" {...stroke} strokeWidth="1.2" />
      <path d="M18 22C26 50 34 72 26 98" {...stroke} strokeWidth="1.55" />
      <path d="M22 42C30 46 38 38 42 32" {...stroke} strokeWidth="1.2" />
      <path d="M24 60C32 64 40 56 44 50" {...stroke} strokeWidth="1.2" />
      <path d="M26 76C34 78 40 72 42 66" {...stroke} strokeWidth="1.15" />
      <Blossom cx={42} cy={30} r={4.2} />
      <Blossom cx={46} cy={48} r={3.6} />
      <Blossom cx={34} cy={56} r={3.2} />
      <Blossom cx={44} cy={68} r={3.3} />
      <Blossom cx={118} cy={108} r={2.8} />
      <path d="M18 118C48 112 84 122 116 114C132 110 140 116 144 118" {...stroke} strokeWidth="1.35" />
    </svg>
  );
}

function MayArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="112" cy="40" r="11" fill="rgba(232,199,106,0.42)" stroke={COLORS.gold} strokeWidth="1.45" />
      <path d="M112 24V28" {...stroke} strokeWidth="1.2" />
      <path d="M112 52V56" {...stroke} strokeWidth="1.2" />
      <path d="M96 40H100" {...stroke} strokeWidth="1.2" />
      <path d="M124 40H128" {...stroke} strokeWidth="1.2" />
      <path d="M100 29L103 33" {...stroke} strokeWidth="1.1" />
      <path d="M124 29L121 33" {...stroke} strokeWidth="1.1" />
      <path d="M22 108L48 84L68 102" {...stroke} strokeWidth="1.45" />
      <path d="M90 108L118 78L144 108" {...stroke} strokeWidth="1.5" />
      <path d="M50 118V86H90V118" {...stroke} strokeWidth="1.65" />
      <path d="M46 86L70 66L94 86" {...stroke} strokeWidth="1.7" />
      <path d="M64 118V102H78V118" {...stroke} strokeWidth="1.5" />
      <path d="M56 96H66M76 96H86" {...stroke} strokeWidth="1.15" />
      <path d="M54 80H86" {...stroke} strokeWidth="1.1" />
      <path d="M70 118C78 108 86 102 94 118" {...stroke} strokeWidth="1.45" />
      <path d="M48 118V108M42 108H54M42 112H54" {...stroke} strokeWidth="1.25" />
      <path d="M94 118V108M88 108H100M88 112H100" {...stroke} strokeWidth="1.25" />
      <path d="M28 118C32 100 40 88 34 76" {...stroke} strokeWidth="1.45" />
      <path d="M126 118C122 98 130 84 136 72" {...stroke} strokeWidth="1.45" />
      <Blossom cx={38} cy={108} r={2.8} />
      <Blossom cx={46} cy={114} r={2.4} />
      <Blossom cx={118} cy={110} r={2.7} />
      <Blossom cx={108} cy={116} r={2.3} />
      <path d="M18 118C48 114 80 122 114 116C130 112 140 116 144 118" {...stroke} strokeWidth="1.3" />
    </svg>
  );
}

function JuneArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="96" cy="40" r="11" fill="rgba(232,199,106,0.42)" stroke={COLORS.gold} strokeWidth="1.45" />
      <path d="M96 24V28" {...stroke} strokeWidth="1.2" />
      <path d="M96 52V56" {...stroke} strokeWidth="1.2" />
      <path d="M80 40H84" {...stroke} strokeWidth="1.2" />
      <path d="M108 40H112" {...stroke} strokeWidth="1.2" />
      <path d="M84 29L87 33" {...stroke} strokeWidth="1.1" />
      <path d="M108 29L105 33" {...stroke} strokeWidth="1.1" />
      <path d="M18 118L52 74L72 98" {...stroke} strokeWidth="1.7" />
      <path d="M58 118L90 54L144 118" {...stroke} strokeWidth="1.85" />
      <path d="M90 54L100 78L116 94" {...stroke} strokeWidth="1.05" opacity="0.6" />
      <path d="M80 118C88 102 94 88 88 74" {...stroke} strokeWidth="1.5" />
      <path d="M72 118C78 110 84 108 90 114" {...stroke} strokeWidth="1.2" />
      <Pine x={32} baseY={118} h={36} />
      <Pine x={44} baseY={118} h={28} />
      <Pine x={54} baseY={118} h={22} />
      <Pine x={122} baseY={118} h={32} />
      <Pine x={134} baseY={118} h={24} />
      <Blossom cx={36} cy={112} r={2.6} />
      <Blossom cx={118} cy={112} r={2.5} />
      <path d="M18 118C46 110 76 124 108 114C126 108 136 116 144 118" {...stroke} strokeWidth="1.4" />
    </svg>
  );
}

function JulyArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="80" cy="40" r="13" fill="rgba(232,199,106,0.42)" stroke={COLORS.gold} strokeWidth="1.5" />
      <path d="M80 18V24" {...stroke} strokeWidth="1.3" />
      <path d="M80 56V62" {...stroke} strokeWidth="1.3" />
      <path d="M57 40H63" {...stroke} strokeWidth="1.3" />
      <path d="M97 40H103" {...stroke} strokeWidth="1.3" />
      <path d="M64 24L69 29" {...stroke} strokeWidth="1.2" />
      <path d="M96 24L91 29" {...stroke} strokeWidth="1.2" />
      <path d="M64 56L69 51" {...stroke} strokeWidth="1.2" />
      <path d="M96 56L91 51" {...stroke} strokeWidth="1.2" />
      <path d="M52 30L57 33" {...stroke} strokeWidth="1.1" />
      <path d="M108 30L103 33" {...stroke} strokeWidth="1.1" />
      <path d="M52 50L57 47" {...stroke} strokeWidth="1.1" />
      <path d="M108 50L103 47" {...stroke} strokeWidth="1.1" />
      <path d="M18 118L48 90L68 108" {...stroke} strokeWidth="1.55" />
      <path d="M54 118L80 72L144 118" {...stroke} strokeWidth="1.8" />
      <path d="M80 72L90 92L108 104" {...stroke} strokeWidth="1.05" opacity="0.55" />
      <Pine x={28} baseY={118} h={34} />
      <Pine x={40} baseY={118} h={26} />
      <Pine x={124} baseY={118} h={30} />
      <Pine x={136} baseY={118} h={22} />
      <Blossom cx={34} cy={112} r={2.6} />
      <Blossom cx={46} cy={116} r={2.2} />
      <Blossom cx={116} cy={112} r={2.5} />
      <path d="M18 118C46 110 78 124 110 114C128 108 138 116 144 118" {...stroke} strokeWidth="1.4" />
      <path d="M28 124C56 130 88 118 120 126" {...stroke} strokeWidth="1.05" opacity="0.6" />
    </svg>
  );
}

function AugustArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <Spark cx={32} cy={28} r={1.05} />
      <Spark cx={128} cy={26} r={0.9} />
      <Spark cx={48} cy={46} r={0.7} />
      <Spark cx={118} cy={48} r={0.75} />
      <Spark cx={24} cy={56} r={0.65} />
      <Spark cx={140} cy={54} r={0.7} />
      <Spark cx={68} cy={30} r={0.6} />
      <circle cx="86" cy="40" r="13" fill="rgba(232,199,106,0.38)" stroke={COLORS.gold} strokeWidth="1.5" />
      <circle cx="91" cy="36" r="8.5" fill="rgba(255,248,230,0.55)" stroke="none" />
      <path d="M18 118L48 88L66 106" {...stroke} strokeWidth="1.6" />
      <path d="M54 118L84 64L144 118" {...stroke} strokeWidth="1.8" />
      <path d="M84 64L94 86L110 100" {...stroke} strokeWidth="1.05" opacity="0.6" />
      <Pine x={30} baseY={118} h={32} />
      <Pine x={42} baseY={118} h={24} />
      <Pine x={122} baseY={118} h={28} />
      <Pine x={134} baseY={118} h={20} />
      <path d="M18 118C46 110 78 124 110 114C128 108 138 116 144 118" {...stroke} strokeWidth="1.4" />
      <path d="M68 124C78 116 88 116 98 124" {...stroke} strokeWidth="1.1" opacity="0.7" />
    </svg>
  );
}

function LeafTree({ x, baseY, h }: { x: number; baseY: number; h: number }) {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const canopy = h * 0.42;
  return (
    <g>
      <path d={`M${x} ${baseY}V${baseY - h * 0.55}`} {...stroke} strokeWidth="1.4" />
      <path d={`M${x} ${baseY - h * 0.28}L${x - h * 0.18} ${baseY - h * 0.42}`} {...stroke} strokeWidth="1.1" />
      <path d={`M${x} ${baseY - h * 0.34}L${x + h * 0.16} ${baseY - h * 0.48}`} {...stroke} strokeWidth="1.1" />
      <circle cx={x} cy={baseY - h * 0.68} r={canopy * 0.55} fill="rgba(232,199,106,0.28)" stroke={COLORS.gold} strokeWidth="1.15" />
      <circle cx={x - canopy * 0.42} cy={baseY - h * 0.58} r={canopy * 0.38} fill="rgba(232,199,106,0.22)" stroke={COLORS.gold} strokeWidth="1" />
      <circle cx={x + canopy * 0.4} cy={baseY - h * 0.56} r={canopy * 0.36} fill="rgba(232,199,106,0.22)" stroke={COLORS.gold} strokeWidth="1" />
    </g>
  );
}

function SeptemberArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="96" cy="42" r="13" fill="rgba(232,199,106,0.42)" stroke={COLORS.gold} strokeWidth="1.5" />
      <path d="M96 21V27" {...stroke} strokeWidth="1.25" />
      <path d="M96 57V63" {...stroke} strokeWidth="1.25" />
      <path d="M75 42H81" {...stroke} strokeWidth="1.25" />
      <path d="M111 42H117" {...stroke} strokeWidth="1.25" />
      <path d="M81 27L86 32" {...stroke} strokeWidth="1.15" />
      <path d="M111 27L106 32" {...stroke} strokeWidth="1.15" />
      <path d="M81 57L86 52" {...stroke} strokeWidth="1.15" />
      <path d="M111 57L106 52" {...stroke} strokeWidth="1.15" />
      <path d="M70 32L75 36" {...stroke} strokeWidth="1.05" />
      <path d="M122 32L117 36" {...stroke} strokeWidth="1.05" />
      <path d="M70 52L75 48" {...stroke} strokeWidth="1.05" />
      <path d="M122 52L117 48" {...stroke} strokeWidth="1.05" />
      <path d="M22 118L52 90L70 108" {...stroke} strokeWidth="1.5" />
      <path d="M58 118L88 70L144 118" {...stroke} strokeWidth="1.7" />
      <path d="M78 118C86 104 92 92 88 78" {...stroke} strokeWidth="1.45" />
      <path d="M72 118C78 110 84 108 90 114" {...stroke} strokeWidth="1.15" />
      <LeafTree x={36} baseY={118} h={46} />
      <Blossom cx={24} cy={112} r={2.6} />
      <Blossom cx={48} cy={114} r={2.3} />
      <Blossom cx={118} cy={112} r={2.5} />
      <Blossom cx={128} cy={116} r={2.2} />
      <path d="M18 118C48 112 80 124 112 114C130 108 138 116 144 118" {...stroke} strokeWidth="1.35" />
    </svg>
  );
}

function OctoberArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <Spark cx={30} cy={28} r={1.05} />
      <Spark cx={126} cy={26} r={0.9} />
      <Spark cx={50} cy={44} r={0.7} />
      <Spark cx={118} cy={48} r={0.75} />
      <Spark cx={24} cy={54} r={0.65} />
      <Spark cx={140} cy={52} r={0.7} />
      <circle cx="88" cy="40" r="12" fill="rgba(232,199,106,0.38)" stroke={COLORS.gold} strokeWidth="1.5" />
      <path d="M18 112L48 86L66 102" {...stroke} strokeWidth="1.5" />
      <path d="M54 112L86 62L144 112" {...stroke} strokeWidth="1.7" />
      <path d="M86 62L96 82L110 94" {...stroke} strokeWidth="1.05" opacity="0.55" />
      <path d="M22 118C48 126 80 114 112 124C128 128 138 122 144 118" {...stroke} strokeWidth="1.35" />
      <path d="M70 124C80 116 90 116 100 124" {...stroke} strokeWidth="1.1" opacity="0.7" />
      <path d="M28 118V108H52V118" {...stroke} strokeWidth="1.35" />
      <path d="M32 108V102M40 108V100M48 108V102" {...stroke} strokeWidth="1.2" />
      <path d="M32 102H48" {...stroke} strokeWidth="1.15" />
      <LeafTree x={34} baseY={118} h={40} />
      <LeafTree x={128} baseY={118} h={36} />
    </svg>
  );
}

function NovemberArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="100" cy="42" r="12" fill="rgba(232,199,106,0.42)" stroke={COLORS.gold} strokeWidth="1.5" />
      <path d="M100 23V28" {...stroke} strokeWidth="1.2" />
      <path d="M100 56V61" {...stroke} strokeWidth="1.2" />
      <path d="M81 42H86" {...stroke} strokeWidth="1.2" />
      <path d="M114 42H119" {...stroke} strokeWidth="1.2" />
      <path d="M87 28L91 33" {...stroke} strokeWidth="1.1" />
      <path d="M113 28L109 33" {...stroke} strokeWidth="1.1" />
      <path d="M87 56L91 51" {...stroke} strokeWidth="1.1" />
      <path d="M113 56L109 51" {...stroke} strokeWidth="1.1" />
      <path d="M22 112L50 88L68 104" {...stroke} strokeWidth="1.5" />
      <path d="M58 112L90 66L144 112" {...stroke} strokeWidth="1.7" />
      <path d="M78 118C86 104 92 92 86 78" {...stroke} strokeWidth="1.4" />
      <path d="M26 118V108M38 118V104M50 118V110" {...stroke} strokeWidth="1.3" />
      <path d="M26 110H50M26 114H50" {...stroke} strokeWidth="1.1" />
      <LeafTree x={32} baseY={118} h={42} />
      <Pine x={48} baseY={118} h={26} />
      <Pine x={124} baseY={118} h={30} />
      <Pine x={136} baseY={118} h={22} />
      <Blossom cx={54} cy={114} r={2.3} />
      <Blossom cx={116} cy={112} r={2.4} />
      <path d="M18 118C46 110 78 124 110 114C128 108 138 116 144 118" {...stroke} strokeWidth="1.35" />
      <path d="M28 124C56 130 88 118 120 126" {...stroke} strokeWidth="1.05" opacity="0.55" />
    </svg>
  );
}

function DecemberArt() {
  const stroke = {
    fill: "none" as const,
    stroke: COLORS.goldDeep,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className="h-[146px] w-[146px]" fill="none" style={{ fill: "none" }} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="rgba(184,134,11,0.06)" stroke={COLORS.gold} strokeWidth="2.2" />
      <circle cx="80" cy="80" r="70" fill="none" stroke={COLORS.gold} strokeWidth="0.9" opacity="0.55" />
      <circle cx="80" cy="80" r="68" fill="rgba(255,248,230,0.35)" stroke="none" />
      <circle cx="108" cy="40" r="11" fill="rgba(232,199,106,0.4)" stroke={COLORS.gold} strokeWidth="1.45" />
      <path d="M108 24V28" {...stroke} strokeWidth="1.15" />
      <path d="M108 52V56" {...stroke} strokeWidth="1.15" />
      <path d="M92 40H96" {...stroke} strokeWidth="1.15" />
      <path d="M120 40H124" {...stroke} strokeWidth="1.15" />
      <path d="M96 29L99 33" {...stroke} strokeWidth="1.05" />
      <path d="M120 29L117 33" {...stroke} strokeWidth="1.05" />
      <path d="M22 108L48 86L66 102" {...stroke} strokeWidth="1.45" />
      <path d="M90 108L118 78L144 108" {...stroke} strokeWidth="1.5" />
      <path d="M54 118V88H92V118" {...stroke} strokeWidth="1.6" />
      <path d="M50 88L73 68L96 88" {...stroke} strokeWidth="1.65" />
      <path d="M66 118V104H80V118" {...stroke} strokeWidth="1.45" />
      <path d="M60 98H70M82 98H90" {...stroke} strokeWidth="1.1" />
      <path d="M42 118V110M36 110H48M36 114H48" {...stroke} strokeWidth="1.2" />
      <path d="M98 118V110M92 110H104M92 114H104" {...stroke} strokeWidth="1.2" />
      <Pine x={30} baseY={118} h={34} />
      <Pine x={42} baseY={118} h={24} />
      <Pine x={124} baseY={118} h={32} />
      <Pine x={136} baseY={118} h={22} />
      <path d="M18 118C46 112 80 124 114 116C130 112 140 116 144 118" {...stroke} strokeWidth="1.3" />
      <path d="M70 124C80 116 90 116 100 124" {...stroke} strokeWidth="1.05" opacity="0.65" />
    </svg>
  );
}

function MonthScene({ art }: { art: "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec" }) {
  if (art in MONTH_ART) {
    return (
      <Image
        src={MONTH_ART[art]}
        alt=""
        width={512}
        height={512}
        className="h-[146px] w-[146px] object-contain"
      />
    );
  }
}

function MonthMedallion({
  art,
  caption,
  year,
}: {
  art: "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";
  caption: string;
  year: string;
}) {
  const tracked = caption === caption.toUpperCase();
  return (
    <div className="flex w-[156px] shrink-0 flex-col items-center">
      <MonthScene art={art} />
      <div
        className="relative -mt-2.5 w-[124px] px-2 py-[3px] text-center"
        style={{
          border: `1.45px solid ${COLORS.gold}`,
          borderRadius: 8,
          background: "rgba(255,248,230,0.9)",
          boxShadow: "inset 0 0 0 1px rgba(196,160,74,0.28)",
        }}
      >
        <p
          className={`text-[12px] font-bold leading-tight ${tracked ? "tracking-[0.14em]" : ""}`}
          style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
        >
          {caption}
        </p>
        <p className="text-[12px] font-bold leading-tight" style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}>
          {year}
        </p>
      </div>
    </div>
  );
}

export default function MonthByMonthForecast({
  language = "en",
  pageNumber = "10",
  forecastYear = 2027,
  pair = "jan-feb",
}: MonthByMonthForecastProps) {
  const titles = SHARED[language];
  const t = PAIRS[language][pair];
  const isHi = language === "hi";
  void forecastYear;

  return (
    <ReportPageShell
      pageNumber={pageNumber}
      pageLabel={`yearly-forecast-month-${pair}`}
      padding="14px 28px 118px"
      backgroundImage="/assets/yearly-forecast-report/page-border.jpg"
    >
      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 flex-col items-center">
          <DiamondRule />
          <div className="relative mx-auto mt-1 h-[102px] w-[92%] max-w-[660px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 86" fill="none" preserveAspectRatio="none" aria-hidden>
              <path
                d="M40 5H580C598 5 608 14 603 43C608 72 598 81 580 81H40C22 81 12 72 17 43C12 14 22 5 40 5Z"
                stroke={COLORS.gold}
                strokeWidth="1.7"
              />
              <path
                d="M46 11H574C588 11 596 18 592 43C596 68 588 75 574 75H46C32 75 24 68 28 43C24 18 32 11 46 11Z"
                stroke={COLORS.gold}
                strokeWidth="1"
              />
            </svg>
            <PlaqueCorner className="absolute left-[2px] top-[1px] h-[20px] w-[20px]" />
            <PlaqueCorner className="absolute right-[2px] top-[1px] h-[20px] w-[20px] -scale-x-100" />
            <PlaqueCorner className="absolute bottom-[1px] left-[2px] h-[20px] w-[20px] -scale-y-100" />
            <PlaqueCorner className="absolute bottom-[1px] right-[2px] h-[20px] w-[20px] -scale-x-100 -scale-y-100" />
            <div className="relative z-10 flex h-full items-center justify-center gap-2.5 px-10 py-4">
              <SideSpark />
              <h2
                className={`text-center font-bold leading-[1.15] ${isHi ? "text-[24px]" : "text-[30px]"}`}
                style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
              >
                {titles.titleTop}
                <br />
                {titles.titleBottom}
              </h2>
              <SideSpark />
            </div>
          </div>
          <div className="mt-1.5">
            <DiamondRule />
          </div>
        </header>

        {t.introLead ? (
          <p
            className={`mt-2 shrink-0 px-4 text-center ${isHi ? "text-[15.5px] leading-[1.48]" : "text-[17px] leading-[1.4]"}`}
            style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
          >
            {t.introLead}
            {t.introRest}
          </p>
        ) : null}

        {t.months.map((month) => (
          <OrnateBox key={month.key} className="mt-2 flex min-h-0 flex-1 flex-col px-3.5 py-2">
            <h3
              className={`shrink-0 px-2 py-1 text-center font-bold ${isHi ? "text-[16px] leading-snug" : "text-[20px] leading-tight"}`}
              style={{ color: COLORS.maroon, fontFamily: DISPLAY_FONT }}
            >
              {month.headingBefore}
              {month.headingNum}
              {month.headingAfter}
            </h3>
            <div className="mt-1 flex min-h-0 flex-1 items-center gap-3">
              <MonthMedallion art={month.art} caption={month.caption} year={month.year} />
              <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between py-0.5">
                {month.rows.map((row, index) => (
                  <div
                    key={row.key}
                    className="flex items-center gap-2.5 py-[3px]"
                    style={{
                      borderTop: index === 0 ? "none" : `1px solid ${COLORS.rule}`,
                    }}
                  >
                    <IconBadge name={row.icon} />
                    <p
                      className={`min-w-0 flex-1 ${isHi ? "text-[14.5px] leading-[1.38]" : "text-[15.5px] leading-[1.34]"}`}
                      style={{ color: COLORS.body, fontFamily: DISPLAY_FONT }}
                    >
                      <Accent>{row.label}</Accent> {row.body}
                      {row.extraLabel ? (
                        <>
                          {" · "}
                          <Accent>{row.extraLabel}</Accent> {row.extraBody}
                        </>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </OrnateBox>
        ))}
      </div>
    </ReportPageShell>
  );
}
