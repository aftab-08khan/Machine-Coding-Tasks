import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Heading from "../components/Heading";

const SearchWithDebounce = () => {
  const [inputValue, setInputValue] = useState("");

  const [userData, setUserData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  let timerRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setUserData(data.slice(0, 100));
        setOriginalData(data.slice(0, 100));
      } catch (error) {
        console.log("Error :", error);
      }
    };
    fetchData();
  }, []);

  const filterSearch = (searchTerm) => {
    const filteredData = originalData?.filter((item) => {
      return item?.title.toLowerCase().includes(searchTerm);
    });
    setUserData(filteredData);
  };
  const handleInputChange = (e) => {
    const searchTerm = e.toLowerCase().trim();
    setInputValue(e);

    if (timerRef.current) clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      filterSearch(searchTerm);
    }, 1000);
  };

  return (
    <div>
      <ContentWrapper>
        <BackButton>Back</BackButton>
        <TaskOverview>Real-time search with debouncing</TaskOverview>
        <Heading>Real-time search with debouncing</Heading>
        <div className="max-w-4xl w-full  bg-white shadow-lg rounded-lg p-6">
          <form>
            <input
              onChange={(e) => handleInputChange(e.target.value)}
              value={inputValue}
              className="w-full p-2 border-2 border-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Filter Search with Debounce"
              type="text"
            />
          </form>

          <table className="min-w-full divide-y border-collapse divide-gray-200 mt-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  completed
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {userData?.map((item, i) => {
                return (
                  <tr key={item?.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item?.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 line-clamp-1">
                      {item?.title}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item?.completed
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item?.completed ? "Done" : "Not Done"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SearchWithDebounce;
