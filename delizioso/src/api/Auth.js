import { instance } from "./index.js"


export const loginUser = async (username, password) => {
  try {
    const response = await instance.post("/auth/local", {
      identifier: username,
      password: password
    })

    console.log(response.data)
    return response.data // You might want to return something specific based on your needs
  } catch (error) {
    console.error("Error during user registration:", error)
    throw error // You can choose to rethrow the error or handle it in a specific way
  }
}