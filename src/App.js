import React, { useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [variable, setVariable] = useState("Click en  Verificar Alertas");


  const mostrarAlertas=()=>{
    
    fetch("api/imprimirTexto")
    .then(response => response.json())
    .then(json => {
        if(json.data)
          setVariable(json.data)
        else setVariable("No esta imprimiendo las variables. Verifique el server en http://[ipaddress]/api/imprimirTexto")

    });


   
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {variable}
        </p>
        <button className="btn btn-sm btn-outline-info" onClick={mostrarAlertas }> Verificar alertas</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
