import imgJackie from "../../imports/Desktop267/jackie-reses-color.jpg";

const BIO_PARAGRAPHS = [
  "Jackie Reses is the Chair, CEO and co-founder of Lead Bank, a chartered banking-as-a-service platform for builders and innovators.",
  "She previously held senior leadership roles at Square, Block, Yahoo!, Apax Partners, and Goldman Sachs.",
  "She was the Executive Chairman of Square Financial Services and Capital Lead, and Head of the People Team at Block, Inc.",
  "Prior, she was Chief Development Officer at Yahoo! and a Partner at Apax Partners Worldwide.",
  "She has served on boards and advisory councils across technology, fintech, banking, and education.",
  "She is on the board of directors of Endeavor, Affirm, and Nubank, and the Board of Advisors of the Wharton School of the University of Pennsylvania.",
  "Jackie received a Bachelor of Science in Economics and graduated with honors from the Wharton School of the University of Pennsylvania.",
];

export function JackieProfile() {
  return (
    <main className="min-h-screen bg-[#eaeaee] px-[40px] pb-[96px] pt-[144px] text-[#2b2c39]">
      <div className="mx-auto grid max-w-[1840px] grid-cols-[minmax(420px,0.95fr)_minmax(480px,1fr)] gap-[80px]">
        <div className="overflow-hidden rounded-[62px] bg-white">
          <img alt="Jackie Reses" className="h-full min-h-[720px] w-full object-cover" src={imgJackie} />
        </div>
        <section className="flex max-w-[760px] flex-col justify-center py-[56px]">
          <h1
            className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[112px] leading-[0.95] text-[#2b2c39]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Jackie Reses
          </h1>
          <div className="mt-[34px] flex flex-col gap-[18px]">
            {BIO_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] leading-[1.28] text-[#606171]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
