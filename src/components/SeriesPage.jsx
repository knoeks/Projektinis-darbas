import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function SeriesPage() {
  const location = useLocation();
  return (
    <>
      <SearchBar />
      {!location.search && <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">TV Series</h1>}
      <FilmList category={"TV Series"} />
    </>
  );
}

export default SeriesPage;
