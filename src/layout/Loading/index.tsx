import { memo } from "react";

import { ActivityIndicator } from "Components";

import * as Styles from './styles'

function BaseLoading () {
  return (
    <Styles.Container>
      <ActivityIndicator />
    </Styles.Container>
  )
}

export const Loading = memo(BaseLoading)