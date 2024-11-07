import React from "react"
import ReactDOM from "react-dom/client"

import "@/globals.css"
import "@/index.css"
import "@/markdown.scss"

import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DemoPage from "@/pages/Demo"
import CourseList from "./pages/CourseList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/courselist",
        element: <CourseList />,
      },
      {
        path: "/demo",
        element: <DemoPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
