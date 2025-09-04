// src/components/nav/HamburgerFab.jsx
import { useState } from "react";
import useBodyLock from "../../hooks/useBodyLock.js";
import OverlayMenu from "./OverlayMenu.jsx";

export default function HamburgerFab() {
  const [open, setOpen] = useState(false);
  useBodyLock(open);

  return (
    <>
      {/* Hide the hamburger when the overlay is open */}
      {!open && (
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="fixed top-4 right-4 z-[70] h-12 w-12 rounded-xl bg-accent text-bg
                     shadow-[0_10px_30px_rgba(34,255,102,.35)] grid place-items-center"
        >
          <span className="relative block h-[14px] w-7">
            <span className="absolute left-0 top-0 h-[3px] w-7 bg-[#0b0f17] rounded"></span>
            <span className="absolute left-0 top-[5.5px] h-[3px] w-7 bg-[#0b0f17] rounded"></span>
            <span className="absolute left-0 bottom-0 h-[3px] w-7 bg-[#0b0f17] rounded"></span>
          </span>
        </button>
      )}

      <OverlayMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
