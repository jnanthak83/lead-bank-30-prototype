import BlogHome from "../../imports/BlogHome-1/BlogHome-39-3063";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

export function Blog({
  onNavigate,
}: {
  onNavigate?: (page: Page, section?: string) => void;
}) {
  return (
    <div className="w-full bg-white">
      <Reveal baseWidth={1440} baseHeight={3000}>
        <BlogHome />
      </Reveal>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
