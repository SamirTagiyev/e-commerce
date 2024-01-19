import React from "react"
import style from "./button.module.scss";
const Button = ({text,txtColor, bgColor}) => {
  return <button className={style.button} style={{backgroundColor: bgColor, color: txtColor }}>{text}</button>
}

export default Button
