import React from "react"
import style from "./reserve.module.scss"
import Button from "../../../../components/button/Button.jsx"

import LetsReserve from "../../../../assets/lets_reserve.svg"

const Reserve = () => {
  return (
    <div className={style.container}>
      <div className={style.reserve}>
        <div className={style.main}>
          <h1 className={style.title}>
            Let`s reserve <span className={style.color}>a table</span>
          </h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <Button text={"Reservation"} />
        </div>
        <div className={style.image}>
          <img src={LetsReserve} alt="Let`s Server a table" />
        </div>
      </div>
    </div>
  )
}

export default Reserve
