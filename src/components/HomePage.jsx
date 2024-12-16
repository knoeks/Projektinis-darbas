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
        <div className="overflow-auto">
          <Trending/>
          <div className="trending-full">
          <h1 className="trending--heading--text flex-row">Reccomended for you</h1>
          </div>
        </div>
      )}
      <FilmList category={""} />
    </>
  );
}

export default HomePage;
