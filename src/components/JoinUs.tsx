import {
  ArrowRight,
  UserPlus,
  Banknote,
  Handshake,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const changeOptions = [
  {
    title: "Sponsor A Child",
    description:
      "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.",
    icon: UserPlus,
    buttonText: "Get in Touch",
    link: "/donate",
  },
  {
    title: "Donate to Us",
    description:
      "Support us in buying neuroscience kits and expanding to more schools. Each donation supports us in reaching our mission.",
    icon: Banknote,
    buttonText: "Donate Now",
    link: "/donate",
  },
  {
    title: "Volunteer With Us",
    description:
      "Apply to become a volunteer for our school outreaches, workshop facilitator, mentor, or content creator. ",
    icon: Handshake,
    buttonText: "Take Action",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfVi5TbFbmrkYW7UWKX3Odo3BWSdW4u-Zu8LfzCzucDzQoCPw/viewform",
  },
  {
    title: "Partner With Us",
    description:
      "Partner with us to create sustainable change. Together, we can amplify our impact and empower more children to reach their full potential.",
    icon: Building,
    buttonText: "Get In Touch",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScGm_DBZBju24sEgyKKrp_69nsjrRehobVGaLKSmY0NBSLMNQ/viewform?usp=dialog",
  },
];

export default function JoinUs() {
  const rekoraDarkBlueHex = "#1D3050";
  const rekoraLightBlueHex = "#93BDF9";

  return (
    <section
      id="join-us"
      className={`px-4 py-16 md:py-28 bg-gradient-to-br from-[${rekoraDarkBlueHex}] to-[#121E32] text-white`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 md:mb-20"> 
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-6 leading-tight font-heading">

            Get <span className="text-blue-100">Involved</span>

          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl font-body">
            The impactful ways you can get involved and help shape brighter futures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {changeOptions.map((option, index) => (
            <Card
              key={index}
              className={`group relative flex flex-col h-full rounded-xl border-2 border-[${rekoraDarkBlueHex}] bg-white/5 shadow-xl
                         transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.03] hover:border-[${rekoraLightBlueHex}]`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-start mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg
                               bg-blue-100 text-rekora-dark-blue
                               transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                  >
                    <option.icon className="w-8 h-8 text-[${rekoraLightBlueHex}]" />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold text-[${rekoraLightBlueHex}] mb-3 text-left`}>
                  {option.title}
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed text-base text-left flex-grow">
                  {option.description}
                </p>
                {option.link.startsWith("/") ? (
                  <NavLink to={option.link}>
                    <Button
                      className={`mt-auto px-8 py-3 rounded-full text-white font-semibold transition-all duration-300
                                 bg-opacity-90 bg:shadow-lg
                                 self-start flex items-center justify-center group/button`}
                    >
                      {option.buttonText}{" "}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Button>
                  </NavLink>
                ) : (
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`mt-auto px-8 py-3 rounded-full text-white font-semibold transition-all duration-300
                                 bg-opacity-90 bg:shadow-lg
                                 self-start flex items-center justify-center group/button`}
                    >
                      {option.buttonText}{" "}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}