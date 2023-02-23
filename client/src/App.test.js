import { render, screen } from '@testing-library/react';
import Contact from './components/Contact';
import Cards from './components/Cards';
import AboutMe from './components/AboutMe';
import AddAnimals from './components/AddAnimals';
import Carrousel from './components/Carrousel';


test('test contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Nombre/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Contact without crashing', () => {
  const div = document.createElement('div');
  render(<Contact />, div);
});

it('renders Cards without crashing', () => {
  const div = document.createElement('div');
  render(<Cards />, div);
});

it('renders AboutMe without crashing', () => {
  const div = document.createElement('div');
  render(<AboutMe />, div);
});

it('renders AddAnimals without crashing', () => {
  const div = document.createElement('div');
  render(<AddAnimals />, div);
});

it('renders Carrousel without crashing', () => {
  const div = document.createElement('div');
  render(<Carrousel />, div);
});