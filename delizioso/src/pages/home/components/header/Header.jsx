import React from "react"
import style from "./header.module.scss"
import Spagetti from "../../../../assets/home/spagetti.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearCart } from "../../../../control/cartReducer";


const Header = () => {
const dispatch = useDispatch()

 useEffect(() => {
   // Function to check the URL parameters
   const checkUrlParameters = () => {
     // Get the current URL
     const url = window.location.href

     // Check if the URL contains the parameter "?success=true"
     if (url.includes("?success=true")) {
       // Run your function here
        dispatch(clearCart())
     }
   }

   // Call the function when the component mounts
   checkUrlParameters()
 }, [])  




  return (
    <div className={style.header}>
      <div className={style.restaurant}>
          <p className={style.restaurant__name}>Restaurant</p>
        <h1 className={style.restaurant__title}>
          <span>Italian</span> <span>Cuisine</span>
        </h1>
        <p className={style.restaurant__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
          senectus dictum arcu sit tristique donec eget.
        </p>
        <div className={style.restaurant__buttons}>
          <button className={style.restaurant__buttons__order}>
            Order now
          </button>
          <button className={style.restaurant__buttons__reserv}>
            Reservation
          </button>
        </div>
      </div>
      <div className={style.picture}>
        <img src={Spagetti} alt="Italian Cuisine" />
      </div>
    </div>
  )
}

export default Header
