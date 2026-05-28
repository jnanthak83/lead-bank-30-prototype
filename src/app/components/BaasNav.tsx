import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Page } from "../App";

type NavHandler = (page: Page, section?: string) => void;
type MenuKey = "products" | "usecases" | "developers" | "banking" | "company";

const TOP_LINKS: Array<{ key: MenuKey; label: string }> = [
  { key: "products", label: "Products" },
  { key: "usecases", label: "Use Cases" },
  { key: "developers", label: "Developers" },
  { key: "banking", label: "Banking" },
  { key: "company", label: "Company" },
];

const navTextStyle = { fontVariationSettings: "'wdth' 100" };

function MenuItem({
  label,
  onClick,
  dark,
}: {
  label: string;
  onClick?: () => void;
  dark?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const baseColor = dark ? "#eaeaee" : "#2b2c39";
  const dim = dark ? "rgba(234,234,238,0.6)" : "#606171";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="group flex cursor-pointer items-center justify-between py-[10px]"
    >
      <span
        className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] transition-colors"
        style={{ ...navTextStyle, color: hover ? "#0040ff" : baseColor }}
      >
        {label}
      </span>
      <ArrowUpRight
        size={16}
        className="transition-all"
        style={{
          color: hover ? "#0040ff" : dim,
          opacity: hover ? 1 : 0.4,
          transform: hover ? "translate(2px,-2px)" : "none",
        }}
      />
    </div>
  );
}

function Column({
  title,
  items,
  onTitleClick,
  onItemClick,
  dark,
}: {
  title: string;
  items: string[];
  onTitleClick?: () => void;
  onItemClick?: (item: string) => void;
  dark?: boolean;
}) {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const titleColor = dark ? "rgba(234,234,238,0.6)" : "#606171";
  const borderColor = dark ? "rgba(234,234,238,0.15)" : "rgba(43,44,57,0.1)";
  const activeTitleColor = isTitleHovered ? "#0040ff" : titleColor;

  return (
    <div className="flex min-w-[220px] flex-col gap-[18px]">
      {onTitleClick ? (
        <button
          type="button"
          onMouseEnter={() => setIsTitleHovered(true)}
          onMouseLeave={() => setIsTitleHovered(false)}
          onClick={onTitleClick}
          className="flex items-center gap-[6px] self-start font-['Lead_Sans_Variable:Medium',sans-serif] text-[11px] uppercase tracking-[1.2px] transition-colors"
          style={{ ...navTextStyle, color: activeTitleColor }}
        >
          {title}
          <ArrowUpRight
            size={13}
            className="transition-transform"
            style={{ transform: isTitleHovered ? "translate(1px,-1px)" : "none" }}
          />
        </button>
      ) : (
        <p
          className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[11px] uppercase tracking-[1.2px]"
          style={{ ...navTextStyle, color: titleColor }}
        >
          {title}
        </p>
      )}
      <div className="flex flex-col gap-[2px] border-t" style={{ borderColor }}>
        {items.map((item) => (
          <MenuItem
            key={item}
            label={item}
            dark={dark}
            onClick={onItemClick ? () => onItemClick(item) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function ProductsPanel({ dark, onNavigate }: { dark?: boolean; onNavigate: NavHandler }) {
  const targets: Record<string, { page: Page; section?: string }> = {
    "Customer Balances": { page: "store", section: "customer-balances" },
    "Account Structures": { page: "store", section: "account-structures" },
    "FDIC Pass-Through Insurance": { page: "store", section: "fdic-pass-through-insurance" },
    "Account Numbers": { page: "store", section: "account-numbers" },
    "FBO Accounts": { page: "store", section: "fbo-accounts" },
    "ACH Payments": { page: "move", section: "ach" },
    Wires: { page: "move", section: "wires" },
    "Instant Payments": { page: "move", section: "instant-payments" },
    "Internal Transfers": { page: "move", section: "internal-transfers" },
    Checks: { page: "move", section: "checks" },
    International: { page: "move", section: "international" },
    "Stablecoin Transfers": { page: "move", section: "stablecoin" },
    "Payment Controls": { page: "move", section: "payment-controls" },
    "Credit Cards": { page: "issue", section: "credit-cards" },
    "Debit Cards": { page: "issue", section: "debit-cards" },
    "Prepaid Cards": { page: "issue", section: "prepaid-cards" },
    "Term Loans": { page: "lend", section: "term-loans" },
    "Lines of Credit": { page: "lend", section: "lines-of-credit" },
    Stablecoins: { page: "digital-assets", section: "stablecoins" },
    "Fiat & Stablecoin Conversion": { page: "digital-assets", section: "fiat-stablecoin-conversion" },
    "On/Off Ramp": { page: "digital-assets", section: "on-off-ramp" },
  };

  const go = (item: string) => {
    const target = targets[item];
    if (target) onNavigate(target.page, target.section);
  };

  return (
    <div className="flex gap-[48px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="PROGRAMMABLE ACCOUNTS"
        items={[
          "Customer Balances",
          "Account Structures",
          "FDIC Pass-Through Insurance",
          "Account Numbers",
          "FBO Accounts",
        ]}
        onTitleClick={() => onNavigate("store", "store-overview")}
        onItemClick={go}
      />
      <Column
        dark={dark}
        title="MONEY MOVEMENT"
        items={[
          "ACH Payments",
          "Wires",
          "Instant Payments",
          "Internal Transfers",
          "Checks",
          "International",
          "Stablecoin Transfers",
          "Payment Controls",
        ]}
        onTitleClick={() => onNavigate("move", "move-overview")}
        onItemClick={go}
      />
      <Column
        dark={dark}
        title="CARD PROGRAMS"
        items={["Credit Cards", "Debit Cards", "Prepaid Cards"]}
        onTitleClick={() => onNavigate("issue", "issue-overview")}
        onItemClick={go}
      />
      <Column
        dark={dark}
        title="CREDIT & LENDING"
        items={["Term Loans", "Lines of Credit"]}
        onTitleClick={() => onNavigate("lend", "lend-overview")}
        onItemClick={go}
      />
      <Column
        dark={dark}
        title="DIGITAL ASSETS"
        items={["Stablecoins", "Fiat & Stablecoin Conversion", "On/Off Ramp"]}
        onTitleClick={() => onNavigate("digital-assets", "digital-assets-overview")}
        onItemClick={go}
      />
    </div>
  );
}

function UseCasesPanel({ dark, onNavigate }: { dark?: boolean; onNavigate: NavHandler }) {
  const targets: Record<string, Page> = {
    "Digital Banking": "uc-digital-banking",
    "Consumer Payments": "uc-consumer-payments",
    "Credit Builder": "uc-credit-builder",
    "Business Finances": "uc-business-finances",
    Crypto: "uc-crypto",
  };

  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="USE CASES"
        items={["Digital Banking", "Consumer Payments", "Credit Builder", "Business Finances", "Crypto"]}
        onItemClick={(item) => onNavigate(targets[item])}
      />
    </div>
  );
}

function DevelopersPanel({ dark, onNavigate }: { dark?: boolean; onNavigate: NavHandler }) {
  const targetMap: Record<string, Page> = {
    "API documentation": "api-docs",
    "Change logs": "changelog",
  };

  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="DEVELOPERS"
        items={["API documentation", "Change logs"]}
        onItemClick={(item) => onNavigate(targetMap[item])}
      />
      <div className="flex flex-1 items-center">
        <button
          type="button"
          onClick={() => onNavigate("changelog")}
          className="site-cta-button flex min-w-[420px] items-center gap-[24px] rounded-[24px] border px-[28px] py-[22px] text-left"
          style={{
            background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.6)",
            borderColor: dark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,1)",
          }}
        >
          <span className="rounded-full bg-[#0040ff] px-[12px] py-[4px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[11px] text-white">
            Latest
          </span>
          <span className="flex flex-col gap-[2px]">
            <span
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[11px]"
              style={{ ...navTextStyle, color: dark ? "rgba(234,234,238,0.6)" : "#606171" }}
            >
              2025-05-28.lead5.0
            </span>
            <span
              className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px]"
              style={{ ...navTextStyle, color: dark ? "#eaeaee" : "#2b2c39" }}
            >
              Lead 5.0 was just released
            </span>
            <span
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px]"
              style={{ ...navTextStyle, color: dark ? "rgba(234,234,238,0.6)" : "#606171" }}
            >
              No breaking changes so far.
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

function BankingPanel({ dark, onNavigate }: { dark?: boolean; onNavigate: NavHandler }) {
  const businessSections: Record<string, string> = {
    Checking: "business-checking",
    Savings: "business-savings",
    Loans: "business-loans",
  };
  const personalSections: Record<string, string> = {
    Checking: "personal-checking",
    Savings: "personal-savings",
    "Investment Savings": "personal-investment-savings",
  };

  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="BUSINESS"
        items={["Checking", "Savings", "Loans"]}
        onTitleClick={() => onNavigate("business")}
        onItemClick={(item) => onNavigate("business", businessSections[item] ?? "business-overview")}
      />
      <Column
        dark={dark}
        title="PERSONAL"
        items={["Checking", "Savings", "Investment Savings"]}
        onTitleClick={() => onNavigate("personal")}
        onItemClick={(item) => onNavigate("personal", personalSections[item] ?? "personal-overview")}
      />
    </div>
  );
}

function CompanyPanel({ dark, onNavigate }: { dark?: boolean; onNavigate: NavHandler }) {
  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="COMPANY"
        items={["About", "Careers at Lead", "Leadership team", "Blog"]}
        onItemClick={(item) => {
          if (item === "About") onNavigate("about");
          else if (item === "Careers at Lead") onNavigate("careers");
          else if (item === "Leadership team") onNavigate("leadership");
          else if (item === "Blog") onNavigate("blog");
        }}
      />
    </div>
  );
}

function LeadMark() {
  return (
    <svg
      width="65.65"
      height="21.12"
      viewBox="0 0 101.001 32.4996"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lead"
      role="img"
    >
      <path d="M12.2842 0.501953L0 12.7231H19.7193V0.501953H12.2842Z" fill="#0040FF" fillOpacity="0.4" />
      <path d="M32 0.501953H19.717L19.7158 12.7231L32 0.501953Z" fill="#0040FF" fillOpacity="0.6" />
      <path d="M32 12.7231V0.501953L19.7158 12.7231H32Z" fill="#0040FF" fillOpacity="0.8" />
      <path d="M32 20.2785V12.7208L19.7158 12.7207V32.4996L32 20.2785Z" fill="#0040FF" />
      <path
        d="M77.4053 6.6875C79.3462 6.6875 81.0266 7.42028 82.2197 8.64844V6.99805H84.6279V20.166H82.1904L82.1816 18.5664C80.9885 19.7724 79.3239 20.499 77.4053 20.499C73.4821 20.499 70.5488 17.5317 70.5488 13.5869C70.5488 9.64216 73.4822 6.68755 77.4053 6.6875ZM61.7568 6.67578C65.613 6.67586 68.4706 9.78265 68.4707 13.6162H68.4668C68.4668 13.9113 68.442 14.2098 68.4102 14.5049H57.7256C58.066 16.6407 59.5998 17.9512 61.7539 17.9512C63.3255 17.9511 64.5979 17.2216 65.2979 16.0254H68.1494C67.1026 18.8054 64.6999 20.4941 61.7568 20.4941C57.9101 20.4941 54.9923 17.5201 54.9922 13.585C54.9922 9.64967 57.9005 6.67578 61.7568 6.67578ZM101.001 20.1523H98.4844V18.7656C97.3136 19.8382 95.7448 20.4794 93.96 20.4795C89.9765 20.4795 87.1125 17.5311 87.1123 13.5674C87.1123 9.60353 89.9795 6.6582 93.96 6.6582C95.6459 6.65831 97.1474 7.2228 98.2959 8.19043V3.20801H98.293L101.001 0.498047V20.1523ZM44.8008 17.5566H53.9131L51.3008 20.168H43.124C42.5005 20.168 42.0001 19.6637 42 19.0449V3.30078L44.8008 0.498047V17.5566ZM77.625 9.25195C75.1496 9.25195 73.3135 11.1083 73.3135 13.5742C73.3135 16.0401 75.1432 17.8965 77.625 17.8965C80.1068 17.8964 81.917 16.0591 81.917 13.5742C81.917 11.0893 80.1004 9.25199 77.625 9.25195ZM94.1699 9.24414C91.6945 9.24414 89.877 11.0824 89.877 13.5674C89.8771 16.0521 91.6882 17.8896 94.1699 17.8896C96.6514 17.8894 98.4803 16.033 98.4805 13.5674C98.4805 11.1016 96.6451 9.24436 94.1699 9.24414ZM61.7539 9.11914C59.7175 9.11914 58.2311 10.3478 57.792 12.3027H65.7529C65.2661 10.3003 63.7614 9.11929 61.7539 9.11914Z"
        fill="#2B2C39"
      />
    </svg>
  );
}

export function BaasNav({
  page,
  onNavigate,
}: {
  page?: Page;
  onNavigate?: NavHandler;
}) {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const dark = page === "personal" || page === "business";

  const navigate = (target: Page, section?: string) => {
    onNavigate?.(target, section);
    setOpen(null);
  };

  const renderPanel = () => {
    if (open === "products") return <ProductsPanel dark={dark} onNavigate={navigate} />;
    if (open === "usecases") return <UseCasesPanel dark={dark} onNavigate={navigate} />;
    if (open === "developers") return <DevelopersPanel dark={dark} onNavigate={navigate} />;
    if (open === "banking") return <BankingPanel dark={dark} onNavigate={navigate} />;
    if (open === "company") return <CompanyPanel dark={dark} onNavigate={navigate} />;
    return null;
  };

  const pillBg = dark ? "rgba(20,20,30,0.55)" : "rgba(255,255,255,0.4)";
  const pillBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.7)";
  const fg = dark ? "#eaeaee" : "#2b2c39";
  const dimFg = dark ? "rgba(234,234,238,0.7)" : "#606171";
  const panelBg = dark ? "rgba(20,20,30,0.7)" : "rgba(255,255,255,0.5)";
  const panelBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.7)";

  return (
    <div className="fixed left-0 right-0 top-0 z-50" onMouseLeave={() => setOpen(null)}>
      <div className="px-[20px] pt-[16px]">
        <div
          className="relative mx-auto flex h-[68px] max-w-[1840px] items-center rounded-[62px] border px-[32px] backdrop-blur-[40px]"
          style={{ background: pillBg, borderColor: pillBorder }}
        >
          <button
            type="button"
            className="mr-auto cursor-pointer"
            style={{ color: fg }}
            onClick={() => navigate("home", undefined)}
          >
            <LeadMark />
          </button>

          <div className="absolute left-1/2 flex -translate-x-1/2 gap-[44px]">
            {TOP_LINKS.map((link) => {
              const isOpen = open === link.key;
              const isActive =
                (link.key === "products" && ["lend", "move", "issue", "store"].includes(page ?? "")) ||
                (link.key === "usecases" && page?.startsWith("uc-")) ||
                (link.key === "developers" && (page === "api-docs" || page === "changelog")) ||
                (link.key === "banking" && (page === "personal" || page === "business")) ||
                (link.key === "company" &&
                  ["about", "leadership", "jackie", "careers", "blog", "contact"].includes(page ?? ""));

              return (
                <div
                  key={link.key}
                  onMouseEnter={() => setOpen(link.key)}
                  className="relative cursor-pointer py-[8px]"
                >
                  <span
                    className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] transition-colors"
                    style={{ ...navTextStyle, color: isOpen || isActive ? fg : dimFg }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute -bottom-[10px] left-0 right-0 h-[2px] rounded-full bg-[#0040ff] transition-opacity"
                    style={{ opacity: isOpen || isActive ? 1 : 0 }}
                  />
                </div>
              );
            })}
          </div>

          <div className="ml-auto flex gap-[10px]">
            <button
              type="button"
              onClick={() => navigate("console")}
              className="site-cta-button h-[40px] rounded-[24px] border px-[20px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[13px]"
              style={{
                ...navTextStyle,
                background: dark ? "rgba(255,255,255,0.08)" : "#ffffff",
                color: dark ? "#eaeaee" : "#2b2c39",
                borderColor: dark ? "rgba(255,255,255,0.15)" : "transparent",
              }}
            >
              Console
            </button>
            <button
              type="button"
              onClick={() => navigate("login")}
              className="site-cta-button h-[40px] rounded-[24px] bg-[#0040ff] px-[28px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[13px] text-white shadow-[0px_6px_12px_rgba(0,144,255,0.24)]"
              style={navTextStyle}
            >
              Login
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-[10px] max-w-[1840px] overflow-hidden rounded-[40px] border backdrop-blur-[40px]"
              style={{ background: panelBg, borderColor: panelBorder }}
              onMouseEnter={() => setOpen(open)}
            >
              {renderPanel()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
