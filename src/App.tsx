import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FaqAccordion from "./components/FaqAccordion";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-500/10 selection:text-blue-600">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FaqAccordion />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}
