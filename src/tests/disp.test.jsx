import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { VowelShift } from '../assets/Algos';

describe('Vowel Shift Component', () => {
  it('should render with initial count of 0', () => {
    render(<VowelShift textIn = {""} setTextOut ={() => {}} decrypt = {false}/>);

    expect(screen.getByLabelText('Shift Vowel:')).toBeInTheDocument();
  });
});