import React, { useEffect, useState } from "react"
import style from "./menuitem.module.scss"
import StarMobile from "../../../../../../assets/star.svg"
import StarDesktop from "../../../../../../assets/star1.svg"
import AddIcon from "@mui/icons-material/Add"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../../../../control/cartReducer"
import { getProducts } from "../../../../../../api/products"
import useFetch from "../../../../../../hooks/useFetch"
import { useParams } from "react-router-dom"
import Rating from "@mui/material/Rating"
import toast from "react-hot-toast"
const MenuItem = ({
  image,
  title,
  price,
  description,
  rating,
  alt,
  products,
  id
}) => {
  // const id = useParams().id

  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)



  const handleOrder = ()=>{
    dispatch(
      addToCart({
        id: data.id,
        name: data.attributes.name,
        description: data.attributes.description,
        price: data.attributes.price,
        img: data.attributes.image.data.attributes.url,
        quantity
      })
    )
      toast.success("Added to the basket successfully!")
  }


  return (
    <div className={style.container}>
      <img className={style.food_image} src={image} alt="" />
      <h3 className={style.title}>{title}</h3>

      <Rating 
      name="read-only"
      value={Number(rating)}
      readOnly
      precision={0.5}
      />
      {/* <img
        className={style.desktop_star}
        src={StarDesktop}
        alt="Rating of the meal"
      /> */}
      <p className={style.desc}>{description}</p>
      <div className={style.footer}>
        <p className={style.price}>${price}</p>
        <div className={style.button}>
          <AddIcon onClick={handleOrder} />
        </div>
        <button className={style.order} onClick={handleOrder}>
          Order now
        </button>
      </div>
    </div>
  )
}

export default MenuItem
