import Header from "../components/Header";
import Hero from "../components/MeetFounder";
import ProgramsSection from "../components/ProgramsSection";
import EnhancedGallerySection from "../components/EnhancedGallerySection";
import Testimonials from "../components/Testimonials";
import ResourcesPreview from "../components/ResourcesPreview";
import MeetFounder from "../components/MeetFounder";
import GetInvolved from "../components/GetInvolved";
import Footer from "@/components/footer/Footer";
import ImageGallery from "@/components/ImageGallery";
import FeatureCards from "@/components/FeatureCards";
import HeroSection from "@/components/HeroSection";
import PlayschoolHomepage from "../components/MeetFounder";
import WhyWeAreDifferent from "@/components/WhyWeAreDifferent";
import Library from "@/components/Library";
import { ServiceCards } from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import { Doodles } from "@/components/Doodles";
import GallerySection from "@/components/GallerySection";
import TrustedSection from "@/components/TrustedSection";
import { Instagram } from "@/components/Instagram";
import JoinUs from "@/components/JoinUs";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-rekora-dark-blue animate-fade-in">
    <HeroSection />
    <Instagram />
    <JoinUs />

    <Doodles />

    <Library />

    <TrustedSection />
    <Footer />
  </div>
);

export default Index;
