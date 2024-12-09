import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import FilmList from "./FilmList";


function MoviePage({ allFilms, setUpdate }){
    return (
        <>
        <Navbar />
        <SearchBar />
        <FilmList />
        </>
    )
}

export default MoviePage;