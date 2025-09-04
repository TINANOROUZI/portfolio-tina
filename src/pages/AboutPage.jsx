// src/pages/AboutPage.jsx
import { useEffect, useState } from "react";
import Splash from "../components/Splash.jsx";

export default function AboutPage() {
  const [showSplash, setShowSplash] = useState(true);

  // Only run the reveal observer after the splash is gone
  useEffect(() => {
    if (showSplash) return;

    const els = Array.from(document.querySelectorAll(".reveal"));
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
  }, [showSplash]);

  // Show TINA neon splash every time you open /about
  if (showSplash) {
    return (
      <Splash
        name="TINA"
        autoDuration={5600}         // ~5.6 seconds
        showOncePerSession={false}  // always show on About
        onDone={() => setShowSplash(false)}
      />
    );
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* background like other pages */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="section-title mb-10">{`{ About }`}</h2>

        {/* main bio block */}
        <div className="reveal">
          <div className="rounded-2xl border border-stroke/80 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <p className="text-[15.5px] leading-7 text-ink/90">
              <strong className="text-accent">I’m Tina</strong> — a designer-developer
              with <strong>2+ years</strong> of experience crafting clean, minimal interfaces.
              I work at the intersection of visual design and front-end engineering,
              translating brand systems into accessible, production-ready components.
              My priorities are clarity, performance, and consistency: thoughtful typography,
              motion that explains rather than distracts, and fast, maintainable code.
            </p>

            <p className="text-[15.5px] leading-7 text-ink/90 mt-5">
              I build primarily with <strong>React</strong> and <strong>Next.js</strong>,
              using modern <strong>JavaScript</strong>, <strong>HTML/CSS</strong> (and Tailwind)
              to ship interfaces that meet accessibility standards and perform well against
              Core Web Vitals. I also use <strong>Python</strong> for quick tooling and automation
              when it helps the workflow.
            </p>

            <p className="text-[15.5px] leading-7 text-ink/90 mt-5">
              I’m currently pursuing a <strong>B.Sc. in Computer Engineering</strong> at
              <strong> Politecnico di Torino</strong>, focusing on human–computer interaction
              and web architectures. I enjoy small, fast teams where I can prototype quickly,
              iterate with feedback, and deliver polished experiences end-to-end.
            </p>

            {/* small stat pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill">2+ yrs experience</span>
              <span className="pill">React / Next.js</span>
              <span className="pill">JS • HTML • CSS</span>
              <span className="pill">Tailwind</span>
              <span className="pill">Performance & A11y</span>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="reveal mt-8 flex flex-wrap gap-3">
          <a href="mailto:tinanoruzi14@gmail.com" className="btn-primary">Email me</a>
          <a href="/resume.pdf" className="btn-ghost">Resume</a>
        </div>
      </div>
    </section>
  );
}
