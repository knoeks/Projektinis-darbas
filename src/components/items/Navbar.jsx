import {Link} from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <Link to="about" className="btn btn-ghost">
        About
      </Link>
      <Link to="goals" className="btn btn-ghost">
        Goals
      </Link>
      <Link to="mission" className="btn btn-ghost">
        Mission
      </Link>
      <Link to="items" className="btn btn-ghost">
        Items
      </Link>
    </nav>
  );
};

export default NavBar;
