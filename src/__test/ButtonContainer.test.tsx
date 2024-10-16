// ButtonComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import ButtonsContainer from '../components/ButtonsContainer';

describe('ButtonContainer',()=>{
    it('should have three button with text "Button" with numbers', () => {
      render(<ButtonsContainer isDisabled />);
      const buttonOne = screen.getByRole('button', { name: /Button 1/i });
      const buttonTwo = screen.getByRole('button', { name: /Button 2/i });
      const buttonThree = screen.getByRole('button', { name: /Button 3/i });
  
      
      expect(buttonOne).toBeInTheDocument();
      expect(buttonTwo).toBeInTheDocument();
      expect(buttonThree).toBeInTheDocument();
  
    });
})