import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import { getOne } from "../helpers/get";
import { updateOne } from "../helpers/update";

// reusable component meant for Povilas and Jaroslav
function Bookmark({ film, setUpdate }) {
  const { isBookmarked, id } = film;

  const bookmarkHandler = async () => {
    const { isBookmarked } = await getOne(id);
    await updateOne(id, { isBookmarked: !isBookmarked });
    setUpdate((prevState) => prevState + 1);
  };

  const bookmarkButton = isBookmarked ? bookmarkFull : bookmarkEmpty;
  return (
    <div className="bookmark-button group">
      <button onClick={bookmarkHandler} className="circle-icon">
        <img src={bookmarkButton} alt={bookmarkButton} />
      </button>
    </div>
  );
}

export default Bookmark;
