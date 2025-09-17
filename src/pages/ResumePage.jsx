import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.open("/cv.pdf", "_blank");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-white/70">
        Opening resume...{" "}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-emerald-400"
        >
          Click here if it doesn’t open.
        </a>
      </p>
    </div>
  );
}
