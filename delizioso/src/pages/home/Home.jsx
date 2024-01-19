import { useEffect } from "react"
import Nav from "../../layout/nav/Nav"
import Header from "./components/header/Header"
import Delizioso from "./components/delizioso/Delizioso"
import PopularMenu from "./components/popular_menu/PopularMenu"
import Reserve from "./components/reserve/Reserve"
import GreatestChef from "./components/greatest_chef/GreatestChef"

import Customers from "./components/customers/Customers"
import WorkHours from "./components/work_hours/WorkHours"
import Footer from "../../layout/footer/Footer"
import { useLocation } from "react-router-dom"

const Home = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div>
      <Nav />
      <Header />
      <Delizioso />
      <PopularMenu />
      <Reserve />
      <GreatestChef />
      <Customers />
      <WorkHours />
      <Footer />
    </div>
  )
}

export default Home
