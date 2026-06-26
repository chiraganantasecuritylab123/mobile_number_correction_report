import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';
import React from 'react';


type TextFuncProps = {
    description?: string;
    breackWord?: number[];
    className?: string;
    style?: React.CSSProperties;
};

function TextFunc({
    description = "Understanding the root causes behind recurring financial obstacles.",
    breackWord = [2, 4],
    className = "",
    style = {},
}: TextFuncProps) {
    const words = description.split(" ");

    const lines: string[] = [];
    let start = 0;

    breackWord.forEach((end) => {
        lines.push(words.slice(start, end).join(" "));
        start = end;
    });

    // Remaining words
    if (start < words.length) {
        lines.push(words.slice(start).join(" "));
    }

    return (
        <h1 className={className} style={style}>
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index !== lines.length - 1 && <br />}
                </React.Fragment>
            ))}
        </h1>
    );
}

const ASTRO = {
    parchment: "#F8EEDC",
    maroon: "#6E1F1F",
    navy: "#0A1D37",
    gold: "#B8860B",
    borderGold: "#C89A2B",
    body: "#6A5A4A",
    tableCream: "#FFFDF5",
    tableWhite: "#FFFFFF",
    cellText: "#1A2E4A",
} as const;

export function OrnamentDivider({ width = 220 }: { width?: number }) {
    return (
        <div className="relative flex items-center justify-center" style={{ width }}>
            <Image
                src='/assets/cover/pattern-2.png'
                alt=""
                width={width}
                height={Math.round(width * 0.12)}
                className="h-auto w-full object-contain"
                aria-hidden
            />
        </div>
    );
}

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

function HeaderCommun({ reportName, title, description, breackWord = [] }: { reportName: string, title: string, description: string, breackWord?: number[] }) {
    return (
        <section className="relative z-10 mt-1 shrink-0 text-center">

            <div className="relative z-10 flex items-start justify-between gap-3">
                <header className="mt-5 flex flex-1 flex-col items-center pt-1 text-center">
                    <h1
                        className="font-cinzel text-[28px] font-bold leading-none tracking-[0.06em]"
                        style={{ color: ASTRO.maroon }}
                    >
                        ASTRO AARAMBH
                    </h1>
                    <div className="mt-1.5 flex w-full max-w-[360px] items-center justify-center gap-2">
                        <OrnamentDivider width={72} />
                        <p
                            className={`text-[16px] font-bold tracking-[0.05em]`}
                            style={{ color: ASTRO.gold }}
                        >
                            {reportName}
                        </p>
                        <OrnamentDivider width={72} />
                    </div>
                </header>
            </div>
            {/* <h2 className="font-cinzel mx-auto text-[32px] font-bold l leading-tight tracking-[0.04em]"
                style={{ color: ASTRO.navy }}
            >
                {title}
            </h2> */}
            <TextFunc
                description={title}
                breackWord={breackWord}
                className="font-cinzel mx-auto text-[32px] font-bold l leading-tight tracking-[0.04em]"
                style={{ color: ASTRO.navy }}
            />
            <p className={`${libreBaskerville.className} mx-auto mt-1 max-w-[330px] text-[11px] italic leading-snug`}
                style={{ color: ASTRO.navy }}
            >
                {description}
            </p>


        </section>
    )
}

export default HeaderCommun
