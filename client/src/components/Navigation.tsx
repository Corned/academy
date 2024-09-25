import { HouseIcon, MenuIcon, GraduationCapIcon, BookAIcon, LogOutIcon, XIcon } from "lucide-react"
import { useState } from "react"

interface INavigationItem {
  icon?: React.ReactNode
  text?: string
  alignLeft?: boolean
}

const NavigationItem = ({ icon, text, alignLeft = false }: INavigationItem) => {
  return (
    <div
      className="rounded-lg py-2 px-2 hover:cursor-pointer hover:bg-black/10 flex flex-row gap-2 font-bold select-none transition-all"
      style={{ marginLeft: alignLeft ? "auto" : "0px" }}
    >
      { icon }
      {
        text && (
          <span className="hidden sm:inline">{ text }</span>
        )
      }
    </div>
  )
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white sticky top-20 flex flex-col gap-1 w-[220px] p-4 m-6 mb-auto rounded-xl border">

      {/* <NavigationItem icon={isOpen ? <MenuIcon /> : <XIcon />} alignLeft /> */}

      <div className="flex flex-col items-center gap-2 text-center p-2 mb-5 hover:bg-black/10 rounded-lg transition-all select-none cursor-pointer">
        <GraduationCapIcon size={64} />
        <p className="font-bold text-3xl uppercase" style={{ fontFamily: "Rubik" }}>Academy</p>
      </div>

      <NavigationItem icon={<HouseIcon />} text="Home" />
      <NavigationItem icon={<GraduationCapIcon />} text="Courses" />
      <NavigationItem icon={<BookAIcon />} text="Resources" />
    </div>
  )
}

export default Navigation