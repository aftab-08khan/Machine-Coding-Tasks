import React from "react";
import { Link } from "react-router-dom";
import Particles from "../components/Particles";

const PageNotFound = () => {
  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Particles
            particleColors={["#6366f1", "#8b5cf6", "#ec4899"]}
            particleCount={100}
            particleSpread={6}
            speed={0.2}
            particleBaseSize={120}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            {/* Animated 404 number */}
            <div className="relative mb-8">
              <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 opacity-90">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-ping absolute h-32 w-32 rounded-full bg-purple-400 opacity-20"></div>
              </div>
            </div>

            {/* Message */}
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into
              the digital void.
            </p>

            {/* Navigation options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium 
                         hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 
                         transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Return to Dashboard
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg font-medium
                         hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
