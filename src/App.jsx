import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import SeriesPage from "./components/SeriesPage";
import BookmarkedPage from "./components/BookmarkedPage";
import { Route, Routes, Outlet } from "react-router";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { getAll } from "./helpers/get";

function App() {
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [category, setCategory] = useState("");

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
        <Route
          path="/"
          element={
            <LayoutContext
              context={{ setUpdate, allFilms, filteredFilms, setFilteredFilms, category, setCategory }}
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
      <Outlet context={context} />
    </div>
  );
}

export default App;
