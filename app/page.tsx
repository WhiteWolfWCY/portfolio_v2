import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto"> 
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
