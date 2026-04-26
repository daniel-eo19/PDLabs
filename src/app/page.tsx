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
          title="Our Core Services"
          description="What We Build. Custom web apps, UI & UX design, and brand identity solutions that transform your vision into reality."
          tagImageSrc="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
          tagImageAlt="PD Labs Primary"
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Explore Services", href: "#services", props: { className: "glossy-btn" } },
            { text: "Contact Us", href: "/contact" },
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
            title="Our Core Services"
            description="What We Build. Comprehensive digital solutions for modern brands."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "Explore All", href: "#services" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Custom Web Apps & Landing Pages",
                description: "Scalable web applications and high converting landing pages built with modern technology stacks.",
                bentoComponent: "marquee",
                centerIcon: Zap,
                variant: "text",
                texts: ["React", "Next.js", "TypeScript", "APIs", "Cloud Deploy", "Performance", "Security", "Scalability"],
              },
              {
                title: "Mobile App Development",
                description: "Native and cross platform mobile apps for iOS and Android. Fast, beautiful, and intuitive experiences your users will love.",
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
                description: "Scalable, high performance web applications and high converting landing pages built with modern technology stacks. We merge innovation with creativity to deliver intuitive, visually stunning platforms that captivate audiences and drive results.",
                imageSrc: "/images/web-agency-2/macbook-mockup.png",
                imageAlt: "PD Labs web platform",
              },
              {
                number: "02",
                label: "Service 02",
                title: "Mobile App Development",
                description: "Native and cross platform mobile apps for iOS and Android. From concept to App Store launch — we build fast, beautiful, and intuitive mobile experiences your users will love.",
                imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg",
                imageAlt: "PD Labs mobile app development",
              },
              {
                number: "03",
                label: "Service 03",
                title: "UI & UX Design",
                description: "Beautiful, intuitive interfaces that engage users and drive conversions. We craft visuals and layouts that communicate purpose, inspire trust, and connect emotionally with your audience.",
                imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg",
                imageAlt: "PD Labs UI UX design",
              },
              {
                number: "04",
                label: "Service 04",
                title: "Brand Identity",
                description: "Complete brand solutions that resonate with your target audience. From logo and typography to merchandise and collateral — we build brands that leave a lasting impression.",
                imageSrc: "/images/web-agency-2/pd-bcard.jpg",
                imageAlt: "PD Labs brand identity",
              },
            ]}
          />
        </div>
        </div>{/* end #services anchor */}
        <section id="portfolio">
          <FeatureCardTwentySix
            title="Featured Projects"
            description="Latest work showcasing our expertise in digital design and development."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "View Portfolio", href: "/portfolio" }]}
            buttonAnimation="slide-up"
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "Web Platform",
                description: "Modern web application for PD Labs",
                imageSrc: "/images/web-agency-2/macbook-mockup.png",
                imageAlt: "PD Labs web platform",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Mobile Experience",
                description: "Seamless mobile product design",
                imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg",
                imageAlt: "PD Labs mobile experience",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Venue Branding",
                description: "On-site brand presentation",
                imageSrc: "/images/web-agency-2/venue-mockup.jpg",
                imageAlt: "PD Labs venue branding",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Brand Merchandise",
                description: "Branded apparel and lifestyle products",
                imageSrc: "/images/web-agency-2/hoodie-mockup.jpg",
                imageAlt: "PD Labs brand merchandise",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Brand Identity",
                description: "Complete visual identity system",
                imageSrc: "/images/web-agency-2/pd-bcard.jpg",
                imageAlt: "PD Labs brand identity",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
            ]}
          />
        </section>
        <FeatureBento
          title="Our Promise"
          description="We deliver results that speak for themselves."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "All Devices Optimization",
              description: "Pixel-perfect websites that look stunning on every screen size and device.",
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
              title: "Secure Hosting",
              description: "Enterprise grade security and 99.9% uptime for your website.",
              bentoComponent: "reveal-icon",
              icon: Shield,
            },
            {
              title: "Fast Turnaround",
              description: "From concept to launch in record time without sacrificing quality.",
              bentoComponent: "timeline",
              heading: "Project Launch",
              subheading: "Week 1",
              items: [
                { label: "Discovery & wireframes", detail: "Day 1-3" },
                { label: "Design & development", detail: "Day 4-10" },
                { label: "Testing & deployment", detail: "Day 11-14" },
              ],
              completedLabel: "Live",
            },
            {
              title: "Seamless Integrations",
              description: "Connect with the tools you already use — CRMs, analytics, payments, and more.",
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
              title: "Growth Trends",
              description: "Data-driven insights to optimize your search presence and drive traffic.",
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
            { id: "projects", value: "50+", title: "Projects Delivered", description: "Across diverse industries and sectors", icon: Award },
            { id: "satisfaction", value: "98%", title: "Client Satisfaction", description: "Consistently exceeding expectations", icon: Users },
            { id: "years", value: "5+", title: "Years Experience", description: "In digital design and development", icon: TrendingUp },
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
              "No data-driven design approach",
              "Limited technical support",
            ],
          }}
          positiveCard={{
            items: [
              "Modern, cutting-edge design solutions",
              "Optimized performance across all devices",
              "Mobile-first responsive design",
              "Data-informed strategic approach",
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
