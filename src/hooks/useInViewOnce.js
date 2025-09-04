import { useEffect, useRef, useState } from "react";

/** Returns [ref, inView] – becomes true once the element enters the viewport (one time). */
export default function useInViewOnce(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      options || { root: null, rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, options]);

  return [ref, inView];
}
