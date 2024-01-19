import React from "react"
import LoginForm from "./components/login_form/LoginForm"
import Login from "../../assets/login.svg"
import style from "./login.module.scss";

const LogIn = () => {
  return (
    <div className={style.container}>
    
      <LoginForm />
      <div className={style.login_picture}></div>
    </div>
  )
}

export default LogIn
