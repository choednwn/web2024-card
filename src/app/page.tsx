"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-full">
      <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 border-2 border-pink-500">
        <h1>Home Page</h1>
        <button
          className="border-2 border-red-500 p-6"
          onClick={() => {
            router.push("/game");
          }}
        >
          START
        </button>
      </div>
    </main>
  );
}
