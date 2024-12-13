import { BoundingContainer } from "@/components/bounding-container";
import { NavigationBar } from "@/components/navigation-bar";

const DashPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="border-y">
        {/* Profile Img & User ID */}
        <BoundingContainer>
          <div className="flex flex-row gap-2 py-16">
            <div className="size-16 rounded-full border border-white bg-white/20"></div>
            <div className="ml-4 flex flex-col justify-center">
              <div className="text-xl font-bold text-white">User ID</div>
              <div className="text-gray-400">User Description</div>
            </div>
          </div>
        </BoundingContainer>
      </div>
    </>
  );
};

export default DashPage;
