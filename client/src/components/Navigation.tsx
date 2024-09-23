import { HouseIcon, MenuIcon, GraduationCapIcon, BookAIcon, LogOutIcon } from "lucide-react"

interface INavigationItem {
  icon: React.ReactNode
  text?: string
}

const NavigationItem = ({ icon, text }: INavigationItem) => {
  return (
    <div className="rounded-lg py-2 px-2 hover:cursor-pointer hover:bg-black/10 flex flex-row gap-2 font-bold select-none">
      { icon }
      <span className="hidden sm:inline">{ text }</span>
    </div>
  )
}

const Navigation = () => {
  return (
    <div className="flex flex-col gap-1 w-[220px] px-4 h-full border-r shadow-xl pt-5">

      <NavigationItem icon={<HouseIcon />} text="Home" />
      <NavigationItem icon={<GraduationCapIcon />} text="Courses" />
      <NavigationItem icon={<BookAIcon />} text="Resources" />

    </div>
  )
}

export default Navigation