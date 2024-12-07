import oval from "../assets/oval.svg";

import Bookmark from "./Bookmark";

function Film({ film }) {
  const { title, year, category, rating, thumbnail, isBookmarked } = film;

  let str = "src/" + thumbnail.regular.small.slice(2);
  //let str = "src/assets/thumbnails/earths-untouched/regular/small.jpg"
  console.log(str);

  return (
    <div className="film-card">
      <div className="film-container">
        <Bookmark isBookmarked={isBookmarked} />
        <img className="film-thumbnail" src={str} alt={title} />
      </div>
      <div className="card-description-top">
        <p>{year}</p>
        <img className="block" src={oval} alt="oval separator" />
        <p>{category}</p>
        <img className="block" src={oval} alt="oval separator" />
        <p>{rating}</p>
      </div>
      <p className="card-description-bottom">{title}</p>
    </div>
  );
}

export default Film;
