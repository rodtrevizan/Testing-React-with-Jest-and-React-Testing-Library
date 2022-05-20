import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct inicial color', () => {
  render(<App />);
 
    const colorButton = screen.getByRole('button', { name: 'Gray button' });

    expect(colorButton).toHaveStyle("background-color: gray"); // succeeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'gray', display: 'inline-block' }); // succeeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'gray' }); // succeeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'fay' }); // suceeds but should fail
    expect(colorButton).toHaveStyle( {backgroundColor: 'dfhdhsdh' }); // succeeds but should fail
    expect(colorButton).not.toHaveStyle( {backgroundColor: 'red' }); // succeeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'red' }); // failed
})