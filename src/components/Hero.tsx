import homeimg from "../assets/hero-img.png";
export default function Hero() {
  return (
    /* FIXED: Removed overflow-hidden from this section wrapper to let negative positions break out safely */
    <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Decorative Floating Avatars (Left Side Background) */}

      {/*<div className="absolute right-313 bottom-40 w-12 h-12 rounded-full bg-pink-100 border border-pink-200 hidden xl:flex items-center justify-center text-2xl z-20 animate-bounce [animation-delay:0.2s]">
        📚
      </div>*/}

      {/* Left Column: Text Content (Unchanged) */}
      <div className="lg:col-span-6 flex flex-col justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 font-sans ">
          Manage All 7 <br />
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Coding Tools
          </span>{" "}
          <br />
          <span className="text-slate-900">Within a Single Interface</span>
        </h1>

        <p className="text-slate-500 text-xl max-w-l leading-relaxed mb-10 text-justify font-sans tracking-tight leading-[1.1]">
          CC Switch is a revolutionary invention for developers who depend on
          multiple coding tools. With CC Switch, you can configure all the 7
          coding tools, Claude Code, Claude Desktop, Hermes, Codex, Gemini CLI,
          Open Code, and Open Claw, with a single click. Not only centralized
          configuration, but also this tool offers credential management, backup
          controls, reordering providers, syncing providers, automatic failover,
          and much more.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="flex items-center cursor-pointer gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 px-6 py-3.5 rounded-2xl font-bold shadow-sm transition-all hover:-translate-y-0.5">
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
      </div>

      {/* Right Column: Terminal Window Asset */}
      <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full -mt-28">
        <img src={homeimg} className="rounded-3xl" />
      </div>
    </section>
  );
}
