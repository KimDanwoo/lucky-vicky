import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DynamicTextarea } from '@/components/DynamicTextarea'

describe('DynamicTextarea Component', () => {
  test('초기에 렌더링이 테스트', () => {
    render(
      <DynamicTextarea
        className="extra-class"
        name="test-name"
        placeholder="고민을 입력해봐!"
      />
    )

    const textarea = screen.getByPlaceholderText('고민을 입력해봐!')
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('rows', '1')
    expect(textarea).toHaveValue('')
    expect(textarea).toHaveClass('extra-class')
    expect(textarea).toHaveAttribute('name', 'test-name')
  })

  test('textarea 문자 입력 테스트', async () => {
    render(<DynamicTextarea placeholder="고민을 입력해봐!" />)

    const textarea = screen.getByPlaceholderText('고민을 입력해봐!')
    await userEvent.type(textarea, '배가 고픈데 밥이 없어...')
    expect(textarea).toHaveValue('배가 고픈데 밥이 없어...')
  })
})
