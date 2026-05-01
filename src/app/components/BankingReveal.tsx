import { motion } from "motion/react";
import { useEffect, useRef, useState, type ComponentType } from "react";

type BankingRevealProps = {
  Section: ComponentType<any>;
  sectionProps?: Record<string, unknown>;
  backgroundName: "Personal Banking" | "Business Banking";
  baseWidth?: number;
  baseHeight?: number;
};

export function BankingReveal({
  Section,
  sectionProps = {},
  backgroundName,
  baseWidth = 1920,
  baseHeight = 1080,
}: BankingRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / baseWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [baseWidth]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ position: "relative", aspectRatio: `${baseWidth} / ${baseHeight}` }}
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div
          className="banking-background-layer absolute left-0 top-0"
          data-background-name={backgroundName}
          style={{
            width: `${baseWidth}px`,
            height: `${baseHeight}px`,
            scale,
            transformOrigin: "top left",
          }}
        >
          <Section {...sectionProps} />
        </div>
      </div>
      <motion.div
        className="banking-content-layer absolute left-0 top-0"
        style={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          scale,
          transformOrigin: "top left",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Section {...sectionProps} />
      </motion.div>
    </div>
  );
}
