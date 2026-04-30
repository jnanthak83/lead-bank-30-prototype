import { useEffect, useState } from "react";

export function ScrollIndicator({ total, theme }: { total: number; theme: "light" | "dark" }) {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const f = max > 0 ? window.scrollY / max : 0;
      const idx = Math.min(total, Math.max(1, Math.floor(f * total) + 1));
      setIndex(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [total]);

  const color = theme === "dark" ? "#2b2c39" : "#eaeaee";

  return (
    <div
      className="fixed flex flex-col gap-[7px] items-start z-[60] pointer-events-none"
      style={{ left: 40, bottom: 120, width: 22 }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const active = i === index - 1;
        return (
          <div
            key={i}
            className="h-px rounded-[10px]"
            style={{
              background: color,
              opacity: active ? 1 : 0.2,
              width: active ? "100%" : 12,
              transition: "width 0.3s ease, opacity 0.3s ease",
            }}
          />
        );
      })}
    </div>
  );
}
