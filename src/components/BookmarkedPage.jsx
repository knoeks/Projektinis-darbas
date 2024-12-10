import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function BookmarkedPage() {
  const location = useLocation();
  return (
    <div>
      <SearchBar />
      {location.search ? (
        <FilmList category={""} isBookmarked={true} />
      ) : (
        <div>
          <h1>MOVIES</h1>
          <FilmList category={"Movie"} isBookmarked={true} />
          <h1>TV SERIES</h1>
          <FilmList category={"TV Series"} isBookmarked={true} />
        </div>
      )}
    </div>
  );
}

export default BookmarkedPage;
