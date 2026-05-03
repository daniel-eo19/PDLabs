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
          description="PD Labs builds websites, web apps, and mobile products for brands that care about quality. Good looking and built to last."
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
            description="Digital services for brands that take their work seriously."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "Start Your Project", href: "/contact" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Custom Web Apps & Landing Pages",
                description: "Web platforms and landing pages built to perform and convert, from the first design to the final deployment.",
                bentoComponent: "marquee",
                centerIcon: Zap,
                variant: "text",
                texts: ["React", "Next.js", "TypeScript", "APIs", "Cloud Deploy", "Performance", "Security", "Scalability"],
              },
              {
                title: "Mobile App Development",
                description: "iOS and Android apps built with Flutter and React Native. Smooth, good looking, and easy to use from the start.",
                bentoComponent: "media-stack",
                items: [
                  { imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg", imageAlt: "PD Labs mobile app" },
                  { imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg", imageAlt: "PD Labs mobile design" },
                  { imageSrc: "/images/web-agency-2/phone-in-hand-4.jpg", imageAlt: "PD Labs mobile experience" },
                ],
              },
              {
                title: "UI & UX Design",
                description: "Clean, user-friendly interfaces that look great and keep people coming back.",
                bentoComponent: "media-stack",
                items: [
                  { imageSrc: "/images/web-agency-2/macbook-mockup.png", imageAlt: "PD Labs web design" },
                  { imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg", imageAlt: "PD Labs mobile design" },
                  { imageSrc: "/images/web-agency-2/venue-mockup.jpg", imageAlt: "PD Labs presentation design" },
                ],
              },
              {
                title: "Brand Identity",
                description: "Full brand packages that connect with the right people and hold up everywhere.",
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
            description="Digital solutions for brands that want more."
            services={[
              {
                number: "01",
                label: "Service 01",
                title: "Custom Web Apps & Landing Pages",
                description: "Web platforms and landing pages built with modern tools. We focus on getting you conversions and keeping things fast, all in one solid build.",
                imageSrc: "/images/web-agency-2/macbook-mockup.png",
                imageAlt: "PD Labs web platform",
              },
              {
                number: "02",
                label: "Service 02",
                title: "Mobile App Development",
                description: "iOS and Android apps built with Flutter and React Native. From the first prototype to App Store approval, we build mobile products people actually enjoy using.",
                imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg",
                imageAlt: "PD Labs mobile app development",
              },
              {
                number: "03",
                label: "Service 03",
                title: "UI & UX Design",
                description: "UI and UX design grounded in how real users think. We build interfaces that are clear, easy to navigate, and true to your brand on every screen.",
                imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg",
                imageAlt: "PD Labs UI UX design",
              },
              {
                number: "04",
                label: "Service 04",
                title: "Brand Identity",
                description: "Full brand systems covering logo, typography, colour, and all your materials. Built to connect with your audience and stay consistent wherever your brand shows up.",
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
            description="A look at what we have built for clients who wanted real results."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "View All Work", href: "/portfolio" }]}
            buttonAnimation="slide-up"
            hideCardOverlay={true}
            cardClassName="!h-auto aspect-[4/3] sm:aspect-[3/2] md:aspect-video"
            features={[
              {
                title: "Aether Labs Studios",
                description: "Dark cinematic studio site with immersive 3D visuals",
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
                description: "Luxury jewellery ecommerce store",
                imageSrc: "/images/web-agency-2/luchysluxe-screenshot.jpg",
                imageAlt: "Luchys Luxe ecommerce store",
                buttonIcon: ArrowUpRight,
                buttonHref: "https://www.luchysluxe.com",
              },
              {
                title: "Hippo Voices",
                description: "African voiceover talent marketplace",
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
          description="Every project we take on gets the same level of care and attention. No shortcuts."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Responsive on Every Device",
              description: "Every site and app we build looks right on mobile, tablet, and desktop. Nothing breaks and nothing gets cut off.",
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
              title: "Fast by Default",
              description: "Clean code, solid structure, and pages that load quickly. Built to score well on Core Web Vitals and grow with your business.",
              bentoComponent: "reveal-icon",
              icon: Shield,
            },
            {
              title: "Structured Delivery",
              description: "We work to a clear timeline from brief to launch. You will always know where we are and what is coming next.",
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
              title: "Full Stack Integration",
              description: "We connect your product with payments, CRMs, analytics, and APIs so everything works together properly from day one.",
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
              title: "Results That Matter",
              description: "Every design choice is driven by how users actually behave and what your business needs. We build for results, not just screens that look good.",
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
          description="Here is what we have built and who we have worked with."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "50+", title: "Projects Delivered", description: "Across industries, markets, and businesses of every size", icon: Award },
            { id: "satisfaction", value: "98%", title: "Client Satisfaction", description: "Based on direct feedback and the number of clients who come back for more", icon: Users },
            { id: "years", value: "5+", title: "Years in Business", description: "Delivering quality digital products with a track record to show for it", icon: TrendingUp },
          ]}
        />
        </div>
        <section id="about" className="relative overflow-hidden">
          <SceneDecorations preset="corners" />
          <FeatureCardSixteen
            title="Why Choose PD Labs"
          description="A good agency builds something. The right agency builds something that works for you. Here is the difference."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Template sites that look like everyone else",
              "Slow pages that cost you conversions",
              "Mobile layouts that look broken or inconsistent",
              "Work designed to impress, not to perform",
              "Handed over with no support after launch",
            ],
          }}
          positiveCard={{
            items: [
              "Custom design built for your brand and your goals",
              "Clean builds that load fast and run well",
              "Fully responsive and tested on every screen size",
              "Decisions backed by real user behaviour and business goals",
              "Support and updates well beyond your launch date",
              "Transparent process from brief to deployment",
              ],
            }}
          />
        </section>
        <section id="team" className="relative overflow-hidden">
          <SceneDecorations preset="sparse" />
          <TeamCardFive
          title="Meet Our Team"
          description="The people who build your product."
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
            { id: "1", title: "What can PD Labs build for me?", content: "We build custom websites, web apps, mobile apps, UI and UX design systems, and brand identity packages. Whether you need a landing page, a full web platform, a Shopify store, or a mobile app, we handle the entire project from start to finish." },
            { id: "2", title: "How long does a typical project take?", content: "It depends on what you are building. A landing page can be live in about two weeks. A full web platform or mobile app usually takes six to twelve weeks. We agree on a timeline at the start and stick to it." },
            { id: "3", title: "What happens after my project goes live?", content: "We offer ongoing support covering maintenance, updates, performance checks, and new features. Most clients carry on working with us after the initial build. We are not the type to hand over the files and disappear." },
            { id: "4", title: "What technologies does PD Labs use?", content: "For web, we use Next.js, React, TypeScript, and Tailwind CSS. For mobile apps we use Flutter, and for ecommerce we work with Shopify. We pick the right tool for the job rather than using the same stack on every project." },
            { id: "5", title: "How do I start a project with PD Labs?", content: "Get in touch through the contact page or email us at hello@pdlabs.io. Tell us what you are building, what you are trying to achieve, and when you need it. We read every message personally and get back to you within 24 hours." },
          ]}
        />
        </div>
        <section id="contact">
          <ContactCTA
            tag="Ready to Build?"
            title="Your Next Project Starts Here."
            description="Tell us what you are working on. We read every message personally and come back with a clear plan within 24 hours."
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
