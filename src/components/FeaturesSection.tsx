import CinematicSection from "./CinematicSection";
import sectionFeatures from "@/assets/section-features.jpg";

const FeaturesSection = () => {
  return (
    <CinematicSection
      id="features"
      label="MASTER"
      title="Skill Over Chance"
      description="Take manual control of your jockey or use auto-race mode. Build your farm, restore horse condition at the Day Spa, acquire Special Skills through Spell Books, complete Daily Missions, and upgrade NFTs via Burning & Synthesis. Your skill determines victory."
      image={sectionFeatures}
      cta={{ label: "Learn More", href: "https://docs.cjcrace.io" }}
      cta2={{ label: "Download", href: "https://www.cjcrace.io/download" }}
      align="right"
    />
  );
};

export default FeaturesSection;
