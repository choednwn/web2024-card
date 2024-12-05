"use client";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  hasBorder?: boolean;
};

export default function Button({
  hasBorder,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-fit",
        hasBorder && "rounded-md border-2 border-white px-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
