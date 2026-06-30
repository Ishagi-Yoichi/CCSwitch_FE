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
      title: "One Click Configuration",
      description:
        "When using multiple coding tools simultaneously, manual configuration is pretty hectic. But CC Switch has a solution for you. Now you can configure all the tools with a single click without editing JSON, TOML, and .env files. One platform to streamline all your coding hustle.",
    },
    {
      icon: "📦",
      iconBg: "bg-red-50 text-red-600",
      title: "Free and Open Source",
      description:
        "One of the best features of CC Switch is that it is quite free and open source. It falls under the MIT License and is managed by the community, so it will save your bucks as well.",
    },
    {
      icon: "⚙️",
      iconBg: "bg-amber-50 text-amber-600",
      title:
        "Bring MCP, Prompts, and Skills Together in a Single Control Panel",
      description:
        "No more digging through app-specific folders — one unified workspace manages imports, sync, backfill protection, and seamless cross-app writes.",
    },
    {
      icon: "❤️",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Hassle-Free Session Management",
      description:
        "Developers who are fully dependent on AI tools know the importance of session management. In the old sessions, there is various valuable information, and CC Switch can browse and restore old conversations from different apps to save your effort.",
    },
    {
      icon: "🎨",
      iconBg: "bg-purple-50 text-purple-600",
      title: "Cloud Sync and Backup",
      description:
        "Connect through WebDAV or popular cloud storage folders to seamlessly sync configurations across devices, while SQLite-backed storage and atomic write operations help prevent corruption, eliminate config drift, and ensure every change is saved consistently and safely.",
    },
    {
      icon: "🛡️",
      iconBg: "bg-orange-50 text-orange-600",
      title: "Local Proxy and Failover",
      description:
        "One of the most important features of CCSwitch is its local proxy mode. So different tools don’t talk to model services directly—instead, they route all requests through this proxy. This makes it easier to control, manage, and standardize how tools access model services. For multiple providers, it is a boon as the user can easily switch between different models, formats, and services.",
    },
    {
      icon: "💰",
      iconBg: "bg-yellow-50 text-yellow-600",
      title: "Multiple Platform Support",
      description:
        "It works on all the major modern operating systems you’re likely to use today. On Windows, that means Windows 10 and anything newer. On Mac, it supports macOS 12 Monterey and up, including both Intel Macs and Apple Silicon machines. On Linux, it runs smoothly on popular distributions like Ubuntu 22.04 and later, Debian 11 and above, and Fedora 34 or newer. It also supports both x64 and ARM64 chips, so whether you’re on a laptop, desktop, or server, it should just work without extra hassle.",
    },
    {
      icon: "🌐",
      iconBg: "bg-teal-50 text-teal-600",
      title: "Custom TUI Themes",
      description:
        "You can customize how the terminal looks and behaves. Adjust colors, syntax highlighting, contrast, and how information streams on the screen to match your preferences. It’s also optimized to work smoothly with modern terminals that use GPU acceleration, so everything feels fast and responsive.",
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
            Key Features of CCSwitch
          </h2>
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
