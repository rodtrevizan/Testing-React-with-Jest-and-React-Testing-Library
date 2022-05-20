import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct inicial color', () => {
  render(<App />);
 
    const colorButton = screen.getByRole('button', { name: 'Gray button' });

    expect(colorButton).toHaveStyle("background-color: gray"); // suceeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'gray', display: 'inline-block' }); // suceeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'gray' }); // suceeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'fay' }); // suceeds but should fail
    expect(colorButton).toHaveStyle( {backgroundColor: 'dfhdhsdh' }); // suceeds but should fail
    expect(colorButton).not.toHaveStyle( {backgroundColor: 'red' }); // suceeds
    expect(colorButton).toHaveStyle( {backgroundColor: 'red' }); // failed
})