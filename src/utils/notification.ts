import { toast, TypeOptions }  from 'react-toastify'


interface Options {
  type?: TypeOptions,
}

  export function openNotification (message: string, options?: Options) {
  return toast(message, {
    position: 'top-right',
    type: options?.type || 'success',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
