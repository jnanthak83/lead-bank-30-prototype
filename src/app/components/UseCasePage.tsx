import Desktop677 from "../../imports/Desktop677/Desktop677";
import Desktop678 from "../../imports/Desktop678/Desktop678";
import Desktop679 from "../../imports/Desktop679/Desktop679";
import Desktop680 from "../../imports/Desktop680/Desktop680";
import Desktop826 from "../../imports/Desktop826-1/Desktop826-32-601";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import type { Page } from "../App";

export type UseCaseKey =
  | "digital-banking"
  | "business-finances"
  | "consumer-payments"
  | "crypto"
  | "credit-builder";

type CapabilityKey = "lend" | "move" | "issue" | "store";

const MAP: Record<UseCaseKey, React.ComponentType> = {
  "digital-banking": Desktop677,
  "business-finances": Desktop678,
  "consumer-payments": Desktop679,
  "crypto": Desktop680,
  "credit-builder": Desktop826,
};

// Bottom card sequence on each use case page (left → right), matching the
// renamed labels in the Figma imports.
const CARD_SEQUENCE: Record<UseCaseKey, CapabilityKey[]> = {
  "digital-banking": ["lend", "move", "issue", "store"],
  "business-finances": ["lend", "issue"],
  "consumer-payments": ["lend", "issue", "store"],
  "crypto": ["move", "store"],
  "credit-builder": ["lend", "issue"],
};

const CARD_LEFT = 195;
const CARD_TOP = 710;
const CARD_W = 298;
const CARD_H = 210;
const CARD_GAP = 10;

export function UseCasePage({
  useCase,
  onNavigateCapability,
  onNavigate,
}: {
  useCase: UseCaseKey;
  onNavigateCapability?: (cap: CapabilityKey) => void;
  onNavigate?: (page: Page, section?: string) => void;
}) {
  const Section = MAP[useCase];

  return (
    <div className="w-full">
      <Reveal>
        <div className="relative w-full h-full">
          <Section />
          {CARD_SEQUENCE[useCase].map((cap, i) => (
            <div
              key={i}
              onClick={() => onNavigateCapability?.(cap)}
              className="absolute cursor-pointer z-10"
              style={{
                left: CARD_LEFT + i * (CARD_W + CARD_GAP),
                top: CARD_TOP,
                width: CARD_W,
                height: CARD_H,
              }}
            />
          ))}
        </div>
      </Reveal>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
