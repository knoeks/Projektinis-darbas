import { useParams } from "react-router";
import Film from "./Film";
import { v4 as uuidv4 } from "uuid";

function Films({ category, allFilms }) {
  let newFilteredFilms = allFilms.filter((film) =>
    category ? film.category === category : true
  );

  const { postID } = useParams();

  console.log(postID);
  
  return (
    <div className="films-row justify-items-center">
      {newFilteredFilms.map((film) => {
        return <Film key={uuidv4()} film={film} />;
      })}
    </div>
  );
}

export default Films;
