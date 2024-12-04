import { cn } from "@/lib/utils";
import React from "react";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {};

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn("w-full aspect-[3/4] border border-pink-500", className)}
    >
      {children}
    </div>
  );
}
