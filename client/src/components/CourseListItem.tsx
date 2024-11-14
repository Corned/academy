import { ICourse } from "@/interfaces"
import { ChevronRight } from "lucide-react"

const CourseListItem = ({ courseData }: { courseData: ICourse }) => {
  return (
    <div
      className="course flex select-none flex-row items-center gap-4 rounded-3xl border-2
        border-[#edf1f2] bg-white p-4 transition-colors hover:cursor-pointer
        hover:bg-neutral-100"
    >
      <div
        className="course__icon grid aspect-square h-full place-items-center rounded-full
          bg-[#ff613f] text-3xl"
      >
        {courseData.icon}
      </div>
      <div className="course__information">
        <p className="text-xl font-semibold">{courseData.name}</p>
        <p className="text-neutral-400">by {courseData.author}</p>
      </div>
      <div className="ml-auto flex items-center">
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  )
}

export default CourseListItem
