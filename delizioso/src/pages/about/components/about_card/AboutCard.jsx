import React from "react"
import style from "./about_card.module.scss"

//#region IMAGES
import Restaurant from "../../../../assets/about/our_restaurant.png"
import Restaurant2 from "../../../../assets/about/our_restaurant2.svg"
import Ismail from "../../../../assets/about/ismail.svg"
import Top from "../../../../assets/about/quatation_top.svg"
import Bottom from "../../../../assets/about/quatation_bottom.svg"
//#endregion

const AboutCard = () => {
  return (
    <div className={style.container}>
      <div className={style.restaurant_info}>
        <div className={style.about_mobile_title}>
          <span className={style.color}>Our</span> restaurant
        </div>

        <div className={style.about_card_image_wrapper}>
          <img className={style.about_card_image} src={Restaurant} alt="" />
        </div>

        <div className={style.about_card_desc}>
          <p className={style.desktop_title}>
            <span className={style.color}>Our </span> <br />
            restaurant
          </p>
          <p className={style.about_card_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>
      <div className={style.restaurant_service}>
        <p className={style.service_text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>
        <div className={style.service_image_wrapper}>
          <img className={style.service_image} src={Restaurant2} alt="" />
        </div>
      </div>
      <div className={style.owner}>
        <p className={style.title}>
          <span className={style.color}>Owner</span> & <br /> Executive Chef
        </p>
        <img className={style.chef_picture} src={Ismail} alt="" />
        <div className={style.right}>
          <p className={style.text_title_desktop}>
            <span className={style.color}>Owner </span>& <br /> Executive Chef
          </p>
          <p className={style.chef_name}>Ismail Marzuki</p>
          <div className={style.text}>
            <img className={style.top} src={Top} alt="" />
            <p className={style.text_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img className={style.bottom} src={Bottom} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
