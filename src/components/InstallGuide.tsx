import React, { useState, useRef } from "react";

interface StepProps {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

function StepRow({ num, title, description, icon, iconBg }: StepProps) {
  return (
    <div className="flex gap-4 items-start group">
      <div
        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${iconBg} shadow-sm border border-slate-100 font-medium text-sm transition-transform group-hover:scale-105`}
      >
        {icon}
      </div>
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-0.5">
          {num}
        </span>
        <h4 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
          {title}
        </h4>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function InstallGuide() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const box = card.getBoundingClientRect();

    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const xc = box.width / 2;
    const yc = box.height / 2;

    const rotateX = ((yc - y) / yc) * 18; // 18 degrees max tilt
    const rotateY = ((x - xc) / xc) * 18;

    setRotate({ x: rotateX, y: rotateY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Dynamically shifts the card shadow offset based on the tilt direction to increase the 3D realism
  const shadowStyle = isHovered
    ? `${-rotate.y * 1.5}px ${rotate.x * 1.5}px 35px 0px rgba(2, 6, 23, 0.65)`
    : "0px 25px 50px -12px rgba(2, 6, 23, 0.5)";

  const steps = [
    {
      num: "01",
      icon: "📥",
      iconBg: "bg-blue-50 text-blue-600",
      title: "Download the Binary",
      description:
        "Grab the latest lightweight release architecture for your machine using curl or your preferred package manager.",
    },
    {
      num: "02",
      icon: "🔑",
      iconBg: "bg-red-50 text-red-600",
      title: "Grant Permissions",
      description:
        "Apply executable flag permissions via chmod to safely initialize the runtime sandbox within your local directory layout.",
    },
    {
      num: "03",
      icon: "⚡",
      iconBg: "bg-amber-50 text-amber-600",
      title: "Link Global Path",
      description:
        "Move the binary to your local bin path or export your system environment variables to switch anywhere globally.",
    },
    {
      num: "04",
      icon: "🚀",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Initialize & Orchestrate",
      description:
        "Run the init command to automatically discover present terminal agents like Claude Code, Codex, or config files.",
    },
  ];

  return (
    <section
      id="install"
      className="relative py-24 bg-slate-50/20 border-t border-b border-slate-100 overflow-hidden"
    >
      {/* Soft Side Accent Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-emerald-50/40 via-emerald-50/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-emerald-50/40 via-emerald-50/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Installation Steps */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-3 block">
            HOW TO INSTALL
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-12 max-w-md">
            Install CCSwitch and optimize workflows{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              under a minute
            </span>
          </h2>

          {/* Steps List Layout */}
          <div className="space-y-8 mb-10">
            {steps.map((step, idx) => (
              <StepRow
                key={idx}
                num={step.num}
                icon={step.icon}
                iconBg={step.iconBg}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 text-sm">
              Download TUI Now
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Terminal Container */}
        <div
          className="lg:col-span-6 flex justify-center lg:justify-end w-full"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              boxShadow: shadowStyle,
              transition: isHovered
                ? "transform 0.08s ease-out, box-shadow 0.08s ease-out"
                : "transform 0.5s ease, box-shadow 0.5s ease",
              transformStyle: "preserve-3d",
            }}
            className="w-full max-w-[480px] bg-[#0b0f19] rounded-2xl border border-slate-900 overflow-hidden font-mono text-xs md:text-sm text-slate-400 select-none cursor-pointer"
          >
            {/* FIXED: Upgraded to an authentic macOS styled terminal top bar */}
            <div className="bg-[#131929] px-4 py-3 flex items-center justify-between border-b border-slate-900/80 select-none">
              {/* Window Controls (Red, Yellow, Green window dots) */}
              <div className="flex items-center gap-2 w-16">
                <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block opacity-80 hover:opacity-100 transition-opacity"></span>
                <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block opacity-80 hover:opacity-100 transition-opacity"></span>
                <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block opacity-80 hover:opacity-100 transition-opacity"></span>
              </div>

              {/* Centered Window Title */}
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                bash — install.sh
              </span>

              {/* Empty spacing block to offset flex-centering properly */}
              <div className="w-16"></div>
            </div>

            {/* Content block */}
            <div className="p-6 space-y-5 text-[12px] leading-relaxed">
              <div>
                <p className="text-slate-500 mb-1"># 1. Fetch release build</p>
                <p className="text-slate-200">
                  <span className="text-teal-400">curl</span> -fsSL{" "}
                  https://ccswitch.dev/install.sh |{" "}
                  <span className="text-purple-400">sh</span>
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-1">
                  # 2. Verify and permit binary execution permissions
                </p>
                <p className="text-slate-200">
                  <span className="text-teal-400">chmod</span> +x{" "}
                  /usr/local/bin/ccswitch
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-1">
                  # 3. Spin setup cluster verification rules
                </p>
                <p className="text-slate-200">
                  <span className="text-teal-400">ccswitch</span> --init-agents
                </p>
              </div>

              <div className="border-t border-slate-900/80 pt-4">
                <p className="text-emerald-500/90 font-medium">
                  ✔ Fetching build packages success
                </p>
                <p className="text-emerald-500/90 font-medium">
                  ✔ Environment links mapped: stable
                </p>
                <p className="text-slate-300 font-semibold mt-1">
                  Ready to configure terminal commands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
