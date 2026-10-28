import React from "react";

type IconProps = {
    className?: string;
};

export const UpwardArrow = ({ className = "w-24 h-24" }: IconProps) => (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
        <path
            d="M10 70 C40 70 65 50 95 15"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <path d="M85 15 L105 10 L97 28" fill="currentColor" />
    </svg>
);

export const DownwardArrow = ({ className = "w-24 h-24" }: IconProps) => (
    <svg viewBox="0 0 120 80" fill="none" className={className}>
        <path
            d="M10 10 C40 10 65 40 95 65"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <path d="M82 55 L105 65 L90 72" fill="currentColor" />
    </svg>
);

export const RightArrow = ({ className = "w-24 h-24" }: IconProps) => (
    <svg viewBox="0 0 120 40" fill="none" className={className}>
        <path
            d="M10 20 H95"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <path d="M85 8 L110 20 L85 32" fill="currentColor" />
    </svg>
);

export const DiagonalArrow = ({ className = "w-24 h-24" }: IconProps) => (
    <svg viewBox="0 0 120 70" fill="none" className={className}>
        <path
            d="M10 60 L100 15"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <path d="M90 8 L115 12 L100 28" fill="currentColor" />
    </svg>
);

export const DashIcon = ({ className = "w-16 h-6" }: IconProps) => (
    <svg viewBox="0 0 80 20" fill="none" className={className}>
        <rect
            x="10"
            y="7"
            width="60"
            height="6"
            rx="3"
            fill="currentColor"
        />
    </svg>
);

export const CurvedArrow = ({ className = "w-24 h-24" }: IconProps) => (
    <svg viewBox="0 0 100 80" fill="none" className={className}>
        <path
            d="M20 50 C25 70 70 70 75 20"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <path d="M65 25 L78 10 L80 30" fill="currentColor" />
    </svg>
);

export const OvalIcon = ({ className = "w-24 h-16" }: IconProps) => (
    <svg viewBox="0 0 120 70" fill="none" className={className}>
        <ellipse
            cx="60"
            cy="35"
            rx="45"
            ry="22"
            stroke="currentColor"
            strokeWidth="4"
        />
    </svg>
);

/**
 * Usage:
 *
 * import {
 *   UpwardArrow,
 *   DownwardArrow,
 *   RightArrow,
 *   DiagonalArrow,
 *   DashIcon,
 *   CurvedArrow,
 *   OvalIcon,
 * } from "@/components/ArrowIcons";
 *
 * <UpwardArrow className="w-32 h-20 text-[#B8860B]" />
 */