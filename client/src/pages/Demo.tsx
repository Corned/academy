import { Switch } from "@/components/ui/switch"
import { useState } from "react"

import Title from "@/components/course-components/Title"
import Paragraph from "@/components/course-components/Paragraph"

const CourseView = ({
  editMode,
  setSerializedCourseContent,
  serializedCourseContent,
}: {
  editMode: boolean
  serializedCourseContent: any
  setSerializedCourseContent: any
}) => {
  const deserializedCourseContent = serializedCourseContent.map((item: any) => {
    const setValueF = (newValue: string) => {
      setSerializedCourseContent((prevState: any) => {
        const newState = [...prevState]
        const index = newState.findIndex((item2) => item.id === item2.id)
        newState[index].text = newValue
        return newState
      })
    }

    switch (item.type) {
      case "title":
        return (
          <Title text={item.text} isEditMode={editMode} setValue={setValueF} />
        )
      case "paragraph":
        return (
          <Paragraph
            text={item.text}
            isEditMode={editMode}
            setValue={setValueF}
          />
        )
    }
  })

  return [deserializedCourseContent]
}

const DemoPage = () => {
  const [serializedCourseContent, setSerializedCourseContent] = useState([
    {
      id: crypto.randomUUID(),
      type: "title",
      text: "Course Title",
    },
    {
      id: crypto.randomUUID(),
      type: "paragraph",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur tincidunt, nunc nisi ultricies nisi, euismod ultrices nisl nisi euismod. Donec euismod, nisl eget consectetur tincidunt, nunc nisi ultricies nisi, euismod ultrices nisl nisi euismod.",
    },
    {
      id: crypto.randomUUID(),
      type: "paragraph",
      text: "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed euismod, nisl eget consectetur tincidunt, nunc nisi ultricies nisi, euismod ultrices nisl nisi euismod. Donec euismod, nisl eget consectetur tincidunt, nunc nisi ultricies nisi, euismod ultrices nisl nisi euismod.",
    },
  ])

  return (
    <div className="flex flex-col gap-4 p-10">
      <p className="mb-4 text-[48px] font-extrabold">
        Demo Page for Course Maker 🚀
      </p>

      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <CourseView
            editMode={false}
            serializedCourseContent={serializedCourseContent}
            setSerializedCourseContent={setSerializedCourseContent}
          />
        </div>
        <div className="flex flex-col gap-4">
          <CourseView
            editMode={true}
            serializedCourseContent={serializedCourseContent}
            setSerializedCourseContent={setSerializedCourseContent}
          />
        </div>
      </div>
    </div>
  )
}

export default DemoPage
