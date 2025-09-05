export default function OverlayMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* dark background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* the panel */}
      <nav
        className="absolute right-0 top-0 h-full w-[min(88vw,420px)] 
                   bg-[#1cff64] overflow-y-auto px-6
                   pt-[calc(env(safe-area-inset-top)+16px)]
                   pb-[calc(env(safe-area-inset-bottom)+24px)]"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-black/80 text-3xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        <ul className="mt-16 flex flex-col gap-8">
          <li>
            <a
              href="/"
              className="block text-4xl sm:text-5xl font-extrabold"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/work"
              className="block text-4xl sm:text-5xl font-extrabold"
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-4xl sm:text-5xl font-extrabold"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="/resume"
              className="block text-4xl sm:text-5xl font-extrabold"
            >
              RESUME
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block text-4xl sm:text-5xl font-extrabold"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
