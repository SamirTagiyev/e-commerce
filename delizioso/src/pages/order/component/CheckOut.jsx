import React, { useEffect, useState } from "react"
import style from "./checkout.module.scss"
import AddIcon from "@mui/icons-material/Add"
import Checkedout from "../../checkout/Checkout"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getDiscount } from "../../../api/products"

const CheckOut = () => {
  const products = useSelector((state) => state.cart.products)
  // const discount = useSelector((state) => state.cart.discount)
  const dispatch = useDispatch()
  const [voucher, setVoucher] = useState()
  const [discountCode, setDiscountCode] = useState("")
  const [discountError, setDiscountError] = useState(null)

  const handleClick = async (target) => {
    target.preventDefault()
    const discount = await getDiscount({ name: discountCode })
    if (discount?.data[0]?.attributes) {
      setVoucher(discount?.data[0]?.attributes)
      setDiscountError(null)
    } else {
      setDiscountError("Invalid code")
    }
  }

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value)
  }

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }
  return (
    <div className={style.container}>
      <hr />
      <div className={style.voucher_container}>
        <div className={style.voucher_code}>
          <label htmlFor="voucher">Voucher Code</label>
          <div className={style.input_btn}>
            <input
              id="voucher"
              placeholder="Voucher code"
              name="voucher"
              value={discountCode}
              onChange={handleDiscountChange}
            />
            <button onClick={handleClick}>
              <AddIcon />
            </button>
          </div>
        </div>
          {discountError && <p className={style.error}>{discountError}</p>}
      </div>
      <hr />
      <div className={style.checkout}>
        <div className={style.sub}>
          <p className={style.text}>Subtotal</p>
          <p className={style.price}>${totalPrice()}</p>
        </div>
        <div className={style.sub}>
          <p className={style.text}>Tax</p>
          <p className={style.price}>$3.5</p>
        </div>
        <div className={style.sub}>
          <p className={style.text}>Voucher</p>
          <p className={style.price}>
            {voucher ? `$${voucher.discount}` : "$0"}
          </p>
        </div>
        <div className={style.total_amount}>
          <p className={style.text}>Total</p>
          <p className={style.price}>
            $
            {(
              parseFloat(totalPrice()) +
              (voucher ? parseFloat(voucher.discount) : 0) +
              3.5
            ).toFixed(2)}
          </p>
        </div>
        <button className={style.checkout_btn}>
          <NavLink to="/checkout"> Checkout </NavLink>
        </button>
      </div>
    </div>
  )
}

export default CheckOut
