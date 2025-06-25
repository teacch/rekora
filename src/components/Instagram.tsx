import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Link } from "react-router-dom";
import Video1 from "../../public/founder_video.mp4";
import Video2 from "../../public/Day 1.mp4";
import Video3 from "../../public/Day 4.mp4";
import Video4 from "../../public/Day 3.mp4";
import Video5 from "../../public/Day 2.mp4";
import Video6 from "../../public/Day 5.mp4";

export const Instagram = () => {
  const projects = [
    { id: 1, image: Video1, type: "video" },
    { id: 2, image: Video2, type: "video" },
    { id: 3, image: Video3, type: "video" },
    { id: 4, image: Video4, type: "video" },
    { id: 5, image: Video5, type: "video" },
    { id: 6, image: Video6, type: "video" },
  ];

  const [mutedStates, setMutedStates] = useState(
    projects.reduce((acc, p) => ({ ...acc, [p.id]: true }), {})
  );

  const toggleMute = (id: number) => {
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full bg-rekora-light-blue py-16 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl font-heading">
          Our Events
        </h2>
        <div className="mb-6 h-1 w-16 bg-rekora-dark-blue"></div>

        <p className="text-lg text-black mb-6">
          We have a host of events at Rekora, from school outreaches to
          bootcamps.
        </p>

        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 gap-6 md:gap-8 mt-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className={`
                    group relative w-[220px] sm:w-[320px] flex-shrink-0 snap-center
                    aspect-[9/16] max-h-[420px] md:max-h-[500px] bg-gray-900 rounded-2xl shadow-xl overflow-hidden
                    flex flex-col cursor-pointer
                    transition-all duration-300 ease-in-out transform
                    hover:scale-[1.03] hover:shadow-2xl hover:shadow-zinc-500/30
                    border border-gray-800 hover:border-zinc-600
                  `}
                >
                  <div className="relative w-full h-full">
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted={mutedStates[project.id]}
                      playsInline
                      controls={false}
                      className="w-full h-full object-cover"
                      poster={`${project.image.replace(/\.mp4$/, ".jpg")}`}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute(project.id);
                      }}
                      className="absolute bottom-3 right-3 bg-black/60 rounded-full p-2 flex items-center justify-center z-10 hover:bg-black/80 transition"
                      tabIndex={-1}
                    >
                      {mutedStates[project.id] ? <MuteIcon /> : <UnmuteIcon />}
                    </button>
                    <span className="absolute bottom-3 left-3 bg-black/60 rounded-full p-2 flex items-center justify-center z-10">
                      <PlayIcon />
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-[95vw] p-0 bg-gray-950 border-gray-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  <video
                    src={project.image}
                    controls
                    autoPlay
                    muted={mutedStates[project.id]}
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster={`${project.image.replace(/\.mp4$/, ".jpg")}`}
                  />
                  <button
                    type="button"
                    onClick={() => toggleMute(project.id)}
                    className="absolute bottom-4 right-4 bg-black/60 rounded-full p-3 flex items-center justify-center z-10 hover:bg-black/80 transition"
                  >
                    {mutedStates[project.id] ? <MuteIcon /> : <UnmuteIcon />}
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Adjustments start here */}
        <div className="text-center mt-8 md:mt-16"> {/* Changed mt-x to mt-8 */}
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
                flex items-center justify-center // Added flexbox for centering
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

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M7 6v12l10-6z" />
  </svg>
);

const MuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M9 9v6h4l5 5V4l-5 5H9zm-7 3a9 9 0 0 1 18 0 9 9 0 0 1-18 0z" />
  </svg>
);

const UnmuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M9 9v6h4l5 5V4l-5 5H9zm-7 3a9 9 0 0 1 18 0 9 9 0 0 1-18 0z" />
    <line x1="1" y1="1" x2="23" y2="23" stroke="red" strokeWidth="2" />
  </svg>
);