import { useEffect } from "react";
import Desktop776 from "../../imports/Desktop776-1/Desktop776";
import Desktop777 from "../../imports/Desktop777/Desktop777";
import Desktop780 from "../../imports/Desktop780/Desktop780";
import Desktop794 from "../../imports/Desktop794/Desktop794";
import { BankingReveal } from "./BankingReveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

const sections = [
  { id: "personal-overview", Section: Desktop776 },
  { id: "personal-recognition", Section: Desktop777 },
  { id: "personal-products", Section: Desktop780 },
  { id: "personal-services", Section: Desktop794 },
];

const productTabBySection: Record<string, number> = {
  "personal-checking": 0,
  "personal-savings": 1,
  "personal-investment-savings": 2,
};

export function PersonalBanking({
  onNavigate,
  section,
}: {
  onNavigate?: (page: Page, section?: string) => void;
  section?: string;
}) {
  const productTab = section ? productTabBySection[section] : undefined;

  useEffect(() => {
    if (!section) return;

    const timeout = window.setTimeout(() => {
      const targetId = productTab !== undefined ? "personal-products" : section;
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [productTab, section]);

  return (
    <div className="banking-page w-full relative">
      {sections.map(({ id, Section }) => (
        <div key={id} id={id}>
          <BankingReveal
            Section={Section}
            backgroundName="Personal Banking"
            sectionProps={id === "personal-products" ? { initialTab: productTab } : undefined}
          />
        </div>
      ))}
      <SiteFooter theme="dark" onNavigate={onNavigate} />
    </div>
  );
}
