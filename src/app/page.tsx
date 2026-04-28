"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import ServicesStackSection from "@/components/sections/services/ServicesStackSection";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialHeroCard from "@/components/sections/testimonial/TestimonialHeroCard";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";
import Preloader from "@/components/preloader/Preloader";
import SceneDecorations from "@/components/background/SceneDecorations";

export default function WebAgency2Page() {
  return (
    <>
    <Preloader />
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/web-agency-2/PD_LABS_LOGOMARK_WHITE.png"
          logoAlt="PD Labs Logo"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Portfolio", id: "portfolio", href: "/portfolio" },
            { name: "Contact", id: "contact", href: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <HeroSplitDoubleCarousel
          title="We Build Premium Digital Products"
          description="PD Labs designs and builds high-performance websites, web apps, and mobile experiences for brands that demand excellence — strategy-led and beautifully executed."
          tagImageSrc="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
          tagImageAlt="PD Labs Primary"
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Your Project", href: "/contact", props: { className: "glossy-btn" } },
            { text: "View Our Work", href: "/portfolio" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg", imageAlt: "PD Labs Mobile App Design" },
            { imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg", imageAlt: "PD Labs Mobile Experience" },
            { imageSrc: "/images/web-agency-2/phone-in-hand-4.jpg", imageAlt: "PD Labs Digital Product" },
            { imageSrc: "/images/web-agency-2/hoodie-mockup.jpg", imageAlt: "PD Labs Brand Merchandise" },
            { imageSrc: "/images/web-agency-2/tshirt-mockup.jpg", imageAlt: "PD Labs Brand Apparel" },
          ]}
          rightCarouselItems={[
            { imageSrc: "/images/web-agency-2/macbook-mockup.png", imageAlt: "PD Labs Web Platform" },
            { imageSrc: "/images/web-agency-2/venue-mockup.jpg", imageAlt: "PD Labs Venue Presentation" },
            { imageSrc: "/images/web-agency-2/pd-bcard.jpg", imageAlt: "PD Labs Brand Identity" },
            { imageSrc: "/images/web-agency-2/pd-favicon.jpg", imageAlt: "PD Labs Logo Design" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        {/* Services anchor — single scroll target for both mobile and desktop variants */}
        <div id="services">
        {/* Mobile: bento grid */}
        <section className="md:hidden">
          <FeatureBento
            title="What We Build"
            description="Comprehensive digital services for brands that mean business."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "Start Your Project", href: "/contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Custom Web Apps & Landing Pages",
                description: "Scalable web platforms and high converting landing pages built for performance and conversion — from concept through to deployment.",
                bentoComponent: "marquee",
                centerIcon: Zap,
                variant: "text",
                texts: ["React", "Next.js", "TypeScript", "APIs", "Cloud Deploy", "Performance", "Security", "Scalability"],
              },
              {
                title: "Mobile App Development",
                description: "Native and cross platform mobile apps for iOS and Android, built with Flutter and React Native. Fast, beautiful, and intuitive from day one.",
                bentoComponent: "media-stack",
                items: [
                  { imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg", imageAlt: "PD Labs mobile app" },
                  { imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg", imageAlt: "PD Labs mobile design" },
                  { imageSrc: "/images/web-agency-2/phone-in-hand-4.jpg", imageAlt: "PD Labs mobile experience" },
                ],
              },
              {
                title: "UI & UX Design",
                description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
                bentoComponent: "media-stack",
                items: [
                  { imageSrc: "/images/web-agency-2/macbook-mockup.png", imageAlt: "PD Labs web design" },
                  { imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg", imageAlt: "PD Labs mobile design" },
                  { imageSrc: "/images/web-agency-2/venue-mockup.jpg", imageAlt: "PD Labs presentation design" },
                ],
              },
              {
                title: "Brand Identity",
                description: "Complete brand solutions that resonate with your target audience.",
                bentoComponent: "media-stack",
                items: [
                  { imageSrc: "/images/web-agency-2/hoodie-mockup.jpg", imageAlt: "PD Labs brand merchandise" },
                  { imageSrc: "/images/web-agency-2/tshirt-mockup.jpg", imageAlt: "PD Labs brand apparel" },
                  { imageSrc: "/images/web-agency-2/pd-bcard.jpg", imageAlt: "PD Labs business card" },
                ],
              },
            ]}
          />
        </section>

        {/* Tablet and up: sticky scroll-stack */}
        <div className="hidden md:block">
          <ServicesStackSection
            eyebrow="What We Do"
            title="Our Services"
            description="Comprehensive digital solutions for modern brands."
            services={[
              {
                number: "01",
                label: "Service 01",
                title: "Custom Web Apps & Landing Pages",
                description: "Scalable web platforms and high converting landing pages built with modern stacks. We design for conversion and develop for performance — delivering both in one cohesive build.",
                imageSrc: "/images/web-agency-2/macbook-mockup.png",
                imageAlt: "PD Labs web platform",
              },
              {
                number: "02",
                label: "Service 02",
                title: "Mobile App Development",
                description: "Native and cross platform mobile apps for iOS and Android, built with Flutter and React Native. From prototype to App Store launch — fast, beautiful, and intuitive mobile products your users will love.",
                imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg",
                imageAlt: "PD Labs mobile app development",
              },
              {
                number: "03",
                label: "Service 03",
                title: "UI & UX Design",
                description: "Research-led UI and UX design that converts. We craft interfaces that communicate clearly, feel effortless to use, and reflect the full quality of your brand across every interaction.",
                imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg",
                imageAlt: "PD Labs UI UX design",
              },
              {
                number: "04",
                label: "Service 04",
                title: "Brand Identity",
                description: "Complete brand systems — logo, typography, colour, and collateral — built to resonate with your audience and hold up consistently across every touchpoint.",
                imageSrc: "/images/web-agency-2/pd-bcard.jpg",
                imageAlt: "PD Labs brand identity",
              },
            ]}
          />
        </div>
        </div>{/* end #services anchor */}
        <section id="portfolio">
          <FeatureCardTwentySix
            title="Selected Work"
            description="A curated look at what we have built for ambitious clients."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "View All Work", href: "/portfolio" }]}
            buttonAnimation="slide-up"
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "Aether Labs Studios",
                description: "Dark cinematic studio website with 3D visual language",
                imageSrc: "/images/web-agency-2/aetherlabs-screenshot.jpg",
                imageAlt: "Aether Labs Studios website",
                buttonIcon: ArrowUpRight,
                buttonHref: "https://www.aetherlabsstudios.com",
              },
              {
                title: "Vaness Integrated Resources",
                description: "Professional training and consultancy platform",
                imageSrc: "/images/web-agency-2/vaness-screenshot.jpg",
                imageAlt: "Vaness Integrated Resources website",
                buttonIcon: ArrowUpRight,
                buttonHref: "https://www.vaness.org",
              },
              {
                title: "Luchy's Luxe",
                description: "Premium luxury jewellery ecommerce storefront",
                imageSrc: "/images/web-agency-2/luchysluxe-screenshot.jpg",
                imageAlt: "Luchys Luxe ecommerce store",
                buttonIcon: ArrowUpRight,
                buttonHref: "https://www.luchysluxe.com",
              },
              {
                title: "Hippo Voices",
                description: "African voiceover talent marketplace platform",
                imageSrc: "/images/web-agency-2/hippovoices-screenshot.jpg",
                imageAlt: "Hippo Voices marketplace",
                buttonIcon: ArrowUpRight,
                buttonHref: "https://hippovoices.com",
              },
              {
                title: "Rain Removals",
                description: "House clearance and removal service for Greater Manchester",
                imageSrc: "/images/web-agency-2/rainremovals-screenshot.jpg",
                imageAlt: "Rain Removals website",
                buttonIcon: ArrowUpRight,
                buttonHref: "https://rainremovals.co.uk",
              },
            ]}
          />
        </section>
        <FeatureBento
          title="What You Get With PD Labs"
          description="Every project we take on is built to the same high standard — no exceptions."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Responsive on Every Device",
              description: "Every interface we build works flawlessly across mobile, tablet, and desktop — with zero layout breaks and no visual compromises.",
              bentoComponent: "phone",
              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Responsive check",
              alertMessage: "All breakpoints passed",
              apps: [
                { name: "Phone", icon: Phone },
                { name: "SMS", icon: MessageCircle },
                { name: "Books", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Camera", icon: Camera },
                { name: "Music", icon: Music },
                { name: "Settings", icon: Settings },
                { name: "Chat", icon: MessageCircle },
              ],
            },
            {
              title: "Performance-First Builds",
              description: "Optimised code, clean architecture, and fast load times — built to perform on Core Web Vitals and scale confidently as your business grows.",
              bentoComponent: "reveal-icon",
              icon: Shield,
            },
            {
              title: "Structured Delivery",
              description: "From brief to launch in a clear, disciplined timeline. No surprises — you always know exactly what is happening and what is next.",
              bentoComponent: "timeline",
              heading: "Project Launch",
              subheading: "Week 1",
              items: [
                { label: "Discovery and brief alignment", detail: "Days 1 to 3" },
                { label: "Design and development sprint", detail: "Days 4 to 10" },
                { label: "QA, testing and deployment", detail: "Days 11 to 14" },
              ],
              completedLabel: "Live",
            },
            {
              title: "End-to-End Integration",
              description: "We connect your product with payment systems, CRMs, analytics platforms, and APIs — so your full stack works seamlessly together from day one.",
              bentoComponent: "orbiting-icons",
              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Outcomes Over Aesthetics",
              description: "Every design decision is informed by user behaviour and business objectives. We build for real, measurable outcomes — not just great-looking screens.",
              bentoComponent: "line-chart",
            },
          ]}
        />
        <section id="testimonials">
          <TestimonialHeroCard />
        </section>
        <div className="relative overflow-hidden">
          <SceneDecorations preset="sparse" />
        <MetricCardOne
          title="Our Track Record"
          description="Proven expertise in delivering high-impact digital solutions."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "50+", title: "Projects Delivered", description: "From startups to established brands, across industries and continents", icon: Award },
            { id: "satisfaction", value: "98%", title: "Client Satisfaction", description: "Measured through direct client feedback and long-term repeat partnerships", icon: Users },
            { id: "years", value: "5+", title: "Years of Excellence", description: "Delivering premium digital products with a consistent track record", icon: TrendingUp },
          ]}
        />
        </div>
        <section id="about" className="relative overflow-hidden">
          <SceneDecorations preset="corners" />
          <FeatureCardSixteen
            title="Why Partner With PD Labs"
          description="Experience the difference that expert digital craftsmanship makes."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Outdated design systems and frameworks",
              "Poor performance and slow load times",
              "Lack of mobile optimization",
              "No data driven design approach",
              "Limited technical support",
            ],
          }}
          positiveCard={{
            items: [
              "Modern, cutting edge design solutions",
              "Optimized performance across all devices",
              "Mobile first responsive design",
              "Data informed strategic approach",
              "Ongoing partnership and support",
              ],
            }}
          />
        </section>
        <section id="team" className="relative overflow-hidden">
          <SceneDecorations preset="sparse" />
          <TeamCardFive
          title="Meet Our Team"
          description="Talented professionals dedicated to your success."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Team Member", role: "Lead Developer", imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg", imageAlt: "Team member" },
            { id: "2", name: "Team Member", role: "Creative Director", imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg", imageAlt: "Team member" },
            { id: "3", name: "Team Member", role: "UX Designer", imageSrc: "/images/web-agency-2/phone-in-hand-4.jpg", imageAlt: "Team member" },
            ]}
          />
        </section>
        <div id="faq" className="relative overflow-hidden">
          <SceneDecorations preset="corners" />
        <FaqBase
          title="Common Questions"
          description="Get answers about our services and process."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "What services does PD Labs offer?", content: "We specialize in custom web app development, UI & UX design, and comprehensive brand identity solutions tailored to your business needs." },
            { id: "2", title: "What is your typical project timeline?", content: "Project timelines vary based on scope and complexity. We provide detailed estimates and keep you informed throughout the development process." },
            { id: "3", title: "Do you provide post-launch support?", content: "Yes, we offer comprehensive support packages including maintenance, updates, and optimization to ensure your project continues to succeed." },
            { id: "4", title: "What technologies do you work with?", content: "We use modern technology stacks including Next.js, React, TypeScript, and Tailwind CSS for building scalable, performant applications." },
            { id: "5", title: "How do we get started?", content: "Contact us through our website or reach out directly. We'll discuss your vision and create a customized proposal for your project." },
          ]}
        />
        </div>
        <section id="contact">
          <ContactCTA
            tag="Let's Connect"
            title="Ready to Build Something Great?"
            description="Transform your ideas into exceptional digital experiences. Contact PD Labs today to discuss your next project."
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Start Your Project", href: "/contact" },
              { text: "Learn More", href: "#faq" },
            ]}
            buttonAnimation="slide-up"
            useInvertedBackground={false}
          />
        </section>
        <FooterBase
          logoSrc="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
          logoAlt="PD Labs"
          logoText="PD Labs"
          copyrightText="© 2026 | PD Labs. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",
              items: [
                { label: "Custom Web Apps & Landing Pages", href: "#services" },
                { label: "Mobile App Development", href: "#services" },
                { label: "UI & UX Design", href: "#services" },
                { label: "Brand Identity", href: "#services" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Email", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
    </>
  );
}
