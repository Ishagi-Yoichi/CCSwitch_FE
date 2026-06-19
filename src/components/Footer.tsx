import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12 font-sans text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-100/80">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center font-bold text-amber-600 shadow-sm border border-amber-200">
                CC
              </div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">
                CCSwitch
              </span>
            </div>
            <p className="leading-relaxed text-slate-400 max-w-sm">
              The official CCSwitch application — a free, open-source terminal
              user interface (TUI) built to seamlessly orchestrate and manage
              multiple local AI agents. Engineered entirely by the developer
              community.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-2 md:col-start-6 space-y-4">
            <h4 className="font-bold text-xs tracking-wider text-slate-900 uppercase">
              Product
            </h4>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li>
                <a
                  href="#about"
                  className="hover:text-slate-800 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#install"
                  className="hover:text-slate-800 transition-colors"
                >
                  How to Install
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-slate-800 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-slate-800 transition-colors"
                >
                  Download CLI
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-xs tracking-wider text-slate-900 uppercase">
              Project
            </h4>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Source Code
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Report a Bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  MIT License
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-xs tracking-wider text-slate-900 uppercase">
              Support
            </h4>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  About Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Community Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Fine Print & Copyright Disclaimers */}
        <div className="pt-12 space-y-6 text-[12px] text-slate-400 leading-relaxed">
          {/* Main Copyright lines stack */}
          <div className="space-y-1 font-mono text-slate-400/80">
            <p>Copyright © 2026 CCSwitch Dev Team Core contributors</p>
            <p>
              Copyright © 2025–2026 Open-Source TUI Architecture System Project
              Group
            </p>
          </div>

          {/* Legal / Licensing block copy text */}
          <p className="max-w-5xl">
            CCSwitch is free software: you can redistribute it and/or modify it
            under the terms of the MIT License as published by the Open Source
            Initiative. CCSwitch is distributed in the hope that it will be
            useful, but{" "}
            <span className="font-semibold text-slate-500">
              WITHOUT ANY WARRANTY
            </span>
            ; without even the implied warranty of{" "}
            <span className="font-semibold text-slate-500">
              MERCHANTABILITY
            </span>{" "}
            or{" "}
            <span className="font-semibold text-slate-500">
              FITNESS FOR A PARTICULAR PURPOSE
            </span>
            . View the repository documentation workspace for complete project
            constraints.
          </p>
        </div>
      </div>
    </footer>
  );
}
