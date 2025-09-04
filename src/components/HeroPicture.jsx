import hero from "../assets/tina-hero.png";

export default function HeroPicture({ className = "", glow = true }) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className="
            absolute -z-10 inset-0 blur-2xl opacity-50
            bg-[radial-gradient(closest-side,_rgba(34,255,102,.26),_transparent_70%)]
            rounded-[3rem]
          "
          aria-hidden="true"
        />
      )}

      <img
        src={hero}
        alt="Tina working on a laptop with books and coffee"
        className="
          select-none pointer-events-none w-full h-auto
          [filter:drop-shadow(0_20px_60px_rgba(0,0,0,.55))]
          md:max-w-[640px]
        "
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
