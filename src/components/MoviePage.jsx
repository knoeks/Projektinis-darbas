import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function MoviePage() {
  const location = useLocation();
  return (
    <>
      <SearchBar />
      {!location.search && <h1>MOVIES</h1>}
      <FilmList category={"Movie"} />
    </>
  );
}

export default MoviePage;
