import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import About from "./pages/About";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

// Helper component to handle smooth scroll to top on path transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/services/:serviceId" element={<Layout><ServiceDetail /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/portfolio/:slug" element={<Layout><PortfolioDetail /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/process" element={<Layout><Process /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center py-24 space-y-6">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">404 - Page Not Found</h1>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  The premium layout parameters you are trying to view do not exist on this development server.
                </p>
                <a
                  href="/"
                  className="inline-block px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all cursor-pointer"
                >
                  Return Home
                </a>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
