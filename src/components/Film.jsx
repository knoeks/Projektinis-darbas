import oval from "../assets/oval.svg";
import Bookmark from "./Bookmark";
import Category from "./Category";
import DeleteButton from "./DeleteButton";
import PlayButton from "./PlayButton";

function Film({ film }) {
  const { title, year, category, rating, thumbnail,id } = film;

  let str = "";

  if (thumbnail.regular.large.startsWith("data:image")) {
    str = thumbnail.regular.large;
  } else {
    str = "src/" + thumbnail.regular.large.slice(2);
  }

  return (
    <div className="film-card">
      <div className="film-container">
        <Bookmark film={film}/>
        { location.pathname === "/admin"
                  ? <DeleteButton film={film}/>
                  : "" }
        <img className="film-thumbnail" src={str} alt={title} />
        <PlayButton/>
      </div>
      <div className="card-description-top">
        <p>{year}</p>
        <img className="block" src={oval} alt="oval separator" />
        <Category category={category}/>
        <img className="block" src={oval} alt="oval separator" />
        <p>{rating}</p>
      </div>
      <p className="card-description-bottom">{title}</p>
    </div>
  );
}

export default Film;
