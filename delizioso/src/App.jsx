import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
// import "./App.css"

import Home from "./pages/home/Home"
import Menu from "./pages/menu/Menu"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import LogIn from "./pages/login/LogIn"
import SignUp from "./pages/signup/SignUp"
import NotFound from "./pages/NotFound/NotFound"
import { ThemeProvider } from "styled-components"
import Order from "./pages/order/Order"
import Checkout from "./pages/checkout/Checkout"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotal } from "./control/cartReducer"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import AuthRoutes from "./routes/AuthRoutes"
import toast, { Toaster } from "react-hot-toast"
import { closeModal, openModal } from "./control/modalReducer"
import PropTypes from "prop-types"
import Overlay from "./components/overlay/Overlay";



function App() {

   const { cartItems, isOpen } = useSelector((store) => ({
     cartItems: store.cart.cartItems,
     isOpen: store.modal.isOpen
   }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

   const handleModalClose = () => {
     dispatch(closeModal())
   }

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px"
    },
    media: { mobile: "768px", tab: "998px" }
  }


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/checkout"
              element={
                <>
                  <Checkout
                    isModalOpen={isOpen}
                    openModal={() => dispatch(openModal())}
                  />
                  {isOpen && <Overlay onClick={handleModalClose} />}
                </>
              }
            />
          </Route>

          <Route
            path="/"
            element={
              <>
                <Home
                  isModalOpen={isOpen}
                  openModal={() => dispatch(openModal())}
                />
                {isOpen && <Overlay onClick={handleModalClose} />}
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Menu
                  isModalOpen={isOpen}
                  openModal={() => dispatch(openModal())}
                />
                {isOpen && <Overlay onClick={handleModalClose} />}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About
                  isModalOpen={isOpen}
                  openModal={() => dispatch(openModal())}
                />
                {isOpen && <Overlay onClick={handleModalClose} />}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact
                  isModalOpen={isOpen}
                  openModal={() => dispatch(openModal())}
                />
                {isOpen && <Overlay onClick={handleModalClose} />}
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <Order
                  isModalOpen={isOpen}
                  openModal={() => dispatch(openModal())}
                />
                {isOpen && <Overlay onClick={handleModalClose} />}
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </ThemeProvider>
  )
}

export default App
