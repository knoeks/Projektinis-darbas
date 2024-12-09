import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import FilmList from "./FilmList";
import Trending from "./Trending";

function HomePage({ allFilms, setUpdate }){
    
    return (
        <>
        <Navbar />
        <SearchBar />
        <Trending />
        <FilmList />
        </>
    )
}

export default HomePage;