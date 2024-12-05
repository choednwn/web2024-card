import ProfileWrapper from "@/app/profile/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로필",
  description: "유저 프로필",
};

const ProfilePage = () => {
  // Wrapper for client as metadata needs to be in a server comp.
  return <ProfileWrapper />;
};

export default ProfilePage;
