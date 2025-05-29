"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import resources from "../data/resources.json";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { EdukidsDoodles } from "./EdukidsDoodles";


export default function CourseGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showYouTube, setShowYouTube] = useState(false);
  const [showCommunities, setShowCommunities] = useState(false);
  const [showWomenFocused, setShowWomenFocused] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const categories = [
    "All",
    "Coding",
    "Data Science",
    "Robotics & AI",
    "Cybersecurity",
    "Biological Sciences",
    "Software Engineering",
  ];

  const skillLevels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;

    const matchesSkillLevel =
      selectedSkillLevel === "All" ||
      (resource.skillLevel && resource.skillLevel === selectedSkillLevel) ||
      (selectedSkillLevel === "All" && !resource.skillLevel) ||
      (selectedSkillLevel === "All" && resource.skillLevel === "All");

    const matchesSearch =
      debouncedSearchTerm.trim() === "" ||
      resource.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase()) ||
      resource.type.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      (resource.focusAreas &&
        resource.focusAreas.some((area) =>
          area.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        ));

    const matchesYouTube = !showYouTube || resource.type === "Tutorials";
    const matchesCommunities = !showCommunities || resource.isCommunity;
    const matchesWomenFocused = !showWomenFocused || resource.isWomenFocused;

    return (
      matchesCategory &&
      matchesSkillLevel &&
      matchesSearch &&
      matchesYouTube &&
      matchesCommunities &&
      matchesWomenFocused
    );
  });

  return (
    <section className="bg-rekora-dark-blue py-24"
    >
                    <EdukidsDoodles data-aos="fade-right" data-aos-duration="1000" />

      <div className="container mx-auto px-4">
        <div className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-12 text-center md:text-left" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-heading text-white mb-4">
              STEM Resources
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0 font-body">
              Your roadmap to STEM, explore, learn, and grow with these
              resources!
            </p>
          </div>

          <div
            className="flex flex-col md:flex-row md:flex-wrap gap-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col min-w-full sm:min-w-[180px] md:min-w-[220px]">
              <label
                htmlFor="category-select"
                className="text-gray-200 font-semibold mb-2 font-body"
              >
                Category
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-3 rounded-lg bg-gray-800 text-white border border-rekora-light-blue focus:border-rekora-light-blue focus:outline-none transition w-full"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col min-w-full sm:min-w-[180px] md:min-w-[220px]">
              <label
                htmlFor="skill-level-select"
                className="text-gray-200 font-semibold mb-2 font-body"
              >
                Skill Level
              </label>
              <select
                id="skill-level-select"
                value={selectedSkillLevel}
                onChange={(e) => setSelectedSkillLevel(e.target.value)}
                className="p-3 rounded-lg bg-gray-800 text-white border border-rekora-light-blue focus:border-rekora-light-blue focus:outline-none transition w-full"
              >
                {skillLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col min-w-full md:flex-grow">
              <label
                htmlFor="search-input"
                className="text-gray-200 font-semibold mb-2 font-body"
              >
                Search (Focus Area/Title)
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="e.g., Python, AI, Cybersecurity"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3 rounded-lg bg-gray-800 text-white border border-rekora-light-blue focus:border-rekora-light-blue focus:outline-none transition w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-3 sm:space-y-0 mt-4 md:mt-0">
              <label className="flex items-center space-x-2 text-gray-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showYouTube}
                  onChange={(e) => setShowYouTube(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-rekora-light-blue rounded focus:ring-rekora-light-blue"
                />
                <span>YouTube Resources</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showCommunities}
                  onChange={(e) => setShowCommunities(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-pink-500 rounded focus:ring-pink-400"
                />
                <span>Communities</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showWomenFocused}
                  onChange={(e) => setShowWomenFocused(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-pink-500 rounded focus:ring-pink-400"
                />
                <span>Women-Focused</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className={`${resource.bgColor} p-6 text-white relative h-48`}
                >
                  <div className="absolute top-4 left-4 bg-rekora-dark-blue text-white px-3 py-1 rounded-lg text-xs font-bold truncate max-w-[60%]">
                    {resource.category}
                  </div>
                  {resource.skillLevel && resource.skillLevel !== "All" && (
                    <div className="absolute top-4 right-4 bg-rekora-dark-blue text-white px-3 py-1 rounded-lg text-xs font-bold truncate">
                      {resource.skillLevel}
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 max-w-[80%]">
                    <h3 className="text-2xl font-bold mb-2 leading-tight truncate">
                      {resource.title}
                    </h3>
                    <p className="text-sm opacity-90 truncate">
                      {resource.type}
                    </p>
                  </div>
                  <div className="absolute bottom-6 right-6 w-16 h-16 bg-black/20 rounded-full"></div>
                </div>

                <div className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.838-.196-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L3.63 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>

                  {resource.focusAreas && resource.focusAreas.length > 0 && (
                    <p className="text-sm text-gray-700 mb-2">
                      <strong className="font-semibold">Focus Areas:</strong>{" "}
                      {resource.focusAreas.join(", ")}
                    </p>
                  )}

                  <h4 className="text-lg font-bold text-gray-900 mb-4 leading-tight truncate">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      {resource.url}
                    </a>
                  </h4>

                  <div className="flex items-center justify-between text-gray-600 mb-6">
                    <span className="text-xl font-bold text-gray-900">
                      {resource.cost}
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 border-2 border-rekora-dark-blue text-rekora-dark-blue hover:bg-rekora-dark-blue hover:text-white px-4 py-2 rounded-lg font-medium"
                      onClick={() => window.open(resource.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-center text-xl col-span-full" data-aos="fade-up">
              No resources found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}