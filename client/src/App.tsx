import { BinaryIcon, BookTypeIcon, CodeIcon, GithubIcon } from "lucide-react"
import CourseListItem from "@/components/CourseListItem"  

import { ICourse } from "@/interfaces"
import Navigation from "@/components/Navigation"

const courseData: ICourse[] = [
  {
    id: 2,
    name: "HTML & CSS",
    author: "Academy",
    description: "Learn the basics of HTML and CSS.",
    icon: <CodeIcon size={32}/>,
  },
  {
    id: 3,
    name: "JavaScript",
    author: "Academy",
    description: "Learn the basics of JavaScript.",
    icon: <BinaryIcon size={32}/>,
  },
  {
    id: 4,
    name: "GitHub & Version Control",
    author: "Academy",
    description: "Learn how to use GitHub and version control.",
    icon: <GithubIcon size={32}/>,
  },
  {
    id: 5,
    name: "React",
    author: "Academy",
    description: "Learn how to build single-page applications with React.",
    icon: <BookTypeIcon size={32}/>,
  },
]

const App = () => {
  return (
    <div className="App mx-auto grid grid-cols-2 gap-6 h-full" style={{ gridTemplateColumns: "auto 1fr" }}>
      <Navigation />

      <div className="flex flex-col gap-4 p-2 max-w-[600px] mt-5">
        <p className="text-[48px] font-extrabold mb-4">Hey! 👋</p>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-2xl font-bold">Welcome to Academy!</p>
          <p>This is the home page of Academy, the new learning platform for web development.</p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-2xl font-bold">Courses</p>

          <div className="course-list w-full flex flex-col gap-2 rounded-3xl">
            {
              courseData.map((course) => <CourseListItem courseData={course} key={course.id} />)
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default App