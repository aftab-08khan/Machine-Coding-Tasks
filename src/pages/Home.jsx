import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import { PagesData } from "../data/PagesData";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = ({ data }) => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <div className="max-w-5xl mx-auto py-4 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-indigo-900">
            Welcome to the Machine Coding Tasks Dashboard
          </h1>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((page) => (
              <Link
                to={page.link}
                key={page.id}
                className="block capitalize bg-gray-200 shadow-md hover:shadow-lg transition-all rounded-lg p-4 py-5 text-xl font-semibold text-indigo-900 hover:bg-indigo-200"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Home;
