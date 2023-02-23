import { render, screen } from '@testing-library/react';
import Contact from './components/Contact';
import Carrousel from './components/Carrousel';
import renderer from 'react-test-renderer';

test('test contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Carousel component correctly', () => {
  const component = render.create(
    <Carrousel />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
