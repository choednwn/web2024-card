"use client";

import { useUserStore } from "@/lib/user/user.store";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import React from "react";

const MouseFollowerZoomSize = 40;
type MouseFollowerProps = React.ComponentProps<"div"> & {
  followerSize: number;
  onFollowerClick?: () => void;
};

export const MouseFollower = (props: MouseFollowerProps) => {
  const [mouseInScreen, setMouseInScreen] = React.useState(false);
  const [mouesOverFollower, setMouseOverFollower] = React.useState(false);
  const sessionValid = useUserStore((state) => state.sessionValid);
  const router = useRouter();

  const updatePosition = (e: { pageX: number; pageY: number }) => {
    gsap.to("#follower", {
      duration: 1.5,
      x: e.pageX - props.followerSize / 2,
      y: e.pageY - props.followerSize / 2,
      ease: "expo.out",
    });
  };

  return (
    <div
      onMouseMove={updatePosition}
      onMouseOver={() => setMouseInScreen(true)}
      onMouseLeave={() => setMouseInScreen(false)}
      className={cn(
        "absolute h-screen w-screen overflow-hidden opacity-0 transition-opacity duration-500",
        mouseInScreen && "opacity-100",
      )}
    >
      <div
        id="follower"
        onClick={() => {
          if (props.onFollowerClick) {
            if (sessionValid) {
              props.onFollowerClick();
            } else {
              router.push("/login");
            }
          }
        }}
        onMouseEnter={() => setMouseOverFollower(true)}
        onMouseLeave={() => setMouseOverFollower(false)}
        className="select-none hover:cursor-pointer hover:drop-shadow-pinkglow"
        style={{
          width: `${mouesOverFollower ? props.followerSize + MouseFollowerZoomSize : props.followerSize}px`,
          height: `${mouesOverFollower ? props.followerSize + MouseFollowerZoomSize : props.followerSize}px`,
          transition: "width 0.5s, height 0.5s",
          transitionDuration: "1000ms",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
