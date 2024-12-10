import { filterItems } from "../helpers/searchBar";
import { useLocation, useSearchParams, useOutletContext } from "react-router";
import { useState, useEffect } from "react";
import search from "../assets/icon-search.svg";

function SearchBar() {
  const { allFilms, filteredFilms, setFilteredFilms } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get("search") || "";

  const [searchResults, setSearchResults] = useState(searchQuery);

  useEffect(() => {
    const filtered =
      searchResults.trim() === ""
        ? allFilms
        : filterItems(searchResults, allFilms);
    {
      setFilteredFilms(filtered);
    }
  }, [allFilms, setFilteredFilms, searchResults]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchResults(value);
    setSearchParams(value ? { search: value } : {});
  };

  const getPlaceholder = () => {
    switch (location.pathname) {
      case "/movies":
        return "Search for movies";
      case "/series":
        return "Search for TV series";
      case "/bookmarked":
        return "Search for bookmarked shows";
      default:
        return "Search for movies or TV series";
    }
  };

  return (
    <div>
      <div className="search-container">
        <img src={search} alt="Search Icon" className="search-icon" />
        <input
          className="font-outfit search-bar"
          type="text"
          id="search"
          onChange={handleInputChange}
          placeholder={getPlaceholder()}
        />
      </div>
      {searchResults === "" ? (
        ""
      ) : filteredFilms.length === 0 ? (
        <h2>Found no results for {"'" + searchResults + "'"}</h2>
      ) : (
        <h2>
          Found {filteredFilms.length}{" "}
          {filteredFilms.length === 1 ? "result" : "results"} for{" "}
          {"'" + searchResults + "'"}
        </h2>
      )}
    </div>
  );
}

export default SearchBar;
