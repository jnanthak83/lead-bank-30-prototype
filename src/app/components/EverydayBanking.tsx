import imgFirstA from "../../imports/Desktop782/71671b98fa56f521bb3cbc7c4116ecd107aa45dd.png";
import imgFirstB from "../../imports/Desktop782/76e84b27a42d65e51eaeebe17871a39e0b88a8c7.png";
import imgSecondA from "../../imports/Desktop783/12c918142de4b304180b81c413c2280c765f2cb1.png";
import imgSecondB from "../../imports/Desktop783/6b81bfb3106012cf611bd112c0e7422c99009f72.png";
import imgThirdA from "../../imports/Desktop784/8fb611c0042363fbc81584c0c50ae1750f2f4092.png";
import imgThirdB from "../../imports/Desktop784/085c9962dd56d4998b8d9b1b9e58fa8b56b6f1c8.png";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { images: [imgFirstA, imgFirstB], animation: "everyday-first" },
  { images: [imgSecondA, imgSecondB], animation: "everyday-second" },
  { images: [imgThirdA, imgThirdB], animation: "everyday-third" },
];

function BackgroundLayer({
  images,
  animation,
  hasStarted,
}: {
  images: string[];
  animation: string;
  hasStarted: boolean;
}) {
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: animation === "everyday-first" ? 1 : 0,
        animation: hasStarted ? `${animation} 2.7s ease-in-out forwards` : undefined,
      }}
    >
      {images.map((src) => (
        <img key={src} alt="" className="absolute max-w-none object-cover size-full" src={src} />
      ))}
    </div>
  );
}

export function EverydayBanking() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <div ref={ref} className="relative size-full bg-[#eaeaee]" data-name="Everyday Banking">
      <style>{`
        @keyframes everyday-first {
          0%, 24% { opacity: 1; }
          42%, 100% { opacity: 0; }
        }

        @keyframes everyday-second {
          0%, 24% { opacity: 0; }
          42%, 60% { opacity: 1; }
          78%, 100% { opacity: 0; }
        }

        @keyframes everyday-third {
          0%, 60% { opacity: 0; }
          78%, 100% { opacity: 1; }
        }
      `}</style>

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {SLIDES.map((slide) => (
          <BackgroundLayer
            key={slide.animation}
            images={slide.images}
            animation={slide.animation}
            hasStarted={hasStarted}
          />
        ))}
      </div>

      <div className="-translate-y-1/2 absolute left-[calc(50%+5px)] top-[calc(50%+0.5px)] flex w-[607px] flex-col gap-[42px]">
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[72px] text-[#2b2c39]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.1 }}
        >
          Everyday Banking
        </p>
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[24px] text-[#606171]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.3 }}
        >
          From personal checking and savings to business accounts and loans, we provide reliable banking solutions for individuals, families, and local businesses.
        </p>
      </div>
    </div>
  );
}
