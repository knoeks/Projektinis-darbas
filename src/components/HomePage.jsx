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
          <Trending className="test"/>
          <div className="trending-full">
          <h1 className="trending--heading--text flex-row py-6 md:pt-[2.44rem] xl:pt-10">Reccomended for you</h1>
          </div>
        </div>
      )}
      <FilmList category={""} />
    </>
  );
}

export default HomePage;
