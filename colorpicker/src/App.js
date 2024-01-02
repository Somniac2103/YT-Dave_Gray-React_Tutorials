import './index.css';
import ColorDisplay from './ColorDisplay.js';
import ColorPicker from './ColorPicker.js';

function App() {
  return (
    <div className="App">
      <header className="content">
        <ColorDisplay/>   
        <ColorPicker/>      
      </header>
    </div>
  );
}

export default App;
