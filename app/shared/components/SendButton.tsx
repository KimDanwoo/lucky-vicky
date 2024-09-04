'use client'

import { useFormStatus } from 'react-dom'
import { Spinner } from 'components/index'

export const SendButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="border w-36 h-12 ml-2 bg-black text-white rounded-3xl text-center"
    >
      {pending ? <Spinner /> : '러키비키 얍!✨'}
    </button>
  )
}
