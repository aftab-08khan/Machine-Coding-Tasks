import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/BackButton";
import TaskOverview from "../components/TaskOverview";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

const AutoCompleteInputWithAPI = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    const fetchSuggestion = async () => {
      try {
        const res = await fetch(`https://api.datamuse.com/sug?s=${query}`);
        const data = await res.json();
        setSuggestions(data);
      } catch (error) {
        console.log("Error :", error);
      }
      setLoading(false);
    };
    const debounce = setTimeout(fetchSuggestion, 3000);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <ContentWrapper>
      <BackButton />
      <TaskOverview>
        Implement an autocomplete input field that fetches suggestions from an
        API and displays them in a dropdown list. Users can select a suggestion
        to auto-fill the input.
      </TaskOverview>

      <Wrapper>
        <Title>Autocomplete Input with API</Title>
        <form className="flex gap-2 mb-6" action="#">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Title"
            className="flex-1 p-2 md:p-3 border-2 border-indigo-500 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-indigo-400 
                 bg-gray-800 text-white placeholder-gray-400 
                 transition-all duration-200"
          />
        </form>

        {loading && (
          <p className="text-indigo-300 text-sm animate-pulse">Thinking...</p>
        )}

        {suggestions.length > 0 && (
          <ul
            className="border border-gray-600 rounded-lg mt-2 
                   bg-gray-800 shadow-xl divide-y divide-gray-700"
          >
            {suggestions?.map((item) => (
              <li
                key={item?.score}
                onClick={() => setQuery(item?.word)}
                className="p-2 md:p-3 hover:bg-indigo-600 hover:text-white 
                     text-gray-200 cursor-pointer transition-colors duration-200"
              >
                {item.word}
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    </ContentWrapper>
  );
};

export default AutoCompleteInputWithAPI;
