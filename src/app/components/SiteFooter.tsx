import { useState } from "react";
import type { ReactNode } from "react";
import { Code2, Home } from "lucide-react";
import type { Page } from "../App";

type NavTarget = { page: Page; section?: string };

type Item = { label: string; target: NavTarget; items?: Item[] };
type Group = { title: string; items: Item[] };
type LegalItem = { label: string; target?: NavTarget };

const NAV_COLUMNS: Group[] = [
  {
    title: "Partner Platform",
    items: [
      { label: "Partner Platform overview", target: { page: "baas" } },
      { label: "Partnership", target: { page: "partnership" } },
      { label: "Compliance", target: { page: "compliance" } },
    ],
  },
  {
    title: "Capabilities",
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
    title: "Use Cases",
    items: [
      { label: "Digital banking", target: { page: "uc-digital-banking" } },
      { label: "Consumer payments", target: { page: "uc-consumer-payments" } },
      { label: "Credit builder", target: { page: "uc-credit-builder" } },
      { label: "Business finances", target: { page: "uc-business-finances" } },
      { label: "Crypto", target: { page: "uc-crypto" } },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "API documentation", target: { page: "api-docs" } },
      { label: "Change logs", target: { page: "changelog" } },
    ],
  },
  {
    title: "Banking",
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
    title: "Company",
    items: [
      { label: "About", target: { page: "about" } },
      { label: "Careers at Lead", target: { page: "careers" } },
      { label: "Leadership team", target: { page: "leadership" } },
      { label: "Blog", target: { page: "blog" } },
    ],
  },
];

const BOTTOM_LINKS: LegalItem[] = [
  { label: "Your privacy rights", target: { page: "privacy" } },
  { label: "Fraud protection" },
  { label: "Terms of use", target: { page: "terms" } },
  { label: "Accessibility", target: { page: "accessibility" } },
  { label: "Ethics hotline" },
  { label: "USA Patriot Act" },
  { label: "Sweeps Disclosure" },
  { label: "ATM locator" },
  { label: "Cookies Preferences" },
];

function FooterLink({
  label,
  onClick,
  tone = "panel",
  level = 0,
}: {
  label: string;
  onClick: () => void;
  tone?: "panel" | "body";
  level?: number;
}) {
  const [hover, setHover] = useState(false);
  const base = tone === "panel" ? "#ffffff" : "#2b2c39";
  const secondary = tone === "panel" ? "rgba(255,255,255,0.72)" : "#606171";

  return (
    <button
      type="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="block cursor-pointer border-0 bg-transparent p-0 text-left font-['Lead_Sans_Variable:Regular',sans-serif] transition-colors"
      style={{
        fontVariationSettings: "'wdth' 100",
        color: hover ? "#ffffff" : level > 0 ? secondary : base,
        fontSize: level > 0 ? 12 : 14,
        lineHeight: 1.45,
        opacity: hover ? 1 : level > 0 ? 0.86 : 1,
        paddingLeft: level > 0 ? 10 : 0,
      }}
    >
      {label}
    </button>
  );
}

function FooterText({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.45] text-[#2b2c39]"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      {children}
    </p>
  );
}

function FooterItem({
  item,
  onNavigate,
}: {
  item: Item;
  onNavigate: (target: NavTarget) => void;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
      <FooterLink label={item.label} onClick={() => onNavigate(item.target)} />
      {item.items?.map((sub) => (
        <FooterLink
          key={`${item.label}-${sub.label}`}
          label={sub.label}
          level={1}
          onClick={() => onNavigate(sub.target)}
        />
      ))}
    </div>
  );
}

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[10px] border-0 bg-transparent p-0 text-white"
      aria-label="Lead Bank home"
    >
      <span className="relative block size-[30px] overflow-hidden rounded-[3px] bg-[#0040ff]">
        <span className="absolute inset-y-0 right-0 w-[58%] bg-[#7a00ff]" />
        <span className="absolute bottom-0 left-0 h-[58%] w-[58%] bg-[#47baff]" />
      </span>
      <span
        className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[24px] leading-none"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Lead Bank
      </span>
    </button>
  );
}

function SocialBadge({ label }: { label: string }) {
  return (
    <div
      className="flex size-[38px] items-center justify-center rounded-[12px] bg-white font-['Lead_Sans_Variable:Medium',sans-serif] text-[16px] text-[#2b2c39]"
      style={{ fontVariationSettings: "'wdth' 100" }}
      aria-label={label}
    >
      {label}
    </div>
  );
}

function InfoHeading({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#606171]"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      {children}
    </p>
  );
}

export function SiteFooter({
  onNavigate,
  theme = "light",
}: {
  onNavigate?: (page: Page, section?: string) => void;
  theme?: "light" | "dark";
}) {
  const pageBg = theme === "dark" ? "#f6f6f8" : "#ffffff";

  const handle = (t: NavTarget) => {
    onNavigate?.(t.page, t.section);
    if (!t.section) window.scrollTo({ top: 0 });
  };

  return (
    <footer className="w-full" style={{ background: pageBg }}>
      <div className="mx-auto max-w-[1920px] px-[40px] py-[32px]">
        <section className="relative min-h-[620px] overflow-hidden rounded-[56px] bg-[#8f939c] px-[32px] py-[28px] text-white md:px-[56px]">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(118deg, rgba(183,185,190,0.95) 0%, rgba(134,138,147,0.96) 48%, rgba(192,184,173,0.92) 100%)",
            }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex flex-wrap items-center gap-[24px]">
            <Logo onClick={() => handle({ page: "home" })} />
            <div className="flex flex-wrap gap-[32px] md:ml-[48px]">
              {[
                { label: "Partner Platform", target: { page: "baas" as Page } },
                { label: "Developers", target: { page: "api-docs" as Page } },
                { label: "Banking", target: { page: "business" as Page } },
                { label: "Company", target: { page: "about" as Page } },
              ].map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  onClick={() => handle(item.target)}
                />
              ))}
            </div>
            <div className="ml-auto flex gap-[12px]">
              <button
                type="button"
                onClick={() => handle({ page: "console" })}
                className="flex h-[42px] items-center gap-[10px] rounded-[16px] border-0 bg-white/12 px-[20px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-white backdrop-blur-[20px] transition-[filter] hover:brightness-[0.92]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <Code2 size={18} />
                Console
              </button>
              <button
                type="button"
                onClick={() => handle({ page: "login" })}
                className="h-[42px] rounded-[16px] border-0 bg-[#3f00ff] px-[28px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-white transition-[filter] hover:brightness-[0.92]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Login
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-[160px] grid grid-cols-2 gap-x-[36px] gap-y-[42px] md:grid-cols-3 xl:grid-cols-[repeat(6,minmax(0,1fr))_170px]">
            {NAV_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-[20px]">
                <p
                  className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] leading-[1.1] text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {col.title}
                </p>
                <div className="flex flex-col gap-[14px]">
                  {col.items.map((item) => (
                    <FooterItem key={item.label} item={item} onNavigate={handle} />
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-[18px]">
              <p
                className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-white"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Stay tuned
              </p>
              <div className="flex gap-[12px]">
                <SocialBadge label="X" />
                <SocialBadge label="in" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-[56px] px-[8px] py-[76px] lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_0.7fr]">
          <div className="flex max-w-[430px] flex-col gap-[24px]">
            <InfoHeading>Support</InfoHeading>
            <FooterText>
              Have questions or need support? We're here to help. For account support, technical help, or any other inquiries, reach out anytime.
            </FooterText>
            <a
              href="mailto:clientsupport@lead.bank"
              className="inline-flex h-[42px] w-fit items-center rounded-[16px] bg-[#eaeaee] px-[26px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#2b2c39] no-underline transition-[filter] hover:brightness-[0.95]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Contact us
            </a>
          </div>

          <div className="flex flex-col gap-[22px]">
            <InfoHeading>Banking locations</InfoHeading>
            <div className="flex flex-col gap-[14px]">
              <FooterText>Kansas City, MO</FooterText>
              <FooterText>Lee's Summit, MO</FooterText>
            </div>
          </div>

          <div className="flex flex-col gap-[22px]">
            <InfoHeading>Office presence</InfoHeading>
            <div className="flex flex-col gap-[14px]">
              <FooterText>San Francisco, CA</FooterText>
              <FooterText>Sunnyvale, CA</FooterText>
              <FooterText>New York, NY</FooterText>
            </div>
          </div>

          <div className="flex flex-col gap-[22px]">
            <InfoHeading>Contact</InfoHeading>
            <div className="flex flex-col gap-[14px]">
              <FooterText>(866) 845-9545</FooterText>
              <a
                href="mailto:clientsupport@lead.bank"
                className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.45] text-[#2b2c39] no-underline"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                clientsupport@lead.bank
              </a>
            </div>
          </div>

          <div className="flex items-start gap-[28px] lg:justify-end">
            <div className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[20px] leading-[0.85] text-[#606171]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="block text-[11px]">Member</span>
              FDIC
            </div>
            <div className="flex flex-col items-center gap-[6px] text-[#606171]">
              <Home size={34} strokeWidth={2.2} />
              <span className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[6px] uppercase leading-none" style={{ fontVariationSettings: "'wdth' 100" }}>
                Equal Housing
                <br />
                Lender
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-[24px] border-t border-[#d8d8df] px-[8px] py-[28px] lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-x-[34px] gap-y-[12px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px] text-[#606171]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span>©{new Date().getFullYear()} Lead Bank</span>
            <span>Equal Housing Lender</span>
            <span>Member FDIC</span>
          </div>

          <div className="flex flex-wrap gap-x-[30px] gap-y-[12px] lg:justify-end">
            {BOTTOM_LINKS.map((item) =>
              item.target ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handle(item.target!)}
                  className="border-0 bg-transparent p-0 font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px] text-[#606171] transition-colors hover:text-[#0040ff]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.label}
                </button>
              ) : (
                <span
                  key={item.label}
                  className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px] text-[#606171]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </section>
      </div>
    </footer>
  );
}
