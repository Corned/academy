import React from "react"
import ReactDOM from "react-dom/client"

import "@/globals.css"
import "@/index.css"
import "@/markdown.scss"

import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DemoPage from "@/pages/Demo"
import CourseList from "./pages/CourseList"
import Root from "./pages/root"

const router = createBrowserRouter([
  {
    path: "/hello",
    index: true,
    element: <Root />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
