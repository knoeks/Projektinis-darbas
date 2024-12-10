import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function MoviePage() {
  const location = useLocation();
  return (
    <>
      <SearchBar />
      {!location.search && (
        <div>
          <h1>MOVIES</h1>
          <FilmList category={"Movie"} />
        </div>
      )}
    </>
  );
}

export default MoviePage;
