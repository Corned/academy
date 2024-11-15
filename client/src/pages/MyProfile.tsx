import CourseListItem from "@/components/CourseListItem"
import { BinaryIcon, BookTypeIcon, CodeIcon, GithubIcon } from "lucide-react"

import { ICourse } from "@/interfaces"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import Popupify from "@/components/Popupify"

let courseData: ICourse[] = [
  {
    name: "HTML & CSS",
    author: "Academy",
    description: "Learn the basics of HTML and CSS.",
    icon: <CodeIcon size={32} color="white" />,
  },
  {
    name: "JavaScript",
    author: "Academy",
    description: "Learn the basics of JavaScript.",
    icon: <BinaryIcon size={32} color="white" />,
  },
  {
    name: "GitHub & Version Control",
    author: "Academy",
    description: "Learn how to use GitHub and version control.",
    icon: <GithubIcon size={32} color="white" />,
  },
  {
    name: "React",
    author: "Academy",
    description: "Learn how to build single-page applications with React.",
    icon: <BookTypeIcon size={32} color="white" />,
  },
]

const CourseList = () => {
  const [clickedElement, setClickedElement] = useState(-1)

  const handleClick = (index: number) => {
    setClickedElement(index)
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="font text-[72px] font-extrabold">Hey Oliver! 👋</h1>

      <p className="text-justify max-w-[600px]">
        Welcome to your profile! Here you can see all the courses you've
        created, as well as the courses you're participating in. You can also
        manage your profile settings and preferences.
      </p>

      <div className="flex flex-col gap-2">
        <h2 className="text-[48px] font-bold">Courses</h2>

        <div className="grid grid-cols-2 gap-2">
          {courseData.map((course, index) => (
            <CourseListItem
              courseData={course}
              onClick={() => handleClick(index)}
              key={`${course.name}-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseList
