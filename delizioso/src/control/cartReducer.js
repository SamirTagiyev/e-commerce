import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item)=> item.id === action.payload.id)
      if(item) {
        item.quantity += action.payload.quantity
      } else{
        state.products.push(action.payload)
      }
    },
    clearCart: (state) => {
      state.products = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.products = state.products.filter((item) => item.id !== itemId)
    },
    increase: (state, action) => {
      const itemId = action.payload
      const cartItem = state.products.find((item) => item.id === itemId)
      cartItem.quantity += 1
    },
    decrease: (state, action) => {
      const itemId = action.payload
      const cartItem = state.products.find((item) => item.id === itemId)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1
      }
    },
    calculateTotal: (state) => {
      let total = 0
      let quantity = 0
      state.products.forEach((item) => {
        total += item.quantity * item.price
        quantity += item.quantity
      })
      state.quantity = quantity
      state.total = total
    },
    removeProduct: (state, action) => {
      const itemId = action.payload
      state.products = state.products.filter((item) => item.id !== itemId)
    }
  }
})

export const {
  addToCart,
  removeProduct,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotal
} = cartSlice.actions

export default cartSlice.reducer
