import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import WhyDepox from "../components/WhyDepox";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#c1d7c8] selection:bg-[#05e700] selection:text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <Process />
      <WhyDepox />
      <FinalCTA />
      <Footer />
    </main>
  );
}
