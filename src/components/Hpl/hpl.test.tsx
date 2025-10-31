import React from 'react';
import { render, screen } from '@testing-library/react';
import Hpl from './hpl';
import '@testing-library/jest-dom';

describe('Hpl', () => {
  it('renders all subcomponents', () => {
    render(<Hpl />);
    
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('%10')).toBeInTheDocument();
    expect(screen.getAllByText('Kargo Bedava').length).toBe(2);
    expect(screen.getByText('Yeni Ürün')).toBeInTheDocument();
    expect(screen.getByText('100.00 TL')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
