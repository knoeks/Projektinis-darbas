import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import SeriesPage from "./components/SeriesPage";
import BookmarkedPage from "./components/BookmarkedPage";
import { Route, Routes, Outlet } from "react-router";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { getAll } from "./helpers/get";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

function App() {
  const [error, setError] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

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
  }, [allFilms]);

  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="login" />
        <Route
          path="/main"
          element={
            <LayoutContext
              context={{
                allFilms,
                filteredFilms,
                setFilteredFilms,
                category,
                setCategory,
              }}
            />
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="bookmarked" element={<BookmarkedPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {error && <p>{error}</p>}
    </>
  );
}

function LayoutContext({ context }) {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <Outlet context={context} />
    </div>
  );
}

export default App;
