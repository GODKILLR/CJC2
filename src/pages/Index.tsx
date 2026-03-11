import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NFTShowcaseSection from "@/components/NFTShowcaseSection";
import GameModesSection from "@/components/GameModesSection";
import FeaturesSection from "@/components/FeaturesSection";
import NFTPacksSection from "@/components/NFTPacksSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NFTShowcaseSection />
      <GameModesSection />
      <FeaturesSection />
      <NFTPacksSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
