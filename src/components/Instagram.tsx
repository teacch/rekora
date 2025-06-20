import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Link } from "react-router-dom";

import Video1 from "../../public/founder_video.mp4";
import Video2 from "../../public/Day 1.mp4";
import Video3 from "../../public/Day 4.mp4";
import Video4 from "../../public/Day 3.mp4";
import Video5 from "../../public/Day 2.mp4";
import Video6 from "../../public/Day 5.mp4";


import ImagePlaceholder from "/placeholder-photo.jpg";

export const Instagram = () => {
  const projects = [
    {
      id: 1,
      title: "The Creative BluePrint",
      category: "Videography",
      image: Video1,
      type: "video",
      description:
        "Capturing the raw emotion and energy of a memorable wedding day, crafted into a cinematic narrative.",
      views: "30.6K",
    },
    {
      id: 2,
      title: "Tedx Crawford University",
      category: "Brand Content",
      image: Video2,
      type: "video",
      description:
        "Dynamic visual assets created for a modern fashion brand, highlighting their new streetwear line.",
      views: "3.7M",
    },
    {
      id: 3,
      title: "The Game Of Money",
      category: "Photography",
      image: Video3,
      type: "video",
      description:
        "A collection of striking portraits exploring diverse personalities and expressions through light and shadow.",
      views: "28.7K",
    },
    {
      id: 4,
      title: "Wellspring College",
      category: "Videography",
      image: Video4,
      type: "video",
      description:
        "Breathtaking aerial footage capturing the majesty of mountain landscapes and an adventurous journey.",
      views: "17K",
    },
    {
      id: 5,
      title: "Wedding Reels",
      category: "Brand Content",
      image: Video5,
      type: "video",
      description:
        "An engaging video highlighting the features and user experience of a cutting-edge new tech product.",
      views: "704K",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-rekora-light-blue text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight font-heading">
            Our Events
          </h2>
          <p className="text-lg md:text-xl text-left text-black max-w-3xl font-medium font-body">
            <i>We have a host of events at Rekora, from school outreaches to bootcamps.  </i>
          </p>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 gap-6 md:gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className={`
                    group relative w-[280px] sm:w-[320px] flex-shrink-0 snap-center
                    aspect-[9/16] max-h-[500px] bg-gray-900 rounded-2xl shadow-xl overflow-hidden
                    flex flex-col cursor-pointer
                    transition-all duration-300 ease-in-out transform
                    hover:scale-[1.03] hover:shadow-2xl hover:shadow-zinc-500/30
                    border border-gray-800 hover:border-zinc-600
                  `}
                >
                  <div className="relative w-full h-full">
                    {project.type === "video" ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster={`${project.image.replace(/\.mp4$/, ".jpg")}`}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-white mb-2">
                        {project.type === "video" ? (
                          <PlayIcon className="mr-2 w-6 h-6 text-zinc-400" />
                        ) : (
                          <EyeIcon className="mr-2 w-6 h-6 text-zinc-400" />
                        )}
                        <span className="font-bold text-xl text-white">
                          {project.views}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-[95vw] p-0 bg-gray-950 border-gray-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  {project.type === "video" ? (
                    <video
                      src={project.image}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster={`${project.image.replace(/\.mp4$/, ".jpg")}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-black"
                    />
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-teal-500 mb-4">
                    {project.category}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-lg font-semibold
                                    bg-gradient-to-r from-zinc-500 to-zinc-600 text-white px-8 py-4 rounded-full
                                    shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                                    focus:outline-none focus:ring-4 focus:ring-zinc-500 focus:ring-opacity-75"
                    >
                      View Our Full Project
                      <ExternalLinkIcon className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/programs"
            className="
   inline-flex items-center font-body     
    px-8 py-4                                 
    text-base font-bold text-white            
    bg-rekora-dark-blue rounded-full border-zinc-500     
    shadow-lg hover:shadow-xl                 
    transform hover:-translate-y-1           
    transition-all duration-300 ease-in-out   
    focus:outline-none focus:ring-4 focus:ring-zinc-500 focus:ring-opacity-75 
    hover:bg-zinc-900 transition-colors        
    group                                     
  "
          >
           Join Our Programs
            <span
              className="
      bg-white text-black rounded-full p-2 ml-2 
      transition-transform duration-200 group-hover:rotate-45 
    "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const VideoCameraIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 2l4 4-4 4" />
    <path d="M3 11v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

const CameraIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const SparkleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
    <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
  </svg>
);

const FilmIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <path d="M3 7h18" />
    <path d="M3 12h18" />
    <path d="M3 17h18" />
    <path d="M7 3v18" />
    <path d="M12 3v18" />
    <path d="M17 3v18" />
  </svg>
);

const PlayIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M7 6v12l10-6z" />
  </svg>
);

const EyeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <path d="M15 3h6v6"></path>
    <path d="M10 14 21 3"></path>
  </svg>
);
