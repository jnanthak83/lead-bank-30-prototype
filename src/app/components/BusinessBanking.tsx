import { useEffect } from "react";
import { smoothScrollTo } from "../hooks/useLenis";
import Desktop795 from "../../imports/Desktop795-1/Desktop795-1-7644";
import Desktop796 from "../../imports/Desktop796-1/Desktop796-1-7702";
import Desktop797 from "../../imports/Desktop797-1/Desktop797-1-7771";
import Desktop806 from "../../imports/Desktop806-1/Desktop806-1-8046";
import { BankingReveal } from "./BankingReveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

const sections = [
  { id: "business-overview", Section: Desktop795 },
  { id: "business-recognition", Section: Desktop796 },
  { id: "business-products", Section: Desktop797 },
  { id: "business-services", Section: Desktop806 },
];

const productTabBySection: Record<string, number> = {
  "business-checking": 0,
  "business-savings": 1,
  "business-loans": 2,
};

export function BusinessBanking({
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
      const targetId = productTab !== undefined ? "business-products" : section;
      const el = document.getElementById(targetId);
      if (el) smoothScrollTo(el);
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [productTab, section]);

  return (
    <div className="banking-page w-full relative">
      {sections.map(({ id, Section }) => (
        <div key={id} id={id}>
          <BankingReveal
            Section={Section}
            backgroundName="Business Banking"
            sectionProps={id === "business-products" ? { initialTab: productTab } : undefined}
          />
        </div>
      ))}
      <SiteFooter theme="dark" onNavigate={onNavigate} />
    </div>
  );
}
