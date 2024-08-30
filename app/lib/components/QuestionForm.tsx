'use client'

import { DynamicTextarea as Textarea } from './DynamicTextarea'
import { AnswerPrompt } from './AnswerPrompt'
import { SendButton } from './SendButton'
import { useFormState } from 'react-dom'
import { createAnswer } from '../services/openai.action'

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createAnswer, '')

  return (
    <form
      className="max-w-3xl m-auto bg-white rounded-l-xl p-4"
      action={dispatch}
    >
      <div className="flex flex-col items-end gap-3">
        <Textarea name="situation" placeholder="고민을 입력해봐!"></Textarea>
        <SendButton />
      </div>
      <div>
        <AnswerPrompt answer={answer} />
      </div>
    </form>
  )
}
