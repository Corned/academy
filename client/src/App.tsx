import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"

const App = () => {
  return (
    <>
      <meta name="theme-color" content="#fcfcff" />
      <div className="mx-auto grid grid-rows-[auto_1fr] gap-40">
        <Navigation />

        <div className="mx-auto flex h-full w-[1200px] flex-row">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
