"use client";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  outline?: boolean;
  circle?: boolean;
};

//! Need to revamp
/**
 * **Button** \
 * 버튼 컴포넌트
 *
 * @param outline
 * @param circle
 */
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
