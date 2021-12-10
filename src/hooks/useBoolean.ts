import { useCallback, useState } from "react"

function useBoolean (initialState = false): [boolean, () => void] {
  const [isTrue, setIsTrue] = useState(initialState)

  const toggle = useCallback(() => {
    setIsTrue(prevState => !prevState)
  }, [])

    return [isTrue, toggle]
}

export default useBoolean