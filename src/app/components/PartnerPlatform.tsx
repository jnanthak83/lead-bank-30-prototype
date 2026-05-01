import { ArrowRight } from "lucide-react";
import imgHomeA from "../../imports/Desktop772/00b7a85efd5530ed04836de8cb6b3380a5f23726.png";
import imgHomeB from "../../imports/Desktop772/2e0d7621d24b5cac2ad309914b257bd34a82cccf.png";

const INTRO =
  "Built to support any use case quickly and responsibly, our APIs enable you to embed core banking capabilities directly into your products. From instant money movement to financing options, every function can be seamlessly integrated into your customer experience.";

const CARDS = [
  {
    title: "Lend",
    body:
      'Offer embedded credit products, from term loans and lines of credit to in-app financing and "Buy Now, Pay Later" options.',
  },
  {
    title: "Move",
    body:
      "Power global money movement instantly or via ACH, wires, and internal transfers so your customers can quickly send and receive funds.",
  },
  {
    title: "Issue",
    body:
      "Create physical and virtual credit and debit cards, and generate multiple account numbers custom tailored to your program.",
  },
  {
    title: "Store",
    body:
      "Hold and manage customer funds with multi-currency balances and flexible, FDIC-insured depository account structures.",
  },
];

const CARD_POSITIONS: Record<string, string> = {
  Lend: "left-[calc(41.67%+12px)] top-[176px]",
  Move: "left-[calc(41.67%+12px)] top-[426px]",
  Issue: "left-[calc(66.67%-6px)] top-[426px]",
  Store: "left-[calc(41.67%+474px)] top-[676px]",
};

function CapabilityCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className={`absolute h-[240px] w-[452px] rounded-[52px] bg-[rgba(255,255,255,0.32)] px-[40px] py-[40px] backdrop-blur-[40px] ${CARD_POSITIONS[title]}`}
    >
      <div className="absolute inset-0 rounded-[52px] border border-white" />
      <div className="relative flex flex-col gap-[24px]">
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[32px] text-[#2b2c39]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.3 }}
        >
          {title}
        </p>
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] text-[#606171]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.4 }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export function PartnerPlatform({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="relative size-full bg-[#eaeaee]" data-name="Partner Platform">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeA} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeB} />
      </div>

      <div className="absolute bottom-[200px] left-[calc(8.33%+34px)] flex w-[477px] flex-col gap-[32px]">
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[72px] text-[#2b2c39]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.1 }}
        >
          Partner Platform
        </p>
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] text-[#606171]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.3 }}
        >
          {INTRO}
        </p>
        <button
          type="button"
          onClick={onNavigate}
          data-name="Button"
          className="site-cta-button flex h-[48px] w-fit cursor-pointer items-center justify-center gap-[12px] rounded-[24px] border-0 bg-white px-[32px] py-[12px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#2b2c39]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Explore our Partner Platform capabilities
          <ArrowRight size={16} strokeWidth={1.8} />
        </button>
      </div>

      {CARDS.map((card) => (
        <CapabilityCard key={card.title} title={card.title} body={card.body} />
      ))}
    </div>
  );
}
