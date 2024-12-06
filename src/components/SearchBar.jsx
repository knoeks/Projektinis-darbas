import { filterItems } from "../helpers/searchBar";
import { useLocation } from "react-router";
import { useState } from "react";

function SearchBar({ itemArray, onFilter }) {
  const [searchResults, setSearchResults] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemArray);
  const location = useLocation();

  const handleInputChange = (e) => {
    const value = e.target.value;
    const filtered = filterItems(value, itemArray);

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
      <input
        className="font-outfit input-field"
        type="text"
        id="search"
        onChange={handleInputChange}
        placeholder={getPlaceholder()}
      />
      <h2>
        Found {filteredItems.length} results for {"'" + searchResults + "'"}
      </h2>
    </div>
  );
}

export default SearchBar;
