import { BarChartIcon, BinaryIcon, DiffIcon, GitBranchIcon, GithubIcon, GitlabIcon, GraduationCapIcon, HomeIcon, HouseIcon, LogOutIcon, MenuSquareIcon, SchoolIcon, SettingsIcon } from "lucide-react"


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

{/*       <div className="nav__item invert">
        <GraduationCapIcon />
        <p>Academy</p>
      </div>   */}    
      
      
      <div className="nav__item">
        <HouseIcon />
        <p>Home</p>
      </div>
      
      <div className="nav__item">
        <HouseIcon />
        <p>Courses</p>
      </div>
      
      <div className="nav__item">
        <HouseIcon />
        <p>My Profile</p>
      </div>


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