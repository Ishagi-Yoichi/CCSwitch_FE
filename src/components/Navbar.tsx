import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100/80 transition-all">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center font-bold text-amber-600 shadow-sm border border-amber-200">
            CC
          </div>
          <span className="font-bold text-slate-800 text-lg tracking-tight">
            CCSwitch
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#home" className="hover:text-slate-900 transition-colors">
            Home
          </a>
          <Link to="/about" className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link to="/faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </Link>
          <Link
            to="/contact"
            className="hover:text-slate-900 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/install"
            className="hover:text-slate-900 transition-colors"
          >
            Download
          </Link>
        </div>

        {/* Dynamic CTA Button */}
        <button
          className="bg-slate-950 hover:bg-slate-900 cursor-pointer text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all"
          onClick={() => (window.location.href = "/install")}
        >
          Download
        </button>
      </div>
    </nav>
  );
}
