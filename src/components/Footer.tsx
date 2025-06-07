import SocialLinks from "./SocialLinks";
import FooterNavigation from "./FooterNavigation";
import Copyright from "./Copyright";
import FooterImg from "../assets/rekora-logo-light.png";

export default function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-8 lg:px-16 bg-rekora-dark-blue">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <img
              src={FooterImg}
              alt=""
              className="w-20 sm:w-24 md:w-28 h-auto"
            />
            <p className="text-white font-medium">
              Empowering Africa's <br /> Young Scientists
            </p>
            <SocialLinks />
          </div>

          <div className="lg:col-span-9">
            <FooterNavigation />
          </div>
        </div>

        <div className="mt-24">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
