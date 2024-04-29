import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Code, PersonStanding, Pickaxe } from "lucide-react";

const navItems = [
  {
    name: "About me",
    link: "/#me",
    icon: <PersonStanding className="h-6 w-6 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: <Code className="h-6 w-6 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: <Pickaxe className="h-6 w-6 text-neutral-500 dark:text-white" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 overflow-hidden">
        <Navbar />
        <div className="relative  w-full">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="space-y-20">
            <div id="me">
              <Hero />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
}
