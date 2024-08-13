"use client";
import TypeWriter from "./ui/type-writer";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaStripeS,
  FaFire,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiOpenai,
  SiPrisma,
  SiClerk,
  SiPostgresql,
} from "react-icons/si";
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const strings = ["Projects", "My work", "Take a look!"];


export const PROJECTS = [
  {
    title: "Coinvalley",
    tech: [
      TbBrandNextjs,
      TbBrandTypescript,
      SiClerk,
      FaFire,
      SiTailwindcss,
      SiPostgresql,
      FaStripeS,
    ],
    link: "https://coinvalley.vercel.app",
    cover: "/coinvalley.jpeg",
    background: "bg-green-500",
  },
  {
    title: "Shirt.io",
    tech: [
      TbBrandNextjs,
      TbBrandTypescript,
      SiTailwindcss,
      FaNodeJs,
      SiPostgresql,
      FaStripeS
    ],
    link: "https://shirt-io.vercel.app",
    cover: "/shirtio.jpeg",
    background: "bg-orange-500",
  },
  {
    title: "ByteBin",
    tech: [
      TbBrandNextjs,
      TbBrandTypescript,
      SiTailwindcss,
      SiClerk,
      FaNodeJs,
    ],
    link: "https://byte-bin-eight.vercel.app",
    cover: "/bytebin.jpeg",
    background: "bg-blue-500",
  },
  {
    title: "WolfGeekmarkt",
    tech: [
      TbBrandNextjs,
      TbBrandTypescript,
      SiTailwindcss,
      SiExpress,
      SiMongodb,
      FaStripeS,
    ],
    link: "https://wolfgeekmarkt-production.up.railway.app",
    cover: "/wolfgeekmarkt.jpeg",
    background: "bg-indigo-500",
  },
  {
    title: "Virtuo",
    tech: [
      TbBrandNextjs,
      TbBrandTypescript,
      SiTailwindcss,
      SiPrisma,
      SiMongodb,
      SiOpenai,
      FaStripeS,
    ],
    link: "https://virtuoo-production.up.railway.app",
    cover: "/virtuo.jpeg",
    background: "bg-indigo-500",
  },
  {
    title: "Github Users Explorer",
    tech: [FaReact, FaNodeJs, FaGithub],
    link: "https://react-github-users-explorer.netlify.app",
    cover: "/ghusers.jpeg",
    background: "bg-indigo-500",
  },

];
export default function Projects() {
  
  const projects = PROJECTS;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        margin: "-200px",
        once: true,
      }}
      transition={{ delay: 0.3 }}
      className="mt-32 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal font-bold flex">
        <TypeWriter strings={strings} />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} className={cn(
            "col-span-1",
            index === projects.length - 1 && projects.length % 2 != 0 ? "sm:col-span-2 flex justify-center" : ""
          )}>
            <div className="p-5 rounded-md">
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => (
                      <Icon className="w-8 h-8" key={index} />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
