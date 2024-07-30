import { BarChartIcon, BinaryIcon, BookAIcon, DiffIcon, GitBranchIcon, GithubIcon, GitlabIcon, GraduationCapIcon, HomeIcon, HouseIcon, LogOutIcon, MenuSquareIcon, SchoolIcon, SettingsIcon } from "lucide-react"


import logo from "./assets/digitalents-logo.jpg"

const Collapsable = () => {
  return (
    <div>

    </div>
  )
}

const NavItem = ({ icon, label }) => {
  return (
    <div className="nav__item">
      { icon }
      { label }
    </div>
  )
}

const Nav = () => {
  return (
    <div className="nav">

      <div className="nav__spacer"></div>

      <div className="nav__header">
        <p>Digitalents Academy</p>
      </div>   
    
      <div className="nav__spacer"></div>
      {/* <p className="nav__title">Main</p> */}

      
      <div className="nav__item">
        <HouseIcon />
        <p>Home</p>
      </div>
      
      <div className="nav__item">
        <GraduationCapIcon />
        <p>Courses</p>
      </div>
      
      <div className="nav__item">
        <BookAIcon />
        <p>Resources</p>
      </div>

      
      <div className="nav__spacer--fill"></div>


      <div className="nav__item">
        <LogOutIcon />
        <p>Log out</p>
      </div>

      <div className="nav__spacer"></div>

    </div>
  )
}

const Content = () => {
  return (
    <div className="content">

    </div>
  )
}

const App = () => {
  return (
    <div className="App">

      <Nav />
      {/* <Content /> */}

    </div>
  )
}

export default App