import React from "react"
import style from "./chef.module.scss"

//Temporary

import Betran from "../../../../assets/chef/betran.svg"

const Chef = ({image,name,description}) => {
  return (
    <div className={style.container}>
      <div className={style.image}></div>
      <img className={style.chef_picture} src={image} alt="Chef`s profile" />
      <p className={style.name}>{name}</p>
      <p className={style.desc}>{description}</p>
    </div>
  )
}

export default Chef
