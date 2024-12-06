import {Link} from "react-router";
import logo from "../assets/logo.svg"
import avatar from "../assets/image-avatar.png";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg"
import tv from "../assets/icon-nav-tv-series.svg"
import bookmarked from "../assets/icon-nav-bookmark.svg"

const NavBar = () => {
  return (
    <div className="w-full flex flex-cols-3 justify-between p-4 h-[56px] bg-dark items-center">
    <img className="w-[25px] h-[20px]" src={logo} alt="" />
    <div className="navbar-center flex flex-cols-4 w-[133.54px] items-center justify-between">
    <img className="w-[16px] h-[16px]" src={home} alt="home" />
    <img className="w-[16px] h-[16px]" src={movies} alt="movies" />
    <img className="w-[16px] h-[16px]" src={tv} alt="tv" />
    <img className="w-[16px] h-[16px]" src={bookmarked} alt="bookmarked" />
    </div>
    <img className="w-[24px] h-[24px]" src={avatar} alt="" />
    </div>
  );
};

export default NavBar;