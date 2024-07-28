import { BarChartIcon, BinaryIcon, DiffIcon, GitBranchIcon, GithubIcon, GitlabIcon, GraduationCapIcon, HomeIcon, LogOutIcon, MenuSquareIcon, SchoolIcon, SettingsIcon } from "lucide-react"


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
      <div className="nav__item invert">
        <GraduationCapIcon />
      </div>

      <div className="nav__item">
        <HomeIcon />
      </div>
      <div className="nav__item">
        <SchoolIcon />
      </div>

      <div className="nav__divider grow" />

      <div className="nav__item">
        <SettingsIcon />
      </div>

      <div className="nav__item">
        <LogOutIcon />
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
      <Content />

    </div>
  )
}

export default App