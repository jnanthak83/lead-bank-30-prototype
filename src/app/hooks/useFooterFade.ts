import { useEffect, useState } from "react";

// Fades fixed site chrome (scroll indicators / counter) out as the footer
// scrolls up into view, so it doesn't collide with the footer content.
// Uses rAF rather than scroll events because Lenis smooth-scroll suppresses
// native scroll events.
export function useFooterFade(fadeZone = 220) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const footer = document.querySelector("footer");
      let next = 1;
      if (footer) {
        const top = footer.getBoundingClientRect().top;
        const start = window.innerHeight; // footer just below the viewport
        const end = window.innerHeight - fadeZone; // footer risen into the chrome zone
        next = Math.min(1, Math.max(0, (top - end) / (start - end)));
      }
      setOpacity((prev) => (Math.abs(prev - next) < 0.01 ? prev : next));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fadeZone]);

  return opacity;
}
