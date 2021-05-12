import logo from './logo.svg';
import './App.css';
import Forecast from '../src/components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Dali Vali</h1>
       <Forecast/>
      </header>
    </div>
  );
}

export default App;
