import { filterItems } from "../helpers/searchBar";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import search from "../assets/icon-search.svg";

function SearchBar({ itemArray, onFilter }) {
  const [searchResults, setSearchResults] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemArray);
  const location = useLocation();

  useEffect(() => {
    if (searchResults.trim() === "") {
      setFilteredItems(itemArray);
      onFilter(itemArray);
    }
  }, [itemArray, onFilter, searchResults]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const filtered =
      value.trim() === "" ? itemArray : filterItems(value, itemArray);

    setSearchResults(value);
    setFilteredItems(filtered);

    onFilter(filtered);
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
      {searchResults === "" ? (
        ""
      ) : filteredItems.length === 0 ? (
        <h2>Found no results for {"'" + searchResults + "'"}</h2>
      ) : (
        <h2>
          Found {filteredItems.length}{" "}
          {filterItems.length === 1 ? "result" : "results"}{" for "}
          {"'" + searchResults + "'"}
        </h2>
      )}
    </div>
  );
}

export default SearchBar;
