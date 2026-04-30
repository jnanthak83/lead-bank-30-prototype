import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const WORDS = ["A partner", "Infrastructure", "Oversight", "Technology", "Expertise"];

export function HeroRotating() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const word = WORDS[index];

  return (
    <div className="relative size-full" data-name="HeroRotating">
      <div
        className="absolute bottom-[200px] flex flex-col gap-[52px] items-start justify-end"
        style={{ left: "calc(8.33% + 34px)" }}
      >
        <p
          className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[#606171] text-[14px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Lead Bank
        </p>
        <div
          className="font-['Lead_Sans_Variable:Medium',sans-serif] text-[116px] tracking-[-2.32px] w-[940px]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1 }}
        >
          <div
            className="relative overflow-hidden"
            style={{ height: "1.15em" }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={word}
                className="absolute inset-0 inline-block bg-clip-text text-transparent whitespace-pre"
                style={{
                  backgroundImage:
                    "linear-gradient(96deg, #0040FF 0%, #2F20FF 35%, #5E00FF 75%)",
                }}
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="text-[#2b2c39]">you can bank on</div>
        </div>
        <p
          className="font-['Lead_Sans_Variable:Regular',sans-serif] text-[#606171] text-[32px] w-[693px]"
          style={{ fontVariationSettings: "'wdth' 100", lineHeight: 1.3 }}
        >
          Programmable financial services designed to help you scale quickly and responsibly
        </p>
      </div>

    </div>
  );
}
