import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* --- Inline icons --- */
const Ico = {
  GitHub: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.35-1.79-1.35-1.79-1.11-.77.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.09 1.86 2.85 1.32 3.54 1.01.11-.79.43-1.32.78-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.31-1.23 3.31-1.23.66 1.66.26 2.88.13 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.44.38.83 1.12.83 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  ),
  Email: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2Zm0 6.5 8 4.8 8-4.8V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    </svg>
  ),
  Telegram: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M9.15 14.32 8.95 19.2a1 1 0 0 0 1.6.85l2.15-1.5 3.9 2.9a1 1 0 0 0 1.56-.61L21.2 6.6a1 1 0 0 0-1.33-1.17L2.52 10.2a1 1 0 0 0 .02 1.9l5.02 1.9 8.85-5.6-7.26 6.92Z" />
    </svg>
  ),
};

function Stripe({ href, color, label, Icon, delayMs }) {
  return (
    <a
      className="stripe"
      href={href}
      target={href.startsWith("#") || href.startsWith("/") ? "_self" : "_blank"}
      rel="noreferrer"
      style={{ backgroundColor: color, transitionDelay: `${delayMs}ms` }}
    >
      <div className="stripe-inner">
        <Icon className="w-7 h-7 md:w-8 md:h-8 opacity-90 mb-3 md:mb-4" />
        <span className="stripe-text">{label}</span>
      </div>
    </a>
  );
}

export default function OverlayMenu({ open, onClose }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const stripes = [
    { label: "Github",   href: "https://github.com/TINANOROUZI",                     color: "#25282d", Icon: Ico.GitHub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tinanorouzimoghaddam",  color: "#0b5fa4", Icon: Ico.LinkedIn },
    { label: "Email",    href: "mailto:tinanoruzi14@gmail.com",                      color: "#35aef3", Icon: Ico.Email },
    { label: "Telegram", href: "https://t.me/tinanoruzi",                            color: "#0b62f5", Icon: Ico.Telegram },
  ];

  const menu = [
    { label: "HOME",   to: "/" },
    { label: "WORK",   to: "/work" },
    { label: "ABOUT",  to: "/about" },
    { label: "RESUME", href: "/resume.pdf", newTab: true },
    { label: "CONTACT",href: "/#contact" },
  ];

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] bg-[#0a0f16]/95 overlay-enter ${open ? "active" : ""}`}
      style={{ backdropFilter: "blur(8px)" }}
      aria-hidden={!open}
    >
      {/* top bar + close */}
      <div className="h-20 bg-accent flex items-center justify-end pr-4 sm:pr-6 shadow-[0_6px_24px_rgba(34,255,102,.25)]">
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="group grid place-items-center p-2 rounded-md hover:scale-105 active:scale-95 transition z-[100]"
        >
          <svg width="38" height="38" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" stroke="#0b0f17" strokeWidth="7" strokeLinecap="round" opacity=".22" />
            <path d="M5 5l14 14M19 5L5 19" stroke="#22ff66" strokeWidth="3.5" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 8px rgba(34,255,102,.45))" }} />
          </svg>
        </button>
      </div>

      <div className="flex h-[calc(100%-80px)]">
        {/* LEFT STRIPES */}
        <div className="flex w-[36%] min-w-[120px] md:w-1/2 h-full">
          {stripes.map((s, i) => (
            <Stripe key={s.label} {...s} delayMs={120 + i * 100} />
          ))}
        </div>

        {/* RIGHT MENU */}
        <div className="flex-1 grid place-items-center p-4 sm:p-6">
          <ul className="w-full max-w-[520px] space-y-5">
            {menu.map((m, i) => (
              <li key={m.label} className="reveal" data-delay={i + 1} onMouseEnter={() => setActive(i)}>
                {"to" in m ? (
                  <Link to={m.to} onClick={onClose} className="menu-link font-stencil">
                    <span className={`pointer ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}>👉</span>
                    {m.label}
                  </Link>
                ) : (
                  <a
                    href={m.href}
                    onClick={onClose}
                    className="menu-link font-stencil"
                    target={m.newTab ? "_blank" : "_self"}
                    rel={m.newTab ? "noreferrer" : undefined}
                  >
                    <span className={`pointer ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}>👉</span>
                    {m.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
