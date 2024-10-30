import { GripVerticalIcon } from "lucide-react"
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
  }, [isEditMode, text, textareaRef.current?.offsetHeight])

  if (isEditMode) {
    return (
      <div
        style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px" }}
      >
        <div className="grid cursor-grab place-items-center rounded bg-transparent transition-colors hover:bg-black/10">
          <GripVerticalIcon />
        </div>
        <textarea
          ref={textareaRef}
          className="resize-none overflow-hidden rounded border border-black/20 p-1"
          value={text}
          onChange={handleChange}
          spellCheck={false}
        />
      </div>
    )
  }

  return (
    <div className="markdown border-l border-black/20 p-1 pl-4">
      <Markdown>{text}</Markdown>
    </div>
  )
}

export default Paragraph
