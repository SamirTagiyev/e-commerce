import { useState } from "react"
import style from "./PhoneNumberValidation.module.scss"
import PhoneInput from "react-phone-input-2"
// import "react-phone-input-2/lib/style.css"
import classNames from "classnames"
import { formMessages } from "../../../../constants/formMessages"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../../../constants/schemas"
import { useForm } from "react-hook-form"

import "react-phone-input-2/lib/material.css"

const customStyles = {
  border: "none",
  paddingLeft: "3rem"
}

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [valid, setValid] = useState(false)

  const handleChange = (value) => {
    setPhoneNumber(value)
    setValid(validatePhoneNumber(value))
  }

  const validatePhoneNumber = (phoneNumber) => {
    const isValidPhoneNumber = /^\d{10}$/.test(phoneNumber)
    return isValidPhoneNumber
  }

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

  return (
    <div>
      <label className={style.phone_validation_label} htmlFor="phone">
        <div
          className={classNames(style.form_control, {
            [style.error]: errors.phoneNumber
          })}
        >
          <PhoneInput
            className={style.phone_validation_input}
            country={"az"}
            value={phoneNumber}
            onChange={handleChange}
            inputClass="form-control custom-input"
            inputStyle={customStyles}
            {...register("phoneNumber")}
          />

          <p className={style.error_message}>{errors.phoneNumber?.message}</p>
        </div>
      </label>
    </div>
  )
}

export default PhoneNumberValidation
