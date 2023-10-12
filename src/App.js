import logo from './logo.svg';
import './App.css';
import PrimerComponente from './componentes/PrimerComponente';
import SegundoComponente from './componentes/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hola</p>
        <PrimerComponente />
        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;
