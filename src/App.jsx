import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const movies = [
    { id: 1, name: "Inception" },
    { id: 2, name: "The Matrix" },
    { id: 3, name: "Interstellar" },
    { id: 4, name: "The Dark Knight" },
    { id: 5, name: "Pulp Fiction" },
    { id: 6, name: "Fight Club" },
    { id: 7, name: "Forrest Gump" },
    { id: 8, name: "The Shawshank Redemption" },
    { id: 9, name: "The Godfather" },
    { id: 10, name: "The Lord of the Rings: The Fellowship of the Ring" },
  ];
  const [filteredItems, setFilteredItems] = useState([movies]);
  return (
    <>
      <div>
        <h1 className="text-3xl font-outfit text-heading-xs">test</h1>
        <SearchBar itemArray={movies} onFilter={setFilteredItems} />
        <ul>
          {filteredItems.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
