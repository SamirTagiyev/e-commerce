import React from "react"
import style from "./customers.module.scss"

//#region IMAGES
import Starla from "../../../../assets/starla.svg"
import Hypen_Up from "../../../../assets/hypen_up.svg"
import Hypen_Down from "../../../../assets/hypen_down.svg"

import Left2 from "../../../../assets/customers/left2.svg"
import Left3 from "../../../../assets/customers/left3.svg"
import Left1 from "../../../../assets/customers/left1.svg"
import Middle from "../../../../assets/customers/middle.svg"
import Right1 from "../../../../assets/customers/right1.svg"
import Right2 from "../../../../assets/customers/right2.svg"
import Right3 from "../../../../assets/customers/right3.svg"

const Customers = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Our customers say</h1>
        <img className={style.main_img} src={Starla} alt="Starla Virgoun" />
        <p className={style.name}>Starla Virgoun</p>
        <p className={style.position}>Financial advisor</p>
        <div className={style.comment}>
          <img className={style.up} src={Hypen_Up} alt="Hypen up icon" />
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <img className={style.down} src={Hypen_Down} alt="" />
        </div>
        <div className={style.circle}>
          <img className={style.imageForDesktop} src={Left3} alt="" />
          <img className={style.desktop_position2} src={Left2} alt="" />
          <div className={style.middle_container}>
            <img className={style.desktop_position1} src={Left1} alt="" />
            <img className={style.middle} src={Middle} alt="" />
            <img className={style.desktop_position1} src={Right1} alt="" />
          </div>
          <img className={style.desktop_position2} src={Right2} alt="" />
          <img className={style.imageForDesktop} src={Right3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Customers
