"use client";

import Image from "next/image";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { LucideIcon } from "lucide-react";

interface TagProps {
    text?: string;
    icon?: LucideIcon;
    imageSrc?: string;
    imageAlt?: string;
    useInvertedBackground?: boolean;
    className?: string;
    textClassName?: string;
    imageClassName?: string;
}

const Tag = ({
    text,
    icon: Icon,
    imageSrc,
    imageAlt = "",
    useInvertedBackground,
    className = "",
    textClassName = "",
    imageClassName = "",
}: TagProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    // If imageSrc is provided, render the image instead
    if (imageSrc) {
        return (
            <div className={cls(
                "relative z-1 px-2 py-2 rounded-theme card inline-flex items-center gap-2 w-fit",
                className
            )}>
                <div className={cls("relative h-8 w-auto", imageClassName)}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={100}
                        height={30}
                        className="h-full w-auto object-contain"
                        unoptimized={imageSrc.startsWith('http') || imageSrc.startsWith('//')}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={cls(
            "relative z-1 px-3 py-1 text-sm rounded-theme card inline-flex items-center gap-2 w-fit",
            className
        )}>
            {Icon && <Icon className={cls("relative z-1 h-[1em] w-auto", shouldUseLightText ? "text-background" : "text-foreground")} />}
            <span className={cls(shouldUseLightText ? "text-background" : "text-foreground", textClassName)}>{text}</span>
        </div>
    );
};

export default Tag;
