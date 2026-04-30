import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-xhz1l9ijyx";
import imgChecking from "./64fa4a6582fde38ab381b9dbb7ac8460152a21f0.png";
import imgSavings from "../Desktop787-1/4a62a922e1608f0c207bb58e96ee5cfe9f973207.png";
import imgInvestment from "../Desktop790-1/a23905eb57d5ad35a658c4466692e8d7683f2389.png";

const TABS = [
  {
    title: "Checking",
    desc: "Simple, secure, everyday checking",
    image: imgChecking,
    badge: "Lead on checking",
    headline: "A streamlined account with no fuss",
    body: "Perfect for those who want to keep it simple—no daily minimums, no unnecessary fees. You only pay if you write more than 10 checks a month.",
    listLabel: "Key Features:",
    bullets: [
      "Open with just $100",
      "No daily balance requirement",
      "Unlimited check writing",
      "Only pay $0.25/check after the first 10/month",
    ],
  },
  {
    title: "Savings",
    desc: "Everyday savings with easy access",
    image: imgSavings,
    badge: "Lead savings",
    headline: "Simple savings, built for everyday use",
    body: "A traditional savings account that’s easy to open, free to use, and earns you interest from day one.",
    listLabel: "Key Features:",
    bullets: ["Open with $50", "No monthly fees", "Unlimited transactions", "Earns interest"],
  },
  {
    title: "Investment Savings",
    desc: "Long-term saving, built to grow",
    image: imgInvestment,
    badge: "Certificates of deposit",
    headline: "Guaranteed returns, no surprises",
    body: "Lock in your funds and earn fixed interest over time. Best for long-term goals where you don’t need immediate access.",
    listLabel: "Key Features:",
    bullets: ["Minimum opening: $2,500", "Fixed interest for the full term", "No withdrawals until maturity", "FDIC-insured"],
  },
];

const CYCLE_MS = 5000;

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[40px] top-[855px] w-[22px]">
      <div className="bg-white h-px rounded-[10px] shrink-0 w-full" />
      <div className="bg-white h-px opacity-20 rounded-[10px] shrink-0 w-[12px]" />
      <div className="bg-white h-px opacity-20 rounded-[10px] shrink-0 w-[12px]" />
      <div className="bg-white h-px opacity-20 rounded-[10px] shrink-0 w-[12px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] items-center justify-between leading-[0] left-[calc(50%-541px)] not-italic text-[14px] text-white top-[53px] w-[450px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">BaaS Platform</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Developers</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Banking</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">About</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[21px] left-[40px] top-[45px] w-[101px]">
      <div className="absolute inset-[0_0_-54.76%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.001 32.4996">
          <g id="Frame 2117132317">
            <g id="Group 2117130666">
              <foreignObject height="102.888" width="110.386" x="-45.3333" y="-44.8314">
                <div style={{ backdropFilter: "blur(22.67px)", clipPath: "url(#bgblur_0_1_4989_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <path d={svgPaths.p3ccadc00} fill="var(--fill-0, #0040FF)" fillOpacity="0.4" id="Vector 133" data-figma-bg-blur-radius="45.3333" />
              <foreignObject height="102.888" width="102.951" x="-25.6175" y="-44.8314">
                <div style={{ backdropFilter: "blur(22.67px)", clipPath: "url(#bgblur_1_1_4989_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <path d={svgPaths.p14966100} fill="var(--fill-0, #0040FF)" fillOpacity="0.6" id="Vector 134" data-figma-bg-blur-radius="45.3333" />
              <foreignObject height="102.888" width="102.951" x="-25.6175" y="-44.8314">
                <div style={{ backdropFilter: "blur(22.67px)", clipPath: "url(#bgblur_2_1_4989_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <path d={svgPaths.p1849e200} fill="var(--fill-0, #0040FF)" fillOpacity="0.8" id="Vector 135" data-figma-bg-blur-radius="45.3333" />
              <foreignObject height="110.446" width="102.951" x="-25.6175" y="-32.6126">
                <div style={{ backdropFilter: "blur(22.67px)", clipPath: "url(#bgblur_3_1_4989_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <path d={svgPaths.p2eb39200} fill="var(--fill-0, #0040FF)" id="Vector 136" data-figma-bg-blur-radius="45.3333" />
            </g>
            <path d={svgPaths.p1b789e00} fill="var(--fill-0, white)" id="Union" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1_4989_clip_path" transform="translate(45.3333 44.8314)">
              <path d={svgPaths.p3ccadc00} />
            </clipPath>
            <clipPath id="bgblur_1_1_4989_clip_path" transform="translate(25.6175 44.8314)">
              <path d={svgPaths.p14966100} />
            </clipPath>
            <clipPath id="bgblur_2_1_4989_clip_path" transform="translate(25.6175 44.8314)">
              <path d={svgPaths.p1849e200} />
            </clipPath>
            <clipPath id="bgblur_3_1_4989_clip_path" transform="translate(25.6175 32.6126)">
              <path d={svgPaths.p2eb39200} />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_6px_12px_rgba(0,144,255,0.24)] flex h-[42px] items-center justify-center left-[1760px] px-[32px] py-[12px] rounded-[24px] top-[36px] w-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 42\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(12 4.2 -4.2 12 1.3323e-14 0)\\'><stop stop-color=\\'rgba(0,64,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(12,56,255,1)\\' offset=\\'0.11194\\'/><stop stop-color=\\'rgba(24,48,255,1)\\' offset=\\'0.22388\\'/><stop stop-color=\\'rgba(47,32,255,1)\\' offset=\\'0.44775\\'/><stop stop-color=\\'rgba(71,16,255,1)\\' offset=\\'0.67163\\'/><stop stop-color=\\'rgba(94,0,255,1)\\' offset=\\'0.8955\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(0, 64, 255) 0%, rgb(0, 64, 255) 100%)" }} data-name="Button">
      <div className="flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Login</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[12px] h-[42px] items-center justify-center left-[1607px] px-[20px] py-[12px] rounded-[24px] top-[36px]" data-name="Button">
      <div className="relative shrink-0 size-[24px]" data-name="code-circle-03">
        <div className="absolute inset-[4.17%]" data-name="Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path clipRule="evenodd" d={svgPaths.p37e47500} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Console</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Business Banking</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p1ed54a80} id="Icon" stroke="var(--stroke-0, #EAEAEE)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[393px] items-start justify-end left-[1275px] top-[41px] w-[453px]">
      <Frame />
    </div>
  );
}

function Frame5({
  active,
  running,
  progress,
  onSelect,
}: {
  active: number;
  running: boolean;
  progress: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[40px] top-1/2 z-10">
      {TABS.map((tab, i) => {
        const isActive = i === active;
        const fill = isActive ? (running ? progress : 1) : 0;
        return (
          <div key={tab.title} className="flex flex-col gap-[40px] items-start">
            <button
              type="button"
              onClick={() => onSelect(i)}
              className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full whitespace-nowrap text-left cursor-pointer bg-transparent border-0 p-0"
              style={{ color: isActive ? "#ffffff" : "#606171" }}
            >
              <p
                className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.24px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {tab.title}
              </p>
              <p
                className="font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] leading-[1.3] relative shrink-0 text-[14px]"
                style={{ fontVariationSettings: "'wdth' 100", color: isActive ? "#ffffff" : "#606171" }}
              >
                {tab.desc}
              </p>
            </button>
            <div className="relative h-px w-[220px] shrink-0">
              <div className="absolute inset-0 bg-[#eaeaee] opacity-10" />
              <div
                className="absolute left-0 top-0 h-px bg-white"
                style={{ width: `${fill * 220}px`, transition: running ? "none" : "width 0.3s ease" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Frame12({ label }: { label: string }) {
  return (
    <div className="bg-[#0040ff] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[30px] shrink-0">
      <div className="flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaee] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{label}</p>
      </div>
    </div>
  );
}

function Frame9({ body, listLabel, bullets }: { body: string; listLabel: string; bullets: string[] }) {
  return (
    <div className="content-stretch flex flex-col font-['Lead_Sans_Variable:Regular',sans-serif] font-normal gap-[32px] items-start not-italic relative shrink-0 text-[#eaeaee] text-[20px] w-[551px]">
      <p className="leading-[1.2] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {body}
      </p>
      <div className="leading-[0] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.6] mb-0">{listLabel}</p>
        <ul className="list-disc">
          {bullets.map((b, i) => (
            <li key={i} className={`${i === bullets.length - 1 ? "" : "mb-0 "}ms-[30px]`}>
              <span className="leading-[1.6]">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[20px] bg-white content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[32px] py-[12px] relative rounded-[32px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] not-italic relative shrink-0 text-[#353144] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Get in touch</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p1ed54a80} id="Icon" stroke="var(--stroke-0, #606171)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.08)] content-stretch flex h-[48px] items-center justify-center px-[32px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer border-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">See in depth table comparison</p>
      </div>
    </button>
  );
}

function Frame11({ onCompare }: { onCompare: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Button2 />
      <Button3 onClick={onCompare} />
    </div>
  );
}

const COMPARISON_TABLES: Record<number, { columns: [string, string]; rows: [string, string, string][] }> = {
  0: {
    columns: ["Lead On Checking", "Lead On Plus Checking"],
    rows: [
      ["Minimum opening deposit", "$100", "$100"],
      ["Monthly fee", "None", "None"],
      ["Daily balance requirement", "None", "None"],
      ["Check writing", "10 free/month, then $0.25 each", "Unlimited"],
      ["Interest earned", "No", "Yes"],
      ["ATM fee reimbursement", "No", "Yes (up to $15/month)"],
      ["FDIC insured", "Yes", "Yes"],
    ],
  },
  1: {
    columns: ["Lead Savings", "Lead Money Market"],
    rows: [
      ["Minimum opening deposit", "$50", "$2,500"],
      ["Monthly fee", "None", "None with min balance"],
      ["Interest rate", "Standard", "Tiered, higher yield"],
      ["Withdrawals", "Unlimited", "Up to 6/month"],
      ["Check writing", "No", "Yes"],
      ["Debit card access", "Yes", "Yes"],
      ["Online & mobile banking", "Yes", "Yes"],
      ["FDIC insured", "Yes", "Yes"],
    ],
  },
  2: {
    columns: ["Certificates of deposit", "Health Savings Account (HSA)"],
    rows: [
      ["Minimum opening deposit", "$2,500", "$0"],
      ["Interest rate", "Fixed for full term", "Variable, tiered"],
      ["Term length", "3 months – 5 years", "No fixed term"],
      ["Withdrawals", "Not until maturity", "Anytime for qualified expenses"],
      ["Tax advantages", "No", "Triple tax-advantaged"],
      ["Contribution limit", "None", "IRS annual limit"],
      ["Best for", "Long-term savings goals", "Healthcare savings"],
      ["FDIC insured", "Yes", "Yes"],
    ],
  },
};

function ComparisonOverlay({ tabIndex, onClose }: { tabIndex: number; onClose: () => void }) {
  const data = COMPARISON_TABLES[tabIndex];
  if (!data) return null;
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative backdrop-blur-[20px] bg-[rgba(20,20,30,0.85)] border border-white/10 rounded-[24px] p-[48px] w-[900px] max-w-[90%] max-h-[85%] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-[20px] right-[20px] size-[36px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer border-0"
          aria-label="Close"
        >
          <span className="text-[18px] leading-none">×</span>
        </button>
        <p className="font-['Lead_Sans_Variable:Regular',sans-serif] text-white text-[32px] tracking-[-0.32px] leading-[1.1] mb-[32px]">
          In-depth comparison
        </p>
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px] text-white font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px]">
          <div className="opacity-60">Feature</div>
          <div>{data.columns[0]}</div>
          <div>{data.columns[1]}</div>
          {data.rows.map((row, i) => (
            <div key={i} className="contents">
              <div className="opacity-60 py-[12px] border-t border-white/10">{row[0]}</div>
              <div className="py-[12px] border-t border-white/10">{row[1]}</div>
              <div className="py-[12px] border-t border-white/10">{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame10({ tab, onCompare }: { tab: typeof TABS[number]; onCompare: () => void }) {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[42px] items-start left-[calc(25%+23px)] top-[calc(50%-0.5px)] w-[644px]">
      <Frame12 label={tab.badge} />
      <div className="flex flex-col font-['Lead_Sans_Variable:Regular',sans-serif] font-normal justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[72px] text-white tracking-[-1.44px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1]">{tab.headline}</p>
      </div>
      <Frame9 body={tab.body} listLabel={tab.listLabel} bullets={tab.bullets} />
      <Frame11 onCompare={onCompare} />
    </div>
  );
}

export default function Desktop() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(true);
  const [tableOpen, setTableOpen] = useState(false);
  const startRef = useRef<number>(performance.now());

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(1, elapsed / CYCLE_MS);
      setProgress(p);
      if (p >= 1) {
        setActive((i) => (i + 1) % TABS.length);
        startRef.current = performance.now();
        setProgress(0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  const onSelect = (i: number) => {
    setRunning(false);
    setActive(i);
    setProgress(0);
  };

  const openTable = () => {
    setRunning(false);
    setTableOpen(true);
  };

  const tab = TABS[active];

  return (
    <div className="bg-[#eaeaee] overflow-clip relative rounded-[20px] size-full" data-name="Desktop - 780">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]" data-name="Personal Banking">
        {TABS.map((t, i) => (
          <img
            key={t.title}
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0 }}
            src={t.image}
          />
        ))}
      </div>
      <Frame8 />
      <div className="-translate-x-1/2 absolute h-[78px] left-1/2 top-0 w-[1920px]" data-name="MENU">
        <Frame1 />
        <Frame6 />
        <Button />
        <Button1 />
      </div>
      <div className="absolute h-[98px] left-0 top-[982px] w-[1920px]" data-name="Footer">
        <Frame7 />
        <div className="-translate-x-1/2 absolute bg-[#eaeaee] bottom-[97px] h-px left-1/2 opacity-10 w-[1840px]" />
        <p className="absolute font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[1.5] left-[40px] not-italic text-[#eaeaee] text-[12px] top-[41px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          01 — 06
        </p>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] justify-center leading-[0] left-[194px] not-italic text-[14px] text-white top-[49px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.2]">Personal Banking</p>
        </div>
      </div>
      <Frame5 active={active} running={running} progress={progress} onSelect={onSelect} />
      <Frame10 tab={tab} onCompare={openTable} />
      {tableOpen && <ComparisonOverlay tabIndex={active} onClose={() => setTableOpen(false)} />}
    </div>
  );
}