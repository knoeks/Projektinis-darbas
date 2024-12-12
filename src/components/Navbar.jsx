import {Link} from "react-router";
import Logo from '../assets/logo.svg?react';
import avatar from "../assets/image-avatar.png";
import Home from "../assets/icon-nav-home.svg?react";
import Movies from "../assets/icon-nav-movies.svg?react"
import Tv from "../assets/icon-nav-tv-series.svg?react"
import Bookmarked from "../assets/icon-nav-bookmark.svg?react"
import { useLocation } from "react-router";

const NavBar = () => {
let location = useLocation();

  return (     
  <div className="box-content lg:h-full">
    <div className="nav-container">
    <Logo className="logo"/>
    <div className="nav-2nd-container">
    <Link to="home" className={location.pathname === "/home" ? "[&>*]:fill-white":""}><Home className="svg-nav"/></Link>
    <Link to="movies" className={location.pathname === "/movies" ? "[&>*]:fill-white":""}><Movies className="svg-nav"/></Link>
    <Link to="series" className={location.pathname === "/series" ? "[&>*]:fill-white":""}><Tv className="svg-nav"/></Link>
    <Link to="bookmarked" className={location.pathname === "/bookmarked" ? "[&>*]:fill-white":""}><Bookmarked className="booked" /></Link>
    </div>
    <a href="#my_modal_8"><img className="pic" src={avatar} alt="avatar" /></a>
    <div className="modal bg-dark" role="dialog" id="my_modal_8">
  <div className="modal-box bg-dark text-center">
    <h3 className="text-white font-outfit text-heading-m">Sign out</h3>
    <p className="py-4 text-white font-outfit text-body-m">Ar you sure want to sign out?</p>
    <div className="modal-action grid grid-cols-2 place-items-center">
    <Link to="/" className="btn bg-red w-32">Sign Out</Link>
      <a href="#" className="btn bg-[#5A698F] w-32">Close</a>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};



export default NavBar;