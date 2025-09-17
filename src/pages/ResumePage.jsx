import { useEffect } from "react";
import resumePdf from "../assets/cv.pdf"; // ← your file

export default function ResumePage() {
  useEffect(() => {
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="min-h-[60vh] grid place-items-center px-6">
      <p className="text-white/70">
        Opening resume…{" "}
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-emerald-400"
        >
          click here if it didn’t open
        </a>.
      </p>
    </section>
  );
}
