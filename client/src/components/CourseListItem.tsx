import { Card } from "@/components/ui/card"
import { ICourse } from "@/interfaces"

const CourseListItem = ({ courseData }: { courseData: ICourse }) => {
  return (
    <Card
      className="course bg-white p-3 h-20 flex flex-row items-center gap-3 select-none rounded-3xl hover:cursor-pointer"
    >
      <div className="course__icon bg-red-200 h-full rounded-[12px] aspect-square grid place-items-center text-3xl">
        { courseData.icon }
      </div>
      <div className="course__information">
        <p className="font-bold text-xl">{courseData.name}</p>
        <p className="">by {courseData.author}</p>
      </div>
    </Card>
  )
}

export default CourseListItem