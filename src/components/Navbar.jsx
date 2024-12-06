import {Link} from "react-router";
import logo from "../assets/logo.svg"
import avatar from "../assets/image-avatar.png";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg"
import tv from "../assets/icon-nav-tv-series.svg"
import bookmarked from "../assets/icon-nav-bookmark.svg"

const NavBar = () => {
  return (
    <div className="box-content">
    <div className=" grid grid-cols-3 p-4 h-[56px] bg-dark  items-center md:rounded-[0.625rem] md:m-4 lg:grid-cols-1 lg:float-left lg:h-[60rem] lg:justify-items-center lg:grid-rows-[20px_1fr_24px] lg:gap-12">
    <img className="w-[25px] h-[20px] md:w-[32px] md:h-[25.6px]" src={logo} alt="" />
    <div className="navbar-center flex flex-cols-4 w-[133.54px] md:w-[172.92px] items-center justify-between lg:flex-col lg:h-[200px] lg:w-[3rem] place-self-center lg:place-self-start ">
    <img className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" src={home} alt="home" />
    <img className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" src={movies} alt="movies" />
    <img className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" src={tv} alt="tv" />
    <img className="w-[13.5px] h-[16px] md:w-[17.5px] md:h-[20px]" src={bookmarked} alt="bookmarked" />
    </div>
    <img className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] place-self-center" src={avatar} alt="" />
    </div>
    </div>
  );
};



export default NavBar;