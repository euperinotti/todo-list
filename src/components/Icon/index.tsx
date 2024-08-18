import { SVGAttributes } from 'react'
import { IconsNames, useIcon } from '../../hooks/useIcon'

interface IconProps extends SVGAttributes<any> {
  name: IconsNames
}

export const Icon = ({ name, ...rest }: IconProps) => {
  const { getIconByKeyword } = useIcon()

  const SelectIcon = getIconByKeyword(name)

  return (
    <div>
      <SelectIcon {...rest} />
    </div>
  )
}