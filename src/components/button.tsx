"use client";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn("h-fit border border-black", props.className)}
      {...props}
    >
      {props.children}
    </button>
  );
}
