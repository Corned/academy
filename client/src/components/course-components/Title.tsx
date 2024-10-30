import classNames from "classnames"

const Title = (props: { text: string; isEditMode: boolean }) => {
  const classes = classNames("text-3xl font-bold mb-4", {
    "border-b-2 border-red-500": props.isEditMode,
  })

  return (
    <h1 className={classes} contentEditable={props.isEditMode}>
      {props.text}
    </h1>
  )
}

export default Title
