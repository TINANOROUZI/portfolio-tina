import { useEffect } from "react";

// SVG markup as a plain string (no JSX parsing issues)
const HAND_SVG = `
<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
  <circle cx="32" cy="32" r="22" fill="none" stroke="#22ff66" stroke-width="4" opacity=".55"/>
  <path
    d="M25 19c-2.2 0-4 1.8-4 4v12.5c0 .3-.5.5-.8.3l-1.4-1a4 4 0 0 0-4.6 6.5l10.7 7.6a10 10 0 0 0 5.9 1.9h7.6c2.9 0 5.6-1.5 7.1-3.9l4.5-7.2c.7-1.1.5-2.5-.5-3.3-1.1-.9-2.7-.7-3.6.4l-1.7 2.1V24a3 3 0 1 0-6 0v7h-1v-9a3 3 0 1 0-6 0v9h-1V23a4 4 0 0 0-7-2.7z"
    fill="#22ff66"
    stroke="#0b0f17"
    stroke-width="2"
    stroke-linejoin="round"
  />
</svg>
`;

export default function ClickHandFX() {
  useEffect(() => {
    const spawn = (e) => {
      if (e.button !== 0) return; // only left click
      const el = document.createElement("div");
      el.className = "hand-click";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.innerHTML = HAND_SVG; // inject the SVG

      document.body.appendChild(el);

      const remove = () => el.remove();
      el.addEventListener("animationend", remove, { once: true });
      setTimeout(remove, 1200);
    };

    window.addEventListener("click", spawn);
    return () => window.removeEventListener("click", spawn);
  }, []);

  return null; // nothing to render
}
