import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactInfoSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <section className="bg-white py-16 px-6 sm:px-8 md:py-20 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          <div
            className="p-6 sm:p-8 md:p-10 bg-rekora-light-blue/10 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-heading leading-tight">
              Visit Our Office
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 font-heading">
              Find our main office location and plan your visit during our operating hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-heading flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rekora-dark-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.727A8 8 0 0120 18a8 8 0 01-8 8H8a8 8 0 01-8-8c0-2.343.879-4.506 2.343-6.073.4-.4.8-1.2.8-1.2l-.5-.5a1 1 0 01-.1-.8V.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5c0 .4-.4.8-.8 1.2a8.001 8.001 0 01-2.343 6.073L8 14l-.1.1a1 1 0 01-.8.1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2l-.1.1z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  </svg>
                  Location:
                </h3>
                <address className="text-gray-700 leading-relaxed not-italic text-base sm:text-lg font-heading">
                  11 Ademola Saka Close,
                  <br />
                  Lagos, Nigeria
                </address>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-heading flex items-center font-heading">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rekora-dark-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours:
                </h3>
                <p className="text-gray-700 text-base sm:text-lg font-heading">
                  <span className="font-semibold">Mon - Fri:</span> 10 AM - 3 PM
                </p>
                <p className="text-gray-600 text-sm italic mt-1 font-heading">
                  (Weekends by appointment only)
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-80 sm:h-96 md:h-[400px] lg:h-[480px] bg-gray-200 rounded-lg overflow-hidden shadow-xl border border-gray-200"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.285013422234!2d3.350000015370113!3d6.524379524295019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0x4f1c4b1c4b1c4b1c!2s11%20Ademola%20Saka%20Cl%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1718999999999!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rekora Initiative Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}