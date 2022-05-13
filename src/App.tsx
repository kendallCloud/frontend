import React from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>LABORATORIO 4</p>
        <Form/>
      </header>
      <footer style={{color:"#61dafb"}}>
        <h1>Realizado por:</h1>
        <a href="mailto:kendall.granados.barrantes@est.una.ac.cr">Kendall Granados Barrantes</a><br />
        <a href="mailto:esteban.fallas.brenes@est.una.ac.cr">Esteban Fallas Brenes</a><br/>
        <a href="mailto:alberth.gamboa.alfaro@est.una.ac.cr">Alberth Gamboa Alfaro</a><br/>
      </footer>

    </div>
  );
}

export default App;
