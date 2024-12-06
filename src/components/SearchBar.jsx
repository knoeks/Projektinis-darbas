import { useState } from "react";
import { filterItems } from "../helpers/searchBar";
import { useLocation } from "react-router";

function SearchBar({ itemArray }) {
  const [filteredItems, setFilteredItems] = useState({ itemArray });
  const location = useLocation();

  const handleInputChange = (e) => {
    const searchRobots = filterItems(e.target.value, itemArray);

    setFilteredItems(searchRobots);
  };

  const getPlaceholder = () => {
    switch (location.pathname) {
      case "/movies":
        return "Search for movies";
      case "/series":
        return "Search for TV series";
      case "bookmarked":
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
        onChange={handleInputChange}
        placeholder={getPlaceholder}
      />
    </div>
  );
}

export default SearchBar;
