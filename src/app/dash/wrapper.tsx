import { BoundingContainer } from "@/components/bounding-container";
import { GameSettings } from "@/components/game/game-settings";
import { NavigationBar } from "@/components/navigation-bar";
import { UserProfile } from "@/components/user-profile";

const DashPageWrapper = () => {
  return (
    <>
      <NavigationBar />
      <div className="border-b">
        <BoundingContainer>
          {/* Profile & Game Settings */}
          <section className="grid grid-cols-1 gap-y-8 py-8 sm:grid-cols-2">
            <UserProfile className="justify-self-start" />
            <GameSettings className="justify-self-end" />
          </section>
          <section></section>
        </BoundingContainer>
      </div>
    </>
  );
};

export default DashPageWrapper;
