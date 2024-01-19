import React, { useState } from "react"
import style from "./login_form.module.scss"
import Google from "../../../../assets/google.svg"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { storeUser } from "../../../../helper"
import axios from "axios"
import toast from "react-hot-toast"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const initialUser = { password: "", identifier: "" }

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state ? location.state.from : undefined

  const handleLogin = async () => {
    const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/auth/local`
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user)
        if (data.jwt) {
          storeUser(data)
          toast.success("Logged in successfully!")
          setUser(initialUser)
          navigate(from ? from : "/")
        } else {
          toast.error("Invalid credentials!")
        }
        console.log(data)
      }
    } catch (error) {
      console.log(error.message)
      // toast.error("An error occurred while logging in")
      if (error.response && error.response.status === 429) {
        // Display a user-friendly message for rate-limiting
        toast.error("Too many login attempts. Please try again later.")
      } else {
        // Display a generic error message for other errors
        toast.error("An error occurred while logging in")
      }
    }
  }

  const handleUserChange = ({ target }) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Login</h1>
        <p className={style.signup}>
          Don`t have an account? <NavLink to="/signup">Sign up</NavLink>{" "}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="identifier"
              value={user.identifier}
              onChange={handleUserChange}
              autoComplete="off"
            />
          </div>
          <div className={style.form_control}>
            <label htmlFor="password">Password</label>
            <div className={style.input_wrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                value={user.password}
                onChange={handleUserChange}
                autoComplete="off"
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
          <button className={style.login}>Log in</button>
          <button className={style.login_google} type="submit">
            <img src={Google} alt="" />
            Log in with google
          </button>
        </form>
        <p className={style.copyright}>Copyright &copy; 2023 Delizioso </p>
        <Link className={style.nav__logo__circle} to="/">
          D
        </Link>
      </div>
    </>
  )
}

export default LoginForm
