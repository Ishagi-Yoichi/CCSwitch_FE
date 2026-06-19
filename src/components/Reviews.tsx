import { useState } from "react";

interface Review {
  id: number;
  avatar: string;
  quote: string;
  author: string;
  role: string;
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(2); // Set initial active card to index 2

  const reviews: Review[] = [
    {
      id: 0,
      avatar: "👨‍💻",
      quote:
        "Switched from maintaining three separate terminal profiles to just CCSwitch. Managing local context tokens for diverse CLI tools in one view is a complete productivity shift.",
      author: "Priya",
      role: "Backend Engineer",
    },
    {
      id: 1,
      avatar: "⚙️",
      quote:
        "The MCP provider routing setup actually works natively out of the box. I find exact filesystem runtime references across parallel agents in seconds.",
      author: "Tomoko",
      role: "DevOps Specialist",
    },
    {
      id: 2,
      avatar: "🚀",
      quote:
        "The dynamic context control matrices—hotkeys, sandbox restrictions, custom prompt frames—make long orchestration terminal sessions totally effortless.",
      author: "Yuna",
      role: "AI Core Architect",
    },
    {
      id: 3,
      avatar: "🕵️‍♂️",
      quote:
        "A master control hub for terminal execution. Clean interface, minimal memory overhead, and respects privacy rules perfectly. Never exiting my main viewport now.",
      author: "Raj",
      role: "Systems Developer",
    },
    {
      id: 4,
      avatar: "🧠",
      quote:
        "The multi-agent execution pipeline is massive. Whatever tool stack I configure, CCSwitch addresses the path. No more manual orchestration.",
      author: "Kenji",
      role: "Full Stack Engineer",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Helper function to return distinct visual spreads depending on where the card sits relative to the active index
  const getCardStyles = (index: number) => {
    const offset = index - activeIndex;

    // Active Center Card
    if (offset === 0) {
      return {
        transform: "translateX(-50%) scale(1.05) rotate(0deg)",
        zIndex: 40,
        opacity: 1,
      };
    }

    // Cards scattered to the left side
    if (offset === -1) {
      return {
        transform: "translateX(-130%) scale(0.92) rotate(-5deg)",
        zIndex: 30,
        opacity: 0.85,
      };
    }
    if (offset === -2 || offset === reviews.length - 1) {
      return {
        transform: "translateX(-200%) scale(0.85) rotate(-10deg)",
        zIndex: 20,
        opacity: 0.4,
      };
    }

    // Cards scattered to the right side
    if (offset === 1) {
      return {
        transform: "translateX(30%) scale(0.92) rotate(5deg)",
        zIndex: 30,
        opacity: 0.85,
      };
    }
    if (offset === 2 || offset === -(reviews.length - 1)) {
      return {
        transform: "translateX(100%) scale(0.85) rotate(10deg)",
        zIndex: 20,
        opacity: 0.4,
      };
    }

    // Fallback/Hidden Cards
    return {
      transform: "translateX(-50%) scale(0.7) rotate(0deg)",
      zIndex: 10,
      opacity: 0,
    };
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-slate-50/10 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-3">
          REVIEWS
        </span>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center mb-20">
          Why fans stick with CCSwitch
        </h2>

        {/* FIXED: Clear height containment and absolute anchoring structure */}
        <div className="relative w-full max-w-4xl h-[360px] mb-6">
          {reviews.map((review, idx) => {
            const isActive = idx === activeIndex;
            const styles = getCardStyles(idx);

            return (
              <div
                key={review.id}
                style={styles}
                onClick={() => setActiveIndex(idx)}
                className={`absolute top-0 left-1/2 w-[290px] h-[330px] p-8 rounded-2xl transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer origin-center ${
                  isActive
                    ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/20 ring-4 ring-blue-600/5 relative after:absolute after:top-0 after:right-0 after:w-8 after:h-8 after:bg-white/10 after:rounded-bl-2xl after:rounded-tr-2xl"
                    : "bg-white text-slate-700 border border-slate-100 shadow-md shadow-slate-100/50 hover:border-slate-200"
                }`}
              >
                <div>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-6 ${
                      isActive
                        ? "bg-white/10"
                        : "bg-slate-50 border border-slate-100"
                    }`}
                  >
                    {review.avatar}
                  </div>

                  <p
                    className={`text-xs md:text-[13px] leading-relaxed font-medium ${
                      isActive ? "text-white" : "text-slate-600"
                    }`}
                  >
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-4">
                  <p
                    className={`text-xs font-bold ${isActive ? "text-white" : "text-slate-900"}`}
                  >
                    — {review.author}
                  </p>
                  <p
                    className={`text-[10px] uppercase tracking-wider mt-0.5 ${isActive ? "text-blue-200" : "text-slate-400"}`}
                  >
                    {review.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3 relative z-30 mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center font-bold shadow-sm active:scale-95 transition-all"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center font-bold shadow-sm active:scale-95 transition-all"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
