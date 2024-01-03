import './index.css';
import ColorDisplay from './ColorDisplay.js';
import ColorPicker from './ColorPicker.js';
import {useState} from 'react';

function App() {
  const [newColor, setNewColor] = useState('')
  return (
    <div className="App">
        <ColorDisplay
          newColor = {newColor}/>   
        <ColorPicker
          newColor = {newColor}
          setNewColor = {setNewColor}/>      
    </div>
  );
}

export default App;
