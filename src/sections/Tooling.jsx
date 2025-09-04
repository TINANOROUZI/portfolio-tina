// src/sections/Tooling.jsx
import Reveal from "../components/Reveal.jsx";

/* ---------- inline icons ---------- */
const IcoReact = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse rx="9" ry="4" cx="12" cy="12" />
      <ellipse rx="9" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
      <ellipse rx="9" ry="4" cx="12" cy="12" transform="rotate(-60 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </g>
  </svg>
);
const IcoJS = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
    <text x="6" y="17" fontFamily="monospace" fontWeight="800" fontSize="12" fill="#0b0f17">JS</text>
  </svg>
);
const IcoHTML = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M4 2h16l-1.7 18.5L12 22l-6.3-1.5L4 2Z" fill="currentColor" />
  </svg>
);
const IcoCSS = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path d="M4 2h16l-1.7 18.5L12 22l-6.3-1.5L4 2Z" fill="currentColor" />
  </svg>
);
const IcoNext = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 16V8h1.6l3.8 5.7V8H16v8h-1.6L10.6 10.3V16H8Z" fill="currentColor"/>
  </svg>
);
const IcoPy = (p) => (
  <svg viewBox="0 0 24 24" {...p}>
    <g fill="currentColor">
      <path d="M12 3c3 0 4 .9 4 2.8V9H8.1C6 9 5 10 5 12s1 3 3.1 3H11v-1.6H8.4c-.9 0-1.4-.5-1.4-1.4s.5-1.4 1.4-1.4H16V5.8C16 4 15 3 12 3Z"/>
      <path d="M12 21c-3 0-4-.9-4-2.8V15h7.9c2.1 0 3.1-1 3.1-3s-1-3-3.1-3H13v1.6h2.6c.9 0 1.4.5 1.4 1.4s-.5 1.4-1.4 1.4H8v4.2C8 20.1 9 21 12 21Z" opacity=".85"/>
    </g>
  </svg>
);

const TOOLS = [
  { label: "React",      color: "#00d8ff", Icon: IcoReact },
  { label: "JavaScript", color: "#f7df1e", Icon: IcoJS    },
  { label: "HTML",       color: "#e44d26", Icon: IcoHTML  },
  { label: "CSS",        color: "#1572b6", Icon: IcoCSS   },
  { label: "Next.js",    color: "#ffffff", Icon: IcoNext  },
  { label: "Python",     color: "#3776ab", Icon: IcoPy    },
];

export default function Tooling() {
  return (
    <section id="tooling" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* neon box title */}
        <Reveal anim="up" delay={40}>
          <h2 className="connect-title mx-auto mb-6">TOOLING</h2>
        </Reveal>

        {/* single green box that reveals on scroll */}
        <Reveal anim="up">
          <div className="tool-wall">
            <div className="tool-grid-inside">
              {TOOLS.map((t, i) => (
                <div
                  key={t.label}
                  className="tool-pill"
                  style={{ "--tool": t.color, "--d": `${120 + i * 80}ms` }}
                >
                  <t.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
