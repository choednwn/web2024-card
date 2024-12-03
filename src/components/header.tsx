"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const userId = localStorage.getItem("userID");

  return (
    <header className="backdrop:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-14 max-w-6xl flex-row items-center justify-between">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <div id="logo" className="size-fit border-2 border-red-500 font-bold">
            LOGO
          </div>
        </button>

        {/*//!move out to separate component.. please */}
        {/* 임시야 */}
        <div id="buttons" className="size-fit">
          {userId ? (
            <div className="flex size-fit gap-4">
              <button
                className="border-2 border-red-500"
                onClick={() => {
                  localStorage.removeItem("userID");
                  window.location.reload();
                }}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex size-fit gap-4">
              <button
                className="border-2 border-red-500"
                onClick={() => {
                  router.push("/login");
                }}
              >
                LOGIN
              </button>
              <button
                className="border-2 border-red-500"
                onClick={() => {
                  router.push("/register");
                }}
              >
                REGISTER
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
