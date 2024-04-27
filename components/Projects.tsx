"use client";
import TypeWriter from "./ui/type-writer";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaStripeS,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiClerk,
  SiTrpc,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const strings = ["Projects", "My work", "Take a look!"];

export default function () {
  const projects = [
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
        SiMongodb
      ],
      link: "https://wolfgeekmarkt-production.up.railway.app",
      cover: "/wolfgeekmarkt.jpeg",
      background: "bg-indigo-500",
    },
    
  ];

  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal font-bold flex">
        <TypeWriter strings={strings} />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-8">
      {projects.map((project, index) => (
          <Link key={index} href={project.link} className="col-span-1">
            <div className="p-5 rounded-md">
                <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full space-y-5 cursor-pointer"
                >
                    <h1>
                        {project.title}
                    </h1>
                </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
