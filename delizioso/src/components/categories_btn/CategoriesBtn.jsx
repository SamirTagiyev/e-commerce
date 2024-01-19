import React from "react"
import style from "./categories_btn.module.scss"

const CategoriesBtn = ({
  categories,
  setButtonValue,
  setPage,
  buttonValue,
  setResetProducts
}) => {
  const handleButtonClick = () => {
    setButtonValue(categories)
    setPage(1)
    setResetProducts(true)
  }

  const isActive = categories?.toLowerCase() === buttonValue?.toLowerCase()

  return (
    <div className={style.container}>
      <div
        onClick={handleButtonClick}
        className={style.category}
        style={{ backgroundColor: isActive ? "#000000" : "initial" }}
      >
        <p
          className={style.text}
          style={{ color: isActive ? "white" : "initial" }}
        >
          {categories}
        </p>
      </div>
    </div>
  )
}

export default CategoriesBtn
