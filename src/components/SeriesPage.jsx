import FilmList from "./FilmList";
import SearchBar from "./SearchBar";

function SeriesPage(){
    return (
        <>
        <SearchBar />
        <FilmList category={"TV Series"}/>
        </>
    )
}

export default SeriesPage;

//function SeriesPage({ allFilms, setUpdate }){