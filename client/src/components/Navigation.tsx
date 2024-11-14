import { HouseIcon, GraduationCapIcon, BookAIcon } from "lucide-react"
//import { useState } from "react"

interface INavigationItem {
  icon?: React.ReactNode
  text?: string
  alignLeft?: boolean
}

const NavigationItem = ({ icon, text, alignLeft = false }: INavigationItem) => {
  return (
    <div
      className="flex select-none flex-row gap-2 rounded-lg px-3 py-2 font-bold transition-all
        hover:cursor-pointer hover:bg-black/10"
      style={{ marginLeft: alignLeft ? "auto" : "0px" }}
    >
      {icon}
      {text && <span className="hidden sm:inline">{text}</span>}
    </div>
  )
}

const MobileNavigation = () => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="sticky mb-auto flex w-[220px] flex-col gap-1 rounded-3xl border-2
        border-[#edf1f2] p-4"
    >
      {/* <NavigationItem icon={isOpen ? <MenuIcon /> : <XIcon />} alignLeft /> */}

      <div
        className="mb-5 flex cursor-pointer select-none flex-col items-center gap-2 rounded-lg p-2
          text-center transition-all hover:bg-black/10"
      >
        <GraduationCapIcon size={64} />
        <p
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Rubik" }}
        >
          Academy
        </p>
      </div>

      <NavigationItem icon={<HouseIcon />} text="Home" />
      <NavigationItem icon={<GraduationCapIcon />} text="Courses" />
      <NavigationItem icon={<BookAIcon />} text="Resources" />
    </div>
  )
}
const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky flex flex-row items-center border-0 border-[#edf1f2] bg-transparent py-5">
      {/* <NavigationItem icon={isOpen ? <MenuIcon /> : <XIcon />} alignLeft /> */}

      <p
        className="ml-10 mr-6 flex select-none flex-row items-center gap-4 text-3xl"
        style={{ fontFamily: "Instrument Serif" }}
      >
        Open Course Tool
      </p>
    </div>
  )
}

export default Navigation
