import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import MeetFounder from "@/components/MeetFounder";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <div className="bg-[#2c1338] text-white">
            <AboutHero />
        
          </div>

          <MeetFounder/>
        
        </main>
      </div>

      <Footer />
    </>
  );
};

export default About;
