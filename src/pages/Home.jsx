import React, { useState, useEffect } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";

const Home = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter data based on search term and difficulty
  useEffect(() => {
    if (data) {
      let filtered = data.filter((page) => {
        const matchesSearch = page.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesDifficulty =
          difficultyFilter === "all" || page.difficulty === difficultyFilter;
        return matchesSearch && matchesDifficulty;
      });
      setFilteredData(filtered);
    }
  }, [searchTerm, difficultyFilter, data]);

  // Count tasks by difficulty
  const countByDifficulty = {
    all: data?.length || 0,
    easy: data?.filter((page) => page.difficulty === "easy").length || 0,
    medium: data?.filter((page) => page.difficulty === "medium").length || 0,
    hard: data?.filter((page) => page.difficulty === "hard").length || 0,
  };

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/10 text-green-300";
      case "medium":
        return "bg-yellow-500/10 text-yellow-300";
      case "hard":
        return "bg-red-500/10 text-red-300";
      default:
        return "bg-gray-500/10 text-gray-300";
    }
  };

  // Format difficulty text
  const formatDifficulty = (difficulty) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        {/* Enhanced Particles Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Particles
            particleColors={["#6366f1", "#8b5cf6", "#ec4899"]}
            particleCount={150}
            particleSpread={8}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Main content */}
        <ContentWrapper>
          <div className="w-full mx-auto p-12 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 pb-4">
                Machine Coding Tasks Dashboard
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A curated collection of frontend challenges to sharpen your
                skills for technical interviews
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row w-ul gap-4 justify-between items-center mb-8 p-4 bg-black/30 rounded-xl border border-white/10">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for challenges..."
                    className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-end  md:w-1/2 w-full ">
                <button
                  onClick={() => setDifficultyFilter("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    difficultyFilter === "all"
                      ? "bg-indigo-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  All ({countByDifficulty.all})
                </button>
                <button
                  onClick={() => setDifficultyFilter("easy")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    difficultyFilter === "easy"
                      ? "bg-green-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  Easy ({countByDifficulty.easy})
                </button>
                <button
                  onClick={() => setDifficultyFilter("medium")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    difficultyFilter === "medium"
                      ? "bg-yellow-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  Medium ({countByDifficulty.medium})
                </button>
                <button
                  onClick={() => setDifficultyFilter("hard")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    difficultyFilter === "hard"
                      ? "bg-red-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  Hard ({countByDifficulty.hard})
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">
                Showing {filteredData?.length} of {data?.length} challenges
              </p>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl lg:grid-cols-3 gap-6 w-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-48 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 animate-pulse"
                  ></div>
                ))}
              </div>
            ) : (
              <>
                {filteredData && filteredData.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map((page) => (
                      <Link
                        to={page.link}
                        key={page.name}
                        className="group block rounded-2xl p-6 text-lg font-semibold text-gray-200
                                 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-lg 
                                 border border-white/10 shadow-xl hover:shadow-2xl
                                 hover:scale-[1.02] transition-all duration-300
                                 hover:border-indigo-500/30 relative overflow-hidden"
                      >
                        {/* Subtle gradient accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(
                                page.difficulty
                              )}`}
                            >
                              {formatDifficulty(page.difficulty)}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 group-hover:text-indigo-400 transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors capitalize">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-400 font-normal line-clamp-3">
                            {page.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-600 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      No challenges found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or filters
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setDifficultyFilter("all");
                      }}
                      className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Home;
