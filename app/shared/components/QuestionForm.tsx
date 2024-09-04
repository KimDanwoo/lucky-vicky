'use client'

import { SendButton, AnswerPrompt, DynamicTextarea as Textarea } from 'components/index'
import { useFormState } from 'react-dom'
import { createAnswer } from 'services/openai.action'

export const QuestionForm = () => {
  const [answer, dispatch] = useFormState(createAnswer, '')

  return (
    <form className="max-w-3xl m-auto min-h-1 bg-white rounded-xl p-4" action={dispatch}>
      <div className="flex flex-col items-end gap-4">
        <Textarea name="situation" placeholder="고민을 입력해봐!"></Textarea>
        <SendButton />
      </div>
      <div>
        <AnswerPrompt answer={answer} />
      </div>
    </form>
  )
}
