import useBoolean from "hooks/useBoolean";
import { Loading } from "layout/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refrashToken } from "services/auth";
import { actionRefrashToken } from "store/ducks/auth";

import { setAuthHeader } from "utils/setAuthHeader";

interface UserProviderProps {
  children: JSX.Element
}

function UserProvider ({ children }: UserProviderProps) {
  const auth = useSelector(value => value.auth)

  const [isLoading, toggleLoading] = useBoolean(!auth.token)

  const dispatch = useDispatch()

  useEffect(() => {
  if (auth.token) return;

  refrashToken().then(({ data }) => {
    setAuthHeader(data.token)

    dispatch(actionRefrashToken(data))
  }).catch(console.log).finally(() => toggleLoading())
  }, [auth.token, dispatch, toggleLoading])

  return isLoading ? <Loading /> : children
}

export default UserProvider