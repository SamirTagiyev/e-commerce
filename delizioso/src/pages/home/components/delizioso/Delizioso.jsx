import React from "react"
import style from "./delizioso.module.scss"
import DeliziosoPicture from "../../../../assets/home/delizioso.svg";

const Delizioso = () => {
  return (
    <div className={style.container}>
      <div className={style.delizioso}>
        <div className={style.delizioso__left}>
          <h1 className={style.delizioso__left__title}>
            <span>Welcome to</span>
            <span className={style.delizioso__left__title__color}>
              delizioso
            </span>
          </h1>

          <p className={style.delizioso__left__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <button className={style.delizioso__left__button}>
            See our Menu
          </button>
        </div>
        <div className={style.delizioso__picture}>
          <img src={DeliziosoPicture} alt="Welcome and see the menu" />
        </div>
      </div>
    </div>
  )
}

export default Delizioso
