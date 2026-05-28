import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

export function getLenis() {
  return instance;
}

export function useLenis() {
  useEffect(() => {
    if (instance) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    instance = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      instance = null;
    };
  }, []);
}

export function smoothScrollTo(target: number | string | HTMLElement, offset = 0) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior: "smooth" });
  } else if (typeof target === "string") {
    const el = document.querySelector(target);
    if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
