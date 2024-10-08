import ExemploUseState from './components/ExemploUseState';
import ExemploUseEffect from './components/ExemploUseEffect';

import { useState } from 'react';

function App() {
  const [variavelMudar, setVariavelMudar] = useState(false);
  
  return (
    <>
      <h2>Exemplo useState</h2>
      <ExemploUseState/>

      <h2>Exemplo de uso do useEffect (abra o console)</h2>
      <button onClick={() => {setVariavelMudar(!variavelMudar)}}>exibir/ocultar exemplo useEffect</button>
      <br/>
      {
        variavelMudar ? <ExemploUseEffect/> : ""
      }
    </>
  )
}

export default App
