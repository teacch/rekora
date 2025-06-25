import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Opeyemi Ezekiel",
      title: "Student",
      quote:
        "I learnt about technologies that help humanity like the “CLAW”. It has helped the disabled and I learnt that it can be used to pick up things, even heavy objects.",
      rating: 5,
    },
    {
      id: 2,
      name: "Olayinka Olamide",
      title: "Student",
      quote:
        "I learnt a few things about Neuroscience. I learnt about how the brain connects to our body and gives us instructions on what to do and also how science helps to advance that.",
      rating: 5,
    },
    {
      id: 3,
      name: "Fred Ove",
      title: "School Teacher",
      quote:
        "The program has been very insightful and I’ve gained a lot even as a teacher about STEM. I’d love to attend more of it.",
      rating: 5,
    },
  ];

  return (
    <>
      <section className="py-16 px-1 sm:px-6 lg:px-8 bg-rekora-light-blue mt-16 rounded-3xl relative z-10 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-6 md:hidden">
            <p className="text-rekora-dark-blue text-sm font-medium mr-2">
              Scroll to see more
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-rekora-dark-blue animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-8 lg:grid lg:grid-cols-3 lg:gap-8 snap-x snap-mandatory">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-full snap-center
                           relative bg-rekora-dark-blue border border-rekora-dark-blue rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between" // Card width is w-full on mobile; inner padding p-6 on mobile, p-8 on sm+
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= testimonial.rating
                          ? "text-yellow-400"
                          : "text-rekora-dark-blue"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white mb-6 flex-grow">
                  <p className="text-lg leading-relaxed">{testimonial.quote}</p>
                </blockquote>

                <div className="flex items-center mt-auto">
                  <div>
                    <p className="font-semibold text-rekora-light-blue text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-rekora-light-blue">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
