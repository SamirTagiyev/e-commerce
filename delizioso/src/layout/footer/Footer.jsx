import style from "./footer.module.scss"
import { NavLink } from "react-router-dom"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <div className={style.column}>
          <div className={style.column1}>
            <div className={style.logo}>
              <div className={style.circle}>D</div>
              <p>
                <span className={style.first}>Delizi</span>
                <span className={style.second}>oso</span>
              </p>
            </div>
            <p className={style.text}>
              Viverra gravida morbi egestas facilisis tortor netus non duis
              tempor.
            </p>
            <div className={style.socials}>
              <div className={style.social}>
                <TwitterIcon />
              </div>
              <div className={style.social}>
                <InstagramIcon />
              </div>
              <div className={style.social}>
                <FacebookIcon />
              </div>
            </div>
          </div>
          <div className={style.column2}>
            <div className={style.pages}>
              <p className={style.lists}>Page</p>

              <li className={style.list}>
                <NavLink to="/">Home </NavLink>
              </li>

              <li className={style.list}>
                <NavLink to="/menu">Menu </NavLink>
              </li>

              <li className={style.list}>
                <NavLink to="/order">Order online </NavLink>
              </li>

              <li className={style.list}>Catering</li>

              <li className={style.list}>
                <NavLink to="/reservation">Reservation </NavLink>
              </li>
            </div>
            <div className={style.informations}>
              <p className={style.lists}>Information</p>

              <li className={style.list}>
                <NavLink to="/contact">Contact us </NavLink>
              </li>

              <li className={style.list}>Testimonial</li>

              <li className={style.list}>Event</li>
            </div>
            <div className={style.connects}>
              <p className={style.lists}>Get in touch</p>
              <a href="">
                <li>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
              </a>
              <a href="">
                <li>delizioso@gmail.com</li>
              </a>
              <a href="">
                <li className={style.list}>+123 4567 8901</li>
              </a>
            </div>
          </div>
        </div>

        <div className={style.copyright}>
          <p className={style.copy}>Copyright &copy; 2023 Delizioso</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
