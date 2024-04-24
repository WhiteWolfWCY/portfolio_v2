import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[60hv] flex items-center justify-between">
      <div>
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!
          <span className="absolute animate-wave">👋</span>
          <br />
          <span className="underline underline-offset-8 decoration-primary">
            {"I'm Mateusz."}
          </span>
        </h1>
      </div>
      <Image alt="Avatar image" src="/avatar.png" width="500" height="600" />
    </div>
    
  );
}
