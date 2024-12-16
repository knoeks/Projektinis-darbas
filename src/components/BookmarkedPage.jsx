import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function BookmarkedPage() {
  const location = useLocation();
  return (
    <div>
      <SearchBar />
      {location.search ? (
        <FilmList category={""} />
      ) : (
        <div>
          <h1 className="trending--heading--text">Movies</h1>
          <FilmList category={"Movie"} />
          <h1 className="trending--heading--text">TV Series</h1>
          <FilmList category={"TV Series"} />
        </div>
      )}
    </div>
  );
}

export default BookmarkedPage;
