import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import Category from "./Category";
import PlayButton from "./PlayButton";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg"; 
import bookmarkFull from "../assets/icon-bookmark-full.svg"; 
import { updateOne } from "../helpers/update"; 

const TrendingRow = ({ trending }) => {
  const { title, thumbnail, year, category, rating, isBookmarked } = trending;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked); 

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

  const getThumbnailSrc = () => {
    const thumbnailSrc = isMobile ? thumbnail.trending.small : thumbnail.trending.large;
    return `src/${thumbnailSrc.slice(2)}`;
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const bookmarkHandler = async () => {
  //   const newIsBookmarked = !isBookmarked;
  //   setIsBookmarked(newIsBookmarked); 

    
  //   await updateOne(id, { isBookmarked: newIsBookmarked }); 
  // };

  return (
    <div className="inline-block trending--main--container">
      <div className="">
        <div className="trending--thumbnail rounded-full">
          <Bookmark film={{ ...trending, isBookmarked }} />
          {/* <div className="bookmark-button group">
            <button onClick={bookmarkHandler} className="circle-icon">
              <img 
                src={isBookmarked ? bookmarkFull : bookmarkEmpty} 
                alt={isBookmarked ? "Bookmark Full" : "Bookmark Empty"} 
              />
            </button>
          </div> */}
          {getThumbnailSrc() ? (
            <img className="w-full rounded-[0.5rem]" src={getThumbnailSrc()} alt={title} />
          ) : (
            <p>No Cover</p>
          )}
          <PlayButton />
        </div>
        <div className="trending--absolute">
          <div className="trending--text--image text-white">
            {year} {oval} <span className="flex"><Category film={trending} />{category}</span> {oval} {rating}
          </div>
          <h3 className="trending--title--image">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TrendingRow;