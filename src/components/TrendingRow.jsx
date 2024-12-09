import { useState } from "react";
import Bookmark from "./Bookmark";
import Category from "./Category";
const TrendingRow = ({ trending }) => {
  const { title, thumbnail, year, category, rating } = trending;
  const [update, setUpdate] = useState(0);
  let oval = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="3"
      viewBox="0 0 3 3"
      fill="none"
    >
      <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
    </svg>
  );

  let str = "/src/" + thumbnail.trending.large.slice(2);

  return (
    <div className="inline-block mx-2 trending--main--container">
      <div className="trending--main--container">
        <div className="trending--thumbnail rounded">
          <Bookmark setUpdate={setUpdate} film={trending} />
          {str ? <img className="w-full rounded" src={str} /> : <p>No Cover</p>}
        </div>
        <div className="absolute bottom-8 left-5">
          <div className="trending--text--image">
            {year} {oval} <span className="flex"><Category setUpdate={setUpdate} film={trending} />
            {category}</span> {oval} {rating}
          </div>
          <h3 className="trending--title--image">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TrendingRow;
