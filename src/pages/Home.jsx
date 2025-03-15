import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import { PagesData } from "../data/PagesData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ContentWrapper>
      <div className="max-w-4xl mx-auto py-4 text-center">
        <h1 className="text-4xl font-bold tracking-wide text-indigo-900 dark:text-indigo-300">
          Welcome to the Machine Coding Tasks Dashboard
        </h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PagesData?.map((page) => (
            <Link
              to={page.link}
              key={page.id}
              className="block bg-gray-200 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all rounded-lg p-6 text-xl font-semibold text-indigo-900 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-700"
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
