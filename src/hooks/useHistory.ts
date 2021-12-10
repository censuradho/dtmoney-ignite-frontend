import { createBrowserHistory } from 'history'
import { useRef } from 'react'

export function useHistory (window: Window) {
  const hsitory = useRef(createBrowserHistory({ window }))
  return hsitory.current
}

