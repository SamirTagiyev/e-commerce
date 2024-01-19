import { useEffect, useState } from "react"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import style from "./menu_list.module.scss"
import CategoriesBtn from "../../../../components/categories_btn/CategoriesBtn.jsx"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
import MenuItem from "./components/menu_item/MenuItem.jsx"
import { getProducts, getCategories } from "../../../../api/products.js"
import { Pagination } from "antd"
import { useSearchParams } from "react-router-dom"
const MenuList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(searchParams.get("page") || 1)
  const [total, setTotal] = useState("")
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [buttonValue, setButtonValue] = useState(
    searchParams.get("category") || "All category"
  )
  const [scrollPosition, setScrollPosition] = useState(0)
  const [resetProducts, setResetProducts] = useState(false)

  useEffect(() => {
    if (scrollPosition != -1) window.scrollTo(0, scrollPosition)
    setScrollPosition(-1)
  }, [products])

  useEffect(() => {
    async function getAllProducts() {
      const isMobile = window.innerWidth < 768
      const data = await getProducts({ page, name: buttonValue })
      if (!isMobile) {
        setProducts(data.data)
      }
      if (isMobile) {
       
        if (resetProducts) {
          setProducts(data.data)
        } else {
          setProducts((prevData) => [...prevData, ...data.data])
        }
        setResetProducts(false)
      }
      window.scrollTo(0, 0)
      setTotal(data.meta.pagination.pageCount)
    }
    searchParams.set("page", page)
    searchParams.set("category", buttonValue)

    setSearchParams(searchParams)

    getAllProducts()
  }, [page, buttonValue])

  useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories()
      setCategory(data.data)

    }
    getAllCategories()
  }, [])

  const query = searchParams.get("category")
  useEffect(() => {
    if (query) {
      
      setButtonValue(query)
    }
  }, [query])

  const isLastPage = page >= total

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Menu</h1>
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
                  setResetProducts={setResetProducts}
                />
              ))
            ) : (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </div>
        </div>

        <div className={style.grid_menu}>
          {products ? (
            products.map(({ id, attributes }) => (
              <MenuItem
                id={id}
                products={products}
                key={id}
                image={`${import.meta.env.VITE_UPLOAD_IMG}${
                  attributes?.image?.data?.attributes?.url
                }`}
                title={attributes?.name}
                price={attributes?.price}
                description={attributes?.description}
                rating={attributes?.rating}
                alt={
                  attributes?.image?.data?.attributes?.alt || "Product Image"
                }
              />
            ))
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>

        {/* <div className={style.pages}>
        <button className={style.arrow}>
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
        </button>
      </div> */}
        <div className={style.pages}>
          <Pagination
            total={total * 10}
            onChange={(value) => setPage(value)}
            current={parseInt(page)}
          />
        </div>
      </div>

      {!isLastPage && (
        <button
          className={style.mobile_show_more}
          onClick={() => {
            setScrollPosition(window.scrollY)
            setPage((prevPage) => +prevPage + 1)
          }}
        >
          Show more
        </button>
      )}
    </>
  )
}

export default MenuList
