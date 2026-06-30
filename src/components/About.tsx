import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const missionPoints = [
    {
      emoji: "🎯",
      title: "Accurate Information",
      description:
        "Provide accurate and easy-to-understand information about CC Switch",
      glow: "group-hover:shadow-blue-500/10",
    },
    {
      emoji: "⚡",
      title: "Stay Updated",
      description:
        "Help users stay updated with the latest features and changes",
      glow: "group-hover:shadow-amber-500/10",
    },
    {
      emoji: "📚",
      title: "Community Resources",
      description:
        "Share guides, updates, and useful resources for the community",
      glow: "group-hover:shadow-emerald-500/10",
    },
    {
      emoji: "🔓",
      title: "Universal Access",
      description: "Make CC Switch knowledge accessible for everyone",
      glow: "group-hover:shadow-purple-500/10",
    },
    {
      emoji: "🌍",
      title: "Trusted Platform",
      description:
        "Create a trusted platform for learning and information purposes only",
      glow: "group-hover:shadow-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/30 pt-16 pb-28 relative overflow-hidden font-sans selection:bg-blue-500/10 selection:text-blue-600">
      {/* Visual Reference: image_54e160.jpg style dynamic ambient waves behind content */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/20 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/10 via-emerald-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-24">
        {/* SECTION 1: Product Intro (Matches image_54e160.jpg typographic hierarchy) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-3 block">
              OUR PROFILE
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                CC Switch
              </span>
            </h1>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            <p className="text-slate-900 font-semibold text-base md:text-lg tracking-tight">
              CC Switch is a cross-platform app that offers centralised
              configuration for AI coding tools such as Claude Code, Claude
              Desktop, Hermes, Codex, OpenCode, and Gemini CLI. This tool
              enhances the productivity of developers with one-click
              configuration, provider management, and many more
              developer-focused features.
            </p>
            <p>
              CC Switch makes it easy to manage AI coding tool settings from one
              dashboard. It lets you edit settings.json and .env files, switch
              AI providers with one click, manage API keys, and control MCP
              servers. Built with Tauri, it also includes 50+ ready-to-use
              provider presets, a Markdown prompt editor, GitHub skill
              installation support, usage tracking, local routing, and cloud
              sync. It is designed for developers and AI researchers who work
              with multiple AI coding CLIs and need a simple, organized setup.
            </p>
            <p>
              Engineered cleanly on top of a lightning-fast{" "}
              <span className="text-slate-900 font-bold">
                Tauri runtime foundation
              </span>
              , it includes over 50 automated provider presets, a responsive
              Markdown contextual prompt composer, direct GitHub custom skill
              installation setups, localized analytical usage logging, network
              layer routing, and secure configuration synchronizations.
            </p>
          </div>
        </section>

        {/* SECTION 2: Our Story Storytelling Box */}
        <section className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden group hover:border-slate-200/80 transition-all duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none" />

          <div className="max-w-3xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-2">
              THE BACKGROUND
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
              <p>
                We are a team of developers who solely rely on AI coding tools.
                Managing all the tools manually is not a cakewalk. We were
                struggling with our development tasks because of the tough
                management of AI coding tools. We researched for the solution,
                and we found CC Switch.
              </p>
              <p>
                CCSwitch was like a boon for us. We started using it, and it has
                become our go-to solution for AI CLI configuration management.
                Since the day we started using CCSwitch, it has enhanced our
                productivity, and we wanted to share our experience with other
                developers, so we started getccswitch.com. There are different
                queries regarding CC Switch over the internet, and we tried our
                best to answer all of them via our{" "}
                <span className="text-blue-400 cursor-pointer">
                  {" "}
                  <Link to="/faq">FAQ page.</Link>
                </span>{" "}
                Here you will get everything about this desktop app to have a
                smooth user experience.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Our Mission (Matches card logic from image_54e198.png) */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our Primary Mission Matrix
            </h2>
          </div>

          {/* Cards Grid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group ${point.glow}`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg mb-4 shadow-inner">
                  {point.emoji}
                </div>
                <h3 className="font-bold text-slate-900 tracking-tight text-sm mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Disclaimer & Independence Footer */}
        <section className="border-t border-slate-200/60 pt-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 text-amber-800 text-[11px] font-bold rounded-full mb-4 shadow-sm">
            <span>🛡️</span> Independent Informational Platform
          </div>
          <p className="text-slate-400 font-medium text-xs leading-relaxed">
            This tracking and educational portal is entirely managed as an
            independent informational platform created to share knowledge,
            deployment scripts, updates, and optimization resources about CC
            Switch.{" "}
            <span className="font-semibold text-slate-600">
              We are not officially affiliated, authorized, or associated with
              the underlying CC Switch developers or parent organization.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
