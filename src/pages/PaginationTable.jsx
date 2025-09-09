import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import OutputWrapper from "../components/OutputWrapper";
import Title from "../components/Title";
const PaginationTable = () => {
  const [productsData, setProductsData] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);

  const noOfRows = 5;
  const startIndex = currentStep * noOfRows;
  const lastIndex = noOfRows + startIndex;
  const displayRows = productsData.slice(startIndex, lastIndex);

  const totalPages = productsData.length / noOfRows;
  useEffect(() => {
    const fetchProducts = async () => {
      let url = "https://fakestoreapi.com/products";
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        In this task, you'll implement Create a Pagination Table.
      </TaskOverview>
      <div className="max-w-4xl w-full bg-gray-900/70 backdrop-blur-md border border-gray-700 shadow-lg rounded-xl p-6">
        <Title className="text-white">Search Filter Input</Title>

        <form className="flex gap-2 mb-6" action="#">
          <input
            // value={inputValue}
            // onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Filter by Title"
            className="flex-1 p-2 border-2 border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-800 text-white"
          />
        </form>

        <table className="min-w-full divide-y divide-gray-700 text-white">
          <thead className="bg-gray-800">
            <tr>
              {["ID", "Title", "Price", "Category"].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {displayRows?.map((product) => (
              <tr
                key={product?.id}
                className="hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {product?.id}
                </td>
                <td className="px-6 py-4 text-sm line-clamp-1">
                  {product?.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  ${product?.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm line-clamp-1 capitalize">
                  {product?.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            className={`px-4 py-2 rounded-xl text-white font-medium transition ${
              currentStep <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-700"
            }`}
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep <= 0}
          >
            Prev
          </button>

          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {currentStep + 1} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 rounded-xl text-white font-medium transition ${
              currentStep >= totalPages - 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-700"
            }`}
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={currentStep >= totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PaginationTable;
