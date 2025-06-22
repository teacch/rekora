import { useEffect } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactDetails() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-rekora-light-blue to-rekora-dark-blue px-4 py-16 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-heading">
      <div className="max-w-7xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div
            className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center bg-gray-50"
            data-aos="fade-right"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Get in Touch with Us
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-sm sm:max-w-md">
              Reach out through any of the channels below. We're eager to hear
              from you and will respond as quickly as possible.
            </p>

            <div className="space-y-5 sm:space-y-6">
              <a
                href="tel:+2348025644212"
                className="flex items-center gap-3 sm:gap-4 group hover:bg-gray-100 p-2 sm:p-3 rounded-lg transition duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-rekora-dark-blue rounded-full flex items-center justify-center shadow-md group-hover:bg-teal-700 transition-colors">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  {" "}
                  <p className="text-xs sm:text-sm font-semibold text-gray-600">
                    Telephone
                  </p>
                  <span className="text-lg sm:text-xl font-medium text-gray-800 group-hover:text-teal-600 transition-colors truncate">
                    {" "}
                    +234 802 564 4212
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/2348182657665"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 group hover:bg-gray-100 p-2 sm:p-3 rounded-lg transition duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-rekora-dark-blue rounded-full flex items-center justify-center shadow-md group-hover:bg-teal-700 transition-colors">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-gray-600">
                    WhatsApp
                  </p>
                  <span className="text-lg sm:text-xl font-medium text-gray-800 group-hover:text-teal-600 transition-colors truncate">
                    +234 818 265 7665
                  </span>
                </div>
              </a>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                {[
                  {
                    label: "General Inquiries",
                    email: "hello@rekorainitiative.com",
                  },
                  {
                    label: "Partnerships",
                    email: "partnerships@rekorainitiative.com",
                  },
                  {
                    label: "Scholarships",
                    email: "scholarships@rekorainitiative.com",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`mailto:${item.email}`}
                    className="flex items-center gap-3 sm:gap-4 group hover:bg-gray-100 p-2 sm:p-3 rounded-lg transition duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-rekora-dark-blue rounded-full flex items-center justify-center shadow-md group-hover:bg-teal-700 transition-colors">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-gray-600">
                        {item.label}
                      </p>
                      <span className="text-lg sm:text-xl font-medium text-gray-800 group-hover:text-teal-600 transition-colors truncate">
                        {item.email}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center bg-gray-100"
            data-aos="fade-left"
          >
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connect With Us!
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
              Follow our journey and engage with the Rekora Initiative community
              on social media.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link
                to="https://twitter.com/rekorainitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer shadow-md"
                aria-label="Follow Rekora Initiative on X (Twitter)"
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                to="https://instagram.com/rekorainitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer shadow-md"
                aria-label="Follow Rekora Initiative on Instagram"
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              <Link
                to="https://facebook.com/rekorainitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer shadow-md"
                aria-label="Follow Rekora Initiative on Facebook"
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              <Link
                to="https://youtube.com/rekorainitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer shadow-md"
                aria-label="Subscribe to Rekora Initiative on YouTube"
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}