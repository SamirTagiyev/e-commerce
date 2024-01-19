import { instance } from "./index.js"

export const getProducts = async ({ page, name }) => {
  const response = await instance.get(
    `/products?populate=*&pagination[page]=${page}&pagination[pageSize]=6&filters[categories][name][$eq]=${name}`
  )
  return response.data
}

export const getUsers = async () => {
  const response = await instance.get("/users")
  return response.data
}

export const registerUser = async (username, password) => {
  try {
    const response = await instance.post("/users", {
      username: username,
      password: password
    })

    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error during user registration:", error)
    throw error
  }
}

export const getCategories = async () => {
  const response = await instance.get("/categories")
  return response.data
}

export const getRating = async ({ page, name }) => {
  const response = await instance.get(
    `/products?populate=*&pagination[page]=${page}&pagination[pageSize]=6&filters[rating][$eq]=5&filters[categories][name][$eq]=${name}`
  )
  return response.data
}



export const getDiscount = async ({ name }) => {
  const response = await instance.get(`/vouchers?filters[name][$eq]=${name}`)
  return response.data
}
