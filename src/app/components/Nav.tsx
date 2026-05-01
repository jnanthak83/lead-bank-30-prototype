import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Page =
  | "home"
  | "personal"
  | "business"
  | "baas"
  | "partnership"
  | "compliance"
  | "api-docs"
  | "changelog"
  | "careers"
  | "job-board"
  | "privacy"
  | "terms"
  | "accessibility"
  | "console"
  | "login"
  | "move"
  | "lend"
  | "issue"
  | "store"
  | "about"
  | "leadership"
  | "jackie"
  | "blog"
  | "uc-lending"
  | "uc-digital-banking"
  | "uc-business-finances"
  | "uc-consumer-payments"
  | "uc-crypto"
  | "uc-credit-builder";

const USE_CASE_MAP: Record<string, Page> = {
  "Digital banking": "uc-digital-banking",
  "Consumer payments": "uc-consumer-payments",
  "Credit builder": "uc-credit-builder",
  "Business finances": "uc-business-finances",
  "Crypto": "uc-crypto",
};
type MenuKey = "baas" | "devs" | "banking" | "about";

const TOP_LINKS: { key: MenuKey; label: string }[] = [
  { key: "baas", label: "Partner Platform" },
  { key: "devs", label: "Developers" },
  { key: "banking", label: "Banking" },
  { key: "about", label: "Company" },
];

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
      className="flex items-center justify-between cursor-pointer py-[10px] group"
    >
      <span
        className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] transition-colors"
        style={{
          fontVariationSettings: "'wdth' 100",
          color: hover ? "#0040ff" : baseColor,
        }}
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

function SubmenuItem({
  label,
  onClick,
  dark,
}: {
  label: string;
  onClick?: () => void;
  dark?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const dim = dark ? "rgba(234,234,238,0.6)" : "#606171";

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="cursor-pointer transition-colors"
    >
      <span
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[13px]"
        style={{
          fontVariationSettings: "'wdth' 100",
          color: hover ? "#0040ff" : dim,
        }}
      >
        {label}
      </span>
    </span>
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
  items: Array<string | { label: string; submenu: string[] }>;
  onTitleClick?: () => void;
  onItemClick?: (item: string) => void;
  dark?: boolean;
}) {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const titleColor = dark ? "rgba(234,234,238,0.6)" : "#606171";
  const borderColor = dark ? "rgba(234,234,238,0.15)" : "rgba(43,44,57,0.1)";
  const activeTitleColor = isTitleHovered ? "#0040ff" : titleColor;

  return (
    <div className="flex flex-col gap-[18px] min-w-[220px]">
      {onTitleClick ? (
        <button
          type="button"
          onMouseEnter={() => setIsTitleHovered(true)}
          onMouseLeave={() => setIsTitleHovered(false)}
          onClick={onTitleClick}
          className="flex items-center gap-[6px] self-start font-['Lead_Sans_Variable:Medium',sans-serif] text-[11px] tracking-[1.2px] uppercase transition-colors"
          style={{ fontVariationSettings: "'wdth' 100", color: activeTitleColor }}
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
          className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[11px] tracking-[1.2px] uppercase"
          style={{ fontVariationSettings: "'wdth' 100", color: titleColor }}
        >
          {title}
        </p>
      )}
      <div className="flex flex-col gap-[2px] border-t" style={{ borderColor }}>
        {items.map((it) => {
          if (typeof it === "string") {
            return (
              <MenuItem
                key={it}
                label={it}
                dark={dark}
                onClick={onItemClick ? () => onItemClick(it) : undefined}
              />
            );
          } else {
            return (
              <div key={it.label} className="flex flex-col">
                <MenuItem
                  label={it.label}
                  dark={dark}
                  onClick={onItemClick ? () => onItemClick(it.label) : undefined}
                />
                <div className="flex flex-wrap gap-x-[12px] gap-y-[4px] pb-[8px]">
                  {it.submenu.map((sub, idx) => (
                    <span key={sub} className="flex items-center gap-[12px]">
                      <SubmenuItem
                        label={sub}
                        dark={dark}
                        onClick={onItemClick ? () => onItemClick(sub) : undefined}
                      />
                      {idx < it.submenu.length - 1 && (
                        <span
                          className="opacity-30"
                          style={{
                            color: dark ? "#eaeaee" : "#2b2c39",
                          }}
                        >
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

function BaasPanel({
  dark,
  onNavigate,
}: {
  dark?: boolean;
  onNavigate?: (page: Page, section?: string) => void;
}) {
  const handleItemClick = (item: string) => {
    const overviewMap: Record<string, Page> = {
      "Partner Platform overview": "baas",
      "Partnership": "partnership",
      "Compliance": "compliance",
    };
    const moveMap: Record<string, string> = {
      "ACH": "ach",
      "Wires": "wires",
      "Stablecoin": "stablecoin",
      "Internal transfers": "internal-transfers",
    };
    const lendMap: Record<string, string> = {
      "Embedded credit": "embedded-credit",
      "BNPL": "bnpl",
      "Lines of credit": "lines-of-credit",
    };
    const issueMap: Record<string, string> = {
      "Physical & virtual cards": "physical-virtual-cards",
      "Custom account numbers": "custom-account-numbers",
    };
    const storeMap: Record<string, string> = {
      "Multi-currency balances": "multi-currency-balances",
      "FDIC-insured accounts": "fdic-insured-accounts",
    };

    if (overviewMap[item]) onNavigate?.(overviewMap[item]);
    else if (item === "Move") onNavigate?.("move", "move-overview");
    else if (item === "Lend") onNavigate?.("lend", "lend-overview");
    else if (item === "Issue") onNavigate?.("issue", "issue-overview");
    else if (item === "Store") onNavigate?.("store", "store-overview");
    else if (moveMap[item]) onNavigate?.("move", moveMap[item]);
    else if (lendMap[item]) onNavigate?.("lend", lendMap[item]);
    else if (issueMap[item]) onNavigate?.("issue", issueMap[item]);
    else if (storeMap[item]) onNavigate?.("store", storeMap[item]);
    else onNavigate?.("baas");
  };

  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="OVERVIEW"
        items={["Partner Platform overview", "Partnership", "Compliance"]}
        onItemClick={handleItemClick}
      />
      <Column
        dark={dark}
        title="CAPABILITIES"
        items={[
          {
            label: "Lend",
            submenu: ["Embedded credit", "BNPL", "Lines of credit"],
          },
          {
            label: "Move",
            submenu: ["ACH", "Wires", "Stablecoin", "Internal transfers"],
          },
          {
            label: "Issue",
            submenu: ["Physical & virtual cards", "Custom account numbers"],
          },
          {
            label: "Store",
            submenu: ["Multi-currency balances", "FDIC-insured accounts"],
          },
        ]}
        onItemClick={handleItemClick}
      />
      <Column
        dark={dark}
        title="USE CASES"
        items={[
          "Digital banking",
          "Consumer payments",
          "Credit builder",
          "Business finances",
          "Crypto",
        ]}
        onItemClick={(item) => {
          const target = USE_CASE_MAP[item];
          if (target) onNavigate?.(target);
          else onNavigate?.("baas");
        }}
      />
    </div>
  );
}

function DevsPanel({
  dark,
  onNavigate,
}: {
  dark?: boolean;
  onNavigate?: (page: Page) => void;
}) {
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
        onItemClick={(item) => onNavigate?.(targetMap[item])}
      />
      <div className="flex-1 flex items-center">
        <div
          className="rounded-[24px] px-[28px] py-[22px] flex items-center gap-[24px] min-w-[420px] border"
          style={{
            background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.6)",
            borderColor: dark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,1)",
          }}
        >
          <div className="bg-[#0040ff] text-white rounded-full px-[12px] py-[4px] text-[11px] font-['Lead_Sans_Variable:Medium',sans-serif]">
            Latest
          </div>
          <div className="flex flex-col gap-[2px]">
            <p
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[11px]"
              style={{ fontVariationSettings: "'wdth' 100", color: dark ? "rgba(234,234,238,0.6)" : "#606171" }}
            >
              2025-05-28.lead5.0
            </p>
            <p
              className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px]"
              style={{ fontVariationSettings: "'wdth' 100", color: dark ? "#eaeaee" : "#2b2c39" }}
            >
              Lead 5.0 was just released
            </p>
            <p
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[12px]"
              style={{ fontVariationSettings: "'wdth' 100", color: dark ? "rgba(234,234,238,0.6)" : "#606171" }}
            >
              No breaking changes so far.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BankingPanel({
  onNavigate,
  dark,
}: {
  onNavigate?: (page: Page, section?: string) => void;
  dark?: boolean;
}) {
  const businessSections: Record<string, string> = {
    "Checking": "business-checking",
    "Savings": "business-savings",
    "Loans": "business-loans",
  };
  const personalSections: Record<string, string> = {
    "Checking": "personal-checking",
    "Savings": "personal-savings",
    "Investment Savings": "personal-investment-savings",
  };

  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="BUSINESS"
        items={["Checking", "Savings", "Loans"]}
        onTitleClick={() => onNavigate?.("business")}
        onItemClick={(item) => onNavigate?.("business", businessSections[item] ?? "business-overview")}
      />
      <Column
        dark={dark}
        title="PERSONAL"
        items={["Checking", "Savings", "Investment Savings"]}
        onTitleClick={() => onNavigate?.("personal")}
        onItemClick={(item) => onNavigate?.("personal", personalSections[item] ?? "personal-overview")}
      />
    </div>
  );
}

function AboutPanel({
  dark,
  onNavigate,
}: {
  dark?: boolean;
  onNavigate?: (page: Page) => void;
}) {
  return (
    <div className="flex gap-[80px] px-[60px] py-[48px]">
      <Column
        dark={dark}
        title="COMPANY"
        items={["About", "Careers at Lead", "Leadership team", "Blog"]}
        onItemClick={(item) => {
          if (item === "About") onNavigate?.("about");
          else if (item === "Careers at Lead") onNavigate?.("careers");
          else if (item === "Leadership team") onNavigate?.("leadership");
          else if (item === "Blog") onNavigate?.("blog");
        }}
      />
    </div>
  );
}

export function Nav({
  page,
  onNavigate,
}: {
  page?: Page;
  onNavigate?: (page: Page, section?: string) => void;
}) {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const dark = page === "personal" || page === "business";

  const renderPanel = () => {
    if (open === "baas")
      return (
        <BaasPanel
          dark={dark}
          onNavigate={(p, s) => {
            onNavigate?.(p, s);
            setOpen(null);
          }}
        />
      );
    if (open === "devs")
      return (
        <DevsPanel
          dark={dark}
          onNavigate={(p) => {
            onNavigate?.(p);
            setOpen(null);
          }}
        />
      );
    if (open === "banking")
      return (
        <BankingPanel
          dark={dark}
          onNavigate={(p, s) => {
            onNavigate?.(p, s);
            setOpen(null);
          }}
        />
      );
    if (open === "about")
      return (
        <AboutPanel
          dark={dark}
          onNavigate={(p) => {
            onNavigate?.(p);
            setOpen(null);
          }}
        />
      );
    return null;
  };

  const pillBg = dark ? "rgba(20,20,30,0.55)" : "rgba(255,255,255,0.4)";
  const pillBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.7)";
  const fg = dark ? "#eaeaee" : "#2b2c39";
  const dimFg = dark ? "rgba(234,234,238,0.7)" : "#606171";
  const panelBg = dark ? "rgba(20,20,30,0.7)" : "rgba(255,255,255,0.5)";
  const panelBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.7)";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="px-[20px] pt-[16px]">
        <div
          className="max-w-[1840px] mx-auto backdrop-blur-[40px] rounded-[62px] h-[68px] flex items-center px-[32px] relative border"
          style={{ background: pillBg, borderColor: pillBorder }}
        >
          <div
            className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] mr-auto cursor-pointer"
            style={{ fontVariationSettings: "'wdth' 100", color: fg }}
            onClick={() => onNavigate?.("home", undefined)}
          >
            Lead Bank
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex gap-[44px]">
            {TOP_LINKS.map((l) => {
              const isOpen = open === l.key;
              const isActive =
                (l.key === "banking" && (page === "personal" || page === "business")) ||
                (l.key === "baas" && page === "baas") ||
                (l.key === "about" &&
                  (page === "about" || page === "leadership" || page === "jackie" || page === "careers" || page === "blog"));
              return (
                <div
                  key={l.key}
                  onMouseEnter={() => setOpen(l.key)}
                  className="relative cursor-pointer py-[8px]"
                >
                  <span
                    className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] transition-colors"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      color: isOpen || isActive ? fg : dimFg,
                    }}
                  >
                    {l.label}
                  </span>
                  <span
                    className="absolute -bottom-[10px] left-0 right-0 h-[2px] bg-[#0040ff] rounded-full transition-opacity"
                    style={{ opacity: isOpen || isActive ? 1 : 0 }}
                  />
                </div>
              );
            })}
          </div>

          <div className="ml-auto flex gap-[10px]">
            <button
              type="button"
              onClick={() => onNavigate?.("console")}
              className="h-[40px] px-[20px] rounded-[24px] text-[13px] font-['Lead_Sans_Variable:Medium',sans-serif] border transition-[filter] hover:brightness-[0.92]"
              style={{
                fontVariationSettings: "'wdth' 100",
                background: dark ? "rgba(255,255,255,0.08)" : "#ffffff",
                color: dark ? "#eaeaee" : "#2b2c39",
                borderColor: dark ? "rgba(255,255,255,0.15)" : "transparent",
              }}
            >
              Console
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.("login")}
              className="h-[40px] px-[28px] rounded-[24px] text-white text-[13px] font-['Lead_Sans_Variable:Medium',sans-serif] bg-[#0040ff] shadow-[0px_6px_12px_rgba(0,144,255,0.24)] transition-[filter] hover:brightness-[0.92]"
              style={{ fontVariationSettings: "'wdth' 100" }}
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
              className="max-w-[1840px] mx-auto mt-[10px] backdrop-blur-[40px] rounded-[40px] overflow-hidden border"
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
