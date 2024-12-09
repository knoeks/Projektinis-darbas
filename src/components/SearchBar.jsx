import { filterItems } from "../helpers/searchBar";
import { useLocation, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import search from "../assets/icon-search.svg";

function SearchBar({ itemArray, onFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get("search") || "";

  const [searchResults, setSearchResults] = useState(searchQuery);
  //const [filteredItems, setFilteredItems] = useState(itemArray);

  useEffect(() => {
    const filtered =
      searchResults.trim() === ""
        ? itemArray
        : filterItems(searchResults, itemArray);
    {
      //setFilteredItems(filtered);
      onFilter(filtered);
    }
  }, [itemArray, onFilter, searchResults]);

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
      <figure>
        <img src={search} alt="Search Icon" className="w-10" />
      </figure>
      <input
        className="font-outfit input-field"
        type="text"
        id="search"
        onChange={handleInputChange}
        placeholder={getPlaceholder()}
      />
      {/* {searchResults === "" ? (
        ""
      ) : filteredItems.length === 0 ? (
        <h2>Found no results for {"'" + searchResults + "'"}</h2>
      ) : (
        <h2>
          Found {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "result" : "results"} for{" "}
          {"'" + searchResults + "'"}
        </h2>
      )} */}
    </div>
  );
}

export default SearchBar;
