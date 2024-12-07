import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";

function Bookmark({ isBookmarked }) {
  const bookmarkButton = isBookmarked ? bookmarkFull : bookmarkEmpty;

  return (
    <div className="bookmark-button">
      <button className="circle-icon">
        <img src={bookmarkButton} alt={bookmarkButton} />
      </button>
    </div>
  );
}

export default Bookmark;
