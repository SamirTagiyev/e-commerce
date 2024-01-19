import ReactDOM from "react-dom/client"
import React from "react"
import App from "./App.jsx"
import "./index.scss"
import { persistor, store } from "./store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
