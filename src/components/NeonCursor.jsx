import { useEffect, useMemo, useRef, useState } from "react";

/** Glowing neon cursor (dot + ring) that replaces the system cursor on desktop. */
export default function NeonCursor({
  color = "#22ff66",       // your neon green
  ringSize = 34,           // outer ring diameter (px)
  dotSize = 8,             // center dot diameter (px)
  lerp = 0.18,             // smoothing for ring follow (0..1)
}) {
  // only show on devices with a precise pointer (not touch)
  const isFine = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(pointer: fine)")?.matches ?? true;
  }, []);
  if (!isFine) return null;

  const TARGETS = 'a,button,[role="button"],[data-hand],.menu-link,.stripe';
  const ringRef = useRef(null);
  const dotRef  = useRef(null);

  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [ring, setRing]   = useState({ x: -100, y: -100 });
  const [overInteractive, setOverInteractive] = useState(false);
  const [visible, setVisible] = useState(true);
  const downRef = useRef(false);
  const rafRef = useRef(0);

  // hide system cursor (but keep I-beam on inputs)
  useEffect(() => {
    document.body.classList.add("neon-cursor-active");
    return () => document.body.classList.remove("neon-cursor-active");
  }, []);

  // mouse movement & click handlers
  useEffect(() => {
    const onMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
      const el = (e.target instanceof Element) ? e.target.closest(TARGETS) : null;
      setOverInteractive(Boolean(el));
      setVisible(true);
    };
    const onDown = (e) => {
      downRef.current = true;
      const el = (e.target instanceof Element) ? e.target.closest(TARGETS) : null;
      setOverInteractive(Boolean(el));
      // trigger pulse by toggling a class
      ringRef.current?.classList.remove("nc-pulse");
      // force reflow to restart animation
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ringRef.current?.offsetWidth;
      ringRef.current?.classList.add("nc-pulse");
    };
    const onUp = () => { downRef.current = false; };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // ring smoothing with RAF
  useEffect(() => {
    const tick = () => {
      setRing((r) => {
        const nx = r.x + (mouse.x - r.x) * lerp;
        const ny = r.y + (mouse.y - r.y) * lerp;
        return { x: nx, y: ny };
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouse.x, mouse.y, lerp]);

  const ringStyle = {
    transform: `translate(${ring.x - ringSize / 2}px, ${ring.y - ringSize / 2}px) scale(${downRef.current ? 0.92 : 1})`,
    opacity: visible ? 1 : 0,
    width: ringSize,
    height: ringSize,
    color,
  };
  const dotStyle = {
    transform: `translate(${mouse.x - dotSize / 2}px, ${mouse.y - dotSize / 2}px) scale(${downRef.current ? 0.8 : 1})`,
    opacity: visible ? 1 : 0,
    width: dotSize,
    height: dotSize,
    color,
  };

  return (
    <div className="neon-cursor-root" aria-hidden="true">
      <span
        ref={ringRef}
        className={`nc-ring ${overInteractive ? "nc-ring--active" : ""}`}
        style={ringStyle}
      />
      <span
        ref={dotRef}
        className={`nc-dot ${overInteractive ? "nc-dot--active" : ""}`}
        style={dotStyle}
      />
    </div>
  );
}
