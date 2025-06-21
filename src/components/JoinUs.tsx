import {
  ArrowRight,
  Lightbulb,
  DollarSign,
  CheckCircle,
  Grid3X3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Link = (props: React.ComponentProps<"a">) => <a {...props} />;

const changeOptions = [
  {
    title: "Sponsor A Child",
    description:
      "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.",
    icon: Lightbulb,
    color: "bg-blue-100",
    buttonText: "Get in Touch",
    link: "https://www.instagram.com/rekorainitiative/",
  },
  {
    title: "Donate to Us",
    description:
      "Support us in buying neuroscience kits and expanding to more schools. Each donation supports (e.g., $25 = 1 student kit)",
    icon: DollarSign,
    color: "bg-green-100",
    buttonText: "Donate Now",
    link: "/donate",
  },
  {
    title: "Volunteer With Us",
    description:
      "Apply to become a volunteer for our school outreaches, workshop facilitator, mentor, or content creator. ",
    icon: CheckCircle,
    color: "bg-orange-100",
    buttonText: "Take Action",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc8QlKpNg58cf6AKiI7BS1TCwaLViaxU507jiu1cC_mE5d99g/closedform",
  },
  {
    title: "Partner With Us",
    description:
      "Partner with us to create sustainable change. Together, we can amplify our impact and empower more children to reach their full potential.",
    icon: Grid3X3,
    color: "bg-purple-100",
    buttonText: "Get In Touch",
    link: "https://wa.me/+12074495779?text=Hello%20Rekora%2C%20I%20would%20like%20to%20partner%20with%20you.",
  },
];

export default function JoinUs() {
  return (
    <section className="px-4 py-16 md:py-28 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-6 leading-tight font-heading">
            Be a Part of <span className="text-blue-100">Rekora</span>?
          </h1>
          <p className="text-lg md:text-xl text-zinc-100 max-w-2xl">
            The impactful ways you can get involved and help shape brighter
            futures.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0">
          {changeOptions.map((option, index) => (
            <Card
              key={index}
              className="group relative flex-shrink-0 w-[80vw] sm:w-auto rounded-xl bg-none border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div
                className={`absolute -top-1 -right-1 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${option.color}`}
              ></div>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-start mb-6">
                  <div
                    className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105`}
                  >
                    <option.icon className="w-8 h-8 text-rekora-dark-blue" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-left">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-base text-left flex-grow">
                  {option.description}
                </p>
                {option.link.startsWith("/") ? (
                  <Link href={option.link}>
                    <Button
                      className={`mt-auto px-6 py-3 rounded-full text-rekora-dark-blue font-semibold transition-all duration-300 ${option.color} hover:shadow-lg hover:opacity-90 self-start`}
                    >
                      {option.buttonText}{" "}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                ) : (
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`mt-auto px-6 py-3 rounded-full text-rekora-dark-blue font-semibold transition-all duration-300 ${option.color} hover:shadow-lg hover:opacity-90 self-start`}
                    >
                      {option.buttonText}{" "}
                      <ArrowRight className="ml-2 h-5 w-5" />
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
