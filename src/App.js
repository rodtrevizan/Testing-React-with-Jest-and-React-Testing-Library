import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
 return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const [buttonDisabled, setButtonDisabled] = useState(false);


  return (
    <div>
      <button   
        style={{backgroundColor: buttonDisabled ? 'gray' : buttonColor}}
        // style={{backgroundColor: 'gray'}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input 
        type="checkbox" 
        id='disable-button-checkbox' 
        onChange={(e) => setButtonDisabled(e.target.checked)} 
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
