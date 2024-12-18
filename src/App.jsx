
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import SeriesPage from "./components/SeriesPage";
import BookmarkedPage from "./components/BookmarkedPage";
import { Route, Routes, Outlet, useSearchParams } from "react-router";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { getAll } from "./helpers/get";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";


function App() {
  const [error, setError] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [searchResults, setSearchResults] = useState(searchQuery);

  const fetchData = async () => {
    try {
      const data = await getAll();
      setAllFilms(data);
    } catch (error) {
      setError(error.message);
    }
  };

console.log(role)

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="login"  element={<Login/>}/> 
        <Route
          path="/"
          element={
            <LayoutContext
              context={{
                allFilms,
                setAllFilms,
                filteredFilms,
                setFilteredFilms,
                setSearchParams,
                searchResults,
                setSearchResults,
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
      <Navbar />
      <Outlet context={context} />
      
    </div>
  );
}

export default App;
