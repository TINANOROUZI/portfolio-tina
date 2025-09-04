// src/pages/HomePage.jsx
import Hero from "../sections/Hero.jsx";
import Tooling from "../sections/Tooling.jsx";
import Connect from "../sections/Connect.jsx";

export default function HomePage() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Tooling />
      </main>
      <Connect /> {/* <-- must be present so /#contact can scroll here */}
    </>
  );
}
