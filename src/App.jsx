// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HamburgerFab from "./components/nav/HamburgerFab.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ResumePage from "./pages/ResumePage.jsx"; // ✅ added

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // 1) state-based scroll (used by ContactLink when navigating to "/")
    const targetFromState = location.state && location.state.scrollTo;
    if (targetFromState) {
      requestAnimationFrame(() => {
        document.getElementById(targetFromState)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    // 2) hash-based scroll (e.g. direct link /#contact)
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    // 3) default
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash, location.state]);

  return null;
}

export default function App() {
  return (
    <>
      <HamburgerFab />
      <ScrollHandler />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} /> {/* ✅ added */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
