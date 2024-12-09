
import Trending from "./components/Trending.jsx"
import { useEffect, useState } from "react";
import Films from "./components/Films";
import { getAll } from "./helpers/get";
import SearchBar from "./components/SearchBar";

function App() {
  const [allFilms, setAllFilms] = useState([]);
  const [update, setUpdate] = useState(0);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getAll();
      setAllFilms(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      <SearchBar itemArray={allFilms} onFilter={setFilteredFilms}/>
      <Trending setUpdate={setUpdate}/>
      {error ? (
        <p>{error}</p>
      ) : (
        
        <Films category={category} filteredFilms={filteredFilms} setUpdate={setUpdate} />
      )}
    </>
  );

}

export default App;
