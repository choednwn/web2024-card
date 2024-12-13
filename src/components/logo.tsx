import { cn } from "@/lib/utils";
import Image from "next/image";

type CMGLogoProps = {
  className?: string;
  onClick?: () => void;
};

export const CMGLogo = (props: CMGLogoProps) => {
  return (
    <Image
      src="/logo.png"
      width={180}
      height={160}
      alt="logo"
      className={cn("h-full w-full", props.className)}
      draggable={false}
      onClick={props.onClick}
    />
  );
};
