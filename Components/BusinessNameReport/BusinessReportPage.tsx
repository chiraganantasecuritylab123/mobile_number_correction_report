import {
  Brain,
  Briefcase,
  Building2,
  Crown,
  Handshake,
  Lightbulb,
  Megaphone,
  Rocket,
  Shield,
  Signpost,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Pattern3, SubtitleHeader } from "../CommunComponents";
import BusinessNameReportPageShell, { REPORT_COLORS } from "./BusinessNameReportPageShell";

export type CareerIndicatorIcon =
  | "leadership"
  | "entrepreneurship"
  | "corporate"
  | "salesMarketing"
  | "creative"
  | "management"
  | "decisionMaking";

export type CareerIndicatorCard = {
  title: string;
  percent: number;
  ratingLabel: string;
  icon: CareerIndicatorIcon;
  description: string;
  decisionStyle?: {
    analytical: string;
    intuitive: string;
    balanced: string;
    styleLabel: string;
  };
};

export type CareerStrength = {
  label: string;
  icon: LucideIcon;
  starRating: number;
};

export type CareerIndicatorsProps = {
  pageNumber?: string;
  title?: string;
  subtitle?: string;
  careerPotentialScore?: number;
  maxScore?: number;
  starRating?: number;
  potentialLabel?: string;
  summaryText?: string;
  firstRowCards?: CareerIndicatorCard[];
  secondRowCards?: CareerIndicatorCard[];
  careerInterpretation?: string;
  expertObservation?: string;
  careerStrengths?: CareerStrength[];
};

const COLORS = REPORT_COLORS;

const ICON_MAP: Record<CareerIndicatorIcon, LucideIcon> = {
  leadership: Crown,
  entrepreneurship: Rocket,
  corporate: Building2,
  salesMarketing: Megaphone,
  creative: Lightbulb,
  management: Users,
  decisionMaking: Signpost,
};

const HEADER = {
  maroon: "#4a0e0e",
  gold: "#A96505",
  goldLight: "#b8860b",
  tagline: "#3a3a3a",
} as const;

const defaultFirstRowCards: CareerIndicatorCard[] = [
  {
    title: "LEADERSHIP SUITABILITY",
    percent: 92,
    ratingLabel: "EXCELLENT",
    icon: "leadership",
    description:
      "Natural ability to lead, inspire, and guide people towards goals.",
  },
  {
    title: "ENTREPRENEURSHIP TENDENCY",
    percent: 88,
    ratingLabel: "VERY HIGH",
    icon: "entrepreneurship",
    description:
      "Strong independent thinking and capacity to build and innovate.",
  },
  {
    title: "CORPORATE SUITABILITY",
    percent: 85,
    ratingLabel: "HIGH",
    icon: "corporate",
    description:
      "Adaptable to corporate environments with strong professional alignment.",
  },
  {
    title: "SALES & MARKETING POTENTIAL",
    percent: 90,
    ratingLabel: "EXCELLENT",
    icon: "salesMarketing",
    description:
      "Excellent communication skills and influence with people.",
  },
];

const defaultSecondRowCards: CareerIndicatorCard[] = [
  {
    title: "CREATIVE PROFESSION SUITABILITY",
    percent: 84,
    ratingLabel: "HIGH",
    icon: "creative",
    description:
      "Good imagination, originality and ability to think outside the box.",
  },
  {
    title: "MANAGEMENT ABILITY",
    percent: 89,
    ratingLabel: "VERY HIGH",
    icon: "management",
    description:
      "Strong organizing skills, planning ability and team management capabilities.",
  },
  {
    title: "DECISION-MAKING STYLE",
    percent: 82,
    ratingLabel: "ANALYTICAL + INTUITIVE",
    icon: "decisionMaking",
    description:
      "You make well-thought decisions with a balance of logic and intuition.",
    decisionStyle: {
      analytical: "Primary",
      intuitive: "Secondary",
      balanced: "Adaptive",
      styleLabel: "ANALYTICAL + INTUITIVE",
    },
  },
];

const defaultCareerStrengths: CareerStrength[] = [
  { label: "Goal Oriented", icon: Target, starRating: 5 },
  { label: "Ambitious", icon: TrendingUp, starRating: 5 },
  { label: "Resilient", icon: Shield, starRating: 5 },
  { label: "Influential", icon: Users, starRating: 5 },
  { label: "Strategic", icon: Brain, starRating: 5 },
  { label: "People Skills", icon: Handshake, starRating: 4 },
];

function StarRating({ count, size = 11 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={`career-star-${index}`}
          size={size}
          fill={COLORS.gold}
          stroke={COLORS.gold}
          aria-hidden
        />
      ))}
    </div>
  );
}


export default function BusinessReportPage({
  pageNumber = "10",
  title = "BUSINESS NAME ANALYSIS",
  subtitle = "What Your Signature Reveals About Your Professional Potential",
  careerPotentialScore = 89,
  maxScore = 100,
  starRating = 5,
  potentialLabel = "Strong Professional Potential",
  summaryText = "Your signature indicates diverse professional strengths and a strong ability to achieve success across multiple domains.",
  firstRowCards = defaultFirstRowCards,
  secondRowCards = defaultSecondRowCards,
  careerInterpretation = "Your signature shows strong leadership qualities, entrepreneurial drive and excellent communication skills. You are capable of excelling in diverse professional environments and have the potential to achieve high positions of authority and recognition.",
  expertObservation = "The career indicators suggest a dynamic personality with strong ambition, leadership potential, and the ability to influence others. Your signature reflects a professional who can create opportunities, take calculated risks, and achieve long-term success.",
  careerStrengths = defaultCareerStrengths,
}: CareerIndicatorsProps) {
  return (
    <BusinessNameReportPageShell padding="16px 36px 22px" pageNumber={pageNumber}>
      <div className="font-nunito-sans">
        <header className="mt-3 flex flex-col items-center text-center">

          <Image
            src="/assets/ganesha-logo.png"
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

          {/* <h1
            className="max-w-[620px] text-[26px] font-bold leading-tight tracking-[0.06em]"
            style={{ color: COLORS.brown }}
          >
            {title}
          </h1> */}
          <SubtitleHeader text={subtitle} />
        </header>


      </div>
    </BusinessNameReportPageShell>
  );
}
