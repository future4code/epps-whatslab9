import logo from './logo.svg';
import './App.css';
import React from 'react';
import form from './Componentes/formulario'
function App() {
  return (
  <body>
    <div className={'div1'}>
      <div className={'div2'}></div>
      <div className={'boxform'}>
        <form className={'form'}> 
          <input placeholder='nome usuario'></input>
          <input placeholder='mensagem' className={'mensagem'}></input>
          <button onClick={'enviarMensagem'}>Enviar</button>         
        </form>
      </div>
    </div>
  </body>
  );
    
}

export default App;


