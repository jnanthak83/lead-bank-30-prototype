import { ArrowRight } from "lucide-react";
import Desktop807 from "../../imports/Desktop807/Desktop807";
import Desktop778 from "../../imports/Desktop778/Desktop778";
import Desktop828 from "../../imports/Desktop828/Desktop828";
import Desktop833 from "../../imports/Desktop833/Desktop833";
import imgBaasOverview from "../../imports/Desktop824/d54437a605e1ed97e4ccad4de33f0d0fa8ac187d.png";
import imgBaasFlex from "../../imports/Desktop825/4af10adbc12ea0f40af38b00ab7bc8c2b91c5370.png";
import type { Page } from "../App";
import { BaasHeroRotating } from "./BaasHeroRotating";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";

export const BAAS_HOME_SECTION_TOTAL = 7;

type Navigate = (page: Page, section?: string) => void;

const typeSettings = { fontVariationSettings: "'wdth' 100" };

const RECOGNITION = ["Forbes", "Forbes", "Forbes", "Forbes"];

const STATS_LEFT = [
  { value: "135+", label: "currencies and payment methods supported" },
  { value: "$1.9T", label: "in payments volume processed in 2025" },
  { value: "99.999%", label: "historical uptime for Stripe services" },
  { value: "200M+", label: "active subscriptions managed on Stripe Billing" },
];

const STATS_RIGHT = [
  { value: "$2T+", label: "Annual transaction volume" },
  { value: "99.999%", label: "Uptime, highest of any bank" },
  { value: "No. 1", label: "Issuer of real-time payments in the US" },
  { value: "$100B+", label: "International payments processed annually" },
];

const CAPABILITY_CARDS = [
  {
    title: "Lend",
    body: 'Offer embedded credit products, from term loans and lines of credit to in-app financing and "Buy Now, Pay Later" options.',
    page: "lend" as Page,
    section: "lend-overview",
    className: "left-[900px] top-[202px] h-[240px] w-[452px]",
  },
  {
    title: "Move",
    body: "Power global money movement via ACH, wires, stablecoin, and internal transfers so your customers can quickly send and receive funds.",
    page: "move" as Page,
    section: "move-overview",
    className: "left-[900px] top-[454px] h-[240px] w-[452px]",
  },
  {
    title: "Issue",
    body: "Create physical and virtual credit and debit cards, and generate multiple account numbers custom tailored to your program.",
    page: "issue" as Page,
    section: "issue-overview",
    className: "left-[1364px] top-[454px] h-[240px] w-[452px]",
  },
  {
    title: "Store",
    body: "Hold and manage customer funds with multi-currency balances and flexible, FDIC-insured depository account structures.",
    page: "store" as Page,
    section: "store-overview",
    className: "left-[1364px] top-[706px] h-[240px] w-[452px]",
  },
];

function Laurels() {
  return (
    <svg width="88" height="70" viewBox="0 0 88 70" fill="none" aria-hidden="true">
      <path
        d="M29 11c-13 7-20 18-20 32 0 8 3 14 9 20M59 11c13 7 20 18 20 32 0 8-3 14-9 20"
        stroke="#8e94a3"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2 10"
        opacity="0.72"
      />
    </svg>
  );
}

function StatPanel({ items, className }: { items: typeof STATS_LEFT; className: string }) {
  return (
    <div className={`absolute flex h-[102px] items-center justify-around bg-white/72 shadow-[0_12px_46px_rgba(43,44,57,0.08)] ${className}`}>
      {items.map((item) => (
        <div key={item.value} className="w-[150px] text-center">
          <p
            className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[28px] leading-none text-[#2b2c39]"
            style={typeSettings}
          >
            {item.value}
          </p>
          <p
            className="mt-[8px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[11px] leading-[1.18] text-[#606171]"
            style={typeSettings}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function BaasOverviewSection() {
  return (
    <div className="relative size-full overflow-hidden bg-[#eaeaee]" data-name="BaasHomeOverview">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgBaasOverview} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/48 to-transparent" />

      <div className="absolute left-[290px] top-[194px] flex w-[1230px] justify-between">
        {RECOGNITION.map((name, index) => (
          <div key={`${name}-${index}`} className="flex items-center gap-[28px]">
            <Laurels />
            <p
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[34px] leading-none text-[#2b2c39]"
              style={typeSettings}
            >
              {name}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute left-[194px] top-[380px] flex flex-col gap-[48px]">
        <p
          className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#606171]"
          style={typeSettings}
        >
          BaaS Platform
        </p>
        <h1
          className="w-[820px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[72px] leading-[1.1] tracking-[-1.44px] text-[#2b2c39]"
          style={typeSettings}
        >
          The Banking Partner Your Fintech Deserves
        </h1>
        <p
          className="w-[760px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[31px] leading-[1.3] text-[#606171]"
          style={typeSettings}
        >
          Trusted by the most innovative companies to power complex financial products, we provide compliant, API-driven banking infrastructure designed for control, flexibility, and scale.
        </p>
      </div>

      <StatPanel items={STATS_LEFT} className="left-[164px] top-[858px] w-[790px]" />
      <StatPanel items={STATS_RIGHT} className="left-[1008px] top-[882px] w-[708px]" />
    </div>
  );
}

function CapabilityCard({
  card,
  onNavigate,
}: {
  card: (typeof CAPABILITY_CARDS)[number];
  onNavigate: Navigate;
}) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(card.page, card.section)}
      className={`site-cta-button absolute rounded-[52px] border border-white bg-white/32 px-[40px] py-[34px] text-left shadow-[0_22px_62px_rgba(43,44,57,0.09)] backdrop-blur-[40px] ${card.className}`}
    >
      <p
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[34px] leading-[1.15] text-[#2b2c39]"
        style={typeSettings}
      >
        {card.title}
      </p>
      <p
        className="mt-[24px] max-w-[350px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[15px] leading-[1.35] text-[#606171]"
        style={typeSettings}
      >
        {card.body}
      </p>
      <span
        className="mt-[42px] flex items-center gap-[14px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#2b2c39]"
        style={typeSettings}
      >
        See Details
        <ArrowRight size={16} strokeWidth={1.8} />
      </span>
    </button>
  );
}

function PlatformFlexSection({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <div className="relative size-full overflow-hidden bg-[#eaeaee]" data-name="BaasHomePlatformFlex">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgBaasFlex} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/42 to-white/0" />

      <div className="absolute left-[194px] top-[398px] flex flex-col gap-[34px]">
        <h2
          className="w-[650px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[72px] leading-[1.1] tracking-[-1.44px] text-[#2b2c39]"
          style={typeSettings}
        >
          Meet the Platform Designed to Flex
        </h2>
        <p
          className="w-[666px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] leading-[1.3] text-[#606171]"
          style={typeSettings}
        >
          Our modular building blocks let you assemble exactly what your product requires. Start with the capabilities you need today, add more over time, and deliver financial experiences that adapt as your business grows.
        </p>
      </div>

      {CAPABILITY_CARDS.map((card) => (
        <CapabilityCard key={card.title} card={card} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

export function BaasHome({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <div className="w-full relative">
      <Reveal>
        <BaasHeroRotating />
      </Reveal>
      <Reveal>
        <Desktop807 />
      </Reveal>
      <Reveal>
        <BaasOverviewSection />
      </Reveal>
      <Reveal>
        <PlatformFlexSection onNavigate={onNavigate} />
      </Reveal>
      <Reveal>
        <Desktop833 onNavigate={onNavigate} />
      </Reveal>
      <Reveal>
        <Desktop778 onNavigateAbout={() => onNavigate("about")} />
      </Reveal>
      <Reveal>
        <Desktop828 />
      </Reveal>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
