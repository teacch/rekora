import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <div className="bg-[#2c1338] text-white">
            <AboutHero />
        
          </div>
        
        </main>
      </div>

      <Footer />
    </>
  );
};

export default About;
