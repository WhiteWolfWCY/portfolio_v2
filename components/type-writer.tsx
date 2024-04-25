"use client";

import TypewriterComponent from "typewriter-effect";

const TypeWriter = () => {
  return (
    <>
      <span className="text-primary">{"<>"}</span>
      <span className="underline underline-offset-8 decoration-primary">
        <TypewriterComponent
          options={{
            strings: ["I'm Mateusz", "Nice to meet you!", "Have a good day!"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>

      <span className="text-primary">{"</>"}</span>
    </>
  );
};

export default TypeWriter;
