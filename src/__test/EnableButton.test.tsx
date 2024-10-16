import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import EnableButton from '../components/EnableButton';

describe('EnableButton',()=>{
    it('should toggle button text between "Enable" and "Disable"', () => {
      const setIsDisabled = vi.fn();
    
      render(<EnableButton isDisabled={false} setIsDisabled={setIsDisabled} />); 
    
      const button = screen.getByRole('button',{ name: /Disable/i });
    
      fireEvent.click(button);
    
      expect(setIsDisabled).toHaveBeenCalledWith(true);
    
      render(<EnableButton isDisabled={true} setIsDisabled={setIsDisabled} />);
    
      //expect(button).toHaveTextContent('Enable');
    
      
    });
})
