import imgBaaS from "../../imports/Desktop826/e500f7196e8b800b0f89f69aa152d44a61115bb5.png";

export function CapabilitiesIntro() {
  return (
    <section className="bg-[#eaeaee] relative size-full" data-name="Explore Lead Capabilities">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="BaaS">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBaaS} />
      </div>
      <div className="absolute inset-0 bg-[rgba(234,234,238,0.1)] pointer-events-none" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] left-1/2 not-italic text-[#2b2c39] text-[116px] text-center top-1/2 tracking-[-2.32px] w-[1600px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none">Explore Lead's Capabilities</p>
      </div>
    </section>
  );
}
