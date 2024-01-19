import style from "./order.module.scss";
import Nav from "../../layout/nav/Nav"
import Footer from "../../layout/footer/Footer"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Order_List from "./component/Order_List";

const Order = () => {
   const { pathname } = useLocation()
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [pathname])
  return (
    <div className={style.container}>
      <Nav />
      <Order_List />
      <Footer />
    </div>
  )
}

export default Order