import Desktop776 from "../../imports/Desktop776-1/Desktop776";
import Desktop777 from "../../imports/Desktop777/Desktop777";
import Desktop780 from "../../imports/Desktop780/Desktop780";
import Desktop794 from "../../imports/Desktop794/Desktop794";
import { BankingReveal } from "./BankingReveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

const sections = [Desktop776, Desktop777, Desktop780, Desktop794];

export function PersonalBanking({
  onNavigate,
}: {
  onNavigate?: (page: Page, section?: string) => void;
}) {
  return (
    <div className="banking-page w-full relative">
      {sections.map((Section, i) => (
        <BankingReveal key={i} Section={Section} backgroundName="Personal Banking" />
      ))}
      <SiteFooter theme="dark" onNavigate={onNavigate} />
    </div>
  );
}
