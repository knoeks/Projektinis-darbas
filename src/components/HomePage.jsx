import FilmList from "./FilmList";
import Trending from "./Trending";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

function HomePage() {
  const location = useLocation();
  return (
    <>
      <SearchBar />
      {!location.search && (
        <div>
          <Trending />
          <h1>RECCOMENDED FOR YOU</h1>
        </div>
      )}
      <FilmList category={""} />
    </>
  );
}

export default HomePage;
