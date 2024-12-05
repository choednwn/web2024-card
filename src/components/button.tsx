"use client";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  outline?: boolean;
  circle?: boolean;
};

export default function Button({
  outline,
  circle,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-fit rounded-md",
        outline && "border-2 border-white px-2",
        circle && "rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
