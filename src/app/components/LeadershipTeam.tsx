import Desktop267 from "../../imports/Desktop267/Desktop267";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

export function LeadershipTeam({
  onNavigate,
}: {
  onNavigate?: (page: Page, section?: string) => void;
}) {
  return (
    <div className="w-full bg-white">
      <Reveal baseWidth={1440} baseHeight={5484}>
        <Desktop267 onNavigate={(p) => onNavigate?.(p)} />
      </Reveal>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
