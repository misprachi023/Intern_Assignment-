import React from "react";
import "../styles/Navbar.css";
import { MdSearch } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import TemporaryDrawer from "../utils/Menu";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="navbarMainDiv">
        <div className="brandLogoDiv">
          <h1>LOGO</h1>
        </div>
        <div className="menuAndBtnMainDiv">
          <div className="navbarMenuDiv">
            <div className="menuDiv">Qualifications <FaChevronDown className="navbarMenuDownArrow" /></div>
            <div className="menuDiv">Organizations <FaChevronDown className="navbarMenuDownArrow" /></div>
            <div className="menuDiv">Research & Analysis <FaChevronDown className="navbarMenuDownArrow" /></div>
            <div className="menuDiv">Lorem ipsum <FaChevronDown className="navbarMenuDownArrow" /></div>
            <div className="menuDiv">Lorem ipsum <FaChevronDown className="navbarMenuDownArrow" /></div>
          </div>
          <div className="navbarSearchIconDiv"><MdSearch className="searchIcon"/></div>
          <button className="navbarBtn">Enrolment</button>
          <div className="navbarDrawer"><TemporaryDrawer/></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
