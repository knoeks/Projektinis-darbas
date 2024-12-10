import FilmList from "./FilmList";
import SearchBar from "./SearchBar";

function MoviePage(){
    return (
        <>
        <SearchBar />
        <FilmList category={"Movie"}/>
        </>
    )
}

export default MoviePage;