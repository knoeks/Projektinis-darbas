import FilmList from "./FilmList";
import Trending from "./Trending";

function HomePage(){
    
    return (
        <>
        <Trending />
        <FilmList category={""}/>
        </>
    )
}

export default HomePage;