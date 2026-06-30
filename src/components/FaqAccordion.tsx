import { useState, useId } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../data/faq";
import type { Faq } from "../data/faq";

function AnswerBody({ item }: { item: Faq }): ReactElement {
  if (item.type === "list") {
    return (
      <>
        {item.intro && (
          <p className="mb-4 text-xs md:text-sm leading-relaxed text-slate-500">
            {item.intro}
          </p>
        )}
        <ul className="space-y-2.5">
          {item.items.map((line, i) => (
            <li
              key={i}
              className="flex gap-3 text-xs md:text-sm leading-relaxed text-slate-500"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (item.type === "steps") {
    return (
      <ol className="space-y-3">
        {item.items.map((line, i) => (
          <li
            key={i}
            className="flex gap-3 text-xs md:text-sm leading-relaxed text-slate-500"
          >
            <span className="mt-0.5 w-5 shrink-0 font-mono text-xs font-bold tabular-nums text-blue-600/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <p className="text-xs md:text-sm leading-relaxed text-slate-500">
      {item.answer}
    </p>
  );
}

interface FaqItemProps {
  item: Faq;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ item, isOpen, onToggle }: FaqItemProps): ReactElement {
  const panelId = useId();

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-5 text-left focus:outline-none"
        >
          <span className="font-bold text-sm md:text-base text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
            {item.question}
          </span>

          {/* Toggle-switch indicator mapped to cohesive blue theme */}
          <span
            className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border transition-colors duration-300 ${
              isOpen
                ? "bg-blue-600 border-blue-600"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full transition-all duration-300 shadow-sm ${
                isOpen
                  ? "translate-x-[18px] bg-white"
                  : "translate-x-1 bg-slate-400"
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-6 md:pr-12 text-slate-600 animate-fadeIn">
            <AnswerBody item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FaqAccordionProps {
  variant?: "preview" | "full";
  previewCount?: number;
}

export default function FaqAccordion({
  variant = "preview",
  previewCount = 3,
}: FaqAccordionProps): ReactElement {
  const items = variant === "preview" ? faqs.slice(0, previewCount) : faqs;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) =>
    setOpenId((current) => (current === id ? null : id));

  return (
    <section
      id="faq"
      className={`relative z-10 ${variant === "preview" ? "py-24 bg-white border-t border-slate-100" : ""}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Render descriptive heading context only when rendered as a Homepage Section component preview */}
        {variant === "preview" && (
          <div className="mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-3 block">
              FAQ
            </span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xl">
              Quick answers about switching providers, syncing configs, and
              getting CC Switch running across your tools.
            </p>
          </div>
        )}

        {/* Clean Light Container Card */}
        <div className="rounded-2xl border border-slate-100 bg-white px-6 sm:px-8 shadow-sm">
          {items.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {variant === "preview" && faqs.length > previewCount && (
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 text-xs md:text-sm font-medium">
            <p className="text-slate-400">
              There's more on the dedicated FAQ page.
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View all {faqs.length} questions →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
