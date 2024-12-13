"use client";

import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import React from "react";

const MouseFollowerZoomSize = 40;
type MouseFollowerProps = React.ComponentProps<"div"> & {
  followerSize: number;
  onFollowerClick?: () => void;
};

export const MouseFollower = ({
  followerSize,
  onFollowerClick,
  ...props
}: MouseFollowerProps) => {
  const [mouseInScreen, setMouseInScreen] = React.useState(false);
  const [mouesOverFollower, setMouseOverFollower] = React.useState(false);

  const updatePosition = (e: { pageX: number; pageY: number }) => {
    gsap.to("#follower", {
      duration: 1.5,
      x: e.pageX - followerSize / 2,
      y: e.pageY - followerSize / 2,
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
          if (onFollowerClick) onFollowerClick();
        }}
        onMouseEnter={() => setMouseOverFollower(true)}
        onMouseLeave={() => setMouseOverFollower(false)}
        className="select-none hover:cursor-pointer hover:drop-shadow-pinkglow"
        style={{
          width: `${mouesOverFollower ? followerSize + MouseFollowerZoomSize : followerSize}px`,
          height: `${mouesOverFollower ? followerSize + MouseFollowerZoomSize : followerSize}px`,
          transition: "width 0.5s, height 0.5s",
          transitionDuration: "1000ms",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
