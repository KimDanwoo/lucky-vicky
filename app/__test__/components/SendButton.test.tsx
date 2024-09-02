import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SendButton } from '@/components/SendButton'

// useFormStatus 훅을 직접 모킹하기
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(), // useFormStatus 훅을 모킹
}))

describe('SendButton', () => {
  test('pending이 true일 때 Spinner 컴포넌트가 렌더링된다', () => {
    // useFormStatus가 pending을 true로 반환하도록 설정
    const { useFormStatus } = require('react-dom')
    useFormStatus.mockReturnValue({ pending: true })

    render(<SendButton />)

    // 버튼이 비활성화되어 있는지 확인
    expect(screen.getByRole('button')).toBeDisabled()

    // 스피너가 렌더링되었는지 확인
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  test('pending이 false일 때 버튼 텍스트가 "러키비키 얍!✨"로 렌더링된다', () => {
    // useFormStatus가 pending을 false로 반환하도록 설정
    const { useFormStatus } = require('react-dom')
    useFormStatus.mockReturnValue({ pending: false })

    render(<SendButton />)

    // 버튼이 활성화되어 있는지 확인
    expect(screen.getByRole('button')).not.toBeDisabled()

    // 버튼 텍스트가 올바르게 렌더링되었는지 확인
    expect(screen.getByRole('button')).toHaveTextContent('러키비키 얍!✨')
  })
})
