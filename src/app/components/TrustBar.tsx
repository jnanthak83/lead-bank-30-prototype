import wreath from "../../imports/logos/wreath.svg";
import figma from "../../imports/logos/figma.svg?raw";
import anthropic from "../../imports/logos/anthropic.svg?raw";
import amazon from "../../imports/logos/amazon.svg?raw";
import google from "../../imports/logos/google.svg?raw";
import shopify from "../../imports/logos/shopify.svg?raw";
import uber from "../../imports/logos/uber.svg?raw";
import nvidia from "../../imports/logos/nvidia.svg?raw";
import ford from "../../imports/logos/ford.svg?raw";
import marriott from "../../imports/logos/marriott.svg?raw";
import metlife from "../../imports/logos/metlife.svg?raw";

const typeSettings = { fontVariationSettings: "'wdth' 100" };

// Curated from the Figma awards board (node 19:651).
const awards: { year: string; name: string }[] = [
  { year: "2026", name: "America's Best Startup Employers" },
  { year: "2026", name: "Forbes Fintech 50" },
  { year: "2025", name: "BaaS Innovation Award" },
  { year: "2025", name: "CNBC Disruptors 50" },
  { year: "2024", name: "World's Top 250 Fintech" },
  { year: "2025", name: "Most Loved Workplaces" },
];

const logoRowA = [amazon, google, shopify, uber, anthropic];
const logoRowB = [nvidia, ford, figma, marriott, metlife];

function AwardItem({ year, name }: { year: string; name: string }) {
  return (
    <div className="flex w-[152px] flex-col items-center text-center">
      <div className="relative flex h-[64px] w-[84px] items-center justify-center">
        <img src={wreath} alt="" className="absolute inset-0 h-full w-full" aria-hidden />
        <span
          className="relative pt-[8px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[16px] text-[#2b2c39]"
          style={typeSettings}
        >
          {year}
        </span>
      </div>
      <p
        className="mt-[8px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[11px] leading-[1.25] text-[#606171]"
        style={typeSettings}
      >
        {name}
      </p>
    </div>
  );
}

function LogoRow({ logos }: { logos: string[] }) {
  return (
    <div className="flex items-center justify-between gap-x-[24px]">
      {logos.map((svg, i) => (
        <span key={i} className="lead-logo" dangerouslySetInnerHTML={{ __html: svg }} />
      ))}
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="relative w-full px-[clamp(32px,9vw,154px)] py-[clamp(80px,9vw,120px)]">
      <div className="flex flex-wrap items-start justify-center gap-x-[clamp(28px,3.5vw,56px)] gap-y-[28px]">
        {awards.map((a) => (
          <AwardItem key={`${a.year}-${a.name}`} year={a.year} name={a.name} />
        ))}
      </div>

      <div className="mt-[clamp(52px,6vw,84px)] flex flex-col gap-[clamp(36px,4vw,56px)]">
        <LogoRow logos={logoRowA} />
        <LogoRow logos={logoRowB} />
      </div>
    </section>
  );
}
