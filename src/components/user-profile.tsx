"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FunMessages } from "@/lib/constants";
import { useUserStore } from "@/lib/user/user.store";
import { PencilLineIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const UserProfile = ({ className }: { className?: string }) => {
  const userId = useUserStore((state) => state.userId);
  const [funMessage, setFunMessage] = useState("");

  useEffect(() => {
    setFunMessage(FunMessages[Math.floor(Math.random() * FunMessages.length)]);
  });

  return (
    <div className={className}>
      <div id="profile" className="flex h-full flex-row gap-1">
        <Avatar className="relative size-20">
          {/* Change Profile Button */}
          <div
            onClick={() => {
              console.log("Change Profile!");
            }}
            className="absolute flex size-full cursor-pointer items-center justify-center rounded-full bg-background/70 opacity-0 transition-opacity duration-200 hover:opacity-100"
          >
            <PencilLineIcon className="size-6" />
          </div>
          {/* Profile */}
          <AvatarImage src="/characters/1.png" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 flex flex-col justify-start gap-1">
          <div className="text-2xl font-bold text-white">{userId}님</div>
          <div className="text-gray-400">{funMessage}</div>
        </div>
      </div>
    </div>
  );
};
