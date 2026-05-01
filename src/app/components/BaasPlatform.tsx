import Desktop824 from "../../imports/Desktop824/Desktop824";
import Desktop825 from "../../imports/Desktop825/Desktop825";
import Desktop826 from "../../imports/Desktop826/Desktop826";
import Desktop828 from "../../imports/Desktop828/Desktop828";
import Desktop829 from "../../imports/Desktop829/Desktop829";
import Desktop830 from "../../imports/Desktop830/Desktop830";
import Desktop831 from "../../imports/Desktop831/Desktop831";
import Desktop832 from "../../imports/Desktop832/Desktop832";
import Desktop833 from "../../imports/Desktop833/Desktop833";
import { CapabilitiesIntro } from "./CapabilitiesIntro";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

const sections = [Desktop824, Desktop825, Desktop826, CapabilitiesIntro, Desktop829, Desktop830, Desktop831, Desktop832, Desktop833, Desktop828];

export function BaasPlatform({
  onNavigate,
}: {
  onNavigate?: (page: Page, section?: string) => void;
}) {
  return (
    <div className="w-full relative">
      {sections.map((Section, i) => (
        <Reveal key={i}>
          <Section onNavigate={onNavigate} />
        </Reveal>
      ))}
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
