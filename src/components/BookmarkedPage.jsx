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
          <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">Movies</h1>
          <FilmList category={"Movie"} isBookmarked={true} />
          <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">TV Series</h1>
          <FilmList category={"TV Series"} isBookmarked={true} />
        </div>
      )}
    </div>
  );
}

export default BookmarkedPage;
