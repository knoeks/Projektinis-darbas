import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import FilmList from "./FilmList";

function SeriesPage({ allFilms, setUpdate }){
    return (
        <>
        <Navbar />
        <SearchBar />
        <FilmList />
        </>
    )
}

export default SeriesPage;