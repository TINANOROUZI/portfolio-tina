import { useEffect, useRef } from "react";

/**
 * Neon splash with a moving outline runner.
 * Auto-continues after `autoDuration` ms.
 *
 * Props:
 *  - name: string (default "TINA")
 *  - onDone: function
 *  - showOncePerSession: boolean (default true)
 *  - autoDuration: number ms (default 5000)
 */
export default function Splash({
  name = "TINA",
  onDone,
  showOncePerSession = true,
  autoDuration = 5000,
}) {
  const leavingRef = useRef(false);
  const timerRef = useRef(null);

  // Skip if already shown in this tab, else start auto timer
  useEffect(() => {
    const seen = showOncePerSession && sessionStorage.getItem("splash-seen");
    if (seen) {
      onDone?.();
      return;
    }
    timerRef.current = setTimeout(() => finish(), autoDuration);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    const el = document.getElementById("splash");
    if (el) el.classList.add("splash--leave");
    setTimeout(() => {
      if (showOncePerSession) sessionStorage.setItem("splash-seen", "1");
      onDone?.();
    }, 600);
  };

  // Allow Enter/Space or click to skip early
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="splash" className="splash" onClick={finish} role="button" aria-label="Enter">
      {/* background: keep your grid + stars */}
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="starfield" aria-hidden="true" />

      {/* BIG NAME with double stroke + moving runner */}
      <svg
        className="splash-svg"
        viewBox="0 0 1600 420"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22ff66" />
            <stop offset="1" stopColor="#22ff66" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          transform="translate(800,210)"
          textAnchor="middle"
          filter="url(#glow)"
          fill="none"
          stroke="url(#stroke)"
        >
          {/* Outer soft stroke */}
          <text
            x="0"
            y="0"
            fontFamily="'Oxanium', system-ui, sans-serif"
            fontWeight="800"
            fontSize="260"
            strokeWidth="22"
            strokeOpacity=".33"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="splash-flicker"
          >
            {name.toUpperCase()}
          </text>

          {/* Inner crisp stroke */}
          <text
            x="0"
            y="0"
            fontFamily="'Oxanium', system-ui, sans-serif"
            fontWeight="800"
            fontSize="260"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="splash-flicker"
          >
            {name.toUpperCase()}
          </text>

          {/* Moving neon runner along the outline (5s) */}
          <text
            x="0"
            y="0"
            fontFamily="'Oxanium', system-ui, sans-serif"
            fontWeight="800"
            fontSize="260"
            stroke="#22ff66"
            strokeWidth="14"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="runner"
          >
            {name.toUpperCase()}
          </text>
        </g>
      </svg>
    </div>
  );
}
