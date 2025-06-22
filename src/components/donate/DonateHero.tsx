import { useEffect } from "react";
import Img2 from "../../assets/donate.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DonateHero() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] overflow-hidden">
      <div
        className="relative z-10 bg-rekora-dark-blue flex items-center py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-left"
        data-aos="fade-right"
      >
        <div className="text-white w-full max-w-xl md:max-w-none mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 tracking-tight leading-tight font-heading">
            Donate for {" "}
            <br className="hidden sm:inline" />
            <span className="text-rekora-light-blue">Neuroscience</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed opacity-90 font-heading">
            Your support fuels our mission and transforms lives. Choose from our
            secure and convenient donation methods below.
          </p>
        </div>
      </div>
      <div className="relative" data-aos="fade-left">
        <img
          src={Img2}
          alt="People interacting and learning"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/30 lg:to-transparent"></div>
      </div>
    </section>
  );
}
