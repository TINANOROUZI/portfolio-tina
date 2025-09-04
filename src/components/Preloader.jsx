export default function Preloader({ onEnter }) {
  return (
    <div className="fixed inset-0 z-[60] preloader-grid grid place-items-center">
      <div className="text-center px-4">
        {/* Big neon name */}
        <h1 className="font-display text-7xl sm:text-9xl text-accent tracking-[.25em] neon-outline">
          TINA
        </h1>

        <p className="mt-6 text-[--muted] max-w-md mx-auto">
          Click to enter
        </p>

        <button
          onClick={onEnter}
          className="btn-primary enter-btn mt-8 px-10 py-4 text-lg"
        >
          ENTER
        </button>
      </div>
    </div>
  );
}
