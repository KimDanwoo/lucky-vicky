import { render, screen } from '@testing-library/react';
import { Vicky } from '@/components/index'; // 컴포넌트 경로에 맞게 수정
import '@testing-library/jest-dom';

describe('Vicky Component', () => {
  test('텍스트가 올바르게 렌더링되는지 테스트', () => {
    const text = '안녕하세요, Vicky입니다!';

    render(<Vicky text={text} />);

    // 텍스트가 렌더링되는지 확인
    const displayedText = screen.getByText(text);
    expect(displayedText).toBeInTheDocument();
  });
});
