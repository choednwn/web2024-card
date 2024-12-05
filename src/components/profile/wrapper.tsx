"use client";

import ProfileMenu from "@/components/profile/profile";
import { useLoginStore } from "@/lib/stores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfileWrapper = () => {
  const router = useRouter();
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/profile/login");
    }
  });

  return (
    <div>
      {/* 프로필 */}
      {isAuthenticated && <ProfileMenu />}
    </div>
  );
};

export default ProfileWrapper;
