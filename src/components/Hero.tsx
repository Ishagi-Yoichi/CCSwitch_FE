import React from "react";

export default function Hero() {
  return (
    /* FIXED: Removed overflow-hidden from this section wrapper to let negative positions break out safely */
    <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Decorative Floating Avatars (Left Side Background) */}
      <div className="absolute left-4 top-20 w-10 h-10 rounded-full bg-purple-100 border border-purple-200 hidden xl:flex items-center justify-center text-xl animate-bounce">
        👩‍🎤
      </div>
      <div className="absolute left-0 bottom-40 w-12 h-12 rounded-full bg-pink-100 border border-pink-200 hidden xl:flex items-center justify-center text-2xl animate-bounce [animation-delay:0.2s]">
        📚
      </div>

      {/* Left Column: Text Content (Unchanged) */}
      <div className="lg:col-span-6 flex flex-col justify-center z-10">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
          CCSwitch: Best <br />
          TUI For <br />
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Multi Agent
          </span>{" "}
          <br />
          <span className="text-lime-600">CLIs.</span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          CC Switch brings provider switching, MCP / Prompts / Skills, proxy
          takeover, session search, and sync into a single desktop app. No more
          hand-editing JSON, TOML, or .env.,{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline inline-flex items-center font-medium"
          >
            open-source
          </a>{" "}
          app. Warning: may cause accidental all-night reading sessions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download APK
          </button>

          <button className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 px-6 py-3.5 rounded-2xl font-bold shadow-sm transition-all hover:-translate-y-0.5">
            <svg
              className="w-5 h-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            View Features
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5 overflow-hidden">
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-purple-200 flex items-center justify-center text-xs">
              🥷
            </div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-pink-200 flex items-center justify-center text-xs">
              👩‍🎤
            </div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-200 flex items-center justify-center text-xs">
              🕵️‍♂️
            </div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-green-200 flex items-center justify-center text-xs">
              🧑‍💻
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-600">
            2M+{" "}
            <span className="text-slate-400 font-normal">
              readers reading with EhViewer worldwide
            </span>
          </p>
        </div>
      </div>

      {/* Right Column: Terminal Window Asset */}
      <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full">
        {/* Terminal Mac-Style Window Container */}
        <div className="w-full max-w-[540px] bg-[#111827] rounded-2xl shadow-2xl border border-slate-800 font-mono text-sm leading-relaxed text-slate-300 shadow-slate-900/40 relative z-10">
          {/* Terminal Title Bar */}
          <div className="bg-[#1f2937] px-4 py-3 flex items-center justify-between border-b border-slate-800 select-none rounded-t-2xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block"></span>
            </div>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              bash — ehviewer setup
            </span>
            <div className="w-12"></div>
          </div>

          {/* Terminal Core Content */}
          <div className="p-5 space-y-2 text-xs md:text-sm max-h-[380px] overflow-y-auto rounded-b-2xl">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-slate-100">ehviewer setup --update</span>
            </div>

            <p className="text-blue-400">
              [system]{" "}
              <span className="text-slate-300">checking for updates...</span>
            </p>
            <p className="text-emerald-400">
              [update]{" "}
              <span className="text-slate-100 font-semibold">
                new version available: v1.15.2
              </span>
            </p>
            <p className="text-blue-400">
              [system]{" "}
              <span className="text-slate-400">
                downloading v1.15.2 [###-——] 45%
              </span>
            </p>
            <p className="text-amber-400">
              [info]{" "}
              <span className="text-slate-300">
                downloading completed in 1.2s
              </span>
            </p>
            <p className="text-blue-400">
              [system]{" "}
              <span className="text-slate-300">
                unpacking... <span className="text-emerald-400">done</span>
              </span>
            </p>
            <p className="text-blue-400">
              [system]{" "}
              <span className="text-slate-300">
                applying patches...{" "}
                <span className="text-emerald-400">done</span>
              </span>
            </p>

            <p className="text-purple-400">
              [patch]{" "}
              <span className="text-slate-400">patch_001_theme_system.sql</span>{" "}
              <span className="text-emerald-400 font-semibold">[OK]</span>
            </p>
            <p className="text-purple-400">
              [patch]{" "}
              <span className="text-slate-400">
                patch_002_user_preferences.sql
              </span>{" "}
              <span className="text-emerald-400 font-semibold">[OK]</span>
            </p>
            <p className="text-purple-400">
              [patch]{" "}
              <span className="text-slate-400">
                patch_003_manga_source_updater.sql
              </span>{" "}
              <span className="text-emerald-400 font-semibold">[OK]</span>
            </p>

            <p className="text-blue-400">
              [system]{" "}
              <span className="text-slate-300">verifying installation...</span>
            </p>
            <p className="text-amber-400">
              [info]{" "}
              <span className="text-slate-100 font-semibold">
                ehviewer is now at v1.15.2.
              </span>
            </p>
          </div>
        </div>

        {/* FIXED: Added 'animate-bounce' and staggered custom animation delays so they float independently and smoothly */}
        <div className="absolute -right-6 top-16 w-10 h-10 rounded-full bg-blue-50 border border-blue-200 hidden xl:flex items-center justify-center text-lg shadow-sm z-20 animate-bounce">
          💻
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-teal-50 border border-teal-200 hidden xl:flex items-center justify-center text-xl shadow-sm z-20 animate-bounce [animation-delay:0.4s]">
          🚀
        </div>
        <div className="absolute -right-4 bottom-16 w-11 h-11 rounded-full bg-orange-50 border border-orange-200 hidden xl:flex items-center justify-center text-lg shadow-sm z-20 animate-bounce [animation-delay:0.1s]">
          ⚙️
        </div>
      </div>
    </section>
  );
}
