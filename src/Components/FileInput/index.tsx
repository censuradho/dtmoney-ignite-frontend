import React, { useRef } from 'react'

import { Input } from 'Components'

import * as Styles from './styles'

interface FileInputProps {
  label: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function BaseFileInput (props: FileInputProps) {
  const ref = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    ref?.current?.click()
  }

  return (
    <Styles.Container>
      <Input
        type="file"
        onChange={props.onChange}
        ref={ref}
      />
      <Styles.Button onClick={handleClick}>{props.label}</Styles.Button>
    </Styles.Container>
  )
}

export const FileInput = React.memo(BaseFileInput)