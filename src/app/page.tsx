"use client";

import { BoundingContainer } from "@/components/bounding-container";
import { CMGLogo } from "@/components/logo";
import { MouseFollower } from "@/components/mouse-follower";
import { SlidingTitle } from "@/components/sliding-title";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center">
      <MouseFollower
        followerSize={50}
        onFollowerClick={() => {
          router.push("/dash");
        }}
      >
        <CMGLogo />
      </MouseFollower>
      <BoundingContainer className="flex flex-col gap-4">
        <div className="flex flex-col">
          <SlidingTitle text="CARD" delay={200} />
          <SlidingTitle text="MATCHING" delay={700} />
          <SlidingTitle text="GAME" delay={1200} />
        </div>
      </BoundingContainer>
    </div>
  );
};

export default HomePage;
