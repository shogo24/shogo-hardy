import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name on the page', () => {
  render(<App />);
  const name = screen.getByTestId('student-name');
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent('Shogo Hardy');
});