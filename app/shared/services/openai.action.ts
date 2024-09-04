'use server'

import OpenAI from 'openai'
import { prompts } from 'constants/prompts'

const openAi = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true,
})

export const createAnswer = async (_: any, formData: FormData) => {
  const situation = formData.get('situation') as string
  try {
    const response = await openAi.chat.completions.create({
      model: 'gpt-4',
      messages: [
        ...prompts,
        {
          role: 'user',
          content: situation,
        },
      ],
    })
    return response.choices[0]?.message?.content || ''
  } catch (error) {
    return '오류가 발생했습니다.'
  }
}
