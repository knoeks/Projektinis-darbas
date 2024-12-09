import { useParams } from "react-router";
import Film from "./Film";
import { v4 as uuidv4 } from "uuid";

function Films({ category, allFilms, setUpdate }) {
  let newFilteredFilms = allFilms.filter((film) =>
    category ? film.category === category : true
  );

  return (
    <div className="films-row">
      {newFilteredFilms.map((film) => {
        return <Film key={uuidv4()} film={film} setUpdate={setUpdate}/>;
      })}
    </div>
  );
}

export default Films;
