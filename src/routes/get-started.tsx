import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  CircleCheck,
  FolderKanban,
  LayoutDashboard,
  Mail,
  Menu,
  Search,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/chativ-hero-background.mp4.asset.json";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started — Chativ" },
      {
        name: "description",
        content: "Start building clear, intuitive digital experiences with Chativ.",
      },
      { property: "og:title", content: "Get Started — Chativ" },
      {
        property: "og:description",
        content: "Bring your next digital product to life with Chativ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GetStartedPage,
});

const projects = [
  { name: "Commerce platform", owner: "Maya Chen", status: "In progress", progress: "74%" },
  { name: "Mobile experience", owner: "Noah James", status: "Review", progress: "92%" },
  { name: "Access redesign", owner: "Ava Stone", status: "Complete", progress: "100%" },
];

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Chativ home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span>Chativ</span>
    </Link>
  );
}

function GetStartedPage() {
  return (
    <main className="start-page">
      <video
        className="start-video"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <header className="start-header" aria-label="Main navigation">
        <Brand />
        <nav className="start-nav" aria-label="Primary">
          <Link to="/">Features <ChevronDown aria-hidden="true" /></Link>
          <Link to="/">How It Works</Link>
          <Link to="/">About</Link>
          <Link to="/">Product</Link>
        </nav>
        <div className="start-header-actions">
          <a href="mailto:hello@chativ.com">Contact</a>
          <Button asChild variant="light" className="header-cta">
            <a href="mailto:hello@chativ.com?subject=Start%20a%20project">Start a project</a>
          </Button>
          <Button variant="ghost" size="icon" className="hidden max-[900px]:inline-flex" aria-label="Open menu">
            <Menu />
          </Button>
        </div>
      </header>

      <section className="start-hero">
        <div className="start-badge"><Sparkles aria-hidden="true" /> Built around people</div>
        <h1>Turn your next idea<br />into a <em>real experience</em></h1>
        <p>
          Partner with Chativ to create technology that feels clear, useful, and genuinely human from the first interaction.
        </p>
        <div className="start-actions">
          <Button asChild variant="hero" className="start-primary">
            <a href="mailto:hello@chativ.com?subject=Start%20a%20project">
              Tell us about your project <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" className="start-secondary">
            <a href="mailto:hello@chativ.com"><Mail aria-hidden="true" /> Talk to our team</a>
          </Button>
        </div>
      </section>

      <section className="product-window" aria-label="Chativ project workspace preview">
        <aside className="product-sidebar">
          <Brand />
          <nav aria-label="Workspace">
            <span className="active"><FolderKanban aria-hidden="true" /> Projects</span>
            <span><LayoutDashboard aria-hidden="true" /> Overview</span>
            <span><Users aria-hidden="true" /> Team</span>
            <small>Workspace</small>
            <span><Settings aria-hidden="true" /> Settings</span>
          </nav>
        </aside>

        <div className="product-main">
          <div className="product-toolbar">
            <label><Search aria-hidden="true" /><span>Search anything...</span></label>
            <div><span>Live workspace</span><Bell aria-hidden="true" /></div>
          </div>
          <div className="product-heading">
            <div><span>PROJECTS</span><h2>Active work</h2></div>
            <Button variant="hero" size="sm">New project</Button>
          </div>
          <div className="project-table">
            <div className="project-row project-labels">
              <span>Project</span><span>Owner</span><span>Status</span><span>Progress</span>
            </div>
            {projects.map((project) => (
              <div className="project-row" key={project.name}>
                <strong>{project.name}</strong>
                <span>{project.owner}</span>
                <span className="project-status"><CircleCheck aria-hidden="true" /> {project.status}</span>
                <span>{project.progress}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}