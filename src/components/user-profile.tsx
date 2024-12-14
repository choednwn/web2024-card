"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PencilLineIcon } from "lucide-react";

export const UserProfile = ({ className }: { className?: string }) => {
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
        <div className="ml-4 flex flex-col justify-start">
          <div className="text-xl font-bold text-white">User ID</div>
          <div className="text-gray-400">User Description</div>
        </div>
      </div>
    </div>
  );
};
