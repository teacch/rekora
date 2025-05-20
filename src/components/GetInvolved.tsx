
import React from "react";
import { Users, BadgeDollarSign, HandHeart } from "lucide-react";
import { Button } from "./ui/button";

const paths = [
  {
    icon: <Users className="text-teal-500" size={36} />,
    title: "Volunteer",
    desc: "Become a mentor, outreach leader, or workshop support.",
    btn: { text: "Apply Now", color: "bg-teal-500 hover:bg-teal-600", emoji: "🙋‍♂️" },
  },
  {
    icon: <BadgeDollarSign className="text-orange-400" size={36} />,
    title: "Donate",
    desc: "$25 = 1 neuroscience toolkit<br/>$100 = Sponsor a full classroom",
    btn: { text: "Donate & See Impact Tiers", color: "bg-yellow-400 hover:bg-yellow-500", emoji: "💸" },
  },
  {
    icon: <HandHeart className="text-pink-500" size={36} />,
    title: " Partner with Us",
    desc: "We welcome schools, STEM orgs, and labs.",
    btn: { text: "Contact Our Team", color: "bg-pink-400 hover:bg-pink-500", emoji: "🤝" },
  },
];

const GetInvolved = () => (
  <section className="max-w-6xl mx-auto py-12 px-3 my-12 rounded-3xl bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50 shadow-lg">
    <h2 className="text-3xl md:text-4xl font-extrabold font-playfair text-center mb-8">
      🙌 Get Involved With Rekora
    </h2>
    <div className="grid md:grid-cols-3 gap-7">
      {paths.map((path, i) => (
        <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow p-7 border hover:scale-105 hover:shadow-pink-200 transition-transform duration-200 text-center">
          <span className="mb-2 animate-bounce">{path.icon}</span>
          <span className="text-xl font-bold text-[#333] mb-2">{path.title}</span>
          <span
            className="text-md text-gray-600 mb-5"
            dangerouslySetInnerHTML={{ __html: path.desc }}
          />
          <Button className={`${path.btn.color} text-white font-bold rounded-full px-6 py-2 shadow text-lg animate-bounce`}>
            <span role="img" aria-label="action">{path.btn.emoji}</span> {path.btn.text}
          </Button>
        </div>
      ))}
    </div>
  </section>
);

export default GetInvolved;

