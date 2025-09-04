// src/components/ClickCursor.jsx
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Neon hand cursor that follows the mouse and pulses when you click.
 * It only shows over interactive targets: a, button, [role="button"], [data-hand]
 */
const TARGET_SELECTOR = 'a,button,[role="button"],[data-hand],.menu-link,.stripe';

function HandSVG({ down }) {
  // simple cartoon "index finger" hand — outlined neon style
  return (
    <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1,1)"
      >
        {/* index finger (pointing) */}
        <path d="M34 10v22" />
        {/* other fingers folded */}
        <path d="M26 20v10" />
        <path d="M18 24v8" />
        {/* palm/hand + thumb curve */}
        <path d="M42 22v13c0 6-4 10-10 10h-6c-6 0-10-4-10-10v-3" />
        <path d="M42 28h8" />
      </g>
    </svg>
  );
}

export default function ClickCursor() {
  // Disable on touch devices
  const isFinePointer = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(pointer: fine)")?.matches ?? true;
  }, []);
  if (!isFinePointer) return null;

  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [over, setOver] = useState(false);
  const [down, setDown] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const follow = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // is the mouse over an interactive element?
      const el = (e.target instanceof Element) ? e.target.closest(TARGET_SELECTOR) : null;
      setOver(Boolean(el));
    };

    const mdown = (e) => {
      const el = (e.target instanceof Element) ? e.target.closest(TARGET_SELECTOR) : null;
      setOver(Boolean(el));
      setDown(true);
      // restart pulse animation by changing the key
      setPulseKey((k) => k + 1);
    };

    const mup = () => setDown(false);
    const leave = () => setOver(false);

    window.addEventListener("mousemove", follow, { passive: true });
    window.addEventListener("mousedown", mdown, { passive: true });
    window.addEventListener("mouseup", mup, { passive: true });
    window.addEventListener("mouseleave", leave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", follow);
      window.removeEventListener("mousedown", mdown);
      window.removeEventListener("mouseup", mup);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  const style = {
    transform: `translate(calc(${pos.x}px - 12px), calc(${pos.y}px - 12px)) 
                ${down ? "scale(.9)" : "scale(1)"}`,
    opacity: over ? 1 : 0, // fade out when not over interactive
  };

  return (
    <div className="click-hand" style={style} ref={ref}>
      {/* the neon ring pulse on click */}
      <span key={pulseKey} className={`ring ${down ? "ring-on" : ""}`} />
      <HandSVG down={down} />
    </div>
  );
}
