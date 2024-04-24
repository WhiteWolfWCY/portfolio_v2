"use client";

import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <div className="min-h-[60hv] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between">
      <div className="space-y-10 flex flex-col lg:text-left">
        <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal lg:text-left font-bold flex">
            <span className="text-primary">{"<>"}</span>
            <span className="underline underline-offset-8 decoration-primary">
              <TypewriterComponent
                options={{
                  strings: [
                    "Nice to meet you!",
                    "I'm Mateusz",
                    "Have a good day!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

          <span className="text-primary">{"</>"}</span>
          <span className="animate-wave hidden lg:block">👋</span>
        </h1>
        
        
      </div>
      <Image
        alt="Avatar image"
        src="/avatar.png"
        width="500"
        height="600"
        className="sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px]"
      />
    </div>
  );
}
