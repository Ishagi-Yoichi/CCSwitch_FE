import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  borderColor?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  iconBg,
  borderColor = "hover:border-slate-200",
}: FeatureCardProps) {
  return (
    <div
      className={`p-8 border-b border-r border-slate-100 bg-white transition-all duration-300 ${borderColor} relative group`}
    >
      {/* Light subtle left accent highlight on hover like the original active states */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-amber-500 transition-all rounded-l" />

      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} mb-6 text-base`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  const featureList = [
    {
      icon: "⚡",
      iconBg: "bg-blue-50 text-blue-600",
      title: "Multi-Agent Switching",
      description:
        "Instantly cycle through Claude Code, Codex, and Custom LLM wrappers without changing terminals or managing active process tabs manually.",
    },
    {
      icon: "📦",
      iconBg: "bg-red-50 text-red-600",
      title: "Full MCP Support",
      description:
        "Native integrations for Model Context Protocol. Link backend schemas, filesystem context, and remote APIs across all agents in one run.",
    },
    {
      icon: "⚙️",
      iconBg: "bg-amber-50 text-amber-600",
      title: "Unified Configuration",
      description:
        "Say goodbye to broken environmental values. Control all proxy rules, API tokens, and sandbox runtimes from a single desktop profile.",
    },
    {
      icon: "❤️",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Hot-Key Orchestration",
      description:
        "Save active prompt frames, custom workflow macros, and context snapshots to spin up repetitive tasks in a split second.",
    },
    {
      icon: "🎨",
      iconBg: "bg-purple-50 text-purple-600",
      title: "Custom TUI Themes",
      description:
        "Tailor visual syntax, contrast levels, and stream behaviors. Works perfectly with modern GPU-accelerated terminal renderers.",
    },
    {
      icon: "🛡️",
      iconBg: "bg-orange-50 text-orange-600",
      title: "Local-First Sandbox",
      description:
        "No remote session caching, no telemetry tracking. Every execution loop respects your explicit project boundaries and local .gitignore structures.",
    },
    {
      icon: "💰",
      iconBg: "bg-yellow-50 text-yellow-600",
      title: "Free & Open Source",
      description:
        "CCSwitch is entirely MIT licensed and free of premium layer popups or usage paywalls. Built directly for the active developer community.",
    },
    {
      icon: "🌐",
      iconBg: "bg-teal-50 text-teal-600",
      title: "Proxy Control Matrix",
      description:
        "Route specific agent instances through reliable local reverse proxies, keeping heavy dev streams isolated and secure from rate limits.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50/30 py-24 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Why developers love CCSwitch
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Think of CCSwitch as your central terminal command center—built for
            comfort, speed, and complete execution privacy. Powered entirely by
            open-source systems.
          </p>
        </div>

        {/* Feature Grid Asset */}
        {/* Using grid columns with negative margin offsets to replicate the clean infinite lines effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100 rounded-xl overflow-hidden shadow-sm bg-white">
          {featureList.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              iconBg={feature.iconBg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
