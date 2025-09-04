// src/sections/Work.jsx
import { useEffect, useMemo, useState } from "react";
import ProjectModal from "../components/ProjectModal.jsx";

/* Live screenshot URL for each project */
const shot = (url) =>
  `https://image.thum.io/get/width/1400/noanimate/${encodeURIComponent(url)}`;

/* Your projects */
const PROJECTS = [
  {
    title: "Portfolio",
    href: "https://portfolio-tinanorouzi.netlify.app/",
    problem: "Showcasing projects with personality, not a generic template.",
    solution: "Neon aesthetic, micro-interactions, and clean information blocks.",
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
    problem: "Tracking multiple social metrics in one place is hard and time-consuming.",
    solution: "A compact dashboard that aggregates KPIs with accessible contrast and cards.",
  },
  {
    title: "Spark English Kids",
    href: "https://spark-english-kids.netlify.app/",
    problem: "Kids struggle to stay engaged while learning vocabulary and simple grammar.",
    solution: "Fun, colorful UI with bite-sized exercises and clear progress cues.",
  },
  {
    title: "Nutrition Tracker",
    href: "https://nutritiontracker-tina.netlify.app/",
    problem: "It’s hard to visualize daily macros quickly and stay consistent with logging.",
    solution: "Simple inputs + visual feedback so users see trends instantly.",
  },
 
];

export default function Work() {
  const [open, setOpen] = useState(null);

  // attach screenshot URL once
  const cases = useMemo(
    () => PROJECTS.map((p) => ({ ...p, shot: shot(p.href) })),
    []
  );

  // scroll reveal
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-12">{`{ All Works }`}</h2>

        <div className="space-y-24">
          {cases.map((c, i) => (
            <article key={c.title} className="reveal" data-delay={(i % 3) + 1}>
              <div className={`work-case ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                {/* Tilted thumbnail (simple hover transform; no hook) */}
                <button
                  className="thumb-tilt group"
                  onClick={() => setOpen(c)}
                  aria-label={`Open preview of ${c.title}`}
                >
                  {/* real image layer + fallback provider */}
                  <img
                    className="bg-shot"
                    src={c.shot}
                    alt={c.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
                        c.href
                      )}?w=1400`;
                    }}
                  />
                  <div className="panel" />
                  <div className="glow" />
                </button>

                {/* Right copy */}
                <div className="case-copy lg:[direction:ltr]">
                  <h3 className="case-title">{c.title}</h3>

                  <p className="case-line">
                    <strong className="case-key">Problem:</strong> {c.problem}
                  </p>
                  <p className="case-line">
                    <strong className="case-key">Solution:</strong> {c.solution}
                  </p>

                  <div className="visit-wrap mt-4">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="visit-btn"
                    >
                      visit →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full-screen modal */}
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
