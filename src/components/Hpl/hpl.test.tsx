import React from 'react';
import { render, screen } from '@testing-library/react';
import Hpl from './hpl';
import '@testing-library/jest-dom';

describe('Hpl', () => {
  it('renders all subcomponents', () => {
    render(<Hpl />);
    
    expect(screen.getByText('Product Title')).toBeInTheDocument();
    expect(screen.getByText('%50')).toBeInTheDocument();
    expect(screen.getByText('Kargo Bedava')).toBeInTheDocument();
    expect(screen.getByText('En Ucuz')).toBeInTheDocument();
    expect(screen.getByText('12312.50 TL')).toBeInTheDocument();
  });
});
