import { useState } from "react";
import type { ReactNode } from "react";
import { Home } from "lucide-react";
import type { Page } from "../App";

type NavTarget = { page: Page; section?: string };

type Item = { label: string; target?: NavTarget; href?: string; items?: Item[] };
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
        label: "Programmable Accounts",
        target: { page: "store", section: "store-overview" },
        items: [
          { label: "Customer Balances", target: { page: "store", section: "customer-balances" } },
          { label: "Account Structures", target: { page: "store", section: "account-structures" } },
          { label: "FDIC Pass-Through Insurance", target: { page: "store", section: "fdic-pass-through-insurance" } },
          { label: "Account Numbers", target: { page: "store", section: "account-numbers" } },
          { label: "FBO Accounts", target: { page: "store", section: "fbo-accounts" } },
        ],
      },
      {
        label: "Money Movement",
        target: { page: "move", section: "move-overview" },
        items: [
          { label: "ACH Payments", target: { page: "move", section: "ach" } },
          { label: "Wires", target: { page: "move", section: "wires" } },
          { label: "Instant Payments", target: { page: "move", section: "instant-payments" } },
          { label: "Internal Transfers", target: { page: "move", section: "internal-transfers" } },
          { label: "Checks", target: { page: "move", section: "checks" } },
          { label: "International", target: { page: "move", section: "international" } },
          { label: "Stablecoin Transfers", target: { page: "move", section: "stablecoin" } },
          { label: "Payment Controls", target: { page: "move", section: "payment-controls" } },
        ],
      },
      {
        label: "Card Programs",
        target: { page: "issue", section: "issue-overview" },
        items: [
          { label: "Credit Cards", target: { page: "issue", section: "credit-cards" } },
          { label: "Debit Cards", target: { page: "issue", section: "debit-cards" } },
          { label: "Prepaid Cards", target: { page: "issue", section: "prepaid-cards" } },
        ],
      },
      {
        label: "Credit & Lending",
        target: { page: "lend", section: "lend-overview" },
        items: [
          { label: "Term Loans", target: { page: "lend", section: "term-loans" } },
          { label: "Lines of Credit", target: { page: "lend", section: "lines-of-credit" } },
        ],
      },
      {
        label: "Digital Assets",
        target: { page: "digital-assets", section: "digital-assets-overview" },
        items: [
          { label: "Stablecoins", target: { page: "digital-assets", section: "stablecoins" } },
          { label: "Fiat & Stablecoin Conversion", target: { page: "digital-assets", section: "fiat-stablecoin-conversion" } },
          { label: "On/Off Ramp", target: { page: "digital-assets", section: "on-off-ramp" } },
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
      { label: "Job board", href: "https://www.lead.bank/explore-lead" },
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
  level = 0,
}: {
  label: string;
  onClick: () => void;
  level?: number;
}) {
  const [hover, setHover] = useState(false);
  const base = "#2b2c39";
  const secondary = "#606171";

  return (
    <button
      type="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="block cursor-pointer border-0 bg-transparent p-0 text-left font-['Lead_Sans_Variable:Regular',sans-serif] transition-colors"
      style={{
        fontVariationSettings: "'wdth' 100",
        color: hover ? "#0040ff" : level > 0 ? secondary : base,
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
  const handle = (entry: Item) => {
    if (entry.href) {
      window.location.href = entry.href;
      return;
    }
    if (entry.target) onNavigate(entry.target);
  };

  return (
    <div className="flex flex-col gap-[7px]">
      <FooterLink label={item.label} onClick={() => handle(item)} />
      {item.items?.map((sub) => (
        <FooterLink
          key={`${item.label}-${sub.label}`}
          label={sub.label}
          level={1}
          onClick={() => handle(sub)}
        />
      ))}
    </div>
  );
}

function SocialBadge({ label }: { label: string }) {
  return (
    <div
      className="flex size-[38px] items-center justify-center rounded-[12px] bg-white font-['Lead_Sans_Variable:Medium',sans-serif] text-[16px] text-[#2b2c39] shadow-[0_1px_8px_rgba(43,44,57,0.06)]"
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
      <div className="w-full pb-[32px]">
        <section className="relative min-h-[520px] w-full overflow-hidden rounded-b-[56px] bg-[#f4f4f6] px-[clamp(32px,9vw,154px)] py-[92px] text-[#2b2c39]">
          <div className="grid grid-cols-2 gap-x-[36px] gap-y-[42px] md:grid-cols-3 xl:grid-cols-[repeat(6,minmax(0,1fr))_170px]">
            {NAV_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-[20px]">
                <p
                  className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] leading-[1.1] text-[#2b2c39]"
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
                className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#606171]"
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

        <section className="grid gap-[56px] px-[clamp(32px,9vw,154px)] py-[76px] lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_0.7fr]">
          <div className="flex max-w-[430px] flex-col gap-[24px]">
            <InfoHeading>Support</InfoHeading>
            <FooterText>
              Have questions or need support? We're here to help. For account support, technical help, or any other inquiries, reach out anytime.
            </FooterText>
            <button
              type="button"
              onClick={() => handle({ page: "contact" })}
              className="site-cta-button inline-flex h-[42px] w-fit items-center rounded-[16px] border-0 bg-[#eaeaee] px-[26px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#2b2c39]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Contact us
            </button>
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

        <section className="flex flex-col gap-[24px] border-t border-[#d8d8df] px-[clamp(32px,9vw,154px)] py-[28px] lg:flex-row lg:items-center lg:justify-between">
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
