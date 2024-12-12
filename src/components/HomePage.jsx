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
          <h1 className="trending--heading--text p-4 md:p-8 xl:px-9">Reccomended for you</h1>
        </div>
      )}
      <FilmList category={""} />
    </>
  );
}

export default HomePage;
