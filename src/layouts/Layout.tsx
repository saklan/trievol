import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div id="app-layout" className="min-h-screen bg-slate-50/30 flex flex-col font-sans antialiased text-slate-800">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 sm:px-8 py-8">
        {children}
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
