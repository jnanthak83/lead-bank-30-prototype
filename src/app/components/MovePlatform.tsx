import { useEffect, useRef } from "react";
import Desktop834 from "../../imports/Desktop834/Desktop834";
import Desktop835 from "../../imports/Desktop835/Desktop835";
import Desktop836 from "../../imports/Desktop836/Desktop836";
import Desktop837 from "../../imports/Desktop837/Desktop837";
import Desktop838 from "../../imports/Desktop838/Desktop838";
import Desktop839 from "../../imports/Desktop839/Desktop839";
import { Reveal } from "./Reveal";

type CapabilityKey = "lend" | "move" | "issue" | "store";
type UseCaseKey = "digital-banking" | "consumer-payments" | "crypto";

function MoveSection({ Section, extraProps }: { Section: React.ComponentType<any>; extraProps?: Record<string, unknown> }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const apply = () => {
      root.querySelectorAll("p").forEach((p) => {
        if (p.textContent?.trim() === "Transfers") {
          const fs = parseFloat(getComputedStyle(p).fontSize);
          if (fs < 20) p.textContent = "Move";
        }
      });
    };
    apply();
    const obs = new MutationObserver(apply);
    obs.observe(root, { childList: true, subtree: true, characterData: true });
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <Reveal>
        <Section {...(extraProps || {})} />
      </Reveal>
    </div>
  );
}

export function MovePlatform({
  section,
  onNavigate,
  onNavigateUseCase,
}: {
  section?: string;
  onNavigate?: (page: CapabilityKey) => void;
  onNavigateUseCase?: (useCase: UseCaseKey) => void;
}) {
  const sections = [
    { component: Desktop834, id: "move-overview", extraProps: undefined as Record<string, unknown> | undefined },
    { component: Desktop835, id: "ach", extraProps: undefined },
    { component: Desktop836, id: "wires", extraProps: undefined },
    { component: Desktop837, id: "internal-transfers", extraProps: undefined },
    { component: Desktop838, id: "stablecoin", extraProps: undefined },
    {
      component: Desktop839,
      id: "move-additional",
      extraProps: { currentCapability: "move" as CapabilityKey, onNavigate, onNavigateUseCase },
    },
  ];
  useEffect(() => {
    if (section) {
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [section]);

  return (
    <div className="w-full relative">
      {sections.map(({ component: Section, id, extraProps }, i) => (
        <div key={i} id={id}>
          <MoveSection Section={Section} extraProps={extraProps} />
        </div>
      ))}
    </div>
  );
}
