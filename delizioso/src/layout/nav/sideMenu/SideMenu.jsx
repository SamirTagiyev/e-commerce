// import React from "react"
import style from "./sidemenu.module.scss"
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom"
// import { useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import InfoIcon from "@mui/icons-material/Info"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import AppShortcutIcon from "@mui/icons-material/AppShortcut"
import AddIcCallIcon from "@mui/icons-material/AddIcCall"
import { useSelector } from "react-redux"
import { userData } from "../../../helper.js"
import Profile from "../../../../public/homer-simpson.jpg";


const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  function handleClosebtn() {
    setIsMenuOpen(!isMenuOpen)
  }
const navigate = useNavigate()

    const logout = () => {
      localStorage.setItem("user", "")
      navigate("/login")
    }

   const users = useSelector((state) => state.name.user)
    const { jwt, user } = userData()
 const userName = `${user?.username
   ?.charAt(0)
   .toUpperCase()}${user?.username.slice(1)}`
   console.log(userName); 
  return (
    <div
      className={style.sideMenu}
      style={{ left: isMenuOpen ? "0" : "-100%" }}
    >
      <div className={style.profile}>
        {jwt && <img src={Profile} alt="" />}
        <p className={style.name}>{jwt && userName}</p>
      </div>
      <div className={style.links}>
        <ul>
          <li className={style.link}>
            <NavLink to="/">
              <HomeIcon /> Home{" "}
            </NavLink>
          </li>

          <li className={style.link}>
            <NavLink to="/menu">
              {" "}
              <RestaurantMenuIcon /> Menu{" "}
            </NavLink>
          </li>

          <li className={style.link}>
            <NavLink to="/about">
              {" "}
              <InfoIcon /> About&nbsp;us{" "}
            </NavLink>
          </li>

          <li className={style.link}>
            <NavLink to="/order">
              {" "}
              <MenuBookIcon /> Order&nbsp;online{" "}
            </NavLink>
          </li>

          <li className={style.link}>
            <NavLink to="/reservation">
              {" "}
              <AppShortcutIcon /> Reservation{" "}
            </NavLink>
          </li>

          <li className={style.link}>
            <NavLink to="/contact">
              {" "}
              <AddIcCallIcon /> Contact&nbsp;us{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.btns}>
        {jwt ? (
          <button onClick={logout} className={style.logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className={style.login}>
            Log in
          </Link>
        )}
        {/* <button className={style.logout}>Logout</button> */}
        <button className={style.close} onClick={handleClosebtn}>
          Close
        </button>
      </div>
    </div>
  )
}

export default SideMenu
