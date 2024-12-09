import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import SeriesPage from "./components/SeriesPage";
import BookmarkedPage from "./components/BookmarkedPage";
import { Route, Routes } from "react-router";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { getAll } from "./helpers/get";

function App() {
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState("");
  const [allFilms, setAllFilms] = useState([]);

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
      <Routes>
        <Route path="/home" element={<HomePage setUpdate={setUpdate} allFilms={allFilms}/>} />
        <Route path="/movies" element={<MoviePage setUpdate={setUpdate} allFilms={allFilms}/>} />
        <Route path="/series" element={<SeriesPage setUpdate={setUpdate} allFilms={allFilms}/>} />
        <Route path="/bookmarked" element={<BookmarkedPage setUpdate={setUpdate} allFilms={allFilms}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {error && <p>{error}</p>}
    </>
  );
}

export default App;

//   const [filteredFilms, setFilteredFilms] = useState([]);
//   const [category, setCategory] = useState("");

//   return (
//     <>
//       <SearchBar itemArray={allFilms} onFilter={setFilteredFilms}/>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <Films category={category} filteredFilms={filteredFilms} setUpdate={setUpdate} />
//       )}
//     </>
//   );
