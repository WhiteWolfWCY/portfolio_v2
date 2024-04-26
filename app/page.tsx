import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 overflow-hidden">
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}
