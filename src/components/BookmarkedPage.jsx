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
          <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">Movies</h1>
          <FilmList category={"Movie"} />
          <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">TV Series</h1>
          <FilmList category={"TV Series"} />
        </div>
      )}
    </div>
  );
}

export default BookmarkedPage;
