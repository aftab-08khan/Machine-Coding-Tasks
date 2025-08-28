import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";

const Home = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Particles in background */}
        <div className="absolute inset-0 z-10">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={150}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Main content */}
        <ContentWrapper>
          <div className="max-w-5xl mx-auto py-8 text-center relative z-10">
            <h1 className="text-4xl font-bold tracking-wide text-gray-400">
              Welcome to the Machine Coding Tasks Dashboard
            </h1>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.map((page) => (
                <Link
                  to={page.link}
                  key={page.id}
                  className="block capitalize rounded-xl p-6 text-lg font-semibold text-gray-200
                             bg-black/80 backdrop-blur-lg border border-white/10 shadow-md
                             hover:bg-black/60 hover:scale-105 transition-all duration-300"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Home;
