import { QuestionForm } from '@/components/QuestionForm'

export default function Home() {
  return (
    <main className="min-h-screen pl-6 pr-6 pt-6 h-full">
      <div>
        <h1 className="text-center text-6xl mb-4">🍀LUCKY VICKY🍀</h1>
        <div className="mb-10 m-auto text-center text-gray-500">
          🍀 당신의 고민을 가볍게 만들어줄 수 있는 서비스 🍀
        </div>
      </div>
      <QuestionForm />
    </main>
  )
}
