import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";

const FetchAndDisplayData = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      const url = "https://fakestoreapi.com/products";
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  if (loading) {
    return (
      <ContentWrapper>
        <BackButton />
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl"
              ></div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    );
  }

  if (error) {
    return (
      <ContentWrapper>
        <BackButton />
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <div className="text-red-500 dark:text-red-400 p-4 border border-red-300 dark:border-red-700 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="font-bold">Error loading products:</p>
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Retry
            </button>
          </div>
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Fetch and display product data from an API endpoint. This component
        demonstrates:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Data fetching with useEffect</li>
          <li>Loading state management</li>
          <li>Error handling</li>
          <li>Responsive grid layout</li>
        </ul>
      </TaskOverview>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        {productsData.length > 0 ? (
          productsData.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center p-4 rounded-2xl bg-gray-100 dark:bg-gray-700 hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-48 h-48 object-contain mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-medium text-center text-gray-800 dark:text-gray-200 line-clamp-2 mb-2">
                {product.title}
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mb-2">
                {product.category}
              </span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Rating: {product.rating?.rate || "N/A"} (
                {product.rating?.count || 0})
              </span>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
            <p className="text-xl">No products found</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Refresh Data
            </button>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default FetchAndDisplayData;
