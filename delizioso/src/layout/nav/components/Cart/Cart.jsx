import style from "./Cart.module.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { clearCart, removeProduct } from "../../../../control/cartReducer.js"
import { NavLink } from "react-router-dom"

const Cart = ({ isMenuOpen, handleMouseOver }) => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()
  console.log(products.length)
  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }

  return (
    <div
      className={style.cart}
      style={{ top: isMenuOpen ? "200%" : "100%" }}
      onMouseOver={handleMouseOver}
    >
      <h1>Products in your cart</h1>

      {products.length === 0 ? (
        <div className={style.empty}>Your cart is empty</div>
      ) : (
        <div className={style.items}>
          {products?.map((item) => (
            <div className={style.item} key={item.id}>
              <img
                className={style.image}
                src={import.meta.env.VITE_UPLOAD_IMG + item.img}
                alt=""
              />
              <div className={style.details}>
                <h1 className={style.name}>{item.name}</h1>
                <p className={style.description}>
                  {item.description?.substring(0, 40)}
                </p>
                <div className={style.price}>
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <DeleteOutlinedIcon
                className={style.delete}
                onClick={() => dispatch(removeProduct(item.id))}
              />
            </div>
          ))}
        </div>
      )}

      <div className={style.total}>
        <span>
          SUBTOTAL{" "}
          <span className={style.count_item}>({products.length} item)</span>
        </span>
        <span>${totalPrice()}</span>
      </div>
      {products.length === 0 ? (
        ""
      ) : (
        <NavLink to="/checkout"> PROCEED TO CHEKOUT </NavLink>
      )}
      {products.length === 0 ? (
        ""
      ) : (
        <div className={style.reset} onClick={() => dispatch(clearCart())}>
          Reset Cart
        </div>
      )}
    </div>
  )
}

export default Cart
