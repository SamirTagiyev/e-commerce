import { useEffect, useState } from "react"
import style from "./popular_menu.module.scss"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { getCategories, getRating } from "../../../../api/products.js"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
import CategoriesBtn from "../../../../components/categories_btn/CategoriesBtn.jsx"
import MenuItem from "../../../menu/components/menu_list/components/menu_item/MenuItem.jsx"

import { Pagination } from "antd"
import { useSearchParams, useParams } from "react-router-dom"

const PopularMenu = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(searchParams.get("page") || 1)
  const [category, setCategory] = useState([])
  const [populars, setPopulars] = useState([])
  
  const [total, setTotal] = useState("")
   const [buttonValue, setButtonValue] = useState(
     searchParams.get("category") || "All category"
   )
  useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories()
      setCategory(data.data)
    }
    getAllCategories()
  }, [])

  useEffect(() => {
    async function getPopular() {
      const data = await getRating({ page, name: buttonValue })
      setPopulars(data)
      setTotal(data.meta.pagination.pageCount)
    }
    
    getPopular()
    window.scrollTo(0, 1900)
  }, [page, buttonValue])

  console.log(total)

  return (
    <div className={style.container}>
      <h1 className={style.title}>Our popular menu</h1>
      <div className={style.option_scroll}>
        <div className={style.categories_btn}>
          {category.length > 0 ? (
            category.map(({ id, attributes }) => (
              <CategoriesBtn
                key={id}
                categories={attributes?.name}
                setButtonValue={setButtonValue}
                setPage={setPage}
                buttonValue={buttonValue}
              />
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
      <div className={style.grid_menu}>
        {populars && populars.data ? (
          populars.data.map(({ id, attributes }) => (
            <MenuItem
              key={id}
              id={id}
              image={`${import.meta.env.VITE_UPLOAD_IMG}${
                attributes?.image?.data?.attributes?.url
              }`}
              title={attributes?.name}
              price={attributes?.price}
              description={attributes?.description}
              rating={attributes?.rating}
              alt={attributes?.image?.data?.attributes?.alt || "Product Image"}
            />
          ))
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <div className={style.pages}>
        {/* <button className={style.arrow}>
          <ArrowBackIosNewIcon />
        </button>
        <div className={style.page_number}>
          <button className={style.page}>1</button>
          <button className={style.page}>2</button>
          <button className={style.page}>3</button>
          <button className={style.dots}>
            <MoreHorizIcon />
          </button>
        </div>
        <button className={style.arrow}>
          <ArrowForwardIosIcon />
        </button> */}
        <Pagination
          defaultCurrent={1}
          total={total * 10}
          onChange={(value) => setPage(value)}
          current={parseInt(page)}
        />
      </div>
    </div>
  )
}

export default PopularMenu
