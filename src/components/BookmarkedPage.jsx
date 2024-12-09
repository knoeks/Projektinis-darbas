import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import FilmList from "./FilmList";

function BookmarkedPage({ allFilms, setUpdate }) {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <FilmList category={"movie"}/>
      <FilmList category={"tv series"}/>
    </div>
  )
}

export default BookmarkedPage;