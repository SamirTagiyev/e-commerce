import { useEffect } from "react"
import Nav from "../../layout/nav/Nav";
import Footer from "../../layout/footer/Footer"
import ContactPage from './components/contact_page/ContactPage';
import { useLocation } from "react-router-dom"



const Contact = () => {
   const { pathname } = useLocation()
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [pathname])
  return (
    <div>
        <Nav/>
        <ContactPage/>
        <Footer/>
    </div>
  )
}

export default Contact