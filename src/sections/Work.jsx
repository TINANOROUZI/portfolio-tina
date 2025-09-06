// src/sections/Work.jsx
import { useMemo, useState } from "react";

/* ---------- robust screenshot chain (so backgrounds always load) ---------- */
const providers = [
  (url) => `https://image.thum.io/get/width/1400/noanimate/${encodeURIComponent(url)}`,
  (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400`,
];

function ShotImage({ url, alt }) {
  const [idx, setIdx] = useState(0);
  const tryNext = () => setIdx((i) => Math.min(i + 1, providers.length));
  const src = idx < providers.length ? providers[idx](url) : "";

  return src ? (
    <img
      src={src}
      alt={alt}
      className="project-tilt__screen"
      onError={tryNext}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div className="project-tilt__placeholder" />
  );
}

/* ---------- your projects ---------- */
const PROJECTS = [
  {
    title: "Portfolio",
    href: "https://portfolio-tinanorouzi.netlify.app/",
    problem: "I needed a fast, focused portfolio to showcase work.",
    solution: "Neon, grid-styled experience with strong motion and clear navigation.",
  },
  
  
  
  
  
  
  
  {
    title: "Calculator",
    href: "https://calculator-tinanetlifyapp.netlify.app/",
    problem: "People need a clean, keyboard-friendly calculator that works great on phones.",
    solution: "Built a crisp UI with responsive layout and reliable operations.",
  },
  {
    title: "Social Media Dashboard",
    href: "https://socialmedia-dash-tinanetlifyapp.netlify.app/",
    problem: "Teams want one place to monitor engagement across multiple networks.",
    solution: "Fast dashboard with cards, charts, and accessible color theming.",
  },
  {
    title: "Spark English Kids",
    href: "https://spark-english-kids.netlify.app/",
    problem: "Parents want fun, safe ways for kids to learn English.",
    solution: "Playful interface with friendly CTAs and content focused on outcomes.",
  },
  {
    title: "Nutrition Tracker",
    href: "https://nutritiontracker-tina.netlify.app/",
    problem: "Tracking meals and macros is tedious without a simple mobile tool.",
    solution: "Easy log flow, history views, and clear daily targets on mobile.",
  },
  
];

/* ===================  3D NEON TILT STYLES  =================== */
function ProjectTiltStyles() {
  return (
    <style>{`
:root { --accent:#22ff66; }

/* outer 3D frame — BLUR at rest, POP on hover */
.project-tilt {
  position: relative;
  border-radius: 26px;
  padding: 14px;
  background: rgba(11,15,23,.72);
  backdrop-filter: blur(6px);
  border: 2px solid var(--accent);
  box-shadow:
    inset 0 0 0 2px rgba(34,255,102,.10),
    0 0 26px rgba(34,255,102,.34),
    0 22px 68px rgba(0,0,0,.55);

  transform:
    perspective(900px)
    rotateY(25deg) scale(0.92)
    rotateX(10deg);
  filter: blur(2px);
  opacity: .55;

  transform-style: preserve-3d;
  transition:
    transform .6s cubic-bezier(.22,.61,.36,1),
    filter   .6s ease,
    opacity  .6s ease,
    box-shadow .6s ease,
    border-color .6s ease;
}

/* hover = POP (no click needed) */
.project-tilt:hover,
.project-tilt:focus-within {
  transform:
    perspective(900px)
    rotateY(-15deg)
    translateY(-22px)
    rotateX(10deg)
    scale(1);
  filter: none;
  opacity: 1;
  border-color: rgba(34,255,102,.9);
  box-shadow:
    inset 0 0 0 2px rgba(34,255,102,.15),
    0 0 40px rgba(34,255,102,.45),
    0 30px 90px rgba(0,0,0,.60);
}

/* inner panel + screen */
.project-tilt__panel {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(20,28,34,.75), rgba(10,14,18,.85));
  border: 1px solid rgba(234,241,255,.06);
}

.project-tilt__surface {
  position: relative;
  width: 100%;
  height: 360px; /* keep height so text fits beside it */
}

.project-tilt__screen {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
  filter: saturate(.98) contrast(1.02);
}

/* neon placeholder if all providers fail */
.project-tilt__placeholder {
  position: absolute; inset: 0;
  background:
    radial-gradient(800px 400px at 20% 10%, rgba(34,255,102,.18), transparent 50%),
    radial-gradient(800px 400px at 80% 90%, rgba(34,255,102,.12), transparent 55%),
    #0b0f17;
}

/* soft bloom + bottom neon bar */
.project-tilt::before {
  content:""; position:absolute; inset:-8%;
  border-radius:32px; pointer-events:none;
  background:
    radial-gradient(70% 100% at 15% 0%, rgba(34,255,102,.25), transparent 55%),
    radial-gradient(110% 80% at 85% 100%, rgba(34,255,102,.18), transparent 60%);
  filter: blur(14px); opacity:.9; z-index:0;
}
.project-tilt::after {
  content:""; position:absolute; left:8%; right:8%; bottom:-8px; height:7px;
  border-radius:999px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  filter: blur(4px); opacity:.8;
}

/* vignette */
.project-tilt__mask {
  position:absolute; inset:0; pointer-events:none;
  background: linear-gradient(180deg, rgba(0,0,0,.00), rgba(0,0,0,.18));
}

/* responsive */
@media (max-width:1024px){ .project-tilt__surface{ height:300px; } }
@media (max-width:640px){
  .project-tilt{ transform:none; filter:none; opacity:1; }
  .project-tilt__surface{ height:220px; }
}
    `}</style>
  );
}

/* one project row */
function WorkRow({ p }) {
  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
      {/* LEFT: 3D animated preview — NOT clickable */}
      <div className="md:col-span-6 lg:col-span-7 w-full max-w-[640px]">
        <div
          className="project-tilt"
          role="img"
          aria-label={`${p.title} preview`}
          title={p.title}
          // no onClick here -> not clickable, just hover animation
        >
          <div className="project-tilt__panel">
            <div className="project-tilt__surface">
              <ShotImage url={p.href} alt={`${p.title} screenshot`} />
              <div className="project-tilt__mask" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Title / Problem / Solution / Visit */}
      <div className="md:col-span-6 lg:col-span-5">
        <h3
          className="inline-block text-3xl sm:text-4xl font-extrabold tracking-wide text-emerald-400
                     px-4 py-2 rounded-xl border border-emerald-500/40
                     shadow-[0_0_20px_rgba(34,255,102,.35),inset_0_0_20px_rgba(34,255,102,.15)]
                     mb-5"
        >
          {p.title.toUpperCase()}
        </h3>

        <p className="text-[15.5px] leading-7 text-ink/90">
          <span className="text-accent font-semibold">Problem:</span> {p.problem}
        </p>
        <p className="text-[15.5px] leading-7 text-ink/90 mt-2">
          <span className="text-accent font-semibold">Solution:</span> {p.solution}
        </p>

        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="visit-btn mt-6 inline-flex"
        >
          visit →
        </a>
      </div>
    </article>
  );
}

/* ===================  PAGE  =================== */
export default function Work() {
  const items = useMemo(() => PROJECTS, []);

  return (
    <section id="work" className="relative overflow-hidden py-16 sm:py-24">
      <ProjectTiltStyles />

      {/* background grid + stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-10">{`{ All Works }`}</h2>

        <div className="space-y-20">
          {items.map((p) => (
            <WorkRow key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
