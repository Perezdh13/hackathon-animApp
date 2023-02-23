import { render, screen } from '@testing-library/react';
import Contact from './components/Contact';

test('test contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});
