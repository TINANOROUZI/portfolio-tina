// src/sections/Hero.jsx
import { Link } from "react-router-dom";
import tinaHero from "../assets/tina-hero.png"; // your girl-with-laptop image

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20">
      {/* background grid & stars (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: text (slide in from left) */}
        <div className="enter-left">
          <span className="pill mb-4 inline-flex">
            <span className="text-lg">👋</span> Hi There! I'm Tina
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-wide">
            A <span className="text-accent drop-shadow-[0_0_12px_rgba(34,255,102,.35)]">Frontend Engineer</span>.{" "}
            I Help Startups <span className="text-accent drop-shadow-[0_0_12px_rgba(34,255,102,.35)]">Launch</span> And{" "}
            <span className="text-accent drop-shadow-[0_0_12px_rgba(34,255,102,.35)]">Grow</span> Their Products
          </h1>

          <p className="mt-6 text-ink/80 max-w-2xl">
            I’m a practical, effective developer with experience leading cross-functional teams and
            delivering on schedule and within budget.
          </p>

          <div className="mt-8 flex items-center gap-4">
            {/* Go to Work page */}
            <Link to="/work" className="btn-primary">
              See my work
            </Link>

            {/* Scroll to contact on Home */}
            <Link to="/#contact" className="btn-ghost">
              Contact
            </Link>
          </div>
        </div>

        {/* RIGHT: image (slide in from right) */}
        <div className="enter-right delay-1">
          <img
            src={tinaHero}
            alt="Tina coding with laptop, books and coffee"
            className="w-full max-w-md md:max-w-lg ml-auto drop-shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
