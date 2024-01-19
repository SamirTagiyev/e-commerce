import React, { useState } from "react"
import style from "./order_card.module.scss"
import Remove from "../../../assets/order/remove.svg"
import Min from "../../../assets/order/min.svg"
import Plus from "../../../assets/order/plus.svg"
import { useDispatch } from "react-redux"
import { removeItem, increase, decrease } from "../../../control/cartReducer"

const OrderCard = ({ id, name, price, img, quantity }) => {
  // const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  return (
    <div className={style.container}>
      <div className={style.order_card_img}>
        <img src={import.meta.env.VITE_UPLOAD_IMG + img} />
      </div>
      <div className={style.order_left}>
        <div className={style.order_card_info__title}>
          <p>{name}</p>
        </div>
        <div className={style.order_card_info__quantity}>
         
          <div
            className={style.decrease}
            onClick={() => {
              dispatch(decrease(id))
            }}
          >
            <img src={Min} alt="" />
          </div>

          <p className={style.count}>{quantity}</p>
          <div
            className={style.decrease}
            onClick={() => {
              dispatch(increase(id))
            }}
          >
            <img src={Plus} alt="" />
          </div>
        </div>
      </div>
      <div className={style.order_right}>
        <div
          className={style.remove_btn}
          onClick={() => dispatch(removeItem(id))}
        >
          <img src={Remove} alt="" />
        </div>
        <div className={style.order_card_info__price}>
          <p>${(quantity * price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
