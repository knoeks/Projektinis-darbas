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
  <div className=" md:p-8 xl:p-8 bg-light box-border sticky top-0 left-0 z-50 xl:w-[10rem]">
    <div className="nav-container">
    <Logo className="logo"/>
    <div className="nav-2nd-container">
    <Link to="home" className={`group relative ${location.pathname === "/home" ? "[&>*]:fill-white":""}`}><Home className="svg-nav"/><p className="pop-name">home</p></Link>
    <Link to="movies" className={`group relative ${location.pathname === "/movies" ? "[&>*]:fill-white":""}`}><Movies className="svg-nav"/><p className="pop-name -left-3">movies</p></Link>
    <Link to="series" className={`group relative ${location.pathname === "/series" ? "[&>*]:fill-white":""}`}><Tv className="svg-nav"/><p className="pop-name">series</p></Link>
    <Link to="bookmarked" className={`group relative ${location.pathname === "/bookmarked" ? "[&>*]:fill-white":""}`}><Bookmarked className="booked" /><p className="pop-name -left-8">bookmarked</p></Link>
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