import Desktop795 from "../../imports/Desktop795-1/Desktop795-1-7644";
import Desktop796 from "../../imports/Desktop796-1/Desktop796-1-7702";
import Desktop797 from "../../imports/Desktop797-1/Desktop797-1-7771";
import Desktop806 from "../../imports/Desktop806-1/Desktop806-1-8046";
import { BankingReveal } from "./BankingReveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

const sections = [Desktop795, Desktop796, Desktop797, Desktop806];

export function BusinessBanking({
  onNavigate,
}: {
  onNavigate?: (page: Page, section?: string) => void;
}) {
  return (
    <div className="banking-page w-full relative">
      {sections.map((Section, i) => (
        <BankingReveal key={i} Section={Section} backgroundName="Business Banking" />
      ))}
      <SiteFooter theme="dark" onNavigate={onNavigate} />
    </div>
  );
}
