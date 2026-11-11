import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Facebook, 
  Mail, 
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-slate-950 text-white border-t border-slate-900">
      
      {/* 1. READY TO BUILD CTA SECTION */}
      <div className="border-b border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold rounded-full uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-blue-400" />
              Direct Contact
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Ready to build something better?
            </h3>
            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              Share your requirements and we will discuss the next steps.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full md:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group cursor-pointer shrink-0"
          >
            Book a Strategy Call
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. RESTRUCTURED FOOTER CORES MATRIX */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10">
        
        {/* Brand Column (md:col-span-4) */}
        <div className="md:col-span-4 space-y-4 text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-md">
              T
            </div>
            <span className="font-sans font-bold text-lg text-white tracking-tight">
              Trievol
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            A remote-first digital services business providing website design, development, and ongoing support.
          </p>
          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest pt-1">
            // BEYOND CODE. BUSINESS RESULTS.
          </div>
        </div>

        {/* Social Column (md:col-span-2) */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono">Social</h4>
          <ul className="space-y-2.5">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61579401186832"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:trievolteam@gmail.com"
                className="text-xs text-slate-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Services Column (md:col-span-2) */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono">Services</h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/services" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                Website Design
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                SEO
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                Maintenance
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                Custom Digital Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column (md:col-span-2) */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono">Company</h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/about" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xs text-slate-400 hover:text-white transition-all text-left block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column (md:col-span-2) */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <a href="mailto:trievolteam@gmail.com" className="hover:text-white transition-colors break-all">
                trievolteam@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* 3. FOOTER BOTTOM COPYRIGHT BANNER */}
      <div className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div>© 2026 Trievol</div>
          <div className="flex gap-5">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

