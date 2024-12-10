import FilmList from "./FilmList";
import Trending from "./Trending";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function HomePage(){
    const location = useLocation(); 
    return (
        <>
        <SearchBar />
        {!location.search && <Trending />}
        <FilmList category={""}/>
        </>
    )
}

export default HomePage;