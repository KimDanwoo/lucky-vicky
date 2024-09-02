import { render, screen } from '@testing-library/react';
import { AnswerPrompt } from '@/components/index';
import { useFormStatus } from 'react-dom';

// useFormStatus 훅을 직접 모킹하기
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(), // useFormStatus 훅을 모킹
}));

describe('AnswerPrompt', () => {
  it('pending이 true일 때 로딩 상태를 보여준다', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });

    render(<AnswerPrompt answer="정답입니다!" />);

    expect(screen.getByText('원영적 사고로 생각중... 🌟')).toBeInTheDocument();
  });

  it('pending이 false일 때 답변을 보여준다', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });

    render(<AnswerPrompt answer="정답입니다!" />);

    expect(screen.getByText('정답입니다!')).toBeInTheDocument();
  });
});
