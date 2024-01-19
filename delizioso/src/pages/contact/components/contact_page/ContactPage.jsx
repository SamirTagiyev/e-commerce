import React, { useEffect } from "react"
import style from "./contact_page.module.scss"
import CancelIcon from "@mui/icons-material/Cancel"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import classNames from "classnames"
import { formMessages } from "../../../../constants/formMessages"
import Map from "../../../../assets/map.svg"
import TagLocation from "../../../../assets/tag_location.svg"
import Direction from "../../../../assets/direction.svg"
import LocationPic from "../../../../assets/location_pic.svg"
import { yupResolver } from "@hookform/resolvers/yup"
import {registerSchema} from "../../../../constants/schemas"


const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const registerUser = (data) => {
    console.log("data", data)
  }

  console.log(errors)

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Contact Us</h1>
        <p className={style.desc}>
          We love hearing from our customers. Feel free to share your experience
          or ask any questions you may have.
        </p>

        <form
          className={style.form_contact}
          onSubmit={handleSubmit(registerUser)} 
        >
          <div className={style.grid_desktop}>
            <div
              className={classNames(style.form_control, {
                [style.error]: errors.firstName
              })}
            >
              <input
                className={style.fname}
                type="text"
                placeholder="First name"
                {...register("firstName" )}
              />
              <p className={style.error_message}>{errors.firstName?.message}</p>
            </div>

            <div
              className={classNames(style.form_control, {
                [style.error]: errors.lastName
              })}
            >
              <input
                className={style.lname}
                type="text"
                placeholder="Last name"
                {...register("lastName")}
              />
              <p className={style.error_message}>{errors.lastName?.message}</p>
            </div>
            <div
              className={classNames(style.form_control, {
                [style.error]: errors.email
              })}
            >
              <input
                className={style.email}
                type="text"
                placeholder="Email address"
                {...register("email")}
              />
              <p className={style.error_message}>{errors.email?.message}</p>
            </div>

            <div
              className={classNames(style.form_control, {
                [style.error]: errors.subject
              })}
            >
              <input
                className={style.subject}
                type="text"
                placeholder="Subject"
                {...register("subject")}
              />
              <p className={style.error_message}>{errors.subject?.message}</p>
            </div>
          </div>

          <div
            className={classNames(style.form_control, {
              [style.error]: errors.message
            })}
          >
            <input
              className={style.message}
              type="text"
              placeholder="Message"
              {...register("message", {
                required: {
                  value: true,
                  message: formMessages.Required
                }
              })}
            />
            <p className={style.error_message}>{errors.message?.message}</p>
          </div>
          <button className={style.btn}>Submit</button>
        </form>
      </div>
      <div className={style.map}>
        <img className={style.tag} src={TagLocation} alt="" />
        <div className={style.direction}>
          <img className={style.location_pic} src={LocationPic} alt="" />
          <div className={style.right}>
            <div className={style.text}>
              <h1 className={style.title}>Delizioso Restaurant</h1>
              <p className={style.address}>Bronx, NY 10463, Amerika Serikat</p>
              <p className={style.coordinates}>40.885147,-73.9220459</p>
            </div>
            <img className={style.direction_img} src={Direction} alt="" />
          </div>

          <div className={style.triangle_down}></div>
          <CancelIcon className={style.close} />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
