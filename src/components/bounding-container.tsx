import { cn } from "@/lib/utils";
import React from "react";

export const BoundingContainer = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1216px] px-4 md:px-8 xl:px-0",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
