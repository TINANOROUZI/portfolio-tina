// NeonPolys.jsx — drop-in neon polygon background (no Sass needed)
import { useMemo } from "react";

// Same idea as your $data: initial position + drift delta (in viewport units)
const DATA = [
  { ini: [50, 50] },                          // 50vw 50vh
  { ini: [75, 25] },                          // 75vw 25vh
  { ini: [25, 75] },                          // 25vw 75vh
  { ini: [5, 39],  dif: [80, -47] },          // 5vw 39vh,   move +80vw -47vh
  { ini: [85, 73], dif: [-65, 7] },           // 85vw 73vh,  move -65vw +7vh
];

const NP = 3;           // number of shapes per group (like $np)
const DURATION = 6;     // seconds (like $t)
const INNER_SCALE = 0.84; // inner outline scale relative to outer (~ “border width”)

// Build a polygon string for clip-path (outer or inner)
function polygonPoints(n, offsetDeg = -90, scale = 1) {
  const pts = [];
  const rad = (deg) => (deg * Math.PI) / 180;
  const step = 360 / n;
  for (let i = 0; i <= n; i++) {
    const a = rad(offsetDeg + i * step);
    const x = 50 + 50 * scale * Math.cos(a);
    const y = 50 + 50 * scale * Math.sin(a);
    pts.push(`${x}% ${y}%`);
  }
  return `polygon(${pts.join(",")})`;
}

export default function NeonPolys({
  className = "",
  countPerGroup = NP,
  duration = DURATION
}) {
  // Precompute shapes so they don't re-randomize on every render
  const shapes = useMemo(() => {
    const out = [];
    DATA.forEach(({ ini, dif = [0, 0] }, gIndex) => {
      for (let i = 0; i < countPerGroup; i++) {
        const n = 3 + Math.floor(Math.random() * 7);        // 3..9 sides
        const offset = Math.floor(Math.random() * 360);     // 0..359 deg
        const hue = Math.floor(Math.random() * 360);        // neon hue
        const p0 = polygonPoints(n, offset, 1);             // outer
        const p1 = polygonPoints(n, offset, INNER_SCALE);   // inner (like border width)
        out.push({
          top: ini[1], left: ini[0],
          dx: dif[0], dy: dif[1],
          hue, p0, p1,
          delay: -(i * duration) / countPerGroup,           // stagger like your nth-child logic
        });
      }
    });
    return out;
  }, [countPerGroup, duration]);

  return (
    <div className={`neon-polys ${className}`} aria-hidden="true">
      {shapes.map((s, i) => (
        <span
          key={i}
          className="poly"
          style={{
            "--top": `${s.top}vh`,
            "--left": `${s.left}vw`,
            "--dx": `${s.dx}vw`,
            "--dy": `${s.dy}vh`,
            "--hue": s.hue,
            "--p0": s.p0,
            "--p1": s.p1,
            "--t": `${duration}s`,
            "--delay": `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
