import { memo }  from 'react'

import { icons } from './icons'

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName
  size?: number
  color?: string
}

function BaseIcon ({ name, size = 25, color }: IconProps) {
  const Component = icons[name]

  return <Component size={size} color={color} />
}

export const Icon = memo(BaseIcon)
