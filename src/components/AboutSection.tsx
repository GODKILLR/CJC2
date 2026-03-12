import CinematicSection from "./CinematicSection";
import sectionAdventure from "@/assets/section-adventure.jpg";

const AboutSection = () => {
  return (
    <CinematicSection
      id="about"
      label="OWN IT"
      title="Your Racehorse. Your Legacy."
      description="CJC Race is a skill-based real-time horse racing competition where you own your racehorse, control the jockey, and race against players worldwide. Every race is a test of skill. Every win brings real rewards. Compete 24/7 across the globe."
      image={sectionAdventure}
      cta={{ label: "Explore More", href: "#nfts" }}
      align="left"
    />
  );
};

export default AboutSection;
