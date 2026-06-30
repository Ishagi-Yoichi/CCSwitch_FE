import { useState } from "react";

type OS = "windows" | "macos" | "linux";

export default function InstallPage() {
  const [activeOS, setActiveOS] = useState<OS>("windows");

  return (
    <div className="min-h-screen bg-slate-50/30 pt-12 pb-24 relative overflow-hidden font-sans selection:bg-blue-500/10 selection:text-blue-600">
      {/* Ambient Green Side Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-gradient-to-r from-emerald-50/30 via-emerald-50/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-emerald-50/30 via-emerald-50/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-3 block">
            Documentation
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            How to Download & Install CC Switch
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            CC Switch can be installed on Windows, macOS, and Linux devices.
            Choose your operating system below and follow the setup
            instructions.
          </p>
        </div>

        {/* System Requirements Grid */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
            <span>📋</span> System Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-900 mb-1">Windows</p>
              <p className="text-xs text-slate-500">Windows 10 and above</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-900 mb-1">macOS</p>
              <p className="text-xs text-slate-500">
                macOS 12 (Monterey) and above
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-900 mb-1">Linux</p>
              <p className="text-xs text-slate-500">
                Ubuntu 22.04+ / Debian 11+ / Fedora 34+
              </p>
            </div>
          </div>
        </div>

        {/* OS Switcher Tabs */}
        <div className="flex border-b border-slate-200 mb-10 gap-2">
          {(["windows", "macos", "linux"] as OS[]).map((os) => (
            <button
              key={os}
              onClick={() => setActiveOS(os)}
              className={`px-6 py-3.5 font-bold text-sm capitalize border-b-2 transition-all relative top-[2px] ${
                activeOS === os
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-400 hover:text-slate-700"
              }`}
            >
              {os === "macos" ? "macOS" : os}
            </button>
          ))}
        </div>

        {/* Dynamic OS Guides */}
        <div className="space-y-12 animate-fadeIn">
          {/* WINDOWS GUIDE */}
          {activeOS === "windows" && (
            <div className="space-y-8">
              {/* Method 1 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 block mb-1">
                      Method 1
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      Install Using the MSI Setup File
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      This is the easiest and recommended installation method
                      for Windows users.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-Windows.msi"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-blue-200 transition-all"
                    >
                      Download .msi Installer
                    </a>
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-Windows.msi.sig"
                      className="border border-slate-200 text-slate-500 font-semibold text-xs px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      Signature (.sig)
                    </a>
                  </div>
                </div>
                <div className="border-t border-slate-50 pt-4 space-y-3 text-sm text-slate-600">
                  <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider">
                    Steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Download the latest{" "}
                      <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs font-mono">
                        .msi
                      </code>{" "}
                      installer package from the above links.
                    </li>
                    <li>Double-click the installer file.</li>
                    <li>Complete the installation using the setup wizard.</li>
                    <li>
                      Open CC Switch from the Start Menu once installation is
                      finished.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
                      Method 2
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      Use the Portable Version
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      If you do not want to install the software permanently,
                      use the portable edition.
                    </p>
                  </div>
                  <a
                    href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-Windows-Portable.zip"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    Download Portable .zip
                  </a>
                </div>
                <div className="border-t border-slate-50 pt-4 space-y-3 text-sm text-slate-600">
                  <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider">
                    Steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Download the portable{" "}
                      <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs font-mono">
                        .zip
                      </code>{" "}
                      package.
                    </li>
                    <li>Extract the ZIP archive to your preferred folder.</li>
                    <li>Open the extracted folder.</li>
                    <li>
                      Launch{" "}
                      <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs font-mono">
                        cc-switch.exe
                      </code>
                      .
                    </li>
                    <li className="text-emerald-600 font-medium list-none pl-0 mt-1">
                      ✓ No installation is required.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* MACOS GUIDE */}
          {activeOS === "macos" && (
            <div className="space-y-8">
              {/* Homebrew Option */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 block mb-1">
                  Recommended
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                  Homebrew Installation
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Install CC Switch quickly through Homebrew using the commands
                  below:
                </p>

                <div className="bg-[#0b0f19] p-5 rounded-xl font-mono text-xs md:text-sm text-slate-300 space-y-1 shadow-inner">
                  <p>
                    <span className="text-teal-400">brew</span> tap
                    farion1231/ccswitch
                  </p>
                  <p>
                    <span className="text-teal-400">brew</span> install --cask
                    cc-switch
                  </p>
                </div>
              </div>

              {/* Manual Option */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      Manual macOS Installation
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Download independent binaries directly for custom
                      deployments.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-macOS.dmg"
                      className="border border-slate-200 text-slate-700 font-semibold text-xs px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      Download .dmg
                    </a>
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-macOS.zip"
                      className="border border-slate-200 text-slate-700 font-semibold text-xs px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      Download .zip
                    </a>
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-macOS.tar.gz"
                      className="border border-slate-200 text-slate-700 font-semibold text-xs px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      Download .tar.gz
                    </a>
                  </div>
                </div>
                <div className="border-t border-slate-50 pt-4 space-y-3 text-sm text-slate-600">
                  <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider">
                    Steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Open the GitHub releases page or click the specific target
                      format above.
                    </li>
                    <li>
                      Download the latest{" "}
                      <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs font-mono">
                        .dmg
                      </code>{" "}
                      file.
                    </li>
                    <li>Open the DMG package.</li>
                    <li>
                      Drag **CC Switch** into your{" "}
                      <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs font-mono">
                        /Applications
                      </code>{" "}
                      folder.
                    </li>
                    <li>
                      Start the application from Launchpad or Applications.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* LINUX GUIDE */}
          {activeOS === "linux" && (
            <div className="space-y-8">
              {/* Debian/Ubuntu */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  Debian and Ubuntu Installation
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Run these commands inside your Terminal application:
                </p>
                <div className="bg-[#0b0f19] p-5 rounded-xl font-mono text-xs md:text-sm text-slate-300 space-y-1 shadow-inner">
                  <p>
                    <span className="text-teal-400">sudo dpkg</span> -i
                    cc-switch_*.deb
                  </p>
                  <p>
                    <span className="text-teal-400">sudo apt-get</span> install
                    -f
                  </p>
                </div>
              </div>

              {/* AppImage Package */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      Run the AppImage Version
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Use the AppImage package if you want a universal Linux
                      version.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-Linux-arm64.AppImage"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all"
                    >
                      Download AppImage
                    </a>
                    <a
                      href="https://github.com/farion1231/cc-switch/releases/download/v3.16.3/CC-Switch-v3.16.3-Linux-arm64.AppImage.sig"
                      className="border border-slate-200 text-slate-500 font-semibold text-xs px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      Signature (.sig)
                    </a>
                  </div>
                </div>
                <div className="bg-[#0b0f19] p-5 rounded-xl font-mono text-xs md:text-sm text-slate-300 space-y-1 shadow-inner">
                  <p>
                    <span className="text-teal-400">chmod</span> +x
                    cc-switch_*.AppImage
                  </p>
                  <p>
                    <span className="text-purple-400">./</span>
                    cc-switch_*.AppImage
                  </p>
                </div>
              </div>

              {/* Arch Linux */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                  Install on Arch Linux (AUR)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                      Using paru:
                    </p>
                    <div className="bg-[#0b0f19] p-4 rounded-xl font-mono text-xs text-slate-300 shadow-inner">
                      <span className="text-teal-400">paru</span> -S
                      cc-switch-bin
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                      Using yay:
                    </p>
                    <div className="bg-[#0b0f19] p-4 rounded-xl font-mono text-xs text-slate-300 shadow-inner">
                      <span className="text-teal-400">yay</span> -S
                      cc-switch-bin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
