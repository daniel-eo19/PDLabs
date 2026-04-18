"use client";


import Image from "next/image";
import { cls } from "@/lib/utils";

interface MediaContentProps {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  imageClassName?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
}

const MediaContent = ({
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Video content",
  imageClassName = "",
  loading = "lazy",
  sizes,
}: MediaContentProps) => {
  return (
    <>
      {videoSrc ? (
        <video
          src={videoSrc}
          aria-label={videoAriaLabel}
          className={cls("w-full h-auto object-cover rounded-theme-capped", imageClassName)}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        imageSrc && (
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes={sizes}
              className={cls("w-full h-full object-cover rounded-theme-capped", imageClassName)}
              loading={loading}
              unoptimized={imageSrc.startsWith('http') || imageSrc.startsWith('//')}
              aria-hidden={imageAlt === ""}
            />
          </div>
        )
      )}
    </>
  );
};


export default MediaContent;
