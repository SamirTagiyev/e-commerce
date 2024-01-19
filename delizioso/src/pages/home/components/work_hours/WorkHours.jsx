import React from 'react'
import style from "./work_hours.module.scss";
import Button from "../../../../components/button/Button.jsx";

const WorkHours = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.title}>we are open from</h1>
        <p className={style.week_days}>Monday-Sunday</p>
        <p className={style.lunch}>Launch : Mon-Sun : 11:00am-02:00pm</p>
        <p className={style.dinner}>Dinner : sunday : 04:00pm-08:00pm</p>
        <p className={style.blank}>04:00pm-09:00pm</p>
        <div className={style.buttons}>
          <Button txtColor="#000" bgColor="#fff" text={"Reservation"} />
          <Button text={"Order now"} />
        </div>
      </div>
    </div>
  )
}

export default WorkHours