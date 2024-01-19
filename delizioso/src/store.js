import cartReducer from "../src/control/cartReducer"
import authSlice from "../src/control/authReducer"
import { configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import modalReducer from "./control/modalReducer"
import addressReducer from "./control/addressReducer";


const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer)
const persistedAuthReducer = persistReducer(persistConfig, authSlice)

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    name: persistedAuthReducer,
    modal: modalReducer,
    address: addressReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export let persistor = persistStore(store)