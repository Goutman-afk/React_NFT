import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import logo from "../../nft.png";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <ul className="nav-menu">
        <li>Home </li>
        <li>Explore </li>
        <li> Create </li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ magrinRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
    </div>
  );
}
export default NavBar;
