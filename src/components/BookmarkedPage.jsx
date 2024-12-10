import FilmList from "./FilmList";
import SearchBar from "./SearchBar";

function BookmarkedPage() {
  
  return (
    <div>
      <SearchBar />
      <FilmList category={"Movie"}/>
      {!location.search && <h1>TV SERIES</h1>}
      <FilmList category={"TV Series"}/>
    </div>
  )
}

export default BookmarkedPage;