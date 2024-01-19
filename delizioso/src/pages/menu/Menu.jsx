import { useEffect } from "react"
import Nav from "../../layout/nav/Nav"
import Footer from "../../layout/footer/Footer"
import MenuList from "./components/menu_list/MenuList";
import { useLocation } from "react-router-dom"


const Menu = () => {
   const { pathname } = useLocation()
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [pathname])
  return (
    <div>
      <Nav />
      <MenuList />
     
      <Footer />
    </div>
  )
}

export default Menu