"use client";

import { cn } from "@/lib/utils";
import React, { ElementType, ReactNode, useEffect, useState } from "react";

export interface VideoSource {
    src: string;
    type: string;
}

export interface VideoTextProps {
    /**
     * A single video source URL (string) or an array of video sources
     */
    src: string | VideoSource[];
    /**
     * Additional className for the container
     */
    className?: string;
    /**
     * Whether to autoplay the video
     * @default true
     */
    autoPlay?: boolean;
    /**
     * Whether to mute the video
     * @default true
     */
    muted?: boolean;
    /**
     * Whether to loop the video
     * @default true
     */
    loop?: boolean;
    /**
     * Whether to preload the video
     * @default "auto"
     */
    preload?: "auto" | "metadata" | "none";
    /**
     * The content to display (will have the video "inside" it)
     */
    children: ReactNode;
    /**
     * Font size for the text mask (in viewport width units)
     * @default 20
     */
    fontSize?: string | number;
    /**
     * Font weight for the text mask
     * @default "bold"
     */
    fontWeight?: string | number;
    /**
     * Text anchor for the text mask
     * @default "middle"
     */
    textAnchor?: string;
    /**
     * Dominant baseline for the text mask
     * @default "middle"
     */
    dominantBaseline?: string;
    /**
     * Font family for the text mask
     * @default "sans-serif"
     */
    fontFamily?: string;
    /**
     * The element type to render for the text
     * @default "div"
     */
    as?: ElementType;
}

export function VideoText({
    src,
    children,
    className = "",
    autoPlay = true,
    muted = true,
    loop = true,
    preload = "auto",
    fontSize = 20,
    fontWeight = "bold",
    textAnchor = "middle",
    dominantBaseline = "middle",
    fontFamily = "sans-serif",
    as: Component = "div",
}: VideoTextProps) {
    const [svgMask, setSvgMask] = useState("");
    const content = React.Children.toArray(children).join("");

    useEffect(() => {
        const updateSvgMask = () => {
            const responsiveFontSize =
                typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
            const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${content}</text></svg>`;
            setSvgMask(newSvgMask);
        };

        updateSvgMask();
        window.addEventListener("resize", updateSvgMask);
        return () => window.removeEventListener("resize", updateSvgMask);
    }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

    const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;

    // Render multiple source elements if `src` is an array
    const videoSources = Array.isArray(src)
        ? src.map((source) => <source key={source.src} src={source.src} type={source.type} />)
        : <source src={src} />;

    return (
        <Component className={cn(`relative size-full`, className)}>
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    maskImage: dataUrlMask,
                    WebkitMaskImage: dataUrlMask,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                }}
            >
                <video
                    className="w-full h-full max-h-[50vh] object-cover"
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    preload={preload}
                    playsInline // Crucial for iOS inline playback
                >
                    {videoSources}
                    Your browser does not support the video tag.
                </video>
            </div>
            <span className="sr-only">{content}</span>
        </Component>
    );
}