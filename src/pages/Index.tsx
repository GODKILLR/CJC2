import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import NFTPacksSection from "@/components/NFTPacksSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <NFTPacksSection />
      <HowToPlaySection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
