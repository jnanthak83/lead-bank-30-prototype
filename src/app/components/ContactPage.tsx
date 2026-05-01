import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Phone,
} from "lucide-react";
import imgLocation from "../../imports/Desktop600/d54437a605e1ed97e4ccad4de33f0d0fa8ac187d.png";
import imgCareers from "../../imports/Desktop807/ad222aff801d95423029cfcd0e94b9bcb4cdffa2.png";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

type ContactTab = "Banking" | "General" | "Press" | "Partner Platform";

const TABS: ContactTab[] = ["Banking", "General", "Press", "Partner Platform"];

const PRODUCTS = [
  { title: "Lending", body: "Term loans, lines of credit" },
  { title: "Transfers", body: "ACH, internal transfers, wires, checks" },
  { title: "Cards", body: "Credit or charge cards, debit, or prepaid cards" },
  { title: "Accounts", body: "Virtual accounts, FBO accounts" },
];

function FormShell({ children }: { children: ReactNode }) {
  return (
    <form
      className="rounded-[28px] bg-white px-[32px] py-[36px] shadow-[0_1px_0_rgba(43,44,57,0.04)] md:px-[56px] md:py-[48px]"
      onSubmit={(event) => event.preventDefault()}
    >
      {children}
    </form>
  );
}

function Field({
  label,
  value,
  placeholder,
  className = "",
}: {
  label: string;
  value?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`flex min-h-[86px] flex-col justify-center rounded-[12px] border border-[#dedee4] bg-[#fbfbfc] px-[22px] ${className}`}>
      <span
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.3] text-[#777884]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </span>
      <input
        className="mt-[6px] w-full border-0 bg-transparent p-0 font-['Lead_Sans_Variable:Regular',sans-serif] text-[21px] leading-[1.25] text-[#2b2c39] outline-none placeholder:text-[#a4a5ad]"
        defaultValue={value}
        placeholder={placeholder}
        style={{ fontVariationSettings: "'wdth' 100" }}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`flex min-h-[86px] items-center justify-between rounded-[12px] border border-[#dedee4] bg-[#fbfbfc] px-[22px] text-left ${className}`}
    >
      <span className="flex flex-col">
        <span
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.3] text-[#777884]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </span>
        <span
          className="mt-[6px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[21px] leading-[1.25] text-[#2b2c39]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {value}
        </span>
      </span>
      <ChevronDown size={22} color="#777884" />
    </button>
  );
}

function MessageField({ className = "" }: { className?: string }) {
  return (
    <label className={`flex min-h-[360px] flex-col rounded-[12px] border border-[#dedee4] bg-[#fbfbfc] px-[22px] py-[20px] ${className}`}>
      <span
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] leading-[1.3] text-[#777884]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Message
      </span>
      <textarea
        className="mt-[6px] min-h-0 flex-1 resize-none border-0 bg-transparent p-0 font-['Lead_Sans_Variable:Regular',sans-serif] text-[21px] leading-[1.25] text-[#2b2c39] outline-none placeholder:text-[#a4a5ad]"
        placeholder="Write your message"
        style={{ fontVariationSettings: "'wdth' 100" }}
      />
    </label>
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="mt-[34px] flex h-[60px] w-full items-center justify-center rounded-[8px] border-0 bg-[#8b9296] font-['Lead_Sans_Variable:Regular',sans-serif] text-[22px] text-white transition-[filter] hover:brightness-[0.92]"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      Submit
    </button>
  );
}

function StandardForm({ variant }: { variant: "banking" | "general" | "press" }) {
  const showBankingFields = variant === "banking";

  return (
    <FormShell>
      <div className="grid gap-[24px] xl:grid-cols-[1.05fr_1fr]">
        <div className="grid gap-[22px]">
          {showBankingFields && (
            <>
              <SelectField label="Account type" value="Business" />
              <SelectField label="Reason for contacting" value="Open business account" />
            </>
          )}
          <Field label="First name" value="Jeshua" />
          <Field label="Last name" value="Nanthakumar" />
          <SelectField label="State" value="California" />
        </div>
        <div className="grid gap-[22px] md:grid-cols-2 xl:grid-cols-2">
          <Field label="Email" value="jesh@lead.com" />
          <Field label="Phone number" value="778-123-4567" />
          <MessageField className="md:col-span-2" />
        </div>
      </div>
      <SubmitButton />
    </FormShell>
  );
}

function ProductCard({ title, body }: { title: string; body: string }) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSelected((next) => !next)}
      className="flex min-h-[116px] items-center justify-between border border-[#e3e3e8] bg-[#f7f7f8] px-[26px] text-left transition-all hover:brightness-[0.98]"
      style={{ borderColor: selected ? "#0040ff" : "#e3e3e8", backgroundColor: selected ? "#f0f5ff" : "#f7f7f8" }}
    >
      <span>
        <span
          className="block font-['Lead_Sans_Variable:Regular',sans-serif] text-[20px] leading-[1.2] text-[#2b2c39]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {title}
        </span>
        <span
          className="mt-[6px] block font-['Lead_Sans_Variable:Regular',sans-serif] text-[13px] leading-[1.35] text-[#606171]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {body}
        </span>
      </span>
      <span className="flex size-[22px] items-center justify-center rounded-[6px] border border-[#d9d9df] bg-white text-[#0040ff]">
        {selected && <Check size={15} />}
      </span>
    </button>
  );
}

function PartnerPlatformForm() {
  return (
    <div className="mt-[26px]">
      <h2
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[44px] leading-[1.05] text-[#2b2c39]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Ready to build with Lead?
      </h2>
      <p
        className="mt-[14px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.35] text-[#777884]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Tell us about your use case - our team will review and get in touch shortly.
      </p>

      <FormShell>
        <section>
          <p
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.3] text-[#2b2c39]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            What Partner Platform products are you interested in?*
          </p>
          <div className="mt-[24px] grid gap-[18px] md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.title} title={product.title} body={product.body} />
            ))}
          </div>
        </section>

        <div className="my-[34px] h-px bg-[#d9d9df]" />

        <section>
          <p
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.3] text-[#2b2c39]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Project Information*
          </p>
          <div className="mt-[18px] grid gap-[18px] lg:grid-cols-3">
            <SelectField label="Project timeline" value="Select" />
            <SelectField label="Compliance function in place?" value="Select" />
            <SelectField label="Project launched in the US?" value="Select" />
          </div>
        </section>

        <div className="my-[34px] h-px bg-[#d9d9df]" />

        <section>
          <p
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px] leading-[1.3] text-[#2b2c39]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Contact Information
          </p>
          <div className="mt-[22px] grid gap-[24px] xl:grid-cols-[1fr_1fr]">
            <div className="grid gap-[18px]">
              <Field label="First name*" value="Jeshua" />
              <Field label="Last name" value="Nanthakumar" />
              <Field label="Company name*" value="ABC Inc." />
              <div className="grid gap-[18px] md:grid-cols-2">
                <Field label="Company Email Address*" value="jesh@lead.com" />
                <Field label="Phone number" value="778-123-4567" />
              </div>
            </div>
            <MessageField />
          </div>
        </section>

        <SubmitButton />
      </FormShell>
    </div>
  );
}

function SupportSection() {
  return (
    <section className="mt-[56px]">
      <h2
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[32px] leading-[1.1] text-[#2b2c39]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Support
      </h2>
      <div className="mt-[20px] grid gap-[22px] rounded-[18px] bg-white p-[28px] lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[10px]">
            <MessageCircle size={22} />
            <span className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Live chat
            </span>
          </div>
          <p className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[16px] text-[#606171]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Monday - Friday, 8am - 5pm CT
          </p>
          <button className="h-[42px] w-fit rounded-[6px] border-0 bg-[#8b9296] px-[28px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[15px] text-white" type="button" style={{ fontVariationSettings: "'wdth' 100" }}>
            Start a conversation
          </button>
        </div>
        <div>
          <div className="flex items-center gap-[10px]">
            <Phone size={22} />
            <span className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Phone
            </span>
          </div>
          <div className="mt-[42px] grid gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Main", "(866) 845-9645"],
              ["Fax", "(816) 220-8602"],
              ["Debit Card Support", "(833) 412-3816"],
              ["Credit Card support", "(844) 267-2736"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[13px] text-[#606171]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
                <p className="mt-[4px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[17px] text-[#2b2c39]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  title,
  address,
}: {
  title: string;
  address: string;
}) {
  return (
    <article className="grid min-h-[210px] items-center gap-[28px] rounded-[14px] bg-white p-[28px] md:grid-cols-[1fr_220px]">
      <div>
        <h3 className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] leading-[1.1] text-[#2b2c39]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {title}
        </h3>
        <p className="mt-[8px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] text-[#606171]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {address}
        </p>
        <p className="mt-[8px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[14px] text-[#777884]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Closed - Opens 9 a.m.
        </p>
        <button className="mt-[18px] flex items-center gap-[10px] border-0 bg-transparent p-0 font-['Lead_Sans_Variable:Medium',sans-serif] text-[15px] text-[#2b2c39]" type="button" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get directions
          <ArrowRight size={17} />
        </button>
      </div>
      <img alt="" className="h-[132px] w-full rounded-[8px] object-cover grayscale" src={imgLocation} />
    </article>
  );
}

function LocationsSection() {
  return (
    <section className="mt-[42px]">
      <h2
        className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[32px] leading-[1.1] text-[#2b2c39]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Locations
      </h2>
      <div className="mt-[20px] grid gap-[22px] xl:grid-cols-2">
        <LocationCard title="Crossroads" address="1801 Main St. Kansas City, MO 64108" />
        <LocationCard title="Lee's Summit" address="9019 MO-7, Lee's Summit, MO 64064" />
      </div>
    </section>
  );
}

function CareersBand({ onNavigate }: { onNavigate?: (page: Page, section?: string) => void }) {
  return (
    <section className="mt-[76px] grid min-h-[560px] items-center gap-[60px] rounded-[28px] bg-white px-[40px] py-[72px] lg:grid-cols-[0.8fr_1.2fr] lg:px-[96px]">
      <div>
        <h2
          className="max-w-[600px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[42px] leading-[1.15] text-[#606171] md:text-[56px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Join us in shaping the future of banking at Lead Bank!
        </h2>
        <button
          type="button"
          onClick={() => onNavigate?.("careers")}
          className="mt-[34px] h-[48px] rounded-[6px] border-0 bg-[#8b9296] px-[34px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[16px] text-white transition-[filter] hover:brightness-[0.92]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          See open positions
        </button>
      </div>
      <img alt="" className="h-[320px] w-full rounded-[6px] object-cover" src={imgCareers} />
    </section>
  );
}

export function ContactPage({
  onNavigate,
}: {
  onNavigate?: (page: Page, section?: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<ContactTab>("Banking");

  return (
    <div className="min-h-screen bg-[#eaeaee] pt-[152px] text-[#2b2c39]">
      <main className="mx-auto max-w-[1680px] px-[40px] pb-[80px]">
        <section>
          <h1
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[64px] leading-[1.05] text-[#2b2c39]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Get in touch
          </h1>
          <p
            className="mt-[20px] max-w-[1060px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[22px] leading-[1.35] text-[#777884]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Whether you're building a fintech solution, scaling your business, or just have questions - we're here to help.
          </p>
        </section>

        <section className="mt-[58px] border border-[#dedee4] bg-[#eeeeef]">
          <div className="flex flex-wrap gap-x-[34px] gap-y-[12px] px-0 py-[24px] md:px-0">
            {TABS.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className="border-0 bg-transparent p-0 font-['Lead_Sans_Variable:Regular',sans-serif] text-[34px] leading-[1.1] transition-colors"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    color: active ? "#111111" : "#777884",
                    textDecoration: active ? "underline" : "none",
                    textDecorationThickness: active ? 2 : undefined,
                    textUnderlineOffset: active ? 5 : undefined,
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </section>

        <div className={activeTab === "Partner Platform" ? "" : "-mt-[1px]"}>
          {activeTab === "Partner Platform" ? (
            <PartnerPlatformForm />
          ) : (
            <StandardForm
              variant={
                activeTab === "Banking"
                  ? "banking"
                  : activeTab === "Press"
                  ? "press"
                  : "general"
              }
            />
          )}
        </div>

        {activeTab === "Banking" && (
          <>
            <SupportSection />
            <LocationsSection />
          </>
        )}

        <CareersBand onNavigate={onNavigate} />
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
