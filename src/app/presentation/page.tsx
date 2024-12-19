"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PresentationPage = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex h-screen w-screen flex-col items-center justify-center gap-12 overflow-hidden"
    >
      <h1 className="text-8xl font-bold duration-1000 animate-in fade-in slide-in-from-bottom-5">
        주제: 카드게임
      </h1>
      <div className="flex flex-row gap-6 text-2xl duration-500 animate-in fade-in slide-in-from-bottom-5">
        <span>한민주</span>
        <span>진채민</span>
        <span>김나현</span>
        <span>최우주</span>
      </div>
      <ul className="flex flex-row items-center justify-center gap-24 pt-16 text-2xl">
        <li>
          <Image
            src="/presentation/ReactJS.png"
            width={400}
            height={400}
            className="size-32 duration-1000 animate-in slide-in-from-bottom-5"
            alt="reactjs"
          />
        </li>
        <li>
          <Image
            src="/presentation/NextJS.png"
            width={500}
            height={400}
            className="h-16 w-auto invert duration-1000 animate-in slide-in-from-bottom-5"
            alt="reactjs"
          />
        </li>
        <li>
          <Image
            src="/presentation/MySQL.png"
            width={600}
            height={400}
            className="h-32 w-auto duration-1000 animate-in slide-in-from-bottom-5"
            alt="reactjs"
          />
        </li>
      </ul>
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer rounded-full border-2 border-white p-6 transition-all duration-300 hover:bg-orange-400/80 hover:shadow-lg hover:shadow-orange-400"
      >
        <ArrowRightIcon size={52} className="relative" />
      </div>
    </div>
  );
};

export default PresentationPage;
