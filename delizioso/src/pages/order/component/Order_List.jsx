import React from "react"
import style from "./order_list.module.scss"
import OrderCard from "./OrderCard"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../../../control/cartReducer"
import CheckOut from "./CheckOut"



const Order_List = () => {
   const products = useSelector((state) => state.cart.products)
   const dispatch = useDispatch()
   
  return (
    <>
      {products.length < 1 ? (
        <section className={style.empty_cart}>
          <header>
            <h2>Basket</h2>
            <h4>Empty</h4>
          </header>
        </section>
      ) : (
        <div className={style.container}>
          <div className={style.menu_header}>
            <p className={style.menu_header__title}>Order List</p>
          </div>
          <div className={style.menu_list}>
            {products.map((item) => (
              <OrderCard key={item.id} {...item} />
            ))}
          </div>
          <div className={style.clear}>
            <button
              className={style.clearbtn}
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </button>
          </div>
          <CheckOut />
        </div>
      )}
    </>
  )
}

export default Order_List
