"use client";

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
  SiGnubash,
} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import TypeWriter from "./ui/type-writer";

const skillsRight = [
  {
    icon: TbBrandNextjs,
    name: "Next",
  },
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: TbBrandTypescript,
    name: "TS",
  },
  {
    icon: RiJavascriptLine,
    name: "JS",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    icon: FaNodeJs,
    name: "Node",
  },
  {
    icon: SiTrpc,
    name: "tRPC",
  },
  {
    icon: SiGnubash,
    name: "Bash",
  },
];
const skillsLeft = [
  {
    icon: SiExpress,
    name: "Express",
  },
  {
    icon: SiMongodb,
    name: "Mongo",
  },
  {
    icon: SiPostgresql,
    name: "Postgres",
  },
  {
    icon: FaGithub,
    name: "Github",
  },
  {
    icon: FaPython,
    name: "Python",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
  },
  {
    icon: SiClerk,
    name: "Clerk",
  },
  {
    icon: FaStripeS,
    name: "Stripe",
  },
];

const strings = ["Skills", "Stack", "Technologies"];

export default function Skills() {
  return (
    <div className="mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1 pt-0 lg:pt-20 order-last lg:order-first">
          <InfiniteMovingCards
            items={skillsRight}
            direction="right"
            speed="fast"
          />
          <InfiniteMovingCards
            items={skillsLeft}
            direction="left"
            speed="fast"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row text-4xl lg:text-6xl gap-2 justify-center col-span-1">
            <TypeWriter strings={strings} />
          </div>
          <p className="my-auto">
            I consider myself a very flexible person and I always try to choose
            technologies that would be ideal for obtaining a desired result. Due
            to this fact, during my yet short carrer, I've grasped various
            programming languages. Beacause of that, learning a new technology
            will never be a problem for me.
          </p>
        </div>
      </div>
    </div>
  );
}
