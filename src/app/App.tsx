import { useEffect, useState } from "react";
import Desktop807 from "../imports/Desktop807/Desktop807";
import { HeroRotating } from "./components/HeroRotating";
import Desktop778 from "../imports/Desktop778/Desktop778";
import { SiteFooter } from "./components/SiteFooter";
import imgHomeA from "../imports/Desktop772/00b7a85efd5530ed04836de8cb6b3380a5f23726.png";
import imgHomeB from "../imports/Desktop772/2e0d7621d24b5cac2ad309914b257bd34a82cccf.png";
import { Reveal } from "./components/Reveal";
import { Nav } from "./components/Nav";
import { PersonalBanking } from "./components/PersonalBanking";
import { BusinessBanking } from "./components/BusinessBanking";
import { BaasPlatform } from "./components/BaasPlatform";
import { MovePlatform } from "./components/MovePlatform";
import { RenamedPlatform } from "./components/RenamedPlatform";
import AboutUs from "../imports/AboutUs/AboutUs";
import { ScrollFooter } from "./components/ScrollFooter";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { UseCasePage, type UseCaseKey } from "./components/UseCasePage";
import { LeadershipTeam } from "./components/LeadershipTeam";
import { Blog } from "./components/Blog";
import { StubPage } from "./components/StubPage";
import { PartnerPlatform } from "./components/PartnerPlatform";
import { EverydayBanking } from "./components/EverydayBanking";

const LEND_ITEMS = [
  { id: "embedded-credit", title: "Embedded credit" },
  { id: "bnpl", title: "BNPL" },
  { id: "lines-of-credit", title: "Lines of credit" },
];
const ISSUE_ITEMS = [
  { id: "physical-virtual-cards", title: "Physical & virtual cards" },
  { id: "custom-account-numbers", title: "Custom account numbers" },
];
const STORE_ITEMS = [
  { id: "multi-currency-balances", title: "Multi-currency balances" },
  { id: "fdic-insured-accounts", title: "FDIC-insured accounts" },
];
const LEND_TOTAL = LEND_ITEMS.length + 2;
const ISSUE_TOTAL = ISSUE_ITEMS.length + 2;
const STORE_TOTAL = STORE_ITEMS.length + 2;

const sections = [
  HeroRotating,
  Desktop807,
  PartnerPlatform,
  Desktop778,
  EverydayBanking,
];

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
  | "move"
  | "lend"
  | "issue"
  | "store"
  | "about"
  | "leadership"
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

  const goUseCase = (uc: "digital-banking" | "consumer-payments" | "crypto") => {
    const map: Record<string, Page> = {
      "digital-banking": "uc-digital-banking",
      "consumer-payments": "uc-consumer-payments",
      "crypto": "uc-crypto",
    };
    setPage(map[uc]);
    setSection(undefined);
  };

  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0 });
    }
  }, [page, section]);

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden relative"
      style={{ backgroundColor: page === "home" ? "transparent" : "#eaeaee" }}
    >
      <style>{`
        [data-name="MENU"] { display: none !important; }
        [data-name="ws_nav"] { display: none !important; }
        [data-name="Footer"].absolute { display: none !important; }
        .dark-section-wrap > [data-name] { background-color: transparent !important; }
        .absolute.top-\\[855px\\].w-\\[22px\\] { display: none !important; }
        [data-name^="Desktop -"].rounded-\\[20px\\] { border-radius: 0 !important; }
        [data-name="btn"]:has([data-name="Icon=arrow_long_right"]) { display: none !important; }
      `}</style>

      {page === "home" && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <img src={imgHomeA} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img src={imgHomeB} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      )}

      <Nav
        page={page}
        onNavigate={(newPage, newSection) => {
          setPage(newPage);
          setSection(newSection);
        }}
      />

      {page === "home" ? (
        <div className="w-full relative">
          {sections.map((Section, i) => (
            <Reveal key={i}>
              {Section === PartnerPlatform ? (
                <PartnerPlatform
                  onNavigate={() => {
                    setPage("baas");
                    setSection(undefined);
                  }}
                />
              ) : (
                <Section />
              )}
            </Reveal>
          ))}
          <SiteFooter
            onNavigate={(p, s) => {
              setPage(p);
              setSection(s);
            }}
          />
        </div>
      ) : page === "personal" ? (
        <PersonalBanking
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "business" ? (
        <BusinessBanking
          onNavigate={(p, s) => {
            setPage(p);
            setSection(s);
          }}
        />
      ) : page === "move" ? (
        <>
          <MovePlatform
            section={section}
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
            smallLabel="Lend"
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
            smallLabel="Issue"
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
            smallLabel="Store"
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
      ) : page === "about" ? (
        <div className="w-full bg-white">
          <AboutUs />
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
      ) : page === "blog" ? (
        <Blog
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

      {!stubPage && page !== "about" && page !== "leadership" && page !== "blog" && <ScrollIndicator
        total={
          page === "home"
            ? sections.length
            : page === "baas"
            ? 10
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
            ? "Move"
            : page === "lend"
            ? "Lend"
            : page === "issue"
            ? "Issue"
            : page === "store"
            ? "Store"
            : page === "about"
            ? "Company"
            : page === "leadership"
            ? "Leadership"
            : page === "blog"
            ? "Blog"
            : USE_CASE_LABELS[page]
            ? USE_CASE_LABELS[page]
            : stubPage
            ? stubPage.title
            : "Partner Platform"
        }
        total={
          page === "home"
            ? sections.length
            : page === "baas"
            ? 10
            : page === "move"
            ? 6
            : page === "lend"
            ? LEND_TOTAL
            : page === "issue"
            ? ISSUE_TOTAL
            : page === "store"
            ? STORE_TOTAL
            : page === "about"
            ? 1
            : page === "leadership"
            ? 1
            : page === "blog"
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
