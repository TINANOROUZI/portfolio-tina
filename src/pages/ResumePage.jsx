import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // open the PDF in a new tab (avoids popup blockers because it’s a user navigation)
    window.open("/cv.pdf", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="min-h-[60vh] grid place-items-center px-6">
      <p className="text-white/70">
        Opening resume…{" "}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="underline text-emerald-400">
          click here if it didn’t open
        </a>.
      </p>
    </section>
  );
}
