import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';


test('button has correct inicial color', () => {
  const { getByRole, debug } = render(<App />);
 
  // To check what jest-dom is rendered, debug is always a good idea.
  // And here you will see that button is rendering with style="background-color: gray;"
  debug();


  // find an element with the role of button and text 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // expect the button to have the background red
  expect(colorButton).toHaveStyle('backgroundColor: MediumVioletRed');

  // click the button
  fireEvent.click(colorButton);

  // expect the button to have the background Midnight Blue
  expect(colorButton).toHaveStyle( {backgroundColor: 'MidnightBlue'});

  // expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('disable button on first checkbox click and enable on second click', () => {
  render(<App />);

  // expect the button starts out enabled
    const colorButton = screen.getByRole('button');
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

  // expect the button to turn gray if button is disabled, backgroundColor exact match not partial match
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle( {backgroundColor: 'gray' }); // passes ok
    expect(colorButton).toHaveStyle( {backgroundColor: 'fay' }); // passes but should not
    expect(colorButton).toHaveStyle( {backgroundColor: 'dfhdhsdh' }); // passes but should not
    expect(colorButton).toHaveStyle( {backgroundColor: 'red' }); // expected error
    expect(colorButton).toHaveStyle( {backgroundColor: 'MidnightBlue' }); // expected error

  // expect the button to turn red or blue if checkbox is unchecked
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
})

describe('Replace Camel With Spaces', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
    
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});