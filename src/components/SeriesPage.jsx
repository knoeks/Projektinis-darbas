import FilmList from "./FilmList";
import SearchBar from "./SearchBar";

function SeriesPage() {
  return (
    <>
      <SearchBar />
      <div>
        <h1>TV SERIES</h1>
        <FilmList category={"TV Series"} />
      </div>
    </>
  );
}

export default SeriesPage;
