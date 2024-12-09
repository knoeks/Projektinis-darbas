import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <Link to="/home">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
      <Link to="/movies">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
      <Link to="/series">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
      <Link to="/bookmarked">
        <button className="bg-amber-400 p-3">Home</button>
      </Link>
    </>
  );
}

export default Navbar;