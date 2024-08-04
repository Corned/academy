import { BarChartIcon, BinaryIcon, BookAIcon, DiffIcon, GitBranchIcon, GithubIcon, GitlabIcon, GraduationCapIcon, HomeIcon, HouseIcon, LogOutIcon, MenuIcon, MenuSquareIcon, SchoolIcon, SettingsIcon } from "lucide-react"
import Markdown from "react-markdown"


const Nav = () => {
  return (
    <div className="nav">

      <div className="nav__item nav__item--narrow ml-auto">
        <MenuIcon />
      </div>

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

      <div className="nav__item reverse">
        <LogOutIcon />
        <p>Log out</p>
      </div>

    </div>
  )
}



const Content = () => {

  const md = `
# Welcome to Digitalents Academy!

Hello! This is the home page of Digitalents Academy, the new learning platform for x, y and z.

This platform allows you to:

* Learn the basics of HTML, CSS and JavaScript
  * Learn the basics of HTML, CSS and JavaScript
    * Learn the basics of HTML, CSS and JavaScript
      * Learn the basics of HTML, CSS and JavaScript
* Get into developing Single Page Applications with React.js
`

  return (
    <div className="content markdown">
      {/* <p className='text-7xl font-bold'>Hello John!</p> */}
      <Markdown>{ md }</Markdown>
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