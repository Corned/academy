import { ICourse } from "@/interfaces"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const CourseListItem = ({
  courseData,
  onClick,
}: {
  courseData: ICourse
  onClick: any
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className="course flex select-none flex-row items-center gap-4 rounded-3xl border-2
          border-[#edf1f2] bg-white p-4 transition-colors hover:cursor-pointer
          hover:bg-neutral-100"
        onClick={handleClick}
      >
        <div
          className="course__thumbnail grid aspect-square place-items-center rounded-xl bg-[#ff613f]
            h-full border-red-500 text-3xl"
        >
          {courseData.icon}
        </div>
        <div className="course__information w-full flex flex-col h-full gap-2">
          <p className="text-2xl font-semibold" style={{ fontFamily: "Rubik" }}>
            {courseData.name}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-400">{courseData.description}</p>
          </div>
          <div className="block w-full h-2 rounded-full bg-neutral-200 mt-auto overflow-hidden">
            <div
              className="block w-full h-full bg-neutral-400"
              style={{ width: `${Math.random() * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <h3 className="text-[48px]">GitHub & Version Control</h3>
            <DialogDescription className="text-justify">
              This course covers the basics of Git and GitHub and how to use
              them effectively. This course is designed to help you become a
              more efficient and effective developer.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CourseListItem
