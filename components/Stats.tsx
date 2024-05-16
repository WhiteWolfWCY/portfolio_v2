"use client";

import CountUp from "react-countup";
import { PROJECTS } from "./Projects";
import { skillsLeft, skillsRight } from "./Skills";
import { Reveal } from "./ui/reveal";
import { motion } from "framer-motion";

const projectsAmount = PROJECTS.length;
const skills = skillsLeft.length + skillsRight.length;

const STATS = [
  {
    num: new Date().getFullYear() - 2019,
    text: "Years of coding",
  },
  {
    num: projectsAmount,
    text: "Projects completed",
  },
  {
    num: skills,
    text: "Technologies mastered",
  },
  {
    num: 99 ,
    text: "New ideas",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {STATS.map((item, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <Reveal delay={1} y={50}>
                  <div className="col-span-1 flex flex-col relative gap-8 items-center justify-center">
                    <motion.svg
                      className="absolute -top-2 xl:-top-4 w-[60px] xl:w-[120px] h-[60px] xl:h-[100px]"
                      fill="transparent"
                      viewBox="0 0 506 506"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#16a34a"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                          strokeDasharray: [
                            "15 120 25 25",
                            "16 25 92 72",
                            "4 250 22 22",
                          ],
                          rotate: [120, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.svg>
                    <CountUp
                      end={item.num}
                      duration={10}
                      delay={2}
                      className="text-4xl xl:text-6xl font-extrabold"
                    />
                    <p className="text-center text-foreground/80">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
