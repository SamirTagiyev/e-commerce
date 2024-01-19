import React, { useState, useEffect } from "react"
import style from "./greatest_chef.module.scss"
import Chef from "../chef/Chef.jsx"
import Button from "../../../../components/button/Button.jsx"
import Betran from "../../../../assets/chef/betran.svg"
import Ferry from "../../../../assets/chef/ferry.svg"
import Ferry2 from "../../../../assets/chef/ferry2.svg"
import Iswan from "../../../../assets/chef/iswan.svg"

const images = [Betran, Ferry, Iswan, Ferry2]
const names = ["Betran Komar", "Ferry Sauwi", "Iswan Dracho", "Ferry Sauwi"]
const description = ["Head Chef", "Chef", "Chef", "Chef"]

const GreatestChef = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768) // Adjust the breakpoint as needed
    }

    // Initial check on mount
    handleResize()

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={style.container}>
      <h1 className={style.title}>Our greatest chef</h1>
      <div className={style.grid}>
        {images.slice(0, isMobile ? 3 : images.length).map((image, index) => (
          <Chef
            key={index}
            image={image}
            name={names[index]}
            description={description[index]}
          />
        ))}
      </div>
      {isMobile && (
        <div className={style.desktop_view_button}>
          <Button text={"View All"} />
        </div>
      )}
    </div>
  )
}

export default GreatestChef
