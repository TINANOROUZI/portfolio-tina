import { useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper.
 * Use: <Reveal anim="left|right|up|scale" delay={120}> ... </Reveal>
 * - Animates once when scrolled into view, then stays stable.
 */
export default function Reveal({
  children,
  anim = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  className = "",
  style,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-inview");
            if (once) io.unobserve(el);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-anim={anim}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
