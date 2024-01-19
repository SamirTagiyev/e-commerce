import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { formMessages } from "./formMessages"

export const registerSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required(formMessages.Required)
      .matches(/^[A-Za-z]+$/i, formMessages.InvalidFormat),
    lastName: yup
      .string()
      .required(formMessages.Required)
      .matches(/^[A-Za-z]+$/i, formMessages.InvalidFormat),
    email: yup
      .string()
      .email(formMessages.InvalidEmail)
      .required(formMessages.Required),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .min(8, formMessages.PasswordLength),
    acceptTerms: yup.bool().oneOf([true], formMessages.AcceptTerms),
    subject: yup.string().required(formMessages.Required),
    message: yup.string().required(formMessages.Required),
    address: yup.string().required(formMessages.Required),
    phoneNumber: yup.string().required(formMessages.Required),
    selectOptionTime: yup.string().required(formMessages.Required),
    selectOptionMethod: yup.string().required(formMessages.Required),
    selectOptionPayment: yup.string().required(formMessages.Required),
    checkbox: yup.bool().oneOf([true], formMessages.AcceptTerms),
    username: yup.string().min(4, "Minimum 1 characters").max(16, "Maximum 15 characters"),
    
  })
  .required(formMessages.Required)
  

