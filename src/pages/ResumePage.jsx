import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // open the PDF in a new tab
    window.open("/cv.pdf", "_blank");
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5 py-16 md:pl-[300px]">
      <h2 className="text-2xl font-semibold">Resume</h2>
      <p className="mt-4 text-white/80">
        My resume should have opened in a new tab. If it didn’t, you can{" "}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-emerald-400"
        >
          click here to view it
        </a>.
      </p>
    </div>
  );
}
