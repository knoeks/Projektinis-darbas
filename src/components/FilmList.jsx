import { useLocation, useOutletContext } from "react-router";
import Film from "./Film";
import { v4 as uuidv4 } from "uuid";

function FilmList({ category }) {
  const location = useLocation();
  const { filteredFilms, searchResults } = useOutletContext();

  let newFilteredFilms;

  switch (location.pathname) {
    case "/home":
      newFilteredFilms = filteredFilms.filter((film) =>
        location.search ? true : !film.isTrending
      );
      break;

    case "/movies":
      newFilteredFilms = filteredFilms.filter((film) =>
        category ? film.category === category : true
      );
      break;

    case "/series":
      newFilteredFilms = filteredFilms.filter((film) =>
        category ? film.category === category : true
      );
      break;

    case "/bookmarked":
      newFilteredFilms = filteredFilms.filter((film) => {
        if (film.isBookmarked && !location.search) {
          return film.category === category;
        } else if (film.isBookmarked && location.search) {
          return true;
        }
      });
      break;

    default:
      newFilteredFilms = filteredFilms;
      break;
  }

  return (
    <div>
      <div >
        {searchResults === "" ? (
          ""
        ) : newFilteredFilms.length === 0 ? (
          <h2 className="search-results">
            Found no results for {"'" + searchResults + "'"}
          </h2>
        ) : (
          <h2 className="search-results">
            Found {newFilteredFilms.length}{" "}
            {newFilteredFilms.length === 1 ? "result" : "results"} for{" "}
            {"'" + searchResults + "'"}
          </h2>
        )}
      </div>
      <div className="films-row">
        {newFilteredFilms.map((film) => {
          return <Film key={uuidv4()} film={film} />;
        })}
      </div>
    </div>
  );
}

export default FilmList;
