import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Box,
  ChevronDown,
  CircleDot,
  Diamond,
  Gamepad2,
  Globe2,
  Menu,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/chativ-hero-background.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chativ — Technology Crafted for All" },
      {
        name: "description",
        content: "Chativ creates clean, intuitive and accessible digital experiences shaped by real human behavior.",
      },
      { property: "og:title", content: "Chativ — Technology Crafted for All" },
      {
        property: "og:description",
        content: "Clean, intuitive and accessible digital experiences shaped by real human behavior.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const partners = [
  { name: "BookStore", icon: Box },
  { name: "zantic", icon: Sparkles },
  { name: "Crona", icon: Diamond },
  { name: "Mercury", icon: Gamepad2 },
  { name: "Wage", icon: CircleDot },
];

function Index() {
  return (
    <main className="hero-shell">
      <video
        className="hero-video"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <header className="hero-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Chativ home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>Chativ</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="#features">Features <ChevronDown aria-hidden="true" /></a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div className="header-actions">
          <time dateTime="14:16">02:16 PM (USA)</time>
          <Button asChild variant="light" className="header-cta">
            <a href="#contact">Get Started</a>
          </Button>
          <Button variant="ghost" size="icon" className="hidden max-[900px]:inline-flex" aria-label="Open menu">
            <Menu />
          </Button>
        </div>
      </header>

      <section className="hero-content" id="top">
        <div className="hero-intro">
          <div className="eyebrow">
            <Globe2 aria-hidden="true" />
            <span>AI-powered access from<br />phone, anywhere.</span>
          </div>

          <h1>
            <span>Technology</span>
            <span>Crafted for All</span>
            <span>Not <em>Machines</em></span>
          </h1>

          <p className="hero-copy">
            We create clean, intuitive, and accessible digital<br className="desktop-break" />
            {" "}experiences shaped by real human behavior.
          </p>

          <div className="conversion-row" id="contact">
            <Button asChild variant="hero" className="hero-cta">
              <a href="mailto:hello@chativ.com">
                <span>Get started</span>
                <span className="cta-icon"><ArrowRight aria-hidden="true" /></span>
              </a>
            </Button>
            <div className="social-proof" aria-label="Over 100 happy clients worldwide">
              <div className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-one">A</span>
                <span className="avatar avatar-two">M</span>
                <span className="avatar avatar-three">J</span>
              </div>
              <p><strong>100+ Happy Clients</strong><span>Worldwide</span></p>
            </div>
          </div>

          <div className="metrics" id="features">
            <article className="metric">
              <span className="metric-star">*</span>
              <strong>150+</strong>
              <p>Projects delivered</p>
            </article>
            <article className="metric">
              <span className="metric-star">*</span>
              <strong>98%</strong>
              <p>Client satisfaction</p>
            </article>
          </div>

          <div className="established" id="about">
            <span><strong>EST.</strong>2020</span>
            <span className="est-divider" />
            <span>Live in 12+ Talks</span>
          </div>
        </div>

        <aside className="partners" aria-label="Our partners" id="product">
          <p>Our Partners</p>
          <div className="partner-list">
            {partners.map(({ name, icon: Icon }) => (
              <span className="partner" key={name}>
                <Icon aria-hidden="true" />
                <strong>{name}</strong>
              </span>
            ))}
          </div>
        </aside>

        <a className="scroll-cue" href="#features">
          <span>Scroll Down</span>
          <span className="scroll-icon"><ArrowDown aria-hidden="true" /></span>
        </a>
      </section>
    </main>
  );
}
