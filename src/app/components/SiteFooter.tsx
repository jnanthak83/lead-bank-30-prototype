import { useState } from "react";
import type { Page } from "../App";

type NavTarget = { page: Page; section?: string };

type Item = { label: string; target: NavTarget; items?: Item[] };
type Group = { title: string; items: Item[] };

const COLUMNS: Group[] = [
  {
    title: "PARTNER PLATFORM",
    items: [
      { label: "Partner Platform overview", target: { page: "baas" } },
      { label: "Partnership", target: { page: "partnership" } },
      { label: "Compliance", target: { page: "compliance" } },
    ],
  },
  {
    title: "CAPABILITIES",
    items: [
      {
        label: "Lend",
        target: { page: "lend", section: "lend-overview" },
        items: [
          { label: "Embedded credit", target: { page: "lend", section: "embedded-credit" } },
          { label: "BNPL", target: { page: "lend", section: "bnpl" } },
          { label: "Lines of credit", target: { page: "lend", section: "lines-of-credit" } },
        ],
      },
      {
        label: "Move",
        target: { page: "move", section: "move-overview" },
        items: [
          { label: "ACH", target: { page: "move", section: "ach" } },
          { label: "Wires", target: { page: "move", section: "wires" } },
          { label: "Stablecoin", target: { page: "move", section: "stablecoin" } },
          { label: "Internal transfers", target: { page: "move", section: "internal-transfers" } },
        ],
      },
      {
        label: "Issue",
        target: { page: "issue", section: "issue-overview" },
        items: [
          { label: "Physical & virtual cards", target: { page: "issue", section: "physical-virtual-cards" } },
          { label: "Custom account numbers", target: { page: "issue", section: "custom-account-numbers" } },
        ],
      },
      {
        label: "Store",
        target: { page: "store", section: "store-overview" },
        items: [
          { label: "Multi-currency balances", target: { page: "store", section: "multi-currency-balances" } },
          { label: "FDIC-insured accounts", target: { page: "store", section: "fdic-insured-accounts" } },
        ],
      },
    ],
  },
  {
    title: "USE CASES",
    items: [
      { label: "Digital banking", target: { page: "uc-digital-banking" } },
      { label: "Consumer payments", target: { page: "uc-consumer-payments" } },
      { label: "Credit builder", target: { page: "uc-credit-builder" } },
      { label: "Business finances", target: { page: "uc-business-finances" } },
      { label: "Crypto", target: { page: "uc-crypto" } },
    ],
  },
  {
    title: "DEVELOPERS",
    items: [
      { label: "API documentation", target: { page: "api-docs" } },
      { label: "Change logs", target: { page: "changelog" } },
    ],
  },
  {
    title: "BANKING",
    items: [
      {
        label: "Business",
        target: { page: "business" },
        items: [
          { label: "Checking", target: { page: "business", section: "business-checking" } },
          { label: "Savings", target: { page: "business", section: "business-savings" } },
          { label: "Loans", target: { page: "business", section: "business-loans" } },
        ],
      },
      {
        label: "Personal",
        target: { page: "personal" },
        items: [
          { label: "Checking", target: { page: "personal", section: "personal-checking" } },
          { label: "Savings", target: { page: "personal", section: "personal-savings" } },
          { label: "Investment Savings", target: { page: "personal", section: "personal-investment-savings" } },
        ],
      },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { label: "About", target: { page: "about" } },
      { label: "Careers at Lead", target: { page: "careers" } },
      { label: "Leadership team", target: { page: "leadership" } },
      { label: "Blog", target: { page: "blog" } },
    ],
  },
];

const LEGAL_LINKS: Item[] = [
  { label: "Privacy", target: { page: "privacy" } },
  { label: "Terms", target: { page: "terms" } },
  { label: "Accessibility", target: { page: "accessibility" } },
];

function FooterLink({
  label,
  onClick,
  dark,
  level = 0,
}: {
  label: string;
  onClick: () => void;
  dark?: boolean;
  level?: number;
}) {
  const [hover, setHover] = useState(false);
  const base = dark ? "#eaeaee" : "#2b2c39";
  const secondary = dark ? "rgba(234,234,238,0.62)" : "#606171";
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="cursor-pointer font-['Lead_Sans_Variable:Regular',sans-serif] transition-colors"
      style={{
        fontVariationSettings: "'wdth' 100",
        color: hover ? "#0040ff" : level > 0 ? secondary : base,
        fontSize: level > 0 ? 12 : 13,
        lineHeight: 1.5,
        paddingLeft: level > 0 ? 12 : 0,
      }}
    >
      {label}
    </span>
  );
}

function FooterItem({
  item,
  dark,
  onNavigate,
}: {
  item: Item;
  dark?: boolean;
  onNavigate: (target: NavTarget) => void;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
      <FooterLink label={item.label} dark={dark} onClick={() => onNavigate(item.target)} />
      {item.items?.map((sub) => (
        <FooterLink
          key={`${item.label}-${sub.label}`}
          label={sub.label}
          dark={dark}
          level={1}
          onClick={() => onNavigate(sub.target)}
        />
      ))}
    </div>
  );
}

export function SiteFooter({
  onNavigate,
  theme = "light",
}: {
  onNavigate?: (page: Page, section?: string) => void;
  theme?: "light" | "dark";
}) {
  const dark = theme === "dark";
  const bg = dark ? "#14141e" : "#eaeaee";
  const border = dark ? "rgba(234,234,238,0.12)" : "rgba(43,44,57,0.1)";
  const titleColor = dark ? "rgba(234,234,238,0.6)" : "#606171";
  const brand = dark ? "#eaeaee" : "#2b2c39";

  const handle = (t: NavTarget) => {
    onNavigate?.(t.page, t.section);
    if (!t.section) window.scrollTo({ top: 0 });
  };

  return (
    <footer
      className="w-full"
      style={{ background: bg, borderTop: `1px solid ${border}` }}
    >
      <div className="max-w-[1840px] mx-auto px-[40px] py-[80px]">
        <div className="flex justify-between items-start mb-[64px] pb-[48px]" style={{ borderBottom: `1px solid ${border}` }}>
          <div
            className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[28px] cursor-pointer"
            style={{ fontVariationSettings: "'wdth' 100", color: brand }}
            onClick={() => handle({ page: "home" })}
          >
            Lead Bank
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[40px] gap-y-[48px]">
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-[20px]">
              <p
                className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[11px] tracking-[1.2px] uppercase"
                style={{ fontVariationSettings: "'wdth' 100", color: titleColor }}
              >
                {col.title}
              </p>
              <div className="flex flex-col gap-[16px] pt-[12px]" style={{ borderTop: `1px solid ${border}` }}>
                {col.items.map((it) => (
                  <FooterItem
                    key={it.label}
                    dark={dark}
                    item={it}
                    onNavigate={handle}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-[80px] pt-[32px] flex flex-wrap items-center justify-between gap-[16px]"
          style={{ borderTop: `1px solid ${border}` }}
        >
          <p
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px]"
            style={{ fontVariationSettings: "'wdth' 100", color: titleColor }}
          >
            © {new Date().getFullYear()} Lead Bank. Member FDIC.
          </p>
          <div className="flex gap-[24px]">
            {LEGAL_LINKS.map((it) => (
              <FooterLink key={it.label} label={it.label} dark={dark} onClick={() => handle(it.target)} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
