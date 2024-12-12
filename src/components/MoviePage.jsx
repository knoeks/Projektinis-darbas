import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function MoviePage() {
  const location = useLocation();
  return (
    <>
      <SearchBar />
      {!location.search && <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">Movies</h1>}
      <FilmList category={"Movie"} />
    </>
  );
}

export default MoviePage;
