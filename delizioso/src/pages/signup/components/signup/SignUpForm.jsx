import React, { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import style from "./signup_form.module.scss"
import Google from "../../../../assets/google.svg"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const initialUser = { email: "", password: "", username: "" }

const SignUpForm = () => {
   const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState(initialUser)
   const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate()

  const handleUserChange = ({ target }) => {
    const { name, value } = target

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isValidEmail = emailRegex.test(value)
      setEmailError(isValidEmail ? "" : "Invalid email address")
    }

    // Password validation
    if (name === "password") {
      const isValidPassword =
        value.length >= 6 &&
        value.length <= 24 &&
        /^(?=.*[0-9!@#$%^&*()_+])/.test(value)
      setPasswordError(
        isValidPassword
          ? ""
          : "Password must be between 6 and 24 characters and contain at least one number or special character"
      )
    }

    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
  }

  const signUp = async () => {
    try {
      const url = `${
        import.meta.env.VITE_APP_STRAPI_BASE_URL
      }/api/auth/local/register`
      if (
        user.username &&
        user.email &&
        user.password &&
        !emailError &&
        !passwordError
      ) {
        const res = await axios.post(url, user)
        if (!!res) {
          setUser(initialUser)
          navigate("/login")
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className={style.container_signup}>
      <h1 className={style.title}>Sign up</h1>
      <p className={style.signin}>
        Already have an account? <NavLink to="/login">Log in</NavLink>{" "}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          signUp()
        }}
      >
        <div className={style.form_control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            onChange={handleUserChange}
          />
        </div>
        <div className={style.form_control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
          {emailError && <p className={style.error}>{emailError}</p>}
        </div>
        <div className={style.form_control}>
          <label htmlFor="password">Password</label>
          <div className={style.input_wrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
            />
            {showPassword ? (
              <AiFillEye
                className={style.eye}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiFillEyeInvisible
                className={style.eye}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {passwordError && <p className={style.error}>{passwordError}</p>}
        </div>
        <div className={style.form_control_func}>
          <div className={style.checkbox}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a className={style.forgot_password} href="#">
            Forgot password?
          </a>
        </div>
        <button className={style.signup}>Sign up</button>
        <button className={style.signup_google} type="submit">
          <img src={Google} alt="" />
          Sign up with google
        </button>
      </form>
      <p className={style.copyright}>Copyright &copy; 2023 Delizioso </p>
      <Link className={style.nav__logo__circle} to="/">
        D
      </Link>
    </div>
  )
}

export default SignUpForm
