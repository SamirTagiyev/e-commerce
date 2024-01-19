import { useEffect } from "react"
import Nav from "../../layout/nav/Nav"
import Footer from "../../layout/footer/Footer"
import AboutCard from './components/about_card/AboutCard'
import { useLocation } from "react-router-dom"


const About = () => {
   const { pathname } = useLocation()
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [pathname])
  return (
    <div>
      <Nav />
       <AboutCard />
      <Footer />
    </div>
  )
}

export default About