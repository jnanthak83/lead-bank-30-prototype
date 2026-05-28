import { ArrowRight } from "lucide-react";

type SiteVariant = "leadbank" | "baas";

const OPTIONS: Array<{
  id: SiteVariant;
  title: string;
  description: string;
}> = [
  {
    id: "leadbank",
    title: "Lead Bank",
    description: "A broader Lead Bank narrative that incorporates traditional banking, with BaaS positioned as one of the offerings.",
  },
  {
    id: "baas",
    title: "Lead Bank BaaS Focus",
    description: "A BaaS-focused website that brings the BaaS narrative to the core of the experience and positions Lead Bank as a BaaS-focused partner.",
  },
];

export function SiteChooser({ onSelect }: { onSelect: (variant: SiteVariant) => void }) {
  return (
    <main className="min-h-screen bg-[#eaeaee] px-[24px] py-[28px] text-[#2b2c39]">
      <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-[1480px] flex-col rounded-[42px] bg-white/70 px-[32px] py-[28px] shadow-[0_24px_80px_rgba(43,44,57,0.08)] backdrop-blur-[30px]">
        <header className="flex items-center justify-between">
          <div
            className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[16px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Lead Bank
          </div>
          <p
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[13px] text-[#606171]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Prototype selector
          </p>
        </header>

        <section className="flex flex-1 flex-col justify-center gap-[56px] py-[80px]">
          <div className="max-w-[760px]">
            <h1
              className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[72px] leading-[0.98] tracking-[-1.44px] md:text-[104px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Choose a site to preview
            </h1>
            <p
              className="mt-[28px] max-w-[620px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[22px] leading-[1.3] text-[#606171]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Pick the Lead Bank narrative you want to review. One path keeps BaaS as part of a broader banking story; the other brings the BaaS platform narrative to the center.
            </p>
          </div>

          <div className="grid gap-[18px] lg:grid-cols-2">
            {OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelect(option.id)}
                className="group site-cta-button flex min-h-[220px] flex-col justify-between rounded-[28px] border border-white bg-[#f7f7f9] p-[28px] text-left shadow-[0_16px_48px_rgba(43,44,57,0.08)] transition-transform duration-200 hover:-translate-y-[2px]"
              >
                <div>
                  <p
                    className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[38px] leading-[1.05] tracking-[-0.38px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {option.title}
                  </p>
                  <p
                    className="mt-[18px] max-w-[420px] font-['Lead_Sans_Variable:Regular',sans-serif] text-[17px] leading-[1.35] text-[#606171]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {option.description}
                  </p>
                </div>
                <span
                  className="mt-[38px] inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#0040ff] text-white transition-transform duration-200 group-hover:translate-x-[4px]"
                  aria-hidden="true"
                >
                  <ArrowRight size={20} />
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
