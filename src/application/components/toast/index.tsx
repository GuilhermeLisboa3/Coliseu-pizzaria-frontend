'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  message: string
}

export const Toast: React.FC<Props> = ({ message }): JSX.Element => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    closeButton: false,
    progress: undefined,
    theme: 'colored'
  })
  return (
  <ToastContainer/>
  )
}
