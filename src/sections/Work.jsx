// src/sections/Work.jsx
import { useMemo, useState } from "react";
import ProjectModal from "../components/ProjectModal.jsx";

/* --------- local screenshots (most reliable) --------- */
import shotCalc from "../assets/shots/calc.jpg";
import shotSocial from "../assets/shots/social.jpg";
import shotSpark from "../assets/shots/spark.jpg";
import shotNutrition from "../assets/shots/nutrition.jpg";
import shotPortfolio from "../assets/shots/portfolio.jpg";

/* fallback CDN (used only if a local image is missing) */
const cdnShot = (url) =>
  `https://image.thum.io/get/width/1400/crop/900/noanimate/${encodeURIComponent(
    url
  )}`;

/* your projects */
const PROJECTS = [
  {
    title: "Portfolio (Older)",
    href: "https://portfolio-tinanorouzi.netlify.app/",
    problem:
      "Needed a clean personal site to showcase projects and contact info.",
    solution:
      "Created a simple, performant portfolio with strong typography and motion.",
    bgLocal: shotPortfolio,
  },
  {
    title: "Calculator",
    href: "https://calculator-tinanetlifyapp.netlify.app/",
    problem:
      "People need a clean, keyboard-friendly calculator that works great on phones.",
    solution:
      "Built a crisp UI with responsive layout and reliable operations.",
    bgLocal: shotCalc,
  },
  {
    title: "Social Media Dashboard",
    href: "https://socialmedia-dash-tinanetlifyapp.netlify.app/",
    problem:
      "Teams want a quick glance at growth metrics across multiple networks.",
    solution:
      "Implemented a compact dashboard with cards, trend colors, and dark theme.",
    bgLocal: shotSocial,
  },
  {
    title: "Spark English Kids",
    href: "https://spark-english-kids.netlify.app/",
    problem:
      "Parents want playful, engaging lessons with native-level tutors for kids.",
    solution:
      "Designed a friendly landing with clear CTAs, trust cues and fun visuals.",
    bgLocal: shotSpark,
  },
  {
    title: "Nutrition Tracker",
    href: "https://nutritiontracker-tina.netlify.app/",
    problem:
      "Users struggle to track macros and meals in a fast, lightweight UI.",
    solution:
      "Built a responsive tracker with quick add/search and helpful summaries.",
    bgLocal: shotNutrition,
  },
  
];

/* ===================  NEON 3D FRAME CSS  =================== */
function ProjectTiltStyles() {
  return (
    <style>{`
:root { --accent:#22ff66; }

.project-tilt {
  position: relative;
  width: 100%;
  border-radius: 26px;
  padding: 12px;
  background: rgba(11,15,23,.68);
  backdrop-filter: blur(6px);
  border: 2px solid var(--accent);
  box-shadow:
    inset 0 0 0 2px rgba(34,255,102,.10),
    0 0 24px rgba(34,255,102,.34),
    0 18px 60px rgba(0,0,0,.55);
  transform: perspective(800px) rotateY(18deg) rotateX(8deg) scale(.97);
  filter: blur(1.2px);
  opacity: .9;
  transition: transform .55s ease, filter .55s ease, opacity .55s ease,
             box-shadow .55s ease, border-color .55s ease;
  transform-style: preserve-3d;
}
.project-tilt:hover,
.project-tilt:focus-within {
  transform: perspective(800px) rotateY(-10deg) translateY(-18px) rotateX(8deg) scale(1);
  filter: blur(0);
  opacity: 1;
  border-color: rgba(34,255,102,.9);
  box-shadow:
    inset 0 0 0 2px rgba(34,255,102,.16),
    0 0 36px rgba(34,255,102,.45),
    0 30px 90px rgba(0,0,0,.60);
}
.project-tilt__panel {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(20,28,34,.75), rgba(10,14,18,.85));
  border: 1px solid rgba(234,241,255,.06);
}
.project-tilt__bgWrap{
  position: relative;
  width:100%; height:360px;
}
.project-tilt__img {
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit: cover; object-position: top center;
}
/* soft vignette so preview reads well */
.project-tilt__mask {
  position:absolute; inset:0; pointer-events:none;
  background: linear-gradient(180deg, rgba(0,0,0,.00), rgba(0,0,0,.18));
}
.fallback{
  position:absolute; inset:0; display:grid; place-items:center;
  font-weight:600; color:#a3ffbe; background:rgba(12,18,24,.6);
}

@media (max-width:1024px){ .project-tilt__bgWrap{ height:300px; } }
@media (max-width:640px){
  .project-tilt{ transform:none; filter:none; opacity:1; }
  .project-tilt__bgWrap{ height:220px; }
}
    `}</style>
  );
}

function NeonFrame({ src, fallbackSrc, onClick, label }) {
  const handleError = (e) => {
    // if local image missing, try CDN screenshot
    if (fallbackSrc) e.currentTarget.src = fallbackSrc;
  };

  return (
    <button className="project-tilt text-left" onClick={onClick} aria-label={label}>
      <div className="project-tilt__panel">
        <div className="project-tilt__bgWrap">
          <img
            src={src}
            onError={handleError}
            alt="Project preview"
            className="project-tilt__img"
            loading="lazy"
          />
          <div className="project-tilt__mask" />
        </div>
      </div>
    </button>
  );
}
/* =========================================================== */

export default function Work() {
  const [open, setOpen] = useState(null);
  const projects = useMemo(() => PROJECTS, []);

  return (
    <section id="work" className="relative overflow-hidden py-16 sm:py-24">
      <ProjectTiltStyles />

      {/* backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-10">{`{ All Works }`}</h2>

        <div className="space-y-20">
          {projects.map((p) => (
            <div
              key={p.title}
              className="grid md:grid-cols-12 gap-8 md:gap-10 items-center"
            >
              {/* LEFT: preview with background */}
              <div className="md:col-span-6 lg:col-span-7 justify-self-start w-full max-w-[640px]">
                <NeonFrame
                  src={p.bgLocal || cdnShot(p.href)}
                  fallbackSrc={cdnShot(p.href)}
                  onClick={() => setOpen(p)}
                  label={`Open ${p.title}`}
                />
              </div>

              {/* RIGHT: copy */}
              <div className="md:col-span-6 lg:col-span-5">
                <div className="inline-block border-2 border-[var(--accent)] rounded-xl px-4 py-2 text-2xl sm:text-3xl text-[var(--accent)] shadow-[0_0_20px_rgba(34,255,102,.35)] mb-4">
                  {p.title.toUpperCase()}
                </div>

                <p className="text-ink/80 mt-3">
                  <span className="text-[var(--accent)] font-semibold">Problem:</span>{" "}
                  {p.problem}
                </p>
                <p className="text-ink/80 mt-3">
                  <span className="text-[var(--accent)] font-semibold">Solution:</span>{" "}
                  {p.solution}
                </p>

                <div className="mt-6">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-xl bg-[var(--accent)] text-[#0b0f17] font-semibold px-6 py-3 shadow-[0_0_20px_rgba(34,255,102,.35)] hover:opacity-90 transition"
                  >
                    visit →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
