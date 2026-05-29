import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, type MotionValue, useScroll, useTransform } from "motion/react";
import imgBaasFlex from "../../imports/Desktop825/4af10adbc12ea0f40af38b00ab7bc8c2b91c5370.png";
import homeParallaxBg from "../../imports/HomeParallax/home-parallax-bg.png";
import type { Page } from "../App";
import { BaasHeroRotating } from "./BaasHeroRotating";
import { TrustBar } from "./TrustBar";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";

export const BAAS_HOME_SECTION_TOTAL = 9;

type Navigate = (page: Page, section?: string) => void;

const typeSettings = { fontVariationSettings: "'wdth' 100" };

const platformParagraphs = [
  {
    title: "Composable by Design",
    body: "Our modular building blocks let you assemble exactly what your product requires.",
  },
  {
    title: "Built to Scale Over Time",
    body: "Start with the capabilities you need today, add more over time, and deliver financial experiences that adapt as your business grows.",
  },
  {
    title: "Embedded Finance at Your Fingertips",
    body: "Whether you utilize them bundled or unbundled, our programmable banking primitives integrate seamlessly into your customer experience.",
  },
];

const partnerParagraphs = [
  {
    title: "Program Management",
    body: "From regulatory oversight to modern APIs, our role is to resolve friction behind the scenes so you can focus on creating meaningful experiences for your customers.",
  },
  {
    title: "Compliance at the Core",
    body: "We combine regulatory expertise, risk management, and ongoing oversight to support responsible innovation at every stage of growth.",
  },
  {
    title: "Financial Stewardship",
    body: "Lead pairs technology with disciplined banking operations, helping partners build responsibly at scale while navigating complex financial requirements.",
  },
];

const products = [
  {
    title: "Programmable Accounts",
    body: "Hold and manage customer funds with multi-currency balances and flexible, FDIC-insured depository account structures.",
    items: [
      "Customer Balances",
      "Account Structures",
      "FDIC Pass-Through Insurance",
      "Account Numbers",
      "FBO Accounts",
    ],
    page: "store" as Page,
    section: "store-overview",
  },
  {
    title: "Money Movement",
    body: "Power global money movement via ACH, wires, stablecoin, and internal transfers so your customers can quickly send and receive funds.",
    items: [
      "ACH Payments",
      "Wires",
      "Instant Payments",
      "Internal Transfers",
      "Checks",
      "International",
      "Stablecoin Transfers",
      "Payment Controls",
    ],
    page: "move" as Page,
    section: "move-overview",
  },
  {
    title: "Card Programs",
    body: "Create physical and virtual credit and debit cards, and generate multiple account numbers custom tailored to your program.",
    items: ["Credit Cards", "Debit Cards", "Prepaid Cards"],
    page: "issue" as Page,
    section: "issue-overview",
  },
  {
    title: "Credit & Lending",
    body: "Offer embedded credit products, from term loans and lines of credit to in-app financing and Buy Now, Pay Later options.",
    items: ["Term Loans", "Lines of Credit"],
    page: "lend" as Page,
    section: "lend-overview",
  },
  {
    title: "Digital Assets",
    body: "Support stablecoin-linked experiences with programmable movement between digital assets and traditional banking rails.",
    items: ["Stablecoins", "Fiat & Stablecoin Conversion", "On/Off Ramp"],
    page: "digital-assets" as Page,
    section: "digital-assets-overview",
  },
];

const useCases = [
  {
    title: "Digital Banking",
    body: "Become the main digital banking platform for your customers across accounts, transfers, and lending.",
    items: ["Account numbers", "Debit & credit cards", "Payments"],
    page: "uc-digital-banking" as Page,
  },
  {
    title: "Business Finances",
    body: "Become the financing solution for your business customers with corporate cards and installment lending.",
    items: ["Corporate cards", "Installment lending", "Spend management"],
    page: "uc-business-finances" as Page,
  },
  {
    title: "Consumer Payments",
    body: "Enable your customers to send and receive funds domestically and internationally.",
    items: ["ACH & wires", "Virtual accounts", "Payment status"],
    page: "uc-consumer-payments" as Page,
  },
  {
    title: "Crypto",
    body: "Provide on-ramps and off-ramps to move funds between bank accounts and cryptocurrency wallets.",
    items: ["Fiat on-ramps", "Off-ramps", "FBO accounts"],
    page: "uc-crypto" as Page,
  },
  {
    title: "Credit Builder",
    body: "Help your customers build credit by offering secured credit products.",
    items: ["Secured cards", "Term loans", "Lines of credit"],
    page: "uc-credit-builder" as Page,
  },
];

const backboneTopStats = [
  { value: "135+", label: "currencies & payment methods supported" },
  { value: "$1.9T", label: "in payments volume processed" },
  { value: "99.999%", label: "historical uptime for Lead services" },
  { value: "200M+", label: "active accounts managed on Lead" },
];

const backboneScaleStats = [
  { value: "$2T+", label: "Annual transaction volume" },
  { value: "99.999%", label: "Uptime, highest of any bank" },
  { value: "No. 1", label: "Issuer of real-time payments in the US" },
  { value: "$100B+", label: "International payments processed annually" },
];

const backboneApiStats = [
  { value: "500M+", label: "API requests per day" },
  { value: "10K+", label: "API requests per second" },
  { value: "150K+", label: "transactions per minute" },
];

// Gently ascending sawtooth — evokes a growth chart without literal data.
const backboneChartBars = [
  20, 28, 24, 32, 30, 38, 34, 44, 40, 50, 46, 56, 52, 62, 58, 68, 64, 74, 70, 80, 76, 86, 82, 92,
];

const newsArticles = [
  {
    headerLead: "The silent shift:",
    headerRest: " why the ground underneath fintech is moving",
    title: "The Silent Shift: Why the Ground Underneath Fintech Is Moving",
    author: "Luca Cosentino",
    role: "SVP, Head of Onchain Finance",
    initials: "LC",
    tag: "Viewpoint",
    date: "May 21, 2026",
    read: "6 min read",
    excerpt:
      "There is a quiet shift happening in fintech right now. It is a shift in what fintech competes on, and more importantly, who controls the infrastructure it runs on.",
    headerBg: "linear-gradient(135deg, #e3e3e9 0%, #cdcdd4 100%)",
  },
  {
    headerLead: "Not every bank",
    headerRest: " needs to become a fintech platform",
    title: "Not Every Bank Needs to Become a Fintech Platform",
    author: "Andrew Lambert",
    role: "SVP, Head of Product",
    initials: "AL",
    tag: "Viewpoint",
    date: "May 6, 2026",
    read: "4 min read",
    excerpt:
      "I've spent years watching this space evolve, most recently from the inside at Lead, and I want to say something that rarely makes headlines: most banks shouldn't try to become fintech platforms.",
    headerBg: "linear-gradient(135deg, #e8e8ec 0%, #d5d5dc 100%)",
  },
  {
    headerLead: "5 architectural models",
    headerRest: " for stablecoin-linked card programs",
    title: "5 Architectural Models for Stablecoin-linked Card Programs",
    author: "Cecilia Rogers",
    role: "VP, Crypto Product",
    initials: "CR",
    tag: "Viewpoint",
    date: "May 4, 2026",
    read: "3 min read",
    excerpt:
      "Stablecoins are entering the mainstream, with over $300B in circulation and regulatory clarity driving an inflection point for adoption. The next challenge is less about access and more about utility at scale.",
    headerBg: "linear-gradient(135deg, #dedee4 0%, #c9c9d1 100%)",
  },
];

const boldType = { fontVariationSettings: "'wght' 680, 'wdth' 100" } as const;

function HomeSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative h-full min-h-[1080px] overflow-hidden bg-[#eaeaee] ${className}`}>
      {children}
    </section>
  );
}

const HIGHLIGHT_COPY =
  "The bank we needed didn't exist. So we built it. Our team has been in your shoes. We know where bank partnerships usually break down. Designed for founders by founders, Lead brings together not just fintech experience and banking expertise, but award-winning excellence across the board.";

function HighlightParagraphSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const words = HIGHLIGHT_COPY.split(" ");

  return (
    <section ref={ref} className="relative h-[300vh]" data-name="ScrollHighlight">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-[clamp(32px,9vw,164px)]">
        <div className="max-w-[1380px]">
          <p
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(38px,4.4vw,68px)] leading-[1.1] tracking-[-1.36px]"
            style={typeSettings}
          >
            {words.map((word, index) => (
              <HighlightWord
                key={`${word}-${index}`}
                index={index}
                total={words.length}
                progress={scrollYProgress}
                word={word}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHT_START = 0.05;
const HIGHLIGHT_END = 0.9;
const HIGHLIGHT_DIM = "rgba(43,44,57,0.22)";
const HIGHLIGHT_BRIGHT = "#2b2c39";

function HighlightWord({
  index,
  total,
  progress,
  word,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  word: string;
}) {
  const span = HIGHLIGHT_END - HIGHLIGHT_START;
  const start = HIGHLIGHT_START + (index / Math.max(total - 1, 1)) * span * 0.85;
  const end = Math.min(start + span * 0.05, HIGHLIGHT_END);
  const color = useTransform(progress, [start, end], [HIGHLIGHT_DIM, HIGHLIGHT_BRIGHT]);

  const isLead = word.replace(/[^A-Za-z]/g, "") === "Lead";

  return (
    <motion.span
      data-highlight-word={index}
      style={{
        color,
        fontFamily: isLead ? "'Lead Sans Variable', sans-serif" : undefined,
        fontStyle: isLead ? "italic" : undefined,
        fontVariationSettings: isLead ? "'wdth' 115" : undefined,
      }}
    >
      {word}
      {index < total - 1 ? " " : ""}
    </motion.span>
  );
}

function useSectionProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) {
          setProgress((prev) => {
            const next = rect.top <= 0 ? 1 : 0;
            return prev === next ? prev : next;
          });
        } else {
          const traveled = -rect.top;
          const next = Math.min(Math.max(traveled / total, 0), 1);
          setProgress((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [ref]);

  return progress;
}

function rangeOpacity(progress: number, start: number, end: number) {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

function MeetThePlatformSection() {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useSectionProgress(ref);

  const reveals = [
    { start: 0.05, end: 0.2 },
    { start: 0.3, end: 0.45 },
    { start: 0.55, end: 0.7 },
  ];

  return (
    <section ref={ref} className="relative h-[320vh] bg-[#eaeaee]" data-name="MeetThePlatform">
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={imgBaasFlex}
        />
        <div className="relative z-10 flex h-full items-start px-[clamp(32px,9vw,154px)] pt-[clamp(120px,17vh,184px)]">
          <div className="max-w-[760px]">
            <h2
              className="max-w-[720px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(48px,5vw,80px)] leading-[1.05] tracking-[-1.6px] text-[#2b2c39]"
              style={typeSettings}
            >
              Meet the Platform Designed to Flex
            </h2>
            <div className="mt-[56px] flex flex-col gap-[28px]">
              {platformParagraphs.map((item, i) => {
                const o = rangeOpacity(progress, reveals[i].start, reveals[i].end);
                return (
                  <div
                    key={item.title}
                    style={{
                      opacity: o,
                      transform: `translateY(${(1 - o) * 18}px)`,
                      transition: "opacity 80ms linear, transform 80ms linear",
                    }}
                  >
                    <p
                      className="font-['Lead_Sans_Variable:Bold',sans-serif] text-[18px] leading-[1.3] text-[#2b2c39]"
                      style={typeSettings}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-[6px] max-w-[640px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.5] text-[#606171]"
                      style={typeSettings}
                    >
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BankingPartnerSection({ onNavigate }: { onNavigate: Navigate }) {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useSectionProgress(ref);

  const reveals = [
    { start: 0.05, end: 0.2 },
    { start: 0.3, end: 0.45 },
    { start: 0.55, end: 0.7 },
  ];
  const ctaOpacity = rangeOpacity(progress, 0.72, 0.85);

  return (
    <section ref={ref} className="relative h-[320vh] bg-[#eaeaee]" data-name="BankingPartner">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative z-10 flex h-full items-start px-[clamp(32px,9vw,154px)] pt-[clamp(120px,17vh,184px)]">
          <div className="max-w-[760px]">
            <h2
              className="max-w-[720px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(48px,5vw,80px)] leading-[1.05] tracking-[-1.6px] text-[#2b2c39]"
              style={typeSettings}
            >
              The Banking Partner Your Fintech Deserves
            </h2>
            <div className="mt-[56px] flex flex-col gap-[28px]">
              {partnerParagraphs.map((item, i) => {
                const o = rangeOpacity(progress, reveals[i].start, reveals[i].end);
                return (
                  <div
                    key={item.title}
                    style={{
                      opacity: o,
                      transform: `translateY(${(1 - o) * 18}px)`,
                      transition: "opacity 80ms linear, transform 80ms linear",
                    }}
                  >
                    <p
                      className="font-['Lead_Sans_Variable:Bold',sans-serif] text-[18px] leading-[1.3] text-[#2b2c39]"
                      style={typeSettings}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-[6px] max-w-[640px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.5] text-[#606171]"
                      style={typeSettings}
                    >
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                opacity: ctaOpacity,
                transform: `translateY(${(1 - ctaOpacity) * 18}px)`,
                transition: "opacity 80ms linear, transform 80ms linear",
                pointerEvents: ctaOpacity > 0.5 ? "auto" : "none",
              }}
            >
              <button
                type="button"
                onClick={() => onNavigate("api-docs")}
                className="site-cta-button mt-[44px] inline-flex h-[54px] items-center gap-[18px] rounded-[999px] bg-white px-[32px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] text-[#2b2c39] shadow-[0_18px_52px_rgba(43,44,57,0.08)]"
                style={typeSettings}
              >
                Documentation
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextStackSection({
  title,
  paragraphs,
  showImage = true,
  cta,
  onNavigate,
}: {
  title: string;
  paragraphs: typeof platformParagraphs;
  showImage?: boolean;
  cta?: { label: string; page: Page };
  onNavigate?: Navigate;
}) {
  return (
    <HomeSection>
      {showImage && (
        <img
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={imgBaasFlex}
        />
      )}
      <div className="relative z-10 flex min-h-screen items-start px-[clamp(32px,9vw,154px)] pt-[clamp(120px,17vh,184px)]">
        <div className="max-w-[760px]">
          <h2
            className="max-w-[720px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(48px,5vw,80px)] leading-[1.05] tracking-[-1.6px] text-[#2b2c39]"
            style={typeSettings}
          >
            {title}
          </h2>
          <div className="mt-[56px] flex flex-col gap-[28px]">
            {paragraphs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
              >
                <p
                  className="font-['Lead_Sans_Variable:Bold',sans-serif] text-[18px] leading-[1.3] text-[#2b2c39]"
                  style={typeSettings}
                >
                  {item.title}
                </p>
                <p
                  className="mt-[6px] max-w-[640px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.5] text-[#606171]"
                  style={typeSettings}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
          {cta && (
            <button
              type="button"
              onClick={() => onNavigate?.(cta.page)}
              className="site-cta-button mt-[44px] inline-flex h-[54px] items-center gap-[18px] rounded-[999px] bg-white px-[32px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] text-[#2b2c39] shadow-[0_18px_52px_rgba(43,44,57,0.08)]"
              style={typeSettings}
            >
              {cta.label}
              <ArrowRight size={17} />
            </button>
          )}
        </div>
      </div>
    </HomeSection>
  );
}

function ProductCard({
  item,
  onNavigate,
  compact = false,
  revealed,
  delay = 0,
}: {
  item: { title: string; body: string; items: string[]; page: Page; section?: string };
  onNavigate: Navigate;
  compact?: boolean;
  revealed: boolean;
  delay?: number;
}) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.page, item.section)}
      className={`site-cta-button flex flex-col items-start rounded-[32px] border border-white bg-white/32 p-[32px] text-left shadow-[0_18px_52px_rgba(43,44,57,0.08)] backdrop-blur-[40px] ${compact ? "min-h-[220px]" : "min-h-[430px]"}`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 525ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 525ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 180ms ease`,
      }}
    >
      <p
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(24px,2vw,32px)] leading-[1.15] text-[#2b2c39]"
        style={typeSettings}
      >
        {item.title}
      </p>
      <p
        className="mt-[22px] max-w-[360px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.4] text-[#606171]"
        style={typeSettings}
      >
        {item.body}
      </p>
      <ul
        className="mt-[18px] list-disc pl-[20px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.45] text-[#606171]"
        style={typeSettings}
      >
        {item.items.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </button>
  );
}

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const CARD_STAGGER_MS = 90;

function ProductsSection({ onNavigate }: { onNavigate: Navigate }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <HomeSection className="px-[172.8px] py-[120px]">
      <div className="mb-[58px]">
        <h2
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1.44px] text-[#2b2c39]"
          style={typeSettings}
        >
          Products
        </h2>
        <p
          className="mt-[22px] max-w-[666px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.4] text-[#606171]"
          style={typeSettings}
        >
          Built to support any use case, our APIs enable you to embed core banking capabilities directly into your products.
        </p>
      </div>
      <div ref={ref} className="grid gap-[16px] xl:grid-cols-[repeat(4,minmax(0,1fr))]">
        {products.slice(0, 3).map((item, i) => (
          <ProductCard
            key={item.title}
            item={item}
            onNavigate={onNavigate}
            revealed={inView}
            delay={i * CARD_STAGGER_MS}
          />
        ))}
        <div className="grid gap-[16px]">
          {products.slice(3).map((item, i) => (
            <ProductCard
              key={item.title}
              item={item}
              compact
              onNavigate={onNavigate}
              revealed={inView}
              delay={(3 + i) * CARD_STAGGER_MS}
            />
          ))}
        </div>
      </div>
    </HomeSection>
  );
}

function UseCasesSection({ onNavigate }: { onNavigate: Navigate }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <HomeSection className="px-[172.8px] py-[120px]">
      <div className="mb-[58px] max-w-[720px]">
        <h2
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1.44px] text-[#2b2c39]"
          style={typeSettings}
        >
          Use Cases
        </h2>
        <p
          className="mt-[22px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.4] text-[#606171]"
          style={typeSettings}
        >
          Our platform's limitless composability means you can assemble unique products across every category of financial services.
        </p>
      </div>
      <div ref={ref} className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, i) => (
          <ProductCard
            key={item.title}
            item={item}
            compact
            onNavigate={onNavigate}
            revealed={inView}
            delay={i * CARD_STAGGER_MS}
          />
        ))}
      </div>
    </HomeSection>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.18);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 640ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 640ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ value, durationMs = 1100 }: { value: string; durationMs?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.3);

  const match = value.match(/(\d[\d,]*(?:\.\d+)?)/);
  const numStr = match ? match[1] : "";
  const idx = match?.index ?? 0;
  const prefix = value.slice(0, idx);
  const suffix = value.slice(idx + numStr.length);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const hasComma = numStr.includes(",");
  const target = numStr ? parseFloat(numStr.replace(/,/g, "")) : 0;

  const format = (n: number) => {
    const fixed = n.toFixed(decimals);
    const body = hasComma
      ? Number(fixed).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : fixed;
    return `${prefix}${body}${suffix}`;
  };

  const [display, setDisplay] = useState(() => (match ? format(0) : value));

  useEffect(() => {
    if (!match) return;
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(target));
      return;
    }
    let raf = 0;
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(format(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(format(target));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

function BackboneStat({
  value,
  label,
  dark = false,
  center = false,
  countUp = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
  center?: boolean;
  countUp?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(34px,3.3vw,52px)] leading-[1.02] tracking-[-1px] tabular-nums"
        style={{ ...typeSettings, color: dark ? "#f4f4f6" : "#2b2c39" }}
      >
        {countUp ? <CountUp value={value} /> : value}
      </p>
      <p
        className={`mt-[10px] max-w-[220px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.4] ${center ? "mx-auto" : ""}`}
        style={{ ...typeSettings, color: dark ? "rgba(234,234,238,0.6)" : "#606171" }}
      >
        {label}
      </p>
    </div>
  );
}

function GrowthChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="relative flex h-[clamp(220px,26vw,300px)] w-full items-end gap-[clamp(3px,0.5vw,6px)]">
      {backboneChartBars.map((h, i) => (
        <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
          <span className="mb-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#9a9aa6]" />
          <div
            className="w-full rounded-full"
            style={{
              height: inView ? `${h}%` : "0%",
              backgroundImage: "linear-gradient(to top, rgba(43,44,57,0.03), rgba(43,44,57,0.16))",
              transition: `height 460ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 16}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function WaveGraphic() {
  const lines = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[60%] w-[55%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent)",
        }}
      />
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {lines.map((i) => {
          const s = i * 18;
          const d = `M0 ${200 + s} C 360 ${200 + s * 1.25}, 520 ${200 + s * 0.12}, 600 200 S 860 ${
            200 - s * 1.05
          }, 1200 ${200 - s * 1.3}`;
          const opacity = 0.1 + (1 - Math.abs(i) / 4) * 0.32;
          return <path key={i} d={d} fill="none" stroke="#ffffff" strokeWidth={1} strokeOpacity={opacity} />;
        })}
      </svg>
    </div>
  );
}

function BackboneSection({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <section className="relative w-full bg-[#eaeaee] px-[clamp(32px,9vw,154px)] py-[clamp(80px,10vw,140px)]">
      <div className="flex flex-col gap-[20px]">
        {/* Headline + topline stats — sits directly on the section background */}
        <FadeUp className="pt-[clamp(8px,2vw,40px)]">
          <h2
            className="mx-auto max-w-[760px] text-center font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(38px,4.6vw,64px)] leading-[1.05] tracking-[-1.6px] text-[#2b2c39]"
            style={typeSettings}
          >
            The backbone of modern banking
          </h2>
          <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-2 gap-y-[36px] border-t border-[rgba(43,44,57,0.08)] pt-[clamp(32px,3.5vw,48px)] md:grid-cols-4">
            {backboneTopStats.map((stat) => (
              <BackboneStat key={stat.label} value={stat.value} label={stat.label} center countUp />
            ))}
          </div>
        </FadeUp>

        {/* Scale with confidence — dark panel; extra space above to separate from the stat band */}
        <FadeUp
          delay={60}
          className="relative mt-[40px] overflow-hidden rounded-[28px] px-[clamp(28px,4vw,72px)] py-[clamp(48px,6vw,80px)]"
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, #2f3040 0%, #20212b 60%, #1a1b23 100%)" }}
          />
          <WaveGraphic />
          <div className="relative flex min-h-[clamp(300px,38vw,440px)] flex-col justify-between gap-[clamp(40px,6vw,96px)]">
            <p
              className="max-w-[640px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(24px,2.4vw,34px)] leading-[1.25] tracking-[-0.6px]"
              style={typeSettings}
            >
              <span className="text-[#f4f4f6]">Scale with confidence.</span>{" "}
              <span className="text-[rgba(234,234,238,0.55)]">
                Handle thousands of transactions per second with consistent speed and reliability, even
                during peak traffic periods.
              </span>
            </p>
            <div className="grid grid-cols-1 gap-y-[32px] sm:grid-cols-3">
              {backboneApiStats.map((stat) => (
                <BackboneStat key={stat.label} value={stat.value} label={stat.label} dark />
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Trusted at scale card */}
        <FadeUp
          delay={120}
          className="rounded-[28px] border border-white bg-white/55 p-[clamp(28px,3.5vw,56px)] shadow-[0_18px_52px_rgba(43,44,57,0.06)] backdrop-blur-[40px]"
        >
          <div className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
            <div>
              <p
                className="max-w-[520px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(26px,2.6vw,38px)] leading-[1.18] tracking-[-0.8px]"
                style={typeSettings}
              >
                <span className="text-[#2b2c39]">Moving hundreds of billions a month</span>{" "}
                <span className="text-[#9a9aa6]">
                  for the world's most sophisticated companies and financial institutions.
                </span>
              </p>
              <p
                className="mt-[24px] max-w-[460px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[16px] leading-[1.5] text-[#606171]"
                style={typeSettings}
              >
                As the banking backbone for the most technically advanced companies, we provide speed and
                control through our regulated infrastructure.
              </p>
              <button
                type="button"
                onClick={() => onNavigate("about")}
                className="site-cta-button mt-[32px] inline-flex h-[48px] items-center gap-[8px] rounded-full bg-white px-[24px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#2b2c39] shadow-[0_12px_32px_rgba(43,44,57,0.08)]"
                style={typeSettings}
              >
                Learn about our bank
                <ChevronRight size={16} />
              </button>
            </div>
            <GrowthChart />
          </div>
          <div className="mt-[clamp(40px,4vw,64px)] grid grid-cols-2 gap-y-[32px] border-t border-[rgba(43,44,57,0.08)] pt-[clamp(28px,3vw,40px)] md:grid-cols-4">
            {backboneScaleStats.map((stat) => (
              <BackboneStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function NewsCard({
  article,
  revealed,
  delay,
  onClick,
}: {
  article: (typeof newsArticles)[number];
  revealed: boolean;
  delay: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="site-cta-button flex flex-col overflow-hidden rounded-[24px] border border-white bg-white/55 text-left shadow-[0_18px_52px_rgba(43,44,57,0.06)] backdrop-blur-[40px]"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 525ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 525ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 180ms ease`,
      }}
    >
      <div
        className="relative flex min-h-[252px] flex-col justify-between overflow-hidden p-[28px]"
        style={{ background: article.headerBg }}
      >
        <svg
          className="pointer-events-none absolute -right-[36px] -top-[36px] h-[176px] w-[176px]"
          viewBox="0 0 176 176"
          fill="none"
          aria-hidden
        >
          {[72, 54, 36].map((r) => (
            <circle key={r} cx="120" cy="56" r={r} stroke="rgba(43,44,57,0.07)" strokeWidth="1" />
          ))}
        </svg>
        <p
          className="relative font-['Lead_Sans_Variable:Medium',sans-serif] text-[13px] text-[#606171]"
          style={typeSettings}
        >
          Lead <span style={{ fontStyle: "italic" }}>Insights</span>
        </p>
        <p
          className="relative max-w-[280px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[22px] leading-[1.2] tracking-[-0.4px] text-[#2b2c39]"
          style={typeSettings}
        >
          <span style={boldType}>{article.headerLead}</span>
          {article.headerRest}
        </p>
        <div className="relative flex items-center gap-[12px]">
          <div
            className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#b6b6c0] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-white"
            style={typeSettings}
          >
            {article.initials}
          </div>
          <div className="leading-[1.3]">
            <p
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[10px] text-[#606171]"
              style={{ ...typeSettings, fontStyle: "italic" }}
            >
              Author
            </p>
            <p
              className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[13px] text-[#2b2c39]"
              style={typeSettings}
            >
              {article.author}
            </p>
            <p
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[11px] text-[#606171]"
              style={typeSettings}
            >
              {article.role}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[16px] p-[28px]">
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.25] text-[#2b2c39]"
          style={boldType}
        >
          {article.title}
        </p>
        <div className="flex flex-wrap items-center gap-[14px]">
          <span
            className="rounded-full bg-[rgba(43,44,57,0.06)] px-[12px] py-[5px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[12px] text-[#606171]"
            style={typeSettings}
          >
            {article.tag}
          </span>
          <span
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[13px] text-[#606171]"
            style={typeSettings}
          >
            {article.date} | {article.read}
          </span>
        </div>
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.5] text-[#606171]"
          style={typeSettings}
        >
          {article.excerpt}
        </p>
      </div>
    </button>
  );
}

function NewsSection({ onNavigate }: { onNavigate: Navigate }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="relative w-full bg-[#eaeaee] px-[clamp(32px,9vw,154px)] pb-[clamp(48px,5vw,80px)] pt-[clamp(80px,10vw,140px)]">
      <div className="flex flex-col gap-[44px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:items-end md:justify-between">
          <div className="max-w-[560px]">
            <h2
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[-1.44px] text-[#2b2c39]"
              style={typeSettings}
            >
              News &amp; Insights
            </h2>
            <p
              className="mt-[22px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.4] text-[#606171]"
              style={typeSettings}
            >
              Stay up to date with the latest product launches, industry insights, and media coverage from Lead.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("blog")}
            className="site-cta-button inline-flex h-[48px] shrink-0 items-center gap-[8px] rounded-full bg-white px-[24px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[14px] text-[#2b2c39] shadow-[0_12px_32px_rgba(43,44,57,0.08)]"
            style={typeSettings}
          >
            Read the latest from Lead
            <ChevronRight size={16} />
          </button>
        </div>
        <div ref={ref} className="grid gap-[16px] lg:grid-cols-3">
          {newsArticles.map((article, i) => (
            <NewsCard
              key={article.title}
              article={article}
              revealed={inView}
              delay={i * CARD_STAGGER_MS}
              onClick={() => onNavigate("blog")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStartedSection({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <section className="relative w-full bg-[#eaeaee] px-[clamp(32px,9vw,154px)] pb-[clamp(80px,10vw,140px)]">
      <FadeUp className="relative overflow-hidden rounded-[28px] px-[clamp(28px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #2f3040 0%, #20212b 60%, #1a1b23 100%)" }}
        />
        <WaveGraphic />
        <div className="relative max-w-[620px]">
          <h2
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[clamp(40px,4.4vw,60px)] leading-[1.05] tracking-[-1.2px]"
            style={typeSettings}
          >
            <span className="text-[#f4f4f6]">Ready to </span>
            <span className="text-[#c2c2cc]" style={{ ...typeSettings, fontStyle: "italic" }}>
              get started?
            </span>
          </h2>
          <p
            className="mt-[24px] max-w-[520px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[16px] leading-[1.55] text-[rgba(234,234,238,0.55)]"
            style={typeSettings}
          >
            We bridge the best of both worlds. The technology support you want, combined with the banking
            expertise you need to create a customized banking solution no matter what your business needs may be.
          </p>
          <div className="mt-[36px] flex flex-wrap items-center gap-[26px]">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="site-cta-button inline-flex h-[50px] items-center rounded-full bg-white px-[28px] font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] text-[#2b2c39]"
              style={typeSettings}
            >
              Get in touch
            </button>
            <button
              type="button"
              onClick={() => onNavigate("api-docs")}
              className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[15px] text-[#eaeaee] underline decoration-[rgba(234,234,238,0.4)] underline-offset-[6px] transition-colors hover:decoration-[#eaeaee]"
              style={typeSettings}
            >
              Explore API Documentation
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// Parallax backdrop for the hero + scroll-highlight region. The sticky layer
// keeps the image filling the viewport while you scroll through both sections,
// and the inner image drifts upward slowly (a fraction of scroll) for depth,
// then releases and scrolls away when the region ends.
function HomeParallaxBg() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const region = ref.current?.parentElement;
      const img = imgRef.current;
      if (region && img) {
        const rect = region.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
        // Drift up to 36vh over the whole region — image is 140vh tall so it
        // never reveals an edge (36 < 40vh of overflow).
        img.style.transform = `translate3d(0, ${(-p * 36).toFixed(2)}vh, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none sticky top-0 z-0 h-screen w-full overflow-hidden">
      <img
        ref={imgRef}
        src={homeParallaxBg}
        alt=""
        className="h-[140%] w-full object-cover will-change-transform"
      />
    </div>
  );
}

export function BaasHome({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <div className="relative w-full">
      <div className="relative">
        <HomeParallaxBg />
        <div className="relative z-10 -mt-[100vh]">
          <Reveal>
            <BaasHeroRotating />
          </Reveal>
          <HighlightParagraphSection />
          <TrustBar />
        </div>
      </div>

      <MeetThePlatformSection />

      <BackboneSection onNavigate={onNavigate} />

      <Reveal>
        <ProductsSection onNavigate={onNavigate} />
      </Reveal>
      <Reveal>
        <UseCasesSection onNavigate={onNavigate} />
      </Reveal>

      <BankingPartnerSection onNavigate={onNavigate} />

      <NewsSection onNavigate={onNavigate} />

      <GetStartedSection onNavigate={onNavigate} />

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
