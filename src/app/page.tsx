"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

const styles = {
  main: "size-full flex flex-col justify-center items-center max-w-6xl",
};

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Home Page</h1>
      <Button
        onClick={() => {
          router.push("/game");
        }}
      >
        Play Game
      </Button>
    </>
  );
};

export default HomePage;
