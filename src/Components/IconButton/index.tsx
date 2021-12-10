import { memo, ComponentProps, ButtonHTMLAttributes } from "react"

import { Icon } from 'Components'

import * as Styles from './styles'

type IconProps = Pick<ComponentProps<typeof Icon>, 'name'>
type ButtonRootProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>

interface IconButtonProps extends ButtonRootProps {
  icon: IconProps;
  size?: number
}

function BaseIconButton ({ icon, size, ...props}: IconButtonProps) {
  return (
    <Styles.Button {...props} _height={size} _width={size}>
      <Icon {...icon} />
    </Styles.Button>
  )
}

export const IconButton = memo(BaseIconButton)