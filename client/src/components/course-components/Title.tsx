const Title = (props: {
  text: string
  isEditMode: boolean
  setValue: (newValue: string) => void
}) => {
  if (props.isEditMode) {
    return (
      <input
        className={"rounded border border-black/20 text-2xl font-bold"}
        value={props.text}
        onChange={(e) => props.setValue(e.target.value)}
      />
    )
  }

  return <h1 className={"text-2xl font-bold"}>{props.text}</h1>
}

export default Title
