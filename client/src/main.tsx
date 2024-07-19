import React from "react"
import ReactDOM from "react-dom/client"

import "./globals.css"
import "./index.css"

import { Badge } from "./components/ui/badge"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
