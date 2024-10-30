import { GripVerticalIcon } from "lucide-react"

const Title = (props: {
  text: string
  isEditMode: boolean
  setValue: (newValue: string) => void
}) => {
  if (props.isEditMode) {
    return (
      <div
        style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px" }}
      >
        <div className="grid cursor-grab place-items-center rounded bg-transparent transition-colors hover:bg-black/10">
          <GripVerticalIcon />
        </div>
        <input
          className={"rounded border border-black/20 p-1 text-2xl font-bold"}
          value={props.text}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </div>
    )
  }

  return <h1 className={"p-1 text-2xl font-bold"}>{props.text}</h1>
}

export default Title
