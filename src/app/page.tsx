"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
  return (
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
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Our Core Services"
          description="What We Build. Custom web apps, UI & UX design, and brand identity solutions that transform your vision into reality."
          tagImageSrc="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
          tagImageAlt="PD Labs Primary"
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Explore Services", href: "#services" },
            { text: "Contact Us", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "/images/web-agency-2/shot-1.webp", imageAlt: "UI UX Design - Daily Life app" },
            { imageSrc: "/images/web-agency-2/shot-4.webp", imageAlt: "UI UX Design - SaaS platform" },
            { imageSrc: "/images/web-agency-2/shot-6.webp", imageAlt: "UI UX Design - Luminé skincare" },
            { imageSrc: "/images/web-agency-2/shot-7.webp", imageAlt: "UI UX Design - Online courses" },
            { imageSrc: "/images/web-agency-2/shot-9.webp", imageAlt: "UI UX Design - Business coach" },
          ]}
          rightCarouselItems={[
            { imageSrc: "/images/web-agency-2/shot-2.webp", imageAlt: "UI UX Design - Luxuria travel" },
            { imageSrc: "/images/web-agency-2/shot-5.webp", imageAlt: "UI UX Design - Dental practice" },
            { imageSrc: "/images/web-agency-2/shot-3.webp", imageAlt: "UI UX Design - AI product builder" },
            { imageSrc: "/images/web-agency-2/shot-8.webp", imageAlt: "UI UX Design - AI automation" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <section id="services">
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
              title: "Custom Web Apps",
              description: "Scalable, high-performance web applications built with modern technology stacks.",
              bentoComponent: "marquee",
              centerIcon: Zap,
              variant: "text",
              texts: ["React", "Next.js", "TypeScript", "APIs", "Cloud Deploy", "Performance", "Security", "Scalability"],
            },
            {
              title: "UI & UX Design",
              description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
              bentoComponent: "media-stack",
              items: [
                { imageSrc: "/images/web-agency-2/dev-2.webp", imageAlt: "UI Design project" },
                { imageSrc: "/images/web-agency-2/dev-1.webp", imageAlt: "UX Design project" },
                { imageSrc: "/images/web-agency-2/dev-3.webp", imageAlt: "Design system project" },
              ],
            },
            {
              title: "Brand Identity",
              description: "Complete brand solutions that resonate with your target audience.",
              bentoComponent: "media-stack",
              items: [
                { imageSrc: "/images/web-agency-2/shot-1.webp", imageAlt: "Brand identity 1" },
                { imageSrc: "/images/web-agency-2/shot-2.webp", imageAlt: "Brand identity 2" },
                { imageSrc: "/images/web-agency-2/shot-4.webp", imageAlt: "Brand identity 3" },
              ],
            },
          ]}
          />
        </section>
        <section id="portfolio">
          <FeatureCardTwentySix
            title="Featured Projects"
            description="Latest work showcasing our expertise in digital design and development."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "View Portfolio", href: "#portfolio" }]}
            buttonAnimation="slide-up"
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "E-Commerce Platform",
                description: "Modern luxury brand storefront",
                imageSrc: "/images/web-agency-2/project-1.webp",
                imageAlt: "E-commerce project",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "SaaS Dashboard",
                description: "Enterprise analytics platform",
                imageSrc: "/images/web-agency-2/project-2.webp",
                imageAlt: "SaaS project",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Brand Redesign",
                description: "Complete visual identity overhaul",
                imageSrc: "/images/web-agency-2/project-3.webp",
                imageAlt: "Brand redesign project",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Mobile App Design",
                description: "iOS and Android UI/UX",
                imageSrc: "/images/web-agency-2/project-4.webp",
                imageAlt: "Mobile app project",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Corporate Website",
                description: "Premium web presence",
                imageSrc: "/images/web-agency-2/project-5.webp",
                imageAlt: "Corporate website project",
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
              description: "Enterprise-grade security and 99.9% uptime for your website.",
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
          <TestimonialCardFifteen
          testimonial="PD Labs delivered exceptional results. Their team created a stunning platform that perfectly captured our brand vision and significantly improved our user engagement metrics."
          rating={5}
          author="— Client Success Story"
          avatars={[
            { src: "/images/web-agency-2/team-1.webp", alt: "Client testimonial" },
          ]}
          ratingAnimation="slide-up"
            avatarsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </section>
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
        <section id="about">
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
        <section id="team">
          <TeamCardFive
          title="Meet Our Team"
          description="Talented professionals dedicated to your success."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Team Member", role: "Lead Developer", imageSrc: "/images/web-agency-2/team-1.webp", imageAlt: "Team member" },
            { id: "2", name: "Team Member", role: "Creative Director", imageSrc: "/images/web-agency-2/team-2.webp", imageAlt: "Team member" },
              { id: "3", name: "Team Member", role: "UX Designer", imageSrc: "/images/web-agency-2/team-3.webp", imageAlt: "Team member" },
            ]}
          />
        </section>
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
        <section id="contact">
          <ContactCTA
            tag="Let's Connect"
            title="Ready to Build Something Great?"
            description="Transform your ideas into exceptional digital experiences. Contact PD Labs today to discuss your next project."
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Start Your Project", href: "#contact" },
              { text: "Learn More", href: "#services" },
            ]}
            buttonAnimation="slide-up"
            useInvertedBackground={false}
          />
        </section>
        <FooterBase
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
                { label: "Custom Web Apps", href: "#" },
                { label: "UI & UX Design", href: "#" },
                { label: "Brand Identity", href: "#" },
                { label: "Development", href: "#" },
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
  );
}
