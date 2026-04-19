"use client";

import Image from "next/image";

interface Service {
  number: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface ServicesStackSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  services: Service[];
}

export default function ServicesStackSection({
  eyebrow = "What We Do",
  title = "Our Services",
  description,
  services,
}: ServicesStackSectionProps) {
  return (
    <section className="relative overflow-visible h-fit py-20 w-full" id="services">
      <div className="w-content-width mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="px-3 py-1 text-sm rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 text-foreground/60">
            {eyebrow}
          </span>
          <h2 className="text-5xl md:text-6xl font-medium text-foreground">{title}</h2>
          {description && (
            <p className="text-lg leading-tight text-foreground/60 max-w-xl">{description}</p>
          )}
        </div>

        {/* Sticky scroll-stack cards */}
        <div className="w-full flex flex-col gap-[6.25vh]">
          {services.map((service) => (
            <div
              key={service.number}
              className="sticky top-[12.5vh] w-full h-[75vh] rounded-2xl overflow-hidden border border-foreground/10 bg-card/60 backdrop-blur-md"
            >
              <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between overflow-hidden">

                {/* Left: label, number, title, description */}
                <div className="relative w-full md:w-1/2 md:h-full flex flex-col justify-between p-8 md:p-12">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <span className="px-3 py-1 text-sm rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 w-fit text-foreground/60">
                      {service.label}
                    </span>
                    <h2 className="text-6xl md:text-8xl font-medium leading-none text-foreground">
                      {service.number}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4">
                    <h3 className="text-2xl md:text-4xl font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/65">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right: ghost number + rotated image */}
                <div className="relative w-full md:w-5/12 md:h-full flex flex-col gap-6 p-8 md:p-12">
                  <span className="hidden md:block text-9xl font-medium text-foreground/8 self-end leading-none select-none">
                    {service.number}
                  </span>
                  <div className="relative flex-1 min-h-0 w-full rounded-xl overflow-hidden rotate-3">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
