// src/components/ContactLink.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function ContactLink({ className = "", children = "Contact", onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const go = () => {
    const el = document.getElementById("contact") || document.querySelector("#contact");
    if (el) {
      // already on the homepage — just smooth scroll
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // not on the homepage — navigate there, then scroll
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  const handle = (e) => {
    e.preventDefault();
    onClick?.(e);
    // slight delay gives Android time to close overlays etc. before scroll
    setTimeout(go, 0);
  };

  return (
    <a href="/#contact" className={className} onClick={handle} role="link">
      {children}
    </a>
  );
}
