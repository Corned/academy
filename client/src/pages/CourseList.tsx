import CourseListItem from "@/components/CourseListItem"
import { BinaryIcon, BookTypeIcon, CodeIcon, GithubIcon } from "lucide-react"

import { ICourse } from "@/interfaces"

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
  return (
    <div className="flex w-[600px] flex-col gap-5">
      <h1 className="font text-[72px] font-extrabold">Hey Oliver! 👋</h1>

      <p className="text-justify">
        This is the home page of Academy, the new learning platform for web
        development. Here, you'll find comprehensive courses, tutorials, and
        projects designed to take your coding skills to the next level.
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Courses</p>

        <div className="course-list flex w-full flex-col gap-3">
          {courseData.map((course, index) => (
            <CourseListItem
              courseData={course}
              key={`${course.name}-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseList
