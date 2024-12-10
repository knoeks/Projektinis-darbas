import { useOutletContext } from "react-router";
import Film from "./Film";
import { v4 as uuidv4 } from "uuid";

function FilmList({ category }) {
  const { filteredFilms } = useOutletContext();
  let newFilteredFilms = filteredFilms.filter((film) =>
    category ? film.category === category : true
  );

  return (
    <div className="films-row">
      {newFilteredFilms.map((film) => {
        return <Film key={uuidv4()} film={film} />;
      })}
    </div>
  );
}

export default FilmList;
