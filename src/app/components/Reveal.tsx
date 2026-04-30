import { motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  baseWidth = 1920,
  baseHeight = 1080,
}: {
  children: ReactNode;
  baseWidth?: number;
  baseHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / baseWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [baseWidth]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ position: "relative", aspectRatio: `${baseWidth} / ${baseHeight}` }}
    >
      <motion.div
        className="absolute top-0 left-0"
        style={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          scale,
          transformOrigin: "top left",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
