import CinematicSection from "./CinematicSection";
import sectionAdventure from "@/assets/section-adventure.jpg";

const AboutSection = () => {
  return (
    <CinematicSection
      id="about"
      label="ADVENTURE"
      title="The World Beyond Imagination"
      description="Climax Jockey Club (CJC Race) is an exhilarating real-time racehorse racing game designed for both gamers and crypto enthusiasts. Compete with Racehorses, Jockeys, and Items — each possessing unique attributes and abilities. Winners earn CJC coins and valuable props. Races are available 24/7 worldwide."
      image={sectionAdventure}
      cta={{ label: "Explore More", href: "#nfts" }}
      align="left"
    />
  );
};

export default AboutSection;
