import imgPlaceholderImage from "./bd77ca1751fb5b47c375b226836bfdaf5d8ac8cc.png";
import imgPlaceholderImage1 from "./883e8fa3414416b9abe23b935b93a06fedd8b6b3.png";
import imgPlaceholderImage2 from "./1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";

function Group() {
  return (
    <div className="absolute contents font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] left-[128px] not-italic text-black top-[161px]">
      <p className="absolute left-[calc(50%-592px)] text-[60px] top-[calc(50%-19px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lead Blog
      </p>
      <p className="absolute left-[128px] text-[18px] top-[249px] w-[584px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn the latest about Lead news, articles and awards.
      </p>
    </div>
  );
}

function CommunityHeader() {
  return (
    <div className="absolute h-[360px] left-0 overflow-clip top-0 w-[1440px]" data-name="Community Header">
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.2)] h-[446px] left-1/2 top-0 w-[1440px]" data-name="zerocool6550_augmented_reality_blog_header_in_ambient_occlusion_68388346-9e7e-4de7-8267-341de3c8bd30 1" />
      <Group />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Partnership</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Strategy</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] leading-[normal] min-w-full not-italic relative shrink-0 text-[#9aa0a6] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Article
      </p>
      <div className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[25px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] mb-0">Abruptly losing your bank partner?</p>
        <p className="leading-[normal]">Here’s what to do</p>
      </div>
      <Tags />
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal h-[48px] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#5f6368] text-[18px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Whether driven by you or driven by the bank, the unexpected end of a bank partnership affects everything from client relations to your infrastructure. It's a scenario that demands swift, strategic action to ensure continuity and stability. Here's a guide on how to manage this challenging situation.`}</p>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center relative shrink-0 text-[#9aa0a6] w-full whitespace-nowrap" data-name="Time">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        March 28 2024
      </p>
      <p className="font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3 min read
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <Time />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avatar">
      <Content3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[48px] relative size-full">
        <Content2 />
        <div className="bg-[#80868b] content-stretch flex flex-col items-center justify-center max-w-[250px] min-w-[180px] px-[32px] py-[8px] relative rounded-[4px] shrink-0" data-name="global/btn">
          <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f1f3f4] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Read more
          </p>
        </div>
        <Avatar />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card">
      <div className="flex-[1_0_0] h-[500px] min-w-px relative rounded-[4px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5f6368] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Show All
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        In the News
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Articles
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Awards & Recognition`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Press Realease
      </p>
    </div>
  );
}

function Categories() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Categories">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Partnership</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Strategy</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag4 />
      <Tag5 />
      <Tag6 />
      <Tag7 />
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tags">
      <Tags2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[148px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] leading-[normal] min-w-full not-italic relative shrink-0 text-[#9aa0a6] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Update
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[25px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Erica on Fintech layer cake
      </p>
      <Tags1 />
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal h-[46px] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#5f6368] text-[18px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jacqueline Reses and Erica Khalili, have been named among the top leaders in Financial Services by The Financial Technology Report and the report
      </p>
      <div className="content-stretch flex flex-col h-[31px] items-start justify-center max-w-[250px] min-w-[180px] py-[8px] relative rounded-[4px] shrink-0" data-name="global/btn">
        <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Read more
        </p>
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center relative shrink-0 text-[#9aa0a6] w-full whitespace-nowrap" data-name="Time">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11 Jan 2022
      </p>
      <p className="font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 min read
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <Time1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avatar">
      <Content7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[228px] items-start relative shrink-0 w-full">
      <Content6 />
      <Avatar1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[570px] items-start min-w-px relative" data-name="Card">
      <div className="h-[300px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Frame />
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Partnership</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Strategy</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function Tags4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag8 />
      <Tag9 />
      <Tag10 />
      <Tag11 />
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tags">
      <Tags4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] leading-[normal] min-w-full not-italic relative shrink-0 text-[#9aa0a6] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Awards & Recognition`}</p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[25px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Top leaders in Financial Services
      </p>
      <Tags3 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[148px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame5 />
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal h-[46px] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#5f6368] text-[18px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jacqueline Reses and Erica Khalili, have been named among the top leaders in Financial Services by The Financial Technology Report and the report
      </p>
      <div className="content-stretch flex flex-col h-[31px] items-start justify-center max-w-[250px] min-w-[180px] py-[8px] relative rounded-[4px] shrink-0" data-name="global/btn">
        <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Read more
        </p>
      </div>
    </div>
  );
}

function Time2() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center relative shrink-0 text-[#9aa0a6] w-full whitespace-nowrap" data-name="Time">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11 Jan 2022
      </p>
      <p className="font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 min read
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <Time2 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avatar">
      <Content9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[228px] items-start relative shrink-0 w-full">
      <Content8 />
      <Avatar2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="h-[300px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Frame2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Partnership</p>
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Strategy</p>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function Tags6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag12 />
      <Tag13 />
      <Tag14 />
      <Tag15 />
    </div>
  );
}

function Tags5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tags">
      <Tags6 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[148px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] leading-[normal] min-w-full not-italic relative shrink-0 text-[#9aa0a6] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        In the news
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[25px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recapping Ripple Swell 2024
      </p>
      <Tags5 />
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal h-[46px] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#5f6368] text-[18px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jacqueline Reses and Erica Khalili, have been named among the top leaders in Financial Services by The Financial Technology Report and the report
      </p>
      <div className="content-stretch flex flex-col h-[31px] items-start justify-center max-w-[250px] min-w-[180px] py-[8px] relative rounded-[4px] shrink-0" data-name="global/btn">
        <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Read more
        </p>
      </div>
    </div>
  );
}

function Time3() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center relative shrink-0 text-[#9aa0a6] w-full whitespace-nowrap" data-name="Time">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11 Jan 2022
      </p>
      <p className="font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 min read
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <Time3 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avatar">
      <Content11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[228px] items-start relative shrink-0 w-full">
      <Content10 />
      <Avatar3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="h-[300px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Frame3 />
    </div>
  );
}

function Tag16() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Partnership</p>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Transition</p>
    </div>
  );
}

function Tag18() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Strategy</p>
    </div>
  );
}

function Tag19() {
  return (
    <div className="bg-[#d2d2d2] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap">Risk</p>
    </div>
  );
}

function Tags8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag16 />
      <Tag17 />
      <Tag18 />
      <Tag19 />
    </div>
  );
}

function Tags7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tags">
      <Tags8 />
    </div>
  );
}

function Time4() {
  return (
    <div className="content-center flex flex-wrap font-normal gap-[8px] items-center relative shrink-0 text-[#9aa0a6] w-full whitespace-nowrap" data-name="Time">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11 Jan 2022
      </p>
      <p className="font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 min read
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <Time4 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avatar">
      <Content13 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[206px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lead_Sans_Variable:Medium',sans-serif] font-[493.75] leading-[normal] min-w-full not-italic relative shrink-0 text-[#9aa0a6] text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Update
      </p>
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[25px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CNBC Squawk Box: The future of Fintech, Banking, AI, and crypto
      </p>
      <Tags7 />
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal h-[46px] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#5f6368] text-[18px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jacqueline Reses and Erica Khalili, have been named among the top leaders in Financial Services by The Financial Technology Report and the report
      </p>
      <div className="content-stretch flex flex-col h-[31px] items-start justify-center max-w-[250px] min-w-[180px] py-[8px] relative rounded-[4px] shrink-0" data-name="global/btn">
        <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Read more
        </p>
      </div>
      <Avatar4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[228px] items-start relative shrink-0 w-full">
      <Content12 />
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="h-[300px] relative rounded-[4px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Frame4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1184px]" data-name="Row">
      <Card3 />
      <Card4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1184px]" data-name="Content">
      <Row />
      <Row1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Categories />
      <Content5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[1905px] items-center relative shrink-0 w-full" data-name="Content">
      <Card />
      <Content4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0 w-[142px]" data-name="Button">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        See more
      </p>
    </div>
  );
}

function Categories1() {
  return (
    <div className="bg-[#e8eaed] content-stretch flex items-center justify-center px-[467px] relative shrink-0 w-[1184px]" data-name="Categories">
      <Button5 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Join us in shaping the future of banking at Lead Bank!
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-start pt-[16px] relative shrink-0" data-name="Actions">
      <div className="bg-[#80868b] content-stretch flex flex-col items-center justify-center max-w-[250px] min-w-[180px] px-[32px] py-[8px] relative rounded-[4px] shrink-0" data-name="global/btn">
        <p className="font-['Lead_Sans_Variable:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f1f3f4] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          See open positions
        </p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Column">
      <Content14 />
      <Actions />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Column />
      <div className="flex-[1_0_0] h-[400px] min-w-px relative rounded-[4px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 1 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[128px] py-[112px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-0 px-[128px] top-[408px] w-[1440px]">
      <Content />
      <Categories1 />
      <Cta />
    </div>
  );
}

export default function BlogHome() {
  return (
    <div className="bg-[#f0f0f0] overflow-clip relative rounded-[16px] size-full" data-name="Blog Home">
      <CommunityHeader />
      <Frame1 />
    </div>
  );
}