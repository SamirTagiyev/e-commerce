import React from 'react'
import style from "./sign_up.module.scss";
import SignUpForm from "./components/signup/SignUpForm"

const SignUp = () => {
  return (
    <div className={style.container}>
      <SignUpForm />
      <div className={style.login_picture}></div>
    </div>
  )
}

export default SignUp