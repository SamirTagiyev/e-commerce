import React, { useEffect, useRef, useState } from "react"
import style from "./nav.module.scss"
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Cart from "./components/Cart/Cart.jsx"
import { login, logout } from "../../control/authReducer.js"
import { userData } from "../../helper.js"
import LogoutIcon from "@mui/icons-material/Logout"
import { closeModal, openModal } from "../../control/modalReducer.js"
import { debounce } from "lodash"
//#region PICTURES

import Basket from "../../assets/basket.svg"
import Menu from "../../assets/home_menu.svg"
// import OpeningMenu from "./OpeningMenu/OpeningMenu"
import SideMenu from "./sideMenu/SideMenu.jsx"

//#endregion

const Nav = () => {
  const products = useSelector((state) => state.cart.products)
  const users = useSelector((state) => state.name.user)
  const dispatch = useDispatch()
  const isMobile = window.innerWidth < 768

  const location = useLocation()
  // const [open, setOpen] = useState(false)
  const { quantity } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const [openDialog, setOpenDialog] = useState(false)

  const navigate = useNavigate()
  const { jwt, user } = userData()

  const logout = () => {
    localStorage.setItem("user", "")
    navigate("/login")
  }

  const userName = `${user?.username
    ?.charAt(0)
    .toUpperCase()}${user?.username.slice(1)}`

  const handleMouseOver = () => {
    console.log("over")
    // dispatch(openModal())
    setOpenDialog(true)
  }
  const handleMouseOut = () => {
    // dispatch(closeModal())
    setOpenDialog(false)
  }

  return (
    <>
      <div className={style.nav}>
        <Link className={style.nav__logo} to="/">
          <div className={style.nav__logo__circle}>D</div>
          <p>
            <span className={style.first}>Delizi</span>
            <span className={style.second}>oso</span>
          </p>
        </Link>
        <div className={style.nav__links}>
          <ul>
            <li className={style.link}>
              <NavLink to="/">Home </NavLink>
            </li>

            <li className={style.link}>
              <NavLink to="/menu">Menu </NavLink>
            </li>

            <li className={style.link}>
              <NavLink to="/about"> About&nbsp;us </NavLink>
            </li>

            <li className={style.link}>
              <NavLink to="/order">Order&nbsp;List </NavLink>
            </li>

            <li className={style.link}>
              <NavLink to="/reservation">Reservation </NavLink>
            </li>

            <li className={style.link}>
              <NavLink to="/contact">Contact&nbsp;us </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.nav__buttons}>
          <NavLink
            className={style.nav__buttons__basket}
            onMouseEnter={handleMouseOver}
            onMouseOut={handleMouseOut}
            to="/order"
          >
            <img src={Basket} alt="" />
            {products.length !== 0 && (
              <span className={style.nav__buttons__basket__count}>
                {products.length}
              </span>
            )}
            {openDialog && !isMobile && (
              <Cart isMenuOpen={isMenuOpen} handleMouseOver={handleMouseOver} />
            )}
          </NavLink>
          <div className={style.nav__buttons__menu}>
            <img src={Menu} alt="" onClick={toggleMenu} />
            <SideMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <div className={style.overlay} onClick={toggleMenu}></div>
            )}
          </div>
          <div className={style.nav__buttons__loginBtn}>
            {jwt ? (
              <button onClick={logout}>
                {userName} <LogoutIcon />
              </button>
            ) : (
              <NavLink to="/login" state={{ from: location }}>
                Log in
              </NavLink>
            )}
            {/* <NavLink to="/login">Log in</NavLink> */}
          </div>
        </div>
      </div>
      {/* {products.length !== 0 && (
        <div
          className={`${style.cart} ${open ? style.active : style.inactive}`}
        ></div>
      )} */}
    </>
  )
}

export default Nav
