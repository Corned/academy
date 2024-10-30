import React from "react"
import ReactDOM from "react-dom/client"

import "./globals.css"
import "./index.css"
import "./markdown.scss"

import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
