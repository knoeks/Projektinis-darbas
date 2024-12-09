import { useState } from "react";
import Bookmark from "./Bookmark";

const TrendingRow = ({ trending }) => {
  const { title, thumbnail, year, category, rating } = trending;
  const [update, setUpdate] = useState(0);

  const str = thumbnail?.trending?.large?.startsWith("/")
  ? thumbnail.trending.large.slice(1) 
  : thumbnail?.trending?.large || "";
    

  return (
<div className="inline-block mx-2">
    <div className="">
      <div className="trending--thumbnail relative">
        <Bookmark setUpdate={setUpdate} film={trending} />
        {str ? (
          <img className="w-full" src={str} alt={title} />
        ) : (
          <p>No Cover</p>
        )}
      </div>
      <div className="relative bottom-14 left-5">
        <p className="trending--text--image">
          {year} | {category} | {rating}
        </p>
        <h3 className="trending--title--image">{title}</h3>
      </div>
    </div>
  </div>
);
};

export default TrendingRow;