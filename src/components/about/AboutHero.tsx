import About1 from "../../assets/about1.jpg";
import About2 from "../../assets/yo.jpg";
import About3 from "../../assets/yo2.jpg";
import About4 from "../../assets/yo3.jpg";
import About5 from "../../assets/yo4.jpg";

export default function AboutHero() {
  return (
    <div className="bg-rekora-dark-blue py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading relative inline-block">
            About Rekora
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-2 bg-rekora-light-blue rounded-full"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Igniting curiosity and fostering innovation in neuroscience across
            Africa.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 items-center">
          <div className="mb-12 md:mb-0 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white mb-6 font-heading">
              Our <span className="text-rekora-light-blue">Why</span>
            </h3>
            <p className="text-lg text-gray-100 leading-relaxed mb-4">
              In Nigeria and many parts of Africa, STEM especially neuroscience
              remains an abstract concept due to limited access, exposure, and
              resources.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed">
              At Rekora, we believe that early, immersive exposure to brain
              science can open minds, shape careers, and drive innovation. Our
              project is powered by a passion for equity and education, inspired
              by the transformative power of access.
            </p>
          </div>
          <div className="relative order-1 md:order-2 mb-8 md:mb-0 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-4 border-rekora-light-blue">
              <img
                className="object-cover w-full h-full transform hover:scale-110 transition duration-500 ease-in-out"
                src={About1}
                alt="A group of enthusiastic young students in Nigeria engaged in a hands-on science experiment, reflecting deep curiosity and active learning."
              />
              <div className="absolute inset-0 bg-rekora-light-blue opacity-10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-rekora-darker-blue p-8 rounded-xl shadow-lg border border-rekora-light-blue transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-rekora-light-blue mb-4 font-heading flex items-center">
              <svg
                className="w-7 h-7 mr-3 text-rekora-light-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 9.293a1 1 0 00-1.414 1.414L8.586 12H7a1 1 0 100 2h1.586l-1.293 1.293a1 1 0 001.414 1.414L10 14.414l1.293 1.293a1 1 0 001.414-1.414L11.414 12h1.586a1 1 0 100-2h-1.586l1.293-1.293a1 1 0 00-1.414-1.414L10 9.586l-1.293-1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Our Vision
            </h3>
            <p className="text-lg text-gray-100 leading-relaxed">
              A world where every curious mind in Africa has the tools and
              support to explore neuroscience and change their communities for
              the better.
            </p>
          </div>

          <div className="bg-rekora-darker-blue p-8 rounded-xl shadow-lg border border-rekora-light-blue transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-rekora-light-blue mb-4 font-heading flex items-center">
              <svg
                className="w-7 h-7 mr-3 text-rekora-light-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l1.293 1.293a1 1 0 001.414 0L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2h-2zm12 2H5V3h10v2zm0 1v7a1 1 0 01-1 1h-3.414l-1.293 1.293a.999.999 0 00-1.414 0L7.414 14H6a1 1 0 01-1-1V6h10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Our Mission
            </h3>
            <p className="text-lg text-gray-100 leading-relaxed">
              To foster early interest in neuroscience through experiential
              learning, mentorship, and resource accessibility for underserved
              students in Nigeria.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-12 font-heading">
            Our Impact in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-transparent hover:border-rekora-light-blue transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <img
                src={About2}
                alt="Students actively participating in a hands-on neuroscience workshop."
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="group aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-transparent hover:border-rekora-light-blue transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <img
                src={About3}
                alt="A mentor guiding a student during a science activity."
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="group aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-transparent hover:border-rekora-light-blue transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <img
                src={About4}
                alt="Young students excitedly looking at brain models."
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="group aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-transparent hover:border-rekora-light-blue transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
              <img
                src={About5}
                alt="A group photo outdoors with Rekora participants."
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Ready to empower the next generation of African innovators?
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-blck bg-rekora-light-blue hover:bg-rekora-darker-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rekora-light-blue transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            Get Involved
            <svg
              className="ml-3 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
