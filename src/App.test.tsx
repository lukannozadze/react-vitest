// ButtonComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('ButtonComponent', () => {
  it('should have a button with text "Click me"', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /click me/i });
    
    expect(button).toBeInTheDocument();
  });
});
