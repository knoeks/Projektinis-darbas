import { useState } from "react";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import { getOne } from "../helpers/get";
import { updateOne } from "../helpers/update";

// reusable component meant for Povilas and Jaroslav
function Bookmark({ film }) {
  const [isBookmarkedState, setIsBookmarkedState] = useState(true);
  const { id } = film;

  const bookmarkHandler = async () => {
    const { isBookmarked } = await getOne(id);
    await updateOne(id, { isBookmarked: !isBookmarked });
    setIsBookmarkedState(isBookmarked);
  };

  const bookmarkButton = isBookmarkedState ? bookmarkFull : bookmarkEmpty;

  return (
    <div className="bookmark-button hover:circle-icon-hover">
      <button onClick={bookmarkHandler} className="circle-icon">
        <img src={bookmarkButton} alt={bookmarkButton} />
      </button>
    </div>
  );
}

export default Bookmark;
