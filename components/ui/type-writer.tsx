"use client";

import TypewriterComponent from "typewriter-effect";

interface TypeWriterInterface{
  strings: string[]
}

const TypeWriter = ({strings}: TypeWriterInterface) => {
  return (
    <>
      <span className="text-primary">{"<>"}</span>
      <span className="underline underline-offset-8 decoration-primary">
        <TypewriterComponent
          options={{
            strings: strings,
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
