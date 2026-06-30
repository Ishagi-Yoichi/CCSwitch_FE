import type { ReactElement } from "react";
import FaqAccordion from "../components/FaqAccordion";

export default function Faq(): ReactElement {
  return (
    <div className="min-h-screen bg-slate-50/30 relative overflow-hidden font-sans selection:bg-blue-500/10 selection:text-blue-600">
      {/* Soft Side Accent Gradients to match platform layout */}
      <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-gradient-to-r from-emerald-50/30 via-emerald-50/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-emerald-50/30 via-emerald-50/5 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 pb-4 sm:pt-28">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 block mb-3">
          Support Hub
        </span>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
          CC Switch FAQ
        </h1>
        <p className="mt-3 text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
          Everything you need to know about installing, configuring, and
          trusting CC Switch with your provider keys.
        </p>
      </div>

      <FaqAccordion variant="full" />
    </div>
  );
}
