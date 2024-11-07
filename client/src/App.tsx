import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <meta name="theme-color" content="#fcfcff" />
      <h1>App</h1>
      <div className="mt-20 flex flex-row px-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
