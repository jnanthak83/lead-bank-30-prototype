import type { Page } from "../App";
import { SiteFooter } from "./SiteFooter";

type StubPageProps = {
  title: string;
  eyebrow: string;
  onNavigate?: (page: Page, section?: string) => void;
};

export function StubPage({ title, eyebrow, onNavigate }: StubPageProps) {
  return (
    <div className="min-h-screen bg-[#eaeaee] text-[#2b2c39] pt-[132px]">
      <main className="mx-auto flex min-h-[calc(100vh-132px)] max-w-[1840px] flex-col justify-center px-[40px] py-[96px]">
        <p
          className="leading-[normal] font-['Lead_Sans_Variable:Medium',sans-serif] text-[13px] uppercase tracking-[1.2px] text-[#606171]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {eyebrow}
        </p>
        <h1
          className="mt-[24px] max-w-[900px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[56px] leading-[1.05] md:text-[96px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {title}
        </h1>
        <p
          className="leading-[normal] mt-[32px] max-w-[640px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[22px] text-[#606171]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          This page is ready for content.
        </p>
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
