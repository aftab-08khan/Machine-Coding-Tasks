import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";

const SearchFilterInput = () => {
  const [productsData, setProductsData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "https://fakestoreapi.com/products";
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProductsData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.toLowerCase().trim();
    setInputValue(e);

    const filter = productsData.filter((product) =>
      product?.title?.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filter);
  };

  if (isLoading) {
    return (
      <ContentWrapper>
        <BackButton />
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="animate-pulse flex flex-col items-center py-8">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </ContentWrapper>
    );
  }

  if (error) {
    return (
      <ContentWrapper>
        <BackButton />
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6">
          <div className="text-red-500 p-4 border border-red-300 rounded-lg bg-red-50">
            <p className="font-bold">Error loading products:</p>
            <p>{error}</p>
          </div>
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        In this task, you'll implement a dynamic search filter for a product
        list. The component will:
        <br />- Fetch and display products from an external API
        <br />- Provide real-time filtering as users type in the search field
      </TaskOverview>

      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <Title>Search Filter Input</Title>

        <form className="flex gap-2 mb-6" action="#">
          <input
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Filter by Title"
            name="text"
            type="text"
            className="flex-1 p-2 border-2 border-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </form>

        {filteredData?.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {inputValue
              ? "No products match your search criteria"
              : "No products available"}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData?.map((product) => (
                  <tr key={product?.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product?.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 line-clamp-1">
                      {product?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${product?.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 line-clamp-1 capitalize">
                      {product?.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default SearchFilterInput;
