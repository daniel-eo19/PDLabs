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
        {/* Mobile + tablet: bento grid */}
        <section className="xl:hidden">
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

        {/* Desktop only: sticky scroll-stack */}
        <div className="hidden xl:block">
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
            hideCardOverlay={true}
            cardClassName="!h-auto aspect-[4/3] sm:aspect-[3/2] md:aspect-video"
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
            title="Why Choose PD Labs"
          description="The difference between a good agency and the right one comes down to craft, communication, and genuine investment in your results."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Template sites that look like everyone else",
              "Slow pages that cost you conversions",
              "Mobile layouts that break the brand experience",
              "Design made for portfolios, not client results",
              "Delivered and forgotten with no post-launch support",
            ],
          }}
          positiveCard={{
            items: [
              "Custom design built for your brand and your goals",
              "Performance optimised builds with fast load times",
              "Mobile first and fully responsive on every screen",
              "Strategy and data led decisions throughout every build",
              "Ongoing partnership and support beyond launch day",
              "Transparent process from brief to deployment",
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
            { id: "1", name: "Emmanuel O.", role: "Founder & Lead Developer", imageSrc: "/images/web-agency-2/dev-1.webp", imageAlt: "Founder and Lead Developer" },
            { id: "2", name: "Creative Lead", role: "UI & UX Design Director", imageSrc: "/images/web-agency-2/team-1.webp", imageAlt: "UI UX Design Director" },
            { id: "3", name: "Dev Team", role: "Full Stack Engineer", imageSrc: "/images/web-agency-2/dev-2.webp", imageAlt: "Full Stack Engineer" },
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
            { id: "1", title: "What can PD Labs build for me?", content: "We build custom websites, web apps, mobile apps, UI and UX design systems, and brand identity packages. Whether you need a high-converting landing page, a complex web platform, a Shopify store, or a full mobile product — we handle the complete scope from strategy through to launch." },
            { id: "2", title: "How long does a typical project take?", content: "Most projects run between two and eight weeks depending on scope and complexity. A focused landing page can be live in two weeks. A full web platform or mobile app typically takes six to twelve weeks. We share a clear delivery timeline at the start of every engagement." },
            { id: "3", title: "What happens after my project goes live?", content: "We offer dedicated post-launch support covering maintenance, updates, performance monitoring, and new feature development. Most clients continue working with us beyond the initial build — we become a long-term partner, not just a delivery vendor." },
            { id: "4", title: "What technologies does PD Labs use?", content: "We build with Next.js, React, TypeScript, and Tailwind CSS for modern web products. We use Flutter for mobile apps and Shopify for ecommerce projects. We choose the right tool for each project rather than forcing a one-size-fits-all approach." },
            { id: "5", title: "How do I start a project with PD Labs?", content: "Reach out via our contact page or email us directly at hello@pdlabs.io. Share what you are building, your goals, and your timeline. We review every enquiry personally and respond within 24 hours with a clear, honest perspective on how we can help." },
          ]}
        />
        </div>
        <section id="contact">
          <ContactCTA
            tag="Ready to Build?"
            title="Your Next Project Starts Here."
            description="Tell us what you are building. We will review your brief personally and come back with a clear plan within 24 hours."
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Start Your Project", href: "/contact" },
              { text: "View Our Work", href: "/portfolio" },
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
