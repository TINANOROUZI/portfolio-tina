// src/components/ProjectModal.jsx
import { useEffect, useMemo, useRef, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const wrapRef = useRef(null);
  const [useBackup, setUseBackup] = useState(false);

  // choose screenshot src (primary + backup)
  const imgSrc = useMemo(() => {
    if (!project) return "";
    if (!useBackup) return project.shot; // from Work.jsx (thum.io)
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.href)}?w=1400`;
  }, [project, useBackup]);

  // ESC closes
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // simple mouse tilt (no external hook)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--tiltX", `${-(py * 6)}deg`);
      el.style.setProperty("--tiltY", `${px * 10}deg`);
    };
    const reset = () => {
      el.style.setProperty("--tiltX", `0deg`);
      el.style.setProperty("--tiltY", `0deg`);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-backdrop active" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Left: tilted screenshot */}
        <div className="preview-col">
          <div ref={wrapRef} className="tilt-wrap" style={{ transform: "perspective(1000px)" }}>
            <div
              className="tilt-card"
              style={{
                transform: "rotateX(var(--tiltX,0deg)) rotateY(var(--tiltY,0deg))",
              }}
            >
              <img
                src={imgSrc}
                alt={project.title}
                className="tilt-img"
                loading="lazy"
                onError={() => setUseBackup(true)}
              />
              <div className="tilt-glow" />
            </div>
          </div>
        </div>

        {/* Right: copy + CTA */}
        <div className="content-col">
          <div className="title-neon">{project.title?.toUpperCase()}</div>

          <div className="mt-6 text-[15px] leading-7">
            <p className="mb-2">
              <span className="text-accent font-semibold">Problem:</span>{" "}
              {project.problem}
            </p>
            <p>
              <span className="text-accent font-semibold">Solution:</span>{" "}
              {project.solution}
            </p>
          </div>

          <a href={project.href} target="_blank" rel="noreferrer" className="visit-btn">
            visit →
          </a>
        </div>

        <button aria-label="Close" className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}
