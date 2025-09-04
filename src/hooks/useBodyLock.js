// src/hooks/useBodyLock.js
import { useEffect, useRef } from "react";

/**
 * Lock/unlock <body> scroll when `locked` is true/false.
 * - Prevents layout shift by compensating for scrollbar width
 * - iOS-safe: uses position:fixed to freeze scroll and restores it
 * - Reference-counted: multiple components can lock at the same time
 * - Optional: allow touch scrolling inside a specific element (e.g., modal content)
 *
 * Usage:
 *   useBodyLock(isOpen); // simple
 *   const scrollAreaRef = useRef(null);
 *   useBodyLock(isOpen, { allowScrollRef: scrollAreaRef });
 */

let locks = 0;
let savedStyles = null;
let savedScrollY = 0;

const isIOS = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  const iOSDevice =
    /iP(ad|hone|od)/.test(platform) ||
    (ua.includes("Mac") && "ontouchend" in document);
  return iOSDevice;
};

function applyLock(allowScrollEl) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const body = document.body;
  const docEl = document.documentElement;

  locks += 1;
  if (locks > 1) return; // already locked by someone else

  // Save current inline styles so we can restore exactly
  savedStyles = {
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
    position: body.style.position,
    top: body.style.top,
    width: body.style.width,
  };

  const scrollbarGap = window.innerWidth - docEl.clientWidth;
  savedScrollY = window.scrollY || window.pageYOffset || 0;

  if (isIOS()) {
    // iOS: fix the body in place to prevent background scroll
    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.width = "100%";
    // On iOS, overflow:hidden on <body> is unreliable; we also trap touchmove
    // except inside the allowed scroll element (if provided)
    const trap = (e) => {
      if (!allowScrollEl) {
        e.preventDefault();
        return;
      }
      let t = e.target;
      while (t && t !== document.body) {
        if (t === allowScrollEl) return; // allow scrolling inside
        t = t.parentNode;
      }
      e.preventDefault();
    };
    // store handler on body so we can remove it later
    body.__touchTrap__ = trap;
    document.addEventListener("touchmove", trap, { passive: false });
  } else {
    // Desktop/Android: hide scrollbar and compensate with padding
    body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      body.style.paddingRight = `${scrollbarGap}px`;
    }
  }
}

function releaseLock() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const body = document.body;

  if (locks === 0) return;
  locks -= 1;
  if (locks > 0) return; // still locked by someone else

  if (isIOS()) {
    // Remove iOS touch trap
    if (body.__touchTrap__) {
      document.removeEventListener("touchmove", body.__touchTrap__);
      delete body.__touchTrap__;
    }
    // Restore body styles
    body.style.position = savedStyles?.position || "";
    body.style.top = savedStyles?.top || "";
    body.style.width = savedStyles?.width || "";
    // Restore scroll position
    window.scrollTo(0, savedScrollY || 0);
  } else {
    body.style.overflow = savedStyles?.overflow || "";
    body.style.paddingRight = savedStyles?.paddingRight || "";
  }

  savedStyles = null;
  savedScrollY = 0;
}

export default function useBodyLock(locked, opts = {}) {
  const { allowScrollRef } = opts;
  const didLockRef = useRef(false);

  useEffect(() => {
    if (locked && !didLockRef.current) {
      applyLock(allowScrollRef?.current || null);
      didLockRef.current = true;
    } else if (!locked && didLockRef.current) {
      releaseLock();
      didLockRef.current = false;
    }
    return () => {
      if (didLockRef.current) {
        releaseLock();
        didLockRef.current = false;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locked, allowScrollRef?.current]);
}
