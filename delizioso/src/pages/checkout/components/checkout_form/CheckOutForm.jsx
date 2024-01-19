import React, { useState, useEffect } from "react"
import style from "./checkout_form.module.scss"
import PhoneNumberValidation from "../phonenumbervalidation/PhoneNumberValidation.jsx"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../../../constants/schemas"
import { useForm } from "react-hook-form"
import classNames from "classnames"
import { loadStripe } from "@stripe/stripe-js"
import { makeRequest } from "../../../../makeRequest.js"
import { useDispatch, useSelector } from "react-redux"
import GoogleMaps from "./GoogleMaps.jsx"
import { Link, NavLink } from "react-router-dom"
import Location from "../../../../assets/location.svg"
import Back from "../../../../assets/Back.svg"
import Close from "../../../../assets/close.svg"
import { clearCart } from "../../../../control/cartReducer.js"

const CheckOutForm = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const registerUser = (data) => {
    console.log("data", data)
  }

  const address = useSelector((state) => state.address.address)

  // useEffect(() => {
  //   setValue("address", address)
  // }, [address, setValue])

  // Use the address in your component
  console.log(address)

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  

  const stripePromise = loadStripe(
    "pk_test_51O8hu5KpBEhiyT2byI2Gu8iUpvAYGnDke992dKhpCntfGzLu03dNcvVW7lDN6499NCmdvaNwYWYgZOD828gfvzlF00nQVR9OvW"
  );


const handlePayment = async () => {
  try {
    const stripe = await stripePromise

    const res = await makeRequest.post("/orders", {
      products
    })

    console.log("Stripe session ID:", res.data.stripeSession.id)

    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id
    })

    console.log("After redirectToCheckout")

    dispatch(clearCart())
  } catch (err) {
    console.error("Error in handlePayment:", err)
  }
}



    const updateAddress = async (newAddress) => {
      setValue("address", newAddress)
      await trigger("address")
    }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Checkout</h1>
        <form className={style.form} onSubmit={handleSubmit(registerUser)}>
          <div className={style.form_control}>
            <label htmlFor="address">Shipping address</label>
            <div className={style.input}>
              <div
                className={classNames(style.form_control, {
                  [style.error]: errors.address
                })}
              >
                <input
                  className={style.input}
                  type="text"
                  placeholder="Address"
                  id="address"
                  {...register("address")}
                  
                />
              </div>
              <button
                className={style.change_btn}
                onClick={() => setShowModal(!showModal)}
              >
                Change
              </button>
            </div>
            <p className={style.error_message}>{errors.address?.message}</p>
          </div>
          <div className={style.form_control_order}>
            <p className={style.order_title}>Data order</p>
            <div className={style.order_list}>
              <div
                className={classNames(style.form_control, {
                  [style.error]: errors.firstName
                })}
              >
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName")}
                />
                <p className={style.error_message}>
                  {errors.firstName?.message}
                </p>
              </div>
              <div
                className={classNames(style.form_control, {
                  [style.error]: errors.lastName
                })}
              >
                <input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName")}
                />
                <p className={style.error_message}>
                  {errors.lastName?.message}
                </p>
              </div>
              <div className={style.form_control_phone}>
                <div
                  className={classNames(style.form_control, {
                    [style.error]: errors.lastName
                  })}
                >
                  <PhoneNumberValidation> </PhoneNumberValidation>
                  <p className={style.error_message}>{errors.phone?.message}</p>
                </div>
              </div>
              <div className={style.form_email}>
                <div
                  className={classNames(style.form_control, {
                    [style.error]: errors.email
                  })}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <p className={style.error_message}>{errors.email?.message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.select_occasion}>
            <select name="occasion" id="occasion">
              <option value="Select an accasion (optional)">
                select an accasion (optional)
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Wedding">Wedding</option>
              <option value="Graduation">Graduation</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={style.special_request}>
            <input type="text" placeholder="Note" />
          </div>
          <div
            className={classNames(style.form_control, {
              [style.error]: errors.selectOptionTime
            })}
          >
            <div className={style.order_time}>
              <p className={style.time_title}>Order time</p>

              <div className={style.order_due}>
                <div className={style.order_now}>
                  <input
                    type="radio"
                    name="order"
                    id="order_now"
                    {...register("selectOptionTime")}
                  />
                  <label htmlFor="order_now">Order now</label>
                </div>
                <div className={style.order_later}>
                  <input
                    type="radio"
                    name="order"
                    id="order_later"
                    {...register("selectOptionTime")}
                  />
                  <label htmlFor="order_later">Order later</label>
                </div>
              </div>
            </div>
            <p className={style.error_message}>
              {errors.selectOptionTime?.message}
            </p>
          </div>
          <div className={style.order_method}>
            <div
              className={classNames(style.form_control, {
                [style.error]: errors.selectOptionMethod
              })}
            >
              <p className={style.method_title}>Order Method</p>
              <div className={style.delivery}>
                <div className={style.order_delivery}>
                  <input
                    type="radio"
                    name="method"
                    id="order_delivery"
                    {...register("selectOptionMethod")}
                  />
                  <label htmlFor="order_delivery">Order now</label>
                </div>
                <div className={style.order_takeaway}>
                  <input
                    type="radio"
                    name="method"
                    id="order_takeaway"
                    {...register("selectOptionMethod")}
                  />
                  <label htmlFor="order_takeaway">Order later</label>
                </div>
              </div>
              <p className={style.error_message}>
                {errors.selectOptionMethod?.message}
              </p>
            </div>
          </div>
          <div
            className={classNames(style.form_control, {
              [style.error]: errors.selectOptionPayment
            })}
          >
            <div className={style.payment_method}>
              <p className={style.payment_title}>Payment Method</p>
              <div className={style.payment_method_list}>
                <div className={style.payment_cash}>
                  <input
                    type="radio"
                    name="payment"
                    id="payment_cash"
                    {...register("selectOptionPayment")}
                  />
                  <label htmlFor="payment_cash">Cash On Delivery</label>
                </div>
                <div className={style.payment_virtual}>
                  <input
                    type="radio"
                    name="payment"
                    id="payment_virtual"
                    {...register("selectOptionPayment")}
                  />
                  <label htmlFor="payment_virtual">BCA Virtual Account</label>
                </div>
                <div className={style.payment_card}>
                  <input
                    type="radio"
                    name="payment"
                    id="payment_card"
                    {...register("selectOptionPayment")}
                  />
                  <label htmlFor="payment_card">Credit Card</label>
                </div>
                <div className={style.payment_transfer}>
                  <input
                    type="radio"
                    name="payment"
                    id="payment_transfer"
                    {...register("selectOptionPayment")}
                  />
                  <label htmlFor="payment_transfer">Credit Card</label>
                </div>
              </div>
            </div>
            <p className={style.error_message}>
              {errors.selectOptionPayment?.message}
            </p>
          </div>

          <div
            className={classNames(style.form_control, {
              [style.error]: errors.checkbox
            })}
          >
            <div className={style.agree_btn}>
              <input
                type="checkbox"
                name="agree"
                id="agree"
                {...register("checkbox")}
              />
              <label htmlFor="agree" className={style.agree_label}>
                Choose to indicate that you have read and agree to our Terms of
                use & Privacy Policy.
              </label>
            </div>
            <p className={style.error_message}>{errors.checkbox?.message}</p>
          </div>
          <div className={style.form_btn}>
            <button className={style.submit_btn} onClick={handlePayment}>
              Submit
            </button>
          </div>
        </form>

        <div
          className={style.location_modal}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className={style.close_btn} onClick={toggleModal}>
            <img src={Close} alt="" />
          </div>
          <div className={style.form_container}>
            <div className={style.title}>
              <img src={Back} alt="" onClick={toggleModal} />

              <label htmlFor="address">Shipping address</label>
            </div>
            <div className={style.input}>
              <div
                className={classNames(style.form_control, {
                  [style.error]: errors.address
                })}
              >
                <input
                  className={style.input}
                  type="text"
                  placeholder="Address"
                  id="address"
                  {...register("address")}
                />
              </div>
              <button className={style.change_btn} onClick={()=>toggleModal()}>
                Change
              </button>
            </div>
            <p className={style.error_message}>{errors.address?.message}</p>
            <button
              className={style.curr_location}
              onClick={async () => {
                window.navigator.geolocation.getCurrentPosition(
                  async (position) => {
                    const lat = position.coords.latitude
                    const lng = position.coords.longitude
                    const loc = await fetch(
                      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
                        import.meta.env.VITE_GOOGLE_MAP_API_KEY
                      }`
                    ).then((res) => res.json())
                    const newAddress = loc.results[0].formatted_address
                    updateAddress(newAddress)
                    toggleModal()
                  }
                  )
                  await trigger("address")

              }}
            >
              <img src={Location} alt="" />

              <p>Use your current location</p>
            </button>
          </div>

          <div className={style.map}>
            <GoogleMaps setValue={setValue} />
          </div>
        </div>
        {showModal && <div className={style.overlay}></div>}
      </div>
    </>
  )
}

export default CheckOutForm

//  <input className={style.input} type="text" placeholder="Name"/>
//  <input className={style.input} type="text" placeholder="Email"/>
