import { useEffect, useState } from "react";
import Films from "./components/Films";
import { getAll } from "./helpers/get";

function App() {
  const [allFilms, setAllFilms] = useState([]);
  //const [filteredFilms, setFilteredFilms] = useState({});
  const [category, setCategory] = useState("Movies");
  const [error, setError] = useState("");
  
  const fetchData = async () => {
    try {
      const data = await getAll();
      setAllFilms(data);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(allFilms);
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <Films category={category} allFilms={allFilms} />
      )}
    </>
  );
}

export default App;
