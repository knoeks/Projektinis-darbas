import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import Category from "./Category";
import PlayButton from "./PlayButton";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg"; // Import empty bookmark icon
import bookmarkFull from "../assets/icon-bookmark-full.svg"; // Import full bookmark icon
import { updateOne } from "../helpers/update"; // make sure to import update function

const TrendingRow = ({ trending }) => {
  const { title, thumbnail, year, category, rating, id, isBookmarked: initialIsBookmarked } = trending;
  const [update, setUpdate] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked); // Track the bookmark state

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

  const bookmarkHandler = async () => {
    // Toggle the bookmark state
    const newIsBookmarked = !isBookmarked;
    setIsBookmarked(newIsBookmarked); // Update local state immediately

    // Update on the server
    await updateOne(id, { isBookmarked: newIsBookmarked });
    setUpdate((prev) => prev + 1); // Trigger a re-render
  };

  return (
    <div className="inline-block mx-2 trending--main--container">
      <div className="">
        <div className="trending--thumbnail rounded-full">
          <Bookmark film={{ ...trending, isBookmarked }} setUpdate={setUpdate} />
          <div className="bookmark-button group">
            <button onClick={bookmarkHandler} className="circle-icon">
              <img 
                src={isBookmarked ? bookmarkFull : bookmarkEmpty} 
                alt={isBookmarked ? "Bookmark Full" : "Bookmark Empty"} 
              />
            </button>
          </div>
          {getThumbnailSrc() ? (
            <img className="w-full rounded" src={getThumbnailSrc()} alt={title} />
          ) : (
            <p>No Cover</p>
          )}
          <PlayButton />
        </div>
        <div className="trending--absolute">
          <div className="trending--text--image text-white">
            {year} {oval} <span className="flex"><Category setUpdate={setUpdate} film={trending} />{category}</span> {oval} {rating}
          </div>
          <h3 className="trending--title--image">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TrendingRow;