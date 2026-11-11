import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data/navigation";
import { AGENCY_INFO } from "../data/site";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleLinkClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/70 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Trievol Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm group-hover:scale-105 transition-transform">
            T
          </div>
          <span className="font-sans font-bold text-lg text-slate-900 tracking-tight">
            {AGENCY_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "text-slate-950"
                      : "text-slate-500 hover:text-slate-950"
                }`}
                title={link.description}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            Book Strategy Call <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-50 cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md absolute top-20 left-0 right-0 py-6 px-6 space-y-4 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-50 text-slate-900 font-bold border-l-2 border-blue-600 pl-3"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50/50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-50">
            <button
              onClick={() => handleLinkClick("/contact")}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
