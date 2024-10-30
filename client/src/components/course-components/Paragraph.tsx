import { useEffect, useRef } from "react"
import Markdown from "react-markdown"

interface ParagraphProps {
  text: string
  isEditMode: boolean
  setValue: (value: string) => void
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  isEditMode,
  setValue,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto" // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Set new height
    }
  }

  useEffect(() => {
    if (isEditMode && textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [isEditMode, text])

  if (isEditMode) {
    return (
      <textarea
        ref={textareaRef}
        className="resize-none overflow-hidden rounded border border-black/20"
        value={text}
        onChange={handleChange}
      />
    )
  }

  return (
    <div className="border-l border-black/20 pl-4">
      <Markdown>{text}</Markdown>
    </div>
  )
}

export default Paragraph
