import { useEffect, useState } from "react";

export function ScrollFooter({
  label,
  total,
  theme,
}: {
  label: string;
  total: number;
  theme: "light" | "dark";
}) {
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

  const fg = theme === "dark" ? "#2b2c39" : "#eaeaee";
  const labelFg = theme === "dark" ? "#2b2c39" : "#ffffff";
  const line = theme === "dark" ? "rgba(43,44,57,0.1)" : "rgba(234,234,238,0.1)";
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[72px] z-[60] pointer-events-none">
      <div
        className="absolute left-1/2 -translate-x-1/2 h-px"
        style={{ top: 0, width: "min(1840px, calc(100% - 40px))", background: line }}
      />
      <p
        className="absolute font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px]"
        style={{ left: 40, top: 30, color: fg, lineHeight: 1.5 }}
      >
        {pad(index)} — {pad(total)}
      </p>
      <p
        className="absolute font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px]"
        style={{ left: 194, top: 28, color: labelFg, fontVariationSettings: "'wdth' 100", lineHeight: 1.2 }}
      >
        {label}
      </p>
    </div>
  );
}
