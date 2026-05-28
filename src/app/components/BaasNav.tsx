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
  const targets: Record<string, { page: Page; section: string }> = {
    "Embedded Credit": { page: "lend", section: "embedded-credit" },
    BNPL: { page: "lend", section: "bnpl" },
    "Lines of credit": { page: "lend", section: "lines-of-credit" },
    ACH: { page: "move", section: "ach" },
    Wires: { page: "move", section: "wires" },
    Stablecoin: { page: "move", section: "stablecoin" },
    "Internal transfers": { page: "move", section: "internal-transfers" },
    "Physical & Virtual Cards": { page: "issue", section: "physical-virtual-cards" },
    "Custom Account Numbers": { page: "issue", section: "custom-account-numbers" },
    "Multi-currency Balances": { page: "store", section: "multi-currency-balances" },
    "FDIC-insured accounts": { page: "store", section: "fdic-insured-accounts" },
  };

  const go = (item: string) => {
    const target = targets[item];
    if (target) onNavigate(target.page, target.section);
  };

  return (
    <div className="flex gap-[64px] px-[60px] py-[48px]">
      <Column dark={dark} title="LEND" items={["Embedded Credit", "BNPL", "Lines of credit"]} onItemClick={go} />
      <Column dark={dark} title="MOVE" items={["ACH", "Wires", "Stablecoin", "Internal transfers"]} onItemClick={go} />
      <Column dark={dark} title="ISSUE" items={["Physical & Virtual Cards", "Custom Account Numbers"]} onItemClick={go} />
      <Column dark={dark} title="STORE" items={["Multi-currency Balances", "FDIC-insured accounts"]} onItemClick={go} />
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
    <span className="flex items-center gap-[8px]">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path d="M4 7h22v9H4z" fill="#34b7ff" />
        <path d="M14 7h16v16H14z" fill="#0040ff" />
        <path d="M14 23 30 7v21L14 34z" fill="#4b16ff" />
      </svg>
      <span
        className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[24px] leading-none"
        style={navTextStyle}
      >
        Lead
      </span>
    </span>
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
