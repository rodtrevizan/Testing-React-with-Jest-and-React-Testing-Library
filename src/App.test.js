import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

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

test('disable button on first checkbox click and enable on second click', () => {
  render(<App />);

  // expect the button starts out enabled
    const colorButton = screen.getByRole('button', {  name: 'Change to blue' });
    expect(colorButton).toBeEnabled();

  // expect the checkbox starts out uncheked
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
    expect(checkbox).not.toBeChecked();

  // expect the button to disable if checkbox is checked
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

  // expect the button to enable if checkbox is unchecked
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();

  // expect the button to turn gray if button is disabled
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle( {backgroundColor: 'gray'});

  // expect the button to turn red or blue if checkbox is unchecked
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle( {backgroundColor: 'red' || 'blue'});
})

describe('Replace Camel With Spaces', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('RedGreen')).toBe('Red Green');
  });
    
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('RedGreenBlue')).toBe('Red Green Blue');
  });
});