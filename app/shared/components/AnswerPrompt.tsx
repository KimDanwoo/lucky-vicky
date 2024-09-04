'use client'

import { useFormStatus } from 'react-dom'
import { Vicky } from 'components/index'

type AnswerPromptProps = {
  answer: string
}

export const AnswerPrompt = ({ answer }: AnswerPromptProps) => {
  const { pending } = useFormStatus()

  return (
    <div className="w-120 min-h-30 bg-white mt-10 rounded-md ">
      {pending ? <Vicky text="원영적 사고로 생각중... 🌟" /> : <Vicky text={answer} />}
    </div>
  )
}
