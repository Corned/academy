import { useEffect, useRef, useState } from "react"
import "./Popupify.css"

const Popupify = ({
  Element,
  PopupElement,
  elementProps,
  popupElementProps,
}: {
  Element: React.ComponentType<any>
  PopupElement: React.ComponentType<any>
  elementProps: any
  popupElementProps: any
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [activated, setActivated] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    setActivated(false)
  }

  useEffect(() => {
    if (isOpen && ref.current && popupRef.current) {
      popupRef.current.style.top = `${ref.current.offsetTop}px`
      popupRef.current.style.left = `${ref.current.offsetLeft}px`
      popupRef.current.style.width = `${ref.current.offsetWidth}px`
      popupRef.current.style.height = `${ref.current.offsetHeight}px`

      setActivated(true)
    }
  }, [isOpen, ref.current, popupRef.current])

  return (
    <>
      <Element
        {...elementProps}
        onClick={handleClick}
        xref={ref}
        hidden={activated}
      />
      {isOpen && (
        <div
          className={activated ? "ActivePopupifyElement" : ""}
          style={{ position: "absolute" }}
          ref={popupRef}
        >
          <PopupElement {...elementProps} />
        </div>
      )}
    </>
  )
}

export default Popupify
