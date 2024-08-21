import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Button_ScheduleVisit from "../Button_ScheduleVisit/Button_ScheduleVisit";
import TopBar from "../TopBar/TopBar";
import {FaBars} from 'react-icons/fa'
import { useState } from "react";

const NavBar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen (!isOpen);

  return (
    <>
     <TopBar/>
      <div className="AB_nav">
        <div className="container_custom">
          <div className="AB_ContentNavBar">
            <h1 className="AB_logo">VILLA</h1>
            <div className="AB_MenuIcon">
             < FaBars onClick={toggle} className="AB_IconBars"/>
            </div>
            <ul className={isOpen ? 'AB_navbar-menu active' : 'AB_navbar-menu'}>
              <li className="AB_link">
                <NavLink
                  to="/Task1VillaAgency"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="AB_link">
                <NavLink
                  to="/Properties"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Properties
                </NavLink>
              </li>
              <li className="AB_link">
                <NavLink
                  to="/Property Details"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Property Details
                </NavLink>
              </li>
              <li className="AB_link">
                <NavLink
                  to="/Contact Us"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="AB_DisplayButton">
                <Button_ScheduleVisit />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
