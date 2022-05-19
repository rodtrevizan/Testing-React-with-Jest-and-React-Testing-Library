import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct inicial color', () => {
  render(<App />);

  // find an element with the role of button and text 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the button to have the background red
  expect(colorButton).toHaveStyle( {backgroundColor: 'red'});

  // click the button
  fireEvent.click(colorButton);

  // expect the button to have the background blue
  expect(colorButton).toHaveStyle( {backgroundColor: 'blue'});

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');
});
