import { render, screen } from '@testing-library/react';
import App from './App';


test('renders dashboard', () => {
  const { getByText } = render(<App />);
  const selectOption = getByText("Carbon footprint dashboard");
  expect(selectOption).toBeTruthy();  
});

test('renders button export chrt', () => {
  const { getByText } = render(<App />);
  const button = getByText("Export chart");
  expect(button).toBeTruthy();
});
