import { SVGAttributes } from "react"
import SmallNoteIcon from "../assets/small-note-icon.svg"

export type IconsNames = "smallNote"

const icons = {
  smallNote: (props: SVGAttributes<any>) => <SmallNoteIcon {...props} />
}

export const useIcon = () => {
  const getIconByKeyword = (name: IconsNames) => {
    return icons[name]
  }

  return { getIconByKeyword }
}