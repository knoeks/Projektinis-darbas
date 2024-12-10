import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <Link to="/main/home">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
      <Link to="/main/movies">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
      <Link to="/main/series">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
      <Link to="/main/bookmarked">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
    </>
  );
}

export default Navbar;
