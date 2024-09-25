import { BinaryIcon, BookTypeIcon, CodeIcon, GithubIcon } from "lucide-react"
import CourseListItem from "@/components/CourseListItem"  

import { ICourse } from "@/interfaces"
import Navigation from "@/components/Navigation"

const courseData: ICourse[] = [
  {
    name: "HTML & CSS",
    author: "Academy",
    description: "Learn the basics of HTML and CSS.",
    icon: <CodeIcon size={32}/>,
  },
  {
    name: "JavaScript",
    author: "Academy",
    description: "Learn the basics of JavaScript.",
    icon: <BinaryIcon size={32}/>,
  },
  {
    name: "GitHub & Version Control",
    author: "Academy",
    description: "Learn how to use GitHub and version control.",
    icon: <GithubIcon size={32}/>,
  },
  {
    name: "React",
    author: "Academy",
    description: "Learn how to build single-page applications with React.",
    icon: <BookTypeIcon size={32}/>,
  },
  {
    name: "HTML & CSS",
    author: "Academy",
    description: "Learn the basics of HTML and CSS.",
    icon: <CodeIcon size={32}/>,
  },
  {
    name: "JavaScript",
    author: "Academy",
    description: "Learn the basics of JavaScript.",
    icon: <BinaryIcon size={32}/>,
  },
  {
    name: "GitHub & Version Control",
    author: "Academy",
    description: "Learn how to use GitHub and version control.",
    icon: <GithubIcon size={32}/>,
  },
  {
    name: "React",
    author: "Academy",
    description: "Learn how to build single-page applications with React.",
    icon: <BookTypeIcon size={32}/>,
  },
  {
    name: "HTML & CSS",
    author: "Academy",
    description: "Learn the basics of HTML and CSS.",
    icon: <CodeIcon size={32}/>,
  },
  {
    name: "JavaScript",
    author: "Academy",
    description: "Learn the basics of JavaScript.",
    icon: <BinaryIcon size={32}/>,
  },
  {
    name: "GitHub & Version Control",
    author: "Academy",
    description: "Learn how to use GitHub and version control.",
    icon: <GithubIcon size={32}/>,
  },
  {
    name: "React",
    author: "Academy",
    description: "Learn how to build single-page applications with React.",
    icon: <BookTypeIcon size={32}/>,
  },
]

const App = () => {
  return (
    <div className="mt-20 flex flex-row w-max mx-auto ">
      <Navigation />

      <div className="flex w-[600px] flex-col gap-4 p-2">
        <p className="text-[48px] font-extrabold mb-4">Hey! 👋</p>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-2xl font-bold">Welcome to Academy!</p>
          <p>This is the home page of Academy, the new learning platform for web development.</p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-2xl font-bold">Courses</p>

          <div className="course-list w-full flex flex-col gap-3 rounded-3xl">
            {
              courseData.map((course, index) => <CourseListItem courseData={course} key={`${course.name}-${index}`} />)
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default App