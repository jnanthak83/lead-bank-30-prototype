import { useEffect, useRef } from "react";
import Desktop834 from "../../imports/Desktop834/Desktop834";
import Desktop835 from "../../imports/Desktop835/Desktop835";
import Desktop836 from "../../imports/Desktop836/Desktop836";
import Desktop837 from "../../imports/Desktop837/Desktop837";
import Desktop838 from "../../imports/Desktop838/Desktop838";
import Desktop839 from "../../imports/Desktop839/Desktop839";
import { Reveal } from "./Reveal";

const ITEM_POOL = [Desktop835, Desktop836, Desktop837, Desktop838];

type SectionDef = { id: string; title: string };

const REPLACEABLE_TITLES = new Set([
  "Transfers",
  "Move",
  "ACH",
  "Wires",
  "Internal Transfers",
  "Stablecoin",
  "Solutions that are creating using this product",
]);

function RenamedSection({
  Section,
  title,
  smallLabel,
  index,
  total,
  extraProps,
}: {
  Section: React.ComponentType<any>;
  title: string;
  smallLabel: string;
  index: number;
  total: number;
  extraProps?: Record<string, unknown>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const apply = () => {
      const ps = root.querySelectorAll("p");
      ps.forEach((p) => {
        const t = p.textContent?.trim();
        if (!t) return;
        if (REPLACEABLE_TITLES.has(t)) {
          const fontSize = parseFloat(getComputedStyle(p).fontSize);
          if (fontSize > 40) {
            p.textContent = title;
          } else if (t === "Transfers" && fontSize < 20) {
            p.textContent = smallLabel;
          }
        }
        if (/^\d{2}\s*—\s*\d{2}$/.test(t)) {
          p.textContent = `${String(index + 1).padStart(2, "0")} — ${String(total).padStart(2, "0")}`;
        }
      });
    };
    apply();
    const obs = new MutationObserver(apply);
    obs.observe(root, { childList: true, subtree: true, characterData: true });
    return () => obs.disconnect();
  }, [title, smallLabel, index, total]);

  return (
    <div ref={ref}>
      <Reveal>
        <Section {...(extraProps || {})} />
      </Reveal>
    </div>
  );
}

type CapabilityKey = "lend" | "move" | "issue" | "store";
type UseCaseKey = "digital-banking" | "consumer-payments" | "crypto";

export function RenamedPlatform({
  smallLabel,
  overviewId,
  items,
  solutionsId,
  section,
  capability,
  onNavigate,
  onNavigateUseCase,
}: {
  smallLabel: string;
  overviewId: string;
  items: SectionDef[];
  solutionsId: string;
  section?: string;
  capability: CapabilityKey;
  onNavigate?: (page: CapabilityKey) => void;
  onNavigateUseCase?: (useCase: UseCaseKey) => void;
}) {
  useEffect(() => {
    if (section) {
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [section]);

  const allSections: {
    id: string;
    title: string;
    Section: React.ComponentType<any>;
    extraProps?: Record<string, unknown>;
  }[] = [
    { id: overviewId, title: smallLabel, Section: Desktop834 },
    ...items.map((it, i) => ({
      id: it.id,
      title: it.title,
      Section: ITEM_POOL[i % ITEM_POOL.length],
    })),
    {
      id: solutionsId,
      title: `Solutions built on ${smallLabel}`,
      Section: Desktop839,
      extraProps: { currentCapability: capability, onNavigate, onNavigateUseCase },
    },
  ];

  return (
    <div className="w-full relative">
      {allSections.map((s, i) => (
        <div key={s.id} id={s.id}>
          <RenamedSection
            Section={s.Section}
            title={s.title}
            smallLabel={smallLabel}
            index={i}
            total={allSections.length}
            extraProps={s.extraProps}
          />
        </div>
      ))}
    </div>
  );
}
