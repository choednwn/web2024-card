"use client";

import Image from "next/image";

const PresentationPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-12 overflow-hidden">
      <h1 className="text-8xl font-bold duration-1000 animate-in fade-in slide-in-from-bottom-5">
        주제: 카드게임
      </h1>
      <ul className="flex flex-row gap-6 text-2xl duration-500">
        <li className="delay-[75ms]">한민주</li>
        <li className="delay-[100ms]">진채민</li>
        <li className="delay-[125ms]">김나현</li>
        <li className="delay-[150ms]">최우주</li>
      </ul>
      <ul className="flex flex-row items-center justify-center gap-24 pt-16 text-2xl">
        <li>
          <Image
            src="/presentation/ReactJS.png"
            width={400}
            height={400}
            className="size-32"
            alt="reactjs"
          />
        </li>
        <li>
          <Image
            src="/presentation/NextJS.png"
            width={500}
            height={400}
            className="h-16 w-auto invert"
            alt="reactjs"
          />
        </li>
        <li>
          <Image
            src="/presentation/MySQL.png"
            width={600}
            height={400}
            className="h-32 w-auto"
            alt="reactjs"
          />
        </li>
      </ul>
    </div>
  );
};

export default PresentationPage;
