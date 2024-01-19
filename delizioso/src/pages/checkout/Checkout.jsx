import { useEffect } from "react"
import Nav from "../../layout/nav/Nav"
import Footer from "../../layout/footer/Footer"
import CheckOutForm from "./components/checkout_form/CheckOutForm"
import { useLocation } from "react-router-dom"



const Checkout = () => {
   const { pathname } = useLocation()
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [pathname])
  return (
    <div>
      <Nav />
      <CheckOutForm />
      <Footer />
    </div>
  )
}

export default Checkout
