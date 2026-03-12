import CinematicSection from "./CinematicSection";
import sectionFeatures from "@/assets/section-features.jpg";

const FeaturesSection = () => {
  return (
    <CinematicSection
      id="features"
      label="EXPLORE"
      title="Deep Gameplay Features"
      description="Master manual jockey control or use auto-race mode. Cultivate crops on your farm, restore horse condition at the Day Spa, acquire Special Skills via Spell Books, complete Daily Missions for diamonds, and upgrade NFTs through Burning & Synthesis."
      image={sectionFeatures}
      cta={{ label: "Learn More", href: "https://docs.cjcrace.io" }}
      cta2={{ label: "Download", href: "https://www.cjcrace.io/download" }}
      align="right"
    />
  );
};

export default FeaturesSection;
