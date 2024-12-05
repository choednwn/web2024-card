"use client";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {};

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={cn("h-fit border border-black", className)} {...props}>
      {children}
    </button>
  );
}
