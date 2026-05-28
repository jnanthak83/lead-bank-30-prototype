import { useEffect, useState } from "react";
import { useLenis } from "./hooks/useLenis";
import { SiteFooter } from "./components/SiteFooter";
import { PersonalBanking } from "./components/PersonalBanking";
import { BusinessBanking } from "./components/BusinessBanking";
import { BaasPlatform } from "./components/BaasPlatform";
import { RenamedPlatform } from "./components/RenamedPlatform";
import AboutUs from "../imports/AboutUs/AboutUs";
import { ScrollFooter } from "./components/ScrollFooter";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { UseCasePage, type UseCaseKey } from "./components/UseCasePage";
import { LeadershipTeam } from "./components/LeadershipTeam";
import { Blog } from "./components/Blog";
import { StubPage } from "./components/StubPage";
import { JackieProfile } from "./components/JackieProfile";
import { ContactPage } from "./components/ContactPage";
import { BaasHome, BAAS_HOME_SECTION_TOTAL } from "./components/BaasHome";
import { BaasNav } from "./components/BaasNav";

const MOVE_ITEMS = [
  { id: "ach", title: "ACH Payments" },
  { id: "wires", title: "Wires" },
  { id: "instant-payments", title: "Instant Payments" },
  { id: "internal-transfers", title: "Internal Transfers" },
  { id: "checks", title: "Checks" },
  { id: "international", title: "International" },
  { id: "stablecoin", title: "Stablecoin Transfers" },
  { id: "payment-controls", title: "Payment Controls" },
];
const LEND_ITEMS = [
  { id: "term-loans", title: "Term Loans" },
  { id: "lines-of-credit", title: "Lines of Credit" },
];
const ISSUE_ITEMS = [
  { id: "credit-cards", title: "Credit Cards" },
  { id: "debit-cards", title: "Debit Cards" },
  { id: "prepaid-cards", title: "Prepaid Cards" },
];
const STORE_ITEMS = [
  { id: "customer-balances", title: "Customer Balances" },
  { id: "account-structures", title: "Account Structures" },
  { id: "fdic-pass-through-insurance", title: "FDIC Pass-Through Insurance" },
  { id: "account-numbers", title: "Account Numbers" },
  { id: "fbo-accounts", title: "FBO Accounts" },
];
const DIGITAL_ASSETS_ITEMS = [
  { id: "stablecoins", title: "Stablecoins" },
  { id: "fiat-stablecoin-conversion", title: "Fiat & Stablecoin Conversion" },
  { id: "on-off-ramp", title: "On/Off Ramp" },
];
const MOVE_TOTAL = MOVE_ITEMS.length + 2;
const LEND_TOTAL = LEND_ITEMS.length + 2;
const ISSUE_TOTAL = ISSUE_ITEMS.length + 2;
const STORE_TOTAL = STORE_ITEMS.length + 2;
const DIGITAL_ASSETS_TOTAL = DIGITAL_ASSETS_ITEMS.length + 2;

export type Page =
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
  | "contact"
  | "move"
  | "lend"
  | "issue"
  | "store"
  | "digital-assets"
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

const USE_CASE_PAGES: Record<string, UseCaseKey> = {
  "uc-digital-banking": "digital-banking",
  "uc-business-finances": "business-finances",
  "uc-consumer-payments": "consumer-payments",
  "uc-crypto": "crypto",
  "uc-credit-builder": "credit-builder",
};

const USE_CASE_LABELS: Record<string, string> = {
  "uc-digital-banking": "Digital Banking",
  "uc-business-finances": "Business Finances",
  "uc-consumer-payments": "Consumer Payments",
  "uc-crypto": "Crypto",
  "uc-credit-builder": "Credit Builder",
};

const STUB_PAGES: Partial<Record<Page, { title: string; eyebrow: string }>> = {
  partnership: { title: "Partnership", eyebrow: "Partner Platform" },
  compliance: { title: "Compliance", eyebrow: "Partner Platform" },
  "api-docs": { title: "API documentation", eyebrow: "Developers" },
  changelog: { title: "Change logs", eyebrow: "Developers" },
  "uc-lending": { title: "Lending", eyebrow: "Use Cases" },
  careers: { title: "Careers at Lead", eyebrow: "Company" },
  "job-board": { title: "Job board", eyebrow: "Company" },
  privacy: { title: "Privacy", eyebrow: "Legal" },
  terms: { title: "Terms", eyebrow: "Legal" },
  accessibility: { title: "Accessibility", eyebrow: "Legal" },
  console: { title: "Console", eyebrow: "Account" },
  login: { title: "Login", eyebrow: "Account" },
};

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [section, setSection] = useState<string | undefined>(undefined);
  const stubPage = STUB_PAGES[page];
  const isCapabilityPage =
    page === "move" ||
    page === "lend" ||
    page === "issue" ||
    page === "store" ||
    page === "digital-assets";

  const goUseCase = (uc: "digital-banking" | "consumer-payments" | "crypto") => {
    const map: Record<string, Page> = {
      "digital-banking": "uc-digital-banking",
      "consumer-payments": "uc-consumer-payments",
      "crypto": "uc-crypto",
    };
    setPage(map[uc]);
    setSection(undefined);
  };

  useLenis();

  useEffect(() => {
    // Cross-page navigation without a specific anchor: snap to top of new page.
    // Section anchors are scrolled into view by the destination page itself.
    if (!section) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [page, section]);

  return (
    <div
      className="w-full min-h-screen overflow-x-clip relative"
      data-current-page={page}
      data-site-variant="baas"
      style={{ backgroundColor: "#eaeaee" }}
    >
      <style>{`
        [data-name="MENU"] { display: none !important; }
        [data-name="ws_nav"] { display: none !important; }
        [data-name="Footer"].absolute { display: none !important; }
        .dark-section-wrap > [data-name] { background-color: transparent !important; }
        .absolute.top-\\[855px\\].w-\\[22px\\] { display: none !important; }
        [data-name^="Desktop -"] > .absolute.content-stretch.flex.flex-col.gap-\\[7px\\].items-start.w-\\[22px\\] { display: none !important; }
        [data-name^="Desktop -"].rounded-\\[20px\\] { border-radius: 0 !important; }
        [data-name="btn"]:has([data-name="Icon=arrow_long_right"]) { display: none !important; }
        [data-name="Button"],
        .site-cta-button {
          cursor: pointer;
          transition: filter 180ms ease, background-color 180ms ease, opacity 180ms ease;
        }
        [data-name="Button"]:hover,
        .site-cta-button:hover {
          filter: brightness(0.92);
        }
        @keyframes pageEnter {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .page-enter {
          animation: pageEnter 320ms ease-out;
        }
        html { scroll-behavior: auto; }
      `}</style>

      <BaasNav
        page={page}
        onNavigate={(newPage, newSection) => {
          setPage(newPage);
          setSection(newSection);
        }}
      />

      <div key={page} className="page-enter">
      {page === "home" ? (
        <BaasHome
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "personal" ? (
        <PersonalBanking
          section={section}
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "business" ? (
        <BusinessBanking
          section={section}
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "move" ? (
        <>
          <RenamedPlatform
            smallLabel="Money Movement"
            overviewId="move-overview"
            items={MOVE_ITEMS}
            solutionsId="move-solutions"
            section={section}
            capability="move"
            onNavigate={(p) => {
              setPage(p);
              setSection(`${p}-overview`);
            }}
            onNavigateUseCase={goUseCase}
          />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </>
      ) : page === "lend" ? (
        <>
          <RenamedPlatform
            smallLabel="Credit & Lending"
            overviewId="lend-overview"
            items={LEND_ITEMS}
            solutionsId="lend-solutions"
            section={section}
            capability="lend"
            onNavigate={(p) => {
              setPage(p);
              setSection(`${p}-overview`);
            }}
            onNavigateUseCase={goUseCase}
          />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </>
      ) : page === "issue" ? (
        <>
          <RenamedPlatform
            smallLabel="Card Programs"
            overviewId="issue-overview"
            items={ISSUE_ITEMS}
            solutionsId="issue-solutions"
            section={section}
            capability="issue"
            onNavigate={(p) => {
              setPage(p);
              setSection(`${p}-overview`);
            }}
            onNavigateUseCase={goUseCase}
          />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </>
      ) : page === "store" ? (
        <>
          <RenamedPlatform
            smallLabel="Programmable Accounts"
            overviewId="store-overview"
            items={STORE_ITEMS}
            solutionsId="store-solutions"
            section={section}
            capability="store"
            onNavigate={(p) => {
              setPage(p);
              setSection(`${p}-overview`);
            }}
            onNavigateUseCase={goUseCase}
          />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </>
      ) : page === "digital-assets" ? (
        <>
          <RenamedPlatform
            smallLabel="Digital Assets"
            overviewId="digital-assets-overview"
            items={DIGITAL_ASSETS_ITEMS}
            solutionsId="digital-assets-solutions"
            section={section}
            capability="digital-assets"
            onNavigate={(p) => {
              setPage(p);
              setSection(`${p}-overview`);
            }}
            onNavigateUseCase={goUseCase}
          />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </>
      ) : page === "about" ? (
        <div className="w-full bg-white">
          <AboutUs
            onNavigate={(p) => {
              setPage(p);
              setSection(undefined);
            }}
          />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </div>
      ) : page === "leadership" ? (
        <LeadershipTeam
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "jackie" ? (
        <>
          <JackieProfile />
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </>
      ) : page === "blog" ? (
        <Blog
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "contact" ? (
        <ContactPage
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : USE_CASE_PAGES[page] ? (
        <UseCasePage
          useCase={USE_CASE_PAGES[page]}
          onNavigateCapability={(c) => {
            setPage(c);
            setSection(`${c}-overview`);
          }}
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : stubPage ? (
        <StubPage
          title={stubPage.title}
          eyebrow={stubPage.eyebrow}
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : (
        <BaasPlatform
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      )}
      </div>

      {!stubPage && !isCapabilityPage && page !== "about" && page !== "leadership" && page !== "jackie" && page !== "blog" && page !== "contact" && <ScrollIndicator
        total={
          page === "home"
            ? BAAS_HOME_SECTION_TOTAL
            : page === "baas"
            ? 11
            : page === "move"
            ? 6
            : page === "lend"
            ? LEND_TOTAL
            : page === "issue"
            ? ISSUE_TOTAL
            : page === "store"
            ? STORE_TOTAL
            : USE_CASE_PAGES[page]
            ? 1
            : 5
        }
        theme={page === "home" || page === "baas" ? "dark" : "light"}
      />}

      <ScrollFooter
        label={
          page === "home"
            ? "Lead Bank"
            : page === "personal"
            ? "Personal Banking"
            : page === "business"
            ? "Business Banking"
            : page === "move"
            ? "Money Movement"
            : page === "lend"
            ? "Credit & Lending"
            : page === "issue"
            ? "Card Programs"
            : page === "store"
            ? "Programmable Accounts"
            : page === "digital-assets"
            ? "Digital Assets"
            : page === "about"
            ? "Company"
            : page === "leadership"
            ? "Leadership"
            : page === "jackie"
            ? "Jackie Reses"
            : page === "blog"
            ? "Blog"
            : page === "contact"
            ? "Contact"
            : USE_CASE_LABELS[page]
            ? USE_CASE_LABELS[page]
            : stubPage
            ? stubPage.title
            : "Partner Platform"
        }
        total={
          page === "home"
            ? BAAS_HOME_SECTION_TOTAL
            : page === "baas"
            ? 11
            : page === "move"
            ? MOVE_TOTAL
            : page === "lend"
            ? LEND_TOTAL
            : page === "issue"
            ? ISSUE_TOTAL
            : page === "store"
            ? STORE_TOTAL
            : page === "digital-assets"
            ? DIGITAL_ASSETS_TOTAL
            : page === "about"
            ? 1
            : page === "leadership"
            ? 1
            : page === "jackie"
            ? 1
            : page === "blog"
            ? 1
            : page === "contact"
            ? 1
            : USE_CASE_PAGES[page]
            ? 1
            : stubPage
            ? 1
            : 5
        }
        theme={page === "home" || page === "baas" ? "dark" : "light"}
      />
    </div>
  );
}
